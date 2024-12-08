import './App.css'
import {Route, Routes} from "react-router-dom"
import Movies from './components/Movies'
import Home from './components/Home'
import Header from './components/Header'
import MovieDetails from './components/MovieDetails'

function App() {
  

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='all-movies' element={<Movies />} />
        <Route path='/movie/:id' element={<MovieDetails/>} />
    </Routes>
    </>
  )
}

export default App
