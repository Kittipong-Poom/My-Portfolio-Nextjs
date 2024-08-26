"use client";

import {
  RiYoutubeFill,
  RiLineFill,
  RiGitlabFill,
  RiFacebookFill,
  RiInstagramFill
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/channel/UCJ7aN9zCDgNnjVD6sRsjrKw",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://line.me/ti/p/FyfIKuELho",
    name: <RiLineFill />,
  },
  {
    path: "https://gitlab.com/6431503005/myambulance",
    name: <RiGitlabFill />,
  },
  {
    path: "https://web.facebook.com/poomziza.pb/",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/heqis_goblok/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div className={`${iconsStyles}`}>{icon.name}</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
