const {
  Developers,
  Technologies,
} = require("../models");

const getDeveloperByFilter = async (filter) => {
  return Developers.findAll({
    include: {
      model: Technologies, 
      as: "especialidade", 
      attributes: ["name"],
      raw : true, 
    },
    where: filter
  })
    .then((response) => {
      console.log(response);
      const result = JSON.parse(JSON.stringify(response));
      const getTools = result.map((actual) => actual.especialidade.map((acc) => acc.name));
      result.map((actual, index) => actual.especialidade = getTools[index]);
      return result
    })
    .catch((err) => console.log(err));
}

const getDeveloperByTecnologie = async (tecnologieName) => {
  return Developers.findAll({
    include: {
      model: Technologies, 
      as: "especialidade", 
      attributes: ["name"],
      raw : true, 
      where: {name:tecnologieName}
    }    
  })
    .then((response) => {
      console.log(response);
      const result = JSON.parse(JSON.stringify(response));
      const getTools = result.map((actual) => actual.especialidade.map((acc) => acc.name));
      result.map((actual, index) => actual.especialidade = getTools[index]);
      return result
    })
    .catch((err) => console.log(err));
}


const getAllDevelopers = async (req, res) => {

  const param = req.query; 

  if(Object.keys(param).length > 0){
   const filter = Object.keys(param)[0];
   switch (filter) {
    case 'id':
      const resultById = await getDeveloperByFilter({ id : param.id });
      res.status(200).json(resultById);
      break;
    case 'nome':
      const resultByNome = await getDeveloperByFilter({ nome : param.nome});
      res.status(200).json(resultByNome);
      break;
    case 'celular':
      const resultByCelular = await getDeveloperByFilter({ celular : param.celular });
      res.status(200).json(resultByCelular);
      break;
    case 'fone':
      const resultByFone = await getDeveloperByFilter({ fone : param.fone });
      res.status(200).json(resultByFone);
      break;
    case 'endereco':
      const resultByEndereco = await getDeveloperByFilter({ endereco : param.endereco });
      res.status(200).json(resultByEndereco);
      break;
    case 'especialidade':
      const resultByespecialidade = await getDeveloperByTecnologie(param.especialidade);
      res.status(200).json(resultByespecialidade);
      break;
    default:
      res.status(400).json({message: "This parameter does not exist"})
   }
  }
 
  Developers.findAll({
    include: { model: Technologies, as: "especialidade", attributes: ["name"], raw : true},
  })
    .then((response) => {
      const result = JSON.parse(JSON.stringify(response));
      const getTools = result.map((actual) => actual.especialidade.map((acc) => acc.name))
      result.map((actual, index) => actual.especialidade = getTools[index]);
      return res.status(200).json(result)
    })
    .catch((err) => console.log(err));  
  
};

module.exports = {
  getAllDevelopers,
};
