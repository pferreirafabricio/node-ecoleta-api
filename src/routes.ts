import express from "express";
const routes = express.Router();

routes.get("/", (request, response) => {
  return response.status(400).json({ name: "Something" });
});

export default routes;
