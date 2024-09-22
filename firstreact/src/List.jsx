import React from 'react'

const List = (props) => {

    const Category = props.Category
    const ListItem = props.Items;

        // Vegetables.sort((a,b) => a.name.localeCompare(b.name)) //To sort Alphabetically

        // Vegetables.sort((a,b) => b.name.localeCompare(a.name)) //To sort Reversed Alphabetically 

        // Vegetables.sort((a,b) => a.Calories - b.Calories) //To sort By highest Clories
        // Vegetables.sort((a,b) => a.Calories - b.Calories) //To sort By lowest Clories


        //We cans also sort anything we want like to dislpay the callories in decending order or chang it to bold


    const VegesList= ListItem.map( Veg => <li>{Veg.name}: <b>{Veg.Calories} </b></li>)

  return (
  <>
  <h3>{Category}</h3>

  <ol>{VegesList}</ol>
  </> 
  )
}

export default List