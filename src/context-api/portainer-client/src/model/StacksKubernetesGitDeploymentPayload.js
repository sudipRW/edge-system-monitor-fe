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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PortainerAutoUpdateSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PortainerAutoUpdateSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.StacksKubernetesGitDeploymentPayload = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.PortainerAutoUpdateSettings);
  }
}(this, function(ApiClient, PortainerAutoUpdateSettings) {
  'use strict';

  /**
   * The StacksKubernetesGitDeploymentPayload model module.
   * @module model/StacksKubernetesGitDeploymentPayload
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>StacksKubernetesGitDeploymentPayload</code>.
   * @alias module:model/StacksKubernetesGitDeploymentPayload
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StacksKubernetesGitDeploymentPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StacksKubernetesGitDeploymentPayload} obj Optional instance to populate.
   * @return {module:model/StacksKubernetesGitDeploymentPayload} The populated <code>StacksKubernetesGitDeploymentPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('additionalFiles'))
        obj.additionalFiles = ApiClient.convertToType(data['additionalFiles'], ['String']);
      if (data.hasOwnProperty('autoUpdate'))
        obj.autoUpdate = PortainerAutoUpdateSettings.constructFromObject(data['autoUpdate']);
      if (data.hasOwnProperty('composeFormat'))
        obj.composeFormat = ApiClient.convertToType(data['composeFormat'], 'Boolean');
      if (data.hasOwnProperty('manifestFile'))
        obj.manifestFile = ApiClient.convertToType(data['manifestFile'], 'String');
      if (data.hasOwnProperty('namespace'))
        obj.namespace = ApiClient.convertToType(data['namespace'], 'String');
      if (data.hasOwnProperty('repositoryAuthentication'))
        obj.repositoryAuthentication = ApiClient.convertToType(data['repositoryAuthentication'], 'Boolean');
      if (data.hasOwnProperty('repositoryPassword'))
        obj.repositoryPassword = ApiClient.convertToType(data['repositoryPassword'], 'String');
      if (data.hasOwnProperty('repositoryReferenceName'))
        obj.repositoryReferenceName = ApiClient.convertToType(data['repositoryReferenceName'], 'String');
      if (data.hasOwnProperty('repositoryURL'))
        obj.repositoryURL = ApiClient.convertToType(data['repositoryURL'], 'String');
      if (data.hasOwnProperty('repositoryUsername'))
        obj.repositoryUsername = ApiClient.convertToType(data['repositoryUsername'], 'String');
      if (data.hasOwnProperty('stackName'))
        obj.stackName = ApiClient.convertToType(data['stackName'], 'String');
      if (data.hasOwnProperty('tlsskipVerify'))
        obj.tlsskipVerify = ApiClient.convertToType(data['tlsskipVerify'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Array.<String>} additionalFiles
   */
  exports.prototype.additionalFiles = undefined;

  /**
   * @member {module:model/PortainerAutoUpdateSettings} autoUpdate
   */
  exports.prototype.autoUpdate = undefined;

  /**
   * @member {Boolean} composeFormat
   */
  exports.prototype.composeFormat = undefined;

  /**
   * @member {String} manifestFile
   */
  exports.prototype.manifestFile = undefined;

  /**
   * @member {String} namespace
   */
  exports.prototype.namespace = undefined;

  /**
   * @member {Boolean} repositoryAuthentication
   */
  exports.prototype.repositoryAuthentication = undefined;

  /**
   * @member {String} repositoryPassword
   */
  exports.prototype.repositoryPassword = undefined;

  /**
   * @member {String} repositoryReferenceName
   */
  exports.prototype.repositoryReferenceName = undefined;

  /**
   * @member {String} repositoryURL
   */
  exports.prototype.repositoryURL = undefined;

  /**
   * @member {String} repositoryUsername
   */
  exports.prototype.repositoryUsername = undefined;

  /**
   * @member {String} stackName
   */
  exports.prototype.stackName = undefined;

  /**
   * TLSSkipVerify skips SSL verification when cloning the Git repository
   * @member {Boolean} tlsskipVerify
   */
  exports.prototype.tlsskipVerify = undefined;


  return exports;
}));