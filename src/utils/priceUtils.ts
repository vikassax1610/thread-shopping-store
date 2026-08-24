import { CURRENCY_SYMBOL, FREE_SHIPPING_THRESHOLD, DEFAULT_SHIPPING_COST, TAX_PERCENTAGE } from './constants';

export const formatCurrency = (amount: number): string => {
  return `${CURRENCY_SYMBOL}${amount.toLocaleString('en-IN')}`;
};

export const calculateShipping = (subtotal: number): number => {
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : DEFAULT_SHIPPING_COST;
};

export const calculateTax = (subtotal: number): number => {
  return Math.round(subtotal * (TAX_PERCENTAGE / 100));
};

export const calculateTotal = (subtotal: number, couponDiscount = 0): number => {
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  return subtotal + shipping + tax - couponDiscount;
};

export const applyDiscount = (price: number, discountPercent: number): number => {
  return Math.round(price * (1 - discountPercent / 100));
};
