const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("production deployment Successfully!");
});
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});