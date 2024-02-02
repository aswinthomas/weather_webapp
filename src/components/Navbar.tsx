import React from 'react'
import { LuSun } from "react-icons/lu";
import { GiPositionMarker } from "react-icons/gi";
import { MdMyLocation } from "react-icons/md";
import SearchBox from './SearchBox';

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 x-50 bg-white">
      <div className="h=[80px] w-full flex justify-between items-center max-w-7xl px3 mx-auto">
        <p className="flex items-ceter justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <LuSun className='text-3xl mt-1 text-yellow-300' />
        </p>
        {/*  */}
        <section className='flex gap-2 items-center'>
          <MdMyLocation className='text-2xl text-gray-400 hover:opacity-80 cursor-pointer' />
          <GiPositionMarker className='text-3xl'/>
          <p className='text-slate-900/80 text-sm'> Singapore</p>
        </section>
        <div>
          {/*search box*/}
          <SearchBox />
        </div>
      </div>
    </nav>
  );
}