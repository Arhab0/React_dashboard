import React,{useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import avatar from '../data/avatar.jpg'
import Cart from './Cart.jsx'
import Notification from './Notification.jsx'
import Chat from './Chat.jsx'
import UserProfile from './UserProfile.jsx'

import { useStateContext } from '../contexts/contextProvider'


const NavButton = ({title,cusFuc,icon,color,dotColor}) => (
  <div >
      <button
      type='button'
      style={{color}}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      onClick={cusFuc}
      >
        <span style={{background:dotColor}}
        className=' absolute rounded-full inline-flex h-2 w-2 right-2 top-2'
        />
          {icon}
      </button>
  </div>
)
const Navbar = () => {
  const{activeMenu , setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor} = useStateContext()

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize',handleResize);

    handleResize()

    return () => window.removeEventListener('resize',handleResize)
  },[])

  useEffect(()=>{
    if(screenSize<=900)
    {
      setActiveMenu(false)
    } else{
      setActiveMenu(true)
    }
  },[screenSize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title="menu"
        cusFuc={()=>setActiveMenu(!activeMenu)}
        icon={<AiOutlineMenu/>}
        color={currentColor}
      />
      <div className="flex relative">
      <NavButton
        title="cart"
        cusFuc={()=>handleClick('cart')}
        icon={<FiShoppingCart/>}
        color={currentColor}
      />
      <NavButton
        title="chats"
        cusFuc={()=>handleClick('chats')}
        icon={<BsChatLeft/>}
        dotColor={"#03C9D7"}
        color={currentColor}
      />
      <NavButton
        title="nofitication"
        cusFuc={()=>handleClick('notification')}
        icon={<RiNotification3Line/>}
        dotColor={"#03C9D7"}
        color={currentColor}
      />


      <div>
        <div className="flex items-center p-1 gap-2 cursor-pointer rounded-lg mt-1 hover:bg-light-gray"
        onClick={()=>handleClick('userProfile')}
        >
          <img src={avatar} className='w-6 h-6 rounded-full' alt="" />
          <p> 
            <span className='text-gray-400 text-14'>Hi,</span> 
            {' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Arhab</span>
          </p>
          <MdKeyboardArrowDown/>
        </div>
      </div>

      {isClicked.cart && <Cart/>}
      {isClicked.chats && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}
      
      </div>



    </div>
  )
}

export default Navbar