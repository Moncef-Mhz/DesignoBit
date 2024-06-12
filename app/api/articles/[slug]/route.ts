import Articles from "@/models/Articles";
import { ConnectToDB } from "@/utils/ConnectToDB";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'a', 'b', or 'c'

  try {
    await ConnectToDB();
    const post = await Articles.findOne({ slug });
    console.log(post);

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
