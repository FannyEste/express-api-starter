import express from "express";
import cors from "cors";

import boardgames from "./data/boardgames.json"
// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 9000;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get("/test", (req, res) => {
  res.send("Hello from test!")
  console.log("Hello from test")
});

app.get("/boardgames", (req, res) => {
  res.json(boardgames)
})

app.get("/boardgames/:id", (req, res) => {
  const id = req.params.id

  const boardgame =boardgames.find(game => game.id === +id)
  res.json(boardgame)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
