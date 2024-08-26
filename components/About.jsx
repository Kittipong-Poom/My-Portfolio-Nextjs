import DevImg from "./DevImg";


import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  CircleUserRound,
  Info,
  UserRoundCog,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Kittipong Wongsaditsayanon",
  },
  {
    icon: <MailIcon size={20} />,
    text: "kittipong.wong00@gmail.com",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "0620758133",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "161, Soi 9 Sutthihansa, Hat Yai District,Songkhla",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "SoftWare Engineer",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 January, 2003",
  },
];
const qualificationData = [
  {
    title: "activities 2021",
    data: [
      {
        activity: "SE Bootcamp",
        years: "2021",
      },
      {
        activity:
          "Develop students' specialized skills by giving lectures on Blockchain, Crypto",
        years: "2021",
      },
    ],
  },
  {
    title: "activities 2024",
    data: [
      {
        activity:
          "MFU Internship Upskill & Reskill Ready for the New-Age Career with AI",
        years: "2024",
      },
      {
        activity:
          "Developing creative thinking skills in work (Creative Thinking)",
        years: "2024",
      },
      {
        activity: "SE Hackatron",
        years: "2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "framework",
    data: [
      {
        name: "Nuxt.js",
        imageUrl: "/about/nuxtjs.svg",
      },
      {
        name: "Next.js",
        imageUrl: "/about/nextjs-border.svg",
      },
      {
        name: "Tailwindcss",
        imageUrl: "/about/tailwindcss.svg",
      },
      {
        name: "Daisy ui",
        imageUrl: "/about/daisyuitext.svg",
      },
      {
        name: "Shadcn",
        imageUrl: "/about/shadcn-ui.svg",
      },
    ],
  },
  {
    title: "backend",
    data: [
      {
        name: "ExpressJs",
        imageUrl: "/about/icons8-express-js.svg",
      },
      {
        name: "JavaScript",
        imageUrl: "/about/javascript.svg",
      },
    ],
  },
  {
    title: "database",
    data: [
      {
        name: "MySQL",
        imageUrl: "/about/mysql.svg",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "Vscode",
        imgPath: "/about/vscode.svg",
      },
      {
        name: "Figma",
        imgPath: "/about/figma.svg",
      },
      {
        name: "Chatgpt",
        imgPath: "/about/chatgpt-icon.svg",
      },
      {
        name: "Ngrok",
        imgPath: "/about/ngrok-blue.svg",
      },
    ],
  },
];

const Additional = [
  {
    title: "additionalSkill",
    data: [
      {
        name: "Docker",
        imgPath: "/about/docker.svg",
      },
      {
        name: "Git",
        imgPath: "/about/git.svg",
      },
      {
        name: "Firebase",
        imgPath: "/about/firebase.svg",
      },
      {
        name: "Postman",
        imgPath: "/about/postman-icon-svgrepo-com.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8 ">
          <h2 className="text-6xl font-bold flex items-center space-x-4">
            <span>About me</span>
            <Info size={36} />
          </h2>
        </div>
        <div className="flex flex-col xl:flex-row ">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px]
          h-[505px] bg-no-repeat relative"
              imgSrc="/about/anime.png"
            />
          </div>
          {/* Personal */}
          <div className="flex-1 mt-7 text-center xl:text-left flex flex-col">
            <div className="flex  justify-center xl:justify-start">
              <h2 className="text-4xl font-semibold">Personal Info </h2>
              <CircleUserRound />
            </div>
            <p className="mt-8 mb-8 tracking-[2px] font-semibold ">
              My goal is to become a high-level programmer in order to pursue
              new knowledge. That comes in, and I strive to continually improve
              myself.
            </p>
            {/* infoData block */}
            <div className="grid xl:grid-cols-2 gap-4 mb-12 ">
              {infoData.map((item, index) => {
                return (
                  <div
                    className="flex items-center gap-x-4 mx-auto xl:mx-0"
                    key={index}
                  >
                    <div className="text-pink-600 text-center ">{item.icon}</div>
                    <div>{item.text}</div>
                  </div>
                );
              })}
              <div className="flex flex-col gap-y-2">
                <div className="text-pink-600">Languages Skill</div>
                <div className="border-b border-border"></div>
                <div>English,Thai</div>
              </div>
            </div>
          </div>
        </div>
        {/* activity2021 block */}
        <div className="flex justify-center mb-8 ">
          <h4 className="text-4xl mt-12 font-bold flex items-center space-x-4">
            <span>My Activities Journey</span>
          </h4>
        </div>
        <div className="grid md:grid-cols-2 gap-y-8 mt-12 mb-6 text-center xl:text-left">
          <div className="flex flex-col gap-y-8">
            <h4 className="capitalize font-bold flex items-center justify-center xl:justify-start text-3xl">
              <span className="mr-3">
                {getData(qualificationData, "activities 2021").title}
              </span>
              <UserRoundCog size={32} />
            </h4>

            {getData(qualificationData, "activities 2021").data.map(
              (item, index) => {
                const { activity, years } = item;
                return (
                  <div className="flex gap-x-8 group justify-center xl:justify-start" key={index}>
                    <div className="h-[84px] w-[1px] bg-border border-l-2 border-pink-500 relative ml-2">
                      <div
                        className="w-[10px] h-[11px] rounded-full bg-pink-600 absolute -left-[5px]
                                    group-hover:translate-y-[84px] transition-all duration-500"
                      ></div>
                    </div>
                    <div className="text-center xl:text-left">
                      <div className="font-semibold text-xl leading-none mb-2">
                        {activity}
                      </div>
                      <div className="text-base font-medium">
                        Year : {years}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          {/* activity2024 block */}
          <div className="flex flex-col gap-y-8">
            <h4 className="capitalize font-bold flex items-center justify-center xl:justify-start text-3xl">
              <span className="mr-3">
                {getData(qualificationData, "activities 2024").title}
              </span>
              <UserRoundCog size={32} />
            </h4>
            {getData(qualificationData, "activities 2024").data.map(
              (item, index) => {
                const { activity, years } = item;
                return (
                  <div
                    className="flex gap-x-8 group justify-center xl:justify-start"
                    key={index}
                  >
                    <div className="h-[84px] w-[1px] bg-border border-l-2 border-pink-500 relative ml-2">
                      <div
                        className="w-[11px] h-[11px] rounded-full bg-pink-600 absolute -left-[5px]
                        group-hover:translate-y-[84px] transition-all duration-500"
                      ></div>
                    </div>
                    <div className="text-center xl:text-left">
                      <div className="font-semibold text-xl leading-none mb-2">
                        {activity}
                      </div>
                      <div className="text-base font-medium">
                        Year : {years}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="text-center mt-16">
          <h1 className="mb-5 font-bold text-4xl">My Skill</h1>
          <div className="text-center xl:text-left grid md:grid-cols-4 gap-y-8">
            <div className="mb-16">
              <h4 className="text-2xl font-semibold mb-2">Framework</h4>
              <div className="border-b mb-4 border-pink-500"></div>
              {/* Framework */}
              <div>
                {getData(skillData, "framework").data.map((item, index) => {
                  const { name, imageUrl } = item;
                  return (
                    <div
                      className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 mb-4 justify-center"
                      key={index}
                    >
                      <div className="flex items-center justify-center xl:justify-start gap-4">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={name}
                            className="w-10 h-10 object-contain"
                          />
                        )}
                        <div className="font-medium">{name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-16">
              <h4 className="text-2xl font-semibold mb-2">Backend</h4>
              <div className="border-b border-pink-500 mb-4"></div>
              {/* Backend */}
              <div>
                {getData(skillData, "backend").data.map((item, index) => {
                  const { name, imageUrl } = item;
                  return (
                    <div
                      className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 mb-4"
                      key={index}
                    >
                      <div className="flex items-center justify-center xl:justify-start gap-4">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={name}
                            className="w-10 h-10 object-contain"
                          />
                        )}
                        <div className="font-medium">{name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-16">
              <h4 className="text-2xl font-semibold mb-2">Database</h4>
              <div className="border-b border-pink-500 mb-4"></div>
              {/* Database */}
              <div>
                {getData(skillData, "database").data.map((item, index) => {
                  const { name, imageUrl } = item;
                  return (
                    <div
                      className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 mb-4"
                      key={index}
                    >
                      <div className="flex items-center justify-center xl:justify-start gap-4">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={name}
                            className="w-10 h-10 object-contain"
                          />
                        )}
                        <div className="font-medium">{name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Additional Skill */}
            <div className="text-center xl:text-left grid  gap-y-8">
              <div className="mb-16">
                <h4 className="text-2xl font-semibold mb-2 text-center">
                  Additional Skill
                </h4>
                <div className="border-b border-pink-500 mb-4"></div>
                {/* Additional Skill */}
                <div className="grid md:grid-cols-2 mb-9">
                  {getData(Additional, "additionalSkill").data.map(
                    (item, index) => {
                      const { name, imgPath } = item;
                      return (
                        <div
                          className="w-2/4 text-center xl:text-left mx-auto mt-3
                            xl:mx-0 justify-center "
                          key={index}
                        >
                          <div className="flex items-center justify-center xl:justify-start gap-4">
                            {imgPath && (
                              <img
                                src={imgPath}
                                alt={name}
                                className="w-10 h-10 object-contain"
                              />
                            )}
                            <div className="font-medium">{name}</div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
                {/* Tools */}
                <h4 className="text-2xl font-semibold mb-2 text-center">
                  Tools
                </h4>
                <div className="border-b border-pink-500 mb-4"></div>
                <div className="grid md:grid-cols-2">
                  {getData(skillData, "tools").data.map((item, index) => {
                    const { name, imgPath } = item;
                    return (
                      <div
                        className="w-2/4 text-center xl:text-left mx-auto mt-3
                    xl:mx-0 justify-center "
                        key={index}
                      >
                        <div className="flex items-center justify-center xl:justify-start gap-4">
                          {imgPath && (
                            <img
                              src={imgPath}
                              alt={name}
                              className="w-10 h-10 object-contain"
                            />
                          )}
                          <div className="font-medium">{name}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
