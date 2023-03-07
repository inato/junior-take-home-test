import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

import ClinicalTrials, { PatientsSortDirection } from "./ClinicalTrials";
import { Content, Layout } from "./components";
import { clinicalTrialsQuery } from "./query";

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
