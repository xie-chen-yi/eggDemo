const { Service } = require('egg');
class BaseService extends Service {
  async list(pageNum, pageSize, where) {
    const list = await this.app.mysql.select(this.entity, {
      where,
      order: [[ 'id', 'dec' ], [ 'useName', 'asc' ]],
      offset: (pageNum - 1) * pageSize,
      limit: pageSize,
    });
    const total = await this.app.mysql.count(this.entity, where);
    return {
      list, total,
    };
  }
  async create(entity) {
    const result = await this.app.mysql.insert(this.entity, entity);
    return result.affectedRows > 0;
  }
  async update(id, entity) {
    const optins = {
      where: {
        id,
      },
    };
    const result = await this.app.mysql.update(this.entity, entity, optins);
    return result.affectedRows > 0;
  }
  async destroy(id) {
    const option = {
      id,
    };
    const result = await this.app.mysql.delete(this.entity, option);
    return result.affectedRows > 0;
  }
}
module.exports = BaseService;
