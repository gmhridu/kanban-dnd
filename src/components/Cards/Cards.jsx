/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Cards = ({ card, index }) => {
  return (
    <Draggable draggableId={card?.id} index={index}>
      {(provided) => (
        <div 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing">
          <p className="text-sm text-neutral-100">{card?.title}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Cards;
