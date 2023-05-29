import { Typography, Chip, CardContent, Box, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function ProfileBookings() {
    const dispatch = useDispatch();
    const [bookingData, setUserData]=useState({
      email: undefined,
      venueManager: false
    })
 const {name, token} = useSelector(state => state.auth)
 console.log(name, token)
const username = JSON.parse(name)
        useEffect(() => {
          async function getUser(name) {
            try {
         const response =   await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}/bookings?_venue=true`, {
               method: 'GET',
               headers: {
                 'Content-Type': 'application/json',
                 "Authorization": `Bearer ${token}`
               },  
             }) 
               const data = await response.json()
               console.log(data)
               setUserData(data)
               return data
        }
            catch (error) {
               console.log("Sorry an error happened", error)
            }
            }
          getUser(username)
        },[username, token])
    return (
        <div className="bg-HOLIDAZE-BROWN ">
        <Typography 
                        className="text-white m-auto text-center pt-44" component="h1" variant="h5">
                          My Bookings
                        </Typography>
         <div
                            className="inner mt-10 grid pb-10 lMobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-4 gap-4 mr-20 ml-20 ">                       
        {bookingData.length>0 && bookingData.map((venue)=> (
            <div className="mt-20" key={venue.id}>
                <Card sx={{ display: 'flex' }}>           
        <Box sx={{"& .MuiTypography-root": {
                              width: 400,
                          },
                          "& .css": {
                            width: 96,
                        },
                        
                          display: 'flex', flexDirection: 'column', height:300, }}>
          <CardContent sx={{ flex: 'col', width:100 }}>  
            <Typography className='venuename' component="div" variant="h7">
            {venue.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
            {venue.venue.location.country? venue.venue.location.country: "Country Unknown"}
            </Typography>
          </CardContent>  
          <img className='object-cover m-0-auto h-1/2 w-screen items-center' src={
            venue.venue.media.length>0? venue.venue.media[0]:"https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          }alt="" />
<div className="card-info mt-5 items-center justify-center flex flex-row">
<Chip
sx={{
    mr:2,
  color: 'gray',
  '& .MuiChip-label': {
    color: 'gray',
    display: 'block',
    whiteSpace: 'normal',
  },
  '& .css .MuiChip-root': {
    border: 'gray',
    display: 'block',
    whiteSpace: 'normal',
  },
}}
label={`$ ${venue.venue.price}`} color="success" variant="outlined" />
<Chip
sx={{
    ml:2,
  color: 'gray',
  '& .MuiChip-label': {
    color: 'gray',
    display: 'block',
    whiteSpace: 'normal',
  },
  '& .MuiChip-border': {
    color: 'gray',
    display: 'block',
    whiteSpace: 'normal',
  },
}}
label={` ${venue.venue.maxGuests} Guests`} color="success" variant="outlined" />
</div>
        </Box>
      </Card>
            </div>
        ))}
        </div>
       </div>
    )
    }
export default ProfileBookings;