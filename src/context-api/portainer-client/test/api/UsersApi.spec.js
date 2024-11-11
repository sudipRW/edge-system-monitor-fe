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
    instance = new PortainerCeApi.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('currentUserInspect', function() {
        it('should call currentUserInspect successfully', function(done) {
          // TODO: uncomment currentUserInspect call and complete the assertions
          /*

          instance.currentUserInspect(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerUser);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.role).to.be.a('number');
            expect(data.role).to.be(1);
            expect(data.themeSettings).to.be.a(PortainerCeApi.PortainerUserThemeSettings);
                  expect(data.themeSettings.color).to.be.a('string');
              expect(data.themeSettings.color).to.be("dark");
            expect(data.tokenIssueAt).to.be.a('number');
            expect(data.tokenIssueAt).to.be(1);
            expect(data.useCache).to.be.a('boolean');
            expect(data.useCache).to.be(true);
            expect(data.userTheme).to.be.a('string');
            expect(data.userTheme).to.be("dark");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("bob");
            expect(data.endpointAuthorizations).to.be.a(PortainerCeApi.PortainerEndpointAuthorizations);
                expect(data.portainerAuthorizations).to.be.a(PortainerCeApi.PortainerAuthorizations);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userAdminCheck', function() {
        it('should call userAdminCheck successfully', function(done) {
          // TODO: uncomment userAdminCheck call
          /*

          instance.userAdminCheck(function(error, data, response) {
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
      describe('userAdminInit', function() {
        it('should call userAdminInit successfully', function(done) {
          // TODO: uncomment, update parameter values for userAdminInit call and complete the assertions
          /*
          var body = new PortainerCeApi.UsersAdminInitPayload();
          body.password = "admin-password";
          body.username = "admin";

          instance.userAdminInit(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerUser);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.role).to.be.a('number');
            expect(data.role).to.be(1);
            expect(data.themeSettings).to.be.a(PortainerCeApi.PortainerUserThemeSettings);
                  expect(data.themeSettings.color).to.be.a('string');
              expect(data.themeSettings.color).to.be("dark");
            expect(data.tokenIssueAt).to.be.a('number');
            expect(data.tokenIssueAt).to.be(1);
            expect(data.useCache).to.be.a('boolean');
            expect(data.useCache).to.be(true);
            expect(data.userTheme).to.be.a('string');
            expect(data.userTheme).to.be("dark");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("bob");
            expect(data.endpointAuthorizations).to.be.a(PortainerCeApi.PortainerEndpointAuthorizations);
                expect(data.portainerAuthorizations).to.be.a(PortainerCeApi.PortainerAuthorizations);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userCreate', function() {
        it('should call userCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for userCreate call and complete the assertions
          /*
          var body = new PortainerCeApi.UsersUserCreatePayload();
          body.password = "cg9Wgky3";
          body.role = 2;
          body.username = "bob";

          instance.userCreate(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerUser);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.role).to.be.a('number');
            expect(data.role).to.be(1);
            expect(data.themeSettings).to.be.a(PortainerCeApi.PortainerUserThemeSettings);
                  expect(data.themeSettings.color).to.be.a('string');
              expect(data.themeSettings.color).to.be("dark");
            expect(data.tokenIssueAt).to.be.a('number');
            expect(data.tokenIssueAt).to.be(1);
            expect(data.useCache).to.be.a('boolean');
            expect(data.useCache).to.be(true);
            expect(data.userTheme).to.be.a('string');
            expect(data.userTheme).to.be("dark");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("bob");
            expect(data.endpointAuthorizations).to.be.a(PortainerCeApi.PortainerEndpointAuthorizations);
                expect(data.portainerAuthorizations).to.be.a(PortainerCeApi.PortainerAuthorizations);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userDelete', function() {
        it('should call userDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for userDelete call
          /*
          var id = 56;

          instance.userDelete(id, function(error, data, response) {
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
      describe('userGenerateAPIKey', function() {
        it('should call userGenerateAPIKey successfully', function(done) {
          // TODO: uncomment, update parameter values for userGenerateAPIKey call and complete the assertions
          /*
          var id = 56;
          var body = new PortainerCeApi.UsersUserAccessTokenCreatePayload();
          body.description = "github-api-key";
          body.password = "password";

          instance.userGenerateAPIKey(id, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.UsersAccessTokenResponse);
            expect(data.apiKey).to.be.a(PortainerCeApi.PortainerAPIKey);
                  expect(data.apiKey.dateCreated).to.be.a('number');
              expect(data.apiKey.dateCreated).to.be(0);
              expect(data.apiKey.description).to.be.a('string');
              expect(data.apiKey.description).to.be("portainer-api-key");
              expect(data.apiKey.digest).to.be.a('string');
              expect(data.apiKey.digest).to.be("");
              expect(data.apiKey.id).to.be.a('number');
              expect(data.apiKey.id).to.be(1);
              expect(data.apiKey.lastUsed).to.be.a('number');
              expect(data.apiKey.lastUsed).to.be(0);
              expect(data.apiKey.prefix).to.be.a('string');
              expect(data.apiKey.prefix).to.be("");
              expect(data.apiKey.userId).to.be.a('number');
              expect(data.apiKey.userId).to.be(1);
            expect(data.rawAPIKey).to.be.a('string');
            expect(data.rawAPIKey).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userGetAPIKeys', function() {
        it('should call userGetAPIKeys successfully', function(done) {
          // TODO: uncomment, update parameter values for userGetAPIKeys call and complete the assertions
          /*
          var id = 56;

          instance.userGetAPIKeys(id, function(error, data, response) {
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
              expect(data).to.be.a(PortainerCeApi.PortainerAPIKey);
              expect(data.dateCreated).to.be.a('number');
              expect(data.dateCreated).to.be(0);
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("portainer-api-key");
              expect(data.digest).to.be.a('string');
              expect(data.digest).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(1);
              expect(data.lastUsed).to.be.a('number');
              expect(data.lastUsed).to.be(0);
              expect(data.prefix).to.be.a('string');
              expect(data.prefix).to.be("");
              expect(data.userId).to.be.a('number');
              expect(data.userId).to.be(1);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userInspect', function() {
        it('should call userInspect successfully', function(done) {
          // TODO: uncomment, update parameter values for userInspect call and complete the assertions
          /*
          var id = 56;

          instance.userInspect(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerUser);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.role).to.be.a('number');
            expect(data.role).to.be(1);
            expect(data.themeSettings).to.be.a(PortainerCeApi.PortainerUserThemeSettings);
                  expect(data.themeSettings.color).to.be.a('string');
              expect(data.themeSettings.color).to.be("dark");
            expect(data.tokenIssueAt).to.be.a('number');
            expect(data.tokenIssueAt).to.be(1);
            expect(data.useCache).to.be.a('boolean');
            expect(data.useCache).to.be(true);
            expect(data.userTheme).to.be.a('string');
            expect(data.userTheme).to.be("dark");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("bob");
            expect(data.endpointAuthorizations).to.be.a(PortainerCeApi.PortainerEndpointAuthorizations);
                expect(data.portainerAuthorizations).to.be.a(PortainerCeApi.PortainerAuthorizations);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userList', function() {
        it('should call userList successfully', function(done) {
          // TODO: uncomment, update parameter values for userList call and complete the assertions
          /*
          var opts = {};
          opts.environmentId = 56;

          instance.userList(opts, function(error, data, response) {
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
              expect(data).to.be.a(PortainerCeApi.PortainerUser);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(1);
              expect(data.role).to.be.a('number');
              expect(data.role).to.be(1);
              expect(data.themeSettings).to.be.a(PortainerCeApi.PortainerUserThemeSettings);
                    expect(data.themeSettings.color).to.be.a('string');
                expect(data.themeSettings.color).to.be("dark");
              expect(data.tokenIssueAt).to.be.a('number');
              expect(data.tokenIssueAt).to.be(1);
              expect(data.useCache).to.be.a('boolean');
              expect(data.useCache).to.be(true);
              expect(data.userTheme).to.be.a('string');
              expect(data.userTheme).to.be("dark");
              expect(data.username).to.be.a('string');
              expect(data.username).to.be("bob");
              expect(data.endpointAuthorizations).to.be.a(PortainerCeApi.PortainerEndpointAuthorizations);
                  expect(data.portainerAuthorizations).to.be.a(PortainerCeApi.PortainerAuthorizations);
      
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userMembershipsInspect', function() {
        it('should call userMembershipsInspect successfully', function(done) {
          // TODO: uncomment, update parameter values for userMembershipsInspect call and complete the assertions
          /*
          var id = 56;

          instance.userMembershipsInspect(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerTeamMembership);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.role).to.be.a('number');
            expect(data.role).to.be(1);
            expect(data.teamID).to.be.a('number');
            expect(data.teamID).to.be(1);
            expect(data.userID).to.be.a('number');
            expect(data.userID).to.be(1);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userRemoveAPIKey', function() {
        it('should call userRemoveAPIKey successfully', function(done) {
          // TODO: uncomment, update parameter values for userRemoveAPIKey call
          /*
          var id = 56;
          var keyID = 56;

          instance.userRemoveAPIKey(id, keyID, function(error, data, response) {
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
      describe('userUpdate', function() {
        it('should call userUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for userUpdate call and complete the assertions
          /*
          var id = 56;
          var body = new PortainerCeApi.UsersUserUpdatePayload();
          body.newPassword = "asfj2emv";
          body.password = "cg9Wgky3";
          body.role = 2;
          body.theme = new PortainerCeApi.UsersThemePayload();
          body.theme.color = "dark";
          body.useCache = true;
          body.username = "bob";

          instance.userUpdate(id, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerUser);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.role).to.be.a('number');
            expect(data.role).to.be(1);
            expect(data.themeSettings).to.be.a(PortainerCeApi.PortainerUserThemeSettings);
                  expect(data.themeSettings.color).to.be.a('string');
              expect(data.themeSettings.color).to.be("dark");
            expect(data.tokenIssueAt).to.be.a('number');
            expect(data.tokenIssueAt).to.be(1);
            expect(data.useCache).to.be.a('boolean');
            expect(data.useCache).to.be(true);
            expect(data.userTheme).to.be.a('string');
            expect(data.userTheme).to.be("dark");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("bob");
            expect(data.endpointAuthorizations).to.be.a(PortainerCeApi.PortainerEndpointAuthorizations);
                expect(data.portainerAuthorizations).to.be.a(PortainerCeApi.PortainerAuthorizations);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userUpdatePassword', function() {
        it('should call userUpdatePassword successfully', function(done) {
          // TODO: uncomment, update parameter values for userUpdatePassword call
          /*
          var id = 56;
          var body = new PortainerCeApi.UsersUserUpdatePasswordPayload();
          body.newPassword = "new_passwd";
          body.password = "passwd";

          instance.userUpdatePassword(id, body, function(error, data, response) {
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
    });
  });

}));