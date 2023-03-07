import { gql } from "@apollo/client";

export const clinicalTrialsQuery = gql`
  query ClinicalTrials($patientsSortDirection: String) {
    clinicalTrials(patientsSortDirection: $patientsSortDirection) {
      site
      country
      patients
    }
  }
`;
