/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);

  return (
    <Droppable droppableId="burn-barrel">
      {(provided, snapshot) => {
        if (snapshot.isDraggingOver !== active) {
          setActive(snapshot.isDraggingOver);
        }

        return (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
              active ? 'border-red-800 bg-red-800/20 text-red-500' : 'border-neutral-500 border-neutral-500/20 text-neutral-500'
            }`}
          >
            {active ? <FaFire className='animate-bounce' /> : <FiTrash />}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default BurnBarrel;
