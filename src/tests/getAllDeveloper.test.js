const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('1 - Verifica se é possivel listar todos os desenvolvedores com sucesso', () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:drop');
        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
        shell.exec('npx sequelize-cli db:seed:all');
    });

    it("Será validado se retorna todas os desenvolvedores cadastrados", async () => {
        await frisby
          .get(`${url}/developer`)
          .expect('status', 200)
          .then((response) => {
            const {json} = response;
          expect(json.length).toBe(2);
          })
    });

    it("Sera validado que é possivel filtra um dev pelo nome", async () => {
        await frisby
        .get(`${url}/developer?nome=steve`)
        .expect('status', 200)
        .then((response) => {
          const {json} = response;
          expect(json.length).toBe(1)
        })
    });
    
    it("Sera validado que é possivel filtra um dev pelo id", async () => {
        await frisby
        .get(`${url}/developer?id=1`)
        .expect('status', 200)
        .then((response) => {
          const {json} = response;
          expect(json.length).toBe(1)
        })
    });

    it("Sera validado que é possivel filtra um dev pelo fone", async () => {
        await frisby
        .get(`${url}/developer?fone=99999999999`)
        .expect('status', 200)
        .then((response) => {
          const {json} = response;
          expect(json.length).toBe(2)
        })
    });

    it("Sera validado que é possivel filtra um dev pelo endereço", async () => {
        await frisby
        .get(`${url}/developer?endereco=Crist Drive, Los Altos, California`)
        .expect('status', 200)
        .then((response) => {
          const {json} = response;
          expect(json.length).toBe(1)
        })
    });

    it("Sera validado que é possivel filtra um dev pelo especialidade", async () => {
        await frisby
        .get(`${url}/developer?especialidade=JAVA`)
        .expect('status', 200)
        .then((response) => {
          const {json} = response;
          expect(json.length).toBe(1)
        })
    });

});

