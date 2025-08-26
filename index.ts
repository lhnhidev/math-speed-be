import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import setupRoutes from "./src/routes";
import { connectDB } from "./src/config/db";
import { jwtParser } from "./src/middleware/auth.middleware";

dotenv.config();
await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["*"],
        scriptSrc: ["*", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["*", "'unsafe-inline'"],
        imgSrc: ["* data:"],
        connectSrc: ["*"],
        fontSrc: ["*"],
        objectSrc: ["*"],
        mediaSrc: ["*"],
        frameSrc: ["*"],
      },
    },
  })
);
app.use(express.static("public/Math_Speed_v1"));

const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "https://lhnhidev.github.io/ms-product",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(jwtParser);

setupRoutes(app);

app.use("/", (_req, res) => {
  res.sendFile(`${__dirname}/public/Math_Speed_v1/index.html`);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
