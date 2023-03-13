import React from "react";

 export default class Lists1 extends React.Component{


    render() {
        console.log(this);

    return(
        <React.Fragment>

       <h1>  my friends </h1>
             {this.props.fr.map((element) => {
                return(
                     <div key={element.id}> 
                        <p key={element.id}> {element.name}</p>

                     </div>
                )
             })}

        </React.Fragment>
    )

    }
 } 