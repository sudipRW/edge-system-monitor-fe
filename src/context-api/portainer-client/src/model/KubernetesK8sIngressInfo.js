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
    define(['ApiClient', 'model/KubernetesK8sIngressPath', 'model/KubernetesK8sIngressTLS'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KubernetesK8sIngressPath'), require('./KubernetesK8sIngressTLS'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.KubernetesK8sIngressInfo = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.KubernetesK8sIngressPath, root.PortainerCeApi.KubernetesK8sIngressTLS);
  }
}(this, function(ApiClient, KubernetesK8sIngressPath, KubernetesK8sIngressTLS) {
  'use strict';

  /**
   * The KubernetesK8sIngressInfo model module.
   * @module model/KubernetesK8sIngressInfo
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>KubernetesK8sIngressInfo</code>.
   * @alias module:model/KubernetesK8sIngressInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KubernetesK8sIngressInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KubernetesK8sIngressInfo} obj Optional instance to populate.
   * @return {module:model/KubernetesK8sIngressInfo} The populated <code>KubernetesK8sIngressInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Annotations'))
        obj.annotations = ApiClient.convertToType(data['Annotations'], {'String': 'String'});
      if (data.hasOwnProperty('ClassName'))
        obj.className = ApiClient.convertToType(data['ClassName'], 'String');
      if (data.hasOwnProperty('CreationDate'))
        obj.creationDate = ApiClient.convertToType(data['CreationDate'], 'String');
      if (data.hasOwnProperty('Hosts'))
        obj.hosts = ApiClient.convertToType(data['Hosts'], ['String']);
      if (data.hasOwnProperty('Labels'))
        obj.labels = ApiClient.convertToType(data['Labels'], {'String': 'String'});
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Namespace'))
        obj.namespace = ApiClient.convertToType(data['Namespace'], 'String');
      if (data.hasOwnProperty('Paths'))
        obj.paths = ApiClient.convertToType(data['Paths'], [KubernetesK8sIngressPath]);
      if (data.hasOwnProperty('TLS'))
        obj.TLS = ApiClient.convertToType(data['TLS'], [KubernetesK8sIngressTLS]);
      if (data.hasOwnProperty('Type'))
        obj.type = ApiClient.convertToType(data['Type'], 'String');
      if (data.hasOwnProperty('UID'))
        obj.UID = ApiClient.convertToType(data['UID'], 'String');
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} annotations
   */
  exports.prototype.annotations = undefined;

  /**
   * @member {String} className
   */
  exports.prototype.className = undefined;

  /**
   * @member {String} creationDate
   */
  exports.prototype.creationDate = undefined;

  /**
   * @member {Array.<String>} hosts
   */
  exports.prototype.hosts = undefined;

  /**
   * @member {Object.<String, String>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} namespace
   */
  exports.prototype.namespace = undefined;

  /**
   * @member {Array.<module:model/KubernetesK8sIngressPath>} paths
   */
  exports.prototype.paths = undefined;

  /**
   * @member {Array.<module:model/KubernetesK8sIngressTLS>} TLS
   */
  exports.prototype.TLS = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} UID
   */
  exports.prototype.UID = undefined;


  return exports;
}));
