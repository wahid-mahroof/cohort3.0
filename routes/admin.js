const { Router } = require("express");
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "aladld123123";

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
