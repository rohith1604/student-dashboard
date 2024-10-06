import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Login({ onLogin }) {
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (usn === '21IS080' && password === 'ROH160104') {
      onLogin();
      setError('');
    } else {
      setError('Invalid USN or password');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="usn" className="block text-sm font-medium text-gray-700">USN</label>
          <input
            id="usn"
            type="text"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            placeholder="Enter your USN"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-500">Forgot your password? Contact the administrator.</p>
    </div>
  );
}