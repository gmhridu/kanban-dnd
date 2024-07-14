/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Columns from "@/components/Columns/Columns";
import { DragDropContext } from "react-beautiful-dnd";
import BurnBarrel from "@/components/BurnBarrel/BurnBarrel";
import useAxiosCommon from "@/Hooks/useAxiosCommon";

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
  const axiosCommon = useAxiosCommon();
  const [cards, setCards] = useState({
    backlog: [],
    todo: [],
    doing: [],
    done: [],
  });

  const getCards = async () => {
    try {
      const { data } = await axiosCommon.get('/cards');
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards();
        const newCards = {
          backlog: data.filter((card) => card.column === "backlog"),
          todo: data.filter((card) => card.column === "todo"),
          doing: data.filter((card) => card.column === "doing"),
          done: data.filter((card) => card.column === "done"),
        };
        setCards(newCards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCards();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnDragEnd = async (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = cards[source.droppableId];
      const destColumn = cards[destination.droppableId];
      const sourceItems = [...sourceColumn];
      const destItems = [...destColumn];

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setCards({
        ...cards,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destItems,
      });

      try {
        await axiosCommon.put(`/cards/${removed._id}`, { column: destination.droppableId });
      } catch (error) {
        console.error(error);
      }
    } else {
      const column = cards[source.droppableId];
      const copiedItems = [...column];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setCards({
        ...cards,
        [source.droppableId]: copiedItems,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex h-full w-full gap-3 overflow-scroll p-12">
        {Object.entries(cards).map(([columnId, column]) => (
          <Columns
            key={columnId}
            title={columnId}
            columnId={columnId}
            headingColor={getColor(columnId)}
            cards={column}
            setCards={setCards}
          />
        ))}
        <BurnBarrel setCards={setCards} />
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
