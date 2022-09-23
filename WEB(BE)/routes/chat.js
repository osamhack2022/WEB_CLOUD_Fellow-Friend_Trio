const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("chat pages");
});

/** chat 입장 */
router.post("/", (req, res, next) => {
  res.send("chat post Method");
});


module.exports = router;
