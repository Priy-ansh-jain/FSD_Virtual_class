import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';  // API function for login

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      if (response.token) {
        // Redirect to dashboard after successful login
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h1>Admin Sign In</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default AdminSignIn;
