const { Router } = require("express");
const { adminModel, courseModel } = require("../db");

const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

const adminRouter = Router();

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({
    message: "signup succeeded",
  });
});

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
  res.json({
    message: "signin endpoint",
  });
});

//adminRouter.use(adminMiddleware);

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;

  const { title, description, imageUrl, price } = req.body;

  const course = await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId,
  });
  res.json({
    message: "course created",
    courseId: course._id,
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
