const Creator = require('my_db').Creator;
const tableParams = require('./data/rightstable.json');

class RightsCreator extends Creator {
  constructor() {
    super(tableParams);
  }

  _createData(requestData) {
    return {
      userId: requestData.body.userId,
      rights:{}
    };
  }

  _filterResult(result) {
    return {
      userId: result.Item.userId
    };
  }
}

module.exports = RightsCreator;