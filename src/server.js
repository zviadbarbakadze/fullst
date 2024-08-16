import express from "express";

const app = express();
app.use(express.json());
app.post("/", (req, res) => {
  res.send(`HELLO ${req.body.name}`);
});

app.listen(8000, () => {
  console.log("server is listening ");
});
