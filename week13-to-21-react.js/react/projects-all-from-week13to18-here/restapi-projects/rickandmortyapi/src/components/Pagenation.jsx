import React from 'react'
import ReactPaginate from 'react-paginate';


function Pagenation(props) {
 
  return (
    <ReactPaginate pageCount={Number(props?.info?.pages)} 
    nextLabel="next"
    previousLabel='prev'
    activeClassName='bg-black text-white p-3'
    pageRangeDisplayed={5}
    onPageChange={(data) => {

        
      props.changepage(data?.selected +1 )
    }}


    containerClassName='flex gap-6 pt-[40px] pb-[40px]    '
    
    />
  )
}

export default Pagenation