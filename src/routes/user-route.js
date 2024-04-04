const express = require("express");
const router = express.Router();

const userController = require("../controllers/user-controller");

// Add user
router.post("/add", userController?.addUser);

// get user
router.get("/all", userController?.getUsers);

// update user
router.put("/update", userController?.updateUser);

// // delete user
// router.put("/add", userController?.signIn);


//handling unknown routes.
router.all("*", (req, res) => {
  res.status(404).send(`Url:${req.originalUrl} Not Found.`);
});

module.exports = router;
