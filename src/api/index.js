const  axios = require('axios');
const { APIKEY2 } = require('../../config.js');

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



const getPlacesData = ({ sw, ne }, callback) => {

  // axios.get(URL, {
  //   params: {
  //     bl_latitude: sw.lat ,
  //     tr_latitude: ne.lat,
  //     bl_longitude: sw.lng,
  //     tr_longitude: ne.lng,
  //   },
  //   headers: {
  //     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  //     'x-rapidapi-key': APIKEY2
  //   }
  // }).then(({data})=> {
  axios.get(URL, {
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


module.exports.getPlacesData = getPlacesData;