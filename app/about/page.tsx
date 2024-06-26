import type { Metadata } from "next";

import { Row, Col } from "react-bootstrap";

import Link from "next/link";

import CustomCol from "@/components/CustomCol";

export const metadata: Metadata = {
  title: "About",
};

function About() {
  return (
    <Row>
      <CustomCol flex={false}>
        <h2 className="h5">Profile</h2>
        <p>
          I am a Frontend developer with experience and skill in web application
          development.
          <br /> With high ability in HTML, CSS, Bootstrap, Tailwind CSS, SASS,
          JavaScript, jQuery, AJAX, TypeScript, Reactjs, Nextjs, State
          Manegment, Jest, MongoDB Database and ..., I can create dynamic and
          attractive user interface.
          <br /> In addition, by using popular JavaScript libraries and
          frameworks such as Reactjs and Nextjs and JavaScript packages, I have
          been able to develop projects with high speed and quality.
          <br /> The ability to communicate effectively with the team as well as
          the ability to solve complex problems are also among my other
          characteristics.
        </p>
        <Link
          href="/files/resume.pdf"
          className="text-decoration-none btn btn-success me-2"
          target="_blank"
        >
          View Resume
        </Link>
      </CustomCol>
    </Row>
  );
}

export default About;
