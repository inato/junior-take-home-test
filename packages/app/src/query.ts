import { gql } from "@apollo/client";
import { clinicalTrialsFragment } from "./ClinicalTrials";

export const clinicalTrialsQuery = gql`
  query ClinicalTrials($patientsSortDirection: String) {
    clinicalTrials(patientsSortDirection: $patientsSortDirection) {
      ...ClinicalTrialsFragment
    }
  }
  ${clinicalTrialsFragment}
`;
