import Picture from '@/components/Picture';
import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Autoškola Naďo - Skupina A',
  description:
    'Autoškola Naďo - Skupina A - vodičský preukaz na dvojkolesové motorové vozidlá bez postranného vozíka alebo s postranným vozíkom vybavené motorom, ktorých najväčšia konštrukčná rýchlosť je viac ako 45 km/h alebo ktorých zdvihový objem valcov motora je väčší ako 50 cm³ v prípade spaľovacieho motora. Kontaktujte nás ešte dnes a získajte svoj vodičský preukaz s nami!',
};

function a() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="A" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel <span className="font-bold">A</span> patria:
          </p>
          <p>
            a)
            <span className="font-bold">
              {' '}
              dvojkolesové motorové vozidlá bez postranného vozíka alebo s postranným vozíkom vybavené motorom
            </span>
            , ktorých najväčšia konštrukčná rýchlosť je viac ako 45{' '}
            <span className="scale-120">
              km.h<sup>-1</sup>
            </span>{' '}
            alebo ktorých zdvihový objem valcov motora je väčší ako 50{' '}
            <span className="scale-120">
              cm<sup>3</sup>
            </span>{' '}
            v prípade spaľovacieho motora,
          </p>
          <p>
            b) <span className="font-bold">motorové trojkolky</span> podľa ods.3 b) s výkonom presahujúcim 15 kW.
          </p>
          <p>
            Vek: <span className="font-bold">24 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">16,50 €</span>
          </p>
        </div>
        <div className="w-full mt-10">
          <Picture picture="/A.webp" />
        </div>
      </div>
    </div>
  );
}

export default a;
