const EventHandler = require('my_util').EventHandler;
const Validator = require('my_util').EventValidator;
const MainHandler = require('./src/mainhandler');

const validator = new Validator();
const dataHandler = new MainHandler();
exports.handler = (event, context, callback) => {
  const eventHandler = new EventHandler(event, callback);
  validator
    .run(eventHandler)
    .then(requestData => {
      dataHandler.run(requestData)
        .then((data) => eventHandler.status(200).send(data))
        .catch((err) => eventHandler.status(500).send(err));
    })
    .catch(err => eventHandler.status(400).send(err));
};