import React from 'react';
import { Container, } from '@material-ui/core/'
import { Route } from 'react-router-dom'
import UserProfile from './UserProfile'
import ProfileGrid from './ProfileGrid'

const AppBody = () => {
    return (
        <Container maxWidth="md" component='div' style={{ backgroundColor: '#fff', height: '100vh' }}>
            <Route path='/user'>
                <UserProfile></UserProfile>
            </Route>
            <Route exact path="/">
                <ProfileGrid></ProfileGrid>
            </Route>
        </Container>
    )
}

export default AppBody;