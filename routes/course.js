const { Router } = require("express");
const courseRouter = Router();
const { userMiddleware, purchaseModel } = require("../db");

courseRouter.post("/purchase", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await purchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    message: "purchase success",
  });
});

courseRouter.get("/preview", async function (req, res) {
  const courses = await courseModel.find({});
  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
