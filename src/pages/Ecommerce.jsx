import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { BsDot } from "react-icons/bs";
import Stacked from './Charts/Stacked.jsx'
import Pie from './Charts/Pie.jsx'
import Button from '../components/Button.jsx'
import SparkLine from '../components/Charts/SparkLine.jsx'


import { useStateContext } from '../contexts/contextProvider'
import { earningData } from '../data/dummy.jsx'
import { SparklineAreaData } from '../data/dummy.jsx';
import {stackedChartData } from '../data/dummy.jsx'

const Ecommerce = () => {
  const{currentColor} = useStateContext()
  return (
    <div className='mt-12'>

      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:h-[317px] md:44 rounded-lg w-full  
            p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-center bg-cover'>

              <div className="flex justify-between items-center">
                <div>
                  <p className='font-extrabold text-gray-400 text-xl'>Earnings</p>
                  <p className='text-2xl mt-4 text-white'>$63,456.09</p>
                </div>
              </div>

              <div className="mt-6">
                <Button
                 color="white"
                 bgColor={currentColor}
                 text = "Download"
                 borderRadius = "10px"
                 size="md"
                />
              </div>
          </div>
          <div className='flex justify-center m-2 flex-wrap items-center gap-1'>
              {
                earningData.map((item)=>(
                  <div
                  key={item.title}
                  className=' bg-gray-100 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 p-4 pt-9 rounded-2xl'
                
                  >
                    <button className='text-2xl opacity-0.9 rounded-full hover:drop-shadow-lg p-3' style={{color:item.iconColor,backgroundColor:item.iconBg}}>
                      {item.icon}
                    </button>
                      <p className='mt-3'>
                        <span className='font-semibold text-lg'>{item.amount}</span>
                        <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
                      </p>
                      <p className='text-sm text-gray-400 mt-2'>{item.title}</p>
                  </div>
                ))
              }
          </div>
      </div>
      

      <div className="flex gap-10 flex-wrap justify-center">
        <div className='bg-gray-100 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-880'>
              <div className="flex justify-between">
                <p className="font-semibold">
                  Revenue Updates
                </p>
                <div className='flex items-center gap-3'>
                    <p className='flex items-center text-gray-600 hover:drop-shadow-2xl'>
                      <span ><BsDot className='text-4xl'/></span>
                      <span>Expense</span>
                    </p>
                    <p className='flex items-center text-green-400 hover:drop-shadow-2xl'>
                      <span ><BsDot className='text-4xl'/></span>
                      <span>Budget</span>
                    </p>
                </div>
              </div>

              
            <div className="flex justify-center gap-10 flex-wrap mt-10">
              <div className='md:border-r-1 border-b-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='font-semibold text-3xl'>$93,898</span>
                    <span className='p-1.5 bg-green-300 rounded-full text-white text-xs cursor-pointer hover:drop-shadow-xl ml-2'>23%</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>

                <div className='mt-3'>
                  <p>
                    <span className='font-semibold text-3xl'>$48,898</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Expense</p>
                </div>

                <div className='mt-5'>
                  <SparkLine 
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>

                <div className='my-10'>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Download report"
                      borderRadius="10px"
                      />
                  </div>
              </div>

              <div className='mt-10'>
                <Stacked data={stackedChartData}/>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Ecommerce