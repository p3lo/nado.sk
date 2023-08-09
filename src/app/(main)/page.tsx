import TitleSubsection from "@/components/TitleSubsection";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Autoškola Ing. NAĎO" />
      <div className="py-10 mx-[10%]">
        <div className="text-sm">
          <ul className="list-disc">
            <li>Autoškola s najdlhšou tradíciou v regióne, od roku 1990.</li>
            <li>Rozsiahly vozový park.</li>
            <li>Vlastné autocvičisko vo vlastnom areáli.</li>
            <li>Ponúkame vodičské preukazy na všetky skupiny + KKV.</li>
            <li>
              Ponúkame Vám vnútroštátnu a medzinárodnú autobusovú dopravu.
            </li>
            <li>Nákladnú vnútroštátnu a medzinárodnú prepravu tovarov.</li>
          </ul>
        </div>
      </div>
      <p className="mx-[10%] text-lg text-cyan-400">
        Autoškola Ing. NAĎO - s nami to zvládnete
      </p>
    </div>
  );
}

export default Home;
