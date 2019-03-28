'use strict';

const server = require('../../server');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Tests GET', function () {
    it('verifies successful response', (done) => {
        chai.request(server)
        .get('/template')
        .end((err, res) => {
            if (err) throw err;
            res.should.be.a('object');
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('body');
            res.body.body.should.be.a('string');
    
            let response = JSON.parse(res.body.body);
    
            response.should.be.an('object');
            response.should.have.property('message');
            response.message.should.be.equal("This is the get route");
            done();
        });
    });
});

describe('Tests POST', function () {
    it('verifies successful response', (done) => {
        chai.request(server)
        .post('/template')
        .end((err, res) => {
            if (err) throw err;
            res.should.be.a('object');
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('body');
            res.body.body.should.be.a('string');
            
            let response = JSON.parse(res.body.body);

            response.should.be.an('object');
            response.should.have.property('message');
            response.message.should.be.equal("This is the post route");
            done();
        });
    });
});
