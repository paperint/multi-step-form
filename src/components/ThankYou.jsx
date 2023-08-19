import React from "react";
import thankIcon from "../assets/images/icon-thank-you.svg";

function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-12">
      <img src={thankIcon} alt="thank" />
      <h2 className="text-4xl font-bold text-marine-blue">Thank you!</h2>
      <p className="text-center text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYou;
