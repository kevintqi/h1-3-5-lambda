const Creator = require('my_db').Creator;
const btoa = require('btoa');
const tableParams = require('./data/usertable.json');

class UserCreator {
  constructor() {
    this.creator = new Creator(tableParams);
  }

  async run(requestData) {
    const prefix = 'h1-3-5';
    await this.creator.createTable(prefix);
    const data = requestData.body;
    data.userId = btoa(requestData.body.email);
    data.portfolio = [];
    data.history = [];
    const result = await this.creator.setData(data);
    return {
      userId: result.Item.userId
    };
  }
}

module.exports = UserCreator;