import mongoose from "mongoose";
import Question from "./Question";
import User from "./User";

const schema = new mongoose.Schema({
  nguoiDung: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  ngayBatDauThi: {
    type: Date,
    default: Date.now,
  },
  thoiGianLamBai: {
    type: Number,
    required: false,
    default: null,
  },
  luaChon: [
    {
      _id: false,
      cauHoi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Question,
      },
      chon: {
        type: Number,
        required: false,
        default: null,
      },
    },
  ],
  diem: Number,
});

export default mongoose.model("TestAttempt", schema);
