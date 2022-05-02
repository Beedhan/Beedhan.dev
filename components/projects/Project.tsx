import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import styles from "./project.module.css";
import ExampleImage from "../../public/Example.png";
import Link from "next/link";

type name = {
  name: string;
  description: string;
  url: string;
};
const Project: NextPage<name> = ({ name, description, url }) => {
  return (
    <Link href={url} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectCard}
      >
        <div>
          <h1>{name}</h1>
          <h3>{description}</h3>
          <p style={{ marginTop: "50px" }}>tech logo</p>
        </div>
        <div>
          <Image
            src={ExampleImage}
            width={300}
            height={180}
            objectFit="cover"
            alt="examples"
          />
        </div>
      </a>
    </Link>
  );
};

export default Project;
