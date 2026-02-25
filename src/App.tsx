import MovieCard from './components/MovieCard'
import './App.css'

function App() {

  //Array with movies
  const moviesArr = [
    {"name": "Spirited Away", "released": 2001, "recommended": true}, 
    {"name": "Howl's Moving Castle", "released": 2004, "recommended": true}, 
    {"name": "My Neighbour Totoro", "released": 1988, "recommended": false}
  ];

  return (
    <>
      <h1>Filmer</h1>
      {
        //Looping through movies
        moviesArr.map((movie, index) => 

          //Article-element for each movie
          <MovieCard key={index} name={movie.name} released={movie.released} recommended={movie.recommended}/>
        )
      }
    </>
  )
}

export default App