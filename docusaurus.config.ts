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

  // Preferences
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  titleDelimiter: "-",
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/docusaurus.png",
      },
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-LDPSDB49S1",
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: "GTM-MDXQMNWG",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
        docs: {
          breadcrumbs: true,
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
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: "theme-color", content: "#5f52bf" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image:src", content: "/img/vorper-card.png" },
    ],
    image: "img/vorper-card.png",
    navbar: {
      title: "Vorper",
      logo: {
        alt: "Vorper Logo",
        src: "img/logo.svg",
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
              href: "https://example.com",
            },
            {
              label: "Terms of Service",
              href: "https://example.com",
            },
            {
              label: "Branding",
              href: "/brand",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vorper`,
    },

    // FIX BROKEN LINKS, WORKAROUND IS EXAMPLE.COM

    prism: {
      theme: prismThemes.jettwaveLight,
      darkTheme: prismThemes.jettwaveDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
