const { Developers, DeveloperTechnologies } = require("../models");

const deleteDeveloper = async (req, res) => {
  const { id } = req.params;

  try {
    Developers.destroy({ where: { id : id } });
    const result = await DeveloperTechnologies.destroy({where: {devId: id}});
    if(result === 0) {
      res.status(400).json({ message: "Failed to delete developer" });
    } 
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(403).json({ message: "Failed to delete developer" });
  }
};

module.exports = {
  deleteDeveloper,
}