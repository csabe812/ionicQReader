(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-detail-place-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-detail/place-detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-detail/place-detail.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/places\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>placeDetail</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label position=\"stacked\">Name</ion-label>\n        <ion-input [(ngModel)]=\"place.name\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">Quantity</ion-label>\n        <ion-input [(ngModel)]=\"place.quantity\" rows=\"8\"></ion-input>\n    </ion-item>\n</ion-content>\n\n<ion-footer *ngIf=\"!place.id\">\n    <ion-toolbar color=\"success\">\n        <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"addPlace()\">\n            <ion-icon name=\"checkmark\" slot=\"start\">\n\n            </ion-icon>\n            Add place\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>\n\n<ion-footer *ngIf=\"place.id\">\n    <ion-row no-padding text-center>\n        <ion-col size=\"6\">\n            <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"deletePlace()\">\n                <ion-icon name=\"trash\" slot=\"start\">\n                </ion-icon>\n                Delete\n            </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-button expand=\"block\" fill=\"solid\" color=\"success\" (click)=\"updatePlace()\">\n                <ion-icon name=\"save\" slot=\"start\">\n                </ion-icon>\n                Update\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/place-detail/place-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/place-detail/place-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PlaceDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageRoutingModule", function() { return PlaceDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/pages/place-detail/place-detail.page.ts");




const routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"]
    }
];
let PlaceDetailPageRoutingModule = class PlaceDetailPageRoutingModule {
};
PlaceDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlaceDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/place-detail/place-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/place-detail/place-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: PlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-detail-routing.module */ "./src/app/pages/place-detail/place-detail-routing.module.ts");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/pages/place-detail/place-detail.page.ts");







let PlaceDetailPageModule = class PlaceDetailPageModule {
};
PlaceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPageRoutingModule"]
        ],
        declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"]]
    })
], PlaceDetailPageModule);



/***/ }),

/***/ "./src/app/pages/place-detail/place-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/place-detail/place-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/place-detail/place-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/place-detail/place-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: PlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function() { return PlaceDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let PlaceDetailPage = class PlaceDetailPage {
    constructor(activatedRoute, placeService, toastCtr, router) {
        this.activatedRoute = activatedRoute;
        this.placeService = placeService;
        this.toastCtr = toastCtr;
        this.router = router;
        this.place = {
            name: '',
            quantity: ''
        };
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.placeService.getPlace(id).subscribe(p => {
                this.place = p;
            });
        }
    }
    addPlace() {
        this.placeService.addPlace(this.place).then(() => {
            this.router.navigateByUrl('/places');
            this.showToast('Place added');
        }, err => {
            this.showToast('There was a problem');
        });
    }
    deletePlace() {
        this.placeService.deletePlace(this.place.id).then(() => {
            this.router.navigateByUrl('/places');
            this.showToast('Place deleted');
        }, err => {
            this.showToast('There was a problem');
        });
    }
    updatePlace() {
        this.placeService.updatePlace(this.place).then(() => {
            this.router.navigateByUrl('/places');
            this.showToast('Place updated');
        }, err => {
            this.showToast('There was a problem');
        });
    }
    showToast(msg) {
        this.toastCtr.create({
            message: msg,
            duration: 2000,
        }).then(toast => toast.present());
    }
};
PlaceDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PlaceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-place-detail',
        template: __webpack_require__(/*! raw-loader!./place-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-detail/place-detail.page.html"),
        styles: [__webpack_require__(/*! ./place-detail.page.scss */ "./src/app/pages/place-detail/place-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PlaceDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-place-detail-place-detail-module-es2015.js.map