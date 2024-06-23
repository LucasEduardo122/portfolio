module.exports = {
    siteUrl: 'https://cloudlector.xyz',
    generateRobotsTxt: true,
    priority: 1,
    changefreq: 'monthly',
    exclude: ['/server-sitemap.xml', '/wallpapers', '/mediakit'],
    robotsTxtOptions: {
      additionalSitemaps: ['https://cloudlector.xyz/server-sitemap.xml'],
    },
  }