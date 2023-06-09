import {useDispatch, useSelector} from 'react-redux';
import { fetchVenues } from '../../store/modules/venueSlice';
//import {Link} from 'react-router-dom';
//import ErrorComponent from "../../components/shared/ErrorComponent";
import {useEffect} from 'react';
import { Card, Box, CardContent, Typography, Button, Chip, } from '@mui/material';
import { NavLink } from 'react-router-dom';



function Home() {
  const {name, token} = useSelector(state => state.auth)
  console.log(name, token)
  let venueManager = localStorage.venueManager
  console.log(venueManager)
  let welcomeName;
  if (name){
    welcomeName = JSON.parse(name)
  }
    const dispatch = useDispatch();
    const {venues} = useSelector(state => state.venues);

    console.log("venuedata", venues)
    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch]);
    return (
      <div>
{localStorage.venueManager ==="true"   && 
             <div className='hero mt-36  flex flex-col text-center object-cover h-96 w-full bg-red-600'>
             <div className='max-w-sm items-center m-auto'>
            <h1 className="my-4  text-5xl max-w-sm m-auto tablet:max-w-md laptop:max-w-lg text-white font-bold leading-tight">
               Welcome Back {welcomeName}
             </h1>
             <h1 className="my-22 text-3xl max-w-sm tablet:max-w-md laptop:max-w-lg m-auto text-white font-bold leading-tight">
               Feeling Lucky?
             </h1>
             <NavLink to = "createvenue">
             <Button  
                                   sx={{ color: 'black',
                                 
                                   mt:3, 
                                 backgroundColor: 'white', 
                                 borderColor: 'white',
                                 ":hover": {
                                   bgcolor: "pink",
                                   color: "white"
                                 }
                               
                               }}
 
                             type="submit"
                             fullWidth
                             variant="contained"
                             className="submit"
                           >
                             Create A Venue
                           </Button></NavLink></div>
            </div>}
{localStorage.accessToken && localStorage.venueManager ==="false" &&
             <div className='hero mt-40  flex flex-col text-center object-cover h-96 w-full bg-red-600'>
             <div className='max-w-sm items-center m-auto'>
            <h1 className="my-4 text-5xl max-w-sm m-auto tablet:max-w-md laptop:max-w-lg text-white font-bold leading-tight">
               Want To Become A Venue Manager?
             </h1>
             <h1 className="my-22 text-3xl max-w-sm tablet:max-w-md laptop:max-w-lg m-auto text-white font-bold leading-tight">
               Start Today!
             </h1>
             <NavLink to="/updatemanager">
             <Button 
                                   sx={{ color: 'black',
                                 
                                   mt:3, 
                                 backgroundColor: 'white', 
                                 borderColor: 'white',
                                 ":hover": {
                                   bgcolor: "pink",
                                   color: "white"
                                 }
                               
                               }}
 
                             type="submit"
                             fullWidth
                             variant="contained"
                             className="submit"
                           >
                             Become A Manager
                           </Button>
                           </NavLink>
                           </div>
            </div>}

            {!localStorage.accessToken  &&    
           <div className='hero mt-40  flex flex-col text-center object-cover h-96 w-full bg-red-600'>
            <div className='max-w-sm items-center m-auto'>
           <h1 className="my-4 text-5xl max-w-sm m-auto tablet:max-w-md laptop:max-w-lg text-white font-bold leading-tight">
              What Are You Waiting For?
            </h1>
            <h1 className="my-22 text-3xl max-w-sm tablet:max-w-md laptop:max-w-lg m-auto text-white font-bold leading-tight">
              Book Your Next Holiday With us!
            </h1>
            <NavLink to = "Signup">
            <Button 
                                  sx={{ color: 'black',
                                
                                  mt:3, 
                                backgroundColor: 'white', 
                                borderColor: 'white',
                                ":hover": {
                                  bgcolor: "pink",
                                  color: "white"
                                }
                              }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="submit"
                          >
                            Create Account
                          </Button>
                          </NavLink>
                          </div>
           </div>}
        <div className='background bg-HOLIDAZE-BROWN'>
        <div 
                            className="inner mt-0 grid lMobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-4 gap-4 mr-20 ml-20 ">
                            {venues.map((venue) =>(
                                <div className='mt-20' key={venue.id}>
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

            {venue.location.country? venue.location.country: "Country Unknown"}
            </Typography>
           
          </CardContent>
          
          <img className='object-cover m-0-auto h-1/2 w-screen items-center' src={
            venue.media.length>0? venue.media[0]:"https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          }alt="" />
<div className="card-info mt-5 items-center justify-center flex flex-row">
<Chip
sx={{
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
label={`$ ${venue.price}`} color="success" variant="outlined" />
<NavLink to={"/venuesbyid/" + venue.id}>
<Button
sx={{
  mr:1,
  ml:1,
  color: 'black', 
backgroundColor: 'white', 
borderColor: 'white',
":hover": {
bgcolor: "pink",
color: "white"
}
}}
variant="text">View</Button>
</NavLink>
<Chip
sx={{
  fontSize:12,
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

label={` ${venue.maxGuests} Guests`} color="success" variant="outlined" />

</div>
        </Box>

      </Card>
      </div>
                       ) )}
                       </div>
                       </div>
                       </div>
                       )
              }
export default Home;