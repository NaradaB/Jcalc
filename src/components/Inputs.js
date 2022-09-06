import React from "react";
import GenderRadio from "./GenderRadio";
import ActivityLevel from "./ActivityLevel";
import InputField from "./InputField";

import { setAge, setWeight, setHeight } from "../features/userInputSlice";

function Inputs() {
  return (
    <div className="flex h-80 w-80 bg-none border rounded-md border-white/20 text-white/40">
      <div className="flex-row text-left ml-5">
        <GenderRadio></GenderRadio>
        <div className="w-1/2">
          <div className="mb-3 w-1/1">
            <InputField label="Age" setter={setAge}></InputField>
          </div>
          <div className="mb-3 w-1/1">
            <InputField label="Weight (kg)" setter={setWeight}></InputField>
          </div>
          <div className="mb-3">
            <InputField label="Height (cm)" setter={setHeight}></InputField>
          </div>
        </div>
        <div className="-mb-3 -mt-2 text-xs">Activity</div>
        <div className="w-1/1 mt-5">
          <ActivityLevel></ActivityLevel>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
