import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreateVenue from '../components/views/CreateVenue';
import Home from '../components/views/HomePage';
//import Signup from "../components/views/SignUp";
import  Login  from "../components/views/LoginMain";
import Profile from '../components/views/Profile';
import Signup from '../components/views/SignUp';
import VenuesById from '../components/views/VenueById';


//import CreateVenue from "../components/views/CreateVenue";
//import Profile from "../components/views/Profile";
//import LoginForm from "../components/views/LoginReduxTest";




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
            </Routes>
        </>
    );
}


export default Router;
