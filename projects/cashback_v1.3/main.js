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

/***/ "./src/app/add-check-manually/add-check-manually.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/add-check-manually/add-check-manually.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h3>Новый чек</h3>\n  <form [formGroup]=\"form\" class=\"flex-col-btn\" #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm)\">\n    <div *ngIf=\"!isValid\" class=\"warning\">\n          Для добавления чека требуется заполнить все поля\n    </div>\n    <table cellspacing=\"0\">\n      <tr>\n        <td>\n          <mat-form-field class=\"w80\">\n            <mat-label>Сумма</mat-label>\n            <!-- либо type, либо maxlength :( -->\n            <input placeholder=\"00.00\" matInput type=\"number\" formControlName=\"sum\">\n            <!-- <input placeholder=\"00.00\" matInput formControlName=\"sum\" maxlength=\"7\" autocomplete=\"off\"> -->\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"w120\">\n            <mat-label>Дата</mat-label>\n            <input matInput type=\"date\" formControlName=\"date\">\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"w80\">\n            <mat-label>Время</mat-label>\n            <input matInput type=\"time\" formControlName=\"time\" (onclick)=\"this.setSelectionRange(0, this.value.length)\">\n          </mat-form-field>\n        </td>\n      </tr>\n    </table>\n\n    <table>\n      <tr>\n        <td>\n          <mat-form-field class=\"w100\">\n            <mat-label>ФН номер</mat-label>\n            <input matInput type=\"number\" formControlName=\"fn\" autocomplete=\"off\" >\n            <!-- <input matInput formControlName=\"fn\" autocomplete=\"off\" maxlength=\"11\"> -->\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"w100\">\n            <mat-label>ФД номер</mat-label>\n            <input matInput type=\"number\" formControlName=\"fd\" autocomplete=\"off\" >\n            <!-- <input matInput formControlName=\"fd\" autocomplete=\"off\" maxlength=\"10\"> -->\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"w100\">\n            <mat-label>ФПД номер</mat-label>\n            <input matInput type=\"number\" formControlName=\"fpd\" autocomplete=\"off\">\n            <!-- <input matInput formControlName=\"fpd\" autocomplete=\"off\" maxlength=\"10\"> -->\n          </mat-form-field>\n        </td>\n      </tr>\n    </table>\n    <button mat-flat-button type=\"submit\" (click)=\"showModal()\">Сохранить</button> <br>\n  </form>\n\n  <!-- Модальное окно -->\n  <div *ngIf=\"isValid\" class=\"modalbackground invisible\" [ngClass]=\"{visible: isShowModal? true : false}\">\n    <div class=\"modalwindow invisible\" [ngClass]=\"{visible: isShowModal? true : false}\">\n      <h3>Чек успешно загружен!</h3>\n      <p>Данные чека:<br>\n        ФН: {{this.form.value.fn}} <br>\n        ФД: {{this.form.value.fd}} <br>\n        ФПД: {{this.form.value.fpd}}\n      </p>\n      <div class='btn_parent'>\n        <button mat-flat-button (click)=\"showModal()\">ОК</button>\n      </div>\n    </div>\n  </div>\n  <!-- / Модальное окно -->\n\n  <div class=\"flex-col-btn\">\n    <button mat-raised-button (click)=\"showExampleCheck()\">Пример чека</button>\n  </div>\n\n  <app-btn-go-back></app-btn-go-back>\n\n  <div class=\"example invisible\" [ngClass]=\"{visible: isVisible? true : false}\">\n    <div class=\"ex-flex\">\n      <img src=\"./assets/img/ex_check.png\" alt=\"check\"> <!--путь к картинке от корня сервера-->\n      <p>ФН, ФД, ФПД указаны на чеке<br>\n        ФН № – заводской номер фискального накопителя (11 цифр) <br>\n        ФД № – номер фискального документа (10 цифр) <br>\n        ФПД – фискальный признак документа<br>\n      </p>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/add-check-manually/add-check-manually.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/add-check-manually/add-check-manually.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invisible {\n  display: none;\n}\n.visible {\n  display: block;\n}\n.example img {\n  height: 170px;\n}\n.w80 {\n  width: 80px;\n}\n.w100 {\n  width: 100px;\n}\n.w120 {\n  width: 120px;\n}\n.ex-flex {\n  display: flex;\n  display: -webkit-flex;\n  font-size: 0.7rem;\n}\n.ex-flex p {\n  margin: 0.1em 0.2em;\n}\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.2em;\n}\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1em;\n}\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.3em 0;\n}\n/* модальное окно \"Чек успешно загружен\" */\n.modalbackground {\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n.modalwindow {\n  width: 100%;\n  max-width: 65%;\n  margin: 50% auto;\n  padding: 2%;\n  background: #fff;\n  border-radius: 3px;\n}\n.modalwindow h3 {\n  padding: 0;\n  margin: 0;\n}\n.modalwindow p {\n  padding: 0;\n  margin: 4% 0 8% 0;\n}\n.btn_parent {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n/* /модальное окно \"Чек успешно загружен\" */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNoZWNrLW1hbnVhbGx5L0M6L1VzZXJzL2R5YWtvdmEtbmEvRGVza3RvcC9jYXNoYmFjay9jYXNoYmFjay9mcm9udC9wd2EvY2hlY2stYXAvc3JjL2FwcC9hZGQtY2hlY2stbWFudWFsbHkvYWRkLWNoZWNrLW1hbnVhbGx5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hZGQtY2hlY2stbWFudWFsbHkvYWRkLWNoZWNrLW1hbnVhbGx5LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtBQ0RKO0FESUE7RUFDSSxjQUFBO0FDRko7QURLQTtFQUNJLGFBQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtBQ0pKO0FETUE7RUFDSSxZQUFBO0FDSko7QURNQTtFQUNJLFlBQUE7QUNKSjtBRE9BO0VBQ0ksYUFBQTtFQUVBLHFCQUFBO0VBRUEsaUJBQUE7QUNOSjtBRENBO0VBT1EsbUJBQUE7QUNMUjtBRFNBO0VBRVEsY0FBQTtBQ1JSO0FETUE7RUFNUSxtQkFBQTtBQ1RSO0FER0E7RUFVUSxnQkFBQTtBQ1ZSO0FBQ0EsMENBQTBDO0FEZTFDO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ2JKO0FEZ0JBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZEo7QURRQTtFQVNRLFVBQUE7RUFDQSxTQUFBO0FDZFI7QURJQTtFQWNRLFVBQUE7RUFDQSxpQkFBQTtBQ2ZSO0FEbUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ2pCSjtBQUNBLDJDQUEyQyIsImZpbGUiOiJzcmMvYXBwL2FkZC1jaGVjay1tYW51YWxseS9hZGQtY2hlY2stbWFudWFsbHkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdzEwMDogMTAwcHg7XG5cbi5pbnZpc2libGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmV4YW1wbGUgaW1nIHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xufVxuXG4udzgwIHtcbiAgICB3aWR0aDogQHcxMDAqMC44O1xufVxuLncxMDAge1xuICAgIHdpZHRoOiBAdzEwMDtcbn1cbi53MTIwIHtcbiAgICB3aWR0aDogQHcxMDAqMS4yO1xufVxuXG4uZXgtZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwLjFlbSAwLjJlbTtcbiAgICB9XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgICAgcGFkZGluZzogMC4yZW07XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICB9XG59XG5cblxuLyog0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+IFwi0KfQtdC6INGD0YHQv9C10YjQvdC+INC30LDQs9GA0YPQttC10L1cIiAqL1xuLm1vZGFsYmFja2dyb3VuZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4ubW9kYWx3aW5kb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIG1hcmdpbjogNTAlIGF1dG87XG4gICAgcGFkZGluZzogMiU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICBoMyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiA0JSAwIDglIDA7XG4gICAgfVxufVxuXG4uYnRuX3BhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogL9C80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviBcItCn0LXQuiDRg9GB0L/QtdGI0L3QviDQt9Cw0LPRgNGD0LbQtdC9XCIgKi8iLCIuaW52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52aXNpYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZXhhbXBsZSBpbWcge1xuICBoZWlnaHQ6IDE3MHB4O1xufVxuLnc4MCB7XG4gIHdpZHRoOiA4MHB4O1xufVxuLncxMDAge1xuICB3aWR0aDogMTAwcHg7XG59XG4udzEyMCB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5leC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG4uZXgtZmxleCBwIHtcbiAgbWFyZ2luOiAwLjFlbSAwLjJlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjJlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC4zZW0gMDtcbn1cbi8qINC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviBcItCn0LXQuiDRg9GB0L/QtdGI0L3QviDQt9Cw0LPRgNGD0LbQtdC9XCIgKi9cbi5tb2RhbGJhY2tncm91bmQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5tb2RhbHdpbmRvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiA1MCUgYXV0bztcbiAgcGFkZGluZzogMiU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5tb2RhbHdpbmRvdyBoMyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5tb2RhbHdpbmRvdyBwIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA0JSAwIDglIDA7XG59XG4uYnRuX3BhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi8qIC/QvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4gXCLQp9C10Log0YPRgdC/0LXRiNC90L4g0LfQsNCz0YDRg9C20LXQvVwiICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/add-check-manually/add-check-manually.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/add-check-manually/add-check-manually.component.ts ***!
  \********************************************************************/
/*! exports provided: AddCheckManuallyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCheckManuallyComponent", function() { return AddCheckManuallyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var AddCheckManuallyComponent = /** @class */ (function () {
    function AddCheckManuallyComponent(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.isVisible = false;
        this.isValid = false;
        this.isShowModal = false;
        this.form = this.fb.group({
            sum: [],
            date: [],
            time: [],
            fn: [],
            fd: [],
            fpd: []
        });
    }
    AddCheckManuallyComponent.prototype.ngOnInit = function () { };
    /* onSubmit() {
       this.getData();
       this.openDialog();
     }*/
    AddCheckManuallyComponent.prototype.onSubmit = function (form) {
        // console.log(form);
        this.getData();
    };
    AddCheckManuallyComponent.prototype.getData = function () {
        var sum = this.form.value.sum;
        var date = this.form.value.date;
        var time = this.form.value.time;
        var fn = this.form.value.fn;
        var fd = this.form.value.fd;
        var fpd = this.form.value.fpd;
        //проверка заполнения полей
        if ((sum == null) || (date == null) || (time == null) || (fn == null) || (fd == null) || (fpd == null)) {
            console.log('Не все поля заполнены!');
        }
        else {
            console.log(sum, date, time, fn, fd, fpd);
            this.isValid = true;
            // console.log(this.isValid);
        }
    };
    AddCheckManuallyComponent.prototype.showExampleCheck = function () {
        this.isVisible = this.isVisible ? false : true;
    };
    AddCheckManuallyComponent.prototype.showModal = function () {
        this.isShowModal = this.isShowModal ? false : true;
    };
    AddCheckManuallyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-check-manually',
            template: __webpack_require__(/*! ./add-check-manually.component.html */ "./src/app/add-check-manually/add-check-manually.component.html"),
            styles: [__webpack_require__(/*! ./add-check-manually.component.less */ "./src/app/add-check-manually/add-check-manually.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AddCheckManuallyComponent);
    return AddCheckManuallyComponent;
}());



/***/ }),

/***/ "./src/app/add-check-qr/add-check-qr.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-check-qr/add-check-qr.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container gray\">\n  <div class=\"content flex-col-center\">\n    <h3>Наведите камеру на квадратный код внизу чека</h3>\n    <!-- <div class=\"square\">\n      <div class=\"border\">\n        <img src=\"./assets/img/ex_qr-code.png\" alt=\"qr\" class=\"qr\">\n      </div>\n    </div> -->\n\n    <qr-scanner [debug]=\"false\" [canvasWidth]=\"1080\" [canvasHeight]=\"720\" [stopAfterScan]=\"true\" [updateTime]=\"500\">\n\n    </qr-scanner>\n\n    <br><br>\n    <p>Не сканируется?</p>\n    <button routerLink=\"/add-check-manually\" mat-raised-button>Ввести чек вручную</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-check-qr/add-check-qr.component.less":
/*!**********************************************************!*\
  !*** ./src/app/add-check-qr/add-check-qr.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.gray {\n  background-color: lightgray;\n}\nh3,\np {\n  color: black;\n}\n/* .flex-col-center {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n} */\n.qr {\n  width: 200px;\n  height: 200px;\n}\n/* рамка для QR-кода */\n.square {\n  background: white;\n  width: 200px;\n  height: 200px;\n  margin: 5px auto;\n  position: relative;\n}\n.square:before {\n  left: 0px;\n  top: 0px;\n  border-width: 5px 0 0 5px;\n  z-index: 100;\n}\n.square:after {\n  right: 0px;\n  top: 0px;\n  border-width: 5px 5px 0 0;\n}\n.border {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n.border:before {\n  right: 0px;\n  bottom: 0px;\n  border-width: 0 5px 5px 0;\n}\n.border:after {\n  left: 0px;\n  bottom: 0px;\n  border-width: 0 0 5px 5px;\n}\n.square:before,\n.square:after,\n.border:before,\n.border:after {\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  content: '';\n  border-color: red;\n  border-style: solid;\n}\n/* /рамка для QR-кода */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNoZWNrLXFyL0M6L1VzZXJzL2R5YWtvdmEtbmEvRGVza3RvcC9jYXNoYmFjay9jYXNoYmFjay9mcm9udC9wd2EvY2hlY2stYXAvc3JjL2FwcC9hZGQtY2hlY2stcXIvYWRkLWNoZWNrLXFyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hZGQtY2hlY2stcXIvYWRkLWNoZWNrLXFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NKO0FERUE7RUFDSSwyQkFBQTtBQ0FKO0FER0E7O0VBQ0ksWUFBQTtBQ0FKO0FBQ0E7Ozs7R0FJRztBRElIO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNGSjtBQUNBLHNCQUFzQjtBREt0QjtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURLSTtFQUNJLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSFI7QURNSTtFQUNJLFVBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUNKUjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTko7QURRSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNOUjtBRFNJO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ1BSO0FEV0E7Ozs7RUFJSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNUSjtBQUNBLHVCQUF1QiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jaGVjay1xci9hZGQtY2hlY2stcXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbn1cblxuLmdyYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuaDMsIHAge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLyogLmZsZXgtY29sLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59ICovXG5cbi5xciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi8qINGA0LDQvNC60LAg0LTQu9GPIFFSLdC60L7QtNCwICovXG4uc3F1YXJlIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHggMCAwIDVweDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDAgMDtcbiAgICB9XG59XG5cbi5ib3JkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogMCA1cHggNXB4IDA7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogMCAwIDVweCA1cHg7XG4gICAgfVxufVxuXG4uc3F1YXJlOmJlZm9yZSxcbi5zcXVhcmU6YWZ0ZXIsXG4uYm9yZGVyOmJlZm9yZSxcbi5ib3JkZXI6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLyogL9GA0LDQvNC60LAg0LTQu9GPIFFSLdC60L7QtNCwICovIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbmgzLFxucCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi8qIC5mbGV4LWNvbC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSAqL1xuLnFyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLyog0YDQsNC80LrQsCDQtNC70Y8gUVIt0LrQvtC00LAgKi9cbi5zcXVhcmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3F1YXJlOmJlZm9yZSB7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDAgMCA1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5zcXVhcmU6YWZ0ZXIge1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDAgMDtcbn1cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuLmJvcmRlcjpiZWZvcmUge1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHggMDtcbn1cbi5ib3JkZXI6YWZ0ZXIge1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBib3JkZXItd2lkdGg6IDAgMCA1cHggNXB4O1xufVxuLnNxdWFyZTpiZWZvcmUsXG4uc3F1YXJlOmFmdGVyLFxuLmJvcmRlcjpiZWZvcmUsXG4uYm9yZGVyOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4vKiAv0YDQsNC80LrQsCDQtNC70Y8gUVIt0LrQvtC00LAgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-check-qr/add-check-qr.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-check-qr/add-check-qr.component.ts ***!
  \********************************************************/
/*! exports provided: AddCheckQrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCheckQrComponent", function() { return AddCheckQrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-qrscanner */ "./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-check-qr',
  templateUrl: './add-check-qr.component.html',
  styleUrls: ['./add-check-qr.component.less']
})
export class AddCheckQrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/



var AddCheckQrComponent = /** @class */ (function () {
    function AddCheckQrComponent() {
    }
    AddCheckQrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qrScannerComponent.getMediaDevices().then(function (devices) {
            console.log(devices);
            var videoDevices = [];
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                var choosenDev = void 0;
                for (var _a = 0, videoDevices_1 = videoDevices; _a < videoDevices_1.length; _a++) {
                    var dev = videoDevices_1[_a];
                    if (dev.label.includes('front')) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    _this.qrScannerComponent.chooseCamera.next(choosenDev);
                }
                else {
                    _this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
        this.qrScannerComponent.capturedQr.subscribe(function (result) {
            console.log(result);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular2_qrscanner__WEBPACK_IMPORTED_MODULE_2__["QrScannerComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular2_qrscanner__WEBPACK_IMPORTED_MODULE_2__["QrScannerComponent"])
    ], AddCheckQrComponent.prototype, "qrScannerComponent", void 0);
    AddCheckQrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-check-qr',
            template: __webpack_require__(/*! ./add-check-qr.component.html */ "./src/app/add-check-qr/add-check-qr.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./add-check-qr.component.less */ "./src/app/add-check-qr/add-check-qr.component.less")]
        })
    ], AddCheckQrComponent);
    return AddCheckQrComponent;
}());



/***/ }),

/***/ "./src/app/add-check/add-check.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-check/add-check.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container gray\">\n  <div class=\"btnSelectMethod\">\n    <h3>Выберите метод добавления чека</h3>\n    <button routerLink=\"/add-check-manually\" mat-flat-button>Добавить чек по реквизитам</button>\n    <button routerLink=\"/add-check-qr\" mat-flat-button>Сканировать QR-код</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-check/add-check.component.less":
/*!****************************************************!*\
  !*** ./src/app/add-check/add-check.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnSelectMethod {\n  display: flex;\n  display: -webkit-flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.btnSelectMethod button {\n  margin: 10px 0;\n}\n.container {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.gray {\n  background-color: lightgray;\n}\nh3 {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNoZWNrL0M6L1VzZXJzL2R5YWtvdmEtbmEvRGVza3RvcC9jYXNoYmFjay9jYXNoYmFjay9mcm9udC9wd2EvY2hlY2stYXAvc3JjL2FwcC9hZGQtY2hlY2svYWRkLWNoZWNrLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hZGQtY2hlY2svYWRkLWNoZWNrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUVBLHFCQUFBO0VBR0EsZUFBQTtFQUdBLHVCQUFBO0FDQ0o7QURWQTtFQVlRLGNBQUE7QUNDUjtBREdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0RKO0FESUE7RUFDSSwyQkFBQTtBQ0ZKO0FES0E7RUFDSSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9hZGQtY2hlY2svYWRkLWNoZWNrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0blNlbGVjdE1ldGhvZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uZ3JheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG5oMyB7XG4gICAgY29sb3I6IGJsYWNrO1xufSIsIi5idG5TZWxlY3RNZXRob2Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0blNlbGVjdE1ldGhvZCBidXR0b24ge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5oMyB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-check/add-check.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-check/add-check.component.ts ***!
  \**************************************************/
/*! exports provided: AddCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCheckComponent", function() { return AddCheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddCheckComponent = /** @class */ (function () {
    function AddCheckComponent() {
    }
    AddCheckComponent.prototype.ngOnInit = function () {
    };
    AddCheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-check',
            template: __webpack_require__(/*! ./add-check.component.html */ "./src/app/add-check/add-check.component.html"),
            styles: [__webpack_require__(/*! ./add-check.component.less */ "./src/app/add-check/add-check.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddCheckComponent);
    return AddCheckComponent;
}());



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
/* harmony import */ var _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-screen/main-screen.component */ "./src/app/main-screen/main-screen.component.ts");
/* harmony import */ var _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-details/item-details.component */ "./src/app/item-details/item-details.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard.service */ "./src/app/services/auth.guard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _sale_sale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sale/sale.component */ "./src/app/sale/sale.component.ts");
/* harmony import */ var _cashback_cashback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cashback/cashback.component */ "./src/app/cashback/cashback.component.ts");
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checklist/checklist.component */ "./src/app/checklist/checklist.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _add_check_add_check_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-check/add-check.component */ "./src/app/add-check/add-check.component.ts");
/* harmony import */ var _add_check_manually_add_check_manually_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-check-manually/add-check-manually.component */ "./src/app/add-check-manually/add-check-manually.component.ts");
/* harmony import */ var _add_check_qr_add_check_qr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-check-qr/add-check-qr.component */ "./src/app/add-check-qr/add-check-qr.component.ts");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guide/guide.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _check_details_check_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./check-details/check-details.component */ "./src/app/check-details/check-details.component.ts");




















var routes = [
    { path: 'home', component: _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_3__["MainScreenComponent"] },
    // { path: 'login', component: LoginComponent, canActivate: [LoginGuard], data: {title: 'Вход в систему'} },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], data: { title: 'Вход в систему' } },
    { path: 'detail/:id', component: _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_4__["ItemDetailsComponent"] },
    { path: 'guide', component: _guide_guide_component__WEBPACK_IMPORTED_MODULE_15__["GuideComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationComponent"] },
    {
        path: '', canActivateChild: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], children: [
            { path: 'sale', component: _sale_sale_component__WEBPACK_IMPORTED_MODULE_8__["SaleComponent"], data: { title: 'Акции' } },
            { path: 'cashback', component: _cashback_cashback_component__WEBPACK_IMPORTED_MODULE_9__["CashbackComponent"], data: { title: 'Кэшбэк' } },
            { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"], data: { title: 'Инфо' } },
            { path: 'checklist', component: _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_10__["ChecklistComponent"], data: { title: 'Список чеков' } },
            { path: 'add-check', component: _add_check_add_check_component__WEBPACK_IMPORTED_MODULE_12__["AddCheckComponent"], data: { title: 'Добавить чек' } },
            { path: 'add-check-manually', component: _add_check_manually_add_check_manually_component__WEBPACK_IMPORTED_MODULE_13__["AddCheckManuallyComponent"], data: { title: 'Добавить чек вручную (по реквизитам)' } },
            { path: 'add-check-qr', component: _add_check_qr_add_check_qr_component__WEBPACK_IMPORTED_MODULE_14__["AddCheckQrComponent"], data: { title: 'Добавить чек по QR-коду' } },
            { path: 'check-detail/:id', component: _check_details_check_details_component__WEBPACK_IMPORTED_MODULE_18__["CheckDetailsComponent"] },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(router, loginServ) {
        var _this = this;
        this.loginServ = loginServ;
        // console.log(router, router.url);
        router
            .events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; }))
            .subscribe(function (e) {
            // console.log('e.url = ', e.url);
            /*  если текущая урл текущей страницы и идентичен данному  - ничего не делаем
                если они не равны - записываем его в прошлый урл  */
            if (e.url === "/login") {
                // console.log('ничего не делаем');
            }
            else {
                _this.loginServ.previousUrl = e.url;
                // console.log('previousUrl = ', this.loginServ.previousUrl);
            }
            // console.log('prev:', this.previousUrl);
            // this.previousUrl = e.url;
        });
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<noscript>\r\n    Please enable JavaScript to run this application.\r\n</noscript>\r\n<router-outlet></router-outlet>\r\n\r\n<div *ngIf='isAuthorized'>\r\n    <app-bottom-navbar></app-bottom-navbar>\r\n</div>\r\n\r\n<div *ngIf='!isAuthorized'>\r\n    <app-licence></app-licence>\r\n</div>\r\n\r\n<div *ngIf='isAuthorized'>\r\n    <app-btn-add-check></app-btn-add-check>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'check-ap';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkLoginStatus();
    };
    AppComponent.prototype.checkLoginStatus = function () {
        this.isAuthorized = this.auth.checkAuthorization();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-screen/main-screen.component */ "./src/app/main-screen/main-screen.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.guard.service */ "./src/app/services/auth.guard.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item-details/item-details.component */ "./src/app/item-details/item-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sale_sale_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sale/sale.component */ "./src/app/sale/sale.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _cashback_cashback_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cashback/cashback.component */ "./src/app/cashback/cashback.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checklist/checklist.component */ "./src/app/checklist/checklist.component.ts");
/* harmony import */ var _navigation_bottom_navbar_bottom_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navigation/bottom-navbar/bottom-navbar.component */ "./src/app/navigation/bottom-navbar/bottom-navbar.component.ts");
/* harmony import */ var _navigation_licence_licence_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navigation/licence/licence.component */ "./src/app/navigation/licence/licence.component.ts");
/* harmony import */ var _navigation_btn_add_check_btn_add_check_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navigation/btn-add-check/btn-add-check.component */ "./src/app/navigation/btn-add-check/btn-add-check.component.ts");
/* harmony import */ var _add_check_add_check_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-check/add-check.component */ "./src/app/add-check/add-check.component.ts");
/* harmony import */ var _add_check_manually_add_check_manually_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-check-manually/add-check-manually.component */ "./src/app/add-check-manually/add-check-manually.component.ts");
/* harmony import */ var _add_check_qr_add_check_qr_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add-check-qr/add-check-qr.component */ "./src/app/add-check-qr/add-check-qr.component.ts");
/* harmony import */ var _navigation_btn_go_back_btn_go_back_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./navigation/btn-go-back/btn-go-back.component */ "./src/app/navigation/btn-go-back/btn-go-back.component.ts");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guide/guide.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _registration_must_match_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./registration/must-match.directive */ "./src/app/registration/must-match.directive.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _check_details_check_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./check-details/check-details.component */ "./src/app/check-details/check-details.component.ts");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angular2-qrscanner */ "./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");































 //поиск в main-screen, sale




var modules = [
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollDispatchModule"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_8__["MainScreenComponent"],
                _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_13__["ItemDetailsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _sale_sale_component__WEBPACK_IMPORTED_MODULE_15__["SaleComponent"],
                _cashback_cashback_component__WEBPACK_IMPORTED_MODULE_17__["CashbackComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_18__["InfoComponent"],
                _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_19__["ChecklistComponent"],
                _navigation_bottom_navbar_bottom_navbar_component__WEBPACK_IMPORTED_MODULE_20__["BottomNavbarComponent"],
                _navigation_licence_licence_component__WEBPACK_IMPORTED_MODULE_21__["LicenceComponent"],
                _navigation_btn_add_check_btn_add_check_component__WEBPACK_IMPORTED_MODULE_22__["BtnAddCheckComponent"],
                _add_check_add_check_component__WEBPACK_IMPORTED_MODULE_23__["AddCheckComponent"],
                _add_check_manually_add_check_manually_component__WEBPACK_IMPORTED_MODULE_24__["AddCheckManuallyComponent"],
                _add_check_qr_add_check_qr_component__WEBPACK_IMPORTED_MODULE_25__["AddCheckQrComponent"],
                _navigation_btn_go_back_btn_go_back_component__WEBPACK_IMPORTED_MODULE_26__["BtnGoBackComponent"],
                _guide_guide_component__WEBPACK_IMPORTED_MODULE_27__["GuideComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_28__["RegistrationComponent"],
                _registration_must_match_directive__WEBPACK_IMPORTED_MODULE_29__["MustMatchDirective"],
                _check_details_check_details_component__WEBPACK_IMPORTED_MODULE_32__["CheckDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                _material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_30__["Ng2SearchPipeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
                angular2_qrscanner__WEBPACK_IMPORTED_MODULE_33__["NgQrScannerModule"]
            ],
            exports: modules.slice(),
            providers: [
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'ru' },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cashback/cashback.component.html":
/*!**************************************************!*\
  !*** ./src/app/cashback/cashback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"headerParent\" *ngIf='isAuthorized'>\n      <div class=\"menuitem\">\n        <i class=\"material-icons\">\n          settings_applications\n        </i>\n      </div>\n    </div>\n\n    <h2 class=\"cashbackHeader\">Кэшбэк</h2>\n    <h3>Статистика</h3>\n    <table mat-table [dataSource]=\"dataSourceStat\" class=\"mat-elevation-z8 cashbackTable\">\n      <ng-container matColumnDef=\"accumulatedCashback\">\n        <th mat-header-cell *matHeaderCellDef> Накопленный кэшбэк </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.accumulatedCashback}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"loaded\">\n        <th mat-header-cell *matHeaderCellDef> Загружено чеков </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.loaded}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"isLoading\">\n        <th mat-header-cell *matHeaderCellDef> Загружается чеков </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.isLoading}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsStatistics\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsStatistics;\"></tr>\n    </table>\n\n    <h3>Последние чеки</h3>\n    <table mat-table [dataSource]=\"dataSourceCheck\" class=\"mat-elevation-z8 cashbackTable\">\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> id </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.id}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Статус </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.status}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"sum\">\n        <th mat-header-cell *matHeaderCellDef> Сумма </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.sum}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef> Дата </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.date}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsChecklist\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsChecklist;\"></tr>\n    </table>\n    <br>\n\n    <button routerLink=\"/checklist\" class=\"checklistBtn\" mat-flat-button>Показать все чеки</button>\n\n    <!-- <h4>Вывести деньги</h4>\n    <button class=\"\" mat-raised-button>Карта БРС</button> -->\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/cashback/cashback.component.less":
/*!**************************************************!*\
  !*** ./src/app/cashback/cashback.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".persInfo {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -20px;\n}\n.cashbackTable {\n  width: 100%;\n}\ntr.mat-header-row {\n  height: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaGJhY2svQzovVXNlcnMvZHlha292YS1uYS9EZXNrdG9wL2Nhc2hiYWNrL2Nhc2hiYWNrL2Zyb250L3B3YS9jaGVjay1hcC9zcmMvYXBwL2Nhc2hiYWNrL2Nhc2hiYWNrLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jYXNoYmFjay9jYXNoYmFjay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY2FzaGJhY2svY2FzaGJhY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc0luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuXG4uY2FzaGJhY2tUYWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG59IiwiLnBlcnNJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbn1cbi5jYXNoYmFja1RhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gIGhlaWdodDogNDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cashback/cashback.component.ts":
/*!************************************************!*\
  !*** ./src/app/cashback/cashback.component.ts ***!
  \************************************************/
/*! exports provided: CashbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashbackComponent", function() { return CashbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cashback_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cashback-service.service */ "./src/app/services/cashback-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CashbackComponent = /** @class */ (function () {
    function CashbackComponent(itServ) {
        this.itServ = itServ;
        this.displayedColumnsChecklist = ['id', 'status', 'sum', 'date'];
        this.displayedColumnsStatistics = ['accumulatedCashback', 'loaded', 'isLoading'];
        var checkList = this.itServ.getChecks();
        var stat = this.itServ.getStatistics();
        this.dataSourceCheck = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](checkList.slice(-3).reverse()); //3 последних чека
        this.dataSourceStat = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](stat);
    }
    CashbackComponent.prototype.ngOnInit = function () {
    };
    CashbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashback',
            template: __webpack_require__(/*! ./cashback.component.html */ "./src/app/cashback/cashback.component.html"),
            styles: [__webpack_require__(/*! ./cashback.component.less */ "./src/app/cashback/cashback.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cashback_service_service__WEBPACK_IMPORTED_MODULE_2__["CashbackServiceService"]])
    ], CashbackComponent);
    return CashbackComponent;
}());



/***/ }),

/***/ "./src/app/check-details/check-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/check-details/check-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <h3>Детализация по чеку #{{item.id}}</h3>\n    <div class=\"check-details\">\n      <div class=\"check-details__descr\">\n        <p class=\"sum\">\n          Сумма {{item.sum}} &#8381;\n        </p>\n        <p class=\"date\">\n          {{item.date}}\n        </p>\n      </div>\n      <div>\n        <p class=\"status\">\n          {{item.status}}\n        </p>\n      </div>\n\n      <button mat-raised-button type=\"submit\" (click)=\"showModal()\" class=\"delCheckBtn\">\n        <i class=\"material-icons\">delete</i>Удалить чек\n      </button>\n\n      <div class=\"flex-col-btn\">\n        <button mat-raised-button (click)=\"showRequisites()\">Реквизиты чека</button>\n      </div>\n\n      <!-- Реквизиты чека -->\n      <div class=\"invisible\" [ngClass]=\"{visible: isVisible? true : false}\">\n        <div class=\"check-details__requisites\">\n          <p>\n            ФН: {{item.fn}} <br>\n            ФД: {{item.fd}} <br>\n            ФПД: {{item.fpd}} <br>\n          </p>\n        </div>\n      </div>\n      <!-- /Реквизиты чека -->\n\n    </div>\n\n\n\n    <!-- Модальное окно \"Вы действительно хотите удалить чек?\"-->\n    <div class=\"modalbackground invisible\" [ngClass]=\"{visible: isShowModal? true : false}\">\n      <div class=\"modalwindow invisible\" [ngClass]=\"{visible: isShowModal? true : false}\">\n        <h3>Вы действительно хотите удалить чек?</h3>\n        <p>Данные чека:</p>\n        <p>\n          id: {{item.id}}<br>\n          ФН: {{item.fn}} <br>\n          ФД: {{item.fd}} <br>\n          ФПД: {{item.fpd}} <br>\n        </p>\n        <div class='btn_parent'>\n          <button mat-flat-button (click)=\"showModalDelCheck(true,item)\" class=\"yes\">Да</button>\n          <button mat-flat-button (click)=\"showModal()\" class=\"no\">Нет</button>\n        </div>\n      </div>\n    </div>\n    <!-- / Модальное окно \"Вы действительно хотите удалить чек?-->\n\n    <!-- Модальное окно \"Чек удален!\"-->\n    <div class=\"modalbackground invisible\" [ngClass]=\"{visible: isShowModalCheckDeleted? true : false}\">\n      <div class=\"modalwindow invisible\" [ngClass]=\"{visible: isShowModalCheckDeleted? true : false}\">\n        <h3>Чек удален!</h3>\n        id: {{item.id}}\n        <div class='btn_parent'>\n          <button mat-flat-button (click)=\"showModalDelCheck(false)\" routerLink=\"/checklist\">ОК</button>\n        </div>\n      </div>\n    </div>\n    <!-- / Модальное окно \"Чек удален!\"-->\n\n\n    <app-btn-go-back></app-btn-go-back>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/check-details/check-details.component.less":
/*!************************************************************!*\
  !*** ./src/app/check-details/check-details.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invisible {\n  display: none;\n}\n.visible {\n  display: block;\n}\n.check-details__descr {\n  display: flex;\n  justify-content: space-between;\n}\n.check-details__requisites {\n  border: 1px dotted silver;\n  padding: 0.2em;\n}\n.mat-raised-button {\n  margin: 1em 0;\n}\n/* модальное окно \"Вы действительно хотите удалить чек?\" */\n.modalbackground {\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n.modalwindow {\n  width: 100%;\n  max-width: 65%;\n  margin: 50% auto;\n  padding: 2%;\n  background: #fff;\n  border-radius: 3px;\n}\n.modalwindow h3 {\n  padding: 0;\n  margin: 0;\n}\n.modalwindow p {\n  padding: 0;\n  margin: 4% 0 8% 0;\n}\n.btn_parent {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n/* /модальное окно \"Чек успешно загружен\" */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2stZGV0YWlscy9DOi9Vc2Vycy9keWFrb3ZhLW5hL0Rlc2t0b3AvY2FzaGJhY2svY2FzaGJhY2svZnJvbnQvcHdhL2NoZWNrLWFwL3NyYy9hcHAvY2hlY2stZGV0YWlscy9jaGVjay1kZXRhaWxzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jaGVjay1kZXRhaWxzL2NoZWNrLWRldGFpbHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURFQTtFQUNJLGNBQUE7QUNBSjtBREdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDREo7QURJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FES0E7RUFDSSxhQUFBO0FDSEo7QUFDQSwwREFBMEQ7QURLMUQ7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDSEo7QURNQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FERkE7RUFTUSxVQUFBO0VBQ0EsU0FBQTtBQ0pSO0FETkE7RUFjUSxVQUFBO0VBQ0EsaUJBQUE7QUNMUjtBRFNDO0VBQ0csYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ1BKO0FBQ0EsMkNBQTJDIiwiZmlsZSI6InNyYy9hcHAvY2hlY2stZGV0YWlscy9jaGVjay1kZXRhaWxzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2hlY2stZGV0YWlsc19fZGVzY3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2hlY2stZGV0YWlsc19fcmVxdWlzaXRlcyB7XG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHNpbHZlcjtcbiAgICBwYWRkaW5nOiAwLjJlbTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuLyog0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+IFwi0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0YfQtdC6P1wiICovXG4ubW9kYWxiYWNrZ3JvdW5kIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5tb2RhbHdpbmRvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOiA1MCUgYXV0bztcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDQlIDAgOCUgMDtcbiAgICB9XG59XG5cbiAuYnRuX3BhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAueWVzIHtcbiAgICAvLyAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgIC8vIH1cbiAgICAvLyAubm8ge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAvLyB9XG4gfVxuXG4vKiAv0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+IFwi0KfQtdC6INGD0YHQv9C10YjQvdC+INC30LDQs9GA0YPQttC10L1cIiAqLyIsIi5pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZpc2libGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaGVjay1kZXRhaWxzX19kZXNjciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jaGVjay1kZXRhaWxzX19yZXF1aXNpdGVzIHtcbiAgYm9yZGVyOiAxcHggZG90dGVkIHNpbHZlcjtcbiAgcGFkZGluZzogMC4yZW07XG59XG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW46IDFlbSAwO1xufVxuLyog0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+IFwi0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0YfQtdC6P1wiICovXG4ubW9kYWxiYWNrZ3JvdW5kIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWx3aW5kb3cge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2NSU7XG4gIG1hcmdpbjogNTAlIGF1dG87XG4gIHBhZGRpbmc6IDIlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4ubW9kYWx3aW5kb3cgaDMge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ubW9kYWx3aW5kb3cgcCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogNCUgMCA4JSAwO1xufVxuLmJ0bl9wYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiAv0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+IFwi0KfQtdC6INGD0YHQv9C10YjQvdC+INC30LDQs9GA0YPQttC10L1cIiAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/check-details/check-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/check-details/check-details.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckDetailsComponent", function() { return CheckDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_cashback_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cashback-service.service */ "./src/app/services/cashback-service.service.ts");





var CheckDetailsComponent = /** @class */ (function () {
    function CheckDetailsComponent(itServ, route, auth) {
        this.itServ = itServ;
        this.route = route;
        this.auth = auth;
        this.isVisible = false; //реквизиты чека под кнопкой по умолчанию скрыты. Поменять на true для показа
        // isVisible = true;
        this.isValid = false;
        this.isShowModal = false;
        this.isShowModalCheckDeleted = false;
    }
    CheckDetailsComponent.prototype.ngOnInit = function () {
        this.getItem();
        this.isAuthorized = this.auth.checkAuthorization();
    };
    CheckDetailsComponent.prototype.getItem = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.item = this.itServ.getChecks(id).find(function (it) { return it.id === id; });
    };
    CheckDetailsComponent.prototype.showRequisites = function () {
        this.isVisible = this.isVisible ? false : true;
    };
    CheckDetailsComponent.prototype.showModal = function () {
        this.isShowModal = this.isShowModal ? false : true;
        // console.log('showModal', this.isShowModal);
    };
    CheckDetailsComponent.prototype.showModalDelCheck = function (deleteFlag, check) {
        if (deleteFlag) {
            console.log(check.id, this.item);
            // let indexOfElement = this.itServ.
        }
        this.isShowModal = false; //скрыть предыдущее окно
        this.isShowModalCheckDeleted = this.isShowModalCheckDeleted ? false : true; //скрыть окно при нажатии на ОК
        // console.log('showModalDelCheck', this.isShowModalCheckDeleted);
        // todo функция удаления чека из БД
    };
    CheckDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-details',
            template: __webpack_require__(/*! ./check-details.component.html */ "./src/app/check-details/check-details.component.html"),
            styles: [__webpack_require__(/*! ./check-details.component.less */ "./src/app/check-details/check-details.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cashback_service_service__WEBPACK_IMPORTED_MODULE_4__["CashbackServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CheckDetailsComponent);
    return CheckDetailsComponent;
}());



/***/ }),

/***/ "./src/app/checklist/checklist.component.html":
/*!****************************************************!*\
  !*** ./src/app/checklist/checklist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <h3>Список чеков</h3>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\n    </mat-form-field>\n    <div class=\"scrollTableWrapper\">\n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"status\" class=\"status\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Статус </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.status}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"sum\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Сумма </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.sum}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Дата </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n          (click)=\"highlight(row)\" [attr.data-id]='row.id' routerLink=\"/check-detail/{{row.id}}\">\n        </mat-row>\n      </mat-table>\n\n      <mat-paginator [pageSizeOptions]=\"[10, 5, 15]\"></mat-paginator>\n    </div>\n\n\n    <br>\n\n    <app-btn-go-back></app-btn-go-back>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/checklist/checklist.component.less":
/*!****************************************************!*\
  !*** ./src/app/checklist/checklist.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cashbackTable {\n  width: 100%;\n}\n.scrollTableWrapper {\n  overflow: scroll;\n  max-height: 475px;\n}\nth.mat-sort-header-sorted {\n  color: black;\n}\n.mat-header-row {\n  min-height: 30px;\n}\n.mat-row {\n  min-height: 35px;\n}\n.mat-cell {\n  font-size: 0.75em;\n}\n.mat-column-status {\n  padding: 0;\n}\n.mat-cell:first-of-type,\n.mat-footer-cell:first-of-type,\n.mat-header-cell:first-of-type {\n  padding-left: 5px;\n}\n.mat-form-field-infix {\n  border-top: 0;\n}\nh3 {\n  margin: 0.5em 0 !important;\n}\n.highlight {\n  color: red;\n  background: gainsboro;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tsaXN0L0M6L1VzZXJzL2R5YWtvdmEtbmEvRGVza3RvcC9jYXNoYmFjay9jYXNoYmFjay9mcm9udC9wd2EvY2hlY2stYXAvc3JjL2FwcC9jaGVja2xpc3QvY2hlY2tsaXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jaGVja2xpc3QvY2hlY2tsaXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FET0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDTEo7QURRQTtFQUNJLFlBQUE7QUNOSjtBRFNBO0VBQ0ksZ0JBQUE7QUNQSjtBRFVBO0VBQ0ksZ0JBQUE7QUNSSjtBRFdBO0VBQ0ksaUJBQUE7QUNUSjtBRFlBO0VBQ0ksVUFBQTtBQ1ZKO0FEY0E7OztFQUNJLGlCQUFBO0FDVko7QURhQTtFQUNJLGFBQUE7QUNYSjtBRGNBO0VBQ0ksMEJBQUE7QUNaSjtBRGVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDYkoiLCJmaWxlIjoic3JjL2FwcC9jaGVja2xpc3QvY2hlY2tsaXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhc2hiYWNrVGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vLyAuc2Nyb2xsVGFibGVXcmFwcGVyIHtcbi8vICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuLy8gICAgIGhlaWdodDogNTAwcHg7XG4vLyB9XG5cbi5zY3JvbGxUYWJsZVdyYXBwZXJ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBtYXgtaGVpZ2h0OiA0NzVweDtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWF0LWhlYWRlci1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG59XG5cbi5tYXQtcm93IHtcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xufVxuXG4ubWF0LWNlbGwge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4ubWF0LWNvbHVtbi1zdGF0dXN7XG4gICAgcGFkZGluZzogMDtcbiAgICAvLyBjb2xvcjogcmVkO1xufVxuXG4ubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCAubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGJvcmRlci10b3A6IDA7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDAuNWVtIDAgIWltcG9ydGFudDtcbn1cblxuLmhpZ2hsaWdodCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG59XG4iLCIuY2FzaGJhY2tUYWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNjcm9sbFRhYmxlV3JhcHBlciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDQ3NXB4O1xufVxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG59XG4ubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG59XG4ubWF0LWNlbGwge1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cbi5tYXQtY29sdW1uLXN0YXR1cyB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbi5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbi5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgYm9yZGVyLXRvcDogMDtcbn1cbmgzIHtcbiAgbWFyZ2luOiAwLjVlbSAwICFpbXBvcnRhbnQ7XG59XG4uaGlnaGxpZ2h0IHtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/checklist/checklist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/checklist/checklist.component.ts ***!
  \**************************************************/
/*! exports provided: ChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistComponent", function() { return ChecklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_cashback_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cashback-service.service */ "./src/app/services/cashback-service.service.ts");




var ChecklistComponent = /** @class */ (function () {
    function ChecklistComponent(itServ) {
        this.itServ = itServ;
        this.displayedColumns = ['id', 'status', 'sum', 'date'];
        this.selectedRowIndex = -1;
        var checkList = this.itServ.getChecks();
        console.log('aaaa');
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](checkList.reverse());
    }
    ChecklistComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ChecklistComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ChecklistComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.id;
        console.log('highlight!', row.id, row.status, row.sum, row.date, row.fn, row.fd, row.fpd);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ChecklistComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ChecklistComponent.prototype, "sort", void 0);
    ChecklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checklist',
            template: __webpack_require__(/*! ./checklist.component.html */ "./src/app/checklist/checklist.component.html"),
            styles: [__webpack_require__(/*! ./checklist.component.less */ "./src/app/checklist/checklist.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cashback_service_service__WEBPACK_IMPORTED_MODULE_3__["CashbackServiceService"]])
    ], ChecklistComponent);
    return ChecklistComponent;
}());



/***/ }),

/***/ "./src/app/guide/guide.component.html":
/*!********************************************!*\
  !*** ./src/app/guide/guide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <h1>Добро пожаловать!</h1>\n   \n    <div *ngFor='let step of stepsList; let i = index' class='invisible' [class.visible]=\"isSpecial == i+1\">\n      <div class=\"step\">\n          <h3>Шаг # {{ i+1 }}</h3>\n          <p>\n            {{ step.text }}\n          </p>\n          <div class=\"parent_img\">\n              <img src=\"{{ step.url }}\" class=\"guide__img\">\n          </div>\n      </div>\n      \n      <div class=\"flex-row-btn flex-center\">\n        <div *ngIf='i != [stepsList.length - 1]'> <!--шаг не последний-->\n          <button mat-button routerLink=\"/home\">Пропустить</button>\n        </div>\n        <div *ngIf='i != 0'> <!--шаг не первый-->\n          <button mat-button (click)=\"showPrevStep($event)\" [attr.data-number]='i+1'><i class=\"material-icons\">arrow_left</i>Назад</button>\n        </div>\n        <div *ngIf='i != [stepsList.length - 1]'> <!--шаг не последний-->\n          <button mat-raised-button (click)=\"showNextStep($event)\" [attr.data-number]='i+2' class=\"green\">Далее<i class=\"material-icons\">arrow_right</i></button>\n        </div>\n        <div *ngIf='!(i != [stepsList.length - 1])'> <!--шаг последний-->\n          <button mat-flat-button routerLink=\"/home\" data-number='-100'>Начать экономить</button>\n        </div>\n      </div>\n    </div>\n\n    <app-btn-go-back></app-btn-go-back>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/guide/guide.component.less":
/*!********************************************!*\
  !*** ./src/app/guide/guide.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invisible {\n  display: none;\n}\n.visible {\n  display: block;\n}\np {\n  margin: 0;\n}\n.parent_img {\n  display: flex;\n  justify-content: center;\n}\n.guide__img {\n  max-height: 250px;\n}\n.mat-raised-button {\n  /*кнопка Далее со стрелкой*/\n  padding: 0 5px 0 10px;\n}\n.step {\n  min-height: 380px;\n}\n.flex-row-btn {\n  margin: 1em 0;\n}\n@media (min-width: 320px) and (max-width: 374px) {\n  .guide__img {\n    max-height: 225px;\n  }\n  .step {\n    min-height: 345px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VpZGUvQzovVXNlcnMvZHlha292YS1uYS9EZXNrdG9wL2Nhc2hiYWNrL2Nhc2hiYWNrL2Zyb250L3B3YS9jaGVjay1hcC9zcmMvYXBwL2d1aWRlL2d1aWRlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9ndWlkZS9ndWlkZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBREVBO0VBQ0ksY0FBQTtBQ0FKO0FER0E7RUFDSSxTQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FES0E7RUFDSSxpQkFBQTtBQ0hKO0FETUE7RUNKRSwyQkFBMkI7RURNekIscUJBQUE7QUNKSjtBRE9BO0VBQ0ksaUJBQUE7QUNMSjtBRFFBO0VBQ0ksYUFBQTtBQ05KO0FEVUE7RUFDSTtJQUNJLGlCQUFBO0VDUk47RURXRTtJQUNJLGlCQUFBO0VDVE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlL2d1aWRlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wYXJlbnRfaW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3VpZGVfX2ltZyB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgLyrQutC90L7Qv9C60LAg0JTQsNC70LXQtSDRgdC+INGB0YLRgNC10LvQutC+0LkqL1xuICAgIHBhZGRpbmc6IDAgNXB4IDAgMTBweDtcbn1cblxuLnN0ZXAge1xuICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xufVxuXG4uZmxleC1yb3ctYnRuIHtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7ICAgIC8vaXBob25lIDUvU0VcbiAgICAuZ3VpZGVfX2ltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIyNXB4O1xuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgICAgbWluLWhlaWdodDogMzQ1cHg7XG4gICAgfVxufSIsIi5pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZpc2libGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbnAge1xuICBtYXJnaW46IDA7XG59XG4ucGFyZW50X2ltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmd1aWRlX19pbWcge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIC8q0LrQvdC+0L/QutCwINCU0LDQu9C10LUg0YHQviDRgdGC0YDQtdC70LrQvtC5Ki9cbiAgcGFkZGluZzogMCA1cHggMCAxMHB4O1xufVxuLnN0ZXAge1xuICBtaW4taGVpZ2h0OiAzODBweDtcbn1cbi5mbGV4LXJvdy1idG4ge1xuICBtYXJnaW46IDFlbSAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgLmd1aWRlX19pbWcge1xuICAgIG1heC1oZWlnaHQ6IDIyNXB4O1xuICB9XG4gIC5zdGVwIHtcbiAgICBtaW4taGVpZ2h0OiAzNDVweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/guide/guide.component.ts":
/*!******************************************!*\
  !*** ./src/app/guide/guide.component.ts ***!
  \******************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_guide_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/guide-service.service */ "./src/app/services/guide-service.service.ts");



var GuideComponent = /** @class */ (function () {
    function GuideComponent(stServ) {
        this.stServ = stServ;
        this.isVisible = false;
        this.isSpecial = 1;
    }
    GuideComponent.prototype.ngOnInit = function () {
        this.stepsList = this.stServ.getSteps();
    };
    GuideComponent.prototype.showNextStep = function (ev) {
        ev.preventDefault();
        // console.log(ev);
        if (ev.target.dataset.number) {
            this.isSpecial = ev.target.dataset.number; //чтобы срабатывало при нажатии кнопку (не на текст)
        }
        else {
            this.isSpecial = ev.target.offsetParent.dataset.number; //чтобы срабатывало при нажатии на текст
        }
    };
    GuideComponent.prototype.showPrevStep = function (ev) {
        ev.preventDefault();
        if (ev.target.dataset.number) {
            this.isSpecial = ev.target.dataset.number - 1;
        }
        else {
            this.isSpecial = ev.target.offsetParent.dataset.number - 1;
        }
    };
    GuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guide',
            template: __webpack_require__(/*! ./guide.component.html */ "./src/app/guide/guide.component.html"),
            styles: [__webpack_require__(/*! ./guide.component.less */ "./src/app/guide/guide.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_guide_service_service__WEBPACK_IMPORTED_MODULE_2__["GuideServiceService"]])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <h2>Инфо</h2>\n    <ul>\n      <li>\n        <details open>\n          <summary>Что такое кэшбэк?</summary>\n          <p>Ответ на вопрос 1</p>\n        </details>\n      </li>\n      <li>\n        <details>\n          <summary>Как добавить чек?</summary>\n          <p>Ответ на вопрос 2</p>\n        </details>\n      </li>\n      <li>\n        <details>\n          <summary>Как вывести деньги?</summary>\n          <p>Ответ на вопрос 3</p>\n        </details>\n      </li>\n    </ul>\n    <h3>Преимущества</h3>\n    <ul>\n      <li>\n        Преимущество 1\n      </li>\n      <li>\n        Преимущество 2\n      </li>\n      <li>\n        Преимущество 3\n      </li>\n    </ul>\n\n    <h3>Условия получения кэшбэка</h3>\n    <p>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque aut error numquam quidem quasi expedita\n      accusamus consequatur quia ducimus magni, eaque ex asperiores sint sapiente magnam assumenda explicabo\n      blanditiis! <br>\n      <a href=\"https://www.rsb.ru/\" target=\"_blank\">Все условия</a>\n    </p>\n    <button routerLink=\"/guide\" mat-flat-button>Путеводитель</button>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/info/info.component.less":
/*!******************************************!*\
  !*** ./src/app/info/info.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  list-style-type: none;\n}\np {\n  font-size: 0.9em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9DOi9Vc2Vycy9keWFrb3ZhLW5hL0Rlc2t0b3AvY2FzaGJhY2svY2FzaGJhY2svZnJvbnQvcHdhL2NoZWNrLWFwL3NyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9pbmZvL2luZm8uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQ0E7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgXG59XG5we1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi8vIC5jb250ZW50IHtcbi8vICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbi8vIH1cblxuIiwibGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5wIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.less */ "./src/app/info/info.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/item-details/item-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/item-details/item-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n    <h3>{{item.name}}</h3>\r\n    <div class=\"item\">\r\n      <div class=\"parent_img\">\r\n        <img src=\"{{ item.url }}\" class=\"item-details__img\">\r\n      </div>\r\n      <div class=\"item-details__descr\">\r\n        <span> id: {{item.id}} </span> <br>\r\n        {{item.text}} <br><br>\r\n        {{item.price}} &#8381;<br>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <h4>Кэшбэк за покупку <span class=\"green\">{{item.cashback}} %</span></h4>\r\n    <div class=\"cashback\">\r\n      <div class=\"cashback__left\">\r\n        QR-код <br><span>1%</span>\r\n      </div>\r\n      <div class=\"cashback__center\">\r\n        +\r\n      </div>\r\n      <div class=\"cashback__right\">\r\n        <span>{{item.cashback - 1 }}%</span> за подтверждение покупки операцией из банка\r\n      </div>\r\n    </div>\r\n\r\n    <div class='loginBtnParent' *ngIf='!isAuthorized'>\r\n      <div class=\"warning\">\r\n        <span><i class=\"material-icons\">info</i></span>\r\n        Авторизуйтесь, чтобы получить кэшбэк!\r\n      </div>\r\n      <button routerLink=\"/login\" mat-flat-button class=\"loginBtn\">Войти в систему</button>\r\n    </div>\r\n\r\n    <b>Условия получения кэшбэка</b>\r\n    <div class=\"conditions\">\r\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque aut error numquam\r\n      quidem quasi expedita\r\n      accusamus consequatur quia ducimus magni, eaque ex asperiores sint sapiente magnam assumenda explicabo\r\n      blanditiis!</div>\r\n    <a href=\"https://www.rsb.ru/\" target=\"_blank\">Все условия</a>\r\n    <br>\r\n\r\n    <app-btn-go-back></app-btn-go-back>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/item-details/item-details.component.less":
/*!**********************************************************!*\
  !*** ./src/app/item-details/item-details.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warning {\n  padding: 0.1em;\n  margin: 0.2em;\n}\n.warning i {\n  margin: 0.1em;\n  font-size: 1.2em;\n}\n.loginBtnParent {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n.cashback {\n  display: flex;\n  margin: 1em;\n}\n.cashback span {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n.cashback__left,\n.cashback__right {\n  border: 1px solid black;\n  padding: 10px;\n  height: 50px;\n  width: 50px;\n  font-size: 0.8rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  background: #ffff;\n  border-radius: 5%;\n  border-color: #bebebe;\n}\n.cashback__right {\n  width: 180px;\n}\n.cashback__center {\n  padding: 20px 10px;\n}\n.conditions {\n  font-size: 0.8rem;\n}\n.item-details__img {\n  width: 100%;\n}\n.item-details__descr {\n  padding: 0 5px;\n}\n.item {\n  display: flex;\n}\n.item .item-details__descr span {\n  color: gray;\n  font-size: 0.8em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1kZXRhaWxzL0M6L1VzZXJzL2R5YWtvdmEtbmEvRGVza3RvcC9jYXNoYmFjay9jYXNoYmFjay9mcm9udC9wd2EvY2hlY2stYXAvc3JjL2FwcC9pdGVtLWRldGFpbHMvaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9pdGVtLWRldGFpbHMvaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUNDSjtBREhBO0VBS1EsYUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNGSjtBREFBO0VBS1EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FETUE7O0VBRUksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRFFBO0VBQ0ksWUFBQTtBQ05KO0FEU0E7RUFDSSxrQkFBQTtBQ1BKO0FEVUE7RUFDSSxpQkFBQTtBQ1JKO0FEV0E7RUFDSSxXQUFBO0FDVEo7QURZQTtFQUNJLGNBQUE7QUNWSjtBRGFBO0VBQ0ksYUFBQTtBQ1hKO0FEVUE7RUFTUSxXQUFBO0VBQ0EsZ0JBQUE7QUNoQlIiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWRldGFpbHMvaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcm5pbmcge1xuICAgIHBhZGRpbmc6IDAuMWVtO1xuICAgIG1hcmdpbjogMC4yZW07XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaSB7XG4gICAgICAgIG1hcmdpbjogMC4xZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuXG4ubG9naW5CdG5QYXJlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXNoYmFjayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDFlbTtcblxuICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxufVxuXG4uY2FzaGJhY2tfX2xlZnQsXG4uY2FzaGJhY2tfX3JpZ2h0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJvcmRlci1jb2xvcjogI2JlYmViZTtcblxufVxuXG4uY2FzaGJhY2tfX3JpZ2h0IHtcbiAgICB3aWR0aDogMTgwcHg7XG59XG5cbi5jYXNoYmFja19fY2VudGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbi5jb25kaXRpb25zIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLml0ZW0tZGV0YWlsc19faW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW0tZGV0YWlsc19fZGVzY3Ige1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAvLyBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLml0ZW0tZGV0YWlsc19fZGVzY3Igc3BhbiB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbn0iLCIud2FybmluZyB7XG4gIHBhZGRpbmc6IDAuMWVtO1xuICBtYXJnaW46IDAuMmVtO1xufVxuLndhcm5pbmcgaSB7XG4gIG1hcmdpbjogMC4xZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubG9naW5CdG5QYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FzaGJhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDFlbTtcbn1cbi5jYXNoYmFjayBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmNhc2hiYWNrX19sZWZ0LFxuLmNhc2hiYWNrX19yaWdodCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJvcmRlci1jb2xvcjogI2JlYmViZTtcbn1cbi5jYXNoYmFja19fcmlnaHQge1xuICB3aWR0aDogMTgwcHg7XG59XG4uY2FzaGJhY2tfX2NlbnRlciB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi5jb25kaXRpb25zIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uaXRlbS1kZXRhaWxzX19pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pdGVtLWRldGFpbHNfX2Rlc2NyIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaXRlbSAuaXRlbS1kZXRhaWxzX19kZXNjciBzcGFuIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/item-details/item-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/item-details/item-details.component.ts ***!
  \********************************************************/
/*! exports provided: ItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsComponent", function() { return ItemDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_items_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/items-service.service */ "./src/app/services/items-service.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





var ItemDetailsComponent = /** @class */ (function () {
    function ItemDetailsComponent(itServ, route, auth) {
        this.itServ = itServ;
        this.route = route;
        this.auth = auth;
    }
    ItemDetailsComponent.prototype.ngOnInit = function () {
        this.getItem();
        this.isAuthorized = this.auth.checkAuthorization();
    };
    ItemDetailsComponent.prototype.getItem = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.item = this.itServ.getItems(id).find(function (it) { return it.id === id; });
    };
    ItemDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-details',
            template: __webpack_require__(/*! ./item-details.component.html */ "./src/app/item-details/item-details.component.html"),
            styles: [__webpack_require__(/*! ./item-details.component.less */ "./src/app/item-details/item-details.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_items_service_service__WEBPACK_IMPORTED_MODULE_3__["ItemsServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"row\">\n      <h1>Вход в систему</h1>\n    </div>\n    <div class=\"row\">\n      <form class=\"login_form\" [formGroup]=\"form\" (submit)=\"onSubmit()\">\n        <span *ngIf=\"message\" class=\"warning\">\n          {{message}}\n        </span>\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"logEmail\" type=\"text\">\n        </mat-form-field>\n        <br>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Пароль\" formControlName=\"logPassw\" type=\"password\">\n        </mat-form-field>\n\n        <br>\n        <div *ngIf=\"form.status === 'INVALID'\" class=\"login_text\">\n          Введите имя пользователя и пароль\n        </div>\n\n        <button mat-flat-button class=\"login_btn\" type=\"submit\" [disabled]=\"form.status === 'INVALID'\">Войти</button>\n        <br>\n        <button routerLink=\"/registration\" mat-raised-button class=\"\" >Регистрация</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.less":
/*!********************************************!*\
  !*** ./src/app/login/login.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  margin-top: 0.2em;\n}\n.mat-flat-button {\n  margin: 0.5em 0 !important;\n}\n/* прижать conditions к низу */\n* {\n  box-sizing: border-box;\n}\n.container {\n  margin: 5px;\n  min-height: 100%;\n  position: relative;\n}\n.conditions {\n  display: block;\n  width: 100%;\n  position: absolute;\n  bottom: 2em;\n  text-align: center;\n}\n/* /прижать conditions к низу */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzovVXNlcnMvZHlha292YS1uYS9EZXNrdG9wL2Nhc2hiYWNrL2Nhc2hiYWNrL2Zyb250L3B3YS9jaGVjay1hcC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGlCQUFBO0FDSko7QURPQTtFQUNJLDBCQUFBO0FDTEo7QUFDQSw4QkFBOEI7QURROUI7RUFDSSxzQkFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BKO0FEZUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDYko7QUFDQSwrQkFBK0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGEge1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgICBmb250LXNpemU6IDAuOHJlbTtcbi8vIH1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwLjVlbSAwICFpbXBvcnRhbnQ7XG59XG5cbi8qINC/0YDQuNC20LDRgtGMIGNvbmRpdGlvbnMg0Log0L3QuNC30YMgKi9cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vLyAuY29udGVudCB7XG4vLyAgICAgLy8gcGFkZGluZy1ib3R0b206IDEwMCU7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDk0JTtcbi8vIH1cblxuLmNvbmRpdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDJlbTsgLy/QstGL0YjQtSDQu9C40YbQtdC90LfQuNC4XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiAv0L/RgNC40LbQsNGC0YwgY29uZGl0aW9ucyDQuiDQvdC40LfRgyAqLyIsIi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDAuMmVtO1xufVxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMC41ZW0gMCAhaW1wb3J0YW50O1xufVxuLyog0L/RgNC40LbQsNGC0YwgY29uZGl0aW9ucyDQuiDQvdC40LfRgyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb25kaXRpb25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiAv0L/RgNC40LbQsNGC0YwgY29uZGl0aW9ucyDQuiDQvdC40LfRgyAqL1xuIl19 */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, auth, router, appComp) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.appComp = appComp;
        this.inProgress = false;
        this.message = '';
        this.form = this.fb.group({
            logEmail: ["1"],
            logPassw: ["1"]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var logEmail = this.form.value.logEmail;
        var logPassw = this.form.value.logPassw;
        // console.log('logId=',logId,', logPassw=',logPassw);
        this.inProgress = true;
        this.message = 'Выполняется проверка учетных данных...';
        this.auth.login(logEmail, logPassw)
            .subscribe(function (success) {
            if (success) {
                if (_this.auth.previousUrl != null) {
                    _this.router.navigate([_this.auth.previousUrl]);
                }
                else {
                    _this.router.navigate(['cabinet']);
                }
                _this.appComp.checkLoginStatus();
            }
            else {
                _this.message = 'Вы ввели неверную пару Email/пароль';
                _this.inProgress = false;
            }
        });
        return false;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-screen/main-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n    <div class=\"headerParent\" *ngIf='isAuthorized'>\r\n      <div class=\"menuitem\">\r\n        <!-- <i class=\"material-icons\">\r\n          settings_applications\r\n        </i> -->\r\n      </div>\r\n      <!-- <div class=\"persInfo\">\r\n        <p>Ваши бонусы: {{st.accumulatedCashback}}</p>\r\n        <p>Чеков в загрузке: {{st.isLoading}} </p>\r\n      </div> -->\r\n    </div>\r\n\r\n    <div class=\"searchDiv\">\r\n      <mat-form-field class=\"searchDiv_searchInput\">\r\n        <mat-icon matSuffix class=\"loupe\" (click)=\"search()\">search</mat-icon>\r\n        <input matInput placeholder=\"Поиск товаров\" id=\"searchQuery\" autocomplete=\"off\" class=\"form-control\" type=\"text\"\r\n          name=\"search\" [(ngModel)]=\"searchText\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"parentAd\" *ngIf='!isAuthorized'>\r\n      <div class=\"close\" (click)=\"closeAd()\"></div>\r\n      <div class=\"ad invisible\" [ngClass]=\"{visible: isCloseAd? true : false}\">\r\n        <p>\r\n          &nbsp;Реклама кредитной карты\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"carouselParent\">\r\n      <h3 class=\"carouselHeader\">Лучшие товары</h3>\r\n      <div class=\"carousel scroll\">\r\n        <div class=\"itemCarousel\" *ngFor='let item of items | filter:searchText' [attr.data-id]='item.id' routerLink=\"/detail/{{item.id}}\">\r\n          <div class=\"itemCarousel_imageBlock\">\r\n            <div class=\"parent_img\">\r\n              <img src=\"{{ item.url }}\">\r\n            </div>\r\n          </div>\r\n          <p>{{item.name}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"carouselParent\">\r\n      <h3 class=\"carouselHeader\">Новинки</h3>\r\n      <div class=\"carousel scroll\">\r\n        <div class=\"itemCarousel\" *ngFor='let item of items | filter:searchText' [attr.data-id]='item.id' routerLink=\"/detail/{{item.id}}\">\r\n          <div class=\"itemCarousel_imageBlock\">\r\n            <div class=\"parent_img\">\r\n              <img src=\"{{ item.url }}\">\r\n            </div>\r\n          </div>\r\n          <p>{{item.name}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='loginBtnParent' *ngIf='!isAuthorized'>\r\n      <button routerLink=\"/login\" class=\"greenBtn\" mat-flat-button>Войти в систему</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-screen/main-screen.component.less":
/*!********************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchDiv {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 0.5em;\n}\n.searchDiv_searchInput {\n  width: 100%;\n}\n.searchDiv_searchInput input {\n  padding-bottom: 6px;\n}\n.carousel {\n  display: flex;\n  overflow-x: auto;\n}\n.carouselParent:first-child {\n  margin-top: -10px;\n}\n.carouselParent:not(:first-child) {\n  margin-top: 10px;\n}\n.carouselParent p {\n  font-size: 0.6em;\n}\n.carouselHeader {\n  margin: 0 0 15px 0;\n}\n.itemCarousel {\n  width: 150px;\n  /* height: 200px; */\n}\n.itemCarousel:not(:last-child) {\n  margin-right: 20px;\n}\n.loginBtnParent {\n  position: fixed;\n  bottom: 15px;\n  left: 30%;\n}\nbutton {\n  margin-bottom: 20%;\n}\n.persInfo {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -20px;\n}\n/* Реклама */\n.parentAd {\n  height: 5em;\n  margin-bottom: 2em;\n  margin-top: -2em;\n}\n.ad {\n  width: 99%;\n  height: 5em;\n  background: Gainsboro;\n  border: 1px solid darkgray;\n}\n.invisible {\n  display: none;\n}\n.visible {\n  display: block;\n}\n.close {\n  position: relative;\n  left: 89vw;\n  top: 8vw;\n  width: 24px;\n  height: 24px;\n  color: #333;\n}\n.close::before,\n.close::after {\n  position: absolute;\n  left: 12px;\n  content: ' ';\n  height: 20px;\n  width: 2px;\n  background-color: white;\n}\n.close::before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.close::after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n/* /Реклама */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vQzovVXNlcnMvZHlha292YS1uYS9EZXNrdG9wL2Nhc2hiYWNrL2Nhc2hiYWNrL2Zyb250L3B3YS9jaGVjay1hcC9zcmMvYXBwL21haW4tc2NyZWVuL21haW4tc2NyZWVuLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tYWluLXNjcmVlbi9tYWluLXNjcmVlbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtBQ0FKO0FEREE7RUFJUSxtQkFBQTtBQ0FSO0FESUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRE1JO0VBQ0ksaUJBQUE7QUNKUjtBRE9JO0VBQ0ksZ0JBQUE7QUNMUjtBRERBO0VBVVEsZ0JBQUE7QUNOUjtBRFVBO0VBQ0ksa0JBQUE7QUNSSjtBRFdBO0VBQ0ksWUFBQTtFQ1RGLG1CQUFtQjtBQUNyQjtBRFdJO0VBQ0ksa0JBQUE7QUNUUjtBRGFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDWEo7QURjQTtFQUVJLGtCQUFBO0FDYko7QURnQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQ2RKO0FBQ0EsWUFBWTtBRGtCWjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDaEJKO0FEa0JBO0VBQ0ksVUFBQTtFQUVBLFdBQUE7RUFJQSxxQkFBQTtFQUNBLDBCQUFBO0FDcEJKO0FEdUJBO0VBQ0ksYUFBQTtBQ3JCSjtBRHdCQTtFQUNJLGNBQUE7QUN0Qko7QUQwQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDeEJKO0FEMEJJOztFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDeEJSO0FEMkJJO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtBQ3pCUjtBRDRCSTtFQUNJLGlDQUFBO1VBQUEseUJBQUE7QUMxQlI7QUFDQSxhQUFhIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zY3JlZW4vbWFpbi1zY3JlZW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoRGl2IHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi5zZWFyY2hEaXZfc2VhcmNoSW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW5wdXQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIH1cbn1cblxuLmNhcm91c2VsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jYXJvdXNlbFBhcmVudCB7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgIH1cbn1cblxuLmNhcm91c2VsSGVhZGVyIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG59XG5cbi5pdGVtQ2Fyb3VzZWwge1xuICAgIHdpZHRoOiAxNTBweDtcblxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4XG4gICAgfVxufVxuXG4ubG9naW5CdG5QYXJlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgbGVmdDogMzAlO1xufVxuXG5idXR0b24ge1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuXG4ucGVyc0luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuXG5cbi8qINCg0LXQutC70LDQvNCwICovXG4ucGFyZW50QWQge1xuICAgIGhlaWdodDogNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMmVtO1xufVxuLmFkIHtcbiAgICB3aWR0aDogOTklO1xuICAgIC8vIGhlaWdodDogNjVweDtcbiAgICBoZWlnaHQ6IDVlbTtcbiAgICAvL2NvbnRyYXN0LCBsaWdodGVuLCBkYXJrZW4g0L3QtSDRgNCw0LHQvtGC0LDRjtGCIDooXG4gICAgLy8gYmFja2dyb3VuZDogZGVzYXR1cmF0ZShAbGlnaHRZZWxsb3dHcmVlbiwgNTAlKTsgLy/QsdC70LXQtNC90LXQtSDQvdCwIDUwJVxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHNhdHVyYXRlKEBjb3JhbCwgNTAlKTsvL9C90LDRgdGL0YnQtdC90L3QtdC1INC90LAgNTAlXG4gICAgYmFja2dyb3VuZDogR2FpbnNib3JvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xufVxuXG4uaW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlzaWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8v0LrRgNC10YHRgtC40Log0JfQsNC60YDRi9GC0Yxcbi5jbG9zZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDg5dnc7XG4gICAgdG9wOiA4dnc7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG5cbn1cblxuLy8gL9C60YDQtdGB0YLQuNC6INCX0LDQutGA0YvRgtGMXG4vKiAv0KDQtdC60LvQsNC80LAgKi8iLCIuc2VhcmNoRGl2IHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuLnNlYXJjaERpdl9zZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlYXJjaERpdl9zZWFyY2hJbnB1dCBpbnB1dCB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG4uY2Fyb3VzZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmNhcm91c2VsUGFyZW50OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uY2Fyb3VzZWxQYXJlbnQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNhcm91c2VsUGFyZW50IHAge1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuLmNhcm91c2VsSGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xufVxuLml0ZW1DYXJvdXNlbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgLyogaGVpZ2h0OiAyMDBweDsgKi9cbn1cbi5pdGVtQ2Fyb3VzZWw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5sb2dpbkJ0blBhcmVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNXB4O1xuICBsZWZ0OiAzMCU7XG59XG5idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG4ucGVyc0luZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuLyog0KDQtdC60LvQsNC80LAgKi9cbi5wYXJlbnRBZCB7XG4gIGhlaWdodDogNWVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIG1hcmdpbi10b3A6IC0yZW07XG59XG4uYWQge1xuICB3aWR0aDogOTklO1xuICBoZWlnaHQ6IDVlbTtcbiAgYmFja2dyb3VuZDogR2FpbnNib3JvO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcbn1cbi5pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZpc2libGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogODl2dztcbiAgdG9wOiA4dnc7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmNsb3NlOjpiZWZvcmUsXG4uY2xvc2U6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnB4O1xuICBjb250ZW50OiAnICc7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY2xvc2U6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5jbG9zZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLyogL9Cg0LXQutC70LDQvNCwICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/main-screen/main-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.ts ***!
  \******************************************************/
/*! exports provided: MainScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenComponent", function() { return MainScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_items_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/items-service.service */ "./src/app/services/items-service.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var MainScreenComponent = /** @class */ (function () {
    function MainScreenComponent(itServ, auth) {
        this.itServ = itServ;
        this.auth = auth;
        this.isVisible = true;
        this.isCloseAd = true;
        this.st = {
            accumulatedCashback: 999,
            loaded: 99,
            isLoading: 9,
        };
    }
    MainScreenComponent.prototype.ngOnInit = function () {
        this.items = this.itServ.getItems();
        this.isAuthorized = this.auth.checkAuthorization();
        // console.log(this.st.accumulatedCashback, this.st.loaded, this.st.isLoading);
    };
    MainScreenComponent.prototype.search = function () {
        var searchQuery = document.getElementById('searchQuery').value;
        // console.log(searchQuery);
    };
    MainScreenComponent.prototype.closeAd = function () {
        this.isCloseAd = this.isCloseAd ? false : true;
    };
    MainScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-screen',
            template: __webpack_require__(/*! ./main-screen.component.html */ "./src/app/main-screen/main-screen.component.html"),
            styles: [__webpack_require__(/*! ./main-screen.component.less */ "./src/app/main-screen/main-screen.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_items_service_service__WEBPACK_IMPORTED_MODULE_2__["ItemsServiceService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MainScreenComponent);
    return MainScreenComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/bottom-navbar/bottom-navbar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/bottom-navbar/bottom-navbar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bottomNavbar\" class=\"bottomNavbar\">\n  <button routerLink=\"/home\" (click)='addClassActive($event)' class=\"btn homeBtn\" [class.active]=\"isSpecial == 1\" data-number='1' mat-flat-button>Главная</button>\n  <button routerLink=\"/sale\" (click)='addClassActive($event)' class=\"btn saleBtn\" [class.active]=\"isSpecial == 2\" data-number='2' mat-flat-button>Акции</button>\n  <button routerLink=\"/cashback\" (click)='addClassActive($event)' class=\"btn cashbackBtn\" [class.active]=\"isSpecial == 3\" data-number='3' mat-flat-button>Кэшбэк</button>\n  <button routerLink=\"/info\" (click)='addClassActive($event)' class=\"btn infoBtn\" [class.active]=\"isSpecial == 4\" data-number='4' mat-flat-button>Инфо</button> \n</div>"

/***/ }),

/***/ "./src/app/navigation/bottom-navbar/bottom-navbar.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/bottom-navbar/bottom-navbar.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* прижать bottomNavbar к низу */\n* {\n  box-sizing: border-box;\n}\n.container {\n  min-height: 100%;\n  position: relative;\n}\n.content {\n  padding-bottom: 100px;\n}\n.bottomNavbar {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n/* /прижать меню к низу */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9ib3R0b20tbmF2YmFyL2JvdHRvbS1uYXZiYXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vYm90dG9tLW5hdmJhci9DOi9Vc2Vycy9keWFrb3ZhLW5hL0Rlc2t0b3AvY2FzaGJhY2svY2FzaGJhY2svZnJvbnQvcHdhL2NoZWNrLWFwL3NyYy9hcHAvbmF2aWdhdGlvbi9ib3R0b20tbmF2YmFyL2JvdHRvbS1uYXZiYXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FDQ2hDO0VBQ0ksc0JBQUE7QURDSjtBQ0NBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBRENKO0FDQ0E7RUFDSSxxQkFBQTtBRENKO0FDQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FEQ0o7QUFDQSx5QkFBeUIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2JvdHRvbS1uYXZiYXIvYm90dG9tLW5hdmJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qINC/0YDQuNC20LDRgtGMIGJvdHRvbU5hdmJhciDQuiDQvdC40LfRgyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4uYm90dG9tTmF2YmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyogL9C/0YDQuNC20LDRgtGMINC80LXQvdGOINC6INC90LjQt9GDICovXG4iLCIvKiDQv9GA0LjQttCw0YLRjCBib3R0b21OYXZiYXIg0Log0L3QuNC30YMgKi9cbip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jb250YWluZXJ7XG4gICAgbWluLWhlaWdodDoxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50e1xuICAgIHBhZGRpbmctYm90dG9tOjEwMHB4O1xufVxuLmJvdHRvbU5hdmJhcntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBib3R0b206MDtcbiAgICB3aWR0aDoxMDAlO1xufVxuLyogL9C/0YDQuNC20LDRgtGMINC80LXQvdGOINC6INC90LjQt9GDICovIl19 */"

/***/ }),

/***/ "./src/app/navigation/bottom-navbar/bottom-navbar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/bottom-navbar/bottom-navbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: BottomNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNavbarComponent", function() { return BottomNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BottomNavbarComponent = /** @class */ (function () {
    function BottomNavbarComponent() {
        this.isSpecial = null;
    }
    BottomNavbarComponent.prototype.addClassActive = function (ev) {
        ev.preventDefault();
        // console.log(ev);
        if (ev.target.dataset.number) {
            this.isSpecial = ev.target.dataset.number;
        }
        else {
            this.isSpecial = ev.target.offsetParent.dataset.number;
        }
    };
    BottomNavbarComponent.prototype.ngOnInit = function () {
    };
    BottomNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom-navbar',
            template: __webpack_require__(/*! ./bottom-navbar.component.html */ "./src/app/navigation/bottom-navbar/bottom-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bottom-navbar.component.less */ "./src/app/navigation/bottom-navbar/bottom-navbar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BottomNavbarComponent);
    return BottomNavbarComponent;
}());



/***/ }),

/***/ "./src/app/navigation/btn-add-check/btn-add-check.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/btn-add-check/btn-add-check.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"/add-check\" class=\"addCheckBtn\" mat-mini-fab>\n  <i class=\"material-icons\">photo_camera</i>\n</button>\n"

/***/ }),

/***/ "./src/app/navigation/btn-add-check/btn-add-check.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/btn-add-check/btn-add-check.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addCheckBtn {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 50px;\n  margin-right: 10px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9idG4tYWRkLWNoZWNrL0M6L1VzZXJzL2R5YWtvdmEtbmEvRGVza3RvcC9jYXNoYmFjay9jYXNoYmFjay9mcm9udC9wd2EvY2hlY2stYXAvc3JjL2FwcC9uYXZpZ2F0aW9uL2J0bi1hZGQtY2hlY2svYnRuLWFkZC1jaGVjay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9idG4tYWRkLWNoZWNrL2J0bi1hZGQtY2hlY2suY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2J0bi1hZGQtY2hlY2svYnRuLWFkZC1jaGVjay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRDaGVja0J0biB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgcmlnaHQ6IDA7IFxuICAgIGJvdHRvbTogMDsgXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzM5OTY0NDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBAY29yYWw7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgfSIsIi5hZGRDaGVja0J0biB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/btn-add-check/btn-add-check.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/btn-add-check/btn-add-check.component.ts ***!
  \*********************************************************************/
/*! exports provided: BtnAddCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAddCheckComponent", function() { return BtnAddCheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BtnAddCheckComponent = /** @class */ (function () {
    function BtnAddCheckComponent() {
    }
    BtnAddCheckComponent.prototype.ngOnInit = function () {
    };
    BtnAddCheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btn-add-check',
            template: __webpack_require__(/*! ./btn-add-check.component.html */ "./src/app/navigation/btn-add-check/btn-add-check.component.html"),
            styles: [__webpack_require__(/*! ./btn-add-check.component.less */ "./src/app/navigation/btn-add-check/btn-add-check.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BtnAddCheckComponent);
    return BtnAddCheckComponent;
}());



/***/ }),

/***/ "./src/app/navigation/btn-go-back/btn-go-back.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/btn-go-back/btn-go-back.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goBack()\" class=\"btnGoBack\" mat-raised-button>Назад</button>"

/***/ }),

/***/ "./src/app/navigation/btn-go-back/btn-go-back.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/btn-go-back/btn-go-back.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* прижать кнопку к низу */\n.btnGoBack {\n  position: absolute;\n  bottom: 3em;\n  padding: 2px;\n}\n/* /прижать кнопку к низу */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9idG4tZ28tYmFjay9idG4tZ28tYmFjay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9idG4tZ28tYmFjay9DOi9Vc2Vycy9keWFrb3ZhLW5hL0Rlc2t0b3AvY2FzaGJhY2svY2FzaGJhY2svZnJvbnQvcHdhL2NoZWNrLWFwL3NyYy9hcHAvbmF2aWdhdGlvbi9idG4tZ28tYmFjay9idG4tZ28tYmFjay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUNDMUI7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEQ0o7QUFDQSwyQkFBMkIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2J0bi1nby1iYWNrL2J0bi1nby1iYWNrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyog0L/RgNC40LbQsNGC0Ywg0LrQvdC+0L/QutGDINC6INC90LjQt9GDICovXG4uYnRuR29CYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDNlbTtcbiAgcGFkZGluZzogMnB4O1xufVxuLyogL9C/0YDQuNC20LDRgtGMINC60L3QvtC/0LrRgyDQuiDQvdC40LfRgyAqL1xuIiwiLyog0L/RgNC40LbQsNGC0Ywg0LrQvdC+0L/QutGDINC6INC90LjQt9GDICovXG4uYnRuR29CYWNre1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGJvdHRvbTogM2VtO1xuICAgIHBhZGRpbmc6IDJweDtcbn1cbi8qIC/Qv9GA0LjQttCw0YLRjCDQutC90L7Qv9C60YMg0Log0L3QuNC30YMgKi8iXX0= */"

/***/ }),

/***/ "./src/app/navigation/btn-go-back/btn-go-back.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/btn-go-back/btn-go-back.component.ts ***!
  \*****************************************************************/
/*! exports provided: BtnGoBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnGoBackComponent", function() { return BtnGoBackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var BtnGoBackComponent = /** @class */ (function () {
    function BtnGoBackComponent(location) {
        this.location = location;
    }
    BtnGoBackComponent.prototype.ngOnInit = function () {
    };
    BtnGoBackComponent.prototype.goBack = function () {
        this.location.back();
    };
    BtnGoBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btn-go-back',
            template: __webpack_require__(/*! ./btn-go-back.component.html */ "./src/app/navigation/btn-go-back/btn-go-back.component.html"),
            styles: [__webpack_require__(/*! ./btn-go-back.component.less */ "./src/app/navigation/btn-go-back/btn-go-back.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], BtnGoBackComponent);
    return BtnGoBackComponent;
}());



/***/ }),

/***/ "./src/app/navigation/licence/licence.component.html":
/*!***********************************************************!*\
  !*** ./src/app/navigation/licence/licence.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"license\">\n  <a href=\"https://www.rsb.ru/\" target=\"_blank\">Условия использования</a>\n  &copy; 2019 АО «Банк Русский Стандарт». Генеральная лицензия Банка России № 2289 выдана бессрочно 19 ноября 2014\n  года.  \n</div>"

/***/ }),

/***/ "./src/app/navigation/licence/licence.component.less":
/*!***********************************************************!*\
  !*** ./src/app/navigation/licence/licence.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  display: flex;\n  justify-content: center;\n}\n.license {\n  font-size: 0.6em;\n  border: 1px solid gray;\n}\na {\n  color: black;\n  font-size: 1em;\n}\n/* прижать bottomNavbar к низу */\n* {\n  box-sizing: border-box;\n}\n.container {\n  min-height: 100%;\n  position: relative;\n}\n.content {\n  padding-bottom: 100px;\n}\n.license {\n  display: block;\n  width: 100%;\n  position: absolute;\n  bottom: 0%;\n  padding: 2px;\n  background: white;\n}\n/* /прижать меню к низу */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9saWNlbmNlL0M6L1VzZXJzL2R5YWtvdmEtbmEvRGVza3RvcC9jYXNoYmFjay9jYXNoYmFjay9mcm9udC9wd2EvY2hlY2stYXAvc3JjL2FwcC9uYXZpZ2F0aW9uL2xpY2VuY2UvbGljZW5jZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9saWNlbmNlL2xpY2VuY2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0RKO0FBQ0EsZ0NBQWdDO0FESWhDO0VBQ0ksc0JBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUE7RUFDSSxxQkFBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ05KO0FBQ0EseUJBQXlCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9saWNlbmNlL2xpY2VuY2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGljZW5zZSB7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG5hIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbi8qINC/0YDQuNC20LDRgtGMIGJvdHRvbU5hdmJhciDQuiDQvdC40LfRgyAqL1xuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5saWNlbnNlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gYm90dG9tOiAwO1xuICAgIGJvdHRvbTogMCU7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4vKiAv0L/RgNC40LbQsNGC0Ywg0LzQtdC90Y4g0Log0L3QuNC30YMgKi8iLCIqIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGljZW5zZSB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5hIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi8qINC/0YDQuNC20LDRgtGMIGJvdHRvbU5hdmJhciDQuiDQvdC40LfRgyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4ubGljZW5zZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLyogL9C/0YDQuNC20LDRgtGMINC80LXQvdGOINC6INC90LjQt9GDICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/licence/licence.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/licence/licence.component.ts ***!
  \*********************************************************/
/*! exports provided: LicenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenceComponent", function() { return LicenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LicenceComponent = /** @class */ (function () {
    function LicenceComponent() {
    }
    LicenceComponent.prototype.ngOnInit = function () {
    };
    LicenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-licence',
            template: __webpack_require__(/*! ./licence.component.html */ "./src/app/navigation/licence/licence.component.html"),
            styles: [__webpack_require__(/*! ./licence.component.less */ "./src/app/navigation/licence/licence.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LicenceComponent);
    return LicenceComponent;
}());



/***/ }),

/***/ "./src/app/registration/must-match.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/registration/must-match.directive.ts ***!
  \******************************************************/
/*! exports provided: MustMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatchDirective", function() { return MustMatchDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./must-match.validator */ "./src/app/registration/must-match.validator.ts");




var MustMatchDirective = /** @class */ (function () {
    function MustMatchDirective() {
        this.mustMatch = [];
    }
    MustMatchDirective_1 = MustMatchDirective;
    MustMatchDirective.prototype.validate = function (formGroup) {
        return Object(_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])(this.mustMatch[0], this.mustMatch[1])(formGroup);
    };
    var MustMatchDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mustMatch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MustMatchDirective.prototype, "mustMatch", void 0);
    MustMatchDirective = MustMatchDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mustMatch]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MustMatchDirective_1, multi: true }]
        })
    ], MustMatchDirective);
    return MustMatchDirective;
}());



/***/ }),

/***/ "./src/app/registration/must-match.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/registration/must-match.validator.ts ***!
  \******************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"content\">\n        <div class=\"row\">\n            <h1>Регистрация</h1>\n        </div>\n        <div class=\"row\">\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" [mustMatch]=\"['password', 'confirmPassword']\"\n                novalidate>\n                <div class=\"form-group\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Email\" class=\"form-control\" name=\"regEmail\" id=\"email\"  [(ngModel)]=\"model.email\"\n                            #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email />\n                    </mat-form-field>\n                    <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"email.errors.required\">Поле обязательно для заполнения</div>\n                        <div *ngIf=\"email.errors.email\">Адрес электронной почты должен быть действительным адресом электронной почты</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <mat-form-field>\n                        <input matInput type=\"password\" placeholder=\"Пароль\" class=\"form-control\" name=\"password\" id=\"password\"\n                            [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\"\n                            required minlength=\"6\" />\n                    </mat-form-field>\n\n                    <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"password.errors.required\">Поле обязательно для заполнения</div>\n                        <div *ngIf=\"password.errors.minlength\">Пароль должен содержать не менее 6 символов</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <mat-form-field>\n                        <input matInput type=\"password\" placeholder=\"Повторите пароль\" class=\"form-control\" name=\"confirmPassword\" id=\"confirmPassword\"\n                            [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && confirmPassword.invalid }\"\n                            required />\n                    </mat-form-field>\n                    <div *ngIf=\"f.submitted && confirmPassword.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"confirmPassword.errors.required\">Поле обязательно для заполнения</div>\n                        <div *ngIf=\"confirmPassword.errors.mustMatch\">Пароли должны совпадать</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <button mat-flat-button class=\"\" type=\"submit\">Зарегистрироваться</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n\n</div>\n\n<app-btn-go-back></app-btn-go-back>"

/***/ }),

/***/ "./src/app/registration/registration.component.less":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-feedback {\n  font-size: 0.7em;\n  margin: 0;\n}\n/* прижать conditions к низу */\n* {\n  box-sizing: border-box;\n}\n.container {\n  margin: 5px;\n  min-height: 100%;\n  position: relative;\n}\n.conditions {\n  display: block;\n  width: 100%;\n  position: absolute;\n  bottom: 2.5em;\n  text-align: center;\n}\n/* /прижать conditions к низу */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0M6L1VzZXJzL2R5YWtvdmEtbmEvRGVza3RvcC9jYXNoYmFjay9jYXNoYmFjay9mcm9udC9wd2EvY2hlY2stYXAvc3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FDQ0o7QUFDQSw4QkFBOEI7QURFOUI7RUFDSSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRko7QUFDQSwrQkFBK0IiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtZmVlZGJhY2sge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiDQv9GA0LjQttCw0YLRjCBjb25kaXRpb25zINC6INC90LjQt9GDICovXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbmRpdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIuNWVtOyAvL9Cy0YvRiNC1INC70LjRhtC10L3Qt9C40LhcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIC/Qv9GA0LjQttCw0YLRjCBjb25kaXRpb25zINC6INC90LjQt9GDICovIiwiLmludmFsaWQtZmVlZGJhY2sge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW46IDA7XG59XG4vKiDQv9GA0LjQttCw0YLRjCBjb25kaXRpb25zINC6INC90LjQt9GDICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbmRpdGlvbnMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLyogL9C/0YDQuNC20LDRgtGMIGNvbmRpdGlvbnMg0Log0L3QuNC30YMgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb, auth, router, appComp) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.appComp = appComp;
        this.inProgress = false;
        this.message = '';
        this.model = {};
        this.form = this.fb.group({
        // regEmail: ["123@qq.qq"],
        // regPassw: ["qqqqqq"],
        // regConfirmPassw: ["qqqqqq"]
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        console.log(email, password, confirmPassword);
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.less */ "./src/app/registration/registration.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/sale/sale.component.html":
/*!******************************************!*\
  !*** ./src/app/sale/sale.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"headerParent\" *ngIf='isAuthorized'>\n      <div class=\"menuitem\">\n        <i class=\"material-icons\">\n          settings_applications\n        </i>\n      </div>\n      <div class=\"persInfo\">\n        <p>Ваши бонусы: 999</p>\n        <p>7 чеков в загрузке</p>\n      </div>\n    </div>\n\n    <div class=\"searchDiv\">\n      <mat-form-field class=\"searchDiv_searchInput\">\n        <mat-icon matSuffix class=\"loupe\" (click)=\"search()\">search</mat-icon>\n        <input matInput placeholder=\"Поиск товаров\" id=\"searchQuery\" autocomplete=\"off\" class=\"form-control\" type=\"text\"\n          name=\"search\" [(ngModel)]=\"searchText\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"carouselParent\">\n      <h3 class=\"carouselHeader\">Акции</h3>\n      <!-- TODO for loupe here for items -->\n      <div class=\"carousel scroll\">\n        <div class=\"itemCarousel\" *ngFor='let item of items | filter:searchText' [attr.data-id]='item.id' routerLink=\"/detail/{{item.id}}\">\n          <div class=\"itemCarousel_imageBlock\">\n            <div class=\"parent_img\">\n              <img src=\"{{ item.url }}\">\n            </div>\n          </div>\n          <p>До {{item.cashback}} %</p>\n          <p>{{item.name}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/sale/sale.component.less":
/*!******************************************!*\
  !*** ./src/app/sale/sale.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchDiv {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 0.5em;\n}\n.searchDiv_searchInput {\n  width: 100%;\n}\n.searchDiv_searchInput input {\n  padding-bottom: 6px;\n}\n.carousel {\n  display: flex;\n  overflow-x: auto;\n}\n.carouselParent:first-child {\n  margin-top: -10px;\n}\n.carouselParent:not(:first-child) {\n  margin-top: 10px;\n}\n.carouselParent p {\n  font-size: 0.8em;\n}\n.carouselHeader {\n  margin: 0 0 15px 0;\n}\n.itemCarousel {\n  width: 150px;\n}\n.itemCarousel:not(:last-child) {\n  margin-right: 20px;\n}\n.persInfo {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZS9DOi9Vc2Vycy9keWFrb3ZhLW5hL0Rlc2t0b3AvY2FzaGJhY2svY2FzaGJhY2svZnJvbnQvcHdhL2NoZWNrLWFwL3NyYy9hcHAvc2FsZS9zYWxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zYWxlL3NhbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7QUNBSjtBRERBO0VBR1EsbUJBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDREo7QURLSTtFQUNJLGlCQUFBO0FDSFI7QURNSTtFQUNJLGdCQUFBO0FDSlI7QURGQTtFQVVRLGdCQUFBO0FDTFI7QURTQTtFQUNJLGtCQUFBO0FDUEo7QURVQTtFQUNJLFlBQUE7QUNSSjtBRFdJO0VBQ0ksa0JBQUE7QUNUUjtBRG1CQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDakJKIiwiZmlsZSI6InNyYy9hcHAvc2FsZS9zYWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaERpdiB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4uc2VhcmNoRGl2X3NlYXJjaElucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgfVxufVxuXG4uY2Fyb3VzZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLmNhcm91c2VsUGFyZW50IHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxufVxuXG4uY2Fyb3VzZWxIZWFkZXIge1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbn1cblxuLml0ZW1DYXJvdXNlbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIC8vIGhlaWdodDogMzAwcHg7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcbiAgICB9XG59XG5cbi8vIC5pdGVtQ2Fyb3VzZWxfaW1hZ2VCbG9jayB7XG4vLyAgICAgd2lkdGg6IDEwMHB4O1xuLy8gICAgIGhlaWdodDogMTAwcHg7XG4vLyAgICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG4vLyB9XG5cbi5wZXJzSW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG59IiwiLnNlYXJjaERpdiB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cbi5zZWFyY2hEaXZfc2VhcmNoSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2hEaXZfc2VhcmNoSW5wdXQgaW5wdXQge1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuLmNhcm91c2VsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5jYXJvdXNlbFBhcmVudDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNhcm91c2VsUGFyZW50Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJvdXNlbFBhcmVudCBwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5jYXJvdXNlbEhlYWRlciB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbn1cbi5pdGVtQ2Fyb3VzZWwge1xuICB3aWR0aDogMTUwcHg7XG59XG4uaXRlbUNhcm91c2VsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ucGVyc0luZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/sale/sale.component.ts":
/*!****************************************!*\
  !*** ./src/app/sale/sale.component.ts ***!
  \****************************************/
/*! exports provided: SaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleComponent", function() { return SaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_items_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/items-service.service */ "./src/app/services/items-service.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var SaleComponent = /** @class */ (function () {
    function SaleComponent(itServ, auth) {
        this.itServ = itServ;
        this.auth = auth;
    }
    SaleComponent.prototype.ngOnInit = function () {
        this.items = this.itServ.getItems();
    };
    SaleComponent.prototype.search = function () {
        var searchQuery = document.getElementById('searchQuery').value;
        // console.log(searchQuery);
    };
    SaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale',
            template: __webpack_require__(/*! ./sale.component.html */ "./src/app/sale/sale.component.html"),
            styles: [__webpack_require__(/*! ./sale.component.less */ "./src/app/sale/sale.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_items_service_service__WEBPACK_IMPORTED_MODULE_2__["ItemsServiceService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SaleComponent);
    return SaleComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth.guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivateChild = function (next, state) {
        if (this.auth.isLoggedIn())
            return true;
        this.router.navigate(['/login']); //, { queryParams: { returnUrl: state.url }})
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AuthService = /** @class */ (function () {
    function AuthService() {
        this.previousUrl = null;
        this.user = null;
        this.isAuth = false;
    }
    AuthService.prototype.checkAuthorization = function () {
        return this.isAuth;
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.user)
            return true;
    };
    AuthService.prototype.login = function (logId, logPassw) {
        /*если логин  = 1 и пароль = 1, то создать юзера и вернуть true
        если нет - обнулить юзера и вернуть false*/
        if (logId == '1' && logPassw == '1') {
            this.user = {
                name: 'nik',
                surname: 'black',
                family: 'jgkdf',
                rights: 'all'
            };
            this.isAuth = true;
            // console.log('this.user = ', this.user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            this.user = null;
            // console.log('this.user = ', this.user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    };
    AuthService.prototype.registration = function (regEmail, regPassw, regConfirmPassw) {
        if (regEmail == '1' && regPassw == '1' && regConfirmPassw == '1') {
            this.user = {
                name: 'nik',
                surname: 'black',
                family: 'jgkdf',
                rights: 'all'
            };
            this.isAuth = true;
            // console.log('this.user = ', this.user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            this.user = null;
            // console.log('this.user = ', this.user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/cashback-service.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/cashback-service.service.ts ***!
  \******************************************************/
/*! exports provided: CashbackServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashbackServiceService", function() { return CashbackServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CashbackServiceService = /** @class */ (function () {
    function CashbackServiceService() {
    }
    CashbackServiceService.prototype.getChecks = function (id) {
        return [
            { status: 'Чек загружен', id: 1, sum: 100, date: '17.06.2019 10:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружен', id: 2, sum: 120, date: '17.06.2019 11:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружен', id: 3, sum: 160, date: '17.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружен', id: 4, sum: 200, date: '21.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружен', id: 5, sum: 1000, date: '22.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружен', id: 6, sum: 10000, date: '23.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружен', id: 7, sum: 99.99, date: '24.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружается', id: 8, sum: 100, date: '17.06.2019 10:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружается', id: 9, sum: 120, date: '17.06.2019 11:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружается', id: 10, sum: 160, date: '17.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружается', id: 11, sum: 200, date: '21.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружается', id: 12, sum: 1000, date: '22.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек загружается', id: 13, sum: 10000, date: '23.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек проверяется', id: 14, sum: 99.99, date: '24.06.2019 12:00', fn: 1571107415351674, fd: 1094465838, fpd: 2552697535 },
            { status: 'Чек проверяется', id: 15, sum: 99.99, date: '08.07.2019 13:30', fn: 1571107415351674, fd: 4444, fpd: 555555555 },
        ];
    };
    CashbackServiceService.prototype.getStatistics = function () {
        return [
            { accumulatedCashback: 9999, loaded: 100, isLoading: 10 }
        ];
    };
    CashbackServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CashbackServiceService);
    return CashbackServiceService;
}());



/***/ }),

/***/ "./src/app/services/guide-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/guide-service.service.ts ***!
  \***************************************************/
/*! exports provided: GuideServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideServiceService", function() { return GuideServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuideServiceService = /** @class */ (function () {
    function GuideServiceService() {
    }
    GuideServiceService.prototype.getSteps = function () {
        return [
            { text: 'Сканируйте чеки и получайте кэшбэк.Чем больше чеков, тем больше награда. Забирайте её сразу или копите до максимальной суммы.', id: 1, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/no_img.png' },
            { text: 'Для добавления чека нажмите кнопку "Добавить чек"', id: 2, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/btn-add-check2.png' },
            { text: 'Можно отсканировать QR-код, либо добавить чек вручную', id: 4, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/add-check.png' },
            { text: 'Если вы хотите отсканировать QR-код, наведите камеру на квадратный код внизу чека. Чек отсканируется. Если чек не сканируется, добавьте его вручную.', id: 5, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/add-check-qr2.png' },
            { text: 'Посмотреть добавленные чеки можно в меню Кэшбэк - Показать все чеки', id: 6, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/last_checks.png' },
            { text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id: 7, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/no_img.png' }
        ];
    };
    GuideServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuideServiceService);
    return GuideServiceService;
}());



/***/ }),

/***/ "./src/app/services/items-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/items-service.service.ts ***!
  \***************************************************/
/*! exports provided: ItemsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsServiceService", function() { return ItemsServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemsServiceService = /** @class */ (function () {
    function ItemsServiceService() {
    }
    ItemsServiceService.prototype.getItems = function (id) {
        return [
            { name: 'Egoiste Noir кофе в зернах, 1 кг', id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 1153.00, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item1.png' },
            { name: 'Чай черный Greenfield', id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 69.99, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item2.png' },
            { name: 'Кофе ЛАЛИБЕЛА КОФЕ Эспрессо молотый', id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 139.00, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item3.png' },
            { name: 'Lavazza Caffe Espresso кофе в зернах, 500 г', id: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 520.00, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item4.png' },
            { name: 'Название товара', id: 5, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png' },
            { name: 'Название товара', id: 6, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png' },
            { name: 'Название товара', id: 7, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png' },
            { name: 'Название товара', id: 8, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png' },
            { name: 'Название товара', id: 9, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png' },
            { name: 'Название товара', id: 10, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, cashback: 10, url: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/check_ap/item.png' }
        ];
    };
    ItemsServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemsServiceService);
    return ItemsServiceService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dyakova-na\Desktop\cashback\cashback\front\pwa\check-ap\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map