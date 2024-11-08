'use client';

import React from 'react';
import Input from './input';
import { signup } from '@/app/(auth)/signup/action';
import { useFormState, useFormStatus } from 'react-dom';

export default function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <div className=' border flex flex-col p-8 max-w-md w-full'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold '>Create an account</h1>
        <p className='text-sm text-gray-500 '>
          Join our 100% free creative network
        </p>
      </div>
      <form action={action} className='flex flex-col space-y-2 mt-4'>
        <div className='flex flex-col'>
          <label htmlFor='name'>Name</label>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
          />
          {state?.errors?.name && (
            <p className='text-red-500 text-sm'>{state.errors.name}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
          />
          {state?.errors?.email && (
            <p className='text-red-500 text-sm'>{state.errors.email}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
          />
          {state?.errors?.password && (
            <p className='text-red-500 text-sm'>{state.errors.password}</p>
          )}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='bg-black text-white py-2 rounded-md'
    >
      {pending ? 'Sign up...' : 'Sign up'}
    </button>
  );
}
