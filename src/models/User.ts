import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  ho: String,
  ten: String,
  email: String,
  password: String,
  quyen: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  tienDo: {
    capDo: {
      type: String,
      default: "1",
    },
    level: {
      type: Number,
      default: 1,
    },
  },
});

export default mongoose.model("User", userSchema);
