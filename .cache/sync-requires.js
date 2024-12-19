
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/index.js"))
}

