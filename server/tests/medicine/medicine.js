
var expect = require('chai').expect;
var app = require('../../../app');
var supertest = require('supertest');
// var beforeEach = require('mocha')


const request = supertest(app);

let userId = 1;
const userCredentials = {
    email: 'kyampe@gmail.com', 
    password: '123456789'
  }
  
var authenticatedUser = request;
describe('Test Medicnes route', ()=>{
    // create a user so as to obtain a token for authentication
//now let's login the user before we run any tests
// var authenticatedUser = request;
// before(function(done){
//   authenticatedUser
//     .post('/api/auth/login')
//     .send(userCredentials)
//     .end(function(err, response){
//       expect(response.statusCode).to.equal(200);
//       done();
//     });
// });

// it("Should return 200 with an empty event array", done => {
// authenticatedUser.get('/api/medicines').end((err, res) => {
//     expect(res.body).to.be.an("object");
//     expect(res.status).to.be.equal(200);
// });
// done();
// });
it('should return a 403 response for un authenticated user', function(done){
request.get('/api/medicine')
.expect(403);
done();
});
})