/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Columns from "@/components/Columns/Columns";
import { DEFAULT_CARDS } from "@/lib/utils";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

const getColor = (column) => {
  switch (column) {
    case "backlog":
      return "text-neutral-500";
    case "todo":
      return "text-yellow-200";
    case "doing":
      return "text-blue-200";
    case "done":
      return "text-emerald-200";
    default:
      return "text-neutral-500";
  }
};

const KanbanBoard = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    console.log(source, destination);
    // const updatedCards = Array.from(cards);
    // const [movedCard] = updatedCards.splice(source.index, 1);
    // movedCard.column = destination.droppableId;
    // updatedCards.splice(destination.index, 0, movedCard);

    // setCards(updatedCards);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex h-full w-full gap-3 overflow-scroll p-12">
        {["backlog", "todo", "doing", "done"].map((column, index) => (
          <Droppable droppableId="ROOT" key={index} type="group">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Columns
                  key={index}
                  title={column.charAt(0).toUpperCase() + column.slice(1)}
                  column={column}
                  headingColor={getColor(column)}
                  cards={cards?.filter((card) => card?.column === column)}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
