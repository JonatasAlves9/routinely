"use strict";
(self["webpackChunkroutinely"] = self["webpackChunkroutinely"] || []).push([["src_presentation_app_modules_apps_user-management_UsersPage_tsx"],{

/***/ "./src/presentation/app/modules/apps/user-management/UsersPage.tsx":
/*!*************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/UsersPage.tsx ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _metronic_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_metronic/layout/core */ "./src/presentation/_metronic/layout/core/index.ts");
/* harmony import */ var _users_list_UsersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-list/UsersList */ "./src/presentation/app/modules/apps/user-management/users-list/UsersList.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;




const usersBreadcrumbs = [
    {
        title: 'User Management',
        path: '/apps/user-management/users',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
];
const UsersPage = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, Object.assign({ element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, {}) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, { path: 'users', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metronic_layout_core__WEBPACK_IMPORTED_MODULE_1__.PageTitle, Object.assign({ breadcrumbs: usersBreadcrumbs }, { children: "Users list" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_users_list_UsersList__WEBPACK_IMPORTED_MODULE_2__.UsersListWrapper, {})] }) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, { index: true, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, { to: '/apps/user-management/users' }) })] }));
};
_react_refresh_temp_1 = UsersPage;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersPage");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersPage);


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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/UsersList.tsx":
/*!************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/UsersList.tsx ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListWrapper": () => (/* binding */ UsersListWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* harmony import */ var _core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/QueryRequestProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryRequestProvider.tsx");
/* harmony import */ var _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* harmony import */ var _components_header_UsersListHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/UsersListHeader */ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListHeader.tsx");
/* harmony import */ var _table_UsersTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/UsersTable */ "./src/presentation/app/modules/apps/user-management/users-list/table/UsersTable.tsx");
/* harmony import */ var _user_edit_modal_UserEditModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit-modal/UserEditModal */ "./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModal.tsx");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1, _react_refresh_temp_2;
var _react_refresh_temp_3;
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();








const UsersList = () => {
    _react_refresh_temp_3();
    const { itemIdForUpdate } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__.useListView)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_7__.KTCard, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_header_UsersListHeader__WEBPACK_IMPORTED_MODULE_4__.UsersListHeader, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_table_UsersTable__WEBPACK_IMPORTED_MODULE_5__.UsersTable, {})] }), itemIdForUpdate !== undefined && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_user_edit_modal_UserEditModal__WEBPACK_IMPORTED_MODULE_6__.UserEditModal, {})] }));
};
_react_refresh_temp_1 = UsersList;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersList");
_react_refresh_temp_3(UsersList, "cJs25fNcH7ykLuSTVcHx/RZfkuQ=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__.useListView]);
const UsersListWrapper = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_2__.QueryRequestProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__.QueryResponseProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__.ListViewProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UsersList, {}) }) }) }));
_react_refresh_temp_2 = UsersListWrapper;
__webpack_require__.$Refresh$.register(_react_refresh_temp_2, "UsersListWrapper");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UserListToolbar.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/components/header/UserListToolbar.tsx ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListToolbar": () => (/* binding */ UsersListToolbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* harmony import */ var _UsersListFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersListFilter */ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListFilter.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();




const UsersListToolbar = () => {
    _react_refresh_temp_2();
    const { setItemIdForUpdate } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__.useListView)();
    const openAddUserModal = () => {
        setItemIdForUpdate(null);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex justify-content-end', "data-kt-user-table-toolbar": 'base' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UsersListFilter__WEBPACK_IMPORTED_MODULE_3__.UsersListFilter, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ type: 'button', className: 'btn btn-light-primary me-3' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.KTIcon, { iconName: 'exit-up', className: 'fs-2' }), "Export"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ type: 'button', className: 'btn btn-primary', onClick: openAddUserModal }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.KTIcon, { iconName: 'plus', className: 'fs-2' }), "Add User"] }))] })));
};
_react_refresh_temp_1 = UsersListToolbar;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersListToolbar");
_react_refresh_temp_2(UsersListToolbar, "T1vKNsNzSz9Ge4zmiFeRgCOryKk=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__.useListView]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListFilter.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListFilter.tsx ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListFilter": () => (/* binding */ UsersListFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metronic_assets_ts_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../_metronic/assets/ts/components */ "./src/presentation/_metronic/assets/ts/components/index.ts");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/QueryRequestProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryRequestProvider.tsx");
/* harmony import */ var _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();






const UsersListFilter = () => {
    _react_refresh_temp_2();
    const { updateState } = (0,_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_4__.useQueryRequest)();
    const { isLoading } = (0,_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryResponse)();
    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [lastLogin, setLastLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        _metronic_assets_ts_components__WEBPACK_IMPORTED_MODULE_2__.MenuComponent.reinitialization();
    }, []);
    const resetData = () => {
        updateState(Object.assign({ filter: undefined }, _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
    };
    const filterData = () => {
        updateState(Object.assign({ filter: { role, last_login: lastLogin } }, _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ disabled: isLoading, type: 'button', className: 'btn btn-light-primary me-3', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.KTIcon, { iconName: 'filter', className: 'fs-2' }), "Filter"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'menu menu-sub menu-sub-dropdown w-300px w-md-325px', "data-kt-menu": 'true' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'px-7 py-5' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fs-5 text-dark fw-bolder' }, { children: "Filter Options" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator border-gray-200' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'px-7 py-5', "data-kt-user-table-filter": 'form' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'mb-10' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ className: 'form-label fs-6 fw-bold' }, { children: "Role:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ className: 'form-select form-select-solid fw-bolder', "data-kt-select2": 'true', "data-placeholder": 'Select option', "data-allow-clear": 'true', "data-kt-user-table-filter": 'role', "data-hide-search": 'true', onChange: (e) => setRole(e.target.value), value: role }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Administrator' }, { children: "Administrator" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Analyst' }, { children: "Analyst" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Developer' }, { children: "Developer" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Support' }, { children: "Support" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Trial' }, { children: "Trial" }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'mb-10' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ className: 'form-label fs-6 fw-bold' }, { children: "Last login:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ className: 'form-select form-select-solid fw-bolder', "data-kt-select2": 'true', "data-placeholder": 'Select option', "data-allow-clear": 'true', "data-kt-user-table-filter": 'two-step', "data-hide-search": 'true', onChange: (e) => setLastLogin(e.target.value), value: lastLogin }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Yesterday' }, { children: "Yesterday" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: '20 mins ago' }, { children: "20 mins ago" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: '5 hours ago' }, { children: "5 hours ago" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: '2 days ago' }, { children: "2 days ago" }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex justify-content-end' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ type: 'button', disabled: isLoading, onClick: filterData, className: 'btn btn-light btn-active-light-primary fw-bold me-2 px-6', "data-kt-menu-dismiss": 'true', "data-kt-user-table-filter": 'reset' }, { children: "Reset" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ disabled: isLoading, type: 'button', onClick: resetData, className: 'btn btn-primary fw-bold px-6', "data-kt-menu-dismiss": 'true', "data-kt-user-table-filter": 'filter' }, { children: "Apply" }))] }))] }))] }))] }));
};
_react_refresh_temp_1 = UsersListFilter;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersListFilter");
_react_refresh_temp_2(UsersListFilter, "/udAuJ/GfDrW/Tf3wwks0g1CN24=", false, () => [_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_4__.useQueryRequest, _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryResponse]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListGrouping.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListGrouping.tsx ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListGrouping": () => (/* binding */ UsersListGrouping)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* harmony import */ var _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* harmony import */ var _core_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/_requests */ "./src/presentation/app/modules/apps/user-management/users-list/core/_requests.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();






const UsersListGrouping = () => {
    _react_refresh_temp_2();
    const { selected, clearSelected } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_3__.useListView)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const { query } = (0,_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_4__.useQueryResponse)();
    const deleteSelectedItems = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(() => (0,_core_requests__WEBPACK_IMPORTED_MODULE_5__.deleteSelectedUsers)(selected), {
        // 💡 response of the mutation is passed to onSuccess
        onSuccess: () => {
            // ✅ update detail view directly
            queryClient.invalidateQueries([`${_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.QUERIES.USERS_LIST}-${query}`]);
            clearSelected();
        },
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex justify-content-end align-items-center' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'fw-bolder me-5' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: 'me-2' }, { children: selected.length })), " Selected"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ type: 'button', className: 'btn btn-danger', onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield deleteSelectedItems.mutateAsync(); }) }, { children: "Delete Selected" }))] })));
};
_react_refresh_temp_1 = UsersListGrouping;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersListGrouping");
_react_refresh_temp_2(UsersListGrouping, "oY/cU/O+ZJ07zUCds8NzlV/qulU=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_3__.useListView, react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient, _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_4__.useQueryResponse, react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListHeader.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListHeader.tsx ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListHeader": () => (/* binding */ UsersListHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* harmony import */ var _UserListToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserListToolbar */ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UserListToolbar.tsx");
/* harmony import */ var _UsersListGrouping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersListGrouping */ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListGrouping.tsx");
/* harmony import */ var _UsersListSearchComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UsersListSearchComponent */ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListSearchComponent.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();





const UsersListHeader = () => {
    _react_refresh_temp_2();
    const { selected } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__.useListView)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'card-header border-0 pt-6' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UsersListSearchComponent__WEBPACK_IMPORTED_MODULE_4__.UsersListSearchComponent, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'card-toolbar' }, { children: selected.length > 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UsersListGrouping__WEBPACK_IMPORTED_MODULE_3__.UsersListGrouping, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserListToolbar__WEBPACK_IMPORTED_MODULE_2__.UsersListToolbar, {}) }))] })));
};
_react_refresh_temp_1 = UsersListHeader;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersListHeader");
_react_refresh_temp_2(UsersListHeader, "a32DA0cmjfBZFgE67AaJgmyohJY=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__.useListView]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListSearchComponent.tsx":
/*!*********************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/components/header/UsersListSearchComponent.tsx ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListSearchComponent": () => (/* binding */ UsersListSearchComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/QueryRequestProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryRequestProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();

/* eslint-disable react-hooks/exhaustive-deps */



const UsersListSearchComponent = () => {
    _react_refresh_temp_2();
    const { updateState } = (0,_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryRequest)();
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // Debounce search term so that it only gives us latest value ...
    // ... if searchTerm has not been updated within last 500ms.
    // The goal is to only have the API call fire when user stops typing ...
    // ... so that we aren't hitting our API rapidly.
    const debouncedSearchTerm = (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(searchTerm, 150);
    // Effect for API call
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (debouncedSearchTerm !== undefined && searchTerm !== undefined) {
            updateState(Object.assign({ search: debouncedSearchTerm }, _metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.initialQueryState));
        }
    }, [debouncedSearchTerm] // Only call effect if debounced search term changes
    // More details about useDebounce: https://usehooks.com/useDebounce/
    );
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'card-title' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex align-items-center position-relative my-1' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.KTIcon, { iconName: 'magnifier', className: 'fs-1 position-absolute ms-6' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'text', "data-kt-user-table-filter": 'search', className: 'form-control form-control-solid w-250px ps-14', placeholder: 'Search user', value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] })) })));
};
_react_refresh_temp_1 = UsersListSearchComponent;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersListSearchComponent");
_react_refresh_temp_2(UsersListSearchComponent, "N5t1gXRTZ2VuTlZ7A5BEplYJTUg=", false, () => [_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryRequest, _metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.useDebounce]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/components/loading/UsersListLoading.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/components/loading/UsersListLoading.tsx ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListLoading": () => (/* binding */ UsersListLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;

const UsersListLoading = () => {
    const styles = {
        borderRadius: '0.475rem',
        boxShadow: '0 0 50px 0 rgb(82 63 105 / 15%)',
        backgroundColor: '#fff',
        color: '#7e8299',
        fontWeight: '500',
        margin: '0',
        width: 'auto',
        padding: '1rem 2rem',
        top: 'calc(50% - 2rem)',
        left: 'calc(50% - 4rem)',
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ style: Object.assign(Object.assign({}, styles), { position: 'absolute', textAlign: 'center' }) }, { children: "Processing..." }));
};
_react_refresh_temp_1 = UsersListLoading;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersListLoading");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/components/pagination/UsersListPagination.tsx":
/*!********************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/components/pagination/UsersListPagination.tsx ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListPagination": () => (/* binding */ UsersListPagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* harmony import */ var _core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/QueryRequestProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryRequestProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();

/* eslint-disable jsx-a11y/anchor-is-valid */



const mappedLabel = (label) => {
    if (label === '&laquo; Previous') {
        return 'Previous';
    }
    if (label === 'Next &raquo;') {
        return 'Next';
    }
    return label;
};
const UsersListPagination = () => {
    var _a;
    _react_refresh_temp_2();
    const pagination = (0,_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryResponsePagination)();
    const isLoading = (0,_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryResponseLoading)();
    const { updateState } = (0,_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryRequest)();
    const updatePage = (page) => {
        if (!page || isLoading || pagination.page === page) {
            return;
        }
        updateState({ page, items_per_page: pagination.items_per_page || 10 });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'row' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ id: 'kt_table_users_paginate' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", Object.assign({ className: 'pagination' }, { children: (_a = pagination.links) === null || _a === void 0 ? void 0 : _a.map((link) => {
                            return Object.assign(Object.assign({}, link), { label: mappedLabel(link.label) });
                        }).map((link) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('page-item', {
                                active: pagination.page === link.page,
                                disabled: isLoading,
                                previous: link.label === 'Previous',
                                next: link.label === 'Next',
                            }) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('page-link', {
                                    'page-text': link.label === 'Previous' || link.label === 'Next',
                                    'me-5': link.label === 'Previous',
                                }), onClick: () => updatePage(link.page), style: { cursor: 'pointer' } }, { children: mappedLabel(link.label) })) }), link.label))) })) })) }))] })));
};
_react_refresh_temp_1 = UsersListPagination;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersListPagination");
_react_refresh_temp_2(UsersListPagination, "bnNBUtvbhGT7qtmzRc9kx0UCNBA=", false, () => [_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryResponsePagination, _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryResponseLoading, _core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryRequest]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx":
/*!************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListViewProvider": () => (/* binding */ ListViewProvider),
/* harmony export */   "useListView": () => (/* binding */ useListView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2, _react_refresh_temp_3;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();




const ListViewContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.initialListView);
const ListViewProvider = ({ children }) => {
    _react_refresh_temp_2();
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.initialListView.selected);
    const [itemIdForUpdate, setItemIdForUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.initialListView.itemIdForUpdate);
    const { isLoading } = (0,_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryResponse)();
    const data = (0,_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryResponseData)();
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.calculatedGroupingIsDisabled)(isLoading, data), [isLoading, data]);
    const isAllSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateIsAllDataSelected)(data, selected), [data, selected]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListViewContext.Provider, Object.assign({ value: {
            selected,
            itemIdForUpdate,
            setItemIdForUpdate,
            disabled,
            isAllSelected,
            onSelect: (id) => {
                (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.groupingOnSelect)(id, selected, setSelected);
            },
            onSelectAll: () => {
                (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.groupingOnSelectAll)(isAllSelected, setSelected, data);
            },
            clearSelected: () => {
                setSelected([]);
            },
        } }, { children: children })));
};
_react_refresh_temp_1 = ListViewProvider;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "ListViewProvider");
_react_refresh_temp_2(ListViewProvider, "7ZdpCKPsdfQoo58XDYstLbqkFgM=", false, () => [_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryResponse, _QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryResponseData]);
const useListView = () => (_react_refresh_temp_3(), (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ListViewContext));
_react_refresh_temp_3(useListView, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryRequestProvider.tsx":
/*!****************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/core/QueryRequestProvider.tsx ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryRequestProvider": () => (/* binding */ QueryRequestProvider),
/* harmony export */   "useQueryRequest": () => (/* binding */ useQueryRequest)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2, _react_refresh_temp_3;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();



const QueryRequestContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.initialQueryRequest);
const QueryRequestProvider = ({ children }) => {
    _react_refresh_temp_2();
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.initialQueryRequest.state);
    const updateState = (updates) => {
        const updatedState = Object.assign(Object.assign({}, state), updates);
        setState(updatedState);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueryRequestContext.Provider, Object.assign({ value: { state, updateState } }, { children: children })));
};
_react_refresh_temp_1 = QueryRequestProvider;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "QueryRequestProvider");
_react_refresh_temp_2(QueryRequestProvider, "D7aDqN+D7b3VWQISb+zKU7fVPEc=");
const useQueryRequest = () => (_react_refresh_temp_3(), (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(QueryRequestContext));
_react_refresh_temp_3(useQueryRequest, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx":
/*!*****************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryResponseProvider": () => (/* binding */ QueryResponseProvider),
/* harmony export */   "useQueryResponse": () => (/* binding */ useQueryResponse),
/* harmony export */   "useQueryResponseData": () => (/* binding */ useQueryResponseData),
/* harmony export */   "useQueryResponseLoading": () => (/* binding */ useQueryResponseLoading),
/* harmony export */   "useQueryResponsePagination": () => (/* binding */ useQueryResponsePagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_requests */ "./src/presentation/app/modules/apps/user-management/users-list/core/_requests.ts");
/* harmony import */ var _QueryRequestProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QueryRequestProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryRequestProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2, _react_refresh_temp_3, _react_refresh_temp_4, _react_refresh_temp_5, _react_refresh_temp_6;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_4 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_5 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_6 = __webpack_require__.$Refresh$.signature();

/* eslint-disable react-hooks/exhaustive-deps */





const QueryResponseContext = (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.createResponseContext)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryResponse);
const QueryResponseProvider = ({ children }) => {
    _react_refresh_temp_2();
    const { state } = (0,_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryRequest)();
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.stringifyRequestQuery)(state));
    const updatedQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.stringifyRequestQuery)(state), [state]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (query !== updatedQuery) {
            setQuery(updatedQuery);
        }
    }, [updatedQuery]);
    const { isFetching, refetch, data: response, } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(`${_metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.QUERIES.USERS_LIST}-${query}`, () => {
        return (0,_requests__WEBPACK_IMPORTED_MODULE_4__.getUsers)(query);
    }, { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueryResponseContext.Provider, Object.assign({ value: { isLoading: isFetching, refetch, response, query } }, { children: children })));
};
_react_refresh_temp_1 = QueryResponseProvider;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "QueryResponseProvider");
_react_refresh_temp_2(QueryResponseProvider, "/jh8aV3XZp85f/y8anwBCED0fd0=", false, () => [_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryRequest, react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery]);
const useQueryResponse = () => (_react_refresh_temp_3(), (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(QueryResponseContext));
_react_refresh_temp_3(useQueryResponse, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const useQueryResponseData = () => {
    _react_refresh_temp_4();
    const { response } = useQueryResponse();
    if (!response) {
        return [];
    }
    return (response === null || response === void 0 ? void 0 : response.data) || [];
};
_react_refresh_temp_4(useQueryResponseData, "z5Pvnu5ySFf57QCj19QAHuLvvPg=", false, () => [useQueryResponse]);
const useQueryResponsePagination = () => {
    _react_refresh_temp_5();
    const defaultPaginationState = Object.assign({ links: [] }, _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState);
    const { response } = useQueryResponse();
    if (!response || !response.payload || !response.payload.pagination) {
        return defaultPaginationState;
    }
    return response.payload.pagination;
};
_react_refresh_temp_5(useQueryResponsePagination, "z5Pvnu5ySFf57QCj19QAHuLvvPg=", false, () => [useQueryResponse]);
const useQueryResponseLoading = () => {
    _react_refresh_temp_6();
    const { isLoading } = useQueryResponse();
    return isLoading;
};
_react_refresh_temp_6(useQueryResponseLoading, "OUJ1sfWX7RGWgk6GFJaaAapdFs8=", false, () => [useQueryResponse]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/core/_models.ts":
/*!**************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/core/_models.ts ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialUser": () => (/* binding */ initialUser)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const initialUser = {
    avatar: 'avatars/300-6.jpg',
    position: 'Art Director',
    role: 'Administrator',
    name: '',
    email: '',
};


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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/core/_requests.ts":
/*!****************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/core/_requests.ts ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "deleteSelectedUsers": () => (/* binding */ deleteSelectedUsers),
/* harmony export */   "deleteUser": () => (/* binding */ deleteUser),
/* harmony export */   "getUserById": () => (/* binding */ getUserById),
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const API_URL = "https://preview.keenthemes.com/theme-api/api";
const USER_URL = `${API_URL}/user`;
const GET_USERS_URL = `${API_URL}/users/query`;
const getUsers = (query) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${GET_USERS_URL}?${query}`)
        .then((d) => d.data);
};
const getUserById = (id) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${USER_URL}/${id}`)
        .then((response) => response.data)
        .then((response) => response.data);
};
const createUser = (user) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().put(USER_URL, user)
        .then((response) => response.data)
        .then((response) => response.data);
};
const updateUser = (user) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${USER_URL}/${user.id}`, user)
        .then((response) => response.data)
        .then((response) => response.data);
};
const deleteUser = (userId) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${USER_URL}/${userId}`).then(() => { });
};
const deleteSelectedUsers = (userIds) => {
    const requests = userIds.map((id) => axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${USER_URL}/${id}`));
    return axios__WEBPACK_IMPORTED_MODULE_0___default().all(requests).then(() => { });
};



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/UsersTable.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/UsersTable.tsx ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersTable": () => (/* binding */ UsersTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _columns_CustomHeaderColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./columns/CustomHeaderColumn */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/CustomHeaderColumn.tsx");
/* harmony import */ var _columns_CustomRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./columns/CustomRow */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/CustomRow.tsx");
/* harmony import */ var _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* harmony import */ var _columns_columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./columns/_columns */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/_columns.tsx");
/* harmony import */ var _components_loading_UsersListLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/loading/UsersListLoading */ "./src/presentation/app/modules/apps/user-management/users-list/components/loading/UsersListLoading.tsx");
/* harmony import */ var _components_pagination_UsersListPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/pagination/UsersListPagination */ "./src/presentation/app/modules/apps/user-management/users-list/components/pagination/UsersListPagination.tsx");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();










const UsersTable = () => {
    _react_refresh_temp_2();
    const users = (0,_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryResponseData)();
    const isLoading = (0,_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryResponseLoading)();
    const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => users, [users]);
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => _columns_columns__WEBPACK_IMPORTED_MODULE_6__.usersColumns, []);
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)({
        columns,
        data,
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_9__.KTCardBody, Object.assign({ className: 'py-4' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'table-responsive' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", Object.assign({ id: 'kt_table_users', className: 'table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer' }, getTableProps(), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", Object.assign({ className: 'text-start text-muted fw-bolder fs-7 text-uppercase gs-0' }, { children: headers.map((column) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_columns_CustomHeaderColumn__WEBPACK_IMPORTED_MODULE_3__.CustomHeaderColumn, { column: column }, column.id))) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", Object.assign({ className: 'text-gray-600 fw-bold' }, getTableBodyProps(), { children: rows.length > 0 ? (rows.map((row, i) => {
                                prepareRow(row);
                                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_columns_CustomRow__WEBPACK_IMPORTED_MODULE_4__.CustomRow, { row: row }, `row-${i}-${row.id}`);
                            })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 7 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'd-flex text-center w-100 align-content-center justify-content-center' }, { children: "No matching records found" })) })) })) }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_pagination_UsersListPagination__WEBPACK_IMPORTED_MODULE_8__.UsersListPagination, {}), isLoading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_loading_UsersListLoading__WEBPACK_IMPORTED_MODULE_7__.UsersListLoading, {})] })));
};
_react_refresh_temp_1 = UsersTable;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersTable");
_react_refresh_temp_2(UsersTable, "6xmKP7iHHONd77q+NuIh4Ra6N+Q=", false, () => [_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryResponseData, _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryResponseLoading, react_table__WEBPACK_IMPORTED_MODULE_2__.useTable]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/CustomHeaderColumn.tsx":
/*!***********************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/CustomHeaderColumn.tsx ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomHeaderColumn": () => (/* binding */ CustomHeaderColumn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;

const CustomHeaderColumn = ({ column }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: column.Header && typeof column.Header === 'string' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", Object.assign({}, column.getHeaderProps(), { children: column.render('Header') }))) : (column.render('Header')) }));
_react_refresh_temp_1 = CustomHeaderColumn;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CustomHeaderColumn");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/CustomRow.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/CustomRow.tsx ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomRow": () => (/* binding */ CustomRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;

// @ts-nocheck

const CustomRow = ({ row }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", Object.assign({}, row.getRowProps(), { children: row.cells.map((cell) => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({}, cell.getCellProps(), { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({ 'text-end min-w-100px': cell.column.id === 'actions' }) }, { children: cell.render('Cell') })));
    }) })));
_react_refresh_temp_1 = CustomRow;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CustomRow");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserActionsCell.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserActionsCell.tsx ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActionsCell": () => (/* binding */ UserActionsCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _metronic_assets_ts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../_metronic/assets/ts/components */ "./src/presentation/_metronic/assets/ts/components/index.ts");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* harmony import */ var _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* harmony import */ var _core_requests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/_requests */ "./src/presentation/app/modules/apps/user-management/users-list/core/_requests.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();

/* eslint-disable jsx-a11y/anchor-is-valid */







const UserActionsCell = ({ id }) => {
    _react_refresh_temp_2();
    const { setItemIdForUpdate } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_5__.useListView)();
    const { query } = (0,_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_6__.useQueryResponse)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        _metronic_assets_ts_components__WEBPACK_IMPORTED_MODULE_3__.MenuComponent.reinitialization();
    }, []);
    const openEditModal = () => {
        setItemIdForUpdate(id);
    };
    const deleteItem = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(() => (0,_core_requests__WEBPACK_IMPORTED_MODULE_7__.deleteUser)(id), {
        // 💡 response of the mutation is passed to onSuccess
        onSuccess: () => {
            // ✅ update detail view directly
            queryClient.invalidateQueries([`${_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.QUERIES.USERS_LIST}-${query}`]);
        },
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: '#', className: 'btn btn-light btn-active-light-primary btn-sm', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end' }, { children: ["Actions", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.KTIcon, { iconName: 'down', className: 'fs-5 m-0' })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4', "data-kt-menu": 'true' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'menu-item px-3' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ className: 'menu-link px-3', onClick: openEditModal }, { children: "Edit" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'menu-item px-3' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ className: 'menu-link px-3', "data-kt-users-table-filter": 'delete_row', onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield deleteItem.mutateAsync(); }) }, { children: "Delete" })) }))] }))] }));
};
_react_refresh_temp_1 = UserActionsCell;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserActionsCell");
_react_refresh_temp_2(UserActionsCell, "DjFoK7ED2iHsv0gqrq9jgQ8DYd0=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_5__.useListView, _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_6__.useQueryResponse, react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient, react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserCustomHeader.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserCustomHeader.tsx ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCustomHeader": () => (/* binding */ UserCustomHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/QueryRequestProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryRequestProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();





const UserCustomHeader = ({ className, title, tableProps }) => {
    _react_refresh_temp_2();
    const id = tableProps.column.id;
    const { state, updateState } = (0,_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_4__.useQueryRequest)();
    const isSelectedForSorting = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
        return state.sort && state.sort === id;
    }, [state, id]);
    const order = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => state.order, [state]);
    const sortColumn = () => {
        // avoid sorting for these columns
        if (id === 'actions' || id === 'selection') {
            return;
        }
        if (!isSelectedForSorting) {
            // enable sort asc
            updateState(Object.assign({ sort: id, order: 'asc' }, _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
            return;
        }
        if (isSelectedForSorting && order !== undefined) {
            if (order === 'asc') {
                // enable sort desc
                updateState(Object.assign({ sort: id, order: 'desc' }, _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
                return;
            }
            // disable sort
            updateState(Object.assign({ sort: undefined, order: undefined }, _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", Object.assign({}, tableProps.column.getHeaderProps(), { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(className, isSelectedForSorting && order !== undefined && `table-sort-${order}`), style: { cursor: 'pointer' }, onClick: sortColumn }, { children: title })));
};
_react_refresh_temp_1 = UserCustomHeader;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserCustomHeader");
_react_refresh_temp_2(UserCustomHeader, "BC1+hvnMxCO2YYhoQYRVYLcY6O8=", false, () => [_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_4__.useQueryRequest]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserInfoCell.tsx":
/*!*****************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserInfoCell.tsx ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfoCell": () => (/* binding */ UserInfoCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;

/* eslint-disable jsx-a11y/anchor-is-valid */


const UserInfoCell = ({ user }) => {
    var _a, _b, _c;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex align-items-center' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'symbol symbol-circle symbol-50px overflow-hidden me-3' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ href: '#' }, { children: user.avatar ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'symbol-label' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)(`/media/${user.avatar}`), alt: user.name, className: 'w-100' }) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('symbol-label fs-3', `bg-light-${(_a = user.initials) === null || _a === void 0 ? void 0 : _a.state}`, `text-${(_b = user.initials) === null || _b === void 0 ? void 0 : _b.state}`) }, { children: (_c = user.initials) === null || _c === void 0 ? void 0 : _c.label }))) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex flex-column' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ href: '#', className: 'text-gray-800 text-hover-primary mb-1' }, { children: user.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: user.email })] }))] })));
};
_react_refresh_temp_1 = UserInfoCell;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserInfoCell");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserLastLoginCell.tsx":
/*!**********************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserLastLoginCell.tsx ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLastLoginCell": () => (/* binding */ UserLastLoginCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;

const UserLastLoginCell = ({ last_login }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'badge badge-light fw-bolder' }, { children: last_login })));
_react_refresh_temp_1 = UserLastLoginCell;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserLastLoginCell");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserSelectionCell.tsx":
/*!**********************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserSelectionCell.tsx ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSelectionCell": () => (/* binding */ UserSelectionCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();



const UserSelectionCell = ({ id }) => {
    _react_refresh_temp_2();
    const { selected, onSelect } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__.useListView)();
    const isSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => selected.includes(id), [id, selected]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'form-check form-check-custom form-check-solid' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: 'form-check-input', type: 'checkbox', "data-kt-check": isSelected, "data-kt-check-target": '#kt_table_users .form-check-input', checked: isSelected, onChange: () => onSelect(id) }) })));
};
_react_refresh_temp_1 = UserSelectionCell;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserSelectionCell");
_react_refresh_temp_2(UserSelectionCell, "DhrD0HFv4P0MLaudHz0kyZJkkBY=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__.useListView]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserSelectionHeader.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserSelectionHeader.tsx ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSelectionHeader": () => (/* binding */ UserSelectionHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();


const UserSelectionHeader = ({ tableProps }) => {
    _react_refresh_temp_2();
    const { isAllSelected, onSelectAll } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__.useListView)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", Object.assign({}, tableProps.column.getHeaderProps(), { className: 'w-10px pe-2' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'form-check form-check-sm form-check-custom form-check-solid me-3' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: 'form-check-input', type: 'checkbox', "data-kt-check": isAllSelected, "data-kt-check-target": '#kt_table_users .form-check-input', checked: isAllSelected, onChange: onSelectAll }) })) })));
};
_react_refresh_temp_1 = UserSelectionHeader;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserSelectionHeader");
_react_refresh_temp_2(UserSelectionHeader, "UcPL0P6jYX85Ls0FfADF4qpkdXc=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__.useListView]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserTwoStepsCell.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserTwoStepsCell.tsx ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTwoStepsCell": () => (/* binding */ UserTwoStepsCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;

const UserTwoStepsCell = ({ two_steps }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [" ", two_steps && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'badge badge-light-success fw-bolder' }, { children: "Enabled" }))] }));
_react_refresh_temp_1 = UserTwoStepsCell;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserTwoStepsCell");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/_columns.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/table/columns/_columns.tsx ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersColumns": () => (/* binding */ usersColumns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _UserInfoCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInfoCell */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserInfoCell.tsx");
/* harmony import */ var _UserLastLoginCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserLastLoginCell */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserLastLoginCell.tsx");
/* harmony import */ var _UserTwoStepsCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserTwoStepsCell */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserTwoStepsCell.tsx");
/* harmony import */ var _UserActionsCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserActionsCell */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserActionsCell.tsx");
/* harmony import */ var _UserSelectionCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserSelectionCell */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserSelectionCell.tsx");
/* harmony import */ var _UserCustomHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserCustomHeader */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserCustomHeader.tsx");
/* harmony import */ var _UserSelectionHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserSelectionHeader */ "./src/presentation/app/modules/apps/user-management/users-list/table/columns/UserSelectionHeader.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};








const usersColumns = [
    {
        Header: (props) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserSelectionHeader__WEBPACK_IMPORTED_MODULE_7__.UserSelectionHeader, { tableProps: props }),
        id: 'selection',
        Cell: (_a) => {
            var props = __rest(_a, []);
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserSelectionCell__WEBPACK_IMPORTED_MODULE_5__.UserSelectionCell, { id: props.data[props.row.index].id });
        },
    },
    {
        Header: (props) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserCustomHeader__WEBPACK_IMPORTED_MODULE_6__.UserCustomHeader, { tableProps: props, title: 'Name', className: 'min-w-125px' }),
        id: 'name',
        Cell: (_a) => {
            var props = __rest(_a, []);
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserInfoCell__WEBPACK_IMPORTED_MODULE_1__.UserInfoCell, { user: props.data[props.row.index] });
        },
    },
    {
        Header: (props) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserCustomHeader__WEBPACK_IMPORTED_MODULE_6__.UserCustomHeader, { tableProps: props, title: 'Role', className: 'min-w-125px' }),
        accessor: 'role',
    },
    {
        Header: (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserCustomHeader__WEBPACK_IMPORTED_MODULE_6__.UserCustomHeader, { tableProps: props, title: 'Last login', className: 'min-w-125px' })),
        id: 'last_login',
        Cell: (_a) => {
            var props = __rest(_a, []);
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserLastLoginCell__WEBPACK_IMPORTED_MODULE_2__.UserLastLoginCell, { last_login: props.data[props.row.index].last_login });
        },
    },
    {
        Header: (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserCustomHeader__WEBPACK_IMPORTED_MODULE_6__.UserCustomHeader, { tableProps: props, title: 'Two steps', className: 'min-w-125px' })),
        id: 'two_steps',
        Cell: (_a) => {
            var props = __rest(_a, []);
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserTwoStepsCell__WEBPACK_IMPORTED_MODULE_3__.UserTwoStepsCell, { two_steps: props.data[props.row.index].two_steps });
        },
    },
    {
        Header: (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserCustomHeader__WEBPACK_IMPORTED_MODULE_6__.UserCustomHeader, { tableProps: props, title: 'Joined day', className: 'min-w-125px' })),
        accessor: 'joined_day',
    },
    {
        Header: (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserCustomHeader__WEBPACK_IMPORTED_MODULE_6__.UserCustomHeader, { tableProps: props, title: 'Actions', className: 'text-end min-w-100px' })),
        id: 'actions',
        Cell: (_a) => {
            var props = __rest(_a, []);
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserActionsCell__WEBPACK_IMPORTED_MODULE_4__.UserActionsCell, { id: props.data[props.row.index].id });
        },
    },
];



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModal.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModal.tsx ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditModal": () => (/* binding */ UserEditModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserEditModalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserEditModalHeader */ "./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalHeader.tsx");
/* harmony import */ var _UserEditModalFormWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserEditModalFormWrapper */ "./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalFormWrapper.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();




const UserEditModal = () => {
    _react_refresh_temp_2();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'modal fade show d-block', id: 'kt_modal_add_user', role: 'dialog', tabIndex: -1, "aria-modal": 'true' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'modal-dialog modal-dialog-centered mw-650px' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'modal-content' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserEditModalHeader__WEBPACK_IMPORTED_MODULE_2__.UserEditModalHeader, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'modal-body scroll-y mx-5 mx-xl-15 my-7' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserEditModalFormWrapper__WEBPACK_IMPORTED_MODULE_3__.UserEditModalFormWrapper, {}) }))] })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'modal-backdrop fade show' })] }));
};
_react_refresh_temp_1 = UserEditModal;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserEditModal");
_react_refresh_temp_2(UserEditModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalForm.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalForm.tsx ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditModalForm": () => (/* binding */ UserEditModalForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/_models */ "./src/presentation/app/modules/apps/user-management/users-list/core/_models.ts");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* harmony import */ var _components_loading_UsersListLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/loading/UsersListLoading */ "./src/presentation/app/modules/apps/user-management/users-list/components/loading/UsersListLoading.tsx");
/* harmony import */ var _core_requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/_requests */ "./src/presentation/app/modules/apps/user-management/users-list/core/_requests.ts");
/* harmony import */ var _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();











const editUserSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_2__.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    name: yup__WEBPACK_IMPORTED_MODULE_2__.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Name is required'),
});
const UserEditModalForm = ({ user, isUserLoading }) => {
    _react_refresh_temp_2();
    const { setItemIdForUpdate } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_7__.useListView)();
    const { refetch } = (0,_core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_10__.useQueryResponse)();
    const [userForEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Object.assign(Object.assign({}, user), { avatar: user.avatar || _core_models__WEBPACK_IMPORTED_MODULE_5__.initialUser.avatar, role: user.role || _core_models__WEBPACK_IMPORTED_MODULE_5__.initialUser.role, position: user.position || _core_models__WEBPACK_IMPORTED_MODULE_5__.initialUser.position, name: user.name || _core_models__WEBPACK_IMPORTED_MODULE_5__.initialUser.name, email: user.email || _core_models__WEBPACK_IMPORTED_MODULE_5__.initialUser.email }));
    const cancel = (withRefresh) => {
        if (withRefresh) {
            refetch();
        }
        setItemIdForUpdate(undefined);
    };
    const blankImg = (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.toAbsoluteUrl)('/media/svg/avatars/blank.svg');
    const userAvatarImg = (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.toAbsoluteUrl)(`/media/${userForEdit.avatar}`);
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: userForEdit,
        validationSchema: editUserSchema,
        onSubmit: (values, { setSubmitting }) => __awaiter(void 0, void 0, void 0, function* () {
            setSubmitting(true);
            try {
                if ((0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(values.id)) {
                    yield (0,_core_requests__WEBPACK_IMPORTED_MODULE_9__.updateUser)(values);
                }
                else {
                    yield (0,_core_requests__WEBPACK_IMPORTED_MODULE_9__.createUser)(values);
                }
            }
            catch (ex) {
                console.error(ex);
            }
            finally {
                setSubmitting(true);
                cancel(true);
            }
        }),
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", Object.assign({ id: 'kt_modal_add_user_form', className: 'form', onSubmit: formik.handleSubmit, noValidate: true }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex flex-column scroll-y me-n7 pe-7', id: 'kt_modal_add_user_scroll', "data-kt-scroll": 'true', "data-kt-scroll-activate": '{default: false, lg: true}', "data-kt-scroll-max-height": 'auto', "data-kt-scroll-dependencies": '#kt_modal_add_user_header', "data-kt-scroll-wrappers": '#kt_modal_add_user_scroll', "data-kt-scroll-offset": '300px' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'fv-row mb-7' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ className: 'd-block fw-bold fs-6 mb-5' }, { children: "Avatar" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'image-input image-input-outline', "data-kt-image-input": 'true', style: { backgroundImage: `url('${blankImg}')` } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'image-input-wrapper w-125px h-125px', style: { backgroundImage: `url('${userAvatarImg}')` } }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'fv-row mb-7' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ className: 'required fw-bold fs-6 mb-2' }, { children: "Full Name" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", Object.assign({ placeholder: 'Full name' }, formik.getFieldProps('name'), { type: 'text', name: 'name', className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('form-control form-control-solid mb-3 mb-lg-0', { 'is-invalid': formik.touched.name && formik.errors.name }, {
                                            'is-valid': formik.touched.name && !formik.errors.name,
                                        }), autoComplete: 'off', disabled: formik.isSubmitting || isUserLoading })), formik.touched.name && formik.errors.name && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fv-plugins-message-container' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fv-help-block' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ role: 'alert' }, { children: formik.errors.name })) })) })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'fv-row mb-7' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ className: 'required fw-bold fs-6 mb-2' }, { children: "Email" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", Object.assign({ placeholder: 'Email' }, formik.getFieldProps('email'), { className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('form-control form-control-solid mb-3 mb-lg-0', { 'is-invalid': formik.touched.email && formik.errors.email }, {
                                            'is-valid': formik.touched.email && !formik.errors.email,
                                        }), type: 'email', name: 'email', autoComplete: 'off', disabled: formik.isSubmitting || isUserLoading })), formik.touched.email && formik.errors.email && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fv-plugins-message-container' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ role: 'alert' }, { children: formik.errors.email })) })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'mb-7' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ className: 'required fw-bold fs-6 mb-5' }, { children: "Role" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'd-flex fv-row' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'form-check form-check-custom form-check-solid' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", Object.assign({ className: 'form-check-input me-3' }, formik.getFieldProps('role'), { name: 'role', type: 'radio', value: 'Administrator', id: 'kt_modal_update_role_option_0', checked: formik.values.role === 'Administrator', disabled: formik.isSubmitting || isUserLoading })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", Object.assign({ className: 'form-check-label', htmlFor: 'kt_modal_update_role_option_0' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fw-bolder text-gray-800' }, { children: "Administrator" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'text-gray-600' }, { children: "Best for business owners and company administrators" }))] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator separator-dashed my-5' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'd-flex fv-row' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'form-check form-check-custom form-check-solid' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", Object.assign({ className: 'form-check-input me-3' }, formik.getFieldProps('role'), { name: 'role', type: 'radio', value: 'Developer', id: 'kt_modal_update_role_option_1', checked: formik.values.role === 'Developer', disabled: formik.isSubmitting || isUserLoading })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", Object.assign({ className: 'form-check-label', htmlFor: 'kt_modal_update_role_option_1' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fw-bolder text-gray-800' }, { children: "Developer" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'text-gray-600' }, { children: "Best for developers or people primarily using the API" }))] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator separator-dashed my-5' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'd-flex fv-row' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'form-check form-check-custom form-check-solid' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", Object.assign({ className: 'form-check-input me-3' }, formik.getFieldProps('role'), { name: 'role', type: 'radio', value: 'Analyst', id: 'kt_modal_update_role_option_2', checked: formik.values.role === 'Analyst', disabled: formik.isSubmitting || isUserLoading })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", Object.assign({ className: 'form-check-label', htmlFor: 'kt_modal_update_role_option_2' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fw-bolder text-gray-800' }, { children: "Analyst" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'text-gray-600' }, { children: "Best for people who need full access to analytics data, but don't need to update business settings" }))] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator separator-dashed my-5' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'd-flex fv-row' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'form-check form-check-custom form-check-solid' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", Object.assign({ className: 'form-check-input me-3' }, formik.getFieldProps('role'), { name: 'role', type: 'radio', value: 'Support', id: 'kt_modal_update_role_option_3', checked: formik.values.role === 'Support', disabled: formik.isSubmitting || isUserLoading })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", Object.assign({ className: 'form-check-label', htmlFor: 'kt_modal_update_role_option_3' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fw-bolder text-gray-800' }, { children: "Support" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'text-gray-600' }, { children: "Best for employees who regularly refund payments and respond to disputes" }))] }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator separator-dashed my-5' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'd-flex fv-row' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'form-check form-check-custom form-check-solid' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", Object.assign({ className: 'form-check-input me-3' }, formik.getFieldProps('role'), { name: 'role', type: 'radio', id: 'kt_modal_update_role_option_4', value: 'Trial', checked: formik.values.role === 'Trial', disabled: formik.isSubmitting || isUserLoading })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", Object.assign({ className: 'form-check-label', htmlFor: 'kt_modal_update_role_option_4' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fw-bolder text-gray-800' }, { children: "Trial" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'text-gray-600' }, { children: "Best for people who need to preview content data, but don't need to make any updates" }))] }))] })) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'text-center pt-15' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ type: 'reset', onClick: () => cancel(), className: 'btn btn-light me-3', "data-kt-users-modal-action": 'cancel', disabled: formik.isSubmitting || isUserLoading }, { children: "Discard" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ type: 'submit', className: 'btn btn-primary', "data-kt-users-modal-action": 'submit', disabled: isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: 'indicator-label' }, { children: "Submit" })), (formik.isSubmitting || isUserLoading) && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", Object.assign({ className: 'indicator-progress' }, { children: ["Please wait...", ' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'spinner-border spinner-border-sm align-middle ms-2' })] })))] }))] }))] })), (formik.isSubmitting || isUserLoading) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_loading_UsersListLoading__WEBPACK_IMPORTED_MODULE_8__.UsersListLoading, {})] }));
};
_react_refresh_temp_1 = UserEditModalForm;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserEditModalForm");
_react_refresh_temp_2(UserEditModalForm, "Qe1kRHiF4iEzVjQs67IK8bs2aqY=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_7__.useListView, _core_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_10__.useQueryResponse, formik__WEBPACK_IMPORTED_MODULE_3__.useFormik]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalFormWrapper.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalFormWrapper.tsx ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditModalFormWrapper": () => (/* binding */ UserEditModalFormWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _UserEditModalForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserEditModalForm */ "./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalForm.tsx");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* harmony import */ var _core_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/_requests */ "./src/presentation/app/modules/apps/user-management/users-list/core/_requests.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();






const UserEditModalFormWrapper = () => {
    _react_refresh_temp_2();
    const { itemIdForUpdate, setItemIdForUpdate } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_4__.useListView)();
    const enabledQuery = (0,_metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(itemIdForUpdate);
    const { isLoading, data: user, error, } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(`${_metronic_helpers__WEBPACK_IMPORTED_MODULE_3__.QUERIES.USERS_LIST}-user-${itemIdForUpdate}`, () => {
        return (0,_core_requests__WEBPACK_IMPORTED_MODULE_5__.getUserById)(itemIdForUpdate);
    }, {
        cacheTime: 0,
        enabled: enabledQuery,
        onError: (err) => {
            setItemIdForUpdate(undefined);
            console.error(err);
        },
    });
    if (!itemIdForUpdate) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserEditModalForm__WEBPACK_IMPORTED_MODULE_2__.UserEditModalForm, { isUserLoading: isLoading, user: { id: undefined } });
    }
    if (!isLoading && !error && user) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserEditModalForm__WEBPACK_IMPORTED_MODULE_2__.UserEditModalForm, { isUserLoading: isLoading, user: user });
    }
    return null;
};
_react_refresh_temp_1 = UserEditModalFormWrapper;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserEditModalFormWrapper");
_react_refresh_temp_2(UserEditModalFormWrapper, "eQ3WbBk62ie5bLQyXpSgWDVYhBY=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_4__.useListView, react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery]);



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

/***/ }),

/***/ "./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalHeader.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/presentation/app/modules/apps/user-management/users-list/user-edit-modal/UserEditModalHeader.tsx ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditModalHeader": () => (/* binding */ UserEditModalHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _metronic_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../_metronic/helpers */ "./src/presentation/_metronic/helpers/index.ts");
/* harmony import */ var _core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/ListViewProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/ListViewProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();



const UserEditModalHeader = () => {
    _react_refresh_temp_2();
    const { setItemIdForUpdate } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__.useListView)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'modal-header' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", Object.assign({ className: 'fw-bolder' }, { children: "Add User" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'btn btn-icon btn-sm btn-active-icon-primary', "data-kt-users-modal-action": 'close', onClick: () => setItemIdForUpdate(undefined), style: { cursor: 'pointer' } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metronic_helpers__WEBPACK_IMPORTED_MODULE_1__.KTIcon, { iconName: 'cross', className: 'fs-1' }) }))] })));
};
_react_refresh_temp_1 = UserEditModalHeader;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UserEditModalHeader");
_react_refresh_temp_2(UserEditModalHeader, "T1vKNsNzSz9Ge4zmiFeRgCOryKk=", false, () => [_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_2__.useListView]);



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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ByZXNlbnRhdGlvbl9hcHBfbW9kdWxlc19hcHBzX3VzZXItbWFuYWdlbWVudF9Vc2Vyc1BhZ2VfdHN4Lm1haW4tYnVuZGxlLTBmMDEwNmU4NmJkZDFiMDBkYzA5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NGO0FBQ25CO0FBQ0w7QUFDSjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLENBQUMsb0RBQU0sZUFBZSxzREFBSSxDQUFDLG1EQUFLLDJCQUEyQixzREFBSSxDQUFDLG9EQUFNLHFCQUFxQixzREFBSSxDQUFDLG1EQUFLLDRCQUE0Qix1REFBSyxDQUFDLHVEQUFTLGVBQWUsc0RBQUksQ0FBQyw0REFBUyxpRkFBaUYsc0RBQUksQ0FBQyxtRUFBZ0Isa0JBQWtCLHNEQUFJLENBQUMsbURBQUssMEJBQTBCLHNEQUFJLENBQUMsc0RBQVE7QUFDdlc7QUFDQTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ6QjtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFZO0FBQ2tEO0FBQ2Q7QUFDTDtBQUNFO0FBQ0M7QUFDdEI7QUFDZ0I7QUFDTjtBQUMxRDtBQUNBO0FBQ0EsZ0NBQWdDLG1FQUFXO0FBQzNDLFlBQVksdURBQUssQ0FBQyx1REFBUyxlQUFlLHVEQUFLLENBQUMscURBQU0sZUFBZSxzREFBSSxDQUFDLCtFQUFlLE9BQU8sc0RBQUksQ0FBQyx5REFBVSw0Q0FBNEMsc0RBQUksQ0FBQyx5RUFBYTtBQUM3SztBQUNBO0FBQ0Esc0NBQVk7QUFDWiwrRUFBK0UsK0RBQVc7QUFDMUYsZ0NBQWdDLHNEQUFJLENBQUMsNEVBQW9CLGNBQWMsc0RBQUksQ0FBQyw4RUFBcUIsY0FBYyxzREFBSSxD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Q0Esd0JBQXdCLHVDQUFZO0FBQzJCO0FBQ0Y7QUFDTjtBQUN2RDtBQUNBO0FBQ0EsbUNBQW1DLG1FQUFXO0FBQzlDLFlBQVksdURBQUssa0VBQWtFLHNEQUFJLDZFQUE2RSxzREFBSSxtTkFBbU4sc0RBQUksQ0FBQyxxREFBTTtBQUN0WTtBQUNBO0FBQ0Esc0NBQVk7QUFDWix5RkFBeUYsK0RBQVc7QUFDckUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L1VzZXJzUGFnZS50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L1VzZXJzTGlzdC50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvbXBvbmVudHMvaGVhZGVyL1VzZXJMaXN0VG9vbGJhci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvbXBvbmVudHMvaGVhZGVyL1VzZXJzTGlzdEZpbHRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvbXBvbmVudHMvaGVhZGVyL1VzZXJzTGlzdEdyb3VwaW5nLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29tcG9uZW50cy9oZWFkZXIvVXNlcnNMaXN0SGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29tcG9uZW50cy9oZWFkZXIvVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29tcG9uZW50cy9sb2FkaW5nL1VzZXJzTGlzdExvYWRpbmcudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb21wb25lbnRzL3BhZ2luYXRpb24vVXNlcnNMaXN0UGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvcmUvTGlzdFZpZXdQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvcmUvUXVlcnlSZXF1ZXN0UHJvdmlkZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb3JlL1F1ZXJ5UmVzcG9uc2VQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvcmUvX21vZGVscy50cyIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29yZS9fcmVxdWVzdHMudHMiLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL1VzZXJzVGFibGUudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL0N1c3RvbUhlYWRlckNvbHVtbi50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvQ3VzdG9tUm93LnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9Vc2VyQWN0aW9uc0NlbGwudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL1VzZXJDdXN0b21IZWFkZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL1VzZXJJbmZvQ2VsbC50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvVXNlckxhc3RMb2dpbkNlbGwudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL1VzZXJTZWxlY3Rpb25DZWxsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9Vc2VyU2VsZWN0aW9uSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9Vc2VyVHdvU3RlcHNDZWxsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9fY29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3VzZXItZWRpdC1tb2RhbC9Vc2VyRWRpdE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdXNlci1lZGl0LW1vZGFsL1VzZXJFZGl0TW9kYWxGb3JtLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdXNlci1lZGl0LW1vZGFsL1VzZXJFZGl0TW9kYWxGb3JtV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3VzZXItZWRpdC1tb2RhbC9Vc2VyRWRpdE1vZGFsSGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUGFnZVRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vX21ldHJvbmljL2xheW91dC9jb3JlJztcbmltcG9ydCB7IFVzZXJzTGlzdFdyYXBwZXIgfSBmcm9tICcuL3VzZXJzLWxpc3QvVXNlcnNMaXN0JztcbmNvbnN0IHVzZXJzQnJlYWRjcnVtYnMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1VzZXIgTWFuYWdlbWVudCcsXG4gICAgICAgIHBhdGg6ICcvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMnLFxuICAgICAgICBpc1NlcGFyYXRvcjogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgaXNTZXBhcmF0b3I6IHRydWUsXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICB9LFxuXTtcbmNvbnN0IFVzZXJzUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKF9qc3hzKFJvdXRlcywgeyBjaGlsZHJlbjogW19qc3goUm91dGUsIE9iamVjdC5hc3NpZ24oeyBlbGVtZW50OiBfanN4KE91dGxldCwge30pIH0sIHsgY2hpbGRyZW46IF9qc3goUm91dGUsIHsgcGF0aDogJ3VzZXJzJywgZWxlbWVudDogX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChQYWdlVGl0bGUsIE9iamVjdC5hc3NpZ24oeyBicmVhZGNydW1iczogdXNlcnNCcmVhZGNydW1icyB9LCB7IGNoaWxkcmVuOiBcIlVzZXJzIGxpc3RcIiB9KSksIF9qc3goVXNlcnNMaXN0V3JhcHBlciwge30pXSB9KSB9KSB9KSksIF9qc3goUm91dGUsIHsgaW5kZXg6IHRydWUsIGVsZW1lbnQ6IF9qc3goTmF2aWdhdGUsIHsgdG86ICcvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMnIH0pIH0pXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNQYWdlO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc1BhZ2VcIik7XG5leHBvcnQgZGVmYXVsdCBVc2Vyc1BhZ2U7XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8zO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBMaXN0Vmlld1Byb3ZpZGVyLCB1c2VMaXN0VmlldyB9IGZyb20gJy4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmltcG9ydCB7IFF1ZXJ5UmVxdWVzdFByb3ZpZGVyIH0gZnJvbSAnLi9jb3JlL1F1ZXJ5UmVxdWVzdFByb3ZpZGVyJztcbmltcG9ydCB7IFF1ZXJ5UmVzcG9uc2VQcm92aWRlciB9IGZyb20gJy4vY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXInO1xuaW1wb3J0IHsgVXNlcnNMaXN0SGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9Vc2Vyc0xpc3RIZWFkZXInO1xuaW1wb3J0IHsgVXNlcnNUYWJsZSB9IGZyb20gJy4vdGFibGUvVXNlcnNUYWJsZSc7XG5pbXBvcnQgeyBVc2VyRWRpdE1vZGFsIH0gZnJvbSAnLi91c2VyLWVkaXQtbW9kYWwvVXNlckVkaXRNb2RhbCc7XG5pbXBvcnQgeyBLVENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9fbWV0cm9uaWMvaGVscGVycyc7XG5jb25zdCBVc2Vyc0xpc3QgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8zKCk7XG4gICAgY29uc3QgeyBpdGVtSWRGb3JVcGRhdGUgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhLVENhcmQsIHsgY2hpbGRyZW46IFtfanN4KFVzZXJzTGlzdEhlYWRlciwge30pLCBfanN4KFVzZXJzVGFibGUsIHt9KV0gfSksIGl0ZW1JZEZvclVwZGF0ZSAhPT0gdW5kZWZpbmVkICYmIF9qc3goVXNlckVkaXRNb2RhbCwge30pXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNMaXN0O1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc0xpc3RcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzMoVXNlcnNMaXN0LCBcImNKczI1Zk5jSDd5a0x1U1RWY0h4L1JaZmt1UT1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0Vmlld10pO1xuY29uc3QgVXNlcnNMaXN0V3JhcHBlciA9ICgpID0+IChfanN4KFF1ZXJ5UmVxdWVzdFByb3ZpZGVyLCB7IGNoaWxkcmVuOiBfanN4KFF1ZXJ5UmVzcG9uc2VQcm92aWRlciwgeyBjaGlsZHJlbjogX2pzeChMaXN0Vmlld1Byb3ZpZGVyLCB7IGNoaWxkcmVuOiBfanN4KFVzZXJzTGlzdCwge30pIH0pIH0pIH0pKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9IFVzZXJzTGlzdFdyYXBwZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8yLCBcIlVzZXJzTGlzdFdyYXBwZXJcIik7XG5leHBvcnQgeyBVc2Vyc0xpc3RXcmFwcGVyIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEtUSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL19tZXRyb25pYy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmltcG9ydCB7IFVzZXJzTGlzdEZpbHRlciB9IGZyb20gJy4vVXNlcnNMaXN0RmlsdGVyJztcbmNvbnN0IFVzZXJzTGlzdFRvb2xiYXIgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBzZXRJdGVtSWRGb3JVcGRhdGUgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgY29uc3Qgb3BlbkFkZFVzZXJNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXRlbUlkRm9yVXBkYXRlKG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnLCBcImRhdGEta3QtdXNlci10YWJsZS10b29sYmFyXCI6ICdiYXNlJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChVc2Vyc0xpc3RGaWx0ZXIsIHt9KSwgX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6ICdidG4gYnRuLWxpZ2h0LXByaW1hcnkgbWUtMycgfSwgeyBjaGlsZHJlbjogW19qc3goS1RJY29uLCB7IGljb25OYW1lOiAnZXhpdC11cCcsIGNsYXNzTmFtZTogJ2ZzLTInIH0pLCBcIkV4cG9ydFwiXSB9KSksIF9qc3hzKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAnYnV0dG9uJywgY2xhc3NOYW1lOiAnYnRuIGJ0bi1wcmltYXJ5Jywgb25DbGljazogb3BlbkFkZFVzZXJNb2RhbCB9LCB7IGNoaWxkcmVuOiBbX2pzeChLVEljb24sIHsgaWNvbk5hbWU6ICdwbHVzJywgY2xhc3NOYW1lOiAnZnMtMicgfSksIFwiQWRkIFVzZXJcIl0gfSkpXSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzTGlzdFRvb2xiYXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzTGlzdFRvb2xiYXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlcnNMaXN0VG9vbGJhciwgXCJUMXZLTnNOelN6OUdlNHptaUZlUmdDT3J5S2s9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXddKTtcbmV4cG9ydCB7IFVzZXJzTGlzdFRvb2xiYXIgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL19tZXRyb25pYy9hc3NldHMvdHMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBpbml0aWFsUXVlcnlTdGF0ZSwgS1RJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vX21ldHJvbmljL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vY29yZS9RdWVyeVJlcXVlc3RQcm92aWRlcic7XG5pbXBvcnQgeyB1c2VRdWVyeVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXInO1xuY29uc3QgVXNlcnNMaXN0RmlsdGVyID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgdXBkYXRlU3RhdGUgfSA9IHVzZVF1ZXJ5UmVxdWVzdCgpO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeVJlc3BvbnNlKCk7XG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbbGFzdExvZ2luLCBzZXRMYXN0TG9naW5dID0gdXNlU3RhdGUoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBNZW51Q29tcG9uZW50LnJlaW5pdGlhbGl6YXRpb24oKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgcmVzZXREYXRhID0gKCkgPT4ge1xuICAgICAgICB1cGRhdGVTdGF0ZShPYmplY3QuYXNzaWduKHsgZmlsdGVyOiB1bmRlZmluZWQgfSwgaW5pdGlhbFF1ZXJ5U3RhdGUpKTtcbiAgICB9O1xuICAgIGNvbnN0IGZpbHRlckRhdGEgPSAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKE9iamVjdC5hc3NpZ24oeyBmaWx0ZXI6IHsgcm9sZSwgbGFzdF9sb2dpbjogbGFzdExvZ2luIH0gfSwgaW5pdGlhbFF1ZXJ5U3RhdGUpKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc0xvYWRpbmcsIHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6ICdidG4gYnRuLWxpZ2h0LXByaW1hcnkgbWUtMycsIFwiZGF0YS1rdC1tZW51LXRyaWdnZXJcIjogJ2NsaWNrJywgXCJkYXRhLWt0LW1lbnUtcGxhY2VtZW50XCI6ICdib3R0b20tZW5kJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChLVEljb24sIHsgaWNvbk5hbWU6ICdmaWx0ZXInLCBjbGFzc05hbWU6ICdmcy0yJyB9KSwgXCJGaWx0ZXJcIl0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWVudSBtZW51LXN1YiBtZW51LXN1Yi1kcm9wZG93biB3LTMwMHB4IHctbWQtMzI1cHgnLCBcImRhdGEta3QtbWVudVwiOiAndHJ1ZScgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3B4LTcgcHktNScgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnMtNSB0ZXh0LWRhcmsgZnctYm9sZGVyJyB9LCB7IGNoaWxkcmVuOiBcIkZpbHRlciBPcHRpb25zXCIgfSkpIH0pKSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NlcGFyYXRvciBib3JkZXItZ3JheS0yMDAnIH0pLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncHgtNyBweS01JywgXCJkYXRhLWt0LXVzZXItdGFibGUtZmlsdGVyXCI6ICdmb3JtJyB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21iLTEwJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWxhYmVsIGZzLTYgZnctYm9sZCcgfSwgeyBjaGlsZHJlbjogXCJSb2xlOlwiIH0pKSwgX2pzeHMoXCJzZWxlY3RcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNvbGlkIGZ3LWJvbGRlcicsIFwiZGF0YS1rdC1zZWxlY3QyXCI6ICd0cnVlJywgXCJkYXRhLXBsYWNlaG9sZGVyXCI6ICdTZWxlY3Qgb3B0aW9uJywgXCJkYXRhLWFsbG93LWNsZWFyXCI6ICd0cnVlJywgXCJkYXRhLWt0LXVzZXItdGFibGUtZmlsdGVyXCI6ICdyb2xlJywgXCJkYXRhLWhpZGUtc2VhcmNoXCI6ICd0cnVlJywgb25DaGFuZ2U6IChlKSA9PiBzZXRSb2xlKGUudGFyZ2V0LnZhbHVlKSwgdmFsdWU6IHJvbGUgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgeyB2YWx1ZTogJycgfSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnQWRtaW5pc3RyYXRvcicgfSwgeyBjaGlsZHJlbjogXCJBZG1pbmlzdHJhdG9yXCIgfSkpLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJ0FuYWx5c3QnIH0sIHsgY2hpbGRyZW46IFwiQW5hbHlzdFwiIH0pKSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICdEZXZlbG9wZXInIH0sIHsgY2hpbGRyZW46IFwiRGV2ZWxvcGVyXCIgfSkpLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJ1N1cHBvcnQnIH0sIHsgY2hpbGRyZW46IFwiU3VwcG9ydFwiIH0pKSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICdUcmlhbCcgfSwgeyBjaGlsZHJlbjogXCJUcmlhbFwiIH0pKV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtYi0xMCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1sYWJlbCBmcy02IGZ3LWJvbGQnIH0sIHsgY2hpbGRyZW46IFwiTGFzdCBsb2dpbjpcIiB9KSksIF9qc3hzKFwic2VsZWN0XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zb2xpZCBmdy1ib2xkZXInLCBcImRhdGEta3Qtc2VsZWN0MlwiOiAndHJ1ZScsIFwiZGF0YS1wbGFjZWhvbGRlclwiOiAnU2VsZWN0IG9wdGlvbicsIFwiZGF0YS1hbGxvdy1jbGVhclwiOiAndHJ1ZScsIFwiZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlclwiOiAndHdvLXN0ZXAnLCBcImRhdGEtaGlkZS1zZWFyY2hcIjogJ3RydWUnLCBvbkNoYW5nZTogKGUpID0+IHNldExhc3RMb2dpbihlLnRhcmdldC52YWx1ZSksIHZhbHVlOiBsYXN0TG9naW4gfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgeyB2YWx1ZTogJycgfSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnWWVzdGVyZGF5JyB9LCB7IGNoaWxkcmVuOiBcIlllc3RlcmRheVwiIH0pKSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICcyMCBtaW5zIGFnbycgfSwgeyBjaGlsZHJlbjogXCIyMCBtaW5zIGFnb1wiIH0pKSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICc1IGhvdXJzIGFnbycgfSwgeyBjaGlsZHJlbjogXCI1IGhvdXJzIGFnb1wiIH0pKSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICcyIGRheXMgYWdvJyB9LCB7IGNoaWxkcmVuOiBcIjIgZGF5cyBhZ29cIiB9KSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAnYnV0dG9uJywgZGlzYWJsZWQ6IGlzTG9hZGluZywgb25DbGljazogZmlsdGVyRGF0YSwgY2xhc3NOYW1lOiAnYnRuIGJ0bi1saWdodCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnkgZnctYm9sZCBtZS0yIHB4LTYnLCBcImRhdGEta3QtbWVudS1kaXNtaXNzXCI6ICd0cnVlJywgXCJkYXRhLWt0LXVzZXItdGFibGUtZmlsdGVyXCI6ICdyZXNldCcgfSwgeyBjaGlsZHJlbjogXCJSZXNldFwiIH0pKSwgX2pzeChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzTG9hZGluZywgdHlwZTogJ2J1dHRvbicsIG9uQ2xpY2s6IHJlc2V0RGF0YSwgY2xhc3NOYW1lOiAnYnRuIGJ0bi1wcmltYXJ5IGZ3LWJvbGQgcHgtNicsIFwiZGF0YS1rdC1tZW51LWRpc21pc3NcIjogJ3RydWUnLCBcImRhdGEta3QtdXNlci10YWJsZS1maWx0ZXJcIjogJ2ZpbHRlcicgfSwgeyBjaGlsZHJlbjogXCJBcHBseVwiIH0pKV0gfSkpXSB9KSldIH0pKV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzTGlzdEZpbHRlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNMaXN0RmlsdGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJzTGlzdEZpbHRlciwgXCIvdWRBdUovR2ZEclcvVGYzd3drczBnMUNOMjQ9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXF1ZXN0LCB1c2VRdWVyeVJlc3BvbnNlXSk7XG5leHBvcnQgeyBVc2Vyc0xpc3RGaWx0ZXIgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCwgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBRVUVSSUVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vX21ldHJvbmljL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi8uLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvcmUvUXVlcnlSZXNwb25zZVByb3ZpZGVyJztcbmltcG9ydCB7IGRlbGV0ZVNlbGVjdGVkVXNlcnMgfSBmcm9tICcuLi8uLi9jb3JlL19yZXF1ZXN0cyc7XG5jb25zdCBVc2Vyc0xpc3RHcm91cGluZyA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHNlbGVjdGVkLCBjbGVhclNlbGVjdGVkIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VRdWVyeVJlc3BvbnNlKCk7XG4gICAgY29uc3QgZGVsZXRlU2VsZWN0ZWRJdGVtcyA9IHVzZU11dGF0aW9uKCgpID0+IGRlbGV0ZVNlbGVjdGVkVXNlcnMoc2VsZWN0ZWQpLCB7XG4gICAgICAgIC8vIPCfkqEgcmVzcG9uc2Ugb2YgdGhlIG11dGF0aW9uIGlzIHBhc3NlZCB0byBvblN1Y2Nlc3NcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyDinIUgdXBkYXRlIGRldGFpbCB2aWV3IGRpcmVjdGx5XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbYCR7UVVFUklFUy5VU0VSU19MSVNUfS0ke3F1ZXJ5fWBdKTtcbiAgICAgICAgICAgIGNsZWFyU2VsZWN0ZWQoKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBhbGlnbi1pdGVtcy1jZW50ZXInIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnctYm9sZGVyIG1lLTUnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWUtMicgfSwgeyBjaGlsZHJlbjogc2VsZWN0ZWQubGVuZ3RoIH0pKSwgXCIgU2VsZWN0ZWRcIl0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAnYnV0dG9uJywgY2xhc3NOYW1lOiAnYnRuIGJ0bi1kYW5nZXInLCBvbkNsaWNrOiAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIGRlbGV0ZVNlbGVjdGVkSXRlbXMubXV0YXRlQXN5bmMoKTsgfSkgfSwgeyBjaGlsZHJlbjogXCJEZWxldGUgU2VsZWN0ZWRcIiB9KSldIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNMaXN0R3JvdXBpbmc7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzTGlzdEdyb3VwaW5nXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJzTGlzdEdyb3VwaW5nLCBcIm9ZL2NVL08rWkowN3pVQ2RzOE56bFYvcXVsVT1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0VmlldywgdXNlUXVlcnlDbGllbnQsIHVzZVF1ZXJ5UmVzcG9uc2UsIHVzZU11dGF0aW9uXSk7XG5leHBvcnQgeyBVc2Vyc0xpc3RHcm91cGluZyB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uLy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5pbXBvcnQgeyBVc2Vyc0xpc3RUb29sYmFyIH0gZnJvbSAnLi9Vc2VyTGlzdFRvb2xiYXInO1xuaW1wb3J0IHsgVXNlcnNMaXN0R3JvdXBpbmcgfSBmcm9tICcuL1VzZXJzTGlzdEdyb3VwaW5nJztcbmltcG9ydCB7IFVzZXJzTGlzdFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50JztcbmNvbnN0IFVzZXJzTGlzdEhlYWRlciA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2NhcmQtaGVhZGVyIGJvcmRlci0wIHB0LTYnIH0sIHsgY2hpbGRyZW46IFtfanN4KFVzZXJzTGlzdFNlYXJjaENvbXBvbmVudCwge30pLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjYXJkLXRvb2xiYXInIH0sIHsgY2hpbGRyZW46IHNlbGVjdGVkLmxlbmd0aCA+IDAgPyBfanN4KFVzZXJzTGlzdEdyb3VwaW5nLCB7fSkgOiBfanN4KFVzZXJzTGlzdFRvb2xiYXIsIHt9KSB9KSldIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNMaXN0SGVhZGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc0xpc3RIZWFkZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlcnNMaXN0SGVhZGVyLCBcImEzMkRBMGNtamZCWkZnRTY3QWFKZ215b2hKWT1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0Vmlld10pO1xuZXhwb3J0IHsgVXNlcnNMaXN0SGVhZGVyIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXRpYWxRdWVyeVN0YXRlLCBLVEljb24sIHVzZURlYm91bmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vX21ldHJvbmljL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vY29yZS9RdWVyeVJlcXVlc3RQcm92aWRlcic7XG5jb25zdCBVc2Vyc0xpc3RTZWFyY2hDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyB1cGRhdGVTdGF0ZSB9ID0gdXNlUXVlcnlSZXF1ZXN0KCk7XG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICAgIC8vIERlYm91bmNlIHNlYXJjaCB0ZXJtIHNvIHRoYXQgaXQgb25seSBnaXZlcyB1cyBsYXRlc3QgdmFsdWUgLi4uXG4gICAgLy8gLi4uIGlmIHNlYXJjaFRlcm0gaGFzIG5vdCBiZWVuIHVwZGF0ZWQgd2l0aGluIGxhc3QgNTAwbXMuXG4gICAgLy8gVGhlIGdvYWwgaXMgdG8gb25seSBoYXZlIHRoZSBBUEkgY2FsbCBmaXJlIHdoZW4gdXNlciBzdG9wcyB0eXBpbmcgLi4uXG4gICAgLy8gLi4uIHNvIHRoYXQgd2UgYXJlbid0IGhpdHRpbmcgb3VyIEFQSSByYXBpZGx5LlxuICAgIGNvbnN0IGRlYm91bmNlZFNlYXJjaFRlcm0gPSB1c2VEZWJvdW5jZShzZWFyY2hUZXJtLCAxNTApO1xuICAgIC8vIEVmZmVjdCBmb3IgQVBJIGNhbGxcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGVib3VuY2VkU2VhcmNoVGVybSAhPT0gdW5kZWZpbmVkICYmIHNlYXJjaFRlcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdXBkYXRlU3RhdGUoT2JqZWN0LmFzc2lnbih7IHNlYXJjaDogZGVib3VuY2VkU2VhcmNoVGVybSB9LCBpbml0aWFsUXVlcnlTdGF0ZSkpO1xuICAgICAgICB9XG4gICAgfSwgW2RlYm91bmNlZFNlYXJjaFRlcm1dIC8vIE9ubHkgY2FsbCBlZmZlY3QgaWYgZGVib3VuY2VkIHNlYXJjaCB0ZXJtIGNoYW5nZXNcbiAgICAvLyBNb3JlIGRldGFpbHMgYWJvdXQgdXNlRGVib3VuY2U6IGh0dHBzOi8vdXNlaG9va3MuY29tL3VzZURlYm91bmNlL1xuICAgICk7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjYXJkLXRpdGxlJyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZSBteS0xJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChLVEljb24sIHsgaWNvbk5hbWU6ICdtYWduaWZpZXInLCBjbGFzc05hbWU6ICdmcy0xIHBvc2l0aW9uLWFic29sdXRlIG1zLTYnIH0pLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiAndGV4dCcsIFwiZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlclwiOiAnc2VhcmNoJywgY2xhc3NOYW1lOiAnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zb2xpZCB3LTI1MHB4IHBzLTE0JywgcGxhY2Vob2xkZXI6ICdTZWFyY2ggdXNlcicsIHZhbHVlOiBzZWFyY2hUZXJtLCBvbkNoYW5nZTogKGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpIH0pXSB9KSkgfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc0xpc3RTZWFyY2hDb21wb25lbnQ7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzTGlzdFNlYXJjaENvbXBvbmVudFwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2Vyc0xpc3RTZWFyY2hDb21wb25lbnQsIFwiTjV0MWdYUlRaMlZ1VGxaN0E1QkVwbFlKVFVnPVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVxdWVzdCwgdXNlRGVib3VuY2VdKTtcbmV4cG9ydCB7IFVzZXJzTGlzdFNlYXJjaENvbXBvbmVudCB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBVc2Vyc0xpc3RMb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC40NzVyZW0nLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDAgNTBweCAwIHJnYig4MiA2MyAxMDUgLyAxNSUpJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGNvbG9yOiAnIzdlODI5OScsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgcGFkZGluZzogJzFyZW0gMnJlbScsXG4gICAgICAgIHRvcDogJ2NhbGMoNTAlIC0gMnJlbSknLFxuICAgICAgICBsZWZ0OiAnY2FsYyg1MCUgLSA0cmVtKScsXG4gICAgfTtcbiAgICByZXR1cm4gX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgc3R5bGU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzKSwgeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9KSB9LCB7IGNoaWxkcmVuOiBcIlByb2Nlc3NpbmcuLi5cIiB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNMaXN0TG9hZGluZztcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNMaXN0TG9hZGluZ1wiKTtcbmV4cG9ydCB7IFVzZXJzTGlzdExvYWRpbmcgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nLCB1c2VRdWVyeVJlc3BvbnNlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvUXVlcnlSZXNwb25zZVByb3ZpZGVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVxdWVzdCB9IGZyb20gJy4uLy4uL2NvcmUvUXVlcnlSZXF1ZXN0UHJvdmlkZXInO1xuY29uc3QgbWFwcGVkTGFiZWwgPSAobGFiZWwpID0+IHtcbiAgICBpZiAobGFiZWwgPT09ICcmbGFxdW87IFByZXZpb3VzJykge1xuICAgICAgICByZXR1cm4gJ1ByZXZpb3VzJztcbiAgICB9XG4gICAgaWYgKGxhYmVsID09PSAnTmV4dCAmcmFxdW87Jykge1xuICAgICAgICByZXR1cm4gJ05leHQnO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWw7XG59O1xuY29uc3QgVXNlcnNMaXN0UGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IHVzZVF1ZXJ5UmVzcG9uc2VQYWdpbmF0aW9uKCk7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gdXNlUXVlcnlSZXNwb25zZUxvYWRpbmcoKTtcbiAgICBjb25zdCB7IHVwZGF0ZVN0YXRlIH0gPSB1c2VRdWVyeVJlcXVlc3QoKTtcbiAgICBjb25zdCB1cGRhdGVQYWdlID0gKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKCFwYWdlIHx8IGlzTG9hZGluZyB8fCBwYWdpbmF0aW9uLnBhZ2UgPT09IHBhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVTdGF0ZSh7IHBhZ2UsIGl0ZW1zX3Blcl9wYWdlOiBwYWdpbmF0aW9uLml0ZW1zX3Blcl9wYWdlIHx8IDEwIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncm93JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NvbC1zbS0xMiBjb2wtbWQtNSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLXN0YXJ0JyB9KSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnY29sLXNtLTEyIGNvbC1tZC03IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtZW5kJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBpZDogJ2t0X3RhYmxlX3VzZXJzX3BhZ2luYXRlJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3BhZ2luYXRpb24nIH0sIHsgY2hpbGRyZW46IChfYSA9IHBhZ2luYXRpb24ubGlua3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBsaW5rKSwgeyBsYWJlbDogbWFwcGVkTGFiZWwobGluay5sYWJlbCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKGxpbmspID0+IChfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xzeCgncGFnZS1pdGVtJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHBhZ2luYXRpb24ucGFnZSA9PT0gbGluay5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogbGluay5sYWJlbCA9PT0gJ1ByZXZpb3VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbGluay5sYWJlbCA9PT0gJ05leHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsc3goJ3BhZ2UtbGluaycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYWdlLXRleHQnOiBsaW5rLmxhYmVsID09PSAnUHJldmlvdXMnIHx8IGxpbmsubGFiZWwgPT09ICdOZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtZS01JzogbGluay5sYWJlbCA9PT0gJ1ByZXZpb3VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIG9uQ2xpY2s6ICgpID0+IHVwZGF0ZVBhZ2UobGluay5wYWdlKSwgc3R5bGU6IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9LCB7IGNoaWxkcmVuOiBtYXBwZWRMYWJlbChsaW5rLmxhYmVsKSB9KSkgfSksIGxpbmsubGFiZWwpKSkgfSkpIH0pKSB9KSldIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNMaXN0UGFnaW5hdGlvbjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNMaXN0UGFnaW5hdGlvblwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2Vyc0xpc3RQYWdpbmF0aW9uLCBcImJuTkJVdHZiaEdUN3F0bXpSYzlreDBVQ05CQT1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlc3BvbnNlUGFnaW5hdGlvbiwgdXNlUXVlcnlSZXNwb25zZUxvYWRpbmcsIHVzZVF1ZXJ5UmVxdWVzdF0pO1xuZXhwb3J0IHsgVXNlcnNMaXN0UGFnaW5hdGlvbiB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzIsIF9yZWFjdF9yZWZyZXNoX3RlbXBfMztcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVkR3JvdXBpbmdJc0Rpc2FibGVkLCBjYWxjdWxhdGVJc0FsbERhdGFTZWxlY3RlZCwgZ3JvdXBpbmdPblNlbGVjdCwgaW5pdGlhbExpc3RWaWV3LCBncm91cGluZ09uU2VsZWN0QWxsLCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL19tZXRyb25pYy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVzcG9uc2UsIHVzZVF1ZXJ5UmVzcG9uc2VEYXRhIH0gZnJvbSAnLi9RdWVyeVJlc3BvbnNlUHJvdmlkZXInO1xuY29uc3QgTGlzdFZpZXdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsTGlzdFZpZXcpO1xuY29uc3QgTGlzdFZpZXdQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGluaXRpYWxMaXN0Vmlldy5zZWxlY3RlZCk7XG4gICAgY29uc3QgW2l0ZW1JZEZvclVwZGF0ZSwgc2V0SXRlbUlkRm9yVXBkYXRlXSA9IHVzZVN0YXRlKGluaXRpYWxMaXN0Vmlldy5pdGVtSWRGb3JVcGRhdGUpO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeVJlc3BvbnNlKCk7XG4gICAgY29uc3QgZGF0YSA9IHVzZVF1ZXJ5UmVzcG9uc2VEYXRhKCk7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB1c2VNZW1vKCgpID0+IGNhbGN1bGF0ZWRHcm91cGluZ0lzRGlzYWJsZWQoaXNMb2FkaW5nLCBkYXRhKSwgW2lzTG9hZGluZywgZGF0YV0pO1xuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWQgPSB1c2VNZW1vKCgpID0+IGNhbGN1bGF0ZUlzQWxsRGF0YVNlbGVjdGVkKGRhdGEsIHNlbGVjdGVkKSwgW2RhdGEsIHNlbGVjdGVkXSk7XG4gICAgcmV0dXJuIChfanN4KExpc3RWaWV3Q29udGV4dC5Qcm92aWRlciwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiB7XG4gICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgIGl0ZW1JZEZvclVwZGF0ZSxcbiAgICAgICAgICAgIHNldEl0ZW1JZEZvclVwZGF0ZSxcbiAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAoaWQpID0+IHtcbiAgICAgICAgICAgICAgICBncm91cGluZ09uU2VsZWN0KGlkLCBzZWxlY3RlZCwgc2V0U2VsZWN0ZWQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2VsZWN0QWxsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JvdXBpbmdPblNlbGVjdEFsbChpc0FsbFNlbGVjdGVkLCBzZXRTZWxlY3RlZCwgZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJTZWxlY3RlZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKFtdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBMaXN0Vmlld1Byb3ZpZGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJMaXN0Vmlld1Byb3ZpZGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKExpc3RWaWV3UHJvdmlkZXIsIFwiN1pkcENLUHNkZlFvbzU4WERZc3RMYnFrRmdNPVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVzcG9uc2UsIHVzZVF1ZXJ5UmVzcG9uc2VEYXRhXSk7XG5jb25zdCB1c2VMaXN0VmlldyA9ICgpID0+IChfcmVhY3RfcmVmcmVzaF90ZW1wXzMoKSwgdXNlQ29udGV4dChMaXN0Vmlld0NvbnRleHQpKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyh1c2VMaXN0VmlldywgXCJnRHNDamVlSXRVdXZnT1dmMXY0cW9LOVJGNms9XCIpO1xuZXhwb3J0IHsgTGlzdFZpZXdQcm92aWRlciwgdXNlTGlzdFZpZXcgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yLCBfcmVhY3RfcmVmcmVzaF90ZW1wXzM7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdGlhbFF1ZXJ5UmVxdWVzdCwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9fbWV0cm9uaWMvaGVscGVycyc7XG5jb25zdCBRdWVyeVJlcXVlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsUXVlcnlSZXF1ZXN0KTtcbmNvbnN0IFF1ZXJ5UmVxdWVzdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFF1ZXJ5UmVxdWVzdC5zdGF0ZSk7XG4gICAgY29uc3QgdXBkYXRlU3RhdGUgPSAodXBkYXRlcykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkU3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgdXBkYXRlcyk7XG4gICAgICAgIHNldFN0YXRlKHVwZGF0ZWRTdGF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goUXVlcnlSZXF1ZXN0Q29udGV4dC5Qcm92aWRlciwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiB7IHN0YXRlLCB1cGRhdGVTdGF0ZSB9IH0sIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gUXVlcnlSZXF1ZXN0UHJvdmlkZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlF1ZXJ5UmVxdWVzdFByb3ZpZGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFF1ZXJ5UmVxdWVzdFByb3ZpZGVyLCBcIkQ3YURxTitEN2IzVldRSVNiK3pLVTdmVlBFYz1cIik7XG5jb25zdCB1c2VRdWVyeVJlcXVlc3QgPSAoKSA9PiAoX3JlYWN0X3JlZnJlc2hfdGVtcF8zKCksIHVzZUNvbnRleHQoUXVlcnlSZXF1ZXN0Q29udGV4dCkpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zKHVzZVF1ZXJ5UmVxdWVzdCwgXCJnRHNDamVlSXRVdXZnT1dmMXY0cW9LOVJGNms9XCIpO1xuZXhwb3J0IHsgUXVlcnlSZXF1ZXN0UHJvdmlkZXIsIHVzZVF1ZXJ5UmVxdWVzdCB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzIsIF9yZWFjdF9yZWZyZXNoX3RlbXBfMywgX3JlYWN0X3JlZnJlc2hfdGVtcF80LCBfcmVhY3RfcmVmcmVzaF90ZW1wXzUsIF9yZWFjdF9yZWZyZXNoX3RlbXBfNjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zID0gJFJlZnJlc2hTaWckKCk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzQgPSAkUmVmcmVzaFNpZyQoKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfNSA9ICRSZWZyZXNoU2lnJCgpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF82ID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBjcmVhdGVSZXNwb25zZUNvbnRleHQsIGluaXRpYWxRdWVyeVJlc3BvbnNlLCBpbml0aWFsUXVlcnlTdGF0ZSwgUVVFUklFUywgc3RyaW5naWZ5UmVxdWVzdFF1ZXJ5LCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL19tZXRyb25pYy9oZWxwZXJzJztcbmltcG9ydCB7IGdldFVzZXJzIH0gZnJvbSAnLi9fcmVxdWVzdHMnO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXF1ZXN0IH0gZnJvbSAnLi9RdWVyeVJlcXVlc3RQcm92aWRlcic7XG5jb25zdCBRdWVyeVJlc3BvbnNlQ29udGV4dCA9IGNyZWF0ZVJlc3BvbnNlQ29udGV4dChpbml0aWFsUXVlcnlSZXNwb25zZSk7XG5jb25zdCBRdWVyeVJlc3BvbnNlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlUXVlcnlSZXF1ZXN0KCk7XG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShzdHJpbmdpZnlSZXF1ZXN0UXVlcnkoc3RhdGUpKTtcbiAgICBjb25zdCB1cGRhdGVkUXVlcnkgPSB1c2VNZW1vKCgpID0+IHN0cmluZ2lmeVJlcXVlc3RRdWVyeShzdGF0ZSksIFtzdGF0ZV0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChxdWVyeSAhPT0gdXBkYXRlZFF1ZXJ5KSB7XG4gICAgICAgICAgICBzZXRRdWVyeSh1cGRhdGVkUXVlcnkpO1xuICAgICAgICB9XG4gICAgfSwgW3VwZGF0ZWRRdWVyeV0pO1xuICAgIGNvbnN0IHsgaXNGZXRjaGluZywgcmVmZXRjaCwgZGF0YTogcmVzcG9uc2UsIH0gPSB1c2VRdWVyeShgJHtRVUVSSUVTLlVTRVJTX0xJU1R9LSR7cXVlcnl9YCwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0VXNlcnMocXVlcnkpO1xuICAgIH0sIHsgY2FjaGVUaW1lOiAwLCBrZWVwUHJldmlvdXNEYXRhOiB0cnVlLCByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UgfSk7XG4gICAgcmV0dXJuIChfanN4KFF1ZXJ5UmVzcG9uc2VDb250ZXh0LlByb3ZpZGVyLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IHsgaXNMb2FkaW5nOiBpc0ZldGNoaW5nLCByZWZldGNoLCByZXNwb25zZSwgcXVlcnkgfSB9LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFF1ZXJ5UmVzcG9uc2VQcm92aWRlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiUXVlcnlSZXNwb25zZVByb3ZpZGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFF1ZXJ5UmVzcG9uc2VQcm92aWRlciwgXCIvamg4YVYzWFpwODVmL3k4YW53QkNFRDBmZDA9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXF1ZXN0LCB1c2VRdWVyeV0pO1xuY29uc3QgdXNlUXVlcnlSZXNwb25zZSA9ICgpID0+IChfcmVhY3RfcmVmcmVzaF90ZW1wXzMoKSwgdXNlQ29udGV4dChRdWVyeVJlc3BvbnNlQ29udGV4dCkpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zKHVzZVF1ZXJ5UmVzcG9uc2UsIFwiZ0RzQ2plZUl0VXV2Z09XZjF2NHFvSzlSRjZrPVwiKTtcbmNvbnN0IHVzZVF1ZXJ5UmVzcG9uc2VEYXRhID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfNCgpO1xuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHVzZVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIChyZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UuZGF0YSkgfHwgW107XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF80KHVzZVF1ZXJ5UmVzcG9uc2VEYXRhLCBcIno1UHZudTV5U0ZmNTdRQ2oxOVFBSHVMdnZQZz1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlc3BvbnNlXSk7XG5jb25zdCB1c2VRdWVyeVJlc3BvbnNlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzUoKTtcbiAgICBjb25zdCBkZWZhdWx0UGFnaW5hdGlvblN0YXRlID0gT2JqZWN0LmFzc2lnbih7IGxpbmtzOiBbXSB9LCBpbml0aWFsUXVlcnlTdGF0ZSk7XG4gICAgY29uc3QgeyByZXNwb25zZSB9ID0gdXNlUXVlcnlSZXNwb25zZSgpO1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnBheWxvYWQgfHwgIXJlc3BvbnNlLnBheWxvYWQucGFnaW5hdGlvbikge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFBhZ2luYXRpb25TdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBheWxvYWQucGFnaW5hdGlvbjtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzUodXNlUXVlcnlSZXNwb25zZVBhZ2luYXRpb24sIFwiejVQdm51NXlTRmY1N1FDajE5UUFIdUx2dlBnPVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVzcG9uc2VdKTtcbmNvbnN0IHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfNigpO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeVJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIGlzTG9hZGluZztcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzYodXNlUXVlcnlSZXNwb25zZUxvYWRpbmcsIFwiT1VKMXNmV1g3UkdXZ2s2R0ZKYWFBYXBkRnM4PVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVzcG9uc2VdKTtcbmV4cG9ydCB7IFF1ZXJ5UmVzcG9uc2VQcm92aWRlciwgdXNlUXVlcnlSZXNwb25zZSwgdXNlUXVlcnlSZXNwb25zZURhdGEsIHVzZVF1ZXJ5UmVzcG9uc2VQYWdpbmF0aW9uLCB1c2VRdWVyeVJlc3BvbnNlTG9hZGluZywgfTtcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsVXNlciA9IHtcbiAgICBhdmF0YXI6ICdhdmF0YXJzLzMwMC02LmpwZycsXG4gICAgcG9zaXRpb246ICdBcnQgRGlyZWN0b3InLFxuICAgIHJvbGU6ICdBZG1pbmlzdHJhdG9yJyxcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfVEhFTUVfQVBJX1VSTDtcbmNvbnN0IFVTRVJfVVJMID0gYCR7QVBJX1VSTH0vdXNlcmA7XG5jb25zdCBHRVRfVVNFUlNfVVJMID0gYCR7QVBJX1VSTH0vdXNlcnMvcXVlcnlgO1xuY29uc3QgZ2V0VXNlcnMgPSAocXVlcnkpID0+IHtcbiAgICByZXR1cm4gYXhpb3NcbiAgICAgICAgLmdldChgJHtHRVRfVVNFUlNfVVJMfT8ke3F1ZXJ5fWApXG4gICAgICAgIC50aGVuKChkKSA9PiBkLmRhdGEpO1xufTtcbmNvbnN0IGdldFVzZXJCeUlkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAgIC5nZXQoYCR7VVNFUl9VUkx9LyR7aWR9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpO1xufTtcbmNvbnN0IGNyZWF0ZVVzZXIgPSAodXNlcikgPT4ge1xuICAgIHJldHVybiBheGlvc1xuICAgICAgICAucHV0KFVTRVJfVVJMLCB1c2VyKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSk7XG59O1xuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VyKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAgIC5wb3N0KGAke1VTRVJfVVJMfS8ke3VzZXIuaWR9YCwgdXNlcilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpO1xufTtcbmNvbnN0IGRlbGV0ZVVzZXIgPSAodXNlcklkKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtVU0VSX1VSTH0vJHt1c2VySWR9YCkudGhlbigoKSA9PiB7IH0pO1xufTtcbmNvbnN0IGRlbGV0ZVNlbGVjdGVkVXNlcnMgPSAodXNlcklkcykgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RzID0gdXNlcklkcy5tYXAoKGlkKSA9PiBheGlvcy5kZWxldGUoYCR7VVNFUl9VUkx9LyR7aWR9YCkpO1xuICAgIHJldHVybiBheGlvcy5hbGwocmVxdWVzdHMpLnRoZW4oKCkgPT4geyB9KTtcbn07XG5leHBvcnQgeyBnZXRVc2VycywgZGVsZXRlVXNlciwgZGVsZXRlU2VsZWN0ZWRVc2VycywgZ2V0VXNlckJ5SWQsIGNyZWF0ZVVzZXIsIHVwZGF0ZVVzZXIgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IHsgQ3VzdG9tSGVhZGVyQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW5zL0N1c3RvbUhlYWRlckNvbHVtbic7XG5pbXBvcnQgeyBDdXN0b21Sb3cgfSBmcm9tICcuL2NvbHVtbnMvQ3VzdG9tUm93JztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVzcG9uc2VEYXRhLCB1c2VRdWVyeVJlc3BvbnNlTG9hZGluZyB9IGZyb20gJy4uL2NvcmUvUXVlcnlSZXNwb25zZVByb3ZpZGVyJztcbmltcG9ydCB7IHVzZXJzQ29sdW1ucyB9IGZyb20gJy4vY29sdW1ucy9fY29sdW1ucyc7XG5pbXBvcnQgeyBVc2Vyc0xpc3RMb2FkaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nL1VzZXJzTGlzdExvYWRpbmcnO1xuaW1wb3J0IHsgVXNlcnNMaXN0UGFnaW5hdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9Vc2Vyc0xpc3RQYWdpbmF0aW9uJztcbmltcG9ydCB7IEtUQ2FyZEJvZHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9fbWV0cm9uaWMvaGVscGVycyc7XG5jb25zdCBVc2Vyc1RhYmxlID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHVzZXJzID0gdXNlUXVlcnlSZXNwb25zZURhdGEoKTtcbiAgICBjb25zdCBpc0xvYWRpbmcgPSB1c2VRdWVyeVJlc3BvbnNlTG9hZGluZygpO1xuICAgIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IHVzZXJzLCBbdXNlcnNdKTtcbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiB1c2Vyc0NvbHVtbnMsIFtdKTtcbiAgICBjb25zdCB7IGdldFRhYmxlUHJvcHMsIGdldFRhYmxlQm9keVByb3BzLCBoZWFkZXJzLCByb3dzLCBwcmVwYXJlUm93IH0gPSB1c2VUYWJsZSh7XG4gICAgICAgIGNvbHVtbnMsXG4gICAgICAgIGRhdGEsXG4gICAgfSk7XG4gICAgcmV0dXJuIChfanN4cyhLVENhcmRCb2R5LCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncHktNCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RhYmxlLXJlc3BvbnNpdmUnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwidGFibGVcIiwgT2JqZWN0LmFzc2lnbih7IGlkOiAna3RfdGFibGVfdXNlcnMnLCBjbGFzc05hbWU6ICd0YWJsZSBhbGlnbi1taWRkbGUgdGFibGUtcm93LWRhc2hlZCBmcy02IGd5LTUgZGF0YVRhYmxlIG5vLWZvb3RlcicgfSwgZ2V0VGFibGVQcm9wcygpLCB7IGNoaWxkcmVuOiBbX2pzeChcInRoZWFkXCIsIHsgY2hpbGRyZW46IF9qc3goXCJ0clwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGV4dC1zdGFydCB0ZXh0LW11dGVkIGZ3LWJvbGRlciBmcy03IHRleHQtdXBwZXJjYXNlIGdzLTAnIH0sIHsgY2hpbGRyZW46IGhlYWRlcnMubWFwKChjb2x1bW4pID0+IChfanN4KEN1c3RvbUhlYWRlckNvbHVtbiwgeyBjb2x1bW46IGNvbHVtbiB9LCBjb2x1bW4uaWQpKSkgfSkpIH0pLCBfanN4KFwidGJvZHlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RleHQtZ3JheS02MDAgZnctYm9sZCcgfSwgZ2V0VGFibGVCb2R5UHJvcHMoKSwgeyBjaGlsZHJlbjogcm93cy5sZW5ndGggPiAwID8gKHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2pzeChDdXN0b21Sb3csIHsgcm93OiByb3cgfSwgYHJvdy0ke2l9LSR7cm93LmlkfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSA6IChfanN4KFwidHJcIiwgeyBjaGlsZHJlbjogX2pzeChcInRkXCIsIE9iamVjdC5hc3NpZ24oeyBjb2xTcGFuOiA3IH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCB0ZXh0LWNlbnRlciB3LTEwMCBhbGlnbi1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyB9LCB7IGNoaWxkcmVuOiBcIk5vIG1hdGNoaW5nIHJlY29yZHMgZm91bmRcIiB9KSkgfSkpIH0pKSB9KSldIH0pKSB9KSksIF9qc3goVXNlcnNMaXN0UGFnaW5hdGlvbiwge30pLCBpc0xvYWRpbmcgJiYgX2pzeChVc2Vyc0xpc3RMb2FkaW5nLCB7fSldIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNUYWJsZTtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNUYWJsZVwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2Vyc1RhYmxlLCBcIjZ4bUtQN2lISE9OZDc3cStOdUloNFJhNk4rUT1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlc3BvbnNlRGF0YSwgdXNlUXVlcnlSZXNwb25zZUxvYWRpbmcsIHVzZVRhYmxlXSk7XG5leHBvcnQgeyBVc2Vyc1RhYmxlIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgQ3VzdG9tSGVhZGVyQ29sdW1uID0gKHsgY29sdW1uIH0pID0+IChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogY29sdW1uLkhlYWRlciAmJiB0eXBlb2YgY29sdW1uLkhlYWRlciA9PT0gJ3N0cmluZycgPyAoX2pzeChcInRoXCIsIE9iamVjdC5hc3NpZ24oe30sIGNvbHVtbi5nZXRIZWFkZXJQcm9wcygpLCB7IGNoaWxkcmVuOiBjb2x1bW4ucmVuZGVyKCdIZWFkZXInKSB9KSkpIDogKGNvbHVtbi5yZW5kZXIoJ0hlYWRlcicpKSB9KSk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBDdXN0b21IZWFkZXJDb2x1bW47XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIkN1c3RvbUhlYWRlckNvbHVtblwiKTtcbmV4cG9ydCB7IEN1c3RvbUhlYWRlckNvbHVtbiB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5jb25zdCBDdXN0b21Sb3cgPSAoeyByb3cgfSkgPT4gKF9qc3goXCJ0clwiLCBPYmplY3QuYXNzaWduKHt9LCByb3cuZ2V0Um93UHJvcHMoKSwgeyBjaGlsZHJlbjogcm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICByZXR1cm4gKF9qc3goXCJ0ZFwiLCBPYmplY3QuYXNzaWduKHt9LCBjZWxsLmdldENlbGxQcm9wcygpLCB7IGNsYXNzTmFtZTogY2xzeCh7ICd0ZXh0LWVuZCBtaW4tdy0xMDBweCc6IGNlbGwuY29sdW1uLmlkID09PSAnYWN0aW9ucycgfSkgfSwgeyBjaGlsZHJlbjogY2VsbC5yZW5kZXIoJ0NlbGwnKSB9KSkpO1xuICAgIH0pIH0pKSk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBDdXN0b21Sb3c7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIkN1c3RvbVJvd1wiKTtcbmV4cG9ydCB7IEN1c3RvbVJvdyB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vX21ldHJvbmljL2Fzc2V0cy90cy9jb21wb25lbnRzJztcbmltcG9ydCB7IEtUSWNvbiwgUVVFUklFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL19tZXRyb25pYy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9jb3JlL1F1ZXJ5UmVzcG9uc2VQcm92aWRlcic7XG5pbXBvcnQgeyBkZWxldGVVc2VyIH0gZnJvbSAnLi4vLi4vY29yZS9fcmVxdWVzdHMnO1xuY29uc3QgVXNlckFjdGlvbnNDZWxsID0gKHsgaWQgfSkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgc2V0SXRlbUlkRm9yVXBkYXRlIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgTWVudUNvbXBvbmVudC5yZWluaXRpYWxpemF0aW9uKCk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG9wZW5FZGl0TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldEl0ZW1JZEZvclVwZGF0ZShpZCk7XG4gICAgfTtcbiAgICBjb25zdCBkZWxldGVJdGVtID0gdXNlTXV0YXRpb24oKCkgPT4gZGVsZXRlVXNlcihpZCksIHtcbiAgICAgICAgLy8g8J+SoSByZXNwb25zZSBvZiB0aGUgbXV0YXRpb24gaXMgcGFzc2VkIHRvIG9uU3VjY2Vzc1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIOKchSB1cGRhdGUgZGV0YWlsIHZpZXcgZGlyZWN0bHlcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtgJHtRVUVSSUVTLlVTRVJTX0xJU1R9LSR7cXVlcnl9YF0pO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiAnIycsIGNsYXNzTmFtZTogJ2J0biBidG4tbGlnaHQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5IGJ0bi1zbScsIFwiZGF0YS1rdC1tZW51LXRyaWdnZXJcIjogJ2NsaWNrJywgXCJkYXRhLWt0LW1lbnUtcGxhY2VtZW50XCI6ICdib3R0b20tZW5kJyB9LCB7IGNoaWxkcmVuOiBbXCJBY3Rpb25zXCIsIF9qc3goS1RJY29uLCB7IGljb25OYW1lOiAnZG93bicsIGNsYXNzTmFtZTogJ2ZzLTUgbS0wJyB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWVudSBtZW51LXN1YiBtZW51LXN1Yi1kcm9wZG93biBtZW51LWNvbHVtbiBtZW51LXJvdW5kZWQgbWVudS1ncmF5LTYwMCBtZW51LXN0YXRlLWJnLWxpZ2h0LXByaW1hcnkgZnctYm9sZCBmcy03IHctMTI1cHggcHktNCcsIFwiZGF0YS1rdC1tZW51XCI6ICd0cnVlJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWVudS1pdGVtIHB4LTMnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtZW51LWxpbmsgcHgtMycsIG9uQ2xpY2s6IG9wZW5FZGl0TW9kYWwgfSwgeyBjaGlsZHJlbjogXCJFZGl0XCIgfSkpIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWVudS1pdGVtIHB4LTMnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtZW51LWxpbmsgcHgtMycsIFwiZGF0YS1rdC11c2Vycy10YWJsZS1maWx0ZXJcIjogJ2RlbGV0ZV9yb3cnLCBvbkNsaWNrOiAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIGRlbGV0ZUl0ZW0ubXV0YXRlQXN5bmMoKTsgfSkgfSwgeyBjaGlsZHJlbjogXCJEZWxldGVcIiB9KSkgfSkpXSB9KSldIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyQWN0aW9uc0NlbGw7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJBY3Rpb25zQ2VsbFwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2VyQWN0aW9uc0NlbGwsIFwiRGpGb0s3RUQyaUhzdjBncXJxOWpnUThEWWQwPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3LCB1c2VRdWVyeVJlc3BvbnNlLCB1c2VRdWVyeUNsaWVudCwgdXNlTXV0YXRpb25dKTtcbmV4cG9ydCB7IFVzZXJBY3Rpb25zQ2VsbCB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbml0aWFsUXVlcnlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL19tZXRyb25pYy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVxdWVzdCB9IGZyb20gJy4uLy4uL2NvcmUvUXVlcnlSZXF1ZXN0UHJvdmlkZXInO1xuY29uc3QgVXNlckN1c3RvbUhlYWRlciA9ICh7IGNsYXNzTmFtZSwgdGl0bGUsIHRhYmxlUHJvcHMgfSkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IGlkID0gdGFibGVQcm9wcy5jb2x1bW4uaWQ7XG4gICAgY29uc3QgeyBzdGF0ZSwgdXBkYXRlU3RhdGUgfSA9IHVzZVF1ZXJ5UmVxdWVzdCgpO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWRGb3JTb3J0aW5nID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5zb3J0ICYmIHN0YXRlLnNvcnQgPT09IGlkO1xuICAgIH0sIFtzdGF0ZSwgaWRdKTtcbiAgICBjb25zdCBvcmRlciA9IHVzZU1lbW8oKCkgPT4gc3RhdGUub3JkZXIsIFtzdGF0ZV0pO1xuICAgIGNvbnN0IHNvcnRDb2x1bW4gPSAoKSA9PiB7XG4gICAgICAgIC8vIGF2b2lkIHNvcnRpbmcgZm9yIHRoZXNlIGNvbHVtbnNcbiAgICAgICAgaWYgKGlkID09PSAnYWN0aW9ucycgfHwgaWQgPT09ICdzZWxlY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1NlbGVjdGVkRm9yU29ydGluZykge1xuICAgICAgICAgICAgLy8gZW5hYmxlIHNvcnQgYXNjXG4gICAgICAgICAgICB1cGRhdGVTdGF0ZShPYmplY3QuYXNzaWduKHsgc29ydDogaWQsIG9yZGVyOiAnYXNjJyB9LCBpbml0aWFsUXVlcnlTdGF0ZSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NlbGVjdGVkRm9yU29ydGluZyAmJiBvcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAob3JkZXIgPT09ICdhc2MnKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5hYmxlIHNvcnQgZGVzY1xuICAgICAgICAgICAgICAgIHVwZGF0ZVN0YXRlKE9iamVjdC5hc3NpZ24oeyBzb3J0OiBpZCwgb3JkZXI6ICdkZXNjJyB9LCBpbml0aWFsUXVlcnlTdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpc2FibGUgc29ydFxuICAgICAgICAgICAgdXBkYXRlU3RhdGUoT2JqZWN0LmFzc2lnbih7IHNvcnQ6IHVuZGVmaW5lZCwgb3JkZXI6IHVuZGVmaW5lZCB9LCBpbml0aWFsUXVlcnlTdGF0ZSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goXCJ0aFwiLCBPYmplY3QuYXNzaWduKHt9LCB0YWJsZVByb3BzLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpLCB7IGNsYXNzTmFtZTogY2xzeChjbGFzc05hbWUsIGlzU2VsZWN0ZWRGb3JTb3J0aW5nICYmIG9yZGVyICE9PSB1bmRlZmluZWQgJiYgYHRhYmxlLXNvcnQtJHtvcmRlcn1gKSwgc3R5bGU6IHsgY3Vyc29yOiAncG9pbnRlcicgfSwgb25DbGljazogc29ydENvbHVtbiB9LCB7IGNoaWxkcmVuOiB0aXRsZSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJDdXN0b21IZWFkZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJDdXN0b21IZWFkZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlckN1c3RvbUhlYWRlciwgXCJCQzEraHZuTXhDTzJZWWhvUVlSVllMY1k2Tzg9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXF1ZXN0XSk7XG5leHBvcnQgeyBVc2VyQ3VzdG9tSGVhZGVyIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB0b0Fic29sdXRlVXJsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vX21ldHJvbmljL2hlbHBlcnMnO1xuY29uc3QgVXNlckluZm9DZWxsID0gKHsgdXNlciB9KSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3N5bWJvbCBzeW1ib2wtY2lyY2xlIHN5bWJvbC01MHB4IG92ZXJmbG93LWhpZGRlbiBtZS0zJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogJyMnIH0sIHsgY2hpbGRyZW46IHVzZXIuYXZhdGFyID8gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3N5bWJvbC1sYWJlbCcgfSwgeyBjaGlsZHJlbjogX2pzeChcImltZ1wiLCB7IHNyYzogdG9BYnNvbHV0ZVVybChgL21lZGlhLyR7dXNlci5hdmF0YXJ9YCksIGFsdDogdXNlci5uYW1lLCBjbGFzc05hbWU6ICd3LTEwMCcgfSkgfSkpKSA6IChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsc3goJ3N5bWJvbC1sYWJlbCBmcy0zJywgYGJnLWxpZ2h0LSR7KF9hID0gdXNlci5pbml0aWFscykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXRlfWAsIGB0ZXh0LSR7KF9iID0gdXNlci5pbml0aWFscykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0YXRlfWApIH0sIHsgY2hpbGRyZW46IChfYyA9IHVzZXIuaW5pdGlhbHMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5sYWJlbCB9KSkpIH0pKSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggZmxleC1jb2x1bW4nIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogJyMnLCBjbGFzc05hbWU6ICd0ZXh0LWdyYXktODAwIHRleHQtaG92ZXItcHJpbWFyeSBtYi0xJyB9LCB7IGNoaWxkcmVuOiB1c2VyLm5hbWUgfSkpLCBfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiB1c2VyLmVtYWlsIH0pXSB9KSldIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlckluZm9DZWxsO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VySW5mb0NlbGxcIik7XG5leHBvcnQgeyBVc2VySW5mb0NlbGwgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgVXNlckxhc3RMb2dpbkNlbGwgPSAoeyBsYXN0X2xvZ2luIH0pID0+IChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdiYWRnZSBiYWRnZS1saWdodCBmdy1ib2xkZXInIH0sIHsgY2hpbGRyZW46IGxhc3RfbG9naW4gfSkpKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJMYXN0TG9naW5DZWxsO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyTGFzdExvZ2luQ2VsbFwiKTtcbmV4cG9ydCB7IFVzZXJMYXN0TG9naW5DZWxsIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uLy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5jb25zdCBVc2VyU2VsZWN0aW9uQ2VsbCA9ICh7IGlkIH0pID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHNlbGVjdGVkLCBvblNlbGVjdCB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gdXNlTWVtbygoKSA9PiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksIFtpZCwgc2VsZWN0ZWRdKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2sgZm9ybS1jaGVjay1jdXN0b20gZm9ybS1jaGVjay1zb2xpZCcgfSwgeyBjaGlsZHJlbjogX2pzeChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1pbnB1dCcsIHR5cGU6ICdjaGVja2JveCcsIFwiZGF0YS1rdC1jaGVja1wiOiBpc1NlbGVjdGVkLCBcImRhdGEta3QtY2hlY2stdGFyZ2V0XCI6ICcja3RfdGFibGVfdXNlcnMgLmZvcm0tY2hlY2staW5wdXQnLCBjaGVja2VkOiBpc1NlbGVjdGVkLCBvbkNoYW5nZTogKCkgPT4gb25TZWxlY3QoaWQpIH0pIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlclNlbGVjdGlvbkNlbGw7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJTZWxlY3Rpb25DZWxsXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJTZWxlY3Rpb25DZWxsLCBcIkRockQwSEZ2NFAwTUxhdWRIejBreVpKa2tCWT1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0Vmlld10pO1xuZXhwb3J0IHsgVXNlclNlbGVjdGlvbkNlbGwgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi8uLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuY29uc3QgVXNlclNlbGVjdGlvbkhlYWRlciA9ICh7IHRhYmxlUHJvcHMgfSkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgaXNBbGxTZWxlY3RlZCwgb25TZWxlY3RBbGwgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgcmV0dXJuIChfanN4KFwidGhcIiwgT2JqZWN0LmFzc2lnbih7fSwgdGFibGVQcm9wcy5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKSwgeyBjbGFzc05hbWU6ICd3LTEwcHggcGUtMicgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjayBmb3JtLWNoZWNrLXNtIGZvcm0tY2hlY2stY3VzdG9tIGZvcm0tY2hlY2stc29saWQgbWUtMycgfSwgeyBjaGlsZHJlbjogX2pzeChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1pbnB1dCcsIHR5cGU6ICdjaGVja2JveCcsIFwiZGF0YS1rdC1jaGVja1wiOiBpc0FsbFNlbGVjdGVkLCBcImRhdGEta3QtY2hlY2stdGFyZ2V0XCI6ICcja3RfdGFibGVfdXNlcnMgLmZvcm0tY2hlY2staW5wdXQnLCBjaGVja2VkOiBpc0FsbFNlbGVjdGVkLCBvbkNoYW5nZTogb25TZWxlY3RBbGwgfSkgfSkpIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlclNlbGVjdGlvbkhlYWRlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlclNlbGVjdGlvbkhlYWRlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2VyU2VsZWN0aW9uSGVhZGVyLCBcIlVjUEwwUDZqWVg4NUxzMEZmQURGNHFwa2RYYz1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0Vmlld10pO1xuZXhwb3J0IHsgVXNlclNlbGVjdGlvbkhlYWRlciB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IFVzZXJUd29TdGVwc0NlbGwgPSAoeyB0d29fc3RlcHMgfSkgPT4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW1wiIFwiLCB0d29fc3RlcHMgJiYgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnYmFkZ2UgYmFkZ2UtbGlnaHQtc3VjY2VzcyBmdy1ib2xkZXInIH0sIHsgY2hpbGRyZW46IFwiRW5hYmxlZFwiIH0pKV0gfSkpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlclR3b1N0ZXBzQ2VsbDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlclR3b1N0ZXBzQ2VsbFwiKTtcbmV4cG9ydCB7IFVzZXJUd29TdGVwc0NlbGwgfTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBVc2VySW5mb0NlbGwgfSBmcm9tICcuL1VzZXJJbmZvQ2VsbCc7XG5pbXBvcnQgeyBVc2VyTGFzdExvZ2luQ2VsbCB9IGZyb20gJy4vVXNlckxhc3RMb2dpbkNlbGwnO1xuaW1wb3J0IHsgVXNlclR3b1N0ZXBzQ2VsbCB9IGZyb20gJy4vVXNlclR3b1N0ZXBzQ2VsbCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9uc0NlbGwgfSBmcm9tICcuL1VzZXJBY3Rpb25zQ2VsbCc7XG5pbXBvcnQgeyBVc2VyU2VsZWN0aW9uQ2VsbCB9IGZyb20gJy4vVXNlclNlbGVjdGlvbkNlbGwnO1xuaW1wb3J0IHsgVXNlckN1c3RvbUhlYWRlciB9IGZyb20gJy4vVXNlckN1c3RvbUhlYWRlcic7XG5pbXBvcnQgeyBVc2VyU2VsZWN0aW9uSGVhZGVyIH0gZnJvbSAnLi9Vc2VyU2VsZWN0aW9uSGVhZGVyJztcbmNvbnN0IHVzZXJzQ29sdW1ucyA9IFtcbiAgICB7XG4gICAgICAgIEhlYWRlcjogKHByb3BzKSA9PiBfanN4KFVzZXJTZWxlY3Rpb25IZWFkZXIsIHsgdGFibGVQcm9wczogcHJvcHMgfSksXG4gICAgICAgIGlkOiAnc2VsZWN0aW9uJyxcbiAgICAgICAgQ2VsbDogKF9hKSA9PiB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFVzZXJTZWxlY3Rpb25DZWxsLCB7IGlkOiBwcm9wcy5kYXRhW3Byb3BzLnJvdy5pbmRleF0uaWQgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIEhlYWRlcjogKHByb3BzKSA9PiBfanN4KFVzZXJDdXN0b21IZWFkZXIsIHsgdGFibGVQcm9wczogcHJvcHMsIHRpdGxlOiAnTmFtZScsIGNsYXNzTmFtZTogJ21pbi13LTEyNXB4JyB9KSxcbiAgICAgICAgaWQ6ICduYW1lJyxcbiAgICAgICAgQ2VsbDogKF9hKSA9PiB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFVzZXJJbmZvQ2VsbCwgeyB1c2VyOiBwcm9wcy5kYXRhW3Byb3BzLnJvdy5pbmRleF0gfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIEhlYWRlcjogKHByb3BzKSA9PiBfanN4KFVzZXJDdXN0b21IZWFkZXIsIHsgdGFibGVQcm9wczogcHJvcHMsIHRpdGxlOiAnUm9sZScsIGNsYXNzTmFtZTogJ21pbi13LTEyNXB4JyB9KSxcbiAgICAgICAgYWNjZXNzb3I6ICdyb2xlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgSGVhZGVyOiAocHJvcHMpID0+IChfanN4KFVzZXJDdXN0b21IZWFkZXIsIHsgdGFibGVQcm9wczogcHJvcHMsIHRpdGxlOiAnTGFzdCBsb2dpbicsIGNsYXNzTmFtZTogJ21pbi13LTEyNXB4JyB9KSksXG4gICAgICAgIGlkOiAnbGFzdF9sb2dpbicsXG4gICAgICAgIENlbGw6IChfYSkgPT4ge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChVc2VyTGFzdExvZ2luQ2VsbCwgeyBsYXN0X2xvZ2luOiBwcm9wcy5kYXRhW3Byb3BzLnJvdy5pbmRleF0ubGFzdF9sb2dpbiB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgSGVhZGVyOiAocHJvcHMpID0+IChfanN4KFVzZXJDdXN0b21IZWFkZXIsIHsgdGFibGVQcm9wczogcHJvcHMsIHRpdGxlOiAnVHdvIHN0ZXBzJywgY2xhc3NOYW1lOiAnbWluLXctMTI1cHgnIH0pKSxcbiAgICAgICAgaWQ6ICd0d29fc3RlcHMnLFxuICAgICAgICBDZWxsOiAoX2EpID0+IHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgICAgICAgICAgcmV0dXJuIF9qc3goVXNlclR3b1N0ZXBzQ2VsbCwgeyB0d29fc3RlcHM6IHByb3BzLmRhdGFbcHJvcHMucm93LmluZGV4XS50d29fc3RlcHMgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIEhlYWRlcjogKHByb3BzKSA9PiAoX2pzeChVc2VyQ3VzdG9tSGVhZGVyLCB7IHRhYmxlUHJvcHM6IHByb3BzLCB0aXRsZTogJ0pvaW5lZCBkYXknLCBjbGFzc05hbWU6ICdtaW4tdy0xMjVweCcgfSkpLFxuICAgICAgICBhY2Nlc3NvcjogJ2pvaW5lZF9kYXknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBIZWFkZXI6IChwcm9wcykgPT4gKF9qc3goVXNlckN1c3RvbUhlYWRlciwgeyB0YWJsZVByb3BzOiBwcm9wcywgdGl0bGU6ICdBY3Rpb25zJywgY2xhc3NOYW1lOiAndGV4dC1lbmQgbWluLXctMTAwcHgnIH0pKSxcbiAgICAgICAgaWQ6ICdhY3Rpb25zJyxcbiAgICAgICAgQ2VsbDogKF9hKSA9PiB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFVzZXJBY3Rpb25zQ2VsbCwgeyBpZDogcHJvcHMuZGF0YVtwcm9wcy5yb3cuaW5kZXhdLmlkIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG5dO1xuZXhwb3J0IHsgdXNlcnNDb2x1bW5zIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlckVkaXRNb2RhbEhlYWRlciB9IGZyb20gJy4vVXNlckVkaXRNb2RhbEhlYWRlcic7XG5pbXBvcnQgeyBVc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXIgfSBmcm9tICcuL1VzZXJFZGl0TW9kYWxGb3JtV3JhcHBlcic7XG5jb25zdCBVc2VyRWRpdE1vZGFsID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbW9kYWwgZmFkZSBzaG93IGQtYmxvY2snLCBpZDogJ2t0X21vZGFsX2FkZF91c2VyJywgcm9sZTogJ2RpYWxvZycsIHRhYkluZGV4OiAtMSwgXCJhcmlhLW1vZGFsXCI6ICd0cnVlJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG13LTY1MHB4JyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbW9kYWwtY29udGVudCcgfSwgeyBjaGlsZHJlbjogW19qc3goVXNlckVkaXRNb2RhbEhlYWRlciwge30pLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtb2RhbC1ib2R5IHNjcm9sbC15IG14LTUgbXgteGwtMTUgbXktNycgfSwgeyBjaGlsZHJlbjogX2pzeChVc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXIsIHt9KSB9KSldIH0pKSB9KSkgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AgZmFkZSBzaG93JyB9KV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJFZGl0TW9kYWw7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJFZGl0TW9kYWxcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlckVkaXRNb2RhbCwgXCJPRDdiQnBadmE1TzJqTytQdWYwMGhLaXZQN2M9XCIpO1xuZXhwb3J0IHsgVXNlckVkaXRNb2RhbCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBpc05vdEVtcHR5LCB0b0Fic29sdXRlVXJsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vX21ldHJvbmljL2hlbHBlcnMnO1xuaW1wb3J0IHsgaW5pdGlhbFVzZXIgfSBmcm9tICcuLi9jb3JlL19tb2RlbHMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5pbXBvcnQgeyBVc2Vyc0xpc3RMb2FkaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nL1VzZXJzTGlzdExvYWRpbmcnO1xuaW1wb3J0IHsgY3JlYXRlVXNlciwgdXBkYXRlVXNlciB9IGZyb20gJy4uL2NvcmUvX3JlcXVlc3RzJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICcuLi9jb3JlL1F1ZXJ5UmVzcG9uc2VQcm92aWRlcic7XG5jb25zdCBlZGl0VXNlclNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAuZW1haWwoJ1dyb25nIGVtYWlsIGZvcm1hdCcpXG4gICAgICAgIC5taW4oMywgJ01pbmltdW0gMyBzeW1ib2xzJylcbiAgICAgICAgLm1heCg1MCwgJ01heGltdW0gNTAgc3ltYm9scycpXG4gICAgICAgIC5yZXF1aXJlZCgnRW1haWwgaXMgcmVxdWlyZWQnKSxcbiAgICBuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLm1pbigzLCAnTWluaW11bSAzIHN5bWJvbHMnKVxuICAgICAgICAubWF4KDUwLCAnTWF4aW11bSA1MCBzeW1ib2xzJylcbiAgICAgICAgLnJlcXVpcmVkKCdOYW1lIGlzIHJlcXVpcmVkJyksXG59KTtcbmNvbnN0IFVzZXJFZGl0TW9kYWxGb3JtID0gKHsgdXNlciwgaXNVc2VyTG9hZGluZyB9KSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBzZXRJdGVtSWRGb3JVcGRhdGUgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgY29uc3QgeyByZWZldGNoIH0gPSB1c2VRdWVyeVJlc3BvbnNlKCk7XG4gICAgY29uc3QgW3VzZXJGb3JFZGl0XSA9IHVzZVN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdXNlciksIHsgYXZhdGFyOiB1c2VyLmF2YXRhciB8fCBpbml0aWFsVXNlci5hdmF0YXIsIHJvbGU6IHVzZXIucm9sZSB8fCBpbml0aWFsVXNlci5yb2xlLCBwb3NpdGlvbjogdXNlci5wb3NpdGlvbiB8fCBpbml0aWFsVXNlci5wb3NpdGlvbiwgbmFtZTogdXNlci5uYW1lIHx8IGluaXRpYWxVc2VyLm5hbWUsIGVtYWlsOiB1c2VyLmVtYWlsIHx8IGluaXRpYWxVc2VyLmVtYWlsIH0pKTtcbiAgICBjb25zdCBjYW5jZWwgPSAod2l0aFJlZnJlc2gpID0+IHtcbiAgICAgICAgaWYgKHdpdGhSZWZyZXNoKSB7XG4gICAgICAgICAgICByZWZldGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SXRlbUlkRm9yVXBkYXRlKHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBjb25zdCBibGFua0ltZyA9IHRvQWJzb2x1dGVVcmwoJy9tZWRpYS9zdmcvYXZhdGFycy9ibGFuay5zdmcnKTtcbiAgICBjb25zdCB1c2VyQXZhdGFySW1nID0gdG9BYnNvbHV0ZVVybChgL21lZGlhLyR7dXNlckZvckVkaXQuYXZhdGFyfWApO1xuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHVzZXJGb3JFZGl0LFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBlZGl0VXNlclNjaGVtYSxcbiAgICAgICAgb25TdWJtaXQ6ICh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChpc05vdEVtcHR5KHZhbHVlcy5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdXBkYXRlVXNlcih2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY3JlYXRlVXNlcih2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBjYW5jZWwodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgIH0pO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJmb3JtXCIsIE9iamVjdC5hc3NpZ24oeyBpZDogJ2t0X21vZGFsX2FkZF91c2VyX2Zvcm0nLCBjbGFzc05hbWU6ICdmb3JtJywgb25TdWJtaXQ6IGZvcm1pay5oYW5kbGVTdWJtaXQsIG5vVmFsaWRhdGU6IHRydWUgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggZmxleC1jb2x1bW4gc2Nyb2xsLXkgbWUtbjcgcGUtNycsIGlkOiAna3RfbW9kYWxfYWRkX3VzZXJfc2Nyb2xsJywgXCJkYXRhLWt0LXNjcm9sbFwiOiAndHJ1ZScsIFwiZGF0YS1rdC1zY3JvbGwtYWN0aXZhdGVcIjogJ3tkZWZhdWx0OiBmYWxzZSwgbGc6IHRydWV9JywgXCJkYXRhLWt0LXNjcm9sbC1tYXgtaGVpZ2h0XCI6ICdhdXRvJywgXCJkYXRhLWt0LXNjcm9sbC1kZXBlbmRlbmNpZXNcIjogJyNrdF9tb2RhbF9hZGRfdXNlcl9oZWFkZXInLCBcImRhdGEta3Qtc2Nyb2xsLXdyYXBwZXJzXCI6ICcja3RfbW9kYWxfYWRkX3VzZXJfc2Nyb2xsJywgXCJkYXRhLWt0LXNjcm9sbC1vZmZzZXRcIjogJzMwMHB4JyB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z2LXJvdyBtYi03JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWJsb2NrIGZ3LWJvbGQgZnMtNiBtYi01JyB9LCB7IGNoaWxkcmVuOiBcIkF2YXRhclwiIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnaW1hZ2UtaW5wdXQgaW1hZ2UtaW5wdXQtb3V0bGluZScsIFwiZGF0YS1rdC1pbWFnZS1pbnB1dFwiOiAndHJ1ZScsIHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtibGFua0ltZ30nKWAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnaW1hZ2UtaW5wdXQtd3JhcHBlciB3LTEyNXB4IGgtMTI1cHgnLCBzdHlsZTogeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7dXNlckF2YXRhckltZ30nKWAgfSB9KSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z2LXJvdyBtYi03JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdyZXF1aXJlZCBmdy1ib2xkIGZzLTYgbWItMicgfSwgeyBjaGlsZHJlbjogXCJGdWxsIE5hbWVcIiB9KSksIF9qc3goXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHsgcGxhY2Vob2xkZXI6ICdGdWxsIG5hbWUnIH0sIGZvcm1pay5nZXRGaWVsZFByb3BzKCduYW1lJyksIHsgdHlwZTogJ3RleHQnLCBuYW1lOiAnbmFtZScsIGNsYXNzTmFtZTogY2xzeCgnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zb2xpZCBtYi0zIG1iLWxnLTAnLCB7ICdpcy1pbnZhbGlkJzogZm9ybWlrLnRvdWNoZWQubmFtZSAmJiBmb3JtaWsuZXJyb3JzLm5hbWUgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtdmFsaWQnOiBmb3JtaWsudG91Y2hlZC5uYW1lICYmICFmb3JtaWsuZXJyb3JzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGF1dG9Db21wbGV0ZTogJ29mZicsIGRpc2FibGVkOiBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcgfSkpLCBmb3JtaWsudG91Y2hlZC5uYW1lICYmIGZvcm1pay5lcnJvcnMubmFtZSAmJiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnYtcGx1Z2lucy1tZXNzYWdlLWNvbnRhaW5lcicgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnYtaGVscC1ibG9jaycgfSwgeyBjaGlsZHJlbjogX2pzeChcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IHJvbGU6ICdhbGVydCcgfSwgeyBjaGlsZHJlbjogZm9ybWlrLmVycm9ycy5uYW1lIH0pKSB9KSkgfSkpKV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnYtcm93IG1iLTcnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3JlcXVpcmVkIGZ3LWJvbGQgZnMtNiBtYi0yJyB9LCB7IGNoaWxkcmVuOiBcIkVtYWlsXCIgfSkpLCBfanN4KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IHBsYWNlaG9sZGVyOiAnRW1haWwnIH0sIGZvcm1pay5nZXRGaWVsZFByb3BzKCdlbWFpbCcpLCB7IGNsYXNzTmFtZTogY2xzeCgnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zb2xpZCBtYi0zIG1iLWxnLTAnLCB7ICdpcy1pbnZhbGlkJzogZm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy12YWxpZCc6IGZvcm1pay50b3VjaGVkLmVtYWlsICYmICFmb3JtaWsuZXJyb3JzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB0eXBlOiAnZW1haWwnLCBuYW1lOiAnZW1haWwnLCBhdXRvQ29tcGxldGU6ICdvZmYnLCBkaXNhYmxlZDogZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nIH0pKSwgZm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCAmJiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnYtcGx1Z2lucy1tZXNzYWdlLWNvbnRhaW5lcicgfSwgeyBjaGlsZHJlbjogX2pzeChcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IHJvbGU6ICdhbGVydCcgfSwgeyBjaGlsZHJlbjogZm9ybWlrLmVycm9ycy5lbWFpbCB9KSkgfSkpKV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWItNycgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncmVxdWlyZWQgZnctYm9sZCBmcy02IG1iLTUnIH0sIHsgY2hpbGRyZW46IFwiUm9sZVwiIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGZ2LXJvdycgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2sgZm9ybS1jaGVjay1jdXN0b20gZm9ybS1jaGVjay1zb2xpZCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1pbnB1dCBtZS0zJyB9LCBmb3JtaWsuZ2V0RmllbGRQcm9wcygncm9sZScpLCB7IG5hbWU6ICdyb2xlJywgdHlwZTogJ3JhZGlvJywgdmFsdWU6ICdBZG1pbmlzdHJhdG9yJywgaWQ6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fMCcsIGNoZWNrZWQ6IGZvcm1pay52YWx1ZXMucm9sZSA9PT0gJ0FkbWluaXN0cmF0b3InLCBkaXNhYmxlZDogZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nIH0pKSwgX2pzeHMoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1sYWJlbCcsIGh0bWxGb3I6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fMCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z3LWJvbGRlciB0ZXh0LWdyYXktODAwJyB9LCB7IGNoaWxkcmVuOiBcIkFkbWluaXN0cmF0b3JcIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RleHQtZ3JheS02MDAnIH0sIHsgY2hpbGRyZW46IFwiQmVzdCBmb3IgYnVzaW5lc3Mgb3duZXJzIGFuZCBjb21wYW55IGFkbWluaXN0cmF0b3JzXCIgfSkpXSB9KSldIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzZXBhcmF0b3Igc2VwYXJhdG9yLWRhc2hlZCBteS01JyB9KSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGZ2LXJvdycgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2sgZm9ybS1jaGVjay1jdXN0b20gZm9ybS1jaGVjay1zb2xpZCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1pbnB1dCBtZS0zJyB9LCBmb3JtaWsuZ2V0RmllbGRQcm9wcygncm9sZScpLCB7IG5hbWU6ICdyb2xlJywgdHlwZTogJ3JhZGlvJywgdmFsdWU6ICdEZXZlbG9wZXInLCBpZDogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl8xJywgY2hlY2tlZDogZm9ybWlrLnZhbHVlcy5yb2xlID09PSAnRGV2ZWxvcGVyJywgZGlzYWJsZWQ6IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZyB9KSksIF9qc3hzKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2stbGFiZWwnLCBodG1sRm9yOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzEnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdy1ib2xkZXIgdGV4dC1ncmF5LTgwMCcgfSwgeyBjaGlsZHJlbjogXCJEZXZlbG9wZXJcIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RleHQtZ3JheS02MDAnIH0sIHsgY2hpbGRyZW46IFwiQmVzdCBmb3IgZGV2ZWxvcGVycyBvciBwZW9wbGUgcHJpbWFyaWx5IHVzaW5nIHRoZSBBUElcIiB9KSldIH0pKV0gfSkpIH0pKSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NlcGFyYXRvciBzZXBhcmF0b3ItZGFzaGVkIG15LTUnIH0pLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggZnYtcm93JyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjayBmb3JtLWNoZWNrLWN1c3RvbSBmb3JtLWNoZWNrLXNvbGlkJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWlucHV0IG1lLTMnIH0sIGZvcm1pay5nZXRGaWVsZFByb3BzKCdyb2xlJyksIHsgbmFtZTogJ3JvbGUnLCB0eXBlOiAncmFkaW8nLCB2YWx1ZTogJ0FuYWx5c3QnLCBpZDogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl8yJywgY2hlY2tlZDogZm9ybWlrLnZhbHVlcy5yb2xlID09PSAnQW5hbHlzdCcsIGRpc2FibGVkOiBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcgfSkpLCBfanN4cyhcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWxhYmVsJywgaHRtbEZvcjogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl8yJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnctYm9sZGVyIHRleHQtZ3JheS04MDAnIH0sIHsgY2hpbGRyZW46IFwiQW5hbHlzdFwiIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGV4dC1ncmF5LTYwMCcgfSwgeyBjaGlsZHJlbjogXCJCZXN0IGZvciBwZW9wbGUgd2hvIG5lZWQgZnVsbCBhY2Nlc3MgdG8gYW5hbHl0aWNzIGRhdGEsIGJ1dCBkb24ndCBuZWVkIHRvIHVwZGF0ZSBidXNpbmVzcyBzZXR0aW5nc1wiIH0pKV0gfSkpXSB9KSkgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnc2VwYXJhdG9yIHNlcGFyYXRvci1kYXNoZWQgbXktNScgfSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBmdi1yb3cnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrIGZvcm0tY2hlY2stY3VzdG9tIGZvcm0tY2hlY2stc29saWQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2staW5wdXQgbWUtMycgfSwgZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3JvbGUnKSwgeyBuYW1lOiAncm9sZScsIHR5cGU6ICdyYWRpbycsIHZhbHVlOiAnU3VwcG9ydCcsIGlkOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzMnLCBjaGVja2VkOiBmb3JtaWsudmFsdWVzLnJvbGUgPT09ICdTdXBwb3J0JywgZGlzYWJsZWQ6IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZyB9KSksIF9qc3hzKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2stbGFiZWwnLCBodG1sRm9yOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzMnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdy1ib2xkZXIgdGV4dC1ncmF5LTgwMCcgfSwgeyBjaGlsZHJlbjogXCJTdXBwb3J0XCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0ZXh0LWdyYXktNjAwJyB9LCB7IGNoaWxkcmVuOiBcIkJlc3QgZm9yIGVtcGxveWVlcyB3aG8gcmVndWxhcmx5IHJlZnVuZCBwYXltZW50cyBhbmQgcmVzcG9uZCB0byBkaXNwdXRlc1wiIH0pKV0gfSkpXSB9KSkgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnc2VwYXJhdG9yIHNlcGFyYXRvci1kYXNoZWQgbXktNScgfSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBmdi1yb3cnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrIGZvcm0tY2hlY2stY3VzdG9tIGZvcm0tY2hlY2stc29saWQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2staW5wdXQgbWUtMycgfSwgZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3JvbGUnKSwgeyBuYW1lOiAncm9sZScsIHR5cGU6ICdyYWRpbycsIGlkOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzQnLCB2YWx1ZTogJ1RyaWFsJywgY2hlY2tlZDogZm9ybWlrLnZhbHVlcy5yb2xlID09PSAnVHJpYWwnLCBkaXNhYmxlZDogZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nIH0pKSwgX2pzeHMoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1sYWJlbCcsIGh0bWxGb3I6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fNCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z3LWJvbGRlciB0ZXh0LWdyYXktODAwJyB9LCB7IGNoaWxkcmVuOiBcIlRyaWFsXCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0ZXh0LWdyYXktNjAwJyB9LCB7IGNoaWxkcmVuOiBcIkJlc3QgZm9yIHBlb3BsZSB3aG8gbmVlZCB0byBwcmV2aWV3IGNvbnRlbnQgZGF0YSwgYnV0IGRvbid0IG5lZWQgdG8gbWFrZSBhbnkgdXBkYXRlc1wiIH0pKV0gfSkpXSB9KSkgfSkpXSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RleHQtY2VudGVyIHB0LTE1JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogJ3Jlc2V0Jywgb25DbGljazogKCkgPT4gY2FuY2VsKCksIGNsYXNzTmFtZTogJ2J0biBidG4tbGlnaHQgbWUtMycsIFwiZGF0YS1rdC11c2Vycy1tb2RhbC1hY3Rpb25cIjogJ2NhbmNlbCcsIGRpc2FibGVkOiBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcgfSwgeyBjaGlsZHJlbjogXCJEaXNjYXJkXCIgfSkpLCBfanN4cyhcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogJ3N1Ym1pdCcsIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeScsIFwiZGF0YS1rdC11c2Vycy1tb2RhbC1hY3Rpb25cIjogJ3N1Ym1pdCcsIGRpc2FibGVkOiBpc1VzZXJMb2FkaW5nIHx8IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgIWZvcm1pay5pc1ZhbGlkIHx8ICFmb3JtaWsudG91Y2hlZCB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2luZGljYXRvci1sYWJlbCcgfSwgeyBjaGlsZHJlbjogXCJTdWJtaXRcIiB9KSksIChmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcpICYmIChfanN4cyhcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2luZGljYXRvci1wcm9ncmVzcycgfSwgeyBjaGlsZHJlbjogW1wiUGxlYXNlIHdhaXQuLi5cIiwgJyAnLCBfanN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogJ3NwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIGFsaWduLW1pZGRsZSBtcy0yJyB9KV0gfSkpKV0gfSkpXSB9KSldIH0pKSwgKGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZykgJiYgX2pzeChVc2Vyc0xpc3RMb2FkaW5nLCB7fSldIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyRWRpdE1vZGFsRm9ybTtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlckVkaXRNb2RhbEZvcm1cIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlckVkaXRNb2RhbEZvcm0sIFwiUWUxa1JIaUY0aUV6VmpRczY3SUs4YnMyYXFZPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3LCB1c2VRdWVyeVJlc3BvbnNlLCB1c2VGb3JtaWtdKTtcbmV4cG9ydCB7IFVzZXJFZGl0TW9kYWxGb3JtIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgVXNlckVkaXRNb2RhbEZvcm0gfSBmcm9tICcuL1VzZXJFZGl0TW9kYWxGb3JtJztcbmltcG9ydCB7IGlzTm90RW1wdHksIFFVRVJJRVMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9fbWV0cm9uaWMvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5pbXBvcnQgeyBnZXRVc2VyQnlJZCB9IGZyb20gJy4uL2NvcmUvX3JlcXVlc3RzJztcbmNvbnN0IFVzZXJFZGl0TW9kYWxGb3JtV3JhcHBlciA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IGl0ZW1JZEZvclVwZGF0ZSwgc2V0SXRlbUlkRm9yVXBkYXRlIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIGNvbnN0IGVuYWJsZWRRdWVyeSA9IGlzTm90RW1wdHkoaXRlbUlkRm9yVXBkYXRlKTtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZGF0YTogdXNlciwgZXJyb3IsIH0gPSB1c2VRdWVyeShgJHtRVUVSSUVTLlVTRVJTX0xJU1R9LXVzZXItJHtpdGVtSWRGb3JVcGRhdGV9YCwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0VXNlckJ5SWQoaXRlbUlkRm9yVXBkYXRlKTtcbiAgICB9LCB7XG4gICAgICAgIGNhY2hlVGltZTogMCxcbiAgICAgICAgZW5hYmxlZDogZW5hYmxlZFF1ZXJ5LFxuICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRJdGVtSWRGb3JVcGRhdGUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoIWl0ZW1JZEZvclVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gX2pzeChVc2VyRWRpdE1vZGFsRm9ybSwgeyBpc1VzZXJMb2FkaW5nOiBpc0xvYWRpbmcsIHVzZXI6IHsgaWQ6IHVuZGVmaW5lZCB9IH0pO1xuICAgIH1cbiAgICBpZiAoIWlzTG9hZGluZyAmJiAhZXJyb3IgJiYgdXNlcikge1xuICAgICAgICByZXR1cm4gX2pzeChVc2VyRWRpdE1vZGFsRm9ybSwgeyBpc1VzZXJMb2FkaW5nOiBpc0xvYWRpbmcsIHVzZXI6IHVzZXIgfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJFZGl0TW9kYWxGb3JtV3JhcHBlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlckVkaXRNb2RhbEZvcm1XcmFwcGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJFZGl0TW9kYWxGb3JtV3JhcHBlciwgXCJlUTNXYkJrNjJpZTViTFF5WHBTZ1dEVlloQlk9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXcsIHVzZVF1ZXJ5XSk7XG5leHBvcnQgeyBVc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXIgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgS1RJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vX21ldHJvbmljL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuY29uc3QgVXNlckVkaXRNb2RhbEhlYWRlciA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHNldEl0ZW1JZEZvclVwZGF0ZSB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtb2RhbC1oZWFkZXInIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z3LWJvbGRlcicgfSwgeyBjaGlsZHJlbjogXCJBZGQgVXNlclwiIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnYnRuIGJ0bi1pY29uIGJ0bi1zbSBidG4tYWN0aXZlLWljb24tcHJpbWFyeScsIFwiZGF0YS1rdC11c2Vycy1tb2RhbC1hY3Rpb25cIjogJ2Nsb3NlJywgb25DbGljazogKCkgPT4gc2V0SXRlbUlkRm9yVXBkYXRlKHVuZGVmaW5lZCksIHN0eWxlOiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfSwgeyBjaGlsZHJlbjogX2pzeChLVEljb24sIHsgaWNvbk5hbWU6ICdjcm9zcycsIGNsYXNzTmFtZTogJ2ZzLTEnIH0pIH0pKV0gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyRWRpdE1vZGFsSGVhZGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyRWRpdE1vZGFsSGVhZGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJFZGl0TW9kYWxIZWFkZXIsIFwiVDF2S05zTnpTejlHZTR6bWlGZVJnQ09yeUtrPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3XSk7XG5leHBvcnQgeyBVc2VyRWRpdE1vZGFsSGVhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=