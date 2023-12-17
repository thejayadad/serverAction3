'use client'
import PhotoCard from '@/components/Card/PhotoCard/PhotoCard';
import React from 'react'
import { useRef, useState } from 'react'
import { FiCloud } from 'react-icons/fi';

const UploadForm = () => {
    const formRef = useRef()
    const [files, setFiles]= useState([])

    async function handleInputFiles(e){
        const files = e.target.files;
        const newFiles = [...files].filter(file => {
            if(file.type.startsWith('image/')){
                return file
            }
        })
        setFiles(prev => [...newFiles, ...prev])
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer;
        handleInputFiles({ target: { files: data.files } });
      };
  return (
    <form
    action=''
    ref={formRef}
    onDrop={handleDrop}
    onDragOver={e => e.preventDefault()}
    >
    <input 
    id='upload'
    type='file'
    accept='image/'
    multiple
    hidden
    onChange={handleInputFiles}
    />
    <label
        className='flex flex-col justify-center items-center border-2 border-dotted border-gray-500 cursor-pointer rounded-md'
        style={{ height: '300px', width: '500px' }}
        htmlFor='upload'
    >
        <FiCloud className='text-5xl mb-2 text-grey' />
        <div className='text-lg font-bold text-gray-800'>
          Drag and Drop Your Images
        </div>
        <p className='text-sm text-gray-500'>
          or click here to browse (up to 5 images)
        </p>
    </label>
    <div>
        {
            files.map((file, index) => (
                <div className='flex gap-4'>
<PhotoCard key={index} url={URL.createObjectURL(file)} />
                </div>
            ))
        }
    </div>
        
    </form>
  )
}

export default UploadForm