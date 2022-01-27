const  axios = require('axios');
const reverse = require('reverse-geocode')
const { APIKEY2 } = require('../../config.js');
const { APIKEY3 } = require('../../config.js');

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


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

const getWeatherData = async () => {
  try {
    const { data } = axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
      params: {

        lat: '0',
        lon: '0',

      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': APIKEY2
      }
    })
  } catch(error) {
    console.log(error)
  }
}

module.exports.getPlacesData = getPlacesData;


