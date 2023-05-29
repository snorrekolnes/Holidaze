import { Typography, Checkbox, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  NavLink } from "react-router-dom";



function Profile() {
    const dispatch = useDispatch();
    const [userData, setUserData]=useState({
      email: undefined,
      venueManager: false
    })
 const {name, token} = useSelector(state => state.auth)
 console.log(name, token)
const username = JSON.parse(name)
        useEffect(() => {
          async function getUser(name) {
            try {
         const response =   await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}?_bookings=true?_venues=true/venues`, {
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
    <div className="bg-HOLIDAZE-BROWN">
       <div className="flex mt-32  min-h-screen text-white text-center m-auto flex-col items-center">
<Typography className='venuename m-auto pt-8' component="div" variant="h7">
            {username} 
            </Typography>
            <div className="profile-picture w-20 h-20 mt-5 relative">
        <img
         className="rounded-full absolute w-20 h-20 object-center  m-auto flex items-center"src={
          userData.avatar ? userData.avatar:"https://images.unsplash.com/photo-1560427450-4aa993c4c6ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
         }
          alt=""
        />
      </div>
<NavLink to="/update">
            <li className=" list-none">
              <span
                id="create-btn"
                className="flex text-center m-auto mt-2 text-sm text-gray-300 no-underline hover:text-gray-500 font-Josefin hover:text-underline py-2 px-4"
                href="#"
                >Update Avatar
            </span>
            </li>
            </NavLink>
            <Typography sx={{color: "white"}} className="pt-10" variant="subtitle2" color="text.secondary" component="div">
                Email
</Typography>
            <Typography className='venuename m-auto pt-2' component="div" variant="h7">
           {userData.email}
            </Typography>
            <Typography className="pt-10" variant="subtitle2" color="white" component="div">
                Venue manager
</Typography>
<Checkbox checked = {userData.venueManager && userData.venueManager}>
</Checkbox>
<NavLink to="/updatemanager">
            <li className=" list-none">
              <span
                id="create-btn"
                className="flex text-center m-auto mt-2 text-sm text-gray-300 no-underline hover:text-gray-500 font-Josefin hover:text-underline py-2 px-4"
                href="#"
                >Update Manager Status
            </span>
            </li>
            </NavLink>
            {userData.venueManager && 
          <div>
            <Typography 
            sx={{color: "white"}} className="pt-5" variant="subtitle2" color="white" component="div">
                Number Of Venues
                          </Typography>
                                      
                                      <li className="list-none">
                                        <span
                                          id="create-btn"
                                          className="inline-block text-white no-underline font-Josefin  hover:text-underline py-2 px-4"
                                          href="#"
                                          >{userData._count.venues}
                                      </span>
                                      </li>
                         {userData._count.venues>0 &&            
                          <NavLink to={"/profilevenues"}>
                          <Button
                          sx={{
                            mr:3,
                            ml:3,
                            color: 'black', 
                          backgroundColor: 'white', 
                          borderColor: 'white',
                          ":hover": {
                          bgcolor: "pink",
                          color: "white"
                          }
                          }}
                          variant="text">View Venues</Button>
                          </NavLink>}
                          <Typography 
                                      sx={{color: "white"}} 
                                      className="pt-5" variant="subtitle2" color="gray" component="div">
                                          Number Of Bookings
                          </Typography>
                                      
                                      <li className="list-none">
                                        <span
                                          id="create-btn"
                                          className="inline-block text-white no-underline font-Josefin  hover:text-underline py-2 px-4"
                                          href="#"
                                          >{userData._count.bookings}
                                      </span>
                                      </li>
                                      {userData._count.bookings>0 &&                  
                                         <NavLink to={"/profilebookings"}>
                         <Button
                          sx={{
                            mb:10,
                            mr:3,
                            ml:3,
                            color: 'black', 
                          backgroundColor: 'white', 
                          borderColor: 'white',
                          ":hover": {
                          bgcolor: "pink",
                          color: "white"
                          }
                          }}
                          variant="text">View Bookings</Button>
                          </NavLink>}
                          </div>
                          }
                         </div>
                         </div>
    )
    }

export default Profile;