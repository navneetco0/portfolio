import React from "react";
import { hero_data, LocationIcon, MONTH_NAMES, navImg } from "../../@assets";
import { useIntersectionObserver } from "../../@hook";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Button from "../../@components/Button";

const social_icons: any = {
  github: <AiOutlineGithub size={20} />,
  linkedin: <AiOutlineLinkedin size={20} />,
};

const IdentyCard = () => {
  const { isVisible, ref } = useIntersectionObserver({});
  return (
    <div
      className={`identy-card ${isVisible ? "identify-card-show" : ""}`}
      ref={ref}
    >
      <div className="strap" />
      <div className="clip" />
      <div className="holder" />
      <div className="card">
        <div className="hole" />
        <div className="container">
          <div className="top">
            <div className="personal-info">
              <img className="avatar" src={navImg} />
              <div>
                <p className="name">{hero_data.name}</p>
                <p className="designation">{hero_data.designation}</p>
                <div className="social-icons">
                  {hero_data.social_links.map((_) => (
                    <div>
                      <a href={_.link} target="_blank" rel="noopener">
                        {social_icons[_.name as string]}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="slots">
              <div className="blinking-light" />
              <div className="left-slots">
                <p>{hero_data.open_slots} open slots</p>
                <p className="month">
                  for {MONTH_NAMES[new Date().getMonth()]}
                </p>
              </div>
            </div>
          </div>
          <p className="about-product">
            I create Products that work as hard as you do
          </p>
          <p className="about-product-desc">
            I build products that solve problems, inspire action, and drive
            success.
          </p>
          <div className="btns">
            <a href="#contact">
              <Button title={"Get Started"} />
            </a>
            <a href="#projects">
              <Button type="secondary" title="My Work" />
            </a>
          </div>
        </div>
        <div className="location">
          <LocationIcon />
          <p>Located in India, available worldwide.</p>
        </div>
      </div>
    </div>
  );
};

export default IdentyCard;
