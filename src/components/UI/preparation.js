import React from "react";
import CustomListItem from "./CustomListItem";

export default function preparation() {
  return (
    <div className="preparation bg-neutral-rose-white mt-6 mb-6 rounded-lg p-4">
      <h1 className="text-primary-dark-raspberry mb-2 font-sans font-semibold">
        Preparation time
      </h1>
      <ul className="text-smSize list-outside list-disc ml-6">
        <CustomListItem title="Total" description="Approximately 10 minutes" />
        <CustomListItem title="Preparation" description="5 minutes" />
        <CustomListItem title="Cooking" description="5 minutes" />
      </ul>
    </div>
  );
}
