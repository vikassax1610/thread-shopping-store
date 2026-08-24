import { Check } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

export function ToastDisplay() {
  const { toasts } = useToast();

  return (
    <div className="toast-stack">
      {toasts.map((toast) => (
        <div className="toast" key={toast.id}>
          <Check size={16} />
          {toast.message}
        </div>
      ))}
    </div>
  );
}
