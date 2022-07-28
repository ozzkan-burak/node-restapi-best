const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h2>Çalışıyorr ...!</h2>");
});

app.listen(PORT, ()=> {
  console.log(`API is listening on port ${PORT}`);
});