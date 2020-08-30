const BaseConstroller = require('./base');

class UserController extends BaseConstroller {
  constructor(...args) {
    super(...args);
    this.entity = 'resource_user';
  }
}
module.exports = UserController;
