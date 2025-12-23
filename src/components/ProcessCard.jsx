import { Car } from "lucide-react";
import React from "react";

function ProcessCard({ icon: Icon, title, text }) {
  return (
    <main className="flex flex-col justify-center items-center text-center min-h-[150px]">
      {/* Icon cont */}
      <div className="w-[50px] h-[50px] bg-blue-700 rounded-full flex justify-center items-center shadow-red-700">
        {Icon && <Icon color="white" size={24} />}
      </div>
      {/* text cont */}
      <article className="m-w-[70%]">
        <p className="text-gray-800 font-bold text-lg">{title}</p>
        <p className="text-gray-400 text-sm">{text}</p>
      </article>
    </main>
  );
}

export default ProcessCard;
