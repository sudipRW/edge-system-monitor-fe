/*
 * PortainerCE API
 * Portainer API is an HTTP API served by Portainer. It is used by the Portainer UI and everything you can do with the UI can be done using the HTTP API. Examples are available at https://documentation.portainer.io/api/api-examples/ You can find out more about Portainer at [http://portainer.io](http://portainer.io) and get some support on [Slack](http://portainer.io/slack/).  # Authentication  Most of the API environments(endpoints) require to be authenticated as well as some level of authorization to be used. Portainer API uses JSON Web Token to manage authentication and thus requires you to provide a token in the **Authorization** header of each request with the **Bearer** authentication mechanism.  Example:  ``` Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE ```  # Security  Each API environment(endpoint) has an associated access policy, it is documented in the description of each environment(endpoint).  Different access policies are available:  - Public access - Authenticated access - Restricted access - Administrator access  ### Public access  No authentication is required to access the environments(endpoints) with this access policy.  ### Authenticated access  Authentication is required to access the environments(endpoints) with this access policy.  ### Restricted access  Authentication is required to access the environments(endpoints) with this access policy. Extra-checks might be added to ensure access to the resource is granted. Returned data might also be filtered.  ### Administrator access  Authentication as well as an administrator role are required to access the environments(endpoints) with this access policy.  # Execute Docker requests  Portainer **DO NOT** expose specific environments(endpoints) to manage your Docker resources (create a container, remove a volume, etc...).  Instead, it acts as a reverse-proxy to the Docker HTTP API. This means that you can execute Docker requests **via** the Portainer HTTP API.  To do so, you can use the `/endpoints/{id}/docker` Portainer API environment(endpoint) (which is not documented below due to Swagger limitations). This environment(endpoint) has a restricted access policy so you still need to be authenticated to be able to query this environment(endpoint). Any query on this environment(endpoint) will be proxied to the Docker API of the associated environment(endpoint) (requests and responses objects are the same as documented in the Docker API).  # Private Registry  Using private registry, you will need to pass a based64 encoded JSON string ‘{\"registryId\":\\<registryID value\\>}’ inside the Request Header. The parameter name is \"X-Registry-Auth\". \\<registryID value\\> - The registry ID where the repository was created.  Example:  ``` eyJyZWdpc3RyeUlkIjoxfQ== ```  **NOTE**: You can find more information on how to query the Docker API in the [Docker official documentation](https://docs.docker.com/engine/api/v1.30/) as well as in [this Portainer example](https://documentation.portainer.io/api/api-examples/). 
 *
 * OpenAPI spec version: 2.21.3
 * Contact: info@portainer.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PortainerCeApi);
  }
}(this, function(expect, PortainerCeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PortainerCeApi.EndpointGroupsApi();
  });

  describe('(package)', function() {
    describe('EndpointGroupsApi', function() {
      describe('endpointGroupAddEndpoint', function() {
        it('should call endpointGroupAddEndpoint successfully', function(done) {
          // TODO: uncomment, update parameter values for endpointGroupAddEndpoint call
          /*
          var id = 56;
          var endpointId = 56;

          instance.endpointGroupAddEndpoint(id, endpointId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('endpointGroupDelete', function() {
        it('should call endpointGroupDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for endpointGroupDelete call
          /*
          var id = 56;

          instance.endpointGroupDelete(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('endpointGroupDeleteEndpoint', function() {
        it('should call endpointGroupDeleteEndpoint successfully', function(done) {
          // TODO: uncomment, update parameter values for endpointGroupDeleteEndpoint call
          /*
          var id = 56;
          var endpointId = 56;

          instance.endpointGroupDeleteEndpoint(id, endpointId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('endpointGroupList', function() {
        it('should call endpointGroupList successfully', function(done) {
          // TODO: uncomment endpointGroupList call and complete the assertions
          /*

          instance.endpointGroupList(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(PortainerCeApi.PortainerEndpointGroup);
              {
                let dataCtr = data.authorizedTeams;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(1);
                }
              }
              {
                let dataCtr = data.authorizedUsers;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(1);
                }
              }
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("Environment(Endpoint) group description");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(1);
              {
                let dataCtr = data.labels;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(PortainerCeApi.PortainerPair);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("name");
                  expect(data.value).to.be.a('string');
                  expect(data.value).to.be("value");
  
                        }
              }
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("my-environment-group");
              {
                let dataCtr = data.tagIds;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(1);
                }
              }
              {
                let dataCtr = data.tags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              expect(data.teamAccessPolicies).to.be.a(PortainerCeApi.PortainerTeamAccessPolicies);
                  expect(data.userAccessPolicies).to.be.a(PortainerCeApi.PortainerUserAccessPolicies);
      
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('endpointGroupUpdate', function() {
        it('should call endpointGroupUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for endpointGroupUpdate call and complete the assertions
          /*
          var id = 56;
          var body = new PortainerCeApi.EndpointgroupsEndpointGroupUpdatePayload();
          body.description = "description";
          body.name = "my-environment-group";
          body.tagIDs = [3,4];
          body.teamAccessPolicies = new PortainerCeApi.PortainerTeamAccessPolicies();
          body.userAccessPolicies = new PortainerCeApi.PortainerUserAccessPolicies();

          instance.endpointGroupUpdate(id, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerEndpointGroup);
            {
              let dataCtr = data.authorizedTeams;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            {
              let dataCtr = data.authorizedUsers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("Environment(Endpoint) group description");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.PortainerPair);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("name");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("value");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("my-environment-group");
            {
              let dataCtr = data.tagIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.teamAccessPolicies).to.be.a(PortainerCeApi.PortainerTeamAccessPolicies);
                expect(data.userAccessPolicies).to.be.a(PortainerCeApi.PortainerUserAccessPolicies);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('endpointGroupsIdGet', function() {
        it('should call endpointGroupsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for endpointGroupsIdGet call and complete the assertions
          /*
          var id = 56;

          instance.endpointGroupsIdGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerEndpointGroup);
            {
              let dataCtr = data.authorizedTeams;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            {
              let dataCtr = data.authorizedUsers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("Environment(Endpoint) group description");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.PortainerPair);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("name");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("value");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("my-environment-group");
            {
              let dataCtr = data.tagIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.teamAccessPolicies).to.be.a(PortainerCeApi.PortainerTeamAccessPolicies);
                expect(data.userAccessPolicies).to.be.a(PortainerCeApi.PortainerUserAccessPolicies);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('endpointGroupsPost', function() {
        it('should call endpointGroupsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for endpointGroupsPost call and complete the assertions
          /*
          var body = new PortainerCeApi.EndpointgroupsEndpointGroupCreatePayload();
          body.associatedEndpoints = [1,3];
          body.description = "description";
          body.name = "my-environment-group";
          body.tagIDs = [1,2];

          instance.endpointGroupsPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerEndpointGroup);
            {
              let dataCtr = data.authorizedTeams;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            {
              let dataCtr = data.authorizedUsers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("Environment(Endpoint) group description");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.PortainerPair);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("name");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("value");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("my-environment-group");
            {
              let dataCtr = data.tagIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(1);
              }
            }
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.teamAccessPolicies).to.be.a(PortainerCeApi.PortainerTeamAccessPolicies);
                expect(data.userAccessPolicies).to.be.a(PortainerCeApi.PortainerUserAccessPolicies);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
