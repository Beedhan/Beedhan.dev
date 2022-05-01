import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import styles from "./project.module.css";
import ExampleImage from "../../public/Example.png";

type name = {
  name: String;
};
const Project: NextPage<name> = ({ name }) => {
  return (
    <div className={styles.projectCard}>
      <div>
        <h1>{name}</h1>
        <h3>Description</h3>
        <p style={{ marginTop: "100px" }}>tech logo</p>
      </div>
      <div>
        <Image
          src={ExampleImage}
          width={300}
          height={240}
          objectFit="fill"
          alt="examples"
        />
      </div>
    </div>
  );
};

export default Project;
