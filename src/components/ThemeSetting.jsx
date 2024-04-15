import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import Tooltip from '@mui/material/Tooltip';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/contextProvider';



const ThemeSetting = () => {
  const {currentColor , setCurrentColor, currentMode , setCurrentMode,setThemeSettings,setMode,setColor} = useStateContext();
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
        <div className='float-right h-screen 
         bg-white dark:[#484B52] w-400'>

            <div className="flex justify-between items-center p-4 ml-3">
              <p className="font-semibold text-lg">
                  Settings
              </p>
            
                <button 
                  type='button'
                  onClick={()=>{setThemeSettings(false)}}
                  style={{borderRadius:'50%',color:'rgb(153,171,180)'}}
                className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray">
                    <MdOutlineCancel/>
                </button>
            </div>

            <div className="flex-col border-t-1 p-4 ml-3 border-color">
              <p className="font-semibold text-lg">
                  Theme Settings
              </p>
              <div className="mt-4">
                <input type="radio" id='light' value="Light" name='theme' className='cursor-pointer'
                onChange={setMode}
                checked = {currentMode === 'Light'}
                />
                <label htmlFor="light" className='ml-2 text-md cursor-pointer'>
                  Light
                </label>
              </div>
              <div className="mt-4">
                <input type="radio" id='dark' value="Dark" name='theme' className='cursor-pointer'
                onChange={setMode}
                checked = {currentMode === 'Dark'}
                />
                <label htmlFor="dark" className='ml-2 text-md cursor-pointer'>
                  Dark
                </label>
              </div>
            </div>

            <div className="flex-col border-t-1 p-4 ml-3 border-color">
              
              <p className="font-semibold text-lg">
                  Theme Colors
              </p>

              <div className="flex gap-3">
                
                {themeColors.map((color, index)=>(
                  <Tooltip title={color.name} key={index} placement='top'>
                  
                 
                     <div className='relative m-3 cursor-pointer flex gap-3 items-center'>
                        <button className='w-10 cursor-pointer h-10 rounded-full' 
                          style={{backgroundColor:color.color}}
                          onClick={()=>setColor(color.color)}
                        >
                            <BsCheck className={`ml-2 text-2xl text-white ${currentColor === color.color ? 'block':'hidden'}`}/>
                        </button>
                     </div>
                     </Tooltip>
                ))}
              </div>

            </div>
        </div>
    </div>
  )
}

export default ThemeSetting