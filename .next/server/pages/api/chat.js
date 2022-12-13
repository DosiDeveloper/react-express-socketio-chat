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
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "Socket.IO":
/*!****************************!*\
  !*** external "Socket.IO" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("Socket.IO");;

/***/ }),

/***/ "(api)/./pages/api/chat.js":
/*!***************************!*\
  !*** ./pages/api/chat.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var Socket_IO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Socket.IO */ \"Socket.IO\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Socket_IO__WEBPACK_IMPORTED_MODULE_0__]);\nSocket_IO__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst ChatHandler = (req, res)=>{\n    if (!res.socket.server.io) {\n        const io = new Socket_IO__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);\n        res.socket.server.io = io;\n        io.on(\"connection\", (socket)=>{\n            socket.on(\"message\", (message)=>{\n                socket.broadcast.emit(\"message\", {\n                    body: message,\n                    from: socket.id\n                });\n            });\n        });\n    }\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQztBQUVuQyxNQUFNQyxjQUFjLENBQUNDLEtBQUtDLE1BQVE7SUFDaEMsSUFBSSxDQUFDQSxJQUFJQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFO1FBQ3pCLE1BQU1BLEtBQUssSUFBSU4sNkNBQU1BLENBQUNHLElBQUlDLE1BQU0sQ0FBQ0MsTUFBTTtRQUN2Q0YsSUFBSUMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsR0FBR0E7UUFDdkJBLEdBQUdDLEVBQUUsQ0FBQyxjQUFjLENBQUNILFNBQVc7WUFDOUJBLE9BQU9HLEVBQUUsQ0FBQyxXQUFXLENBQUNDLFVBQVk7Z0JBQ2hDSixPQUFPSyxTQUFTLENBQUNDLElBQUksQ0FBQyxXQUFXO29CQUMvQkMsTUFBTUg7b0JBQ05JLE1BQU1SLE9BQU9TLEVBQUU7Z0JBQ2pCO1lBQ0Y7UUFDRjtJQUNGLENBQUM7SUFDRFYsSUFBSVcsR0FBRztBQUNUO0FBRUEsaUVBQWViLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvY2hhdC5qcz8xYzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJTb2NrZXQuSU9cIjtcclxuXHJcbmNvbnN0IENoYXRIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgaWYgKCFyZXMuc29ja2V0LnNlcnZlci5pbykge1xyXG4gICAgY29uc3QgaW8gPSBuZXcgU2VydmVyKHJlcy5zb2NrZXQuc2VydmVyKTtcclxuICAgIHJlcy5zb2NrZXQuc2VydmVyLmlvID0gaW87XHJcbiAgICBpby5vbihcImNvbm5lY3Rpb25cIiwgKHNvY2tldCkgPT4ge1xyXG4gICAgICBzb2NrZXQub24oXCJtZXNzYWdlXCIsIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmJyb2FkY2FzdC5lbWl0KFwibWVzc2FnZVwiLCB7XHJcbiAgICAgICAgICBib2R5OiBtZXNzYWdlLFxyXG4gICAgICAgICAgZnJvbTogc29ja2V0LmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXMuZW5kKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0SGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIlNlcnZlciIsIkNoYXRIYW5kbGVyIiwicmVxIiwicmVzIiwic29ja2V0Iiwic2VydmVyIiwiaW8iLCJvbiIsIm1lc3NhZ2UiLCJicm9hZGNhc3QiLCJlbWl0IiwiYm9keSIsImZyb20iLCJpZCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.js"));
module.exports = __webpack_exports__;

})();