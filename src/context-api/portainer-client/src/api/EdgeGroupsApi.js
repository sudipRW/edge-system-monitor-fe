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
    define(['ApiClient', 'model/EdgegroupsDecoratedEdgeGroup', 'model/EdgegroupsEdgeGroupCreatePayload', 'model/EdgegroupsEdgeGroupUpdatePayload', 'model/PortainerEdgeGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EdgegroupsDecoratedEdgeGroup'), require('../model/EdgegroupsEdgeGroupCreatePayload'), require('../model/EdgegroupsEdgeGroupUpdatePayload'), require('../model/PortainerEdgeGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerCeApi) {
      root.PortainerCeApi = {};
    }
    root.PortainerCeApi.EdgeGroupsApi = factory(root.PortainerCeApi.ApiClient, root.PortainerCeApi.EdgegroupsDecoratedEdgeGroup, root.PortainerCeApi.EdgegroupsEdgeGroupCreatePayload, root.PortainerCeApi.EdgegroupsEdgeGroupUpdatePayload, root.PortainerCeApi.PortainerEdgeGroup);
  }
}(this, function(ApiClient, EdgegroupsDecoratedEdgeGroup, EdgegroupsEdgeGroupCreatePayload, EdgegroupsEdgeGroupUpdatePayload, PortainerEdgeGroup) {
  'use strict';

  /**
   * EdgeGroups service.
   * @module api/EdgeGroupsApi
   * @version 2.21.3
   */

  /**
   * Constructs a new EdgeGroupsApi. 
   * @alias module:api/EdgeGroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the edgeGroupCreate operation.
     * @callback module:api/EdgeGroupsApi~edgeGroupCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerEdgeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an EdgeGroup
     * **Access policy**: administrator
     * @param {module:model/EdgegroupsEdgeGroupCreatePayload} body EdgeGroup data
     * @param {module:api/EdgeGroupsApi~edgeGroupCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerEdgeGroup}
     */
    this.edgeGroupCreate = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling edgeGroupCreate");
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
      var returnType = PortainerEdgeGroup;

      return this.apiClient.callApi(
        '/edge_groups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeGroupDelete operation.
     * @callback module:api/EdgeGroupsApi~edgeGroupDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an EdgeGroup
     * **Access policy**: administrator
     * @param {Number} id EdgeGroup Id
     * @param {module:api/EdgeGroupsApi~edgeGroupDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.edgeGroupDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeGroupDelete");
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
        '/edge_groups/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeGroupInspect operation.
     * @callback module:api/EdgeGroupsApi~edgeGroupInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerEdgeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspects an EdgeGroup
     * **Access policy**: administrator
     * @param {Number} id EdgeGroup Id
     * @param {module:api/EdgeGroupsApi~edgeGroupInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerEdgeGroup}
     */
    this.edgeGroupInspect = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling edgeGroupInspect");
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
      var returnType = PortainerEdgeGroup;

      return this.apiClient.callApi(
        '/edge_groups/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the edgeGroupList operation.
     * @callback module:api/EdgeGroupsApi~edgeGroupListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EdgegroupsDecoratedEdgeGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list EdgeGroups
     * **Access policy**: administrator
     * @param {module:api/EdgeGroupsApi~edgeGroupListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EdgegroupsDecoratedEdgeGroup>}
     */
    this.edgeGroupList = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [EdgegroupsDecoratedEdgeGroup];

      return this.apiClient.callApi(
        '/edge_groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the egeGroupUpdate operation.
     * @callback module:api/EdgeGroupsApi~egeGroupUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortainerEdgeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an EdgeGroup
     * **Access policy**: administrator
     * @param {Number} id EdgeGroup Id
     * @param {module:model/EdgegroupsEdgeGroupUpdatePayload} body EdgeGroup data
     * @param {module:api/EdgeGroupsApi~egeGroupUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortainerEdgeGroup}
     */
    this.egeGroupUpdate = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling egeGroupUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling egeGroupUpdate");
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
      var returnType = PortainerEdgeGroup;

      return this.apiClient.callApi(
        '/edge_groups/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
