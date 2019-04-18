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
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _update_info_update_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-info/update-info.component */ "./src/app/update-info/update-info.component.ts");
/* harmony import */ var _regist_regist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regist/regist.component */ "./src/app/regist/regist.component.ts");










var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "orderHistory", component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryComponent"] },
    { path: "orderDetails", component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewDetailsComponent"] },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    { path: 'update', component: _update_info_update_info_component__WEBPACK_IMPORTED_MODULE_8__["UpdateInfoComponent"] },
    { path: 'register', component: _regist_regist_component__WEBPACK_IMPORTED_MODULE_9__["RegistComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
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
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _regist_regist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./regist/regist.component */ "./src/app/regist/regist.component.ts");
/* harmony import */ var _update_info_update_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-info/update-info.component */ "./src/app/update-info/update-info.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__["OrderHistoryComponent"],
                _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_11__["ViewDetailsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__["HomePageComponent"],
                _regist_regist_component__WEBPACK_IMPORTED_MODULE_14__["RegistComponent"],
                _update_info_update_info_component__WEBPACK_IMPORTED_MODULE_15__["UpdateInfoComponent"]
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

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nhtml, body {\n  color: #fff;\n  font-size: 11px;\n  font-family: 'Tahoma';\n  background-size: 100%; }\nbutton {\n  width: 100px;\n  margin-left: 20px; }\nspan {\n  display: inline;\n  /* width: 150px; */ }\n.clear {\n  clear: both;\n  height: 200px; }\n.item {\n  margin: 10px 10px 0px 10px; }\np {\n  margin: 10px 0 0 0;\n  /* width: 80% */ }\n.date {\n  color: #ffd502;\n  text-decoration: overline;\n  font-size: 10px;\n  padding: 10px 0 20px 0; }\n#content_footer p {\n  margin: 10px 30px 10px 30px;\n  padding-top: 20px;\n  font-size: 10px;\n  text-align: left; }\n.login_box p {\n  margin: 0px 10px 20px 25px;\n  font-size: 9px;\n  color: #fff;\n  text-transform: uppercase; }\n.content_box_photo h3 {\n  margin: 40px 0px 10px 0px; }\n#content_footer p {\n  margin: 10px 0px 10px 60px !important;\n  margin: 10px 0px 10px 85px;\n  font-size: 10px;\n  text-align: justify; }\n.red {\n  color: red; }\n.yellow {\n  color: #ffd502;\n  font-weight: bold; }\nth, td {\n  text-align: center; }\nh1 {\n  font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n  color: #fff; }\nh2 {\n  font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 20px;\n  margin: 0px 50px 10px 30px !important;\n  margin: 0px 30px 10px 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #072450;\n  font-weight: normal; }\nh3 {\n  margin: 0px 0px 10px 0px;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #fff; }\na {\n  text-decoration: none;\n  color: #ffd502; }\n/*----- MENU ----- */\n#nav_list {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  list-style: none;\n  overflow: hidden; }\n#nav_list li {\n    width: 18%;\n    display: inline-block;\n    overflow: hidden;\n    margin-left: -7px;\n    text-transform: uppercase;\n    font-size: 13px;\n    font-weight: bold;\n    text-align: center; }\n.li_nav_body a {\n  height: 20px;\n  line-height: 20px; }\n.li_nav_footer a {\n  display: block;\n  width: 170px;\n  height: 21px;\n  background-position: 0 0px;\n  padding-left: 25px;\n  line-height: 21px; }\n.li_nav_body a:hover, .li_nav_footer a:hover {\n  background-position: 0 -20px;\n  color: #016001; }\n.li_active a:active {\n  background-position: 0 -40px;\n  color: #fff; }\n/*----- LAYOUT ----- */\n#container {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  position: relative; }\n#menu_header {\n  width: 100%;\n  height: 150px;\n  font-size: 13px; }\n#head_left {\n  width: 47%;\n  float: left;\n  text-align: left;\n  margin: 30px 0 0 30px; }\n#head_right {\n  width: 47%;\n  float: left;\n  text-align: right;\n  margin: 30px 0 0 10px; }\n#menu_left {\n  width: 250px;\n  min-height: 100%;\n  margin: 0 0 0 50px;\n  float: left; }\n.login_box {\n  width: 100%;\n  float: left;\n  text-align: center;\n  margin: 20px 0 0 0; }\n#head {\n  width: 100%;\n  height: 200px;\n  float: left;\n  text-align: center; }\n#content {\n  width: 100%;\n  text-align: justify;\n  float: left;\n  margin: 0 0 0 20px; }\n.content_box_photo {\n  width: 100%;\n  margin: 30px 0 0 0px;\n  float: left;\n  text-align: center; }\n#content_footer {\n  clear: both;\n  margin-bottom: -70px;\n  height: 50px; }\n/* 这是新的 */\n.shoppingcart {\n  color: #000000;\n  width: 90%;\n  margin-top: 20px;\n  margin-left: 7%;\n  margin-bottom: 50px;\n  background-color: #fff; }\n.shoppingcart thead {\n    height: 50px;\n    line-height: 50px; }\n.shoppingcart tbody {\n    height: 20px;\n    line-height: 20px; }\n/* 这是新的 */\n/* 这是新的 */\n.masonry {\n  -webkit-column-count: 3;\n     -moz-column-count: 3;\n          column-count: 3;\n  -webkit-column-gap: 0;\n     -moz-column-gap: 0;\n          column-gap: 0;\n  /* text-align: center; */ }\n.item {\n  -webkit-column-break-inside: avoid;\n     -moz-column-break-inside: avoid;\n          break-inside: avoid;\n  box-sizing: border-box;\n  padding: 10px;\n  /* background-color: #fff; */\n  margin-left: 30px; }\n.item_content {\n  width: 80%;\n  text-align: left;\n  margin-left: 30px; }\n/*------FOOT------- */\n#foot {\n  width: 100%;\n  float: left;\n  background-color: black;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0; }\n/*----- IMAGES ----- */\na img {\n  border: none; }\nimg.left, img.center, img.right {\n  padding: 4px;\n  border: 1px solid #a0a0a0; }\nimg.left {\n  float: left;\n  margin: 0px 12px 5px 0px;\n  background: #fff; }\nimg.right {\n  float: right;\n  margin: 0px 30px 5px 0px; }\n/*----- FORM ----- */\ninput {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 250px;\n  color: #707070;\n  margin: 0px 0px 0px 0px;\n  text-align: center; }\n/* 这是新的 */\n#tablerow input {\n  border: 0px;\n  font: normal 10px tahoma;\n  width: 90%;\n  color: #707070;\n  margin: 0 0px 20px 20px; }\ntd.addbtn {\n  text-align: left; }\n#cartitem input {\n  border: none;\n  font: normal 10px tahoma;\n  width: 200px;\n  background-color: black;\n  color: white;\n  margin: 10px 0px 0px 20px; }\n#cartitem input.addbtn {\n    width: 100px;\n    color: #ffd502;\n    font-weight: bold; }\ntextarea.sidebar {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 115px;\n  height: 80px;\n  color: #707070;\n  margin: 5px 0px 5px 25px; }\ninput.sidebar {\n  width: 100%;\n  height: 15px;\n  line-height: 15px;\n  text-decoration: none;\n  color: #ffd502;\n  font-size: 13px;\n  font-weight: bold;\n  background-color: transparent;\n  margin-left: -7px;\n  text-transform: uppercase;\n  text-align: center;\n  border: 0px;\n  margin: 0px 0px 0px 0px; }\ninput.button_sidebar {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 119px;\n  color: #707070;\n  margin: 0px 0px 5px 25px; }\ninput.button_content {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 119px;\n  color: #707070;\n  margin: 5px 0px 5px 0px; }\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n#item_content img {\n  cursor: pointer;\n  background: #fff;\n  /* color: inherit; */\n  /* vertical-align: top; */\n  width: 200px;\n  height: 150px;\n  /* margin: 2px; */\n  /* padding: 2px; */\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  transition: all 0.6s; }\n#item_content img:hover {\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUJBQXFCLEVBQUU7QUFFekI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUU7QUFFdEI7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFFO0FBRWpCO0VBQ0UsMEJBQTBCLEVBQUU7QUFFOUI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFFO0FBRW5CO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysc0JBQXNCLEVBQUU7QUFFMUI7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsV0FBVztFQUNYLHlCQUF5QixFQUFFO0FBRTdCO0VBQ0UseUJBQXlCLEVBQUU7QUFFN0I7RUFDRSxxQ0FBcUM7RUFDckMsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUIsRUFBRTtBQUV2QjtFQUNFLFVBQVUsRUFBRTtBQUVkO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFFO0FBRXJCO0VBQ0Usa0JBQWtCLEVBQUU7QUFFdEI7RUFDRSxnRkFBZ0Y7RUFDaEYsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7SUFDakI7MkJBQ3VCO0VBQ3pCLFdBQVcsRUFBRTtBQUVmO0VBQ0UsZ0ZBQWdGO0VBQ2hGLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQixFQUFFO0FBRXZCO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVyxFQUFFO0FBRWY7RUFDRSxxQkFBcUI7RUFDckIs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LFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHlCQUF5QixFQUFFO0FBQzNCO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUIsRUFBRTtBQUV2QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2Qsd0JBQXdCLEVBQUU7QUFFNUI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUIsRUFBRTtBQUMzQjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0IsRUFBRTtBQUM1QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUIsRUFBRTtBQUUzQixxRkFBcUY7QUFDckY7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFFO0FBQ3RCO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5odG1sLCBib2R5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6ICdUYWhvbWEnO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7IH1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDsgfVxuXG5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICAvKiB3aWR0aDogMTUwcHg7ICovIH1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogMjAwcHg7IH1cblxuLml0ZW0ge1xuICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDsgfVxuXG5wIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAvKiB3aWR0aDogODAlICovIH1cblxuLmRhdGUge1xuICBjb2xvcjogI2ZmZDUwMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwOyB9XG5cbiNjb250ZW50X2Zvb3RlciBwIHtcbiAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5sb2dpbl9ib3ggcCB7XG4gIG1hcmdpbjogMHB4IDEwcHggMjBweCAyNXB4O1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLmNvbnRlbnRfYm94X3Bob3RvIGgzIHtcbiAgbWFyZ2luOiA0MHB4IDBweCAxMHB4IDBweDsgfVxuXG4jY29udGVudF9mb290ZXIgcCB7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA4NXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7IH1cblxuLnllbGxvdyB7XG4gIGNvbG9yOiAjZmZkNTAyO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG50aCwgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8qIG1hcmdpbjogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG5tYXJnaW46IDEwcHggMHB4IDBweCAwcHg7ICovXG4gIGNvbG9yOiAjZmZmOyB9XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwcHggNTBweCAxMHB4IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggMzBweCAxMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwNzI0NTA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuaDMge1xuICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmQ1MDI7IH1cblxuLyotLS0tLSBNRU5VIC0tLS0tICovXG4jbmF2X2xpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICNuYXZfbGlzdCBsaSB7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmxpX25hdl9ib2R5IGEge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbi5saV9uYXZfZm9vdGVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4OyB9XG5cbi5saV9uYXZfYm9keSBhOmhvdmVyLCAubGlfbmF2X2Zvb3RlciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjBweDtcbiAgY29sb3I6ICMwMTYwMDE7IH1cblxuLmxpX2FjdGl2ZSBhOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi8qLS0tLS0gTEFZT1VUIC0tLS0tICovXG4jY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbiNtZW51X2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBmb250LXNpemU6IDEzcHg7IH1cblxuI2hlYWRfbGVmdCB7XG4gIHdpZHRoOiA0NyU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDMwcHggMCAwIDMwcHg7IH1cblxuI2hlYWRfcmlnaHQge1xuICB3aWR0aDogNDclO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMzBweCAwIDAgMTBweDsgfVxuXG4jbWVudV9sZWZ0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDUwcHg7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5sb2dpbl9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDAgMCAwOyB9XG5cbiNoZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAwIDAgMjBweDsgfVxuXG4uY29udGVudF9ib3hfcGhvdG8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuI2NvbnRlbnRfZm9vdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbi1ib3R0b206IC03MHB4O1xuICBoZWlnaHQ6IDUwcHg7IH1cblxuLyog6L+Z5piv5paw55qEICovXG4uc2hvcHBpbmdjYXJ0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAuc2hvcHBpbmdjYXJ0IHRoZWFkIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7IH1cbiAgLnNob3BwaW5nY2FydCB0Ym9keSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbi8qIOi/meaYr+aWsOeahCAqL1xuLyog6L+Z5piv5paw55qEICovXG4ubWFzb25yeSB7XG4gIGNvbHVtbi1jb3VudDogMztcbiAgY29sdW1uLWdhcDogMDtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqLyB9XG5cbi5pdGVtIHtcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cblxuLml0ZW1fY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XG5cbi8qLS0tLS0tRk9PVC0tLS0tLS0gKi9cbiNmb290IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwOyB9XG5cbi8qLS0tLS0gSU1BR0VTIC0tLS0tICovXG5hIGltZyB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG5pbWcubGVmdCwgaW1nLmNlbnRlciwgaW1nLnJpZ2h0IHtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwOyB9XG5pbWcubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDBweCAxMnB4IDVweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cbmltZy5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwcHggMzBweCA1cHggMHB4OyB9XG5cbi8qLS0tLS0gRk9STSAtLS0tLSAqL1xuaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gIHdpZHRoOiAyNTBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLyog6L+Z5piv5paw55qEICovXG4jdGFibGVyb3cgaW5wdXQge1xuICBib3JkZXI6IDBweDtcbiAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiAwIDBweCAyMHB4IDIwcHg7IH1cblxudGQuYWRkYnRuIHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4jY2FydGl0ZW0gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAyMHB4OyB9XG4gICNjYXJ0aXRlbSBpbnB1dC5hZGRidG4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjb2xvcjogI2ZmZDUwMjtcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG50ZXh0YXJlYS5zaWRlYmFyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogODBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbjogNXB4IDBweCA1cHggMjVweDsgfVxuXG5pbnB1dC5zaWRlYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmQ1MDI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7IH1cbmlucHV0LmJ1dHRvbl9zaWRlYmFyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICB3aWR0aDogMTE5cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW46IDBweCAwcHggNXB4IDI1cHg7IH1cbmlucHV0LmJ1dHRvbl9jb250ZW50IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICB3aWR0aDogMTE5cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW46IDVweCAwcHggNXB4IDBweDsgfVxuXG4vKi0tLS0tIEhvdmVyYm94IENvZGUgLSBnZXQgY29kZSBmb3VuZCBhdCBodHRwOi8vaG9zdC5zb25zcHJpbmcuY29tL2hvdmVyYm94LyAtLS0tLS0qL1xuI2l0ZW1fY29udGVudCBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIGNvbG9yOiBpbmhlcml0OyAqL1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAqL1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIC8qIG1hcmdpbjogMnB4OyAqL1xuICAvKiBwYWRkaW5nOiAycHg7ICovXG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzOyB9XG4gICNpdGVtX2NvbnRlbnQgaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n        <div id=\"head\">\n            <div id=\"menu_header\">\n                <span id=\"head_left\" class=\"yellow\">{{user.userName}}, here is your cart!</span>\n                <span id=\"head_right\" class=\"yellow\">Your balance is {{user.balance}}!</span>\n            </div>\n        </div>\n        <br />\n        <br />\n        <div id=\"content\">\n            <div class=\"login_box\">\n                <ul id=\"nav_list\">\n                    <li class=\"li_nav_body\">\n                        <form >\n                            <input class=\"sidebar\" type=\"hidden\" name=\"userID\" value={{user.userID}} >\n                            <input class=\"sidebar\" type=\"submit\" name=\"backHomepageBtn\" value=\"Keep Shopping\" (click)=\"toHome()\"/>\n                            </form>\n                    </li>\n                    <li class=\"li_nav_body\">\n                        <form>\n                            <input class=\"sidebar\" (click)=\"logOut()\" type=\"submit\" name=\"LogoutBtn\" value=\"Log out\" />\n                        </form>\n                    </li>\n                    <li class=\"li_nav_body\">\n                        <form >\n                            <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n                        </form>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"content_box_photo\">\n                <div>\n                    <form >\n                        <input type=\"hidden\" name=\"userID\" value={{user.userID}}>\n                        <input type=\"submit\" name=\"CheckOut\" (click)=\"checkOut()\" value=\"Check Out\" style=\"font-size:13px\" />\n                    </form>\n                    <br />\n                </div>\n                <div class=\"content\">\n                    <table class=\"shoppingcart\">\n                        <thead>\n                            <tr id=\"tablehead\" style=\"text-align:center; font-size:9px\">\n                                <th>\n                                    Item ID\n                                </th>\n                                <th>\n                                    Item Name\n                                </th>\n                                <th>\n                                    Item Size\n                                </th>\n                                <th>\n                                    Item Amount\n                                </th>\n                                <th>\n                                    Price\n                                </th>\n                                <th>\n                                    Remove one from this kind of shoes.\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr id=\"tablerow\"*ngFor=\"let cartInfo of cartInfos\" >\n                                <td>\n                                    <input type=\"text\" name=\"itemID\" value={{cartInfo.itemID}} readonly=\"readonly\" />\n                                </td>\n                                <td>\n                                    <input type=\"text\" name=\"itemName\" value=\"{{cartInfo.itemName}}\" readonly=\"readonly\" />\n                                </td>\n                                <td>\n                                    <input type=\"text\" name=\"itemSize\" value={{cartInfo.itemSize}} readonly=\"readonly\" />\n                                </td>\n                                <td>\n                                    <input type=\"text\" name=\"itemAmount\" value={{cartInfo.itemInCartAmount}} readonly=\"readonly\" />\n                                </td>\n                                <td>\n                                    <input type=\"text\" name=\"price\" value={{cartInfo.price}} readonly=\"readonly\" />\n                                </td>\n                                <td>\n                                    <input type=\"hidden\" name=\"userID\" value={{user.userID}}>\n                                    <input type=\"submit\" name=\"addItemToCart\" value=\"Remove\" (click)=\"move(cartInfo)\" />\n                                </td>\n                            </tr>        \n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user-info-details.service */ "./src/app/shared/services/user-info-details.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/classes/userModel */ "./src/app/shared/classes/userModel.ts");






var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, userInfoDetailsService, router) {
        this.cartService = cartService;
        this.userInfoDetailsService = userInfoDetailsService;
        this.router = router;
        this.cartInfos = [];
        this.b = [];
        this.totalCost = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.user = this.userInfoDetailsService.getUserInfoDetails();
        this.getCartInfo();
    };
    CartComponent.prototype.getCartInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.user.userID);
                        promise = new Promise(function (resolve, reject) {
                            _this.cartService.getCart(_this.user.userID)
                                .toPromise()
                                .then(function (res) {
                                _this.cartInfos = res;
                                console.log("!!!!" + _this.cartInfos);
                                resolve();
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.sent();
                        console.log(this.cartInfos);
                        return [2 /*return*/];
                }
            });
        });
    };
    CartComponent.prototype.move = function (value) {
        var cartInfo = {
            userID: this.user.userID,
            itemID: value.itemID,
            itemName: value.itemName,
            itemSize: value.itemSize,
            itemInCartAmount: -1,
            price: value.price,
            picLink: value.picLink
        };
        this.cartService.addCart(cartInfo).subscribe();
        alert("remove successfully");
    };
    CartComponent.prototype.checkOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.user.userID);
                        this.getCartInfo();
                        for (_i = 0; _i < this.cartInfos.length; _i++) {
                            this.totalCost = this.totalCost + this.cartInfos[_i].price;
                            console.log("in checkout:" + this.totalCost);
                        }
                        console.log("after count checkout:" + this.totalCost);
                        console.log("old balance:" + this.user.balance);
                        if (!(this.totalCost > this.user.balance)) return [3 /*break*/, 1];
                        alert("sorry");
                        return [3 /*break*/, 3];
                    case 1:
                        promise = new Promise(function (resolve, reject) {
                            _this.cartService.check(_this.user.userID)
                                .toPromise()
                                .then(function (res) {
                                _this.user.balance = res;
                                resolve();
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 2:
                        _a.sent();
                        console.log("after checkout:" + this.user.balance);
                        alert("Checkout successfully, but due to internet traffic jams, there will be a little delay for your order history updating, please check it later! During this time you can enjoy a puzzle game if you want!");
                        this.onNavigate();
                        setTimeout(function () {
                            _this.router.navigate(['/home']);
                        }, 5000);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CartComponent.prototype.onNavigate = function () {
        //this.router.navigateByUrl("https://www.google.com");
        window.open("https://imgpuzzle.azurewebsites.net", "_blank");
    };
    CartComponent.prototype.toHome = function () {
        this.router.navigate(['/home']);
    };
    CartComponent.prototype.logOut = function () {
        this.user = _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.router.navigate(['/login']);
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoDetailsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* 设置三列瀑布排列 */\ntable {\n  width: 29%;\n  float: left; }\nbutton {\n  width: 100px;\n  margin-left: 20px; }\nspan {\n  display: inline;\n  /* width: 150px; */ }\n.clear {\n  clear: both;\n  height: 200px; }\n.item {\n  margin: 10px 10px 0px 10px; }\np {\n  margin: 10px 0 0 0;\n  /* width: 80% */ }\n.date {\n  color: #ffd502;\n  text-decoration: overline;\n  font-size: 10px;\n  padding: 10px 0 20px 0; }\n#content_footer p {\n  margin: 10px 30px 10px 30px;\n  padding-top: 20px;\n  font-size: 10px;\n  text-align: left; }\n.login_box p {\n  margin: 0px 10px 20px 25px;\n  font-size: 9px;\n  color: #fff;\n  text-transform: uppercase; }\n.content_box_photo h3 {\n  margin: 40px 0px 10px 0px; }\n#content_footer p {\n  margin: 10px 0px 10px 60px !important;\n  margin: 10px 0px 10px 85px;\n  font-size: 10px;\n  text-align: justify; }\n.red {\n  color: red; }\n.yellow {\n  color: #ffd502;\n  font-weight: bold; }\nth {\n  text-align: center; }\ntd {\n  text-align: center; }\nh1 {\n  font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n  color: #fff; }\nh2 {\n  font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 20px;\n  margin: 0px 50px 10px 30px !important;\n  margin: 0px 30px 10px 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #072450;\n  font-weight: normal; }\nh3 {\n  margin: 0px 0px 10px 0px;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #fff; }\na {\n  text-decoration: none;\n  color: #ffd502; }\n/*----- MENU ----- */\n#nav_list {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  list-style: none;\n  overflow: hidden; }\n#nav_list li {\n  width: 18%;\n  display: inline-block;\n  overflow: hidden;\n  margin-left: -7px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: bold;\n  text-align: center; }\n.li_nav_body a {\n  height: 20px;\n  line-height: 20px; }\n.li_nav_footer a {\n  display: block;\n  width: 170px;\n  height: 21px;\n  background-position: 0 0px;\n  padding-left: 25px;\n  line-height: 21px; }\n.li_nav_body a:hover {\n  background-position: 0 -20px;\n  color: #016001; }\n.li_nav_footer a:hover {\n  background-position: 0 -20px;\n  color: #016001; }\n.li_active a:active {\n  background-position: 0 -40px;\n  color: #fff; }\n/*----- LAYOUT ----- */\n#container {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  position: relative; }\n#menu_header {\n  width: 100%;\n  height: 150px;\n  font-size: 13px; }\n#head_left {\n  width: 47%;\n  float: left;\n  text-align: left;\n  margin: 30px 0 0 30px; }\n#head_right {\n  width: 47%;\n  float: left;\n  text-align: right;\n  margin: 30px 0 0 10px; }\n#menu_left {\n  width: 250px;\n  min-height: 100%;\n  margin: 0 0 0 50px;\n  float: left; }\n.login_box {\n  width: 100%;\n  float: left;\n  text-align: center;\n  margin: 20px 0 0 0; }\n#head {\n  width: 100%;\n  height: 200px;\n  float: left;\n  text-align: center; }\n#content {\n  width: 100%;\n  text-align: justify;\n  float: left;\n  margin: 0 0 0 20px; }\n.content_box_photo {\n  width: 100%;\n  margin: 30px 0 0 0px;\n  float: left;\n  text-align: center; }\n#content_footer {\n  clear: both;\n  margin-bottom: -70px;\n  height: 50px; }\n/* 这是新的 */\n.shoppingcart {\n  color: #000000;\n  width: 90%;\n  margin-top: 20px;\n  margin-left: 7%;\n  margin-bottom: 50px;\n  background-color: #fff; }\n/* 这是新的 */\n.shoppingcart thead {\n  height: 50px;\n  line-height: 50px; }\n/* 这是新的 */\n.shoppingcart tbody {\n  height: 20px;\n  line-height: 20px; }\n.masonry {\n  -webkit-column-count: 3;\n     -moz-column-count: 3;\n          column-count: 3;\n  -webkit-column-gap: 0;\n     -moz-column-gap: 0;\n          column-gap: 0;\n  /* text-align: center; */ }\n.item {\n  -webkit-column-break-inside: avoid;\n     -moz-column-break-inside: avoid;\n          break-inside: avoid;\n  box-sizing: border-box;\n  padding: 0px;\n  /* background-color: #fff; */\n  margin-left: 30px; }\n.item_content {\n  width: 80%;\n  text-align: left;\n  margin-left: 30px; }\n/*------FOOT------- */\n#foot {\n  width: 100%;\n  float: left;\n  background-color: black;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0; }\n/*----- IMAGES ----- */\na img {\n  border: none; }\nimg.left,\nimg.center,\nimg.right {\n  padding: 4px;\n  border: 1px solid #a0a0a0; }\nimg.left {\n  float: left;\n  margin: 0px 12px 5px 0px;\n  background: #fff; }\nimg.right {\n  float: right;\n  margin: 0px 30px 5px 0px; }\n/*----- FORM ----- */\ninput {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 250px;\n  color: #707070;\n  margin: 0px 0px 0px 0px;\n  text-align: center; }\n/* 这是新的 */\n#tablerow input {\n  border: 0px;\n  font: normal 10px tahoma;\n  width: 90%;\n  color: #707070;\n  margin: 0 0px 20px 20px; }\ntd.addbtn {\n  text-align: left; }\n#cartitem input.addbtn {\n  width: 100px;\n  color: #ffd502;\n  font-weight: bold; }\n#cartitem input {\n  border: none;\n  font: normal 10px tahoma;\n  width: 200px;\n  background-color: black;\n  color: white;\n  margin: 10px 0px 0px 20px; }\ntextarea.sidebar {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 115px;\n  height: 80px;\n  color: #707070;\n  margin: 5px 0px 5px 25px; }\ninput.sidebar {\n  width: 100%;\n  height: 15px;\n  line-height: 15px;\n  text-decoration: none;\n  color: #ffd502;\n  font-size: 13px;\n  font-weight: bold;\n  background-color: transparent;\n  margin-left: -7px;\n  text-transform: uppercase;\n  text-align: center;\n  border: 0px;\n  margin: 0px 0px 0px 0px; }\ninput.button_sidebar {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 119px;\n  color: #707070;\n  margin: 0px 0px 5px 25px; }\ninput.button_content {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 119px;\n  color: #707070;\n  margin: 5px 0px 5px 0px; }\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n#item_content img {\n  cursor: pointer;\n  background: #fff;\n  /* color: inherit; */\n  /* vertical-align: top; */\n  width: 200px;\n  height: 150px;\n  /* margin: 2px; */\n  /* padding: 2px; */\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  transition: all 0.6s; }\n#item_content img:hover {\n  -webkit-transform: scale(2);\n          transform: scale(2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2I7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFFO0FBRWY7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUU7QUFFdEI7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFFO0FBRWpCO0VBQ0UsMEJBQTBCLEVBQUU7QUFFOUI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFFO0FBRW5CO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysc0JBQXNCLEVBQUU7QUFFMUI7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsV0FBVztFQUNYLHlCQUF5QixFQUFFO0FBRTdCO0VBQ0UseUJBQXlCLEVBQUU7QUFFN0I7RUFDRSxxQ0FBcUM7RUFDckMsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUIsRUFBRTtBQUV2QjtFQUNFLFVBQVUsRUFBRTtBQUVkO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFFO0FBRXJCO0VBQ0Usa0JBQWtCLEVBQUU7QUFFdEI7RUFDRSxrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLGdGQUFnRjtFQUNoRixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtJQUNqQjsyQkFDdUI7RUFDekIsV0FBVyxFQUFFO0FBRWY7RUFDRSxnRkFBZ0Y7RUFDaEYsZUFBZTtFQUNmLHFDQUFxQztFQUNyQywwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CLEVBQUU7QUFFdkI7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXLEVBQUU7QUFFZjtFQUNFLHFCQUFxQjtFQUNyQixjQUFjLEVBQUU7QUFFbEIsb0JBQW9CO0FBQ3BCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFFO0FBRXBCO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFFO0FBRXRCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQixFQUFFO0FBRXJCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBRTtBQUVyQjtFQUNFLDRCQUE0QjtFQUM1QixjQUFjLEVBQUU7QUFFbEI7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYyxFQUFFO0FBRWxCO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVcsRUFBRTtBQUVmLHNCQUFzQjtBQUN0QjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQixFQUFFO0FBRXRCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlLEVBQUU7QUFFbkI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBRTtBQUV6QjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFFO0FBRXpCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFFO0FBRWY7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQixFQUFFO0FBRXRCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUU7QUFFdEI7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWSxFQUFFO0FBRWhCLFNBQVM7QUFDVDtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUU7QUFFMUIsU0FBUztBQUNUO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQixFQUFFO0FBRXJCLFNBQVM7QUFDVDtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBRTtBQUVyQjtFQUNFLHVCQUFlO0tBQWYsb0JBQWU7VUFBZixlQUFlO0VBQ2YscUJBQWE7S0FBYixrQkFBYTtVQUFiLGFBQWE7RUFDYix3QkFBd0IsRUFBRTtBQUU1QjtFQUNFLGtDQUFtQjtLQUFuQiwrQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGlCQUFpQixFQUFFO0FBRXJCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBRTtBQUVyQixxQkFBcUI7QUFDckI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTLEVBQUU7QUFFYixzQkFBc0I7QUFDdEI7RUFDRSxZQUFZLEVBQUU7QUFFaEI7OztFQUdFLFlBQVk7RUFDWix5QkFBeUIsRUFBRTtBQUU3QjtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUU7QUFFcEI7RUFDRSxZQUFZO0VBQ1osd0JBQXdCLEVBQUU7QUFFNUIsb0JBQW9CO0FBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBRTtBQUV0QixTQUFTO0FBQ1Q7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCLEVBQUU7QUFFM0I7RUFDRSxnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHlCQUF5QixFQUFFO0FBRTdCO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0IsRUFBRTtBQUU1QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QixFQUFFO0FBRTNCO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLHdCQUF3QixFQUFFO0FBRTVCO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QixFQUFFO0FBRTNCLHFGQUFxRjtBQUNyRjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUU7QUFFeEI7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiDorr7nva7kuInliJfngJHluIPmjpLliJcgKi9cbnRhYmxlIHtcbiAgd2lkdGg6IDI5JTtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDsgfVxuXG5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICAvKiB3aWR0aDogMTUwcHg7ICovIH1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogMjAwcHg7IH1cblxuLml0ZW0ge1xuICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDsgfVxuXG5wIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAvKiB3aWR0aDogODAlICovIH1cblxuLmRhdGUge1xuICBjb2xvcjogI2ZmZDUwMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwOyB9XG5cbiNjb250ZW50X2Zvb3RlciBwIHtcbiAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5sb2dpbl9ib3ggcCB7XG4gIG1hcmdpbjogMHB4IDEwcHggMjBweCAyNXB4O1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLmNvbnRlbnRfYm94X3Bob3RvIGgzIHtcbiAgbWFyZ2luOiA0MHB4IDBweCAxMHB4IDBweDsgfVxuXG4jY29udGVudF9mb290ZXIgcCB7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA4NXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7IH1cblxuLnllbGxvdyB7XG4gIGNvbG9yOiAjZmZkNTAyO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG50aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG50ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLyogbWFyZ2luOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbm1hcmdpbjogMTBweCAwcHggMHB4IDBweDsgKi9cbiAgY29sb3I6ICNmZmY7IH1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDBweCA1MHB4IDEwcHggMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAzMHB4IDEwcHggMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzA3MjQ1MDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG5oMyB7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjsgfVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZDUwMjsgfVxuXG4vKi0tLS0tIE1FTlUgLS0tLS0gKi9cbiNuYXZfbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuI25hdl9saXN0IGxpIHtcbiAgd2lkdGg6IDE4JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5saV9uYXZfYm9keSBhIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDsgfVxuXG4ubGlfbmF2X2Zvb3RlciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjFweDsgfVxuXG4ubGlfbmF2X2JvZHkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIwcHg7XG4gIGNvbG9yOiAjMDE2MDAxOyB9XG5cbi5saV9uYXZfZm9vdGVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMHB4O1xuICBjb2xvcjogIzAxNjAwMTsgfVxuXG4ubGlfYWN0aXZlIGE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDBweDtcbiAgY29sb3I6ICNmZmY7IH1cblxuLyotLS0tLSBMQVlPVVQgLS0tLS0gKi9cbiNjb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuI21lbnVfaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDsgfVxuXG4jaGVhZF9sZWZ0IHtcbiAgd2lkdGg6IDQ3JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMzBweCAwIDAgMzBweDsgfVxuXG4jaGVhZF9yaWdodCB7XG4gIHdpZHRoOiA0NyU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAzMHB4IDAgMCAxMHB4OyB9XG5cbiNtZW51X2xlZnQge1xuICB3aWR0aDogMjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDAgNTBweDtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmxvZ2luX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMCAwIDA7IH1cblxuI2hlYWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4jY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4OyB9XG5cbi5jb250ZW50X2JveF9waG90byB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDMwcHggMCAwIDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4jY29udGVudF9mb290ZXIge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luLWJvdHRvbTogLTcwcHg7XG4gIGhlaWdodDogNTBweDsgfVxuXG4vKiDov5nmmK/mlrDnmoQgKi9cbi5zaG9wcGluZ2NhcnQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG5cbi8qIOi/meaYr+aWsOeahCAqL1xuLnNob3BwaW5nY2FydCB0aGVhZCB7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7IH1cblxuLyog6L+Z5piv5paw55qEICovXG4uc2hvcHBpbmdjYXJ0IHRib2R5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDsgfVxuXG4ubWFzb25yeSB7XG4gIGNvbHVtbi1jb3VudDogMztcbiAgY29sdW1uLWdhcDogMDtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqLyB9XG5cbi5pdGVtIHtcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMHB4O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICBtYXJnaW4tbGVmdDogMzBweDsgfVxuXG4uaXRlbV9jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cblxuLyotLS0tLS1GT09ULS0tLS0tLSAqL1xuI2Zvb3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7IH1cblxuLyotLS0tLSBJTUFHRVMgLS0tLS0gKi9cbmEgaW1nIHtcbiAgYm9yZGVyOiBub25lOyB9XG5cbmltZy5sZWZ0LFxuaW1nLmNlbnRlcixcbmltZy5yaWdodCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDsgfVxuXG5pbWcubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDBweCAxMnB4IDVweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuaW1nLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDBweCAzMHB4IDVweCAwcHg7IH1cblxuLyotLS0tLSBGT1JNIC0tLS0tICovXG5pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDI1MHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKiDov5nmmK/mlrDnmoQgKi9cbiN0YWJsZXJvdyBpbnB1dCB7XG4gIGJvcmRlcjogMHB4O1xuICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gIHdpZHRoOiA5MCU7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW46IDAgMHB4IDIwcHggMjBweDsgfVxuXG50ZC5hZGRidG4ge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbiNjYXJ0aXRlbSBpbnB1dC5hZGRidG4ge1xuICB3aWR0aDogMTAwcHg7XG4gIGNvbG9yOiAjZmZkNTAyO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4jY2FydGl0ZW0gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAyMHB4OyB9XG5cbnRleHRhcmVhLnNpZGViYXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiA1cHggMHB4IDVweCAyNXB4OyB9XG5cbmlucHV0LnNpZGViYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZDUwMjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDsgfVxuXG5pbnB1dC5idXR0b25fc2lkZWJhciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDExOXB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAyNXB4OyB9XG5cbmlucHV0LmJ1dHRvbl9jb250ZW50IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICB3aWR0aDogMTE5cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW46IDVweCAwcHggNXB4IDBweDsgfVxuXG4vKi0tLS0tIEhvdmVyYm94IENvZGUgLSBnZXQgY29kZSBmb3VuZCBhdCBodHRwOi8vaG9zdC5zb25zcHJpbmcuY29tL2hvdmVyYm94LyAtLS0tLS0qL1xuI2l0ZW1fY29udGVudCBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIGNvbG9yOiBpbmhlcml0OyAqL1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAqL1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIC8qIG1hcmdpbjogMnB4OyAqL1xuICAvKiBwYWRkaW5nOiAycHg7ICovXG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzOyB9XG5cbiNpdGVtX2NvbnRlbnQgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"head\">\n    <div id=\"menu_header\">\n      <span id=\"head_left\" class=\"yellow\">Welcome!  {{user.userName}}</span>\n      <span id=\"head_right\" class=\"yellow\">Your balance is {{user.balance}}</span>\n    </div>\n  </div>\n  <br />\n  <br />\n  <div id=\"content\">\n    <div class=\"login_box\">\n      <ul id=\"nav_list\">\n        <li class=\"li_nav_body\">\n          <input class=\"sidebar\" type=\"hidden\" name=\"userID\" value = {{user.userID}}>\n          <input class=\"sidebar\" type=\"submit\" name=\"backHomepageBtn\" value=\"Keep Shopping\" (click)=\"toHome()\"/>\n        </li>\n        <li class=\"li_nav_body\">\n          <input class=\"sidebar\" type=\"submit\" (click)=\"logOut()\" name=\"LogoutBtn\" value=\"Log out\" />\n        </li>\n        <li class=\"li_nav_body\">\n          <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"content_box_photo\">\n      <div>\n        <input type=\"hidden\" name=\"user\" value={{user}}/>\n        <input type=\"submit\" name=\"ViewUserInfo\" (click)=\"toPersonInfo()\" value=\"View Personal Infomation\" style=\"font-size:13px\"/>\n        \n        <br />\n        <input type=\"hidden\" name=\"userID\" value= {{user.userID}}/>\n        <input type=\"submit\" name=\"ViewCartBtn\" (click)=\"toCart()\" value=\"View My Cart\" style=\"font-size:13px\" />\n        \n        <br />\n        <input type=\"hidden\" name=\"userID\" value={{user.userID}}/>\n        <input type=\"submit\" name=\"ViewOrderHistoryBtn\" (click)=\"toHistory()\" value=\"View Order History\" style=\"font-size:13px\" />\n        \n        <br />\n        <br />\n        <br />\n      </div>\n      <div class=\"content\">\n        <ul class=\"hoverbox\">\n          <div class=\"item\">\n            <div id=\"item_content\">\n              <table id=\"cartitem\" *ngFor=\"let item of items\">\n                <tr id=\"tablerow\">\n                  <th colspan=\"2\">\n                    <input type=\"hidden\" name=\"picLink\" value={{item.picLink}}/>\n                    <img  src=\"{{item.picLink}}\" />\n                  </th>\n                </tr>\n                <tr id=\"tablerow\">\n                  <td>\n                    <p class=\"yellow\">ID:</p>\n                  </td>\n                  <td>\n                    <input type=\"text\" name=\"itemID\" readonly=\"readonly\" value={{item.itemID}}/>\n                  </td>\n                </tr>\n                <tr id=\"tablerow\">\n                  <td>\n                    <p class=\"yellow\">Name:</p>\n                  </td>\n                  <td>\n                    <input type=\"text\" name=\"itemName\" readonly=\"readonly\" value={{item.itemName}}/>\n                  </td>\n                </tr>\n                <tr id=\"tablerow\">\n                  <td>\n                    <p>Size:</p>\n                  </td>\n                  <td>\n                    <input type=\"text\" name=\"itemSize\"  readonly=\"readonly\" value={{item.itemSize}}/>\n                  </td>\n                </tr>\n                <tr id=\"tablerow\">\n                  <td>\n                    <p>Amount:</p>\n                  </td>\n                  <td><input type=\"text\" name=\"itemAmount\"  readonly=\"readonly\" value={{item.itemAmount}}/></td>\n                </tr>\n                <tr id=\"tablerow\">\n                  <td>\n                    <p>Price:</p>\n                  </td>\n                  <td>\n                    <input type=\"text\" name=\"price\"  readonly=\"readonly\" value={{item.price}}/>\n                  </td>\n                </tr>\n                <tr id=\"tablerow\">\n                  <td>\n                    <p>Description:</p>\n                  </td>\n                  <td>\n                    <input type=\"text\" name=\"description\" readonly=\"readonly\" value={{item.description}}/>\n                  </td>\n                </tr>\n                <tr id=\"tablerow\">\n                  <td>\n                    <p><i class=\"fas fa-plus-circle\"></i></p>\n                  </td>\n                  <td colspan=\"2\" class=\"addbtn\">\n                    <input type=\"hidden\" name=\"userID\" value={{user.userID}} />\n                    <button type=\"submit\" name=\"addItemToCart\" (click)=\"addCart(item)\" class=\"addbtn\" > Add to Cart</button>\n                    <br />\n                    <br />\n                  </td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </ul>\n      </div>   \n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/shared/services/item.service */ "./src/app/shared/services/item.service.ts");
/* harmony import */ var _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user-info-details.service */ "./src/app/shared/services/user-info-details.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/classes/userModel */ "./src/app/shared/classes/userModel.ts");








var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(fb, itemService, userInfoDetailsService, cartService, router) {
        this.fb = fb;
        this.itemService = itemService;
        this.userInfoDetailsService = userInfoDetailsService;
        this.cartService = cartService;
        this.router = router;
        this.items = [];
        this.shopForm = this.fb.group({
            searchForm: this.fb.group({
                item: [null],
                price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                junk: [null],
            })
        });
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.user = this.userInfoDetailsService.getUserInfoDetails();
    };
    HomePageComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems().subscribe(function (items) { return _this.items = items; });
    };
    HomePageComponent.prototype.addCart = function (value) {
        // console.log("value is:"+value);
        // console.log("userID is: "+this.user.userID);
        var cartInfo = {
            userID: this.user.userID,
            itemID: value.itemID,
            itemName: value.itemName,
            itemSize: value.itemSize,
            itemInCartAmount: 1,
            price: value.price,
            picLink: value.picLink
        };
        console.log("viewing add cartInfo:" + cartInfo);
        // console.log(cartInfo);
        // console.log("userID:"+cartInfo.userID+"+itemID:"+cartInfo.itemID+"+itemName:"+cartInfo.itemName);
        this.cartService.addCart(cartInfo).subscribe();
        alert("Added successfully");
    };
    HomePageComponent.prototype.toCart = function () {
        this.router.navigate(['/cart']);
    };
    HomePageComponent.prototype.toPersonInfo = function () {
        this.router.navigate(['/update']);
    };
    HomePageComponent.prototype.toHome = function () {
        this.router.navigate(['/home']);
    };
    HomePageComponent.prototype.logOut = function () {
        this.user = _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.router.navigate(['/login']);
    };
    HomePageComponent.prototype.toHistory = function () {
        this.router.navigate(['/orderHistory']);
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_shared_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoDetailsService"],
            _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbutton {\n    width: 100px;\n    margin-left: 20px;\n}\n\nspan {\n    display: inline;\n    /* width: 150px; */\n}\n\n.clear {\n    clear: both;\n    height: 200px;\n}\n\n.item {\n    margin: 10px 10px 0px 10px;\n}\n\np {\n    margin: 10px 0 0 0;\n    /* width: 80% */\n}\n\n.date {\n    color: #ffd502;\n    text-decoration: overline;\n    font-size: 10px;\n    padding: 10px 0 20px 0;\n}\n\n#content_footer p {\n    margin: 10px 30px 10px 30px;\n    padding-top: 20px;\n    font-size: 10px;\n    text-align: left;\n}\n\n.login_box p {\n    margin: 0px 10px 20px 25px;\n    font-size: 9px;\n    color: #fff;\n    text-transform: uppercase;\n}\n\n.content_box_photo h3 {\n    margin: 40px 0px 10px 0px;\n}\n\n#content_footer p {\n    margin: 10px 0px 10px 60px !important;\n    margin: 10px 0px 10px 85px;\n    font-size: 10px;\n    text-align: justify;\n}\n\n.red {\n    color: red;\n}\n\n.yellow {\n    color: #ffd502;\n    font-weight: bold;\n}\n\nth {\n    text-align: center;\n}\n\ntd {\n    text-align: right;\n}\n\nh1 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n    color: #fff;\n}\n\nh2 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 20px;\n    margin: 0px 50px 10px 30px !important;\n    margin: 0px 30px 10px 30px;\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #072450;\n    font-weight: normal;\n}\n\nh3 {\n    margin: 0px 0px 10px 0px;\n    text-transform: uppercase;\n    font-size: 12px;\n    /* color: #fff; */\n}\n\na {\n    text-decoration: none;\n    color: #ffd502;\n}\n\n/*----- MENU ----- */\n\n#nav_list {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    list-style: none;\n    overflow: hidden;\n}\n\n#nav_list li {\n        width: 18%;\n        display: inline-block;\n        overflow: hidden;\n        margin-left: -7px;\n        text-transform: uppercase;\n        font-size: 13px;\n        font-weight: bold;\n        text-align: center;\n    }\n\n.li_nav_body a {\n    height: 20px;\n    line-height: 20px;\n}\n\n.li_nav_footer a {\n    display: block;\n    width: 170px;\n    height: 21px;\n    background-position: 0 0px;\n    padding-left: 25px;\n    line-height: 21px;\n}\n\n.li_nav_body a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_nav_footer a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_active a:active {\n    background-position: 0 -40px;\n    color: #fff;\n}\n\n/*----- LAYOUT ----- */\n\n#container {\n    width: 100%;\n    min-height: 100%;\n    height: 100%;\n    position: relative;\n}\n\n#menu_header {\n    width: 100%;\n    height: 150px;\n    font-size: 13px;\n}\n\n#head_left {\n    width: 47%;\n    float: left;\n    text-align: left;\n    margin: 30px 0 0 30px;\n}\n\n#head_right {\n    width: 47%;\n    float: left;\n    text-align: right;\n    margin: 30px 0 0 10px;\n}\n\n#menu_left {\n    width: 250px;\n    min-height: 100%;\n    margin: 0 0 0 50px;\n    float: left;\n}\n\n.login_box {\n    width: 100%;\n    float: left;\n    text-align: center;\n    margin: 20px 0 0 0;\n}\n\n#head {\n    width: 100%;\n    height: 200px;\n    float: left;\n    text-align: center;\n}\n\n#content {\n    width: 100%;\n    text-align: justify;\n    float: left;\n    margin: 0 0 0 20px;\n}\n\n.content_box_photo {\n    width: 100%;\n    margin: 30px 0 0 0px;\n    float: left;\n    text-align: center;\n}\n\n#content_footer {\n    clear: both;\n    margin-bottom: -70px;\n    height: 50px;\n}\n\n/* 这是新的 */\n\n.shoppingcart {\n    color: #000000;\n    width: 90%;\n    margin-top: 20px;\n    margin-left: 7%;\n    margin-bottom: 50px;\n    background-color: #fff;\n}\n\n/* 这是新的 */\n\n.shoppingcart thead {\n        height: 50px;\n        line-height: 50px;\n    }\n\n/* 这是新的 */\n\n.shoppingcart tbody {\n        height: 20px;\n        line-height: 20px;\n    }\n\n.masonry {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 0;\n       -moz-column-gap: 0;\n            column-gap: 0;\n    /* text-align: center; */\n}\n\n.item {\n    -webkit-column-break-inside: avoid;\n       -moz-column-break-inside: avoid;\n            break-inside: avoid;\n    box-sizing: border-box;\n    padding: 10px;\n    /* background-color: #fff; */\n    margin-left: 30px;\n}\n\n.item_content {\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n}\n\n/*------FOOT------- */\n\n#foot {\n    width: 100%;\n    float: left;\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n}\n\n/*----- IMAGES ----- */\n\na img {\n    border: none;\n}\n\nimg.left,\nimg.center,\nimg.right {\n    padding: 4px;\n    border: 1px solid #a0a0a0;\n}\n\nimg.left {\n    float: left;\n    margin: 0px 12px 5px 0px;\n    background: #fff;\n}\n\nimg.right {\n    float: right;\n    margin: 0px 30px 5px 0px;\n}\n\n/*----- FORM ----- */\n\ninput {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 250px;\n    color: #707070;\n    margin: 0px 0px 0px 0px;\n}\n\n/* 这是新的 */\n\n#tablerow input {\n    border: 0px;\n    font: normal 10px tahoma;\n    width: 90%;\n    color: #707070;\n    margin: 0 0px 20px 20px;\n}\n\ntd.addbtn {\n    text-align: left;\n}\n\n#cartitem input.addbtn {\n    width: 100px;\n    color: #ffd502;\n    font-weight: bold;\n}\n\n#cartitem input {\n    border: none;\n    font: normal 10px tahoma;\n    width: 200px;\n    background-color: black;\n    color: white;\n    margin: 10px 0px 0px 20px;\n}\n\ntextarea.sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 115px;\n    height: 80px;\n    color: #707070;\n    margin: 5px 0px 5px 25px;\n}\n\ninput.sidebar {\n    width: 100%;\n    height: 15px;\n    line-height: 15px;\n    text-decoration: none;\n    color: #ffd502;\n    font-size: 13px;\n    font-weight: bold;\n    background-color: transparent;\n    margin-left: -7px;\n    text-transform: uppercase;\n    text-align: center;\n    border: 0px;\n    margin: 0px 0px 0px 0px;\n}\n\ninput.button_sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 0px 0px 5px 25px;\n}\n\ninput.button_content {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 5px 0px 5px 0px;\n}\n\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n\n#item_content img {\n    cursor: pointer;\n    background: #fff;\n    /* color: inherit; */\n    /* vertical-align: top; */\n    width: 200px;\n    height: 150px;\n    /* margin: 2px; */\n    /* padding: 2px; */\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 1px;\n    transition: all 0.6s;\n}\n\n#item_content img:hover {\n        -webkit-transform: scale(2);\n                transform: scale(2);\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0ZBQWdGO0lBQ2hGLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25COzJCQUN1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnRkFBZ0Y7SUFDaEYsZUFBZTtJQUNmLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUEsb0JBQW9C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QjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUlBLHFGQUFxRjs7QUFFckY7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFSTtRQUNJLDJCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbnNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAvKiB3aWR0aDogMTUwcHg7ICovXG59XG5cbi5jbGVhciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLml0ZW0ge1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgLyogd2lkdGg6IDgwJSAqL1xufVxuXG4uZGF0ZSB7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbn1cblxuI2NvbnRlbnRfZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxvZ2luX2JveCBwIHtcbiAgICBtYXJnaW46IDBweCAxMHB4IDIwcHggMjVweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5jb250ZW50X2JveF9waG90byBoMyB7XG4gICAgbWFyZ2luOiA0MHB4IDBweCAxMHB4IDBweDtcbn1cblxuI2NvbnRlbnRfZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDg1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi55ZWxsb3cge1xuICAgIGNvbG9yOiAjZmZkNTAyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8qIG1hcmdpbjogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG5tYXJnaW46IDEwcHggMHB4IDBweCAwcHg7ICovXG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmgyIHtcbiAgICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggNTBweCAxMHB4IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAzMHB4IDEwcHggMzBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzA3MjQ1MDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oMyB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG59XG5cbi8qLS0tLS0gTUVOVSAtLS0tLSAqL1xuXG4jbmF2X2xpc3Qge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuICAgICNuYXZfbGlzdCBsaSB7XG4gICAgICAgIHdpZHRoOiAxOCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbi5saV9uYXZfYm9keSBhIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5saV9uYXZfZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4ubGlfbmF2X2JvZHkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjBweDtcbiAgICBjb2xvcjogIzAxNjAwMTtcbn1cblxuLmxpX25hdl9mb290ZXIgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjBweDtcbiAgICBjb2xvcjogIzAxNjAwMTtcbn1cblxuLmxpX2FjdGl2ZSBhOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4vKi0tLS0tIExBWU9VVCAtLS0tLSAqL1xuXG4jY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuI21lbnVfaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI2hlYWRfbGVmdCB7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMzBweCAwIDAgMzBweDtcbn1cblxuI2hlYWRfcmlnaHQge1xuICAgIHdpZHRoOiA0NyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAzMHB4IDAgMCAxMHB4O1xufVxuXG4jbWVudV9sZWZ0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAwIDUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sb2dpbl9ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XG59XG5cbiNoZWFkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuXG4uY29udGVudF9ib3hfcGhvdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMzBweCAwIDAgMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRlbnRfZm9vdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNzBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4vKiDov5nmmK/mlrDnmoQgKi9cbi5zaG9wcGluZ2NhcnQge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuICAgIC8qIOi/meaYr+aWsOeahCAqL1xuICAgIC5zaG9wcGluZ2NhcnQgdGhlYWQge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAvKiDov5nmmK/mlrDnmoQgKi9cbiAgICAuc2hvcHBpbmdjYXJ0IHRib2R5IHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG5cbi5tYXNvbnJ5IHtcbiAgICBjb2x1bW4tY291bnQ6IDM7XG4gICAgY29sdW1uLWdhcDogMDtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cbi5pdGVtIHtcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uaXRlbV9jb250ZW50IHtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi8qLS0tLS0tRk9PVC0tLS0tLS0gKi9cblxuI2Zvb3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLyotLS0tLSBJTUFHRVMgLS0tLS0gKi9cblxuYSBpbWcge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuaW1nLmxlZnQsXG5pbWcuY2VudGVyLFxuaW1nLnJpZ2h0IHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcbn1cblxuaW1nLmxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMHB4IDEycHggNXB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pbWcucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDBweCAzMHB4IDVweCAwcHg7XG59XG5cbi8qLS0tLS0gRk9STSAtLS0tLSAqL1xuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuLyog6L+Z5piv5paw55qEICovXG4jdGFibGVyb3cgaW5wdXQge1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbjogMCAwcHggMjBweCAyMHB4O1xufVxuXG50ZC5hZGRidG4ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNjYXJ0aXRlbSBpbnB1dC5hZGRidG4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjb2xvcjogI2ZmZDUwMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NhcnRpdGVtIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjBweDtcbn1cblxudGV4dGFyZWEuc2lkZWJhciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDI1cHg7XG59XG5cbmlucHV0LnNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuXG5pbnB1dC5idXR0b25fc2lkZWJhciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDExOXB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbjogMHB4IDBweCA1cHggMjVweDtcbn1cblxuaW5wdXQuYnV0dG9uX2NvbnRlbnQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAxMTlweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcbn1cblxuXG5cbi8qLS0tLS0gSG92ZXJib3ggQ29kZSAtIGdldCBjb2RlIGZvdW5kIGF0IGh0dHA6Ly9ob3N0LnNvbnNwcmluZy5jb20vaG92ZXJib3gvIC0tLS0tLSovXG5cbiNpdGVtX2NvbnRlbnQgaW1nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAqL1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIC8qIG1hcmdpbjogMnB4OyAqL1xuICAgIC8qIHBhZGRpbmc6IDJweDsgKi9cbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1cblxuICAgICNpdGVtX2NvbnRlbnQgaW1nOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"user\">{{user.userName}}</h3>\n<div id=\"container\">\n  <div id=\"head\">\n      <div id=\"menu_header\">\n          <span id=\"head_left\" class=\"yellow\">Welcome!</span>\n          <span id=\"head_right\" class=\"yellow\"></span>\n      </div>\n  </div>\n  <br />\n  <br />\n  <div id=\"content\">\n      <div class=\"login_box\">\n          <ul id=\"nav_list\">\n              <li class=\"li_nav_body\">\n                  <form asp-controller=\"Client\" asp-action=\"Crash\" method=\"get\">\n                      <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n                  </form>\n              </li>\n          </ul>\n      </div>\n      <div class=\"content_box_photo\">\n          <h3 class=\"yellow\">Login</h3>\n          <div>\n              <form [formGroup]=\"loginInfoForm\" class=\"form\">\n                  <br />\n                  <br />\n                  <div>\n                      <input type=\"text\" formControlName=\"emailAddress\" name=\"emailAddress\" placeholder=\"EmailAddress\" class=\"enter\" />\n                  </div>\n                  <br />\n                  <br />\n                  <div>\n                      <input type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\" class=\"enter\" />\n                  </div>\n                  <br />\n                  <br />\n                  <br />\n                  <div>\n                      <button type=\"submit\" (click)=\"onLogin()\" name=\"loginBtn\" style=\"width:150px\" class=\"enter\">Log In</button>\n                  </div>  \n                  <br />\n                  <br />\n                  <div>\n                    <input type=\"submit\" (click)=\"toRegister()\" name=\"registerBtn\" value=\"Register\" style=\"width:150px\" class=\"enter\" />\n                  </div>   \n              </form>\n              \n          </div>\n      </div>\n  </div>\n  \n</div>\n"

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
                            this.router.navigate(['/home']);
                        }
                        ;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.toRegister = function () {
        this.router.navigate(['/register']);
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

module.exports = "html,\nbody {\n    color: #fff;\n    font-size: 11px;\n    font-family: 'Tahoma';\n    /* background: url(https://zuodahao.neocities.org/IMG_2929.JPG) no-repeat; */\n    background-size: 100%;\n}\n\nbutton {\n    width: 100px;\n    margin-left: 20px;\n}\n\nspan {\n    display: inline;\n    /* width: 150px; */\n}\n\n.clear {\n    clear: both;\n    height: 200px;\n}\n\n.item {\n    margin: 10px 10px 0px 10px;\n}\n\np {\n    margin: 10px 0 0 0;\n    /* width: 80% */\n}\n\n.date {\n    color: #ffd502;\n    text-decoration: overline;\n    font-size: 10px;\n    padding: 10px 0 20px 0;\n}\n\n#content_footer p {\n    margin: 10px 30px 10px 30px;\n    padding-top: 20px;\n    font-size: 10px;\n    text-align: left;\n}\n\n.login_box p {\n    margin: 0px 10px 20px 25px;\n    font-size: 9px;\n    color: #fff;\n    text-transform: uppercase;\n}\n\n.content_box_photo h3 {\n    margin: 40px 0px 10px 0px;\n}\n\n#content_footer p {\n    margin: 10px 0px 10px 60px !important;\n    margin: 10px 0px 10px 85px;\n    font-size: 10px;\n    text-align: justify;\n}\n\n#tablerow p {\n    text-align: center;\n}\n\n.red {\n    color: red;\n}\n\n.yellow {\n    color: #ffd502;\n    font-weight: bold;\n}\n\nth {\n    text-align: center;\n}\n\ntd {\n    text-align: right;\n}\n\nh1 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n    color: #fff;\n}\n\nh2 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 20px;\n    margin: 0px 50px 10px 30px !important;\n    margin: 0px 30px 10px 30px;\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #072450;\n    font-weight: normal;\n}\n\nh3 {\n    margin: 0px 0px 10px 0px;\n    text-transform: uppercase;\n    font-size: 12px;\n    /* color: #fff; */\n}\n\na {\n    text-decoration: none;\n    color: #ffd502;\n}\n\n/*----- MENU ----- */\n\n#nav_list {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    list-style: none;\n    overflow: hidden;\n}\n\n#nav_list li {\n        width: 18%;\n        display: inline-block;\n        overflow: hidden;\n        margin-left: -7px;\n        text-transform: uppercase;\n        font-size: 13px;\n        font-weight: bold;\n        text-align: center;\n    }\n\n.li_nav_body a {\n    height: 20px;\n    line-height: 20px;\n}\n\n.li_nav_footer a {\n    display: block;\n    width: 170px;\n    height: 21px;\n    background-position: 0 0px;\n    padding-left: 25px;\n    line-height: 21px;\n}\n\n.li_nav_body a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_nav_footer a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_active a:active {\n    background-position: 0 -40px;\n    color: #fff;\n}\n\n/*----- LAYOUT ----- */\n\n#container {\n    width: 100%;\n    min-height: 100%;\n    height: 100%;\n    position: relative;\n}\n\n#menu_header {\n    width: 100%;\n    height: 150px;\n    font-size: 13px;\n}\n\n#head_left {\n    width: 47%;\n    float: left;\n    text-align: left;\n    margin: 30px 0 0 30px;\n}\n\n#head_right {\n    width: 47%;\n    float: left;\n    text-align: right;\n    margin: 30px 0 0 10px;\n}\n\n#menu_left {\n    width: 250px;\n    min-height: 100%;\n    margin: 0 0 0 50px;\n    float: left;\n}\n\n.login_box {\n    width: 100%;\n    float: left;\n    text-align: center;\n    margin: 20px 0 0 0;\n}\n\n#head {\n    width: 100%;\n    height: 200px;\n    float: left;\n    text-align: center;\n}\n\n#content {\n    width: 100%;\n    text-align: center;\n    float: left;\n    margin: 0 0 0 20px;\n}\n\n.content_box_photo {\n    width: 100%;\n    margin: 30px 0 0 0px;\n    float: left;\n    text-align: center;\n}\n\n#content_footer {\n    clear: both;\n    margin-bottom: -70px;\n    height: 50px;\n}\n\n/* 这是新的 */\n\n.shoppingcart {\n    color: #000000;\n    width: 90%;\n    margin-top: 20px;\n    margin-left: 7%;\n    margin-bottom: 50px;\n    background-color: #fff;\n}\n\n/* 这是新的 */\n\n.shoppingcart thead {\n        height: 50px;\n        line-height: 50px;\n    }\n\n/* 这是新的 */\n\n.shoppingcart tbody {\n        height: 20px;\n        line-height: 20px;\n    }\n\n.masonry {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 0;\n       -moz-column-gap: 0;\n            column-gap: 0;\n    /* text-align: center; */\n}\n\n.item {\n    -webkit-column-break-inside: avoid;\n       -moz-column-break-inside: avoid;\n            break-inside: avoid;\n    box-sizing: border-box;\n    padding: 10px;\n    /* background-color: #fff; */\n    margin-left: 30px;\n}\n\n.item_content {\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n}\n\n/*------FOOT------- */\n\n#foot {\n    width: 100%;\n    float: left;\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n}\n\n/*----- IMAGES ----- */\n\na img {\n    border: none;\n}\n\nimg.left,\nimg.center,\nimg.right {\n    padding: 4px;\n    border: 1px solid #a0a0a0;\n}\n\nimg.left {\n    float: left;\n    margin: 0px 12px 5px 0px;\n    background: #fff;\n}\n\nimg.right {\n    float: right;\n    margin: 0px 30px 5px 0px;\n}\n\n/*----- FORM ----- */\n\ninput {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 250px;\n    color: #707070;\n    margin: 0px 0px 0px 0px;\n}\n\n/* 这是新的 */\n\n#tablerow input {\n    border: 0px;\n    font: normal 10px tahoma;\n    width: 90%;\n    color: #707070;\n    margin: 0 0px 20px 20px;\n}\n\ntd.addbtn {\n    text-align: left;\n}\n\n#cartitem input.addbtn {\n    width: 100px;\n    color: #ffd502;\n    font-weight: bold;\n}\n\n#cartitem input {\n    border: none;\n    font: normal 10px tahoma;\n    width: 200px;\n    background-color: black;\n    color: white;\n    margin: 10px 0px 0px 20px;\n}\n\ntextarea.sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 115px;\n    height: 80px;\n    color: #707070;\n    margin: 5px 0px 5px 25px;\n}\n\ninput.sidebar {\n    width: 100%;\n    height: 15px;\n    line-height: 15px;\n    text-decoration: none;\n    color: #ffd502;\n    font-size: 13px;\n    font-weight: bold;\n    background-color: transparent;\n    margin-left: -7px;\n    text-transform: uppercase;\n    text-align: center;\n    border: 0px;\n    margin: 0px 0px 0px 0px;\n}\n\ninput.button_sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 0px 0px 5px 25px;\n}\n\ninput.button_content {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 5px 0px 5px 0px;\n}\n\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n\n#item_content img {\n    cursor: pointer;\n    background: #fff;\n    /* color: inherit; */\n    /* vertical-align: top; */\n    width: 200px;\n    height: 150px;\n    /* margin: 2px; */\n    /* padding: 2px; */\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 1px;\n    transition: all 0.6s;\n}\n\n#item_content img:hover {\n        -webkit-transform: scale(2);\n                transform: scale(2);\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsNEVBQTRFO0lBQzVFLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnRkFBZ0Y7SUFDaEYsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkI7MkJBQ3VCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdGQUFnRjtJQUNoRixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7QUFD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dXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUYWhvbWEnO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybChodHRwczovL3p1b2RhaGFvLm5lb2NpdGllcy5vcmcvSU1HXzI5MjkuSlBHKSBuby1yZXBlYXQ7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIC8qIHdpZHRoOiAxNTBweDsgKi9cbn1cblxuLmNsZWFyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uaXRlbSB7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbnAge1xuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAvKiB3aWR0aDogODAlICovXG59XG5cbi5kYXRlIHtcbiAgICBjb2xvcjogI2ZmZDUwMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xufVxuXG4jY29udGVudF9mb290ZXIgcCB7XG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubG9naW5fYm94IHAge1xuICAgIG1hcmdpbjogMHB4IDEwcHggMjBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLmNvbnRlbnRfYm94X3Bob3RvIGgzIHtcbiAgICBtYXJnaW46IDQwcHggMHB4IDEwcHggMHB4O1xufVxuXG4jY29udGVudF9mb290ZXIgcCB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggODVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuI3RhYmxlcm93IHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnllbGxvdyB7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRoIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLyogbWFyZ2luOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbm1hcmdpbjogMTBweCAwcHggMHB4IDBweDsgKi9cbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDBweCA1MHB4IDEwcHggMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4IDMwcHggMTBweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMDcyNDUwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLyogY29sb3I6ICNmZmY7ICovXG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZDUwMjtcbn1cblxuLyotLS0tLSBNRU5VIC0tLS0tICovXG5cbiNuYXZfbGlzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4gICAgI25hdl9saXN0IGxpIHtcbiAgICAgICAgd2lkdGg6IDE4JTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuLmxpX25hdl9ib2R5IGEge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmxpX25hdl9mb290ZXIgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5saV9uYXZfYm9keSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMHB4O1xuICAgIGNvbG9yOiAjMDE2MDAxO1xufVxuXG4ubGlfbmF2X2Zvb3RlciBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMHB4O1xuICAgIGNvbG9yOiAjMDE2MDAxO1xufVxuXG4ubGlfYWN0aXZlIGE6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8qLS0tLS0gTEFZT1VUIC0tLS0tICovXG5cbiNjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4jbWVudV9oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jaGVhZF9sZWZ0IHtcbiAgICB3aWR0aDogNDclO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAzMHB4IDAgMCAzMHB4O1xufVxuXG4jaGVhZF9yaWdodCB7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDMwcHggMCAwIDEwcHg7XG59XG5cbiNtZW51X2xlZnQge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDAgNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ2luX2JveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbn1cblxuI2hlYWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cblxuLmNvbnRlbnRfYm94X3Bob3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMCAwIDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50X2Zvb3RlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLyog6L+Z5piv5paw55qEICovXG4uc2hvcHBpbmdjYXJ0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbiAgICAvKiDov5nmmK/mlrDnmoQgKi9cbiAgICAuc2hvcHBpbmdjYXJ0IHRoZWFkIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB9XG4gICAgLyog6L+Z5piv5paw55qEICovXG4gICAgLnNob3BwaW5nY2FydCB0Ym9keSB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4ubWFzb25yeSB7XG4gICAgY29sdW1uLWNvdW50OiAzO1xuICAgIGNvbHVtbi1nYXA6IDA7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuXG4uaXRlbSB7XG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLml0ZW1fY29udGVudCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4vKi0tLS0tLUZPT1QtLS0tLS0tICovXG5cbiNmb290IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5cbi8qLS0tLS0gSU1BR0VTIC0tLS0tICovXG5cbmEgaW1nIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmltZy5sZWZ0LFxuaW1nLmNlbnRlcixcbmltZy5yaWdodCB7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XG59XG5cbmltZy5sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDBweCAxMnB4IDVweCAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW1nLnJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAwcHggMzBweCA1cHggMHB4O1xufVxuXG4vKi0tLS0tIEZPUk0gLS0tLS0gKi9cblxuaW5wdXQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbn1cbi8qIOi/meaYr+aWsOeahCAqL1xuI3RhYmxlcm93IGlucHV0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDAgMHB4IDIwcHggMjBweDtcbn1cblxudGQuYWRkYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY2FydGl0ZW0gaW5wdXQuYWRkYnRuIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjYXJ0aXRlbSBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDIwcHg7XG59XG5cbnRleHRhcmVhLnNpZGViYXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAyNXB4O1xufVxuXG5pbnB1dC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZkNTAyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDBweDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbn1cblxuaW5wdXQuYnV0dG9uX3NpZGViYXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAxMTlweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDBweCAwcHggNXB4IDI1cHg7XG59XG5cbmlucHV0LmJ1dHRvbl9jb250ZW50IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgICB3aWR0aDogMTE5cHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XG59XG5cblxuXG4vKi0tLS0tIEhvdmVyYm94IENvZGUgLSBnZXQgY29kZSBmb3VuZCBhdCBodHRwOi8vaG9zdC5zb25zcHJpbmcuY29tL2hvdmVyYm94LyAtLS0tLS0qL1xuXG4jaXRlbV9jb250ZW50IGltZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLyogY29sb3I6IGluaGVyaXQ7ICovXG4gICAgLyogdmVydGljYWwtYWxpZ246IHRvcDsgKi9cbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICAvKiBtYXJnaW46IDJweDsgKi9cbiAgICAvKiBwYWRkaW5nOiAycHg7ICovXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG59XG5cbiAgICAjaXRlbV9jb250ZW50IGltZzpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/order-history/order-history.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-history/order-history.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"head\">\n      <div id=\"menu_header\">\n          <span id=\"head_left\" class=\"yellow\"></span>\n          <span id=\"head_right\" class=\"yellow\">Your balance is {{user.balance}}!</span>\n      </div>\n  </div>\n  <br />\n  <br />\n  <div id=\"content\">\n      <div class=\"login_box\">\n          <ul id=\"nav_list\">\n              <li class=\"li_nav_body\">\n              <input class=\"sidebar\" type=\"hidden\" name=\"userID\" value={{user.userID}}>\n              <input class=\"sidebar\" type=\"submit\" (click)=\"toHome()\" name=\"backHomepageBtn\" value=\"Keep Shopping\" />\n              </li>\n              <li class=\"li_nav_body\">\n                  <form asp-action=\"LoginPage\" asp-controller=\"Client\" method=\"get\">\n                      <input class=\"sidebar\" (click)=\"logOut()\" type=\"submit\" name=\"LogoutBtn\" value=\"Log out\" />\n                  </form>\n              </li>\n              <li class=\"li_nav_body\">\n                  <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n              </li>\n          </ul>\n      </div> \n\n      <div class=\"content_box_photo\">\n          <div>\n              <br />\n          </div>\n          <div class=\"content\">\n              <h3 class=\"yellow\">Hi, {{user.userName}}, here is all your order history!</h3>\n              <table class=\"shoppingcart\">\n                  <thead>\n                      <tr id=\"tablehead\" style=\"text-align:center; font-size:9px\">\n                          <th>\n                              Order ID\n                          </th>\n                          <th>\n                              Order Date\n                          </th>\n                          <th>\n                              Order Cost\n                          </th>\n                          <th></th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                    \n                      <tr id=\"tablerow\" *ngFor=\"let order of vieworders\">\n                        <td>\n                              <input style=\"text-align:center;\" type=\"text\" name=\"orderID\" value={{order.orderID}} readonly=\"readonly\" />\n                          </td>\n                          <td>\n                              <input style=\"text-align:center;\" type=\"text\" name=\"orderDate\" value={{order.orderDate}} readonly=\"readonly\" />\n                          </td>\n                          <td>\n                              <input style=\"text-align:center;\" type=\"text\" name=\"totalCost\" value={{order.totalCost}} readonly=\"readonly\" />\n                          </td>\n                          <td>\n                              <button type=\"submit\" (click)=\"viewdetails(order)\" name=\"viewdetailsBtn\" style=\"width:150px;text-align:center;\" class=\"enter\">View This Order Details</button>\n                          </td>\n                         </tr>\n                  \n                  </tbody>\n              </table>\n          </div>\n      </div>\n  </div>\n</div>\n\n"

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
            var promise_1, dict;
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
                        dict = {};
                        this.orders.forEach(function (element) {
                            if (!dict[element.orderID]) {
                                dict[element.orderID] = element;
                            }
                        });
                        Object.keys(dict).forEach(function (element) {
                            console.log('my dict: ' + dict[element].orderID);
                        });
                        if (Object.keys(dict).length === 0) {
                            alert("Oh, you haven't buy anything here, go and get some cool sneakers!");
                        }
                        else {
                            Object.keys(dict).forEach(function (element) {
                                _this.vieworders.push(dict[element]);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //!!!!!!!!!!!!!!!!!!!!!!!!!! this needs to be linked with details component !!!!!!!!!!!!!!!
    OrderHistoryComponent.prototype.viewdetails = function (data) {
        this.details = [];
        console.log('view order detail of:', data.orderID);
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].orderID === data.orderID) {
                console.log('add view :', this.orders[i].orderID);
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
    OrderHistoryComponent.prototype.toHome = function () {
        this.router.navigate(['/home']);
    };
    OrderHistoryComponent.prototype.logOut = function () {
        this.user = _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.router.navigate(['/login']);
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

/***/ "./src/app/regist/regist.component.css":
/*!*********************************************!*\
  !*** ./src/app/regist/regist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nbutton {\n  width: 100px;\n  margin-left: 20px; }\nspan {\n  display: inline;\n  /* width: 150px; */ }\n.clear {\n  clear: both;\n  height: 200px; }\n.item {\n  margin: 10px 10px 0px 10px; }\np {\n  margin: 10px 0 0 0;\n  /* width: 80% */ }\n.date {\n  color: #ffd502;\n  text-decoration: overline;\n  font-size: 10px;\n  padding: 10px 0 20px 0; }\n#content_footer p {\n  margin: 10px 30px 10px 30px;\n  padding-top: 20px;\n  font-size: 10px;\n  text-align: left; }\n.login_box p {\n  margin: 0px 10px 20px 25px;\n  font-size: 9px;\n  color: #fff;\n  text-transform: uppercase; }\n.content_box_photo h3 {\n  margin: 40px 0px 10px 0px; }\n#content_footer p {\n  margin: 10px 0px 10px 60px !important;\n  margin: 10px 0px 10px 85px;\n  font-size: 10px;\n  text-align: justify; }\n.red {\n  color: red; }\n.yellow {\n  color: #ffd502;\n  font-weight: bold; }\nth {\n  text-align: center; }\ntd {\n  text-align: right; }\nh1 {\n  font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n  color: #fff; }\nh2 {\n  font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 20px;\n  margin: 0px 50px 10px 30px !important;\n  margin: 0px 30px 10px 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #072450;\n  font-weight: normal; }\nh3 {\n  margin: 0px 0px 10px 0px;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #fff; }\na {\n  text-decoration: none;\n  color: #ffd502; }\n/*----- MENU ----- */\n#nav_list {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  list-style: none;\n  overflow: hidden; }\n#nav_list li {\n  width: 18%;\n  display: inline-block;\n  overflow: hidden;\n  margin-left: -7px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: bold;\n  text-align: center; }\n.li_nav_body a {\n  height: 20px;\n  line-height: 20px; }\n.li_nav_footer a {\n  display: block;\n  width: 170px;\n  height: 21px;\n  background-position: 0 0px;\n  padding-left: 25px;\n  line-height: 21px; }\n.li_nav_body a:hover {\n  background-position: 0 -20px;\n  color: #016001; }\n.li_nav_footer a:hover {\n  background-position: 0 -20px;\n  color: #016001; }\n.li_active a:active {\n  background-position: 0 -40px;\n  color: #fff; }\n/*----- LAYOUT ----- */\n#container {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  position: relative; }\n#menu_header {\n  width: 100%;\n  height: 150px;\n  font-size: 13px; }\n#head_left {\n  width: 47%;\n  float: left;\n  text-align: left;\n  margin: 30px 0 0 30px; }\n#head_right {\n  width: 47%;\n  float: left;\n  text-align: right;\n  margin: 30px 0 0 10px; }\n#menu_left {\n  width: 250px;\n  min-height: 100%;\n  margin: 0 0 0 50px;\n  float: left; }\n.login_box {\n  width: 100%;\n  float: left;\n  text-align: center;\n  margin: 20px 0 0 0; }\n#head {\n  width: 100%;\n  height: 200px;\n  float: left;\n  text-align: center; }\n#content {\n  width: 100%;\n  text-align: justify;\n  float: left;\n  margin: 0 0 0 20px; }\n.content_box_photo {\n  width: 100%;\n  margin: 30px 0 0 0px;\n  float: left;\n  text-align: center; }\n#content_footer {\n  clear: both;\n  margin-bottom: -70px;\n  height: 50px; }\n/* 这是新的 */\n.shoppingcart {\n  color: #000000;\n  width: 90%;\n  margin-top: 20px;\n  margin-left: 7%;\n  margin-bottom: 50px;\n  background-color: #fff; }\n/* 这是新的 */\n.shoppingcart thead {\n  height: 50px;\n  line-height: 50px; }\n/* 这是新的 */\n.shoppingcart tbody {\n  height: 20px;\n  line-height: 20px; }\n.masonry {\n  -webkit-column-count: 3;\n     -moz-column-count: 3;\n          column-count: 3;\n  -webkit-column-gap: 0;\n     -moz-column-gap: 0;\n          column-gap: 0;\n  /* text-align: center; */ }\n.item {\n  -webkit-column-break-inside: avoid;\n     -moz-column-break-inside: avoid;\n          break-inside: avoid;\n  box-sizing: border-box;\n  padding: 10px;\n  /* background-color: #fff; */\n  margin-left: 30px; }\n.item_content {\n  width: 80%;\n  text-align: left;\n  margin-left: 30px; }\n/*------FOOT------- */\n#foot {\n  width: 100%;\n  float: left;\n  background-color: black;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0; }\n/*----- IMAGES ----- */\na img {\n  border: none; }\nimg.left,\nimg.center,\nimg.right {\n  padding: 4px;\n  border: 1px solid #a0a0a0; }\nimg.left {\n  float: left;\n  margin: 0px 12px 5px 0px;\n  background: #fff; }\nimg.right {\n  float: right;\n  margin: 0px 30px 5px 0px; }\n/*----- FORM ----- */\ninput {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 250px;\n  color: #707070;\n  margin: 0px 0px 0px 0px; }\n/* 这是新的 */\n#tablerow input {\n  border: 0px;\n  font: normal 10px tahoma;\n  width: 90%;\n  color: #707070;\n  margin: 0 0px 20px 20px; }\ntd.addbtn {\n  text-align: left; }\n#cartitem input.addbtn {\n  width: 100px;\n  color: #ffd502;\n  font-weight: bold; }\n#cartitem input {\n  border: none;\n  font: normal 10px tahoma;\n  width: 200px;\n  background-color: black;\n  color: white;\n  margin: 10px 0px 0px 20px; }\ntextarea.sidebar {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 115px;\n  height: 80px;\n  color: #707070;\n  margin: 5px 0px 5px 25px; }\ninput.sidebar {\n  width: 100%;\n  height: 15px;\n  line-height: 15px;\n  text-decoration: none;\n  color: #ffd502;\n  font-size: 13px;\n  font-weight: bold;\n  background-color: transparent;\n  margin-left: -7px;\n  text-transform: uppercase;\n  text-align: center;\n  border: 0px;\n  margin: 0px 0px 0px 0px; }\ninput.button_sidebar {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 119px;\n  color: #707070;\n  margin: 0px 0px 5px 25px; }\ninput.button_content {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 119px;\n  color: #707070;\n  margin: 5px 0px 5px 0px; }\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n#item_content img {\n  cursor: pointer;\n  background: #fff;\n  /* color: inherit; */\n  /* vertical-align: top; */\n  width: 200px;\n  height: 150px;\n  /* margin: 2px; */\n  /* padding: 2px; */\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  transition: all 0.6s; }\n#item_content img:hover {\n  -webkit-transform: scale(2);\n          transform: scale(2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0L3JlZ2lzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBRTtBQUVyQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUU7QUFFakI7RUFDRSwwQkFBMEIsRUFBRTtBQUU5QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlLEVBQUU7QUFFbkI7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixzQkFBc0IsRUFBRTtBQUUxQjtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQixFQUFFO0FBRXBCO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCLEVBQUU7QUFFN0I7RUFDRSx5QkFBeUIsRUFBRTtBQUU3QjtFQUNFLHFDQUFxQztFQUNyQywwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLG1CQUFtQixFQUFFO0FBRXZCO0VBQ0UsVUFBVSxFQUFFO0FBRWQ7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLGlCQUFpQixFQUFFO0FBRXJCO0VBQ0UsZ0ZBQWdGO0VBQ2hGLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0lBQ2pCOzJCQUN1QjtFQUN6QixXQUFXLEVBQUU7QUFFZjtFQUNFLGdGQUFnRjtFQUNoRixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUIsRUFBRTtBQUV2QjtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFdBQVcsRUFBRTtBQUVmO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWMsRUFBRTtBQUVsQixvQkFBb0I7QUFDcEI7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QUFFO0FBRXJCO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix5QkFBeUIsRUFBRTtBQUU3QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2Qsd0JBQXdCLEVBQUU7QUFFNUI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUIsRUFBRTtBQUUzQjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0IsRUFBRTtBQUU1QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUIsRUFBRTtBQUUzQixxRkFBcUY7QUFDckY7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFFO0FBRXhCO0VBQ0UsMkJBQW1CO1VBQW5CLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0L3JlZ2lzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDsgfVxuXG5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICAvKiB3aWR0aDogMTUwcHg7ICovIH1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogMjAwcHg7IH1cblxuLml0ZW0ge1xuICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDsgfVxuXG5wIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAvKiB3aWR0aDogODAlICovIH1cblxuLmRhdGUge1xuICBjb2xvcjogI2ZmZDUwMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwOyB9XG5cbiNjb250ZW50X2Zvb3RlciBwIHtcbiAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5sb2dpbl9ib3ggcCB7XG4gIG1hcmdpbjogMHB4IDEwcHggMjBweCAyNXB4O1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLmNvbnRlbnRfYm94X3Bob3RvIGgzIHtcbiAgbWFyZ2luOiA0MHB4IDBweCAxMHB4IDBweDsgfVxuXG4jY29udGVudF9mb290ZXIgcCB7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA4NXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7IH1cblxuLnllbGxvdyB7XG4gIGNvbG9yOiAjZmZkNTAyO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG50aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG50ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvKiBtYXJnaW46IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xubWFyZ2luOiAxMHB4IDBweCAwcHggMHB4OyAqL1xuICBjb2xvcjogI2ZmZjsgfVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMHB4IDUwcHggMTBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4IDMwcHggMTBweCAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDcyNDUwO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbmgzIHtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZkNTAyOyB9XG5cbi8qLS0tLS0gTUVOVSAtLS0tLSAqL1xuI25hdl9saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4jbmF2X2xpc3QgbGkge1xuICB3aWR0aDogMTglO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmxpX25hdl9ib2R5IGEge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbi5saV9uYXZfZm9vdGVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4OyB9XG5cbi5saV9uYXZfYm9keSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjBweDtcbiAgY29sb3I6ICMwMTYwMDE7IH1cblxuLmxpX25hdl9mb290ZXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIwcHg7XG4gIGNvbG9yOiAjMDE2MDAxOyB9XG5cbi5saV9hY3RpdmUgYTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xuICBjb2xvcjogI2ZmZjsgfVxuXG4vKi0tLS0tIExBWU9VVCAtLS0tLSAqL1xuI2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4jbWVudV9oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZm9udC1zaXplOiAxM3B4OyB9XG5cbiNoZWFkX2xlZnQge1xuICB3aWR0aDogNDclO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAzMHB4IDAgMCAzMHB4OyB9XG5cbiNoZWFkX3JpZ2h0IHtcbiAgd2lkdGg6IDQ3JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDMwcHggMCAwIDEwcHg7IH1cblxuI21lbnVfbGVmdCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMCA1MHB4O1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubG9naW5fYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwIDAgMDsgfVxuXG4jaGVhZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbiNjb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMCAwIDIwcHg7IH1cblxuLmNvbnRlbnRfYm94X3Bob3RvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCAwIDAgMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbiNjb250ZW50X2Zvb3RlciB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW4tYm90dG9tOiAtNzBweDtcbiAgaGVpZ2h0OiA1MHB4OyB9XG5cbi8qIOi/meaYr+aWsOeahCAqL1xuLnNob3BwaW5nY2FydCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cblxuLyog6L+Z5piv5paw55qEICovXG4uc2hvcHBpbmdjYXJ0IHRoZWFkIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDsgfVxuXG4vKiDov5nmmK/mlrDnmoQgKi9cbi5zaG9wcGluZ2NhcnQgdGJvZHkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbi5tYXNvbnJ5IHtcbiAgY29sdW1uLWNvdW50OiAzO1xuICBjb2x1bW4tZ2FwOiAwO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovIH1cblxuLml0ZW0ge1xuICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICBtYXJnaW4tbGVmdDogMzBweDsgfVxuXG4uaXRlbV9jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cblxuLyotLS0tLS1GT09ULS0tLS0tLSAqL1xuI2Zvb3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7IH1cblxuLyotLS0tLSBJTUFHRVMgLS0tLS0gKi9cbmEgaW1nIHtcbiAgYm9yZGVyOiBub25lOyB9XG5cbmltZy5sZWZ0LFxuaW1nLmNlbnRlcixcbmltZy5yaWdodCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDsgfVxuXG5pbWcubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDBweCAxMnB4IDVweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuaW1nLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDBweCAzMHB4IDVweCAwcHg7IH1cblxuLyotLS0tLSBGT1JNIC0tLS0tICovXG5pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDI1MHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7IH1cblxuLyog6L+Z5piv5paw55qEICovXG4jdGFibGVyb3cgaW5wdXQge1xuICBib3JkZXI6IDBweDtcbiAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiAwIDBweCAyMHB4IDIwcHg7IH1cblxudGQuYWRkYnRuIHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4jY2FydGl0ZW0gaW5wdXQuYWRkYnRuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogI2ZmZDUwMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuI2NhcnRpdGVtIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjBweDsgfVxuXG50ZXh0YXJlYS5zaWRlYmFyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogODBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbjogNXB4IDBweCA1cHggMjVweDsgfVxuXG5pbnB1dC5zaWRlYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmQ1MDI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7IH1cblxuaW5wdXQuYnV0dG9uX3NpZGViYXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gIHdpZHRoOiAxMTlweDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbjogMHB4IDBweCA1cHggMjVweDsgfVxuXG5pbnB1dC5idXR0b25fY29udGVudCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDExOXB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7IH1cblxuLyotLS0tLSBIb3ZlcmJveCBDb2RlIC0gZ2V0IGNvZGUgZm91bmQgYXQgaHR0cDovL2hvc3Quc29uc3ByaW5nLmNvbS9ob3ZlcmJveC8gLS0tLS0tKi9cbiNpdGVtX2NvbnRlbnQgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cbiAgLyogdmVydGljYWwtYWxpZ246IHRvcDsgKi9cbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICAvKiBtYXJnaW46IDJweDsgKi9cbiAgLyogcGFkZGluZzogMnB4OyAqL1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC42czsgfVxuXG4jaXRlbV9jb250ZW50IGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMik7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/regist/regist.component.html":
/*!**********************************************!*\
  !*** ./src/app/regist/regist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n        <div id=\"head\">\n            <div id=\"menu_header\">\n                <span id=\"head_left\" class=\"yellow\">Welcome!</span>\n                <span id=\"head_right\" class=\"yellow\"></span>\n            </div>\n        </div>\n        <br />\n        <br />\n        <div id=\"content\">\n            <div class=\"login_box\">\n                <ul id=\"nav_list\">\n                    <li class=\"li_nav_body\">\n                        <form>\n                            <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n                        </form>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"content_box_photo\">\n                <h3 class=\"yellow\">Hi, you should register here first!</h3>\n                <div>\n                    <form>\n                        <div>\n                          <input type=\"text\" name=\"userName\" [(ngModel)]=\"userName\" placeholder=\"User Name\" class=\"enter\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"emailAddress\" [(ngModel)]=\"emailAddress\" placeholder=\"Email Address\" class=\"enter\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"password\" name=\"pwd\" [(ngModel)]=\"pwd\" placeholder=\"Password\" class=\"enter\">\n                        </div>\n                        <br />\n                        <div> \n                            <input type=\"text\" name=\"balance\" [(ngModel)]=\"balance\" placeholder=\"Balance\" class=\"enter\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"shippingAddress\" [(ngModel)]=\"shippingAddress\" placeholder=\"Shipping Address\" class=\"enter\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"phoneNo\" placeholder=\"Phone Number\" class=\"enter\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"zipCode\" [(ngModel)]=\"zipCode\" placeholder=\"Zip Code\" class=\"enter\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"country\" [(ngModel)]=\"country\" placeholder=\"Country\" class=\"enter\">\n                        </div>\n                        <br />\n                        <br>\n                        <div >\n                            <input type=\"submit\" name=\"registerBtn\" (click)=\"regist()\" value=\"Register\" style=\"width:150px\" class=\"enter\"/>                          \n                        </div>\n                    </form>\n                    \n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/regist/regist.component.ts":
/*!********************************************!*\
  !*** ./src/app/regist/regist.component.ts ***!
  \********************************************/
/*! exports provided: RegistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistComponent", function() { return RegistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegistComponent = /** @class */ (function () {
    function RegistComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegistComponent.prototype.ngOnInit = function () {
    };
    RegistComponent.prototype.regist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.registerInfo = {
                            userName: this.userName,
                            emailAddress: this.emailAddress,
                            pwd: this.pwd,
                            balance: this.balance,
                            shippingAddress: this.shippingAddress,
                            phoneNo: this.phoneNo,
                            zipCode: this.zipCode,
                            country: this.country,
                        };
                        promise = new Promise(function (resolve, reject) {
                            _this.userService.register(_this.registerInfo)
                                .toPromise()
                                .then(function (res) {
                                res = res;
                                resolve();
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RegistComponent.prototype, "userName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RegistComponent.prototype, "pwd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RegistComponent.prototype, "emailAddress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RegistComponent.prototype, "userID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RegistComponent.prototype, "balance", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RegistComponent.prototype, "shippingAddress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RegistComponent.prototype, "phoneNo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RegistComponent.prototype, "zipCode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RegistComponent.prototype, "country", void 0);
    RegistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regist',
            template: __webpack_require__(/*! ./regist.component.html */ "./src/app/regist/regist.component.html"),
            styles: [__webpack_require__(/*! ./regist.component.css */ "./src/app/regist/regist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistComponent);
    return RegistComponent;
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

/***/ "./src/app/shared/services/card.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/card.service.ts ***!
  \*************************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CardService = /** @class */ (function () {
    function CardService(http) {
        this.http = http;
    }
    CardService.prototype.charge = function (cardInfo) {
        console.log(this.http);
        var url = "https://sneakerx-api-final.azurewebsites.net/api/Server/Charge";
        console.log(url);
        return this.http.post(url, cardInfo);
    };
    CardService.prototype.updateBalance = function (user) {
        console.log(this.http);
        var url = "https://sneakerx-api-final.azurewebsites.net/api/Server/balanceUpdate";
        console.log(url);
        return this.http.post(url, user);
    };
    CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/shared/services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this._total = null;
    }
    ;
    CartService.prototype.addCart = function (cartInfo) {
        console.log(this.http);
        var url = "https://sneakerx-api-final.azurewebsites.net/api/Server/toCart";
        console.log(url);
        console.log("userID:" + cartInfo.userID + "+itemID:" + cartInfo.itemID + "+itemName:" + cartInfo.itemName);
        return this.http.post(url, cartInfo);
    };
    CartService.prototype.getCart = function (userId) {
        var url = "https://sneakerx-api-final.azurewebsites.net/api/Server/cartInfo";
        // const uri = decodeURIComponent(
        //   `${Constants.locationAPIUrl}api/Student/GetCartAsync`
        //   // ${Constants.locationAPIUrl}/api/items?apikey=${Constants.apiKey}`
        // );
        console.log('before post' + userId);
        return this.http.post(url, userId);
    };
    CartService.prototype.check = function (userId) {
        var url = "https://sneakerx-api-final.azurewebsites.net/api/Server/checkOut";
        // const uri = decodeURIComponent(
        //   `${Constants.locationAPIUrl}api/Student/GetCartAsync`
        //   // ${Constants.locationAPIUrl}/api/items?apikey=${Constants.apiKey}`
        // );
        console.log('before post' + userId);
        return this.http.post(url, userId);
    };
    CartService.prototype.set = function (value) {
        this._total = value;
    };
    CartService.prototype.get = function () {
        return this._total;
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartService);
    return CartService;
}());



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

/***/ "./src/app/shared/services/item.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/item.service.ts ***!
  \*************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getItems = function () {
        var uri = decodeURIComponent("https://sneakerx-api-final.azurewebsites.net/api/Server/allItems"
        // ${Constants.locationAPIUrl}/api/items?apikey=${Constants.apiKey}`
        );
        return this.http.get(uri);
    };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemService);
    return ItemService;
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
        this.orderDetails = [];
        for (var i = 0; i < details.length - 1; i++) {
            this.orderDetails.push(details[i]);
        }
        this.orderDetails.push(details[i]);
        console.log(this.orderDetails);
        //return this.orderDetails;
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

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_userModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/userModel */ "./src/app/shared/classes/userModel.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.user = _classes_userModel__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    UserService.prototype.updatePwd = function (user) {
        var url = "https://sneakerx-api-final.azurewebsites.net/api/Server/newPassword";
        return this.http.post(url, user);
    };
    UserService.prototype.register = function (registerInfo) {
        var url = "https://sneakerx-api-final.azurewebsites.net/api/Server/register";
        return this.http.post(url, registerInfo);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/update-info/update-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-info/update-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nhtml, body {\n  color: #fff;\n  font-size: 11px;\n  font-family: 'Tahoma';\n  background-size: 100%; }\nbutton {\n  width: 100px;\n  margin-left: 20px; }\nspan {\n  display: inline;\n  /* width: 150px; */ }\n.clear {\n  clear: both;\n  height: 200px; }\n.item {\n  margin: 10px 10px 0px 10px; }\np {\n  margin: 10px 0 0 0;\n  /* width: 80% */ }\n.date {\n  color: #ffd502;\n  text-decoration: overline;\n  font-size: 10px;\n  padding: 10px 0 20px 0; }\n#content_footer p {\n  margin: 10px 30px 10px 30px;\n  padding-top: 20px;\n  font-size: 10px;\n  text-align: left; }\n.login_box p {\n  margin: 0px 10px 20px 25px;\n  font-size: 9px;\n  color: #fff;\n  text-transform: uppercase; }\n.content_box_photo h3 {\n  margin: 40px 0px 10px 0px; }\n#content_footer p {\n  margin: 10px 0px 10px 60px !important;\n  margin: 10px 0px 10px 85px;\n  font-size: 10px;\n  text-align: justify; }\n.red {\n  color: red; }\n.yellow {\n  color: #ffd502;\n  font-weight: bold; }\nth {\n  text-align: center; }\ntd {\n  text-align: right; }\nh1 {\n  font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n  color: #fff; }\nh2 {\n  font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 20px;\n  margin: 0px 50px 10px 30px !important;\n  margin: 0px 30px 10px 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #072450;\n  font-weight: normal; }\nh3 {\n  margin: 0px 0px 10px 0px;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #fff; }\na {\n  text-decoration: none;\n  color: #ffd502; }\n/*----- MENU ----- */\n#nav_list {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  list-style: none;\n  overflow: hidden; }\n#nav_list li {\n    width: 18%;\n    display: inline-block;\n    overflow: hidden;\n    margin-left: -7px;\n    text-transform: uppercase;\n    font-size: 13px;\n    font-weight: bold;\n    text-align: center; }\n.li_nav_body a {\n  height: 20px;\n  line-height: 20px; }\n.li_nav_footer a {\n  display: block;\n  width: 170px;\n  height: 21px;\n  background-position: 0 0px;\n  padding-left: 25px;\n  line-height: 21px; }\n.li_nav_body a:hover, .li_nav_footer a:hover {\n  background-position: 0 -20px;\n  color: #016001; }\n.li_active a:active {\n  background-position: 0 -40px;\n  color: #fff; }\n/*----- LAYOUT ----- */\n#container {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  position: relative; }\n#menu_header {\n  width: 100%;\n  height: 150px;\n  font-size: 13px; }\n#head_left {\n  width: 47%;\n  float: left;\n  text-align: left;\n  margin: 30px 0 0 30px; }\n#head_right {\n  width: 47%;\n  float: left;\n  text-align: right;\n  margin: 30px 0 0 10px; }\n#menu_left {\n  width: 250px;\n  min-height: 100%;\n  margin: 0 0 0 50px;\n  float: left; }\n.login_box {\n  width: 100%;\n  float: left;\n  text-align: center;\n  margin: 20px 0 0 0; }\n#head {\n  width: 100%;\n  height: 200px;\n  float: left;\n  text-align: center; }\n#content {\n  width: 100%;\n  text-align: justify;\n  float: left;\n  margin: 0 0 0 20px; }\n.content_box_photo {\n  width: 100%;\n  margin: 30px 0 0 0px;\n  float: left;\n  text-align: center; }\n#content_footer {\n  clear: both;\n  margin-bottom: -70px;\n  height: 50px; }\n/* 这是新的 */\n.shoppingcart {\n  color: #000000;\n  width: 90%;\n  margin-top: 20px;\n  margin-left: 7%;\n  margin-bottom: 50px;\n  background-color: #fff; }\n.shoppingcart thead {\n    height: 50px;\n    line-height: 50px; }\n.shoppingcart tbody {\n    height: 20px;\n    line-height: 20px; }\n/* 这是新的 */\n/* 这是新的 */\n.masonry {\n  -webkit-column-count: 3;\n     -moz-column-count: 3;\n          column-count: 3;\n  -webkit-column-gap: 0;\n     -moz-column-gap: 0;\n          column-gap: 0;\n  /* text-align: center; */ }\n.item {\n  -webkit-column-break-inside: avoid;\n     -moz-column-break-inside: avoid;\n          break-inside: avoid;\n  box-sizing: border-box;\n  padding: 10px;\n  /* background-color: #fff; */\n  margin-left: 30px; }\n.item_content {\n  width: 80%;\n  text-align: left;\n  margin-left: 30px; }\n/*------FOOT------- */\n#foot {\n  width: 100%;\n  float: left;\n  background-color: black;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0; }\n/*----- IMAGES ----- */\na img {\n  border: none; }\nimg.left, img.center, img.right {\n  padding: 4px;\n  border: 1px solid #a0a0a0; }\nimg.left {\n  float: left;\n  margin: 0px 12px 5px 0px;\n  background: #fff; }\nimg.right {\n  float: right;\n  margin: 0px 30px 5px 0px; }\n/*----- FORM ----- */\ninput {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 250px;\n  color: #707070;\n  margin: 0px 0px 0px 0px; }\n/* 这是新的 */\n#tablerow input {\n  border: 0px;\n  font: normal 10px tahoma;\n  width: 90%;\n  color: #707070;\n  margin: 0 0px 20px 20px; }\ntd.addbtn {\n  text-align: left; }\n#cartitem input {\n  border: none;\n  font: normal 10px tahoma;\n  width: 200px;\n  background-color: black;\n  color: white;\n  margin: 10px 0px 0px 20px; }\n#cartitem input.addbtn {\n    width: 100px;\n    color: #ffd502;\n    font-weight: bold; }\ntextarea.sidebar {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 115px;\n  height: 80px;\n  color: #707070;\n  margin: 5px 0px 5px 25px; }\ninput.sidebar {\n  width: 100%;\n  height: 15px;\n  line-height: 15px;\n  text-decoration: none;\n  color: #ffd502;\n  font-size: 13px;\n  font-weight: bold;\n  background-color: transparent;\n  margin-left: -7px;\n  text-transform: uppercase;\n  text-align: center;\n  border: 0px;\n  margin: 0px 0px 0px 0px; }\ninput.button_sidebar {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 119px;\n  color: #707070;\n  margin: 0px 0px 5px 25px; }\ninput.button_content {\n  border: solid 1px #cccccc;\n  font: normal 10px tahoma;\n  width: 119px;\n  color: #707070;\n  margin: 5px 0px 5px 0px; }\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n#item_content img {\n  cursor: pointer;\n  background: #fff;\n  /* color: inherit; */\n  /* vertical-align: top; */\n  width: 200px;\n  height: 150px;\n  /* margin: 2px; */\n  /* padding: 2px; */\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  transition: all 0.6s; }\n#item_content img:hover {\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWluZm8vdXBkYXRlLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUIsRUFBRTtBQUV6QjtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBRTtBQUVyQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUU7QUFFakI7RUFDRSwwQkFBMEIsRUFBRTtBQUU5QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlLEVBQUU7QUFFbkI7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixzQkFBc0IsRUFBRTtBQUUxQjtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQixFQUFFO0FBRXBCO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCLEVBQUU7QUFFN0I7RUFDRSx5QkFBeUIsRUFBRTtBQUU3QjtFQUNFLHFDQUFxQztFQUNyQywwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLG1CQUFtQixFQUFFO0FBRXZCO0VBQ0UsVUFBVSxFQUFFO0FBRWQ7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLGlCQUFpQixFQUFFO0FBRXJCO0VBQ0UsZ0ZBQWdGO0VBQ2hGLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0lBQ2pCOzJCQUN1QjtFQUN6QixXQUFXLEVBQUU7QUFFZjtFQUNFLGdGQUFnRjtFQUNoRixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUIsRUFBRTtBQUV2QjtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsZUFBZTtF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RSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHlCQUF5QixFQUFFO0FBQzNCO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUIsRUFBRTtBQUV2QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2Qsd0JBQXdCLEVBQUU7QUFFNUI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUIsRUFBRTtBQUMzQjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0IsRUFBRTtBQUM1QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUIsRUFBRTtBQUUzQixxRkFBcUY7QUFDckY7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFFO0FBQ3RCO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLWluZm8vdXBkYXRlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmh0bWwsIGJvZHkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogJ1RhaG9tYSc7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTsgfVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIC8qIHdpZHRoOiAxNTBweDsgKi8gfVxuXG4uY2xlYXIge1xuICBjbGVhcjogYm90aDtcbiAgaGVpZ2h0OiAyMDBweDsgfVxuXG4uaXRlbSB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4OyB9XG5cbnAge1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIC8qIHdpZHRoOiA4MCUgKi8gfVxuXG4uZGF0ZSB7XG4gIGNvbG9yOiAjZmZkNTAyO1xuICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMCAyMHB4IDA7IH1cblxuI2NvbnRlbnRfZm9vdGVyIHAge1xuICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLmxvZ2luX2JveCBwIHtcbiAgbWFyZ2luOiAwcHggMTBweCAyMHB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4uY29udGVudF9ib3hfcGhvdG8gaDMge1xuICBtYXJnaW46IDQwcHggMHB4IDEwcHggMHB4OyB9XG5cbiNjb250ZW50X2Zvb3RlciBwIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDYwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDg1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDsgfVxuXG4ueWVsbG93IHtcbiAgY29sb3I6ICNmZmQ1MDI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbnRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpY1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8qIG1hcmdpbjogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG5tYXJnaW46IDEwcHggMHB4IDBweCAwcHg7ICovXG4gIGNvbG9yOiAjZmZmOyB9XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwcHggNTBweCAxMHB4IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggMzBweCAxMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwNzI0NTA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuaDMge1xuICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmQ1MDI7IH1cblxuLyotLS0tLSBNRU5VIC0tLS0tICovXG4jbmF2X2xpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICNuYXZfbGlzdCBsaSB7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmxpX25hdl9ib2R5IGEge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbi5saV9uYXZfZm9vdGVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4OyB9XG5cbi5saV9uYXZfYm9keSBhOmhvdmVyLCAubGlfbmF2X2Zvb3RlciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjBweDtcbiAgY29sb3I6ICMwMTYwMDE7IH1cblxuLmxpX2FjdGl2ZSBhOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi8qLS0tLS0gTEFZT1VUIC0tLS0tICovXG4jY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbiNtZW51X2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBmb250LXNpemU6IDEzcHg7IH1cblxuI2hlYWRfbGVmdCB7XG4gIHdpZHRoOiA0NyU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDMwcHggMCAwIDMwcHg7IH1cblxuI2hlYWRfcmlnaHQge1xuICB3aWR0aDogNDclO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMzBweCAwIDAgMTBweDsgfVxuXG4jbWVudV9sZWZ0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDUwcHg7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5sb2dpbl9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDAgMCAwOyB9XG5cbiNoZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAwIDAgMjBweDsgfVxuXG4uY29udGVudF9ib3hfcGhvdG8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuI2NvbnRlbnRfZm9vdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbi1ib3R0b206IC03MHB4O1xuICBoZWlnaHQ6IDUwcHg7IH1cblxuLyog6L+Z5piv5paw55qEICovXG4uc2hvcHBpbmdjYXJ0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAuc2hvcHBpbmdjYXJ0IHRoZWFkIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7IH1cbiAgLnNob3BwaW5nY2FydCB0Ym9keSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbi8qIOi/meaYr+aWsOeahCAqL1xuLyog6L+Z5piv5paw55qEICovXG4ubWFzb25yeSB7XG4gIGNvbHVtbi1jb3VudDogMztcbiAgY29sdW1uLWdhcDogMDtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqLyB9XG5cbi5pdGVtIHtcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cblxuLml0ZW1fY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XG5cbi8qLS0tLS0tRk9PVC0tLS0tLS0gKi9cbiNmb290IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwOyB9XG5cbi8qLS0tLS0gSU1BR0VTIC0tLS0tICovXG5hIGltZyB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG5pbWcubGVmdCwgaW1nLmNlbnRlciwgaW1nLnJpZ2h0IHtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwOyB9XG5pbWcubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDBweCAxMnB4IDVweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cbmltZy5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwcHggMzBweCA1cHggMHB4OyB9XG5cbi8qLS0tLS0gRk9STSAtLS0tLSAqL1xuaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gIHdpZHRoOiAyNTBweDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4OyB9XG5cbi8qIOi/meaYr+aWsOeahCAqL1xuI3RhYmxlcm93IGlucHV0IHtcbiAgYm9yZGVyOiAwcHg7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDkwJTtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbjogMCAwcHggMjBweCAyMHB4OyB9XG5cbnRkLmFkZGJ0biB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuI2NhcnRpdGVtIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjBweDsgfVxuICAjY2FydGl0ZW0gaW5wdXQuYWRkYnRuIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxudGV4dGFyZWEuc2lkZWJhciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW46IDVweCAwcHggNXB4IDI1cHg7IH1cblxuaW5wdXQuc2lkZWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZkNTAyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4OyB9XG5pbnB1dC5idXR0b25fc2lkZWJhciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDExOXB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAyNXB4OyB9XG5pbnB1dC5idXR0b25fY29udGVudCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgd2lkdGg6IDExOXB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7IH1cblxuLyotLS0tLSBIb3ZlcmJveCBDb2RlIC0gZ2V0IGNvZGUgZm91bmQgYXQgaHR0cDovL2hvc3Quc29uc3ByaW5nLmNvbS9ob3ZlcmJveC8gLS0tLS0tKi9cbiNpdGVtX2NvbnRlbnQgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cbiAgLyogdmVydGljYWwtYWxpZ246IHRvcDsgKi9cbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICAvKiBtYXJnaW46IDJweDsgKi9cbiAgLyogcGFkZGluZzogMnB4OyAqL1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC42czsgfVxuICAjaXRlbV9jb250ZW50IGltZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/update-info/update-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/update-info/update-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n        <div id=\"head\">\n            <div id=\"menu_header\">\n                <span id=\"head_left\" class=\"yellow\">Welcome! {{user.userName}}</span>\n                <span id=\"head_right\" class=\"yellow\">Your balance is {{user.balance}}</span>\n            </div>\n        </div>\n        <br/>\n\n\n        <div id=\"content\">\n            <div class=\"login_box\">\n                <ul id=\"nav_list\">\n                    <li class=\"li_nav_body\">\n                        <form>\n                            <input class=\"sidebar\" type=\"hidden\"  value={{user.userID}} name=\"userID\" >\n                            <input class=\"sidebar\" type=\"submit\" name=\"backHomepageBtn\" value=\"Keep Shopping\" (click)=\"toHome()\"/>\n                        </form>\n                    </li>\n                    <li class=\"li_nav_body\">\n                        <form >\n                            <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n                        </form>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"content_box_photo\">\n                <div style=\"float: auto;\">\n                <h3 class=\"yellow\">You can update your password below!</h3>\n                <br />\n                <br />\n                <div>\n                    <form>\n                        <div>\n                            <input type=\"text\" name=\"pwd_1\" [(ngModel)]=\"pwd1\" placeholder=\"Please tpye in your new password here\"/>\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"pwd_2\" [(ngModel)]=\"pwd2\" placeholder=\"Please re-tpye in your new password here\"/>\n                        </div>\n                        <br />\n                        <br />\n                        <div>\n                            <input type=\"submit\" name=\"updatePWD\" (click)=\"isSame()\" value=\"Reset Password\" style=\"width:100px;\"/>\n                        </div>\n                        <br />\n                    </form>\n                    \n                </div>\n                </div>\n\n                <div style=\"overflow: auto;\">\n                    <h3 class=\"yellow\">Add your credit card here!</h3>\n                    <br />\n                    <br />\n                    <form>\n                        <div>\n                            <input type=\"hidden\" name=\"userID\" value={{user.userID}} />\n                            <input type=\"text\" name=\"cardNo\" placeholder=\"Card Number\" [(ngModel)]=\"cardNo\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"cardPwd\" placeholder=\"Card Password\" [(ngModel)]=\"cardPwd\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"cardName\" placeholder=\"Card Holder\" [(ngModel)]=\"cardName\">\n                        </div>\n                        <br />\n                        <div> \n                            <input type=\"text\" name=\"cardMonth\" placeholder=\"Expired Month\" [(ngModel)]=\"cardMonth\" style=\"width:124px\">/<input type=\"text\" name=\"cardYear\" placeholder=\"Expired Year\" [(ngModel)]=\"cardYear\" style=\"width:124px\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"cardCvc\" placeholder=\"Card Security Number\" [(ngModel)]=\"cardCvc\">\n                        </div>\n                        <br />\n                        <div>\n                            <input type=\"text\" name=\"chargeAmount\" placeholder=\"Balance you want to add\" [(ngModel)]=\"chargeAmount\">\n                        </div>\n                        <br />\n                        <br />\n                        <div>\n                            <input type=\"submit\" name=\"chargeBtn\" value=\"Add Balance by Bank Card\" (click)=\"updateBalance()\" style=\"width:100px;\"/>\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/update-info/update-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-info/update-info.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInfoComponent", function() { return UpdateInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info-details.service */ "./src/app/shared/services/user-info-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_card_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/card.service */ "./src/app/shared/services/card.service.ts");






var UpdateInfoComponent = /** @class */ (function () {
    function UpdateInfoComponent(userService, userInfoDetailsService, router, cardService) {
        this.userService = userService;
        this.userInfoDetailsService = userInfoDetailsService;
        this.router = router;
        this.cardService = cardService;
    }
    UpdateInfoComponent.prototype.ngOnInit = function () {
        this.user = this.userInfoDetailsService.getUserInfoDetails();
    };
    UpdateInfoComponent.prototype.isSame = function () {
        if (this.pwd1 == "" || this.pwd2 == "") {
            alert("Please input the password!");
        }
        else if (this.pwd1 != this.pwd2) {
            alert("Password is not equal, please try again!");
        }
        else {
            this.updatePwd(this.pwd1);
        }
    };
    UpdateInfoComponent.prototype.updatePwd = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user.pwd = value;
                        promise = new Promise(function (resolve, reject) {
                            _this.userService.updatePwd(_this.user)
                                .toPromise()
                                .then(function (res) {
                                res = res;
                                resolve();
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.sent();
                        alert("Password update successfully, please login again");
                        this.router.navigate(['/login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateInfoComponent.prototype.charge = function (cardInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (resolve, reject) {
                            _this.cardService.charge(cardInfo)
                                .toPromise()
                                .then(function (res) {
                                res = res;
                                resolve();
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.sent();
                        console.log("in the charge async function");
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateInfoComponent.prototype.updateBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _chargeAmount, promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cardInfo = {
                            cardNo: this.cardNo,
                            cardPwd: this.cardPwd,
                            cardName: this.cardName,
                            cardBalance: this.cardBalance,
                            cardMonth: this.cardMonth,
                            cardYear: this.cardYear,
                            cardCvc: this.cardCvc
                        };
                        this.charge(this.cardInfo);
                        _chargeAmount = parseInt(this.chargeAmount);
                        this.user.balance = this.user.balance + _chargeAmount;
                        promise = new Promise(function (resolve, reject) {
                            _this.cardService.updateBalance(_this.user)
                                .toPromise()
                                .then(function (res) {
                                res = res;
                                resolve();
                                console.log("in the updateBalance function");
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.sent();
                        console.log("updateBalnce promise done");
                        alert("add balance successfully");
                        this.router.navigate(['/home']);
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateInfoComponent.prototype.toHome = function () {
        this.router.navigate(['/home']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateInfoComponent.prototype, "pwd1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateInfoComponent.prototype, "pwd2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateInfoComponent.prototype, "cardNo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateInfoComponent.prototype, "cardPwd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateInfoComponent.prototype, "cardName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UpdateInfoComponent.prototype, "cardBalance", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UpdateInfoComponent.prototype, "cardMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UpdateInfoComponent.prototype, "cardYear", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateInfoComponent.prototype, "cardCvc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UpdateInfoComponent.prototype, "chargeAmount", void 0);
    UpdateInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-info',
            template: __webpack_require__(/*! ./update-info.component.html */ "./src/app/update-info/update-info.component.html"),
            styles: [__webpack_require__(/*! ./update-info.component.css */ "./src/app/update-info/update-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _shared_services_user_info_details_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoDetailsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_services_card_service__WEBPACK_IMPORTED_MODULE_5__["CardService"]])
    ], UpdateInfoComponent);
    return UpdateInfoComponent;
}());



/***/ }),

/***/ "./src/app/view-details/view-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-details/view-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n    color: #fff;\n    font-size: 11px;\n    font-family: 'Tahoma';\n    background-size: 100%;\n}\n\nbutton {\n    width: 100px;\n    margin-left: 20px;\n}\n\nspan {\n    display: inline;\n    /* width: 150px; */\n}\n\n.clear {\n    clear: both;\n    height: 200px;\n}\n\n.item {\n    margin: 10px 10px 0px 10px;\n}\n\np {\n    margin: 10px 0 0 0;\n    /* width: 80% */\n}\n\n.date {\n    color: #ffd502;\n    text-decoration: overline;\n    font-size: 10px;\n    padding: 10px 0 20px 0;\n}\n\n#content_footer p {\n    margin: 10px 30px 10px 30px;\n    padding-top: 20px;\n    font-size: 10px;\n    text-align: left;\n}\n\n.login_box p {\n    margin: 0px 10px 20px 25px;\n    font-size: 9px;\n    color: #fff;\n    text-transform: uppercase;\n}\n\n.content_box_photo h3 {\n    margin: 40px 0px 10px 0px;\n}\n\n#content_footer p {\n    margin: 10px 0px 10px 60px !important;\n    margin: 10px 0px 10px 85px;\n    font-size: 10px;\n    text-align: justify;\n}\n\n.red {\n    color: red;\n}\n\n.yellow {\n    color: #ffd502;\n    font-weight: bold;\n}\n\nth {\n    text-align: center;\n}\n\ntd {\n    text-align: center;\n}\n\nh1 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: normal;\n    /* margin: 0px 0px 0px 0px !important;\nmargin: 10px 0px 0px 0px; */\n    color: #fff;\n}\n\nh2 {\n    font-family: \"Century Gothic\", \"Trebuchet MS\", \"Arial Narrow\", Arial, sans-serif;\n    font-size: 20px;\n    margin: 0px 50px 10px 30px !important;\n    margin: 0px 30px 10px 30px;\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #072450;\n    font-weight: normal;\n}\n\nh3 {\n    margin: 0px 0px 10px 0px;\n    text-transform: uppercase;\n    font-size: 12px;\n    color: #fff;\n}\n\na {\n    text-decoration: none;\n    color: #ffd502;\n}\n\n/*----- MENU ----- */\n\n#nav_list {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    list-style: none;\n    overflow: hidden;\n}\n\n#nav_list li {\n        width: 18%;\n        display: inline-block;\n        overflow: hidden;\n        margin-left: -7px;\n        text-transform: uppercase;\n        font-size: 13px;\n        font-weight: bold;\n        text-align: center;\n    }\n\n.li_nav_body a {\n    height: 20px;\n    line-height: 20px;\n}\n\n.li_nav_footer a {\n    display: block;\n    width: 170px;\n    height: 21px;\n    background-position: 0 0px;\n    padding-left: 25px;\n    line-height: 21px;\n}\n\n.li_nav_body a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_nav_footer a:hover {\n    background-position: 0 -20px;\n    color: #016001;\n}\n\n.li_active a:active {\n    background-position: 0 -40px;\n    color: #fff;\n}\n\n/*----- LAYOUT ----- */\n\n#container {\n    width: 100%;\n    min-height: 100%;\n    height: 100%;\n    position: relative;\n}\n\n#menu_header {\n    width: 100%;\n    height: 150px;\n    font-size: 13px;\n}\n\n#head_left {\n    width: 47%;\n    float: left;\n    text-align: left;\n    margin: 30px 0 0 30px;\n}\n\n#head_right {\n    width: 47%;\n    float: left;\n    text-align: right;\n    margin: 30px 0 0 10px;\n}\n\n#menu_left {\n    width: 250px;\n    min-height: 100%;\n    margin: 0 0 0 50px;\n    float: left;\n}\n\n.login_box {\n    width: 100%;\n    float: left;\n    text-align: center;\n    margin: 20px 0 0 0;\n}\n\n#head {\n    width: 100%;\n    height: 200px;\n    float: left;\n    text-align: center;\n}\n\n#content {\n    width: 100%;\n    text-align: justify;\n    float: left;\n    margin: 0 0 0 20px;\n}\n\n.content_box_photo {\n    width: 100%;\n    margin: 30px 0 0 0px;\n    float: left;\n    text-align: center;\n}\n\n#content_footer {\n    clear: both;\n    margin-bottom: -70px;\n    height: 50px;\n}\n\n/* 这是新的 */\n\n.shoppingcart {\n    color: #000000;\n    width: 90%;\n    margin-top: 20px;\n    margin-left: 7%;\n    margin-bottom: 50px;\n    background-color: #fff;\n}\n\n/* 这是新的 */\n\n.shoppingcart thead {\n        height: 50px;\n        line-height: 50px;\n    }\n\n/* 这是新的 */\n\n.shoppingcart tbody {\n        height: 20px;\n        line-height: 20px;\n    }\n\n.masonry {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 0;\n       -moz-column-gap: 0;\n            column-gap: 0;\n    /* text-align: center; */\n}\n\n.item {\n    -webkit-column-break-inside: avoid;\n       -moz-column-break-inside: avoid;\n            break-inside: avoid;\n    box-sizing: border-box;\n    padding: 10px;\n    /* background-color: #fff; */\n    margin-left: 30px;\n}\n\n.item_content {\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n}\n\n/*------FOOT------- */\n\n#foot {\n    width: 100%;\n    float: left;\n    background-color: black;\n    color: white;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n}\n\n/*----- IMAGES ----- */\n\na img {\n    border: none;\n}\n\nimg.left,\nimg.center,\nimg.right {\n    padding: 4px;\n    border: 1px solid #a0a0a0;\n}\n\nimg.left {\n    float: left;\n    margin: 0px 12px 5px 0px;\n    background: #fff;\n}\n\nimg.right {\n    float: right;\n    margin: 0px 30px 5px 0px;\n}\n\n/*----- FORM ----- */\n\ninput {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 250px;\n    color: #707070;\n    margin: 0px 0px 0px 0px;\n    text-align: center;\n}\n\n/* 这是新的 */\n\n#tablerow input {\n    border: 0px;\n    font: normal 10px tahoma;\n    width: 90%;\n    color: #707070;\n    margin: 0 0px 20px 20px;\n}\n\ntd.addbtn {\n    text-align: left;\n}\n\n#cartitem input.addbtn {\n    width: 100px;\n    color: #ffd502;\n    font-weight: bold;\n}\n\n#cartitem input {\n    border: none;\n    font: normal 10px tahoma;\n    width: 200px;\n    background-color: black;\n    color: white;\n    margin: 10px 0px 0px 20px;\n}\n\ntextarea.sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 115px;\n    height: 80px;\n    color: #707070;\n    margin: 5px 0px 5px 25px;\n}\n\ninput.sidebar {\n    width: 100%;\n    height: 15px;\n    line-height: 15px;\n    text-decoration: none;\n    color: #ffd502;\n    font-size: 13px;\n    font-weight: bold;\n    background-color: transparent;\n    margin-left: -7px;\n    text-transform: uppercase;\n    text-align: center;\n    border: 0px;\n    margin: 0px 0px 0px 0px;\n}\n\ninput.button_sidebar {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 0px 0px 5px 25px;\n}\n\ninput.button_content {\n    border: solid 1px #cccccc;\n    font: normal 10px tahoma;\n    width: 119px;\n    color: #707070;\n    margin: 5px 0px 5px 0px;\n}\n\n/*----- Hoverbox Code - get code found at http://host.sonspring.com/hoverbox/ ------*/\n\n#item_content img {\n    cursor: pointer;\n    background: #fff;\n    /* color: inherit; */\n    /* vertical-align: top; */\n    width: 200px;\n    height: 150px;\n    /* margin: 2px; */\n    /* padding: 2px; */\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 1px;\n    transition: all 0.6s;\n}\n\n#item_content img:hover {\n    ransform: scale(2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1kZXRhaWxzL3ZpZXctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnRkFBZ0Y7SUFDaEYsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkI7MkJBQ3VCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdGQUFnRjtJQUNoRixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pC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QUNUO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUlBLHFGQUFxRjs7QUFFckY7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZGV0YWlscy92aWV3LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUYWhvbWEnO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbnNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAvKiB3aWR0aDogMTUwcHg7ICovXG59XG5cbi5jbGVhciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLml0ZW0ge1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgLyogd2lkdGg6IDgwJSAqL1xufVxuXG4uZGF0ZSB7XG4gICAgY29sb3I6ICNmZmQ1MDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbn1cblxuI2NvbnRlbnRfZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxvZ2luX2JveCBwIHtcbiAgICBtYXJnaW46IDBweCAxMHB4IDIwcHggMjVweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5jb250ZW50X2JveF9waG90byBoMyB7XG4gICAgbWFyZ2luOiA0MHB4IDBweCAxMHB4IDBweDtcbn1cblxuI2NvbnRlbnRfZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDg1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi55ZWxsb3cge1xuICAgIGNvbG9yOiAjZmZkNTAyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvKiBtYXJnaW46IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xubWFyZ2luOiAxMHB4IDBweCAwcHggMHB4OyAqL1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMHB4IDUwcHggMTBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwNzI0NTA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDMge1xuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZkNTAyO1xufVxuXG4vKi0tLS0tIE1FTlUgLS0tLS0gKi9cblxuI25hdl9saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiAgICAjbmF2X2xpc3QgbGkge1xuICAgICAgICB3aWR0aDogMTglO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4ubGlfbmF2X2JvZHkgYSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubGlfbmF2X2Zvb3RlciBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbn1cblxuLmxpX25hdl9ib2R5IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIwcHg7XG4gICAgY29sb3I6ICMwMTYwMDE7XG59XG5cbi5saV9uYXZfZm9vdGVyIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIwcHg7XG4gICAgY29sb3I6ICMwMTYwMDE7XG59XG5cbi5saV9hY3RpdmUgYTphY3RpdmUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cblxuLyotLS0tLSBMQVlPVVQgLS0tLS0gKi9cblxuI2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbiNtZW51X2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbiNoZWFkX2xlZnQge1xuICAgIHdpZHRoOiA0NyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDMwcHggMCAwIDMwcHg7XG59XG5cbiNoZWFkX3JpZ2h0IHtcbiAgICB3aWR0aDogNDclO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjogMzBweCAwIDAgMTBweDtcbn1cblxuI21lbnVfbGVmdCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMCA1MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ubG9naW5fYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xufVxuXG4jaGVhZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cblxuLmNvbnRlbnRfYm94X3Bob3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMCAwIDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50X2Zvb3RlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLyog6L+Z5piv5paw55qEICovXG4uc2hvcHBpbmdjYXJ0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbiAgICAvKiDov5nmmK/mlrDnmoQgKi9cbiAgICAuc2hvcHBpbmdjYXJ0IHRoZWFkIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB9XG4gICAgLyog6L+Z5piv5paw55qEICovXG4gICAgLnNob3BwaW5nY2FydCB0Ym9keSB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4ubWFzb25yeSB7XG4gICAgY29sdW1uLWNvdW50OiAzO1xuICAgIGNvbHVtbi1nYXA6IDA7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuXG4uaXRlbSB7XG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLml0ZW1fY29udGVudCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4vKi0tLS0tLUZPT1QtLS0tLS0tICovXG5cbiNmb290IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5cbi8qLS0tLS0gSU1BR0VTIC0tLS0tICovXG5cbmEgaW1nIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmltZy5sZWZ0LFxuaW1nLmNlbnRlcixcbmltZy5yaWdodCB7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XG59XG5cbmltZy5sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDBweCAxMnB4IDVweCAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW1nLnJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAwcHggMzBweCA1cHggMHB4O1xufVxuXG4vKi0tLS0tIEZPUk0gLS0tLS0gKi9cblxuaW5wdXQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiDov5nmmK/mlrDnmoQgKi9cbiN0YWJsZXJvdyBpbnB1dCB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgZm9udDogbm9ybWFsIDEwcHggdGFob21hO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luOiAwIDBweCAyMHB4IDIwcHg7XG59XG5cbnRkLmFkZGJ0biB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NhcnRpdGVtIGlucHV0LmFkZGJ0biB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiAjZmZkNTAyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jY2FydGl0ZW0gaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAyMHB4O1xufVxuXG50ZXh0YXJlYS5zaWRlYmFyIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMjVweDtcbn1cblxuaW5wdXQuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZDUwMjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbmlucHV0LmJ1dHRvbl9zaWRlYmFyIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgIGZvbnQ6IG5vcm1hbCAxMHB4IHRhaG9tYTtcbiAgICB3aWR0aDogMTE5cHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luOiAwcHggMHB4IDVweCAyNXB4O1xufVxuXG5pbnB1dC5idXR0b25fY29udGVudCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBmb250OiBub3JtYWwgMTBweCB0YWhvbWE7XG4gICAgd2lkdGg6IDExOXB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xufVxuXG5cblxuLyotLS0tLSBIb3ZlcmJveCBDb2RlIC0gZ2V0IGNvZGUgZm91bmQgYXQgaHR0cDovL2hvc3Quc29uc3ByaW5nLmNvbS9ob3ZlcmJveC8gLS0tLS0tKi9cblxuI2l0ZW1fY29udGVudCBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8qIGNvbG9yOiBpbmhlcml0OyAqL1xuICAgIC8qIHZlcnRpY2FsLWFsaWduOiB0b3A7ICovXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgLyogbWFyZ2luOiAycHg7ICovXG4gICAgLyogcGFkZGluZzogMnB4OyAqL1xuICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xufVxuXG4jaXRlbV9jb250ZW50IGltZzpob3ZlciB7XG4gICAgcmFuc2Zvcm06IHNjYWxlKDIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-details/view-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-details/view-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"container\">\n  <div id=\"head\">\n      <div id=\"menu_header\">\n          <span id=\"head_left\" class=\"yellow\"></span>\n          <span id=\"head_right\" class=\"yellow\"></span> \n      </div>\n  </div>\n  <br />\n  <br />\n  <div id=\"content\">\n      <div class=\"login_box\">\n          <ul id=\"nav_list\">\n              <li class=\"li_nav_body\">\n                      <input class=\"sidebar\" type=\"hidden\" name=\"userID\" value=@ViewBag.User.userID>\n                      <input class=\"sidebar\" type=\"submit\" (click)=\"toHome()\" name=\"backHomepageBtn\" value=\"Keep Shopping\" />\n              </li>\n              <li class=\"li_nav_body\">\n                    <input class=\"sidebar\" type=\"submit\" (click)=\"logOut()\" name=\"LogoutBtn\" value=\"Log out\" />\n              </li>\n              <li class=\"li_nav_body\">\n                    <input class=\"sidebar\" type=\"submit\" name=\"CrashBtn\" value=\"Crash\" />\n              </li>\n          </ul>\n      </div> \n\n      <div class=\"content_box_photo\">\n          <h3 class=\"yellow\">Hi, these are the details of Order: {{details[0].orderID}} </h3>\n          <div class=\"content\">\n              <table class=\"shoppingcart\">\n                  <thead>\n                      <tr id=\"tablehead\" style=\"text-align:center; font-size:9px\">\n                          <th>\n                              Item ID\n                          </th>\n                          <th>\n                              Item Name\n                          </th>\n                          <th>\n                              Item Size\n                          </th>\n                          <th>\n                              Item Amonut\n                          </th>\n                          <th>\n                              Item Prive\n                          </th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr id=\"tablerow\" style=\"text-align: center;\" *ngFor=\"let order of details\">\n                          <td>\n                              {{order.itemID}}\n                          </td>\n                          <td>\n                              {{order.itemName}}\n                          </td>\n                          <td>\n                              {{order.itemSize}}\n                          </td>\n                          <td>\n                              {{order.itemBought}}\n                          </td>\n                          <td>\n                              {{order.itemPrice}}\n                          </td>\n                      </tr>     \n                  </tbody>\n              </table>\n          </div>\n      </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes/userModel */ "./src/app/shared/classes/userModel.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_order_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/order-detail.service */ "./src/app/shared/services/order-detail.service.ts");





// import 'rxjs/add/operator/toPromise';
var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(orderDetailService, router) {
        this.orderDetailService = orderDetailService;
        this.router = router;
        this.details = [];
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(this.details);
        this.viewDetails();
        console.log(this.details);
    };
    ViewDetailsComponent.prototype.viewDetails = function () {
        // const promise = new Promise((resolve, reject) => {
        this.details = this.orderDetailService.sendDetails();
        //   .toPromise()
        //     .then(
        //       res => { // Success           
        //         this.details = res;
        //         resolve();
        //       },         
        //     );
        // });
        // await promise;
    };
    ViewDetailsComponent.prototype.toHome = function () {
        this.router.navigate(['/home']);
    };
    ViewDetailsComponent.prototype.logOut = function () {
        this.user = _shared_classes_userModel__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.router.navigate(['/login']);
    };
    ViewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view-details',
            template: __webpack_require__(/*! ./view-details.component.html */ "./src/app/view-details/view-details.component.html"),
            styles: [__webpack_require__(/*! ./view-details.component.css */ "./src/app/view-details/view-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_order_detail_service__WEBPACK_IMPORTED_MODULE_4__["OrderDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = __webpack_require__(/*! /Users/G/Desktop/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map