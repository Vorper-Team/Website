import Layout from "@theme/Layout";
import Team from "@site/src/components/TeamPage/members";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Team"
      description="We are a team of developers from all around the world and this page will show you who our developers are."
    >
      <Team />
    </Layout>
  );
}
