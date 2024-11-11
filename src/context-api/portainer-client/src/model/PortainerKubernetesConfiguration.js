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
    define(['ApiClient', 'model/PortainerKubernetesIngressClassConfig', 'model/PortainerKubernetesStorageClassConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PortainerKubernetesIngressClassConfig'), require('./PortainerKubernetesStorageClassConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.PortainerKubernetesConfiguration = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.PortainerKubernetesIngressClassConfig, root.PortainerCeApi.PortainerKubernetesStorageClassConfig);
  }
}(this, function(ApiClient, PortainerKubernetesIngressClassConfig, PortainerKubernetesStorageClassConfig) {
  'use strict';

  /**
   * The PortainerKubernetesConfiguration model module.
   * @module model/PortainerKubernetesConfiguration
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>PortainerKubernetesConfiguration</code>.
   * @alias module:model/PortainerKubernetesConfiguration
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PortainerKubernetesConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortainerKubernetesConfiguration} obj Optional instance to populate.
   * @return {module:model/PortainerKubernetesConfiguration} The populated <code>PortainerKubernetesConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AllowNoneIngressClass'))
        obj.allowNoneIngressClass = ApiClient.convertToType(data['AllowNoneIngressClass'], 'Boolean');
      if (data.hasOwnProperty('EnableResourceOverCommit'))
        obj.enableResourceOverCommit = ApiClient.convertToType(data['EnableResourceOverCommit'], 'Boolean');
      if (data.hasOwnProperty('IngressAvailabilityPerNamespace'))
        obj.ingressAvailabilityPerNamespace = ApiClient.convertToType(data['IngressAvailabilityPerNamespace'], 'Boolean');
      if (data.hasOwnProperty('IngressClasses'))
        obj.ingressClasses = ApiClient.convertToType(data['IngressClasses'], [PortainerKubernetesIngressClassConfig]);
      if (data.hasOwnProperty('ResourceOverCommitPercentage'))
        obj.resourceOverCommitPercentage = ApiClient.convertToType(data['ResourceOverCommitPercentage'], 'Number');
      if (data.hasOwnProperty('RestrictDefaultNamespace'))
        obj.restrictDefaultNamespace = ApiClient.convertToType(data['RestrictDefaultNamespace'], 'Boolean');
      if (data.hasOwnProperty('StorageClasses'))
        obj.storageClasses = ApiClient.convertToType(data['StorageClasses'], [PortainerKubernetesStorageClassConfig]);
      if (data.hasOwnProperty('UseLoadBalancer'))
        obj.useLoadBalancer = ApiClient.convertToType(data['UseLoadBalancer'], 'Boolean');
      if (data.hasOwnProperty('UseServerMetrics'))
        obj.useServerMetrics = ApiClient.convertToType(data['UseServerMetrics'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} allowNoneIngressClass
   */
  exports.prototype.allowNoneIngressClass = undefined;

  /**
   * @member {Boolean} enableResourceOverCommit
   */
  exports.prototype.enableResourceOverCommit = undefined;

  /**
   * @member {Boolean} ingressAvailabilityPerNamespace
   */
  exports.prototype.ingressAvailabilityPerNamespace = undefined;

  /**
   * @member {Array.<module:model/PortainerKubernetesIngressClassConfig>} ingressClasses
   */
  exports.prototype.ingressClasses = undefined;

  /**
   * @member {Number} resourceOverCommitPercentage
   */
  exports.prototype.resourceOverCommitPercentage = undefined;

  /**
   * @member {Boolean} restrictDefaultNamespace
   */
  exports.prototype.restrictDefaultNamespace = undefined;

  /**
   * @member {Array.<module:model/PortainerKubernetesStorageClassConfig>} storageClasses
   */
  exports.prototype.storageClasses = undefined;

  /**
   * @member {Boolean} useLoadBalancer
   */
  exports.prototype.useLoadBalancer = undefined;

  /**
   * @member {Boolean} useServerMetrics
   */
  exports.prototype.useServerMetrics = undefined;


  return exports;
}));