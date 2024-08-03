import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  alt: string;
};

const featureList: FeatureItem[] = [
  {
    title: "Optimized Development",
    Svg: require("@site/static/img/optimized-development.svg").default,
    description: (
      <p className={styles.coloredParagraph}>
        We build software with speed and functionality in mind. We make sure
        code is written in the most optimized way possible.
      </p>
    ),
    alt: "A rocket ship taking off",
  },
  {
    title: "Sustainable Project",
    Svg: require("@site/static/img/sustainable-development.svg").default,
    description: (
      <p className={styles.coloredParagraph}>
        Once a project is started, we make sure it's gonna be sustainable and
        maintainable. We use advanced tooling to ensure this.
      </p>
    ),
    alt: "A person looking at a chart",
  },
  {
    title: "Open Source Software",
    Svg: require("@site/static/img/open-source.svg").default,
    description: (
      <p className={styles.coloredParagraph}>
        We don't make our software closed source, we make sure that anyone,
        including you, can modify and redistribute to your heart's content.
      </p>
    ),
    alt: "Logo of Open Source licenses",
  },
];

function Feature({ title, Svg, description, alt }: FeatureItem) {
  return (
    <article className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" aria-label={alt} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        {description}
      </div>
    </article>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12"></div>
        </div>
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
