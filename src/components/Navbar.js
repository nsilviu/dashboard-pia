import React from "react";
import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <div className="mx-2 mt-4 flex flex-row items-center justify-between">
      <div className="ml-4 flex justify-center align-middle font-extrabold">
        <p className="flex items-center text-2xl text-white">Dashboard PIA</p>
      </div>
      <MenuButton />
    </div>
  );
}
