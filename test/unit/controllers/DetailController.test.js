var request = require('supertest');
var factory = require("sails-factory").load();

var new_detail = factory.create("detail");
// TODO create the new_detail
console.log(new_detail);

describe('DetailController', function(){

  describe('index', function(){
    it('should list all details', function(done){
      request(sails.hooks.http.app)
      .get('/details')
      .expect(200);
      done();
    });
  });

  describe('show', function(){
    it('should show an specific detail', function(done){
      request(sails.hooks.http.app)
      .get('/details/1')
      .expect(200);
      done();
    })
  });

  describe('destroy', function(){
    it('should be success', function(done){
      //request(sails.hooks.http.app)
      //.put('/details/1');
      //.expect(200);
      done();
    })
  });

  describe('update', function(done){
    it('should be success', function(done){
      //TODO create a factory to consume from
      done();
    });
  });

});
