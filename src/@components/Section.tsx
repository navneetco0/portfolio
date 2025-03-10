import React, { HTMLAttributes } from "react";
import { useIntersectionObserver } from "../@hook";
import DummyBox from "./dummy-box";

interface ISection extends HTMLAttributes<HTMLElement> {
  heading?: string[];
  paragraph?: string[];
  id?: string;
  children?: React.ReactNode;
}

const Section = ({ heading = [], paragraph = [], id, children, ...others}: ISection) => {
  const { isVisible, ref } = useIntersectionObserver({});
  
  return (
    <section {...others} className="section" id={id}>
      <div className={`animated-div ${isVisible ? "show" : ""}`} ref={ref}>
        {heading.length ? (
          <h2 className="section-heading">
            {heading.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </h2>
        ) : null}
        {paragraph.length ? (
          <p className="section-paragraph">
            {paragraph.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
};

export default Section;
