(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-list-place-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-list/place-list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-list/place-list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>placeList</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button routerLink=\"/place\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-list>\n        <ion-item button *ngFor=\"let place of (places | async)\" [routerLink]=\"['/place', place.id]\">\n            {{place.name}}\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/place-list/place-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/place-list/place-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PlaceListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceListPageRoutingModule", function() { return PlaceListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _place_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-list.page */ "./src/app/pages/place-list/place-list.page.ts");




var routes = [
    {
        path: '',
        component: _place_list_page__WEBPACK_IMPORTED_MODULE_3__["PlaceListPage"]
    }
];
var PlaceListPageRoutingModule = /** @class */ (function () {
    function PlaceListPageRoutingModule() {
    }
    PlaceListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PlaceListPageRoutingModule);
    return PlaceListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/place-list/place-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/place-list/place-list.module.ts ***!
  \*******************************************************/
/*! exports provided: PlaceListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceListPageModule", function() { return PlaceListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-list-routing.module */ "./src/app/pages/place-list/place-list-routing.module.ts");
/* harmony import */ var _place_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-list.page */ "./src/app/pages/place-list/place-list.page.ts");







var PlaceListPageModule = /** @class */ (function () {
    function PlaceListPageModule() {
    }
    PlaceListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _place_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceListPageRoutingModule"]
            ],
            declarations: [_place_list_page__WEBPACK_IMPORTED_MODULE_6__["PlaceListPage"]]
        })
    ], PlaceListPageModule);
    return PlaceListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/place-list/place-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/place-list/place-list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYWNlLWxpc3QvcGxhY2UtbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/place-list/place-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/place-list/place-list.page.ts ***!
  \*****************************************************/
/*! exports provided: PlaceListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceListPage", function() { return PlaceListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/place.service */ "./src/app/services/place.service.ts");



var PlaceListPage = /** @class */ (function () {
    function PlaceListPage(placeService) {
        this.placeService = placeService;
    }
    PlaceListPage.prototype.ngOnInit = function () {
        this.places = this.placeService.getPlaces();
        console.log(this.places);
    };
    PlaceListPage.ctorParameters = function () { return [
        { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"] }
    ]; };
    PlaceListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-list',
            template: __webpack_require__(/*! raw-loader!./place-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-list/place-list.page.html"),
            styles: [__webpack_require__(/*! ./place-list.page.scss */ "./src/app/pages/place-list/place-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"]])
    ], PlaceListPage);
    return PlaceListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-place-list-place-list-module-es5.js.map