import React from "react";

function ServicesCard({ src, icon: Icon, title, text }) {
  return (
    <main className="w-[80%] h-[350px]  flex flex-col justify-start items-start rounded-xl shadow-md overflow-hidden bg-white shadow-blue-900">
      <img src={src} alt="" className="w-full object-cover h-1/2" />
      <div className="flex flex-col justify-between items-start relative p-5 z-10 bg-transparent h-min-content bg-red-500">
        {Icon && (
          <div className="bg-blue-800 border-3 border-white absolute bottom-[80%] rounded-full p-3 flex justify-center items-center">
            <Icon size={40} className="text-white" />
          </div>
        )}
        <p className="text-gray-900 font-bold mt-4">{title}</p>
        <p className="text-medium text-gray-600 mb-[0%]">{text}</p>
      </div>
    </main>
  );
}

export default ServicesCard;
