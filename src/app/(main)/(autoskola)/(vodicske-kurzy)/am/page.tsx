import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function am() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="AM" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel <span className="font-bold">AM</span>{" "}
            patria
          </p>
          <p>
            a)
            <span className="font-bold">
              {" "}
              dvojkolesové motorové vozidlá alebo trojkolesové motorové vozidlá
              s najväčšou konštrukčnou rýchlosťou 25 až 45{" "}
              <span className="scale-120">
                km.h<sup>-1</sup>
              </span>{" "}
            </span>
            , ktoré sú charakterizované,
          </p>
          <ul className="list-decimal">
            <li>
              ak ide o dvojkolesové vozidlo, motorom, ktorého zdvihový objem
              valcov motora nepresahuje 50{" "}
              <span className="scale-120">
                cm<sup>3</sup>
              </span>{" "}
              v prípade spaľovacieho motora alebo ktorého najväčší trvalý
              menovitý výkon nie je väčší ako 4 kW v prípade elektrického
              motora, a
            </li>
            <li>
              ak ide o trojkolesové vozidlo, motorom, ktorého zdvihový objem
              valcov motora nepresahuje 50{" "}
              <span className="scale-120">
                cm<sup>3</sup>
              </span>{" "}
              v prípade zážihového motora, najväčší čistý výkon nie je väčší ako
              4 kW v prípade spaľovacieho motora alebo ktorého najväčší trvalý
              menovitý výkon nie je väčší ako 4 kW v prípade elektrického
              motora, a
            </li>
          </ul>
          <p>
            b)
            <span className="font-bold">
              {" "}
              ľahké štvorkolky, ktorými sú štvorkolesové motorové vozidlá,
              ktorých prevádzková hmotnosť je menšia ako 350 kg bez hmotnosti
              batérií v prípade elektrických vozidiel, ktorých najväčšia
              konštrukčná rýchlosť nepresahuje 45{" "}
              <span className="scale-120">
                km.h<sup>-1</sup>
              </span>{" "}
            </span>
            , a ktorých
          </p>
          <ul className="list-decimal">
            <li>
              zdvihový objem valcov motora nepresahuje 50{" "}
              <span className="scale-120">
                cm<sup>3</sup>
              </span>{" "}
              v prípade zážihových motorov,
            </li>
            <li>
              najväčší čistý výkon nie je väčší ako 4 kW v prípade iných
              spaľovacích motorov, alebo
            </li>
            <li>
              najväčší trvalý menovitý výkon nie je väčší ako 4 kW v prípade
              elektrického motora.
            </li>
          </ul>
          <p>
            Vek: <span className="font-bold">15 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">16,50 €</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default am;
