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
    define(['ApiClient', 'model/PortainerDockerSnapshotRaw'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PortainerDockerSnapshotRaw'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.PortainerDockerSnapshot = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.PortainerDockerSnapshotRaw);
  }
}(this, function(ApiClient, PortainerDockerSnapshotRaw) {
  'use strict';

  /**
   * The PortainerDockerSnapshot model module.
   * @module model/PortainerDockerSnapshot
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>PortainerDockerSnapshot</code>.
   * @alias module:model/PortainerDockerSnapshot
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PortainerDockerSnapshot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortainerDockerSnapshot} obj Optional instance to populate.
   * @return {module:model/PortainerDockerSnapshot} The populated <code>PortainerDockerSnapshot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ContainerCount'))
        obj.containerCount = ApiClient.convertToType(data['ContainerCount'], 'Number');
      if (data.hasOwnProperty('DockerSnapshotRaw'))
        obj.dockerSnapshotRaw = PortainerDockerSnapshotRaw.constructFromObject(data['DockerSnapshotRaw']);
      if (data.hasOwnProperty('DockerVersion'))
        obj.dockerVersion = ApiClient.convertToType(data['DockerVersion'], 'String');
      if (data.hasOwnProperty('GpuUseAll'))
        obj.gpuUseAll = ApiClient.convertToType(data['GpuUseAll'], 'Boolean');
      if (data.hasOwnProperty('GpuUseList'))
        obj.gpuUseList = ApiClient.convertToType(data['GpuUseList'], ['String']);
      if (data.hasOwnProperty('HealthyContainerCount'))
        obj.healthyContainerCount = ApiClient.convertToType(data['HealthyContainerCount'], 'Number');
      if (data.hasOwnProperty('ImageCount'))
        obj.imageCount = ApiClient.convertToType(data['ImageCount'], 'Number');
      if (data.hasOwnProperty('NodeCount'))
        obj.nodeCount = ApiClient.convertToType(data['NodeCount'], 'Number');
      if (data.hasOwnProperty('RunningContainerCount'))
        obj.runningContainerCount = ApiClient.convertToType(data['RunningContainerCount'], 'Number');
      if (data.hasOwnProperty('ServiceCount'))
        obj.serviceCount = ApiClient.convertToType(data['ServiceCount'], 'Number');
      if (data.hasOwnProperty('StackCount'))
        obj.stackCount = ApiClient.convertToType(data['StackCount'], 'Number');
      if (data.hasOwnProperty('StoppedContainerCount'))
        obj.stoppedContainerCount = ApiClient.convertToType(data['StoppedContainerCount'], 'Number');
      if (data.hasOwnProperty('Swarm'))
        obj.swarm = ApiClient.convertToType(data['Swarm'], 'Boolean');
      if (data.hasOwnProperty('Time'))
        obj.time = ApiClient.convertToType(data['Time'], 'Number');
      if (data.hasOwnProperty('TotalCPU'))
        obj.totalCPU = ApiClient.convertToType(data['TotalCPU'], 'Number');
      if (data.hasOwnProperty('TotalMemory'))
        obj.totalMemory = ApiClient.convertToType(data['TotalMemory'], 'Number');
      if (data.hasOwnProperty('UnhealthyContainerCount'))
        obj.unhealthyContainerCount = ApiClient.convertToType(data['UnhealthyContainerCount'], 'Number');
      if (data.hasOwnProperty('VolumeCount'))
        obj.volumeCount = ApiClient.convertToType(data['VolumeCount'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} containerCount
   */
  exports.prototype.containerCount = undefined;

  /**
   * @member {module:model/PortainerDockerSnapshotRaw} dockerSnapshotRaw
   */
  exports.prototype.dockerSnapshotRaw = undefined;

  /**
   * @member {String} dockerVersion
   */
  exports.prototype.dockerVersion = undefined;

  /**
   * @member {Boolean} gpuUseAll
   */
  exports.prototype.gpuUseAll = undefined;

  /**
   * @member {Array.<String>} gpuUseList
   */
  exports.prototype.gpuUseList = undefined;

  /**
   * @member {Number} healthyContainerCount
   */
  exports.prototype.healthyContainerCount = undefined;

  /**
   * @member {Number} imageCount
   */
  exports.prototype.imageCount = undefined;

  /**
   * @member {Number} nodeCount
   */
  exports.prototype.nodeCount = undefined;

  /**
   * @member {Number} runningContainerCount
   */
  exports.prototype.runningContainerCount = undefined;

  /**
   * @member {Number} serviceCount
   */
  exports.prototype.serviceCount = undefined;

  /**
   * @member {Number} stackCount
   */
  exports.prototype.stackCount = undefined;

  /**
   * @member {Number} stoppedContainerCount
   */
  exports.prototype.stoppedContainerCount = undefined;

  /**
   * @member {Boolean} swarm
   */
  exports.prototype.swarm = undefined;

  /**
   * @member {Number} time
   */
  exports.prototype.time = undefined;

  /**
   * @member {Number} totalCPU
   */
  exports.prototype.totalCPU = undefined;

  /**
   * @member {Number} totalMemory
   */
  exports.prototype.totalMemory = undefined;

  /**
   * @member {Number} unhealthyContainerCount
   */
  exports.prototype.unhealthyContainerCount = undefined;

  /**
   * @member {Number} volumeCount
   */
  exports.prototype.volumeCount = undefined;


  return exports;
}));
