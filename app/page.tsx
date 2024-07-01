import type { Metadata } from "next";

import { basePath } from "@/next.config.mjs";

import { Row } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";

import CustomCol from "@/components/CustomCol";
import ShieldsIO from "@/components/ShieldsIO";

import logos from "@/data/logos.json";

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
            <div className="d-flex flex-wrap gap-1">
              {logos.map(
                (item, index) =>
                  index < 5 && <ShieldsIO key={item.alt} {...item} />
              )}
            </div>
          </div>
        </div>
      </CustomCol>
    </Row>
  );
}
