const Creator = require('my_db').Creator;
const md5 = require('md5');
const Customizer = require('my_db').Customizer;
const tableParams = Customizer.update(require('./data/usertable.json'));

class UserCreator {
  constructor() {
    this.creator = new Creator(tableParams);
  }

  async run(requestData) {
    await this.creator.createTable();
    const data = requestData.body;
    data.userId = md5(requestData.body.email);
    data.portfolio = [];
    data.history = [];
    const result = await this.creator.setData(data);
    return {
      userId: result.Item.userId
    };
  }
}

module.exports = UserCreator;