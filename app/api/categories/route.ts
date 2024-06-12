import Category from "@/models/Category";
import { ConnectToDB } from "@/utils/ConnectToDB";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
  try {
    await ConnectToDB();
    const Categories = await Category.find({});
    return NextResponse.json(Categories);
  } catch (err) {
    return NextResponse.json(err);
  }
};
export const POST = async (req: {
  json: () => PromiseLike<{ title: string }> | { title: string };
}) => {
  const { title } = await req.json();
  try {
    await ConnectToDB();

    const newCategory = new Category({ title });
    await newCategory.save();
    return NextResponse.json(newCategory);
  } catch (err) {
    return NextResponse.json(err);
  }
};
export const DELETE = async (req: {
  json: () => PromiseLike<{ id: string }> | { id: string };
}) => {
  const { id } = await req.json();
  try {
    await ConnectToDB();
    await Category.findByIdAndDelete(id);
    return NextResponse.json("success");
  } catch (err) {
    return NextResponse.json(err);
  }
};
