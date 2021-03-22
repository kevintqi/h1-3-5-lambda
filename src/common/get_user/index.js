const KeyBuilder = require('my_db').KeyBuilder;
const Client = require('my_db').Client;


class UserGetter {
  constructor() {
    this.client = new Client();
  }

  run(userPoolId, userId) {
    const tableName = `${userPoolId}_User`;
    const keyValue = {
      'userId': userId
    };
    const builder = new KeyBuilder(tableName);
    builder
      .setKey(keyValue);
    return this.client.get(builder.getItem())
      .then(data => data.Item);
  }
}

module.exports = UserGetter;