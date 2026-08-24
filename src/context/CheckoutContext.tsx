import { createContext, ReactNode, useState } from 'react';
import { Address } from './AuthContext';

interface CheckoutContextType {
  checkoutStep: number;
  setCheckoutStep: (step: number) => void;
  contact: { email: string; mobile: string } | null;
  setContact: (contact: { email: string; mobile: string }) => void;
  selectedAddress: Address | null;
  setSelectedAddress: (address: Address | null) => void;
  paymentMethod: string | null;
  setPaymentMethod: (method: string) => void;
  otpVerified: boolean;
  setOtpVerified: (verified: boolean) => void;
  orderNumber: string | null;
  setOrderNumber: (number: string) => void;
  resetCheckout: () => void;
}

export const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [contact, setContact] = useState<{ email: string; mobile: string } | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const resetCheckout = () => {
    setCheckoutStep(1);
    setContact(null);
    setSelectedAddress(null);
    setPaymentMethod(null);
    setOtpVerified(false);
    setOrderNumber(null);
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkoutStep,
        setCheckoutStep,
        contact,
        setContact,
        selectedAddress,
        setSelectedAddress,
        paymentMethod,
        setPaymentMethod,
        otpVerified,
        setOtpVerified,
        orderNumber,
        setOrderNumber,
        resetCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
