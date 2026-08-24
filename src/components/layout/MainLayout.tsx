import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-shell">
      <Header />
              <p className="text-2xl text-center py-2 text-white font-bold bg-red-500">This a demo store to showcase the agent workflow</p>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
