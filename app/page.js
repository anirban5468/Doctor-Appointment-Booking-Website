"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utlis/GlobalApi";
import { useEffect ,useState} from "react";
import Footer from "./_components/Footer";

export default function Home() {
  const[doctorList,setDoctorList]=useState([]);
  useEffect(()=>{
    getDoctorList();
  },[])
  const getDoctorList=()=>{
    GlobalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div>
      {/*/hero section*/}
      <Hero/>
      
     { /*Search Bar + category*/}
     <CategorySearch/>
     {/*Popular Doctors List*/}
     <DoctorList doctorList={doctorList}/>
    
    </div>
  );
}
