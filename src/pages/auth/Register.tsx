import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { validateEmail, validatePassword, validatePasswordMatch, validateFullName, validatePhoneNumber } from '../../utils/validation';

export function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateFullName(name)) {
      setError('Please enter your full name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (!validatePhoneNumber(mobile)) {
      setError('Please enter a valid phone number');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!validatePasswordMatch(password, confirmPassword)) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    const success = await register({ name, email, mobile, password });
    setLoading(false);

    if (success) {
      addToast('Account created successfully');
      navigate('/account');
    } else {
      setError('Failed to create account');
    }
  };

  return (
    <div className="container page narrow">
      <div className="page-intro compact">
        <p className="eyebrow">Join us</p>
        <h1>Create your account</h1>
      </div>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label>
          Full name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </label>
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
          Mobile number
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="+91 98765 43210"
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
        <label>
          Confirm password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••"
            required
          />
        </label>
        {error && <p style={{ color: 'var(--forest)', fontSize: '12px', margin: '10px 0' }}>{error}</p>}
        <button type="submit" className="button dark full" disabled={loading}>
          {loading ? 'Creating account...' : 'Create account'} {!loading && <ArrowRight size={16} />}
        </button>
        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '12px' }}>
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
}
