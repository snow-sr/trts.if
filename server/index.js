import "./db/functions";
import express from "express";
const app = express();
const port = 8087;

app.get("/getLeaderboards", (req, res) => {
  res.send("getLeaderboards");
});

app.post("/sendScore", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
