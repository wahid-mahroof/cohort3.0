const express = require("express");

const app = express();

app.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
app.post("user/signin", function (req, req) {
  res.json({
    message: "signin endpoint",
  });
});

app.get("user/purchases", function (req, req) {
  res.json({
    message: "purchases endpoint",
  });
});
app.post("course/purchase", function (req, req) {
  res.json({
    message: "course purchase endpoint",
  });
});
app.get("/courses", function (req, req) {
  res.json({
    message: "courses endpoint",
  });
});
