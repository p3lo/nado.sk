import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function testy() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Testy" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>Testovanie si môžete vyskúšat online - kliknutím na odkaz:</p>
          <a
            className="text-cyan-500"
            href="http://www.kvizmajster.sk/testy_na_vodicsky_preukaz.php"
            target="_blank"
            rel="noreferrer"
          >
            Online test
          </a>
        </div>
      </div>
    </div>
  );
}

export default testy;
