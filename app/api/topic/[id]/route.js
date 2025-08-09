// import connectDB from "@/libs/mongo.js";
import { connectDB } from "@/libs/mongo.js";
import Topic from "@/models/topic.js";
import { NextResponse } from "next/server";



// DELETE /api/topics/:id
export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const deletedTopic = await Topic.findByIdAndDelete(id);

    if (!deletedTopic) {
      return NextResponse.json(
        { message: "Topic not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Topic deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting topic", error: error.message },
      { status: 500 }
    );
  }
}


// GET a topic by ID
export async function GET(req, { params }) {
  try {
    await connectDB();
    const topic = await Topic.findById(params.id);

    if (!topic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json(topic);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching topic", error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE a topic by ID
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const { title, description } = await request.json();

    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTopic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTopic);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating topic", error: error.message },
      { status: 500 }
    );
  }
}