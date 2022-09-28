import React from "react";
import Image from "next/image";

export default function Box({ text, image, styles }) {
  return (
    <>
      <div className="site-box__card" style={styles}>
        <Image
          src={`/assets/icons/${image}.svg`}
          width="60"
          height="60"
          alt={`${text} icon`}
        />
        <span className="site-box__text">{text}</span>
      </div>
    </>
  );
}
