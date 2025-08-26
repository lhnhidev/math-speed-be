import { Request, Response } from "express";
import UserService from "../services/user.service";
import { OperationHandler } from "../types/openapi";
import { addAccessToken } from "../middleware/auth.middleware";

export const addUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserService.addUser(req.body);
    return res.status(201).json(newUser);
  } catch (error: any) {
    if (error.message === "EMAIL_EXISTS") {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }
    return res.status(500).json({ message: "Server error", error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { idUser } = req.params;
    const user = await UserService.findUser(idUser);
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: "Error find", error });
  }
};

export const changeProcessUser = async (req: Request, res: Response) => {
  try {
    const { idUser } = req.params;
    const user = await UserService.changeProcess(idUser, req.body);
    if (!user) {
      res.status(401).json({ message: "Can't change" });
      return;
    }
    res.status(200).json(user);
  } catch {}
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await UserService.loginUser(username);
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    } else if (user.password != password) {
      res.status(401).json({ message: "Password not matched" });
      return;
    }
    res.status(200).json(user);
    // addAccessToken(res, {
    //   id: user._id.toString(),
    //   role: user.quyen,
    // });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

// export const addUserHandler: OperationHandler<"themNguoiDung"> = async (c, _req, res: Response) => {
//     try {
//         const newUser = await UserService.addUser(c.request.requestBody);
//         return res.status(201).json(newUser);
//     } catch (error) {
//         return res.status(500).json({ message: 'Error adding user', error });
//     }
// };
