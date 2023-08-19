import React, { useEffect, useState } from "react";

function PersonalInfo({ setCheckFirstStep }) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // pattern to checked email
  const patternPhone = /[0-9]{10}/; // pattern to checked phone
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const checkEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (pattern.test(currentEmail) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const checkPhone = (e) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);

    if (patternPhone.test(currentPhone) === false) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  const handleValidation = () => {
    if (name !== "" && pattern.test(email) && patternPhone.test(phone)) {
      setCheckFirstStep(true);
    } else {
      setCheckFirstStep(false);
    }
  };

  useEffect(() => {
    handleValidation();
  }, [name, email, phone]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-marine-blue">Personal info</h1>
      <p className=" text-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <label htmlFor="name">
        <p className="text-marine-blue">Name</p>
        <input
          type="text"
          id="name"
          placeholder="e.g.Stephen King"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-1.5 w-full pl-4"
        />
      </label>
      <label htmlFor="email">
        <p className="text-marine-blue">
          Email Address
          {emailError && (
            <span className="float-right text-strawberry-red">
              Valid email required
            </span>
          )}
        </p>

        <input
          type="email"
          id="email"
          placeholder="e.g.stephenking@lorem.com"
          onChange={checkEmail}
          className={`border active:border-purplish-blue focus:border-purplish-blue outline-none rounded-md p-1.5 w-full pl-4 ${
            emailError
              ? `border-strawberry-red focus:border-strawberry-red active:border-strawberry-red outline-none`
              : ``
          }`}
        />
      </label>
      <label htmlFor="phone">
        <p className="text-marine-blue">
          Phone Number{" "}
          {phoneError && (
            <span className="float-right text-strawberry-red">
              Valid phone required
            </span>
          )}
        </p>
        <input
          type="text"
          id="phone"
          placeholder="e.g.+1 234 567 890"
          onChange={checkPhone}
          className={`border active:border-purplish-blue focus:border-purplish-blue outline-none rounded-md p-1.5 w-full pl-4 ${
            phoneError
              ? `border-strawberry-red focus:border-strawberry-red active:border-strawberry-red outline-none`
              : ``
          }`}
        />
      </label>
    </div>
  );
}

export default PersonalInfo;
