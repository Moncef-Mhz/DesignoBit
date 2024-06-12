import { ConnectToDB } from "@/utils/ConnectToDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: {
  json: () => PromiseLike<{ email: string }>;
}) {
  try {
    await ConnectToDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    return NextResponse.json({ user });
  } catch (err) {
    console.log(err);
  }
}
