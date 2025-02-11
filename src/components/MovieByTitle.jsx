import useFetch from "../useFetch"

const MovieByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`http://localhost:3000/movies/${title}`)

    return (        
        data ? (
            <div>
                <h2>{data.title}</h2>
                <p>Director: {data.director}</p>
                <p>Country: {data.country}</p>
                <p>Release Year: {data.releaseYear}</p>
                <p>Actors: {data.actors.join(', ')}</p>
                <p>Awards: {data.awards}</p>
                <p>Rating: {data.rating}</p>
                <p>Plot:{data.plot}</p>
                <img src={data.posterUrl} alt='Poster Image'/>
            </div>
        )    
        : (loading && <p>Loading...</p>)
    )
}

export default MovieByTitle