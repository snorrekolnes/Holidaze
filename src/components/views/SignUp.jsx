import { useRef, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import authorizationSlice, { setCredentials } from "../../store/modules/authorizationSlice";
import { useLoginMutation } from "../../store/modules/authApiSlice";
import {setLoadingState} from "../../store/modules/loaderSlice"
import { Avatar, CssBaseline, TextField, Paper, Grid, Button, Typography} from "@mui/material";
import { setError } from "../../store/modules/errorSlice";





/*

import { Button } from "@mui/material";
import Avatar from "@mui/material";
import CssBaseline from "@mui/material";
import TextField from "@mui/material";
import Paper from "@mui/material";
import Grid from "@mui/material";
import Typography from "@mui/material";

 await fetch('https//:api.noroff.dev/api/v1/holidaze/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(theCredentials)
            })

*/




         async function signUpUser(theCredentials) {
           try {
        const response =   await fetch('https://api.noroff.dev/api/v1/holidaze/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(theCredentials)
            })
              const data = await response.json()
              return data
           }
           catch (error) {
              console.log("fuck", error)
           }
           //   .then(data => data.json())
           }
          
          export default function Signup() {
           const dispatch = useDispatch();
           // const classes = useStyles();
           const [name, setName] =useState();
            const [email, setEmail] = useState();
            const [password, setPassword] = useState();
            /*
            useEffect(() => {
              dispatch(setCredentials());
          }, [dispatch]);*/
          
            const handleSubmit = async e => {
            e.preventDefault();
              const response = await signUpUser({
                email,
                name,
                password,
              })
              console.log(response)
              if (response.id) {
                console.log("Success")
               
                  localStorage.setItem('accessToken', response.id);
                  localStorage.setItem('user', JSON.stringify(response.name));
                  window.location.href = "/login";
                
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
                          Sign up
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
                      id="name"
                      name="name"
                      label="name"
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
                      id="email"
                      name="email"
                      label="email"
                      type="email"

                      onChange={e => setEmail(e.target.value)}
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
                            id="password"
                            name="password"
                            label="password"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
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
                            Sign Up
                          </Button>
                        </form>
                      </div>
                  
            )
                   
      }