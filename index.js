const express = require("express");
const app = express();

app.get("*", (request, response) => {
  const body = "<!-- rellfy.com -->\n" +
    "<p id=\"mises\"><b>taxation</b> is <b>theft</b><p>" +
    "<script>document.querySelector(\"#mises\").onclick = " +
    "() => window.location.href = \"https://mises.org\"</script>";
  response.send(body);
});

app.listen(process.env.PORT || 80);

