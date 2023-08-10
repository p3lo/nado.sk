'use client';
import React from 'react';
import { HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2';
import { AiOutlineMail } from 'react-icons/ai';
import { Racing_Sans_One } from 'next/font/google';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  navigationSubMenuTriggerStyle,
} from './ui/navigation-menu';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const racing = Racing_Sans_One({ weight: '400', subsets: ['latin'] });

function Header() {
  const [open, setOpen] = React.useState(false);
  const Drawer = () => (
    <div className="flex flex-col md:hidden">
      <div className="mx-[5%] md:mx-[10%] my-5 h-20 flex items-center justify-between">
        <Link href="/" className={`${racing.className} flex flex-col text-red-600`}>
          <h1 className="text-5xl">NAĎO</h1>
          <h3 className="pl-5 text-2xl">Autoškola</h3>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <RxHamburgerMenu className="w-8 h-8 font-bold" />
          </SheetTrigger>
          <SheetContent className="overflow-y-scroll w-[80%]" side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col w-full my-10 space-y-5">
              <Accordion type="single" collapsible className="w-full space-y-5">
                <AccordionItem value="item-1">
                  <AccordionTrigger className={navigationMenuTriggerStyle()}>AUTOŠKOLA</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <Accordion type="single" collapsible className="w-full space-y-5">
                        <AccordionItem value="item-2">
                          <AccordionTrigger className={navigationMenuTriggerStyle()}>Vodičské kurzy</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col">
                              <div className="flex w-full">
                                <Link
                                  href="/a"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  A
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/a1"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  A1
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/a2"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  A2
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/am"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  AM
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/b"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  B
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/be"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  BE
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/c"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  C
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/ce"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  CE
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/d"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  D
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/de"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  DE
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/t"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  T
                                </Link>
                              </div>
                              <div className="flex w-full">
                                <Link
                                  href="/minimalny-vek"
                                  onClick={() => setOpen(false)}
                                  className={`grow ${navigationMenuTriggerStyle()}`}
                                >
                                  Minimálny vek
                                </Link>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <div className="flex w-full">
                        <Link
                          href="/doskolovacie-kurzy"
                          onClick={() => setOpen(false)}
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Doškolovacie kurzy
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          href="/kondicne-jazdy"
                          onClick={() => setOpen(false)}
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Kondičné jazdy
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          href="/cennik"
                          onClick={() => setOpen(false)}
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Cenník
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          href="/tlaciva"
                          onClick={() => setOpen(false)}
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Tlačivá
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          href="/testy"
                          onClick={() => setOpen(false)}
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Testy
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          href="/zakon-o-cestnej-premavke"
                          onClick={() => setOpen(false)}
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Zákon o cestnej premávke
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex w-full border-b">
                <Link
                  href="/autobusova-doprava"
                  onClick={() => setOpen(false)}
                  className={`grow ${navigationMenuTriggerStyle()}`}
                >
                  AUTOBUSOVÁ DOPRAVA
                </Link>
              </div>
              <div className="flex w-full border-b">
                <Link
                  href="/nakladna-preprava"
                  onClick={() => setOpen(false)}
                  className={`grow ${navigationMenuTriggerStyle()}`}
                >
                  NÁKLADNÁ PREPRAVA
                </Link>
              </div>
              <div className="flex w-full border-b">
                <Link
                  href="/kvalifikacne-kurzy-vodicov"
                  onClick={() => setOpen(false)}
                  className={`grow ${navigationMenuTriggerStyle()}`}
                >
                  KVALIFIKAČNÉ KURZY VODIČOV
                </Link>
              </div>
              <div className="flex w-full border-b">
                <Link href="/kontakt" onClick={() => setOpen(false)} className={`grow ${navigationMenuTriggerStyle()}`}>
                  KONTAKT
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex w-full border-b shadow drop-shadow-md" />
    </div>
  );
  return (
    <header className="flex flex-col">
      <div className="flex w-full h-[80px] md:h-[40px]  bg-slate-200">
        <div className="flex space-x-0 md:space-x-5 h-[40px] mx-[5%] md:mx-[10%] md:items-center items-start justify-start my-3 md:my-0 space-y-1 md:space-y-0 md:justify-center text-xs text-gray-500 flex-col md:flex-row">
          <div className="flex items-center space-x-2">
            <HiOutlineMapPin />
            <p className="">A. Sládkoviča 631/95, 01861 Beluša</p>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlinePhone />
            <a href="tel:+421 905 222 200" className="hover:cursor-pointer">
              +421 905 222 200
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMail />
            <a href="mailTo:autoskola.nado@gmail.com" className="hover:cursor-pointer">
              autoskola.nado@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Drawer />
      <div className="mx-[5%] md:mx-[10%] my-5 h-20 md:flex hidden items-center justify-between">
        <Link href="/" className={`${racing.className} flex flex-col text-red-600`}>
          <h1 className="text-5xl">NAĎO</h1>
          <h3 className="pl-5 text-2xl">Autoškola</h3>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>ÚVOD</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavigationMenuTrigger>AUTOŠKOLA</NavigationMenuTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Vodičské kurzy</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <Link href="/a" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">A</DropdownMenuItem>
                        </Link>
                        <Link href="/a1" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">A1</DropdownMenuItem>
                        </Link>
                        <Link href="/a2" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">A2</DropdownMenuItem>
                        </Link>
                        <Link href="/am" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">AM</DropdownMenuItem>
                        </Link>
                        <Link href="/b" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">B</DropdownMenuItem>
                        </Link>
                        <Link href="/be" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">BE</DropdownMenuItem>
                        </Link>
                        <Link href="/c" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">C</DropdownMenuItem>
                        </Link>
                        <Link href="/ce" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">CE</DropdownMenuItem>
                        </Link>
                        <Link href="/d" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">D</DropdownMenuItem>
                        </Link>
                        <Link href="/de" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">DE</DropdownMenuItem>
                        </Link>
                        <Link href="/t" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">T</DropdownMenuItem>
                        </Link>
                        <Link href="/minimalny-vek" className="cursor-pointer">
                          <DropdownMenuItem className="cursor-pointer">Minimálny vek</DropdownMenuItem>
                        </Link>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <Link href="/doskolovacie-kurzy" className="cursor-pointer">
                    <DropdownMenuItem className="cursor-pointer">Doškolovacie kurzy</DropdownMenuItem>
                  </Link>
                  <Link href="/kondicne-jazdy" className="cursor-pointer">
                    <DropdownMenuItem className="cursor-pointer">Kondičné jazdy</DropdownMenuItem>
                  </Link>
                  <Link href="/cennik" className="cursor-pointer">
                    <DropdownMenuItem className="cursor-pointer">Cenník</DropdownMenuItem>
                  </Link>
                  <Link href="/tlaciva" className="cursor-pointer">
                    <DropdownMenuItem className="cursor-pointer">Tlačivá</DropdownMenuItem>
                  </Link>
                  <Link href="/testy" className="cursor-pointer">
                    <DropdownMenuItem className="cursor-pointer">Testy</DropdownMenuItem>
                  </Link>
                  <Link href="/zakon-o-cestnej-premavke" className="cursor-pointer">
                    <DropdownMenuItem className="cursor-pointer">Zákon o cestnej premávke</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/autobusova-doprava" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>AUTOBUSOVÁ DOPRAVA</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/nakladna-preprava" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>NÁKLADNÁ PREPRAVA</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/kvalifikacne-kurzy-vodicov" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  KVALIFIKAČNÉ KURZY VODIČOV
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>KONTAKT</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* <Separator /> */}
    </header>
  );
}

export default Header;
