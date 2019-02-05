'use strict'

const Database = use('Database');

class TestController {
  async index () {
    return await Database.table('user')
      .where('id', '<', 1000)
      .orderBy('id');
  }
}

module.exports = TestController
