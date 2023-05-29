import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Typography, Checkbox} from "@mui/material";



function UpdateManagerState() {
    const {token} = useSelector(state => state.auth)
    const name = localStorage.user
    console.log(name, token)
    const username = JSON.parse(name)
    const [manager, setVenueManager] = useState();
    console.log(username)
    const dispatch = useDispatch();
    async function updateUserManagerState(userManagerState) {
        console.log("venueManager: ", userManagerState);
        console.log("username: ", username);
        const newManagerState = {
            "venueManager": userManagerState
        }
        console.log(newManagerState);
        try {
            const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${username}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newManagerState)
            })
            const data = await response.json()
            return data;
        } catch (error) {
            console.log("Sorry, there was an error", error)
        }
    }
    const handleSubmit = async e => {
        e.preventDefault();
        console.log("venueManager: ",manager);
        const response = await updateUserManagerState(manager);
        console.log("response: ",response);
        localStorage.setItem('venueManager', JSON.stringify(response.venueManager));
        window.location.href = "/Profile";
    }
    return (
        <div>
            <form className="form mt-40 mb-40 bg-HOL text-white flex flex-col  lMobile:w-80 m-auto items-center"
                  noValidate
                  onSubmit={handleSubmit}>
                <Typography sx={{
                                  margin: '10px',
                                }}
                        className="text-black m-auto mt-60" component="h1" variant="h7">
                          Venue Manager?
                        </Typography>
                                <Checkbox 
                                defaultChecked
                                onChange={e => setVenueManager(e.target.checked)}
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

export default UpdateManagerState