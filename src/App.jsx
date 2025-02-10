import Movies from './components/Movies.jsx'
import MovieByTitle from './components/MovieByTitle.jsx'

export default function App(){
  return (
    <main>
      <Movies/>
      <MovieByTitle title={'Gully Boy'}/>
    </main>
  )
}