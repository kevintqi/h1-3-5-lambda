const UpdateBuilder = require('my_db').UpdateBuilder;
const Client = require('my_db').Client;


class DataAdder {
  constructor() {
    this.client = new Client();
  }

  run(requestData) {
    const tableName = `${requestData.headers['user-pool-id']}_Profile`;
    const keyValue = {
      'userId': requestData.path.userId
    };
    var category = requestData.path.category;
    var data = requestData.body.data;
    data.enteredBy = requestData.headers['user-id'];
    data.enteredAt = Date.now();
    return this._createNewEntryIfNotExists(tableName, keyValue, category)
      .then(() => this._addEntry(tableName, keyValue, category, data));
  }

  _createNewEntryIfNotExists(tableName, keyValue, category) {
    const expression = 'set #d.#c = if_not_exists(#d.#c, :vals)';
    const builder = new UpdateBuilder(tableName);
    builder
      .setKey(keyValue)
      .setUpdateExpression(expression)
      .addExpressionName('#d', 'data')
      .addExpressionName('#c', category)
      .addExpressionValue(':vals', []);
    return this.client.update(builder.getItem());
  }

  _addEntry(tableName, keyValue, category, data) {
    const expression = 'set #d.#c = list_append(:vals, #d.#c)';
    const value = [];
    value.push(data);
    const builder = new UpdateBuilder(tableName);
    builder
      .setKey(keyValue)
      .setUpdateExpression(expression)
      .addExpressionName('#d', 'data')
      .addExpressionName('#c', category)
      .addExpressionValue(':vals', value);
    return this.client.update(builder.getItem())
      .then(() => {return {status: 'successfulOk'};});  
  }
}

module.exports = DataAdder;