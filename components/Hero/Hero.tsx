import React from "react";

const Hero = () => {
  return (
    <div className="flex mt-10 jusfity-between w-full">
      <div className=" flex flex-col gap-3">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Bidhan <span className="text-tertiary">Bhuwai</span>
        </h1>
        <h2 className="text-lg font-Roboto-Slab">Full Stack Developer</h2>
        <p className="text-md text-text-secondary w-full ">
          I began my journey in game development at the age of 16. Now, I am a
          full-stack developer with expertise in both front-end and back-end
          development.
        </p>
      </div>
    </div>
  );
};

export default Hero;
