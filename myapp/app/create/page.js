import UploadForm from '@/components/Form/UploadForm/UploadForm'
import React from 'react'

const CreatePost = () => {
  return (
    <section className='px-4 py-8'>
        <div className='flex flex-col items-center mx-auto max-w-screen-lg'>
        <h2 className='text-center'>New Post</h2>
        <UploadForm />
        </div>
    </section>
  )
}

export default CreatePost