
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fruits').del()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'Açaí' },
        { name: 'Apple' },
        { name: 'Avocado' },
        { name: 'Blackberry' },
        { name: 'Lemon' }
      ]);
    });
};
