import React from "react";
import { BarChart, dataToPercent } from "./BarChart";
import { Filter } from "./Logo";

export default function ChartCard() {
  return (
    <div
      key={"container"}
      className="m-4 flex h-auto flex-col rounded-2xl bg-slate-700 text-[#E9F1F7] shadow-xl"
    >
      <div className="flex flex-row justify-between align-middle">
        <div className="px-4 pt-4 text-2xl font-bold">Leads</div>
        <div className="cursor-pointer px-4 pt-4 transition-transform hover:scale-110">
          <Filter />
        </div>
      </div>
      <div
        onClick={dataToPercent}
        className="my-2 ml-4 w-[fit-content] cursor-pointer rounded-2xl bg-slate-600 p-2 text-[#7FEFBD] shadow-2xl"
      >
        <p className="inline-block">Last 7 days</p>
      </div>
      <div className="m-2 flex justify-start rounded-xl align-bottom opacity-75">
        <BarChart key={"barchart"} />
      </div>
    </div>
  );
}
