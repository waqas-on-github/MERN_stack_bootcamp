import React  from 'react'
import Child1 from './Child1'
// import Child2 from './Child2'


class Mycomponent extends React.Component{
 constructor(props){
    super(props)
     console.log(" parent constructor callad ")
    this.state={
        name :"waqas"
    }

 }


//  mounting phase {

 // component render phase 
 //  parent constructor callad 
 //  parent render called 
 //  child1 constructor called 
 //  child1 render called
 //  child2 constructor called 
 //  child2 render called
     // dom updated 
 // component commit phase
 // child1 component didmount called 
 // child2 component didmount called 
 // parent component mounte
 // 
// }

  // component will be updated only when state changes


// component updating phase 
//    component rerenderd
// dom updated
// componentdidupdate called       




// component unmount phase 

// componentWillUnmount callad












 componentDidMount() {
    console.log("  parent component mounted ")
 }


 componentDidUpdate() {
    console.log("  parent component did update called ")
 }


 render() {
    return (

    <React.Fragment> 
    {console.log(' parent render called ')}
    <h1> im class Component</h1>

       <Child1/>
       {/* <Child2/> */}

    </React.Fragment>
    

    )
       
    
 }









}





export default Mycomponent
