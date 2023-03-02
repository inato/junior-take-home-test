import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";

import ClinicalTrials from "./ClinicalTrials";

const Layout = styled.div`
  background: #f6f7fa;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 48px;
  max-width: 1300px;
  width: 100%;
`;

const clinicalTrialsQuery = gql`
  query ClinicalTrials($patientsSortDirection: String) {
    clinicalTrials(patientsSortDirection: $patientsSortDirection) {
      site
      country
      patients
    }
  }
`;

export type PatientsSortDirection = "asc" | "desc" | null;

const App: React.FC = () => {
  const [patientsSortDirection, setPatientsSortDirection] =
    useState<PatientsSortDirection>(null);

  const { loading, error, data } = useQuery(clinicalTrialsQuery, {
    variables: { patientsSortDirection },
  });

  return (
    <Layout>
      <Content>
        {!loading && !error && (
          <ClinicalTrials
            patientsSortDirection={patientsSortDirection}
            setPatientsSortDirection={setPatientsSortDirection}
            clinicalTrials={data.clinicalTrials}
          />
        )}
      </Content>
    </Layout>
  );
};

export default App;
