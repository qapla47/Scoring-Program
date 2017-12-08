const mongoose = require("mongoose");

const Fleet = require("../models/fleetRegModel");

const STATUS_USER_ERROR = 422;

const createFleet = (req, res) => {
  const { fleetName, fleetRaceDays, handicapMethod } = req.body;
  const newFleet = new Fleet({ fleetName, fleetRaceDays, handicapMethod });

  newFleet
    .save()
    .then((createdFleet) => {
      res.json(createdFleet);
    })
    .catch((err) => {
      res.status(500).json({ err });
      return;
    });
};

const displayAllFleets = (req, res) => {
  Fleet.find({})
    .select("fleetName")
    .exec()
    .then((fleets) => {
      if (fleets.length === null) throw new Error();
      res.json(fleets);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ err });
      return;
    });
};

const findOneFleet = (req, res) => {
  const { id } = req.params;
  Fleet.findById(id)
    .populate()
    .exec()
    .then((oneFleet) => {
      if (oneFleet === null) throw new Error();
      res.json(oneFleet);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ err });
      return;
    });
};

const findAndUpdateFleet = (req, res) => {
  const {id} = req.params;
  const { fleetName, fleetRaceDays, handicapMethod } = req.body;
  Fleet.findByIdAndUpdate(id)
    .exec()
    .then((fleet) => {
      if (fleet === null) throw new Error();
      res.json(fleet);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
      return;
    });
};

module.exports = {
  createFleet,
  displayAllFleets,
  findOneFleet,
  findAndUpdateFleet,
  
};
