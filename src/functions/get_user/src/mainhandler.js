const UserGetter = require('./usergetter');
const StockGetter = require('./stockgetter');

class MainHandler {
  constructor() {
    this.userGetter = new UserGetter();
    this.stockGetter = new StockGetter();
  }

  async run(requestData) {
    const user = await this.userGetter.run(requestData.path.userId);
    const portfolio = await this._buildPortfolio(user);
    user.portfolio = portfolio;
    return user;
  }

  async _buildPortfolio(user) {
    let portfolio = [];
    let allStockerGetter = [];
    user.portfolio.forEach(ticker => allStockerGetter.push(this.stockGetter.run(ticker, user.userId).then(stock=> portfolio.push(stock))));
    return Promise.all(allStockerGetter).then(() => portfolio);
  }
}

module.exports = MainHandler;