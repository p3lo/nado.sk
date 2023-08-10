import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Nákladná preprava',
  description:
    'Informácie o nákladnej preprave tovarov. Zistite, aké vozidlá sú k dispozícii pre nákladnú vnútroštátnu a medzinárodnú prepravu a aké sú ich vlastnosti. Na stránke nájdete aj informácie o spoločnosti, ktorá poskytuje nákladnú prepravu.',
};

function nakladnaPreprava() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Nákladná preprava" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>Na nákladnú vnútroštátnu a medzinárodnú prepravu tovarov nám slúžia vozidlá značky IVECO a VOLVO</p>
        </div>
      </div>
    </div>
  );
}

export default nakladnaPreprava;
