import React from 'react'

const PhotoCard = ({url, onClick}) => {
  return (
    <div className='flex'>
        <div className='flex'>
            <img
            src={url}
            alt='image'
            width={100}
            height={60}
            priority
            />
            
        </div>
        <button
        onClick={onClick}
        type='button'>Delete</button>
    </div>
  )
}

export default PhotoCard