import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Kondičné jazdy v Autoškole Naďo',
  description:
    'Autoškola Naďo ponúka kondičné jazdy pre vodičov, ktorí chcú zlepšiť svoje jazdné zručnosti alebo sa pripraviť na skúšku vodičského preukazu. Kondičné jazdy sú k dispozícii pre všetky skupiny vodičských oprávnení. Kontaktujte nás ešte dnes a zlepšite svoje jazdné zručnosti s Autoškolou Naďo!',
};

function kondicneJazdy() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Kondičné jazdy" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <ul className="list-disc">
            <li>AM</li>
            <li>A1</li>
            <li>A2</li>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>CE</li>
            <li>D</li>
            <li>DE</li>
            <li>T</li>
          </ul>
          <p>Cena je individuálna podľa skupiny, na ktorej sa kondičná jazda vykonáva.</p>
        </div>
      </div>
    </div>
  );
}

export default kondicneJazdy;
