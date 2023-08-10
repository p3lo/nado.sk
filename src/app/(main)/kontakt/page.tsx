import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi2';

import TitleSubsection from '@/components/TitleSubsection';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const MapWithNoSSR = dynamic(() => import('../../../components/Map'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Kontakt - Autoškola Naďo',
  description:
    'Kontaktné informácie pre Autoškolu Naďo. Zistite, ako nás môžete kontaktovať telefonicky alebo e-mailom a kde sa nachádzame. Na stránke nájdete aj interaktívnu mapu s našou polohou.',
};

function kontakt() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Kontakt" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-10 md:space-x-10 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-5 text-sm">
            <div className="flex flex-col">
              <p>A. Sládkoviča 631/95</p>
              <p>01861 Beluša</p>
            </div>
            <div className="flex items-center space-x-2">
              <HiOutlinePhone />
              <a href="tel:+421 905 222 200" className="hover:cursor-pointer text-cyan-500">
                +421 905 222 200
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <AiOutlineMail />
              <a href="mailTo:autoskola.nado@gmail.com" className="hover:cursor-pointer text-cyan-500">
                autoskola.nado@gmail.com
              </a>
            </div>
          </div>
          <div className="flex grow bg-slate-300">
            <MapWithNoSSR />
          </div>
        </div>
      </div>
    </div>
  );
}

export default kontakt;
