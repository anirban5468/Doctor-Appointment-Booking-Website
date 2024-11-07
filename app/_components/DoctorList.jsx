import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function DoctorList({doctorList,heading}) {
  return (
    <div className='mb-10 px-8'>
        <h2 className='font-bold text-xl'>{heading='Popular Doctors'}</h2>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 lg:grid-cols-4 mt-4 '>
            {doctorList.length>0?doctorList.map((item, index)=>(
                <div className='border-[1px]   bg-white rounded-xl p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out '
                key={index}>
                    <Image
                    src={item.attributes?.image?.data?.attributes?.url}
                    alt='doctor'
                    width={500}
                    height={200}
                    className='h-[280px] w-full object-cover rounded-lg border-[1px]'
                    />
                    <div className='mt-3 items-baseline flex flex-col gap-1'>
                        <h2 className='text-[11px] bg-blue-200 p-1 rounded-full px-2 text-pretty text-primary'>{item.attributes?.categories.data[0].attributes?.Name}</h2>
                        <h2 className='font-semibold'>{item.attributes.Name}</h2>
                        <h2 className='text-primary text-sm'>{item.attributes?.Year_of_Experience}</h2>
                        <h2 className='text-sm text-gray-500'>{item.attributes?.Address}</h2>
                        <Link href={'/details/'+item?.id} className='w-full'>
                        <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
                        </Link>
                    </div>

                </div>
            ))
            //skeleton effect
            :
            [1,2,3,4,5,6,7].map((item,index)=>(
            
            <div className='h-[220px] bg-slate-200 rounded-xl animate-pulse w-full'>

            </div>
            ))
        }
        </div>
    </div>
  )
}

export default DoctorList