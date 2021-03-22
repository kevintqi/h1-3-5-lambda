const Creator = require('my_db').Creator;
const tableParams = require('./data/profiletable.json');

class ProfileCreator extends Creator {
  constructor() {
    super(tableParams);
  }

  _createData(requestData) {
    return {
      userId: requestData.body.userId,
      data: {}
    };
  }

  _filterResult(result) {
    return {
      userId: result.Item.userId
    };
  }
}

module.exports = ProfileCreator;