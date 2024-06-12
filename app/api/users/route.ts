import { ConnectToDB } from "@/utils/ConnectToDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export const GET = async (req: NextApiRequest) => {
  try {
    await ConnectToDB();
    const Users = await User.find({});
    return NextResponse.json(Users);
  } catch (err) {
    return NextResponse.json(err);
  }
};
