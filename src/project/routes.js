const {Router} = require('express');
const controller = require("./controller");
const router = Router();


router.get("/",controller.getData);
router.get("/sortByText",controller.sortByText);
router.get("/sortByDate",controller.sortByDate);
router.get("/sortByTextDesc",controller.sortByTextDesc);

router.post("/",controller.addText);
router.get("/:id_no",controller.getById);
router.delete('/:id_no',controller.removeById);
router.put('/:id_no',controller.updateById);
module.exports = router;