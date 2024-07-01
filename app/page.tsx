import type { Metadata } from "next";

import { Row } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";

import CustomCol from "@/components/CustomCol";

import { basePath } from "@/next.config.mjs";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <Row>
      <CustomCol customClass="d-lg-flex justify-content-between">
        <div className="col-lg-3 col-12 overflow-hidden rounded-5 mb-lg-0 mb-3">
          <Image
            src={`${basePath}/images/me.png`}
            width={250}
            height={300}
            alt="Pouriya Sedaghat"
            layout="responsive"
          />
        </div>
        <div className="col-lg-9 col-12 d-flex flex-column justify-content-between order-lg-first">
          <div>
            <h2 className="h5">Hello &#128075;</h2>
            <p>
              I&apos;m Pouriya Sedaghat, A Frontend Developer. <br /> I have
              been working in this field for almost two years. <br /> I am very
              interested in developing programs that challenge me and have a
              complex UI. <br /> I am very interested in gaining new experiences
              and working with different teams.
            </p>
            <b>
              For more information and to download the resume file, click on{" "}
              <Link href="/about" className="text-decoration-none text-info">
                About Me
              </Link>
              .
            </b>
          </div>
          <div className="mt-lg-0 mt-3">
            <h2 className="h5">Follow Me</h2>
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
              href="https://stackoverflow.com/users/21948275/pouriya-sedaghat"
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
            <Link href="mailto:pouriyastk1@gmail.com" target="_blank">
              <img
                src="https://shields.io/badge/Gmail-Let's Go-gmail.svg?style=flat&logo=gmail"
                alt="Gmail"
              />
            </Link>
          </div>
        </div>
      </CustomCol>
    </Row>
  );
}
