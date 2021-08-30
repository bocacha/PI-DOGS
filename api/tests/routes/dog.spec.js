/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  id:'670b9562-b30d-52d5-b827-655787665500',
  name: 'Pug',
  weight_min:1,
  weight_max:4,
  height_min:30,
  height_max:60,
  life_min:10,
  life_max:15,
  temperament:'funny,curious,barker', 
  image:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20caracteristicas%20de%20los%20pugs.jpg?itok=V_XrYHWV'
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});
