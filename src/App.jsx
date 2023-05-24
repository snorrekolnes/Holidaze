//import { useState } from 'react'
import Loader from "./components/Loader";
import Header from "./components/Header";
import {useSelector} from "react-redux";
import Router from "./routes/Router";
import Footer from "./components/Footer";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {

  const {isLoading} = useSelector(state => state.loader)
  
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

   <Header/>
    <Router/>
    {isLoading && <Loader/>}
    <Footer/>
    </LocalizationProvider>
    </>

  )
}

export default App
