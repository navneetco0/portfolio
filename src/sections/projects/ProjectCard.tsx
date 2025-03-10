import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectCardProps {
  img: string;
  thumbnail: string;
  title: string;
  description: string;
  link: string;
  backgroundColor: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  thumbnail,
  title,
  description,
  link,
  backgroundColor,
}) => {
  return (
    <div
      className="project-card"
      style={{
        background:
          `radial-gradient(49% 81% at 45% 47%, ${backgroundColor} 0%, #073AFF00 100%),conic-gradient(from 0deg at 17% -2%, var(--blue) 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, ${backgroundColor} 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, var(--blue) 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, var(--green-light) 0%, var(--blue) 100%)`,
      }}
    >
      <img className="image" src={img} alt={title} />
      <div className="content">
        <div className="flex-item-center">
          <div className="icon-box" style={{ backgroundColor }}>
            <img className="thumbnail-img" src={thumbnail} alt={title} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="link-box">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
