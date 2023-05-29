import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TextField, Button, } from "@mui/material";

function UpdateAvatar() {
    const {token} = useSelector(state => state.auth)
    const name = localStorage.user
    console.log(name, token)
    const username = JSON.parse(name)
    const [avatar, setAvatar] = useState();
    console.log(username)
    const dispatch = useDispatch();
    async function updateUserAvatar(userAvatar) {
        console.log("userAvatar: ", userAvatar);
        console.log("username: ", username);
        const newUserAvatar = {
            "avatar": userAvatar
        }
        console.log(newUserAvatar);
        try {
            const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${username}/media`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newUserAvatar)
            })
            const data = await response.json()
            return data;
        } catch (error) {
            console.log("Sorry, there was an error", error)
        }
    }
    const handleSubmit = async e => {
        e.preventDefault();
        console.log("avatar: ",avatar);
        const response = await updateUserAvatar(avatar);
        console.log("response: ",response);
        window.location.href = "/Profile";
    }
    return (
        <div>
            <form className="form mt-40 mb-40 text-white flex flex-col  lMobile:w-80 m-auto items-center"
                  noValidate
                  onSubmit={handleSubmit}>
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
                                   }
                               }
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
                    sx={{
                        color: 'black',
                        mt: 3,
                        height: 20,
                        width:20,
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
