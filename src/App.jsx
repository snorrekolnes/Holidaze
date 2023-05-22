//import { useState } from 'react'
import Loader from "./components/Loader";
import Header from "./components/Header";
import {useSelector} from "react-redux";
import Router from "./routes/Router";
import Footer from "./components/Footer";

function App() {

  const {isLoading} = useSelector(state => state.loader)
  
  return (
    <>
   <Header/>
    <Router/>
    {isLoading && <Loader/>}
    <Footer/>
    </>

  )
}

export default App
