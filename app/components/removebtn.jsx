"use client"; // because this button uses events

import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const Removebtn = ({ id }) => {

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this topic?")) return;

    const res = await fetch(`http://localhost:3000/api/topic/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Deleted successfully");
      window.location.reload(); // refresh page to see updated list
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <button className='text-red-500' onClick={handleDelete}>
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default Removebtn;
