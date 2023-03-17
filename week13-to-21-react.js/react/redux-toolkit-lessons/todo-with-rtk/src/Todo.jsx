import { useDispatch, useSelector } from 'react-redux'
import './Todo.css'
import { AiFillDelete ,AiFillEdit} from "react-icons/ai";

import { captuevalue ,addvalue ,removeitem ,inputempty,editable} from './rtk/Todoslice'

function Todo() {

  let dispatch= useDispatch()
  let mystate =useSelector((state) => state)



  return (
    <div>  

        {console.log(mystate)}

        {mystate.todo.isempty===true?<p> can not add empty item </p> :''}
        {mystate.todo.isduplicate===true?<p>can not add duplicate items </p> : ''}
      
        <input type="text" value={mystate.todo.value.value} onChange={(e) => {
            dispatch((captuevalue({value : e.target.value ,key:  Math.random() })));
            

            }} />


        <button onClick={() => {
            if(mystate?.todo?.value?.value?.length===undefined||mystate?.todo?.value?.value?.length===0) {
            dispatch(inputempty(true))
            return
            }
            else {
            dispatch(addvalue())
            dispatch(inputempty(false))  
            
            }     

         }} >add</button>

        <div>
            {mystate?.todo?.items?.map((item ) => {
            return(
                <div className='flexit' key={item.key} >
        
                    <p>{item.value}</p>


                    <div className="d">

                    <button  onClick={() => {dispatch(removeitem(item.key))}}  >

                   
<AiFillDelete/>


</button>

<button onClick={() => {dispatch(editable(item))}}  ><AiFillEdit/></button>
                    </div>
               
                </div>
                  )
   })}
       
        </div>

    </div>
  )
}

export default Todo