const EventHandler = require('my_util').EventHandler;
const Validator = require('my_util').EventValidator;
const inputDataModel = require('./src/data/inputdatamodel.json');
const StockAdder = require('./src/stockadder');

const validator = new Validator();
const dataHandler = new StockAdder();
exports.handler = (event, context, callback) => {
  const eventHandler = new EventHandler(event, callback);
  validator
    .run(eventHandler, inputDataModel)
    .then(requestData => {
      dataHandler.run(requestData)
        .then((data) => eventHandler.status(200).send(data))
        .catch((err) => eventHandler.status(500).send(err));
    })
    .catch(err => eventHandler.status(400).send(err));
};