const { getAllTechnologies } = require("./getAllTechnologies");
const { getAllDevelopers } = require("./getAllDevelopers");
const { createDeveloper} = require("./createDeveloper");
const { deleteDeveloper } = require("./deleteDeveloper");
const { updateDeveloper } = require("./updateDeveloper");

module.exports = {
  getAllTechnologies,
  getAllDevelopers,
  createDeveloper,
  deleteDeveloper,
  updateDeveloper
};
