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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-chalani/add-chalani.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-chalani/add-chalani.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder{\r\n    color: blue;\r\n}"

/***/ }),

/***/ "./src/app/add-chalani/add-chalani.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-chalani/add-chalani.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\">\n        <label>चलानी नं.</label>\n        <input type=\"number\" class=\"form-control\" id=\"chalaniNo\" placeholder=\"\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>चलानी मिति</label>\n        <input type=\"date\" class=\"form-control\" id=\"chalaniDate\" placeholder=\"\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>चलानी पत्र संख्या</label>\n        <input type=\"number\" class=\"form-control\" id=\"chalaniPages\" placeholder=\"\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>चलानी पत्र मिति</label>\n        <input type=\"date\" class=\"form-control\" id=\"chalaniPagesDate\" placeholder=\"\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-3\">\n        <label>पाउनेको नाम</label>\n        <input type=\"text\" class=\"form-control\" id=\"chalaniAddress\" placeholder=\"\">\n      </div>\n      <div class=\"form-group col-3\"></div>\n      <div class=\"form-group col-3\">\n        <label>पाउनेको ठेगाना</label>\n        <input type=\"text\" class=\"form-control\" id=\"chalaniAddress\" placeholder=\"\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n          <label>हुलाक/र.नं.</label>\n          <input type=\"number\" class=\"form-control\" id=\"chalaniHulakNo\" placeholder=\"\">\n        </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-6\">\n        <label>विषय</label>\n        <textarea type=\"text\" class=\"form-control\" rows=\"3\" id=\"chalaniSubject\" placeholder=\"\"></textarea>\n      </div>\n   </div>\n   <div class=\"form-row\">\n    <div class=\"form-group col-4\">\n      <label>कैफियत</label>\n      <textarea type=\"text\" class=\"form-control\" rows=\"3\" id=\"chalaniRemarks\" placeholder=\"\"></textarea>\n    </div>\n   </div>\n   <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-chalani/add-chalani.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-chalani/add-chalani.component.ts ***!
  \******************************************************/
/*! exports provided: AddChalaniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChalaniComponent", function() { return AddChalaniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddChalaniComponent = /** @class */ (function () {
    function AddChalaniComponent() {
    }
    AddChalaniComponent.prototype.ngOnInit = function () {
    };
    AddChalaniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-chalani',
            template: __webpack_require__(/*! ./add-chalani.component.html */ "./src/app/add-chalani/add-chalani.component.html"),
            styles: [__webpack_require__(/*! ./add-chalani.component.css */ "./src/app/add-chalani/add-chalani.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddChalaniComponent);
    return AddChalaniComponent;
}());



/***/ }),

/***/ "./src/app/add-darta/add-darta.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-darta/add-darta.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-darta/add-darta.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-darta/add-darta.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"dartaForm\" (ngSubmit)=\"addDarta(dartaForm.value)\">\n  <div class=\"form-row\">\n      <!-- <div class=\"form-group col-md-3\">\n        <label>दर्ता नं.</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"dartaNo\" placeholder=\"\">\n      </div> -->\n      <div class=\"form-group col-md-3\">\n        <label>दर्ता मिति</label>\n        <input type=\"text\" id=\"dartaDate\" class=\"form-control nepaliDate\" formControlName=\"dartaDate\" placeholder=\"\" required>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>प्राप्त भएको पत्र संख्या</label>\n        <span *ngIf=\"dartaForm.controls.dartaPages.invalid && dartaForm.controls.dartaPages.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n        <input type=\"number\" class=\"form-control\" formControlName=\"dartaPages\" placeholder=\"\" required>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label>प्राप्त भएको पत्रको मिति</label>\n        <input type=\"text\" id=\"dartaPagesDate\" class=\"form-control\" formControlName=\"dartaPagesDate\" placeholder=\"\" required>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label>पठाउने अफिसको नाम</label>\n        <span *ngIf=\"dartaForm.controls.dartaAddress.invalid && dartaForm.controls.dartaAddress.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"dartaAddress\" placeholder=\"\" required>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-6\">\n        <label>विषय</label>\n        <span *ngIf=\"dartaForm.controls.dartaSubject.invalid && dartaForm.controls.dartaSubject.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n        <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"dartaSubject\" placeholder=\"\" required></textarea>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-3\"> \n        <label>बुझिलिने फाटवालाको नाम</label>\n        <span *ngIf=\"dartaForm.controls.dartaDeptName.invalid && dartaForm.controls.dartaDeptName.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"dartaDeptName\" placeholder=\"\" required>\n      </div>\n      <div class=\"form-group col-3\">\n        <label>मिति</label>\n        <input type=\"text\" id=\"dartaDeptDate\" class=\"form-control\" formControlName=\"dartaDeptDate\" placeholder=\"\" required>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-4\">\n        <label>कैफियत</label>\n        <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"dartaRemarks\" placeholder=\"\"></textarea>\n      </div>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"dartaForm.controls.dartaAddress.invalid == true || dartaForm.controls.dartaDeptName.invalid == true || dartaForm.controls.dartaSubject.invalid == true || dartaForm.controls.dartaPages.invalid == true\">\n    <div id=\"errAlert\" style=\"color: red\"\n      *ngIf=\"dartaForm.invalid\n            && dartaForm.controls.dartaPages.touched \n            &&  dartaForm.controls.dartaAddress.touched \n            && dartaForm.controls.dartaDeptName.touched\n            && dartaForm.controls.dartaSubject.touched \n            && dartaForm.controls.dartaRemarks.touched\">\n      {{errAlert}}\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/add-darta/add-darta.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-darta/add-darta.component.ts ***!
  \**************************************************/
/*! exports provided: AddDartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDartaComponent", function() { return AddDartaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var adbs = __webpack_require__(/*! ad-bs-converter */ "./node_modules/ad-bs-converter/src/converter.js");
;
var AddDartaComponent = /** @class */ (function () {
    function AddDartaComponent(fb, _electron, router) {
        this.fb = fb;
        this._electron = _electron;
        this.router = router;
        this.errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
        this.star = "*";
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var YY = d.getFullYear();
        var MM = (month < 10 ? '0' : '') + month;
        var DD = (day < 10 ? '0' : '') + day;
        var date = adbs.ad2bs(YY + "/" + MM + "/" + DD);
        var convertedDate = date.en.year + "-" + date.en.month + "-" + date.en.day;
        this.dartaForm = this.fb.group({
            dartaNo: 0,
            dartaDate: convertedDate,
            dartaPages: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(999)])],
            dartaPagesDate: convertedDate,
            dartaAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaDeptName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaDeptDate: convertedDate,
            dartaRemarks: '',
        });
        console.log(this.dartaForm.controls);
        this.dartaForm.valueChanges.subscribe(console.log);
    }
    AddDartaComponent.prototype.addDarta = function (val) {
        var _dd, _ddd, _dpd;
        _dd = jQuery("#dartaDate").val();
        _ddd = jQuery("#dartaDeptDate").val();
        _dpd = jQuery("#dartaPagesDate").val();
        var _val = {
            dartaListSchema: {
                dartaNo: val.dartaNo,
                dartaDate: val.dartaDate,
                dartaPages: val.dartaPages,
                dartaPagesDate: val.dartaPagesDate,
                dartaAddress: val.dartaAddress,
                dartaSubject: val.dartaSubject,
                dartaDeptName: val.dartaDeptName,
                dartaDeptDate: val.dartaDeptDate,
                dartaRemarks: val.dartaRemarks
            },
            dartaDate: _dd,
            dartaPagesDate: _dpd,
            dartaDeptDate: _ddd,
        };
        console.log("Hello from addDarta");
        console.log(_val);
        this._electron.ipcRenderer.send('newDarta', _val);
        this._electron.ipcRenderer.on('success', function (event, arg) {
            console.log(arg);
        });
        this.dartaForm.reset();
        this.router.navigate(['darta']);
    };
    AddDartaComponent.prototype.ngOnInit = function () {
        jQuery('#dartaDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#dartaPagesDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#dartaDeptDate').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
    };
    AddDartaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-darta',
            template: __webpack_require__(/*! ./add-darta.component.html */ "./src/app/add-darta/add-darta.component.html"),
            styles: [__webpack_require__(/*! ./add-darta.component.css */ "./src/app/add-darta/add-darta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddDartaComponent);
    return AddDartaComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    background: rgb(25, 25, 29);\r\n    border: none;\r\n    border-radius: 0;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n    height: 40px;\r\n    color: #fff;\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\ni, span {\r\n    display: inline-block;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n    background: rgb(240, 233, 233);\r\n}\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background: #003893;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    min-width: 100px;\r\n    max-width: 100px;\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active .sidebar-header h3, #sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a {\r\n    /* padding: 20px 10px; */\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a i {\r\n    margin-right:  0;\r\n    display: block;\r\n}\r\n\r\n#sidebar.active ul ul a {\r\n    padding: 5px !important;\r\n    padding-right: 10px;\r\n}\r\n\r\n#sidebar.active a[aria-expanded=\"false\"]::before, #sidebar.active a[aria-expanded=\"true\"]::before {\r\n    top: auto;\r\n    bottom: 5px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    background: #003893;\r\n    padding: 10px;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #003893;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #003893;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n    display: block;\r\n    position: absolute;\r\n    right: 20px;\r\n}\r\n\r\na[aria-expanded=\"true\"]::before {\r\n    \r\n}\r\n\r\nul ul a {\r\n    font-size:14px !important;\r\n    padding-left: 30px !important;\r\n    background: #003893;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 14px !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #003893;\r\n}\r\n\r\na.article, a.article:hover {\r\n    background: #003893 !important;\r\n    color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n#content {\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n    width: 100%;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important ;\r\n    }\r\n    a[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n        top: auto;\r\n        bottom: 5px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n\r\n    #sidebar .sidebar-header h3, #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n\r\n    #sidebar ul li a i {\r\n        margin-right:  0;\r\n        display: block;\r\n    }\r\n\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n\r\n#routerContent{\r\n    padding: 20px;\r\n}\r\n\r\nfooter{\r\n    background: #dc143c;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    color: #fff;\r\n\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <!-- Sidebar Holder -->\n  <nav id=\"sidebar\">\n    <div class=\"sidebar-header\">\n      <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-link\">\n        <i class=\"fas fa-bars fa-lg\"></i>\n      </button>\n    </div>\n    <div class=\"menuItems\">\n      <ul class=\"list-unstyled\">\n        <li>\n          <a href=\"#dartaSubmenu\" data-toggle=\"collapse\">\n            <i class=\"fas fa-sign-in-alt\"></i>\n             दर्ता\n          </a>\n          <ul class=\"collapse list-unstyled text-left\" id=\"dartaSubmenu\">\n            <li>\n              <a routerLink=\"/add-darta\" routerLinkActive=\"active\">नयाँ</a>\n            </li>\n            <li>\n              <a routerLink=\"/darta\" routerLinkActive=\"active\">दर्ताको सूची</a>\n            </li>\n            <li>\n              <a routerLink=\"/search-darta\" routerLinkActive=\"active\">खोज</a>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"#chalaniSubmenu\" data-toggle=\"collapse\">\n            <i class=\"fas fa-sign-out-alt\"></i>\n            चलानी\n          </a>\n          <ul class=\"collapse list-unstyled\" id=\"chalaniSubmenu\">\n            <li>\n              <a routerLink=\"/add-chalani\" routerLinkActive=\"active\">नयाँ</a>\n            </li>\n            <li>\n              <a routerLink=\"/chalani\" routerLinkActive=\"active\">चलानिको सूची</a>\n            </li>\n            <li>\n              <a routerLink=\"/search-chalani\" routerLinkActive=\"active\">खोज</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    \n    \n  </nav>\n\n  <!-- Page Content Holder -->\n  <div id=\"content\" >\n      <nav class=\"navbar justify-content-end navbar-dark bg-dark\">\n          <a routerLink=\"/\" routerLinkActive=\"active\" class=\"nav-link\">ड्यासबोर्ड</a>\n          <a routerLink=\"/settings\" routerLinkActive=\"active\" class=\"nav-link\">सेटिग्स</a>\n          <a routerLink=\"/profile\" routerLinkActive=\"active\" class=\"nav-link\">प्रोफाइल</a>        \n      </nav>\n    <div id=\"routerContent\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- <div style=\"position: inline-block\">\n        <img src=\"assets/Emblem_of_Nepal.svg\" style=\"position: absolute;bottom: 40px;right: 30px; height: 60px;width:63px;\">\n    </div> -->\n  </div>\n</div>\n<footer class=\"fixed-bottom\">\nWell, Hello there matey! I am footer.\n</footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _darta_darta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./darta/darta.component */ "./src/app/darta/darta.component.ts");
/* harmony import */ var _chalani_chalani_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chalani/chalani.component */ "./src/app/chalani/chalani.component.ts");
/* harmony import */ var _add_darta_add_darta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-darta/add-darta.component */ "./src/app/add-darta/add-darta.component.ts");
/* harmony import */ var _add_chalani_add_chalani_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-chalani/add-chalani.component */ "./src/app/add-chalani/add-chalani.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _search_darta_search_darta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-darta/search-darta.component */ "./src/app/search-darta/search-darta.component.ts");
/* harmony import */ var _search_chalani_search_chalani_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-chalani/search-chalani.component */ "./src/app/search-chalani/search-chalani.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _darta_success_darta_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./darta-success/darta-success.component */ "./src/app/darta-success/darta-success.component.ts");
/* harmony import */ var _fetch_darta_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fetch-darta.service */ "./src/app/fetch-darta.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//Importing Reactive Forms Module


//Importing Electron Files




var appRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
    { path: 'darta', component: _darta_darta_component__WEBPACK_IMPORTED_MODULE_4__["DartaComponent"], runGuardsAndResolvers: 'always' },
    { path: 'chalani', component: _chalani_chalani_component__WEBPACK_IMPORTED_MODULE_5__["ChalaniComponent"] },
    { path: 'add-darta', component: _add_darta_add_darta_component__WEBPACK_IMPORTED_MODULE_6__["AddDartaComponent"] },
    { path: 'add-chalani', component: _add_chalani_add_chalani_component__WEBPACK_IMPORTED_MODULE_7__["AddChalaniComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'search-darta', component: _search_darta_search_darta_component__WEBPACK_IMPORTED_MODULE_12__["SearchDartaComponent"] },
    { path: 'search-chalani', component: _search_chalani_search_chalani_component__WEBPACK_IMPORTED_MODULE_13__["SearchChalaniComponent"] },
    { path: 'darta-success', component: _darta_success_darta_success_component__WEBPACK_IMPORTED_MODULE_17__["DartaSuccessComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _darta_darta_component__WEBPACK_IMPORTED_MODULE_4__["DartaComponent"],
                _chalani_chalani_component__WEBPACK_IMPORTED_MODULE_5__["ChalaniComponent"],
                _add_darta_add_darta_component__WEBPACK_IMPORTED_MODULE_6__["AddDartaComponent"],
                _add_chalani_add_chalani_component__WEBPACK_IMPORTED_MODULE_7__["AddChalaniComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _search_darta_search_darta_component__WEBPACK_IMPORTED_MODULE_12__["SearchDartaComponent"],
                _search_chalani_search_chalani_component__WEBPACK_IMPORTED_MODULE_13__["SearchChalaniComponent"],
                _darta_success_darta_success_component__WEBPACK_IMPORTED_MODULE_17__["DartaSuccessComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true, onSameUrlNavigation: 'reload' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_16__["NgxElectronModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_15__["DataTablesModule"]
            ],
            providers: [_fetch_darta_service__WEBPACK_IMPORTED_MODULE_18__["FetchDartaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chalani/chalani.component.css":
/*!***********************************************!*\
  !*** ./src/app/chalani/chalani.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chalani/chalani.component.html":
/*!************************************************!*\
  !*** ./src/app/chalani/chalani.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chalani works!\n</p>\n"

/***/ }),

/***/ "./src/app/chalani/chalani.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chalani/chalani.component.ts ***!
  \**********************************************/
/*! exports provided: ChalaniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChalaniComponent", function() { return ChalaniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChalaniComponent = /** @class */ (function () {
    function ChalaniComponent() {
    }
    ChalaniComponent.prototype.ngOnInit = function () {
    };
    ChalaniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chalani',
            template: __webpack_require__(/*! ./chalani.component.html */ "./src/app/chalani/chalani.component.html"),
            styles: [__webpack_require__(/*! ./chalani.component.css */ "./src/app/chalani/chalani.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChalaniComponent);
    return ChalaniComponent;
}());



/***/ }),

/***/ "./src/app/darta-success/darta-success.component.css":
/*!***********************************************************!*\
  !*** ./src/app/darta-success/darta-success.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/darta-success/darta-success.component.html":
/*!************************************************************!*\
  !*** ./src/app/darta-success/darta-success.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  darta-success works!\n</p>\n"

/***/ }),

/***/ "./src/app/darta-success/darta-success.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/darta-success/darta-success.component.ts ***!
  \**********************************************************/
/*! exports provided: DartaSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DartaSuccessComponent", function() { return DartaSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DartaSuccessComponent = /** @class */ (function () {
    function DartaSuccessComponent() {
    }
    DartaSuccessComponent.prototype.ngOnInit = function () {
    };
    DartaSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-darta-success',
            template: __webpack_require__(/*! ./darta-success.component.html */ "./src/app/darta-success/darta-success.component.html"),
            styles: [__webpack_require__(/*! ./darta-success.component.css */ "./src/app/darta-success/darta-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DartaSuccessComponent);
    return DartaSuccessComponent;
}());



/***/ }),

/***/ "./src/app/darta/darta.component.css":
/*!*******************************************!*\
  !*** ./src/app/darta/darta.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\ntable{\r\n    border-collapse:collapse; \r\n    table-layout:fixed; \r\n    width: 100%;\r\n}\r\n\r\ntable td {\r\n    border:solid 1px #fab;  \r\n    word-wrap:break-word;\r\n} */"

/***/ }),

/***/ "./src/app/darta/darta.component.html":
/*!********************************************!*\
  !*** ./src/app/darta/darta.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"flag\">\n    <div class=\"table-responsive-sm\">\n        <table datatable [dtOptions]=\"dtOptions\" dtInstance=\"dtInstance\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"table table-sm\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th width=\"5%\">दर्ता नं</th>\n                    <th width=\"8%\">दर्ता मिति</th>\n                    <th width=\"7%\">पत्र संख्या</th>\n                    <th width=\"9%\">प्राप्त मिति</th>\n                    <th width=\"13%\">पठाउने अफिसको नाम</th>\n                    <th width=\"15%\">विषय</th>\n                    <th width=\"15%\">फाटको नाम</th>\n                    <th width=\"9%\">गएको मिति</th>\n                    <th width=\"13%\">कैफियत</th>\n                    <th width=\"3%\" class=\"no-arrow\"></th>\n                    <th width=\"3%\" class=\"no-arrow\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let items of dartaList \" class=\"table-light\">\n                    <td width=\"5%\" class=\"table-light \">{{items.dartaNo}}</td>\n                    <td width=\"8%\" class=\"table-light \">{{items.dartaDate}}</td>\n                    <td width=\"7%\" class=\"table-light \">{{items.dartaPages}}</td>\n                    <td width=\"9%\" class=\"table-light \">{{items.dartaPagesDate}}</td>\n                    <td width=\"13%\" class=\"table-light \">{{items.dartaAddress}}</td>\n                    <td width=\"15%\" class=\"table-light \">{{items.dartaSubject}}</td>\n                    <td width=\"15%\" class=\"table-light \">{{items.dartaDeptName}}</td>\n                    <td width=\"9%\" class=\"table-light \">{{items.dartaDeptDate}}</td>\n                    <td width=\"13%\" class=\"table-light \">{{items.dartaRemarks}}</td>\n                    <th width=\"3%\">\n                        <button (click)=\"dataParse(items)\" data-toggle=\"modal\" data-target=\"#editDarta\" class=\"btn btn-success btn-sm\">\n                            <i class=\"fas fa-edit\"></i>\n                        </button>\n                    </th>\n                    <th width=\"3%\">\n                        <button (click)=\"deleteDarta(items)\" class=\"btn btn-danger btn-sm\">\n                            <i class=\"fas fa-trash-alt\"></i>\n                        </button>\n                    </th>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"editDarta\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"modalTitle\">दर्ता सम्पादन</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" id=\"modal\">\n                <form [formGroup]=\"dartaForm\" (ngSubmit)=\"editDarta(dartaForm.value)\" id=\"editForm\">\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-3\">\n                            <label>दर्ता नं.</label>\n                            <input type=\"number\" class=\"form-control\" formControlName=\"dartaNo\" disabled placeholder=\"\" required>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label>दर्ता मिति</label>\n                            <input type=\"text\" class=\"form-control\" id=\"dartaDateEdit\" formControlName=\"dartaDate\" placeholder=\"\" required>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label>प्राप्त भएको पत्र संख्या</label>\n                            <span *ngIf=\"dartaForm.controls.dartaPages.invalid && dartaForm.controls.dartaPages.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n                            <input type=\"number\" class=\"form-control\" formControlName=\"dartaPages\" placeholder=\"\" required>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label>प्राप्त भएको पत्रको मिति</label>\n                            <input type=\"text\" class=\"form-control\" id=\"dartaPagesDateEdit\" formControlName=\"dartaPagesDate\" placeholder=\"\">\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-4\">\n                            <label>पठाउने अफिसको नाम</label>\n                            <span *ngIf=\"dartaForm.controls.dartaAddress.invalid && dartaForm.controls.dartaAddress.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dartaAddress\" placeholder=\"\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-6\">\n                            <label>विषय</label>\n                            <span *ngIf=\"dartaForm.controls.dartaSubject.invalid && dartaForm.controls.dartaSubject.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n                            <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"dartaSubject\" placeholder=\"\" required></textarea>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-3\">\n                            <label>बुझिलिने फाटवालाको नाम</label>\n                            <span *ngIf=\"dartaForm.controls.dartaDeptName.invalid && dartaForm.controls.dartaDeptName.touched\" style=\"color: red\">&nbsp; &nbsp;*</span>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"dartaDeptName\" placeholder=\"\" required>\n                        </div>\n                        <div class=\"form-group col-3\">\n                            <label>मिति</label>\n                            <input type=\"text\" class=\"form-control\" id=\"dartaDeptDateEdit\" formControlName=\"dartaDeptDate\" placeholder=\"\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-4\">\n                            <label>कैफियत</label>\n                            <textarea type=\"text\" class=\"form-control\" rows=\"3\" formControlName=\"dartaRemarks\" placeholder=\"\"></textarea>\n                        </div>\n                    </div>\n                    <div id=\"errAlert\" style=\"color: red\" *ngIf=\"dartaForm.invalid\n                                                                                && dartaForm.controls.dartaPages.touched \n                                                                                &&  dartaForm.controls.dartaAddress.touched \n                                                                                && dartaForm.controls.dartaDeptName.touched\n                                                                                && dartaForm.controls.dartaSubject.touched \n                                                                                && dartaForm.controls.dartaRemarks.touched\">\n                        {{errAlert}}\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"dartaForm.controls.dartaAddress.invalid == true || dartaForm.controls.dartaDeptName.invalid == true || dartaForm.controls.dartaSubject.invalid == true || dartaForm.controls.dartaPages.invalid == true\">\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n    "

/***/ }),

/***/ "./src/app/darta/darta.component.ts":
/*!******************************************!*\
  !*** ./src/app/darta/darta.component.ts ***!
  \******************************************/
/*! exports provided: DartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DartaComponent", function() { return DartaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _fetch_darta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch-darta.service */ "./src/app/fetch-darta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var adbs = __webpack_require__(/*! ad-bs-converter */ "./node_modules/ad-bs-converter/src/converter.js");
;
;
// let abc = {
//   dartaNo: 1, dartaDate: "a", dartaPages: 1, dartaPagesDate:"a", dartaAddress:"a", dartaSubject:"a", dartaDeptName:"a", dartaDeptDate:"a",dartaRemarks: "a"
// }
var DartaComponent = /** @class */ (function () {
    function DartaComponent(fb, _electron, fetchDarta, router) {
        var _this = this;
        this.fb = fb;
        this._electron = _electron;
        this.fetchDarta = fetchDarta;
        this.router = router;
        this.errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
        this.star = "*";
        // Initialize ParsedData
        this.utsav = "Prabesh Chutiya";
        this.dtOptions = {
            dom: "<'row'<'col-sm-3'l><'col-sm-6 text-center'B><'col-sm-3'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            select: true,
            buttons: [
                'excel',
                'copy',
            ]
        };
        this.flag = false;
        this.dartaList = null;
        this.parsedData = {
            dartaNo: 1, dartaDate: "a",
            dartaPages: 1, dartaPagesDate: "a",
            dartaAddress: "a", dartaSubject: "a",
            dartaDeptName: "a", dartaDeptDate: "a",
            dartaRemarks: "a"
        };
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    DartaComponent.prototype.initialiseInvites = function () {
        // Set default values and re-fetch any data you need.
        this.getDarta();
        setTimeout(function () {
        }, 400);
    };
    DartaComponent.prototype.ngOnDestroy = function () {
        // avoid memory leaks here by cleaning up after ourselves. If we  
        // don't then we will continue to run our initialiseInvites()   
        // method on every navigationEnd event.
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    DartaComponent.prototype.ngOnInit = function () {
        this.getDarta();
        setTimeout(function () {
        }, 400);
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var YY = d.getFullYear();
        var MM = (month < 10 ? '0' : '') + month;
        var DD = (day < 10 ? '0' : '') + day;
        var date = adbs.ad2bs(YY + "/" + MM + "/" + DD);
        var convertedDate = date.en.year + "-" + date.en.month + "-" + date.en.day;
        this.dartaForm = this.fb.group({
            dartaNo: 0,
            dartaDate: convertedDate,
            dartaPages: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(999)])],
            dartaPagesDate: convertedDate,
            dartaAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaDeptName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dartaDeptDate: convertedDate,
            dartaRemarks: '',
        });
        console.log(this.dartaForm.controls);
        this.dartaForm.valueChanges.subscribe(console.log);
    };
    DartaComponent.prototype.getDarta = function () {
        var _this = this;
        this._electron.ipcRenderer.send('listDarta', 'listDarta');
        this._electron.ipcRenderer.on('dartaListReceived', function (event, arg) {
            _this.dartaList = arg;
            _this.parsedData = arg;
            _this.flag = true;
        });
    };
    DartaComponent.prototype.deleteDarta = function (data) {
        this._electron.ipcRenderer.send('deleteDarta', data);
        this._electron.ipcRenderer.on('dartaDeleted', function (event, arg) {
            console.log("deleted Darta");
            // console.log(arg);
        });
        this.router.navigate(['darta']);
    };
    DartaComponent.prototype.editDarta = function (val) {
        var _dd, _ddd, _dpd;
        _dd = jQuery("#dartaDateEdit").val();
        _ddd = jQuery("#dartaDeptDateEdit").val();
        _dpd = jQuery("#dartaPagesDateEdit").val();
        console.log("Values from jquery");
        console.log(_dd);
        console.log(_ddd);
        console.log(_dpd);
        var _val = {
            dartaListSchema: {
                dartaNo: val.dartaNo,
                dartaDate: val.dartaDate,
                dartaPages: val.dartaPages,
                dartaPagesDate: val.dartaPagesDate,
                dartaAddress: val.dartaAddress,
                dartaSubject: val.dartaSubject,
                dartaDeptName: val.dartaDeptName,
                dartaDeptDate: val.dartaDeptDate,
                dartaRemarks: val.dartaRemarks
            },
            dartaDate: _dd,
            dartaPagesDate: _dpd,
            dartaDeptDate: _ddd,
        };
        console.log("Hello from addDarta");
        console.log(_val);
        console.log("edit");
        console.log(val);
        this._electron.ipcRenderer.send('editDarta', _val);
        this._electron.ipcRenderer.on('dartaEdited', function (event, arg) {
            console.log("edited Darta");
            // console.log(arg);
        });
        this.router.navigate(['darta']);
    };
    DartaComponent.prototype.dataParse = function (data) {
        jQuery('#dartaDateEdit').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#dartaPagesDateEdit').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        jQuery('#dartaDeptDateEdit').nepaliDatePicker({
            dateFormat: "%y-%m-%d",
            closeOnDateSelect: true
        });
        this.parsedData = data;
        // console.log(this.parsedData);
        this.dartaForm.get('dartaNo').setValue(this.parsedData.dartaNo);
        this.dartaForm.get('dartaDate').setValue(this.parsedData.dartaDate);
        this.dartaForm.get('dartaPages').setValue(this.parsedData.dartaPages);
        this.dartaForm.get('dartaPagesDate').setValue(this.parsedData.dartaPagesDate);
        this.dartaForm.get('dartaAddress').setValue(this.parsedData.dartaAddress);
        this.dartaForm.get('dartaSubject').setValue(this.parsedData.dartaSubject);
        this.dartaForm.get('dartaDeptName').setValue(this.parsedData.dartaDeptName);
        this.dartaForm.get('dartaDeptDate').setValue(this.parsedData.dartaDeptDate);
        this.dartaForm.get('dartaRemarks').setValue(this.parsedData.dartaRemarks);
    };
    DartaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-darta',
            template: __webpack_require__(/*! ./darta.component.html */ "./src/app/darta/darta.component.html"),
            styles: [__webpack_require__(/*! ./darta.component.css */ "./src/app/darta/darta.component.css")],
            providers: [_fetch_darta_service__WEBPACK_IMPORTED_MODULE_3__["FetchDartaService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _fetch_darta_service__WEBPACK_IMPORTED_MODULE_3__["FetchDartaService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DartaComponent);
    return DartaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/fetch-darta.service.ts":
/*!****************************************!*\
  !*** ./src/app/fetch-darta.service.ts ***!
  \****************************************/
/*! exports provided: FetchDartaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDartaService", function() { return FetchDartaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FetchDartaService = /** @class */ (function () {
    function FetchDartaService(_electron) {
        this._electron = _electron;
        this._electron.ipcRenderer.send('listDarta', 'listDarta');
    }
    FetchDartaService.prototype.fetchdata = function () {
        return new Promise(function (resolve, reject) {
            this._electron.ipcRenderer.on('dartaListReceived', function (event, arg) {
                resolve(arg);
            });
        });
    };
    FetchDartaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], FetchDartaService);
    return FetchDartaService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/search-chalani/search-chalani.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-chalani/search-chalani.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-chalani/search-chalani.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-chalani/search-chalani.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-chalani works!\n</p>\n"

/***/ }),

/***/ "./src/app/search-chalani/search-chalani.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-chalani/search-chalani.component.ts ***!
  \************************************************************/
/*! exports provided: SearchChalaniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchChalaniComponent", function() { return SearchChalaniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchChalaniComponent = /** @class */ (function () {
    function SearchChalaniComponent() {
    }
    SearchChalaniComponent.prototype.ngOnInit = function () {
    };
    SearchChalaniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-chalani',
            template: __webpack_require__(/*! ./search-chalani.component.html */ "./src/app/search-chalani/search-chalani.component.html"),
            styles: [__webpack_require__(/*! ./search-chalani.component.css */ "./src/app/search-chalani/search-chalani.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchChalaniComponent);
    return SearchChalaniComponent;
}());



/***/ }),

/***/ "./src/app/search-darta/search-darta.component.css":
/*!*********************************************************!*\
  !*** ./src/app/search-darta/search-darta.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-darta/search-darta.component.html":
/*!**********************************************************!*\
  !*** ./src/app/search-darta/search-darta.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-darta works!\n</p>\n"

/***/ }),

/***/ "./src/app/search-darta/search-darta.component.ts":
/*!********************************************************!*\
  !*** ./src/app/search-darta/search-darta.component.ts ***!
  \********************************************************/
/*! exports provided: SearchDartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDartaComponent", function() { return SearchDartaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchDartaComponent = /** @class */ (function () {
    function SearchDartaComponent() {
    }
    SearchDartaComponent.prototype.ngOnInit = function () {
    };
    SearchDartaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-darta',
            template: __webpack_require__(/*! ./search-darta.component.html */ "./src/app/search-darta/search-darta.component.html"),
            styles: [__webpack_require__(/*! ./search-darta.component.css */ "./src/app/search-darta/search-darta.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchDartaComponent);
    return SearchDartaComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\utsva\OneDrive\Documents\Work_Dev\DartaChalani\ang-electron\dartachalani\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map