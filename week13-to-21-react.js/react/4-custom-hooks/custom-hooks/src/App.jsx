

import Accordion from './Accoridian'
import './App.css'
import Test from './Test'
import useFeth from './useFetch'
import useOnlie from './useOnline'

function App() {
  let data =useFeth("https://jsonplaceholder.typicode.com/todos/1")
  let isonline =useOnlie()
  console.log(isonline)
   
 return (
   <div className="App">
      
        <h1>  learning custom hooks by making coutom data fetching hoon and online ofline hook </h1>
         
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>

<Accordion/>
    </div>
  )
}

export default App
