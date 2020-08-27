import React, {useState} from 'react';
import './home.css'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Paper, 
    Grid, 
    Card, 
    CardActionArea, 
    CardMedia, 
    CardContent,
    Typography,
    CardActions,
    Button
} from '@material-ui/core';
import { ServiceCard } from '../../components/service-card';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    width: '100%', 
  },
  hero: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 400,
    backgroundColor: '#ccc',
    fontSize: 40,
  },
  serviceBlocks: {
      width: '100%',
      '& Grid': {
          padding: 8,
      }
  },
  media: {
    height: 140,
  },
  root: {
    textAlign: 'center',
    color: '#555',
    width: 'calc(100% - 16px)',
    height: 300,
    fontSize: 30,
    boxSizing: 'content-box',
    margin: 8,
    cursor: 'pointer',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#555',
    width: 'calc(100% - 16px)',
    height: 300,
    fontSize: 30,
    boxSizing: 'border-box',
    margin: 8,
    cursor: 'pointer',
  },
}));

export const Home = ({history, ...props}) => {
    const classes = useStyles();

    return (
        <div className='home'>
            <div className={classes.content}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.hero}>
                            Photo???
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify='center'>
                            <Grid item xs={0} sm={0} lg={2}/>
                            <Grid item xs={12} sm={6} lg={2}>
                                <ServiceCard 
                                    title='Painting' 
                                    image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                                    imageTitle='Contemplative Reptile'
                                    text='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica'
                                    link='/painting'
                                    history={history} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={2}>
                                <ServiceCard 
                                    title='Tiling' 
                                    image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                                    imageTitle='Contemplative Reptile'
                                    text='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica'
                                    link='/tiling'
                                    history={history} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={2}>
                                <ServiceCard 
                                    title='Flooring' 
                                    image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                                    imageTitle='Contemplative Reptile'
                                    text='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica'
                                    link='/flooring'
                                    history={history} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={2}>
                                <ServiceCard 
                                    title='Cabinets' 
                                    image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                                    imageTitle='Contemplative Reptile'
                                    text='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica'
                                    link='/cabinets'
                                    history={history} 
                                />
                            </Grid>

                            <Grid item xs={0} sm={0} lg={2}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};