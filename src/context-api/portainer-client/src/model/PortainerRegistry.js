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
    define(['ApiClient', 'model/PortainerEcrData', 'model/PortainerGitlabRegistryData', 'model/PortainerQuayRegistryData', 'model/PortainerRegistryAccesses', 'model/PortainerRegistryManagementConfiguration', 'model/PortainerTeamAccessPolicies', 'model/PortainerUserAccessPolicies'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PortainerEcrData'), require('./PortainerGitlabRegistryData'), require('./PortainerQuayRegistryData'), require('./PortainerRegistryAccesses'), require('./PortainerRegistryManagementConfiguration'), require('./PortainerTeamAccessPolicies'), require('./PortainerUserAccessPolicies'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.PortainerRegistry = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.PortainerEcrData, root.PortainerCeApi.PortainerGitlabRegistryData, root.PortainerCeApi.PortainerQuayRegistryData, root.PortainerCeApi.PortainerRegistryAccesses, root.PortainerCeApi.PortainerRegistryManagementConfiguration, root.PortainerCeApi.PortainerTeamAccessPolicies, root.PortainerCeApi.PortainerUserAccessPolicies);
  }
}(this, function(ApiClient, PortainerEcrData, PortainerGitlabRegistryData, PortainerQuayRegistryData, PortainerRegistryAccesses, PortainerRegistryManagementConfiguration, PortainerTeamAccessPolicies, PortainerUserAccessPolicies) {
  'use strict';

  /**
   * The PortainerRegistry model module.
   * @module model/PortainerRegistry
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>PortainerRegistry</code>.
   * @alias module:model/PortainerRegistry
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PortainerRegistry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortainerRegistry} obj Optional instance to populate.
   * @return {module:model/PortainerRegistry} The populated <code>PortainerRegistry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AccessToken'))
        obj.accessToken = ApiClient.convertToType(data['AccessToken'], 'String');
      if (data.hasOwnProperty('AccessTokenExpiry'))
        obj.accessTokenExpiry = ApiClient.convertToType(data['AccessTokenExpiry'], 'Number');
      if (data.hasOwnProperty('Authentication'))
        obj.authentication = ApiClient.convertToType(data['Authentication'], 'Boolean');
      if (data.hasOwnProperty('AuthorizedTeams'))
        obj.authorizedTeams = ApiClient.convertToType(data['AuthorizedTeams'], ['Number']);
      if (data.hasOwnProperty('AuthorizedUsers'))
        obj.authorizedUsers = ApiClient.convertToType(data['AuthorizedUsers'], ['Number']);
      if (data.hasOwnProperty('BaseURL'))
        obj.baseURL = ApiClient.convertToType(data['BaseURL'], 'String');
      if (data.hasOwnProperty('Ecr'))
        obj.ecr = PortainerEcrData.constructFromObject(data['Ecr']);
      if (data.hasOwnProperty('Gitlab'))
        obj.gitlab = PortainerGitlabRegistryData.constructFromObject(data['Gitlab']);
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('ManagementConfiguration'))
        obj.managementConfiguration = PortainerRegistryManagementConfiguration.constructFromObject(data['ManagementConfiguration']);
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Password'))
        obj.password = ApiClient.convertToType(data['Password'], 'String');
      if (data.hasOwnProperty('Quay'))
        obj.quay = PortainerQuayRegistryData.constructFromObject(data['Quay']);
      if (data.hasOwnProperty('RegistryAccesses'))
        obj.registryAccesses = PortainerRegistryAccesses.constructFromObject(data['RegistryAccesses']);
      if (data.hasOwnProperty('TeamAccessPolicies'))
        obj.teamAccessPolicies = PortainerTeamAccessPolicies.constructFromObject(data['TeamAccessPolicies']);
      if (data.hasOwnProperty('Type'))
        obj.type = ApiClient.convertToType(data['Type'], 'Number');
      if (data.hasOwnProperty('URL'))
        obj.URL = ApiClient.convertToType(data['URL'], 'String');
      if (data.hasOwnProperty('UserAccessPolicies'))
        obj.userAccessPolicies = PortainerUserAccessPolicies.constructFromObject(data['UserAccessPolicies']);
      if (data.hasOwnProperty('Username'))
        obj.username = ApiClient.convertToType(data['Username'], 'String');
    }
    return obj;
  }

  /**
   * Stores temporary access token
   * @member {String} accessToken
   */
  exports.prototype.accessToken = undefined;

  /**
   * @member {Number} accessTokenExpiry
   */
  exports.prototype.accessTokenExpiry = undefined;

  /**
   * Is authentication against this registry enabled
   * @member {Boolean} authentication
   */
  exports.prototype.authentication = undefined;

  /**
   * Deprecated in DBVersion == 18
   * @member {Array.<Number>} authorizedTeams
   */
  exports.prototype.authorizedTeams = undefined;

  /**
   * Deprecated in DBVersion == 18
   * @member {Array.<Number>} authorizedUsers
   */
  exports.prototype.authorizedUsers = undefined;

  /**
   * Base URL, introduced for ProGet registry
   * @member {String} baseURL
   */
  exports.prototype.baseURL = undefined;

  /**
   * @member {module:model/PortainerEcrData} ecr
   */
  exports.prototype.ecr = undefined;

  /**
   * @member {module:model/PortainerGitlabRegistryData} gitlab
   */
  exports.prototype.gitlab = undefined;

  /**
   * Registry Identifier
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/PortainerRegistryManagementConfiguration} managementConfiguration
   */
  exports.prototype.managementConfiguration = undefined;

  /**
   * Registry Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Password or SecretAccessKey used to authenticate against this registry
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * @member {module:model/PortainerQuayRegistryData} quay
   */
  exports.prototype.quay = undefined;

  /**
   * @member {module:model/PortainerRegistryAccesses} registryAccesses
   */
  exports.prototype.registryAccesses = undefined;

  /**
   * Deprecated in DBVersion == 31
   * @member {module:model/PortainerTeamAccessPolicies} teamAccessPolicies
   */
  exports.prototype.teamAccessPolicies = undefined;

  /**
   * Registry Type (1 - Quay, 2 - Azure, 3 - Custom, 4 - Gitlab, 5 - ProGet, 6 - DockerHub, 7 - ECR)
   * @member {Number} type
   */
  exports.prototype.type = undefined;

  /**
   * URL or IP address of the Docker registry
   * @member {String} URL
   */
  exports.prototype.URL = undefined;

  /**
   * Deprecated fields Deprecated in DBVersion == 31
   * @member {module:model/PortainerUserAccessPolicies} userAccessPolicies
   */
  exports.prototype.userAccessPolicies = undefined;

  /**
   * Username or AccessKeyID used to authenticate against this registry
   * @member {String} username
   */
  exports.prototype.username = undefined;


  return exports;
}));
