### wp-gatsby

# install gatsby

    `gatsby new wp-gatsby`

# install plugin to connect to wp site

    `npm install --save gatsby-source-wordpress`

# edit gatsby.config.js

    `
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "ipeyato.local", //your wp url
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
      },
    },
    `

#
