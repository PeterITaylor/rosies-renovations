import React from 'react';
import './home.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%', 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#555',
    minHeight: 300,
    maxWidth: 300,
    fontSize: 30,  
  },
  hero: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 400,
    backgroundColor: '#ccc',
    fontSize: 40,
  },
}));

export const Home = () => {
    const classes = useStyles();

    return (
        <div className='home'>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className={classes.hero}>
                            Photo???
                        </div>
                    </Grid>
                    <Grid item lg={8} sm={12} xs={12}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Paper className={classes.paper}>Painting</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Paper className={classes.paper}>Tiling</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Paper className={classes.paper}>Flooring</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Paper className={classes.paper}>Cabinets</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
