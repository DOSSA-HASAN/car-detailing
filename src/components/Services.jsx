import { ArrowRightCircle, Car } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <main className="max-w-[1400px] w-full m-auto flex flex-col justify-start items-center px-10 h-auto py-7">
        <h2 className="text-blue-500 text-xl w-full">OUR SERVICES</h2>
        <p className="w-full font-bold text-gray-900 text-3xl mt-3 ">
          Discover Our{" "}
          <span className="text-blue-700">Car Detailing Services</span>
        </p>
      </main>
      <article className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 justify-center items-center px-10 py-7">
        <ServicesCard
          src={"/hero-img-1.png"}
          icon={Car}
          title={"Exterior Detailing"}
          text={
            "A multi-stage machine polishing process that removes 90% of swirl marks, light scratches, and oxidation to restore a mirror-like finish."
          }
        />
        <ServicesCard
          src={"/hero-img-1.png"}
          icon={Car}
          title={"Exterior Detailing"}
          text={
            "A multi-stage machine polishing process that removes 90% of swirl marks, light scratches, and oxidation to restore a mirror-like finish."
          }
        />
        <ServicesCard
          src={"/hero-img-1.png"}
          icon={Car}
          title={"Exterior Detailing"}
          text={
            "A multi-stage machine polishing process that removes 90% of swirl marks, light scratches, and oxidation to restore a mirror-like finish."
          }
        />
      </article>
    </section>
  );
}

export default Services;
