const express = require("express");
const app = express();
const router = express.Router();

// router.get("/", (req, res) => {
//   // addData(req,res)
//   console.log("workinf add Data");
//   res.send("Routes > User Home Page");
// });

router.get("/homepanel", (req, res) => {
  console.log("file rendering from Routes ");
  res.sendFile(
    "/home/frie/FriexCo/OperationXarB/BackEnd/Node-MongoDB/public/index.html"
  );
});

router.get("/:username", (req, res) => {
  console.log(req.params);
  res.sendFile("check log");
});
module.exports = router;
