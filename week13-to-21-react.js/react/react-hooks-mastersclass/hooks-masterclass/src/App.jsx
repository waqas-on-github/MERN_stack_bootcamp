import { useState } from 'react'
import './App.css'
import Fetchposts from './Customhookchalanges/Fetchposts'
import Showui from './Customhookchalanges/Showui'
import Uiforresize from './Customhookchalanges/Uiforresize'
import Usewait from './Customhookchalanges/Usewait'
import Dispatch01 from './usedispatchchallanges/Reducer01'
import Dispatch02 from './usedispatchchallanges/Reducer02'
import Reducer03 from './usedispatchchallanges/Reducer03'
import Characterlimit from './useeffectchallanges/Characterlimit'
import Fetchpost from './useeffectchallanges/Fetchpost'
import Lightdarkmode from './usestatechallanges/Lightdarkmode'
import Showhide from './usestatechallanges/Showhide'
import Todo from './usestatechallanges/Todo'

function App() {
 
  

  return (
    <div className="App">

      {/* usestate challanges  */}

       {/* <Lightdarkmode/>  */}
      {/* <Todo/>  */}

         {/* useeffect chalanges  */}

       {/* <Showhide/>  */}
      {/* <Characterlimit/> */}
      {/* <Fetchpost/> */}

       {/* custom hook challanges  */}
          {/* <Showui/> */}
          {/* <Uiforresize/> */}
          {/* <Fetchposts/> */}


            {/* useReducer hook  */}

             {/* <Dispatch01/> */}
             {/* <Dispatch02/> */}

             <Reducer03/>
             




    </div>
  )
}

export default App
