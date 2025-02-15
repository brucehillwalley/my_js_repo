import { Schema, model, models } from "mongoose";
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
  },
  username: {
    type: String,
    required: true,
    
  },
  image: String,
  prompts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Prompt",
      default: [],
    },
  ],
});

const User = models.User || model("User", userSchema);
export default User;
