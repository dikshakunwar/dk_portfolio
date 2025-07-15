import React from "react";
import AchTopLeft from "./AchTopLeft";
import AchTopRight from "./AchTopRight";
const AchTop = () => {
  return (
    <div className="flex md:flex-row sm:flex-col  justify-around h-auto mt-[7px] gap-4 sm:pt-[30px]">
      <AchTopLeft />
      <AchTopRight />
    </div>
  );
};

export default AchTop;
