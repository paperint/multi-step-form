import React, { useState } from "react";
import MobileSideBar from "../components/MobileSideBar";
import PersonalInfo from "../components/PersonalInfo";
import SelectPlan from "../components/SelectPlan";
import PickAddon from "../components/PickAddon";
import AddonMonth from "../data/AddonMonth.js";
import AddonYearly from "../data/AddonYear.js";
import Finishing from "../components/Finishing";
import ThankYou from "../components/ThankYou";
import DesktopSideBar from "../assets/images/bg-sidebar-desktop.svg";
import "../App.css";

function Homepage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [checkFirstStep, setCheckFirstStep] = useState(false);
  const [addons, setAddons] = useState(null);
  const [plan, setPlan] = useState(false);
  const [bill, setBill] = useState(false);
  const [thank, setThank] = useState(null);
  const numberStep = [1, 2, 3, 4];

  const handleNextStep = () => {
    if (checkFirstStep) {
      setCurrentStep(2);
    } else {
      setCurrentStep(currentStep);
    }
  };

  const handleNextStep2 = () => {
    if (plan !== false) {
      setCurrentStep(3);
      if (bill === true) {
        setAddons(AddonYearly);
      } else {
        setAddons(AddonMonth);
      }
    } else {
      setCurrentStep(currentStep);
    }
  };

  const handlerGoBack = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep > 1 ? currentStep - 1 : currentStep);
  };
  return (
    <main className="h-screen bg-light-blue">
      <section className="px-8 py-12 lg:hidden">
        <article className="absolute top-0 left-0 w-full">
          <MobileSideBar />
        </article>
        <article className="flex items-center justify-center gap-5 mb-12">
          {numberStep.map((item, index) => (
            <div
              key={index}
              className={`border rounded-full font-medium w-7 text-white z-10 ${
                currentStep === index + 1
                  ? ` bg-light-blue text-marine-blue`
                  : ``
              }`}
            >
              <p className="text-center">{item}</p>
            </div>
          ))}
        </article>
        <article className="relative">
          <form className="w-full p-6 bg-white rounded-xl">
            {thank !== null && <ThankYou />}
            {thank === null && (
              <>
                {currentStep === 1 && (
                  <PersonalInfo setCheckFirstStep={setCheckFirstStep} />
                )}
                {currentStep === 2 && (
                  <SelectPlan
                    plan={plan}
                    setPlan={setPlan}
                    bill={bill}
                    setBill={setBill}
                  />
                )}
                {currentStep === 3 && (
                  <PickAddon addons={addons} setAddons={setAddons} />
                )}
                {currentStep === 4 && (
                  <Finishing
                    addons={addons}
                    plan={plan}
                    bill={bill}
                    setCurrentStep={setCurrentStep}
                  />
                )}
              </>
            )}
          </form>
        </article>
        <article className="absolute bottom-0 left-0 flex items-center justify-between w-full p-6 bg-white">
          {thank === null && (
            <>
              <div>
                {currentStep > 1 && (
                  <button
                    onClick={() =>
                      setCurrentStep(
                        currentStep > 1 ? currentStep - 1 : currentStep
                      )
                    }
                    className="text-cool-gray"
                  >
                    Go Back
                  </button>
                )}
              </div>
              <div>
                {currentStep === 1 && (
                  <button
                    onClick={handleNextStep}
                    className="float-right p-2 text-white rounded-md bg-marine-blue"
                  >
                    Next Step
                  </button>
                )}
                {currentStep === 2 && (
                  <button
                    onClick={handleNextStep2}
                    className="float-right p-2 text-white rounded-md bg-marine-blue"
                  >
                    Next Step
                  </button>
                )}
                {currentStep === 3 && (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="float-right p-2 text-white rounded-md bg-marine-blue"
                  >
                    Next Step
                  </button>
                )}
                {currentStep === 4 && (
                  <button
                    onClick={() => setThank(!null)}
                    className="float-right p-2 px-5 text-white rounded-md bg-purplish-blue"
                  >
                    Confirm
                  </button>
                )}
              </div>
            </>
          )}
        </article>
      </section>
      <section className="flex items-center justify-center h-screen max-lg:hidden">
        <article className="flex justify-center w-full max-w-5xl p-6 bg-white rounded-lg">
          <div className="relative flex gap-5 w-fit">
            <div>
              <img src={DesktopSideBar} alt="sidebar" className=" w-96" />
            </div>
            <div className="absolute top-0 left-0 flex flex-col gap-8 p-10">
              {numberStep.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-5 w-fit"
                >
                  <div
                    className={`border rounded-full font-medium flex justify-center items-center w-8 h-8 text-white  z-10${
                      currentStep === index + 1
                        ? ` bg-light-blue text-marine-blue`
                        : ``
                    }`}
                  >
                    <p className="text-center">{item}</p>
                  </div>
                  <div>
                    <p className="text-sm text-pastel-blue">Step {index + 1}</p>
                    {index === 0 && (
                      <p className="font-medium text-white">YOUR INFO</p>
                    )}
                    {index === 1 && (
                      <p className="font-medium text-white">SELECT PLAN</p>
                    )}
                    {index === 2 && (
                      <p className="font-medium text-white">ADD-ONS</p>
                    )}
                    {index === 3 && (
                      <p className="font-medium text-white">SUMMARY</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-lg">
              <form className="w-full p-6 bg-white rounded-xl">
                {thank !== null && <ThankYou />}
                {thank === null && (
                  <>
                    {currentStep === 1 && (
                      <PersonalInfo setCheckFirstStep={setCheckFirstStep} />
                    )}
                    {currentStep === 2 && (
                      <SelectPlan
                        plan={plan}
                        setPlan={setPlan}
                        bill={bill}
                        setBill={setBill}
                      />
                    )}
                    {currentStep === 3 && (
                      <PickAddon addons={addons} setAddons={setAddons} />
                    )}
                    {currentStep === 4 && (
                      <Finishing
                        addons={addons}
                        plan={plan}
                        bill={bill}
                        setCurrentStep={setCurrentStep}
                      />
                    )}
                  </>
                )}
                <div className="flex items-center justify-between w-full mt-20 bg-white">
                  {thank === null && (
                    <>
                      <div>
                        {currentStep > 1 && (
                          <button
                            onClick={handlerGoBack}
                            className="text-cool-gray"
                          >
                            Go Back
                          </button>
                        )}
                      </div>
                      <div>
                        {currentStep === 1 && (
                          <button
                            onClick={handleNextStep}
                            className="float-right p-2 text-white rounded-md bg-marine-blue"
                          >
                            Next Step
                          </button>
                        )}
                        {currentStep === 2 && (
                          <button
                            onClick={handleNextStep2}
                            className="float-right p-2 text-white rounded-md bg-marine-blue"
                          >
                            Next Step
                          </button>
                        )}
                        {currentStep === 3 && (
                          <button
                            onClick={() => setCurrentStep(currentStep + 1)}
                            className="float-right p-2 text-white rounded-md bg-marine-blue"
                          >
                            Next Step
                          </button>
                        )}
                        {currentStep === 4 && (
                          <button
                            onClick={() => setThank(!null)}
                            className="float-right p-2 px-5 text-white rounded-md bg-purplish-blue"
                          >
                            Confirm
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Homepage;
