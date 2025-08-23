# ApiFiddleSampleDefinition.AttemptApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lietKeLichSuLamBai**](AttemptApi.md#lietKeLichSuLamBai) | **GET** /lich-su-lam-bai | Liet ke lich su lam bai
[**nopBai**](AttemptApi.md#nopBai) | **POST** /lich-su-lam-bai/{attemptId} | Nop bai
[**taoLichSuLamBai**](AttemptApi.md#taoLichSuLamBai) | **POST** /lich-su-lam-bai | Tao lich su lam bai



## lietKeLichSuLamBai

> TestAttemptSummary lietKeLichSuLamBai()

Liet ke lich su lam bai

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.AttemptApi();
apiInstance.lietKeLichSuLamBai((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TestAttemptSummary**](TestAttemptSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## nopBai

> TestAttemptSummary nopBai(attemptId, body)

Nop bai

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.AttemptApi();
let attemptId = "attemptId_example"; // String | 
let body = {key: null}; // Object | 
apiInstance.nopBai(attemptId, body, (error, data, response) => {
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
 **attemptId** | **String**|  | 
 **body** | **Object**|  | 

### Return type

[**TestAttemptSummary**](TestAttemptSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## taoLichSuLamBai

> TestAttempt taoLichSuLamBai()

Tao lich su lam bai

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.AttemptApi();
apiInstance.taoLichSuLamBai((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TestAttempt**](TestAttempt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

