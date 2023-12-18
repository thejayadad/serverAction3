import React from 'react'

const Input = ({type, placeholder, name}) => {
  return (
    <input
    className="flex h-10 w-full mb-6 mt-6 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder={placeholder}
    name={name}
    type={type}
    />
  )
}

export default Input