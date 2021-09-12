/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Raza, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  id:'670b9562-b30d-52d5-b827-655787665500',
  name: 'Pug',
  weight:"1-4",
  height:"30-60",
  life:"10-15",
  temperament:'funny,curious,barker', 
  image:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20caracteristicas%20de%20los%20pugs.jpg?itok=V_XrYHWV'
};

describe('Razes routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Raza.sync({ force: true })
    .then(() => Raza.create(dog)));
  describe('GET /razes', () => {
    it('should get 200', () =>
      agent.get('/razes').expect(200)
    );
  });
});
