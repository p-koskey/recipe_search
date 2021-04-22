import './App.css';
import Results from './components/Results'
import { useState, useEffect } from 'react'

function App() {
  const APP_ID = 'ca419953'
  const APP_KEY = 'eeda9b6eb28c9419376afa18c0b27c82	';
  
 const [recipes, setRecipes] = useState([])
 const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
  // Fetch Recipe

  const fetchRecipe = async () => {
   
      const res = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    

      const data = await res.json()


      setRecipes (data.hits)
    }

    fetchRecipe()
    
  }, [searchTerm])

  
     const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
  }

  const callSearch = (e) => {
    e.preventDefault();
    
    setSearchTerm(searchTerm);
  
  }
  return (
    <div className="App">
      <nav>
        <h1>RECIPE SEARCH</h1>
        </nav>
        <form  className="search-form">
       <input type="text" className="search-bar" value={searchTerm}
          onChange={handleSearchInputChanges}/>
       <button className="search-button"  onClick={callSearch} type="submit" value="SEARCH">Search</button>
     </form>
      
    <div className="results">
    {recipes.map((recipe, index) => (
        // console.log(recipe.recipe)
        <Results key = {index} title= {recipe.recipe.label}
        image={recipe.recipe.image}
        url = {recipe.recipe.url}/>
    ))}
    </div>
    </div>
  );
}

export default App;
