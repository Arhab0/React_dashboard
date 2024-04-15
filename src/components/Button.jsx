import React from 'react'

const Button = ({color,bgColor,text,borderRadius,size}) => {
  return (
      <button
      type='button'
      style={{ background:bgColor,color,borderRadius}}
      className={`text-${size} py-2 px-4 hover:-translate-y-1 duration-300`}
      >
          {text}
      </button>
  )
}

export default Button