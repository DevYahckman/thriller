import React from "react";

function Input({logo, label, type, placeholder, width}) {
  return (
    <div>
      <form class="mt-6">
        <div className="mb-4">
          <label className="text-sm">{label}</label>

          <div className="flex rounded-xl " >
            <p className="bg-white p-5 ">
             {logo}
            </p>
            <input
            type={type}
              className={`focus:outline-0 border-none p-2 w-${'full'}`}
              placeholder={placeholder}
            />
          </div>
        </div>
      </form>

    </div>
  );
}

export default Input;
