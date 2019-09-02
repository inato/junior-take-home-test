import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} from "graphql";
import { nodeDefinitions } from "graphql-relay";

import { ClinicalTrialType } from "./clinicalTrials";
import { queryBuilder } from "./database";

const { nodeField } = nodeDefinitions(() => {
  return null;
});

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      node: nodeField,
      clinicalTrials: {
        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(ClinicalTrialType))),
        args: {
          patientsSortDirection: {
            type: GraphQLString
          }
        },
        resolve: (_, { patientsSortDirection }) => {
          let baseQuery = queryBuilder("clinical_trial");
          if (patientsSortDirection !== null) {
            baseQuery = baseQuery.orderBy("patients", patientsSortDirection);
          }
          return baseQuery.select();
        }
      }
    }
  })
});
