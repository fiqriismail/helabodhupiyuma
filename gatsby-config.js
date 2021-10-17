module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Hela Bodhu Piyuma",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans Sinhala`,
          `Noto Serif Sinhala`
        ]
      }
    }
  ],
};
