const Table = require('./table');
const DataBuilder = require('./item').DataBuilder;
const Client = require('./client');

class Creator {
  constructor(tableParams) {
    this.tableParams = tableParams;
    this.client = new Client();
  }

  async createTable() {
    const table = new Table(this.tableParams);
    try {
      return await table.exist();
    } catch (e) {
      return await table.create();
    }
  }

  async setData(data) {
    const builder = new DataBuilder(this.tableParams.TableName);
    builder.setData(data);
    return await this.client.put(builder.getItem());
  }
}

module.exports = Creator;