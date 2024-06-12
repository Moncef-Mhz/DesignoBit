import { Schema, model, models } from "mongoose";

const ArticlesShema = new Schema(
  {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    image: { type: "string", required: true },
    description: {
      type: "string",
      required: true,
      minLength: 50,
      maxLength: 100,
    },
    content: { type: "string", required: true },
    category: { type: "string", required: true },
    author: { type: "string", required: true },
    date: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);

const Articles = models.Articles || model("Articles", ArticlesShema);
export default Articles;
