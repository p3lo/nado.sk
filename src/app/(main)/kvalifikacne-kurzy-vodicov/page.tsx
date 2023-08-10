import TitleSubsection from '@/components/TitleSubsection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Kvalifikačné kurzy vodičov',
  description:
    'Informácie o kvalifikačných kurzoch vodičov. Zistite, aké typy kurzov sú k dispozícii pre vodičov nákladných vozidiel a autobusov a aké sú požiadavky na získanie kvalifikácie. Na stránke nájdete aj informácie o Školiacom stredisku Ing. NAĎO s.r.o., ktoré je schválené na vykonávanie kurzov základnej kvalifikácie a pravidelného výcviku niektorých vodičov.',
};

function kvalifikacneKurzyVodicov() {
  return (
    <div className="flex flex-col">
      <TitleSubsection title="Kvalifikačné kurzy vodičov" />
      <div className="py-10 mx-[10%]">
        <div className="flex flex-col space-y-5 text-sm">
          <p>
            Kurz základnej kvalifikácie a pravidelného výcviku vodičov niektorých vozidiel (nad 3,5 tony) podľa zákona
            číslo 280/2006 Z.z.
          </p>
          <p>
            <span className="font-bold">Školiace stredisko Ing. NAĎO s.r.o.</span> na základe registrácie vydanej
            obvodným úradom pre CD a PK v Trenčíne podľa zákona NR SR č. 188/2009 Z.z.podľa § 4 ods.1
            <span className="font-bold">
              {' '}
              je schválené na vykonávanie kurzov základnej kvalifikácie a pravidelného výcviku niektorých vodičov.
            </span>{' '}
            V prípade Vášho záujmu Vám na základe žiadosti zašleme všetky potrebné informácie.
          </p>
          <p>
            Rozvoj trhu v členských štátoch a vstup SR do EÚ kladie zvýšené nároky na výkon povolania{' '}
            <span className="font-bold">vodičov nákladných vozidiel a autobusov.</span> Sprísnené pravidlá zverejnené v
            Smernici Rady a Európskeho parlamentu{' '}
            <span className="font-bold">2003/59/ES o základnej kvalifikácii a pravidelnom výcviku vodičov</span>
            určitých cestných vozidiel nákladnej a osobnej dopravy.
          </p>
          <p>
            Zákonom č. <span className="font-bold">188/2009 Z.z.</span>, ktorým sa{' '}
            <span className="font-bold">mení a dopĺňa zákon č. 280/2006 Z.z.</span> o povinnej základnej kvalifikácii a
            povinnom výcviku niektorých vodičov{' '}
            <span className="font-bold">v znení zákona č. 653/2007 Z.z.a o zmene a doplnení niektorých zákonov</span>,
            SR zapracovala pravidlá do svojho právneho poriadku{' '}
            <span className="font-bold">zákon NR SR č. 188/2009 Z.z. je platný od 23.5.2009 a účinný od 1.6.2009</span>
          </p>
          <p className="font-bold underline">Podľa zákona č. 280/2006 Z. z. rozdeľujeme kurzy na:</p>
          <p className="font-bold">1. KURZY ZÁKLADNEJ KVALIFIKÁCIE VODIČOV:</p>
          <ul className="list-disc">
            <li>
              pre vodičov nákladnej dopravy s vodičským oprávnením na skupinu C, CE alebo C1, C1E získaným po 10.9.2009
            </li>
            <li>
              pre vodičov osobnej dopravy s vodičským oprávením na skupinu D, DE alebo D1, D1E získané po 10.9.2008
            </li>
          </ul>
          <p className="underline">Podľa rozsahu trvania delíme kurzy základnej kvalifikácie na:</p>
          <ul className="list-disc">
            <li>Riadny v trvaní 280 hodín</li>
            <li>Zrýchlený v trvaní 140 hodín</li>
            <li>Riadny rozdielový v trvaní 70 hodín</li>
            <li>Zrýchlený rozdielový v trvaní 35 hodín</li>
          </ul>
          <p>
            * Rozdielové kurzy základnej kvalifikácie vodičov sú pre vodičov, ktorí absolvovali kurz základnej
            kvalifikácie
          </p>
          <p>na osobnú dopravu a chcú vykonávať aj na nákladnú dopravu a naopak.</p>
          <p className="font-bold">2. KURZY PRAVIDELNÉHO VÝCVIKU VODIČOV:</p>
          <ul className="list-disc">
            <li>
              pre vodičov nákladnej dopravy s vodičským oprávnením na skupinu C, CE alebo C1, C1E do 10.9.2009 (do
              10.9.2014)
            </li>
            <li>
              pre vodičov osobnej dopravy s vodičským oprávnením na skupinu D, DE alebo D1, D1E do 10.9. 2010 (do
              10.9.2013)
            </li>
            <li>pre vodičov osobnej a nákladnej dopravy pred skončením platnosti KKV</li>
          </ul>
          <p>Kurz pravidelného výcviku vodičov je vykonávaný raz za 5 rokov v trvaní 35 hodín.</p>
          <div className="w-full h-1 border-b" />
          <p>
            Viac informácií nájdete na oficiálnej stránke podporovanej Ministerstvom dopravy, výstavby a regionálneho
            rozvoja SR
          </p>
          <a
            className="text-cyan-500"
            href="http://www.kkv.sk/aky-kurz-potrebujem-2e.html"
            target="_blank"
            rel="noreferrer"
          >
            www.kkv.sk/aky-kurz-potrebujem-2e.html
          </a>
        </div>
      </div>
    </div>
  );
}

export default kvalifikacneKurzyVodicov;
