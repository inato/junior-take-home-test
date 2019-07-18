import React from "react";
import graphql from "babel-plugin-relay/macro";
import styled from "styled-components";
import { QueryRenderer } from "react-relay";

import ClinicalTrials from "./ClinicalTrials";
import environment from "./environment";
import { AppQuery } from "./__generated__/AppQuery.graphql";

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

const App: React.FC = () => {
  return (
    <Layout>
      <Content>
        <QueryRenderer<AppQuery>
          environment={environment}
          query={graphql`
            query AppQuery {
              clinicalTrials {
                country
                patients
                site
              }
            }
          `}
          variables={{}}
          render={({ props }) => {
            if (!props) {
              return;
            }
            return <ClinicalTrials clinicalTrials={props.clinicalTrials} />;
          }}
        />
      </Content>
    </Layout>
  );
};

export default App;
