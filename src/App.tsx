import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { ToastDisplay } from './components/layout/ToastDisplay';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CheckoutProvider } from './context/CheckoutContext';
import { ToastProvider } from './context/ToastContext';
import { AppRoutes } from './routes/AppRoutes';
import AIAssistant from "./ai-assistant-compnents/ai-assistant/AIAssistant";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <CheckoutProvider>
              <ToastProvider>
                <MainLayout>
                  <AppRoutes />
                </MainLayout>
                <ToastDisplay />
                <AIAssistant />
              </ToastProvider>
            </CheckoutProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
