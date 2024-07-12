const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "./index.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the file.");
    }
  });
});
app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "./about.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the file.");
    }
  });
});
app.get("/contact-me", (req, res) => {
  const filePath = path.join(__dirname, "./contact-me.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the file.");
    }
  });
});

app.use((req, res, next) => {
  const filePath = path.join(__dirname, "./404.html");
  res.status(404).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the 404 page.");
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
