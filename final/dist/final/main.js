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





var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "orderHistory", component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryComponent"] }
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











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__["OrderHistoryComponent"]
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

module.exports = "<p>Sneker Shopping Website</p>\n<h3 *ngIf=\"user\">{{user.userName}}</h3>\n<div id=\"container\">\n  <div id=\"head\">\n      <div id=\"menu_header\">\n          <span id=\"head_left\" class=\"yellow\">Welcome!</span>\n          <span id=\"head_right\" class=\"yellow\"></span>\n      </div>\n  </div>\n  <br />\n  <br />\n  <div id=\"content\">\n      <div class=\"login_box\">\n          <ul id=\"nav_list\">\n              <li class=\"li_nav_body\">\n                  <form asp-controller=\"Client\" asp-action=\"Crash\" method=\"get\">\n                      <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n                  </form>\n              </li>\n          </ul>\n      </div>\n      <div class=\"content_box_photo\">\n          <h3 class=\"yellow\">Login</h3>\n          <div>\n              <form [formGroup]=\"loginInfoForm\" class=\"form\">\n             \n                  <br />\n                  <br />\n                  <div>\n                      <input type=\"text\" formControlName=\"emailAddress\" name=\"emailAddress\" placeholder=\"EmailAddress\" class=\"enter\" />\n                  </div>\n                  <br />\n                  <br />\n                  <div>\n                      <input type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\" class=\"enter\" />\n                  </div>\n                  <br />\n                  <br />\n                  <br />\n                  <div>\n                      <button type=\"submit\" (click)=\"onLogin()\" name=\"loginBtn\" style=\"width:150px\" class=\"enter\">Log In</button>\n                  </div>\n                  \n              </form>\n              \n          </div>\n      </div>\n  </div>\n  \n</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, AppService, router) {
        this.fb = fb;
        this.AppService = AppService;
        this.router = router;
        this.title = "Sneaker Website Login Page";
        //private apiURL = "https://sneakerx-api-final.azurewebsites.net";
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
                            _this.AppService.login(_this.loginInfo)
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
                            console.log("tiao");
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_login_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/order-history/order-history.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-history/order-history.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-history works!\n</p>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/order-history/order-history.component.html"),
            styles: [__webpack_require__(/*! ./order-history.component.css */ "./src/app/order-history/order-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.login = function (loginInfo) {
        //console.log(loginInfo.emailAddress+"service");
        return this.http.post("https://sneakerx-api-final.azurewebsites.net/api/Server/login", loginInfo);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
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