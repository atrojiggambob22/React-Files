import React, {useState}from 'react'

const MyComponent1 = () => {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState("")
    const [carBrand, setCarBrand] = useState("")


    function handleCarAdd(){

        const newCar = {Year:carYear,
            Model:carModel,
            CarBrand:carBrand }

            setCars( c => [...c, newCar]);

            setCarYear(new Date().getFullYear());
            setCarBrand("")
            setCarModel("")
        
    }

    function handleCarRemoval(){


    }

    function handleYearChange(event){
        setCarYear(event.target.value);

    }

    function handleModelChange(event){

        setCarModel(event.target.value);
    }
     

    function handleBrandChange(event){

        setCarBrand(event.target.value);
    }

  return (
    <div>

        <h1>List of Car object</h1>

        <ul >{cars.map((car, index)=>
        <li key={index}>{car.Year} {car.Model} {car.Model}</li>)}</ul>

        <input type="number" value={carYear} onChange={handleYearChange} />
        <br />

        <input type="text" value={carModel} onChange={handleModelChange}
        placeholder='Enter a Car Model'
        />
        <br />

        <input type="text" value={carBrand} onChange={handleBrandChange} 
        placeholder='Enter a Car Brand'/>
        <br />
        <button onClick={ handleCarAdd} style={{margin:'20px'}}>Add Car</button>
        
    </div>
  )
}

export default MyComponent1