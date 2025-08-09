import React from 'react'
import Removebtn from './removebtn'
import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'

///fetching the data (to show)
async function getTopics() {
  const res = await fetch("/api/topic", {
    cache: "no-store", // ensures fresh data every time
  });
  return res.json();
}

const Topiclist = async () => {


      const topics = await getTopics();  ///it comes as an array beacuse in the api route you have return find() it return the multiple data in the array


  return (
    <>
    {topics.map((t)=> (
    <div key={t._id} className='flex justify-between p-4 bg-amber-50 my-4'>
       <div className=''>
          <h2 className='font-bold text-3xl'>{t.title}</h2>
          <h6>{t.description}</h6>
       </div>

       <div className='flex justify-center items-center gap-2'>
           <Removebtn id={t._id}/> 

           <Link href={`/edittopic/${t._id}`}>
          <HiPencilAlt size={24}/>
          
           </Link>
       </div>
       
    </div>))}
    </>
  )
}

export default Topiclist