import { useState } from "react";

export default function EditProfile() {
    const [fname ,setfname ] =useState('jane')
    const [lname ,setlname ] =useState('jacobe')
    const [edit ,setedit] =useState(false)



    function handlefname (e) {
        setfname(e.target.value)
    }


    function handlelname (e) {
        setlname(e.target.value)
    }
    

    function handleedit(e){
            e.preventDefault()
            setedit(!edit)
   
           // if(edit==false){
           //     setedit(true)
           // }
           // if(edit===true) {
           //     setedit(false)
           // }
   
    }
    return (
  
      <form>
        <label>First name:{' '} 
  
       {edit===true?<input onChange={(e) => {handlefname(e)}} 
        value={fname} />: <h2>{fname}</h2>}
        </label>
     
        <label>Last name:{' '}

        {edit===true?<input onChange={(e) => {handlelname(e)}} 
         value={lname} /> : <h2>{lname}</h2>}
        </label>
     
        <button onClick={(e) =>{handleedit(e)}} type="submit">{edit===true?'save':'edit'} profile </button>
       
        <p><i>Hello, {fname} {lname}</i></p>
      </form>
    );
  }
