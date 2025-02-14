import { useState } from "react"
import useFetch from "../useFetch"

const Movies = () => {
    const {data, loading} = useFetch('https://movie-vault-be.vercel.app/movies')
    const [successMsg, setSuccessMsg] = useState('')

    const handleDelete = async (movieId) => {
        try{
            const response = await fetch(`https://movie-vault-be.vercel.app/movies/${movieId}`, {
                method: 'DELETE'    
            })
            if(!response.ok){
                throw 'Failed to delete movie.'
            }
            const data = await response.json()
            if(data){
                setSuccessMsg('Movie deleted successfully.')
                window.location.reload()
            }
        }
        catch(error){
            console.log(error)
        }
        
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul>
                {data?.map(movie => (
                    <li key={movie._id}>{movie.title} <button onClick={() => handleDelete(movie._id)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Movies