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
    define(['ApiClient', 'model/PortainerGlobalDeploymentOptions', 'model/PortainerInternalAuthSettings', 'model/PortainerLDAPSettings', 'model/PortainerOAuthSettings', 'model/PortainerPair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PortainerGlobalDeploymentOptions'), require('./PortainerInternalAuthSettings'), require('./PortainerLDAPSettings'), require('./PortainerOAuthSettings'), require('./PortainerPair'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.SettingsSettingsUpdatePayload = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.PortainerGlobalDeploymentOptions, root.PortainerCeApi.PortainerInternalAuthSettings, root.PortainerCeApi.PortainerLDAPSettings, root.PortainerCeApi.PortainerOAuthSettings, root.PortainerCeApi.PortainerPair);
  }
}(this, function(ApiClient, PortainerGlobalDeploymentOptions, PortainerInternalAuthSettings, PortainerLDAPSettings, PortainerOAuthSettings, PortainerPair) {
  'use strict';

  /**
   * The SettingsSettingsUpdatePayload model module.
   * @module model/SettingsSettingsUpdatePayload
   * @version 2.21.3
   */

  /**
   * Constructs a new <code>SettingsSettingsUpdatePayload</code>.
   * @alias module:model/SettingsSettingsUpdatePayload
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SettingsSettingsUpdatePayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SettingsSettingsUpdatePayload} obj Optional instance to populate.
   * @return {module:model/SettingsSettingsUpdatePayload} The populated <code>SettingsSettingsUpdatePayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EdgePortainerURL'))
        obj.edgePortainerURL = ApiClient.convertToType(data['EdgePortainerURL'], 'String');
      if (data.hasOwnProperty('ShowKomposeBuildOption'))
        obj.showKomposeBuildOption = ApiClient.convertToType(data['ShowKomposeBuildOption'], 'Boolean');
      if (data.hasOwnProperty('authenticationMethod'))
        obj.authenticationMethod = ApiClient.convertToType(data['authenticationMethod'], 'Number');
      if (data.hasOwnProperty('blackListedLabels'))
        obj.blackListedLabels = ApiClient.convertToType(data['blackListedLabels'], [PortainerPair]);
      if (data.hasOwnProperty('edgeAgentCheckinInterval'))
        obj.edgeAgentCheckinInterval = ApiClient.convertToType(data['edgeAgentCheckinInterval'], 'Number');
      if (data.hasOwnProperty('enableEdgeComputeFeatures'))
        obj.enableEdgeComputeFeatures = ApiClient.convertToType(data['enableEdgeComputeFeatures'], 'Boolean');
      if (data.hasOwnProperty('enableTelemetry'))
        obj.enableTelemetry = ApiClient.convertToType(data['enableTelemetry'], 'Boolean');
      if (data.hasOwnProperty('enforceEdgeID'))
        obj.enforceEdgeID = ApiClient.convertToType(data['enforceEdgeID'], 'Boolean');
      if (data.hasOwnProperty('globalDeploymentOptions'))
        obj.globalDeploymentOptions = PortainerGlobalDeploymentOptions.constructFromObject(data['globalDeploymentOptions']);
      if (data.hasOwnProperty('helmRepositoryURL'))
        obj.helmRepositoryURL = ApiClient.convertToType(data['helmRepositoryURL'], 'String');
      if (data.hasOwnProperty('internalAuthSettings'))
        obj.internalAuthSettings = PortainerInternalAuthSettings.constructFromObject(data['internalAuthSettings']);
      if (data.hasOwnProperty('kubeconfigExpiry'))
        obj.kubeconfigExpiry = ApiClient.convertToType(data['kubeconfigExpiry'], 'String');
      if (data.hasOwnProperty('kubectlShellImage'))
        obj.kubectlShellImage = ApiClient.convertToType(data['kubectlShellImage'], 'String');
      if (data.hasOwnProperty('ldapsettings'))
        obj.ldapsettings = PortainerLDAPSettings.constructFromObject(data['ldapsettings']);
      if (data.hasOwnProperty('logoURL'))
        obj.logoURL = ApiClient.convertToType(data['logoURL'], 'String');
      if (data.hasOwnProperty('oauthSettings'))
        obj.oauthSettings = PortainerOAuthSettings.constructFromObject(data['oauthSettings']);
      if (data.hasOwnProperty('snapshotInterval'))
        obj.snapshotInterval = ApiClient.convertToType(data['snapshotInterval'], 'String');
      if (data.hasOwnProperty('templatesURL'))
        obj.templatesURL = ApiClient.convertToType(data['templatesURL'], 'String');
      if (data.hasOwnProperty('trustOnFirstConnect'))
        obj.trustOnFirstConnect = ApiClient.convertToType(data['trustOnFirstConnect'], 'Boolean');
      if (data.hasOwnProperty('userSessionTimeout'))
        obj.userSessionTimeout = ApiClient.convertToType(data['userSessionTimeout'], 'String');
    }
    return obj;
  }

  /**
   * EdgePortainerURL is the URL that is exposed to edge agents
   * @member {String} edgePortainerURL
   */
  exports.prototype.edgePortainerURL = undefined;

  /**
   * Show the Kompose build option (discontinued in 2.18)
   * @member {Boolean} showKomposeBuildOption
   */
  exports.prototype.showKomposeBuildOption = undefined;

  /**
   * Active authentication method for the Portainer instance. Valid values are: 1 for internal, 2 for LDAP, or 3 for oauth
   * @member {Number} authenticationMethod
   */
  exports.prototype.authenticationMethod = undefined;

  /**
   * A list of label name & value that will be used to hide containers when querying containers
   * @member {Array.<module:model/PortainerPair>} blackListedLabels
   */
  exports.prototype.blackListedLabels = undefined;

  /**
   * @member {Number} edgeAgentCheckinInterval
   */
  exports.prototype.edgeAgentCheckinInterval = undefined;

  /**
   * Whether edge compute features are enabled
   * @member {Boolean} enableEdgeComputeFeatures
   */
  exports.prototype.enableEdgeComputeFeatures = undefined;

  /**
   * Whether telemetry is enabled
   * @member {Boolean} enableTelemetry
   */
  exports.prototype.enableTelemetry = undefined;

  /**
   * EnforceEdgeID makes Portainer store the Edge ID instead of accepting anyone
   * @member {Boolean} enforceEdgeID
   */
  exports.prototype.enforceEdgeID = undefined;

  /**
   * Deployment options for encouraging deployment as code
   * @member {module:model/PortainerGlobalDeploymentOptions} globalDeploymentOptions
   */
  exports.prototype.globalDeploymentOptions = undefined;

  /**
   * Helm repository URL
   * @member {String} helmRepositoryURL
   */
  exports.prototype.helmRepositoryURL = undefined;

  /**
   * @member {module:model/PortainerInternalAuthSettings} internalAuthSettings
   */
  exports.prototype.internalAuthSettings = undefined;

  /**
   * The expiry of a Kubeconfig
   * @member {String} kubeconfigExpiry
   * @default '0'
   */
  exports.prototype.kubeconfigExpiry = '0';

  /**
   * Kubectl Shell Image
   * @member {String} kubectlShellImage
   */
  exports.prototype.kubectlShellImage = undefined;

  /**
   * @member {module:model/PortainerLDAPSettings} ldapsettings
   */
  exports.prototype.ldapsettings = undefined;

  /**
   * URL to a logo that will be displayed on the login page as well as on top of the sidebar. Will use default Portainer logo when value is empty string
   * @member {String} logoURL
   */
  exports.prototype.logoURL = undefined;

  /**
   * @member {module:model/PortainerOAuthSettings} oauthSettings
   */
  exports.prototype.oauthSettings = undefined;

  /**
   * The interval in which environment(endpoint) snapshots are created
   * @member {String} snapshotInterval
   */
  exports.prototype.snapshotInterval = undefined;

  /**
   * URL to the templates that will be displayed in the UI when navigating to App Templates
   * @member {String} templatesURL
   */
  exports.prototype.templatesURL = undefined;

  /**
   * TrustOnFirstConnect makes Portainer accepting edge agent connection by default
   * @member {Boolean} trustOnFirstConnect
   */
  exports.prototype.trustOnFirstConnect = undefined;

  /**
   * The duration of a user session
   * @member {String} userSessionTimeout
   */
  exports.prototype.userSessionTimeout = undefined;


  return exports;
}));
