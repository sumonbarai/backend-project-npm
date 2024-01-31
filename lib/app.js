const express = require("express");
const router = require("./src/routes/api");
const app = express();

// Routing Implement
app.use("/api/v1", router);

// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ message: "route not found" });
});

module.exports = app;
