import React from 'react'

const Form = ({action, children}) => {
  return (
    <form 
    className='flex flex-col px-4 py-8'
    action={action}>
        {children}
    </form>
  )
}

export default Form