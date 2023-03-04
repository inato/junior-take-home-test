import React, { Fragment, useCallback } from "react";
import {
  Table,
  Header,
  HeaderCell,
  ClickableHeaderCell,
  Body,
  Row,
  Cell,
} from "./components";

export type PatientsSortDirection = "asc" | "desc" | null;

interface Props {
  clinicalTrials: Array<any>;
  patientsSortDirection: PatientsSortDirection;
  setPatientsSortDirection: (
    patientsSortDirection: PatientsSortDirection
  ) => void;
}

const ClinicalTrials: React.FC<Props> = ({
  clinicalTrials,
  patientsSortDirection,
  setPatientsSortDirection,
}: Props) => {
  const togglePatientsSortDirection = useCallback(() => {
    if (patientsSortDirection == null) {
      setPatientsSortDirection("asc");
    } else if (patientsSortDirection === "asc") {
      setPatientsSortDirection("desc");
    } else {
      setPatientsSortDirection(null);
    }
  }, [patientsSortDirection, setPatientsSortDirection]);

  return (
    <Fragment>
      <h1>Clinical trials</h1>
      <Table>
        <Header>
          <HeaderCell>site</HeaderCell>
          <HeaderCell>country</HeaderCell>
          <ClickableHeaderCell onClick={togglePatientsSortDirection}>
            patients{sortDirectionIndicator(patientsSortDirection)}
          </ClickableHeaderCell>
        </Header>
        <Body>
          {clinicalTrials.map((clinicalTrial) => (
            <Row key={clinicalTrial.site}>
              <Cell>{clinicalTrial.site}</Cell>
              <Cell>{clinicalTrial.country}</Cell>
              <Cell>{clinicalTrial.patients}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </Fragment>
  );
};

const sortDirectionIndicator = (
  patientsSortDirection: PatientsSortDirection
) => {
  if (patientsSortDirection === "asc") return "↑";
  if (patientsSortDirection === "desc") return "↓";
  return "";
};

export default ClinicalTrials;
