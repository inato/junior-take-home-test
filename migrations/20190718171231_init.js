exports.up = function(knex) {
  return knex.schema.createTable("clinical_trial", t => {
    t.string("site").notNull();
    t.string("city").notNull();
    t.string("country").notNull();
    t.integer("patients").notNull();
    t.primary(["site", "city"]);
  });
};

exports.down = function(knex) {};
