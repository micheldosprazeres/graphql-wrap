exports.up = function(knex, Promise) {
  return knex.schema.createTable('bags_fruits', table => {
    table.increments('id', 11).primary()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.integer('bags_id').unsigned().notNullable().references('id').inTable('bags').onDelete('CASCADE').onUpdate('RESTRICT')
    table.integer('fruits_id').unsigned().notNullable().references('id').inTable('fruits').onDelete('CASCADE').onUpdate('RESTRICT')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bags_fruits')
};
