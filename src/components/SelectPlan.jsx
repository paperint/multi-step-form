import React, { useState } from "react";
import PlanMonth from "./PlanMonth";
import PlanYear from "./PlanYear";

function SelectPlan({ plan, setPlan, bill, setBill }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-marine-blue">Select your plan</h1>
      <p className=" text-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <div>
        <ul className="flex flex-col gap-4 mb-4 lg:flex-row lg:w-full">
          {bill ? (
            <PlanYear plan={plan} setPlan={setPlan} />
          ) : (
            <PlanMonth plan={plan} setPlan={setPlan} />
          )}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-6 lg:bg-light-blue lg:bg-opacity-25 lg:rounded-lg lg:py-3">
        <p
          className={`font-medium  ${
            bill ? `text-cool-gray` : `text-marine-blue `
          }`}
        >
          Monthly
        </p>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={bill}
            checked={bill}
            onChange={() => setBill(!bill)}
            class="sr-only peer"
          />
          <div class="w-14 h-7 bg-marine-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purplish-blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-marine-blue"></div>
        </label>
        <p
          className={`font-medium  ${
            bill ? `text-marine-blue` : `text-cool-gray `
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
}

export default SelectPlan;
