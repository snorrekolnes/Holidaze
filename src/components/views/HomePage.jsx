import {useDispatch, useSelector} from 'react-redux';
import { fetchVenues } from '../../store/modules/venueSlice';
//import {Link} from 'react-router-dom';
//import ErrorComponent from "../../components/shared/ErrorComponent";
import {useEffect, useMemo} from 'react';
import { setLoadingState } from '../../store/modules/loaderSlice';

function Home() {



    const dispatch = useDispatch();

    const {venues} = useSelector(state => state.venues);
    console.log("venuedata", venues)

    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch]);
    // Use useMemo to memoize the products data and only recompute it when necessary.
    // This can help reduce unnecessary re-rendering.
    // grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8


    return (
       
<div 
                            className="mt-40 flex flex-col mx-auto text-white bg-HOLIDAZE-BROWN gap-y-10 max-w-md text-center items-center p-0">
                            {venues.map((venue) =>(
                                <div key={venue.id}>
                                    <h1 >{venue.description}</h1>
                                    <img className='object-center text-center object-fit h-20 w-30' src={venue.media} alt="" />
                                    </div>
                            
                           ) )}

         </div>
         )
         



    
}

export default Home;