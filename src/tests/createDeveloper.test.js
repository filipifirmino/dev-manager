const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('1 - Verifica se é possivel cadastrar um dev com sucesso', () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:drop');
        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
        shell.exec('npx sequelize-cli db:seed:all');
    });

    it("Será validado se retorna todas as tecnologias com sucesso", async () => {
        await frisby
          .get(`${url}`)
          .expect('status', 200)
          .then((response) => {
            const {json} = response;
          expect(json.length).toBe(6);
          })
    });

    it("Sera validade que é possivel cadastrar um dev no banco com sucesso", async () => {
        await frisby
        .post(`${url}/developer`, {
          nome: "Filipi",
          fone: "8130393665",
          celular: "81981156819",
          cep: "51021-070",
          tecnologias: [1,2]
          })
        .expect('status', 201)
        .then((response) => {
          const {json} = response;
          expect(json.message).toBe('Successfully registered developer');
        })
    });
    
    it("Sera validade que é não é possivel cadastrar um dev com dados invalidos", async () => {
        await frisby
        .post(`${url}/developer`, {
          nome: "Filipi",
          fone: "8130393665",
          celular: "81981156819",
          cep: "51021-070",
          tecnologias: [1]
          })
        .expect('status', 400)
        .then((response) => {
          const {json} = response;
          expect(json.errors.length).toBe(1);
        })
    });

});

