const usersRouter = require('express').Router();
const {findAllUsers,
     createUser,
     findUserById,
     updateUser,
     deleteUser,
     checkEmptyNameAndEmailAndPassword,
     checkEmptyNameAndEmail,
     checkIsUserExists,
     hashPassword} = require('../middlewares/users');
const {sendAllUsers,
     sendUserCreated,
     sendUserById,
     sendUserUpdated,
     sendUserDeleted,
     sendMe} = require('../controllers/users');
     
const { checkAuth } = require("../middlewares/auth.js");

usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword,  checkAuth, hashPassword, createUser, sendUserCreated);
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", checkEmptyNameAndEmail,  checkAuth, updateUser, sendUserUpdated); 
usersRouter.delete("/users/:id",  checkAuth, deleteUser, sendUserDeleted);
usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
  