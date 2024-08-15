import Hero from "@site/src/components/HeroFeatures/hero";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures/features";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Homepage"
      description="Vorper is a team of developers from all around the world with a unified goal of making FOSS better."
    >
      <Hero />
      <HomepageFeatures />
    </Layout>
  );
}
