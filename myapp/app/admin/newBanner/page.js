'use server'
import Form from '@/components/dashboard/Form/Form'
import Button from '@/components/dashboard/Form/button'
import Input from '@/components/dashboard/Form/input'
import React from 'react'
import { addBanner } from '@/lib/actions'

const NewBanner = () => {
  return (
    <section className='px-4 py-12'>
     <div className='flex flex-col gap-12 max-w-screen-lg mx-auto'>
     <h2 className='text-center'>NewBanner</h2>
    <form action={addBanner}
    className='flex flex-col'
    >
    <input
    type='text'
    name='title'
    id='title'
    placeholder='Title...'
    />
    <input
    type='text'
    name='desc'
    id='desc'
    className='h-12 mt-8'
    placeholder='Desc...'
    />
    <input
    type='text'
    name='imgUrl'
    id='imgUrl'
    placeholder='Image Url...'
    />
    <input
    type='text'
    name='active'
    id='active'
    placeholder='Active...'
    />
        <button
    type='submit'
    >Submit</button>
    </form>
     </div>
    </section>
  )
}

export default NewBanner