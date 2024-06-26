import { Container, Row, Col } from "react-bootstrap";

import Link from "next/link";

import ChangeThemeHandler from "./ChangeThemeHandler";

import { Theme } from "@/interface/Theme";

function Header({ theme }: { theme: Theme }) {
  return (
    <Container fluid className={theme.bgMenue + " " + theme.colorMenu}>
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-between align-items-center py-2"
        >
          <Link
            href="/"
            className="h4 text-decoration-none text-reset m-0 px-2"
          >
            PCOST
          </Link>
          <ul className="d-flex list-unstyled m-0">
            <li className="me-1">
              <Link href="/" className="text-decoration-none text-reset px-2">
                Home
              </Link>
            </li>
            <li className="me-1">
              <Link
                href="/about"
                className="text-decoration-none text-reset px-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-decoration-none text-reset px-2"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ChangeThemeHandler theme={theme} />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
