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
/* harmony import */ var _config_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/layout/core */ "./src/presentation/config/layout/core/index.ts");
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, Object.assign({ element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, {}) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, { path: 'users', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_layout_core__WEBPACK_IMPORTED_MODULE_1__.PageTitle, Object.assign({ breadcrumbs: usersBreadcrumbs }, { children: "Users list" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_users_list_UsersList__WEBPACK_IMPORTED_MODULE_2__.UsersListWrapper, {})] }) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, { index: true, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, { to: '/apps/user-management/users' }) })] }));
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1, _react_refresh_temp_2;
var _react_refresh_temp_3;
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();








const UsersList = () => {
    _react_refresh_temp_3();
    const { itemIdForUpdate } = (0,_core_ListViewProvider__WEBPACK_IMPORTED_MODULE_1__.useListView)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_config_helpers__WEBPACK_IMPORTED_MODULE_7__.KTCard, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_header_UsersListHeader__WEBPACK_IMPORTED_MODULE_4__.UsersListHeader, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_table_UsersTable__WEBPACK_IMPORTED_MODULE_5__.UsersTable, {})] }), itemIdForUpdate !== undefined && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_user_edit_modal_UserEditModal__WEBPACK_IMPORTED_MODULE_6__.UserEditModal, {})] }));
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex justify-content-end', "data-kt-user-table-toolbar": 'base' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UsersListFilter__WEBPACK_IMPORTED_MODULE_3__.UsersListFilter, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ type: 'button', className: 'btn btn-light-primary me-3' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_helpers__WEBPACK_IMPORTED_MODULE_1__.KTIcon, { iconName: 'exit-up', className: 'fs-2' }), "Export"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ type: 'button', className: 'btn btn-primary', onClick: openAddUserModal }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_helpers__WEBPACK_IMPORTED_MODULE_1__.KTIcon, { iconName: 'plus', className: 'fs-2' }), "Add User"] }))] })));
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
/* harmony import */ var _config_assets_ts_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../config/assets/ts/components */ "./src/presentation/config/assets/ts/components/index.ts");
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
        _config_assets_ts_components__WEBPACK_IMPORTED_MODULE_2__.MenuComponent.reinitialization();
    }, []);
    const resetData = () => {
        updateState(Object.assign({ filter: undefined }, _config_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
    };
    const filterData = () => {
        updateState(Object.assign({ filter: { role, last_login: lastLogin } }, _config_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ disabled: isLoading, type: 'button', className: 'btn btn-light-primary me-3', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_helpers__WEBPACK_IMPORTED_MODULE_3__.KTIcon, { iconName: 'filter', className: 'fs-2' }), "Filter"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'menu menu-sub menu-sub-dropdown w-300px w-md-325px', "data-kt-menu": 'true' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'px-7 py-5' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'fs-5 text-dark fw-bolder' }, { children: "Filter Options" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator border-gray-200' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'px-7 py-5', "data-kt-user-table-filter": 'form' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'mb-10' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ className: 'form-label fs-6 fw-bold' }, { children: "Role:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ className: 'form-select form-select-solid fw-bolder', "data-kt-select2": 'true', "data-placeholder": 'Select option', "data-allow-clear": 'true', "data-kt-user-table-filter": 'role', "data-hide-search": 'true', onChange: (e) => setRole(e.target.value), value: role }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Administrator' }, { children: "Administrator" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Analyst' }, { children: "Analyst" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Developer' }, { children: "Developer" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Support' }, { children: "Support" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Trial' }, { children: "Trial" }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'mb-10' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ className: 'form-label fs-6 fw-bold' }, { children: "Last login:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ className: 'form-select form-select-solid fw-bolder', "data-kt-select2": 'true', "data-placeholder": 'Select option', "data-allow-clear": 'true', "data-kt-user-table-filter": 'two-step', "data-hide-search": 'true', onChange: (e) => setLastLogin(e.target.value), value: lastLogin }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: 'Yesterday' }, { children: "Yesterday" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: '20 mins ago' }, { children: "20 mins ago" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: '5 hours ago' }, { children: "5 hours ago" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: '2 days ago' }, { children: "2 days ago" }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex justify-content-end' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ type: 'button', disabled: isLoading, onClick: filterData, className: 'btn btn-light btn-active-light-primary fw-bold me-2 px-6', "data-kt-menu-dismiss": 'true', "data-kt-user-table-filter": 'reset' }, { children: "Reset" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ disabled: isLoading, type: 'button', onClick: resetData, className: 'btn btn-primary fw-bold px-6', "data-kt-menu-dismiss": 'true', "data-kt-user-table-filter": 'filter' }, { children: "Apply" }))] }))] }))] }))] }));
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
            queryClient.invalidateQueries([`${_config_helpers__WEBPACK_IMPORTED_MODULE_2__.QUERIES.USERS_LIST}-${query}`]);
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
    const debouncedSearchTerm = (0,_config_helpers__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(searchTerm, 150);
    // Effect for API call
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (debouncedSearchTerm !== undefined && searchTerm !== undefined) {
            updateState(Object.assign({ search: debouncedSearchTerm }, _config_helpers__WEBPACK_IMPORTED_MODULE_2__.initialQueryState));
        }
    }, [debouncedSearchTerm] // Only call effect if debounced search term changes
    // More details about useDebounce: https://usehooks.com/useDebounce/
    );
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'card-title' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex align-items-center position-relative my-1' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_helpers__WEBPACK_IMPORTED_MODULE_2__.KTIcon, { iconName: 'magnifier', className: 'fs-1 position-absolute ms-6' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'text', "data-kt-user-table-filter": 'search', className: 'form-control form-control-solid w-250px ps-14', placeholder: 'Search user', value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] })) })));
};
_react_refresh_temp_1 = UsersListSearchComponent;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "UsersListSearchComponent");
_react_refresh_temp_2(UsersListSearchComponent, "N5t1gXRTZ2VuTlZ7A5BEplYJTUg=", false, () => [_core_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryRequest, _config_helpers__WEBPACK_IMPORTED_MODULE_2__.useDebounce]);



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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
/* harmony import */ var _QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryResponseProvider */ "./src/presentation/app/modules/apps/user-management/users-list/core/QueryResponseProvider.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2, _react_refresh_temp_3;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();




const ListViewContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_config_helpers__WEBPACK_IMPORTED_MODULE_2__.initialListView);
const ListViewProvider = ({ children }) => {
    _react_refresh_temp_2();
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_config_helpers__WEBPACK_IMPORTED_MODULE_2__.initialListView.selected);
    const [itemIdForUpdate, setItemIdForUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_config_helpers__WEBPACK_IMPORTED_MODULE_2__.initialListView.itemIdForUpdate);
    const { isLoading } = (0,_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryResponse)();
    const data = (0,_QueryResponseProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryResponseData)();
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_config_helpers__WEBPACK_IMPORTED_MODULE_2__.calculatedGroupingIsDisabled)(isLoading, data), [isLoading, data]);
    const isAllSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_config_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateIsAllDataSelected)(data, selected), [data, selected]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListViewContext.Provider, Object.assign({ value: {
            selected,
            itemIdForUpdate,
            setItemIdForUpdate,
            disabled,
            isAllSelected,
            onSelect: (id) => {
                (0,_config_helpers__WEBPACK_IMPORTED_MODULE_2__.groupingOnSelect)(id, selected, setSelected);
            },
            onSelectAll: () => {
                (0,_config_helpers__WEBPACK_IMPORTED_MODULE_2__.groupingOnSelectAll)(isAllSelected, setSelected, data);
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2, _react_refresh_temp_3;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();



const QueryRequestContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_config_helpers__WEBPACK_IMPORTED_MODULE_2__.initialQueryRequest);
const QueryRequestProvider = ({ children }) => {
    _react_refresh_temp_2();
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_config_helpers__WEBPACK_IMPORTED_MODULE_2__.initialQueryRequest.state);
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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





const QueryResponseContext = (0,_config_helpers__WEBPACK_IMPORTED_MODULE_3__.createResponseContext)(_config_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryResponse);
const QueryResponseProvider = ({ children }) => {
    _react_refresh_temp_2();
    const { state } = (0,_QueryRequestProvider__WEBPACK_IMPORTED_MODULE_5__.useQueryRequest)();
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_config_helpers__WEBPACK_IMPORTED_MODULE_3__.stringifyRequestQuery)(state));
    const updatedQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_config_helpers__WEBPACK_IMPORTED_MODULE_3__.stringifyRequestQuery)(state), [state]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (query !== updatedQuery) {
            setQuery(updatedQuery);
        }
    }, [updatedQuery]);
    const { isFetching, refetch, data: response, } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(`${_config_helpers__WEBPACK_IMPORTED_MODULE_3__.QUERIES.USERS_LIST}-${query}`, () => {
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
    const defaultPaginationState = Object.assign({ links: [] }, _config_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState);
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_config_helpers__WEBPACK_IMPORTED_MODULE_9__.KTCardBody, Object.assign({ className: 'py-4' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'table-responsive' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", Object.assign({ id: 'kt_table_users', className: 'table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer' }, getTableProps(), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", Object.assign({ className: 'text-start text-muted fw-bolder fs-7 text-uppercase gs-0' }, { children: headers.map((column) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_columns_CustomHeaderColumn__WEBPACK_IMPORTED_MODULE_3__.CustomHeaderColumn, { column: column }, column.id))) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", Object.assign({ className: 'text-gray-600 fw-bold' }, getTableBodyProps(), { children: rows.length > 0 ? (rows.map((row, i) => {
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
/* harmony import */ var _config_assets_ts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../config/assets/ts/components */ "./src/presentation/config/assets/ts/components/index.ts");
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
        _config_assets_ts_components__WEBPACK_IMPORTED_MODULE_3__.MenuComponent.reinitialization();
    }, []);
    const openEditModal = () => {
        setItemIdForUpdate(id);
    };
    const deleteItem = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(() => (0,_core_requests__WEBPACK_IMPORTED_MODULE_7__.deleteUser)(id), {
        // 💡 response of the mutation is passed to onSuccess
        onSuccess: () => {
            // ✅ update detail view directly
            queryClient.invalidateQueries([`${_config_helpers__WEBPACK_IMPORTED_MODULE_4__.QUERIES.USERS_LIST}-${query}`]);
        },
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: '#', className: 'btn btn-light btn-active-light-primary btn-sm', "data-kt-menu-trigger": 'click', "data-kt-menu-placement": 'bottom-end' }, { children: ["Actions", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_helpers__WEBPACK_IMPORTED_MODULE_4__.KTIcon, { iconName: 'down', className: 'fs-5 m-0' })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4', "data-kt-menu": 'true' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'menu-item px-3' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ className: 'menu-link px-3', onClick: openEditModal }, { children: "Edit" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'menu-item px-3' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ className: 'menu-link px-3', "data-kt-users-table-filter": 'delete_row', onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield deleteItem.mutateAsync(); }) }, { children: "Delete" })) }))] }))] }));
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
            updateState(Object.assign({ sort: id, order: 'asc' }, _config_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
            return;
        }
        if (isSelectedForSorting && order !== undefined) {
            if (order === 'asc') {
                // enable sort desc
                updateState(Object.assign({ sort: id, order: 'desc' }, _config_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
                return;
            }
            // disable sort
            updateState(Object.assign({ sort: undefined, order: undefined }, _config_helpers__WEBPACK_IMPORTED_MODULE_3__.initialQueryState));
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;

/* eslint-disable jsx-a11y/anchor-is-valid */


const UserInfoCell = ({ user }) => {
    var _a, _b, _c;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex align-items-center' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'symbol symbol-circle symbol-50px overflow-hidden me-3' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ href: '#' }, { children: user.avatar ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'symbol-label' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: (0,_config_helpers__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteUrl)(`/media/${user.avatar}`), alt: user.name, className: 'w-100' }) }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('symbol-label fs-3', `bg-light-${(_a = user.initials) === null || _a === void 0 ? void 0 : _a.state}`, `text-${(_b = user.initials) === null || _b === void 0 ? void 0 : _b.state}`) }, { children: (_c = user.initials) === null || _c === void 0 ? void 0 : _c.label }))) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'd-flex flex-column' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ href: '#', className: 'text-gray-800 text-hover-primary mb-1' }, { children: user.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: user.email })] }))] })));
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
    const blankImg = (0,_config_helpers__WEBPACK_IMPORTED_MODULE_4__.toAbsoluteUrl)('/media/svg/avatars/blank.svg');
    const userAvatarImg = (0,_config_helpers__WEBPACK_IMPORTED_MODULE_4__.toAbsoluteUrl)(`/media/${userForEdit.avatar}`);
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: userForEdit,
        validationSchema: editUserSchema,
        onSubmit: (values, { setSubmitting }) => __awaiter(void 0, void 0, void 0, function* () {
            setSubmitting(true);
            try {
                if ((0,_config_helpers__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(values.id)) {
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
    const enabledQuery = (0,_config_helpers__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(itemIdForUpdate);
    const { isLoading, data: user, error, } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(`${_config_helpers__WEBPACK_IMPORTED_MODULE_3__.QUERIES.USERS_LIST}-user-${itemIdForUpdate}`, () => {
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
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../config/helpers */ "./src/presentation/config/helpers/index.ts");
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: 'modal-header' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", Object.assign({ className: 'fw-bolder' }, { children: "Add User" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'btn btn-icon btn-sm btn-active-icon-primary', "data-kt-users-modal-action": 'close', onClick: () => setItemIdForUpdate(undefined), style: { cursor: 'pointer' } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_config_helpers__WEBPACK_IMPORTED_MODULE_1__.KTIcon, { iconName: 'cross', className: 'fs-1' }) }))] })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ByZXNlbnRhdGlvbl9hcHBfbW9kdWxlc19hcHBzX3VzZXItbWFuYWdlbWVudF9Vc2Vyc1BhZ2VfdHN4Lm1haW4tYnVuZGxlLTZhOGY3YWFhNWJmN2FjNDk5ZmVhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NGO0FBQ25CO0FBQ1I7QUFDRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLENBQUMsb0RBQU0sZUFBZSxzREFBSSxDQUFDLG1EQUFLLDJCQUEyQixzREFBSSxDQUFDLG9EQUFNLHFCQUFxQixzREFBSSxDQUFDLG1EQUFLLDRCQUE0Qix1REFBSyxDQUFDLHVEQUFTLGVBQWUsc0RBQUksQ0FBQywwREFBUyxpRkFBaUYsc0RBQUksQ0FBQyxtRUFBZ0Isa0JBQWtCLHNEQUFJLENBQUMsbURBQUssMEJBQTBCLHNEQUFJLENBQUMsc0RBQVE7QUFDdlc7QUFDQTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ6QjtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFZO0FBQ2tEO0FBQ2Q7QUFDTDtBQUNFO0FBQ0M7QUFDdEI7QUFDZ0I7QUFDVDtBQUN2RDtBQUNBO0FBQ0EsZ0NBQWdDLG1FQUFXO0FBQzNDLFlBQVksdURBQUssQ0FBQyx1REFBUyxlQUFlLHVEQUFLLENBQUMsbURBQU0sZUFBZSxzREFBSSxDQUFDLCtFQUFlLE9BQU8sc0RBQUksQ0FBQyx5REFBVSw0Q0FBNEMsc0RBQUksQ0FBQyx5RUFBYTtBQUM3SztBQUNBO0FBQ0Esc0NBQVk7QUFDWiwrRUFBK0UsK0RBQVc7QUFDMUYsZ0NBQWdDLHNEQUFJLENBQUMsNEVBQW9CLGNBQWMsc0RBQUksQ0FBQyw4RUFBcUIsY0FBYyxzREFBSSxD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LHdCQUF3Qix1Q0FBWTtBQUMyQjtBQUNMO0FBQ0g7QUFDdkQ7QUFDQTtBQUNBLG1DQUFtQyxtRUFBVztBQUM5QyxZQUFZLHVEQUFLLGtFQUFrRSxzREFBSSw2RUFBNkUsc0RBQUksbU5BQW1OLHNEQUFJLENBQUMsbURBQU07QUFDdFk7QUFDQTtBQUNBLHNDQUFZO0FBQ1oseUZBQXlGLCtEQUFXO0FBQ3JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC9Vc2Vyc1BhZ2UudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9Vc2Vyc0xpc3QudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb21wb25lbnRzL2hlYWRlci9Vc2VyTGlzdFRvb2xiYXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb21wb25lbnRzL2hlYWRlci9Vc2Vyc0xpc3RGaWx0ZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb21wb25lbnRzL2hlYWRlci9Vc2Vyc0xpc3RHcm91cGluZy50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvbXBvbmVudHMvaGVhZGVyL1VzZXJzTGlzdEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvbXBvbmVudHMvaGVhZGVyL1VzZXJzTGlzdFNlYXJjaENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvbXBvbmVudHMvbG9hZGluZy9Vc2Vyc0xpc3RMb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29tcG9uZW50cy9wYWdpbmF0aW9uL1VzZXJzTGlzdFBhZ2luYXRpb24udHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb3JlL0xpc3RWaWV3UHJvdmlkZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb3JlL1F1ZXJ5UmVxdWVzdFByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb3JlL19tb2RlbHMudHMiLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvcmUvX3JlcXVlc3RzLnRzIiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9Vc2Vyc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9DdXN0b21IZWFkZXJDb2x1bW4udHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL0N1c3RvbVJvdy50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvVXNlckFjdGlvbnNDZWxsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9Vc2VyQ3VzdG9tSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9Vc2VySW5mb0NlbGwudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL1VzZXJMYXN0TG9naW5DZWxsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9Vc2VyU2VsZWN0aW9uQ2VsbC50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvVXNlclNlbGVjdGlvbkhlYWRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvVXNlclR3b1N0ZXBzQ2VsbC50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvX2NvbHVtbnMudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC91c2VyLWVkaXQtbW9kYWwvVXNlckVkaXRNb2RhbC50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3VzZXItZWRpdC1tb2RhbC9Vc2VyRWRpdE1vZGFsRm9ybS50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3VzZXItZWRpdC1tb2RhbC9Vc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC91c2VyLWVkaXQtbW9kYWwvVXNlckVkaXRNb2RhbEhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IE5hdmlnYXRlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFBhZ2VUaXRsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9sYXlvdXQvY29yZSc7XG5pbXBvcnQgeyBVc2Vyc0xpc3RXcmFwcGVyIH0gZnJvbSAnLi91c2Vycy1saXN0L1VzZXJzTGlzdCc7XG5jb25zdCB1c2Vyc0JyZWFkY3J1bWJzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdVc2VyIE1hbmFnZW1lbnQnLFxuICAgICAgICBwYXRoOiAnL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzJyxcbiAgICAgICAgaXNTZXBhcmF0b3I6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGlzU2VwYXJhdG9yOiB0cnVlLFxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgfSxcbl07XG5jb25zdCBVc2Vyc1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChfanN4cyhSb3V0ZXMsIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCBPYmplY3QuYXNzaWduKHsgZWxlbWVudDogX2pzeChPdXRsZXQsIHt9KSB9LCB7IGNoaWxkcmVuOiBfanN4KFJvdXRlLCB7IHBhdGg6ICd1c2VycycsIGVsZW1lbnQ6IF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goUGFnZVRpdGxlLCBPYmplY3QuYXNzaWduKHsgYnJlYWRjcnVtYnM6IHVzZXJzQnJlYWRjcnVtYnMgfSwgeyBjaGlsZHJlbjogXCJVc2VycyBsaXN0XCIgfSkpLCBfanN4KFVzZXJzTGlzdFdyYXBwZXIsIHt9KV0gfSkgfSkgfSkpLCBfanN4KFJvdXRlLCB7IGluZGV4OiB0cnVlLCBlbGVtZW50OiBfanN4KE5hdmlnYXRlLCB7IHRvOiAnL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzJyB9KSB9KV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzUGFnZTtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNQYWdlXCIpO1xuZXhwb3J0IGRlZmF1bHQgVXNlcnNQYWdlO1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMztcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdQcm92aWRlciwgdXNlTGlzdFZpZXcgfSBmcm9tICcuL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5pbXBvcnQgeyBRdWVyeVJlcXVlc3RQcm92aWRlciB9IGZyb20gJy4vY29yZS9RdWVyeVJlcXVlc3RQcm92aWRlcic7XG5pbXBvcnQgeyBRdWVyeVJlc3BvbnNlUHJvdmlkZXIgfSBmcm9tICcuL2NvcmUvUXVlcnlSZXNwb25zZVByb3ZpZGVyJztcbmltcG9ydCB7IFVzZXJzTGlzdEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvVXNlcnNMaXN0SGVhZGVyJztcbmltcG9ydCB7IFVzZXJzVGFibGUgfSBmcm9tICcuL3RhYmxlL1VzZXJzVGFibGUnO1xuaW1wb3J0IHsgVXNlckVkaXRNb2RhbCB9IGZyb20gJy4vdXNlci1lZGl0LW1vZGFsL1VzZXJFZGl0TW9kYWwnO1xuaW1wb3J0IHsgS1RDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuY29uc3QgVXNlcnNMaXN0ID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMygpO1xuICAgIGNvbnN0IHsgaXRlbUlkRm9yVXBkYXRlIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoS1RDYXJkLCB7IGNoaWxkcmVuOiBbX2pzeChVc2Vyc0xpc3RIZWFkZXIsIHt9KSwgX2pzeChVc2Vyc1RhYmxlLCB7fSldIH0pLCBpdGVtSWRGb3JVcGRhdGUgIT09IHVuZGVmaW5lZCAmJiBfanN4KFVzZXJFZGl0TW9kYWwsIHt9KV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzTGlzdDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNMaXN0XCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zKFVzZXJzTGlzdCwgXCJjSnMyNWZOY0g3eWtMdVNUVmNIeC9SWmZrdVE9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXddKTtcbmNvbnN0IFVzZXJzTGlzdFdyYXBwZXIgPSAoKSA9PiAoX2pzeChRdWVyeVJlcXVlc3RQcm92aWRlciwgeyBjaGlsZHJlbjogX2pzeChRdWVyeVJlc3BvbnNlUHJvdmlkZXIsIHsgY2hpbGRyZW46IF9qc3goTGlzdFZpZXdQcm92aWRlciwgeyBjaGlsZHJlbjogX2pzeChVc2Vyc0xpc3QsIHt9KSB9KSB9KSB9KSk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSBVc2Vyc0xpc3RXcmFwcGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMiwgXCJVc2Vyc0xpc3RXcmFwcGVyXCIpO1xuZXhwb3J0IHsgVXNlcnNMaXN0V3JhcHBlciB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBLVEljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uLy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5pbXBvcnQgeyBVc2Vyc0xpc3RGaWx0ZXIgfSBmcm9tICcuL1VzZXJzTGlzdEZpbHRlcic7XG5jb25zdCBVc2Vyc0xpc3RUb29sYmFyID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgc2V0SXRlbUlkRm9yVXBkYXRlIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIGNvbnN0IG9wZW5BZGRVc2VyTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldEl0ZW1JZEZvclVwZGF0ZShudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJywgXCJkYXRhLWt0LXVzZXItdGFibGUtdG9vbGJhclwiOiAnYmFzZScgfSwgeyBjaGlsZHJlbjogW19qc3goVXNlcnNMaXN0RmlsdGVyLCB7fSksIF9qc3hzKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAnYnV0dG9uJywgY2xhc3NOYW1lOiAnYnRuIGJ0bi1saWdodC1wcmltYXJ5IG1lLTMnIH0sIHsgY2hpbGRyZW46IFtfanN4KEtUSWNvbiwgeyBpY29uTmFtZTogJ2V4aXQtdXAnLCBjbGFzc05hbWU6ICdmcy0yJyB9KSwgXCJFeHBvcnRcIl0gfSkpLCBfanN4cyhcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogJ2J1dHRvbicsIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeScsIG9uQ2xpY2s6IG9wZW5BZGRVc2VyTW9kYWwgfSwgeyBjaGlsZHJlbjogW19qc3goS1RJY29uLCB7IGljb25OYW1lOiAncGx1cycsIGNsYXNzTmFtZTogJ2ZzLTInIH0pLCBcIkFkZCBVc2VyXCJdIH0pKV0gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc0xpc3RUb29sYmFyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc0xpc3RUb29sYmFyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJzTGlzdFRvb2xiYXIsIFwiVDF2S05zTnpTejlHZTR6bWlGZVJnQ09yeUtrPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3XSk7XG5leHBvcnQgeyBVc2Vyc0xpc3RUb29sYmFyIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvYXNzZXRzL3RzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaW5pdGlhbFF1ZXJ5U3RhdGUsIEtUSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVxdWVzdCB9IGZyb20gJy4uLy4uL2NvcmUvUXVlcnlSZXF1ZXN0UHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvcmUvUXVlcnlSZXNwb25zZVByb3ZpZGVyJztcbmNvbnN0IFVzZXJzTGlzdEZpbHRlciA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHVwZGF0ZVN0YXRlIH0gPSB1c2VRdWVyeVJlcXVlc3QoKTtcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlUXVlcnlSZXNwb25zZSgpO1xuICAgIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2xhc3RMb2dpbiwgc2V0TGFzdExvZ2luXSA9IHVzZVN0YXRlKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgTWVudUNvbXBvbmVudC5yZWluaXRpYWxpemF0aW9uKCk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHJlc2V0RGF0YSA9ICgpID0+IHtcbiAgICAgICAgdXBkYXRlU3RhdGUoT2JqZWN0LmFzc2lnbih7IGZpbHRlcjogdW5kZWZpbmVkIH0sIGluaXRpYWxRdWVyeVN0YXRlKSk7XG4gICAgfTtcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gKCkgPT4ge1xuICAgICAgICB1cGRhdGVTdGF0ZShPYmplY3QuYXNzaWduKHsgZmlsdGVyOiB7IHJvbGUsIGxhc3RfbG9naW46IGxhc3RMb2dpbiB9IH0sIGluaXRpYWxRdWVyeVN0YXRlKSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNMb2FkaW5nLCB0eXBlOiAnYnV0dG9uJywgY2xhc3NOYW1lOiAnYnRuIGJ0bi1saWdodC1wcmltYXJ5IG1lLTMnLCBcImRhdGEta3QtbWVudS10cmlnZ2VyXCI6ICdjbGljaycsIFwiZGF0YS1rdC1tZW51LXBsYWNlbWVudFwiOiAnYm90dG9tLWVuZCcgfSwgeyBjaGlsZHJlbjogW19qc3goS1RJY29uLCB7IGljb25OYW1lOiAnZmlsdGVyJywgY2xhc3NOYW1lOiAnZnMtMicgfSksIFwiRmlsdGVyXCJdIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21lbnUgbWVudS1zdWIgbWVudS1zdWItZHJvcGRvd24gdy0zMDBweCB3LW1kLTMyNXB4JywgXCJkYXRhLWt0LW1lbnVcIjogJ3RydWUnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdweC03IHB5LTUnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2ZzLTUgdGV4dC1kYXJrIGZ3LWJvbGRlcicgfSwgeyBjaGlsZHJlbjogXCJGaWx0ZXIgT3B0aW9uc1wiIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzZXBhcmF0b3IgYm9yZGVyLWdyYXktMjAwJyB9KSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3B4LTcgcHktNScsIFwiZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlclwiOiAnZm9ybScgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtYi0xMCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1sYWJlbCBmcy02IGZ3LWJvbGQnIH0sIHsgY2hpbGRyZW46IFwiUm9sZTpcIiB9KSksIF9qc3hzKFwic2VsZWN0XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zb2xpZCBmdy1ib2xkZXInLCBcImRhdGEta3Qtc2VsZWN0MlwiOiAndHJ1ZScsIFwiZGF0YS1wbGFjZWhvbGRlclwiOiAnU2VsZWN0IG9wdGlvbicsIFwiZGF0YS1hbGxvdy1jbGVhclwiOiAndHJ1ZScsIFwiZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlclwiOiAncm9sZScsIFwiZGF0YS1oaWRlLXNlYXJjaFwiOiAndHJ1ZScsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Um9sZShlLnRhcmdldC52YWx1ZSksIHZhbHVlOiByb2xlIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIHsgdmFsdWU6ICcnIH0pLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJ0FkbWluaXN0cmF0b3InIH0sIHsgY2hpbGRyZW46IFwiQWRtaW5pc3RyYXRvclwiIH0pKSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICdBbmFseXN0JyB9LCB7IGNoaWxkcmVuOiBcIkFuYWx5c3RcIiB9KSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnRGV2ZWxvcGVyJyB9LCB7IGNoaWxkcmVuOiBcIkRldmVsb3BlclwiIH0pKSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICdTdXBwb3J0JyB9LCB7IGNoaWxkcmVuOiBcIlN1cHBvcnRcIiB9KSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnVHJpYWwnIH0sIHsgY2hpbGRyZW46IFwiVHJpYWxcIiB9KSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWItMTAnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tbGFiZWwgZnMtNiBmdy1ib2xkJyB9LCB7IGNoaWxkcmVuOiBcIkxhc3QgbG9naW46XCIgfSkpLCBfanN4cyhcInNlbGVjdFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc29saWQgZnctYm9sZGVyJywgXCJkYXRhLWt0LXNlbGVjdDJcIjogJ3RydWUnLCBcImRhdGEtcGxhY2Vob2xkZXJcIjogJ1NlbGVjdCBvcHRpb24nLCBcImRhdGEtYWxsb3ctY2xlYXJcIjogJ3RydWUnLCBcImRhdGEta3QtdXNlci10YWJsZS1maWx0ZXJcIjogJ3R3by1zdGVwJywgXCJkYXRhLWhpZGUtc2VhcmNoXCI6ICd0cnVlJywgb25DaGFuZ2U6IChlKSA9PiBzZXRMYXN0TG9naW4oZS50YXJnZXQudmFsdWUpLCB2YWx1ZTogbGFzdExvZ2luIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIHsgdmFsdWU6ICcnIH0pLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJ1llc3RlcmRheScgfSwgeyBjaGlsZHJlbjogXCJZZXN0ZXJkYXlcIiB9KSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnMjAgbWlucyBhZ28nIH0sIHsgY2hpbGRyZW46IFwiMjAgbWlucyBhZ29cIiB9KSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnNSBob3VycyBhZ28nIH0sIHsgY2hpbGRyZW46IFwiNSBob3VycyBhZ29cIiB9KSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnMiBkYXlzIGFnbycgfSwgeyBjaGlsZHJlbjogXCIyIGRheXMgYWdvXCIgfSkpXSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogJ2J1dHRvbicsIGRpc2FibGVkOiBpc0xvYWRpbmcsIG9uQ2xpY2s6IGZpbHRlckRhdGEsIGNsYXNzTmFtZTogJ2J0biBidG4tbGlnaHQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5IGZ3LWJvbGQgbWUtMiBweC02JywgXCJkYXRhLWt0LW1lbnUtZGlzbWlzc1wiOiAndHJ1ZScsIFwiZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlclwiOiAncmVzZXQnIH0sIHsgY2hpbGRyZW46IFwiUmVzZXRcIiB9KSksIF9qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc0xvYWRpbmcsIHR5cGU6ICdidXR0b24nLCBvbkNsaWNrOiByZXNldERhdGEsIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeSBmdy1ib2xkIHB4LTYnLCBcImRhdGEta3QtbWVudS1kaXNtaXNzXCI6ICd0cnVlJywgXCJkYXRhLWt0LXVzZXItdGFibGUtZmlsdGVyXCI6ICdmaWx0ZXInIH0sIHsgY2hpbGRyZW46IFwiQXBwbHlcIiB9KSldIH0pKV0gfSkpXSB9KSldIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc0xpc3RGaWx0ZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzTGlzdEZpbHRlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2Vyc0xpc3RGaWx0ZXIsIFwiL3VkQXVKL0dmRHJXL1RmM3d3a3MwZzFDTjI0PVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVxdWVzdCwgdXNlUXVlcnlSZXNwb25zZV0pO1xuZXhwb3J0IHsgVXNlcnNMaXN0RmlsdGVyIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQsIHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgUVVFUklFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9jb3JlL1F1ZXJ5UmVzcG9uc2VQcm92aWRlcic7XG5pbXBvcnQgeyBkZWxldGVTZWxlY3RlZFVzZXJzIH0gZnJvbSAnLi4vLi4vY29yZS9fcmVxdWVzdHMnO1xuY29uc3QgVXNlcnNMaXN0R3JvdXBpbmcgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBzZWxlY3RlZCwgY2xlYXJTZWxlY3RlZCB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUXVlcnlSZXNwb25zZSgpO1xuICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGVkSXRlbXMgPSB1c2VNdXRhdGlvbigoKSA9PiBkZWxldGVTZWxlY3RlZFVzZXJzKHNlbGVjdGVkKSwge1xuICAgICAgICAvLyDwn5KhIHJlc3BvbnNlIG9mIHRoZSBtdXRhdGlvbiBpcyBwYXNzZWQgdG8gb25TdWNjZXNzXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgLy8g4pyFIHVwZGF0ZSBkZXRhaWwgdmlldyBkaXJlY3RseVxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW2Ake1FVRVJJRVMuVVNFUlNfTElTVH0tJHtxdWVyeX1gXSk7XG4gICAgICAgICAgICBjbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtY2VudGVyJyB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z3LWJvbGRlciBtZS01JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21lLTInIH0sIHsgY2hpbGRyZW46IHNlbGVjdGVkLmxlbmd0aCB9KSksIFwiIFNlbGVjdGVkXCJdIH0pKSwgX2pzeChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogJ2J1dHRvbicsIGNsYXNzTmFtZTogJ2J0biBidG4tZGFuZ2VyJywgb25DbGljazogKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCBkZWxldGVTZWxlY3RlZEl0ZW1zLm11dGF0ZUFzeW5jKCk7IH0pIH0sIHsgY2hpbGRyZW46IFwiRGVsZXRlIFNlbGVjdGVkXCIgfSkpXSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzTGlzdEdyb3VwaW5nO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc0xpc3RHcm91cGluZ1wiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2Vyc0xpc3RHcm91cGluZywgXCJvWS9jVS9PK1pKMDd6VUNkczhOemxWL3F1bFU9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXcsIHVzZVF1ZXJ5Q2xpZW50LCB1c2VRdWVyeVJlc3BvbnNlLCB1c2VNdXRhdGlvbl0pO1xuZXhwb3J0IHsgVXNlcnNMaXN0R3JvdXBpbmcgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi8uLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuaW1wb3J0IHsgVXNlcnNMaXN0VG9vbGJhciB9IGZyb20gJy4vVXNlckxpc3RUb29sYmFyJztcbmltcG9ydCB7IFVzZXJzTGlzdEdyb3VwaW5nIH0gZnJvbSAnLi9Vc2Vyc0xpc3RHcm91cGluZyc7XG5pbXBvcnQgeyBVc2Vyc0xpc3RTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL1VzZXJzTGlzdFNlYXJjaENvbXBvbmVudCc7XG5jb25zdCBVc2Vyc0xpc3RIZWFkZXIgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjYXJkLWhlYWRlciBib3JkZXItMCBwdC02JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChVc2Vyc0xpc3RTZWFyY2hDb21wb25lbnQsIHt9KSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnY2FyZC10b29sYmFyJyB9LCB7IGNoaWxkcmVuOiBzZWxlY3RlZC5sZW5ndGggPiAwID8gX2pzeChVc2Vyc0xpc3RHcm91cGluZywge30pIDogX2pzeChVc2Vyc0xpc3RUb29sYmFyLCB7fSkgfSkpXSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzTGlzdEhlYWRlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNMaXN0SGVhZGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJzTGlzdEhlYWRlciwgXCJhMzJEQTBjbWpmQlpGZ0U2N0FhSmdteW9oSlk9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXddKTtcbmV4cG9ydCB7IFVzZXJzTGlzdEhlYWRlciB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbml0aWFsUXVlcnlTdGF0ZSwgS1RJY29uLCB1c2VEZWJvdW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVxdWVzdCB9IGZyb20gJy4uLy4uL2NvcmUvUXVlcnlSZXF1ZXN0UHJvdmlkZXInO1xuY29uc3QgVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgdXBkYXRlU3RhdGUgfSA9IHVzZVF1ZXJ5UmVxdWVzdCgpO1xuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgICAvLyBEZWJvdW5jZSBzZWFyY2ggdGVybSBzbyB0aGF0IGl0IG9ubHkgZ2l2ZXMgdXMgbGF0ZXN0IHZhbHVlIC4uLlxuICAgIC8vIC4uLiBpZiBzZWFyY2hUZXJtIGhhcyBub3QgYmVlbiB1cGRhdGVkIHdpdGhpbiBsYXN0IDUwMG1zLlxuICAgIC8vIFRoZSBnb2FsIGlzIHRvIG9ubHkgaGF2ZSB0aGUgQVBJIGNhbGwgZmlyZSB3aGVuIHVzZXIgc3RvcHMgdHlwaW5nIC4uLlxuICAgIC8vIC4uLiBzbyB0aGF0IHdlIGFyZW4ndCBoaXR0aW5nIG91ciBBUEkgcmFwaWRseS5cbiAgICBjb25zdCBkZWJvdW5jZWRTZWFyY2hUZXJtID0gdXNlRGVib3VuY2Uoc2VhcmNoVGVybSwgMTUwKTtcbiAgICAvLyBFZmZlY3QgZm9yIEFQSSBjYWxsXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRlYm91bmNlZFNlYXJjaFRlcm0gIT09IHVuZGVmaW5lZCAmJiBzZWFyY2hUZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHVwZGF0ZVN0YXRlKE9iamVjdC5hc3NpZ24oeyBzZWFyY2g6IGRlYm91bmNlZFNlYXJjaFRlcm0gfSwgaW5pdGlhbFF1ZXJ5U3RhdGUpKTtcbiAgICAgICAgfVxuICAgIH0sIFtkZWJvdW5jZWRTZWFyY2hUZXJtXSAvLyBPbmx5IGNhbGwgZWZmZWN0IGlmIGRlYm91bmNlZCBzZWFyY2ggdGVybSBjaGFuZ2VzXG4gICAgLy8gTW9yZSBkZXRhaWxzIGFib3V0IHVzZURlYm91bmNlOiBodHRwczovL3VzZWhvb2tzLmNvbS91c2VEZWJvdW5jZS9cbiAgICApO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnY2FyZC10aXRsZScgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmUgbXktMScgfSwgeyBjaGlsZHJlbjogW19qc3goS1RJY29uLCB7IGljb25OYW1lOiAnbWFnbmlmaWVyJywgY2xhc3NOYW1lOiAnZnMtMSBwb3NpdGlvbi1hYnNvbHV0ZSBtcy02JyB9KSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogJ3RleHQnLCBcImRhdGEta3QtdXNlci10YWJsZS1maWx0ZXJcIjogJ3NlYXJjaCcsIGNsYXNzTmFtZTogJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc29saWQgdy0yNTBweCBwcy0xNCcsIHBsYWNlaG9sZGVyOiAnU2VhcmNoIHVzZXInLCB2YWx1ZTogc2VhcmNoVGVybSwgb25DaGFuZ2U6IChlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKSB9KV0gfSkpIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50O1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc0xpc3RTZWFyY2hDb21wb25lbnRcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50LCBcIk41dDFnWFJUWjJWdVRsWjdBNUJFcGxZSlRVZz1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlcXVlc3QsIHVzZURlYm91bmNlXSk7XG5leHBvcnQgeyBVc2Vyc0xpc3RTZWFyY2hDb21wb25lbnQgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgVXNlcnNMaXN0TG9hZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIGJvcmRlclJhZGl1czogJzAuNDc1cmVtJyxcbiAgICAgICAgYm94U2hhZG93OiAnMCAwIDUwcHggMCByZ2IoODIgNjMgMTA1IC8gMTUlKScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBjb2xvcjogJyM3ZTgyOTknLFxuICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIHBhZGRpbmc6ICcxcmVtIDJyZW0nLFxuICAgICAgICB0b3A6ICdjYWxjKDUwJSAtIDJyZW0pJyxcbiAgICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gNHJlbSknLFxuICAgIH07XG4gICAgcmV0dXJuIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IHN0eWxlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlcyksIHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfSkgfSwgeyBjaGlsZHJlbjogXCJQcm9jZXNzaW5nLi4uXCIgfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzTGlzdExvYWRpbmc7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzTGlzdExvYWRpbmdcIik7XG5leHBvcnQgeyBVc2Vyc0xpc3RMb2FkaW5nIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB1c2VRdWVyeVJlc3BvbnNlTG9hZGluZywgdXNlUXVlcnlSZXNwb25zZVBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL1F1ZXJ5UmVzcG9uc2VQcm92aWRlcic7XG5pbXBvcnQgeyB1c2VRdWVyeVJlcXVlc3QgfSBmcm9tICcuLi8uLi9jb3JlL1F1ZXJ5UmVxdWVzdFByb3ZpZGVyJztcbmNvbnN0IG1hcHBlZExhYmVsID0gKGxhYmVsKSA9PiB7XG4gICAgaWYgKGxhYmVsID09PSAnJmxhcXVvOyBQcmV2aW91cycpIHtcbiAgICAgICAgcmV0dXJuICdQcmV2aW91cyc7XG4gICAgfVxuICAgIGlmIChsYWJlbCA9PT0gJ05leHQgJnJhcXVvOycpIHtcbiAgICAgICAgcmV0dXJuICdOZXh0JztcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVsO1xufTtcbmNvbnN0IFVzZXJzTGlzdFBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHBhZ2luYXRpb24gPSB1c2VRdWVyeVJlc3BvbnNlUGFnaW5hdGlvbigpO1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nKCk7XG4gICAgY29uc3QgeyB1cGRhdGVTdGF0ZSB9ID0gdXNlUXVlcnlSZXF1ZXN0KCk7XG4gICAgY29uc3QgdXBkYXRlUGFnZSA9IChwYWdlKSA9PiB7XG4gICAgICAgIGlmICghcGFnZSB8fCBpc0xvYWRpbmcgfHwgcGFnaW5hdGlvbi5wYWdlID09PSBwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlU3RhdGUoeyBwYWdlLCBpdGVtc19wZXJfcGFnZTogcGFnaW5hdGlvbi5pdGVtc19wZXJfcGFnZSB8fCAxMCB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3JvdycgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjb2wtc20tMTIgY29sLW1kLTUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1zdGFydCcgfSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2NvbC1zbS0xMiBjb2wtbWQtNyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLWVuZCcgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgaWQ6ICdrdF90YWJsZV91c2Vyc19wYWdpbmF0ZScgfSwgeyBjaGlsZHJlbjogX2pzeChcInVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdwYWdpbmF0aW9uJyB9LCB7IGNoaWxkcmVuOiAoX2EgPSBwYWdpbmF0aW9uLmxpbmtzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbGluayksIHsgbGFiZWw6IG1hcHBlZExhYmVsKGxpbmsubGFiZWwpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKChsaW5rKSA9PiAoX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsc3goJ3BhZ2UtaXRlbScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwYWdpbmF0aW9uLnBhZ2UgPT09IGxpbmsucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IGxpbmsubGFiZWwgPT09ICdQcmV2aW91cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IGxpbmsubGFiZWwgPT09ICdOZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbHN4KCdwYWdlLWxpbmsnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFnZS10ZXh0JzogbGluay5sYWJlbCA9PT0gJ1ByZXZpb3VzJyB8fCBsaW5rLmxhYmVsID09PSAnTmV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWUtNSc6IGxpbmsubGFiZWwgPT09ICdQcmV2aW91cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBvbkNsaWNrOiAoKSA9PiB1cGRhdGVQYWdlKGxpbmsucGFnZSksIHN0eWxlOiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfSwgeyBjaGlsZHJlbjogbWFwcGVkTGFiZWwobGluay5sYWJlbCkgfSkpIH0pLCBsaW5rLmxhYmVsKSkpIH0pKSB9KSkgfSkpXSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzTGlzdFBhZ2luYXRpb247XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzTGlzdFBhZ2luYXRpb25cIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlcnNMaXN0UGFnaW5hdGlvbiwgXCJibk5CVXR2YmhHVDdxdG16UmM5a3gwVUNOQkE9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXNwb25zZVBhZ2luYXRpb24sIHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nLCB1c2VRdWVyeVJlcXVlc3RdKTtcbmV4cG9ydCB7IFVzZXJzTGlzdFBhZ2luYXRpb24gfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yLCBfcmVhY3RfcmVmcmVzaF90ZW1wXzM7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2FsY3VsYXRlZEdyb3VwaW5nSXNEaXNhYmxlZCwgY2FsY3VsYXRlSXNBbGxEYXRhU2VsZWN0ZWQsIGdyb3VwaW5nT25TZWxlY3QsIGluaXRpYWxMaXN0VmlldywgZ3JvdXBpbmdPblNlbGVjdEFsbCwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VRdWVyeVJlc3BvbnNlLCB1c2VRdWVyeVJlc3BvbnNlRGF0YSB9IGZyb20gJy4vUXVlcnlSZXNwb25zZVByb3ZpZGVyJztcbmNvbnN0IExpc3RWaWV3Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbExpc3RWaWV3KTtcbmNvbnN0IExpc3RWaWV3UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShpbml0aWFsTGlzdFZpZXcuc2VsZWN0ZWQpO1xuICAgIGNvbnN0IFtpdGVtSWRGb3JVcGRhdGUsIHNldEl0ZW1JZEZvclVwZGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsTGlzdFZpZXcuaXRlbUlkRm9yVXBkYXRlKTtcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlUXVlcnlSZXNwb25zZSgpO1xuICAgIGNvbnN0IGRhdGEgPSB1c2VRdWVyeVJlc3BvbnNlRGF0YSgpO1xuICAgIGNvbnN0IGRpc2FibGVkID0gdXNlTWVtbygoKSA9PiBjYWxjdWxhdGVkR3JvdXBpbmdJc0Rpc2FibGVkKGlzTG9hZGluZywgZGF0YSksIFtpc0xvYWRpbmcsIGRhdGFdKTtcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkID0gdXNlTWVtbygoKSA9PiBjYWxjdWxhdGVJc0FsbERhdGFTZWxlY3RlZChkYXRhLCBzZWxlY3RlZCksIFtkYXRhLCBzZWxlY3RlZF0pO1xuICAgIHJldHVybiAoX2pzeChMaXN0Vmlld0NvbnRleHQuUHJvdmlkZXIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZToge1xuICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICBpdGVtSWRGb3JVcGRhdGUsXG4gICAgICAgICAgICBzZXRJdGVtSWRGb3JVcGRhdGUsXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQsXG4gICAgICAgICAgICBvblNlbGVjdDogKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JvdXBpbmdPblNlbGVjdChpZCwgc2VsZWN0ZWQsIHNldFNlbGVjdGVkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNlbGVjdEFsbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyb3VwaW5nT25TZWxlY3RBbGwoaXNBbGxTZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyU2VsZWN0ZWQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChbXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gTGlzdFZpZXdQcm92aWRlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiTGlzdFZpZXdQcm92aWRlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihMaXN0Vmlld1Byb3ZpZGVyLCBcIjdaZHBDS1BzZGZRb281OFhEWXN0TGJxa0ZnTT1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlc3BvbnNlLCB1c2VRdWVyeVJlc3BvbnNlRGF0YV0pO1xuY29uc3QgdXNlTGlzdFZpZXcgPSAoKSA9PiAoX3JlYWN0X3JlZnJlc2hfdGVtcF8zKCksIHVzZUNvbnRleHQoTGlzdFZpZXdDb250ZXh0KSk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzModXNlTGlzdFZpZXcsIFwiZ0RzQ2plZUl0VXV2Z09XZjF2NHFvSzlSRjZrPVwiKTtcbmV4cG9ydCB7IExpc3RWaWV3UHJvdmlkZXIsIHVzZUxpc3RWaWV3IH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMiwgX3JlYWN0X3JlZnJlc2hfdGVtcF8zO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzMgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXRpYWxRdWVyeVJlcXVlc3QsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuY29uc3QgUXVlcnlSZXF1ZXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFF1ZXJ5UmVxdWVzdCk7XG5jb25zdCBRdWVyeVJlcXVlc3RQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxRdWVyeVJlcXVlc3Quc3RhdGUpO1xuICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gKHVwZGF0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFN0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHVwZGF0ZXMpO1xuICAgICAgICBzZXRTdGF0ZSh1cGRhdGVkU3RhdGUpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4KFF1ZXJ5UmVxdWVzdENvbnRleHQuUHJvdmlkZXIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogeyBzdGF0ZSwgdXBkYXRlU3RhdGUgfSB9LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFF1ZXJ5UmVxdWVzdFByb3ZpZGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJRdWVyeVJlcXVlc3RQcm92aWRlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihRdWVyeVJlcXVlc3RQcm92aWRlciwgXCJEN2FEcU4rRDdiM1ZXUUlTYit6S1U3ZlZQRWM9XCIpO1xuY29uc3QgdXNlUXVlcnlSZXF1ZXN0ID0gKCkgPT4gKF9yZWFjdF9yZWZyZXNoX3RlbXBfMygpLCB1c2VDb250ZXh0KFF1ZXJ5UmVxdWVzdENvbnRleHQpKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyh1c2VRdWVyeVJlcXVlc3QsIFwiZ0RzQ2plZUl0VXV2Z09XZjF2NHFvSzlSRjZrPVwiKTtcbmV4cG9ydCB7IFF1ZXJ5UmVxdWVzdFByb3ZpZGVyLCB1c2VRdWVyeVJlcXVlc3QgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yLCBfcmVhY3RfcmVmcmVzaF90ZW1wXzMsIF9yZWFjdF9yZWZyZXNoX3RlbXBfNCwgX3JlYWN0X3JlZnJlc2hfdGVtcF81LCBfcmVhY3RfcmVmcmVzaF90ZW1wXzY7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyA9ICRSZWZyZXNoU2lnJCgpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF80ID0gJFJlZnJlc2hTaWckKCk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzUgPSAkUmVmcmVzaFNpZyQoKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfNiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgY3JlYXRlUmVzcG9uc2VDb250ZXh0LCBpbml0aWFsUXVlcnlSZXNwb25zZSwgaW5pdGlhbFF1ZXJ5U3RhdGUsIFFVRVJJRVMsIHN0cmluZ2lmeVJlcXVlc3RRdWVyeSwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyBnZXRVc2VycyB9IGZyb20gJy4vX3JlcXVlc3RzJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVxdWVzdCB9IGZyb20gJy4vUXVlcnlSZXF1ZXN0UHJvdmlkZXInO1xuY29uc3QgUXVlcnlSZXNwb25zZUNvbnRleHQgPSBjcmVhdGVSZXNwb25zZUNvbnRleHQoaW5pdGlhbFF1ZXJ5UmVzcG9uc2UpO1xuY29uc3QgUXVlcnlSZXNwb25zZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHVzZVF1ZXJ5UmVxdWVzdCgpO1xuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoc3RyaW5naWZ5UmVxdWVzdFF1ZXJ5KHN0YXRlKSk7XG4gICAgY29uc3QgdXBkYXRlZFF1ZXJ5ID0gdXNlTWVtbygoKSA9PiBzdHJpbmdpZnlSZXF1ZXN0UXVlcnkoc3RhdGUpLCBbc3RhdGVdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocXVlcnkgIT09IHVwZGF0ZWRRdWVyeSkge1xuICAgICAgICAgICAgc2V0UXVlcnkodXBkYXRlZFF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH0sIFt1cGRhdGVkUXVlcnldKTtcbiAgICBjb25zdCB7IGlzRmV0Y2hpbmcsIHJlZmV0Y2gsIGRhdGE6IHJlc3BvbnNlLCB9ID0gdXNlUXVlcnkoYCR7UVVFUklFUy5VU0VSU19MSVNUfS0ke3F1ZXJ5fWAsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldFVzZXJzKHF1ZXJ5KTtcbiAgICB9LCB7IGNhY2hlVGltZTogMCwga2VlcFByZXZpb3VzRGF0YTogdHJ1ZSwgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlIH0pO1xuICAgIHJldHVybiAoX2pzeChRdWVyeVJlc3BvbnNlQ29udGV4dC5Qcm92aWRlciwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiB7IGlzTG9hZGluZzogaXNGZXRjaGluZywgcmVmZXRjaCwgcmVzcG9uc2UsIHF1ZXJ5IH0gfSwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBRdWVyeVJlc3BvbnNlUHJvdmlkZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlF1ZXJ5UmVzcG9uc2VQcm92aWRlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihRdWVyeVJlc3BvbnNlUHJvdmlkZXIsIFwiL2poOGFWM1hacDg1Zi95OGFud0JDRUQwZmQwPVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVxdWVzdCwgdXNlUXVlcnldKTtcbmNvbnN0IHVzZVF1ZXJ5UmVzcG9uc2UgPSAoKSA9PiAoX3JlYWN0X3JlZnJlc2hfdGVtcF8zKCksIHVzZUNvbnRleHQoUXVlcnlSZXNwb25zZUNvbnRleHQpKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyh1c2VRdWVyeVJlc3BvbnNlLCBcImdEc0NqZWVJdFV1dmdPV2YxdjRxb0s5UkY2az1cIik7XG5jb25zdCB1c2VRdWVyeVJlc3BvbnNlRGF0YSA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzQoKTtcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSB1c2VRdWVyeVJlc3BvbnNlKCk7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiAocmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmRhdGEpIHx8IFtdO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfNCh1c2VRdWVyeVJlc3BvbnNlRGF0YSwgXCJ6NVB2bnU1eVNGZjU3UUNqMTlRQUh1THZ2UGc9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXNwb25zZV0pO1xuY29uc3QgdXNlUXVlcnlSZXNwb25zZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF81KCk7XG4gICAgY29uc3QgZGVmYXVsdFBhZ2luYXRpb25TdGF0ZSA9IE9iamVjdC5hc3NpZ24oeyBsaW5rczogW10gfSwgaW5pdGlhbFF1ZXJ5U3RhdGUpO1xuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHVzZVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5wYXlsb2FkIHx8ICFyZXNwb25zZS5wYXlsb2FkLnBhZ2luYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRQYWdpbmF0aW9uU3RhdGU7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5wYXlsb2FkLnBhZ2luYXRpb247XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF81KHVzZVF1ZXJ5UmVzcG9uc2VQYWdpbmF0aW9uLCBcIno1UHZudTV5U0ZmNTdRQ2oxOVFBSHVMdnZQZz1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlc3BvbnNlXSk7XG5jb25zdCB1c2VRdWVyeVJlc3BvbnNlTG9hZGluZyA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzYoKTtcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlUXVlcnlSZXNwb25zZSgpO1xuICAgIHJldHVybiBpc0xvYWRpbmc7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF82KHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nLCBcIk9VSjFzZldYN1JHV2drNkdGSmFhQWFwZEZzOD1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlc3BvbnNlXSk7XG5leHBvcnQgeyBRdWVyeVJlc3BvbnNlUHJvdmlkZXIsIHVzZVF1ZXJ5UmVzcG9uc2UsIHVzZVF1ZXJ5UmVzcG9uc2VEYXRhLCB1c2VRdWVyeVJlc3BvbnNlUGFnaW5hdGlvbiwgdXNlUXVlcnlSZXNwb25zZUxvYWRpbmcsIH07XG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFVzZXIgPSB7XG4gICAgYXZhdGFyOiAnYXZhdGFycy8zMDAtNi5qcGcnLFxuICAgIHBvc2l0aW9uOiAnQXJ0IERpcmVjdG9yJyxcbiAgICByb2xlOiAnQWRtaW5pc3RyYXRvcicsXG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1RIRU1FX0FQSV9VUkw7XG5jb25zdCBVU0VSX1VSTCA9IGAke0FQSV9VUkx9L3VzZXJgO1xuY29uc3QgR0VUX1VTRVJTX1VSTCA9IGAke0FQSV9VUkx9L3VzZXJzL3F1ZXJ5YDtcbmNvbnN0IGdldFVzZXJzID0gKHF1ZXJ5KSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAgIC5nZXQoYCR7R0VUX1VTRVJTX1VSTH0/JHtxdWVyeX1gKVxuICAgICAgICAudGhlbigoZCkgPT4gZC5kYXRhKTtcbn07XG5jb25zdCBnZXRVc2VyQnlJZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBheGlvc1xuICAgICAgICAuZ2V0KGAke1VTRVJfVVJMfS8ke2lkfWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKTtcbn07XG5jb25zdCBjcmVhdGVVc2VyID0gKHVzZXIpID0+IHtcbiAgICByZXR1cm4gYXhpb3NcbiAgICAgICAgLnB1dChVU0VSX1VSTCwgdXNlcilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpO1xufTtcbmNvbnN0IHVwZGF0ZVVzZXIgPSAodXNlcikgPT4ge1xuICAgIHJldHVybiBheGlvc1xuICAgICAgICAucG9zdChgJHtVU0VSX1VSTH0vJHt1c2VyLmlkfWAsIHVzZXIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKTtcbn07XG5jb25zdCBkZWxldGVVc2VyID0gKHVzZXJJZCkgPT4ge1xuICAgIHJldHVybiBheGlvcy5kZWxldGUoYCR7VVNFUl9VUkx9LyR7dXNlcklkfWApLnRoZW4oKCkgPT4geyB9KTtcbn07XG5jb25zdCBkZWxldGVTZWxlY3RlZFVzZXJzID0gKHVzZXJJZHMpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0cyA9IHVzZXJJZHMubWFwKChpZCkgPT4gYXhpb3MuZGVsZXRlKGAke1VTRVJfVVJMfS8ke2lkfWApKTtcbiAgICByZXR1cm4gYXhpb3MuYWxsKHJlcXVlc3RzKS50aGVuKCgpID0+IHsgfSk7XG59O1xuZXhwb3J0IHsgZ2V0VXNlcnMsIGRlbGV0ZVVzZXIsIGRlbGV0ZVNlbGVjdGVkVXNlcnMsIGdldFVzZXJCeUlkLCBjcmVhdGVVc2VyLCB1cGRhdGVVc2VyIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCB7IEN1c3RvbUhlYWRlckNvbHVtbiB9IGZyb20gJy4vY29sdW1ucy9DdXN0b21IZWFkZXJDb2x1bW4nO1xuaW1wb3J0IHsgQ3VzdG9tUm93IH0gZnJvbSAnLi9jb2x1bW5zL0N1c3RvbVJvdyc7XG5pbXBvcnQgeyB1c2VRdWVyeVJlc3BvbnNlRGF0YSwgdXNlUXVlcnlSZXNwb25zZUxvYWRpbmcgfSBmcm9tICcuLi9jb3JlL1F1ZXJ5UmVzcG9uc2VQcm92aWRlcic7XG5pbXBvcnQgeyB1c2Vyc0NvbHVtbnMgfSBmcm9tICcuL2NvbHVtbnMvX2NvbHVtbnMnO1xuaW1wb3J0IHsgVXNlcnNMaXN0TG9hZGluZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZy9Vc2Vyc0xpc3RMb2FkaW5nJztcbmltcG9ydCB7IFVzZXJzTGlzdFBhZ2luYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2luYXRpb24vVXNlcnNMaXN0UGFnaW5hdGlvbic7XG5pbXBvcnQgeyBLVENhcmRCb2R5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuY29uc3QgVXNlcnNUYWJsZSA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB1c2VycyA9IHVzZVF1ZXJ5UmVzcG9uc2VEYXRhKCk7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gdXNlUXVlcnlSZXNwb25zZUxvYWRpbmcoKTtcbiAgICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiB1c2VycywgW3VzZXJzXSk7XG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gdXNlcnNDb2x1bW5zLCBbXSk7XG4gICAgY29uc3QgeyBnZXRUYWJsZVByb3BzLCBnZXRUYWJsZUJvZHlQcm9wcywgaGVhZGVycywgcm93cywgcHJlcGFyZVJvdyB9ID0gdXNlVGFibGUoe1xuICAgICAgICBjb2x1bW5zLFxuICAgICAgICBkYXRhLFxuICAgIH0pO1xuICAgIHJldHVybiAoX2pzeHMoS1RDYXJkQm9keSwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3B5LTQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0YWJsZS1yZXNwb25zaXZlJyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcInRhYmxlXCIsIE9iamVjdC5hc3NpZ24oeyBpZDogJ2t0X3RhYmxlX3VzZXJzJywgY2xhc3NOYW1lOiAndGFibGUgYWxpZ24tbWlkZGxlIHRhYmxlLXJvdy1kYXNoZWQgZnMtNiBneS01IGRhdGFUYWJsZSBuby1mb290ZXInIH0sIGdldFRhYmxlUHJvcHMoKSwgeyBjaGlsZHJlbjogW19qc3goXCJ0aGVhZFwiLCB7IGNoaWxkcmVuOiBfanN4KFwidHJcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RleHQtc3RhcnQgdGV4dC1tdXRlZCBmdy1ib2xkZXIgZnMtNyB0ZXh0LXVwcGVyY2FzZSBncy0wJyB9LCB7IGNoaWxkcmVuOiBoZWFkZXJzLm1hcCgoY29sdW1uKSA9PiAoX2pzeChDdXN0b21IZWFkZXJDb2x1bW4sIHsgY29sdW1uOiBjb2x1bW4gfSwgY29sdW1uLmlkKSkpIH0pKSB9KSwgX2pzeChcInRib2R5XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0ZXh0LWdyYXktNjAwIGZ3LWJvbGQnIH0sIGdldFRhYmxlQm9keVByb3BzKCksIHsgY2hpbGRyZW46IHJvd3MubGVuZ3RoID4gMCA/IChyb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9qc3goQ3VzdG9tUm93LCB7IHJvdzogcm93IH0sIGByb3ctJHtpfS0ke3Jvdy5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgOiAoX2pzeChcInRyXCIsIHsgY2hpbGRyZW46IF9qc3goXCJ0ZFwiLCBPYmplY3QuYXNzaWduKHsgY29sU3BhbjogNyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggdGV4dC1jZW50ZXIgdy0xMDAgYWxpZ24tY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlcicgfSwgeyBjaGlsZHJlbjogXCJObyBtYXRjaGluZyByZWNvcmRzIGZvdW5kXCIgfSkpIH0pKSB9KSkgfSkpXSB9KSkgfSkpLCBfanN4KFVzZXJzTGlzdFBhZ2luYXRpb24sIHt9KSwgaXNMb2FkaW5nICYmIF9qc3goVXNlcnNMaXN0TG9hZGluZywge30pXSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzVGFibGU7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzVGFibGVcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlcnNUYWJsZSwgXCI2eG1LUDdpSEhPTmQ3N3ErTnVJaDRSYTZOK1E9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXNwb25zZURhdGEsIHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nLCB1c2VUYWJsZV0pO1xuZXhwb3J0IHsgVXNlcnNUYWJsZSB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IEN1c3RvbUhlYWRlckNvbHVtbiA9ICh7IGNvbHVtbiB9KSA9PiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IGNvbHVtbi5IZWFkZXIgJiYgdHlwZW9mIGNvbHVtbi5IZWFkZXIgPT09ICdzdHJpbmcnID8gKF9qc3goXCJ0aFwiLCBPYmplY3QuYXNzaWduKHt9LCBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKSwgeyBjaGlsZHJlbjogY29sdW1uLnJlbmRlcignSGVhZGVyJykgfSkpKSA6IChjb2x1bW4ucmVuZGVyKCdIZWFkZXInKSkgfSkpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gQ3VzdG9tSGVhZGVyQ29sdW1uO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJDdXN0b21IZWFkZXJDb2x1bW5cIik7XG5leHBvcnQgeyBDdXN0b21IZWFkZXJDb2x1bW4gfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuY29uc3QgQ3VzdG9tUm93ID0gKHsgcm93IH0pID0+IChfanN4KFwidHJcIiwgT2JqZWN0LmFzc2lnbih7fSwgcm93LmdldFJvd1Byb3BzKCksIHsgY2hpbGRyZW46IHJvdy5jZWxscy5tYXAoKGNlbGwpID0+IHtcbiAgICAgICAgcmV0dXJuIChfanN4KFwidGRcIiwgT2JqZWN0LmFzc2lnbih7fSwgY2VsbC5nZXRDZWxsUHJvcHMoKSwgeyBjbGFzc05hbWU6IGNsc3goeyAndGV4dC1lbmQgbWluLXctMTAwcHgnOiBjZWxsLmNvbHVtbi5pZCA9PT0gJ2FjdGlvbnMnIH0pIH0sIHsgY2hpbGRyZW46IGNlbGwucmVuZGVyKCdDZWxsJykgfSkpKTtcbiAgICB9KSB9KSkpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gQ3VzdG9tUm93O1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJDdXN0b21Sb3dcIik7XG5leHBvcnQgeyBDdXN0b21Sb3cgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9hc3NldHMvdHMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBLVEljb24sIFFVRVJJRVMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uLy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5pbXBvcnQgeyB1c2VRdWVyeVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXInO1xuaW1wb3J0IHsgZGVsZXRlVXNlciB9IGZyb20gJy4uLy4uL2NvcmUvX3JlcXVlc3RzJztcbmNvbnN0IFVzZXJBY3Rpb25zQ2VsbCA9ICh7IGlkIH0pID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHNldEl0ZW1JZEZvclVwZGF0ZSB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VRdWVyeVJlc3BvbnNlKCk7XG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIE1lbnVDb21wb25lbnQucmVpbml0aWFsaXphdGlvbigpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBvcGVuRWRpdE1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRJdGVtSWRGb3JVcGRhdGUoaWQpO1xuICAgIH07XG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IHVzZU11dGF0aW9uKCgpID0+IGRlbGV0ZVVzZXIoaWQpLCB7XG4gICAgICAgIC8vIPCfkqEgcmVzcG9uc2Ugb2YgdGhlIG11dGF0aW9uIGlzIHBhc3NlZCB0byBvblN1Y2Nlc3NcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyDinIUgdXBkYXRlIGRldGFpbCB2aWV3IGRpcmVjdGx5XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbYCR7UVVFUklFUy5VU0VSU19MSVNUfS0ke3F1ZXJ5fWBdKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogJyMnLCBjbGFzc05hbWU6ICdidG4gYnRuLWxpZ2h0IGJ0bi1hY3RpdmUtbGlnaHQtcHJpbWFyeSBidG4tc20nLCBcImRhdGEta3QtbWVudS10cmlnZ2VyXCI6ICdjbGljaycsIFwiZGF0YS1rdC1tZW51LXBsYWNlbWVudFwiOiAnYm90dG9tLWVuZCcgfSwgeyBjaGlsZHJlbjogW1wiQWN0aW9uc1wiLCBfanN4KEtUSWNvbiwgeyBpY29uTmFtZTogJ2Rvd24nLCBjbGFzc05hbWU6ICdmcy01IG0tMCcgfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21lbnUgbWVudS1zdWIgbWVudS1zdWItZHJvcGRvd24gbWVudS1jb2x1bW4gbWVudS1yb3VuZGVkIG1lbnUtZ3JheS02MDAgbWVudS1zdGF0ZS1iZy1saWdodC1wcmltYXJ5IGZ3LWJvbGQgZnMtNyB3LTEyNXB4IHB5LTQnLCBcImRhdGEta3QtbWVudVwiOiAndHJ1ZScgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21lbnUtaXRlbSBweC0zJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWVudS1saW5rIHB4LTMnLCBvbkNsaWNrOiBvcGVuRWRpdE1vZGFsIH0sIHsgY2hpbGRyZW46IFwiRWRpdFwiIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21lbnUtaXRlbSBweC0zJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWVudS1saW5rIHB4LTMnLCBcImRhdGEta3QtdXNlcnMtdGFibGUtZmlsdGVyXCI6ICdkZWxldGVfcm93Jywgb25DbGljazogKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCBkZWxldGVJdGVtLm11dGF0ZUFzeW5jKCk7IH0pIH0sIHsgY2hpbGRyZW46IFwiRGVsZXRlXCIgfSkpIH0pKV0gfSkpXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlckFjdGlvbnNDZWxsO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyQWN0aW9uc0NlbGxcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlckFjdGlvbnNDZWxsLCBcIkRqRm9LN0VEMmlIc3YwZ3FycTlqZ1E4RFlkMD1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0VmlldywgdXNlUXVlcnlSZXNwb25zZSwgdXNlUXVlcnlDbGllbnQsIHVzZU11dGF0aW9uXSk7XG5leHBvcnQgeyBVc2VyQWN0aW9uc0NlbGwgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdGlhbFF1ZXJ5U3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VRdWVyeVJlcXVlc3QgfSBmcm9tICcuLi8uLi9jb3JlL1F1ZXJ5UmVxdWVzdFByb3ZpZGVyJztcbmNvbnN0IFVzZXJDdXN0b21IZWFkZXIgPSAoeyBjbGFzc05hbWUsIHRpdGxlLCB0YWJsZVByb3BzIH0pID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCBpZCA9IHRhYmxlUHJvcHMuY29sdW1uLmlkO1xuICAgIGNvbnN0IHsgc3RhdGUsIHVwZGF0ZVN0YXRlIH0gPSB1c2VRdWVyeVJlcXVlc3QoKTtcbiAgICBjb25zdCBpc1NlbGVjdGVkRm9yU29ydGluZyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUuc29ydCAmJiBzdGF0ZS5zb3J0ID09PSBpZDtcbiAgICB9LCBbc3RhdGUsIGlkXSk7XG4gICAgY29uc3Qgb3JkZXIgPSB1c2VNZW1vKCgpID0+IHN0YXRlLm9yZGVyLCBbc3RhdGVdKTtcbiAgICBjb25zdCBzb3J0Q29sdW1uID0gKCkgPT4ge1xuICAgICAgICAvLyBhdm9pZCBzb3J0aW5nIGZvciB0aGVzZSBjb2x1bW5zXG4gICAgICAgIGlmIChpZCA9PT0gJ2FjdGlvbnMnIHx8IGlkID09PSAnc2VsZWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNTZWxlY3RlZEZvclNvcnRpbmcpIHtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBzb3J0IGFzY1xuICAgICAgICAgICAgdXBkYXRlU3RhdGUoT2JqZWN0LmFzc2lnbih7IHNvcnQ6IGlkLCBvcmRlcjogJ2FzYycgfSwgaW5pdGlhbFF1ZXJ5U3RhdGUpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTZWxlY3RlZEZvclNvcnRpbmcgJiYgb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG9yZGVyID09PSAnYXNjJykge1xuICAgICAgICAgICAgICAgIC8vIGVuYWJsZSBzb3J0IGRlc2NcbiAgICAgICAgICAgICAgICB1cGRhdGVTdGF0ZShPYmplY3QuYXNzaWduKHsgc29ydDogaWQsIG9yZGVyOiAnZGVzYycgfSwgaW5pdGlhbFF1ZXJ5U3RhdGUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaXNhYmxlIHNvcnRcbiAgICAgICAgICAgIHVwZGF0ZVN0YXRlKE9iamVjdC5hc3NpZ24oeyBzb3J0OiB1bmRlZmluZWQsIG9yZGVyOiB1bmRlZmluZWQgfSwgaW5pdGlhbFF1ZXJ5U3RhdGUpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChfanN4KFwidGhcIiwgT2JqZWN0LmFzc2lnbih7fSwgdGFibGVQcm9wcy5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKSwgeyBjbGFzc05hbWU6IGNsc3goY2xhc3NOYW1lLCBpc1NlbGVjdGVkRm9yU29ydGluZyAmJiBvcmRlciAhPT0gdW5kZWZpbmVkICYmIGB0YWJsZS1zb3J0LSR7b3JkZXJ9YCksIHN0eWxlOiB7IGN1cnNvcjogJ3BvaW50ZXInIH0sIG9uQ2xpY2s6IHNvcnRDb2x1bW4gfSwgeyBjaGlsZHJlbjogdGl0bGUgfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyQ3VzdG9tSGVhZGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyQ3VzdG9tSGVhZGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJDdXN0b21IZWFkZXIsIFwiQkMxK2h2bk14Q08yWVlob1FZUlZZTGNZNk84PVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVxdWVzdF0pO1xuZXhwb3J0IHsgVXNlckN1c3RvbUhlYWRlciB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdG9BYnNvbHV0ZVVybCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmNvbnN0IFVzZXJJbmZvQ2VsbCA9ICh7IHVzZXIgfSkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdzeW1ib2wgc3ltYm9sLWNpcmNsZSBzeW1ib2wtNTBweCBvdmVyZmxvdy1oaWRkZW4gbWUtMycgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6ICcjJyB9LCB7IGNoaWxkcmVuOiB1c2VyLmF2YXRhciA/IChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdzeW1ib2wtbGFiZWwnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBzcmM6IHRvQWJzb2x1dGVVcmwoYC9tZWRpYS8ke3VzZXIuYXZhdGFyfWApLCBhbHQ6IHVzZXIubmFtZSwgY2xhc3NOYW1lOiAndy0xMDAnIH0pIH0pKSkgOiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbHN4KCdzeW1ib2wtbGFiZWwgZnMtMycsIGBiZy1saWdodC0keyhfYSA9IHVzZXIuaW5pdGlhbHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGF0ZX1gLCBgdGV4dC0keyhfYiA9IHVzZXIuaW5pdGlhbHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdGF0ZX1gKSB9LCB7IGNoaWxkcmVuOiAoX2MgPSB1c2VyLmluaXRpYWxzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MubGFiZWwgfSkpKSB9KSkgfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGZsZXgtY29sdW1uJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6ICcjJywgY2xhc3NOYW1lOiAndGV4dC1ncmF5LTgwMCB0ZXh0LWhvdmVyLXByaW1hcnkgbWItMScgfSwgeyBjaGlsZHJlbjogdXNlci5uYW1lIH0pKSwgX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogdXNlci5lbWFpbCB9KV0gfSkpXSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJJbmZvQ2VsbDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlckluZm9DZWxsXCIpO1xuZXhwb3J0IHsgVXNlckluZm9DZWxsIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IFVzZXJMYXN0TG9naW5DZWxsID0gKHsgbGFzdF9sb2dpbiB9KSA9PiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnYmFkZ2UgYmFkZ2UtbGlnaHQgZnctYm9sZGVyJyB9LCB7IGNoaWxkcmVuOiBsYXN0X2xvZ2luIH0pKSk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyTGFzdExvZ2luQ2VsbDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlckxhc3RMb2dpbkNlbGxcIik7XG5leHBvcnQgeyBVc2VyTGFzdExvZ2luQ2VsbCB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi8uLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuY29uc3QgVXNlclNlbGVjdGlvbkNlbGwgPSAoeyBpZCB9KSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBzZWxlY3RlZCwgb25TZWxlY3QgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHVzZU1lbW8oKCkgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoaWQpLCBbaWQsIHNlbGVjdGVkXSk7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrIGZvcm0tY2hlY2stY3VzdG9tIGZvcm0tY2hlY2stc29saWQnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2staW5wdXQnLCB0eXBlOiAnY2hlY2tib3gnLCBcImRhdGEta3QtY2hlY2tcIjogaXNTZWxlY3RlZCwgXCJkYXRhLWt0LWNoZWNrLXRhcmdldFwiOiAnI2t0X3RhYmxlX3VzZXJzIC5mb3JtLWNoZWNrLWlucHV0JywgY2hlY2tlZDogaXNTZWxlY3RlZCwgb25DaGFuZ2U6ICgpID0+IG9uU2VsZWN0KGlkKSB9KSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJTZWxlY3Rpb25DZWxsO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyU2VsZWN0aW9uQ2VsbFwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2VyU2VsZWN0aW9uQ2VsbCwgXCJEaHJEMEhGdjRQME1MYXVkSHowa3laSmtrQlk9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXddKTtcbmV4cG9ydCB7IFVzZXJTZWxlY3Rpb25DZWxsIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmNvbnN0IFVzZXJTZWxlY3Rpb25IZWFkZXIgPSAoeyB0YWJsZVByb3BzIH0pID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IGlzQWxsU2VsZWN0ZWQsIG9uU2VsZWN0QWxsIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIHJldHVybiAoX2pzeChcInRoXCIsIE9iamVjdC5hc3NpZ24oe30sIHRhYmxlUHJvcHMuY29sdW1uLmdldEhlYWRlclByb3BzKCksIHsgY2xhc3NOYW1lOiAndy0xMHB4IHBlLTInIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2sgZm9ybS1jaGVjay1zbSBmb3JtLWNoZWNrLWN1c3RvbSBmb3JtLWNoZWNrLXNvbGlkIG1lLTMnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2staW5wdXQnLCB0eXBlOiAnY2hlY2tib3gnLCBcImRhdGEta3QtY2hlY2tcIjogaXNBbGxTZWxlY3RlZCwgXCJkYXRhLWt0LWNoZWNrLXRhcmdldFwiOiAnI2t0X3RhYmxlX3VzZXJzIC5mb3JtLWNoZWNrLWlucHV0JywgY2hlY2tlZDogaXNBbGxTZWxlY3RlZCwgb25DaGFuZ2U6IG9uU2VsZWN0QWxsIH0pIH0pKSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJTZWxlY3Rpb25IZWFkZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJTZWxlY3Rpb25IZWFkZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlclNlbGVjdGlvbkhlYWRlciwgXCJVY1BMMFA2allYODVMczBGZkFERjRxcGtkWGM9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXddKTtcbmV4cG9ydCB7IFVzZXJTZWxlY3Rpb25IZWFkZXIgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBVc2VyVHdvU3RlcHNDZWxsID0gKHsgdHdvX3N0ZXBzIH0pID0+IChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtcIiBcIiwgdHdvX3N0ZXBzICYmIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2JhZGdlIGJhZGdlLWxpZ2h0LXN1Y2Nlc3MgZnctYm9sZGVyJyB9LCB7IGNoaWxkcmVuOiBcIkVuYWJsZWRcIiB9KSldIH0pKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJUd29TdGVwc0NlbGw7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJUd29TdGVwc0NlbGxcIik7XG5leHBvcnQgeyBVc2VyVHdvU3RlcHNDZWxsIH07XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgVXNlckluZm9DZWxsIH0gZnJvbSAnLi9Vc2VySW5mb0NlbGwnO1xuaW1wb3J0IHsgVXNlckxhc3RMb2dpbkNlbGwgfSBmcm9tICcuL1VzZXJMYXN0TG9naW5DZWxsJztcbmltcG9ydCB7IFVzZXJUd29TdGVwc0NlbGwgfSBmcm9tICcuL1VzZXJUd29TdGVwc0NlbGwnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnNDZWxsIH0gZnJvbSAnLi9Vc2VyQWN0aW9uc0NlbGwnO1xuaW1wb3J0IHsgVXNlclNlbGVjdGlvbkNlbGwgfSBmcm9tICcuL1VzZXJTZWxlY3Rpb25DZWxsJztcbmltcG9ydCB7IFVzZXJDdXN0b21IZWFkZXIgfSBmcm9tICcuL1VzZXJDdXN0b21IZWFkZXInO1xuaW1wb3J0IHsgVXNlclNlbGVjdGlvbkhlYWRlciB9IGZyb20gJy4vVXNlclNlbGVjdGlvbkhlYWRlcic7XG5jb25zdCB1c2Vyc0NvbHVtbnMgPSBbXG4gICAge1xuICAgICAgICBIZWFkZXI6IChwcm9wcykgPT4gX2pzeChVc2VyU2VsZWN0aW9uSGVhZGVyLCB7IHRhYmxlUHJvcHM6IHByb3BzIH0pLFxuICAgICAgICBpZDogJ3NlbGVjdGlvbicsXG4gICAgICAgIENlbGw6IChfYSkgPT4ge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChVc2VyU2VsZWN0aW9uQ2VsbCwgeyBpZDogcHJvcHMuZGF0YVtwcm9wcy5yb3cuaW5kZXhdLmlkIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBIZWFkZXI6IChwcm9wcykgPT4gX2pzeChVc2VyQ3VzdG9tSGVhZGVyLCB7IHRhYmxlUHJvcHM6IHByb3BzLCB0aXRsZTogJ05hbWUnLCBjbGFzc05hbWU6ICdtaW4tdy0xMjVweCcgfSksXG4gICAgICAgIGlkOiAnbmFtZScsXG4gICAgICAgIENlbGw6IChfYSkgPT4ge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChVc2VySW5mb0NlbGwsIHsgdXNlcjogcHJvcHMuZGF0YVtwcm9wcy5yb3cuaW5kZXhdIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBIZWFkZXI6IChwcm9wcykgPT4gX2pzeChVc2VyQ3VzdG9tSGVhZGVyLCB7IHRhYmxlUHJvcHM6IHByb3BzLCB0aXRsZTogJ1JvbGUnLCBjbGFzc05hbWU6ICdtaW4tdy0xMjVweCcgfSksXG4gICAgICAgIGFjY2Vzc29yOiAncm9sZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIEhlYWRlcjogKHByb3BzKSA9PiAoX2pzeChVc2VyQ3VzdG9tSGVhZGVyLCB7IHRhYmxlUHJvcHM6IHByb3BzLCB0aXRsZTogJ0xhc3QgbG9naW4nLCBjbGFzc05hbWU6ICdtaW4tdy0xMjVweCcgfSkpLFxuICAgICAgICBpZDogJ2xhc3RfbG9naW4nLFxuICAgICAgICBDZWxsOiAoX2EpID0+IHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgICAgICAgICAgcmV0dXJuIF9qc3goVXNlckxhc3RMb2dpbkNlbGwsIHsgbGFzdF9sb2dpbjogcHJvcHMuZGF0YVtwcm9wcy5yb3cuaW5kZXhdLmxhc3RfbG9naW4gfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIEhlYWRlcjogKHByb3BzKSA9PiAoX2pzeChVc2VyQ3VzdG9tSGVhZGVyLCB7IHRhYmxlUHJvcHM6IHByb3BzLCB0aXRsZTogJ1R3byBzdGVwcycsIGNsYXNzTmFtZTogJ21pbi13LTEyNXB4JyB9KSksXG4gICAgICAgIGlkOiAndHdvX3N0ZXBzJyxcbiAgICAgICAgQ2VsbDogKF9hKSA9PiB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFVzZXJUd29TdGVwc0NlbGwsIHsgdHdvX3N0ZXBzOiBwcm9wcy5kYXRhW3Byb3BzLnJvdy5pbmRleF0udHdvX3N0ZXBzIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBIZWFkZXI6IChwcm9wcykgPT4gKF9qc3goVXNlckN1c3RvbUhlYWRlciwgeyB0YWJsZVByb3BzOiBwcm9wcywgdGl0bGU6ICdKb2luZWQgZGF5JywgY2xhc3NOYW1lOiAnbWluLXctMTI1cHgnIH0pKSxcbiAgICAgICAgYWNjZXNzb3I6ICdqb2luZWRfZGF5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgSGVhZGVyOiAocHJvcHMpID0+IChfanN4KFVzZXJDdXN0b21IZWFkZXIsIHsgdGFibGVQcm9wczogcHJvcHMsIHRpdGxlOiAnQWN0aW9ucycsIGNsYXNzTmFtZTogJ3RleHQtZW5kIG1pbi13LTEwMHB4JyB9KSksXG4gICAgICAgIGlkOiAnYWN0aW9ucycsXG4gICAgICAgIENlbGw6IChfYSkgPT4ge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChVc2VyQWN0aW9uc0NlbGwsIHsgaWQ6IHByb3BzLmRhdGFbcHJvcHMucm93LmluZGV4XS5pZCB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbmV4cG9ydCB7IHVzZXJzQ29sdW1ucyB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXJFZGl0TW9kYWxIZWFkZXIgfSBmcm9tICcuL1VzZXJFZGl0TW9kYWxIZWFkZXInO1xuaW1wb3J0IHsgVXNlckVkaXRNb2RhbEZvcm1XcmFwcGVyIH0gZnJvbSAnLi9Vc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXInO1xuY29uc3QgVXNlckVkaXRNb2RhbCA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21vZGFsIGZhZGUgc2hvdyBkLWJsb2NrJywgaWQ6ICdrdF9tb2RhbF9hZGRfdXNlcicsIHJvbGU6ICdkaWFsb2cnLCB0YWJJbmRleDogLTEsIFwiYXJpYS1tb2RhbFwiOiAndHJ1ZScgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtdy02NTBweCcgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21vZGFsLWNvbnRlbnQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFVzZXJFZGl0TW9kYWxIZWFkZXIsIHt9KSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbW9kYWwtYm9keSBzY3JvbGwteSBteC01IG14LXhsLTE1IG15LTcnIH0sIHsgY2hpbGRyZW46IF9qc3goVXNlckVkaXRNb2RhbEZvcm1XcmFwcGVyLCB7fSkgfSkpXSB9KSkgfSkpIH0pKSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21vZGFsLWJhY2tkcm9wIGZhZGUgc2hvdycgfSldIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyRWRpdE1vZGFsO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyRWRpdE1vZGFsXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJFZGl0TW9kYWwsIFwiT0Q3YkJwWnZhNU8yak8rUHVmMDBoS2l2UDdjPVwiKTtcbmV4cG9ydCB7IFVzZXJFZGl0TW9kYWwgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgaXNOb3RFbXB0eSwgdG9BYnNvbHV0ZVVybCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmltcG9ydCB7IGluaXRpYWxVc2VyIH0gZnJvbSAnLi4vY29yZS9fbW9kZWxzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuaW1wb3J0IHsgVXNlcnNMaXN0TG9hZGluZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZy9Vc2Vyc0xpc3RMb2FkaW5nJztcbmltcG9ydCB7IGNyZWF0ZVVzZXIsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi9jb3JlL19yZXF1ZXN0cyc7XG5pbXBvcnQgeyB1c2VRdWVyeVJlc3BvbnNlIH0gZnJvbSAnLi4vY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXInO1xuY29uc3QgZWRpdFVzZXJTY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLmVtYWlsKCdXcm9uZyBlbWFpbCBmb3JtYXQnKVxuICAgICAgICAubWluKDMsICdNaW5pbXVtIDMgc3ltYm9scycpXG4gICAgICAgIC5tYXgoNTAsICdNYXhpbXVtIDUwIHN5bWJvbHMnKVxuICAgICAgICAucmVxdWlyZWQoJ0VtYWlsIGlzIHJlcXVpcmVkJyksXG4gICAgbmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5taW4oMywgJ01pbmltdW0gMyBzeW1ib2xzJylcbiAgICAgICAgLm1heCg1MCwgJ01heGltdW0gNTAgc3ltYm9scycpXG4gICAgICAgIC5yZXF1aXJlZCgnTmFtZSBpcyByZXF1aXJlZCcpLFxufSk7XG5jb25zdCBVc2VyRWRpdE1vZGFsRm9ybSA9ICh7IHVzZXIsIGlzVXNlckxvYWRpbmcgfSkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgc2V0SXRlbUlkRm9yVXBkYXRlIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIGNvbnN0IHsgcmVmZXRjaCB9ID0gdXNlUXVlcnlSZXNwb25zZSgpO1xuICAgIGNvbnN0IFt1c2VyRm9yRWRpdF0gPSB1c2VTdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHVzZXIpLCB7IGF2YXRhcjogdXNlci5hdmF0YXIgfHwgaW5pdGlhbFVzZXIuYXZhdGFyLCByb2xlOiB1c2VyLnJvbGUgfHwgaW5pdGlhbFVzZXIucm9sZSwgcG9zaXRpb246IHVzZXIucG9zaXRpb24gfHwgaW5pdGlhbFVzZXIucG9zaXRpb24sIG5hbWU6IHVzZXIubmFtZSB8fCBpbml0aWFsVXNlci5uYW1lLCBlbWFpbDogdXNlci5lbWFpbCB8fCBpbml0aWFsVXNlci5lbWFpbCB9KSk7XG4gICAgY29uc3QgY2FuY2VsID0gKHdpdGhSZWZyZXNoKSA9PiB7XG4gICAgICAgIGlmICh3aXRoUmVmcmVzaCkge1xuICAgICAgICAgICAgcmVmZXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIHNldEl0ZW1JZEZvclVwZGF0ZSh1bmRlZmluZWQpO1xuICAgIH07XG4gICAgY29uc3QgYmxhbmtJbWcgPSB0b0Fic29sdXRlVXJsKCcvbWVkaWEvc3ZnL2F2YXRhcnMvYmxhbmsuc3ZnJyk7XG4gICAgY29uc3QgdXNlckF2YXRhckltZyA9IHRvQWJzb2x1dGVVcmwoYC9tZWRpYS8ke3VzZXJGb3JFZGl0LmF2YXRhcn1gKTtcbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgICAgICBpbml0aWFsVmFsdWVzOiB1c2VyRm9yRWRpdCxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogZWRpdFVzZXJTY2hlbWEsXG4gICAgICAgIG9uU3VibWl0OiAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOb3RFbXB0eSh2YWx1ZXMuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHVwZGF0ZVVzZXIodmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNyZWF0ZVVzZXIodmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2FuY2VsKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICB9KTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiZm9ybVwiLCBPYmplY3QuYXNzaWduKHsgaWQ6ICdrdF9tb2RhbF9hZGRfdXNlcl9mb3JtJywgY2xhc3NOYW1lOiAnZm9ybScsIG9uU3VibWl0OiBmb3JtaWsuaGFuZGxlU3VibWl0LCBub1ZhbGlkYXRlOiB0cnVlIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGZsZXgtY29sdW1uIHNjcm9sbC15IG1lLW43IHBlLTcnLCBpZDogJ2t0X21vZGFsX2FkZF91c2VyX3Njcm9sbCcsIFwiZGF0YS1rdC1zY3JvbGxcIjogJ3RydWUnLCBcImRhdGEta3Qtc2Nyb2xsLWFjdGl2YXRlXCI6ICd7ZGVmYXVsdDogZmFsc2UsIGxnOiB0cnVlfScsIFwiZGF0YS1rdC1zY3JvbGwtbWF4LWhlaWdodFwiOiAnYXV0bycsIFwiZGF0YS1rdC1zY3JvbGwtZGVwZW5kZW5jaWVzXCI6ICcja3RfbW9kYWxfYWRkX3VzZXJfaGVhZGVyJywgXCJkYXRhLWt0LXNjcm9sbC13cmFwcGVyc1wiOiAnI2t0X21vZGFsX2FkZF91c2VyX3Njcm9sbCcsIFwiZGF0YS1rdC1zY3JvbGwtb2Zmc2V0XCI6ICczMDBweCcgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdi1yb3cgbWItNycgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1ibG9jayBmdy1ib2xkIGZzLTYgbWItNScgfSwgeyBjaGlsZHJlbjogXCJBdmF0YXJcIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2ltYWdlLWlucHV0IGltYWdlLWlucHV0LW91dGxpbmUnLCBcImRhdGEta3QtaW1hZ2UtaW5wdXRcIjogJ3RydWUnLCBzdHlsZTogeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7YmxhbmtJbWd9JylgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2ltYWdlLWlucHV0LXdyYXBwZXIgdy0xMjVweCBoLTEyNXB4Jywgc3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3VzZXJBdmF0YXJJbWd9JylgIH0gfSkgfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdi1yb3cgbWItNycgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncmVxdWlyZWQgZnctYm9sZCBmcy02IG1iLTInIH0sIHsgY2hpbGRyZW46IFwiRnVsbCBOYW1lXCIgfSkpLCBfanN4KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IHBsYWNlaG9sZGVyOiAnRnVsbCBuYW1lJyB9LCBmb3JtaWsuZ2V0RmllbGRQcm9wcygnbmFtZScpLCB7IHR5cGU6ICd0ZXh0JywgbmFtZTogJ25hbWUnLCBjbGFzc05hbWU6IGNsc3goJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc29saWQgbWItMyBtYi1sZy0wJywgeyAnaXMtaW52YWxpZCc6IGZvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLXZhbGlkJzogZm9ybWlrLnRvdWNoZWQubmFtZSAmJiAhZm9ybWlrLmVycm9ycy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBhdXRvQ29tcGxldGU6ICdvZmYnLCBkaXNhYmxlZDogZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nIH0pKSwgZm9ybWlrLnRvdWNoZWQubmFtZSAmJiBmb3JtaWsuZXJyb3JzLm5hbWUgJiYgKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z2LXBsdWdpbnMtbWVzc2FnZS1jb250YWluZXInIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z2LWhlbHAtYmxvY2snIH0sIHsgY2hpbGRyZW46IF9qc3goXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyByb2xlOiAnYWxlcnQnIH0sIHsgY2hpbGRyZW46IGZvcm1pay5lcnJvcnMubmFtZSB9KSkgfSkpIH0pKSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z2LXJvdyBtYi03JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdyZXF1aXJlZCBmdy1ib2xkIGZzLTYgbWItMicgfSwgeyBjaGlsZHJlbjogXCJFbWFpbFwiIH0pKSwgX2pzeChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyBwbGFjZWhvbGRlcjogJ0VtYWlsJyB9LCBmb3JtaWsuZ2V0RmllbGRQcm9wcygnZW1haWwnKSwgeyBjbGFzc05hbWU6IGNsc3goJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc29saWQgbWItMyBtYi1sZy0wJywgeyAnaXMtaW52YWxpZCc6IGZvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtdmFsaWQnOiBmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiAhZm9ybWlrLmVycm9ycy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgdHlwZTogJ2VtYWlsJywgbmFtZTogJ2VtYWlsJywgYXV0b0NvbXBsZXRlOiAnb2ZmJywgZGlzYWJsZWQ6IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZyB9KSksIGZvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgJiYgKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z2LXBsdWdpbnMtbWVzc2FnZS1jb250YWluZXInIH0sIHsgY2hpbGRyZW46IF9qc3goXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyByb2xlOiAnYWxlcnQnIH0sIHsgY2hpbGRyZW46IGZvcm1pay5lcnJvcnMuZW1haWwgfSkpIH0pKSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21iLTcnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3JlcXVpcmVkIGZ3LWJvbGQgZnMtNiBtYi01JyB9LCB7IGNoaWxkcmVuOiBcIlJvbGVcIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBmdi1yb3cnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrIGZvcm0tY2hlY2stY3VzdG9tIGZvcm0tY2hlY2stc29saWQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2staW5wdXQgbWUtMycgfSwgZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3JvbGUnKSwgeyBuYW1lOiAncm9sZScsIHR5cGU6ICdyYWRpbycsIHZhbHVlOiAnQWRtaW5pc3RyYXRvcicsIGlkOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzAnLCBjaGVja2VkOiBmb3JtaWsudmFsdWVzLnJvbGUgPT09ICdBZG1pbmlzdHJhdG9yJywgZGlzYWJsZWQ6IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZyB9KSksIF9qc3hzKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2stbGFiZWwnLCBodG1sRm9yOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzAnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdy1ib2xkZXIgdGV4dC1ncmF5LTgwMCcgfSwgeyBjaGlsZHJlbjogXCJBZG1pbmlzdHJhdG9yXCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0ZXh0LWdyYXktNjAwJyB9LCB7IGNoaWxkcmVuOiBcIkJlc3QgZm9yIGJ1c2luZXNzIG93bmVycyBhbmQgY29tcGFueSBhZG1pbmlzdHJhdG9yc1wiIH0pKV0gfSkpXSB9KSkgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnc2VwYXJhdG9yIHNlcGFyYXRvci1kYXNoZWQgbXktNScgfSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBmdi1yb3cnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrIGZvcm0tY2hlY2stY3VzdG9tIGZvcm0tY2hlY2stc29saWQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2staW5wdXQgbWUtMycgfSwgZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3JvbGUnKSwgeyBuYW1lOiAncm9sZScsIHR5cGU6ICdyYWRpbycsIHZhbHVlOiAnRGV2ZWxvcGVyJywgaWQ6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fMScsIGNoZWNrZWQ6IGZvcm1pay52YWx1ZXMucm9sZSA9PT0gJ0RldmVsb3BlcicsIGRpc2FibGVkOiBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcgfSkpLCBfanN4cyhcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWxhYmVsJywgaHRtbEZvcjogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl8xJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnctYm9sZGVyIHRleHQtZ3JheS04MDAnIH0sIHsgY2hpbGRyZW46IFwiRGV2ZWxvcGVyXCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0ZXh0LWdyYXktNjAwJyB9LCB7IGNoaWxkcmVuOiBcIkJlc3QgZm9yIGRldmVsb3BlcnMgb3IgcGVvcGxlIHByaW1hcmlseSB1c2luZyB0aGUgQVBJXCIgfSkpXSB9KSldIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzZXBhcmF0b3Igc2VwYXJhdG9yLWRhc2hlZCBteS01JyB9KSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGZ2LXJvdycgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2sgZm9ybS1jaGVjay1jdXN0b20gZm9ybS1jaGVjay1zb2xpZCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1pbnB1dCBtZS0zJyB9LCBmb3JtaWsuZ2V0RmllbGRQcm9wcygncm9sZScpLCB7IG5hbWU6ICdyb2xlJywgdHlwZTogJ3JhZGlvJywgdmFsdWU6ICdBbmFseXN0JywgaWQ6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fMicsIGNoZWNrZWQ6IGZvcm1pay52YWx1ZXMucm9sZSA9PT0gJ0FuYWx5c3QnLCBkaXNhYmxlZDogZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nIH0pKSwgX2pzeHMoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1sYWJlbCcsIGh0bWxGb3I6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fMicgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z3LWJvbGRlciB0ZXh0LWdyYXktODAwJyB9LCB7IGNoaWxkcmVuOiBcIkFuYWx5c3RcIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RleHQtZ3JheS02MDAnIH0sIHsgY2hpbGRyZW46IFwiQmVzdCBmb3IgcGVvcGxlIHdobyBuZWVkIGZ1bGwgYWNjZXNzIHRvIGFuYWx5dGljcyBkYXRhLCBidXQgZG9uJ3QgbmVlZCB0byB1cGRhdGUgYnVzaW5lc3Mgc2V0dGluZ3NcIiB9KSldIH0pKV0gfSkpIH0pKSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NlcGFyYXRvciBzZXBhcmF0b3ItZGFzaGVkIG15LTUnIH0pLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggZnYtcm93JyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjayBmb3JtLWNoZWNrLWN1c3RvbSBmb3JtLWNoZWNrLXNvbGlkJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWlucHV0IG1lLTMnIH0sIGZvcm1pay5nZXRGaWVsZFByb3BzKCdyb2xlJyksIHsgbmFtZTogJ3JvbGUnLCB0eXBlOiAncmFkaW8nLCB2YWx1ZTogJ1N1cHBvcnQnLCBpZDogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl8zJywgY2hlY2tlZDogZm9ybWlrLnZhbHVlcy5yb2xlID09PSAnU3VwcG9ydCcsIGRpc2FibGVkOiBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcgfSkpLCBfanN4cyhcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWxhYmVsJywgaHRtbEZvcjogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl8zJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnctYm9sZGVyIHRleHQtZ3JheS04MDAnIH0sIHsgY2hpbGRyZW46IFwiU3VwcG9ydFwiIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGV4dC1ncmF5LTYwMCcgfSwgeyBjaGlsZHJlbjogXCJCZXN0IGZvciBlbXBsb3llZXMgd2hvIHJlZ3VsYXJseSByZWZ1bmQgcGF5bWVudHMgYW5kIHJlc3BvbmQgdG8gZGlzcHV0ZXNcIiB9KSldIH0pKV0gfSkpIH0pKSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NlcGFyYXRvciBzZXBhcmF0b3ItZGFzaGVkIG15LTUnIH0pLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggZnYtcm93JyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjayBmb3JtLWNoZWNrLWN1c3RvbSBmb3JtLWNoZWNrLXNvbGlkJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWlucHV0IG1lLTMnIH0sIGZvcm1pay5nZXRGaWVsZFByb3BzKCdyb2xlJyksIHsgbmFtZTogJ3JvbGUnLCB0eXBlOiAncmFkaW8nLCBpZDogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl80JywgdmFsdWU6ICdUcmlhbCcsIGNoZWNrZWQ6IGZvcm1pay52YWx1ZXMucm9sZSA9PT0gJ1RyaWFsJywgZGlzYWJsZWQ6IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZyB9KSksIF9qc3hzKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2stbGFiZWwnLCBodG1sRm9yOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdy1ib2xkZXIgdGV4dC1ncmF5LTgwMCcgfSwgeyBjaGlsZHJlbjogXCJUcmlhbFwiIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGV4dC1ncmF5LTYwMCcgfSwgeyBjaGlsZHJlbjogXCJCZXN0IGZvciBwZW9wbGUgd2hvIG5lZWQgdG8gcHJldmlldyBjb250ZW50IGRhdGEsIGJ1dCBkb24ndCBuZWVkIHRvIG1ha2UgYW55IHVwZGF0ZXNcIiB9KSldIH0pKV0gfSkpIH0pKV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0ZXh0LWNlbnRlciBwdC0xNScgfSwgeyBjaGlsZHJlbjogW19qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6ICdyZXNldCcsIG9uQ2xpY2s6ICgpID0+IGNhbmNlbCgpLCBjbGFzc05hbWU6ICdidG4gYnRuLWxpZ2h0IG1lLTMnLCBcImRhdGEta3QtdXNlcnMtbW9kYWwtYWN0aW9uXCI6ICdjYW5jZWwnLCBkaXNhYmxlZDogZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nIH0sIHsgY2hpbGRyZW46IFwiRGlzY2FyZFwiIH0pKSwgX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6ICdzdWJtaXQnLCBjbGFzc05hbWU6ICdidG4gYnRuLXByaW1hcnknLCBcImRhdGEta3QtdXNlcnMtbW9kYWwtYWN0aW9uXCI6ICdzdWJtaXQnLCBkaXNhYmxlZDogaXNVc2VyTG9hZGluZyB8fCBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8ICFmb3JtaWsuaXNWYWxpZCB8fCAhZm9ybWlrLnRvdWNoZWQgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdpbmRpY2F0b3ItbGFiZWwnIH0sIHsgY2hpbGRyZW46IFwiU3VibWl0XCIgfSkpLCAoZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nKSAmJiAoX2pzeHMoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdpbmRpY2F0b3ItcHJvZ3Jlc3MnIH0sIHsgY2hpbGRyZW46IFtcIlBsZWFzZSB3YWl0Li4uXCIsICcgJywgX2pzeChcInNwYW5cIiwgeyBjbGFzc05hbWU6ICdzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSBhbGlnbi1taWRkbGUgbXMtMicgfSldIH0pKSldIH0pKV0gfSkpXSB9KSksIChmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcpICYmIF9qc3goVXNlcnNMaXN0TG9hZGluZywge30pXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlckVkaXRNb2RhbEZvcm07XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJFZGl0TW9kYWxGb3JtXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJFZGl0TW9kYWxGb3JtLCBcIlFlMWtSSGlGNGlFelZqUXM2N0lLOGJzMmFxWT1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0VmlldywgdXNlUXVlcnlSZXNwb25zZSwgdXNlRm9ybWlrXSk7XG5leHBvcnQgeyBVc2VyRWRpdE1vZGFsRm9ybSB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFVzZXJFZGl0TW9kYWxGb3JtIH0gZnJvbSAnLi9Vc2VyRWRpdE1vZGFsRm9ybSc7XG5pbXBvcnQgeyBpc05vdEVtcHR5LCBRVUVSSUVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0VXNlckJ5SWQgfSBmcm9tICcuLi9jb3JlL19yZXF1ZXN0cyc7XG5jb25zdCBVc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBpdGVtSWRGb3JVcGRhdGUsIHNldEl0ZW1JZEZvclVwZGF0ZSB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICBjb25zdCBlbmFibGVkUXVlcnkgPSBpc05vdEVtcHR5KGl0ZW1JZEZvclVwZGF0ZSk7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGRhdGE6IHVzZXIsIGVycm9yLCB9ID0gdXNlUXVlcnkoYCR7UVVFUklFUy5VU0VSU19MSVNUfS11c2VyLSR7aXRlbUlkRm9yVXBkYXRlfWAsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldFVzZXJCeUlkKGl0ZW1JZEZvclVwZGF0ZSk7XG4gICAgfSwge1xuICAgICAgICBjYWNoZVRpbWU6IDAsXG4gICAgICAgIGVuYWJsZWQ6IGVuYWJsZWRRdWVyeSxcbiAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgc2V0SXRlbUlkRm9yVXBkYXRlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCFpdGVtSWRGb3JVcGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIF9qc3goVXNlckVkaXRNb2RhbEZvcm0sIHsgaXNVc2VyTG9hZGluZzogaXNMb2FkaW5nLCB1c2VyOiB7IGlkOiB1bmRlZmluZWQgfSB9KTtcbiAgICB9XG4gICAgaWYgKCFpc0xvYWRpbmcgJiYgIWVycm9yICYmIHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIF9qc3goVXNlckVkaXRNb2RhbEZvcm0sIHsgaXNVc2VyTG9hZGluZzogaXNMb2FkaW5nLCB1c2VyOiB1c2VyIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJFZGl0TW9kYWxGb3JtV3JhcHBlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXIsIFwiZVEzV2JCazYyaWU1YkxReVhwU2dXRFZZaEJZPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3LCB1c2VRdWVyeV0pO1xuZXhwb3J0IHsgVXNlckVkaXRNb2RhbEZvcm1XcmFwcGVyIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEtUSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmNvbnN0IFVzZXJFZGl0TW9kYWxIZWFkZXIgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBzZXRJdGVtSWRGb3JVcGRhdGUgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbW9kYWwtaGVhZGVyJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgyXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdy1ib2xkZXInIH0sIHsgY2hpbGRyZW46IFwiQWRkIFVzZXJcIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2J0biBidG4taWNvbiBidG4tc20gYnRuLWFjdGl2ZS1pY29uLXByaW1hcnknLCBcImRhdGEta3QtdXNlcnMtbW9kYWwtYWN0aW9uXCI6ICdjbG9zZScsIG9uQ2xpY2s6ICgpID0+IHNldEl0ZW1JZEZvclVwZGF0ZSh1bmRlZmluZWQpLCBzdHlsZTogeyBjdXJzb3I6ICdwb2ludGVyJyB9IH0sIHsgY2hpbGRyZW46IF9qc3goS1RJY29uLCB7IGljb25OYW1lOiAnY3Jvc3MnLCBjbGFzc05hbWU6ICdmcy0xJyB9KSB9KSldIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlckVkaXRNb2RhbEhlYWRlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlckVkaXRNb2RhbEhlYWRlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2VyRWRpdE1vZGFsSGVhZGVyLCBcIlQxdktOc056U3o5R2U0em1pRmVSZ0NPcnlLaz1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0Vmlld10pO1xuZXhwb3J0IHsgVXNlckVkaXRNb2RhbEhlYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9