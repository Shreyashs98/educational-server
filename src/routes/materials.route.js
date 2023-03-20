const express = require("express");
const {
  getMaterials,
  postMaterial,
  patchMaterial,
  deleteMaterial,
} = require("../controllers/materials.controller");

const router = express.Router();

router.get("/materials", getMaterials);
router.post("/materials", postMaterial);
router.patch("/materials/:id", patchMaterial);
router.delete("/materials/:id", deleteMaterial);

module.exports = router;
