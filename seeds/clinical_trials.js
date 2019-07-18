exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("clinical_trial")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("clinical_trial").insert([
        { site: "site 1", country: "country 1", patients: 1 },
        { site: "site 2", country: "country 2", patients: 2 },
        { site: "site 3", country: "country 3", patients: 3 }
      ]);
    });
};
