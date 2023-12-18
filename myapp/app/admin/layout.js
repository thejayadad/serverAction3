'use client'
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal'
import Nav from '@/components/dashboard/Navbar';

const layout = ({children}) => {

  return (
    <div>
        <Nav />
        {children}
    </div>
  )
}

export default layout