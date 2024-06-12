import Articles from "@/models/Articles";
import { ConnectToDB } from "@/utils/ConnectToDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "next-auth";
import { NextApiRequest } from "next";

export async function POST(req: Request) {
  const session: Session | null = await getServerSession(authOption as any)!;

  if (!session) {
    return NextResponse.json("You are not authenticated", { status: 500 });
  }

  const { title, slug, content, image, category, date, description } =
    await req.json();

  try {
    await ConnectToDB();
    const newArticle = new Articles({
      title,
      slug,
      content,
      description,
      image,
      category,
      author: session && session.user ? session.user.name : null,
      date,
    });
    await newArticle.save();
    return NextResponse.json(newArticle, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

export const GET = async (req: NextApiRequest) => {
  const url = req.url ? new URL(req.url) : new URL("/");
  const Searchparams = new URLSearchParams(url.searchParams);

  const page: number =
    Searchparams.get("page") !== null ? parseInt(Searchparams.get("page")!) : 0;
  const perPage: number = 10;

  try {
    await ConnectToDB();
    const Article = await Articles.find({})
      .sort({ createdAt: -1 })
      .skip(perPage * page)
      .limit(perPage);
    return NextResponse.json(Article, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  const { id } = await req.json();
  try {
    await ConnectToDB();
    await Articles.findByIdAndDelete(id);
    return NextResponse.json("success");
  } catch (err) {
    return NextResponse.json(err);
  }
};
