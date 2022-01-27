import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from "@material-ui/core"
import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';
import PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx';
import { getPlacesData, getWeatherData} from './api';


const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [ weatherData, setWeatherData] = useState([]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) => {
  //     setCoordinates({lat:latitude, lng: longitude})
  //   })
  // }, [])

  // useEffect(()=>{
  //   const filteredPlaces = places.filter(place => place.rating && Number(place.rating) >= rating);
  //   setFilteredPlaces(filteredPlaces)
  // }, [rating])

  // useEffect(() => {
  //   if(bounds &&  bounds.sw && bounds.ne) {
  //     setIsLoading(true);
  //        getWeatherData(coordinates, (data, err) => {setWeatherData(data)})
  //     getPlacesData( type,bounds,(data, err) => {
  //         setPlaces(data.filter(place => place.name && Number(place.num_reviews) > 0));
  //         setIsLoading(false);
  //         setFilteredPlaces([]);
  //    })
  //   }
  // }, [bounds, type])

  return(
    <>
      <CssBaseline/>
      <Header setCoordinates={setCoordinates}/>
       <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List
            places={ filteredPlaces.length ? filteredPlaces : places}
            selectedPlace={selectedPlace}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={ filteredPlaces.length ? filteredPlaces : places}
            setSelectedPlace={setSelectedPlace}
            weatherData={weatherData}

          />
        </Grid>
      </Grid>
    </>
  )

}
export default App;