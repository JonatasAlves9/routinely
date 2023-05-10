"use strict";
self["webpackHotUpdateroutinely"]("main",{

/***/ "./src/main/routing/AppRoutes.tsx":
/*!****************************************!*\
  !*** ./src/main/routing/AppRoutes.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _PrivateRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivateRoutes */ "./src/main/routing/PrivateRoutes.tsx");
/* harmony import */ var _presentation_app_modules_errors_ErrorsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../presentation/app/modules/errors/ErrorsPage */ "./src/presentation/app/modules/errors/ErrorsPage.tsx");
/* harmony import */ var _presentation_app_modules_auth2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../presentation/app/modules/auth2 */ "./src/presentation/app/modules/auth2/index.ts");
/* harmony import */ var _presentation_app_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../presentation/app/App */ "./src/presentation/app/App.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();






/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = "MISSING_ENV_VAR";
const AppRoutes = () => {
    _react_refresh_temp_2();
    const { currentUser } = (0,_presentation_app_modules_auth2__WEBPACK_IMPORTED_MODULE_3__.useAuth)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, Object.assign({ basename: PUBLIC_URL }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({ element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_presentation_app_App__WEBPACK_IMPORTED_MODULE_4__.App, {}) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: 'error/*', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_presentation_app_modules_errors_ErrorsPage__WEBPACK_IMPORTED_MODULE_2__.ErrorsPage, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: 'logout', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_presentation_app_modules_auth2__WEBPACK_IMPORTED_MODULE_3__.Logout, {}) }), !currentUser ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: '/*', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PrivateRoutes__WEBPACK_IMPORTED_MODULE_1__.PrivateRoutes, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { index: true, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate, { to: '/dashboard' }) })] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: 'auth/*', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_presentation_app_modules_auth2__WEBPACK_IMPORTED_MODULE_3__.AuthPage, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: '*', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate, { to: '/auth' }) })] }))] })) }) })));
};
_react_refresh_temp_1 = AppRoutes;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "AppRoutes");
_react_refresh_temp_2(AppRoutes, "lFaqcqpYfH+hD2+XWVfEsX3mhzk=", false, () => [_presentation_app_modules_auth2__WEBPACK_IMPORTED_MODULE_3__.useAuth]);



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("60e6c40cd379604613fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hODdkOTZkYzllNzgyY2NiMjYzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQVk7QUFDa0Q7QUFDWjtBQUMxQjtBQUM4QjtBQUNHO0FBQ2hDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQVc7QUFDbEM7QUFDQTtBQUNBLDRCQUE0Qix3RUFBTztBQUNuQyxZQUFZLHNEQUFJLENBQUMsMkRBQWEsc0RBQXNELHNEQUFJLENBQUMsb0RBQU0sY0FBYyx1REFBSyxDQUFDLG1EQUFLLDJCQUEyQixzREFBSSxDQUFDLHNEQUFHLHNCQUFzQixzREFBSSxDQUFDLG1EQUFLLDhCQUE4QixzREFBSSxDQUFDLG1GQUFVLFVBQVUsc0RBQUksQ0FBQyxtREFBSyw2QkFBNkIsc0RBQUksQ0FBQyxtRUFBTSwwQkFBMEIsdURBQUssQ0FBQyx1REFBUyxlQUFlLHNEQUFJLENBQUMsbURBQUsseUJBQXlCLHNEQUFJLENBQUMseURBQWEsVUFBVSxzREFBSSxDQUFDLG1EQUFLLDBCQUEwQixzREFBSSxDQUFDLHNEQUFRLG1DQUFtQyx1REFBSyxDQUFDLHVEQUFTLGVBQWUsc0RBQUksQ0FBQyxtREFBSyw2QkFBNkIsc0RBQUksQ0FBQyxxRUFBUSxVQUFVLHNEQUFJLENBQUMsbURBQUssd0JBQXdCLHNEQUFJLENBQUMsc0RBQVE7QUFDMW5CO0FBQ0E7QUFDQSxzQ0FBWTtBQUNaLCtFQUErRSxvRUFBTztBQUNqRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvbWFpbi9yb3V0aW5nL0FwcFJvdXRlcy50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSwgQnJvd3NlclJvdXRlciwgTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByaXZhdGVSb3V0ZXMgfSBmcm9tICcuL1ByaXZhdGVSb3V0ZXMnO1xuaW1wb3J0IHsgRXJyb3JzUGFnZSB9IGZyb20gJy4uLy4uL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9lcnJvcnMvRXJyb3JzUGFnZSc7XG5pbXBvcnQgeyBMb2dvdXQsIEF1dGhQYWdlLCB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2F1dGgyJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4uLy4uL3ByZXNlbnRhdGlvbi9hcHAvQXBwJztcbi8qKlxuICogQmFzZSBVUkwgb2YgdGhlIHdlYnNpdGUuXG4gKlxuICogQHNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9jcmVhdGUtcmVhY3QtYXBwL2RvY3MvdXNpbmctdGhlLXB1YmxpYy1mb2xkZXJcbiAqL1xuY29uc3QgeyBQVUJMSUNfVVJMIH0gPSBwcm9jZXNzLmVudjtcbmNvbnN0IEFwcFJvdXRlcyA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XG4gICAgcmV0dXJuIChfanN4KEJyb3dzZXJSb3V0ZXIsIE9iamVjdC5hc3NpZ24oeyBiYXNlbmFtZTogUFVCTElDX1VSTCB9LCB7IGNoaWxkcmVuOiBfanN4KFJvdXRlcywgeyBjaGlsZHJlbjogX2pzeHMoUm91dGUsIE9iamVjdC5hc3NpZ24oeyBlbGVtZW50OiBfanN4KEFwcCwge30pIH0sIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCB7IHBhdGg6ICdlcnJvci8qJywgZWxlbWVudDogX2pzeChFcnJvcnNQYWdlLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogJ2xvZ291dCcsIGVsZW1lbnQ6IF9qc3goTG9nb3V0LCB7fSkgfSksICFjdXJyZW50VXNlciA/IChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCB7IHBhdGg6ICcvKicsIGVsZW1lbnQ6IF9qc3goUHJpdmF0ZVJvdXRlcywge30pIH0pLCBfanN4KFJvdXRlLCB7IGluZGV4OiB0cnVlLCBlbGVtZW50OiBfanN4KE5hdmlnYXRlLCB7IHRvOiAnL2Rhc2hib2FyZCcgfSkgfSldIH0pKSA6IChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCB7IHBhdGg6ICdhdXRoLyonLCBlbGVtZW50OiBfanN4KEF1dGhQYWdlLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogJyonLCBlbGVtZW50OiBfanN4KE5hdmlnYXRlLCB7IHRvOiAnL2F1dGgnIH0pIH0pXSB9KSldIH0pKSB9KSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IEFwcFJvdXRlcztcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiQXBwUm91dGVzXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKEFwcFJvdXRlcywgXCJsRmFxY3FwWWZIK2hEMitYV1ZmRXNYM21oems9XCIsIGZhbHNlLCAoKSA9PiBbdXNlQXV0aF0pO1xuZXhwb3J0IHsgQXBwUm91dGVzIH07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MGU2YzQwY2QzNzk2MDQ2MTNmZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==