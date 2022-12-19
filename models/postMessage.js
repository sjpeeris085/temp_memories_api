import mongoose from "mongoose";

// Schema is a format for document (table) ( define attributes have to)
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Convet above schema in to model and then finally we export it.
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
