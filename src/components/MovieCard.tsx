
//Interface for movie
interface MovieProp {
  name: string,
  released: number,
  recommended: boolean
}

function MovieCard(movie: MovieProp ) {

  return (

    //Article with movie
    <article>
        <h2>{movie.name}, {movie.released}</h2>
        <p>{movie.recommended}</p>
    </article>
  )
}

export default MovieCard