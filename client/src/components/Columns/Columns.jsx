/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cards from "@/components/Cards/Cards";
import { Droppable } from "react-beautiful-dnd";
import AddCard from "../AddCard/AddCard";

const Columns = ({ title, headingColor, columnId, cards, setCards }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <div className="flex items-center gap-x-2">
          <AddCard cards={cards} columnId={columnId} setCards={setCards}/>
        <span className="rounded text-sm text-neutral-400">
          {cards?.length}
        </span>
        </div>
        
      </div>

      <Droppable droppableId={columnId} type="group">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`h-full w-full transition-colors flex flex-col space-y-2 ${
              active ? "bg-neutral-800/50" : "bg-neutral-800/0"
            }`}
          >
            <Cards cards={cards} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Columns;
