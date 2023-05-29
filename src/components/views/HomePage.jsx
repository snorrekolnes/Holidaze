import {useDispatch, useSelector} from 'react-redux';
import { fetchVenues } from '../../store/modules/venueSlice';
//import {Link} from 'react-router-dom';
//import ErrorComponent from "../../components/shared/ErrorComponent";
import {useEffect, useMemo} from 'react';
import { setLoadingState } from '../../store/modules/loaderSlice';
import { Card, Box, CardContent, Typography, IconButton, CardMedia, Button, Chip, } from '@mui/material';
import { NavLink } from 'react-router-dom';



function Home() {
  const CHARACTER_LIMIT = 20;
  const {name, token} = useSelector(state => state.auth)
  console.log(name, token)
  const welcomeName =   JSON.parse(name)
    const dispatch = useDispatch();
    const {venues} = useSelector(state => state.venues);

    console.log("venuedata", venues)
    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch]);
    // Use useMemo to memoize the products data and only recompute it when necessary.
    // This can help reduce unnecessary re-rendering.
    // grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8
    //if (venues.venue.media === []){         MuiBox-root MuiTypography-root   css-huuc1k
    //    return venues.venue.media = ["https://unsplash.com/photos/BSQq5dRT_KU"]}

    return (
      <div>





{localStorage.venueManager   &&
             <div className='hero mt-36  flex flex-col text-center object-cover h-96 w-full bg-red-600'>
             <div className='max-w-sm items-center m-auto'>
            <h1 className="my-4  text-5xl max-w-sm m-auto tablet:max-w-md laptop:max-w-lg text-white font-bold leading-tight">
               Welcome Back {welcomeName}
             </h1>
             <h1 className="my-22 text-3xl max-w-sm tablet:max-w-md laptop:max-w-lg m-auto text-white font-bold leading-tight">
               Feeling Lucky?
             </h1>
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
                           </Button></div>
            </div>}


{localStorage.accesToken  &&  !localStorage.venueManager &&
             <div className='hero mt-40  flex flex-col text-center object-cover h-96 w-full bg-red-600'>
             <div className='max-w-sm items-center m-auto'>
            <h1 className="my-4 text-5xl max-w-sm m-auto tablet:max-w-md laptop:max-w-lg text-white font-bold leading-tight">
               Want To Become A Venue Manager?
             </h1>
             <h1 className="my-22 text-3xl max-w-sm tablet:max-w-md laptop:max-w-lg m-auto text-white font-bold leading-tight">
               Start Today!
             </h1>
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
                           </Button></div>
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
                          </Button></div>
           </div>}

{/*
        <div className='hero mt-40  flex flex-col text-center object-cover h-96 w-full bg-red-600'>
        <h1 className="my-4 text-5xl max-w-sm m-auto tablet:max-w-md laptop:max-w-lg text-white font-bold leading-tight">
           What Are You Waiting For?
         </h1>
         <h1 className="my-22 text-3xl max-w-sm tablet:max-w-md laptop:max-w-lg m-auto text-white font-bold leading-tight">
           Book Your Next Holiday With us!
         </h1>
                            </div> */}






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
          {/*
          <Box sx={{ display: 'flex', alignItems: 'center', pr:5, pl: 1, pb: 0 }}>
            <Typography aria-label="previous">
            ${venue.price}
            </Typography>
            <Typography aria-label="play/pause">
             
            </Typography>
            <Typography sx={{ml:20}}  aria-label="next">
                 {venue.location.city}
            </Typography>
          </Box>*/
}
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
        /*
<div 
                            className="inner flex flex-col lMobile:grid lMobile:grid-cols-2 gap-16 laptop:flex laptop:flex-row laptop:justify-between">
                            {venues.map((venue) =>(

                                
                                <div className='' key={venue.id}>
                                            <h1 className="text-white font-Josefin ">{venue.name}</h1>
                                    <img className='object-center text-center object-fit h-20 w-30' src={venue.media} alt="" />
                                    <p className=' text-xs' >{venue.description}</p>
                                    <p className=' text-xs' >{venue.location.country}</p>
                                    <p className=' text-xs' >${venue.price}</p>
                                    </div>
                           ) )}
         </div>
         )
}
*/
export default Home;