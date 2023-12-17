import React from "react";

const Hero = () => {
  return (
    <div className="flex mt-20 jusfity-between w-full">
      <div className=" flex flex-col gap-3">
        <h1 className="text-4xl font-bold md:text-6xl">Bidhan Bhuwai</h1>
        <h2 className="text-lg font-Roboto-Slab">Full Stack Developer</h2>
        <p className="text-md text-text-secondary w-full md:w-1/2">
          Started at the age of 16 from game development.Now I am a full stack
          developer with a focus on both front-end and back-end development.
          <br />I thrive on creating applications that not only look great but
          also function seamlessly.
        </p>
      </div>
     
    </div>
  );
};

export default Hero;
