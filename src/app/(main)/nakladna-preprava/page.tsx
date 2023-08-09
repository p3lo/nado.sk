import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function nakladnaPreprava() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Nákladná preprava" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Na nákladnú vnútroštátnu a medzinárodnú prepravu tovarov nám slúžia
            vozidlá značky IVECO a VOLVO
          </p>
        </div>
      </div>
    </div>
  );
}

export default nakladnaPreprava;
