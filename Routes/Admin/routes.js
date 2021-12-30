const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Routes > Admin Home Page");
});
router.get("/adminpanel", (req, res) => {
  res.send("Routes > Admin Home Panel Page");
});

module.exports = router;
