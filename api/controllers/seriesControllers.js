const mongoose = require("mongoose");

const Series = require("../models/seriesRegModel");
//const Comment = require("../models/commentModels");

const STATUS_USER_ERROR = 422;

const createSeries = (req, res) => {
  const { seriesName, seriesStartDate, weeksInSeries } = req.body;
  const newSeries = new Series({ seriesName, seriesStartDate, weeksInSeries });

  newSeries
    .save()
    .then(createdSeries => {
      res.json(createdSeries);
    })
    .catch(err => {
      res.status(500).json({ err });
      return;
    });
};

const displayAllSeries = (req, res) => {
  Series.find()
    .select("seriesName")
    .exec()
    .then(series => {
      if (series.length === null) throw new Error();
      res.json(series);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findOneSeries = (req, res) => {
  const { id } = req.params;
  Series.findById(id)
    .populate()
    .exec()
    .then(oneSeries => {
      if (oneSeries === null) throw new Error();
      res.json(oneSeries);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

const findAndUpdateSeries = (req, res) => {
  const {id} = req.params;
  const { seriesName, seriesStartDate, weeksInSeries } = req.body;
  Series.findByIdAndUpdate(id)
    .exec()
    .then(series => {
      if (series === null) throw new Error();
      res.json(series);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
      return;
    });
};

module.exports = {
  createSeries,
  displayAllSeries,
  findOneSeries,
  findAndUpdateSeries,
};
