import { stringArg, extendType, nullable, objectType } from "nexus";
import { data } from "./data";

export const ClinicalTrial = objectType({
  name: "ClinicalTrial",
  definition(t) {
    t.string("site");
    t.string("country");
    t.int("patients");
  },
});

export const ClinicalTrialQuery = extendType({
  type: "Query",

  definition(t) {
    t.nonNull.list.field("clinicalTrials", {
      type: "ClinicalTrial",
      args: {
        patientsSortDirection: nullable(stringArg()),
      },
      resolve(_, { patientsSortDirection }) {
        if (patientsSortDirection === "asc") {
          return data.sort((a, b) => b.patients - a.patients);
        }
        if (patientsSortDirection === "desc") {
          return data.sort((a, b) => a.patients - b.patients);
        }
        return data;
      },
    });
  },
});
