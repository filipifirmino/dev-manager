const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('1 - Verifica se é possivel deletar um dev com sucesso', () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:drop');
        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
        shell.exec('npx sequelize-cli db:seed:all');
    });

    it("Será validado se é possivel deletar um dev com sucesso", async () => {
        await frisby
          .delete(`${url}/developer/1`)
          .expect('status', 200)
          .then((response) => {
            const {json} = response;
          expect(json.message).toBe("successfully deleted");
          })
    });

    it("Sera validade que não é possivel deletar um dev inesistente", async () => {
        await frisby
        .delete(`${url}/developer/999`)
        .expect('status', 400)
        .then((response) => {
          const {json} = response;
          expect(json.message).toBe('Failed to delete developer');
        })
    });
});

