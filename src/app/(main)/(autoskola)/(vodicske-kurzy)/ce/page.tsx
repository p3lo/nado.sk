import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Autoškola Naďo - Skupina CE',
  description:
    'Autoškola Naďo - Skupina CE - vodičský preukaz na súpravy zložené z vozidla skupiny C a prípojného vozidla s hmotnosťou väčšou ako 750 kg. Kontaktujte nás ešte dnes a získajte svoj vodičský preukaz s nami!',
};

function ce() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="CE" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel <span className="font-bold">CE</span> patria:
          </p>
          <p>
            <span className="font-bold">
              Súpravy zložené z vozidla skupiny C a prípojného vozidla s hmotnosťou väčšou ako 750 kg.
            </span>
          </p>
          <p>
            Vek: <span className="font-bold">21 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">66 €</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ce;
