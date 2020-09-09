import React from 'react';
import logo from './logo.svg';
import './App.css';

const MOVIE_API_URL ="http://www.omdbapi.com/?s=tt3896198&apikey=3a51762f"

const App = () => {

  const [loading,setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] =useState(null)

    useEffect (() => {

      fetch(MOVIE_API_URL)
        .then(res => res.json())
        .then(jsonRes => {
          setMovies(jsonRes.Search)
          setLoading(false)
        })
    }, [] )

    const search = searchValue => {
      setLoading(true)
      setErrorMessage(null)
      
        fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=3a51762f`)
          .then(res => res.json())
          .then(jsonRes => {
            if(jsonRes.res === "True") {
              setMovies(jsonRes.Search)
              setLoading(false)
            } else {
              setErrorMessage(jsonRes.Error)
              setLoading(false)
            }
          })
    }

    return (
      <div className="App">
        <Header text="HOOKED"/>
        <Search search={search} />
        <p className="App-intro">Sharing Your Favorite Movies</p>
        <div className="movies">
          {loading && !errorMessage ? (<span>loading...</span>) : errorMessage ? (<div className="errorMessage"></div>) : (movies.map((movie, i)=>(<Movie key={`${i}-${movie.Title}`} movie={movie}/>)))}
        </div>
      </div>
    )
}

export default App;
