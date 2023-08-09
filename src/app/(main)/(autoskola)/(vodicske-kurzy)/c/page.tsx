import Picture from "@/components/Picture";
import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function c() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="C" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel skupiny{" "}
            <span className="font-bold">
              C patria motorové vozidlá okrem skupiny D1 alebo D, ktoré sú
              konštruované a určené na prepravu najviac ôsmich osôb okrem vodiča
              a ktorých najväčšia prípustná celková hmotnosť presahuje 3 500 kg
            </span>
            ; k motorovému vozidlu tejto skupiny môže byť pripojené prípojné
            vozidlo s najväčšou prípustnou celkovou hmotnosťou nepresahujúcou
            750 kg.
          </p>
          <p>
            Táto skupina obsahuje{" "}
            <span className="font-bold">aj skupinu C1*</span>.
          </p>
          <p>
            * Do skupiny motorových vozidiel skupiny{" "}
            <span className="font-bold">C1</span> patria motorové vozidlá okrem
            skupiny D1 alebo D, ktorých najväčšia prípustná celková hmotnosť
            presahuje 3 500 kg a nepresahuje 7 500 kg, ktoré sú konštruované a
            určené na prepravu najviac ôsmich osôb okrem vodiča; k motorovému
            vozidlu tejto skupiny môže byť pripojené prípojné vozidlo s
            najväčšou prípustnou celkovou hmotnosťou nepresahujúcou 750 kg.
          </p>
          <p>
            Vek: <span className="font-bold">21 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">66 €</span>
          </p>
        </div>
        <div className="w-full mt-10">
          <Picture picture="/C.webp" />
        </div>
      </div>
    </div>
  );
}

export default c;
