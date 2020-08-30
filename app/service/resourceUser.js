const BaseService = require('./base');

class UserService extends BaseService {
  constructor(...args) {
    super(...args);
    this.entity = 'resource_user';
  }
}
module.exports = UserService;
