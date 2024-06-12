import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: [true, "UserName is required"] },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, require: true },
    image: String,
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
