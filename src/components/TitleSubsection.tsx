import React from "react";

function TitleSubsection({ title }: { title: string }) {
  return (
    <div className="bg-slate-100 flex h-[80px] items-center">
      <p className="text-xl mx-[10%]">{title}</p>
    </div>
  );
}

export default TitleSubsection;
