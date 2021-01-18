import React from 'react';
import Checked from "../checked.svg";

function Movie(props) {
  if(props.Type == "movie") {
    return (
      <div className={"movie " + (props.list.indexOf(props.imdbID) > -1 ? 'nom ' : 'nothing ') + (props.list.length >= 5 ? 'max' : 'allowed')}>
        <div className="blur">
          <img className="movie-img" src={props.Poster != "N/A" ? props.Poster : "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg"} alt={props.Title} />
          <div className="movie-info">
            <h3>{props.Title}</h3>
            <span class="year">{props.Year}</span>
          </div>
        </div>
        <div className="nominate-div">
          <button className="nominate-btn" onClick={() => props.nominated(props.imdbID)}>Nominate</button>
        </div>
        <div className="nominate-disabled">
          <p>Max nominations reached</p>
        </div>
        <img src={Checked} className="checked"/>
      </div>
    )
  } else {
    return null;
  }
}


export default Movie;
