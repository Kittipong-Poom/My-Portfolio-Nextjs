"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <section className="pb-12 xl:py-24 xl:h-[560px] h-[540px]">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col xl:flex-row gap-8 justify-center bg-pink-100  rounded-lg p-6">
          {/* Right Column: Contact Info */}
          <div className="w-full xl:w-1/2">
            <div className="text-center xl:text-left">
              <div className="mt-4 space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4 items-center">
                  <Mail
                    className="p-2 mb-2 md:mb-0 border-2 border-pink-500 dark:bg-black rounded-lg text-white"
                    size={40}
                  />
                  <span className="text-lg md:text-xl underline text-gray-800 ">
                    kittipong.wong00@gmail.com
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 items-center">
                  <Phone
                    className="p-2 mb-2 md:mb-0 border-2 border-pink-500 rounded-lg dark:bg-black text-white"
                    size={40}
                  />
                  <span className="text-lg md:text-xl text-gray-800 ">
                    0620758133
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 items-center">
                  <MapPin
                    className="p-2 mb-2 md:mb-0 border-2 border-pink-500 rounded-lg dark:bg-black text-white"
                    size={40}
                  />
                  <span className="text-lg md:text-xl text-gray-800 ">
                    161, Soi 9 Sutthihansa, Hat Yai District, Songkhla
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
