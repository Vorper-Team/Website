import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p></p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Homepage`}
      description="Vorper is a team of developers from all around the world with a unified goal: to make FOSS better for everyone."
    >
      <HomepageHeader />
      <main>
        <h1 className={styles.mainHeading}>
          This site is under heavy development and WILL not be indexed by search
          engines as of now, the site you are viewing right now is just the
          latest testing deployment
        </h1>
      </main>
    </Layout>
  );
}
