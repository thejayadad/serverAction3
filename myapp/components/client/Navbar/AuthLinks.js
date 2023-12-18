'use client'
import React from 'react';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
    const { data: session } = useSession();

  return (
    <div className='flex items-center gap-4'>
        {
            session ? (
                <div className='flex items-center gap-6'>
                <span>{session.user.email}</span>
                <span onClick={signOut}>LogOut</span>


                </div>
            ) : (
                <div className='flex items-center'>
                 <button onClick={signIn}>LogIn</button>

                </div>
            )
        }
    </div>
  )
}

export default AuthLinks