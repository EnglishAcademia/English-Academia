module.exports = function (eleventyConfig) {
  // Blog collection
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md");
  });

  // Passthrough copy for static assets and files
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("scripts.js");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes", // ✅ Explicit, even though it's default
    },
    markdownTemplateEngine: "njk",
  };
}; // ← This was missing
