const mongoose = require("mongoose");

const Boat = require("../models/boatRegModel");
//const Comment = require("../models/commentModels");

const STATUS_USER_ERROR = 422;

const createBoat = (req, res) => {
  const { sailBowNumber, boatName, boatType, ircRating, phrfSpinRating, phrfNFSRating, primaryDivision, secondayDivision, ownerFirstName, ownerLastName, clubAffiliation, fleetAffiliation } = req.body;
  const newBoat = new Boat({ sailBowNumber, boatName, boatType, ircRating, phrfSpinRating, phrfNFSRating, primaryDivision, secondayDivision, ownerFirstName, ownerLastName, clubAffiliation, fleetAffiliation });

  newBoat
    .save()
    .then(createdBoat => {
      res.json(createdBoat);
    })
    .catch(err => {
      res.status(500).json({ err });
      return;
    });
};

const displayAllBoats = (req, res) => {
  Boat.find()
    .select("sailBowNumber")
    .exec()
    .then(boats => {
      if (boats.length === null) throw new Error();
      res.json(boats);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findOneBoat = (req, res) => {
  const { sailBowNumber } = req.params;
  Boat.findById(sailBowNumber)
    .populate()
    .exec()
    .then(oneBoat => {
      if (oneBoat === null) throw new Error();
      res.json(oneBoat);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findAndUpdateBoat = (req, res) => {
  const {id} = req.params;
  const {  sailBowNumber, boatName, boatType, ircRating, phrfSpinRating, phrfNFSRating, primaryDivision, secondayDivision, ownerFirstName, ownerLastName, clubAffiliation, fleetAffiliation } = req.body;
  Boat.findByIdAndUpdate(id)
    .exec()
    .then(boat => {
      if (boat === null) throw new Error();
      res.json(boat);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
      return;
    });
};

module.exports = {
  createBoat,
  displayAllBoats,
  findOneBoat,
  findAndUpdateBoat,
};
