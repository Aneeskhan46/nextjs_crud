import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black p-4 flex justify-between px-4'>
        <Link className="text-white text-4xl" href={"/"}>anees coding</Link>

         <Link className='bg-white p-4'  href={"/addtopic"}>Add topic</Link>
    </div>
  )
}

export default Navbar