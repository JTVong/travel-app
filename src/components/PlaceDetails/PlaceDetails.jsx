import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js';

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <Card elevation={6} className={classes.card}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : "https://shopsquareone.com/wp-content/uploads/2021/09/92582351ff066b951a513b1e8190aebe5bc79b50-1.png"}
        title={place.name}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" className={classes.name}
          onClick={() => window.open(place.website, "_blank")}
        >{place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating className={classes.rating} value={Number(place.rating)} readOnly/>
          <Typography gutterBottom variant="subtitle1">
            {`${place.num_reviews} reviews`}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1" >{place.ranking}</Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary"
            onClick={() => {
              const name = `${place.name.replace(/\s/g, '-').replace("'s", "s")}-${place.address_obj.city.replace(/\s/g, '-')}`
              window.open(`https://www.yelp.com/biz/${name}`, "_blank")
            }}
          >
            Yelp Reviews
          </Button>
          <Button size="small" color="primary"
            onClick={() => window.open(place.web_url, "_blank")}>
            Trip Advisor
          </Button>




        </CardActions>


      </CardContent>
    </Card>
  )
}

export default PlaceDetails;