const axios = require('axios');

async function getNowPlayingMovies(req, res) {
    try{
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        headers: {Authorization : `Bearer ${process.env.TMDB_API_KEY}`}
    }
);
    
    res.status(200).json({
        message: "successfully",
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

module.exports = {getNowPlayingMovies}