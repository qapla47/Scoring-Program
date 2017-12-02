// this file is for the endpoints of the API

const express = require("express");

// for future specific routers go here
// template: const userRouter = require('../pathToRouter.js');

const clubRegFormRouter = require('../src/Components/clubRegForm/ClubRegForm');
const fleetRegFormRouter = require('../src/Components/FleetRegForm/FleetRegForm');
const loginFormRouter = require('../src/Components/LoginForm/LoginForm');
const scoreRaceFormRouter = require('../src/Components/ScoreRaceForm/ScoreRaceForm');
const userRegFormRouter = require('../src/Components/UserRegForm/UserRegForm');

const api = express.Router();

// for future specific uses
// template: api.use('/users', userRouter);
api.use('/userRegForm', userRegFormRouter);
api.use('/clubRegForm', clubRegFormRouter);
api.use('/fleetRegForm', fleetRegFormRouter);
api.use('/loginForm', loginFormRouter);
api.use('/scoreRaceForm', scoreRaceFormRouter);

module.exports = api;

//endpoints of API