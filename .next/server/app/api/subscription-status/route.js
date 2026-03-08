"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/subscription-status/route";
exports.ids = ["app/api/subscription-status/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscription-status%2Froute&page=%2Fapi%2Fsubscription-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscription-status%2Froute.ts&appDir=%2Fworkspaces%2Ffungen%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Ffungen&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscription-status%2Froute&page=%2Fapi%2Fsubscription-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscription-status%2Froute.ts&appDir=%2Fworkspaces%2Ffungen%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Ffungen&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_fungen_app_api_subscription_status_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/subscription-status/route.ts */ \"(rsc)/./app/api/subscription-status/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/subscription-status/route\",\n        pathname: \"/api/subscription-status\",\n        filename: \"route\",\n        bundlePath: \"app/api/subscription-status/route\"\n    },\n    resolvedPagePath: \"/workspaces/fungen/app/api/subscription-status/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_fungen_app_api_subscription_status_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/subscription-status/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdWJzY3JpcHRpb24tc3RhdHVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdWJzY3JpcHRpb24tc3RhdHVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3Vic2NyaXB0aW9uLXN0YXR1cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGZnVuZ2VuJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZ3b3Jrc3BhY2VzJTJGZnVuZ2VuJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuZ2VuLz9kMDQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi93b3Jrc3BhY2VzL2Z1bmdlbi9hcHAvYXBpL3N1YnNjcmlwdGlvbi1zdGF0dXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1YnNjcmlwdGlvbi1zdGF0dXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdWJzY3JpcHRpb24tc3RhdHVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdWJzY3JpcHRpb24tc3RhdHVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL3dvcmtzcGFjZXMvZnVuZ2VuL2FwcC9hcGkvc3Vic2NyaXB0aW9uLXN0YXR1cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3Vic2NyaXB0aW9uLXN0YXR1cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscription-status%2Froute&page=%2Fapi%2Fsubscription-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscription-status%2Froute.ts&appDir=%2Fworkspaces%2Ffungen%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Ffungen&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/subscription-status/route.ts":
/*!**********************************************!*\
  !*** ./app/api/subscription-status/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2024-06-20\"\n});\nfunction parseCookies(header) {\n    if (!header) return {};\n    return Object.fromEntries(header.split(\";\").map((c)=>{\n        const [k, ...v] = c.trim().split(\"=\");\n        return [\n            k,\n            v.join(\"=\")\n        ];\n    }));\n}\nasync function GET(req) {\n    const cookies = parseCookies(req.headers.get(\"cookie\"));\n    const uid = cookies[\"fungen_uid\"];\n    if (!uid) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            active: false,\n            expires: null,\n            uid: null\n        });\n    }\n    const customers = await stripe.customers.list({\n        limit: 1,\n        expand: [\n            \"data.subscriptions\"\n        ]\n    });\n    const customer = customers.data.find((c)=>c.metadata?.fungen_uid === uid);\n    if (!customer) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            active: false,\n            expires: null,\n            uid\n        });\n    }\n    const active = customer.metadata?.subscription_active === \"true\";\n    const sub = customer.subscriptions?.data?.[0];\n    const expires = sub?.current_period_end || null;\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        active,\n        expires,\n        uid\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1YnNjcmlwdGlvbi1zdGF0dXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ2Y7QUFFNUIsTUFBTUUsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUIsRUFBWTtJQUNqRUMsWUFBWTtBQUNkO0FBRUEsU0FBU0MsYUFBYUMsTUFBcUI7SUFDekMsSUFBSSxDQUFDQSxRQUFRLE9BQU8sQ0FBQztJQUNyQixPQUFPQyxPQUFPQyxXQUFXLENBQ3ZCRixPQUFPRyxLQUFLLENBQUMsS0FBS0MsR0FBRyxDQUFDLENBQUNDO1FBQ3JCLE1BQU0sQ0FBQ0MsR0FBRyxHQUFHQyxFQUFFLEdBQUdGLEVBQUVHLElBQUksR0FBR0wsS0FBSyxDQUFDO1FBQ2pDLE9BQU87WUFBQ0c7WUFBR0MsRUFBRUUsSUFBSSxDQUFDO1NBQUs7SUFDekI7QUFFSjtBQUVPLGVBQWVDLElBQUlDLEdBQVk7SUFDcEMsTUFBTUMsVUFBVWIsYUFBYVksSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDN0MsTUFBTUMsTUFBTUgsT0FBTyxDQUFDLGFBQWE7SUFFakMsSUFBSSxDQUFDRyxLQUFLO1FBQ1IsT0FBT3ZCLHFEQUFZQSxDQUFDd0IsSUFBSSxDQUFDO1lBQ3ZCQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEgsS0FBSztRQUNQO0lBQ0Y7SUFFQSxNQUFNSSxZQUFZLE1BQU16QixPQUFPeUIsU0FBUyxDQUFDQyxJQUFJLENBQUM7UUFDNUNDLE9BQU87UUFDUEMsUUFBUTtZQUFDO1NBQXFCO0lBQ2hDO0lBRUEsTUFBTUMsV0FBV0osVUFBVUssSUFBSSxDQUFDQyxJQUFJLENBQ2xDLENBQUNwQixJQUFNQSxFQUFFcUIsUUFBUSxFQUFFQyxlQUFlWjtJQUdwQyxJQUFJLENBQUNRLFVBQVU7UUFDYixPQUFPL0IscURBQVlBLENBQUN3QixJQUFJLENBQUM7WUFDdkJDLFFBQVE7WUFDUkMsU0FBUztZQUNUSDtRQUNGO0lBQ0Y7SUFFQSxNQUFNRSxTQUFTTSxTQUFTRyxRQUFRLEVBQUVFLHdCQUF3QjtJQUUxRCxNQUFNQyxNQUFNTixTQUFTTyxhQUFhLEVBQUVOLE1BQU0sQ0FBQyxFQUFFO0lBQzdDLE1BQU1OLFVBQVVXLEtBQUtFLHNCQUFzQjtJQUUzQyxPQUFPdkMscURBQVlBLENBQUN3QixJQUFJLENBQUM7UUFDdkJDO1FBQ0FDO1FBQ0FIO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmdlbi8uL2FwcC9hcGkvc3Vic2NyaXB0aW9uLXN0YXR1cy9yb3V0ZS50cz83ZTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkgYXMgc3RyaW5nLCB7XG4gIGFwaVZlcnNpb246IFwiMjAyNC0wNi0yMFwiLFxufSk7XG5cbmZ1bmN0aW9uIHBhcnNlQ29va2llcyhoZWFkZXI6IHN0cmluZyB8IG51bGwpIHtcbiAgaWYgKCFoZWFkZXIpIHJldHVybiB7fTtcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBoZWFkZXIuc3BsaXQoXCI7XCIpLm1hcCgoYykgPT4ge1xuICAgICAgY29uc3QgW2ssIC4uLnZdID0gYy50cmltKCkuc3BsaXQoXCI9XCIpO1xuICAgICAgcmV0dXJuIFtrLCB2LmpvaW4oXCI9XCIpXTtcbiAgICB9KVxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKHJlcS5oZWFkZXJzLmdldChcImNvb2tpZVwiKSk7XG4gIGNvbnN0IHVpZCA9IGNvb2tpZXNbXCJmdW5nZW5fdWlkXCJdO1xuXG4gIGlmICghdWlkKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgdWlkOiBudWxsLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY3VzdG9tZXJzID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5saXN0KHtcbiAgICBsaW1pdDogMSxcbiAgICBleHBhbmQ6IFtcImRhdGEuc3Vic2NyaXB0aW9uc1wiXSxcbiAgfSk7XG5cbiAgY29uc3QgY3VzdG9tZXIgPSBjdXN0b21lcnMuZGF0YS5maW5kKFxuICAgIChjKSA9PiBjLm1ldGFkYXRhPy5mdW5nZW5fdWlkID09PSB1aWRcbiAgKTtcblxuICBpZiAoIWN1c3RvbWVyKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgdWlkLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYWN0aXZlID0gY3VzdG9tZXIubWV0YWRhdGE/LnN1YnNjcmlwdGlvbl9hY3RpdmUgPT09IFwidHJ1ZVwiO1xuXG4gIGNvbnN0IHN1YiA9IGN1c3RvbWVyLnN1YnNjcmlwdGlvbnM/LmRhdGE/LlswXTtcbiAgY29uc3QgZXhwaXJlcyA9IHN1Yj8uY3VycmVudF9wZXJpb2RfZW5kIHx8IG51bGw7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICBhY3RpdmUsXG4gICAgZXhwaXJlcyxcbiAgICB1aWQsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImFwaVZlcnNpb24iLCJwYXJzZUNvb2tpZXMiLCJoZWFkZXIiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsInNwbGl0IiwibWFwIiwiYyIsImsiLCJ2IiwidHJpbSIsImpvaW4iLCJHRVQiLCJyZXEiLCJjb29raWVzIiwiaGVhZGVycyIsImdldCIsInVpZCIsImpzb24iLCJhY3RpdmUiLCJleHBpcmVzIiwiY3VzdG9tZXJzIiwibGlzdCIsImxpbWl0IiwiZXhwYW5kIiwiY3VzdG9tZXIiLCJkYXRhIiwiZmluZCIsIm1ldGFkYXRhIiwiZnVuZ2VuX3VpZCIsInN1YnNjcmlwdGlvbl9hY3RpdmUiLCJzdWIiLCJzdWJzY3JpcHRpb25zIiwiY3VycmVudF9wZXJpb2RfZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/subscription-status/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/hasown","vendor-chunks/get-intrinsic","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscription-status%2Froute&page=%2Fapi%2Fsubscription-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscription-status%2Froute.ts&appDir=%2Fworkspaces%2Ffungen%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Ffungen&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();