module.exports = function(eleventyConfig) {

    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        breaks: true,
        linkify: false
    };
  
    eleventyConfig.setLibrary("md", markdownIt(options));

    // Copy `static/` to `_site/static`
    eleventyConfig.addPassthroughCopy("static");
};