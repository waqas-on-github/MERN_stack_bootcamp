import React, { useState } from "react"
import jsondata  from "./data.json"


const Cards =() => {
let [resturent ,setresturant ] =useState(jsondata.data.cards[2].data.data.cards)






return (
    <React.Fragment> 

     <h1> hello </h1>
        {resturent.map((card) => {

            console.log(card.data);
            return (
                   <div  key={card.data.uuid}  > 
                        <h1> {card.data.area}</h1>          
                   </div>

            )
        })}
    </React.Fragment>
)

}

export default Cards