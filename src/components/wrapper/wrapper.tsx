import React from 'react'

const Wrapper = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className='max-w-5xl w-full mx-auto my-4'>{children}</div>
  )
}

export default Wrapper