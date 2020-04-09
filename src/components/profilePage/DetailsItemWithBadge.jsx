import React from 'react';
import { Badge, Typography, Grid, Box } from '@material-ui/core'
import { Star, RateReview } from '@material-ui/icons'

const DetailsItemWithBadge = () => {
    return (
        <Grid
            container
            direction="column"
            justify='center'
            alignItems='flex-start'
            spacing={2}>
            <Grid item>
                <Box alignItems="center" flexDirection='row' display='flex'>
                    <Box>
                        <Typography variant='subtitle1'>
                            Ratings
                                            </Typography>
                    </Box>
                    <Box mx={5}>
                        <Badge color='primary' badgeContent={4}>
                            <Star />
                        </Badge>
                    </Box>
                </Box>
            </Grid>
            <Grid item>
                <Box alignItems='center' flexDirection='row' display='flex'>
                    <Typography variant='subtitle1'>
                        Reviews
            </Typography>
                    <Box mx={5}>
                        <Badge color='primary' badgeContent={5}>
                            <RateReview />
                        </Badge>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default DetailsItemWithBadge