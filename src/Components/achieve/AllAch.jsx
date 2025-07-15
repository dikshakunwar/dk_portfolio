import React from "react";

const AllAch = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-2 p-[30px]">
      <div className="pt-[20px] p-[50px] border-2 rounded-2xl border-ShadowBlue bg-ShadowBlue/40">
        <h1 className="font-body font-bold text-2xl">SEFA 2025 Selection</h1>
        <p className="font-body2 text-justify">
          Selected for SEFA 2025 in recognition of my consistent academic
          excellence, leadership qualities, and active participation in
          technical activities throughout my Computer Science journey.
        </p>
      </div>
      <div className="pt-[20px] p-[50px] border-2 rounded-2xl border-ShadowBlue bg-ShadowBlue/40">
        <h1 className="font-body font-bold text-2xl">
          300+ LeetCode Problems Solved
        </h1>
        <p className="font-body2 text-justify">
          Solved over 300+ LeetCode problems, strengthening my grasp on data
          structures and algorithms. This reflects my consistent practice and
          commitment to improving my coding and problem-solving skills.
        </p>
      </div>
      <div className="pt-[20px] p-[50px] border-2 rounded-2xl border-ShadowBlue bg-ShadowBlue/40">
        <h1 className="font-body font-bold text-2xl">
          Academic Excellence (CGPA 8.95)
        </h1>
        <p className="font-body2 text-justify">
          Maintaining a latest CGPA of 8.95, I have consistently performed well
          across core computer science subjects, balancing practical skills and
          theoretical knowledge.
        </p>
      </div>
    </div>
  );
};

export default AllAch;
