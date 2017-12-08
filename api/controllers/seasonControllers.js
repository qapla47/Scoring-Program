const mongoose = require("mongoose");

const Season = require("../models/seasonRegModel");

const STATUS_USER_ERROR = 422;

const createSeason = (req, res) => {
  const { seasonName, seasonStartDate, seasonEndDate, seasonSeriesTitles, weeksInSeries, overallScoring } = req.body;
  const newSeason = new Season({ seasonName, seasonStartDate, seasonEndDate, seasonSeriesTitles, weeksInSeries, overallScoring });

  newSeason
    .save()
    .then(createdSeason => {
      res.json(createdSeason);
    })
    .catch(err => {
      res.status(500).json({ err });
      return;
    });
};

const displayAllSeasons = (req, res) => {
  Season.find()
    .select("seasonName")
    .exec()
    .then(seasons => {
      if (seasons.length === null) throw new Error();
      res.json(seasons);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findOneSeason = (req, res) => {
  const { id } = req.params;
  Season.findById(id)
    .populate()
    .exec()
    .then(oneSeason => {
      if (oneSeason === null) throw new Error();
      res.json(oneSeason);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findAndUpdateSeason = (req, res) => {
  const {id} = req.params;
  const { seasonName, seasonStartDate, seasonEndDate, seasonSeriesTitles, weeksInSeries, overallScoring } = req.body;
  Season.findByIdAndUpdate(id)
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
  createSeason,
  displayAllSeasons,
  findOneSeason,
  findAndUpdateSeason,
};
