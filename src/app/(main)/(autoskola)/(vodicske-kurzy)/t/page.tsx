import Picture from '@/components/Picture';
import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Autoškola Naďo - Skupina T',
  description:
    'Autoškola Naďo - Skupina T - vodičský preukaz na poľnohospodárske traktory a lesné traktory, ako aj iné zvláštne motorové vozidlá. Kontaktujte nás ešte dnes a získajte svoj vodičský preukaz s nami!',
};

function t() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="T" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel T patria{' '}
            <span className="font-bold">
              poľnohospodárske traktory a lesné traktory, ako aj iné zvláštne motorové vozidlá
            </span>
            ; k motorovému vozidlu tejto skupiny smie byť pripojené prípojné vozidlo.Vodičské oprávnenie skupiny T
            oprávňuje viesť motorové vozidlá skupiny T, ale{' '}
            <span className="font-bold">len na území Slovenskej republiky</span>.
          </p>
          <p>
            Vek: <span className="font-bold">17 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">33 €</span>
          </p>
        </div>
        <div className="w-full mt-10">
          <Picture picture="/T.webp" />
        </div>
      </div>
    </div>
  );
}

export default t;
