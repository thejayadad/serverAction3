import Link from 'next/link'
import React from 'react'
import AuthLinks from './AuthLinks'
import getServerUser from '@/public/getServerUser'

const Navbar = async () => {
    const user = await getServerUser()

  return (
    <header className='px-4 py-12'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <Link href={'/'}>Logo</Link>
            <AuthLinks user={user} />
        </nav>
    </header>
  )
}

export default Navbar 