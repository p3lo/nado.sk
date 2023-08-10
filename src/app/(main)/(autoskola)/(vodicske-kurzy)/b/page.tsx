import Picture from '@/components/Picture';
import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Autoškola Naďo - Skupina B',
  description:
    'Autoškola Naďo - Skupina B - vodičský preukaz na motorové vozidlá s najväčšou prípustnou hmotnosťou do 3 500 kg a s počtom sedadiel okrem sedadla vodiča najviac deväť. Kontaktujte nás ešte dnes a získajte svoj vodičský preukaz s nami!',
};

function b() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="B" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel <span className="font-bold">B</span> patria:
          </p>
          <p>
            a)
            <span className="font-bold">
              {' '}
              motorové vozidlá okrem vozidiel skupiny AM, A1, A2, A a T, ktorých najväčšia prípustná celková hmotnosť
              nepresahuje 3 500 kg{' '}
            </span>
            a ktoré sú konštruované a určené na prepravu najviac ôsmich osôb okrem vodiča; k motorovému vozidlu tejto
            skupiny smie byť pripojené prípojné vozidlo s najväčšou prípustnou celkovou hmotnosťou nepresahujúcou 750
            kg,
          </p>
          <p>
            b)
            <span className="font-bold"> motorové vozidlá </span>podľa písmena a){' '}
            <span className="font-bold">
              {' '}
              s prípojným vozidlom, ktorého najväčšia prípustná celková hmotnosť presahuje 750 kg{' '}
            </span>
            za predpokladu, že najväčšia prípustná celková hmotnosť jazdnej súpravy nepresahuje 4 250 kg.
          </p>
          <p>
            Táto skupina
            <span className="font-bold"> obsahuje aj skupiny B1*, A1, AM. </span>
          </p>
          <p>
            * Do skupiny motorových vozidiel
            <span className="font-bold"> B1 </span> patria motorové vozidlá so štyrmi kolesami, ktorých
          </p>
          <p>
            a) prevádzková hmotnosť je 350 kg až 400 kg a pri vozidlách určených na prepravu tovaru 350 kg až 550 kg bez
            hmotnosti batérií v prípade elektrických vozidiel,
          </p>
          <p>
            b) najväčšia konštrukčná rýchlosť presahuje 45{' '}
            <span className="scale-120">
              km.h<sup>-1</sup>
            </span>
            ,
          </p>
          <p>
            c) zdvihový objem valcov motora presahuje 50 cm³ v prípade zážihových motorov, najväčší čistý výkon je väčší
            ako 4 kW v prípade iných spaľovacích motorov alebo ktorých najväčší čistý výkon je 4 kW až 15 kW v prípade
            elektrického motora.
          </p>
          <p>
            Vek: <span className="font-bold">17 rokov **</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">33 €</span>
          </p>
          <p>
            ** Vek na získanie vodičského oprávnenia skupiny “B” sa od 01.11.2011 znížil na 17 rokov. Znamená to, že
            najneskôr v deň záverečných skúšok v autoškole sa požaduje minimálny vek 17 rokov.{' '}
            <span className="font-bold underline">
              Takíto držitelia vodičského oprávnenia skupiny “B” môžu do dovŕšenia veku 18 rokov - najmenej však tri
              mesiace - viesť vozidlo skupiny “B” len v prítomnosti spolujazdca, ktorý má udelené vodičské oprávnenie
              skupiny “B” najmenej 10 rokov
            </span>
            . Pozor však na to, že takéhoto spolujazdca musí schváliť zákonný zástupca maloletého vodiča a zapísať ho do
            žiadosti o zaevidovanie osoby sediacej na mieste vedľa vodiča. Zákonný zástupca môže tento zoznam
            spolujazdcov kedykoľvek pozmeniť či doplniť na evidencií vodičov. Spolujazdec musí mať pri sebe platný
            vodičský preukaz, nesmie byť pod vplyvom alkoholu či iných návykových látok. Jeho úlohou je na mladého
            vodiča pôsobiť výchovne a preventívne. Vedenia vozidla bez kvalifikovaného a schváleného spolujazdca sa
            pokladá za závažné porušenie pravidiel cestnej premávky. O vydanie vodičského preukazu pre žiadateľa, ktorý
            úspešne zložil skúšku vo veku 17 rokov, žiada jeho zákonný zástupca. K žiadosti prikladá tlačivo{' '}
            <span className="font-bold">
              “Žiadosť o zaevidovanie spolujazdca do vodičského oprávnenia osoby mladšej ako 18 rokov”
            </span>
            .
          </p>
        </div>
        <div className="w-full mt-10">
          <Picture picture="/B.webp" />
        </div>
      </div>
    </div>
  );
}

export default b;
