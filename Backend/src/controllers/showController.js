
const axios = require('axios');
const show = require("../models/showModel");
const movieModel = require("../models/movieModel");

async function getNowPlayingMovies(req, res) {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        }
      }
    );

    res.status(200).json({
      success: true,
      movies: data.results
    });

  } catch (error) {
    console.error("TMDB Error:", error.response?.data || error.message);

    res.status(error.response?.status || 500).json({
      message: error.response?.data?.status_message || error.message
    });
  }
}

// API to add new shows
async function addShow(req, res) {
  try {
    const { movieId, showsInput, showPrice } = req.body;

    let movie = await movieModel.findById(movieId);

    if (!movie) {
      const [movieDetailsResponse, movieCreditResponse] =
        await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
              }
            }
          ),

          axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            {
              headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
              }
            }
          )
        ]);

      const movieApiData = movieDetailsResponse.data;
      const movieCreditData = movieCreditResponse.data;

      const movieDetails = {
        _id: movieId,
        title: movieApiData.title,
        overview: movieApiData.overview,
        poster_path: movieApiData.poster_path,
        backdrop_path: movieApiData.backdrop_path,
        genres: movieApiData.genres,
        casts: movieCreditData.cast,
        release_date: movieApiData.release_date,
        original_language: movieApiData.original_language,
        tagline: movieApiData.tagline,

        runtime: movieApiData.runtime,
  vote_average: movieApiData.vote_average
      };

      movie = await movieModel.create(movieDetails);
    }

    const showToCreate = [];

    showsInput.forEach(item => {
      item.time.forEach(time => {
        const dateTimeString = `${item.date}T${time}`;

        showToCreate.push({
          movie: movieId,
          showDateTime: new Date(dateTimeString),
          showPrice,
          occupiedSeats: {}
        });
      });
    });

    if (showToCreate.length > 0) {
      await show.insertMany(showToCreate);
    }

    res.status(201).json({
      success: true,
      message: "Shows added successfully"
    });

  } catch (error) {
    console.error("Add Show Error:", error.response?.data || error.message);

    res.status(error.response?.status || 500).json({
      success: false,
      message: error.response?.data?.status_message || error.message
    });
  }
}

module.exports = { getNowPlayingMovies, addShow };
