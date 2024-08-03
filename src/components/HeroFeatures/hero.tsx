import React from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import "./HeroSection.css";

export default function Hero(): JSX.Element {
  return (
    <section className="hero-section">
      <Heading as="h1" className="hero-title">
        <span className="gradient-text">We're Vorper,</span>
        <br />
        The Devs.
      </Heading>
      <p className="hero-description">
        We're a team of developers focused on making open source better, faster,
        and more usable.
      </p>
      <div className="button-container">
        <Link to="/docs" className="button button--primary button--lg">
          Learn More
        </Link>
      </div>
    </section>
  );
}
