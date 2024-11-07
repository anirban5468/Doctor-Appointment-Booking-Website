import React from 'react'
import DoctorList from '@/app/_components/DoctorList';


import Link from 'next/link';

function DoctorSuggestion({ doctorList }) {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>Doctor Suggestions</h2>
      <ul className='mt-4'>
        {doctorList.length > 0 ? doctorList.map((doctor, index) => (
          <li key={index} className='border-b py-4 cursor-pointer'>
            <Link href={`/details/${doctor.id}`}>
              <a className='text-blue-500 hover:underline'>
                {doctor.attributes.Name}
              </a>
            </Link>
          </li>
        )) : (
          <li>No suggestions available.</li>
        )}
      </ul>
    </div>
  );
}

export default DoctorSuggestion;
