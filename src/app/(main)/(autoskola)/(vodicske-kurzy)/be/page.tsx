import Picture from '@/components/Picture';
import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Autoškola Naďo - Skupina BE',
  description:
    'Autoškola Naďo - Skupina BE - vodičský preukaz na súpravy zložené z vozidla skupiny B a prípojného vozidla nad 750 cm³. Kontaktujte nás ešte dnes a získajte svoj vodičský preukaz s nami!',
};

function be() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="BE" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel <span className="font-bold">BE</span> patria:
          </p>
          <p>
            <span className="font-bold">Súpravy zložené z vozidla skupiny B a prípojného vozidla nad 750 cm³</span>
          </p>
          <p>
            Vek: <span className="font-bold">18 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">33 €</span>
          </p>
        </div>
        <div className="flex flex-col w-full mt-10 space-y-3 md:flex-row md:space-y-0 md:space-x-5">
          <Picture picture="/BE.webp" />
          <Picture picture="/BE2.webp" />
        </div>
      </div>
    </div>
  );
}

export default be;
