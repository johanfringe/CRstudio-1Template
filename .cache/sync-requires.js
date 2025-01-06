
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/404.js")),
  "component---src-pages-admin-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/admin.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/index.js")),
  "component---src-pages-resart-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/resart.js")),
  "component---src-pages-resbio-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/resbio.js")),
  "component---src-pages-rescol-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/rescol.js")),
  "component---src-pages-resexh-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/resexh.js")),
  "component---src-pages-reslit-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/reslit.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/johan/CRstudio/CRstudio-1Template/src/pages/search.js"))
}

