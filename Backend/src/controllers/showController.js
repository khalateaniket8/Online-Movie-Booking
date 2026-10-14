const axios = require('axios');
const show = require("../models/showModel");
const movieModel = require("../models/movieModel");

async function getNowPlayingMovies(req, res) {
    try{
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        headers: {Authorization : `Bearer ${process.env.TMDB_API_KEY}`},
     }
);
    
    res.status(200).json({
        success: true,
        movies: data.results
    });
    } catch (error) {
    console.error("TMDB Error:", error.message);
    console.error("TMDB Response:", error.response?.data);

    res.status(error.response?.status || 500).json({
        message: error.response?.data?.status_message || error.message
    });
}
}

// api to add a new shows in a database

async function addShow(req, res) {
    const{movieId, showsInput, showPrice} = req.body

    let movie = await movie.findById(movieId)

    if(!movie) {
        const [movieDetailsResponse, movieCreditResponse] = await promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,{
                headers: {Authorization: `Bearer ${process.env.TMDB_API_KEY}`}
            }),

            axios.get(`https://api.themoviedb.org/3/movie/{movieId}/credits`,{
                headers: {Authorization: `Bearer ${process.env.TMDB_API_KEY}`}
            })
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
            casts: movieApiData.casts,
            releases_date: movieApiData.releases_date,
            original_langauge: movieApiData.original_langauge,
            tagline: movieApiData.tagline
        }

        //add movie to a database 
        movie = await movie.create(movieDetails);
    }

    const showToCreate = [];
    showsInput.forEach(show => {
        const showDate = show.date;
        show.time.forEach((time) => {
           const dateTimeString = `${showDate}T${time}`;
           showToCreate.push({
            movie: movieId,
            showDateTime: new date(dateTimeString),
            showPrice,
            occupiedSeats: {}
           })
        })
    });

    if(showToCreate.length > 0) {
        await show.insertMany(showToCreate);
    }

    res.json({
        message: "show Added successfully"
    })
}

module.exports = {getNowPlayingMovies, addShow}