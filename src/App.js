import './App.css';
import React, {useState} from 'react'
import MovieList from './components/MovieList'
import {List} from './data'
import Header from './components/Header'
import Footer from './components/Footer'
import Add from './components/Add'
import FilterRate from './components/FilterRate';
import Movie from './components/Movie'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

    const[movies, setMovies] = useState(List)
    const[textsearch, setTextSearch] = useState("")
    const[rateFilter,setRateFilter]=useState('')

        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Route path='/' exact render={() => <Header setTextSearch={setTextSearch}/>} />
                    <Route path='/' exact render={() => <Add setMovies={setMovies} movies={movies} />} />
                    <Route path='/' exact render={() => <FilterRate setRateFilter={setRateFilter} />} />
                    <Route path='/' exact render={() => <MovieList textsearch={textsearch} movies={movies} rateFilter={rateFilter} />} />
                    <Route path='/movie/:id' render={defaultProps => <Movie movies={movies} defaultProps={defaultProps} />} />
                    <Route path='/' component={Footer} />
                </Router>
            </div>
        );
}

export default App;
