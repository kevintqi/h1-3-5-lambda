const Config = require('./data/config.json');

var Customizer = {
  update(tableParams) {
    tableParams.TableName = `${Config.tablePrefix}${tableParams.TableName}`;
    return tableParams;
  }
};

module.exports = Customizer;