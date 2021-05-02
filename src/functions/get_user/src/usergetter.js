const KeyBuilder = require('my_db').KeyBuilder;
const Client = require('my_db').Client;
const Customizer = require('my_db').Customizer;
const userParams = Customizer.update(require('./data/usertable.json'));


class UserGetter {
  constructor() {
    this.client = new Client();
    this.tableName = userParams.TableName;
  }

  async run(userId) {
    const builder = new KeyBuilder(this.tableName);
    builder.setKey({'userId': userId});
    return this.client.get(builder.getItem())
      .then(data => data.Item);
  }
}

module.exports = UserGetter;