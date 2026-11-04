(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\magna\Documents\Runescape implings\impling-finder\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _areas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./areas */ "y4ke");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AppComponent_section_16_ng_container_8_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r12 = ctx.$implicit;
    const t_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r12.value)("selected", s_r12.value === (ctx_r11.settings.sounds[t_r10.id] || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r12.label, " ");
} }
function AppComponent_section_16_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_section_16_ng_container_8_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const t_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.toggleType(t_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_section_16_ng_container_8_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const t_r10 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.setSound(t_r10.id, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_section_16_ng_container_8_option_7_Template, 2, 3, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "text--" + t_r10.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", !ctx_r8.isHidden(t_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.soundOptions);
} }
function AppComponent_section_16_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r17 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", o_r17.value)("selected", o_r17.value === ctx_r9.settings.minTier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", o_r17.label, " ");
} }
function AppComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Impling");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Alert sound");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_section_16_ng_container_8_Template, 8, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Include Puro-Puro spawns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_section_16_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.togglePuro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Minimum tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_section_16_Template_select_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.setMinTier($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_section_16_option_19_Template, 2, 3, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.filterTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.settings.showPuro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.tierOptions);
} }
function AppComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Click anywhere on the page to allow alert sounds. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Desktop notifications are blocked for this site in your browser settings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading spawns\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_19_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No spawns match your filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_19_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No implings spotted in the last 10 minutes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_19_ng_container_1_Template, 2, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_19_ng_container_2_Template, 2, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_19_ng_container_3_Template, 2, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.connection !== "live");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.connection === "live" && ctx_r3.hasReports());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.connection === "live" && !ctx_r3.hasReports());
} }
function AppComponent_li_21_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_li_21_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Reported " + s_r24.count + " times");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00D7", s_r24.count, "");
} }
function AppComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_21_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const s_r24 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.select(s_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_li_21_span_4_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_li_21_span_5_Template, 2, 2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_21_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const s_r24 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.copyWorld(s_r24, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r24 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx_r4.isSelected(s_r24) ? 1 : ctx_r4.fade(s_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sighting--selected", ctx_r4.isSelected(s_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "sighting--" + s_r24.type.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r24.type.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isNew(s_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r24.count > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("W", s_r24.latest.world, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.copiedKey === s_r24.key ? "\u2713" : "\u29C9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r24.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.age(s_r24.seenAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", s_r24.latest.xcoord, ", ", s_r24.latest.ycoord, "");
} }
function AppComponent_ng_container_23_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "crosshair--" + ctx_r32.selected.type.slug);
} }
function AppComponent_ng_container_23_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_23_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.recenterMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2316 Back to impling");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "iframe", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function AppComponent_ng_container_23_Template_iframe_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.onMapLoad(_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_ng_container_23_div_4_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_ng_container_23_button_5_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "footer", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Open in new tab \u2197");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.mapUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.mapMoved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.mapMoved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "text--" + ctx_r5.selected.type.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.selected.type.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("W", ctx_r5.selected.latest.world, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", ctx_r5.selected.area, " \u00B7 ", ctx_r5.selected.latest.xcoord, ", ", ctx_r5.selected.latest.ycoord, " \u00B7 ", ctx_r5.age(ctx_r5.selected.seenAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r5.getMapUrl(ctx_r5.selected.latest), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AppComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select a spawn to see it on the map.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
// Same read endpoint and publishable key the ImplingFinderRT RuneLite plugin
// uses. It only returns sightings from the last 10 minutes.
const API_URL = 'https://zoorgufqkavyngfhucgc.supabase.co/functions/v1/get-implings';
const API_KEY = 'sb_publishable_QPK-l1a9QAakMIHPrCDCQQ_sY-quMIT';
const POLL_MS = 8000;
const NEW_BADGE_MS = 15000;
const MERGE_DISTANCE = 30; // tiles
const MERGE_GAP_MS = 10 * 60 * 1000;
const SETTINGS_KEY = 'impling-finder-settings';
const BASE_TITLE = 'Impling Finder';
const TYPES = [
    { id: 1635, name: 'Baby', slug: 'baby', tier: 1 },
    { id: 1636, name: 'Young', slug: 'young', tier: 2 },
    { id: 1637, name: 'Gourmet', slug: 'gourmet', tier: 3 },
    { id: 1638, name: 'Earth', slug: 'earth', tier: 4 },
    { id: 1639, name: 'Essence', slug: 'essence', tier: 5 },
    { id: 1640, name: 'Eclectic', slug: 'eclectic', tier: 6 },
    { id: 1641, name: 'Nature', slug: 'nature', tier: 7 },
    { id: 1642, name: 'Magpie', slug: 'magpie', tier: 8 },
    { id: 1643, name: 'Ninja', slug: 'ninja', tier: 9 },
    { id: 8741, name: 'Crystal', slug: 'crystal', tier: 10 },
    { id: 1644, name: 'Dragon', slug: 'dragon', tier: 11 },
    { id: 7233, name: 'Lucky', slug: 'lucky', tier: 12 },
];
// Each impling type has more than one NPC id (e.g. 1652 is also a Magpie, and
// Crystal implings have a variant per jar colour). Map them all to the ids
// above so filters, sounds and colours work for every variant.
function normalize(i) {
    let npcid = i.npcid;
    if (npcid >= 1645 && npcid <= 1654)
        npcid -= 10;
    else if (npcid === 7302)
        npcid = 7233;
    else if (npcid >= 8742 && npcid <= 8757)
        npcid = 8741;
    return Object.assign(Object.assign({}, i), { npcid });
}
const DEFAULT_SETTINGS = {
    hiddenIds: [],
    showPuro: true,
    minTier: 0,
    sounds: { 1644: 'impling', 7233: 'impling' },
    alertsEnabled: false,
};
class AppComponent {
    constructor(http, sanitizer, title) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.title = title;
        this.filterTypes = TYPES.filter((t) => [1642, 1643, 8741, 1644, 7233].includes(t.id));
        this.tierOptions = [
            { value: 0, label: 'All implings' },
            { value: 8, label: 'Magpie and above' },
            { value: 9, label: 'Ninja and above' },
            { value: 10, label: 'Crystal and above' },
            { value: 11, label: 'Dragon and above' },
        ];
        this.soundOptions = [
            { value: '', label: 'No sound' },
            { value: 'impling', label: 'Impling!' },
            { value: 'whistle', label: 'Whistle' },
            { value: 'iphone', label: 'iPhone' },
        ];
        this.settings = this.loadSettings();
        this.showSettings = false;
        this.connection = 'connecting';
        this.lastUpdate = 0;
        this.now = Date.now();
        this.sightings = [];
        this.selected = null;
        this.mapUrl = null;
        this.mapMoved = false;
        this.mapLoading = false;
        this.copiedKey = null;
        this.audioUnlocked = false;
        this.reports = [];
        this.firstSeen = new Map();
        this.loading = false;
        this.unread = 0;
        this.unreadName = '';
        this.unreadNpc = 0;
        this.timers = [];
    }
    ngOnInit() {
        this.fetch();
        this.timers.push(window.setInterval(() => this.fetch(), POLL_MS), window.setInterval(() => (this.now = Date.now()), 1000));
    }
    ngOnDestroy() {
        this.timers.forEach((t) => clearInterval(t));
    }
    // --- Data -------------------------------------------------------------
    fetch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loading)
                return;
            this.loading = true;
            try {
                const data = yield this.http
                    .get(API_URL, {
                    headers: { apikey: API_KEY, Authorization: `Bearer ${API_KEY}` },
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(10000))
                    .toPromise();
                this.onReports((Array.isArray(data) ? data : []).map(normalize));
                this.connection = 'live';
                this.lastUpdate = Date.now();
            }
            catch (e) {
                this.connection = 'error';
            }
            finally {
                this.loading = false;
            }
        });
    }
    onReports(items) {
        const firstLoad = this.firstSeen.size === 0 && this.reports.length === 0;
        const now = Date.now();
        const fresh = [];
        for (const item of items) {
            const key = this.reportKey(item);
            if (this.firstSeen.has(key))
                continue;
            // Reports already in the feed on page load are not "new".
            this.firstSeen.set(key, firstLoad ? 0 : now);
            if (!firstLoad)
                fresh.push(item);
        }
        this.reports = items;
        this.rebuild();
        if (!this.selected && this.sightings.length) {
            this.select(this.sightings[0]);
        }
        const alerting = fresh.filter((i) => this.isVisible(i));
        if (alerting.length)
            this.alert(alerting);
    }
    reportKey(i) {
        return `${i.discoveredtime}-${i.world}-${i.xcoord}-${i.ycoord}`;
    }
    seenAt(i) {
        return i.discoveredtime * 1000;
    }
    rebuild() {
        const unique = new Map();
        this.reports
            .filter((i) => this.isVisible(i))
            .forEach((i) => unique.set(this.reportKey(i), i));
        const sorted = [...unique.values()].sort((a, b) => this.seenAt(b) - this.seenAt(a));
        // Walk newest to oldest, chaining each report onto a sighting of the
        // same impling in the same world if it was recently seen nearby.
        const sightings = [];
        const tails = new Map();
        for (const report of sorted) {
            const match = sightings.find((s) => {
                const tail = tails.get(s);
                return (tail.npcid === report.npcid &&
                    tail.world === report.world &&
                    Math.abs(tail.xcoord - report.xcoord) <= MERGE_DISTANCE &&
                    Math.abs(tail.ycoord - report.ycoord) <= MERGE_DISTANCE &&
                    this.seenAt(tail) - this.seenAt(report) <= MERGE_GAP_MS);
            });
            if (match) {
                match.count++;
                match.reportKeys.push(this.reportKey(report));
                tails.set(match, report);
                continue;
            }
            const sighting = {
                key: this.reportKey(report),
                reportKeys: [this.reportKey(report)],
                latest: report,
                type: this.getType(report.npcid),
                area: Object(_areas__WEBPACK_IMPORTED_MODULE_3__["getAreaName"])(report.xcoord, report.ycoord),
                seenAt: this.seenAt(report),
                count: 1,
            };
            sightings.push(sighting);
            tails.set(sighting, report);
        }
        this.sightings = sightings;
    }
    getType(npcid) {
        return (TYPES.find((t) => t.id === npcid) || {
            id: npcid,
            name: `Impling ${npcid}`,
            slug: 'unknown',
            tier: 0,
        });
    }
    isVisible(i) {
        const type = this.getType(i.npcid);
        return (!this.settings.hiddenIds.includes(i.npcid) &&
            type.tier >= this.settings.minTier &&
            (this.settings.showPuro || !Object(_areas__WEBPACK_IMPORTED_MODULE_3__["isInPuro"])(i.xcoord, i.ycoord)));
    }
    // --- Feed display ----------------------------------------------------
    trackSighting(_, s) {
        return s.key;
    }
    isNew(s) {
        const seen = this.firstSeen.get(s.key);
        return !!seen && this.now - seen < NEW_BADGE_MS;
    }
    isSelected(s) {
        return !!this.selected && s.reportKeys.includes(this.selected.key);
    }
    age(ms) {
        return this.duration(this.now - ms) + ' ago';
    }
    duration(ms) {
        const s = Math.max(0, Math.floor(ms / 1000));
        if (s < 60)
            return `${s}s`;
        if (s < 3600)
            return `${Math.floor(s / 60)}m`;
        if (s < 86400)
            return `${Math.floor(s / 3600)}h`;
        return `${Math.floor(s / 86400)}d`;
    }
    // Fresh sightings are fully opaque and fade out until the API drops them
    // after 10 minutes.
    fade(s) {
        const minutes = (this.now - s.seenAt) / 60000;
        if (minutes <= 2)
            return 1;
        return Math.max(0.45, 1 - ((minutes - 2) / 8) * 0.55);
    }
    hasReports() {
        return this.reports.length > 0;
    }
    statusLabel() {
        if (this.connection === 'connecting')
            return 'Connecting…';
        if (this.connection === 'error')
            return 'Connection lost · retrying';
        return `Live · updated ${this.duration(this.now - this.lastUpdate)} ago`;
    }
    // --- Map ---------------------------------------------------------------
    select(s) {
        this.selected = s;
        this.recenterMap();
    }
    recenterMap() {
        if (!this.selected)
            return;
        this.mapMoved = false;
        this.mapLoading = true;
        // The cache-buster makes the iframe reload even if the URL is unchanged.
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.getMapUrl(this.selected.latest)}&t=${Date.now()}`);
    }
    // explv centres on a tile's corner; +0.5 centres on the tile itself so it
    // lines up with the crosshair.
    getMapUrl(i) {
        return `https://explv.github.io/?centreX=${i.xcoord + 0.5}&centreY=${i.ycoord + 0.5}&centreZ=${i.plane || 0}&zoom=11`;
    }
    // The map is cross-origin, so panning can't be observed directly. Clicking
    // into it moves focus to the iframe, which blurs this window: assume the
    // map may have moved and hide the crosshair.
    onBlur() {
        setTimeout(() => {
            if (!this.mapLoading && document.activeElement instanceof HTMLIFrameElement) {
                this.mapMoved = true;
            }
        });
    }
    // explv focuses itself when it starts up. Give focus back to this page so
    // the user's first real click into the map is still detected as a blur.
    onMapLoad(frame) {
        setTimeout(() => {
            if (document.activeElement === frame)
                frame.blur();
            this.mapLoading = false;
        }, 500);
    }
    copyWorld(s, event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.stopPropagation();
            try {
                yield navigator.clipboard.writeText(String(s.latest.world));
                this.copiedKey = s.key;
                setTimeout(() => {
                    if (this.copiedKey === s.key)
                        this.copiedKey = null;
                }, 1500);
            }
            catch (e) { }
        });
    }
    // --- Alerts ------------------------------------------------------------
    toggleAlerts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.settings.alertsEnabled = !this.settings.alertsEnabled;
            this.saveSettings();
            if (this.settings.alertsEnabled &&
                'Notification' in window &&
                Notification.permission === 'default') {
                yield Notification.requestPermission();
            }
        });
    }
    notificationsBlocked() {
        return 'Notification' in window && Notification.permission === 'denied';
    }
    alert(fresh) {
        const best = fresh.reduce((a, b) => this.getType(b.npcid).tier > this.getType(a.npcid).tier ? b : a);
        const bestType = this.getType(best.npcid);
        if (!document.hasFocus()) {
            this.unread += fresh.length;
            if (bestType.tier >= this.getType(this.unreadNpc).tier) {
                this.unreadName = bestType.name;
                this.unreadNpc = best.npcid;
            }
            this.title.setTitle(`(${this.unread}) ${this.unreadName}! · ${BASE_TITLE}`);
        }
        if (!this.settings.alertsEnabled)
            return;
        // Play the sound of the rarest new impling that has one.
        const withSound = fresh
            .filter((i) => this.settings.sounds[i.npcid])
            .sort((a, b) => this.getType(b.npcid).tier - this.getType(a.npcid).tier);
        if (withSound.length)
            this.playSound(this.settings.sounds[withSound[0].npcid]);
        if (!document.hasFocus() &&
            'Notification' in window &&
            Notification.permission === 'granted') {
            const sighting = this.sightings.find((s) => s.reportKeys.includes(this.reportKey(best)));
            const n = new Notification(`${bestType.name} impling · W${best.world}`, {
                body: `${Object(_areas__WEBPACK_IMPORTED_MODULE_3__["getAreaName"])(best.xcoord, best.ycoord)} (${best.xcoord}, ${best.ycoord})`,
                tag: this.reportKey(best),
            });
            n.onclick = () => {
                window.focus();
                if (sighting)
                    this.select(sighting);
                n.close();
            };
        }
    }
    onFocus() {
        this.unread = 0;
        this.unreadName = '';
        this.unreadNpc = 0;
        this.title.setTitle(BASE_TITLE);
    }
    // Browsers only allow audio after the user has interacted with the page.
    onUserGesture() {
        this.audioUnlocked = true;
    }
    playSound(sound) {
        if (!sound)
            return;
        const files = {
            impling: './assets/impling.m4a',
            whistle: './assets/whistle.mp3',
            iphone: './assets/iphone.mp3',
        };
        const audio = new Audio(files[sound]);
        audio.volume = 0.3;
        audio.play().catch(() => (this.audioUnlocked = false));
    }
    // --- Settings ----------------------------------------------------------
    isHidden(npcid) {
        return this.settings.hiddenIds.includes(npcid);
    }
    toggleType(npcid) {
        this.settings.hiddenIds = this.isHidden(npcid)
            ? this.settings.hiddenIds.filter((id) => id !== npcid)
            : [...this.settings.hiddenIds, npcid];
        this.onSettingsChange();
    }
    togglePuro() {
        this.settings.showPuro = !this.settings.showPuro;
        this.onSettingsChange();
    }
    setMinTier(value) {
        this.settings.minTier = Number(value);
        this.onSettingsChange();
    }
    setSound(npcid, sound) {
        this.settings.sounds = Object.assign(Object.assign({}, this.settings.sounds), { [npcid]: sound });
        this.saveSettings();
        this.playSound(sound);
    }
    onSettingsChange() {
        this.saveSettings();
        this.rebuild();
    }
    loadSettings() {
        try {
            const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
            return Object.assign(Object.assign({}, DEFAULT_SETTINGS), saved);
        }
        catch (e) {
            return Object.assign({}, DEFAULT_SETTINGS);
        }
    }
    saveSettings() {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function AppComponent_blur_HostBindingHandler() { return ctx.onBlur(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("focus", function AppComponent_focus_HostBindingHandler() { return ctx.onFocus(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("pointerdown", function AppComponent_pointerdown_HostBindingHandler() { return ctx.onUserGesture(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("keydown", function AppComponent_keydown_HostBindingHandler() { return ctx.onUserGesture(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 26, vars: 16, consts: [[1, "app"], [1, "topbar"], [1, "brand"], [1, "brand__mark"], [1, "status", 3, "ngClass"], [1, "status__dot"], [1, "topbar__actions"], [1, "btn", "btn--ghost", 3, "title", "click"], [1, "btn", "btn--ghost", 3, "click"], [1, "layout"], [1, "sidebar"], ["class", "settings", 4, "ngIf"], ["class", "notice", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "feed"], ["class", "sighting", 3, "ngClass", "sighting--selected", "opacity", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "map"], [4, "ngIf", "ngIfElse"], ["noMap", ""], [1, "settings"], [1, "settings__grid"], [1, "label"], [4, "ngFor", "ngForOf"], [1, "settings__row"], [1, "switch"], ["type", "checkbox", 3, "checked", "change"], [1, "select", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "name", 3, "ngClass"], [3, "value", "selected"], [1, "notice"], [1, "empty"], [4, "ngIf"], [1, "sighting", 3, "ngClass", "click"], [1, "sighting__row"], [1, "name"], ["class", "badge badge--new", 4, "ngIf"], ["class", "badge", 3, "title", 4, "ngIf"], [1, "sighting__world"], ["title", "Copy world number", 1, "copy", 3, "click"], [1, "sighting__row", "sighting__meta"], [1, "tabular"], [1, "sighting__coords", "tabular"], [1, "badge", "badge--new"], [1, "badge", 3, "title"], [1, "map__view"], ["title", "Impling location map", 1, "map__frame", 3, "src", "load"], ["frame", ""], ["class", "crosshair", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "btn btn--float", 3, "click", 4, "ngIf"], [1, "map__footer"], [1, "muted"], ["target", "_blank", "rel", "noopener", 1, "map__open", 3, "href"], ["aria-hidden", "true", 1, "crosshair", 3, "ngClass"], [1, "crosshair__tile"], [1, "btn", "btn--float", 3, "click"], [1, "map__empty"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u25C6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Impling Finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.toggleAlerts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.showSettings = !ctx.showSettings; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u2699 Filters & sounds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "aside", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppComponent_section_16_Template, 20, 3, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_div_17_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_div_18_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_div_19_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_li_21_Template, 19, 14, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AppComponent_ng_container_23_Template, 15, 11, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AppComponent_ng_template_24_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "status--" + ctx.connection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.statusLabel(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn--on", ctx.settings.alertsEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.settings.alertsEnabled ? "Turn off sounds and desktop notifications" : "Turn on sounds and desktop notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.settings.alertsEnabled ? "\uD83D\uDD14 Alerts on" : "\uD83D\uDD15 Enable alerts", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn--on", ctx.showSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.alertsEnabled && !ctx.audioUnlocked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.alertsEnabled && ctx.notificationsBlocked());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sightings.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sightings)("ngForTrackBy", ctx.trackSighting);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selected)("ngIfElse", _r6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n\n\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 0.75rem 1.25rem;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.brand[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--accent);\n  letter-spacing: 0.02em;\n}\n\n.brand__mark[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n\n.status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.2rem 0.75rem;\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  font-size: 0.85rem;\n  color: var(--muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.status__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--muted);\n}\n\n.status--live[_ngcontent-%COMP%]   .status__dot[_ngcontent-%COMP%] {\n  background: var(--ok);\n  box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.6);\n  animation: pulse 2s infinite;\n}\n\n.status--error[_ngcontent-%COMP%] {\n  color: var(--error);\n  border-color: var(--error);\n}\n\n.status--error[_ngcontent-%COMP%]   .status__dot[_ngcontent-%COMP%] {\n  background: var(--error);\n}\n\n@keyframes pulse {\n  70% {\n    box-shadow: 0 0 0 6px rgba(76, 175, 80, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);\n  }\n}\n\n.topbar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.9rem;\n  font: inherit;\n  font-size: 0.9rem;\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n\n.btn--on[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  background: rgba(212, 175, 55, 0.12);\n}\n\n\n\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 420px 1fr;\n  flex: 1;\n  min-height: 0;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1rem;\n  overflow-y: auto;\n  border-right: 1px solid var(--border);\n}\n\n\n\n.settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n}\n\n.settings__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 9rem;\n  align-items: center;\n  gap: 0.5rem 1rem;\n}\n\n.settings__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border);\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--muted);\n}\n\n.select[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.5rem;\n  font: inherit;\n  font-size: 0.9rem;\n  color: var(--text);\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 20px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--border);\n  border-radius: 999px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 14px;\n  height: 14px;\n  background: var(--text);\n  border-radius: 50%;\n  transition: transform 0.15s;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  background: var(--accent);\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::before {\n  transform: translateX(14px);\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    + span[_ngcontent-%COMP%] {\n  outline: 2px solid var(--accent);\n  outline-offset: 2px;\n}\n\n\n\n.notice[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  font-size: 0.85rem;\n  color: var(--muted);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n}\n\n.empty[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  text-align: center;\n  color: var(--muted);\n}\n\n\n\n.feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sighting[_ngcontent-%COMP%] {\n  --tier: var(--border);\n  padding: 0.6rem 0.8rem 0.6rem 1rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 4px solid var(--tier);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: opacity 0.5s, background 0.15s, border-color 0.15s;\n}\n\n.sighting[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n\n.sighting--selected[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border-color: var(--tier);\n  box-shadow: 0 0 0 1px var(--tier);\n}\n\n.sighting--magpie[_ngcontent-%COMP%] {\n  --tier: var(--magpie);\n}\n\n.sighting--ninja[_ngcontent-%COMP%] {\n  --tier: var(--ninja);\n}\n\n.sighting--crystal[_ngcontent-%COMP%] {\n  --tier: var(--crystal);\n}\n\n.sighting--dragon[_ngcontent-%COMP%] {\n  --tier: var(--dragon);\n}\n\n.sighting--lucky[_ngcontent-%COMP%] {\n  --tier: var(--lucky);\n}\n\n.sighting__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.sighting--dragon[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sighting--lucky[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sighting--crystal[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--tier);\n}\n\n.sighting__world[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 1.15rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.sighting__meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--muted);\n}\n\n.sighting__coords[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.text--dragon[_ngcontent-%COMP%] {\n  color: var(--dragon);\n}\n\n.text--lucky[_ngcontent-%COMP%] {\n  color: var(--lucky);\n}\n\n.text--crystal[_ngcontent-%COMP%] {\n  color: var(--crystal);\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--muted);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n}\n\n.badge--new[_ngcontent-%COMP%] {\n  color: #1a1611;\n  background: var(--accent);\n  border-color: var(--accent);\n}\n\n.copy[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  font-size: 0.95rem;\n  color: var(--muted);\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.copy[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n  border-color: var(--accent);\n}\n\n.tabular[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--muted);\n}\n\n\n\n.map[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.map__view[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-height: 0;\n}\n\n.map__frame[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: var(--bg);\n}\n\n\n\n.crosshair[_ngcontent-%COMP%] {\n  --tier: var(--accent);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 96px;\n  height: 96px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\n.crosshair--crystal[_ngcontent-%COMP%] {\n  --tier: var(--crystal);\n}\n\n.crosshair--dragon[_ngcontent-%COMP%] {\n  --tier: var(--dragon);\n}\n\n.crosshair--lucky[_ngcontent-%COMP%] {\n  --tier: var(--lucky);\n}\n\n\n\n.crosshair[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(var(--tier), var(--tier)) center top / 3px 26px no-repeat,\n    linear-gradient(var(--tier), var(--tier)) center bottom / 3px 26px no-repeat,\n    linear-gradient(var(--tier), var(--tier)) left center / 26px 3px no-repeat,\n    linear-gradient(var(--tier), var(--tier)) right center / 26px 3px no-repeat;\n  filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000);\n}\n\n.crosshair__tile[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 32px;\n  height: 32px;\n  transform: translate(-50%, -50%);\n  border: 2px solid var(--tier);\n  box-shadow: 0 0 0 1px #000, inset 0 0 0 1px #000;\n  animation: tile-pulse 1.6s ease-in-out infinite;\n}\n\n@keyframes tile-pulse {\n  50% {\n    transform: translate(-50%, -50%) scale(1.25);\n    opacity: 0.6;\n  }\n}\n\n.btn--float[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--surface);\n  border-color: var(--accent);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);\n}\n\n.btn--float[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n\n.map__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 1.25rem;\n  background: var(--surface);\n  border-top: 1px solid var(--border);\n}\n\n.map__open[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--accent);\n  text-decoration: none;\n}\n\n.map__open[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.map__empty[_ngcontent-%COMP%] {\n  margin: auto;\n  color: var(--muted);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQSw2RUFBNkU7O0FBRTdFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0NBQW9DO0FBQ3RDOztBQUVBLDZFQUE2RTs7QUFFN0U7RUFDRSxhQUFhO0VB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O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi8qIC0tLSBUb3AgYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4udG9wYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLmJyYW5kIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uYnJhbmRfX21hcmsge1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG5cbi5zdGF0dXMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjc1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4uc3RhdHVzX19kb3Qge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zdGF0dXMtLWxpdmUgLnN0YXR1c19fZG90IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tb2spO1xuICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoNzYsIDE3NSwgODAsIDAuNik7XG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG59XG5cbi5zdGF0dXMtLWVycm9yIHtcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvcik7XG59XG5cbi5zdGF0dXMtLWVycm9yIC5zdGF0dXNfX2RvdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDcwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNnB4IHJnYmEoNzYsIDE3NSwgODAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg3NiwgMTc1LCA4MCwgMCk7XG4gIH1cbn1cblxuLnRvcGJhcl9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjlyZW07XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMik7XG59XG5cbi5idG4tLW9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4xMik7XG59XG5cbi8qIC0tLSBMYXlvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MjBweCAxZnI7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4vKiAtLS0gU2V0dGluZ3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLnNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc2V0dGluZ3NfX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIDlyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtIDFyZW07XG59XG5cbi5zZXR0aW5nc19fcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4uc2VsZWN0IHtcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnN3aXRjaCBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLnN3aXRjaCBzcGFuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAzcHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cztcbn1cblxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XG59XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIHNwYW46OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcbn1cblxuLnN3aXRjaCBpbnB1dDpmb2N1cy12aXNpYmxlICsgc3BhbiB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4vKiAtLS0gTm90aWNlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLm5vdGljZSB7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuXG4uZW1wdHkge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLyogLS0tIEZlZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5mZWVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnNpZ2h0aW5nIHtcbiAgLS10aWVyOiB2YXIoLS1ib3JkZXIpO1xuICBwYWRkaW5nOiAwLjZyZW0gMC44cmVtIDAuNnJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS10aWVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgYmFja2dyb3VuZCAwLjE1cywgYm9yZGVyLWNvbG9yIDAuMTVzO1xufVxuXG4uc2lnaHRpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTIpO1xufVxuXG4uc2lnaHRpbmctLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aWVyKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXRpZXIpO1xufVxuXG4uc2lnaHRpbmctLW1hZ3BpZSB7XG4gIC0tdGllcjogdmFyKC0tbWFncGllKTtcbn1cbi5zaWdodGluZy0tbmluamEge1xuICAtLXRpZXI6IHZhcigtLW5pbmphKTtcbn1cbi5zaWdodGluZy0tY3J5c3RhbCB7XG4gIC0tdGllcjogdmFyKC0tY3J5c3RhbCk7XG59XG4uc2lnaHRpbmctLWRyYWdvbiB7XG4gIC0tdGllcjogdmFyKC0tZHJhZ29uKTtcbn1cbi5zaWdodGluZy0tbHVja3kge1xuICAtLXRpZXI6IHZhcigtLWx1Y2t5KTtcbn1cblxuLnNpZ2h0aW5nX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLnNpZ2h0aW5nLS1kcmFnb24gLm5hbWUsXG4uc2lnaHRpbmctLWx1Y2t5IC5uYW1lLFxuLnNpZ2h0aW5nLS1jcnlzdGFsIC5uYW1lIHtcbiAgY29sb3I6IHZhcigtLXRpZXIpO1xufVxuXG4uc2lnaHRpbmdfX3dvcmxkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLnNpZ2h0aW5nX19tZXRhIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4uc2lnaHRpbmdfX2Nvb3JkcyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udGV4dC0tZHJhZ29uIHtcbiAgY29sb3I6IHZhcigtLWRyYWdvbik7XG59XG4udGV4dC0tbHVja3kge1xuICBjb2xvcjogdmFyKC0tbHVja3kpO1xufVxuLnRleHQtLWNyeXN0YWwge1xuICBjb2xvcjogdmFyKC0tY3J5c3RhbCk7XG59XG5cbi5iYWRnZSB7XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYmFkZ2UtLW5ldyB7XG4gIGNvbG9yOiAjMWExNjExO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5jb3B5IHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb3B5OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi50YWJ1bGFyIHtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLm11dGVkIHtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLyogLS0tIE1hcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5tYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5tYXBfX3ZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5tYXBfX2ZyYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xufVxuXG4vKiBNYXJrcyB0aGUgY2VudHJlIHRpbGUgb2YgdGhlIG1hcCAoMzJweCA9IG9uZSBnYW1lIHRpbGUgYXQgem9vbSAxMSkuICovXG4uY3Jvc3NoYWlyIHtcbiAgLS10aWVyOiB2YXIoLS1hY2NlbnQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA5NnB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNyb3NzaGFpci0tY3J5c3RhbCB7XG4gIC0tdGllcjogdmFyKC0tY3J5c3RhbCk7XG59XG4uY3Jvc3NoYWlyLS1kcmFnb24ge1xuICAtLXRpZXI6IHZhcigtLWRyYWdvbik7XG59XG4uY3Jvc3NoYWlyLS1sdWNreSB7XG4gIC0tdGllcjogdmFyKC0tbHVja3kpO1xufVxuXG4vKiBGb3VyIHRpY2tzIHBvaW50aW5nIGF0IHRoZSB0aWxlLCB3aXRoIGEgZ2FwIHNvIHRoZSB0aWxlIHN0YXlzIHZpc2libGUuICovXG4uY3Jvc3NoYWlyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudCh2YXIoLS10aWVyKSwgdmFyKC0tdGllcikpIGNlbnRlciB0b3AgLyAzcHggMjZweCBuby1yZXBlYXQsXG4gICAgbGluZWFyLWdyYWRpZW50KHZhcigtLXRpZXIpLCB2YXIoLS10aWVyKSkgY2VudGVyIGJvdHRvbSAvIDNweCAyNnB4IG5vLXJlcGVhdCxcbiAgICBsaW5lYXItZ3JhZGllbnQodmFyKC0tdGllciksIHZhcigtLXRpZXIpKSBsZWZ0IGNlbnRlciAvIDI2cHggM3B4IG5vLXJlcGVhdCxcbiAgICBsaW5lYXItZ3JhZGllbnQodmFyKC0tdGllciksIHZhcigtLXRpZXIpKSByaWdodCBjZW50ZXIgLyAyNnB4IDNweCBuby1yZXBlYXQ7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDFweCAjMDAwKSBkcm9wLXNoYWRvdygwIDAgMXB4ICMwMDApO1xufVxuXG4uY3Jvc3NoYWlyX190aWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGllcik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwLCBpbnNldCAwIDAgMCAxcHggIzAwMDtcbiAgYW5pbWF0aW9uOiB0aWxlLXB1bHNlIDEuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgdGlsZS1wdWxzZSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4yNSk7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG59XG5cbi5idG4tLWZsb2F0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFyZW07XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ0bi0tZmxvYXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTIpO1xufVxuXG4ubWFwX19mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNnJlbSAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5tYXBfX29wZW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1hcF9fb3Blbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubWFwX19lbXB0eSB7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }]; }, { onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:blur']
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:focus']
        }], onUserGesture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:pointerdown']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:keydown']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "y4ke":
/*!**************************!*\
  !*** ./src/app/areas.ts ***!
  \**************************/
/*! exports provided: getAreaName, isInPuro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaName", function() { return getAreaName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInPuro", function() { return isInPuro; });
const AREAS = [
    { name: 'Puro-Puro', x1: 2557, x2: 2627, y1: 4287, y2: 4353 },
    { name: 'Zanaris', x1: 2370, x2: 2500, y1: 4400, y2: 4480 },
    { name: 'Prifddinas', x1: 3200, x2: 3330, y1: 5950, y2: 6150 },
    // Misthalin & Asgarnia
    { name: 'Lumbridge', x1: 3200, x2: 3260, y1: 3200, y2: 3260 },
    { name: 'Lumbridge Swamp', x1: 3135, x2: 3260, y1: 3140, y2: 3200 },
    { name: "Wizards' Tower", x1: 3090, x2: 3125, y1: 3140, y2: 3175 },
    { name: 'Draynor Village', x1: 3075, x2: 3125, y1: 3225, y2: 3285 },
    { name: 'Draynor Manor', x1: 3080, x2: 3130, y1: 3325, y2: 3380 },
    { name: 'Grand Exchange', x1: 3140, x2: 3190, y1: 3465, y2: 3515 },
    { name: 'Varrock', x1: 3175, x2: 3290, y1: 3375, y2: 3505 },
    { name: 'Barbarian Village', x1: 3070, x2: 3100, y1: 3400, y2: 3445 },
    { name: 'Edgeville', x1: 3075, x2: 3125, y1: 3465, y2: 3520 },
    { name: 'Al Kharid', x1: 3265, x2: 3330, y1: 3135, y2: 3215 },
    { name: 'Port Sarim', x1: 3010, x2: 3065, y1: 3170, y2: 3265 },
    { name: 'Rimmington', x1: 2930, x2: 2990, y1: 3190, y2: 3235 },
    { name: 'Falador', x1: 2935, x2: 3065, y1: 3305, y2: 3395 },
    { name: 'Taverley', x1: 2870, x2: 2940, y1: 3410, y2: 3490 },
    { name: 'Burthorpe', x1: 2880, x2: 2940, y1: 3520, y2: 3580 },
    { name: 'Entrana', x1: 2800, x2: 2870, y1: 3320, y2: 3390 },
    { name: 'Crandor', x1: 2820, x2: 2870, y1: 3220, y2: 3310 },
    // Kandarin
    { name: 'Catherby', x1: 2780, x2: 2830, y1: 3410, y2: 3460 },
    { name: "Seers' Village", x1: 2690, x2: 2750, y1: 3460, y2: 3500 },
    { name: 'Camelot', x1: 2740, x2: 2780, y1: 3470, y2: 3520 },
    { name: 'East Ardougne', x1: 2560, x2: 2700, y1: 3255, y2: 3340 },
    { name: 'West Ardougne', x1: 2430, x2: 2560, y1: 3270, y2: 3340 },
    { name: 'Yanille', x1: 2530, x2: 2620, y1: 3070, y2: 3110 },
    { name: 'Castle Wars', x1: 2430, x2: 2460, y1: 3080, y2: 3110 },
    { name: 'Tree Gnome Stronghold', x1: 2380, x2: 2500, y1: 3380, y2: 3520 },
    { name: 'Tree Gnome Village', x1: 2500, x2: 2560, y1: 3140, y2: 3190 },
    { name: 'Feldip Hills', x1: 2480, x2: 2640, y1: 2850, y2: 3000 },
    // Fremennik & islands
    { name: 'Rellekka', x1: 2610, x2: 2700, y1: 3630, y2: 3720 },
    { name: 'Fremennik Province', x1: 2600, x2: 2800, y1: 3550, y2: 3800 },
    { name: 'Lunar Isle', x1: 2050, x2: 2180, y1: 3840, y2: 3960 },
    { name: 'Miscellania', x1: 2490, x2: 2630, y1: 3830, y2: 3900 },
    { name: 'Neitiznot & Jatizso', x1: 2300, x2: 2440, y1: 3770, y2: 3830 },
    { name: 'Ape Atoll', x1: 2690, x2: 2810, y1: 2690, y2: 2810 },
    { name: 'Karamja', x1: 2740, x2: 2990, y1: 2880, y2: 3200 },
    { name: 'Isle of Souls', x1: 2050, x2: 2350, y1: 2800, y2: 3000 },
    { name: 'Tirannwn', x1: 2140, x2: 2380, y1: 3080, y2: 3330 },
    // Morytania
    { name: 'Canifis', x1: 3470, x2: 3520, y1: 3460, y2: 3510 },
    { name: 'Port Phasmatys', x1: 3650, x2: 3700, y1: 3460, y2: 3510 },
    { name: 'Mort Myre Swamp', x1: 3400, x2: 3520, y1: 3290, y2: 3450 },
    { name: 'Morytania', x1: 3390, x2: 3900, y1: 3150, y2: 3600 },
    { name: "Mos Le'Harmless", x1: 3640, x2: 3860, y1: 2920, y2: 3080 },
    { name: 'Fossil Island', x1: 3650, x2: 3850, y1: 3700, y2: 3900 },
    // Kharidian Desert
    { name: 'Pollnivneach', x1: 3330, x2: 3385, y1: 2940, y2: 3020 },
    { name: 'Nardah', x1: 3400, x2: 3450, y1: 2880, y2: 2930 },
    { name: 'Sophanem', x1: 3270, x2: 3330, y1: 2740, y2: 2810 },
    { name: 'Kharidian Desert', x1: 3150, x2: 3500, y1: 2750, y2: 3135 },
    { name: 'Wilderness', x1: 2944, x2: 3392, y1: 3520, y2: 3970 },
    // Zeah & Varlamore
    { name: 'Kourend Castle', x1: 1590, x2: 1690, y1: 3640, y2: 3700 },
    { name: 'Hosidius', x1: 1700, x2: 1850, y1: 3500, y2: 3650 },
    { name: 'Shayzien', x1: 1450, x2: 1560, y1: 3550, y2: 3650 },
    { name: 'Port Piscarilius', x1: 1750, x2: 1880, y1: 3650, y2: 3800 },
    { name: 'Arceuus', x1: 1600, x2: 1800, y1: 3700, y2: 3870 },
    { name: 'Lovakengj', x1: 1400, x2: 1600, y1: 3700, y2: 3900 },
    { name: 'Great Kourend', x1: 1350, x2: 1950, y1: 3450, y2: 3950 },
    { name: 'Kebos Lowlands', x1: 1150, x2: 1350, y1: 3550, y2: 3850 },
    { name: 'Civitas illa Fortis', x1: 1640, x2: 1800, y1: 3050, y2: 3170 },
    { name: 'Varlamore', x1: 1150, x2: 1950, y1: 2850, y2: 3450 },
];
function getAreaName(x, y) {
    const area = AREAS.find((a) => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2);
    if (area)
        return area.name;
    if (y >= 9000)
        return 'Underground';
    return 'Unknown area';
}
function isInPuro(x, y) {
    return x >= 2557 && x <= 2627 && y >= 4287 && y <= 4353;
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map