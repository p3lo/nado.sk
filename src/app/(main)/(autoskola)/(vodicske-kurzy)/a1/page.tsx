import Picture from "@/components/Picture";
import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function a1() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="A1" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Do skupiny motorových vozidiel <span className="font-bold">A1</span>{" "}
            patria:
          </p>
          <p>
            a)
            <span className="font-bold">
              {" "}
              dvojkolesové motorové vozidlá bez postranného vozíka alebo s
              postranným vozíkom vybavené motorom s najväčšou konštrukčnou
              rýchlosťou vyššou ako 45{" "}
              <span className="scale-120">
                km.h<sup>-1</sup>
              </span>{" "}
            </span>
            , ktorých zdvihový objem valcov motora nepresahuje 125{" "}
            <span className="scale-120">
              cm<sup>3</sup>
            </span>{" "}
            a výkon nie je väčší ako 11 kW a pomer výkon/najväčšia prípustná
            celková hmotnosť nepresahuje 0,1 kW/kg,
          </p>
          <p>
            b){" "}
            <span className="font-bold">
              motorové trojkolky, ktorými sú vozidlá s tromi symetricky
              usporiadanými kolesami, vybavené motorom
            </span>{" "}
            , ktorý má zdvihový objem väčší ako 50{" "}
            <span className="scale-120">
              cm<sup>3</sup>
            </span>{" "}
            , ak je to spaľovací motor, alebo s najvyššou konštrukčnou
            rýchlosťou vyššou ako 45{" "}
            <span className="scale-120">
              km.h<sup>-1</sup>
            </span>{" "}
            , ktorých výkon nepresahuje 15 kW.
          </p>
          <p>
            Vek: <span className="font-bold">16 rokov</span>
          </p>
          <p>
            Kolok na skúšky: <span className="font-bold">16,50 €</span>
          </p>
        </div>
        <div className="w-full mt-10">
          <Picture picture="/A1.webp" />
        </div>
      </div>
    </div>
  );
}

export default a1;
