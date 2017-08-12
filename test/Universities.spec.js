const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.should();
chai.use(chaiHttp);

describe('Universities Server', () => {
  it('GET request should get 200 status code from /api/universities', (done) => {
    chai.request(server)
      .get('/api/universities')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('GET request should get 200 status code from /api/universities:id', (done) => {
    chai.request(server)
      .get('/api/universities/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
