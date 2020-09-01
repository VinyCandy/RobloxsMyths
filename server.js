const express = require("express");
const app = express();
const fs = require("fs");


app.use(express.static("public"));


app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/home", (request, response) => {
 response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/personnel", (request, response) => {
 response.sendFile(`${__dirname}/views/personnel.html`);
});
app.get("/events", (request, response) => {
 response.sendFile(`${__dirname}/views/events.html`);
});
app.get("/database", (request, response) => {
 response.sendFile(`${__dirname}/views/database.html`);
});
app.get("/applications", (request, response) => {
 response.sendFile(`${__dirname}/views/applications.html`);
});

var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});