import { useState } from "react"

const AddMovieForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        releaseYear: '',
        genre: '',
        director: '',
        actors: '',
        language: '',
        country: '',
        rating: '',
        plot: '',
        awards: '',
        posterUrl: '',
        trailerUrl: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name)
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'releaseDate' ||  name === 'rating' ? parseInt(value) : value
        }))
    }

    const handleSubmit = async(e) => {
        console.log(e)
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:3000/movies/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify(formData)
            })
            if(!response.ok){
                throw 'Failed to add Movie'
            }
            const data = await response.json()
            console.log('Movie Added', data)
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
                <label hmlFor='title'>Title: </label><br/>
                <input type='text' name='title' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='releaseYear'>Release Year: </label><br/>
                <input type='text' name='releaseYear' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='genre'>Genre: </label><br/>
                <input type='text' name='genre' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='director'>Director: </label><br/>
                <input type='text' name='director' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='actor'>Actor: </label><br/>
                <input type='text' name='actor' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='language'>Language: </label><br/>
                <input type='text' name='language' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='country'>Country: </label><br/>
                <input type='text' name='country' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='rating'>Rating: </label><br/>
                <input type='text' name='rating' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='plot'>Plot: </label><br/>
                <textarea name='plot' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='awards'>Awards: </label><br/>
                <input type='text' name='awards' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='trailerUrl'>Trailer URL: </label><br/>
                <input type='text' name='trailerUrl' onChange={handleChange}/>
                <br/>
                <br/>
                <label hmlFor='posterUrl'>Poster URL: </label><br/>
                <input type='text' name='posterurl' onChange={handleChange}/>
                <br/>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default AddMovieForm