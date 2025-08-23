# ApiFiddleSampleDefinition.UserApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dangNhap**](UserApi.md#dangNhap) | **POST** /users/login | Dang nhap
[**dangXuat**](UserApi.md#dangXuat) | **POST** /users/logout | Dang xuat
[**themNguoiDung**](UserApi.md#themNguoiDung) | **POST** /users | Them nguoi dung



## dangNhap

> DangNhap200Response dangNhap(dangNhapRequest)

Dang nhap

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.UserApi();
let dangNhapRequest = new ApiFiddleSampleDefinition.DangNhapRequest(); // DangNhapRequest | 
apiInstance.dangNhap(dangNhapRequest, (error, data, response) => {
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
 **dangNhapRequest** | [**DangNhapRequest**](DangNhapRequest.md)|  | 

### Return type

[**DangNhap200Response**](DangNhap200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dangXuat

> dangXuat()

Dang xuat

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.UserApi();
apiInstance.dangXuat((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## themNguoiDung

> User themNguoiDung(userCreate)

Them nguoi dung

### Example

```javascript
import ApiFiddleSampleDefinition from 'api_fiddle_sample_definition';

let apiInstance = new ApiFiddleSampleDefinition.UserApi();
let userCreate = new ApiFiddleSampleDefinition.UserCreate(); // UserCreate | 
apiInstance.themNguoiDung(userCreate, (error, data, response) => {
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
 **userCreate** | [**UserCreate**](UserCreate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

