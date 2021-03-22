const Validator = require('jsonschema').Validator;

class ModelValidator {
  constructor(schema) {
    this.schema = schema;
    this.validator = new Validator(schema);
  }

  run(data) {
    const result = this.validator.validate(data, this.schema);
    return new Promise((resolve, reject) => {
      if (result.errors.length === 0) {
        return resolve(data);
      }
      const err = new Error();
      err.message = result.errors.map(d => {
        return d.toString();
      });
      return reject(err);
    });
  }
}

module.exports = ModelValidator;
