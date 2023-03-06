import React from 'react'
import { Link } from 'react-router-dom';

function Catagory(props) {
  return (
       <div className='  flex flex-col gap-4 w-[240px]' >

        <h1>Explore by categories</h1>
        {props?.data?.categories?.map((item) => {
            return(
                <Link  to={`/catagory/showlist/${item?.strCategory}`} key={item.idCategory} className=" hover:bg-slate-200 border cursor-pointer flex bg-slate-100 flex-col  p-[10px] items-center ">

                    <h1>{item?.strCategory}</h1>
                </Link>
            )
        })}
         
       </div>
  )
}

export default Catagory



