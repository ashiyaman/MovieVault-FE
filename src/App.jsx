import Movies from './components/Movies.jsx'
import MovieByTitle from './components/MovieByTitle.jsx'
import AddMovieForm from './components/AddMovieForm.jsx'

export default function App(){
  return (
    <main>
      <AddMovieForm/>
      <Movies/>
      <MovieByTitle title={'Gully Boy'}/>
    </main>
  )
}