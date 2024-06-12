import NewsLetter from "@/models/NewsLetter";
import { ConnectToDB } from "@/utils/ConnectToDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: Response) => {
  const { email } = await req.body;

  try {
    ConnectToDB();
    const newNewsLatter = new NewsLetter({ email });
    return NextResponse.json(newNewsLatter, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
};

export const GET = async () => {
  try {
    ConnectToDB();
    const NewsLetterEmail = await NewsLetter.find({});
    return NextResponse.json(NewsLetterEmail);
  } catch (err) {
    return NextResponse.json(err);
  }
};
