import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  // Root Info
  title: "Vorper",
  tagline:
    "A team of Developers from all around the world with a single goal: to make free and open source software.",
  favicon: "img/favicon.ico",
  url: "https://www.vorper.com",
  baseUrl: "/",

  // Website Deployment
  organizationName: "Vorper-Team",
  projectName: "Vorper",
  deploymentBranch: "deployment",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Vorper-Team/Vorper/tree/main/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Vorper-Team/Vorper/tree/main/website/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/vorper-card.png",
    navbar: {
      logo: {
        alt: "Vorper Logo",
        src: "img/logo_light.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/team", label: "Team", position: "left" },
        {
          href: "https://github.com/vorper-team/vorper",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Vorper-Team",
            },
            {
              label: "Discord",
              href: "https://discord.gg/XeRaBUvRfe",
            },
            {
              label: "Email",
              href: "mailto:contact@vorper.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Privacy Policy",
              href: "/privacy",
            },
            {
              label: "Terms of Service",
              href: "/terms",
            },
            {
              label: "Branding",
              href: "/branding",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vorper`,
    },
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
