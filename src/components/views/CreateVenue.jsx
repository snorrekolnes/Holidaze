import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  CssBaseline, TextField, Button, Typography, Checkbox, Alert} from "@mui/material";
import { setError } from "../../store/modules/errorSlice";
import { Navigate } from "react-router-dom";




         async function createTheVenue({name, description, price, media, maxGuests, token, wifi, parking, breakfast, pets, address, city, zip, country, continent}) {
           try {
        const response =   await fetch('https://api.noroff.dev/api/v1/holidaze/venues', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({
                name:name,
                media:media,
                description:description, 
                price:parseFloat(price), 
                maxGuests:parseFloat(maxGuests),
                meta: {
                    wifi: wifi,
                    parking:parking,
                    breakfast:breakfast,
                    pets:pets,
                },
                location: {
                    address:address,
                    city:city,
                    zip:zip,
                    country:country,
                    continent:continent,
                }
              })
            })
              const data = await response.json()
              return data
           }
           catch (error) {
              console.log("sorry", error)
           }
           }
          
          export default function CreateVenue() {
            const venueManager = localStorage.venueManager
            console.log(venueManager)
            const {token} = useSelector(state => state.auth)
            console.log(token)
           const dispatch = useDispatch();
            const [name, setName] = useState();
            const [media, setMedia] = useState([]);
            const [description, setDescription] = useState();
            const [price, setPrice] = useState();
            const [maxGuests, setGuests] = useState();
            const [wifi, setWifi] = useState(true);
            const [breakfast, setBreakfast] = useState(true);
            const [pets, setPets] = useState(true);
            const [parking, setParking] = useState(true);
            const [address, setAddress] = useState();
            const [city, setCity] = useState();
            const [zip, setZip] = useState();
            const [country, setCountry] = useState();
            const [continent, setContinent] = useState();

            const handleSubmit = async e => {
            e.preventDefault();
           
              const response = await createTheVenue({
                name,
                description,
                price,
                maxGuests,
                token,
                wifi,
                breakfast,
                pets,
                parking,
                address,
                media,
                zip,
                city,
                country,
                continent,
              })
              console.log(response)
              if (response.name && response.price && response.maxGuests && response.description) {
                console.log("Success")
                window.location.href = "/";
              } else {
                dispatch(setError(true,"An error happened"));
            }}
            return (
                      <div className="mt-20 min-h-screen pb-10 flex flex-col  items-center m-auto bg-HOLIDAZE-BROWN" >
                        <CssBaseline />
                        <Typography sx={{
                                  margin: '70px',
                                }}
                        className="text-white m-auto mt-60" component="h1" variant="h5">
                          Create Venue
                        </Typography>
                        <form className="form mt-0 text-white flex flex-col laptop:float-right lMobile:w-80 m-auto items-center" noValidate onSubmit={handleSubmit}>
                          <TextField className=""
                         sx={{
                          "& input": {
                              color: 'white',
                          },
                          "& .MuiFormLabel-root": {
                            color: 'white'
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: 'primary.main'
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'white',
                          },
                          '&:hover fieldset': {
                            borderColor: 'white',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white',
                          }}
                      }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      name="email"
                      label="name (required)"
                      type="name"         
                      onChange={e => setName(e.target.value)}
                          />
                          
                          <TextField className=""
                         sx={{
                          "& input": {
                              color: 'white',
                          },
                          "& .MuiFormLabel-root": {
                            color: 'white'
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: 'primary.main'
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'white',
                          },
                          '&:hover fieldset': {
                            borderColor: 'white',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white',
                          }}
                      }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="Media"
                      name="Media"
                      label="Media"
                      type="Media"
                      onChange={e => setMedia([e.target.value])}
                          />
                          <TextField className="text-white"
                              sx={{
                                "& input": {
                                    color: 'white',
                                },
                                "& .MuiFormLabel-root": {
                                  color: 'white'
                              },
                              "& .MuiFormLabel-root.Mui-focused": {
                                  color: 'primary.main'
                              },
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                }}
                            }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="description (required)"
                            type="description"
                            onChange={e => setDescription(e.target.value)}
                          />
                           <TextField className="text-white"
                                                     inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                              sx={{
                                "& input": {
                                    color: 'white',
                                },
                                "& .MuiFormLabel-root": {
                                  color: 'white'
                              },
                              "& .MuiFormLabel-root.Mui-focused": {
                                  color: 'primary.main'
                              },
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                }}
                            }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="price"
                            name="price"
                            label="price (required)"
                            type="number"
                            onChange={e => setPrice(e.target.value)}
                          />
                          <TextField className="text-white"
                          inputProps={{ inputMode: 'numeric', pattern: '[10-100]*' }}
                              sx={{
                                "& input": {
                                    color: 'white',
                                },
                                "& .MuiFormLabel-root": {
                                  color: 'white'
                              },
                              "& .MuiFormLabel-root.Mui-focused": {
                                  color: 'primary.main'
                              },
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                }}
                            }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Max Guests"
                            name="Max Guests"
                            label="Max Guests (required)"
                            type="number"
                            onChange={e => setGuests(e.target.value)}
                          />
                          <TextField className=""
                         sx={{
                          "& input": {
                              color: 'white',
                          },
                          "& .MuiFormLabel-root": {
                            color: 'white'
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: 'primary.main'
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'white',
                          },
                          '&:hover fieldset': {
                            borderColor: 'white',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white',
                          }}
                      }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="Address"
                      name="Address"
                      label="Address"
                      type="Address"
                      onChange={e => setAddress([e.target.value])}
                          />
                          <TextField className=""
                         sx={{
                          "& input": {
                              color: 'white',
                          },
                          "& .MuiFormLabel-root": {
                            color: 'white'
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: 'primary.main'
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'white',
                          },
                          '&:hover fieldset': {
                            borderColor: 'white',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white',
                          }}
                      }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="Zip"
                      name="Zip"
                      label="Zip"
                      type="Zip"
                      onChange={e => setZip([e.target.value])}
                          />
                           <TextField className=""
                         sx={{
                          "& input": {
                              color: 'white',
                          },
                          "& .MuiFormLabel-root": {
                            color: 'white'
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: 'primary.main'
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'white',
                          },
                          '&:hover fieldset': {
                            borderColor: 'white',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white',
                          }}
                      }}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="City"
                      name="City"
                      label="City"
                      type="City"
                      onChange={e => setCity([e.target.value])}
                          />
                          <TextField className="text-white"
                                                     inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                              sx={{
                                "& input": {
                                    color: 'white',
                                },
                                "& .MuiFormLabel-root": {
                                  color: 'white'
                              },
                              "& .MuiFormLabel-root.Mui-focused": {
                                  color: 'primary.main'
                              },
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                }}
                            }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Country"
                            name="Country"
                            label="Country"
                            type="Country"
                            onChange={e => setCountry(e.target.value)}
                          />
                          <TextField className="text-white"
                                                     inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                              sx={{
                                "& input": {
                                    color: 'white',
                                },
                                "& .MuiFormLabel-root": {
                                  color: 'white'
                              },
                              "& .MuiFormLabel-root.Mui-focused": {
                                  color: 'primary.main'
                              },
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                }}
                            }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Continent"
                            name="Continent"
                            label="Continent"
                            type="Continent"
                            onChange={e => setContinent(e.target.value)}
                          />
                          <div className="flex w-40 items-center flex-col">
                            <div className="flex justify-between flex-row">
                           <Typography sx={{
                                  margin: '10px',
                                }}
                        className="text-white m-auto mt-60" component="h1" variant="h7">
                          Wifi
                        </Typography>
                          <Checkbox 
                                defaultChecked
                                onChange={e => setWifi(e.target.checked)}
                                />
                                <Typography sx={{
                                  margin: '10px',
                                }}
                        className="text-white m-auto mt-60" component="h1" variant="h7">
                          Breakfast
                        </Typography>
                          <Checkbox 
                                defaultChecked
                                onChange={e => setBreakfast(e.target.checked)}
                                />
                                </div>
                                <div className="flex pt-2 pr-5 flex-row">
                                 <Typography sx={{
                                  margin: '10px',
                                }}
                        className="text-white m-auto mt-60" component="h1" variant="h7">
                          Pets
                        </Typography>
                          <Checkbox 
                                defaultChecked
                                onChange={e => setPets(e.target.checked)}
                                />
                                <Typography sx={{
                                  margin: '10px',
                                }}
                        className="text-white m-auto mt-60" component="h1" variant="h7">
                          Parking
                        </Typography>
                          <Checkbox 
                                defaultChecked
                                onChange={e => setParking(e.target.checked)}
                                />
                                </div>
                                </div>
                                {name && description && price && maxGuests &&
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
                            Create
                          </Button>}
                        </form>
                      </div>
            )
      }