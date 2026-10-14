const express = require("express");
const showController = require("../controllers/showController");

const router = express.Router()

router.get("/nowPlaying",showController.getNowPlayingMovies);
router.post("/add", showController.addShow);

module.exports = router

