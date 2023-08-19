import React from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advanceIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

function PlanMonth({ setPlan, plan }) {
  return (
    <>
      <li className="p-2 lg:w-full">
        <input
          type="radio"
          name="plan"
          id="arcade"
          className="hidden peer"
          value="Arcade"
          checked={plan === "Arcade"}
          onChange={(e) => setPlan(e.target.value)}
        />
        <label
          htmlFor="arcade"
          className="flex items-center w-full p-4 border rounded-lg cursor-pointer border-light-gray hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:border-2 "
        >
          <div className="inline-flex items-center gap-5 lg:flex lg:flex-col lg:items-start">
            <div>
              <img src={arcadeIcon} alt="arcade" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Arcade</h3>
              <p className="text-sm font-medium text-cool-gray">$9/mo</p>
            </div>
          </div>
        </label>
      </li>
      <li className="p-2 lg:w-full">
        <input
          type="radio"
          name="plan"
          id="advance"
          className="hidden peer"
          value="Advance"
          checked={plan === "Advance"}
          onChange={(e) => setPlan(e.target.value)}
        />
        <label
          htmlFor="advance"
          className="flex items-center w-full p-4 border rounded-lg cursor-pointer border-light-gray hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:border-2 "
        >
          <div className="inline-flex items-center gap-5 lg:flex lg:flex-col lg:items-start">
            <div>
              <img src={advanceIcon} alt="advance" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Advance</h3>
              <p className="text-sm font-medium text-cool-gray">$12/mo</p>
            </div>
          </div>
        </label>
      </li>
      <li className="p-2 lg:w-full">
        <input
          type="radio"
          name="plan"
          id="pro"
          className="hidden peer"
          value="Pro"
          checked={plan === "Pro"}
          onChange={(e) => setPlan(e.target.value)}
        />
        <label
          htmlFor="pro"
          className="flex items-center w-full p-4 border rounded-lg cursor-pointer border-light-gray hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:border-2 "
        >
          <div className="inline-flex items-center gap-5 lg:flex lg:flex-col lg:items-start">
            <div>
              <img src={proIcon} alt="pro" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Pro</h3>
              <p className="text-sm font-medium text-cool-gray">$15/mo</p>
            </div>
          </div>
        </label>
      </li>
    </>
  );
}

export default PlanMonth;
