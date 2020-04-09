import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: 275,
    },
    name: {
        fontSize: 14
    },
    pos: {
        marginLeft: 175
    },
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})
const ProfileCard = (props) => {
    const classes = useStyles();
    let name = props.profile.name;
    let email = props.profile.email;
    let bio = props.profile.bio;
    let image = props.profile.image;
    const [hovered, setHovered] = useState(false)
    const toggleHover = () => setHovered(!hovered)

    return (
        <Card
            className={classes.root}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            raised={hovered}
        >
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardContent>
                <Typography variant='h5'>{name}</Typography>
                <Typography>{email}</Typography>
                <Typography>{bio}</Typography>
                <Button className={classes.pos}>
                    <Link to="/user" className={classes.link}>
                        View
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export default ProfileCard