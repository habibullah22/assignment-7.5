import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* In-Progress Card */}
        <div className="bg-gradient-to-r  from-purple-900 to-purple-400 text-white p-8 rounded-xl shadow-md relative overflow-hidden ">
          <div className="absolute inset-0 opacity-20 bg-[url('/vector1.png')] bg-cover"></div>

          <h2 className="text-lg font-semibold text-center relative z-10">In-Progress</h2>
          <p className="text-5xl text-center font-bold mt-4 relative z-10">0</p>
        </div>

        {/* Resolved Card */}
        <div className="bg-gradient-to-r from-green-700 to-green-700 text-white p-8 rounded-xl shadow-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/vector1.png')] bg-cover"></div>

          <h2 className="text-lg text-center font-semibold relative z-10">Resolved</h2>
          <p className="text-5xl text-center font-bold mt-4 relative z-10">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
