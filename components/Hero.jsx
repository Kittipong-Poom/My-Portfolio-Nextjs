
import { Download, Send } from "lucide-react";
import Link from "next/link";
import Socials from "./Socials";
import DevImg from "./DevImg";

import {
  RiArrowDownSLine,
} from "react-icons/ri";

const Hero = () => {

  
  return (
    <section
    className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero
  bg-no-repeat bg-cover bg-bottom dark:bg-none"
  >
    <div className="container mx-auto">
      <div className="flex justify-between gap-x-8">
        <div
          className="flex max-w-[600px] flex-col justify-center
              text-center xl:text-left"
        >
          {/* Mockup Code with Typewriter Effect */}

          <div className="text-sm uppercase font-semibold mb-4 text-pink-500 tracking-[4px]">
              Hello I'm
            </div>
          <h1 className="h1 mb-4">My name is Kittipong Poom</h1>
          <div className="mockup-code text-sm font-semibold mb-4 text-primary w-4 tracking-[4px] mx-auto xl:mx-0">
            <pre data-prefix="$" className="typewriter">
              <code>npm i Portfolio</code>
            </pre>
            <pre data-prefix=">" className="text-warning typewriter">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success typewriter">
              <code>Done!</code>
            </pre>
            <pre data-prefix=">" className="text-pink-500 typewriter">
              <code>Web Development</code>
            </pre>
          </div>
          {/* Buttons for Contact and Download */}
          <div className="flex gap-y-3 gap-8 md:flex-row flex-col">
            <Link href="/contact">
              <button className="btn btn-accent">
                Contact <Send size={18} />
              </button>
            </Link>
            <a href="/hero/resume-internship.pdf" download>
              <button className="btn btn-neutral">
                Download Resume <Download size={18} />
              </button>
            </a>
          </div>
          {/* Social Icons */}
          <Socials
            containerStyles="flex gap-x-5 mt-6 mx-auto xl:mx-0"
            iconsStyles="text-foreground text-[22px] hover:text-pink-700 transition-all"
          />
        </div>
        {/* Dev Image */}
        <div className="hidden xl:flex relative">
          <DevImg
            containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat
            relative bg-bottom"
            imgSrc="/hero/pngwing.com.png"
          />
        </div>
      </div>
      {/* Arrow Icon */}
      <div
        className="hidden md:flex left-2/4 absolute bottom-44 xl:bottom-12
         animate-bounce"
      >
        <RiArrowDownSLine className="text-xl text-orange-500" />
      </div>
    </div>
  </section>
  );
};

export default Hero;
