import useFetch from "../useFetch"

const Movies = () => {
    const {data, loading, error} = useFetch('https://movie-vault-be.vercel.app/movies')

    const deleteHotel = (hotelId) => {
        const response = fetch(``)
    }

    return (
        <div>
            <ul>
                {data?.map(movie => (
                    <li key={movie._id}>{movie.title} <button onClick={deleteHotel(movie._id)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Movies