import Picture from "@/components/Picture";
import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function a2() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="A2" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do tejto skupiny patria{" "}
            <span className="font-bold">
              dvojkolesové motorové vozidlá bez postranného vozíka alebo s
              postranným vozíkom vybaveným motorom s výkonom nepresahujúcim 35
              kW, s pomerom výkon/najväčšia prípustná celková hmotnosť
              nepresahujúcim 0,2 kW/kg
            </span>
            , ktoré nie sú odvodené od vozidla s viac ako dvojnásobkom ich
            výkonu.
          </p>
          <p>
            Vek: <span className="font-bold">28 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">16,50 €</span>
          </p>
        </div>
        <div className="w-full mt-10">
          <Picture picture="/A2.webp" />
        </div>
      </div>
    </div>
  );
}

export default a2;
