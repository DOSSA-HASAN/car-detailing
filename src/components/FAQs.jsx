import { div } from "framer-motion/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function FAQs() {
  const [showCurrent, setCurrent] = useState(null);
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium automotive detailing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, paint correction",
    },
    {
      question: "What services do you offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium automotive detailing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, paint correction",
    },
    {
      question: "What services do you offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium automotive detailing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, paint correction",
    },
    {
      question: "What services do you offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium automotive detailing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, paint correction",
    },
  ];
  return (
    <section className="w-full bg-gray-50 py-20 px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase">
            FAQS
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            Question? <span className="text-blue-700">Look Here</span>
          </p>
        </header>
      </div>
      <main className="flex flex-col lg:flex-row justify-between items-center">
        {/* faqs cont */}
        <article className="space-y-5 flex-1 w-full lg:flex-2 lg:w-1/2">
          {faqs.map((faq, index) => (
            <div
              className={`${
                showCurrent === index
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 bg-gray-200"
              } w-full p-3 border-1 border-gray-300 rounded-md font-bold text-lg`}
            >
              <div className="flex justify-between items-center">
                <p>{faq.question}</p>
                {showCurrent === index ? (
                  <p
                    className="hover:cursor-pointer text-gray-800"
                    onClick={() => setCurrent(null)}
                  >
                    -
                  </p>
                ) : (
                  <p
                    className="hover:cursor-pointer text-gray-800"
                    onClick={() => setCurrent(index)}
                  >
                    +
                  </p>
                )}
              </div>
              {showCurrent === index && <p className="mt-5">{faq.answer}</p>}
            </div>
          ))}
        </article>
        <figure className="m-7 h-[300px] w-full lg:flex-1 flex flex-col justify-center items-center border-1 border-gray-300 bg-gray-200 rounded-md p-4">
          <img src="./chat-bubble.png" alt="" />
          <p className="text-gray-800 font-bold text-xl mb-5">
            You have a different question
          </p>
          <p className="text-gray-600">
            Our team will answer all your questions.
          </p>
          <p className="text-gray-600">We ensure a quick response</p>
          <Link
            className="mt-5 rounded-full bg-orange-500 p-4 text-white font-bold"
            to={"/"}
          >
            Contact Us
          </Link>
        </figure>
      </main>
    </section>
  );
}

export default FAQs;
