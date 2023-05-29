import {useDispatch, useSelector} from 'react-redux';
import {useEffect,  useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../store/modules/venueByIdSlice';
import { Typography, Card,  IconButton, CardContent, Button, CardHeader,  Checkbox, TextField } from '@mui/material';
import { format } from 'date-fns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';





function VenuesById() {
    const {token} = useSelector(state => state.auth)
    const {id}= useParams();
    const dispatch = useDispatch();
  console.log(id)
  const {singleVenue} = useSelector(state => state.singleVenue);
    useEffect(() => {
        dispatch(fetchProductById(`${id}`));
    }, [dispatch]);

    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateto] = useState();
    const [guests, setGuests] = useState();
    const [venueId, setVendueId] = useState();
    console.log(dateFrom, dateTo, guests)
    const handleBooking = async ( id, token) => {
        try{
        const response =   await fetch('https://api.noroff.dev/api/v1/holidaze/bookings?_venue=true', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify(
                {
                    "dateFrom": dateFrom, 
                    "dateTo": dateTo,
                    "guests": parseFloat(guests),
                    "venueId": id,
                  }
              )
            })
              const data = await response.json()
              console.log(data)
              return data
           }
           catch (error) {
              console.log("fuck", error)
           }
        }
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
                            <form className="form mt-0 text-white flex flex-col laptop:float-right lMobile:w-80 m-auto items-center" noValidate onSubmit={ (e)=> {e.preventDefault(); handleBooking(id, token)} }>
                            <DatePicker className='mt-5'
                            label="Date From"
                            onChange={(newValueFrom) => setDateFrom(newValueFrom.$d)}
                            />
                            <DatePicker className='m-auto mt-5'
                            label="Date To"
                            onChange={(newValueTo) => setDateto(newValueTo.$d)}
                            />
                            <TextField className="text-white"
                          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                              sx={{
                                "& input": {
                                    color: 'black',
                                },
                                "& .MuiFormLabel-root": {
                                  color: 'black'
                              },
                              "& .MuiFormLabel-root.Mui-focused": {
                                  color: 'primary.main'
                              },
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'black',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'black',
                                }}
                            }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Max Guests"
                            name="Max Guests"
                            label="Max Guests"
                            type="number"
                            onChange={e => setGuests(e.target.value)}
                          />
                {dateTo && dateFrom && guests &&           
                 <Button 
                                  sx={{ color: 'black', 
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
                            Book
                          </Button>}
                                </form>
                                 </div>
                                  </CardContent>
                                    </Card>
                                    </div>                  
                                    </div>
                                    </div>
                                    )
}

export default VenuesById;