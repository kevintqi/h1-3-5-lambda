# AWS Lambda Function - Add Stock
The function adds a new stock and associates it to the user's portfolio  

## Sample Test Event
```json
{
  "pathParameters": {
    "userId": "eUBhLmNvbQ=="
  },
  "body": "{\"ticker\":\"TSLA\",\"basePrice\":635.00, \"triggerPercentage\":15, \"targetHolding\":250, \"activeHolding\":150, \"costPrice\":709.0}"
}
```

## Sample REST Request
### URL
POST /portfolio/stock/{userId}
```
https://74by8v0zt1.execute-api.us-west-2.amazonaws.com/dev
```
### Body
```json
{
  "ticker":"TSLA",
  "basePrice":635.00, 
  "triggerPercentage":15, 
  "targetHolding":250, 
  "activeHolding":150, 
  "costPrice":709.0
}
````

## Sample Response
### Body
```json
{
  "userId":"eUBhLmNvbQ==",
  "stockId":"TSLA_eUBhLmNvbQ=="
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error