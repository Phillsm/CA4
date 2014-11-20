global.TEST_DATABASE = "mongodb://localhost/wiki"

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var bl = require('bl')

describe('REST API for /user', function () {
  //Start the Server before the TESTS
  before(function (done) {
    testServer = app.listen(testPort, function () {
      console.log("Server is listening on: " + testPort);
      done();
    })
    .on('error',function(err){
        console.log(err);
      });
  })

  after(function(){  //Stop server after the test
    //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
    //mongoose.connection.db.dropDatabase();
    testServer.close();
  })

  it("should find many unique categories",function(done){
    http.get("http://localhost:"+testPort+"/api/categories",function(res){
      res.pipe(bl(function(err,data){
                 var json = JSON.parse(data.toString());
                 json.length.should.be.above(9000);
                 done();
               }))
    })
  })

  it("should be able to find wiki by title",function(done){
    http.get("http://localhost:"+testPort+'/api/wikis?title=Abacus',function(res){
      res.pipe(bl(function(err,data){
                 var json = JSON.parse(data.toString());
                 json[0].title.should.be.type('string');
                 done();
               }))
    })
  })

  it("should be able to find wikis grouped by category",function(done){
    http.get("http://localhost:"+testPort+'/api/wikis?category=Silent films',function(res){
      res.pipe(bl(function(err,data){
                 var json = JSON.parse(data.toString());
                 json.length.should.be.above(2);
                 done();
               }))
    })
  })

  it("should be able to search for wikis",function(done){
    http.get("http://localhost:"+testPort+'/api/wikis?search=turing',function(res){
      res.pipe(bl(function(err,data){
                 var json = JSON.parse(data.toString());
                 json.length.should.be.above(2);
                 done();
               }))
    })
  })


});
