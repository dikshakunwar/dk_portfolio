import React from "react";
import AchText from "./AchText";
import AchTop from "./AchTop";
import AllAch from "./AllAch";
const AchMain = () => {
  return (
    <div id="Achieve" className="max-w-[1200px] mx-auto px-4">
      <AchText />
      <AchTop />
      <div className="w-full h-1 lg:block sm:hidden"></div>
      <AllAch />
    </div>
  );
};

export default AchMain;
