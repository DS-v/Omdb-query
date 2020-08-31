import React from 'react';
import { useHistory } from 'react-router-dom';
const DetailsCard = React.memo(props => {

    const movie = props.Details;
    const history = useHistory();
    const viewButtonClick = () => {
        history.goBack();
    }
    
    return (
      <div className="jumbotron">
            <div className="Image" style={{ float:"left", width: '26rem', height: '35rem'} }>
                    <div className="bd-placeholder-img card-img-top" style={{ width: '23rem', height: '18rem', overflow: 'hidden' }}>
                        <img src={movie.Poster} style={{ width: '18rem' }} alt="Poster" />
                    </div>
                    <br/>
                    <h5 className="card-title" style={{ width: '18rem' }}>{movie.Title}</h5>
            </div>
            <div >
            <b>Year : </b>{movie.Year}<br/>
            <b>Type : </b>{movie.Type}<br/>
            <b>Rated : </b>{movie.Rated}<br/>
            <b>Released : </b>{movie.Released}<br/>
            <b>Runtime : </b>{movie.Runtime}<br/>
            <b>Genre : </b>{movie.Genre}<br/>
            <b>Director : </b>{movie.Director}<br/>
            <b>Writer : </b>{movie.Writer}<br/>
            <b>Actors : </b>{movie.Actors}<br/>
            <b>Plot : </b>{movie.Plot}<br/>
            <b>Awards : </b>{movie.Awards}<br/>
            <br/>
            <br/>
            <button className="btn btn-success" onClick={viewButtonClick}>New Search</button>
            </div>
 
        
      </div>
    )
  })
  
  export default DetailsCard;