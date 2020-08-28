import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardActionArea, 
    CardMedia, 
    CardContent,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}));

export const ServiceCard = ({history, ...props}) => {
    const classes = useStyles();

    return (
        <Card 
            className={classes.root}
            onClick={() => history.push(props.link)}
        >
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.image}
                title={props.imageTitle}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.text}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};