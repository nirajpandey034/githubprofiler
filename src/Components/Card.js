import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      display: 'inline-block',
      margin:'5px',
    },
    media: {
      height: 200,
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'red'
     },
  });

export default function Card1(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image= {props.avatar_url}
              title={props.bio}
            />
            <div className={classes.overlay}>
                <CloseIcon onClick={() =>props.delete(props.name)}/>
            </div>
            
            <CardContent  onClick={()=>window.open(`https://github.com/${props.profile}`,"_new")}>
              <Typography variant="h5" component="h4" style={{"textAlign":"left"}} 
             >
                {props.name}
              </Typography>
                <Typography component="p" style={{"textAlign":"left"}}>
                  Location: {props.location}
              </Typography>
              <Typography component="p" style={{"textAlign":"left"}}>
                  Followers: {props.followers}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}
