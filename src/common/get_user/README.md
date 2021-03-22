# Get User 
Get User details from DynamoDB based on 'user-pool-id' and 'userId'

## Example
```javascript
    const requestData = {
        headers: {
            'user-pool-id': 'user pool id to where user belongs'
        }
        body: {
            userId: 'user id to get the info'
        }
    };
    const userGetter = new UserGetter();
    userGetter.run(requestData)
      .then(data => console.log(data))
      .catch(err => console.log(err));
```