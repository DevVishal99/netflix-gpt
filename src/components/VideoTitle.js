import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-[20%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-4 text-lg w-1/4">{overview}</p>
      <div>
        <button className="px-8 py-2 bg-gray-700 text-white rounded-lg"> Play</button>
        <button className="mx-2 px-8 py-2 bg-gray-700 text-white rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
