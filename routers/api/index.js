const express = require("express");
const router = express.Router();

router.post("/debuggie", async (req, res) => {
  console.log(req.body.key);
  if (req.body.key != global.config.web.debug.presetKey) {
    res.json({ message: "fail" });
    return;
  } else {
    res.json({
      message: "skibidi",
    });
    req.session.save(() => {
      req.debugKey = req.body.key;
    });
    return;
  }
  if (req.body.key != process.env.key) {
    res.json({ message: "fail" });
    return;
  } else {
    res.json({
      message: "skibidi",
    });
    req.session.save(() => {
      req.debugKey = req.body.key;
    });
    return;
  }
});

module.exports = router;
