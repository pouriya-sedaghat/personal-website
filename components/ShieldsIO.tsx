import Link from "next/link";

type ItemType = { link: string; src: string; alt: string };

function ShieldsIO({ link, src, alt }: ItemType) {
  return (
    <Link href={link} target="_blank">
      <img src={src} alt={alt} />
    </Link>
  );
}

export default ShieldsIO;
