process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming app.js is one directory above

chai.use(chaiHttp);
const expect = chai.expect;

describe('Photos', function () {
    it('should list ALL photos on / GET', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          expect(res.text).to.equal('Hello, World!'); // Assuming your root route sends this text
          done();
        });
    });
  });