import React from 'react'
import { addCategory } from '@/lib/actions'
import Input from '@/components/dashboard/Form/input'
import Button from '@/components/dashboard/Form/button'

const NewCategory = () => {
  return (
    <section className='px-4 py-12'>
     <div className='flex flex-col gap-12 max-w-screen-lg mx-auto'>
     <h2 className='text-center'>NewCategory</h2>
     <form action={addCategory}
    className='flex flex-col'
    >
    <Input
    type='text'
    name='name'
    id='name'
    placeholder='Name...'
    />
    <Button
    type='submit'
    >Submit</Button>
    </form>
    </div>
    </section>
  )
}

export default NewCategory