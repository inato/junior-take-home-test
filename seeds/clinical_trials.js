exports.seed = function(knex) {
  return knex("clinical_trial")
    .del()
    .then(function() {
      return knex("clinical_trial").insert([
        {
          patients: 1,
          site: "Uab Hospital",
          country: "United States",
          city: "birmingham"
        },
        {
          patients: 2,
          site: "Hospital Universitario Vall D'Hebron",
          country: "Spain",
          city: "barcelona"
        },
        {
          patients: 3,
          site: "Hopital Erasme",
          country: "Belgium",
          city: "brussels"
        },
        {
          patients: 4,
          site: "Antonius Hospital",
          country: "Netherlands",
          city: "sneek"
        },
        {
          patients: 5,
          site: "Pirogov Russian National Research Medical University",
          country: "Russian Federation",
          city: "moscow"
        },
        {
          patients: 6,
          site: "St. James'S University Hospital",
          country: "United Kingdom",
          city: "leeds"
        },
        {
          patients: 7,
          site: "British Columbia Cancer Agency",
          country: "Canada",
          city: "vancouver"
        },
        {
          patients: 8,
          site: "Austin Hospital",
          country: "Australia",
          city: "melbourne"
        },
        {
          patients: 9,
          site: "Azienda Ospedaliera Universitaria Pisana",
          country: "Italy",
          city: "pisa"
        },
        {
          patients: 10,
          site: "Freeman Hospital",
          country: "United Kingdom",
          city: "newcastle upon tyne"
        },
        {
          patients: 11,
          site: "Centre Hospitalier Universitaire De Nimes",
          country: "France",
          city: "nimes"
        },
        {
          patients: 12,
          site: "Hokkaido University Hospital",
          country: "Japan",
          city: "sapporo"
        },
        {
          patients: 13,
          site: "Chu De Nantes",
          country: "France",
          city: "nantes"
        },
        {
          patients: 14,
          site: "Hospital Regional De Talca",
          country: "Chile",
          city: "talca"
        },
        {
          patients: 15,
          site: "Tri-Service General Hospital",
          country: "Taiwan, Province of China",
          city: "taipei"
        },
        {
          patients: 16,
          site: "University Of Florida",
          country: "United States",
          city: "gainesville"
        },
        {
          patients: 17,
          site: "Chungbuk National University",
          country: "Korea, Republic of",
          city: "cheongju"
        },
        {
          patients: 18,
          site: "Hospital Nacional Cayetano Heredia",
          country: "Peru",
          city: "lima"
        },
        {
          patients: 19,
          site: "Hospital Clinico San Carlos",
          country: "Spain",
          city: "madrid"
        },
        {
          patients: 20,
          site: "Sakaide City Hospital",
          country: "Japan",
          city: "sakaide"
        },
        {
          patients: 21,
          site: "Hospital Universitario Lucus Augusti",
          country: "Spain",
          city: "lugo"
        },
        {
          patients: 22,
          site: "Klinikum Wels-Grieskirchen",
          country: "Austria",
          city: "wels"
        },
        {
          patients: 23,
          site: "Hospital Universitario",
          country: "Mexico",
          city: "monterrey"
        },
        {
          patients: 24,
          site: "Spitalul Judetean De Urgenta Sf. Pantelimon Focsani",
          country: "Romania",
          city: "focsani"
        },
        {
          patients: 25,
          site: "Spitalul Clinic De Pneumoftiziologie Constanta",
          country: "Romania",
          city: "constanta"
        },
        {
          patients: 26,
          site: "Kanizsai Dorottya Hospital",
          country: "Hungary",
          city: "nagykanizsa"
        },
        {
          patients: 27,
          site: "Uniwersyteckie Centrum Kliniczne",
          country: "Poland",
          city: "gdansk"
        },
        {
          patients: 28,
          site: "Chelmsford Medical Centre",
          country: "South Africa",
          city: "durban"
        },
        {
          patients: 29,
          site: "Tohno Chuo Clinic",
          country: "Japan",
          city: "gifu"
        },
        {
          patients: 30,
          site: "Kurume University Hospital",
          country: "Japan",
          city: "kurume"
        },
        {
          patients: 31,
          site: "Hospital Pulido Valente",
          country: "Portugal",
          city: "lisbon"
        },
        {
          patients: 32,
          site: "Wellington Hospital",
          country: "New Zealand",
          city: "wellington"
        },
        {
          patients: 33,
          site: "Kawaguchi Municipal Medical Center",
          country: "Japan",
          city: "kawaguchi"
        },
        {
          patients: 34,
          site: "Clinica Internacional",
          country: "Peru",
          city: "lima"
        },
        {
          patients: 35,
          site: "Hospital Pedro Hispano",
          country: "Portugal",
          city: "matosinhos"
        },
        {
          patients: 36,
          site: "Hospital Clinico Pontificia Universidad Catolica De Chile",
          country: "Chile",
          city: "santiago"
        },
        {
          patients: 37,
          site: "Paula Jaraquemada Hospital",
          country: "Chile",
          city: "santiago"
        },
        {
          patients: 38,
          site: "Hospital Regional De Valdivia",
          country: "Chile",
          city: "valdivia"
        },
        {
          patients: 39,
          site: "Soonchunhyang University Hospital",
          country: "Korea, Republic of",
          city: "seoul"
        },
        {
          patients: 40,
          site: "University Of California San Francisco Medical Center",
          country: "United States",
          city: "san francisco"
        },
        {
          patients: 41,
          site: "Instituto Neumologico Del Oriente S.A.",
          country: "Colombia",
          city: "bucaramanga"
        },
        {
          patients: 43,
          site: "St. Luke'S Medical Center",
          country: "Philippines",
          city: "quezon city"
        },
        {
          patients: 44,
          site: "Hopital Saint Antoine",
          country: "France",
          city: "paris"
        },
        {
          patients: 45,
          site: "Columbia University Medical Center",
          country: "United States",
          city: "new york"
        }
      ]);
    });
};
