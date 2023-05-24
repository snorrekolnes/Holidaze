import { useRef, useState, useEffect} from "react";


import { useDispatch, useSelector } from "react-redux";
import authorizationSlice, { setCredentials } from "../../store/modules/authorizationSlice";
import { useLoginMutation } from "../../store/modules/authApiSlice";
import {setLoadingState} from "../../store/modules/loaderSlice"
import { Avatar, CssBaseline, TextField, Paper, Grid, Button, Typography} from "@mui/material";
import { setError } from "../../store/modules/errorSlice";
import Header from "../Header";



function UpdateAvatar() {
    const {token} = useSelector(state => state.auth)
const name = localStorage.user
        console.log(name, token)
        const username = JSON.parse(name)
        const [avatar, setAvatar] = useState();
        console.log(username)
    const dispatch = useDispatch();
    async function getUpdate(name) {
        try {
            const response =   await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`, {
                  method: 'PUT',
                  headers: {
                    "Authorization": `Bearer ${token}`
                  },  
                  body: JSON.stringify(avatar)
                })
                  const data = await response.json()
                  return data
           }
               catch (error) {
                  console.log("oops", error)
               }
               //   .then(data => data.json())
               }

const handleSubmit = async e => {
    e.preventDefault();
      const response = await getUpdate(username)
      console.log(response)
      if (response.avatar) {
        console.log("Success")
          localStorage.setItem('avatar', JSON.stringify(response.avatar));
        
      } else {
        dispatch(setError(true,"some error happened"));

    }}


         
    return (
       <div>
            <form className="form mt-40 text-white flex flex-col  lMobile:w-80 m-auto items-center" noValidate onSubmit={handleSubmit}>
                          <TextField className=""
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
                      id="email"
                      name="email"
                      label="Enter Valid Image URL"
                      type="email"

                      onChange={e => setAvatar(e.target.value)}
                          />
                          <Button 
                                  sx={{ color: 'black', 
                                  mt:3,
                                  heigth:10,
                                backgroundColor: 'black', 
                                borderColor: 'white',
                                ":hover": {
                                  bgcolor: "pink",
                                  color: "black"
                                }
                              }}

                            type="submit"
                            fullWidth
                            variant="contained"
                            className="submit"
                            label="SUBMIT"
                        
                          ></Button>
</form>


       </div>
    )
}

export default UpdateAvatar
