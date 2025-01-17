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
    define(['ApiClient', 'model/PortainerTeam', 'model/TeamsTeamCreatePayload', 'model/TeamsTeamUpdatePayload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PortainerTeam'), require('../model/TeamsTeamCreatePayload'), require('../model/TeamsTeamUpdatePayload'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.TeamsApi = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.PortainerTeam, root.PortainerCeApi.TeamsTeamCreatePayload, root.PortainerCeApi.TeamsTeamUpdatePayload);
  }
}(this, function(ApiClient, PortainerTeam, TeamsTeamCreatePayload, TeamsTeamUpdatePayload) {
  'use strict';

  /**
   * Teams service.
   * @module api/TeamsApi
   * @version 2.21.3
   */

  /**
   * Constructs a new TeamsApi. 
   * @alias module:api/TeamsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the teamCreate operation.
     * @callback module:api/TeamsApi~teamCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerTeam} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new team
     * Create a new team. **Access policy**: administrator
     * @param {module:model/TeamsTeamCreatePayload} body details
     * @param {module:api/TeamsApi~teamCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerTeam}
     */
    this.teamCreate = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling teamCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PortainerTeam;

      return this.apiClient.callApi(
        '/teams', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamDelete operation.
     * @callback module:api/TeamsApi~teamDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a team
     * Remove a team. **Access policy**: administrator
     * @param {Number} id Team Id
     * @param {module:api/TeamsApi~teamDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.teamDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/teams/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamInspect operation.
     * @callback module:api/TeamsApi~teamInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerTeam} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a team
     * Retrieve details about a team. Access is only available for administrator and leaders of that team. **Access policy**: administrator
     * @param {Number} id Team identifier
     * @param {module:api/TeamsApi~teamInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerTeam}
     */
    this.teamInspect = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamInspect");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PortainerTeam;

      return this.apiClient.callApi(
        '/teams/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamList operation.
     * @callback module:api/TeamsApi~teamListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PortainerTeam>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List teams
     * List teams. For non-administrator users, will only list the teams they are member of. **Access policy**: restricted
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.onlyLedTeams Only list teams that the user is leader of
     * @param {Number} opts.environmentId Identifier of the environment(endpoint) that will be used to filter the authorized teams
     * @param {module:api/TeamsApi~teamListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PortainerTeam>}
     */
    this.teamList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'onlyLedTeams': opts['onlyLedTeams'],
        'environmentId': opts['environmentId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PortainerTeam];

      return this.apiClient.callApi(
        '/teams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamUpdate operation.
     * @callback module:api/TeamsApi~teamUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerTeam} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a team
     * Update a team. **Access policy**: administrator
     * @param {Number} id Team identifier
     * @param {module:model/TeamsTeamUpdatePayload} body Team details
     * @param {module:api/TeamsApi~teamUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerTeam}
     */
    this.teamUpdate = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling teamUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth', 'jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PortainerTeam;

      return this.apiClient.callApi(
        '/teams/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
