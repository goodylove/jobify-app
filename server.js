import express from "express";

const PORT = 5100;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("helo world");
});

const start = () => {
  app.listen(PORT, () => console.log("Listening to port " + PORT));
};

start();
