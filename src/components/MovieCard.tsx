
//Interface for movie
interface MovieProp {
  name: string,
  released: number,
  recommended: boolean
}

function MovieCard(movie: MovieProp ) {

    //Setting recommendation text 
    let recommendation: string;

    if(movie.recommended) {
        recommendation = "Rekommenderad";
    } else {
        recommendation = "Ej rekommenderad";
    }

  return (

    //Article with movie
    <article style={{backgroundColor: "rgb(21, 116, 172)", width: "250px", padding: "15px", borderRadius: "15px", margin: "15px 15px"}}>
        <h3>{movie.name}, {movie.released}</h3>
        <p className="recommend">{recommendation}</p>
    </article>
  )
}

export default MovieCard