const UpdateBuilder = require('my_db').UpdateBuilder;
const Client = require('my_db').Client;
const Creator = require('my_db').Creator;
const Customizer = require('my_db').Customizer;
const stockParams = Customizer.update(require('./data/stocktable.json'));
const userParams = Customizer.update(require('./data/usertable.json'));

class StockAdder {
  constructor() {
    this.creator = new Creator(stockParams);
    this.client = new Client();
  }

  async run(requestData) {
    const result = await this._createStock(requestData);
    await this._updateUser(result.Item);
    return {
      userId: result.Item.userId,
      stockId: result.Item.stockId
    };
  }

  async _createStock(requestData) {
    await this.creator.createTable();
    const data = requestData.body;
    data.userId = requestData.path.userId;
    data.stockId = `${requestData.body.ticker}_${data.userId}`;
    data.unit = data.targetHolding / 5;
    data.delta = (data.basePrice / 100.0) * data.triggerPercentage;
    if (data.activeHolding > data.unit * 3) {
      data.state = 'H5';
    } else if (data.activeHolding > data.unit) {
      data.state = 'H3';
    } else {
      data.state = 'H1';
    }
    return await this.creator.setData(data);
  }

  async _updateUser(stock) {
    const expression = 'set #p = list_append(:vals, #p)';
    const condition = 'NOT contains(#p, :s)';
    const builder = new UpdateBuilder(userParams.TableName);
    builder
      .setKey({ userId: stock.userId })
      .setUpdateExpression(expression)
      .setConditionExpresion(condition)
      .addExpressionName('#p', 'portfolio')
      .addExpressionValue(':vals', [stock.stockId])
      .addExpressionValue(':s', stock.stockId);
    return this.client.update(builder.getItem())
      .catch(err => {
        if (err.code != 'ConditionalCheckFailedException') {
          throw err;
        }
      });
  }
}

module.exports = StockAdder;