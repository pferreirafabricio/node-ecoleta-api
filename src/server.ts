import express from "express";
const app = express();

app.get("/users", (request, response) => {
  console.log("Something");
});

app.listen(3333);
