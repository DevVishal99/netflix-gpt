import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-[55%] md:py-[15%] px-5 md:px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-lg md:text-6xl font-bold">{title}</h1>
      <p className="md:py-4 md:text-lg text-sm md:w-1/4 hidden md:inline-block">{overview}</p>
      <div>
        <button className="md:px-8 px-4 md:py-2 py-1 mt-2 md:mt-0 bg-white opacity-80 text-black rounded-lg font-bold"> Play</button>
        <button className="hidden md:inline-block mx-2 px-8 py-2 bg-gray-700 text-white rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
