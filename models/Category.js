import { Schema, model, models } from "mongoose";

const CategoryShema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: [true, "Title must be unique"],
    },
  },
  { timestamps: true }
);

const Category = models.Category || model("Category", CategoryShema);
export default Category;
