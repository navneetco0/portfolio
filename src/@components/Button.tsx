import React from "react";
import { FaArrowRight } from "react-icons/fa6";


interface IButtonProps {
  type?: "primary" | "secondary";
  title: any;
}
const Button: React.FC<IButtonProps> = ({ type = "primary", title }) => {
  switch (type) {
    case "primary":
      return (
        <button className="btn-primary">
          {title} <div><FaArrowRight /></div>
        </button>
      );
    case "secondary":
      return <button className="btn-secondary">{title}</button>;
    default:
      return null;
  }
};

export default Button;
