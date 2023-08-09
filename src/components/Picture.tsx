import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

function Picture({ picture }: { picture: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          className="cursor-pointer"
          src={picture}
          width={250}
          height={250}
          alt="Obrazok"
          objectFit="contain"
        />
      </DialogTrigger>
      <DialogContent>
        <Image
          className="p-10"
          src={picture}
          fill
          alt="Obrazok"
          objectFit="contain"
        />
      </DialogContent>
    </Dialog>
  );
}

export default Picture;
