const userControllers = require("../controllers/userControllers");
const clubControllers = require("../controllers/clubControllers");
const boatControllers = require("../controllers/boatControllers");
const seasonControllers = require("../controllers/seasonControllers");
const seriesControllers = require("../controllers/seriesControllers");
const fleetControllers = require("../controllers/fleetControllers");
// const raceControllers = require("../controllers/raceControllers");
// const raceDataControllers = require("../controllers/raceDataControllers");
// const dayControllers = require("../controllers/dayControllers");

module.exports = app => {
  //add your new routes here


  // User Routes
  app
    .route("/login") // login
    .post(userControllers.loginUser);

  app
    .route("/new-user") // create new user
    .post(userControllers.newUser);

  app
    .route("/user/:id")
    .get(userControllers.findOneUser)//Find a user
    .put(userControllers.findAndUpdateUser); // update a user


  // Club Routes  
  app
    .route("/clubs") // display all clubs
    .get(clubControllers.displayAllClubs);

  app
    .route("/new-club") // create new club
    .post(clubControllers.newClub);

  app
    .route("/clubs/:id") // find specific club and update info
    .get(clubControllers.findOneClub)
    .put(clubControllers.findAndUpdateClub);

  // Season Routes  
  app
  .route("/seasons") // display all seasons
  .get(seasonControllers.displayAllSeasons);

  app
    .route("/new-season") // create new season
    .post(seasonControllers.newSeason);

  app
    .route("/seasons/:id") // find specific season and update
    .get(seasonControllers.findOneSeason)
    .put(seasonControllers.findAndUpdateSeason);

//   // Day Routes  
//   app
//   .route("/seasons") // display all seasons
//   .get(seasonControllers.displayAllSeasons);

// app
//   .route("/new-season") // create new season
//   .post(seasonControllers.newSeason);

// app
//   .route("/seasons/:id") // find specific season and update
//   .get(seasonControllers.findOneSeason)
//   .put(seasonControllers.findAndUpdateSeason);

  // Series Routes  
  app
    .route("/series") // display all series
    .get(seriesControllers.displayAllSeries);

  app
    .route("/new-series") // create new series
    .post(seriesControllers.newSeries);

  app
    .route("/series/:id") // find specific series and update
    .get(seriesControllers.findOneSeries)
    .put(seriesControllers.findAndUpdateSeries);

  // Fleet Routes  
  app
    .route("/fleets") // display all fleets
    .get(fleetControllers.displayAllFleets);
  
  app
    .route("/new-fleet") // create new fleet
    .post(fleetControllers.newFleet);
  
  app
    .route("/fleets/:id") // find specific fleets and update
    .get(fleetControllers.findOneFleet)
    .put(fleetControllers.findAndUpdateFleet);

    // Boat Routes  
    app
    .route("/boats") // display all boats
    .get(boatControllers.displayAllBoats);
  
  app
    .route("/new-boat") // create new boat
    .post(boatControllers.newBoat);
  
  app
    .route("/boats/:id") // find specific boats and update
    .get(boatControllers.findOneBoat)
    .put(boatControllers.findAndUpdateBoat);

};