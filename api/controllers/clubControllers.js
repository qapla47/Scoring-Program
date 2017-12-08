const mongoose = require("mongoose");

const Club = require("../models/clubRegModel");
//const Comment = require("../models/commentModels");

const STATUS_USER_ERROR = 422;

const createClub = (req, res) => {
  const { clubName, clubAbbreviation, clubAddress, raceDays, runsRegattas } = req.body;
  const newClub = new Club({ clubName, clubAbbreviation, clubAddress, raceDays, runsRegattas });

  newClub
    .save()
    .then(createdClub => {
      res.json(createdClub);
    })
    .catch(err => {
      res.status(500).json({ err });
      return;
    });
};

const displayAllClubs = (req, res) => {
  Club.find()
    .select("clubName")
    .exec()
    .then(clubs => {
      if (clubs.length === null) throw new Error();
      res.json(clubs);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findOneClub = (req, res) => {
  const { id } = req.params;
  Club.findById(id)
    .populate()
    .exec()
    .then(oneClub => {
      if (oneClub === null) throw new Error();
      res.json(oneClub);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findAndUpdateClub = (req, res) => {
  const {id} = req.params;
  const { clubName, clubAbbreviation, clubAddress, raceDays, runsRegattas } = req.body;
  Club.findByIdAndUpdate(id)
    .exec()
    .then(club => {
      if (club === null) throw new Error();
      res.json(club);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
      return;
    });
};

module.exports = {
  createClub,
  displayAllClubs,
  findOneClub,
  findAndUpdateClub,
};
