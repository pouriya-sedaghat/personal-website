import type { Metadata } from "next";

import { Row } from "react-bootstrap";

import Link from "next/link";

import CustomCol from "@/components/CustomCol";
import ShieldsIO from "@/components/ShieldsIO";

import logos from "@/data/logos.json";

export const metadata: Metadata = {
  title: "Contact",
};

function Contact() {
  return (
    <Row>
      <CustomCol>
        <h2 className="h5">Contact</h2>
        <ul className="list-unstyled">
          <li>
            <Link
              href="tel:+98 9389372901"
              className="text-decoration-none text-reset"
            >
              <i className="bi bi-telephone"></i> +98 9389372901
            </Link>
          </li>
          <li>
            <i className="bi bi-geo-alt"></i> Tehran Province, Iran
          </li>
        </ul>
        <div>
          <h2 className="h5">Social Media</h2>
          <div className="d-flex flex-wrap gap-1">
            {logos.map((item) => (
              <ShieldsIO key={item.alt} {...item} />
            ))}
          </div>
        </div>
      </CustomCol>
    </Row>
  );
}

export default Contact;
