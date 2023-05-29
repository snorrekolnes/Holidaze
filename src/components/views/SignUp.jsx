import { useState, } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, TextField, Button, Typography, Checkbox} from "@mui/material";
import { setError } from "../../store/modules/errorSlice";

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
              console.log("Sorry an error happened", error)
           }
           }
          
          export default function Signup() {
           const dispatch = useDispatch();
           const [name, setName] =useState();
            const [email, setEmail] = useState();
            const [password, setPassword] = useState();
            const [venueManager, setVenueManager] = useState(true);
            
            const handleSubmit = async e => {
            e.preventDefault();
              const response = await signUpUser({
                email,
                name,
                password,
                venueManager,
              })
              console.log(response)
              if (response.id) {
                console.log("Success")
               
                  localStorage.setItem('accessToken', response.id);
                  localStorage.setItem('user', JSON.stringify(response.name));
                  window.location.href = "/login";
                
              } else {
                dispatch(setError(true,"some error happened"));
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
                                {console.log(venueManager)}
                                <Typography sx={{
                                  margin: '10px',
                                }}
                        className="text-white m-auto mt-60" component="h1" variant="h7">
                          Venue Manager?
                        </Typography>
                                <Checkbox 
                                defaultChecked
                                onChange={e => setVenueManager(e.target.checked)}
                                />
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
                            Sign Up
                          </Button>
                        </form>
                      </div>   
            )    
      }