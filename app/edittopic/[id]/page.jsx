
"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import React from 'react'


const Edittopic = () => {

 const { id } = useParams(); // Get topic ID from URL
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch existing topic details
  useEffect(() => {
    const fetchTopic = async () => {
      const res = await fetch(`http://localhost:3000/api/topic/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setDescription(data.description);
    };
    fetchTopic();
  }, [id]);

  // Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/topic/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      router.push("/"); // Go back to list
    }
  };



  return (
    <div className='bg-amber-200 mt-5 '>
     <h2 className='font-bold text-5xl'>Edittopic</h2>
     <form className='flex flex-col p-4 gap-y-4 ' onSubmit={ handleSubmit}>
        <input className='bg-white' type='text' placeholder='Topic title'  value={title}
          onChange={(e) => setTitle(e.target.value)}/>

         <input className='bg-white' type='text' placeholder='Topic description' value={description}
          onChange={(e) => setDescription(e.target.value)}
         />

         <button className='bg-green-300 text-shadow-white' type='submit'>update</button>
     </form>

    </div>
  )
}

export default Edittopic