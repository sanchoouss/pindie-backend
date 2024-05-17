const gamesRouter = require('express').Router();

const {findAllGames,
      createGame,
      findGameById,
      updateGame,
      deleteGame,
      checkEmptyFields,
      checkIfUsersAreSafe,
      checkIfCategoriesAvaliable,
      checkEmptyFields,
      checkIsGameExists,
      checkAuth,
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