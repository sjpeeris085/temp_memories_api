import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

// Initialize app instance
const app = express();
dotenv.config();

// use some methods on above instance
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Saying every routes inside postRoutes gonna start with 'posts' i.e. (localhost:5000/posts)
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  console.log("MEMORIES API IS RUNNING...");
  res.send("MEMORIES API IS RUNNING...");
});

// Put connection url directly to the code is not secure,
// At the deployment we store this con. Url in Environmental Variable for Safety
// const CONNECTION_URL =
//   "mongodb+srv://sjpeeris_mongodb:lDzmkqSsPrG5EPCd@cluster0.or7glvz.mongodb.net/?retryWrites=true&w=majority";

const CONNECTION_URL =
  "mongodb+srv://sjpeeris_mongodb:lDzmkqSsPrG5EPCd@cluster0.or7glvz.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

// In above after connecting to mongoose succesfully it start to listening on specified port.
