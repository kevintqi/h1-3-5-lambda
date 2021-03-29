# Holding 1-3-5
## User Story

#### New User signs up 
![Sign Up New User](./signUpNewUser.png)

#### User Add Stock
![Add Stock](./addStock.png)

#### User Remove Stock
![Remove stock](./removeStock.png)

#### User Get User/Portfolio

#### User Update Action

#### System Notify User Action

#### System Start Stock Price Stream

## Data Model
* For consistency and efficiency, data entity should be referenced by id in storage
* For performance and simplicity, data id should be resolved before presentation

#### User
````json
{
    "userId":"unique string == email",
    "email": "string",
    "phoneNumber": "string",
    "name": {
        "last": "string",
        "first": "string",
        "alias": "string"
    },
    "picture": "url to asset",
    "portfolio": ["stockId"],
    "history": [{}]
}
````

#### Stock
````json
{
    "stockId": "userId + ticker",
    "userId":"userId",
    "ticker":"TSLA",
    "basePrice": 635.00,
    "triggerPercentage": 15,
    "targetHolding": 250,
    "activeHolding": 200,
    "costPrice": 739.00,
    "activePrice": 659.00,
    "state": "H3",
    "unit": 50,
    "delta": 95.25,
    "profit": 1000.00
}
````

#### Action
````json
{
    "actionId": "userId + ticker",
    "userId": "userId",
    "ticker": "TLSA",
    "shares": -50,
    "price": 739.00,
    "profit": 100.00,
    "state": "recommended",
    "lastUpdatedAt": 1234567
}
````