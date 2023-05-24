import {useDispatch, useSelector} from 'react-redux';
//import { fetchProductById} from '../../store/modules/venueSlice';
//import {Link} from 'react-router-dom';
//import ErrorComponent from "../../components/shared/ErrorComponent";
import {useEffect, useMemo} from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../store/modules/venueByIdSlice';
import { Typography, Chip, Collapse, Card, Box, IconButton, CardContent, Button, CardHeader, Avatar, CardActions, CardMedia, Checkbox } from '@mui/material';
import { Fullscreen } from '@mui/icons-material';
import { format } from 'date-fns';
import Table from '@mui/joy/Table';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function VenuesById() {
    const {id}= useParams();
    const dispatch = useDispatch();
  console.log(id)
  const {singleVenue} = useSelector(state => state.singleVenue);
    useEffect(() => {
        dispatch(fetchProductById(`${id}`));
    }, [dispatch]);
    // Use useMemo to memoize the products data and only recompute it when necessary.
    // This can help reduce unnecessary re-rendering.
 
     

   const formattedDate = format(new Date(),'yyyy')
    console.log(formattedDate)
    return (
        <div className='background bg-HOLIDAZE-BROWN'>
        <div 
                            className="inner mt-40  gap-4 mr-20 ml-20 ">
                           
                           <div className='mt-20' key={singleVenue.id}>
        
                           <Card sx={{ maxWidth: "100%" }}>
      <CardHeader
        action={
            
          <IconButton aria-label="settings">
             <Typography variant="subtitle2" color="text.secondary" component="div">

{singleVenue.location && singleVenue.location.country? singleVenue.location.country: "Country Unknown"}
</Typography>
          </IconButton>
        }
        title={singleVenue.name}
        subheader={formattedDate}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {singleVenue.location && singleVenue.location.city}
         
        </Typography>
      </CardContent>
      <img className='object-cover m-auto flex justify-center m-0-auto h-96 w-full items-center' src={
          singleVenue.media &&   singleVenue.media.length > 0 ? singleVenue.media[0] : "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          } alt="" /> 
        <CardContent>
          <Typography className='text-center' paragraph>
          {singleVenue.description}
          </Typography>
          <div className='info flex items-center m-auto justify-between flex-col'>
          <Typography className='mb-3' variant="subtitle2" color="text.secondary" component="div">
                Facility Info
</Typography>
            <div className='facilities mt-10 w-96 justify-between m-auto flex flex-row'>
                <div className='wifi text-center flex flex-col'>
                <h1>wifi</h1>
                <Checkbox checked = {singleVenue.meta && singleVenue.meta.wifi}
                sx={{
                    color: 'success',
                    '&.Mui-checked': {
                        color: "pink",
                  }}   } 
                        />
                </div>
                <div className='breakfast text-center flex flex-col'>
                <h1>Breakfast</h1>
                <Checkbox checked = {singleVenue.meta && singleVenue.meta.breakfast}
                sx={{
                    color: 'success',
                    '&.Mui-checked': {
                        color: "pink",
                  }}   }  
                        />
                </div>
                <div className='pets text-center flex flex-col'>
                <h1>Pets</h1>
                <Checkbox checked = {singleVenue.meta && singleVenue.meta.pets}
                 sx={{
                    color: 'success',
                    '&.Mui-checked': {
                        color: "pink",
                  }}   }
                        />
                </div>
                <div className='parking text-center flex flex-col'>
                <h1>Parking</h1>
                <Checkbox checked = {singleVenue.meta && singleVenue.meta.parking}
                sx={{
                    color: 'success',
                    '&.Mui-checked': {
                        color: "pink",
                  }}   }
                        />
                </div>
                
            </div>
            <div className='more-info  text-center mt-10 flex flex-col m-auto'>
            <Typography variant="subtitle2" color="text.secondary" component="div">
                Address
</Typography>
<Typography variant="subtitle1" color="text.secondary" component="div">
{singleVenue.location && singleVenue.location.address}
                </Typography>
                <Typography sx={{
                    mt: 3,
                   
                  }} variant="subtitle2" color="text.secondary" component="div">
                Zip
</Typography>
<Typography     variant="subtitle1" color="text.secondary" component="div">
{singleVenue.location && singleVenue.location.zip}
                </Typography>
    
                <Typography sx={{
                    mt: 3,
                   
                  }} variant="subtitle2" color="text.secondary" component="div">
                Price
</Typography>
<Typography     variant="subtitle1" color="text.secondary" component="div">
${singleVenue && singleVenue.price}
                </Typography>
                </div>
                <Typography sx={{
                    mt: 3,
                   
                  }} variant="subtitle2" color="text.secondary" component="div">
                Max Guests
</Typography>
<Typography     variant="subtitle1" color="text.secondary" component="div">
{singleVenue && singleVenue.maxGuests}
                </Typography>
          </div>
          <div className="date flex flex-col items-center">
          <Typography sx={{
                    mt: 3,
                   
                  }} variant="subtitle2" color="text.secondary" component="div">
                Pick a date
</Typography>
<DatePicker
  label="Controlled picker"
  //value={value}
 // onChange={(newValue) => setValue(newValue)}
/>
          </div>
          
        </CardContent>

    </Card>





      </div>
                        
                       </div>
                       </div>
                       )
}

export default VenuesById;