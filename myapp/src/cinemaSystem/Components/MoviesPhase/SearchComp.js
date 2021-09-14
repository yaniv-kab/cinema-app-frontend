import react, { useLayoutEffect, useState } from 'react';
import './movies.css'

const SearchComp = (props) => {

    const [movieName, setMovieName] = useState('')


    const searchMovie = () => {
        if (movieName) {
            console.log(props.movies);
            let searchedMovies = props.movies.filter(movie => {
                if (movie.name.toLowerCase().includes(movieName)) {
                    return movie
                }
            })
            console.log(searchedMovies);
            props.updateMovies(searchedMovies)
        } else if (movieName == "") {
            props.updateMovies(props.movies)
        }

    }
    return (
        <div className="search-div">
            Find Movie : <input className="search-input" type="text" onChange={e => { setMovieName(e.target.value.toLowerCase()) }} /> <input type="button" value="Find" onClick={searchMovie} />
        </div>
    )
}
export default SearchComp