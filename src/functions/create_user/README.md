# AWS Lambda Function - Create User
The function creates a new User with empty Portfolio and History.

## Sample Test Event
```json
{
  "body": "{\"name\":{\"first\":\"John\",\"last\":\"Doe\"},\"phoneNumber\":\"1234567\", \"email\":\"y@a.com\"}"
}
```

## Sample REST Request
### URL
POST /user
```
https://9t2eciov07.execute-api.us-west-2.amazonaws.com
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
    "picture": "url to asset",
    "phoneNumber":"1234567"
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