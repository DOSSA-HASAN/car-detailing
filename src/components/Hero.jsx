import { ArrowRightCircle, UsersRound, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full flex justify-center items-center bg-gray-100 h-[calc(100vh-70px)] relative">
      <div
        className="absolute inset-0 z-0 opacity-20 lg:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-img-3.png')" }}
      >
        {/* Optional: Add a gradient overlay to make it even more subtle */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-transparent to-slate-900" />
      </div>
      <main className="max-w-[1400px] w-full m-auto flex justify-center items-center px-10  py-4 h-full z-20">
        {/* Right side of hero section */}
        <article className="w-full lg:w-1/2 h-full flex justify-center items-start flex-col">
          <div className="hidden lg:block p-3 rounded-full bg-white w-[350px] text-center overflow-hidden">
            <p>Your Premium Car Detailing Service Provider</p>
          </div>
          <p className="text-gray-900 font-bold text-[40px]">
            <span className="text-blue-700">Expert</span> Car Detailing Services
            Provider
          </p>
          <p className="text-md text-gray-600 w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, officia.
          </p>
          {/* CTA buttons container */}
          <ul className="flex mt-10 justify-center items-center">
            <li>
              <Link to={"/"} className="flex justify-between items-center ">
                <p className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-white font-medium text-md">
                  Learn More
                </p>
                <div>
                  <ArrowRightCircle fill="black" color="white" size={40} />
                </div>
              </Link>
            </li>
            <li className="ml-10">
              <Link
                to={"/"}
                className="underline decoration-gray-800 font-medium text-md"
              >
                View All Services
              </Link>
            </li>
          </ul>
        </article>
        {/* Left side of hero section */}
        <figure className="hidden lg:flex justify-center items-end w-1/2">
          <figcaption className="h-[350px] w-[200px] border-2 border-blue-400 rounded-full relative m-10">
            <div className="p-3 rounded-full bg-white w-[200px] text-center overflow-hidden font-semibold top-0 left-[70%] z-10 absolute flex justify-between items-center shadow-md">
              <div className="w-[40px] h-[40px] rounded-full bg-blue-500 flex justify-center items-center">
                <UsersRound color="white" />
              </div>
              <p>Professional Team</p>
            </div>
            <div className="p-3 rounded-full bg-white w-[200px] text-center overflow-hidden font-semibold bottom-0 right-[70%] z-10 absolute flex justify-between items-center shadow-md">
              <div className="w-[40px] h-[40px] rounded-full bg-orange-500 flex justify-center items-center">
                <Wallet color="white" />
              </div>
              <p>Afforadble Pricing</p>
            </div>
            <img
              src="/hero-img-1.png"
              className="w-full object-cover h-full rounded-full absolute bottom-0 right-3 z-0"
              alt=""
            />
          </figcaption>
          <figcaption className="h-[250px] w-[150px] border-2 border-blue-400 rounded-full relative">
            <img
              src="/hero-img-2.png"
              className="w-full object-cover h-full rounded-full absolute bottom-0 right-3"
              alt=""
            />
          </figcaption>
        </figure>
      </main>
    </section>
  );
}

export default Hero;
