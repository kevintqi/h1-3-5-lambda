const ModelValidator = require('./modelvalidator');
const headerSchema = require('./data/eventheader.json');

class EventValidator {
  run(eventHandler, schema) {
    return new ModelValidator(headerSchema).run(eventHandler.requestData.headers)
      .then(() => {
        if (schema) {
          return new ModelValidator(schema).run(eventHandler.requestData.body);
        }
        return eventHandler.requestData;
      }).then(() => eventHandler.requestData);
  }
}

module.exports = EventValidator;