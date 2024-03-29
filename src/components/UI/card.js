import React from "react";
import Introduction from "./introduction";
import Preparation from "./preparation";
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import Nutrition from "./nutrition";

export default function card({ image }) {
  return (
    <div className="card bg-neutral-white font-normal font-outfit p-6 rounded-lg ">
      <Introduction
        image={image}
        title="Simple Omelette Recipe"
        description=" An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats."
      />
      <Preparation />
      <Ingredients />
      <hr className="mb-5 mt-5"/>
      <Instructions />
      <hr className="mb-5 mt-5"/>
      <Nutrition />
    </div>
  );
}
