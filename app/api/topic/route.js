import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongo.js";
import Topic from "@/models/topic.js";

///insert and create 
export async function POST(req) {
  try {
    await connectDB(); // connect to MongoDB

    const { title, description } = await req.json(); // get data from request body

    const newTopic = await Topic.create({ title, description }); // insert into DB

    return NextResponse.json(newTopic, { status: 201 }); // send back created topic
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// read and show the data
export async function GET() {
    await connectDB();

    const showtopic = await Topic.find() ///getting all data

    return NextResponse.json(showtopic)  // returning the data
}
