import { createContext, ReactNode } from 'react';
import { Product } from '../data/products';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/constants';

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size?: string, color?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, change: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  coupon: string | null;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(STORAGE_KEYS.CART, []);
  const [coupon, setCoupon] = useLocalStorage<string | null>(STORAGE_KEYS.CART + '-coupon', null);

  const addToCart = (product: Product, size = 'M', color = 'Olive') => {
    setCartItems((old) => {
      const found = old.find((item) => item.product.id === product.id && item.size === size);
      return found
        ? old.map((item) => (item === found ? { ...item, quantity: item.quantity + 1 } : item))
        : [...old, { product, quantity: 1, size, color }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((old) => old.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, change: number) => {
    setCartItems((old) =>
      old.map((item) => (item.product.id === productId ? { ...item, quantity: Math.max(1, item.quantity + change) } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const applyCoupon = (code: string): boolean => {
    // Demo coupon validation
    if (code.toUpperCase() === 'WELCOME10') {
      setCoupon(code);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        applyCoupon,
        removeCoupon,
        coupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
