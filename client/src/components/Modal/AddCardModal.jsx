/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddCardModal = ({ adding, setAdding, columnId, setCards }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const cardName = e.target.addCard.value;
    console.log(cardName);

    setCards((prevCards) => {
      const newCard = {
        id: new Date().getTime().toString(),
        title: cardName,
        column: columnId,
      };
      const updatedColumn = {
        ...prevCards[columnId],
        items: [...prevCards[columnId].items, newCard],
      };
      return {
        ...prevCards,
        [columnId]: updatedColumn,
      };
    });

    setAdding(false);
  };

  return (
    <Dialog open={adding} onOpenChange={setAdding}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b-2 pb-4">
          <DialogTitle>Add New Card</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="border-b-2 pb-8">
            <label htmlFor="addCard" className="text-base">
              <span className="text-red-500 text-sm">*</span>Title
            </label>
            <Input
              type="text"
              id="addCard"
              required
              name="addCard"
              placeholder="Add New Card"
              className="mt-3 outline-none focus:outline-[#3b82f6]"
            />
          </div>
          <DialogFooter className="mt-4 sm:justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="group bg-[#dfe2e6] text-gray-700 border hover:border-[#4096FF]"
              >
                <span className="group-hover:text-[#4096FF]">Cancel</span>
              </Button>
            </DialogClose>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-[#2688ff] text-white hover:bg-[#4096FF]"
            >
              Save
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardModal;
