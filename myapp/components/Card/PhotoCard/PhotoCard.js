import React from 'react'

const PhotoCard = ({url}) => {
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
    </div>
  )
}

export default PhotoCard