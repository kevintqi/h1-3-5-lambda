const AWS = require('my_aws');

class Client {
  constructor() {
    this.client = new AWS.DynamoDB.DocumentClient();
  }

  put(item) {
    return new Promise((resolve, reject) => {
      this.client.put(item, err => {
        if (err) {
          return reject(err);
        }
        return resolve(item);
      });
    });
  }

  get(item) {
    return new Promise((resolve, reject) => {
      this.client.get(item, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }

  update(item) {
    return new Promise((resolve, reject) => {
      this.client.update(item, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }

  delete(item) {
    return new Promise((resolve, reject) => {
      this.client.delete(item, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }

  query(item) {
    return new Promise((resolve, reject) => {
      this.client.query(item, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }

  scan(item) {
    return new Promise((resolve, reject) => {
      this.client.scan(item, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }
}

module.exports = Client;
