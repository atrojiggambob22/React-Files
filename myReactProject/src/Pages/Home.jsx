import React,{useState} from 'react'
import MovieCard from '../Components/Movie_Card'

const Home = () => {

    const [searchQuery, setSearchQuery]= useState("");

    const movies=[
        {id: 1 ,title:"Black Clover", release_date:"2018"},
        {id: 2 ,title:"Solo Leveling", release_date:"2023"},
        {id: 3 ,title:"Men in Black", release_date:"2020"},
    ]
 
    function HandleSearch(e){
      e.preventDefault();
      alert(searchQuery)
    }

  return (
    <div className="home" >

      <form onSubmit={HandleSearch} className='search-form'>
        <input type="text" 
        placeholder='Search for Movies......'
         className='search-input'
              value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}/>

          {/* //This is how to update a state in an input element using useState hook to save change and re-render the page  */}





        <button type='submit' className='submit-btn'>
      Search
      </button>
      </form>
      

        <div className="movies-grid"> 
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>

    //Basically What
  );
}

export default Home