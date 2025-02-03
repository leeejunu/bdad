var express = require("express");
var router = express.Router();

const testApi = require("../service/testService")

/**
 * 홈
 */
router.get("/", async (req, res, next) => {
  return res.json({
    status: 200,
    message: "WELCOME API SERVER !!!",
    data: null,
  });
});

router.get("/test", async (req, res, next) => {
    const response = await testApi.test();
    console.log("response: " + response)
    return res.json(response);
})


module.exports = router;
