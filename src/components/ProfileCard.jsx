import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/core/styles';

// const Test = styled(Typography)({
//     width: 200,
// })

const useStyles = makeStyles({
    root: {
        width: 275,
    }, 
    name: {
        fontSize: 14
    },
    pos:{
        marginLeft: 175
    },
    media: {
        height: 140,
    },
})
const ProfileCard = () => {
    const classes = useStyles();

    return (
    <Card className={classes.root} >
         <CardMedia
          className={classes.media}
          image="https://lh3.googleusercontent.com/si9GntzX9OD-uJ4n2xxSkw1Tnu6S24vCJyiRHex9_2BgrnIzI5j4dVCRzZdTUfnxStwFFVVoAwGO3r771KSsEvhUsii8ckFkbnb27uwySBUHL2DttAS5baB8Z3H936928gJVc7vknQ=w2400"
          title="Contemplative Reptile"
        />
        <CardContent>
            <Typography variant='h5'>Brandon Shearin</Typography>
            <Typography>bshearin15@gmail.com</Typography>
            <Typography>I like to read</Typography>
            <Button className={classes.pos}>View</Button>
        </CardContent>
    </Card>
    )
}

const Name = () => {
    return (<Typography variant="h5" gutterBottom>
        Brandon S.
    </Typography>)
}

export default ProfileCard