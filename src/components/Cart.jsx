import React from 'react'
import { useStateContext } from '../contexts/contextProvider'
const Cart = () => {
  const {setIsClicked} = useStateContext()

  return (
    <div className='absolute top-11 right-[200px] h-[280px] w-56 rounded-2xl bg-white'>
      <div className='flex justify-between items-center'>
        <div>cart</div>
        <button onClick={()=>setIsClicked(false)}>close</button>
      </div>
    </div>
  )
}

export default Cart