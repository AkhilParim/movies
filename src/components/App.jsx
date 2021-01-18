import React, { useEffect, useState, Component } from 'react';
import Movie from './Movie';
import NominatedCard from './NominatedCard';
import Swal from 'sweetalert2';
import MovieImg from '../mov.svg';
import "../index.css";

const SEARCH_API = "https://www.omdbapi.com/?apikey=ef1a2d95&s="

function EmptySearch() {
    return <h2>Search a movie to show results..</h2>
}
function SearchResults(props) {
    return <h2>Showing results for "{props.name}"</h2>
}
const LocalState = list => {

  const [selected, setSelected] = React.useState(
    localStorage.getItem(list) ? JSON.parse(localStorage.getItem(list)) : []
  );

  React.useEffect(() => {
    localStorage.setItem(list, JSON.stringify(selected));
  }, [selected]);

  console.log(localStorage.getItem(list));

  return [selected, setSelected];
};

function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = LocalState (
    'list'
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

const handleOnSubmit = (e) => {
  const searchField = document.getElementById("search").value;
  setSearchTerm(searchField);

  if(searchField) {
    fetch(SEARCH_API + searchField)
    .then(res => res.json())
    .then(data => {
      if(typeof(data.Search) === 'undefined'){
        setError(data.Error);
      } else {
        setMovies(data.Search);
        setError('');
      }
    });
  }

  e.preventDefault();
};


{/****************  Movie Comp  *****************/}

function addNomination(e) {
  const newSelected = selected.concat(e);
  setSelected(newSelected);
if(selected.length == 4) {
    popup();
  }
}

function removeNomination(e) {
  const newSelected = selected.filter((item) => item !== e);
  setSelected(newSelected);
}
function popup() {
   return (
      Swal.fire({
        title: 'Do you want to confirm the nominations?',
        showDenyButton: true,
        confirmButtonText: `Yes!`,
        denyButtonText: `Edit List`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Thanks!<br>Your nominations are saved!', 'Submit another response?', 'success')
          const newSelected = [];
          setSelected(newSelected);
          setMovies([]);
          document.getElementById("search").value = '';
          setSearchTerm('');
        } else if (result.isDenied) {

        }
      })
   )
 }

  return (
    <>
    <header>
    <h1 className="title">Shopify Awards</h1>
    <form onSubmit={handleOnSubmit}>
      <input placeholder="Search.." type="search" className="search" id="search" onChange/>
      <button className="search-btn" onClick={handleOnSubmit}>Search</button>
    </form>
    </header>

    <div className="main">
      <div className="left">
        <div className="results">
          {searchTerm.length > 0 && <SearchResults name={searchTerm} />}
          {searchTerm.length == 0 && <EmptySearch />}
        </div>
        {(() => {
          if(searchTerm.length == 0) {
            return (
              <img src={MovieImg} className="movieImg" />
            )
          } else if(searchTerm.length > 0 && error.length > 0) {
            return (
                <>
                  <p className="nom-inst less">{error}</p>
                  <p className="nom-inst less">Search for another movie!</p>
              </>
            )
          } else {
            return(
                <div className="movie-container">
                  {searchTerm.length > 0 && movies.map((movie, index) => <Movie key={index} {...movie} nominated={addNomination} list={selected} /> )}
                </div>
            )
          }
        })()}

      </div>
      <div className="right">
        <h2>Nominations List</h2>
        {(() => {
          if(selected.length == 0) {
            return(
              <>
                <p className="nom-inst">Movies you nominated</p>
                <p className="nom-inst">are displayed here</p>
              </>
            )
          } else if(selected.length == 5){
            return (
              <>
                {selected.length > 0 && selected.map((select, index) => <NominatedCard key={index} remnominated={removeNomination} movieId={select} /> )}
                {popup}
              </>
            )
          } else {
            return (
              <>
                {selected.length > 0 && selected.map((select, index) => <NominatedCard key={index} remnominated={removeNomination} movieId={select} /> )}
              </>
            )
          }
        })()}
      </div>
    </div>
  </>
);
}

export default App;
