# AWS Lambda Function - Create User
The function creates a new User with empty Profile and Rights.

## Sample Test Event
```json
{
  "pathParameters": {
    "userId": "45841c1e82903cdc21122534909501b3"
  }
}
```

## Sample REST Request
### URL
GET /user/{userId}
```
https://9t2eciov07.execute-api.us-west-2.amazonaws.com
```

## Sample Response
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
    "phoneNumber":"1234567",
    "portfolio": [
      {
          "ticker":"TSLA",
          "basePrice":635.00, 
          "triggerPercentage":15, 
          "targetHolding":250, 
          "activeHolding":150, 
          "costPrice":709.0
      }
    ]
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error