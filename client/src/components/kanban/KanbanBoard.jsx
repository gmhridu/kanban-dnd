/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Columns from "@/components/Columns/Columns";
import { DragDropContext } from "react-beautiful-dnd";
import { DEFAULT_CARDS } from "@/lib/utils";
import BurnBarrel from "@/components/BurnBarrel/BurnBarrel";

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

const defaultCard = {
  backlog: {
    name: "Backlog",
    items: DEFAULT_CARDS.filter((card) => card.column === "backlog"),
  },
  todo: {
    name: "To Do",
    items: DEFAULT_CARDS.filter((card) => card.column === "todo"),
  },
  doing: {
    name: "Doing",
    items: DEFAULT_CARDS.filter((card) => card.column === "doing"),
  },
  done: {
    name: "Done",
    items: DEFAULT_CARDS.filter((card) => card.column === "done"),
  },
};

const KanbanBoard = () => {
  const [cards, setCards] = useState(defaultCard);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = cards[source.droppableId];
      const destColumn = cards[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setCards({
        ...cards,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = cards[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setCards({
        ...cards,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex h-full w-full gap-3 overflow-scroll p-12">
        {Object.entries(cards).map(([columnId, column]) => (
          <Columns
            key={columnId}
            title={column.name}
            columnId={columnId}
            headingColor={getColor(columnId)}
            cards={column.items}
            setCards={setCards}
          />
        ))}
        <BurnBarrel setCards={setCards} />
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
