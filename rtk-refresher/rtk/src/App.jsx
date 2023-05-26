import './App.css'
import {  useGetAllPostQuery, useGetPostbyidQuery , useDeletepostbyidMutation  } from '../services/post'

function App() {
  
 const res  = useGetAllPostQuery() 

const postbyid  = useGetPostbyidQuery(5)
console.log(postbyid);



const deleteditem = useDeletepostbyidMutation()
console.log(deleteditem);


 if(res?.isFetching || res?.isLoading) {
  return <h1> loading ....</h1>
 }
 
 if(!res || res?.isError) {
  return <h1> some thing wen wrong</h1>
 }
 



  return (
  <>
   {res?.isSuccess?res?.data?.map((item) => {
    return (
      <div    key={item.id}> <h1> {item?.title}</h1> </div>
    )
   }): <h1> some thing went wrong  </h1>
  
  }
  </>
  ) 
}

export default App
