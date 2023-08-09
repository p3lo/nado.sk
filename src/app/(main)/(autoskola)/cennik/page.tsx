import TitleSubsection from "@/components/TitleSubsection";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const prices_zaklad = [
  { skupina: "A", pre_skupiny: "AM, A1, A2", cena: "650 €" },
  { skupina: "A1", pre_skupiny: "AM", cena: "450 €" },
  { skupina: "A2", pre_skupiny: "AM, A1", cena: "580 €" },
  { skupina: "B", pre_skupiny: "B1, AM", cena: "820 €" },
  { skupina: "B - študent", pre_skupiny: "B1, AM", cena: "800 €" },
  { skupina: "RB/C", pre_skupiny: "T, C1", cena: "1500 €" },
  { skupina: "RC/D", pre_skupiny: "D1", cena: "1100 €" },
  { skupina: "BE", pre_skupiny: "-", cena: "450 €" },
  { skupina: "CE", pre_skupiny: "C1E, BE", cena: "650 €" },
  { skupina: "T", pre_skupiny: "-", cena: "650 €" },
];

const prices_skupiny = [
  { skupina: "B + A1", cena: "1100 €" },
  { skupina: "B + A2", cena: "1200 €" },
  { skupina: "B + A", cena: "1300 €" },
  { skupina: "B + T", cena: "1250 €" },
  { skupina: "Osobitný výcvik z A2 na A", cena: "250 €" },
  { skupina: "Osobitný výcvik z B na B96", cena: "3580 €" },
];

function Cennik() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Cenník" />
      <div className="py-10 mx-[10%] md:mx-[20%]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SKUPINA</TableHead>
              <TableHead className="text-center grow">
                SKUPINY, KTORÉ SÚ ZAHRNUTÉ V CENE
              </TableHead>
              <TableHead className="text-right">CENA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prices_zaklad.map((price) => (
              <TableRow key={price.skupina}>
                <TableCell className="font-bold whitespace-nowrap">
                  {price.skupina}
                </TableCell>
                <TableCell className="text-center whitespace-nowrap">
                  {price.pre_skupiny}
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  {price.cena}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="py-10 mx-[20%] md:mx-[30%] justify-center flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SKUPINA</TableHead>
              <TableHead className="text-right">CENA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prices_skupiny.map((price) => (
              <TableRow key={price.skupina}>
                <TableCell className="font-bold whitespace-nowrap">
                  {price.skupina}
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  {price.cena}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Cennik;
