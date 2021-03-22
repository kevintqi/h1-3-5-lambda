const UserCreator = require('./usercreator');
const RightsCreator = require('./rightscreator');
const ProfileCreator = require('./profilecreator');

class CompositeCreator {
  constructor() {
    this.userCreator = new UserCreator();
    this.rightsCreator = new RightsCreator();
    this.profileCreator = new ProfileCreator();
  }

  run(requestData) {
    return this.userCreator.run(requestData)
      .then(data => Promise.all(
        [this.rightsCreator.run(requestData),
          this.profileCreator.run(requestData)])
        .then(() => data)
      );
  }
}

module.exports = CompositeCreator;