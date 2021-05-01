# AWS Lambda Function - Add Data
The function adds an new data entry of a given category into the profile of the user 

## Sample Test Event
```json
{
  "headers": {
    "user-id": "eUBhLmNvbQ=="
  },
  "pathParameters": {
    "userId": "eUBhLmNvbQ=="
  },
  "body": "{\"ticker\":\"TSLA\",\"basePrice\":635.00, \"triggerPercentage\":15, \"targetHolding\":250, \"activeHolding\":150, \"costPrice\":709.0}"
}
```

## Sample REST Request
### URL

POST /portfolio/{userId}
```
https://74by8v0zt1.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-id:eUBhLmNvbQ==
```
### Body
```json
{
  "data" : {
    "value": 70,
    "unit": "kg"
  }
}
````

## Sample Response
### Body
```json
{
  "status": "successfulOk"
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error