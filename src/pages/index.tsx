import Hero from "@site/src/components/HeroFeatures/hero";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures/features";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Homepage"
      description="We are a team of developers from all around the world with an objective to make free and open source software better."
    >
      <Hero />
      <HomepageFeatures />
    </Layout>
  );
}
