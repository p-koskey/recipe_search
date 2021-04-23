import './App.css';
import Results from './components/Results'
import { useState, useEffect } from 'react'

function App() {
  const APP_ID = 'ca419953'
  const APP_KEY = 'eeda9b6eb28c9419376afa18c0b27c82	';
  
 const [recipes, setRecipes] = useState([])
 const [search, setSearch] = useState('')
 const [searchTerm, setSearchTerm] = useState('all')
  useEffect(() => {
  // Fetch Recipe <p style={{color:''}}></p>

  const fetchRecipe = async () => {
   
      const res = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    

      const data = await res.json()


      setRecipes (data.hits)
      console.log(data.hits)
    }

    fetchRecipe()
    
  }, [searchTerm])

  
const handleSearchInputChanges = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  const callSearch = (e) => {
    e.preventDefault();
    
    setSearchTerm(search);
    setSearch('');
  }
  return (
    <div className="App">
      <nav>
        <h1>RECIPE SEARCH</h1>
        <h4>Finding the perfect recipe for a dish can be an arduous and time-consuming task, especially if you want to do a search of multiple recipe</h4>
        </nav>
        <form  className="search-form" onSubmit={callSearch}>
       <input type="text" className="search-bar" value={search}
          onChange={handleSearchInputChanges}/>
       <button className="search-button"  type="submit" value="SEARCH">Search</button>
     </form>
      
    <div className="results">
    {recipes.map((recipe, index) => (
        // console.log(recipe.recipe)
        <Results key = {index} title= {recipe.recipe.label}
        image={recipe.recipe.image}
        url = {recipe.recipe.url}
        ingredients = {recipe.recipe.ingredients}
        
        />
    ))}
    </div>
    </div>
  );
}

export default App;
