const express = require('express');
const { createCard, getCards, getCardById, updateCard, deleteCard } = require('../controllers/card.controllers');


const cardRouter = express.Router();

cardRouter.post('/', createCard);

cardRouter.get('/', getCards);

cardRouter.get('/:id', getCardById);

cardRouter.put('/:id', updateCard);

cardRouter.delete('/:id', deleteCard);

module.exports = cardRouter;