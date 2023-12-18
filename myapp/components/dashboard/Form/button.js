import React from 'react'

const Button = ({onClick,children}) => {
  return (
    <button
    className="bg-primary text-white rounded-md p-2 cursor-pointer"
    onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button