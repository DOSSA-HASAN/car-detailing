import { ArrowRight, ArrowRightCircle, Check, Circle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function WhyUs() {
  const techniques = [
    "Advanced Clearing Techniques",
    "CUstomer-Centric Approach",
    "Quick And Efficient Service",
  ];
  return (
    <section className="w-full bg-black py-20 px-10 text-white">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-white font-bold tracking-widest text-sm uppercase">
            WHY CHOOSE US
          </h2>
          <p className="text-3xl font-bold text-white mt-2">
            Benefits of Our Car Wash Services:{" "}
          </p>
          <p className="text-white text-3xl font-bold">
            Your{" "}
            <span className="text-orange-700">Key to a Spotless Shine</span>
          </p>
        </header>
      </div>
      <main className="flex justify-between items-center">
        {/* Right side of content */}
        <figure className="hidden lg:flex justify-center items-start flex-1">
          <div
            className="w-[300px] h-[300px] rounded-full bg-center bg-cover bg-no-repeat lg:mr-10 relative"
            style={{ backgroundImage: "url('./why-us-img-1.png')" }}
          >
            <div className="h-[60px] w-[100%] bg-orange-700 rounded-full border-5 border-black absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center">
              <Circle color="white" fill="white" />
              <p className="ml-5 font-medium">On-The-Go Car Detailing</p>
            </div>
          </div>
          <div
            className="w-[175px] h-[400px] rounded-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('./why-us-img-1.png')" }}
          ></div>
        </figure>
        {/* Left side of content */}
        <article className="flex flex-col justify-center items-start flex-1 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium
            automotive detailing sed do eiusmod tempor
          </p>
          <div className="flex justify-between items-center border-t-1 border-b-1 border-gray-400 p-4 w-full mt-5 mb-5">
            <div className="border-r-1 border-gray-400 w-1/2 lg:pl-5">
              <p className="text-white font-bold text-4xl">85K+</p>
              <p>Total Cars Washed</p>
            </div>
            <div className="lg:pr-5">
              <p className="text-white font-bold text-4xl">5K+</p>
              <p>Happy Clients</p>
            </div>
          </div>
          <div>
            {techniques.map((technique, index) => (
              <div className="flex justify-start items-center mt-3">
                <div className="border-1 border-orange-500 bg-orange-500 rounded-full w-[25px] h-[25px] flex justify-center items-center mr-4">
                  <Check color="white" className="font-medium" />
                </div>
                <p>{technique}</p>
              </div>
            ))}
          </div>
          <Link className="bg-white rounded-full w-[200px] h-[50px] flex justify-between items-center p-2 mt-10">
            <div className="bg-blue-500 rounded-full h-[40px] w-[75%] text-center flex justify-center items-center text-white font-medium">
              Learn More
            </div>
            <ArrowRightCircle
              fill="black"
              color="white"
              className="h-[40px] w-[20%]"
            />
          </Link>
        </article>
      </main>
    </section>
  );
}

export default WhyUs;
