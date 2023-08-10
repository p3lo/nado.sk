import TitleSubsection from '@/components/TitleSubsection';
import React from 'react';
import { Caveat } from 'next/font/google';

const caveat = Caveat({ weight: '400', subsets: ['latin'] });

function Home() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Autoškola Ing. NAĎO" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-3 text-sm">
          <p>
            Vitajte v Autoškole Naďo, domove bezpečnej a profesionálnej výučby vedenia vozidiel! S našou tradíciou,
            ktorá siaha až do roku 1990, sme sa stali dôveryhodným partnerom pre mnohých vodičov v regióne. Naša široká
            ponuka zahŕňa vlastné autocvičisko v areáli, rozsiahly vozový park a kvalifikovaných lektorov, ktorí sú
            pripravení vás vybaviť vodičským preukazom na všetky skupiny, vrátane KKV.
          </p>
          <p>
            Ponúkame nie len prvotriedne vzdelávanie budúcich vodičov, ale aj vnútroštátnu a medzinárodnú autobusovú
            dopravu, ako aj nákladnú prepravu tovarov. Bez ohľadu na vaše potreby alebo ambície v oblasti jazdy,
            Autoškola Naďo je tu pre vás, aby vám poskytla komplexné služby na ceste k úspechu.
          </p>
          <p>Pridajte sa k nám a objavte, prečo sme najlepšou voľbou pre vodičské vzdelanie v regióne!</p>
          <ul className="list-disc">
            <li>Autoškola s najdlhšou tradíciou v regióne, od roku 1990.</li>
            <li>Rozsiahly vozový park.</li>
            <li>Vlastné autocvičisko vo vlastnom areáli.</li>
            <li>Ponúkame vodičské preukazy na všetky skupiny + KKV.</li>
            <li>Ponúkame Vám vnútroštátnu a medzinárodnú autobusovú dopravu.</li>
            <li>Nákladnú vnútroštátnu a medzinárodnú prepravu tovarov.</li>
          </ul>
        </div>
      </div>
      <p className={`${caveat.className} mx-[10%] pb-10 text-4xl text-cyan-400`}>
        Autoškola Ing. NAĎO - s nami to zvládnete
      </p>
    </div>
  );
}

export default Home;
