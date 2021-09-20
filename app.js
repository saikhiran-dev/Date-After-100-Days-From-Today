const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const res = new Date();
  const newDate = addDays(
    new Date(res.getFullYear(), res.getMonth(), res.getDate()),
    100
  );
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
