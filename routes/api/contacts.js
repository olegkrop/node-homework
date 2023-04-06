const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers");
const schemas = require("../../schemas/addSchema");

const { validateBody } = require("../../middleware");
const { ctrlWrapper } = require("../../helpers");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put(
  "/:id",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
