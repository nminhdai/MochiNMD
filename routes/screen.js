const express = require('express');
const router = express();

router.get("/", (req, res) => {
  res.send("Welcome to Mochi NMD");
});

module.exports = router;
