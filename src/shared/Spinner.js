import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] ">
      <div className="w-16 h-16 border-b-4 border-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;