import React from 'react';
import AuthLoginForm from '@/components/auth/auth-login-form'
import { sleep } from '@/lib/sleep';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const ParallalLoginDialog = async () => {
  await sleep(2000);
  return (
    <>
      <AuthLoginForm />
    </>
  )
}

export default ParallalLoginDialog