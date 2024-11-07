"use client"
import React from 'react'
import GlobalApi from '@/app/_utlis/GlobalApi';
import { useEffect ,useState} from 'react';
import Link from 'next/link';

import styles from './styles.css';

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
function CategoryList() {
    const [categoryList,setCategoryList]=useState([]);
    const params=usePathname();
    const category=params.split('/')[2];
    useEffect(()=>{
      getCategoryList();
      console.log(category)
    },[])
    const getCategoryList=()=>{
      GlobalApi.getCategory().then(resp=>{
        console.log(resp.data.data);
        setCategoryList(resp.data.data);
      })
    }
  return (
    <div className='h-screen flex flex-col   mt-5 mb-0  '>
        
        <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className='overflow-visible mb-2'>
    
    <CommandGroup heading="Suggestions" >
        {categoryList&&categoryList.map((item,index)=>(
             <CommandList key={index} className='hover:bg-blue-100 hover:rounded-xl' >
                <Link href={'/search/'+item?.attributes?.Name} className={`p-2 flex gap-2 text-[14px] font-bold text-pretty items-center text-primary rounded-xl cursor-pointer w-full 
    
                ${
                    category==item.attributes.Name&&'bg-blue-100'
                }`}>
                    <Image src={item.attributes?.Icon?.data.attributes?.url}
                    alt='icon'
                    width={25}
                    height={25}
                    />
                    <label   >
                        {item.attributes.Name}
                    </label>
                </Link>
             </CommandList>

        ))}
        
     
      
    </CommandGroup>
    
  </CommandList>
</Command>

    </div>
  )
}

export default CategoryList