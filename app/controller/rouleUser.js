const BaseConstroller = require('./base');

class UserController extends BaseConstroller {
  constructor(...args) {
    super(...args);
    this.entity = 'roule_user';
  }
}
module.exports = UserController;
