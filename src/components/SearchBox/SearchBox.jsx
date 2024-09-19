import React from 'react'
import css from "./SearchBox.module.css"
const SearchBox = ({filterContact, handleFilter }) => {
  return (

   <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
         <input 
         type="text" 
         placeholder="Enter name" 
         value={filterContact} 
         onChange={handleFilter} 
         className={css.input} 
         />
   </div>
   
    
  )
}

export default SearchBox