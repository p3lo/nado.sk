import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function doskolovacieKurzy() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Doškolovacie kurzy" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            V našej autoškole vykonávame aj doškolovacie kurzy pre vodičov,
            ktorí sa dopustili v posledných dvanástich mesiacoch troch závažných
            dopravných priestupkov (bloková pokuta 60 € a viac) a dostali
            rozhodnutie o povinnosti podrobiť sa doškolovaciemu kurzu.
          </p>
          <p>
            Cena je individuálna podľa skupiny, na kt. sa doškolovací kurz
            vykonáva.
          </p>
        </div>
      </div>
    </div>
  );
}

export default doskolovacieKurzy;
