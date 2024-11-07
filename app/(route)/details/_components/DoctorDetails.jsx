import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment'

function DoctorDetails({doctor}) {
    const socialMediaList=[
        {
           id:1, 
           icon: '/facebook.png',
           url:''

        },
        {
            id:2, 
            icon: '/instagram.png',
            url:''
         },
         {
            id:3, 
            icon: '/linkedin.png',
            url:''
            
         },
         {
            id:4, 
            icon: '/twitter.png',
            url:''
         }
    ]
  return (
    <div>
    <div className='  grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-xl'>
    {/* Doctor Image */}
    <div>
        <Image src={ doctor.attributes?.image?.data?.attributes?.url}
        width={200}
        height={200}
        alt='doctor'
        className='rounded-xl w-full h-[300px] object-cover'
        />
    </div>
    {/* Doctor Info */}
    <div className='col-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline'>
           <h2 className='font-bold text-2xl'>{doctor.attributes?.Name}</h2>
           <h2 className='flex gap-2 text-gray-500 text-base'>
            <GraduationCap/>
            <span>{doctor.attributes?.Year_of_Experience} of experience</span>
           </h2>
           <h2 className='flex gap-2 text-base text-gray-500'>
            <MapPin/>
            <span>{doctor.attributes.Address}</span>
           </h2>
           <h2 className='text-[11px] bg-blue-200 p-1 rounded-full px-2 text-pretty text-primary'>{doctor.attributes?.categories.data[0].attributes?.Name}</h2>
           <div className='flex gap-3'>
            {socialMediaList.map((item,index)=>(
                <Image src={item.icon} key={index}
                width={30}
                height={30}
                />
            ))}
            </div>
            
            <BookAppointment doctor={doctor}/>
    </div>
    {/*About Doctor*/}
   
  </div>
   <div className='p-3 border-[1px] rounded-xl mt-5'>
        <h2 className='font-bold text-[20px]'>About Me </h2>
        <p className='text-gray-500 tracking-wide mt-2'>{doctor.attributes.About}</p>
    </div>
    </div>
  )
}

export default DoctorDetails