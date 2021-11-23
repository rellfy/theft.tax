const express = require("express");
const app = express();

app.get("*", (request, response) => {
  response.send("taxation is theft");
});

app.serve(process.env.PORT || 80);

