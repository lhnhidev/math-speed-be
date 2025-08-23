import { changeProcessUser } from "../controllers/user.controller";
import User from "../models/User";
import { UserCreate } from "../types/openapi";

const addUser = async (userData: UserCreate) => {
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser) {
    throw new Error("EMAIL_EXISTS");
  }

  const user = new User(userData);
  return await user.save();
};

const loginUser = async (username: string) => {
  return await User.findOne({ email: username });
};

const findUser = async (idUser: string) => {
  return await User.findOne({ _id: idUser });
};

const changeProcess = async (idUser: string, dataChange: any) => {
  const updatedUser = await User.findByIdAndUpdate(
    { _id: idUser },
    {
      $set: {
        "tienDo.capDo": dataChange.capDo,
        "tienDo.level": dataChange.level,
      },
    },
    { new: true }
  );
  return updatedUser;
};

export default {
  addUser,
  loginUser,
  findUser,
  changeProcess,
};
