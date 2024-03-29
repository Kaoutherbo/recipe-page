import React from "react";

function CustomListItem({ title, description }) {
  return (
    <li className="mb-2 pl-4 text-neutral-wenge-brown">
      <span className="font-semibold mr-0.5">{title}:</span> {description}
    </li>
  );
}

export default CustomListItem;
