import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { validateEmail, validatePassword } from '../../utils/validation';
import { DEMO_CREDENTIALS } from '../../utils/constants';

export function LoginPage() {
  const [email, setEmail] = useState(DEMO_CREDENTIALS.email);
  const [password, setPassword] = useState(DEMO_CREDENTIALS.password);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    const success = await login(email, password);
    setLoading(false);

    if (success) {
      addToast('Login successful');
      navigate('/account');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container page narrow">
      <div className="page-intro compact">
        <p className="eyebrow">Welcome back</p>
        <h1>Login to your account</h1>
      </div>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            required
          />
        </label>
        {error && <p style={{ color: 'var(--forest)', fontSize: '12px', margin: '10px 0' }}>{error}</p>}
        <p className="demo-note">
          Demo credentials: {DEMO_CREDENTIALS.email} / {DEMO_CREDENTIALS.password}
        </p>
        <button type="submit" className="button dark full" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'} {!loading && <ArrowRight size={16} />}
        </button>
        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '12px' }}>
          Don't have an account? <Link to="/register">Create one</Link>
        </div>
      </form>
    </div>
  );
}
