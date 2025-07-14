import React from "react";
import SkillText from "./SkillText.jsx";
import SkillAll from "./SkillAll.jsx";
import AllSkillsSM from "./AllSkillsSM.jsx";
import Subskills from "./Subskills.jsx";
const SkillMain = () => {
  return (
    <div id="skills" className="h-screen">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <SkillAll />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
      <Subskills />
    </div>
  );
};

export default SkillMain;
