const { Router } = require("express");

const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.use(adminMiddleware);

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "course upload by admin endpoint",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "course edit delete chnange by admin endpoint",
  });
});
adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: " all course show  by admin endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
