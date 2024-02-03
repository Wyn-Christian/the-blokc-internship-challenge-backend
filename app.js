require("dotenv").config();
require("express-async-errors");
const express = require("express");
const Moralis = require("moralis").default;

const app = express();
const port = process.env.PORT || 3000;

const routes = require("./route");

const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

app.get("/", (req, res) => {
  res.send("Hello The BLOKC!");
});

app.use("/", routes);

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Challenge App listening on port ${port}`);
  });
};

startServer();
