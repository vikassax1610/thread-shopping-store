import { ReactNode } from 'react';
import { ShoppingBag } from 'lucide-react';

interface EmptyProps {
  title: string;
  text: string;
  children?: ReactNode;
  icon?: ReactNode;
}

export function Empty({ title, text, children, icon }: EmptyProps) {
  return (
    <div className="empty">
      <div className="empty-icon">{icon || <ShoppingBag />}</div>
      <h2>{title}</h2>
      <p>{text}</p>
      {children}
    </div>
  );
}
