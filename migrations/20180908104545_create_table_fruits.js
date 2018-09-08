exports.up = function(knex, Promise) {
  return knex.schema.createTable('fruits', table => {
    table.increments('id', 11).primary()
    table.string('name', 80).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fruits')
};
