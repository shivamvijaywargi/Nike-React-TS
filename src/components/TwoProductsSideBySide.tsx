import React from "react";

const TwoProductsSideBySide = () => {
  return (
    <div className="container mx-auto mt-8 p-4 md:p-0">
      <h2 className="text-xl">The Essentials</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <video
            className="w-full h-full"
            src="/nike-just-do-it.mp4"
            autoPlay
            muted={true}
            loop
          />
          <div className="absolute bottom-8 left-4">
            <p className="text-black text-2xl">
              Mood-boosting Essentials in Pretty Pastels
            </p>
            <button className="px-6 py-2 text-lg mt-3 rounded-full bg-black text-white">
              Shop
            </button>
          </div>
        </div>
        <div className="relative">
          <img src="/man1.webp" alt="Man" />
          <div className="absolute bottom-8 left-4">
            <p className="text-white text-2xl">Varsity Vintage Styles</p>
            <button className="px-6 py-2 text-lg mt-3 rounded-full bg-white">
              Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoProductsSideBySide;
