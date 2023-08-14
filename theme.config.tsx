import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Aurora Docs</span>,
  project: {
    link: "https://github.com/JeMoRobo/Aurora-Lib",
  },
  chat: {
    link: "https://discord.gg/ADegEnxDhk",
  },
  docsRepositoryBase: "https://github.com/JeMoRobo/Aurora-Docs/tree/main",
  footer: {
    text: "Aurora Docs © 2023",
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    // TODO swap to vercel link after deployment
    const socialCard =
      route === "/" || !title
        ? "https://aurora-docs.vercel.app//api/og?Aurora=${Aurora Docs}"
        : `https://aurora-docs.vercel.app//api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Aurora Docs: Documentation for Aurora CAN LED Controller."
        />
        <meta name="og:description" content="Aurora Docs." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="Aurora CAN LED Controller" />
        <meta
          name="twitter:url"
          content="https://aurora-docs.vercel.app"
        />
        <meta
          name="og:title"
          content={title ? title + " – Aurora Docs" : "Aurora Docs"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Aurora CAN Controller" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Aurora Docs",
      };
    }
  },
};

export default config;
