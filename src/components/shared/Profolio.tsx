import React from "react";

const ProfolioItem = () => {
  return (
    <div className="group w-full bg-white drop-shadow-md ">
      <div className="h-[200%] overflow-hidden relative">
        <div className="h-50% flex flex-col items-center">
          <img src="https://www.vmogroup.com/static/media/img_drone_thumbnail.8423b049.png"></img>
          <p>Drone Delivery</p>
        </div>
        <div className="h-50% flex absolute top-full z-1 flex-col group-hover:translate-y-[-100%] bg-[darkcyan] text-white items-center">
          <p>Drone Delivery</p>
          <p>
            A delivery-by-Drone project with amazing obstacle avoidance feature
            and more.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfolioItem;
