const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Samsung world!");
});

app.get("/on", async (req, res) => {
  try {
    const response = await axios.put(
      "http://192.168.1.113/api/HIjG0NftLDjrWmp45y-8Ew7u0HrOKXGz6MgQmBIA/lights/1/state",
      { on: true }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending PUT request");
  }
});

app.get("/off", async (req, res) => {
  try {
    const response = await axios.put(
      "http://192.168.1.113/api/HIjG0NftLDjrWmp45y-8Ew7u0HrOKXGz6MgQmBIA/lights/1/state",
      { on: false }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending PUT request");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
