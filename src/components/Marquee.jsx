import { motion } from "framer-motion";
import { Slack } from "lucide-react";

const Marquee = () => {
  const items = [
    "Ceramic Coating",
    "Paint Correction",
    "Interior Detail",
    "Mobile Service",
    "Engine Bay Cleaning",
    "Window Tinting",
  ];

  return (
    <div className="relative flex overflow-x-hidden bg-blue-700 py-5 border-y border-white/10">
      {/* Container for the sliding items */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }} // Slide halfway (through the first set)
        transition={{
          ease: "linear",
          duration: 20, // Adjust for speed
          repeat: Infinity,
        }}
      >
        {/* First set of items */}
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-8 text-2xl font-bold uppercase text-white hover:text-gray-200 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}

        {/* Second set of items */}
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-8 text-2xl font-bold uppercase text-white hover:text-gray-200 transition-colors cursor-default flex justify-center items-center"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
