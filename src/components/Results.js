import React from "react";
import { useSelector } from "react-redux";

function Results() {
  const inputs = useSelector((state) => state.user.value);

  const bmr = () => {
    return inputs.gender === "male"
      ? 66 + 13.7 * inputs.weight + 5 * inputs.height - 6.8 * inputs.age
      : 655 + 9.6 * inputs.weight + 1.8 * inputs.height - 4.7 * inputs.age;
  };

  const sanitiseResult = (bmr, isTdee) => {
    return isNaN(bmr)
      ? "N/a"
      : isTdee
      ? Math.round(bmr * inputs.activity)
      : Math.round(bmr);
  };
  return (
    <div className="flex flex-col  text-center justify-center h-80 w-80 bg-none border rounded-md border-white/20 text-white/40  ml-5">
      <div className="text-xl font-Raleway mt-2">BMR</div>
      <div className="h-px w-3/4 bg-white/20 ml-auto mr-auto mt-2 mb-2"></div>
      <div className="text-2xl">{sanitiseResult(bmr(), false)}</div>
      <div className="h-px w-3/4 bg-white/20 ml-auto mr-auto mt-2 mb-2"></div>
      <div className="text-2xl font-Raleway">TDEE</div>
      <div className="text-4xl font-bold">{sanitiseResult(bmr(), true)}</div>
    </div>
  );
}

export default Results;
