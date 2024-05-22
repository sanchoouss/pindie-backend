const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");

const {findAllGames,
      createGame,
      findGameById,
      updateGame,
      deleteGame,
      checkIfUsersAreSafe,
      checkIfCategoriesAvaliable,
      checkEmptyFields,
      checkIsGameExists,
      checkIsVoteRequest} = require('../middlewares/games');
const {sendAllGames,
      sendGameCreated,
      sendGameById,
      sendGameUpdated,
      sendGameDeleted} = require('../controllers/games');

gamesRouter.post("/games", findAllGames, checkIsGameExists, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.put('/games/:id', findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted); 

module.exports = gamesRouter; 