exports.up = function(knex) {
  return knex.schema.createTable("clinical_trial", t => {
    t.string("site").primary();
    t.string("country").notNull();
    t.integer("patients").notNull();
  });
};

exports.down = function(knex) {};
