import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
