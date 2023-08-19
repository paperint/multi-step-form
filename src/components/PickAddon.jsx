import React from "react";

function PickAddon({ addons, setAddons }) {
  const handleAddons = (index) => {
    const updatedAddons = [...addons];
    updatedAddons[index].checked = !updatedAddons[index].checked;
    setAddons(updatedAddons);
  };
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-marine-blue">Pick add-ons</h1>
      <p className=" text-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-5">
        {addons !== undefined &&
          addons.map((item, index) => (
            <label
              key={index}
              htmlFor={item.option}
              className={`inline-flex items-center justify-between w-full p-4 border rounded-lg ${
                item.checked
                  ? ` border-marine-blue outline-none border-2 bg-light-blue bg-opacity-25`
                  : ``
              }`}
            >
              <input
                type="checkbox"
                name="addon"
                id={item.option}
                checked={item.checked}
                onChange={() => handleAddons(index)}
                className="rounded w-7 h-7 peer"
              />
              <div>
                <p>{item.option}</p>
                <p>{item.description}</p>
              </div>
              <p className=" text-purplish-blue">+${item.price}/mo</p>
            </label>
          ))}
      </div>
    </div>
  );
}

export default PickAddon;
