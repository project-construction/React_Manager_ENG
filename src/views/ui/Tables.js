import ProjectTables from "../../components/dashboard/ProjectTable";
import RecognizeTable from "../../components/dashboard/RecognizeTable";
import { Row, Col } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <ProjectTables />
      </Col>
      <Col lg="12">
        <RecognizeTable />
      </Col>
    </Row>
  );
};

export default Tables;
