# AWS Lambda Function - Add Stock
The function adds a new stock and associates it to the user's portfolio  

## Sample Test Event
```json
{
  "pathParameters": {
    "userId": "45841c1e82903cdc21122534909501b3"
  },
  "body": "{\"ticker\":\"TSLA\",\"basePrice\":635.00, \"triggerPercentage\":15, \"targetHolding\":250, \"activeHolding\":150, \"costPrice\":709.0}"
}
```

## Sample REST Request
### URL
POST /portfolio/{userId}
```
https://9t2eciov07.execute-api.us-west-2.amazonaws.com
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
  "userId":"45841c1e82903cdc21122534909501b3",
  "stockId":"TSLA_45841c1e82903cdc21122534909501b3"
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error