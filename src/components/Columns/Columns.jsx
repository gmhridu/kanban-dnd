/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cards from "@/components/Cards/Cards";
import { Droppable } from "react-beautiful-dnd";

const Columns = ({ title, headingColor, column, cards }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {cards?.length}
        </span>
      </div>

      <div
        className={`h-full w-full transition-colors flex flex-col space-y-2  ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {cards?.map((card, index) => (
          <Cards key={card?.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Columns;
