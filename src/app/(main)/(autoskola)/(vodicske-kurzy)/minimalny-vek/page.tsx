import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Minimálny vek na získanie vodičského preukazu na Slovensku',
  description:
    'Zoznam minimálnych vekových požiadaviek na získanie rôznych typov vodičských oprávnení na Slovensku. Zistite, koľko rokov musíte mať na získanie vodičského preukazu skupiny AM, A1, B, C, D a ich podskupín.',
};

function minimalnyVek() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Minimálny vek" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>Minimálny vek na udelenie vodičského oprávnenia je:</p>
          <ul className="list-disc">
            <li>15 rokov pre žiadateľa o udelenie vodičského oprávnenia skupiny AM,</li>
            <li>16 rokov pre žiadateľa o udelenie vodičského oprávnenia podskupiny A1 a B1,</li>
            <li>17 rokov pre žiadateľa o udelenie vodičského oprávnenia skupiny T,</li>
            <li>
              18 rokov pre žiadateľa o udelenie vodičského oprávnenia skupiny A na vedenie motorového vozidla s výkonom
              motora nepresahujúcim 25 Kw alebo s pomerom výkon/najväčšia prípustná celková hmotnosť nepresahujúcim 0,16
              kW/kg alebo motocykla s postranným vozíkom s pomerom výkon/najväčšia prípustná celková hmotnosť
              nepresahujúcim 0,16 kW/kg, skupiny B, B+E, C, C+E a podskupiny C1 a C1+E,
            </li>
            <li>
              21 rokov pre žiadateľa o udelenie vodičského oprávnenia skupiny A bez obmedzení podľa predchádzajúceho
              bodu, skupiny D, D+E a podskupiny D1 a D1+E,
            </li>
          </ul>
          <p>Informácie pochádzajú zo stránky ústredného portálu verejnej správy Slovenskej republiky.</p>
        </div>
      </div>
    </div>
  );
}

export default minimalnyVek;
