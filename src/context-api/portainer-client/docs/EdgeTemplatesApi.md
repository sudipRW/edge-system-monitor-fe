# PortainerCeApi.EdgeTemplatesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edgeTemplateList**](EdgeTemplatesApi.md#edgeTemplateList) | **GET** /edge_templates | Fetches the list of Edge Templates


<a name="edgeTemplateList"></a>
# **edgeTemplateList**
> [PortainerTemplate] edgeTemplateList()

Fetches the list of Edge Templates

**Access policy**: administrator

### Example
```javascript
var PortainerCeApi = require('portainer_ce_api');
var defaultClient = PortainerCeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//jwt.apiKeyPrefix = 'Token';

var apiInstance = new PortainerCeApi.EdgeTemplatesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.edgeTemplateList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PortainerTemplate]**](PortainerTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
