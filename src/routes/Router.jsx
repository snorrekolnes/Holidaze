import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreateVenue from '../components/views/CreateVenue';
import Home from '../components/views/HomePage';
import  Login  from "../components/views/LoginMain";
import Profile from '../components/views/Profile';
import Signup from '../components/views/SignUp';
import Update from '../components/views/UpdateAvatar';
import VenuesById from '../components/views/VenueById';
import UpdateManagerState from '../components/views/UpdateManagerState';
import ProfileVenues from '../components/views/ProfileVenues';
import ProfileBookings from '../components/views/ProfileBookings';
import UpdateVenue from '../components/views/UpdatePost';

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/createvenue" element={<CreateVenue/>}/>
                <Route path="/venuesbyid/:id" element={<VenuesById/>}/>
                <Route path="/update" element={<Update/>}/>
                <Route path="/updatemanager" element={<UpdateManagerState/>}/>
                <Route path="/profilevenues" element={<ProfileVenues/>}/>
                <Route path="/profilebookings" element={<ProfileBookings/>}/>
                <Route path="/editvenue/:id" element={<UpdateVenue/>}/>
            </Routes>
        </>
    );
}


export default Router;
