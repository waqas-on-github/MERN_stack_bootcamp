import mycontext from '../Store/mycontext'
import React, { useState ,useContext } from 'react'

function Search() {

 let [inp ,setinp ] =useState('')   
 
 const value  = useContext(mycontext)
  

return (

        <div className='search' >
          <input  type="text"  placeholder='movie name' value={inp}  onChange={(e) => { 
            setinp(e.target.value)
          }} />
          <button onClick={ () => {
            value.setquerey(inp)
          }}  > Search </button>
        </div>
      )
}

export default Search
