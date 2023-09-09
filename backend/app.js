import express from "express";
import fs from "fs";
const app = express();

const data = JSON.parse(fs.readFileSync("./data.json"));

app.get("https://planets-fact-lac.vercel.app/api", (req, res) => {
  res.send(data);
});

app.get("https://planets-fact-lac.vercel.app/api/:id", (req, res) => {
  //id is planets name
  const id = req.params.id;
  const planet = data.find((el) => el.name === id);
  res.status(200).json({
    planet,
  });
});

const PORT = 4321;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
