(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class = \"navBar\">\n    <a></a><a></a><a></a><a></a>\n    <a routerLink =\"/home\"><i class=\"fa fa-home\"></i>&#160;Home</a><a></a>\n    <a routerLink =\"/businessCards\"><i class=\"fa fa-address-card\"></i>&#160;My Business Cards</a><a></a>\n    <a routerLink=\"/newCard\"><i class=\"fa fa-user-plus\"></i>&#160;Add Card</a><a></a>\n    <a routerLink=\"/webcam\"><i class=\"fa fa-camera\"></i>&#160;Webcam</a><a></a>\n    <a routerLink=\"/userProfile\"><i class=\"fa fa-user\"></i>&#160;My Profile</a>\n    <div class = \"logoIcon\">\n      <img src=\"/assets/images/mainicon.png\" />\n      <span class =\"appName\">\n        MY  |  BUSINESS  |  CARDS \n      </span>\n      </div>\n    <a></a>\n  </nav> \n  <div *ngIf=\"authService.isAuthorized()\">\n    <app-logout></app-logout>\n  </div>\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscard/businesscard.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscard/businesscard.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngFor=\"let bc of cardsList\"> \n  <span class = \"cardBox\"><a></a> \n    <div class = \"cardHeader\">{{bc.firstname}} {{bc.lastname}}</div>\n    <div class = \"cardBody0\">{{bc.title}}</div>\n    <div class = \"cardBody1\">{{bc.company}}</div>\n    <div class = \"cardBody2\">{{bc.address}}</div>\n    <div class = \"cardBody3\"><i class=\"fa fa-mobile\"></i>&#160;{{bc.phonenumber}}</div>\n    <div class = \"cardBody4\"><i class=\"fa fa-envelope-o\"></i>&#160;{{bc.email}}</div>\n    </span>\n\n    <button class=\"updateBtn\" (click)=\"startUpdate(this.bc)\">\n        <i class=\"fa fa-edit fa-1x\"></i><br>Update</button>\n      <button class=\"deleteBtn\" (click)=\"removeMyCard(this.bc)\">\n      <i class=\"fa fa-trash fa-1x\"></i><br>Delete</button>\n   \n  <span *ngIf=\"bc.cardIndex==selectedCardID && selectedCardID!='exit'\">\n      <div class=\"editCard\">\n        <h3 class = \"editHeader\">Update Form</h3>\n        <div>\n            <button class=\"submitBtn\" (click)=\"updateMyCard(bc)\">&#160;Submit\n                <i class=\"fa fa-chevron-right\"></i>\n              </button>\n              <button class =\"exitBtn\" (click)=\"stopUpdate()\">&#160;Exit\n                  <i class=\"fa fa-window-close\"></i>\n                </button>\n              </div>\n        <div class=\"editForm mt-2\">\n          <div class=\"pr-2\">\n            <label class=\"editFont\" for=\"firstname\">Firstname:</label>\n            <input class=\"form-control mr-2\" name = \"firstname\" [(ngModel)]=\"bc.firstname\">\n            <label class=\"editFont\" for=\"lastname\">Lastname:</label>\n            <input class=\"form-control\" name = \"lastname\"  [(ngModel)]=\"bc.lastname\">\n          </div>\n        </div>\n\n        <div class=\"editForm\">\n            <div class=\"title-form pr-2\">\n              <label class=\"editFont\" for=\"title\">Title:</label>\n              <input class=\"form-control\" name = \"title\" [(ngModel)]=\"bc.title\">\n            </div>\n            <div>\n              <label class=\"editFont\" for=\"firm\">Company:</label>\n              <input class=\"form-control\" name = \"firm\" [(ngModel)]=\"bc.company\">\n            </div>\n          </div>\n\n        <div class=\"editForm\">\n            <div class=\"address-form\">\n              <label class=\"editFont\" for=\"address\">Address: </label>\n              <input class=\"form-control mr-2\" name = \"address\" [(ngModel)]=\"bc.address\">\n            </div>\n        </div>\n        <div class=\"editForm\">\n          <div class=\"email-form pr-2\">\n            <label class=\"editFont\" for=\"email\">Email: </label>\n            <input class=\"form-control\" name = \"email\" [(ngModel)]=\"bc.email\">\n          </div>\n          <div class=\"phone-form\">\n            <label class=\"editFont\" for=\"phoneNumber\">Tel:</label>\n            <input class=\"form-control\" name = \"phonenumber\" [(ngModel)]=\"bc.phonenumber\">\n            <br>\n          </div>\n        </div>\n      </div>\n    </span> \n  </div>\n\n  \n\n   \n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscards/businesscards.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscards/businesscards.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: rgb(0, 0, 0)\">\n    <br>\n    <span>\n    <button class=\"clearAllBtn\" (click)=\"clearAllCards()\">\n        <i class=\"fa fa-times fa-2x\"></i><br>CLEAR ALL CARDS</button>\n<div class = \"sampleBox\" ><a></a>\n  <div class = \"sampleBody1\">\n    <img src=\"/assets/images/sampleicon.png\" />\n</div>\n  <div class = \"sampleBody2\">MY | BUSINESS | CARDS</div>\n  </div>\n</span>\n  \n<app-businessCard [cardsList]=\"cardsList\"></app-businessCard>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/errorpage/errorPage.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errorpage/errorPage.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class = \"errorBox\">\n        <div class = \"errorHeader\">404</div>\n        <div class = \"errorBody1\">Error</div>\n        <div class = \"errorBody2\">Page Not Found</div>\n        </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n<br>\n<br>\n<div class = \"homeBox\"><a></a>\n<div class = \"homeHeader\">WELCOME </div>\n<div class = \"homeBody1\">TO</div>\n<div class = \"homeBody2\">MY | BUSINESS | CARDS</div>\n</div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <br><br>\n<div class=\"loginError\" role=\"alert\" *ngIf=\"authService.isNotMatched\">\n    <i class=\"fa fa-warning\"></i>&#160;Your username/password is incorrect!\n    &#160;<i class=\"fa fa-warning\"></i>\n</div>\n\n<div class=\"myFormGroup\">\n  <form [formGroup]=\"formGroup\">\n      <h3 class =\"loginHeader\">Sign-in</h3>\n      <div class=\"loginField\">\n        <div class=\"form-group\">\n          <label class = \"loginInfo\" for=\"username\">Username</label>\n          <input class=\"form-control\" id =\"usernameInput\" placeholder=\"Your email address\" formControlName=\"username\">\n          <label class=\"loginInfo\" for=\"password\">Password</label>\n          <input class=\"form-control input-password\" type=\"password\" id =\"passwordInput\" placeholder=\"Your password\" \n            [formControl]=\"formGroup.controls['password']\">\n            <br>\n        </div>\n\n        <div class=\"login-btn\">\n          <button type=\"submit\" (click)=\"login()\" >Sign In&#160;<i class=\"fa fa-arrow-circle-right\"></i></button>\n        </div>\n      </div>\n  </form>\n</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button class=\"logout-btn\" (click)=\"logout()\">\n    Sign Out&#160;&#160;\n    <i class=\"fa fa-arrow-circle-right\"></i>\n</button>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/newcard/newcard.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newcard/newcard.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n      <br>\n      <form ngControl=\"addNewCardForm\" #addNewCardForm =\"ngForm\" > \n       <div class=\"newcardError\" role=\"alert\" *ngIf= \"isClicked && !addNewCardForm.valid\">\n          <i class=\"fa fa-warning\"></i>&#160;Some Inputs are Missing&#160;\n          <i class=\"fa fa-warning\"></i>\n        </div>\n        <div class=\"newcardForm\">\n          <h3 class=\"newcardHeader\"> <i class=\"fa fa-address-card\"></i>&#160;&#160;ADD | NEW | CARD</h3>\n          <br><br>\n  \n          <div class=\"form-group newcard-form\">\n            <div class=\"form-group pr-4\">\n              <label class=\"newcardInfo\" for=\"firstname\">Firstname:</label>\n              <input class=\"form-control mr-2\" name=\"firstname\" placeholder=\"firstname\" required \n              [(ngModel)]=\"newCard.firstname\" #firstname=\"ngModel\">\n            </div>\n            <div>\n              <label class=\"newcardInfo\" for=\"lastname\">Lastname:</label>\n              <input class=\"form-control\" name=\"lastname\" placeholder=\"lastname\" required \n              [(ngModel)]=\"newCard.lastname\" #lastname=\"ngModel\">\n            </div>\n          </div>\n\n        <div class=\"form-group newcard-form\">\n          <div class=\"form-group pr-4\">\n            <label class=\"newcardInfo\" for=\"title\">Title:</label>\n            <input class=\"form-control\" name=\"title\" placeholder=\"title\" required \n            [(ngModel)]=\"newCard.title\" #title=\"ngModel\">\n          </div>\n            <div>\n            <label class=\"newcardInfo\" for=\"company\">Company:</label>\n            <input class=\"form-control\" name=\"company\" placeholder=\"company\" required \n            [(ngModel)]=\"newCard.company\" #company=\"ngModel\"> \n        </div>\n      </div>\n          <div class=\"form-group newcard-form\">\n            <div class=\"email-form pr-4\">\n              <label class=\"newcardInfo\" for=\"email\">Email Address: </label>\n              <input class=\"form-control\" name=\"email\"placeholder=\"email\" required \n              [(ngModel)]=\"newCard.email\" #email=\"ngModel\">\n            </div>\n            <div class=\"phone-form\">\n              <label class=\"newcardInfo\" for=\"phoneNumber\">Phone Number:</label>\n              <input class=\"form-control\" name=\"phonenumber\" placeholder=\"phone number\" required \n              [(ngModel)]=\"newCard.phonenumber\"  #phonenumber=\"ngModel\">\n            </div>\n          </div>\n          <br>\n          <div class=\"form-group\">\n            <div class = \"newcard-form\">\n              <label class=\"newcardInfo\" for=\"address\">Address:&#160;&#160;</label>\n              <input class=\"form-control\" placeholder=\"address\" required \n              [(ngModel)]=\"newCard.address\" name=\"address\" #address=\"ngModel\" >\n            </div>\n          </div>\n          \n          <div class=\"submit-form\">\n            <button class=\"submitBtn\" (click)=\"addNewCard()\">Submit &#160;<i class=\"fa fa-arrow-circle-right\"></i></button>\n            </div>\n        </div>\n        \n      </form>\n      \n  </div>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userProfile.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userProfile.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n<br>\n<br>\n        <div class =\"profileHeaderBox\">\n                <a class = \"profileHeader\">My Profile</a>\n                <div class = \"profileImage\">\n                        <img src=\"/assets/images/profileicon2.png\" />\n                </div>\n                <div class = \"profileBox\">\n                        <div class = \"profileInfo\">\n                                Email: {{userEmail}} \n                </div>\n        </div>\n</div>\n\n\n       \n        \n\n\n             \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/webcam/webcam.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/webcam/webcam.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<span>\n      <button class=\"camera-btn\" (click)=\"takeSnapShot()\">\n          Click To Snap\n          <i class=\"fa fa-camera fa-3x\" aria-hidden=\"true\"></i></button>\n      </span>\n\n<div class = \"myImage\">\n<webcam [height]=\"290\" \n[trigger]=\"observeSnapShot\"\n(imageCapture)=\"getMyImage($event)\" \n(initError)=\"getImageError($event)\">\n</webcam>\n</div>\n\n<div id=\"snapshot\" class=\"snapshot mt-5\" *ngIf=\"myWebcamPic\"> \n    <span>\n        <button class=\"okBtn\" (click)=\" detectTextImage()\">Add Card&#160;<i class=\"fa fa-check-circle\"></i></button>\n        <button class=\"retakeBtn\" (click)=\"retakePhoto()\">Retake&#160;&#160;<i class=\"fa fa-camera\"></i></button>\n    </span>\n        <div class = \"myImage\"> <img id=\"image\" [src]=\"myWebcamPic.imageAsDataUrl\"/></div>\n        \n</div>\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/webcampage/webcampage.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/webcampage/webcampage.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <br>\n    <br>\n<div class=\"col-sm-5 webcam\">\n  <app-webcam *ngIf=\"isWebcamON\" \n  (snapshot)=\"setImage($event)\" \n  (snaptext)=\"getTextImage($event)\">\n</app-webcam>\n  <div>\n      <div class = \"imageHeaderBox\">\n      <h2 class=\"cardHeader\"for=\"image\"><i class=\"fa fa-address-card\">\n      </i>&#160;&#160;MY | CARD | IMAGE </h2>\n      <button class=\"webcamBtn\" (click)=\"openWebcam()\">Start Webcam</button>\n      <button class=\"stopwebcamBtn\" (click)=\"openWebcam()\">Stop Webcam</button>\n</div>\n</div>\n</div>\n\n\n\n  \n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _authguard_authguard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authguard/authguard */ "./src/app/authguard/authguard.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _businesscards_businesscards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./businesscards/businesscards.component */ "./src/app/businesscards/businesscards.component.ts");
            /* harmony import */ var _newcard_newcard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newcard/newcard.component */ "./src/app/newcard/newcard.component.ts");
            /* harmony import */ var _webcampage_webcampage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webcampage/webcampage.component */ "./src/app/webcampage/webcampage.component.ts");
            /* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
            /* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");
            var myRoutes = [
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_authguard_authguard__WEBPACK_IMPORTED_MODULE_3__["Authguard"]] },
                { path: 'businessCards', component: _businesscards_businesscards_component__WEBPACK_IMPORTED_MODULE_6__["BusinessCardsComponent"], canActivate: [_authguard_authguard__WEBPACK_IMPORTED_MODULE_3__["Authguard"]] },
                { path: 'newCard', component: _newcard_newcard_component__WEBPACK_IMPORTED_MODULE_7__["NewcardComponent"], canActivate: [_authguard_authguard__WEBPACK_IMPORTED_MODULE_3__["Authguard"]] },
                { path: 'webcam', component: _webcampage_webcampage_component__WEBPACK_IMPORTED_MODULE_8__["WebcampageComponent"], canActivate: [_authguard_authguard__WEBPACK_IMPORTED_MODULE_3__["Authguard"]] },
                { path: 'userProfile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_9__["UserprofileComponent"], canActivate: [_authguard_authguard__WEBPACK_IMPORTED_MODULE_3__["Authguard"]] },
                { path: '**', component: _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_10__["ErrorpageComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(myRoutes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".logout-btn{\n    background-color: black;\n    color: white;\n    font-family: \"Times New Roman\", Times, serif;\n    font-size: 19px; \n    position: absolute;\n    padding: 9px 20px;\n    transition: .5s ease;\n    top: 3%;\n    left: 80%;  \n}\n\n.navBar {\n    background-color: rgb(155, 114, 77);\n    overflow: hidden;\n    color: white;\n    font-family: \"Verdana\";\n    font-size: 16px; \n    }\n\n.navBar a {\n    float: left;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 16px;}\n\n.navBar a:hover {\n    background-color: rgb(247, 221, 181);\n    color: black;\n    }\n\n.navBar a:focus {\n    background-color: rgb(247, 221, 181);\n    color: black;\n    }\n\n.appName{\n    color: black;\n    font-weight: bold;\n    font-family: \"Times New Roman\", Times, serif;\n    position: relative;\n    font-size: 20px;\n    padding: 9px 25px;\n    transition: .5s ease;\n    top: 15%;\n    left: -6%;  \n    }\n\n.logoIcon{\n        color: black;\n        font-weight: bold;\n        font-family: \"Times New Roman\", Times, serif;\n        position: absolute;\n        font-size: 20px;\n        padding: 9px 25px;\n        transition: .5s ease;\n        top: -2%;\n        left: 0%;  \n        }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Y7O0FBQ0E7SUFDQSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWUsQ0FBQzs7QUFFaEI7SUFDQSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaOztBQUVBO0lBQ0Esb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWjs7QUFFQTtJQUNBLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsU0FBUztJQUNUOztBQUNBO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtRQUNqQiw0Q0FBNEM7UUFDNUMsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLFFBQVE7UUFDUixRQUFRO1FBQ1IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXQtYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTlweDsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIHRvcDogMyU7XG4gICAgbGVmdDogODAlOyAgXG59XG5cbi5uYXZCYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUsIDExNCwgNzcpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgICBmb250LXNpemU6IDE2cHg7IFxuICAgIH1cbiAgICAubmF2QmFyIGEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7fVxuICAgIFxuICAgIC5uYXZCYXIgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjIxLCAxODEpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAubmF2QmFyIGE6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIyMSwgMTgxKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLmFwcE5hbWV7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiA5cHggMjVweDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiAtNiU7ICBcbiAgICB9XG4gICAgLmxvZ29JY29ue1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogOXB4IDI1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICB0b3A6IC0yJTtcbiAgICAgICAgbGVmdDogMCU7ICBcbiAgICAgICAgfVxuXG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService) {
                    this.authService = authService;
                    this.title = 'mybusinesscards';
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
            /* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
            /* harmony import */ var _businesscard_businesscard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./businesscard/businesscard.component */ "./src/app/businesscard/businesscard.component.ts");
            /* harmony import */ var _businesscards_businesscards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./businesscards/businesscards.component */ "./src/app/businesscards/businesscards.component.ts");
            /* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");
            /* harmony import */ var _webcampage_webcampage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./webcampage/webcampage.component */ "./src/app/webcampage/webcampage.component.ts");
            /* harmony import */ var _newcard_newcard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./newcard/newcard.component */ "./src/app/newcard/newcard.component.ts");
            /* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
            /* harmony import */ var _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./webcam/webcam.component */ "./src/app/webcam/webcam.component.ts");
            /* harmony import */ var _authguard_authguard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authguard/authguard */ "./src/app/authguard/authguard.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _services_businesscards_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/businesscards.service */ "./src/app/services/businesscards.service.ts");
            /* harmony import */ var _services_webcam_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/webcam.service */ "./src/app/services/webcam.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                        _businesscard_businesscard_component__WEBPACK_IMPORTED_MODULE_15__["BusinessCardComponent"],
                        _businesscards_businesscards_component__WEBPACK_IMPORTED_MODULE_16__["BusinessCardsComponent"],
                        _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_17__["ErrorpageComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                        _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"],
                        _newcard_newcard_component__WEBPACK_IMPORTED_MODULE_19__["NewcardComponent"],
                        _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__["UserprofileComponent"],
                        _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_21__["WebCamComponent"],
                        _webcampage_webcampage_component__WEBPACK_IMPORTED_MODULE_18__["WebcampageComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        ngx_webcam__WEBPACK_IMPORTED_MODULE_20__["WebcamModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["firebase"]),
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                    ],
                    providers: [
                        _authguard_authguard__WEBPACK_IMPORTED_MODULE_22__["Authguard"],
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"],
                        _services_businesscards_service__WEBPACK_IMPORTED_MODULE_24__["BusinesscardsService"],
                        _services_webcam_service__WEBPACK_IMPORTED_MODULE_25__["WebcamService"],
                    ],
                    bootstrap: [
                        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
                    ]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/authguard/authguard.ts": 
        /*!****************************************!*\
          !*** ./src/app/authguard/authguard.ts ***!
          \****************************************/
        /*! exports provided: Authguard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authguard", function () { return Authguard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var Authguard = /** @class */ (function () {
                function Authguard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.myAuthState = authService.authState;
                }
                //ref. from Angular Github #9613
                //add take(1)
                Authguard.prototype.canActivate = function (route, state) {
                    var _this = this;
                    return this.myAuthState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (authState) { return !!authState; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
                        if (loggedIn) {
                            console.log('Successful activation');
                        }
                        else {
                            console.log('Failed activation');
                            _this.router.navigate(['/login']);
                        }
                    }));
                };
                return Authguard;
            }());
            Authguard.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            Authguard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], Authguard);
            /***/ 
        }),
        /***/ "./src/app/businesscard/businesscard.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/businesscard/businesscard.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n.close {\n  width: 10px;\n  height: 10px;\n  margin-right: .5em;\n}\n\n.editForm {\n  display: flex;\n  margin-top: 2%;\n  margin-left: 2%;\n  margin-right: 10px;\n}\n\n.cardBox {\n  display: inline-table;\n  position: relative;\n  background-color: white;\n  border: 6px solid rgba(255, 119, 0, 0.897);\n  color: black;\n  left: 33%; \n  margin-top: 1%;\n  margin-bottom: 1%;\n  width: 400px;\n  height: 180px; \n  font-family: \"Times New Roman\", Times, serif;\n  padding: 20px;\n  \n}\n\n.cardHeader {\n  position: relative;\n  text-align: center;\n  color: rgb(247, 119, 7);\n  font-weight: bold;\n  font-size:24px;\n  font-family: \"Times New Roman\", Times, serif; \n}\n\n.cardBody0{\n  position: relative;\n  text-align: center;\n  color:black;\n  font-style: italic;\n  font-size: 16px;\n}\n\n.cardBody1{\n  position: relative;\n  text-align: left;\n  margin-top: 4%;\n  color: black;\n  font-weight: bold;\n  font-style: normal;\n  font-size: 16px;\n}\n\n.cardBody2{\n  position: relative;\n  text-align: left;\n  color:black;\n  font-weight: normal;\n  font-size: 14px;\n}\n\n.cardBody3{\n  position: relative;\n  text-align: left;\n  color: black;\n  font-weight: normal;\n  font-size: 14px;  \n}\n\n.cardBody4{\n  position: relative;\n  text-align: left;\n  color: black;\n  font-weight: normal;\n  font-size: 14px;  \n}\n\n.editCard{\n  background-color: rgb(241, 220, 201);\n  border: 5px solid rgb(155, 114, 77);\n  display: inline-block;\n  max-width: 350px;\n  position: fixed;\n  padding: 9px 26px;\n  transition: .5s ease;\n  bottom: 10%;\n  left: 2%;  \n  \n   \n}\n\n.editHeader{\n  color:black;\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.editFont{\n  color:black;\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.updateBtn{\n  background-color: rgba(255, 119, 0, 0.897);\n  color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  border: 3px solid white;\n  font-weight: normal;\n  font-size: 15px; \n  position: relative;\n  padding: 9px 18px;\n  transition: .5s ease;\n  top: 0%;\n  left: 35%;  \n  border-radius: 7px;\n}\n\n.updateBtn:hover{\n  background-color:  rgb(67, 152, 6);\n}\n\n.deleteBtn:hover{\n  background-color:  red;\n}\n\n.deleteBtn{\n  background-color: rgb(22, 15, 4);\n  color: white;\n  font-weight: normal;\n  border: 3px solid white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 15px; \n  position: relative;\n  padding: 9px 18px;\n  transition: .5s ease;\n  left: 37%;  \n  border-radius: 7px;\n}\n\n.exitBtn{\n  background: red;\n  margin-left:5%;\n  color: white;\n  padding: 5px 12px;\n  border-radius: 5px;\n  border: 3px solid rgba(222, 3, 3, 0.584);\n}\n\n.submitBtn{\n  background: green;\n  margin-left:30%;\n  color: white;\n  padding: 5px 7px;\n  border-radius: 5px;\n  border: 3px solid rgba(2, 103, 2, 0.632);\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3NjYXJkL2J1c2luZXNzY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixTQUFTO0VBQ1QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxhQUFhOztBQUVmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw0Q0FBNEM7QUFDOUM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFFBQVE7OztBQUdWOztBQUNBO0VBQ0UsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixPQUFPO0VBQ1AsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvYnVzaW5lc3NjYXJkL2J1c2luZXNzY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2xvc2Uge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC41ZW07XG59XG5cbi5lZGl0Rm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNhcmRCb3gge1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogNnB4IHNvbGlkIHJnYmEoMjU1LCAxMTksIDAsIDAuODk3KTtcbiAgY29sb3I6IGJsYWNrO1xuICBsZWZ0OiAzMyU7IFxuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxODBweDsgXG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIFxufVxuXG4uY2FyZEhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDI0NywgMTE5LCA3KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZToyNHB4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmOyBcbn1cbi5jYXJkQm9keTB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjpibGFjaztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZEJvZHkxe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jYXJkQm9keTJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6YmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJkQm9keTN7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7ICBcbn1cblxuLmNhcmRCb2R5NHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDsgIFxufVxuXG4uZWRpdENhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIyMCwgMjAxKTtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDE1NSwgMTE0LCA3Nyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiA5cHggMjZweDtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiAyJTsgIFxuICBcbiAgIFxufVxuLmVkaXRIZWFkZXJ7XG4gIGNvbG9yOmJsYWNrO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZWRpdEZvbnR7XG4gIGNvbG9yOmJsYWNrO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udXBkYXRlQnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTE5LCAwLCAwLjg5Nyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDsgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAzNSU7ICBcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4udXBkYXRlQnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDY3LCAxNTIsIDYpO1xufVxuLmRlbGV0ZUJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJlZDtcbn1cbi5kZWxldGVCdG57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTUsIDQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgbGVmdDogMzclOyAgXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmV4aXRCdG57XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6NSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyMjIsIDMsIDMsIDAuNTg0KTtcbn1cblxuLnN1Ym1pdEJ0bntcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIG1hcmdpbi1sZWZ0OjMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMiwgMTAzLCAyLCAwLjYzMik7XG59XG5cblxuXG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/businesscard/businesscard.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/businesscard/businesscard.component.ts ***!
          \********************************************************/
        /*! exports provided: BusinessCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCardComponent", function () { return BusinessCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_businesscards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/businesscards.service */ "./src/app/services/businesscards.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var BusinessCardComponent = /** @class */ (function () {
                function BusinessCardComponent(router, businessCardsService) {
                    this.router = router;
                    this.businessCardsService = businessCardsService;
                }
                BusinessCardComponent.prototype.sortedCards = function () {
                    return this.cardsList.sort();
                };
                BusinessCardComponent.prototype.startUpdate = function (selectedcard) {
                    this.selectedCardID = selectedcard.cardIndex;
                    console.log("Updating card# " + selectedcard.cardIndex);
                };
                BusinessCardComponent.prototype.stopUpdate = function () {
                    this.selectedCardID = "exit";
                };
                BusinessCardComponent.prototype.updateMyCard = function (selectedcard) {
                    this.businessCardsService.updateMyCard(selectedcard, selectedcard.cardIndex);
                    alert("Your card has been UPDATED!");
                    this.stopUpdate();
                };
                BusinessCardComponent.prototype.removeMyCard = function (selectedcard) {
                    console.log("Removing card# " + selectedcard.cardIndex);
                    this.businessCardsService.removeMyCard(selectedcard, selectedcard.cardIndex);
                };
                BusinessCardComponent.prototype.ngOnInit = function () { };
                return BusinessCardComponent;
            }());
            BusinessCardComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services_businesscards_service__WEBPACK_IMPORTED_MODULE_2__["BusinesscardsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BusinessCardComponent.prototype, "cardsList", void 0);
            BusinessCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-businessCard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./businesscard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscard/businesscard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./businesscard.component.css */ "./src/app/businesscard/businesscard.component.css")).default]
                })
            ], BusinessCardComponent);
            /***/ 
        }),
        /***/ "./src/app/businesscards/businesscards.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/businesscards/businesscards.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n.clearAllBtn:hover{\n  background-color:  rgb(255, 2, 2);\n}\n.clearAllBtn{\n  background-color: rgb(201, 0, 0);\n  color: white;\n  font-weight: bold;\n  border: 3px solid white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 15px; \n  position: relative;\n  padding: 9px 18px;\n  transition: .5s ease;\n  left: 62%;  \n  border-radius: 7px;\n}\n.sampleHeader {\n  position: relative;\n  left: 18%;  \n  top: 5%;\n  color: white;\n  font-weight: bold;\n  font-size:35px;\n  font-family: \"Times New Roman\", Times, serif; \n}\n.sampleBox {\n  position: relative;\n  background-color: rgb(247, 119, 7);\n  color: black;\n  left: 31.5%; \n  width: 400px;\n  height: 220px; \n  font-family: \"Times New Roman\", Times, serif;\n  border: 5px solid rgb(255, 255, 255);\n  padding: 20px;\n  margin: 20px;\n}\n.sampleBody1{\n  position: relative;\n  top: 5%;\n  left: 30%;  \n  font-weight: bold;\n  font-size: 38px;\n}\n.sampleBody2{\n  position: relative;\n  top: 11%;\n  left: 22%; \n  color: black;\n  font-weight: bold;\n  font-size: 18px;  \n} \n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3NjYXJkcy9idXNpbmVzc2NhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw0Q0FBNEM7QUFDOUM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2FyZHMvYnVzaW5lc3NjYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2xlYXJBbGxCdG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMjU1LCAyLCAyKTtcbn1cbi5jbGVhckFsbEJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMCwgMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgbGVmdDogNjIlOyAgXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5zYW1wbGVIZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE4JTsgIFxuICB0b3A6IDUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6MzVweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjsgXG59XG5cbi5zYW1wbGVCb3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDExOSwgNyk7XG4gIGNvbG9yOiBibGFjaztcbiAgbGVmdDogMzEuNSU7IFxuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjIwcHg7IFxuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnNhbXBsZUJvZHkxe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDMwJTsgIFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuLnNhbXBsZUJvZHkye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTElO1xuICBsZWZ0OiAyMiU7IFxuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7ICBcbn0gXG5cblxuXG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/businesscards/businesscards.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/businesscards/businesscards.component.ts ***!
          \**********************************************************/
        /*! exports provided: BusinessCardsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCardsComponent", function () { return BusinessCardsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_businesscards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/businesscards.service */ "./src/app/services/businesscards.service.ts");
            var BusinessCardsComponent = /** @class */ (function () {
                function BusinessCardsComponent(businessCardsService, router) {
                    this.businessCardsService = businessCardsService;
                    this.router = router;
                    this.getCardsFromContainer();
                }
                BusinessCardsComponent.prototype.sortedCards = function () {
                    return this.cardsList.sort();
                };
                BusinessCardsComponent.prototype.clearAllCards = function (cardLists) {
                    this.cardsList = this.businessCardsService.clearAllCards(this.cardsList);
                };
                //codes from https://github.com/angular/angularfire/blob/master/docs/firestore/collections.md
                BusinessCardsComponent.prototype.getCardsFromContainer = function () {
                    var _this = this;
                    this.businessCardsService.getMyCardsContainers().snapshotChanges()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) { return changes.map(function (myCard) { return (Object.assign({ id: myCard.payload.doc.id }, myCard.payload.doc.data())); }); })).subscribe(function (bcard) { _this.cardsList = bcard; });
                };
                BusinessCardsComponent.prototype.ngOnInit = function () {
                };
                return BusinessCardsComponent;
            }());
            BusinessCardsComponent.ctorParameters = function () { return [
                { type: _services_businesscards_service__WEBPACK_IMPORTED_MODULE_4__["BusinesscardsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            BusinessCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-businessCards',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./businesscards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscards/businesscards.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./businesscards.component.css */ "./src/app/businesscards/businesscards.component.css")).default]
                })
            ], BusinessCardsComponent);
            /***/ 
        }),
        /***/ "./src/app/errorpage/errorPage.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/errorpage/errorPage.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".errorHeader {\n    position: absolute;\n    left: 36%;  \n    top: 5%;\n    color: black;\n    font-weight: bold;\n    font-size: 100px;\n    font-family: \"Times New Roman\", Times, serif; \n  }\n\n  .errorBox {\n    position: absolute;\n    background-color: rgb(241, 220, 201);\n    color: black;\n    left: 28%;  \n    top: 30%;\n    width: 575px;\n    height: 315px; \n    font-family: \"Times New Roman\", Times, serif;\n    border: 10px solid rgb(155, 114, 77);\n    padding: 20px;\n    margin: 20px;\n  }\n\n  .errorBody1{\n    position: absolute;\n    top: 47%;\n    left: 40%;  \n    font-weight: bold;\n    font-size: 42px;\n  }\n\n  .errorBody2{\n    position: absolute;\n    top: 70%;\n    left: 25%; \n    font-weight: bold;\n    font-size: 42px;  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3JwYWdlL2Vycm9yUGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9lcnJvcnBhZ2UvZXJyb3JQYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JIZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNiU7ICBcbiAgICB0b3A6IDUlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7IFxuICB9XG5cbiAgLmVycm9yQm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjIwLCAyMDEpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsZWZ0OiAyOCU7ICBcbiAgICB0b3A6IDMwJTtcbiAgICB3aWR0aDogNTc1cHg7XG4gICAgaGVpZ2h0OiAzMTVweDsgXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiKDE1NSwgMTE0LCA3Nyk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cblxuICAuZXJyb3JCb2R5MXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NyU7XG4gICAgbGVmdDogNDAlOyAgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG4gIC5lcnJvckJvZHkye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDcwJTtcbiAgICBsZWZ0OiAyNSU7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDJweDsgIFxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/errorpage/errorpage.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/errorpage/errorpage.component.ts ***!
          \**************************************************/
        /*! exports provided: ErrorpageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function () { return ErrorpageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorpageComponent = /** @class */ (function () {
                function ErrorpageComponent() {
                }
                ErrorpageComponent.prototype.ngOnInit = function () {
                };
                return ErrorpageComponent;
            }());
            ErrorpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./errorPage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/errorpage/errorPage.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./errorPage.component.css */ "./src/app/errorpage/errorPage.component.css")).default]
                })
            ], ErrorpageComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".homeHeader {\n    position: relative;\n    left: 20%;  \n    top: 10%;\n    color: black;\n    font-weight: bold;\n    font-size: 45px;\n    font-family: \"Times New Roman\", Times, serif; \n  }\n\n  .homeBox {\n    position: relative;\n    background-color: rgb(241, 220, 201);\n    border: 7px solid rgb(155, 114, 77);\n    color: black;\n    left: 30%; \n    width: 500px;\n    height: 300px; \n    font-family: \"Times New Roman\", Times, serif;\n    padding: 20px;\n    margin: 20px;\n  }\n\n  .homeBody1{\n    position: relative;\n    top: 15%;\n    left: 43%;  \n    font-weight: bold;\n    font-size: 38px;\n  }\n\n  .homeBody2{\n    position: relative;\n    top: 25%;\n    left: 10%; \n    font-weight: bold;\n    font-size: 32px;  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZUhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDIwJTsgIFxuICAgIHRvcDogMTAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjsgXG4gIH1cblxuICAuaG9tZUJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIyMCwgMjAxKTtcbiAgICBib3JkZXI6IDdweCBzb2xpZCByZ2IoMTU1LCAxMTQsIDc3KTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbGVmdDogMzAlOyBcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDsgXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4gIC5ob21lQm9keTF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUlO1xuICAgIGxlZnQ6IDQzJTsgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuICAuaG9tZUJvZHkye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDI1JTtcbiAgICBsZWZ0OiAxMCU7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzJweDsgIFxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n.loginHeader {\n  position: absolute;\n  left: 38%;  \n  top: 5%;\n  color: white;\n  font-weight: bold;\n  font-size: 28px;\n  font-family: \"Times New Roman\", Times, serif; \n}\n\n\n.myFormGroup {\n  position: relative;\n  background-color: black;\n  color: white;\n  left: 33%;  \n  top: 35%;\n  width: 400px;\n  height: 345px; \n  font-family: \"Times New Roman\", Times, serif;\n  border: 10px solid rgb(155, 114, 77);\n  padding: 20px;\n  margin: 20px;\n}\n\n\n.loginField{\n  position: absolute;\n  left: 10%;  \n  top: 20%;\n  width: 300px;\n}\n\n\n.loginError{\n  color: black;\n  font-size: 20px;\n  text-align: center;\n  margin-top: 3%;\n  font-weight: bold;\n  background-color: rgb(254, 191, 83);\n}\n\n\n.loginInfo{\n  color: rgb(242, 217, 184);\n  font-weight: bold;\n  font-size: 20px;\n}\n\n\n.login-btn{\n  background-color: black;\n  color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 19px; \n  position: absolute;\n  transition: .5s ease;\n  top: 98%;\n  left: 37%;  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw0Q0FBNEM7QUFDOUM7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQ0FBbUM7QUFDckM7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osNENBQTRDO0VBQzVDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9naW5IZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM4JTsgIFxuICB0b3A6IDUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7IFxufVxuXG5cbi5teUZvcm1Hcm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMzMlOyAgXG4gIHRvcDogMzUlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzQ1cHg7IFxuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBib3JkZXI6IDEwcHggc29saWQgcmdiKDE1NSwgMTE0LCA3Nyk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmxvZ2luRmllbGR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlOyAgXG4gIHRvcDogMjAlO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5sb2dpbkVycm9ye1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDE5MSwgODMpO1xufVxuXG4ubG9naW5JbmZve1xuICBjb2xvcjogcmdiKDI0MiwgMjE3LCAxODQpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5cbi5sb2dpbi1idG57XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTlweDsgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIHRvcDogOTglO1xuICBsZWZ0OiAzNyU7ICBcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, formBuilder) {
                    this.authService = authService;
                    this.formBuilder = formBuilder;
                    this.formGroup = this.formBuilder.group({ username: [this.emptyStr, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: [this.emptyStr, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] });
                }
                LoginComponent.prototype.login = function () {
                    this.authService.login(this.formGroup.value.username, this.formGroup.value.password);
                };
                LoginComponent.prototype.ngOnInit = function () { };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/logout/logout.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/logout/logout.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".logout-btn{\n    background-color: black;\n    color: white;\n    font-family: \"Times New Roman\", Times, serif;\n    font-size: 19px; \n    position: absolute;\n    padding: 9px 20px;\n    transition: .5s ease;\n    top: 3%;\n    left: 70%;  \n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLE9BQU87SUFDUCxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0LWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE5cHg7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICB0b3A6IDMlO1xuICAgIGxlZnQ6IDcwJTsgIFxufVxuXG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/logout/logout.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/logout/logout.component.ts ***!
          \********************************************/
        /*! exports provided: LogoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () { return LogoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LogoutComponent = /** @class */ (function () {
                function LogoutComponent(myAuthService, router) {
                    this.myAuthService = myAuthService;
                    this.router = router;
                }
                LogoutComponent.prototype.logout = function () {
                    this.myAuthService.logout();
                    console.log("User logged out");
                    this.router.navigate(['/login']);
                };
                LogoutComponent.prototype.ngOnInit = function () {
                };
                return LogoutComponent;
            }());
            LogoutComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-logout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")).default]
                })
            ], LogoutComponent);
            /***/ 
        }),
        /***/ "./src/app/models/businesscard.model.ts": 
        /*!**********************************************!*\
          !*** ./src/app/models/businesscard.model.ts ***!
          \**********************************************/
        /*! exports provided: Businesscard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Businesscard", function () { return Businesscard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Businesscard = /** @class */ (function () {
                function Businesscard() {
                }
                return Businesscard;
            }());
            /***/ 
        }),
        /***/ "./src/app/newcard/newcard.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/newcard/newcard.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".submitBtn{\n  background-color: rgb(147, 102, 63);\n  color: white;\n  font-weight: normal;\n  border: 2px solid white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 19px; \n  position: relative;\n  padding: 9px 20px;\n  transition: .5s ease;\n  left: 35%;  \n  margin-top: 5%;\n  border-radius: 8px;\n}\n\n.submitBtn:hover{\n  background: rgb(238, 139, 16);\n  color: white;\n  }\n\n.newcard-form {\n  display: flex;\n  margin-top: 10px;\n  margin-left: 40px;\n  margin-right: 40px;\n}\n\n.newcardHeader {\n  position: absolute;\n  left: 23%;  \n  top: 5%;\n  color: white;\n  font-weight: normal;\n  font-size: 24px;\n  font-family: \"Times New Roman\", Times, serif; \n}\n\n.newcardForm {\n  position: relative;\n  background-color: black;\n  color: white;\n  left: 30%;  \n  top: 30%;\n  width: 500px;\n  height: 580px; \n  font-family: \"Times New Roman\", Times, serif;\n  border: 7px solid rgb(155, 114, 77);\n  padding: 20px;\n  margin: 20px;\n}\n\n.newcardField{\n  position: absolute;\n  left: 10%;  \n  top: 20%;\n  width: 300px;\n}\n\n.newcardError{\n  color: black;\n  font-size: 24px;\n  text-align: center;\n  margin-top: 3%;\n  font-weight: bold;\n  background-color: rgba(249, 188, 84, 0.899);\n}\n\n.newcardInfo{\n  color: rgb(242, 217, 184);\n  font-weight: bold;\n  font-size: 18px;\n\n}\n\n.newcard-btn{\n  background-color: black;\n  color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 19px; \n  position: absolute;\n  transition: .5s ease;\n  top: 98%;\n  left: 37%;  \n}\n\n.inputError{\n  color: rgb(255, 184, 61);\n  font-size: 18px;\n  text-align: center;\n  margin-top: 3%;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3Y2FyZC9uZXdjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1o7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0Q0FBNEM7QUFDOUM7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFHQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uZXdjYXJkL25ld2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXRCdG57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDEwMiwgNjMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDE5cHg7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDlweCAyMHB4O1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgbGVmdDogMzUlOyAgXG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdWJtaXRCdG46aG92ZXJ7XG4gIGJhY2tncm91bmQ6IHJnYigyMzgsIDEzOSwgMTYpO1xuICBjb2xvcjogd2hpdGU7XG4gIH1cblxuLm5ld2NhcmQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cblxuLm5ld2NhcmRIZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIzJTsgIFxuICB0b3A6IDUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjsgXG59XG5cblxuLm5ld2NhcmRGb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBsZWZ0OiAzMCU7ICBcbiAgdG9wOiAzMCU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1ODBweDsgXG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJvcmRlcjogN3B4IHNvbGlkIHJnYigxNTUsIDExNCwgNzcpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5uZXdjYXJkRmllbGR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlOyAgXG4gIHRvcDogMjAlO1xuICB3aWR0aDogMzAwcHg7XG59XG4ubmV3Y2FyZEVycm9ye1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAxODgsIDg0LCAwLjg5OSk7XG59XG5cbi5uZXdjYXJkSW5mb3tcbiAgY29sb3I6IHJnYigyNDIsIDIxNywgMTg0KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcblxufVxuXG5cbi5uZXdjYXJkLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxOXB4OyBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgdG9wOiA5OCU7XG4gIGxlZnQ6IDM3JTsgIFxufVxuXG5cbi5pbnB1dEVycm9ye1xuICBjb2xvcjogcmdiKDI1NSwgMTg0LCA2MSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/newcard/newcard.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/newcard/newcard.component.ts ***!
          \**********************************************/
        /*! exports provided: NewcardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcardComponent", function () { return NewcardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_businesscards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/businesscards.service */ "./src/app/services/businesscards.service.ts");
            /* harmony import */ var _models_businesscard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/businesscard.model */ "./src/app/models/businesscard.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NewcardComponent = /** @class */ (function () {
                function NewcardComponent(businessCardsService, router) {
                    this.businessCardsService = businessCardsService;
                    this.router = router;
                    this.newCard = new _models_businesscard_model__WEBPACK_IMPORTED_MODULE_3__["Businesscard"]();
                    this.isClicked = false;
                }
                NewcardComponent.prototype.addNewCard = function () {
                    this.toggleIsClick();
                    if (this.myForm.valid == true) {
                        this.businessCardsService.addNewCard(this.newCard);
                        alert("The new card has been added! You will be directed to My Business Card Page");
                        this.router.navigate(['/businessCards']);
                    }
                };
                NewcardComponent.prototype.toggleIsClick = function () {
                    this.isClicked = true;
                };
                NewcardComponent.prototype.ngOnInit = function () { };
                return NewcardComponent;
            }());
            NewcardComponent.ctorParameters = function () { return [
                { type: _services_businesscards_service__WEBPACK_IMPORTED_MODULE_2__["BusinesscardsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addNewCardForm', { static: true })
            ], NewcardComponent.prototype, "myForm", void 0);
            NewcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-newCard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newcard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/newcard/newcard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newcard.component.css */ "./src/app/newcard/newcard.component.css")).default]
                })
            ], NewcardComponent);
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthService = /** @class */ (function () {
                function AuthService(fireAuth, router) {
                    this.fireAuth = fireAuth;
                    this.router = router;
                    this.authState = fireAuth.authState;
                    this.myUser = "myUser";
                }
                AuthService.prototype.login = function (username, password) {
                    var _this = this;
                    this.fireAuth.auth.signInWithEmailAndPassword(username, password).then(function () {
                        _this.myUser = username;
                        _this.isNotMatched = false;
                        console.log("Signed-in sucessfully with " + _this.myUser);
                        localStorage.setItem('username', _this.myUser);
                        _this.router.navigate(['/home']);
                    }).catch(function (error) {
                        _this.isNotMatched = true;
                        console.log(error.message);
                    });
                };
                AuthService.prototype.getUsername = function () {
                    return this.myUser;
                };
                AuthService.prototype.getUser = function () {
                    //return null or username if successfully logged in
                    return localStorage.getItem('username');
                };
                AuthService.prototype.isAuthorized = function () {
                    return this.getUser() !== null;
                };
                AuthService.prototype.logout = function () {
                    console.log("Signed-out from " + this.myUser);
                    localStorage.removeItem('username');
                    this.fireAuth.auth.signOut();
                    this.router.navigate(['/login']);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/businesscards.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/services/businesscards.service.ts ***!
          \***************************************************/
        /*! exports provided: BusinesscardsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinesscardsService", function () { return BusinesscardsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var BusinesscardsService = /** @class */ (function () {
                function BusinesscardsService(angularFirestore) {
                    this.angularFirestore = angularFirestore;
                    this.myCardsContainer = angularFirestore.collection('businesscards');
                }
                BusinesscardsService.prototype.getMyCardUUID = function () {
                    return this.cardUUID;
                };
                BusinesscardsService.prototype.getMyCardsContainers = function () {
                    return this.myCardsContainer;
                };
                BusinesscardsService.prototype.addNewCard = function (newCard) {
                    this.cardUUID = this.angularFirestore.createId();
                    console.log("My new card ID: " + this.cardUUID);
                    newCard.cardIndex = this.cardUUID;
                    return this.myCardsContainer.doc(this.cardUUID).set(Object.assign({}, newCard));
                };
                BusinesscardsService.prototype.removeMyCard = function (selectedCard, cardID) {
                    console.log("[Service REMOVED] Card ID#: " + cardID);
                    return this.myCardsContainer.doc(cardID).delete();
                };
                BusinesscardsService.prototype.clearAllCards = function (cardLists) {
                    console.log("[Service CLEARED ALL CARDS]");
                    var item = 0;
                    for (var _i = 0, cardLists_1 = cardLists; _i < cardLists_1.length; _i++) {
                        var bc = cardLists_1[_i];
                        this.removeMyCard(bc, bc.cardIndex);
                        item++;
                    }
                    console.log("[Service] Total Removed Cards : " + item);
                    return cardLists;
                };
                BusinesscardsService.prototype.updateMyCard = function (selectedCard, cardID) {
                    console.log("[Service UPDATED] Card ID#: " + cardID);
                    return this.myCardsContainer.doc(cardID).update(selectedCard);
                };
                return BusinesscardsService;
            }());
            BusinesscardsService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
            ]; };
            BusinesscardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BusinesscardsService);
            /***/ 
        }),
        /***/ "./src/app/services/webcam.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/webcam.service.ts ***!
          \********************************************/
        /*! exports provided: WebcamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamService", function () { return WebcamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var WebcamService = /** @class */ (function () {
                function WebcamService(http) {
                    this.http = http;
                    this.url = "https://vision.googleapis.com/v1/images:annotate?key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["firebase"];
                }
                WebcamService.prototype.getImageDataFromWebcam = function (snapshot) {
                    var inputImage = snapshot.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
                    return this.http.post(this.url, { requests: [{ image: { content: inputImage },
                                features: [{ type: 'TEXT_DETECTION' }]
                            }] });
                };
                return WebcamService;
            }());
            WebcamService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            WebcamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], WebcamService);
            /***/ 
        }),
        /***/ "./src/app/userprofile/userProfile.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/userprofile/userProfile.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".profileHeaderBox {\n  position: relative;\n  background-color: rgb(241, 220, 201);\n  color: black;\n  left: 33%;  \n  top: 40%;\n  width: 400px;\n  height: 350px; \n  font-family: \"Times New Roman\", Times, serif;\n  border: 5px solid rgb(155, 114, 77);\n  padding: 20px;\n  margin: 20px;\n}\n.profileHeader {\n    position: relative;\n    left: 29%;  \n    top: 3%;\n    color: black;\n    font-weight: normal;\n    font-size: 32px;\n    font-family: \"Times New Roman\", Times, serif; \n  }\n.profileBox {\n    position: relative;\n    background-color: rgb(219, 126, 39);\n    color: white;\n    left: -12.8%;  \n    top: 8%;\n    width: 400px;\n    height: 130px; \n    font-family: \"Times New Roman\", Times, serif;\n    border: 7px solid rgb(155, 114, 77);\n    padding: 20px;\n    margin: 20px;\n  }\n.profileInfo{\n    position: relative;\n    top: 10%;\n    left: 8%; \n    font-weight: bold;\n    font-size: 19px; \n  }\n.profileImage{\n    position: relative;\n    top:5%;\n    left: 27%; \n  \n  }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlclByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDRDQUE0QztFQUM5QztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osWUFBWTtJQUNaLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLFlBQVk7RUFDZDtBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUzs7RUFFWCIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJQcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUhlYWRlckJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjIwLCAyMDEpO1xuICBjb2xvcjogYmxhY2s7XG4gIGxlZnQ6IDMzJTsgIFxuICB0b3A6IDQwJTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDM1MHB4OyBcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDE1NSwgMTE0LCA3Nyk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5wcm9maWxlSGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjklOyAgXG4gICAgdG9wOiAzJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjsgXG4gIH1cblxuICAucHJvZmlsZUJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEyNiwgMzkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZWZ0OiAtMTIuOCU7ICBcbiAgICB0b3A6IDglO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDEzMHB4OyBcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIGJvcmRlcjogN3B4IHNvbGlkIHJnYigxNTUsIDExNCwgNzcpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gXG4gXG4gIC5wcm9maWxlSW5mb3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogOCU7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTlweDsgXG4gIH1cbiAgLnByb2ZpbGVJbWFnZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOjUlO1xuICAgIGxlZnQ6IDI3JTsgXG4gIFxuICB9XG4gIl19 */");
            /***/ 
        }),
        /***/ "./src/app/userprofile/userprofile.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/userprofile/userprofile.component.ts ***!
          \******************************************************/
        /*! exports provided: UserprofileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function () { return UserprofileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var UserprofileComponent = /** @class */ (function () {
                function UserprofileComponent(authService) {
                    this.authService = authService;
                    this.userEmail = authService.getUsername();
                }
                UserprofileComponent.prototype.ngOnInit = function () {
                };
                return UserprofileComponent;
            }());
            UserprofileComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-userProfile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userProfile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userProfile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userProfile.component.css */ "./src/app/userprofile/userProfile.component.css")).default]
                })
            ], UserprofileComponent);
            /***/ 
        }),
        /***/ "./src/app/webcam/webcam.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/webcam/webcam.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".myImage{\n  position: absolute;\n  left: 5%; \n}\n\n\n\n\n\n\n\n.camera-btn{\n  background: rgb(250, 201, 3);\n  color: black;\n  border: 7px solid rgba(0, 0, 0, 0.817);\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 19px; \n  position: absolute;\n  transition: .5s ease;\n  left: 115%;  \n  top: 110%;\n  width: 140px;\n  height: 150px;\n  border-radius: 8px;\n}\n\n\n\n\n\n\n\n.camera-btn:hover{\n  background: rgb(51, 245, 74);\n  color: black;\n  border: 7px solid black;\n \n  }\n\n\n\n\n\n\n\n.okBtn{\n  background-color: rgb(100, 171, 0);\n  color: white;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n  border: 4px solid rgb(61, 103, 3);\n  font-weight: bold;\n  font-size: 15px; \n  position: absolute;\n  padding: 9px 20px;\n  transition: .5s ease;\n  left: 20%;\n  top: 150%;\n  border-radius: 8px;\n}\n\n\n\n\n\n\n\n.okBtn:hover{\n  background: white;\n  color: rgb(100, 171, 0);\n  }\n\n\n\n\n\n\n\n.retakeBtn{\n  background-color: rgb(179, 5, 5);\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  border: 4px solid rgb(114, 2, 2);\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 15px; \n  position: absolute;\n  padding: 9px 22px;\n  transition: .5s ease;\n  left: 53%;\n  top: 150%;\n  border-radius: 8px;\n}\n\n\n\n\n\n\n\n.retakeBtn:hover{\n  background: white;\n  color: rgb(179, 5, 5);\n  }\n\n\n\n\n\n\n\n.snapshot img {\n   width: 515px;\n   height: 290px;\n}\n\n\n\n\n\n\n\n.snapshot-button{\n  width:500px;\n}\n\n\n\n\n\n\n\n@media only screen and (max-width: 900px) {\n    webcam {\n      margin-left: -80px;\n    }\n    .snapshot-button {\n      margin-left: -80px;\n    }\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY2FtL3dlYmNhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7Ozs7Ozs7QUFRQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7Ozs7Ozs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osdUJBQXVCOztFQUV2Qjs7Ozs7Ozs7QUFFRjtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7Ozs7Ozs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkI7Ozs7Ozs7O0FBRUY7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7Ozs7Ozs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCOzs7Ozs7OztBQUdGO0dBQ0csWUFBWTtHQUNaLGFBQWE7QUFDaEI7Ozs7Ozs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7Ozs7Ozs7O0FBR0E7SUFDSTtNQUNFLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0Usa0JBQWtCO0lBQ3BCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWJjYW0vd2ViY2FtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlJbWFnZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTsgXG59XG5cblxuXG5cblxuXG5cbi5jYW1lcmEtYnRue1xuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyMDEsIDMpO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogN3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44MTcpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTlweDsgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIGxlZnQ6IDExNSU7ICBcbiAgdG9wOiAxMTAlO1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNhbWVyYS1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQ6IHJnYig1MSwgMjQ1LCA3NCk7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiA3cHggc29saWQgYmxhY2s7XG4gXG4gIH1cblxuLm9rQnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxNzEsIDApO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiKDYxLCAxMDMsIDMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4OyBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA5cHggMjBweDtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIGxlZnQ6IDIwJTtcbiAgdG9wOiAxNTAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5va0J0bjpob3ZlcntcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2IoMTAwLCAxNzEsIDApO1xuICB9XG5cbi5yZXRha2VCdG57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDUsIDUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYigxMTQsIDIsIDIpO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDlweCAyMnB4O1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgbGVmdDogNTMlO1xuICB0b3A6IDE1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnJldGFrZUJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2IoMTc5LCA1LCA1KTtcbiAgfVxuXG5cbi5zbmFwc2hvdCBpbWcge1xuICAgd2lkdGg6IDUxNXB4O1xuICAgaGVpZ2h0OiAyOTBweDtcbn1cblxuLnNuYXBzaG90LWJ1dHRvbntcbiAgd2lkdGg6NTAwcHg7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIHdlYmNhbSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gICAgfVxuICAgIC5zbmFwc2hvdC1idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICAgIH1cbiAgfVxuXG4gICJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/webcam/webcam.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/webcam/webcam.component.ts ***!
          \********************************************/
        /*! exports provided: WebCamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebCamComponent", function () { return WebCamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
            /* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _services_webcam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/webcam.service */ "./src/app/services/webcam.service.ts");
            var WebCamComponent = /** @class */ (function () {
                function WebCamComponent(router, webcamService) {
                    this.router = router;
                    this.webcamService = webcamService;
                    this.snapshot = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.snaptext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.myWebcamPic = null;
                    this.mysnapshot = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                WebCamComponent.prototype.retakePhoto = function () {
                    this.myWebcamPic = null;
                };
                WebCamComponent.prototype.takeSnapShot = function () {
                    this.mysnapshot.next();
                };
                WebCamComponent.prototype.getMyImage = function (webcamImage) {
                    this.myWebcamPic = webcamImage;
                };
                WebCamComponent.prototype.getImageError = function (err) {
                    if (err.mediaStreamError) {
                        if (err.mediaStreamError.name === 'NotAllowedError') {
                            console.log('Webcam prohibited by user');
                        }
                    }
                };
                //Codes are modified from https://www.npmjs.com/package/dom-to-image-more
                WebCamComponent.prototype.detectTextImage = function () {
                    var _this = this;
                    dom_to_image__WEBPACK_IMPORTED_MODULE_4___default.a.toPng(document.getElementById('image')).then(function (src) {
                        _this.snapshot.emit(src);
                        _this.webcamService.getImageDataFromWebcam(src).subscribe(function (output) {
                            _this.snaptext.emit(output);
                        });
                        alert("Text Detection Fails!");
                    });
                };
                Object.defineProperty(WebCamComponent.prototype, "observeSnapShot", {
                    get: function () {
                        return this.mysnapshot.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                WebCamComponent.prototype.ngOnInit = function () { };
                return WebCamComponent;
            }());
            WebCamComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_webcam_service__WEBPACK_IMPORTED_MODULE_5__["WebcamService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WebCamComponent.prototype, "snapshot", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WebCamComponent.prototype, "snaptext", void 0);
            WebCamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-webcam',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./webcam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/webcam/webcam.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./webcam.component.css */ "./src/app/webcam/webcam.component.css")).default]
                })
            ], WebCamComponent);
            /***/ 
        }),
        /***/ "./src/app/webcampage/webcampage.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/webcampage/webcampage.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".imageHeaderBox {\n    position: relative;\n    background-color: rgb(241, 220, 201);\n    color: black;\n    left: 95%;  \n    width: 350px;\n    height: 200px; \n    font-family: \"Times New Roman\", Times, serif;\n    border: 5px solid rgb(155, 114, 77);\n    padding: 20px;\n    margin: 20px;\n  }\n.cardHeader {\n    position: absolute;\n    left: 15%;  \n    top: 12%;\n    color: black;\n    font-weight: normal;\n    font-size: 23px;\n    font-family: \"Times New Roman\", Times, serif; \n  }\n.webcamBtn{\n    background-color: black;\n    color: white;\n    font-family: \"Times New Roman\", Times, serif;\n    font-size: 16px; \n    position: absolute;\n    padding: 9px 15px;\n    transition: .5s ease;\n    left: 32%;  \n    top: 37%;\n    border-radius: 8px;\n}\n.webcamBtn:hover{\n  background-color: rgb(155, 114, 77);\n}\n.stopwebcamBtn{\n  background-color: black;\n  color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 16px; \n  position: absolute;\n  padding: 9px 15px;\n  transition: .5s ease;\n  left:32%; \n  align-self: right;\n  bottom: 9%;\n  border-radius: 8px;\n}\n.stopwebcamBtn:hover{\n  background-color: rgb(155, 114, 77);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY2FtcGFnZS93ZWJjYW1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDRDQUE0QztFQUM5QztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCO0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osNENBQTRDO0VBQzVDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3dlYmNhbXBhZ2Uvd2ViY2FtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlSGVhZGVyQm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjIwLCAyMDEpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsZWZ0OiA5NSU7ICBcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDsgXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTU1LCAxMTQsIDc3KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuLmNhcmRIZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNSU7ICBcbiAgICB0b3A6IDEyJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjsgXG4gIH1cblxuICAud2ViY2FtQnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDlweCAxNXB4O1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIGxlZnQ6IDMyJTsgIFxuICAgIHRvcDogMzclO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLndlYmNhbUJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSwgMTE0LCA3Nyk7XG59XG5cbi5zdG9wd2ViY2FtQnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgbGVmdDozMiU7IFxuICBhbGlnbi1zZWxmOiByaWdodDtcbiAgYm90dG9tOiA5JTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc3RvcHdlYmNhbUJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSwgMTE0LCA3Nyk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/webcampage/webcampage.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/webcampage/webcampage.component.ts ***!
          \****************************************************/
        /*! exports provided: WebcampageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcampageComponent", function () { return WebcampageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_businesscard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/businesscard.model */ "./src/app/models/businesscard.model.ts");
            var WebcampageComponent = /** @class */ (function () {
                function WebcampageComponent() {
                }
                WebcampageComponent.prototype.setImage = function (snapshot) { this.businessCard.image = snapshot; };
                WebcampageComponent.prototype.getImage = function (snapshot) { return snapshot; };
                WebcampageComponent.prototype.getTextImage = function (snapText) { };
                WebcampageComponent.prototype.openWebcam = function () {
                    this.isWebcamON = !this.isWebcamON;
                    console.log("Webcam is ON: " + this.isWebcamON);
                    this.businessCard = new _models_businesscard_model__WEBPACK_IMPORTED_MODULE_2__["Businesscard"]();
                };
                WebcampageComponent.prototype.ngOnInit = function () {
                    this.isWebcamON = false;
                };
                return WebcampageComponent;
            }());
            WebcampageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-webcampage',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./webcampage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/webcampage/webcampage.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./webcampage.component.css */ "./src/app/webcampage/webcampage.component.css")).default]
                })
            ], WebcampageComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment, firebase, googleApi */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function () { return firebase; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleApi", function () { return googleApi; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var environment = {
                production: false
            };
            var firebase = {
                apiKey: "AIzaSyAWkEEbew1CQl1kh0WG7I96XIa2crlWho8",
                authDomain: "businesscard-71592.firebaseapp.com",
                databaseURL: "https://businesscard-71592.firebaseio.com",
                projectId: "businesscard-71592",
                storageBucket: "businesscard-71592.appspot.com",
                messagingSenderId: "597572140966",
            };
            var googleApi = {
                key: 'AIzaSyBby6pLqEOiul44__X2MGZsNXF9SzzlQEE'
            };
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/amy_a/Desktop/BusinessCard_Final/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map