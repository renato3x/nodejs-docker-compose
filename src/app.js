const express = require("express");
const app = express();

app.get("/", (_, response) => {
  return response.json({ message: "Hello World" });
});

app.get("/:name", (request, response) => {
  const { name } = request.params;
  return response.json({ message: `Your name is ${name}` });
});

module.exports = { app };
