import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // must be provided
    },
    description: {
      type: String,
      required: true, // must be provided
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

export default mongoose.models.Topic || mongoose.model("Topic", TopicSchema);
