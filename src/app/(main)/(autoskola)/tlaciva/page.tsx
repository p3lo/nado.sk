import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function tlaciva() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Tlačivá" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>Na zaradenie do kurzu je potrebné:</p>
          <ul className="list-disc">
            <li>
              aby žiadateľ vyplnil{" "}
              <span className="font-bold">prihlášku do kurzu</span>,
            </li>
            <li>
              aby žiadateľ vyplnil a podpísal{" "}
              <span className="font-bold">
                žiadosť o udelenie vodičského oprávnenia
              </span>
              ,
            </li>
            <li>
              aby si žiadateľ potvrdil u svojho všeobecného lekára{" "}
              <span className="font-bold">zdravotnú spôsobilosť</span>,
            </li>
            <li>aby zaplatil cenu kurzu, prípadne zálohu.</li>
          </ul>
          <p>
            Tieto dokumenty dostanete pri zápise do kurzu alebo si ich môžete
            stiahnuť tu:
          </p>
        </div>
      </div>
    </div>
  );
}

export default tlaciva;
