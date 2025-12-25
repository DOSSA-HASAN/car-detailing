import { Clipboard, Car, ShieldCheck, Sparkles } from "lucide-react";
import React from "react";
import ProcessCard from "./ProcessCard";

const steps = [
  {
    icon: Clipboard,
    title: "Choose Service",
    text: "Select the detailing package that fits your car's needs.",
  },
  {
    icon: Car,
    title: "Drop Off/Mobile",
    text: "Bring your car to us or we come to your location.",
  },
  {
    icon: Sparkles,
    title: "Expert Cleaning",
    text: "Our pros handle your vehicle with extreme care.",
  },
  {
    icon: ShieldCheck,
    title: "Ready to Go",
    text: "Pick up your vehicle with a fresh showroom shine.",
  },
];

function Process() {
  return (
    <section className="w-full bg-gray-50 py-20 px-10 bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase">
            Our Work Process
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            How We Get Your Car <span className="text-blue-700">Perfect</span>
          </p>
        </header>

        {/* Responsive Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* The Card */}
              <ProcessCard
                icon={step.icon}
                title={step.title}
                text={step.text}
              />

              {/* The Connector Line - Only show if not the last item */}
              {index !== steps.length - 1 && (
                <div className="flex items-center justify-center w-full lg:w-auto py-4 lg:py-0">
                  {/* Vertical line for Mobile, Horizontal for Desktop */}
                  <div className="h-12 w-[2px] lg:h-[2px] lg:w-16 xl:w-24 border-l-2 lg:border-l-0 lg:border-t-2 border-dashed border-blue-300"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
