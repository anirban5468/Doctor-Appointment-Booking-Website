"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Image, Search } from 'lucide-react'
import GlobalApi from '../_utlis/GlobalApi'
import Link from 'next/link'

function CategorySearch() {
  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList()
  },[])
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }
  return (
    <div className='mb-10 px-5 items-center flex flex-col gap-2'>
      
      <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
      <h2 className='text-gray-500 text-xl '> Search your Doctor and Book an Appointment</h2>
     <div className="flex w-full max-w-sm mt-3 items-center space-x-2">
    <Input className type="text" placeholder="Search" />
    
    <Button className='text-white rounded' type="submit"><Search className='h-4 w-4 mr-2'/> Search</Button>
 
   </div>
  {/*Display List of Category */}
  <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
  {categoryList.length>0?categoryList.map((item,index)=>index<6&&(
    <Link href={'/search/'+item.attributes.Name} key={index } className='flex flex-col text-center items-center p-4 bg-blue-100 m-2 rounded-xl gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer' >
      <img src={item.attributes?.Icon?.data.attributes?.url}
      width={40}
      height={40}
      alt='icon'/>
      <label className='text-blue-500 text-pretty'>{item?.attributes?.Name}</label>
      </Link>
  ))
  :
            [1,2,3,4,5,6].map((item,index)=>(
            
            <div className='h-[130px] w-[140px] m-2 bg-slate-200 rounded-xl animate-pulse '>

            </div>
            ))
  }
  </div>
  </div>
   
  )
}

export default CategorySearch