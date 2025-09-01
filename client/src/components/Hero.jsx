import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <section className='relative h-screen bg-cover bg-center bg-[url("https://tse4.mm.bing.net/th/id/OIP.wpCV1PPCAT4wKof8olsPaQHaFj?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3")]'>
      {/* Gradient overlay adapts to theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent dark:from-black/80 dark:via-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <Navbar />

        <div className="text-center max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Property Management, Reimagined
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed bg-black/30 dark:bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-6">
            Welcome to{" "}
            <span className="font-semibold text-pink-400">RentWise</span>—your
            all-in-one rental HQ. From tracking payments to managing properties
            and delighting tenants, our pastel-dark interface blends clarity
            with elegance for a truly modern experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold transition duration-300 shadow-lg cursor-pointer">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition duration-300 border border-white/20 backdrop-blur-sm cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
