"use client";

import React, { useState, useEffect } from "react";
import { Paperclip } from "lucide-react";
import { RiGitlabFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [showNotification, setShowNotification] = useState(false);
  const tabs = [
    { name: "All Projects" },
    { name: "Next.js", framework_img: "/about/nextjs-border.svg" },
    { name: "Nuxt.js", framework_img: "/about/nuxtjs.svg" },
  ];

  const frameworks = [
    {
      name: "Next.js",
      imgPath: "/projects/e-commers.png",
      description:
        "Web Application Development for trading bicycles. Including the payment credit card page",
      git: "",
      link: "",
      framework_img: "/about/nextjs-border.svg",
    },

    {
      name: "Nuxt.js",
      imgPath: "/projects/ambulance.png",
      description:
        "Web Application Development to emergency Ambulance units and collect annual patient data",
      git: "https://gitlab.com/6431503005/myambulance",
      link: "https://gitlab.com/6431503005/myambulance",
      framework_img: "/about/nuxtjs.svg",
    },
  ];

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => setShowNotification(true),
      (err) => console.error("Failed to copy link: ", err)
    );
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
    AOS.init({
      duration: 1000,
      once: false, // This will allow the animation to re-trigger
    });
    document.title = "Projects";
  }, [showNotification]);

  useEffect(() => {
    // Re-trigger AOS animations when activeTab changes
    AOS.refresh();
  }, [activeTab]);

  const filteredFrameworks = frameworks.filter(
    (item) => activeTab === "All Projects" || item.name === activeTab
  );

  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <div className="w-full border-2 border-pink-200 rounded-lg">
          <div className="relative right-0">
            <ul
              className="relative flex flex-col md:flex-row flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60"
              data-tabs="tabs"
              role="list"
            >
              {tabs.map((tab, index) => (
                <li className="flex-auto text-center" key={index}>
                  <a
                    className={`flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                      activeTab === tab.name
                        ? "bg-pink-500 text-white" // Active tab styles
                        : "bg-inherit" // Inactive tab styles
                    }`}
                    onClick={() => setActiveTab(tab.name)}
                    role="tab"
                    aria-selected={activeTab === tab.name ? "true" : "false"}
                  >
                    <span className="ml-1">{tab.name}</span>
                    <img src={tab.framework_img} className="w-4 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Card Projects */}
        <div className="grid md:grid-cols-4 grid-cols-2 p-5 gap-x-6 gap-y-12 my-9">
          {filteredFrameworks.map((item, index) => (
            <div
              data-aos="fade-right"
              data-aos-delay={`${index * 250}`}
              className="card bg-base-100 w-70 shadow-xl transition duration-300 hover:scale-105"
              key={index}
            >
              <figure>
                <img src={item.imgPath} alt={item.name} className="h-[450px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="h-12">
                    <img src={item.framework_img} className="w-10" />
                  </div>
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  {item.git && (
                    <a
                      href={item.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="badge p-4 badge-outline hover:text-pink-600 transition-all">
                        <RiGitlabFill size={24} />
                      </div>
                    </a>
                  )}
                  {item.link && (
                    <div
                      className="badge badge-outline p-4 cursor-pointer hover:text-orange-600 transition-all"
                      onClick={() => handleCopyToClipboard(item.link)}
                    >
                      <Paperclip />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showNotification && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
            Link Copied To Clipboard!
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
