import { div, p } from "framer-motion/client";
import { ArrowRightCircle, Facebook, Instagram, Link } from "lucide-react";
import React from "react";
import { Links } from "react-router-dom";

function ContactForm() {
  const carTypes = ["Small", "Medium", "Large"];
  const services = [
    "Exterior Wash",
    "Interior Detailing",
    "Exterior & Interior Detailing",
  ];

  const businessInfo = [
    {
      title: "Address",
      values: ["Westlands, Nairobi, Kenya"],
    },
    {
      title: "Contact",
      values: ["Phone: +254 123 456 789", "Email: cardetailing@gmail.com"],
    },
    {
      title: "Open Time",
      values: [
        "Monday - Friday: 10:00 - 20:00",
        "Saturday - Sunday: 11:00 - 18:00",
      ],
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase">
            Book Appointment
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            Book a <span className="text-blue-700">Detailing Appointment</span>
          </p>
        </header>
      </div>
      <main className="flex-col flex lg:flex-row justify-betwen items-center">
        <form className="w-full lg:flex-2">
          {/* Name and phone number row */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Name cont */}
            <div className="flex flex-col justify-start items-start w-full lg:w-1/2">
              <label htmlFor="name" className="text-gray-900 font-medium mb-2">
                Your Name *
              </label>
              <input
                className="bg-gray-200 p-3 rounded-md focus:outline-none w-full lg:w-[80%]"
                type="text"
                id="name"
                placeholder="John Doe"
              />
            </div>
            {/* Phone Number cont */}
            <div className="flex flex-col justify-start items-start w-full w-full lg:w-1/2">
              <label htmlFor="phone" className="text-gray-900 font-medium mb-2">
                Phone *
              </label>
              <input
                className="bg-gray-200 p-3 rounded-md focus:outline-none w-full lg:w-[80%]"
                type="tel"
                id="phone"
                placeholder="+254 123456789"
              />
            </div>
          </div>
          {/* Car type and preffered services row */}
          <div className="flex-col lg:flex-row flex justify-between items-center mt-5">
            {/* Car type cont */}
            <div className="flex flex-col jusity-start items-start w-full lg:w-1/2">
              <label htmlFor="car" className="text-gray-900 font-medium mb-2">
                Your Car Type <span className="text-blue-500">*</span>
              </label>
              <select
                className="bg-gray-200 p-3 rounded-md focus:outline-none w-full lg:w-[80%]"
                type="text"
                id="car"
                placeholder="John Doe"
              >
                {carTypes.map((type) => (
                  <option value="type">{type.toUpperCase()}</option>
                ))}
              </select>
            </div>
            {/* Prefferred services cont */}
            <div className="flex flex-col justify-start items-start w-full lg:w-1/2">
              <label
                htmlFor="services"
                className="text-gray-900 font-medium mb-2"
              >
                Preferred Services <span className="text-blue-500">*</span>
              </label>
              <select
                className="bg-gray-200 p-3 rounded-md focus:outline-none w-full lg:w-[80%]"
                type="text"
                id="services"
                placeholder="John Doe"
              >
                {services.map((type) => (
                  <option value="type">{type.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Date & Time cont */}
          <div className="flex-col lg:flex-row flex justify-between items-center mt-5">
            {/* Name cont */}
            <div className="flex flex-col jusity-start items-start w-full lg:w-1/2">
              <label htmlFor="date" className="text-gray-900 font-medium mb-2">
                Date *
              </label>
              <input
                className="bg-gray-200 p-3 rounded-md focus:outline-none w-full lg:w-[80%]"
                type="date"
                id="date"
                placeholder="John Doe"
              />
            </div>
            {/* Phone Number cont */}
            <div className="flex flex-col jusity-start items-start w-full lg:w-1/2">
              <label htmlFor="time" className="text-gray-900 font-medium mb-2">
                Time *
              </label>
              <input
                className="bg-gray-200 p-3 rounded-md focus:outline-none w-full lg:w-[80%]"
                type="time"
                id="time"
                placeholder="+254 123456789"
              />
            </div>
          </div>
          {/* Message cont */}
          <div className="flex flex-col jusity-start items-start w-full">
            <label htmlFor="message" className="text-gray-900 font-medium mb-2">
              Message
            </label>
            <input
              className="bg-gray-200 p-3 rounded-md focus:outline-none w-full lg:w-[90%] h-[150px] items-start"
              type="text"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          {/* Submit button */}
          <div className="flex justify-start items-center mt-5">
            <button className="bg-orange-500 p-2 rounded-full text-white font-medium px-6">
              Submit
            </button>
            <ArrowRightCircle fill="black" color="white" size={42} />
          </div>
        </form>
        <article className="w-full lg:flex-1 flex flex-col justify-between items-start bg-blue-500 text-white h-[450px] rounded-lg p-5 mt-10 lg:mt-0">
          {businessInfo.map((info) => (
            <div>
              <p className="font-bold text-xl">{info.title}</p>
              {info.values.map((value) => (
                <p className="font-sm text-gray-200">{value}</p>
              ))}
            </div>
          ))}
          <p className="font-bold text-3xl">Stay Connected</p>
          {/* Social links cont */}
          <div className="flex justify-start items-center">
            <div className="w-[50px] h-[50px] bg-orange-500 rounded-full flex justify-center items-center mr-5">
              <Facebook color="white" fill="white" />
            </div>
            <div className="w-[50px] h-[50px] bg-orange-500 rounded-full flex justify-center items-center">
              <Instagram color="white" />
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}

export default ContactForm;
