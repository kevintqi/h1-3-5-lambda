const Creator = require('my_db').Creator;
const btoa = require('btoa');
const tableParams = require('./data/usertable.json');

class UserCreator extends Creator {
  constructor() {
    super(tableParams);
  }

  _createData(requestData) {
    requestData.body.userId = btoa(requestData.body.email);
    return requestData.body;
  }

  _filterResult(result) {
    return {
      userId: result.Item.userId
    };
  }
}

module.exports = UserCreator;