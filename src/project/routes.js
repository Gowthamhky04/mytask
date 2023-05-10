const {Router} = require('express');
const controller = require("./controller");
const router = Router();



router.get("/",controller.getData);
router.post("/",controller.addText);
module.exports = router;