"use strict";
self["webpackHotUpdateroutinely"]("main",{

/***/ "./src/presentation/app/pages/dashboard/DashboardWrapper.tsx":
/*!*******************************************************************!*\
  !*** ./src/presentation/app/pages/dashboard/DashboardWrapper.tsx ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardWrapper": () => (/* binding */ DashboardWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _config_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/layout/core */ "./src/presentation/config/layout/core/index.ts");
/* harmony import */ var _config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/partials/widgets */ "./src/presentation/config/partials/widgets/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1, _react_refresh_temp_2;
var _react_refresh_temp_3, _react_refresh_temp_4;
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_4 = __webpack_require__.$Refresh$.signature();





const dashboardBreadCrumbs = [
    {
        title: 'Home',
        path: '/dashboard',
        isSeparator: false,
        isActive: false,
    },
];
const DashboardPage = () => {
    _react_refresh_temp_3();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        var _a;
        // We have to show toolbar only for dashboard page
        (_a = document.getElementById('kt_layout_toolbar')) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
        return () => {
            var _a;
            (_a = document.getElementById('kt_layout_toolbar')) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'row gy-5 g-xl-8' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xxl-4' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.MixedWidget3, { className: 'card-xl-stretch mb-xl-8', chartColor: 'primary', chartHeight: '250px' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xxl-8' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.TablesWidget9, { className: 'card-xxl-stretch mb-5 mb-xl-8' }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'row gy-5 g-xl-8' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'col-xxl-4' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.StatisticsWidget4, { className: 'card-xxl-stretch-50 mb-5 mb-xl-8', svgIcon: 'element-11', color: 'danger', description: 'Weekly Income', change: '750$' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.StatisticsWidget4, { className: 'card-xxl-stretch-50 mb-xl-8', svgIcon: 'basket', color: 'success', description: 'Sales Change', change: '+259' })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xxl-4' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.ListsWidget9, { className: 'card-xxl-stretch mb-xl-8' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xxl-4' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.ListsWidget4, { className: 'card-xxl-stretch mb-5 mb-xl-8' }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'row gy-5 g-xl-8' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xxl-4' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.ListsWidget3, { className: 'card-xxl-stretch mb-xl-3' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xxl-8' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.TablesWidget9, { className: 'card-xxl-stretch mb-5 mb-xl-8' }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'row gy-5 g-xl-8' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xl-4' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.ListsWidget2, { className: 'card-xl-stretch mb-xl-8' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xl-4' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.ListsWidget6, { className: 'card-xl-stretch mb-xl-8' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xl-4' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.ListsWidget4, { className: 'card-xl-stretch mb-5 mb-xl-8', items: 5 }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'row g-5 gx-xxl-8' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xxl-4' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.MixedWidget8, { className: 'card-xxl-stretch mb-xl-3', chartColor: 'success', chartHeight: '150px' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-xxl-8' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_partials_widgets__WEBPACK_IMPORTED_MODULE_3__.TablesWidget5, { className: 'card-xxl-stretch mb-5 mb-xxl-8' }) }))] }))] }));
};
_react_refresh_temp_1 = DashboardPage;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "DashboardPage");
_react_refresh_temp_3(DashboardPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const DashboardWrapper = () => {
    _react_refresh_temp_4();
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_layout_core__WEBPACK_IMPORTED_MODULE_2__.PageTitle, Object.assign({ breadcrumbs: dashboardBreadCrumbs }, { children: intl.formatMessage({ id: 'MENU.DASHBOARD' }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardPage, {})] }));
};
_react_refresh_temp_2 = DashboardWrapper;
__webpack_require__.$Refresh$.register(_react_refresh_temp_2, "DashboardWrapper");
_react_refresh_temp_4(DashboardWrapper, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, () => [react_intl__WEBPACK_IMPORTED_MODULE_4__["default"]]);



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
/******/ 	__webpack_require__.h = () => ("803e7786b9f222fb5c96")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZWI1MTI1ZTRhODdhYTgxN2M4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBWTtBQUNwQyx3QkFBd0IsdUNBQVk7QUFDa0Q7QUFDcEQ7QUFDRztBQUNtQjtBQUM4STtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBSyxDQUFDLHVEQUFTLGVBQWUsdURBQUsscUVBQXFFLHNEQUFJLDhEQUE4RCxzREFBSSxDQUFDLGtFQUFZLDhGQUE4RixzREFBSSw4REFBOEQsc0RBQUksQ0FBQyxtRUFBYSw0REFBNEQsdURBQUsscUVBQXFFLHVEQUFLLCtEQUErRCxzREFBSSxDQUFDLHVFQUFpQiw0SUFBNEksc0RBQUksQ0FBQyx1RUFBaUIsd0lBQXdJLHNEQUFJLDhEQUE4RCxzREFBSSxDQUFDLGtFQUFZLGtEQUFrRCxzREFBSSw4REFBOEQsc0RBQUksQ0FBQyxrRUFBWSw0REFBNEQsdURBQUsscUVBQXFFLHNEQUFJLDhEQUE4RCxzREFBSSxDQUFDLGtFQUFZLGtEQUFrRCxzREFBSSw4REFBOEQsc0RBQUksQ0FBQyxtRUFBYSw0REFBNEQsdURBQUsscUVBQXFFLHNEQUFJLDZEQUE2RCxzREFBSSxDQUFDLGtFQUFZLGlEQUFpRCxzREFBSSw2REFBNkQsc0RBQUksQ0FBQyxrRUFBWSxpREFBaUQsc0RBQUksNkRBQTZELHNEQUFJLENBQUMsa0VBQVkscUVBQXFFLHVEQUFLLHNFQUFzRSxzREFBSSw4REFBOEQsc0RBQUksQ0FBQyxrRUFBWSwrRkFBK0Ysc0RBQUksOERBQThELHNEQUFJLENBQUMsbUVBQWE7QUFDOXlFO0FBQ0E7QUFDQSxzQ0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzREFBTztBQUN4QixZQUFZLHVEQUFLLENBQUMsdURBQVMsZUFBZSxzREFBSSxDQUFDLDBEQUFTLHFIQUFxSCxzREFBSTtBQUNqTDtBQUNBO0FBQ0Esc0NBQVk7QUFDWixzRkFBc0Ysa0RBQU87QUFDakU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvcGFnZXMvZGFzaGJvYXJkL0Rhc2hib2FyZFdyYXBwZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMywgX3JlYWN0X3JlZnJlc2hfdGVtcF80O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zID0gJFJlZnJlc2hTaWckKCk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzQgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IFBhZ2VUaXRsZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9sYXlvdXQvY29yZSc7XG5pbXBvcnQgeyBMaXN0c1dpZGdldDIsIExpc3RzV2lkZ2V0MywgTGlzdHNXaWRnZXQ0LCBMaXN0c1dpZGdldDYsIExpc3RzV2lkZ2V0OSwgTWl4ZWRXaWRnZXQzLCBNaXhlZFdpZGdldDgsIFN0YXRpc3RpY3NXaWRnZXQ0LCBUYWJsZXNXaWRnZXQ1LCBUYWJsZXNXaWRnZXQ5LCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9wYXJ0aWFscy93aWRnZXRzJztcbmNvbnN0IGRhc2hib2FyZEJyZWFkQ3J1bWJzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdIb21lJyxcbiAgICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxuICAgICAgICBpc1NlcGFyYXRvcjogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICB9LFxuXTtcbmNvbnN0IERhc2hib2FyZFBhZ2UgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8zKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBXZSBoYXZlIHRvIHNob3cgdG9vbGJhciBvbmx5IGZvciBkYXNoYm9hcmQgcGFnZVxuICAgICAgICAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfbGF5b3V0X3Rvb2xiYXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2xheW91dF90b29sYmFyJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncm93IGd5LTUgZy14bC04JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnY29sLXh4bC00JyB9LCB7IGNoaWxkcmVuOiBfanN4KE1peGVkV2lkZ2V0MywgeyBjbGFzc05hbWU6ICdjYXJkLXhsLXN0cmV0Y2ggbWIteGwtOCcsIGNoYXJ0Q29sb3I6ICdwcmltYXJ5JywgY2hhcnRIZWlnaHQ6ICcyNTBweCcgfSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjb2wteHhsLTgnIH0sIHsgY2hpbGRyZW46IF9qc3goVGFibGVzV2lkZ2V0OSwgeyBjbGFzc05hbWU6ICdjYXJkLXh4bC1zdHJldGNoIG1iLTUgbWIteGwtOCcgfSkgfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdyb3cgZ3ktNSBnLXhsLTgnIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnY29sLXh4bC00JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChTdGF0aXN0aWNzV2lkZ2V0NCwgeyBjbGFzc05hbWU6ICdjYXJkLXh4bC1zdHJldGNoLTUwIG1iLTUgbWIteGwtOCcsIHN2Z0ljb246ICdlbGVtZW50LTExJywgY29sb3I6ICdkYW5nZXInLCBkZXNjcmlwdGlvbjogJ1dlZWtseSBJbmNvbWUnLCBjaGFuZ2U6ICc3NTAkJyB9KSwgX2pzeChTdGF0aXN0aWNzV2lkZ2V0NCwgeyBjbGFzc05hbWU6ICdjYXJkLXh4bC1zdHJldGNoLTUwIG1iLXhsLTgnLCBzdmdJY29uOiAnYmFza2V0JywgY29sb3I6ICdzdWNjZXNzJywgZGVzY3JpcHRpb246ICdTYWxlcyBDaGFuZ2UnLCBjaGFuZ2U6ICcrMjU5JyB9KV0gfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjb2wteHhsLTQnIH0sIHsgY2hpbGRyZW46IF9qc3goTGlzdHNXaWRnZXQ5LCB7IGNsYXNzTmFtZTogJ2NhcmQteHhsLXN0cmV0Y2ggbWIteGwtOCcgfSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjb2wteHhsLTQnIH0sIHsgY2hpbGRyZW46IF9qc3goTGlzdHNXaWRnZXQ0LCB7IGNsYXNzTmFtZTogJ2NhcmQteHhsLXN0cmV0Y2ggbWItNSBtYi14bC04JyB9KSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3JvdyBneS01IGcteGwtOCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2NvbC14eGwtNCcgfSwgeyBjaGlsZHJlbjogX2pzeChMaXN0c1dpZGdldDMsIHsgY2xhc3NOYW1lOiAnY2FyZC14eGwtc3RyZXRjaCBtYi14bC0zJyB9KSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2NvbC14eGwtOCcgfSwgeyBjaGlsZHJlbjogX2pzeChUYWJsZXNXaWRnZXQ5LCB7IGNsYXNzTmFtZTogJ2NhcmQteHhsLXN0cmV0Y2ggbWItNSBtYi14bC04JyB9KSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3JvdyBneS01IGcteGwtOCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2NvbC14bC00JyB9LCB7IGNoaWxkcmVuOiBfanN4KExpc3RzV2lkZ2V0MiwgeyBjbGFzc05hbWU6ICdjYXJkLXhsLXN0cmV0Y2ggbWIteGwtOCcgfSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjb2wteGwtNCcgfSwgeyBjaGlsZHJlbjogX2pzeChMaXN0c1dpZGdldDYsIHsgY2xhc3NOYW1lOiAnY2FyZC14bC1zdHJldGNoIG1iLXhsLTgnIH0pIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnY29sLXhsLTQnIH0sIHsgY2hpbGRyZW46IF9qc3goTGlzdHNXaWRnZXQ0LCB7IGNsYXNzTmFtZTogJ2NhcmQteGwtc3RyZXRjaCBtYi01IG1iLXhsLTgnLCBpdGVtczogNSB9KSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3JvdyBnLTUgZ3gteHhsLTgnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjb2wteHhsLTQnIH0sIHsgY2hpbGRyZW46IF9qc3goTWl4ZWRXaWRnZXQ4LCB7IGNsYXNzTmFtZTogJ2NhcmQteHhsLXN0cmV0Y2ggbWIteGwtMycsIGNoYXJ0Q29sb3I6ICdzdWNjZXNzJywgY2hhcnRIZWlnaHQ6ICcxNTBweCcgfSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjb2wteHhsLTgnIH0sIHsgY2hpbGRyZW46IF9qc3goVGFibGVzV2lkZ2V0NSwgeyBjbGFzc05hbWU6ICdjYXJkLXh4bC1zdHJldGNoIG1iLTUgbWIteHhsLTgnIH0pIH0pKV0gfSkpXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gRGFzaGJvYXJkUGFnZTtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiRGFzaGJvYXJkUGFnZVwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyhEYXNoYm9hcmRQYWdlLCBcIk9EN2JCcFp2YTVPMmpPK1B1ZjAwaEtpdlA3Yz1cIik7XG5jb25zdCBEYXNoYm9hcmRXcmFwcGVyID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfNCgpO1xuICAgIGNvbnN0IGludGwgPSB1c2VJbnRsKCk7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFBhZ2VUaXRsZSwgT2JqZWN0LmFzc2lnbih7IGJyZWFkY3J1bWJzOiBkYXNoYm9hcmRCcmVhZENydW1icyB9LCB7IGNoaWxkcmVuOiBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ01FTlUuREFTSEJPQVJEJyB9KSB9KSksIF9qc3goRGFzaGJvYXJkUGFnZSwge30pXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gRGFzaGJvYXJkV3JhcHBlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzIsIFwiRGFzaGJvYXJkV3JhcHBlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfNChEYXNoYm9hcmRXcmFwcGVyLCBcInJsU2dTamJld0oxUHJSL0lsZThnL2tyMDUwbz1cIiwgZmFsc2UsICgpID0+IFt1c2VJbnRsXSk7XG5leHBvcnQgeyBEYXNoYm9hcmRXcmFwcGVyIH07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MDNlNzc4NmI5ZjIyMmZiNWM5NlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==