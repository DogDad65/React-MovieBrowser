import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import MovieView from './components/MovieView';
import {Routes, Route } from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect (() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=0f95780e78c60ae725ffb4bd3aa7fa0c&language=en-US&query=${searchText}&page=1&include_adult=false `)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
    }
    
  }, [searchText])

  
  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about"element={<About/>}/>              
        <Route path="/movies/:id" element={<MovieView/>}/>
        <Route path= "/search" element={
          <Search keyword={searchText} searchResults= {searchResults}/>   
        }
        />
        
      </Routes>     
    </>
  );
}

export default App;
