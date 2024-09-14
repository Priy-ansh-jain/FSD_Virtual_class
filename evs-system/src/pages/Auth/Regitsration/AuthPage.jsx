import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../../api/auth';  // API functions for login and signup

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const response = await signup({ name, email, password });
        if (response.message === 'User created successfully') {
          navigate('/signin');  // Redirect to sign-in page or dashboard
        }
      } else {
        const response = await login({ email, password });
        if (response.token) {
          if (response.role === 'admin') {
            navigate('/admin/dashboard');
          } else if (response.role === 'teacher') {
            navigate('/teacher/classes');
          } else if (response.role === 'student') {
            navigate('/student/courses');
          }
        }
      }
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button onClick={() => setIsSignUp(false)} className="text-blue-500">
                Sign In
              </button>
            </>
          ) : (
            <>
              Dont have an account?{' '}
              <button onClick={() => setIsSignUp(true)} className="text-blue-500">
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
