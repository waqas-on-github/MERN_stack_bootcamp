import React, { useContext } from 'react'
import mycontext from '../Store/mycontext'

function Cards() {
  let value =useContext(mycontext)




if(!value?.val){
  return <h1>loading ....</h1>
}

  return (

    <div className='card-parent' >

    {value?.val?.Search?.map((movie) => {
       console.log(movie)
      
       return( 
        <div  className='card' key={movie.imdbID} > 
          <img   src={movie.Poster} alt="" />
          <div className="dsp">
            <h2>{movie.Title}</h2>
          
          </div>
        </div>
       )


    })}
   

    </div>

  )
}

export default Cards