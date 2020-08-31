import React,{ useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import DetailsCard from '../../components/DetailsCard/DetailsCard';

import { baseUrl, axiosHeaders } from '../../utils/constants';

export default function DetailsPage() {
    const params = useParams();
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    const [ details , setDetails ] = useState({});

    const getSuccess = (res) => {
        // Data validation before setting searchResult
        if (res && res.data instanceof Object) {
          setDetails(res.data);
        }
      }
    const uri = `${baseUrl}omdb/imdb/${params.imdbID}`;
    axios.get(uri, axiosHeaders)
      .then(res => getSuccess(res))
      .catch(err => console.error(err));
    


     return (
      <>
        <DetailsCard Details={details}/>
      </>
    )
    
}