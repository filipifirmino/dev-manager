const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('1 - Verifica se é possivel atualizar um dev com sucesso', () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:drop');
        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
        shell.exec('npx sequelize-cli db:seed:all');
    });

    it("Será validado se é possivel atualizar um dev com sucesso", async () => {
        await frisby
         .put(`${url}/developer/1`, {
           nome: "Filipi",
           fone:"8130393665",
           celular:"81981156819",
           endereco:"av. Roque Petroni jr /São Paulo - São Paulo/SP",
           tecnologias:[1, 3]
        })
          .expect('status', 200)
          .then((response) => {
            const {json} = response;
          expect(json.message).toBe("successfully!");
          })
    });

    it("Sera validade que não é possivel atualizar um dev inesistente", async () => {
        await frisby
        .put(`${url}/developer/999`, {
         nome: "Filipi",
         fone:"8130393665",
         celular:"81981156819",
         endereco:"av. Roque Petroni jr /São Paulo - São Paulo/SP",
         tecnologias:[1, 3]
        })
        .expect('status', 400)
        .then((response) => {
          const {json} = response;
          expect(json.message).toBe('Unregistered user');
        })
    });
});

