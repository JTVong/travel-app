import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';

import useStyles from './styles';
const List = ({ places }) => {
  console.log(places)
  const classes = useStyles();
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0)

  return (
    <div className={classes.container}>
      <Typography variant='h5'> Restaurant, Hotels & Places to visit </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={ e => setType(e.target.value) }>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='places'>Places To visit</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={ e => setRating(e.target.value) }>
          <MenuItem value={5}>(5)&#11088;&#11088;&#11088;&#11088;&#11088;</MenuItem>
          <MenuItem value={4}>(4+)&#11088;&#11088;&#11088;&#11088;</MenuItem>
          <MenuItem value={3}>(3+)&#11088;&#11088;&#11088;</MenuItem>
          <MenuItem value={0}>All</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places ?.map((place, index) =>  (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>

  )
}


export default List;