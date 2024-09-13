import { Download, Send } from "lucide-react";
import Link from "next/link";
import Socials from "./Socials";
import DevImg from "./DevImg";
import { Parallax } from "react-parallax";
import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
const Hero = () => {
  const devImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (devImgRef.current) {
        const scrollY = window.scrollY;
        const maxScroll = 400; // ระยะการเลื่อนที่ต้องการเอฟเฟกต์เต็มรูปแบบ
        const scaleValue = 1 - Math.min(scrollY / maxScroll, 1) * 0.3; // ปรับค่าซูม
        const opacityValue = 1 - Math.min(scrollY / maxScroll, 1); // ปรับค่าความโปร่งแสง

        devImgRef.current.style.transform = `scale(${scaleValue})`;
        devImgRef.current.style.opacity = opacityValue;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className=" xl:py-24 h-[84vh]
  bg-no-repeat bg-cover bg-bottom dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div
            className="flex max-w-[600px] flex-col justify-center
              text-center xl:text-left"
          >
            {/* Mockup Code with Typewriter Effect */}

            <div
              data-aos="fade-down"
              data-aos-delay="10"
              className="text-sm uppercase font-semibold mb-4 text-pink-500 tracking-[4px]"
            >
              Hello I'm
            </div>
            <h1 className="h1 mb-4">
              {"My name is".split("").map((char, index) => (
                <span
                  key={`first-line-${index}`}
                  className="fade-char"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    marginRight: char === " " ? "8px" : "0", // Add space after each word
                  }}
                >
                  {char}
                </span>
              ))}
              <br />
              {"Kittipong Poom".split("").map((char, index) => (
                <span
                  key={`second-line-${index}`}
                  className="fade-char"
                  style={{
                    animationDelay: `${(index + 10) * 100}ms`,
                    marginRight: char === " " ? "8px" : "0",
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <div
              data-aos="fade-left"
              className="mockup-code text-sm font-semibold mb-4 text-primary w-4 tracking-[4px] mx-auto xl:mx-0"
            >
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
              <Link href="#personal-info" scroll={false}>
                <button
                  className="btn btn-accent"
                  data-aos="fade-up-right"
                  data-aos-delay="400"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("personal-info")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact <Send size={18} />
                </button>
              </Link>
              <a href="/hero/Resume-Kittipong-Wongsaditsayanon.pdf" download>
                <button
                  data-aos="fade-up-left"
                  data-aos-delay="400"
                  className="btn btn-neutral"
                >
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
          <div className="hidden xl:flex relative ">
            <Parallax  strength={200}>
              <div
                ref={devImgRef}
                className="bg-hero_shape w-[510px] h-[590px] bg-no-repeat relative bg-bottom bottom-10 "
              >
                <DevImg imgSrc="/hero/hero-remove1.png" 
                className="absolute inset-0  w-full object-cover ]" />
              </div>
            </Parallax>
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
