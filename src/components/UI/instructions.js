import React from "react";
import CustomListItem from "./CustomListItem";

export default function instructions() {
  return (
    <div className="instructions mb-4">
      <h2 className="text-primary-nutmeg font-serif text-xl mb-4">
        Instructions
      </h2>
      <ul className="text-smSize list-outside list-decimal ml-6">
        <CustomListItem
          title="Beat the eggs"
          description="In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture."
        />
        <CustomListItem
          title="Heat the pan"
          description="Place a non-stick frying pan over medium heat and add butter or oil."
        />
        <CustomListItem
          title="Cook the omelette"
          description="Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
  the eggs evenly coat the surface."
        />
        <CustomListItem
          title="Add fillings (optional)"
          description="When the eggs begin to set at the edges but are still slightly runny in the 
          middle, sprinkle your chosen fillings over one half of the omelette."
        />
        <CustomListItem
          title="Fold and serve"
          description="As the omelette continues to cook, carefully lift one edge and fold it over the 
          fillings. Let it cook for another minute, then slide it onto a plate."
        />
        <CustomListItem
          title="Enjoy"
          description="Serve hot, with additional salt and pepper if needed."
        />
      </ul>
    </div>
  );
}
