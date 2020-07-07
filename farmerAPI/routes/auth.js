const router = require("express").Router();

const { signUp } = require("../controller/auth");

router.post("/users", signUp);

module.exports = router;
