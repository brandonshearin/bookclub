import React from 'react';
import { Badge, Typography, Card, Grid, CardContent, CardHeader, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DetailsItem from './profilePage/DetailsItem'
import { Star, RateReview } from '@material-ui/icons'
import DetailsItemWithBadge from './profilePage/DetailsItemWithBadge'
const useStyles = makeStyles({
    firstSection: {
        paddingTop: '1.35rem'
    }
})
const UserProfile = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant='h5' gutterBottom className={classes.firstSection}>
                Brandon Shearin
            </Typography>
            <Card>
                <CardHeader title='Details'></CardHeader>
                <CardContent>
                    <Grid container>
                        <Grid item xs={5}>
                            <DetailsItem userData={userData.location}></DetailsItem>
                            <DetailsItem userData={userData.activity}></DetailsItem>
                        </Grid>
                        <Grid item xs={7}>
                            <DetailsItemWithBadge></DetailsItemWithBadge>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

const userData = {
    location: {
        key: "Location",
        data: "Winston-Salem, (NC)",
        icon: "MyLocation"
    },
    activity: {
        key: "Activity",
        data: "Joined April, 2020",
        icon: "LocalActivity"
    },

}
export default UserProfile;