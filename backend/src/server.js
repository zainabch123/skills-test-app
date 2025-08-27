//Load environment variable
import { config } from "dotenv";
config();

// Import express and cors
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Set up express
const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));

// import userRouter from "./routes/user.js";
import prisma from "./utils/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;


// Add routers below:
// app.use("/user", userRouter);

app.post("/user/login", async (req, res) => {
   const { email, password } = req.body;

   try {
     const currentUser = await prisma.user.findUnique({
       where: {
         email: email,
       },
     });

     console.log("currentUser", currentUser);
     const validPassword = await bcrypt.compare(password, currentUser.password);

     if (!validPassword) {
       return res.status(401).json({ error: "Invalid Password" });
     }

     const token = jwt.sign({ id: currentUser.id }, secret);

     return res.status(200).json({ user: currentUser, token });
   } catch (error) {
     console.log("Error", error);
   }
})

// Middleware

// Test route to check if server is running
// Test route to check if the server is running
app.get("/test", async (req, res) => {
  res.send("ok");
});
// Start API server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`\n Server is running on http://localhost:${PORT}\n`);
});
