import React from "react";
import "./MarqueeStrip.css";
import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiJavascript } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";

const marqueeItems = [
  { label: "React", icon: <FaReact /> },
  { label: "Node.js", icon: <FaNodeJs /> },
  { label: "C++", icon: <SiCplusplus /> },
  { label: "Full-Stack Developer", icon: <MdDeveloperMode /> },
  { label: "Next.js", icon: <SiNextdotjs /> },
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "Problem Solver", icon: <FaLaptopCode /> },
];

const MarqueeStrip = () => {
  return (
    <div className="marquee-strip">
      <ul>
        {marqueeItems.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span> {item.label}
          </li>
        ))}
      </ul>
      <ul aria-hidden="true">
        {marqueeItems.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span> {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarqueeStrip;
