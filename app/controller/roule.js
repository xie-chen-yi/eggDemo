const BaseConstroller = require('./base');

class UserController extends BaseConstroller {
  constructor(...args) {
    super(...args);
    this.entity = 'roule';
  }
}
module.exports = UserController;
