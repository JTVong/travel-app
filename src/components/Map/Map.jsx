import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
import { APIKEY } from '../../../config.js';

const Map = ({ setCoordinates, setBounds, coordinates, places, setSelectedPlace}) => {
  const classes = useStyles();
  const match = useMediaQuery('(min-width: 600px)');
  console.log(places)


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: APIKEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
      >
        {places?.map((place, index) => (
          <div
            key={index}
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            onClick={()=> setSelectedPlace(index)}
          >
            {
              !match ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
              ) : (
                <Paper elevation={5} className={classes.paper} >
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img src={place.photo ? place.photo.images.large.url : "https://shopsquareone.com/wp-content/uploads/2021/09/92582351ff066b951a513b1e8190aebe5bc79b50-1.png"}
                    alt={place.name} className={classes.pointer}
                  />
                  <Rating size="small" value={Number(place.rating)} className={classes.rating} readOnly />
                </Paper>
              )
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}


export default Map;