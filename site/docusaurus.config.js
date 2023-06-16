// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const typedocConfig = require("../typedoc.config");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SDK home",
  tagline: "dummy project for docs generation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "sdkSidebar",
            position: "left",
            label: "SDK",
          },
        ],
      },
    },
  plugins: [
    [
      "docusaurus-plugin-typedoc",

      // Plugin / TypeDoc options
      {
        ...typedocConfig,
        entryPoints: ["../src/index.ts"],
        tsconfig: "../tsconfig.json",
        out: "sdk",

        // override typedoc configuration
        // exclude: ["**/*+(test|spec).ts"],
        // externalPattern: ["**/@**/**/*.ts"],
        // excludeExternals: true,
        // excludePrivate: true,
        // excludeInternal: true,
        // excludeProtected: true,
        // excludeNotDocumented: true,
        // excludeReferences: true,
      },
    ],
  ],
};

module.exports = config;
