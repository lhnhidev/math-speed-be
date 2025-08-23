# ApiFiddleSampleDefinition.QuestionApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capNhatCauHoi**](QuestionApi.md#capNhatCauHoi) | **PUT** /cau-hoi/{questionId} | Cap nhat cau hoi
[**themCauHoi**](QuestionApi.md#themCauHoi) | **POST** /cau-hoi | Them cau hoi
[**xoaCauHoi**](QuestionApi.md#xoaCauHoi) | **DELETE** /cau-hoi/{questionId} | Xoa cau hoi



## capNhatCauHoi

> Question capNhatCauHoi(questionId, questionUpdate)

Cap nhat cau hoi

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.QuestionApi();
let questionId = "questionId_example"; // String | 
let questionUpdate = new ApiFiddleSampleDefinition.QuestionUpdate(); // QuestionUpdate | 
apiInstance.capNhatCauHoi(questionId, questionUpdate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | **String**|  | 
 **questionUpdate** | [**QuestionUpdate**](QuestionUpdate.md)|  | 

### Return type

[**Question**](Question.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## themCauHoi

> Question themCauHoi(questionCreate)

Them cau hoi

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.QuestionApi();
let questionCreate = new ApiFiddleSampleDefinition.QuestionCreate(); // QuestionCreate | 
apiInstance.themCauHoi(questionCreate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionCreate** | [**QuestionCreate**](QuestionCreate.md)|  | 

### Return type

[**Question**](Question.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## xoaCauHoi

> Object xoaCauHoi(questionId)

Xoa cau hoi

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.QuestionApi();
let questionId = "questionId_example"; // String | 
apiInstance.xoaCauHoi(questionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

