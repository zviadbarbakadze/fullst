import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(8000, () => {
  console.log("server is listening ");
});
