// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("../node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-stack-js": () => import("../src/pages/stack.js" /* webpackChunkName: "component---src-pages-stack-js" */)
}

