var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
 var expect = require("chai").expect;

describe('Routing', function() {

                        var url = 'http://localhost:3010';
  
          before(function() {
	  
	                  var dbName = 'test';
                      var connectionString = 'mongodb://localhost:27017/' + dbName;
                      mongoose.connect(connectionString);
					
                      });

describe('Employee Data', function() {
                       it('list of employee', function(done) {
						   
						   
						  request(url)
	                        .get('/api/employees') 
						    .end(function(err, res) {
                                            if (err) {
                                                     throw err;
                                                     }
                                                    expect(res.body).to.have.property('_id');
      
                                                    // res.should.have.status(400);
													res.expect(200);
        // done();		   
                                               });
											   
						                               done(); 
				
					   });
});
 
  
 describe('Employee record added', function() {
                       it('user added suceesful', function(done) {
                            var profile = {
                                           code: 20,
	                                    	name: 'sita',
		                                    city: 'pune'
    
                                          };
   
                         request(url)
	                        .post('/api/employees')
	                        .send(profile)
   
	                        .end(function(err, res) {
                                            if (err) {
                                                     throw err;
                                                     }
         
                                                   res.expect(200);
					 
         		  
                                                
                                               });
	                                           done();
                                       });

                                      });
									  
									  
									  
									  
 /*describe('Employee record updated', function() { 
                        it('update account sucessful', function(done){
	                          var body = {
		                                code: 500,
		                                name: 'abcd',
		                                city: 'pune'
	                                     };
										
	                    request(url)
	                        .put('/api/employees/:id')
							//  employee.findOne({ _id: '561e0ad279717128177986dd'})
	                         .send(body)
		                 	//.expect('Content-Type',/application/json)
	                       // .expect(200) //Status code
		                     .end(function(err,res) {
			                                  if (err) {
			                                    	throw err;
			                                          }
													    res.expect(200);
			// Should.js fluent syntax applied
	
			  res.body.should.have.property('_id');
			  res.body.code.should.equal('500');
	          res.body.name.should.equal('abcd');      
	          res.body.city.should.equal('pune');      
         		  
	              
				
	
		});
		done();
	});
  });*/
 
 
describe('Employee record deleted', function() { 
   it('delete employee',function(done){
			request(url)
				.delete('/api/employees/561e2b4a935fca702046318b')
               
				.end(function(err,res) {
					if (err) {
						throw err;
					}
					 res.expect(200)
			});
			done();
		});
});
});
