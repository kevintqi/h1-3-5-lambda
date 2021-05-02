const KeyBuilder = require('my_db').KeyBuilder;
const Client = require('my_db').Client;
const Customizer = require('my_db').Customizer;
const stockParams = Customizer.update(require('./data/stocktable.json'));

class StockGetter {
  constructor() {
    this.client = new Client();
    this.tableName = stockParams.TableName;
  }

  async run(ticker, userId) {
    const builder = new KeyBuilder(this.tableName);
    builder.setKey({'ticker': ticker, 'userId': userId});
    return this.client.get(builder.getItem())
      .then(data => data.Item);
  }
}

module.exports = StockGetter;