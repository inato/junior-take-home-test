import {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType
} from "graphql";

export const ClinicalTrialType = new GraphQLObjectType({
  name: "ClinicalTrial",
  fields: {
    site: {
      type: GraphQLNonNull(GraphQLString)
    },
    country: {
      type: GraphQLNonNull(GraphQLString)
    },
    patients: {
      type: GraphQLNonNull(GraphQLInt)
    }
  }
});
