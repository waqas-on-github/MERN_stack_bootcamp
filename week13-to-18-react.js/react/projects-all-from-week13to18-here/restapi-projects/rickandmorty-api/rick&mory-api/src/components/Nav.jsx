import React from 'react'

function Nav() {
    const navcss=" flex w-[70%]  text-gray-500 justify-between items-center p-[20px] font-bold text-[24px]"
  return (
      <div className={navcss + ""}>


        {/* name  */}
        <div className=" ">Rick & Morty <span  className='text-blue-900 text-[26px]' > Wiki</span>  </div>
        {/* right sec */}
        <div className="flex gap-10"  >
            <p>Characters</p>
            <p>Episode</p>
            <p>Locaton </p>
        </div>
      </div>
  )
}

export default Nav