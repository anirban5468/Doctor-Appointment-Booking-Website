"use client"
import GlobalApi from '@/app/_utlis/GlobalApi';
import { React, useEffect, useState } from 'react';
import DoctorDetails from '@/app/(route)/details/_components/DoctorDetails';
import DoctorList from '@/app/_components/DoctorList';


function Details({ params }) {
  const [doctor, setDoctor] = useState();
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorById();
    getDoctorSuggestions();
  }, []);

  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordid).then(resp => {
      setDoctor(resp.data.data);
    });
  };

  const getDoctorSuggestions = () => {
    GlobalApi.getDoctorList().then(resp => {
      setDoctorList(resp.data.data);
    });
  };

  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>
        Details
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {/* Doctor Detail */}
        <div className='col-span-3'>
          {doctor && <DoctorDetails doctor={doctor} />}
        </div>
        {/* Doctor Suggestion */}
        <div>
          {doctorList.length > 0 && <DoctorList doctorList={doctorList} heading="Doctor Suggestions" />}
        </div>
      </div>
    </div>
  );
}

export default Details;
