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
    instance = new PortainerCeApi.HelmApi();
  });

  describe('(package)', function() {
    describe('HelmApi', function() {
      describe('helmDelete', function() {
        it('should call helmDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for helmDelete call
          /*
          var id = 56;
          var release = "release_example";
          var opts = {};
          opts.namespace = "namespace_example";

          instance.helmDelete(id, release, opts, function(error, data, response) {
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
      describe('helmInstall', function() {
        it('should call helmInstall successfully', function(done) {
          // TODO: uncomment, update parameter values for helmInstall call and complete the assertions
          /*
          var id = 56;
          var payload = new PortainerCeApi.HelmInstallChartPayload();
          payload.chart = "";
          payload.name = "";
          payload.namespace = "";
          payload.repo = "";
          payload.values = "";

          instance.helmInstall(id, payload, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.ReleaseRelease);
            expect(data.chart).to.be.a(PortainerCeApi.ReleaseChart);
                  {
                let dataCtr = data.chart.files;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(PortainerCeApi.ReleaseFile);
                  {
                    let dataCtr = data.data;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              expect(data.chart.lock).to.be.a(PortainerCeApi.ReleaseLock);
                    {
                  let dataCtr = data.chart.lock.dependencies;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(PortainerCeApi.ReleaseDependency);
                    expect(data.alias).to.be.a('string');
                    expect(data.alias).to.be("");
                    expect(data.condition).to.be.a('string');
                    expect(data.condition).to.be("");
                    expect(data.enabled).to.be.a('boolean');
                    expect(data.enabled).to.be(false);
                    {
                      let dataCtr = data.importValues;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Object);
                        expect(data).to.be();
                      }
                    }
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.repository).to.be.a('string');
                    expect(data.repository).to.be("");
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
                    expect(data.version).to.be.a('string');
                    expect(data.version).to.be("");
    
                          }
                }
                expect(data.chart.lock.digest).to.be.a('string');
                expect(data.chart.lock.digest).to.be("");
                expect(data.chart.lock.generated).to.be.a('string');
                expect(data.chart.lock.generated).to.be("");
              expect(data.chart.metadata).to.be.a(PortainerCeApi.ReleaseMetadata);
                    {
                  let dataCtr = data.chart.metadata.annotations;
                  expect(dataCtr).to.be.an(Object);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.chart.metadata.apiVersion).to.be.a('string');
                expect(data.chart.metadata.apiVersion).to.be("");
                expect(data.chart.metadata.appVersion).to.be.a('string');
                expect(data.chart.metadata.appVersion).to.be("");
                expect(data.chart.metadata.condition).to.be.a('string');
                expect(data.chart.metadata.condition).to.be("");
                {
                  let dataCtr = data.chart.metadata.dependencies;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(PortainerCeApi.ReleaseDependency);
                    expect(data.alias).to.be.a('string');
                    expect(data.alias).to.be("");
                    expect(data.condition).to.be.a('string');
                    expect(data.condition).to.be("");
                    expect(data.enabled).to.be.a('boolean');
                    expect(data.enabled).to.be(false);
                    {
                      let dataCtr = data.importValues;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Object);
                        expect(data).to.be();
                      }
                    }
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.repository).to.be.a('string');
                    expect(data.repository).to.be("");
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
                    expect(data.version).to.be.a('string');
                    expect(data.version).to.be("");
    
                          }
                }
                expect(data.chart.metadata.deprecated).to.be.a('boolean');
                expect(data.chart.metadata.deprecated).to.be(false);
                expect(data.chart.metadata.description).to.be.a('string');
                expect(data.chart.metadata.description).to.be("");
                expect(data.chart.metadata.home).to.be.a('string');
                expect(data.chart.metadata.home).to.be("");
                expect(data.chart.metadata.icon).to.be.a('string');
                expect(data.chart.metadata.icon).to.be("");
                {
                  let dataCtr = data.chart.metadata.keywords;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.chart.metadata.kubeVersion).to.be.a('string');
                expect(data.chart.metadata.kubeVersion).to.be("");
                {
                  let dataCtr = data.chart.metadata.maintainers;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(PortainerCeApi.ReleaseMaintainer);
                    expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.url).to.be.a('string');
                    expect(data.url).to.be("");
    
                          }
                }
                expect(data.chart.metadata.name).to.be.a('string');
                expect(data.chart.metadata.name).to.be("");
                {
                  let dataCtr = data.chart.metadata.sources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.chart.metadata.tags).to.be.a('string');
                expect(data.chart.metadata.tags).to.be("");
                expect(data.chart.metadata.type).to.be.a('string');
                expect(data.chart.metadata.type).to.be("");
                expect(data.chart.metadata.version).to.be.a('string');
                expect(data.chart.metadata.version).to.be("");
              {
                let dataCtr = data.chart.schema;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.chart.templates;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(PortainerCeApi.ReleaseFile);
                  {
                    let dataCtr = data.data;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              {
                let dataCtr = data.chart.values;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(PortainerCeApi.ModelObject);
  
                        }
              }
            {
              let dataCtr = data.config;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.ModelObject);

                      }
            }
            {
              let dataCtr = data.hooks;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.ReleaseHook);
                {
                  let dataCtr = data.deletePolicies;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                {
                  let dataCtr = data.events;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("");
                expect(data.lastRun).to.be.a(PortainerCeApi.ReleaseHookExecution);
                      expect(data.lastRun.completedAt).to.be.a('string');
                  expect(data.lastRun.completedAt).to.be("");
                  expect(data.lastRun.phase).to.be.a('string');
                  expect(data.lastRun.phase).to.be("");
                  expect(data.lastRun.startedAt).to.be.a('string');
                  expect(data.lastRun.startedAt).to.be("");
                expect(data.manifest).to.be.a('string');
                expect(data.manifest).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.path).to.be.a('string');
                expect(data.path).to.be("");
                expect(data.weight).to.be.a('number');
                expect(data.weight).to.be(0);

                      }
            }
            expect(data.manifest).to.be.a('string');
            expect(data.manifest).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.namespace).to.be.a('string');
            expect(data.namespace).to.be("");
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('helmList', function() {
        it('should call helmList successfully', function(done) {
          // TODO: uncomment, update parameter values for helmList call and complete the assertions
          /*
          var id = 56;
          var opts = {};
          opts.namespace = "namespace_example";
          opts.filter = "filter_example";
          opts.selector = "selector_example";

          instance.helmList(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(PortainerCeApi.ReleaseReleaseElement);
              expect(data.appVersion).to.be.a('string');
              expect(data.appVersion).to.be("");
              expect(data.chart).to.be.a('string');
              expect(data.chart).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.namespace).to.be.a('string');
              expect(data.namespace).to.be("");
              expect(data.revision).to.be.a('string');
              expect(data.revision).to.be("");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("");
              expect(data.updated).to.be.a('string');
              expect(data.updated).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('helmRepoSearch', function() {
        it('should call helmRepoSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for helmRepoSearch call and complete the assertions
          /*
          var repo = "repo_example";

          instance.helmRepoSearch(repo, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('helmShow', function() {
        it('should call helmShow successfully', function(done) {
          // TODO: uncomment, update parameter values for helmShow call and complete the assertions
          /*
          var repo = "repo_example";
          var chart = "chart_example";
          var command = "command_example";

          instance.helmShow(repo, chart, command, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('helmUserRepositoriesList', function() {
        it('should call helmUserRepositoriesList successfully', function(done) {
          // TODO: uncomment, update parameter values for helmUserRepositoriesList call and complete the assertions
          /*
          var id = 56;

          instance.helmUserRepositoriesList(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.UsersHelmUserRepositoryResponse);
            expect(data.globalRepository).to.be.a('string');
            expect(data.globalRepository).to.be("");
            {
              let dataCtr = data.userRepositories;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.PortainerHelmUserRepository);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(1);
                expect(data.URL).to.be.a('string');
                expect(data.URL).to.be("https://charts.bitnami.com/bitnami");
                expect(data.userId).to.be.a('number');
                expect(data.userId).to.be(1);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('helmUserRepositoriesListDeprecated', function() {
        it('should call helmUserRepositoriesListDeprecated successfully', function(done) {
          // TODO: uncomment, update parameter values for helmUserRepositoriesListDeprecated call and complete the assertions
          /*
          var id = 56;

          instance.helmUserRepositoriesListDeprecated(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.HelmHelmUserRepositoryResponse);
            expect(data.globalRepository).to.be.a('string');
            expect(data.globalRepository).to.be("");
            {
              let dataCtr = data.userRepositories;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.PortainerHelmUserRepository);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(1);
                expect(data.URL).to.be.a('string');
                expect(data.URL).to.be("https://charts.bitnami.com/bitnami");
                expect(data.userId).to.be.a('number');
                expect(data.userId).to.be(1);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('helmUserRepositoryCreate', function() {
        it('should call helmUserRepositoryCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for helmUserRepositoryCreate call and complete the assertions
          /*
          var id = 56;
          var payload = new PortainerCeApi.UsersAddHelmRepoUrlPayload();
          payload.url = "";

          instance.helmUserRepositoryCreate(id, payload, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerHelmUserRepository);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.URL).to.be.a('string');
            expect(data.URL).to.be("https://charts.bitnami.com/bitnami");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be(1);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('helmUserRepositoryCreateDeprecated', function() {
        it('should call helmUserRepositoryCreateDeprecated successfully', function(done) {
          // TODO: uncomment, update parameter values for helmUserRepositoryCreateDeprecated call and complete the assertions
          /*
          var id = 56;
          var payload = new PortainerCeApi.HelmAddHelmRepoUrlPayload();
          payload.url = "";

          instance.helmUserRepositoryCreateDeprecated(id, payload, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerHelmUserRepository);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.URL).to.be.a('string');
            expect(data.URL).to.be("https://charts.bitnami.com/bitnami");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be(1);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('helmUserRepositoryDelete', function() {
        it('should call helmUserRepositoryDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for helmUserRepositoryDelete call
          /*
          var id = 56;
          var repositoryID = 56;

          instance.helmUserRepositoryDelete(id, repositoryID, function(error, data, response) {
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