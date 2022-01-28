import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';

import useStyles from './styles';

const List = ({ places, selectedPlace, isLoading, type, rating, setType, setRating, setSelectedPlace }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(()=>{
    const refs = Array(places.length).fill().map((el) => el = createRef());
    setElRefs(refs)
  }, [places])

  useEffect(()=>{
    if(selectedPlace) {
      elRefs[selectedPlace].current.scrollIntoView({behavior: "smooth", block:"start"})
    }
  }, [selectedPlace])


  return (
    <div className={classes.container}>
        <Typography variant='h5'> Restaurants, Hotels & Places to visit </Typography>
      { isLoading
          ? (
              <div className={classes.loading}>
                <CircularProgress size="5rem" />
              </div>
            )
          : (
              <>
                <FormControl className={classes.formControl}>
                  <InputLabel>Type</InputLabel>
                  <Select value={type} onChange={e => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Places To visit</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel>Rating</InputLabel>
                  <Select value={rating} onChange={e => setRating(e.target.value)}>
                    <MenuItem value={4}>(4+)&#11088;&#11088;&#11088;&#11088;</MenuItem>
                    <MenuItem value={3}>(3+)&#11088;&#11088;&#11088;</MenuItem>
                    <MenuItem value={0}>All</MenuItem>
                  </Select>
                </FormControl>

                <Grid container spacing={3} className={classes.list} elevation={5}>
                  {places?.map((place, index) => (
                    <Grid item key={index} xs={12}  id={place.location_id} ref={elRefs[index]} >
                      <PlaceDetails
                        place={place}
                      />
                    </Grid>
                  ))}
                  {console.log(elRefs)}
                </Grid>
              </>
            )
      }
    </div>

  )
}


export default List;