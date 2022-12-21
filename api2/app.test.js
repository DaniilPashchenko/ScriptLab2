const app = require('./app').app;
const request = require('supertest');

it('return Hello World', function (done) {
	request(app).get('/').expect('Hello World').end(done);
})