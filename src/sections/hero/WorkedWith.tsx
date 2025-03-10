import React from "react";
import { anmolImg, helpeeImg, hero_data, millatImg } from "../../@assets";
import Marquee from "../../@components/Marquee";

const org_imgs = [anmolImg, helpeeImg, millatImg];

const WorkedWith = () => {
  return (
    <div className="worked-with">
      <h2 className="text-center">Proudly worked with:</h2>
      <div className="organisations">
        <Marquee images={org_imgs} speed={5} />
      </div>
    </div>
  );
};

export default WorkedWith;
