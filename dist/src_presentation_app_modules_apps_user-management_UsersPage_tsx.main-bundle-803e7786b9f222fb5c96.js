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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ByZXNlbnRhdGlvbl9hcHBfbW9kdWxlc19hcHBzX3VzZXItbWFuYWdlbWVudF9Vc2Vyc1BhZ2VfdHN4Lm1haW4tYnVuZGxlLTgwM2U3Nzg2YjlmMjIyZmI1Yzk2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NGO0FBQ25CO0FBQ1I7QUFDRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLENBQUMsb0RBQU0sZUFBZSxzREFBSSxDQUFDLG1EQUFLLDJCQUEyQixzREFBSSxDQUFDLG9EQUFNLHFCQUFxQixzREFBSSxDQUFDLG1EQUFLLDRCQUE0Qix1REFBSyxDQUFDLHVEQUFTLGVBQWUsc0RBQUksQ0FBQywwREFBUyxpRkFBaUYsc0RBQUksQ0FBQyxtRUFBZ0Isa0JBQWtCLHNEQUFJLENBQUMsbURBQUssMEJBQTBCLHNEQUFJLENBQUMsc0RBQVE7QUFDdlc7QUFDQTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ6QjtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFZO0FBQ2tEO0FBQ2Q7QUFDTDtBQUNFO0FBQ0M7QUFDdEI7QUFDZ0I7QUFDVDtBQUN2RDtBQUNBO0FBQ0EsZ0NBQWdDLG1FQUFXO0FBQzNDLFlBQVksdURBQUssQ0FBQyx1REFBUyxlQUFlLHVEQUFLLENBQUMsbURBQU0sZUFBZSxzREFBSSxDQUFDLCtFQUFlLE9BQU8sc0RBQUksQ0FBQyx5REFBVSw0Q0FBNEMsc0RBQUksQ0FBQyx5RUFBYTtBQUM3SztBQUNBO0FBQ0Esc0NBQVk7QUFDWiwrRUFBK0UsK0RBQVc7QUFDMUYsZ0NBQWdDLHNEQUFJLENBQUMsNEVBQW9CLGNBQWMsc0RBQUksQ0FBQyw4RUFBcUIsY0FBYyxzREFBSSxD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LHdCQUF3Qix1Q0FBWTtBQUMyQjtBQUNMO0FBQ0g7QUFDdkQ7QUFDQTtBQUNBLG1DQUFtQyxtRUFBVztBQUM5QyxZQUFZLHVEQUFLLGtFQUFrRSxzREFBSSw2RUFBNkUsc0RBQUksbU5BQW1OLHNEQUFJLENBQUMsbURBQU07QUFDdFk7QUFDQTtBQUNBLHNDQUFZO0FBQ1oseUZBQXlGLCtEQUFXO0FBQ3JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L1VzZXJzUGFnZS50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvVXNlcnNMaXN0LnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb21wb25lbnRzL2hlYWRlci9Vc2VyTGlzdFRvb2xiYXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvbXBvbmVudHMvaGVhZGVyL1VzZXJzTGlzdEZpbHRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29tcG9uZW50cy9oZWFkZXIvVXNlcnNMaXN0R3JvdXBpbmcudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvbXBvbmVudHMvaGVhZGVyL1VzZXJzTGlzdEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29tcG9uZW50cy9oZWFkZXIvVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb21wb25lbnRzL2xvYWRpbmcvVXNlcnNMaXN0TG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29tcG9uZW50cy9wYWdpbmF0aW9uL1VzZXJzTGlzdFBhZ2luYXRpb24udHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvcmUvTGlzdFZpZXdQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29yZS9RdWVyeVJlcXVlc3RQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L2NvcmUvX21vZGVscy50cyIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC9jb3JlL19yZXF1ZXN0cy50cyIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9Vc2Vyc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL0N1c3RvbUhlYWRlckNvbHVtbi50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9DdXN0b21Sb3cudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvVXNlckFjdGlvbnNDZWxsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL1VzZXJDdXN0b21IZWFkZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvVXNlckluZm9DZWxsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL1VzZXJMYXN0TG9naW5DZWxsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL1VzZXJTZWxlY3Rpb25DZWxsLnRzeCIsIndlYnBhY2s6Ly9yb3V0aW5lbHkvcm91dGluZWx5L3JvdXRpbmVseS8uL3NyYy9wcmVzZW50YXRpb24vYXBwL21vZHVsZXMvYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMtbGlzdC90YWJsZS9jb2x1bW5zL1VzZXJTZWxlY3Rpb25IZWFkZXIudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3RhYmxlL2NvbHVtbnMvVXNlclR3b1N0ZXBzQ2VsbC50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdGFibGUvY29sdW1ucy9fY29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdXNlci1lZGl0LW1vZGFsL1VzZXJFZGl0TW9kYWwudHN4Iiwid2VicGFjazovL3JvdXRpbmVseS9yb3V0aW5lbHkvcm91dGluZWx5Ly4vc3JjL3ByZXNlbnRhdGlvbi9hcHAvbW9kdWxlcy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy1saXN0L3VzZXItZWRpdC1tb2RhbC9Vc2VyRWRpdE1vZGFsRm9ybS50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdXNlci1lZGl0LW1vZGFsL1VzZXJFZGl0TW9kYWxGb3JtV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vcm91dGluZWx5L3JvdXRpbmVseS9yb3V0aW5lbHkvLi9zcmMvcHJlc2VudGF0aW9uL2FwcC9tb2R1bGVzL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzLWxpc3QvdXNlci1lZGl0LW1vZGFsL1VzZXJFZGl0TW9kYWxIZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBOYXZpZ2F0ZSwgT3V0bGV0LCBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQYWdlVGl0bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvbGF5b3V0L2NvcmUnO1xuaW1wb3J0IHsgVXNlcnNMaXN0V3JhcHBlciB9IGZyb20gJy4vdXNlcnMtbGlzdC9Vc2Vyc0xpc3QnO1xuY29uc3QgdXNlcnNCcmVhZGNydW1icyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnVXNlciBNYW5hZ2VtZW50JyxcbiAgICAgICAgcGF0aDogJy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2VycycsXG4gICAgICAgIGlzU2VwYXJhdG9yOiBmYWxzZSxcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBpc1NlcGFyYXRvcjogdHJ1ZSxcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgIH0sXG5dO1xuY29uc3QgVXNlcnNQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoX2pzeHMoUm91dGVzLCB7IGNoaWxkcmVuOiBbX2pzeChSb3V0ZSwgT2JqZWN0LmFzc2lnbih7IGVsZW1lbnQ6IF9qc3goT3V0bGV0LCB7fSkgfSwgeyBjaGlsZHJlbjogX2pzeChSb3V0ZSwgeyBwYXRoOiAndXNlcnMnLCBlbGVtZW50OiBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFBhZ2VUaXRsZSwgT2JqZWN0LmFzc2lnbih7IGJyZWFkY3J1bWJzOiB1c2Vyc0JyZWFkY3J1bWJzIH0sIHsgY2hpbGRyZW46IFwiVXNlcnMgbGlzdFwiIH0pKSwgX2pzeChVc2Vyc0xpc3RXcmFwcGVyLCB7fSldIH0pIH0pIH0pKSwgX2pzeChSb3V0ZSwgeyBpbmRleDogdHJ1ZSwgZWxlbWVudDogX2pzeChOYXZpZ2F0ZSwgeyB0bzogJy9hcHBzL3VzZXItbWFuYWdlbWVudC91c2VycycgfSkgfSldIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc1BhZ2U7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzUGFnZVwiKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJzUGFnZTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzM7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzMgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IExpc3RWaWV3UHJvdmlkZXIsIHVzZUxpc3RWaWV3IH0gZnJvbSAnLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuaW1wb3J0IHsgUXVlcnlSZXF1ZXN0UHJvdmlkZXIgfSBmcm9tICcuL2NvcmUvUXVlcnlSZXF1ZXN0UHJvdmlkZXInO1xuaW1wb3J0IHsgUXVlcnlSZXNwb25zZVByb3ZpZGVyIH0gZnJvbSAnLi9jb3JlL1F1ZXJ5UmVzcG9uc2VQcm92aWRlcic7XG5pbXBvcnQgeyBVc2Vyc0xpc3RIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL1VzZXJzTGlzdEhlYWRlcic7XG5pbXBvcnQgeyBVc2Vyc1RhYmxlIH0gZnJvbSAnLi90YWJsZS9Vc2Vyc1RhYmxlJztcbmltcG9ydCB7IFVzZXJFZGl0TW9kYWwgfSBmcm9tICcuL3VzZXItZWRpdC1tb2RhbC9Vc2VyRWRpdE1vZGFsJztcbmltcG9ydCB7IEtUQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmNvbnN0IFVzZXJzTGlzdCA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzMoKTtcbiAgICBjb25zdCB7IGl0ZW1JZEZvclVwZGF0ZSB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKEtUQ2FyZCwgeyBjaGlsZHJlbjogW19qc3goVXNlcnNMaXN0SGVhZGVyLCB7fSksIF9qc3goVXNlcnNUYWJsZSwge30pXSB9KSwgaXRlbUlkRm9yVXBkYXRlICE9PSB1bmRlZmluZWQgJiYgX2pzeChVc2VyRWRpdE1vZGFsLCB7fSldIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc0xpc3Q7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzTGlzdFwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMyhVc2Vyc0xpc3QsIFwiY0pzMjVmTmNIN3lrTHVTVFZjSHgvUlpma3VRPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3XSk7XG5jb25zdCBVc2Vyc0xpc3RXcmFwcGVyID0gKCkgPT4gKF9qc3goUXVlcnlSZXF1ZXN0UHJvdmlkZXIsIHsgY2hpbGRyZW46IF9qc3goUXVlcnlSZXNwb25zZVByb3ZpZGVyLCB7IGNoaWxkcmVuOiBfanN4KExpc3RWaWV3UHJvdmlkZXIsIHsgY2hpbGRyZW46IF9qc3goVXNlcnNMaXN0LCB7fSkgfSkgfSkgfSkpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gVXNlcnNMaXN0V3JhcHBlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzIsIFwiVXNlcnNMaXN0V3JhcHBlclwiKTtcbmV4cG9ydCB7IFVzZXJzTGlzdFdyYXBwZXIgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgS1RJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi8uLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuaW1wb3J0IHsgVXNlcnNMaXN0RmlsdGVyIH0gZnJvbSAnLi9Vc2Vyc0xpc3RGaWx0ZXInO1xuY29uc3QgVXNlcnNMaXN0VG9vbGJhciA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHNldEl0ZW1JZEZvclVwZGF0ZSB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICBjb25zdCBvcGVuQWRkVXNlck1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRJdGVtSWRGb3JVcGRhdGUobnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcsIFwiZGF0YS1rdC11c2VyLXRhYmxlLXRvb2xiYXJcIjogJ2Jhc2UnIH0sIHsgY2hpbGRyZW46IFtfanN4KFVzZXJzTGlzdEZpbHRlciwge30pLCBfanN4cyhcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogJ2J1dHRvbicsIGNsYXNzTmFtZTogJ2J0biBidG4tbGlnaHQtcHJpbWFyeSBtZS0zJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChLVEljb24sIHsgaWNvbk5hbWU6ICdleGl0LXVwJywgY2xhc3NOYW1lOiAnZnMtMicgfSksIFwiRXhwb3J0XCJdIH0pKSwgX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6ICdidG4gYnRuLXByaW1hcnknLCBvbkNsaWNrOiBvcGVuQWRkVXNlck1vZGFsIH0sIHsgY2hpbGRyZW46IFtfanN4KEtUSWNvbiwgeyBpY29uTmFtZTogJ3BsdXMnLCBjbGFzc05hbWU6ICdmcy0yJyB9KSwgXCJBZGQgVXNlclwiXSB9KSldIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNMaXN0VG9vbGJhcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNMaXN0VG9vbGJhclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2Vyc0xpc3RUb29sYmFyLCBcIlQxdktOc056U3o5R2U0em1pRmVSZ0NPcnlLaz1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0Vmlld10pO1xuZXhwb3J0IHsgVXNlcnNMaXN0VG9vbGJhciB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2Fzc2V0cy90cy9jb21wb25lbnRzJztcbmltcG9ydCB7IGluaXRpYWxRdWVyeVN0YXRlLCBLVEljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VRdWVyeVJlcXVlc3QgfSBmcm9tICcuLi8uLi9jb3JlL1F1ZXJ5UmVxdWVzdFByb3ZpZGVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9jb3JlL1F1ZXJ5UmVzcG9uc2VQcm92aWRlcic7XG5jb25zdCBVc2Vyc0xpc3RGaWx0ZXIgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyB1cGRhdGVTdGF0ZSB9ID0gdXNlUXVlcnlSZXF1ZXN0KCk7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtsYXN0TG9naW4sIHNldExhc3RMb2dpbl0gPSB1c2VTdGF0ZSgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIE1lbnVDb21wb25lbnQucmVpbml0aWFsaXphdGlvbigpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCByZXNldERhdGEgPSAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKE9iamVjdC5hc3NpZ24oeyBmaWx0ZXI6IHVuZGVmaW5lZCB9LCBpbml0aWFsUXVlcnlTdGF0ZSkpO1xuICAgIH07XG4gICAgY29uc3QgZmlsdGVyRGF0YSA9ICgpID0+IHtcbiAgICAgICAgdXBkYXRlU3RhdGUoT2JqZWN0LmFzc2lnbih7IGZpbHRlcjogeyByb2xlLCBsYXN0X2xvZ2luOiBsYXN0TG9naW4gfSB9LCBpbml0aWFsUXVlcnlTdGF0ZSkpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzTG9hZGluZywgdHlwZTogJ2J1dHRvbicsIGNsYXNzTmFtZTogJ2J0biBidG4tbGlnaHQtcHJpbWFyeSBtZS0zJywgXCJkYXRhLWt0LW1lbnUtdHJpZ2dlclwiOiAnY2xpY2snLCBcImRhdGEta3QtbWVudS1wbGFjZW1lbnRcIjogJ2JvdHRvbS1lbmQnIH0sIHsgY2hpbGRyZW46IFtfanN4KEtUSWNvbiwgeyBpY29uTmFtZTogJ2ZpbHRlcicsIGNsYXNzTmFtZTogJ2ZzLTInIH0pLCBcIkZpbHRlclwiXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtZW51IG1lbnUtc3ViIG1lbnUtc3ViLWRyb3Bkb3duIHctMzAwcHggdy1tZC0zMjVweCcsIFwiZGF0YS1rdC1tZW51XCI6ICd0cnVlJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncHgtNyBweS01JyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmcy01IHRleHQtZGFyayBmdy1ib2xkZXInIH0sIHsgY2hpbGRyZW46IFwiRmlsdGVyIE9wdGlvbnNcIiB9KSkgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnc2VwYXJhdG9yIGJvcmRlci1ncmF5LTIwMCcgfSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdweC03IHB5LTUnLCBcImRhdGEta3QtdXNlci10YWJsZS1maWx0ZXJcIjogJ2Zvcm0nIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnbWItMTAnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tbGFiZWwgZnMtNiBmdy1ib2xkJyB9LCB7IGNoaWxkcmVuOiBcIlJvbGU6XCIgfSkpLCBfanN4cyhcInNlbGVjdFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc29saWQgZnctYm9sZGVyJywgXCJkYXRhLWt0LXNlbGVjdDJcIjogJ3RydWUnLCBcImRhdGEtcGxhY2Vob2xkZXJcIjogJ1NlbGVjdCBvcHRpb24nLCBcImRhdGEtYWxsb3ctY2xlYXJcIjogJ3RydWUnLCBcImRhdGEta3QtdXNlci10YWJsZS1maWx0ZXJcIjogJ3JvbGUnLCBcImRhdGEtaGlkZS1zZWFyY2hcIjogJ3RydWUnLCBvbkNoYW5nZTogKGUpID0+IHNldFJvbGUoZS50YXJnZXQudmFsdWUpLCB2YWx1ZTogcm9sZSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCB7IHZhbHVlOiAnJyB9KSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICdBZG1pbmlzdHJhdG9yJyB9LCB7IGNoaWxkcmVuOiBcIkFkbWluaXN0cmF0b3JcIiB9KSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnQW5hbHlzdCcgfSwgeyBjaGlsZHJlbjogXCJBbmFseXN0XCIgfSkpLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJ0RldmVsb3BlcicgfSwgeyBjaGlsZHJlbjogXCJEZXZlbG9wZXJcIiB9KSksIF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnU3VwcG9ydCcgfSwgeyBjaGlsZHJlbjogXCJTdXBwb3J0XCIgfSkpLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJ1RyaWFsJyB9LCB7IGNoaWxkcmVuOiBcIlRyaWFsXCIgfSkpXSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21iLTEwJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWxhYmVsIGZzLTYgZnctYm9sZCcgfSwgeyBjaGlsZHJlbjogXCJMYXN0IGxvZ2luOlwiIH0pKSwgX2pzeHMoXCJzZWxlY3RcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNvbGlkIGZ3LWJvbGRlcicsIFwiZGF0YS1rdC1zZWxlY3QyXCI6ICd0cnVlJywgXCJkYXRhLXBsYWNlaG9sZGVyXCI6ICdTZWxlY3Qgb3B0aW9uJywgXCJkYXRhLWFsbG93LWNsZWFyXCI6ICd0cnVlJywgXCJkYXRhLWt0LXVzZXItdGFibGUtZmlsdGVyXCI6ICd0d28tc3RlcCcsIFwiZGF0YS1oaWRlLXNlYXJjaFwiOiAndHJ1ZScsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0TGFzdExvZ2luKGUudGFyZ2V0LnZhbHVlKSwgdmFsdWU6IGxhc3RMb2dpbiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCB7IHZhbHVlOiAnJyB9KSwgX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICdZZXN0ZXJkYXknIH0sIHsgY2hpbGRyZW46IFwiWWVzdGVyZGF5XCIgfSkpLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJzIwIG1pbnMgYWdvJyB9LCB7IGNoaWxkcmVuOiBcIjIwIG1pbnMgYWdvXCIgfSkpLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJzUgaG91cnMgYWdvJyB9LCB7IGNoaWxkcmVuOiBcIjUgaG91cnMgYWdvXCIgfSkpLCBfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJzIgZGF5cyBhZ28nIH0sIHsgY2hpbGRyZW46IFwiMiBkYXlzIGFnb1wiIH0pKV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6ICdidXR0b24nLCBkaXNhYmxlZDogaXNMb2FkaW5nLCBvbkNsaWNrOiBmaWx0ZXJEYXRhLCBjbGFzc05hbWU6ICdidG4gYnRuLWxpZ2h0IGJ0bi1hY3RpdmUtbGlnaHQtcHJpbWFyeSBmdy1ib2xkIG1lLTIgcHgtNicsIFwiZGF0YS1rdC1tZW51LWRpc21pc3NcIjogJ3RydWUnLCBcImRhdGEta3QtdXNlci10YWJsZS1maWx0ZXJcIjogJ3Jlc2V0JyB9LCB7IGNoaWxkcmVuOiBcIlJlc2V0XCIgfSkpLCBfanN4KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNMb2FkaW5nLCB0eXBlOiAnYnV0dG9uJywgb25DbGljazogcmVzZXREYXRhLCBjbGFzc05hbWU6ICdidG4gYnRuLXByaW1hcnkgZnctYm9sZCBweC02JywgXCJkYXRhLWt0LW1lbnUtZGlzbWlzc1wiOiAndHJ1ZScsIFwiZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlclwiOiAnZmlsdGVyJyB9LCB7IGNoaWxkcmVuOiBcIkFwcGx5XCIgfSkpXSB9KSldIH0pKV0gfSkpXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlcnNMaXN0RmlsdGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc0xpc3RGaWx0ZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlcnNMaXN0RmlsdGVyLCBcIi91ZEF1Si9HZkRyVy9UZjN3d2tzMGcxQ04yND1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlcXVlc3QsIHVzZVF1ZXJ5UmVzcG9uc2VdKTtcbmV4cG9ydCB7IFVzZXJzTGlzdEZpbHRlciB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50LCB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFFVRVJJRVMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uLy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5pbXBvcnQgeyB1c2VRdWVyeVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXInO1xuaW1wb3J0IHsgZGVsZXRlU2VsZWN0ZWRVc2VycyB9IGZyb20gJy4uLy4uL2NvcmUvX3JlcXVlc3RzJztcbmNvbnN0IFVzZXJzTGlzdEdyb3VwaW5nID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIGNsZWFyU2VsZWN0ZWQgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICBjb25zdCBkZWxldGVTZWxlY3RlZEl0ZW1zID0gdXNlTXV0YXRpb24oKCkgPT4gZGVsZXRlU2VsZWN0ZWRVc2VycyhzZWxlY3RlZCksIHtcbiAgICAgICAgLy8g8J+SoSByZXNwb25zZSBvZiB0aGUgbXV0YXRpb24gaXMgcGFzc2VkIHRvIG9uU3VjY2Vzc1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIOKchSB1cGRhdGUgZGV0YWlsIHZpZXcgZGlyZWN0bHlcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtgJHtRVUVSSUVTLlVTRVJTX0xJU1R9LSR7cXVlcnl9YF0pO1xuICAgICAgICAgICAgY2xlYXJTZWxlY3RlZCgpO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWNlbnRlcicgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdy1ib2xkZXIgbWUtNScgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtZS0yJyB9LCB7IGNoaWxkcmVuOiBzZWxlY3RlZC5sZW5ndGggfSkpLCBcIiBTZWxlY3RlZFwiXSB9KSksIF9qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6ICdidG4gYnRuLWRhbmdlcicsIG9uQ2xpY2s6ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgZGVsZXRlU2VsZWN0ZWRJdGVtcy5tdXRhdGVBc3luYygpOyB9KSB9LCB7IGNoaWxkcmVuOiBcIkRlbGV0ZSBTZWxlY3RlZFwiIH0pKV0gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc0xpc3RHcm91cGluZztcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNMaXN0R3JvdXBpbmdcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlcnNMaXN0R3JvdXBpbmcsIFwib1kvY1UvTytaSjA3elVDZHM4TnpsVi9xdWxVPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3LCB1c2VRdWVyeUNsaWVudCwgdXNlUXVlcnlSZXNwb25zZSwgdXNlTXV0YXRpb25dKTtcbmV4cG9ydCB7IFVzZXJzTGlzdEdyb3VwaW5nIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmltcG9ydCB7IFVzZXJzTGlzdFRvb2xiYXIgfSBmcm9tICcuL1VzZXJMaXN0VG9vbGJhcic7XG5pbXBvcnQgeyBVc2Vyc0xpc3RHcm91cGluZyB9IGZyb20gJy4vVXNlcnNMaXN0R3JvdXBpbmcnO1xuaW1wb3J0IHsgVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9Vc2Vyc0xpc3RTZWFyY2hDb21wb25lbnQnO1xuY29uc3QgVXNlcnNMaXN0SGVhZGVyID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnY2FyZC1oZWFkZXIgYm9yZGVyLTAgcHQtNicgfSwgeyBjaGlsZHJlbjogW19qc3goVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50LCB7fSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2NhcmQtdG9vbGJhcicgfSwgeyBjaGlsZHJlbjogc2VsZWN0ZWQubGVuZ3RoID4gMCA/IF9qc3goVXNlcnNMaXN0R3JvdXBpbmcsIHt9KSA6IF9qc3goVXNlcnNMaXN0VG9vbGJhciwge30pIH0pKV0gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc0xpc3RIZWFkZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJzTGlzdEhlYWRlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2Vyc0xpc3RIZWFkZXIsIFwiYTMyREEwY21qZkJaRmdFNjdBYUpnbXlvaEpZPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3XSk7XG5leHBvcnQgeyBVc2Vyc0xpc3RIZWFkZXIgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdGlhbFF1ZXJ5U3RhdGUsIEtUSWNvbiwgdXNlRGVib3VuY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VRdWVyeVJlcXVlc3QgfSBmcm9tICcuLi8uLi9jb3JlL1F1ZXJ5UmVxdWVzdFByb3ZpZGVyJztcbmNvbnN0IFVzZXJzTGlzdFNlYXJjaENvbXBvbmVudCA9ICgpID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHVwZGF0ZVN0YXRlIH0gPSB1c2VRdWVyeVJlcXVlc3QoKTtcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgLy8gRGVib3VuY2Ugc2VhcmNoIHRlcm0gc28gdGhhdCBpdCBvbmx5IGdpdmVzIHVzIGxhdGVzdCB2YWx1ZSAuLi5cbiAgICAvLyAuLi4gaWYgc2VhcmNoVGVybSBoYXMgbm90IGJlZW4gdXBkYXRlZCB3aXRoaW4gbGFzdCA1MDBtcy5cbiAgICAvLyBUaGUgZ29hbCBpcyB0byBvbmx5IGhhdmUgdGhlIEFQSSBjYWxsIGZpcmUgd2hlbiB1c2VyIHN0b3BzIHR5cGluZyAuLi5cbiAgICAvLyAuLi4gc28gdGhhdCB3ZSBhcmVuJ3QgaGl0dGluZyBvdXIgQVBJIHJhcGlkbHkuXG4gICAgY29uc3QgZGVib3VuY2VkU2VhcmNoVGVybSA9IHVzZURlYm91bmNlKHNlYXJjaFRlcm0sIDE1MCk7XG4gICAgLy8gRWZmZWN0IGZvciBBUEkgY2FsbFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkZWJvdW5jZWRTZWFyY2hUZXJtICE9PSB1bmRlZmluZWQgJiYgc2VhcmNoVGVybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB1cGRhdGVTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VhcmNoOiBkZWJvdW5jZWRTZWFyY2hUZXJtIH0sIGluaXRpYWxRdWVyeVN0YXRlKSk7XG4gICAgICAgIH1cbiAgICB9LCBbZGVib3VuY2VkU2VhcmNoVGVybV0gLy8gT25seSBjYWxsIGVmZmVjdCBpZiBkZWJvdW5jZWQgc2VhcmNoIHRlcm0gY2hhbmdlc1xuICAgIC8vIE1vcmUgZGV0YWlscyBhYm91dCB1c2VEZWJvdW5jZTogaHR0cHM6Ly91c2Vob29rcy5jb20vdXNlRGVib3VuY2UvXG4gICAgKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2NhcmQtdGl0bGUnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIG15LTEnIH0sIHsgY2hpbGRyZW46IFtfanN4KEtUSWNvbiwgeyBpY29uTmFtZTogJ21hZ25pZmllcicsIGNsYXNzTmFtZTogJ2ZzLTEgcG9zaXRpb24tYWJzb2x1dGUgbXMtNicgfSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6ICd0ZXh0JywgXCJkYXRhLWt0LXVzZXItdGFibGUtZmlsdGVyXCI6ICdzZWFyY2gnLCBjbGFzc05hbWU6ICdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNvbGlkIHctMjUwcHggcHMtMTQnLCBwbGFjZWhvbGRlcjogJ1NlYXJjaCB1c2VyJywgdmFsdWU6IHNlYXJjaFRlcm0sIG9uQ2hhbmdlOiAoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSkgfSldIH0pKSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJzTGlzdFNlYXJjaENvbXBvbmVudDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50XCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJzTGlzdFNlYXJjaENvbXBvbmVudCwgXCJONXQxZ1hSVFoyVnVUbFo3QTVCRXBsWUpUVWc9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXF1ZXN0LCB1c2VEZWJvdW5jZV0pO1xuZXhwb3J0IHsgVXNlcnNMaXN0U2VhcmNoQ29tcG9uZW50IH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IFVzZXJzTGlzdExvYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjQ3NXJlbScsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMCA1MHB4IDAgcmdiKDgyIDYzIDEwNSAvIDE1JSknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgY29sb3I6ICcjN2U4Mjk5JyxcbiAgICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBwYWRkaW5nOiAnMXJlbSAycmVtJyxcbiAgICAgICAgdG9wOiAnY2FsYyg1MCUgLSAycmVtKScsXG4gICAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDRyZW0pJyxcbiAgICB9O1xuICAgIHJldHVybiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBzdHlsZTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMpLCB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH0pIH0sIHsgY2hpbGRyZW46IFwiUHJvY2Vzc2luZy4uLlwiIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc0xpc3RMb2FkaW5nO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc0xpc3RMb2FkaW5nXCIpO1xuZXhwb3J0IHsgVXNlcnNMaXN0TG9hZGluZyB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXNwb25zZUxvYWRpbmcsIHVzZVF1ZXJ5UmVzcG9uc2VQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vY29yZS9RdWVyeVJlcXVlc3RQcm92aWRlcic7XG5jb25zdCBtYXBwZWRMYWJlbCA9IChsYWJlbCkgPT4ge1xuICAgIGlmIChsYWJlbCA9PT0gJyZsYXF1bzsgUHJldmlvdXMnKSB7XG4gICAgICAgIHJldHVybiAnUHJldmlvdXMnO1xuICAgIH1cbiAgICBpZiAobGFiZWwgPT09ICdOZXh0ICZyYXF1bzsnKSB7XG4gICAgICAgIHJldHVybiAnTmV4dCc7XG4gICAgfVxuICAgIHJldHVybiBsYWJlbDtcbn07XG5jb25zdCBVc2Vyc0xpc3RQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gdXNlUXVlcnlSZXNwb25zZVBhZ2luYXRpb24oKTtcbiAgICBjb25zdCBpc0xvYWRpbmcgPSB1c2VRdWVyeVJlc3BvbnNlTG9hZGluZygpO1xuICAgIGNvbnN0IHsgdXBkYXRlU3RhdGUgfSA9IHVzZVF1ZXJ5UmVxdWVzdCgpO1xuICAgIGNvbnN0IHVwZGF0ZVBhZ2UgPSAocGFnZSkgPT4ge1xuICAgICAgICBpZiAoIXBhZ2UgfHwgaXNMb2FkaW5nIHx8IHBhZ2luYXRpb24ucGFnZSA9PT0gcGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVN0YXRlKHsgcGFnZSwgaXRlbXNfcGVyX3BhZ2U6IHBhZ2luYXRpb24uaXRlbXNfcGVyX3BhZ2UgfHwgMTAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdyb3cnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnY29sLXNtLTEyIGNvbC1tZC01IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtc3RhcnQnIH0pLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdjb2wtc20tMTIgY29sLW1kLTcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1lbmQnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGlkOiAna3RfdGFibGVfdXNlcnNfcGFnaW5hdGUnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJ1bFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncGFnaW5hdGlvbicgfSwgeyBjaGlsZHJlbjogKF9hID0gcGFnaW5hdGlvbi5saW5rcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1hcCgobGluaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGxpbmspLCB7IGxhYmVsOiBtYXBwZWRMYWJlbChsaW5rLmxhYmVsKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcCgobGluaykgPT4gKF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbHN4KCdwYWdlLWl0ZW0nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcGFnaW5hdGlvbi5wYWdlID09PSBsaW5rLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiBsaW5rLmxhYmVsID09PSAnUHJldmlvdXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBsaW5rLmxhYmVsID09PSAnTmV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xzeCgncGFnZS1saW5rJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhZ2UtdGV4dCc6IGxpbmsubGFiZWwgPT09ICdQcmV2aW91cycgfHwgbGluay5sYWJlbCA9PT0gJ05leHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lLTUnOiBsaW5rLmxhYmVsID09PSAnUHJldmlvdXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgb25DbGljazogKCkgPT4gdXBkYXRlUGFnZShsaW5rLnBhZ2UpLCBzdHlsZTogeyBjdXJzb3I6ICdwb2ludGVyJyB9IH0sIHsgY2hpbGRyZW46IG1hcHBlZExhYmVsKGxpbmsubGFiZWwpIH0pKSB9KSwgbGluay5sYWJlbCkpKSB9KSkgfSkpIH0pKV0gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc0xpc3RQYWdpbmF0aW9uO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc0xpc3RQYWdpbmF0aW9uXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJzTGlzdFBhZ2luYXRpb24sIFwiYm5OQlV0dmJoR1Q3cXRtelJjOWt4MFVDTkJBPVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVzcG9uc2VQYWdpbmF0aW9uLCB1c2VRdWVyeVJlc3BvbnNlTG9hZGluZywgdXNlUXVlcnlSZXF1ZXN0XSk7XG5leHBvcnQgeyBVc2Vyc0xpc3RQYWdpbmF0aW9uIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMiwgX3JlYWN0X3JlZnJlc2hfdGVtcF8zO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzMgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNhbGN1bGF0ZWRHcm91cGluZ0lzRGlzYWJsZWQsIGNhbGN1bGF0ZUlzQWxsRGF0YVNlbGVjdGVkLCBncm91cGluZ09uU2VsZWN0LCBpbml0aWFsTGlzdFZpZXcsIGdyb3VwaW5nT25TZWxlY3RBbGwsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXNwb25zZSwgdXNlUXVlcnlSZXNwb25zZURhdGEgfSBmcm9tICcuL1F1ZXJ5UmVzcG9uc2VQcm92aWRlcic7XG5jb25zdCBMaXN0Vmlld0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxMaXN0Vmlldyk7XG5jb25zdCBMaXN0Vmlld1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoaW5pdGlhbExpc3RWaWV3LnNlbGVjdGVkKTtcbiAgICBjb25zdCBbaXRlbUlkRm9yVXBkYXRlLCBzZXRJdGVtSWRGb3JVcGRhdGVdID0gdXNlU3RhdGUoaW5pdGlhbExpc3RWaWV3Lml0ZW1JZEZvclVwZGF0ZSk7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICBjb25zdCBkYXRhID0gdXNlUXVlcnlSZXNwb25zZURhdGEoKTtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHVzZU1lbW8oKCkgPT4gY2FsY3VsYXRlZEdyb3VwaW5nSXNEaXNhYmxlZChpc0xvYWRpbmcsIGRhdGEpLCBbaXNMb2FkaW5nLCBkYXRhXSk7XG4gICAgY29uc3QgaXNBbGxTZWxlY3RlZCA9IHVzZU1lbW8oKCkgPT4gY2FsY3VsYXRlSXNBbGxEYXRhU2VsZWN0ZWQoZGF0YSwgc2VsZWN0ZWQpLCBbZGF0YSwgc2VsZWN0ZWRdKTtcbiAgICByZXR1cm4gKF9qc3goTGlzdFZpZXdDb250ZXh0LlByb3ZpZGVyLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgaXRlbUlkRm9yVXBkYXRlLFxuICAgICAgICAgICAgc2V0SXRlbUlkRm9yVXBkYXRlLFxuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkLFxuICAgICAgICAgICAgb25TZWxlY3Q6IChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyb3VwaW5nT25TZWxlY3QoaWQsIHNlbGVjdGVkLCBzZXRTZWxlY3RlZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TZWxlY3RBbGw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBncm91cGluZ09uU2VsZWN0QWxsKGlzQWxsU2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhclNlbGVjdGVkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoW10pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IExpc3RWaWV3UHJvdmlkZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIkxpc3RWaWV3UHJvdmlkZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoTGlzdFZpZXdQcm92aWRlciwgXCI3WmRwQ0tQc2RmUW9vNThYRFlzdExicWtGZ009XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXNwb25zZSwgdXNlUXVlcnlSZXNwb25zZURhdGFdKTtcbmNvbnN0IHVzZUxpc3RWaWV3ID0gKCkgPT4gKF9yZWFjdF9yZWZyZXNoX3RlbXBfMygpLCB1c2VDb250ZXh0KExpc3RWaWV3Q29udGV4dCkpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zKHVzZUxpc3RWaWV3LCBcImdEc0NqZWVJdFV1dmdPV2YxdjRxb0s5UkY2az1cIik7XG5leHBvcnQgeyBMaXN0Vmlld1Byb3ZpZGVyLCB1c2VMaXN0VmlldyB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzIsIF9yZWFjdF9yZWZyZXNoX3RlbXBfMztcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8zID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbml0aWFsUXVlcnlSZXF1ZXN0LCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmNvbnN0IFF1ZXJ5UmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxRdWVyeVJlcXVlc3QpO1xuY29uc3QgUXVlcnlSZXF1ZXN0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsUXVlcnlSZXF1ZXN0LnN0YXRlKTtcbiAgICBjb25zdCB1cGRhdGVTdGF0ZSA9ICh1cGRhdGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB1cGRhdGVzKTtcbiAgICAgICAgc2V0U3RhdGUodXBkYXRlZFN0YXRlKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChRdWVyeVJlcXVlc3RDb250ZXh0LlByb3ZpZGVyLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IHsgc3RhdGUsIHVwZGF0ZVN0YXRlIH0gfSwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBRdWVyeVJlcXVlc3RQcm92aWRlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiUXVlcnlSZXF1ZXN0UHJvdmlkZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoUXVlcnlSZXF1ZXN0UHJvdmlkZXIsIFwiRDdhRHFOK0Q3YjNWV1FJU2IrektVN2ZWUEVjPVwiKTtcbmNvbnN0IHVzZVF1ZXJ5UmVxdWVzdCA9ICgpID0+IChfcmVhY3RfcmVmcmVzaF90ZW1wXzMoKSwgdXNlQ29udGV4dChRdWVyeVJlcXVlc3RDb250ZXh0KSk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzModXNlUXVlcnlSZXF1ZXN0LCBcImdEc0NqZWVJdFV1dmdPV2YxdjRxb0s5UkY2az1cIik7XG5leHBvcnQgeyBRdWVyeVJlcXVlc3RQcm92aWRlciwgdXNlUXVlcnlSZXF1ZXN0IH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMiwgX3JlYWN0X3JlZnJlc2hfdGVtcF8zLCBfcmVhY3RfcmVmcmVzaF90ZW1wXzQsIF9yZWFjdF9yZWZyZXNoX3RlbXBfNSwgX3JlYWN0X3JlZnJlc2hfdGVtcF82O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzMgPSAkUmVmcmVzaFNpZyQoKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfNCA9ICRSZWZyZXNoU2lnJCgpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF81ID0gJFJlZnJlc2hTaWckKCk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzYgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IGNyZWF0ZVJlc3BvbnNlQ29udGV4dCwgaW5pdGlhbFF1ZXJ5UmVzcG9uc2UsIGluaXRpYWxRdWVyeVN0YXRlLCBRVUVSSUVTLCBzdHJpbmdpZnlSZXF1ZXN0UXVlcnksIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0VXNlcnMgfSBmcm9tICcuL19yZXF1ZXN0cyc7XG5pbXBvcnQgeyB1c2VRdWVyeVJlcXVlc3QgfSBmcm9tICcuL1F1ZXJ5UmVxdWVzdFByb3ZpZGVyJztcbmNvbnN0IFF1ZXJ5UmVzcG9uc2VDb250ZXh0ID0gY3JlYXRlUmVzcG9uc2VDb250ZXh0KGluaXRpYWxRdWVyeVJlc3BvbnNlKTtcbmNvbnN0IFF1ZXJ5UmVzcG9uc2VQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB1c2VRdWVyeVJlcXVlc3QoKTtcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKHN0cmluZ2lmeVJlcXVlc3RRdWVyeShzdGF0ZSkpO1xuICAgIGNvbnN0IHVwZGF0ZWRRdWVyeSA9IHVzZU1lbW8oKCkgPT4gc3RyaW5naWZ5UmVxdWVzdFF1ZXJ5KHN0YXRlKSwgW3N0YXRlXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHF1ZXJ5ICE9PSB1cGRhdGVkUXVlcnkpIHtcbiAgICAgICAgICAgIHNldFF1ZXJ5KHVwZGF0ZWRRdWVyeSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXBkYXRlZFF1ZXJ5XSk7XG4gICAgY29uc3QgeyBpc0ZldGNoaW5nLCByZWZldGNoLCBkYXRhOiByZXNwb25zZSwgfSA9IHVzZVF1ZXJ5KGAke1FVRVJJRVMuVVNFUlNfTElTVH0tJHtxdWVyeX1gLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRVc2VycyhxdWVyeSk7XG4gICAgfSwgeyBjYWNoZVRpbWU6IDAsIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSB9KTtcbiAgICByZXR1cm4gKF9qc3goUXVlcnlSZXNwb25zZUNvbnRleHQuUHJvdmlkZXIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogeyBpc0xvYWRpbmc6IGlzRmV0Y2hpbmcsIHJlZmV0Y2gsIHJlc3BvbnNlLCBxdWVyeSB9IH0sIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gUXVlcnlSZXNwb25zZVByb3ZpZGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJRdWVyeVJlc3BvbnNlUHJvdmlkZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoUXVlcnlSZXNwb25zZVByb3ZpZGVyLCBcIi9qaDhhVjNYWnA4NWYveThhbndCQ0VEMGZkMD1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlcXVlc3QsIHVzZVF1ZXJ5XSk7XG5jb25zdCB1c2VRdWVyeVJlc3BvbnNlID0gKCkgPT4gKF9yZWFjdF9yZWZyZXNoX3RlbXBfMygpLCB1c2VDb250ZXh0KFF1ZXJ5UmVzcG9uc2VDb250ZXh0KSk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzModXNlUXVlcnlSZXNwb25zZSwgXCJnRHNDamVlSXRVdXZnT1dmMXY0cW9LOVJGNms9XCIpO1xuY29uc3QgdXNlUXVlcnlSZXNwb25zZURhdGEgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF80KCk7XG4gICAgY29uc3QgeyByZXNwb25zZSB9ID0gdXNlUXVlcnlSZXNwb25zZSgpO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gKHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5kYXRhKSB8fCBbXTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzQodXNlUXVlcnlSZXNwb25zZURhdGEsIFwiejVQdm51NXlTRmY1N1FDajE5UUFIdUx2dlBnPVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVzcG9uc2VdKTtcbmNvbnN0IHVzZVF1ZXJ5UmVzcG9uc2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfNSgpO1xuICAgIGNvbnN0IGRlZmF1bHRQYWdpbmF0aW9uU3RhdGUgPSBPYmplY3QuYXNzaWduKHsgbGlua3M6IFtdIH0sIGluaXRpYWxRdWVyeVN0YXRlKTtcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSB1c2VRdWVyeVJlc3BvbnNlKCk7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UucGF5bG9hZCB8fCAhcmVzcG9uc2UucGF5bG9hZC5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UGFnaW5hdGlvblN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UucGF5bG9hZC5wYWdpbmF0aW9uO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfNSh1c2VRdWVyeVJlc3BvbnNlUGFnaW5hdGlvbiwgXCJ6NVB2bnU1eVNGZjU3UUNqMTlRQUh1THZ2UGc9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXNwb25zZV0pO1xuY29uc3QgdXNlUXVlcnlSZXNwb25zZUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF82KCk7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICByZXR1cm4gaXNMb2FkaW5nO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfNih1c2VRdWVyeVJlc3BvbnNlTG9hZGluZywgXCJPVUoxc2ZXWDdSR1dnazZHRkphYUFhcGRGczg9XCIsIGZhbHNlLCAoKSA9PiBbdXNlUXVlcnlSZXNwb25zZV0pO1xuZXhwb3J0IHsgUXVlcnlSZXNwb25zZVByb3ZpZGVyLCB1c2VRdWVyeVJlc3BvbnNlLCB1c2VRdWVyeVJlc3BvbnNlRGF0YSwgdXNlUXVlcnlSZXNwb25zZVBhZ2luYXRpb24sIHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nLCB9O1xuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxVc2VyID0ge1xuICAgIGF2YXRhcjogJ2F2YXRhcnMvMzAwLTYuanBnJyxcbiAgICBwb3NpdGlvbjogJ0FydCBEaXJlY3RvcicsXG4gICAgcm9sZTogJ0FkbWluaXN0cmF0b3InLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9USEVNRV9BUElfVVJMO1xuY29uc3QgVVNFUl9VUkwgPSBgJHtBUElfVVJMfS91c2VyYDtcbmNvbnN0IEdFVF9VU0VSU19VUkwgPSBgJHtBUElfVVJMfS91c2Vycy9xdWVyeWA7XG5jb25zdCBnZXRVc2VycyA9IChxdWVyeSkgPT4ge1xuICAgIHJldHVybiBheGlvc1xuICAgICAgICAuZ2V0KGAke0dFVF9VU0VSU19VUkx9PyR7cXVlcnl9YClcbiAgICAgICAgLnRoZW4oKGQpID0+IGQuZGF0YSk7XG59O1xuY29uc3QgZ2V0VXNlckJ5SWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gYXhpb3NcbiAgICAgICAgLmdldChgJHtVU0VSX1VSTH0vJHtpZH1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSk7XG59O1xuY29uc3QgY3JlYXRlVXNlciA9ICh1c2VyKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAgIC5wdXQoVVNFUl9VUkwsIHVzZXIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKTtcbn07XG5jb25zdCB1cGRhdGVVc2VyID0gKHVzZXIpID0+IHtcbiAgICByZXR1cm4gYXhpb3NcbiAgICAgICAgLnBvc3QoYCR7VVNFUl9VUkx9LyR7dXNlci5pZH1gLCB1c2VyKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSk7XG59O1xuY29uc3QgZGVsZXRlVXNlciA9ICh1c2VySWQpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke1VTRVJfVVJMfS8ke3VzZXJJZH1gKS50aGVuKCgpID0+IHsgfSk7XG59O1xuY29uc3QgZGVsZXRlU2VsZWN0ZWRVc2VycyA9ICh1c2VySWRzKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdHMgPSB1c2VySWRzLm1hcCgoaWQpID0+IGF4aW9zLmRlbGV0ZShgJHtVU0VSX1VSTH0vJHtpZH1gKSk7XG4gICAgcmV0dXJuIGF4aW9zLmFsbChyZXF1ZXN0cykudGhlbigoKSA9PiB7IH0pO1xufTtcbmV4cG9ydCB7IGdldFVzZXJzLCBkZWxldGVVc2VyLCBkZWxldGVTZWxlY3RlZFVzZXJzLCBnZXRVc2VyQnlJZCwgY3JlYXRlVXNlciwgdXBkYXRlVXNlciB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdyZWFjdC10YWJsZSc7XG5pbXBvcnQgeyBDdXN0b21IZWFkZXJDb2x1bW4gfSBmcm9tICcuL2NvbHVtbnMvQ3VzdG9tSGVhZGVyQ29sdW1uJztcbmltcG9ydCB7IEN1c3RvbVJvdyB9IGZyb20gJy4vY29sdW1ucy9DdXN0b21Sb3cnO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXNwb25zZURhdGEsIHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nIH0gZnJvbSAnLi4vY29yZS9RdWVyeVJlc3BvbnNlUHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlcnNDb2x1bW5zIH0gZnJvbSAnLi9jb2x1bW5zL19jb2x1bW5zJztcbmltcG9ydCB7IFVzZXJzTGlzdExvYWRpbmcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcvVXNlcnNMaXN0TG9hZGluZyc7XG5pbXBvcnQgeyBVc2Vyc0xpc3RQYWdpbmF0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uL1VzZXJzTGlzdFBhZ2luYXRpb24nO1xuaW1wb3J0IHsgS1RDYXJkQm9keSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmNvbnN0IFVzZXJzVGFibGUgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgdXNlcnMgPSB1c2VRdWVyeVJlc3BvbnNlRGF0YSgpO1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHVzZVF1ZXJ5UmVzcG9uc2VMb2FkaW5nKCk7XG4gICAgY29uc3QgZGF0YSA9IHVzZU1lbW8oKCkgPT4gdXNlcnMsIFt1c2Vyc10pO1xuICAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IHVzZXJzQ29sdW1ucywgW10pO1xuICAgIGNvbnN0IHsgZ2V0VGFibGVQcm9wcywgZ2V0VGFibGVCb2R5UHJvcHMsIGhlYWRlcnMsIHJvd3MsIHByZXBhcmVSb3cgfSA9IHVzZVRhYmxlKHtcbiAgICAgICAgY29sdW1ucyxcbiAgICAgICAgZGF0YSxcbiAgICB9KTtcbiAgICByZXR1cm4gKF9qc3hzKEtUQ2FyZEJvZHksIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdweS00JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGFibGUtcmVzcG9uc2l2ZScgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJ0YWJsZVwiLCBPYmplY3QuYXNzaWduKHsgaWQ6ICdrdF90YWJsZV91c2VycycsIGNsYXNzTmFtZTogJ3RhYmxlIGFsaWduLW1pZGRsZSB0YWJsZS1yb3ctZGFzaGVkIGZzLTYgZ3ktNSBkYXRhVGFibGUgbm8tZm9vdGVyJyB9LCBnZXRUYWJsZVByb3BzKCksIHsgY2hpbGRyZW46IFtfanN4KFwidGhlYWRcIiwgeyBjaGlsZHJlbjogX2pzeChcInRyXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0ZXh0LXN0YXJ0IHRleHQtbXV0ZWQgZnctYm9sZGVyIGZzLTcgdGV4dC11cHBlcmNhc2UgZ3MtMCcgfSwgeyBjaGlsZHJlbjogaGVhZGVycy5tYXAoKGNvbHVtbikgPT4gKF9qc3goQ3VzdG9tSGVhZGVyQ29sdW1uLCB7IGNvbHVtbjogY29sdW1uIH0sIGNvbHVtbi5pZCkpKSB9KSkgfSksIF9qc3goXCJ0Ym9keVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGV4dC1ncmF5LTYwMCBmdy1ib2xkJyB9LCBnZXRUYWJsZUJvZHlQcm9wcygpLCB7IGNoaWxkcmVuOiByb3dzLmxlbmd0aCA+IDAgPyAocm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfanN4KEN1c3RvbVJvdywgeyByb3c6IHJvdyB9LCBgcm93LSR7aX0tJHtyb3cuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpIDogKF9qc3goXCJ0clwiLCB7IGNoaWxkcmVuOiBfanN4KFwidGRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbFNwYW46IDcgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IHRleHQtY2VudGVyIHctMTAwIGFsaWduLWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXInIH0sIHsgY2hpbGRyZW46IFwiTm8gbWF0Y2hpbmcgcmVjb3JkcyBmb3VuZFwiIH0pKSB9KSkgfSkpIH0pKV0gfSkpIH0pKSwgX2pzeChVc2Vyc0xpc3RQYWdpbmF0aW9uLCB7fSksIGlzTG9hZGluZyAmJiBfanN4KFVzZXJzTGlzdExvYWRpbmcsIHt9KV0gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2Vyc1RhYmxlO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2Vyc1RhYmxlXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJzVGFibGUsIFwiNnhtS1A3aUhIT05kNzdxK051SWg0UmE2TitRPVwiLCBmYWxzZSwgKCkgPT4gW3VzZVF1ZXJ5UmVzcG9uc2VEYXRhLCB1c2VRdWVyeVJlc3BvbnNlTG9hZGluZywgdXNlVGFibGVdKTtcbmV4cG9ydCB7IFVzZXJzVGFibGUgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBDdXN0b21IZWFkZXJDb2x1bW4gPSAoeyBjb2x1bW4gfSkgPT4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBjb2x1bW4uSGVhZGVyICYmIHR5cGVvZiBjb2x1bW4uSGVhZGVyID09PSAnc3RyaW5nJyA/IChfanN4KFwidGhcIiwgT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uLmdldEhlYWRlclByb3BzKCksIHsgY2hpbGRyZW46IGNvbHVtbi5yZW5kZXIoJ0hlYWRlcicpIH0pKSkgOiAoY29sdW1uLnJlbmRlcignSGVhZGVyJykpIH0pKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IEN1c3RvbUhlYWRlckNvbHVtbjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiQ3VzdG9tSGVhZGVyQ29sdW1uXCIpO1xuZXhwb3J0IHsgQ3VzdG9tSGVhZGVyQ29sdW1uIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmNvbnN0IEN1c3RvbVJvdyA9ICh7IHJvdyB9KSA9PiAoX2pzeChcInRyXCIsIE9iamVjdC5hc3NpZ24oe30sIHJvdy5nZXRSb3dQcm9wcygpLCB7IGNoaWxkcmVuOiByb3cuY2VsbHMubWFwKChjZWxsKSA9PiB7XG4gICAgICAgIHJldHVybiAoX2pzeChcInRkXCIsIE9iamVjdC5hc3NpZ24oe30sIGNlbGwuZ2V0Q2VsbFByb3BzKCksIHsgY2xhc3NOYW1lOiBjbHN4KHsgJ3RleHQtZW5kIG1pbi13LTEwMHB4JzogY2VsbC5jb2x1bW4uaWQgPT09ICdhY3Rpb25zJyB9KSB9LCB7IGNoaWxkcmVuOiBjZWxsLnJlbmRlcignQ2VsbCcpIH0pKSk7XG4gICAgfSkgfSkpKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IEN1c3RvbVJvdztcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiQ3VzdG9tUm93XCIpO1xuZXhwb3J0IHsgQ3VzdG9tUm93IH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvYXNzZXRzL3RzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgS1RJY29uLCBRVUVSSUVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlTGlzdFZpZXcgfSBmcm9tICcuLi8uLi9jb3JlL0xpc3RWaWV3UHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXNwb25zZSB9IGZyb20gJy4uLy4uL2NvcmUvUXVlcnlSZXNwb25zZVByb3ZpZGVyJztcbmltcG9ydCB7IGRlbGV0ZVVzZXIgfSBmcm9tICcuLi8uLi9jb3JlL19yZXF1ZXN0cyc7XG5jb25zdCBVc2VyQWN0aW9uc0NlbGwgPSAoeyBpZCB9KSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBzZXRJdGVtSWRGb3JVcGRhdGUgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUXVlcnlSZXNwb25zZSgpO1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBNZW51Q29tcG9uZW50LnJlaW5pdGlhbGl6YXRpb24oKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgb3BlbkVkaXRNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXRlbUlkRm9yVXBkYXRlKGlkKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSB1c2VNdXRhdGlvbigoKSA9PiBkZWxldGVVc2VyKGlkKSwge1xuICAgICAgICAvLyDwn5KhIHJlc3BvbnNlIG9mIHRoZSBtdXRhdGlvbiBpcyBwYXNzZWQgdG8gb25TdWNjZXNzXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgLy8g4pyFIHVwZGF0ZSBkZXRhaWwgdmlldyBkaXJlY3RseVxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW2Ake1FVRVJJRVMuVVNFUlNfTElTVH0tJHtxdWVyeX1gXSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6ICcjJywgY2xhc3NOYW1lOiAnYnRuIGJ0bi1saWdodCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnkgYnRuLXNtJywgXCJkYXRhLWt0LW1lbnUtdHJpZ2dlclwiOiAnY2xpY2snLCBcImRhdGEta3QtbWVudS1wbGFjZW1lbnRcIjogJ2JvdHRvbS1lbmQnIH0sIHsgY2hpbGRyZW46IFtcIkFjdGlvbnNcIiwgX2pzeChLVEljb24sIHsgaWNvbk5hbWU6ICdkb3duJywgY2xhc3NOYW1lOiAnZnMtNSBtLTAnIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtZW51IG1lbnUtc3ViIG1lbnUtc3ViLWRyb3Bkb3duIG1lbnUtY29sdW1uIG1lbnUtcm91bmRlZCBtZW51LWdyYXktNjAwIG1lbnUtc3RhdGUtYmctbGlnaHQtcHJpbWFyeSBmdy1ib2xkIGZzLTcgdy0xMjVweCBweS00JywgXCJkYXRhLWt0LW1lbnVcIjogJ3RydWUnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtZW51LWl0ZW0gcHgtMycgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21lbnUtbGluayBweC0zJywgb25DbGljazogb3BlbkVkaXRNb2RhbCB9LCB7IGNoaWxkcmVuOiBcIkVkaXRcIiB9KSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtZW51LWl0ZW0gcHgtMycgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21lbnUtbGluayBweC0zJywgXCJkYXRhLWt0LXVzZXJzLXRhYmxlLWZpbHRlclwiOiAnZGVsZXRlX3JvdycsIG9uQ2xpY2s6ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgZGVsZXRlSXRlbS5tdXRhdGVBc3luYygpOyB9KSB9LCB7IGNoaWxkcmVuOiBcIkRlbGV0ZVwiIH0pKSB9KSldIH0pKV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJBY3Rpb25zQ2VsbDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlckFjdGlvbnNDZWxsXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJBY3Rpb25zQ2VsbCwgXCJEakZvSzdFRDJpSHN2MGdxcnE5amdROERZZDA9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXcsIHVzZVF1ZXJ5UmVzcG9uc2UsIHVzZVF1ZXJ5Q2xpZW50LCB1c2VNdXRhdGlvbl0pO1xuZXhwb3J0IHsgVXNlckFjdGlvbnNDZWxsIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXRpYWxRdWVyeVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vY29yZS9RdWVyeVJlcXVlc3RQcm92aWRlcic7XG5jb25zdCBVc2VyQ3VzdG9tSGVhZGVyID0gKHsgY2xhc3NOYW1lLCB0aXRsZSwgdGFibGVQcm9wcyB9KSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgaWQgPSB0YWJsZVByb3BzLmNvbHVtbi5pZDtcbiAgICBjb25zdCB7IHN0YXRlLCB1cGRhdGVTdGF0ZSB9ID0gdXNlUXVlcnlSZXF1ZXN0KCk7XG4gICAgY29uc3QgaXNTZWxlY3RlZEZvclNvcnRpbmcgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNvcnQgJiYgc3RhdGUuc29ydCA9PT0gaWQ7XG4gICAgfSwgW3N0YXRlLCBpZF0pO1xuICAgIGNvbnN0IG9yZGVyID0gdXNlTWVtbygoKSA9PiBzdGF0ZS5vcmRlciwgW3N0YXRlXSk7XG4gICAgY29uc3Qgc29ydENvbHVtbiA9ICgpID0+IHtcbiAgICAgICAgLy8gYXZvaWQgc29ydGluZyBmb3IgdGhlc2UgY29sdW1uc1xuICAgICAgICBpZiAoaWQgPT09ICdhY3Rpb25zJyB8fCBpZCA9PT0gJ3NlbGVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzU2VsZWN0ZWRGb3JTb3J0aW5nKSB7XG4gICAgICAgICAgICAvLyBlbmFibGUgc29ydCBhc2NcbiAgICAgICAgICAgIHVwZGF0ZVN0YXRlKE9iamVjdC5hc3NpZ24oeyBzb3J0OiBpZCwgb3JkZXI6ICdhc2MnIH0sIGluaXRpYWxRdWVyeVN0YXRlKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU2VsZWN0ZWRGb3JTb3J0aW5nICYmIG9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChvcmRlciA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgICAgICAvLyBlbmFibGUgc29ydCBkZXNjXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdGUoT2JqZWN0LmFzc2lnbih7IHNvcnQ6IGlkLCBvcmRlcjogJ2Rlc2MnIH0sIGluaXRpYWxRdWVyeVN0YXRlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlzYWJsZSBzb3J0XG4gICAgICAgICAgICB1cGRhdGVTdGF0ZShPYmplY3QuYXNzaWduKHsgc29ydDogdW5kZWZpbmVkLCBvcmRlcjogdW5kZWZpbmVkIH0sIGluaXRpYWxRdWVyeVN0YXRlKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcInRoXCIsIE9iamVjdC5hc3NpZ24oe30sIHRhYmxlUHJvcHMuY29sdW1uLmdldEhlYWRlclByb3BzKCksIHsgY2xhc3NOYW1lOiBjbHN4KGNsYXNzTmFtZSwgaXNTZWxlY3RlZEZvclNvcnRpbmcgJiYgb3JkZXIgIT09IHVuZGVmaW5lZCAmJiBgdGFibGUtc29ydC0ke29yZGVyfWApLCBzdHlsZTogeyBjdXJzb3I6ICdwb2ludGVyJyB9LCBvbkNsaWNrOiBzb3J0Q29sdW1uIH0sIHsgY2hpbGRyZW46IHRpdGxlIH0pKSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlckN1c3RvbUhlYWRlcjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlckN1c3RvbUhlYWRlclwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2VyQ3VzdG9tSGVhZGVyLCBcIkJDMStodm5NeENPMllZaG9RWVJWWUxjWTZPOD1cIiwgZmFsc2UsICgpID0+IFt1c2VRdWVyeVJlcXVlc3RdKTtcbmV4cG9ydCB7IFVzZXJDdXN0b21IZWFkZXIgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHRvQWJzb2x1dGVVcmwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5jb25zdCBVc2VySW5mb0NlbGwgPSAoeyB1c2VyIH0pID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnc3ltYm9sIHN5bWJvbC1jaXJjbGUgc3ltYm9sLTUwcHggb3ZlcmZsb3ctaGlkZGVuIG1lLTMnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiAnIycgfSwgeyBjaGlsZHJlbjogdXNlci5hdmF0YXIgPyAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnc3ltYm9sLWxhYmVsJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaW1nXCIsIHsgc3JjOiB0b0Fic29sdXRlVXJsKGAvbWVkaWEvJHt1c2VyLmF2YXRhcn1gKSwgYWx0OiB1c2VyLm5hbWUsIGNsYXNzTmFtZTogJ3ctMTAwJyB9KSB9KSkpIDogKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xzeCgnc3ltYm9sLWxhYmVsIGZzLTMnLCBgYmctbGlnaHQtJHsoX2EgPSB1c2VyLmluaXRpYWxzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3RhdGV9YCwgYHRleHQtJHsoX2IgPSB1c2VyLmluaXRpYWxzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc3RhdGV9YCkgfSwgeyBjaGlsZHJlbjogKF9jID0gdXNlci5pbml0aWFscykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmxhYmVsIH0pKSkgfSkpIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBmbGV4LWNvbHVtbicgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiAnIycsIGNsYXNzTmFtZTogJ3RleHQtZ3JheS04MDAgdGV4dC1ob3Zlci1wcmltYXJ5IG1iLTEnIH0sIHsgY2hpbGRyZW46IHVzZXIubmFtZSB9KSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IHVzZXIuZW1haWwgfSldIH0pKV0gfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VySW5mb0NlbGw7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJJbmZvQ2VsbFwiKTtcbmV4cG9ydCB7IFVzZXJJbmZvQ2VsbCB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBVc2VyTGFzdExvZ2luQ2VsbCA9ICh7IGxhc3RfbG9naW4gfSkgPT4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2JhZGdlIGJhZGdlLWxpZ2h0IGZ3LWJvbGRlcicgfSwgeyBjaGlsZHJlbjogbGFzdF9sb2dpbiB9KSkpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlckxhc3RMb2dpbkNlbGw7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJMYXN0TG9naW5DZWxsXCIpO1xuZXhwb3J0IHsgVXNlckxhc3RMb2dpbkNlbGwgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmNvbnN0IFVzZXJTZWxlY3Rpb25DZWxsID0gKHsgaWQgfSkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIG9uU2VsZWN0IH0gPSB1c2VMaXN0VmlldygpO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB1c2VNZW1vKCgpID0+IHNlbGVjdGVkLmluY2x1ZGVzKGlkKSwgW2lkLCBzZWxlY3RlZF0pO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjayBmb3JtLWNoZWNrLWN1c3RvbSBmb3JtLWNoZWNrLXNvbGlkJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWlucHV0JywgdHlwZTogJ2NoZWNrYm94JywgXCJkYXRhLWt0LWNoZWNrXCI6IGlzU2VsZWN0ZWQsIFwiZGF0YS1rdC1jaGVjay10YXJnZXRcIjogJyNrdF90YWJsZV91c2VycyAuZm9ybS1jaGVjay1pbnB1dCcsIGNoZWNrZWQ6IGlzU2VsZWN0ZWQsIG9uQ2hhbmdlOiAoKSA9PiBvblNlbGVjdChpZCkgfSkgfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyU2VsZWN0aW9uQ2VsbDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlclNlbGVjdGlvbkNlbGxcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlclNlbGVjdGlvbkNlbGwsIFwiRGhyRDBIRnY0UDBNTGF1ZEh6MGt5Wkpra0JZPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3XSk7XG5leHBvcnQgeyBVc2VyU2VsZWN0aW9uQ2VsbCB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uLy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5jb25zdCBVc2VyU2VsZWN0aW9uSGVhZGVyID0gKHsgdGFibGVQcm9wcyB9KSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgY29uc3QgeyBpc0FsbFNlbGVjdGVkLCBvblNlbGVjdEFsbCB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICByZXR1cm4gKF9qc3goXCJ0aFwiLCBPYmplY3QuYXNzaWduKHt9LCB0YWJsZVByb3BzLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpLCB7IGNsYXNzTmFtZTogJ3ctMTBweCBwZS0yJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrIGZvcm0tY2hlY2stc20gZm9ybS1jaGVjay1jdXN0b20gZm9ybS1jaGVjay1zb2xpZCBtZS0zJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWlucHV0JywgdHlwZTogJ2NoZWNrYm94JywgXCJkYXRhLWt0LWNoZWNrXCI6IGlzQWxsU2VsZWN0ZWQsIFwiZGF0YS1rdC1jaGVjay10YXJnZXRcIjogJyNrdF90YWJsZV91c2VycyAuZm9ybS1jaGVjay1pbnB1dCcsIGNoZWNrZWQ6IGlzQWxsU2VsZWN0ZWQsIG9uQ2hhbmdlOiBvblNlbGVjdEFsbCB9KSB9KSkgfSkpKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyU2VsZWN0aW9uSGVhZGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyU2VsZWN0aW9uSGVhZGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKFVzZXJTZWxlY3Rpb25IZWFkZXIsIFwiVWNQTDBQNmpZWDg1THMwRmZBREY0cXBrZFhjPVwiLCBmYWxzZSwgKCkgPT4gW3VzZUxpc3RWaWV3XSk7XG5leHBvcnQgeyBVc2VyU2VsZWN0aW9uSGVhZGVyIH07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgVXNlclR3b1N0ZXBzQ2VsbCA9ICh7IHR3b19zdGVwcyB9KSA9PiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbXCIgXCIsIHR3b19zdGVwcyAmJiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdiYWRnZSBiYWRnZS1saWdodC1zdWNjZXNzIGZ3LWJvbGRlcicgfSwgeyBjaGlsZHJlbjogXCJFbmFibGVkXCIgfSkpXSB9KSk7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBVc2VyVHdvU3RlcHNDZWxsO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyVHdvU3RlcHNDZWxsXCIpO1xuZXhwb3J0IHsgVXNlclR3b1N0ZXBzQ2VsbCB9O1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFVzZXJJbmZvQ2VsbCB9IGZyb20gJy4vVXNlckluZm9DZWxsJztcbmltcG9ydCB7IFVzZXJMYXN0TG9naW5DZWxsIH0gZnJvbSAnLi9Vc2VyTGFzdExvZ2luQ2VsbCc7XG5pbXBvcnQgeyBVc2VyVHdvU3RlcHNDZWxsIH0gZnJvbSAnLi9Vc2VyVHdvU3RlcHNDZWxsJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zQ2VsbCB9IGZyb20gJy4vVXNlckFjdGlvbnNDZWxsJztcbmltcG9ydCB7IFVzZXJTZWxlY3Rpb25DZWxsIH0gZnJvbSAnLi9Vc2VyU2VsZWN0aW9uQ2VsbCc7XG5pbXBvcnQgeyBVc2VyQ3VzdG9tSGVhZGVyIH0gZnJvbSAnLi9Vc2VyQ3VzdG9tSGVhZGVyJztcbmltcG9ydCB7IFVzZXJTZWxlY3Rpb25IZWFkZXIgfSBmcm9tICcuL1VzZXJTZWxlY3Rpb25IZWFkZXInO1xuY29uc3QgdXNlcnNDb2x1bW5zID0gW1xuICAgIHtcbiAgICAgICAgSGVhZGVyOiAocHJvcHMpID0+IF9qc3goVXNlclNlbGVjdGlvbkhlYWRlciwgeyB0YWJsZVByb3BzOiBwcm9wcyB9KSxcbiAgICAgICAgaWQ6ICdzZWxlY3Rpb24nLFxuICAgICAgICBDZWxsOiAoX2EpID0+IHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgICAgICAgICAgcmV0dXJuIF9qc3goVXNlclNlbGVjdGlvbkNlbGwsIHsgaWQ6IHByb3BzLmRhdGFbcHJvcHMucm93LmluZGV4XS5pZCB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgSGVhZGVyOiAocHJvcHMpID0+IF9qc3goVXNlckN1c3RvbUhlYWRlciwgeyB0YWJsZVByb3BzOiBwcm9wcywgdGl0bGU6ICdOYW1lJywgY2xhc3NOYW1lOiAnbWluLXctMTI1cHgnIH0pLFxuICAgICAgICBpZDogJ25hbWUnLFxuICAgICAgICBDZWxsOiAoX2EpID0+IHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgICAgICAgICAgcmV0dXJuIF9qc3goVXNlckluZm9DZWxsLCB7IHVzZXI6IHByb3BzLmRhdGFbcHJvcHMucm93LmluZGV4XSB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgSGVhZGVyOiAocHJvcHMpID0+IF9qc3goVXNlckN1c3RvbUhlYWRlciwgeyB0YWJsZVByb3BzOiBwcm9wcywgdGl0bGU6ICdSb2xlJywgY2xhc3NOYW1lOiAnbWluLXctMTI1cHgnIH0pLFxuICAgICAgICBhY2Nlc3NvcjogJ3JvbGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBIZWFkZXI6IChwcm9wcykgPT4gKF9qc3goVXNlckN1c3RvbUhlYWRlciwgeyB0YWJsZVByb3BzOiBwcm9wcywgdGl0bGU6ICdMYXN0IGxvZ2luJywgY2xhc3NOYW1lOiAnbWluLXctMTI1cHgnIH0pKSxcbiAgICAgICAgaWQ6ICdsYXN0X2xvZ2luJyxcbiAgICAgICAgQ2VsbDogKF9hKSA9PiB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFVzZXJMYXN0TG9naW5DZWxsLCB7IGxhc3RfbG9naW46IHByb3BzLmRhdGFbcHJvcHMucm93LmluZGV4XS5sYXN0X2xvZ2luIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBIZWFkZXI6IChwcm9wcykgPT4gKF9qc3goVXNlckN1c3RvbUhlYWRlciwgeyB0YWJsZVByb3BzOiBwcm9wcywgdGl0bGU6ICdUd28gc3RlcHMnLCBjbGFzc05hbWU6ICdtaW4tdy0xMjVweCcgfSkpLFxuICAgICAgICBpZDogJ3R3b19zdGVwcycsXG4gICAgICAgIENlbGw6IChfYSkgPT4ge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChVc2VyVHdvU3RlcHNDZWxsLCB7IHR3b19zdGVwczogcHJvcHMuZGF0YVtwcm9wcy5yb3cuaW5kZXhdLnR3b19zdGVwcyB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgSGVhZGVyOiAocHJvcHMpID0+IChfanN4KFVzZXJDdXN0b21IZWFkZXIsIHsgdGFibGVQcm9wczogcHJvcHMsIHRpdGxlOiAnSm9pbmVkIGRheScsIGNsYXNzTmFtZTogJ21pbi13LTEyNXB4JyB9KSksXG4gICAgICAgIGFjY2Vzc29yOiAnam9pbmVkX2RheScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIEhlYWRlcjogKHByb3BzKSA9PiAoX2pzeChVc2VyQ3VzdG9tSGVhZGVyLCB7IHRhYmxlUHJvcHM6IHByb3BzLCB0aXRsZTogJ0FjdGlvbnMnLCBjbGFzc05hbWU6ICd0ZXh0LWVuZCBtaW4tdy0xMDBweCcgfSkpLFxuICAgICAgICBpZDogJ2FjdGlvbnMnLFxuICAgICAgICBDZWxsOiAoX2EpID0+IHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgICAgICAgICAgcmV0dXJuIF9qc3goVXNlckFjdGlvbnNDZWxsLCB7IGlkOiBwcm9wcy5kYXRhW3Byb3BzLnJvdy5pbmRleF0uaWQgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbl07XG5leHBvcnQgeyB1c2Vyc0NvbHVtbnMgfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVc2VyRWRpdE1vZGFsSGVhZGVyIH0gZnJvbSAnLi9Vc2VyRWRpdE1vZGFsSGVhZGVyJztcbmltcG9ydCB7IFVzZXJFZGl0TW9kYWxGb3JtV3JhcHBlciB9IGZyb20gJy4vVXNlckVkaXRNb2RhbEZvcm1XcmFwcGVyJztcbmNvbnN0IFVzZXJFZGl0TW9kYWwgPSAoKSA9PiB7XG4gICAgX3JlYWN0X3JlZnJlc2hfdGVtcF8yKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtb2RhbCBmYWRlIHNob3cgZC1ibG9jaycsIGlkOiAna3RfbW9kYWxfYWRkX3VzZXInLCByb2xlOiAnZGlhbG9nJywgdGFiSW5kZXg6IC0xLCBcImFyaWEtbW9kYWxcIjogJ3RydWUnIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbXctNjUwcHgnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtb2RhbC1jb250ZW50JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChVc2VyRWRpdE1vZGFsSGVhZGVyLCB7fSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21vZGFsLWJvZHkgc2Nyb2xsLXkgbXgtNSBteC14bC0xNSBteS03JyB9LCB7IGNoaWxkcmVuOiBfanN4KFVzZXJFZGl0TW9kYWxGb3JtV3JhcHBlciwge30pIH0pKV0gfSkpIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCBmYWRlIHNob3cnIH0pXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlckVkaXRNb2RhbDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiVXNlckVkaXRNb2RhbFwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2VyRWRpdE1vZGFsLCBcIk9EN2JCcFp2YTVPMmpPK1B1ZjAwaEtpdlA3Yz1cIik7XG5leHBvcnQgeyBVc2VyRWRpdE1vZGFsIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IGlzTm90RW1wdHksIHRvQWJzb2x1dGVVcmwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyBpbml0aWFsVXNlciB9IGZyb20gJy4uL2NvcmUvX21vZGVscyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmltcG9ydCB7IFVzZXJzTGlzdExvYWRpbmcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcvVXNlcnNMaXN0TG9hZGluZyc7XG5pbXBvcnQgeyBjcmVhdGVVc2VyLCB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vY29yZS9fcmVxdWVzdHMnO1xuaW1wb3J0IHsgdXNlUXVlcnlSZXNwb25zZSB9IGZyb20gJy4uL2NvcmUvUXVlcnlSZXNwb25zZVByb3ZpZGVyJztcbmNvbnN0IGVkaXRVc2VyU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBlbWFpbDogWXVwLnN0cmluZygpXG4gICAgICAgIC5lbWFpbCgnV3JvbmcgZW1haWwgZm9ybWF0JylcbiAgICAgICAgLm1pbigzLCAnTWluaW11bSAzIHN5bWJvbHMnKVxuICAgICAgICAubWF4KDUwLCAnTWF4aW11bSA1MCBzeW1ib2xzJylcbiAgICAgICAgLnJlcXVpcmVkKCdFbWFpbCBpcyByZXF1aXJlZCcpLFxuICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAubWluKDMsICdNaW5pbXVtIDMgc3ltYm9scycpXG4gICAgICAgIC5tYXgoNTAsICdNYXhpbXVtIDUwIHN5bWJvbHMnKVxuICAgICAgICAucmVxdWlyZWQoJ05hbWUgaXMgcmVxdWlyZWQnKSxcbn0pO1xuY29uc3QgVXNlckVkaXRNb2RhbEZvcm0gPSAoeyB1c2VyLCBpc1VzZXJMb2FkaW5nIH0pID0+IHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICBjb25zdCB7IHNldEl0ZW1JZEZvclVwZGF0ZSB9ID0gdXNlTGlzdFZpZXcoKTtcbiAgICBjb25zdCB7IHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICBjb25zdCBbdXNlckZvckVkaXRdID0gdXNlU3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB1c2VyKSwgeyBhdmF0YXI6IHVzZXIuYXZhdGFyIHx8IGluaXRpYWxVc2VyLmF2YXRhciwgcm9sZTogdXNlci5yb2xlIHx8IGluaXRpYWxVc2VyLnJvbGUsIHBvc2l0aW9uOiB1c2VyLnBvc2l0aW9uIHx8IGluaXRpYWxVc2VyLnBvc2l0aW9uLCBuYW1lOiB1c2VyLm5hbWUgfHwgaW5pdGlhbFVzZXIubmFtZSwgZW1haWw6IHVzZXIuZW1haWwgfHwgaW5pdGlhbFVzZXIuZW1haWwgfSkpO1xuICAgIGNvbnN0IGNhbmNlbCA9ICh3aXRoUmVmcmVzaCkgPT4ge1xuICAgICAgICBpZiAod2l0aFJlZnJlc2gpIHtcbiAgICAgICAgICAgIHJlZmV0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJdGVtSWRGb3JVcGRhdGUodW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIGNvbnN0IGJsYW5rSW1nID0gdG9BYnNvbHV0ZVVybCgnL21lZGlhL3N2Zy9hdmF0YXJzL2JsYW5rLnN2ZycpO1xuICAgIGNvbnN0IHVzZXJBdmF0YXJJbWcgPSB0b0Fic29sdXRlVXJsKGAvbWVkaWEvJHt1c2VyRm9yRWRpdC5hdmF0YXJ9YCk7XG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczogdXNlckZvckVkaXQsXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IGVkaXRVc2VyU2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTm90RW1wdHkodmFsdWVzLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB1cGRhdGVVc2VyKHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjcmVhdGVVc2VyKHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIGNhbmNlbCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhcImZvcm1cIiwgT2JqZWN0LmFzc2lnbih7IGlkOiAna3RfbW9kYWxfYWRkX3VzZXJfZm9ybScsIGNsYXNzTmFtZTogJ2Zvcm0nLCBvblN1Ym1pdDogZm9ybWlrLmhhbmRsZVN1Ym1pdCwgbm9WYWxpZGF0ZTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBmbGV4LWNvbHVtbiBzY3JvbGwteSBtZS1uNyBwZS03JywgaWQ6ICdrdF9tb2RhbF9hZGRfdXNlcl9zY3JvbGwnLCBcImRhdGEta3Qtc2Nyb2xsXCI6ICd0cnVlJywgXCJkYXRhLWt0LXNjcm9sbC1hY3RpdmF0ZVwiOiAne2RlZmF1bHQ6IGZhbHNlLCBsZzogdHJ1ZX0nLCBcImRhdGEta3Qtc2Nyb2xsLW1heC1oZWlnaHRcIjogJ2F1dG8nLCBcImRhdGEta3Qtc2Nyb2xsLWRlcGVuZGVuY2llc1wiOiAnI2t0X21vZGFsX2FkZF91c2VyX2hlYWRlcicsIFwiZGF0YS1rdC1zY3JvbGwtd3JhcHBlcnNcIjogJyNrdF9tb2RhbF9hZGRfdXNlcl9zY3JvbGwnLCBcImRhdGEta3Qtc2Nyb2xsLW9mZnNldFwiOiAnMzAwcHgnIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnYtcm93IG1iLTcnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtYmxvY2sgZnctYm9sZCBmcy02IG1iLTUnIH0sIHsgY2hpbGRyZW46IFwiQXZhdGFyXCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdpbWFnZS1pbnB1dCBpbWFnZS1pbnB1dC1vdXRsaW5lJywgXCJkYXRhLWt0LWltYWdlLWlucHV0XCI6ICd0cnVlJywgc3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2JsYW5rSW1nfScpYCB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdpbWFnZS1pbnB1dC13cmFwcGVyIHctMTI1cHggaC0xMjVweCcsIHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogYHVybCgnJHt1c2VyQXZhdGFySW1nfScpYCB9IH0pIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnYtcm93IG1iLTcnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3JlcXVpcmVkIGZ3LWJvbGQgZnMtNiBtYi0yJyB9LCB7IGNoaWxkcmVuOiBcIkZ1bGwgTmFtZVwiIH0pKSwgX2pzeChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyBwbGFjZWhvbGRlcjogJ0Z1bGwgbmFtZScgfSwgZm9ybWlrLmdldEZpZWxkUHJvcHMoJ25hbWUnKSwgeyB0eXBlOiAndGV4dCcsIG5hbWU6ICduYW1lJywgY2xhc3NOYW1lOiBjbHN4KCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNvbGlkIG1iLTMgbWItbGctMCcsIHsgJ2lzLWludmFsaWQnOiBmb3JtaWsudG91Y2hlZC5uYW1lICYmIGZvcm1pay5lcnJvcnMubmFtZSB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy12YWxpZCc6IGZvcm1pay50b3VjaGVkLm5hbWUgJiYgIWZvcm1pay5lcnJvcnMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgYXV0b0NvbXBsZXRlOiAnb2ZmJywgZGlzYWJsZWQ6IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZyB9KSksIGZvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lICYmIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdi1wbHVnaW5zLW1lc3NhZ2UtY29udGFpbmVyJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdi1oZWxwLWJsb2NrJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgcm9sZTogJ2FsZXJ0JyB9LCB7IGNoaWxkcmVuOiBmb3JtaWsuZXJyb3JzLm5hbWUgfSkpIH0pKSB9KSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdi1yb3cgbWItNycgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAncmVxdWlyZWQgZnctYm9sZCBmcy02IG1iLTInIH0sIHsgY2hpbGRyZW46IFwiRW1haWxcIiB9KSksIF9qc3goXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHsgcGxhY2Vob2xkZXI6ICdFbWFpbCcgfSwgZm9ybWlrLmdldEZpZWxkUHJvcHMoJ2VtYWlsJyksIHsgY2xhc3NOYW1lOiBjbHN4KCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNvbGlkIG1iLTMgbWItbGctMCcsIHsgJ2lzLWludmFsaWQnOiBmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLXZhbGlkJzogZm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgIWZvcm1pay5lcnJvcnMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIHR5cGU6ICdlbWFpbCcsIG5hbWU6ICdlbWFpbCcsIGF1dG9Db21wbGV0ZTogJ29mZicsIGRpc2FibGVkOiBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcgfSkpLCBmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsICYmIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdi1wbHVnaW5zLW1lc3NhZ2UtY29udGFpbmVyJyB9LCB7IGNoaWxkcmVuOiBfanN4KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgcm9sZTogJ2FsZXJ0JyB9LCB7IGNoaWxkcmVuOiBmb3JtaWsuZXJyb3JzLmVtYWlsIH0pKSB9KSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdtYi03JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdyZXF1aXJlZCBmdy1ib2xkIGZzLTYgbWItNScgfSwgeyBjaGlsZHJlbjogXCJSb2xlXCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggZnYtcm93JyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjayBmb3JtLWNoZWNrLWN1c3RvbSBmb3JtLWNoZWNrLXNvbGlkJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWlucHV0IG1lLTMnIH0sIGZvcm1pay5nZXRGaWVsZFByb3BzKCdyb2xlJyksIHsgbmFtZTogJ3JvbGUnLCB0eXBlOiAncmFkaW8nLCB2YWx1ZTogJ0FkbWluaXN0cmF0b3InLCBpZDogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl8wJywgY2hlY2tlZDogZm9ybWlrLnZhbHVlcy5yb2xlID09PSAnQWRtaW5pc3RyYXRvcicsIGRpc2FibGVkOiBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcgfSkpLCBfanN4cyhcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWxhYmVsJywgaHRtbEZvcjogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl8wJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnctYm9sZGVyIHRleHQtZ3JheS04MDAnIH0sIHsgY2hpbGRyZW46IFwiQWRtaW5pc3RyYXRvclwiIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGV4dC1ncmF5LTYwMCcgfSwgeyBjaGlsZHJlbjogXCJCZXN0IGZvciBidXNpbmVzcyBvd25lcnMgYW5kIGNvbXBhbnkgYWRtaW5pc3RyYXRvcnNcIiB9KSldIH0pKV0gfSkpIH0pKSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NlcGFyYXRvciBzZXBhcmF0b3ItZGFzaGVkIG15LTUnIH0pLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdkLWZsZXggZnYtcm93JyB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjayBmb3JtLWNoZWNrLWN1c3RvbSBmb3JtLWNoZWNrLXNvbGlkJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWlucHV0IG1lLTMnIH0sIGZvcm1pay5nZXRGaWVsZFByb3BzKCdyb2xlJyksIHsgbmFtZTogJ3JvbGUnLCB0eXBlOiAncmFkaW8nLCB2YWx1ZTogJ0RldmVsb3BlcicsIGlkOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzEnLCBjaGVja2VkOiBmb3JtaWsudmFsdWVzLnJvbGUgPT09ICdEZXZlbG9wZXInLCBkaXNhYmxlZDogZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nIH0pKSwgX2pzeHMoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1sYWJlbCcsIGh0bWxGb3I6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fMScgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z3LWJvbGRlciB0ZXh0LWdyYXktODAwJyB9LCB7IGNoaWxkcmVuOiBcIkRldmVsb3BlclwiIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGV4dC1ncmF5LTYwMCcgfSwgeyBjaGlsZHJlbjogXCJCZXN0IGZvciBkZXZlbG9wZXJzIG9yIHBlb3BsZSBwcmltYXJpbHkgdXNpbmcgdGhlIEFQSVwiIH0pKV0gfSkpXSB9KSkgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnc2VwYXJhdG9yIHNlcGFyYXRvci1kYXNoZWQgbXktNScgfSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2QtZmxleCBmdi1yb3cnIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrIGZvcm0tY2hlY2stY3VzdG9tIGZvcm0tY2hlY2stc29saWQnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2staW5wdXQgbWUtMycgfSwgZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3JvbGUnKSwgeyBuYW1lOiAncm9sZScsIHR5cGU6ICdyYWRpbycsIHZhbHVlOiAnQW5hbHlzdCcsIGlkOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzInLCBjaGVja2VkOiBmb3JtaWsudmFsdWVzLnJvbGUgPT09ICdBbmFseXN0JywgZGlzYWJsZWQ6IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZyB9KSksIF9qc3hzKFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2stbGFiZWwnLCBodG1sRm9yOiAna3RfbW9kYWxfdXBkYXRlX3JvbGVfb3B0aW9uXzInIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmdy1ib2xkZXIgdGV4dC1ncmF5LTgwMCcgfSwgeyBjaGlsZHJlbjogXCJBbmFseXN0XCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICd0ZXh0LWdyYXktNjAwJyB9LCB7IGNoaWxkcmVuOiBcIkJlc3QgZm9yIHBlb3BsZSB3aG8gbmVlZCBmdWxsIGFjY2VzcyB0byBhbmFseXRpY3MgZGF0YSwgYnV0IGRvbid0IG5lZWQgdG8gdXBkYXRlIGJ1c2luZXNzIHNldHRpbmdzXCIgfSkpXSB9KSldIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzZXBhcmF0b3Igc2VwYXJhdG9yLWRhc2hlZCBteS01JyB9KSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGZ2LXJvdycgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2sgZm9ybS1jaGVjay1jdXN0b20gZm9ybS1jaGVjay1zb2xpZCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1pbnB1dCBtZS0zJyB9LCBmb3JtaWsuZ2V0RmllbGRQcm9wcygncm9sZScpLCB7IG5hbWU6ICdyb2xlJywgdHlwZTogJ3JhZGlvJywgdmFsdWU6ICdTdXBwb3J0JywgaWQ6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fMycsIGNoZWNrZWQ6IGZvcm1pay52YWx1ZXMucm9sZSA9PT0gJ1N1cHBvcnQnLCBkaXNhYmxlZDogZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nIH0pKSwgX2pzeHMoXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1sYWJlbCcsIGh0bWxGb3I6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fMycgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Z3LWJvbGRlciB0ZXh0LWdyYXktODAwJyB9LCB7IGNoaWxkcmVuOiBcIlN1cHBvcnRcIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RleHQtZ3JheS02MDAnIH0sIHsgY2hpbGRyZW46IFwiQmVzdCBmb3IgZW1wbG95ZWVzIHdobyByZWd1bGFybHkgcmVmdW5kIHBheW1lbnRzIGFuZCByZXNwb25kIHRvIGRpc3B1dGVzXCIgfSkpXSB9KSldIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdzZXBhcmF0b3Igc2VwYXJhdG9yLWRhc2hlZCBteS01JyB9KSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZC1mbGV4IGZ2LXJvdycgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ2Zvcm0tY2hlY2sgZm9ybS1jaGVjay1jdXN0b20gZm9ybS1jaGVjay1zb2xpZCcgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVjay1pbnB1dCBtZS0zJyB9LCBmb3JtaWsuZ2V0RmllbGRQcm9wcygncm9sZScpLCB7IG5hbWU6ICdyb2xlJywgdHlwZTogJ3JhZGlvJywgaWQ6ICdrdF9tb2RhbF91cGRhdGVfcm9sZV9vcHRpb25fNCcsIHZhbHVlOiAnVHJpYWwnLCBjaGVja2VkOiBmb3JtaWsudmFsdWVzLnJvbGUgPT09ICdUcmlhbCcsIGRpc2FibGVkOiBmb3JtaWsuaXNTdWJtaXR0aW5nIHx8IGlzVXNlckxvYWRpbmcgfSkpLCBfanN4cyhcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdmb3JtLWNoZWNrLWxhYmVsJywgaHRtbEZvcjogJ2t0X21vZGFsX3VwZGF0ZV9yb2xlX29wdGlvbl80JyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnctYm9sZGVyIHRleHQtZ3JheS04MDAnIH0sIHsgY2hpbGRyZW46IFwiVHJpYWxcIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3RleHQtZ3JheS02MDAnIH0sIHsgY2hpbGRyZW46IFwiQmVzdCBmb3IgcGVvcGxlIHdobyBuZWVkIHRvIHByZXZpZXcgY29udGVudCBkYXRhLCBidXQgZG9uJ3QgbmVlZCB0byBtYWtlIGFueSB1cGRhdGVzXCIgfSkpXSB9KSldIH0pKSB9KSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAndGV4dC1jZW50ZXIgcHQtMTUnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAncmVzZXQnLCBvbkNsaWNrOiAoKSA9PiBjYW5jZWwoKSwgY2xhc3NOYW1lOiAnYnRuIGJ0bi1saWdodCBtZS0zJywgXCJkYXRhLWt0LXVzZXJzLW1vZGFsLWFjdGlvblwiOiAnY2FuY2VsJywgZGlzYWJsZWQ6IGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZyB9LCB7IGNoaWxkcmVuOiBcIkRpc2NhcmRcIiB9KSksIF9qc3hzKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAnc3VibWl0JywgY2xhc3NOYW1lOiAnYnRuIGJ0bi1wcmltYXJ5JywgXCJkYXRhLWt0LXVzZXJzLW1vZGFsLWFjdGlvblwiOiAnc3VibWl0JywgZGlzYWJsZWQ6IGlzVXNlckxvYWRpbmcgfHwgZm9ybWlrLmlzU3VibWl0dGluZyB8fCAhZm9ybWlrLmlzVmFsaWQgfHwgIWZvcm1pay50b3VjaGVkIH0sIHsgY2hpbGRyZW46IFtfanN4KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnaW5kaWNhdG9yLWxhYmVsJyB9LCB7IGNoaWxkcmVuOiBcIlN1Ym1pdFwiIH0pKSwgKGZvcm1pay5pc1N1Ym1pdHRpbmcgfHwgaXNVc2VyTG9hZGluZykgJiYgKF9qc3hzKFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnaW5kaWNhdG9yLXByb2dyZXNzJyB9LCB7IGNoaWxkcmVuOiBbXCJQbGVhc2Ugd2FpdC4uLlwiLCAnICcsIF9qc3goXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiAnc3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gYWxpZ24tbWlkZGxlIG1zLTInIH0pXSB9KSkpXSB9KSldIH0pKV0gfSkpLCAoZm9ybWlrLmlzU3VibWl0dGluZyB8fCBpc1VzZXJMb2FkaW5nKSAmJiBfanN4KFVzZXJzTGlzdExvYWRpbmcsIHt9KV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJFZGl0TW9kYWxGb3JtO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyRWRpdE1vZGFsRm9ybVwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihVc2VyRWRpdE1vZGFsRm9ybSwgXCJRZTFrUkhpRjRpRXpWalFzNjdJSzhiczJhcVk9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXcsIHVzZVF1ZXJ5UmVzcG9uc2UsIHVzZUZvcm1pa10pO1xuZXhwb3J0IHsgVXNlckVkaXRNb2RhbEZvcm0gfTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBVc2VyRWRpdE1vZGFsRm9ybSB9IGZyb20gJy4vVXNlckVkaXRNb2RhbEZvcm0nO1xuaW1wb3J0IHsgaXNOb3RFbXB0eSwgUVVFUklFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZUxpc3RWaWV3IH0gZnJvbSAnLi4vY29yZS9MaXN0Vmlld1Byb3ZpZGVyJztcbmltcG9ydCB7IGdldFVzZXJCeUlkIH0gZnJvbSAnLi4vY29yZS9fcmVxdWVzdHMnO1xuY29uc3QgVXNlckVkaXRNb2RhbEZvcm1XcmFwcGVyID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgaXRlbUlkRm9yVXBkYXRlLCBzZXRJdGVtSWRGb3JVcGRhdGUgfSA9IHVzZUxpc3RWaWV3KCk7XG4gICAgY29uc3QgZW5hYmxlZFF1ZXJ5ID0gaXNOb3RFbXB0eShpdGVtSWRGb3JVcGRhdGUpO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhOiB1c2VyLCBlcnJvciwgfSA9IHVzZVF1ZXJ5KGAke1FVRVJJRVMuVVNFUlNfTElTVH0tdXNlci0ke2l0ZW1JZEZvclVwZGF0ZX1gLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRVc2VyQnlJZChpdGVtSWRGb3JVcGRhdGUpO1xuICAgIH0sIHtcbiAgICAgICAgY2FjaGVUaW1lOiAwLFxuICAgICAgICBlbmFibGVkOiBlbmFibGVkUXVlcnksXG4gICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICAgIHNldEl0ZW1JZEZvclVwZGF0ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGlmICghaXRlbUlkRm9yVXBkYXRlKSB7XG4gICAgICAgIHJldHVybiBfanN4KFVzZXJFZGl0TW9kYWxGb3JtLCB7IGlzVXNlckxvYWRpbmc6IGlzTG9hZGluZywgdXNlcjogeyBpZDogdW5kZWZpbmVkIH0gfSk7XG4gICAgfVxuICAgIGlmICghaXNMb2FkaW5nICYmICFlcnJvciAmJiB1c2VyKSB7XG4gICAgICAgIHJldHVybiBfanN4KFVzZXJFZGl0TW9kYWxGb3JtLCB7IGlzVXNlckxvYWRpbmc6IGlzTG9hZGluZywgdXNlcjogdXNlciB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gVXNlckVkaXRNb2RhbEZvcm1XcmFwcGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJVc2VyRWRpdE1vZGFsRm9ybVdyYXBwZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlckVkaXRNb2RhbEZvcm1XcmFwcGVyLCBcImVRM1diQms2MmllNWJMUXlYcFNnV0RWWWhCWT1cIiwgZmFsc2UsICgpID0+IFt1c2VMaXN0VmlldywgdXNlUXVlcnldKTtcbmV4cG9ydCB7IFVzZXJFZGl0TW9kYWxGb3JtV3JhcHBlciB9O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBLVEljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VMaXN0VmlldyB9IGZyb20gJy4uL2NvcmUvTGlzdFZpZXdQcm92aWRlcic7XG5jb25zdCBVc2VyRWRpdE1vZGFsSGVhZGVyID0gKCkgPT4ge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIGNvbnN0IHsgc2V0SXRlbUlkRm9yVXBkYXRlIH0gPSB1c2VMaXN0VmlldygpO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ21vZGFsLWhlYWRlcicgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiAnZnctYm9sZGVyJyB9LCB7IGNoaWxkcmVuOiBcIkFkZCBVc2VyXCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6ICdidG4gYnRuLWljb24gYnRuLXNtIGJ0bi1hY3RpdmUtaWNvbi1wcmltYXJ5JywgXCJkYXRhLWt0LXVzZXJzLW1vZGFsLWFjdGlvblwiOiAnY2xvc2UnLCBvbkNsaWNrOiAoKSA9PiBzZXRJdGVtSWRGb3JVcGRhdGUodW5kZWZpbmVkKSwgc3R5bGU6IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9LCB7IGNoaWxkcmVuOiBfanN4KEtUSWNvbiwgeyBpY29uTmFtZTogJ2Nyb3NzJywgY2xhc3NOYW1lOiAnZnMtMScgfSkgfSkpXSB9KSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IFVzZXJFZGl0TW9kYWxIZWFkZXI7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIlVzZXJFZGl0TW9kYWxIZWFkZXJcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIoVXNlckVkaXRNb2RhbEhlYWRlciwgXCJUMXZLTnNOelN6OUdlNHptaUZlUmdDT3J5S2s9XCIsIGZhbHNlLCAoKSA9PiBbdXNlTGlzdFZpZXddKTtcbmV4cG9ydCB7IFVzZXJFZGl0TW9kYWxIZWFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==