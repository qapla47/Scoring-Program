const mongoose = require("mongoose");

const User = require("../models/userRegModel");
//const Comment = require("../models/commentModels");

const STATUS_USER_ERROR = 422;

const createUser = (req, res) => {
  const { username, password, firstName, lastName, clubAffiliation, certifiedPRO } = req.body;
  const newUser = new User({ username, password, firstName, lastName, clubAffiliation, certifiedPRO });

  newUser
    .save()
    .then(createdUser => {
      res.json(createdUser);
    })
    .catch(err => {
      res.status(500).json({ err });
      return;
    });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username, password })
    .select("username")
    .exec()
    .then(user => {
      if (user === null) throw new Error();
      res.json(user);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

// const displayAllUsers = (req, res) => {
//   User.find()
//     .select("username")
//     .exec()
//     .then(users => {
//       if (users.length === null) throw new Error();
//       res.json(users);
//     })
//     .catch(err => {
//       res.status(STATUS_USER_ERROR).json({ err });
//     });
// };

const findOneUser = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .populate()
    .exec()
    .then(oneUser => {
      if (oneUser === null) throw new Error();
      res.json(oneUser);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findAndUpdateUser = (req, res) => {
  const {id} = req.params;
  const { username, password, firstName, lastName, clubAffiliation, certifiedPRO } = req.body;
  User.findByIdAndUpdate(id)
    .exec()
    .then(user => {
      if (user === null) throw new Error();
      res.json(user);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
      return;
    });
};

module.exports = {
  createUser,
  loginUser,
  // displayAllUsers,
  findOneUser,
  findAndUpdateUser,
};
