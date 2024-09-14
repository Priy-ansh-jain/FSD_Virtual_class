import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';  // API function for sign up

const AdminSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ name, email, password });
      if (response.message === 'User created successfully') {
        navigate('/admin/signin');
      }
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <h1>Admin Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default AdminSignUp;
