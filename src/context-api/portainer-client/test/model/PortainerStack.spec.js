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

  describe('(package)', function() {
    describe('PortainerStack', function() {
      beforeEach(function() {
        instance = new PortainerCeApi.PortainerStack();
      });

      it('should create an instance of PortainerStack', function() {
        // TODO: update the code to test PortainerStack
        expect(instance).to.be.a(PortainerCeApi.PortainerStack);
      });

      it('should have the property additionalFiles (base name: "AdditionalFiles")', function() {
        // TODO: update the code to test the property additionalFiles
        expect(instance).to.have.property('additionalFiles');
        // expect(instance.additionalFiles).to.be(expectedValueLiteral);
      });

      it('should have the property autoUpdate (base name: "AutoUpdate")', function() {
        // TODO: update the code to test the property autoUpdate
        expect(instance).to.have.property('autoUpdate');
        // expect(instance.autoUpdate).to.be(expectedValueLiteral);
      });

      it('should have the property endpointId (base name: "EndpointId")', function() {
        // TODO: update the code to test the property endpointId
        expect(instance).to.have.property('endpointId');
        // expect(instance.endpointId).to.be(expectedValueLiteral);
      });

      it('should have the property entryPoint (base name: "EntryPoint")', function() {
        // TODO: update the code to test the property entryPoint
        expect(instance).to.have.property('entryPoint');
        // expect(instance.entryPoint).to.be(expectedValueLiteral);
      });

      it('should have the property env (base name: "Env")', function() {
        // TODO: update the code to test the property env
        expect(instance).to.have.property('env');
        // expect(instance.env).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property option (base name: "Option")', function() {
        // TODO: update the code to test the property option
        expect(instance).to.have.property('option');
        // expect(instance.option).to.be(expectedValueLiteral);
      });

      it('should have the property resourceControl (base name: "ResourceControl")', function() {
        // TODO: update the code to test the property resourceControl
        expect(instance).to.have.property('resourceControl');
        // expect(instance.resourceControl).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "Status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property swarmId (base name: "SwarmId")', function() {
        // TODO: update the code to test the property swarmId
        expect(instance).to.have.property('swarmId');
        // expect(instance.swarmId).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "Type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "createdBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property creationDate (base name: "creationDate")', function() {
        // TODO: update the code to test the property creationDate
        expect(instance).to.have.property('creationDate');
        // expect(instance.creationDate).to.be(expectedValueLiteral);
      });

      it('should have the property fromAppTemplate (base name: "fromAppTemplate")', function() {
        // TODO: update the code to test the property fromAppTemplate
        expect(instance).to.have.property('fromAppTemplate');
        // expect(instance.fromAppTemplate).to.be(expectedValueLiteral);
      });

      it('should have the property gitConfig (base name: "gitConfig")', function() {
        // TODO: update the code to test the property gitConfig
        expect(instance).to.have.property('gitConfig');
        // expect(instance.gitConfig).to.be(expectedValueLiteral);
      });

      it('should have the property isComposeFormat (base name: "isComposeFormat")', function() {
        // TODO: update the code to test the property isComposeFormat
        expect(instance).to.have.property('isComposeFormat');
        // expect(instance.isComposeFormat).to.be(expectedValueLiteral);
      });

      it('should have the property namespace (base name: "namespace")', function() {
        // TODO: update the code to test the property namespace
        expect(instance).to.have.property('namespace');
        // expect(instance.namespace).to.be(expectedValueLiteral);
      });

      it('should have the property projectPath (base name: "projectPath")', function() {
        // TODO: update the code to test the property projectPath
        expect(instance).to.have.property('projectPath');
        // expect(instance.projectPath).to.be(expectedValueLiteral);
      });

      it('should have the property updateDate (base name: "updateDate")', function() {
        // TODO: update the code to test the property updateDate
        expect(instance).to.have.property('updateDate');
        // expect(instance.updateDate).to.be(expectedValueLiteral);
      });

      it('should have the property updatedBy (base name: "updatedBy")', function() {
        // TODO: update the code to test the property updatedBy
        expect(instance).to.have.property('updatedBy');
        // expect(instance.updatedBy).to.be(expectedValueLiteral);
      });

    });
  });

}));