import { Container, Row, Col } from "react-bootstrap";

import { Theme } from "@/interface/Theme";

function Header({ theme }: { theme: Theme }) {
  return (
    <Container fluid className={theme.bgMenue + " " + theme.colorMenu}>
      <Row>
        <Col xs={12} className="text-center py-2">
          2024
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
