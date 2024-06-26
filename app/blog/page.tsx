import type { Metadata } from "next";

import { Row, Col } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Blog",
};

function Blog() {
  return (
    <Row>
      <Col
        xs={10}
        className="offset-1 text-center border border-dark border-2 rounded-5 p-5"
      >
        Blog
      </Col>
    </Row>
  );
}

export default Blog;
