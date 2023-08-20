import React, { useEffect, useState } from "react";

function Finishing({ addons, plan, bill, setCurrentStep }) {
  const adds = addons.filter((item) => item.checked);
  const [planPrice, setPlanPrice] = useState(0);

  const handlerPrice = () => {
    if (!bill) {
      if (plan === "Arcade") {
        setPlanPrice(9);
      } else if (plan === "Advance") {
        setPlanPrice(12);
      } else if (plan === "Pro") {
        setPlanPrice(15);
      }
    } else {
      if (plan === "Arcade") {
        setPlanPrice(90);
      } else if (plan === "Advance") {
        setPlanPrice(120);
      } else if (plan === "Pro") {
        setPlanPrice(150);
      }
    }
  };

  const calculateTotalPrice = () => {
    const addSumPrice = adds.reduce((sum, item) => sum + item.price, 0);
    return addSumPrice + planPrice;
  };

  useEffect(() => {
    handlerPrice();
  }, [plan, bill]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-marine-blue">Pick add-ons</h1>
      <p className=" text-cool-gray">
        Double-check everything looks OK before confirming.
      </p>
      <div className="p-4 bg-opacity-50 rounded-lg bg-light-gray">
        <div className="flex items-center justify-between pb-5 border-b-2 border-light-gray">
          <div>
            {bill ? (
              <h2 className="font-medium text-marine-blue">{plan} (Yearly)</h2>
            ) : (
              <h2 className="font-medium text-marine-blue">{plan} (Monthly)</h2>
            )}

            <p
              onClick={() => setCurrentStep(2)}
              className="text-sm underline cursor-pointer text-cool-gray"
            >
              Change
            </p>
          </div>
          {bill ? (
            <p className="font-bold text-marine-blue"> ${planPrice}/yr</p>
          ) : (
            <p className="font-bold text-marine-blue"> ${planPrice}/mo</p>
          )}
        </div>
        <div className="flex flex-col gap-3 pt-5">
          {adds.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-cool-gray"> {item.option} </p>
              {bill ? (
                <p className=" text-marine-blue"> +${item.price}/yr </p>
              ) : (
                <p className=" text-marine-blue"> +${item.price}/mo </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        {bill ? (
          <>
            <p className="text-cool-gray">Total (per year)</p>
            <p className="text-marine-blue">${calculateTotalPrice()}/year</p>
          </>
        ) : (
          <>
            <p className="text-cool-gray">Total (per month)</p>
            <p className="text-marine-blue">${calculateTotalPrice()}/mo</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Finishing;
