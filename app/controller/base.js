const { Controller } = require('egg');
class BaseConstroller extends Controller {
  async index() {
    const { ctx, service } = this;
    const { pageNum, pageSize, ...where } = ctx.query;
    const list = await service[this.entity].list(isNaN(pageNum) ? 1 : parseInt(pageNum), isNaN(pageSize) ? 3 : parseInt(pageSize), where);
    ctx.body = list;
  }
  async create() {
    const { ctx, service } = this;
    const entity = ctx.request.body;
    const result = await service[this.entity].create(entity);
    ctx.body = result ? this.success() : this.error();
  }
  async update() {
    const { ctx, service } = this;
    const entity = ctx.request.body;
    const id = ctx.queries.id;
    const result = await service.user.update(id, entity);
    ctx.body = result ? this.success() : this.error();
  }
  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const result = await service[this.entity].destroy(id);
    ctx.body = result ? this.success() : this.error();
  }

  success() {
    return {
      code: 0,
      message: 'success',
    };
  }
  error() {
    return {
      code: 1,
      message: 'error',
    };
  }
}
module.exports = BaseConstroller;
