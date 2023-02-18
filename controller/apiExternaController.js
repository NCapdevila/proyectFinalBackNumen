const axios = require('axios')

const consultaPelisPopulares = async (req, res) =>{
    try {
        const resultado = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=390a2a575f691440ebbaef0c93bb0baf&language=es-ES&page=1")
        res.json({
            response: resultado.data,
            status: resultado.status
        })
    } catch (error) {
        res.json({
            response: error.response.data,
            status: error.response.status
        })
    }
}

module.exports={consultaPelisPopulares}