import React from "react";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import "./TeamPage.css";

const teamMembers = [
  {
    name: "PH7NTOM",
    role: "Web Developer",
    about:
      "Hi! I'm PH7NTOM, the founder of Vorper! I have a knack for developing websites and I love playing with React and Typescript",
    icon: "https://github.com/PH7N.png",
    link: "https://github.com/PH7N",
  },
  {
    name: "Norlion",
    role: "Designer",
    about:
      "I'm Norlion! I design websites and more, and I also enjoy playing games such as Fall Guys and Minecraft",
    icon: "https://github.com/norleey.png",
    link: "https://github.com/norleey",
  },
  {
    name: "Nym1",
    role: "Helper",
    about:
      "I'm Nym1, a teenager from Germany! In my free time you'll find me playing Microsoft Flight Simulator or coding things",
    icon: "https://github.com/nymone.png",
    link: "https://github.com/nymone",
  },
];

export default function TeamPage(): JSX.Element {
  return (
    <section className="team-page">
      <Heading as="h1" className="team-title">
        <span className="gradient-text">The Vorper Team</span>
      </Heading>
      <p className="team-description">
        We're a diverse team of developers, each bringing unique skills and
        experiences to the table.
      </p>
      <div className="team-cards-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.icon}
              alt={`${member.name}'s icon`}
              className="team-icon"
            />
            <Heading as="h2" className="team-member-name">
              <Link to={member.link}>{member.name}</Link>
            </Heading>
            <p className="team-role">{member.role}</p>
            <p className="team-about">{member.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
