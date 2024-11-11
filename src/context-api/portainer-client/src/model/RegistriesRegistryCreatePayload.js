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
    define(['ApiClient', 'model/PortainerEcrData', 'model/PortainerGitlabRegistryData', 'model/PortainerQuayRegistryData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PortainerEcrData'), require('./PortainerGitlabRegistryData'), require('./PortainerQuayRegistryData'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.RegistriesRegistryCreatePayload = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.PortainerEcrData, root.PortainerCeApi.PortainerGitlabRegistryData, root.PortainerCeApi.PortainerQuayRegistryData);
  }
}(this, function(ApiClient, PortainerEcrData, PortainerGitlabRegistryData, PortainerQuayRegistryData) {
  'use strict';

  /**
   * The RegistriesRegistryCreatePayload model module.
   * @module model/RegistriesRegistryCreatePayload
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>RegistriesRegistryCreatePayload</code>.
   * @alias module:model/RegistriesRegistryCreatePayload
   * @class
   * @param authentication {Boolean} Is authentication against this registry enabled
   * @param name {String} Name that will be used to identify this registry
   * @param type {Number} Registry Type. Valid values are:  1 (Quay.io),  2 (Azure container registry),  3 (custom registry),  4 (Gitlab registry),  5 (ProGet registry),  6 (DockerHub)  7 (ECR)
   * @param url {String} URL or IP address of the Docker registry
   */
  var exports = function(authentication, name, type, url) {
    this.authentication = authentication;
    this.name = name;
    this.type = type;
    this.url = url;
  };

  /**
   * Constructs a <code>RegistriesRegistryCreatePayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegistriesRegistryCreatePayload} obj Optional instance to populate.
   * @return {module:model/RegistriesRegistryCreatePayload} The populated <code>RegistriesRegistryCreatePayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('authentication'))
        obj.authentication = ApiClient.convertToType(data['authentication'], 'Boolean');
      if (data.hasOwnProperty('baseURL'))
        obj.baseURL = ApiClient.convertToType(data['baseURL'], 'String');
      if (data.hasOwnProperty('ecr'))
        obj.ecr = PortainerEcrData.constructFromObject(data['ecr']);
      if (data.hasOwnProperty('gitlab'))
        obj.gitlab = PortainerGitlabRegistryData.constructFromObject(data['gitlab']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('quay'))
        obj.quay = PortainerQuayRegistryData.constructFromObject(data['quay']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }

  /**
   * Is authentication against this registry enabled
   * @member {Boolean} authentication
   */
  exports.prototype.authentication = undefined;

  /**
   * BaseURL required for ProGet registry
   * @member {String} baseURL
   */
  exports.prototype.baseURL = undefined;

  /**
   * ECR specific details, required when type = 7
   * @member {module:model/PortainerEcrData} ecr
   */
  exports.prototype.ecr = undefined;

  /**
   * Gitlab specific details, required when type = 4
   * @member {module:model/PortainerGitlabRegistryData} gitlab
   */
  exports.prototype.gitlab = undefined;

  /**
   * Name that will be used to identify this registry
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Password used to authenticate against this registry. required when Authentication is true
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * Quay specific details, required when type = 1
   * @member {module:model/PortainerQuayRegistryData} quay
   */
  exports.prototype.quay = undefined;

  /**
   * Registry Type. Valid values are:  1 (Quay.io),  2 (Azure container registry),  3 (custom registry),  4 (Gitlab registry),  5 (ProGet registry),  6 (DockerHub)  7 (ECR)
   * @member {Number} type
   */
  exports.prototype.type = undefined;

  /**
   * URL or IP address of the Docker registry
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Username used to authenticate against this registry. Required when Authentication is true
   * @member {String} username
   */
  exports.prototype.username = undefined;


  return exports;
}));