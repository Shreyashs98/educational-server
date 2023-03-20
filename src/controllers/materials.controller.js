const mongoose = require("mongoose");
const Material = mongoose.model("Material");

const getMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.json({
      success: true,
      data: materials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const postMaterial = async (req, res) => {
  const data = req.body;

  try {
    const addedMaterial = await Material.create(data);
    res.status(201).json({
      success: true,
      data: addedMaterial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const patchMaterial = async (req, res) => {
  const data = req.body;
  const id = req.params.id;

  try {
    const updatedMaterial = await Material.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    res.json({
      success: true,
      data: updatedMaterial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteMaterial = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedMaterial = await Material.findByIdAndDelete(id);
    if (deletedMaterial) {
      res.json({
        success: true,
        data: deletedMaterial,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Material not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getMaterials,
  postMaterial,
  patchMaterial,
  deleteMaterial,
};
