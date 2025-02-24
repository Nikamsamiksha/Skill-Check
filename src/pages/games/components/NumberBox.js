import React from "react";
// NumberBox Component
export const NumberBox = ({ number, verifyAns }) => {
  return (
    <button
      className="bg-primary-300 p-3 w-24 h-16 text-lg font-bold rounded-lg shadow-lg"
      onClick={() => verifyAns(number)}
    >
      {number}
    </button>
  );
};
