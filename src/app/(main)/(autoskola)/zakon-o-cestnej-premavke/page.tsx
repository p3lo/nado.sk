import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Zákon o cestnej premávke na Slovensku',
  description:
    'Informácie o Zákone o cestnej premávke na Slovensku. Zistite, kedy bol zákon prijatý, kedy nadobudol platnosť a aká je jeho účinnosť. Na stránke nájdete aj odkaz na aktuálne znenie zákona.',
};

function zakonOCestnejPremavke() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Zákon o cestnej premávke" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-3 text-sm">
          <p>Zákon č. 8/2009 Z.z.</p>
          <p>Zákon o cestnej premávke a o zmene a doplnení niektorých zákonov.</p>
          <p>Platnosť od 16.01.2009</p>
          <p>Účinnosť od 01.01.2016</p>
          <a className="text-cyan-500" href="https://www.zakonypreludi.sk/zz/2009-8" target="_blank" rel="noreferrer">
            Aktuálne znenie dostupné TU
          </a>
        </div>
      </div>
    </div>
  );
}

export default zakonOCestnejPremavke;
