import React from "react";
import { Filter } from "./Logo";

export default function Chart() {
  return (
    <div className="m-4 flex h-auto flex-col rounded-2xl bg-slate-700 text-[#E9F1F7] shadow-xl">
      <div className="flex flex-row justify-between align-middle">
        <div className="px-4 pt-4 text-2xl font-bold">Leads</div>
        <div className="cursor-pointer px-4 pt-4 transition-transform hover:scale-110">
          <Filter />
        </div>
      </div>
      <div className="my-2 ml-4 w-[fit-content] cursor-pointer rounded-2xl bg-slate-600 p-2 text-[#7FEFBD] shadow-2xl">
        <p className="inline-block ">Last 7 days</p>
      </div>
      <div className="m-2 flex justify-start rounded-xl align-bottom opacity-75">
        <svg viewBox="0 0 170 100" className="relative">
          <rect
            className="fill-cyan-200"
            x="0"
            y="60"
            width="20"
            height="40"
            rx="3"
          />
          <text x="5" fill="#ffffff" y="55" z="3" fontSize={"4"} color="white">
            {"1800"}
          </text>
          <rect
            className="fill-cyan-200"
            x="25"
            y="45"
            width="20"
            height="55"
            rx="3"
          />
          <text x="30" fill="#ffffff" y="40" z="3" fontSize={"4"} color="white">
            {"2200"}
          </text>
          <rect
            className="fill-cyan-200"
            x="50"
            y="30"
            width="20"
            height="70"
            rx="3"
          />
          <text x="55" y="25" z="3" fill="#ffffff" fontSize={"4"} color="white">
            {"2500"}
          </text>
          <rect
            className="fill-cyan-200"
            x="75"
            y="10"
            width="20"
            height="90"
            rx="3"
          />
          <text x="80" y="5" z="3" fill="#ffffff" fontSize={"4"} color="white">
            {"2500"}
          </text>
          <rect
            className="fill-cyan-200"
            x="100"
            y="50"
            width="20"
            height="50"
            rx="3"
          />
          <text
            x="105"
            y="45"
            z="3"
            fill="#ffffff"
            fontSize={"4"}
            color="white"
          >
            {"1000"}
          </text>
          <rect
            className="fill-cyan-200"
            x="125"
            y="40"
            width="20"
            height="60"
            rx="3"
          />
          <text
            x="130"
            y="35"
            z="3"
            fill="#ffffff"
            fontSize={"4"}
            color="white"
          >
            {"1000"}
          </text>
          <rect
            className="fill-cyan-200"
            x="150"
            y="50"
            width="20"
            height="50"
            rx="3"
          />
          <text
            x="155"
            y="45"
            z="3"
            fill="#ffffff"
            fontSize={"4"}
            color="white"
          >
            {"1000"}
          </text>
        </svg>
      </div>
    </div>
  );
}
