/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import AddCardModal from "../Modal/AddCardModal";

const AddCard = ({cards, columnId, setCards}) => {
  const [adding, setAdding] = useState(false);

  return (
    <>
      <AddCardModal adding={adding} setAdding={setAdding} cards={cards} columnId={columnId} setCards={setCards}/>
      {!adding && (
        <button
          onClick={() => setAdding(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors bg-neutral-800 rounded-full w-9 h-9 hover:bg-red-500 hover:text-white hover:animate-pulse"
        >
          <FiPlus className="text-xl" />
        </button>
      )}
    </>
  );
};

export default AddCard;
