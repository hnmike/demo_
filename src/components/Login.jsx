import React, { useState } from 'react';
import { useLogin } from '../api/userApi';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login.mutateAsync({ username, password });
      onSuccess();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={login.isLoading}>
        {login.isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default Login;