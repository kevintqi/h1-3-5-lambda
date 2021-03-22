# AWS Lambda Function - Create User
The function creates a new User with empty Profile and Rights.

## Sample Test Event
```json
{
  "headers": {
    "user-pool-id": "us-west-2_n3itNahtP",
    "user-id": "email"
  },
  "body": "{\"name\":{\"first\":\"John\",\"last\":\"Doe\"},\"phoneNumber\":\"1234567\", \"email\":\"y@a.com\"}"
}
```

## Sample REST Request
### URL
POST /user
```
https://74by8v0zt1.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:us-west-2_n3itNahtP
user-id:anyUserId
```
### Body
```json
{
    "email":"y@a.com",
    "name": {
        "last": "Doe",
        "first": "John",
        "alias": "Dude"
    },
    "gender":"M",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Torrance",
        "state": "CA",
        "zipcode":"90501",
        "country":"USA"
    },
    "picture": "url to asset",
    "phoneNumber":"1234567",
    "role":"user"
}
````

## Sample Response
### Body
```json
{
  "userId": "eUBhLmNvbQ=="
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error