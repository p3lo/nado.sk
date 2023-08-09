import Picture from "@/components/Picture";
import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function d() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="D" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel skupiny{" "}
            <span className="font-bold">
              D patria motorové vozidlá, ktoré sú konštruované a určené na
              prepravu viac ako ôsmich osôb okrem vodiča
            </span>
            ; k motorovému vozidlu tejto skupiny smie byť pripojené prípojné
            vozidlo s najväčšou prípustnou celkovou hmotnosťou nepresahujúcou
            750 kg.
          </p>
          <p>
            Táto skupina obsahuje{" "}
            <span className="font-bold">aj skupinu D1*</span>.
          </p>
          <p>
            * Do skupiny motorových vozidiel skupiny{" "}
            <span className="font-bold">D1</span> patria motorové vozidlá, ktoré
            sú konštruované a určené na prepravu najviac 16 osôb okrem vodiča a
            ktorých dĺžka nepresahuje 8 m; k motorovému vozidlu tejto skupiny
            môže byť pripojené prípojné vozidlo s najväčšou prípustnou celkovou
            hmotnosťou nepresahujúcou 750 kg.
          </p>
          <p>
            Vek: <span className="font-bold">24 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">66 €</span>
          </p>
        </div>
        <div className="w-full mt-10">
          <Picture picture="/D.webp" />
        </div>
      </div>
    </div>
  );
}

export default d;
