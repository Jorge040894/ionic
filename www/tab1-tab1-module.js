(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");









var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_8__["apiservice"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Tab One\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<!--\r\n    <ion-card class=\"welcome-card\">\r\n      <ion-img src=\"/assets/shapes.svg\"></ion-img>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Get Started</ion-card-subtitle>\r\n        <ion-card-title>Welcome to Ionic</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-list lines=\"none\">\r\n      <ion-list-header>\r\n        <ion-label>Resources</ion-label>\r\n      </ion-list-header>\r\n      <ion-item href=\"https://ionicframework.com/docs/\">\r\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\r\n        <ion-label>Ionic Documentation</ion-label>\r\n      </ion-item>\r\n      <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\r\n        <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\r\n        <ion-label>Scaffold Out Your App</ion-label>\r\n      </ion-item>\r\n      <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\r\n        <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\r\n        <ion-label>Change Your App Layout</ion-label>\r\n      </ion-item>\r\n      <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\r\n        <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\r\n        <ion-label>Theme Your App</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n-->\r\n\r\n<h1>Proyecto Progra 3</h1>\r\n\r\n<!--\r\n<div>\r\n  <form id=\"f01\" [formGroup]=\"formGroup\">\r\n\r\n    <label>nombre:</label>\r\n    <input type=\"text\" formControlName=\"nombre\"/>\r\n\r\n    <label>apellido:</label>\r\n    <input type=\"text\" formControlName=\"apellido\"/>\r\n\r\n    <label>edad:</label>\r\n    <input type=\"text\" formControlName=\"edad\"/>\r\n\r\n    <button (click)=\"enviarFormulario()\">\r\n      guardar\r\n    </button>\r\n\r\n    <button (click)=\"actualizarFormulario()\">\r\n      actualizar\r\n    </button>\r\n\r\n  </form>\r\n</div>\r\n-->\r\n\r\n<div>\r\n  <form (ngSubmit)=\"sendForm()\">\r\n    <ion-item>\r\n      <ion-label>Name</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"person.primerNombre\" name=\"primerNombre\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Surname</ion-label>\r\n      <ion-textarea [(ngModel)]=\"person.segundoNombre\" name=\"segundoNombre\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Age</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"person.edad\" name=\"edad\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    <ion-button type=\"submit\" color=\"primary\">{{ action }}</ion-button>\r\n  </form> \r\n</div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEpvcmdlXFxpb25pYy9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/*import { Component } from '@angular/core';*/



var Tab1Page = /** @class */ (function () {
    function Tab1Page(personaService) {
        this.personaService = personaService;
        //creamos una variable en la cual indicamos que resive datos de cualquir tipo
        //indicamos los parametros que contendra lo cuales utlizaremos en el spring
        //y las declaramos de forma global para sehir usandolas 
        this.person = {
            primerNombre: '',
            segundoNombre: '',
            edad: ''
        };
        this.action = 'agregar'; // se crea una propiedad que se utilizara para un boton
        this.getRefresh();
    }
    // el sendForm nos sirve para enviar los datos via post este lo llamamos 
    //desde el html y se le instancia a un boton para su ejecucion y tambien la usamos para el Put
    Tab1Page.prototype.sendForm = function () {
        var _this = this;
        //No permite que las casillas nombre y apellido envien datos vacios 
        if (this.person.primerNombre != '' && this.person.segundoNombre != '') {
            if (this.action == 'agregar') {
                this.personaService.create(this.person).subscribe(function (response) {
                    _this.getRefresh();
                    _this.person = {
                        primerNombre: '',
                        segundoNombre: '',
                        edad: ''
                    };
                });
            }
            if (this.action == 'actualizar') {
                console.log('Update');
                console.log(this.person);
                this.personaService.update(this.person).subscribe(function (response) {
                    _this.getRefresh();
                    _this.person = {
                        primerNombre: '',
                        segundoNombre: '',
                        edad: ''
                    };
                    _this.action = 'agregar';
                });
            }
        }
    };
    Tab1Page.prototype.getRefresh = function () {
        var _this = this;
        this.personaService.personaList([]).subscribe(function (response) {
            _this.personas = response;
        });
    };
    Tab1Page.prototype.showItem = function (item, index) {
        this.action = 'actualizar';
        this.person.id = index;
        this.person.primerNombre = item.primerNombre;
        this.person.segundoNombre = item.segundoNombre;
        this.person.edad = item.edad;
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["apiservice"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map