import React from "react";
import Input from "./InputText";

const Form: React.FC<HTMLInputElement> = (props: HTMLInputElement) => {
  return (
    <form className="grid grid-cols-1 xl:grid-cols-2 gap-x-[30px]">
      <div>
        <Input placeholder="Name" className="h-[60px] items-center"></Input>
        <Input placeholder="Name" className="h-[60px] items-center"></Input>
        <Input placeholder="Name" className="h-[60px] items-center"></Input>
      </div>

      <Input placeholder="Massage" className="h-1/2"></Input>

      <div></div>
    </form>
  );
};
