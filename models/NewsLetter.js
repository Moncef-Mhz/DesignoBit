import { Schema, models, model } from "mongoose";

const NewsLetterSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"],
  },
});

const NewsLetter = models.NewsLetter || model("NewsLetter", NewsLetterSchema);

export default NewsLetter;
