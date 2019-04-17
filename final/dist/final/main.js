(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-history/order-history.component */ "./src/app/order-history/order-history.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");






var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "orderHistory", component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryComponent"] },
    { path: "orderDetails", component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'final';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-history/order-history.component */ "./src/app/order-history/order-history.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__["OrderHistoryComponent"],
                _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_11__["ViewDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n    color: #fff;\n    font-size: 11px;\n    font-family: 'Tahoma';\n    background: url(https://zuodahao.neocities.org/IMG_2929.JPG) no-repeat;\n    background-size: 100%;\n}\n\nbutton {\n    width: 100px;\n    margin-left: 20px;\n}\n\nspan {\n    display: inline;\n    /* width: 150px; */\n}\n\n.clear {\n    clear: both;\n    height: 200px;\n}\n\n.item {\n    margin: 10px 10px 0px 10px;\n}\n\np {\n    margin: 10px 0 0 0;\n    /* width: 80% */\n}\n\n.date {\n    color: #ffd502;\n    text-decoration: overline;\n    font-size: 10px;\n    padding: 10px 0 20px 0;\n}\n\n#content_footer p {\n    margin: 10px 30px 10px 30px;\n    padding-top: 20px;\n    font-size: 10px;\n    text-align: left;\n}\n\n.login_box p {\n    margin: 0px 10px 20px 25px;\n    font-size: 9px;\n    color: #fff;\n    text-transform: uppercase;\n}\n\n.content_box_photo h3 {\n    margin: 40px 0px 10px 0px;\n}\n\n#content_footer p {\n    margin: 10px 0px 10px 60px !important;\n    margin: 10px 0px 10px 85px;\n    font-size: 10px;\n    text-align: justify;\n}\n\n.red {\n    color: red;\n}\n\n.yellow {\n    color: #ffd502;\n    font-weight: bold;\n}\n\nth {\n    text-align: center;\n}\n\ntd {\n    text-align: right;\n}\n\nh1 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n    color: #fff;\n}\n\nh2 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 20px;\n    margin: 0px 50px 10px 30px !important;\n    margin: 0px 30px 10px 30px;\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #072450;\n    font-weight: normal;\n}\n\nh3 {\n    margin: 0px 0px 10px 0px;\n    text-transform: uppercase;\n    font-size: 12px;\n    /* color: #fff; */\n}\n\na {\n    text-decoration: none;\n    color: #ffd502;\n}\n\n/*----- MENU ----- */\n\n#nav_list {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    list-style: none;\n    overflow: hidden;\n}\n\n#nav_list li {\n        width: 18%;\n        display: inline-block;\n        overflow: hidden;\n        margin-left: -7px;\n        text-transform: uppercase;\n        font-size: 13px;\n        font-weight: bold;\n        text-align: center;\n    }\n\n.li_nav_body a {\n    height: 20px;\n    line-height: 20px;\n}\n\n.li_nav_footer a {\n    display: block;\n    width: 170px;\n    height: 21px;\n    background-position: 0 0px;\n    padding-left: 25px;\n    line-height: 21px;\n}\n\n.li_nav_body a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_nav_footer a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_active a:active {\n    background-position: 0 -40px;\n    color: #fff;\n}\n\n/*----- LAYOUT ----- */\n\n#container {\n    width: 100%;\n    min-height: 100%;\n    height: 100%;\n    position: relative;\n}\n\n#menu_header {\n    width: 100%;\n    height: 150px;\n    font-size: 13px;\n}\n\n#head_left {\n    width: 47%;\n    float: left;\n    text-align: left;\n    margin: 30px 0 0 30px;\n}\n\n#head_right {\n    width: 47%;\n    float: left;\n    text-align: right;\n    margin: 30px 0 0 10px;\n}\n\n#menu_left {\n    width: 250px;\n    min-height: 100%;\n    margin: 0 0 0 50px;\n    float: left;\n}\n\n.login_box {\n    width: 100%;\n    float: left;\n    text-align: center;\n    margin: 20px 0 0 0;\n}\n\n#head {\n    width: 100%;\n    height: 200px;\n    float: left;\n    text-align: center;\n}\n\n#content {\n    width: 100%;\n    text-align: justify;\n    float: left;\n    margin: 0 0 0 20px;\n}\n\n.content_box_photo {\n    width: 100%;\n    margin: 30px 0 0 0px;\n    float: left;\n    text-align: center;\n}\n\n#content_footer {\n    clear: both;\n    margin-bottom: -70px;\n    height: 50px;\n}\n\n/* 这是新的 */\n\n.shoppingcart {\n    color: #000000;\n    width: 90%;\n    margin-top: 20px;\n    margin-left: 7%;\n    margin-bottom: 50px;\n    background-color: #fff;\n}\n\n/* 这是新的 */\n\n.shoppingcart thead {\n        height: 50px;\n        line-height: 50px;\n    }\n\n/* 这是新的 */\n\n.shoppingcart tbody {\n        height: 20px;\n        line-height: 20px;\n    }\n\n.masonry {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 0;\n       -moz-column-gap: 0;\n            column-gap: 0;\n    /* text-align: center; */\n}\n\n.item {\n    -webkit-column-break-inside: avoid;\n       -moz-column-break-inside: avoid;\n            break-inside: avoid;\n    box-sizing: border-box;\n    padding: 10px;\n    /* background-color: #fff; */\n    margin-left: 30px;\n}\n\n.item_content {\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n}\n\n/*------FOOT------- */\n\n#foot {\n    width: 100%;\n    float: left;\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n}\n\n/*----- IMAGES ----- */\n\na img {\n    border: none;\n}\n\nimg.left,\nimg.center,\nimg.right {\n    padding: 4px;\n    border: 1px solid #a0a0a0;\n}\n\nimg.left {\n    float: left;\n    margin: 0px 12px 5px 0px;\n    background: #fff;\n}\n\nimg.right {\n    float: right;\n    margin: 0px 30px 5px 0px;\n}\n\n/*----- FORM ----- */\n\ninput {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 250px;\n    color: #707070;\n    margin: 0px 0px 0px 0px;\n}\n\n/* 这是新的 */\n\n#tablerow input {\n    border: 0px;\n    font: normal 10px tahoma;\n    width: 90%;\n    color: #707070;\n    margin: 0 0px 20px 20px;\n}\n\ntd.addbtn {\n    text-align: left;\n}\n\n#cartitem input.addbtn {\n    width: 100px;\n    color: #ffd502;\n    font-weight: bold;\n}\n\n#cartitem input {\n    border: none;\n    font: normal 10px tahoma;\n    width: 200px;\n    background-color: black;\n    color: white;\n    margin: 10px 0px 0px 20px;\n}\n\ntextarea.sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 115px;\n    height: 80px;\n    color: #707070;\n    margin: 5px 0px 5px 25px;\n}\n\ninput.sidebar {\n    width: 100%;\n    height: 15px;\n    line-height: 15px;\n    text-decoration: none;\n    color: #ffd502;\n    font-size: 13px;\n    font-weight: bold;\n    background-color: transparent;\n    margin-left: -7px;\n    text-transform: uppercase;\n    text-align: center;\n    border: 0px;\n    margin: 0px 0px 0px 0px;\n}\n\ninput.button_sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 0px 0px 5px 25px;\n}\n\ninput.button_content {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 5px 0px 5px 0px;\n}\n\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n\n#item_content img {\n    cursor: pointer;\n    background: #fff;\n    /* color: inherit; */\n    /* vertical-align: top; */\n    width: 200px;\n    height: 150px;\n    /* margin: 2px; */\n    /* padding: 2px; */\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 1px;\n    transition: all 0.6s;\n}\n\n#item_content img:hover {\n        -webkit-transform: scale(2);\n                transform: scale(2);\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixzRUFBc0U7SUFDdEUscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdGQUFnRjtJQUNoRixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQjsyQkFDdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0ZBQWdGO0lBQ2hGLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIs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QVc7SUFDWCx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFJQSxxRkFBcUY7O0FBRXJGO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUk7UUFDSSwyQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGFob21hJztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly96dW9kYWhhby5uZW9jaXRpZXMub3JnL0lNR18yOTI5LkpQRykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbnNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAvKiB3aWR0aDogMTUwcHg7ICovXG59XG5cbi5jbGVhciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLml0ZW0ge1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgLyogd2lkdGg6IDgwJSAqL1xufVxuXG4uZGF0ZSB7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbn1cblxuI2NvbnRlbnRfZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxvZ2luX2JveCBwIHtcbiAgICBtYXJnaW46IDBweCAxMHB4IDIwcHggMjVweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5jb250ZW50X2JveF9waG90byBoMyB7XG4gICAgbWFyZ2luOiA0MHB4IDBweCAxMHB4IDBweDtcbn1cblxuI2NvbnRlbnRfZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDg1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi55ZWxsb3cge1xuICAgIGNvbG9yOiAjZmZkNTAyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8qIG1hcmdpbjogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG5tYXJnaW46IDEwcHggMHB4IDBweCAwcHg7ICovXG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmgyIHtcbiAgICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggNTBweCAxMHB4IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAzMHB4IDEwcHggMzBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzA3MjQ1MDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oMyB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG59XG5cbi8qLS0tLS0gTUVOVSAtLS0tLSAqL1xuXG4jbmF2X2xpc3Qge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuICAgICNuYXZfbGlzdCBsaSB7XG4gICAgICAgIHdpZHRoOiAxOCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbi5saV9uYXZfYm9keSBhIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5saV9uYXZfZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4ubGlfbmF2X2JvZHkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjBweDtcbiAgICBjb2xvcjogIzAxNjAwMTtcbn1cblxuLmxpX25hdl9mb290ZXIgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjBweDtcbiAgICBjb2xvcjogIzAxNjAwMTtcbn1cblxuLmxpX2FjdGl2ZSBhOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4vKi0tLS0tIExBWU9VVCAtLS0tLSAqL1xuXG4jY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuI21lbnVfaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI2hlYWRfbGVmdCB7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMzBweCAwIDAgMzBweDtcbn1cblxuI2hlYWRfcmlnaHQge1xuICAgIHdpZHRoOiA0NyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAzMHB4IDAgMCAxMHB4O1xufVxuXG4jbWVudV9sZWZ0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAwIDUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sb2dpbl9ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XG59XG5cbiNoZWFkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuXG4uY29udGVudF9ib3hfcGhvdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMzBweCAwIDAgMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRlbnRfZm9vdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNzBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4vKiDov5nmmK/mlrDnmoQgKi9cbi5zaG9wcGluZ2NhcnQge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuICAgIC8qIOi/meaYr+aWsOeahCAqL1xuICAgIC5zaG9wcGluZ2NhcnQgdGhlYWQge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAvKiDov5nmmK/mlrDnmoQgKi9cbiAgICAuc2hvcHBpbmdjYXJ0IHRib2R5IHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG5cbi5tYXNvbnJ5IHtcbiAgICBjb2x1bW4tY291bnQ6IDM7XG4gICAgY29sdW1uLWdhcDogMDtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cbi5pdGVtIHtcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uaXRlbV9jb250ZW50IHtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi8qLS0tLS0tRk9PVC0tLS0tLS0gKi9cblxuI2Zvb3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLyotLS0tLSBJTUFHRVMgLS0tLS0gKi9cblxuYSBpbWcge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuaW1nLmxlZnQsXG5pbWcuY2VudGVyLFxuaW1nLnJpZ2h0IHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcbn1cblxuaW1nLmxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMHB4IDEycHggNXB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pbWcucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDBweCAzMHB4IDVweCAwcHg7XG59XG5cbi8qLS0tLS0gRk9STSAtLS0tLSAqL1xuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuLyog6L+Z5piv5paw55qEICovXG4jdGFibGVyb3cgaW5wdXQge1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbjogMCAwcHggMjBweCAyMHB4O1xufVxuXG50ZC5hZGRidG4ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNjYXJ0aXRlbSBpbnB1dC5hZGRidG4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjb2xvcjogI2ZmZDUwMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NhcnRpdGVtIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjBweDtcbn1cblxudGV4dGFyZWEuc2lkZWJhciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDI1cHg7XG59XG5cbmlucHV0LnNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuXG5pbnB1dC5idXR0b25fc2lkZWJhciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDExOXB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbjogMHB4IDBweCA1cHggMjVweDtcbn1cblxuaW5wdXQuYnV0dG9uX2NvbnRlbnQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAxMTlweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcbn1cblxuXG5cbi8qLS0tLS0gSG92ZXJib3ggQ29kZSAtIGdldCBjb2RlIGZvdW5kIGF0IGh0dHA6Ly9ob3N0LnNvbnNwcmluZy5jb20vaG92ZXJib3gvIC0tLS0tLSovXG5cbiNpdGVtX2NvbnRlbnQgaW1nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAqL1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIC8qIG1hcmdpbjogMnB4OyAqL1xuICAgIC8qIHBhZGRpbmc6IDJweDsgKi9cbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1cblxuICAgICNpdGVtX2NvbnRlbnQgaW1nOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Sneker Shopping Website</p>\n<h3 *ngIf=\"user\">{{user.userName}}</h3>\n<div id=\"container\">\n  <div id=\"head\">\n      <div id=\"menu_header\">\n          <span id=\"head_left\" class=\"yellow\">Welcome!</span>\n          <span id=\"head_right\" class=\"yellow\"></span>\n      </div>\n  </div>\n  <br />\n  <br />\n  <div id=\"content\">\n      <div class=\"login_box\">\n          <ul id=\"nav_list\">\n              <li class=\"li_nav_body\">\n                  <form asp-controller=\"Client\" asp-action=\"Crash\" method=\"get\">\n                      <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n                  </form>\n              </li>\n          </ul>\n      </div>\n      <div class=\"content_box_photo\">\n          <h3 class=\"yellow\">Login</h3>\n          <div>\n              <form [formGroup]=\"loginInfoForm\" class=\"form\">\n                  <br />\n                  <br />\n                  <div>\n                      <input type=\"text\" formControlName=\"emailAddress\" name=\"emailAddress\" placeholder=\"EmailAddress\" class=\"enter\" />\n                  </div>\n                  <br />\n                  <br />\n                  <div>\n                      <input type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\" class=\"enter\" />\n                  </div>\n                  <br />\n                  <br />\n                  <br />\n                  <div>\n                      <button type=\"submit\" (click)=\"onLogin()\" name=\"loginBtn\" style=\"width:150px\" class=\"enter\">Log In</button>\n                  </div>     \n              </form>\n              \n          </div>\n      </div>\n  </div>\n  \n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_classes_LoginInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes/LoginInfo */ "./src/app/shared/classes/LoginInfo.ts");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/user-info-details.service */ "./src/app/shared/services/user-info-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, router, userInfoDetailsService) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.userInfoDetailsService = userInfoDetailsService;
        this.title = "Sneaker Website Login Page";
        this.loginInfoForm = this.fb.group({
            emailAddress: [''],
            password: ['']
        });
        // console.log("Try to get API");
        // this.loginInfo = new LoginInfo(this.loginInfoForm.value.emailAddress, this.loginInfoForm.value.password);
        // this.conacts();
        // this.onLogin();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // conacts(){
    //   console.log(this.loginInfo.emailAddress+"1");
    //   this.onLogin().subscribe(loginInfo =>{ loginInfo = loginInfo;
    //   })
    // }
    LoginComponent.prototype.onLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loginInfoForm.value.emailAddress == '' || this.loginInfoForm.value.password == '')) return [3 /*break*/, 1];
                        alert("All fields are required, please try again!");
                        return [3 /*break*/, 3];
                    case 1:
                        this.loginInfo = new _shared_classes_LoginInfo__WEBPACK_IMPORTED_MODULE_3__["LoginInfo"](this.loginInfoForm.value.emailAddress, this.loginInfoForm.value.password);
                        promise = new Promise(function (resolve, reject) {
                            _this.loginService.login(_this.loginInfo)
                                .toPromise()
                                .then(function (res) {
                                _this.user = res;
                                resolve();
                                //console.log(this.user.userName);
                                //console.log(this.user.userID) 
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 2:
                        _a.sent();
                        //console.log(this.user.userName);
                        //console.log(this.user.userID);
                        if (this.user.pwd == "wrong") {
                            alert("Wrong password, please try again!");
                        }
                        else if (this.user.pwd == "noExist") {
                            alert('Please register first!');
                        }
                        else {
                            //console.log("tiao");
                            //console.log(this.user.balance);
                            this.userInfoDetailsService.setUserInfoDetails(this.user);
                            this.router.navigate(['/orderHistory']);
                        }
                        ;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoDetailsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/order-history/order-history.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-history/order-history.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n    color: #fff;\n    font-size: 11px;\n    font-family: 'Tahoma';\n    background: url(https://zuodahao.neocities.org/IMG_2929.JPG) no-repeat;\n    background-size: 100%;\n}\n\nbutton {\n    width: 100px;\n    margin-left: 20px;\n}\n\nspan {\n    display: inline;\n    /* width: 150px; */\n}\n\n.clear {\n    clear: both;\n    height: 200px;\n}\n\n.item {\n    margin: 10px 10px 0px 10px;\n}\n\np {\n    margin: 10px 0 0 0;\n    /* width: 80% */\n}\n\n.date {\n    color: #ffd502;\n    text-decoration: overline;\n    font-size: 10px;\n    padding: 10px 0 20px 0;\n}\n\n#content_footer p {\n    margin: 10px 30px 10px 30px;\n    padding-top: 20px;\n    font-size: 10px;\n    text-align: left;\n}\n\n.login_box p {\n    margin: 0px 10px 20px 25px;\n    font-size: 9px;\n    color: #fff;\n    text-transform: uppercase;\n}\n\n.content_box_photo h3 {\n    margin: 40px 0px 10px 0px;\n}\n\n#content_footer p {\n    margin: 10px 0px 10px 60px !important;\n    margin: 10px 0px 10px 85px;\n    font-size: 10px;\n    text-align: justify;\n}\n\n#tablerow p {\n    text-align: center;\n}\n\n.red {\n    color: red;\n}\n\n.yellow {\n    color: #ffd502;\n    font-weight: bold;\n}\n\nth {\n    text-align: center;\n}\n\ntd {\n    text-align: right;\n}\n\nh1 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n    color: #fff;\n}\n\nh2 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 20px;\n    margin: 0px 50px 10px 30px !important;\n    margin: 0px 30px 10px 30px;\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #072450;\n    font-weight: normal;\n}\n\nh3 {\n    margin: 0px 0px 10px 0px;\n    text-transform: uppercase;\n    font-size: 12px;\n    /* color: #fff; */\n}\n\na {\n    text-decoration: none;\n    color: #ffd502;\n}\n\n/*----- MENU ----- */\n\n#nav_list {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    list-style: none;\n    overflow: hidden;\n}\n\n#nav_list li {\n        width: 18%;\n        display: inline-block;\n        overflow: hidden;\n        margin-left: -7px;\n        text-transform: uppercase;\n        font-size: 13px;\n        font-weight: bold;\n        text-align: center;\n    }\n\n.li_nav_body a {\n    height: 20px;\n    line-height: 20px;\n}\n\n.li_nav_footer a {\n    display: block;\n    width: 170px;\n    height: 21px;\n    background-position: 0 0px;\n    padding-left: 25px;\n    line-height: 21px;\n}\n\n.li_nav_body a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_nav_footer a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_active a:active {\n    background-position: 0 -40px;\n    color: #fff;\n}\n\n/*----- LAYOUT ----- */\n\n#container {\n    width: 100%;\n    min-height: 100%;\n    height: 100%;\n    position: relative;\n}\n\n#menu_header {\n    width: 100%;\n    height: 150px;\n    font-size: 13px;\n}\n\n#head_left {\n    width: 47%;\n    float: left;\n    text-align: left;\n    margin: 30px 0 0 30px;\n}\n\n#head_right {\n    width: 47%;\n    float: left;\n    text-align: right;\n    margin: 30px 0 0 10px;\n}\n\n#menu_left {\n    width: 250px;\n    min-height: 100%;\n    margin: 0 0 0 50px;\n    float: left;\n}\n\n.login_box {\n    width: 100%;\n    float: left;\n    text-align: center;\n    margin: 20px 0 0 0;\n}\n\n#head {\n    width: 100%;\n    height: 200px;\n    float: left;\n    text-align: center;\n}\n\n#content {\n    width: 100%;\n    text-align: center;\n    float: left;\n    margin: 0 0 0 20px;\n}\n\n.content_box_photo {\n    width: 100%;\n    margin: 30px 0 0 0px;\n    float: left;\n    text-align: center;\n}\n\n#content_footer {\n    clear: both;\n    margin-bottom: -70px;\n    height: 50px;\n}\n\n/* 这是新的 */\n\n.shoppingcart {\n    color: #000000;\n    width: 90%;\n    margin-top: 20px;\n    margin-left: 7%;\n    margin-bottom: 50px;\n    background-color: #fff;\n}\n\n/* 这是新的 */\n\n.shoppingcart thead {\n        height: 50px;\n        line-height: 50px;\n    }\n\n/* 这是新的 */\n\n.shoppingcart tbody {\n        height: 20px;\n        line-height: 20px;\n    }\n\n.masonry {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 0;\n       -moz-column-gap: 0;\n            column-gap: 0;\n    /* text-align: center; */\n}\n\n.item {\n    -webkit-column-break-inside: avoid;\n       -moz-column-break-inside: avoid;\n            break-inside: avoid;\n    box-sizing: border-box;\n    padding: 10px;\n    /* background-color: #fff; */\n    margin-left: 30px;\n}\n\n.item_content {\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n}\n\n/*------FOOT------- */\n\n#foot {\n    width: 100%;\n    float: left;\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n}\n\n/*----- IMAGES ----- */\n\na img {\n    border: none;\n}\n\nimg.left,\nimg.center,\nimg.right {\n    padding: 4px;\n    border: 1px solid #a0a0a0;\n}\n\nimg.left {\n    float: left;\n    margin: 0px 12px 5px 0px;\n    background: #fff;\n}\n\nimg.right {\n    float: right;\n    margin: 0px 30px 5px 0px;\n}\n\n/*----- FORM ----- */\n\ninput {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 250px;\n    color: #707070;\n    margin: 0px 0px 0px 0px;\n}\n\n/* 这是新的 */\n\n#tablerow input {\n    border: 0px;\n    font: normal 10px tahoma;\n    width: 90%;\n    color: #707070;\n    margin: 0 0px 20px 20px;\n}\n\ntd.addbtn {\n    text-align: left;\n}\n\n#cartitem input.addbtn {\n    width: 100px;\n    color: #ffd502;\n    font-weight: bold;\n}\n\n#cartitem input {\n    border: none;\n    font: normal 10px tahoma;\n    width: 200px;\n    background-color: black;\n    color: white;\n    margin: 10px 0px 0px 20px;\n}\n\ntextarea.sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 115px;\n    height: 80px;\n    color: #707070;\n    margin: 5px 0px 5px 25px;\n}\n\ninput.sidebar {\n    width: 100%;\n    height: 15px;\n    line-height: 15px;\n    text-decoration: none;\n    color: #ffd502;\n    font-size: 13px;\n    font-weight: bold;\n    background-color: transparent;\n    margin-left: -7px;\n    text-transform: uppercase;\n    text-align: center;\n    border: 0px;\n    margin: 0px 0px 0px 0px;\n}\n\ninput.button_sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 0px 0px 5px 25px;\n}\n\ninput.button_content {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 5px 0px 5px 0px;\n}\n\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n\n#item_content img {\n    cursor: pointer;\n    background: #fff;\n    /* color: inherit; */\n    /* vertical-align: top; */\n    width: 200px;\n    height: 150px;\n    /* margin: 2px; */\n    /* padding: 2px; */\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 1px;\n    transition: all 0.6s;\n}\n\n#item_content img:hover {\n        -webkit-transform: scale(2);\n                transform: scale(2);\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsc0VBQXNFO0lBQ3RFLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnRkFBZ0Y7SUFDaEYsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkI7MkJBQ3VCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdGQUFnRjtJQUNoRixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7QUFD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dXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUYWhvbWEnO1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3p1b2RhaGFvLm5lb2NpdGllcy5vcmcvSU1HXzI5MjkuSlBHKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIC8qIHdpZHRoOiAxNTBweDsgKi9cbn1cblxuLmNsZWFyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uaXRlbSB7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbnAge1xuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAvKiB3aWR0aDogODAlICovXG59XG5cbi5kYXRlIHtcbiAgICBjb2xvcjogI2ZmZDUwMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xufVxuXG4jY29udGVudF9mb290ZXIgcCB7XG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubG9naW5fYm94IHAge1xuICAgIG1hcmdpbjogMHB4IDEwcHggMjBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLmNvbnRlbnRfYm94X3Bob3RvIGgzIHtcbiAgICBtYXJnaW46IDQwcHggMHB4IDEwcHggMHB4O1xufVxuXG4jY29udGVudF9mb290ZXIgcCB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggODVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuI3RhYmxlcm93IHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnllbGxvdyB7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRoIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLyogbWFyZ2luOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbm1hcmdpbjogMTBweCAwcHggMHB4IDBweDsgKi9cbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDBweCA1MHB4IDEwcHggMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4IDMwcHggMTBweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMDcyNDUwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLyogY29sb3I6ICNmZmY7ICovXG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZDUwMjtcbn1cblxuLyotLS0tLSBNRU5VIC0tLS0tICovXG5cbiNuYXZfbGlzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4gICAgI25hdl9saXN0IGxpIHtcbiAgICAgICAgd2lkdGg6IDE4JTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuLmxpX25hdl9ib2R5IGEge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmxpX25hdl9mb290ZXIgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5saV9uYXZfYm9keSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMHB4O1xuICAgIGNvbG9yOiAjMDE2MDAxO1xufVxuXG4ubGlfbmF2X2Zvb3RlciBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMHB4O1xuICAgIGNvbG9yOiAjMDE2MDAxO1xufVxuXG4ubGlfYWN0aXZlIGE6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8qLS0tLS0gTEFZT1VUIC0tLS0tICovXG5cbiNjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4jbWVudV9oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jaGVhZF9sZWZ0IHtcbiAgICB3aWR0aDogNDclO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAzMHB4IDAgMCAzMHB4O1xufVxuXG4jaGVhZF9yaWdodCB7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDMwcHggMCAwIDEwcHg7XG59XG5cbiNtZW51X2xlZnQge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDAgNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ2luX2JveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbn1cblxuI2hlYWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cblxuLmNvbnRlbnRfYm94X3Bob3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMCAwIDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50X2Zvb3RlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLyog6L+Z5piv5paw55qEICovXG4uc2hvcHBpbmdjYXJ0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbiAgICAvKiDov5nmmK/mlrDnmoQgKi9cbiAgICAuc2hvcHBpbmdjYXJ0IHRoZWFkIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB9XG4gICAgLyog6L+Z5piv5paw55qEICovXG4gICAgLnNob3BwaW5nY2FydCB0Ym9keSB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4ubWFzb25yeSB7XG4gICAgY29sdW1uLWNvdW50OiAzO1xuICAgIGNvbHVtbi1nYXA6IDA7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuXG4uaXRlbSB7XG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLml0ZW1fY29udGVudCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4vKi0tLS0tLUZPT1QtLS0tLS0tICovXG5cbiNmb290IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5cbi8qLS0tLS0gSU1BR0VTIC0tLS0tICovXG5cbmEgaW1nIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmltZy5sZWZ0LFxuaW1nLmNlbnRlcixcbmltZy5yaWdodCB7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XG59XG5cbmltZy5sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDBweCAxMnB4IDVweCAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW1nLnJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAwcHggMzBweCA1cHggMHB4O1xufVxuXG4vKi0tLS0tIEZPUk0gLS0tLS0gKi9cblxuaW5wdXQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbn1cbi8qIOi/meaYr+aWsOeahCAqL1xuI3RhYmxlcm93IGlucHV0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDAgMHB4IDIwcHggMjBweDtcbn1cblxudGQuYWRkYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY2FydGl0ZW0gaW5wdXQuYWRkYnRuIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjYXJ0aXRlbSBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDIwcHg7XG59XG5cbnRleHRhcmVhLnNpZGViYXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAyNXB4O1xufVxuXG5pbnB1dC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZkNTAyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDBweDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbn1cblxuaW5wdXQuYnV0dG9uX3NpZGViYXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAxMTlweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDBweCAwcHggNXB4IDI1cHg7XG59XG5cbmlucHV0LmJ1dHRvbl9jb250ZW50IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgICB3aWR0aDogMTE5cHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XG59XG5cblxuXG4vKi0tLS0tIEhvdmVyYm94IENvZGUgLSBnZXQgY29kZSBmb3VuZCBhdCBodHRwOi8vaG9zdC5zb25zcHJpbmcuY29tL2hvdmVyYm94LyAtLS0tLS0qL1xuXG4jaXRlbV9jb250ZW50IGltZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLyogY29sb3I6IGluaGVyaXQ7ICovXG4gICAgLyogdmVydGljYWwtYWxpZ246IHRvcDsgKi9cbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICAvKiBtYXJnaW46IDJweDsgKi9cbiAgICAvKiBwYWRkaW5nOiAycHg7ICovXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG59XG5cbiAgICAjaXRlbV9jb250ZW50IGltZzpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/order-history/order-history.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-history/order-history.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-history works, this is {{user.userID}} order!\n</p>\n\n<div id=\"container\">\n  <div id=\"head\">\n      <div id=\"menu_header\">\n          <span id=\"head_left\" class=\"yellow\"></span>\n          <span id=\"head_right\" class=\"yellow\">Your balance is {{user.balance}}!</span>\n      </div>\n  </div>\n  <br />\n  <br />\n  <div id=\"content\">\n      <!-- <div class=\"login_box\">\n          <ul id=\"nav_list\">\n              <li class=\"li_nav_body\">\n                  <form method=\"post\" asp-action=\"getAllItems\" asp-controller=\"Client\">\n                      <input class=\"sidebar\" type=\"hidden\" name=\"userID\" value=@ViewBag.User.userID>\n                      <input class=\"sidebar\" type=\"submit\" name=\"backHomepageBtn\" value=\"Keep Shopping\" />\n                  </form>\n              </li>\n              <li class=\"li_nav_body\">\n                  <form asp-action=\"LoginPage\" asp-controller=\"Client\" method=\"get\">\n                      <input class=\"sidebar\" type=\"submit\" name=\"LogoutBtn\" value=\"Log out\" />\n                  </form>\n              </li>\n              <li class=\"li_nav_body\">\n                  <form asp-controller=\"Client\" asp-action=\"Crash\" method=\"get\">\n                      <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n                  </form>\n              </li>\n          </ul>\n      </div> -->\n\n      <div class=\"content_box_photo\">\n          <div>\n              <br />\n          </div>\n          <div class=\"content\">\n              <h3 class=\"yellow\">Hi, {{user.userName}}, here is all your order history!</h3>\n              <table class=\"shoppingcart\">\n                  <thead>\n                      <tr id=\"tablehead\" style=\"text-align:center; font-size:9px\">\n                          <th>\n                              Order ID\n                          </th>\n                          <th>\n                              Order Date\n                          </th>\n                          <th>\n                              Order Cost\n                          </th>\n                          <th></th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                    \n                      <tr id=\"tablerow\" *ngFor=\"let order of vieworders\">\n                        <!-- <form [formGroup]=\"ordersForm\" class=\"form\"> -->\n                          <td>\n                              <input style=\"text-align:center;\" type=\"text\" name=\"orderID\" value={{order.orderID}} readonly=\"readonly\" />\n                          </td>\n                          <td>\n                              <input style=\"text-align:center;\" type=\"text\" name=\"orderDate\" value={{order.orderDate}} readonly=\"readonly\" />\n                          </td>\n                          <td>\n                              <input style=\"text-align:center;\" type=\"text\" name=\"totalCost\" value={{order.totalCost}} readonly=\"readonly\" />\n                          </td>\n                          <td>\n                              <button type=\"submit\" (click)=\"viewdetails(order)\" name=\"viewdetailsBtn\" style=\"width:150px;text-align:center;\" class=\"enter\">View This Order Details</button>\n                          </td>\n                          <!-- </form> -->\n                      </tr>\n                  \n                  </tbody>\n              </table>\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/order-history/order-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-history/order-history.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes/userModel */ "./src/app/shared/classes/userModel.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info-details.service */ "./src/app/shared/services/user-info-details.service.ts");
/* harmony import */ var _shared_services_get_all_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/get-all-orders.service */ "./src/app/shared/services/get-all-orders.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_classes_OrderInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/classes/OrderInfo */ "./src/app/shared/classes/OrderInfo.ts");
/* harmony import */ var _shared_services_order_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/order-detail.service */ "./src/app/shared/services/order-detail.service.ts");









// import 'rxjs/add/operator/toPromise';
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(fb, orderInfo, userInfoDetailsService, getAllOrdersService, orderDetailService, router) {
        this.fb = fb;
        this.orderInfo = orderInfo;
        this.userInfoDetailsService = userInfoDetailsService;
        this.getAllOrdersService = getAllOrdersService;
        this.orderDetailService = orderDetailService;
        this.router = router;
        this.viewdetailsForm = this.fb.group({
            orderID: [''],
            orderDate: [''],
            totalCost: ['']
        });
        this.user = this.userInfoDetailsService.getUserInfoDetails();
        this.orders = [];
        this.vieworders = [];
        this.details = [];
        this.userID = _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].userID;
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
        console.log(this.user.balance);
        console.log(this.userID);
        this.getOrders();
        //console.log(this.orders[1].itemName);
    };
    OrderHistoryComponent.prototype.getOrders = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise_1, i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise_1 = new Promise(function (resolve, reject) {
                            _this.getAllOrdersService.getAllOrders(_this.userID)
                                .toPromise()
                                .then(function (res) {
                                _this.orders = res;
                                resolve();
                            });
                        });
                        return [4 /*yield*/, promise_1];
                    case 1:
                        _a.sent();
                        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! this need navigate to homepage !!!!!!!!!!!!!!!!!!!!!!!!!!
                        if (this.orders.length == 0) {
                            alert("Oh, you haven't buy anything here, go and get some cool sneakers!");
                        }
                        else if (this.orders.length == 1) {
                            if (this.orders[0].orderID == this.orders[1].orderID)
                                this.vieworders.push(this.orders[0]);
                            else {
                                this.vieworders.push(this.orders[0]);
                                this.vieworders.push(this.orders[1]);
                            }
                        }
                        else {
                            for (i = 0; i < this.orders.length - 2; i++) {
                                if (this.orders[i].orderID != this.orders[i + 1].orderID) {
                                    this.vieworders.push(this.orders[i]);
                                }
                            }
                            this.vieworders.push(this.orders[this.orders.length - 1]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //!!!!!!!!!!!!!!!!!!!!!!!!!! this needs to be linked with details component !!!!!!!!!!!!!!!
    OrderHistoryComponent.prototype.viewdetails = function (data) {
        for (var i = 0; i < this.orders.length - 1; i++) {
            if (this.orders[i].orderID == data.orderID) {
                this.details.push(this.orders[i]);
            }
        }
        // const promise_2 = new Promise((resolve, reject) => {
        this.orderDetailService.setDetails(this.details);
        //   .toPromise()
        //     .then(
        //       res => { // Success
        //         this.details = res;
        //         resolve();
        //       },         
        //     );
        // });
        // await promise_2;
        console.log("*********************");
        console.log(this.details);
        this.router.navigate(['/orderDetails']);
    };
    OrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/order-history/order-history.component.html"),
            providers: [
                _shared_classes_OrderInfo__WEBPACK_IMPORTED_MODULE_7__["OrderInfo"] // added class in the providers
            ],
            styles: [__webpack_require__(/*! ./order-history.component.css */ "./src/app/order-history/order-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_classes_OrderInfo__WEBPACK_IMPORTED_MODULE_7__["OrderInfo"],
            _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoDetailsService"],
            _shared_services_get_all_orders_service__WEBPACK_IMPORTED_MODULE_4__["GetAllOrdersService"],
            _shared_services_order_detail_service__WEBPACK_IMPORTED_MODULE_8__["OrderDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/shared/classes/LoginInfo.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/classes/LoginInfo.ts ***!
  \*********************************************/
/*! exports provided: LoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfo", function() { return LoginInfo; });
var LoginInfo = /** @class */ (function () {
    function LoginInfo(emailAddress, pwd) {
        this.emailAddress = emailAddress;
        this.pwd = pwd;
        this.emailAddress = emailAddress;
        this.pwd = pwd;
    }
    return LoginInfo;
}());



/***/ }),

/***/ "./src/app/shared/classes/OrderInfo.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/classes/OrderInfo.ts ***!
  \*********************************************/
/*! exports provided: OrderInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfo", function() { return OrderInfo; });
var OrderInfo = /** @class */ (function () {
    function OrderInfo() {
    }
    return OrderInfo;
}());



/***/ }),

/***/ "./src/app/shared/classes/userModel.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/classes/userModel.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var userModel = {
    userName: '',
    emailAddress: '',
    pwd: '',
    userID: null,
    balance: null,
    shippingAddress: '',
    phoneNo: '',
    zipCode: '',
    country: ''
};
/* harmony default export */ __webpack_exports__["default"] = (userModel);


/***/ }),

/***/ "./src/app/shared/services/get-all-orders.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/get-all-orders.service.ts ***!
  \***********************************************************/
/*! exports provided: GetAllOrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllOrdersService", function() { return GetAllOrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetAllOrdersService = /** @class */ (function () {
    function GetAllOrdersService(http) {
        this.http = http;
    }
    GetAllOrdersService.prototype.getAllOrders = function (userID) {
        console.log(userID);
        return this.http.post("https://sneakerx-api-final.azurewebsites.net/api/Server/myOrder", userID);
    };
    GetAllOrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetAllOrdersService);
    return GetAllOrdersService;
}());



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (loginInfo) {
        //console.log(loginInfo.emailAddress+"service");
        return this.http.post("https://sneakerx-api-final.azurewebsites.net/api/Server/login", loginInfo);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/services/order-detail.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/order-detail.service.ts ***!
  \*********************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderDetailService = /** @class */ (function () {
    function OrderDetailService() {
        this.orderDetails = [];
    }
    OrderDetailService.prototype.setDetails = function (details) {
        for (var i = 0; i < details.length - 1; i++) {
            this.orderDetails.push(details[i]);
        }
        return this.orderDetails;
    };
    OrderDetailService.prototype.sendDetails = function () {
        return this.orderDetails;
    };
    OrderDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderDetailService);
    return OrderDetailService;
}());



/***/ }),

/***/ "./src/app/shared/services/user-info-details.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/user-info-details.service.ts ***!
  \**************************************************************/
/*! exports provided: UserInfoDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoDetailsService", function() { return UserInfoDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/userModel */ "./src/app/shared/classes/userModel.ts");



var UserInfoDetailsService = /** @class */ (function () {
    function UserInfoDetailsService() {
    }
    UserInfoDetailsService.prototype.setUserInfoDetails = function (user) {
        //console.log(user.balance+" service");
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].balance = user.balance;
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].country = user.country;
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].emailAddress = user.emailAddress;
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].phoneNo = user.phoneNo;
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].pwd = user.pwd;
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].shippingAddress = user.shippingAddress;
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].userID = user.userID;
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].userName = user.userName;
        _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"].zipCode = user.zipCode;
    };
    UserInfoDetailsService.prototype.getUserInfoDetails = function () {
        return _classes_userModel__WEBPACK_IMPORTED_MODULE_2__["default"];
    };
    UserInfoDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInfoDetailsService);
    return UserInfoDetailsService;
}());



/***/ }),

/***/ "./src/app/view-details/view-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-details/view-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZGV0YWlscy92aWV3LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view-details/view-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-details/view-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  view-details works!\n</p> --> \n\n\n<div id=\"container\">\n  <div id=\"head\">\n      <div id=\"menu_header\">\n          <span id=\"head_left\" class=\"yellow\"></span>\n          <!-- <span id=\"head_right\" class=\"yellow\">Your balance is @ViewBag.User.balance!</span> -->\n      </div>\n  </div>\n  <br />\n  <br />\n  <div id=\"content\">\n      <!-- <div class=\"login_box\">\n          <ul id=\"nav_list\">\n              <li class=\"li_nav_body\">\n                  <form method=\"post\" asp-action=\"getAllItems\" asp-controller=\"Client\">\n                      <input class=\"sidebar\" type=\"hidden\" name=\"userID\" value=@ViewBag.User.userID>\n                      <input class=\"sidebar\" type=\"submit\" name=\"backHomepageBtn\" value=\"Keep Shopping\" />\n                      </form>\n              </li>\n              <li class=\"li_nav_body\">\n                  <form asp-action=\"LoginPage\" asp-controller=\"Client\" method=\"get\">\n                      <input class=\"sidebar\" type=\"submit\" name=\"LogoutBtn\" value=\"Log out\" />\n                  </form>\n              </li>\n              <li class=\"li_nav_body\">\n                  <form asp-controller=\"Client\" asp-action=\"Crash\" method=\"get\">\n                      <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n                  </form>\n              </li>\n          </ul>\n      </div> -->\n\n      <div class=\"content_box_photo\">\n          <h3 class=\"yellow\">Hi, these are the details of Order: {{details[0].orderID}} </h3>\n          <div class=\"content\">\n              <table class=\"shoppingcart\">\n                  <thead>\n                      <tr id=\"tablehead\" style=\"text-align:center; font-size:9px\">\n                          <th>\n                              Item ID\n                          </th>\n                          <th>\n                              Item Name\n                          </th>\n                          <th>\n                              Item Size\n                          </th>\n                          <th>\n                              Item Amonut\n                          </th>\n                          <th>\n                              Item Prive\n                          </th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr id=\"tablerow\" style=\"text-align: center;\" *ngFor=\"let order of details\">\n                          <td>\n                              {{order.itemID}}\n                          </td>\n                          <td>\n                              {{order.itemName}}\n                          </td>\n                          <td>\n                              {{order.itemSize}}\n                          </td>\n                          <td>\n                              {{order.itemBought}}\n                          </td>\n                          <td>\n                              {{order.itemPrice}}\n                          </td>\n                      </tr>     \n                  </tbody>\n              </table>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view-details/view-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-details/view-details.component.ts ***!
  \********************************************************/
/*! exports provided: ViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailsComponent", function() { return ViewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_order_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/order-detail.service */ "./src/app/shared/services/order-detail.service.ts");




// import 'rxjs/add/operator/toPromise';
var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(orderDetailService, router) {
        this.orderDetailService = orderDetailService;
        this.router = router;
        this.details = [];
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
        this.viewDetails();
    };
    ViewDetailsComponent.prototype.viewDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (resolve, reject) {
                            _this.details = _this.orderDetailService.sendDetails()
                                .toPromise()
                                .then(function (res) {
                                _this.details = res;
                                console.log(_this.details);
                                resolve();
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-details',
            template: __webpack_require__(/*! ./view-details.component.html */ "./src/app/view-details/view-details.component.html"),
            styles: [__webpack_require__(/*! ./view-details.component.css */ "./src/app/view-details/view-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_order_detail_service__WEBPACK_IMPORTED_MODULE_3__["OrderDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/G/Documents/2019_Spring/web_tools_6250/final/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map