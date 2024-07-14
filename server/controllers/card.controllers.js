const Card = require("../models/card.model");

// create a card
const createCard = async (req, res) => {
  const { title, column } = req.body;
  const card = new Card({
    title,
    column,
  });

  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all cards
const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a single card
const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) return res.status(404).json({ message: "Card not found" });

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a card
const updateCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!card) return res.status(404).json({ message: "Card not found" });

    res.json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a card
const deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);

    if (!card) return res.status(404).json({ message: "Card not found" });

    res.json({ message: "Card deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCard, getCards, getCardById, updateCard, deleteCard };
