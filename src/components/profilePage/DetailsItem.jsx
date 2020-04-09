import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { MyLocation, LocalActivityOutlined } from '@material-ui/icons'

const DetailsItem = (props) => {
    let userData = props.userData

    return (
        <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            spacing={4}>
            <Grid item >
                {icon(userData.icon)}
            </Grid>
            <Hidden smDown>
                <Grid item>
                    <Typography variant='subtitle1'>
                        {userData.key}
                    </Typography>
                </Grid>
            </Hidden>
            <Grid item>
                <Typography variant='subtitle1'>
                    {userData.data}
                </Typography>
            </Grid>
        </Grid>
    )
}

const icon = (iconName) => {
    if (iconName === "MyLocation") {
        return <MyLocation />
    } else if (iconName === "LocalActivity") {
        return <LocalActivityOutlined />
    }
}

export default DetailsItem