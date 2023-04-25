const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers");
const { schemas } = require("../../models/contact");

const { validateBody, isValidId, authenticate } = require("../../middleware");
const { ctrlWrapper } = require("../../helpers");

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.add)
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeById));

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
