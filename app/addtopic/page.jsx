"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTopicForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

   const router = useRouter();

  const handleSubmit = async (e) => {

   

    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/topic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    const data = await res.json();
    console.log("Created topic:", data);

    router.push("/")

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Create Topic</button>
    </form>
  );
}
