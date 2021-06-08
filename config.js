const config = {
  gatsby: {
    pathPrefix: '/swmmorg',
    siteUrl: 'https://www.swmm-js.org/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: './invis.svg',
    logoLink: 'https://www.swmm-js.org/',
    title:
      "<a href='https://www.swmm-js.org'>swmm-js</a>",
    githubUrl: 'https://github.com/ikegdivs/swmm-js',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/swmmJSON',
      '/SJX',
    ],
    collapsedNav: [
      '/SJX', // add trailing slash if enabled above
      '/SJX/02OPTIONS', 
    ],
    links: [{ text: 'swmm-js', link: 'https://www.swmm-js.org' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a>Topics </a><div class='greenCircle'></div>",
  },
  siteMetadata: {
    title: 'SWMM-JS docs | swmm-js',
    description: 'EPA-SWMM file management, editing, and distribution software.',
    ogImage: null,
    docsLocation: 'https://github.com/ikegdivs/swmm-js',
    favicon: 'public/swmmjs.svg',
    logo: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook style SWMM-JS',
      short_name: 'swmmjs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: '/swmmjs.svg',
          sizes: `512x512`,
          type: `image/svg`,
        },
      ],
    },
  },
};

module.exports = config;
