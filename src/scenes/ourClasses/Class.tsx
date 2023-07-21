import React, { useState } from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayStyles = `flex flex-col items-center justify-center absolute z-20 rounded	top-0 left-0 p-5 h-full w-full
    whitespace-normal bg-primary-500 text-center text-white ${
      isHovered ? "opacity-90" : "opacity-0"
    } transition duration-500`;

  return (
    <li
      className="relative mx-5 inline-block md:h-[380px] md:w-[450px] sm:h-[320px] sm:w-[275px]  cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={overlayStyles}>
        <p className="md:text-2xl sm:text-xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          alt={name}
          src={image}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "4px"
          }}
        />
      </div>
    </li>
  );
};

export default Class;