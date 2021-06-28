module.exports = {
  siteMetadata: {
    title: 'Quotes',
    siteUrl: 'https://deem.netlify.app',
    description:
      'A simple quotes app which consists of handpicked and curated quotes. This can be installed as a standalone application from your browser.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-page-transitions`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quotes`,
        short_name: `Quotes`,
        start_url: `/`,
        background_color: `#131313`,
        description:
          'A simple quotes app which consists of handpicked and curated quotes. This can be installed as a standalone application from your browser.',
        theme_color: `#131313`,
        display: `standalone`,
        icon: 'src/images/quote.png',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`]
      }
    }
  ]
}
