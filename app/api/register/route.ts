import { ConnectToDB } from "@/utils/ConnectToDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
const bcrypt = require("bcryptjs");

export const POST = async (req: {
  json: () => { name: string; email: string; password: string };
}) => {
  const { name, email, password } = await req.json();
  try {
    const hashedPassword: string = await bcrypt.hash(password, 10);
    await ConnectToDB();
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "User registred" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "An error has occurred while registering the user." },
      { status: 500 }
    );
  }
};
