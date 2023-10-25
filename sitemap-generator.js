//  this file to generate sitemap
const { SitemapStream } = require("sitemap");
const { createWriteStream, existsSync, mkdirSync } = require("fs");

// current routes
let routes = [
  { url: "/" },
  { url: "/blogs/:id" },
  { url: "/blogs/_id" },
];

routes.map((route) => {
  (route.changefreq = "daily"), (route.priority = 0.8);
});

const sitemapStream = new SitemapStream({
  hostname: process.env.VUE_APP_DOMAIN_NAME
    ? process.env.VUE_APP_DOMAIN_NAME
    : "https://github.com/AhmedReda431/samh",
});

// Check if the public directory exists, if not create it
if (!existsSync("public")) {
  mkdirSync("public");
}

const writeStream = createWriteStream("./public/sitemap.xml");
sitemapStream.pipe(writeStream);

routes.forEach((route) => {
  sitemapStream.write(route);
});

sitemapStream.end();

// Listen for the finish event to know when writing is done
writeStream.on("finish", () => console.log("Sitemap created successfully!"));
