import Logo from '@/components/Logo/Logo'
import React from 'react'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-12'>
        <nav className='flex justify-between max-w-screen-xl mx-auto'>
            <Logo />
            <AuthLinks />
        </nav>
    </header>
  )
}

export default Navbar