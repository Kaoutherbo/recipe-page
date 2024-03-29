import React from "react";
import "../../styles/output.css"; // Assuming output.css contains Tailwind CSS styles

export default function Introduction({ image, title, description }) {
  return (
    <div>
      <img src={image} alt="Profile Picture" className="rounded-lg" />
      <h1 className="font-serif text-3xl text-neutral-dark-charcoal font-semibold mb-4 mt-5">
        {title}
      </h1>
      <p className="text-smSize text-neutral-wenge-brown mb-3">
        {description}
      </p>
    </div>
  );
}
