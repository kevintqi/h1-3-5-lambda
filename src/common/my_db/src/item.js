class Item {
  constructor(tableName) {
    this.TableName = tableName;
  }
}
exports.Item = Item;

class ItemBuilder {
  constructor(tableName) {
    this.item = new Item(tableName);
  }

  getItem() {
    return this.item;
  } 
}

class KeyBuilder extends ItemBuilder {
  constructor(tableName) {
    super(tableName);
  }

  setKey(value) {
    this.item.Key = value;
    return this;
  }
}
exports.KeyBuilder = KeyBuilder;

class DataBuilder extends ItemBuilder {
  constructor(tableName) {
    super(tableName);
  }

  setData(value) {
    this.item.Item = value;
  }
}
exports.DataBuilder = DataBuilder;

class KeyConditionBuilder extends ItemBuilder {
  constructor(tableName) {
    super(tableName);
  }

  setKeyConditionExpression(value) {
    this.item.KeyConditionExpression = value;
    this.item.ExpressionAttributeValues = {};
    return this;
  }

  setFilterExpression(value) {
    this.item.FilterExpression = value;
    return this;
  }

  addExpressionValue(key, value) {
    this.item.ExpressionAttributeValues[key] = value;
    return this;
  }
}
exports.KeyConditionBuilder = KeyConditionBuilder;

class FilterBuilder extends ItemBuilder {
  constructor(tableName) {
    super(tableName);
  }

  setFilterExpression(value) {
    this.item.FilterExpression = value;
    this.item.ExpressionAttributeValues = {};
    return this;
  }

  addExpressionValue(key, value) {
    this.item.ExpressionAttributeValues[key] = value;
    return this;
  }
}
exports.FilterBuilder = FilterBuilder;

class UpdateBuilder extends ItemBuilder {
  constructor(tableName) {
    super(tableName);
  }

  setKey(value) {
    this.item.Key = value;
    return this;
  }
  
  setUpdateExpression(value) {
    this.item.UpdateExpression = value;
    return this;
  }

  setConditionExpresion(value) {
    this.item.ConditionExpression = value;
    return this;
  }

  addExpressionName(key, value) {
    this.item.ExpressionAttributeNames = this.item.ExpressionAttributeNames || {};
    this.item.ExpressionAttributeNames[key] = value;
    return this;
  }

  addExpressionValue(key, value) {
    this.item.ExpressionAttributeValues = this.item.ExpressionAttributeValues || {};
    this.item.ExpressionAttributeValues[key] = value;
    return this;
  }
}
exports.UpdateBuilder = UpdateBuilder;

class ProjectionBuilder extends ItemBuilder {
  constructor(tableName) {
    super(tableName);
  }

  setKey(value) {
    this.item.Key = value;
    return this;
  }
  
  setProjectionExpression(value) {
    this.item.ProjectionExpression = value;
    return this;
  }

  addExpressionName(key, value) {
    this.item.ExpressionAttributeNames = this.item.ExpressionAttributeNames || {};
    this.item.ExpressionAttributeNames[key] = value;
    return this;
  }
}
exports.ProjectionBuilder = ProjectionBuilder;