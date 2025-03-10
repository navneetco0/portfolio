import React from "react";

interface MarqueeProps {
  images: string[];
  reverse?: boolean;
  speed?: number; // Speed in seconds
}

const Marquee: React.FC<MarqueeProps> = ({
  images,
  reverse = false,
  speed = 30,
}) => {
  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""}`}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div className="marquee__group">
        {images.map((img, index) => (
          <div>
            <img key={index} src={img} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="marquee__group" aria-hidden="true">
        {images.map((img, index) => (
          <div>
            <img key={index} src={img} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="marquee__group" aria-hidden="true">
        {images.map((img, index) => (
          <div>
            <img key={index} src={img} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
