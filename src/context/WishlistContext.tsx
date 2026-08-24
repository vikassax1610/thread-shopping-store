import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/constants';

interface WishlistContextType {
  wishlistItems: number[];
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useLocalStorage<number[]>(STORAGE_KEYS.WISHLIST, []);

  const addToWishlist = (productId: number) => {
    setWishlistItems((old) => (old.includes(productId) ? old : [...old, productId]));
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((old) => old.filter((id) => id !== productId));
  };

  const toggleWishlist = (productId: number) => {
    setWishlistItems((old) => (old.includes(productId) ? old.filter((id) => id !== productId) : [...old, productId]));
  };

  const isInWishlist = (productId: number): boolean => {
    return wishlistItems.includes(productId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
