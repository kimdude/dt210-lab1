import Header from './components/Header';
import MovieCard from './components/MovieCard'
import Footer from './components/Footer';
import './App.css'

function App() {

  const title = "Ghibli listan"

  //Array with movies
  const moviesArr = [
    {"name": "Spirited Away", "released": 2001, "recommended": true}, 
    {"name": "Howl's Moving Castle", "released": 2004, "recommended": true}, 
    {"name": "My Neighbour Totoro", "released": 1988, "recommended": true},
    {"name": "Princess Mononoke", "released": 1997, "recommended": true},
    {"name": "Ponyo", "released": 2008, "recommended": false},
    {"name": "Whisper Of The Heart", "released": 1995, "recommended": true},
    {"name": "Porco Rosso", "released": 1992, "recommended": true},
    {"name": "Arietty", "released": 2010, "recommended": true},
    {"name": "The Boy And The Heron", "released": 2023, "recommended": true},
    {"name": "The Wind Rises", "released": 2013, "recommended": false},
    {"name": "Grave Of The Fireflies", "released": 1988, "recommended": false},
    {"name": "Kikis Delivery Service", "released": 1989, "recommended": true}
  ];

  return (
    <>
      {/* Header comp. */}
      <Header title={title}/>

      {/* Movies comp. */}
      <main>
        <h2>Filmer</h2>

        {/* Container for movies */}
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
          {
            //Looping through movies
            moviesArr.map((movie, index) => 

              //Article-element for each movie
              <MovieCard key={index} name={movie.name} released={movie.released} recommended={movie.recommended}/>
            )
          }
        </div>
      </main>
      
      {/* Footer comp. */}
      <Footer />
    </>
  )
}

export default App