import Link from 'next/link';
import React from 'react';
import { RiPassportLine, RiCarLine, RiTimeLine } from 'react-icons/ri';

function Footer() {
  return (
    <div className="h-[250px] flex flex-col text-white">
      <div className="h-[200px] flex bg-slate-700 px-[10%]">
        <div className="grid w-full grid-cols-3">
          <div className="flex flex-col items-start justify-center flex-grow space-y-5 font-semibold text-md">
            <div className="flex items-center space-x-2">
              <RiPassportLine className="text-cyan-300" />
              <p>
                <span className="text-cyan-300">+ </span>9500
              </p>
            </div>
            <p className="text-sm">Vodičských preukazov</p>
          </div>
          <div className="flex flex-col items-start justify-center flex-grow space-y-5 font-semibold text-md">
            <div className="flex items-center space-x-2">
              <RiCarLine className="text-cyan-300" />
              <p>
                <span className="text-cyan-300">+ </span>999999999
              </p>
            </div>
            <p className="text-sm">Najazdených kilometrov</p>
          </div>
          <div className="flex flex-col items-start justify-center flex-grow space-y-5 font-semibold text-md">
            <div className="flex items-center space-x-2">
              <RiTimeLine className="text-cyan-300" />
              <p>
                <span className="text-cyan-300">+ </span>32
              </p>
            </div>
            <p className="text-sm">Rokov na trhu</p>
          </div>
        </div>
      </div>
      <div className="h-[50px] flex bg-slate-800 items-center px-[10%]">
        <p className="text-xs">
          Copyright © 2023{' '}
          <span className="text-gray-400">
            <Link href="/">Autoškola Ing. NAĎO</Link>
          </span>{' '}
          All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
