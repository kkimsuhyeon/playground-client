'use client';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { useLoginMutation } from '@/queries/auth';
import { Pharos } from '@/svg/PharosLogo';

function LoginContainer() {
  const { mutate: requestLogin, isPending } = useLoginMutation({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestLogin({ id: '123', password: '123' });
  };

  return (
    <div>
      <Pharos />
      <form onSubmit={handleSubmit}>
        <Input />
        <Input />
        <Button type='submit' className='flex w-full justify-center'>
          {isPending ? <Loader2 className='animate-spin' /> : '로그인'}
        </Button>
      </form>
    </div>
  );
}

export default LoginContainer;
