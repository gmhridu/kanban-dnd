/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Cards = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <Draggable key={card?._id} draggableId={card._id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing ${
                snapshot.isDropAnimating ? "scale-105 bg-blue-300-800 w-56" : ""
              }`}
            >
              <p className="text-sm text-neutral-100">{card.title}</p>
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default Cards;
