import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, NavLink } from "react-router-dom";
import authorizationSlice, { selectToken, selectUser, setCredentials } from "../../store/modules/authorizationSlice";
import { setError } from "../../store/modules/errorSlice";









function Profile() {
    const dispatch = useDispatch();
    /*
    function getUserName() {
        const user = getFromStorage(accessToken);
        if (accessToken) {
            return user
        } else {
            return null;
        }
    }

    function getFromStorage(accessToken) {
        const value = localStorage.getItem(accessToken);
        if (value) {
            return JSON.parse(value); // convert to JS
        } else {
            return []
        }
    }*/

 const {name, token} = useSelector(state => state.auth)
 console.log(name, token)
const username = JSON.parse(name)
    async function getUser(name) {
        try {
     const response =   await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${name}`, {
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
             "Authorization": `Bearer ${token}`
           },  
         })
           const data = await response.json()
           return data
    }
        catch (error) {
           console.log("oops", error)
        }
        //   .then(data => data.json())
        }


        (async function getThePosts () {
        const response =  await getUser(
            username
            )
          console.log(response)
          /*
          if (response.accessToken) {
            console.log("Success")
          } else {
            dispatch(setError(true,"some error happened"));
          //  console.log("Failed", "error");
        }*/
    })()
    
    return (
       <div>
<NavLink to="/update">
            <li className="mr-3">
              <span
                id="create-btn"
                className="inline-block mt-40 text-HOLIDAZE-BLACK no-underline font-Josefin hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
                >Create Venue
            </span>
            </li>
            </NavLink>



       </div>
    )
    }

export default Profile;