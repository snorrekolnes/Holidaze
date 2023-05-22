import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setLoadingState} from "../../store/modules/loaderSlice"
import { Avatar, CssBaseline, TextField, Paper, Grid, Button, Typography} from "@mui/material";
import { setError } from "../../store/modules/errorSlice";
import Header from "../Header";
import { Navigate } from "react-router-dom";




         async function createTheVenue({name, description, price, maxGuests, token, wifi, parking, breakfast, pets}) {
           try {
        const response =   await fetch('https://api.noroff.dev/api/v1/holidaze/venues', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({
                name:name,
                description:description, 
                price:parseFloat(price), 
                maxGuests:parseFloat(maxGuests),
                meta: {
                    wifi: wifi,
                    parking:parking,
                    breakfast:breakfast,
                    pets:pets,
                }
              })
            })
              const data = await response.json()
              return data

           }
           catch (error) {
              console.log("fuck", error)
           }
           //   .then(data => data.json())
           }
          
          export default function CreateVenue() {
            const {token} = useSelector(state => state.auth)
 console.log(token)
           const dispatch = useDispatch();
           // const classes = useStyles();
            const [name, setName] = useState();
            const [description, setDescription] = useState();
            const [price, setPrice] = useState();
            const [maxGuests, setGuests] = useState();
            /*
            useEffect(() => {
              dispatch(setCredentials());
          }, [dispatch]);*/
          
            const handleSubmit = async e => {
            e.preventDefault();
              const response = await createTheVenue({
                name,
                description,
                price,
                maxGuests,
                token,
              })
              
              console.log(response)
              if (response) {
                console.log("Success")
               { <Navigate to="/home"/>}
                
              } else {
                dispatch(setError(true,"some error happened"));
              //  console.log("Failed", "error");
            }}
            return (
                      <div className="mt-20 h-screen flex flex-col  items-center m-auto bg-HOLIDAZE-BROWN" >
                        <CssBaseline />
                        <Typography sx={{
                                  margin: '70px',
                                }}
                        
                        
                        className="text-white m-auto mt-60" component="h1" variant="h5">
                          Login
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
                      label="name"
                      type="name"

                      onChange={e => setName(e.target.value)}
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
                            label="description"
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
                            label="price"
                            type="number"

                            onChange={e => setPrice(e.target.value)}
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
                            id="password"
                            name="password"
                            label="max guests"
                            type="number"

                            onChange={e => setGuests(e.target.value)}
                          />
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
                            Login
                          </Button>
                        </form>
                      </div>
                  
            )
                   
      }