import {useState,} from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, TextField, Button, Typography} from "@mui/material";
import { setError } from "../../store/modules/errorSlice";


         async function loginUser(theCredentials) {
           try {
        const response =   await fetch('https://api.noroff.dev/api/v1/holidaze/auth/login', {
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
              console.log("sorry an error happened", error)
           }
           }
          export default function Login() {
           const dispatch = useDispatch();
            const [email, setEmail] = useState();
            const [password, setPassword] = useState();
            const handleSubmit = async e => {
            e.preventDefault();
              const response = await loginUser({
                email,
                password,
              })
              console.log(response)
              if (response.accessToken) {
                console.log("Success")
                  localStorage.setItem('accessToken', response.accessToken);
                  localStorage.setItem('user', JSON.stringify(response.name));
                  localStorage.setItem('venueManager', JSON.stringify(response.venueManager));
                  window.location.href = "/";
              } else {
                dispatch(setError(true,"An error happened"));
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
                      label="email"
                      type="email"
                      onChange={e => setEmail(e.target.value)}
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
                            label="password"
                            type="password"

                            onChange={e => setPassword(e.target.value)}
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
                            Login
                          </Button>
                        </form>
                      </div>     
            )    
      }
    
    
      