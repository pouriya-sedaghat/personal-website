import { Container, Row, Col } from "react-bootstrap";

import { Theme } from "@/interface/Theme";

function Header({ theme: { bgMenue, colorMenu } }: { theme: Theme }) {
  return (
    <Container fluid className={`${bgMenue} ${colorMenu}`}>
      <Row>
        <Col xs={12} className="text-center py-2">
          2024
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
