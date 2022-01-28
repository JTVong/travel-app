const  axios = require('axios');
const { APIKEY2,  weatherKEY  } = require('../../config.js');



const weatherURL = 'https://community-open-weather-map.p.rapidapi.com/find';


const getPlacesData = (type ,{ sw, ne }, callback) => {

  axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
    params: {
      bl_latitude: sw.lat ,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': APIKEY2
    }
  }).then(({data})=> {
    callback(data.data, null)
  }).catch(err => callback(null, err))
}

const getWeatherData = ({ lat, lng }, callback) => {
    axios(weatherURL, {
      params: {
        lat: lat,
        lon: lng,
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': weatherKEY
      }
    })
    .then(({ data }) => callback(data, null))
    .catch((error) => console.log(error))
}

module.exports.getPlacesData = getPlacesData;
module.exports.getWeatherData = getWeatherData;

