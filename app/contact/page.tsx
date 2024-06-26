import type { Metadata } from "next";

import { Row, Col } from "react-bootstrap";

import Link from "next/link";

import CustomCol from "@/components/CustomCol";

export const metadata: Metadata = {
  title: "Contact",
};

function Contact() {
  return (
    <Row>
      <CustomCol flex={false}>
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
          <Link
            href="https://linkedin.com/in/pouriya-sedaghat"
            target="_blank"
            className="me-1"
          >
            <img
              src="https://shields.io/badge/LinkedIn-Let's Go-linkedin.svg?style=flat&logo=linkedin"
              alt="LinkedIn"
            />
          </Link>
          <Link
            href="https://github.com/pouriya-sedaghat"
            target="_blank"
            className="me-1"
          >
            <img
              src="https://shields.io/badge/Github-Let's Go-github.svg?style=flat&logo=github"
              alt="Github"
            />
          </Link>
          <Link
            href="https://https://stackoverflow.com/users/21948275/pouriya-sedaghat"
            target="_blank"
            className="me-1"
          >
            <img
              src="https://shields.io/badge/StackOverflow-Let's Go-stackoverflow.svg?style=flat&logo=stackoverflow"
              alt="StackOverflow"
            />
          </Link>
          <Link href="https://x.com/p-co-st" target="_blank" className="me-1">
            <img
              src="https://shields.io/badge/Twitter-Let's Go-x.svg?style=flat&logo=x"
              alt="X Or Twitter"
            />
          </Link>
          <Link
            href="mailto:pouriyastk1@gmail.com"
            target="_blank"
            className="me-1"
          >
            <img
              src="https://shields.io/badge/Gmail-Let's Go-gmail.svg?style=flat&logo=gmail"
              alt="Gmail"
            />
          </Link>
          <Link
            href="https://wa.me/+989389372901"
            target="_blank"
            className="me-1"
          >
            <img
              src="https://shields.io/badge/Whatsapp-Let's Go-whatsapp.svg?style=flat&logo=whatsapp"
              alt="Whatsapp"
            />
          </Link>
          <Link href="https://t.me/P_CO_ST" target="_blank">
            <img
              src="https://shields.io/badge/Telegram-Let's Go-telegram.svg?style=flat&logo=telegram"
              alt="telegram"
            />
          </Link>
        </div>
      </CustomCol>
    </Row>
  );
}

export default Contact;
