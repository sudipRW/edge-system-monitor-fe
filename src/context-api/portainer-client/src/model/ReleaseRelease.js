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
    define(['ApiClient', 'model/ModelObject', 'model/ReleaseChart', 'model/ReleaseHook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelObject'), require('./ReleaseChart'), require('./ReleaseHook'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.ReleaseRelease = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.ModelObject, root.PortainerCeApi.ReleaseChart, root.PortainerCeApi.ReleaseHook);
  }
}(this, function(ApiClient, ModelObject, ReleaseChart, ReleaseHook) {
  'use strict';

  /**
   * The ReleaseRelease model module.
   * @module model/ReleaseRelease
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>ReleaseRelease</code>.
   * @alias module:model/ReleaseRelease
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReleaseRelease</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReleaseRelease} obj Optional instance to populate.
   * @return {module:model/ReleaseRelease} The populated <code>ReleaseRelease</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chart'))
        obj.chart = ReleaseChart.constructFromObject(data['chart']);
      if (data.hasOwnProperty('config'))
        obj.config = ApiClient.convertToType(data['config'], {'String': ModelObject});
      if (data.hasOwnProperty('hooks'))
        obj.hooks = ApiClient.convertToType(data['hooks'], [ReleaseHook]);
      if (data.hasOwnProperty('manifest'))
        obj.manifest = ApiClient.convertToType(data['manifest'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('namespace'))
        obj.namespace = ApiClient.convertToType(data['namespace'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
    }
    return obj;
  }

  /**
   * Info provides information about a release Info *Info `json:\"info,omitempty\"` Chart is the chart that was released.
   * @member {module:model/ReleaseChart} chart
   */
  exports.prototype.chart = undefined;

  /**
   * Config is the set of extra Values added to the chart. These values override the default values inside of the chart.
   * @member {Object.<String, module:model/ModelObject>} config
   */
  exports.prototype.config = undefined;

  /**
   * Hooks are all of the hooks declared for this release.
   * @member {Array.<module:model/ReleaseHook>} hooks
   */
  exports.prototype.hooks = undefined;

  /**
   * Manifest is the string representation of the rendered template.
   * @member {String} manifest
   */
  exports.prototype.manifest = undefined;

  /**
   * Name is the name of the release
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Namespace is the kubernetes namespace of the release.
   * @member {String} namespace
   */
  exports.prototype.namespace = undefined;

  /**
   * Version is an int which represents the revision of the release.
   * @member {Number} version
   */
  exports.prototype.version = undefined;


  return exports;
}));
