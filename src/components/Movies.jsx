import useFetch from "../useFetch"

const Movies = () => {
    const {data, loading, error} = useFetch('https://z47vcc-3000.csb.app/movies')

    return (
        <div>
            <ul>
                {data?.map(movie => (
                    <li>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Movies