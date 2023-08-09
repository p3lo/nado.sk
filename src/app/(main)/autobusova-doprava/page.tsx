import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function autobusovaDoprava() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Autobusová doprava" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-3 text-sm">
          <p className="text-cyan-500">
            PREPRAVNÝ PORIADOK AUTOBUSOVEJ DOPRAVY - dokument na stiahnutie
          </p>
          <p>
            Na vnútroštátnu a medzinárodnú autobusovú dopravu nám slúžia
            zájazdové autobusy, konkrétne:
          </p>
          <p>
            <span className="font-bold">50 - miestny autobus</span> Bova
          </p>
          <p>
            <span className="font-bold">52 - miestny autobus</span> Karosa
          </p>
          <p>
            <span className="font-bold">49 - miestny autobus</span> Man Irizar
          </p>
          <p>
            <span className="font-bold">30 - miestny autobus</span> Isuzu
          </p>
          <p>
            <span className="font-bold">9 - miestna dodávka</span> Fiat Ducato
          </p>
        </div>
      </div>
    </div>
  );
}

export default autobusovaDoprava;
