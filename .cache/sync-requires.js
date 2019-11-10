const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/ryansage/sei-course/ga-sei/sageguy09.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ryansage/sei-course/ga-sei/sageguy09.github.io/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/ryansage/sei-course/ga-sei/sageguy09.github.io/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ryansage/sei-course/ga-sei/sageguy09.github.io/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/ryansage/sei-course/ga-sei/sageguy09.github.io/src/pages/projects.js"))),
  "component---src-pages-stack-js": hot(preferDefault(require("/Users/ryansage/sei-course/ga-sei/sageguy09.github.io/src/pages/stack.js")))
}

