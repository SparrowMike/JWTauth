require("dotenv").config();
const path = require('path');
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

//  Conneect DB
connectDB();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

//Error Handler ()
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

const server = app.listen(PORT, () =>
  console.log("Server running on port", PORT)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
