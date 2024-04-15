import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'

import {links} from '../data/dummy'
import { useStateContext } from '../contexts/contextProvider.jsx'

const Sidebar = () => {
  const{activeMenu , setActiveMenu,screenSize,setScreenSize,currentColor} = useStateContext()
  const activeLinks = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:text-white text-black text-md m-2'
  const normal = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-600 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleCloseSidebar = () =>{
    if(activeMenu && screenSize<= 900)
  {
    setActiveMenu(false)
  }
  }
  return (
  
    <div className='h-screen ml-3 pb-10 md:overflow-hidden overflow-auto md:hover:overflow-auto'>
      {
        activeMenu && (
          <>
            <div className='flex justify-between items-center'>
              <Link to={"/"} 
              onClick={handleCloseSidebar}
               className=' items-center flex gap-3 mt-4 ml-3 text-xl font-extrabold dark:text-white text-slate-900 tracking-tight'>
                <SiShopware/>
                <span>Shoppy</span>
              </Link>
              <div >
                  <button type='button' 
                  onClick={()=>{setActiveMenu(!activeMenu)}}
                  className='rounded-full text-xl p-3 hover:bg-light-gray mt-4 block '>
                    <MdOutlineCancel/>
                  </button>
              </div>
            </div>
            <div className='mt-10'>
                {
                  links.map((item)=>(
                    <div key={item.title} >
                      <p className='text-gray-400 m-4 uppercase'>{item.title}</p>

                      {
                        item.links.map((link)=>(
                          <NavLink key={link.id} to={`/${link.name}`} 
                          onClick={handleCloseSidebar}
                          style={({isActive})=>({
                            backgroundColor : isActive ? currentColor : ""
                          })}
                          className={({isActive})=>
                            isActive ? activeLinks : normal
                          }
                          >
                            {link.icon}
                            <span>{link.name}</span>
                          </NavLink>
                        ))
                      }
                    </div>
                  ))
                }

            </div>
          </>
        )
      }
    </div>
  )
}

export default Sidebar