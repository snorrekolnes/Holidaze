import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from '../../store/modules/venueSlice';
//import {Link} from 'react-router-dom';
//import ErrorComponent from "../../components/shared/ErrorComponent";
import {useEffect, useMemo} from 'react';

function VenuesById() {

    const dispatch = useDispatch();
  

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    // Use useMemo to memoize the products data and only recompute it when necessary.
    // This can help reduce unnecessary re-rendering.



    return (
       <div></div>
    )
}

export default VenuesById;