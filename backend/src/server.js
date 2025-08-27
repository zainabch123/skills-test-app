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

//Add routers below:


//Middleware


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
