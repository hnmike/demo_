import React, { useState } from 'react';
import { useSignup } from '../api/userApi';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Signup = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup.mutateAsync({ username, email, password });
      onSuccess();
    } catch (error) {
      console.error('Signup failed:', error);
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={signup.isLoading}>
        {signup.isLoading ? 'Signing up...' : 'Sign Up'}
      </Button>
    </form>
  );
};

export default Signup;