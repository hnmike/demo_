import React, { useState } from 'react';
import { useCurrentUser, useUpdateProfile } from '../api/userApi';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const UserProfile = () => {
  const { data: user, isLoading } = useCurrentUser();
  const updateProfile = useUpdateProfile();
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile.mutateAsync({ username, email });
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" disabled={updateProfile.isLoading}>
        {updateProfile.isLoading ? 'Updating...' : 'Update Profile'}
      </Button>
    </form>
  );
};

export default UserProfile;