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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const t_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r13.value)("selected", s_r13.value === (ctx_r12.settings.sounds[t_r11.id] || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r13.label, " ");
} }
function AppComponent_section_16_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_section_16_ng_container_8_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const t_r11 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.toggleType(t_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_section_16_ng_container_8_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const t_r11 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.setSound(t_r11.id, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_section_16_ng_container_8_option_7_Template, 2, 3, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const t_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "text--" + t_r11.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", !ctx_r9.isHidden(t_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.soundOptions);
} }
function AppComponent_section_16_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r18 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", o_r18.value)("selected", o_r18.value === ctx_r10.settings.minTier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", o_r18.label, " ");
} }
function AppComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Impling");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Alert sound");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_section_16_ng_container_8_Template, 8, 4, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Include Puro-Puro spawns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_section_16_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.togglePuro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Minimum tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_section_16_Template_select_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.setMinTier($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_section_16_option_19_Template, 2, 3, "option", 28);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Click anywhere on the page to allow alert sounds. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Desktop notifications are blocked for this site in your browser settings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stale_r22 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" No new spawns reported for ", stale_r22, ". The data feed may be down. ");
} }
function AppComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.connection === "live" ? "No spawns match your filters." : "Loading spawns\u2026", " ");
} }
function AppComponent_li_22_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_li_22_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Reported " + s_r23.count + " times");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00D7", s_r23.count, "");
} }
function AppComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_22_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const s_r23 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.select(s_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_li_22_span_4_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_li_22_span_5_Template, 2, 2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_22_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const s_r23 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.copyWorld(s_r23, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r23 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx_r5.isSelected(s_r23) ? 1 : ctx_r5.fade(s_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sighting--selected", ctx_r5.isSelected(s_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "sighting--" + s_r23.type.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r23.type.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isNew(s_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r23.count > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("W", s_r23.latest.world, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.copiedKey === s_r23.key ? "\u2713" : "\u29C9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r23.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.age(s_r23.seenAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", s_r23.latest.xcoord, ", ", s_r23.latest.ycoord, "");
} }
function AppComponent_ng_container_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "crosshair--" + ctx_r31.selected.type.slug);
} }
function AppComponent_ng_container_24_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_24_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.recenterMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2316 Back to impling");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "iframe", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function AppComponent_ng_container_24_Template_iframe_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.onMapLoad(_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_ng_container_24_div_4_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_ng_container_24_button_5_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "footer", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Open in new tab \u2197");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.mapUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.mapMoved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.mapMoved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "text--" + ctx_r6.selected.type.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selected.type.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("W", ctx_r6.selected.latest.world, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", ctx_r6.selected.area, " \u00B7 ", ctx_r6.selected.latest.xcoord, ", ", ctx_r6.selected.latest.ycoord, " \u00B7 ", ctx_r6.age(ctx_r6.selected.seenAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r6.getMapUrl(ctx_r6.selected.latest), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AppComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select a spawn to see it on the map.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const API_URL = 'https://puos0bfgxc2lno5-implingdb.adb.us-phoenix-1.oraclecloudapps.com/ords/impling/implingdev/dev?limit=30';
const POLL_MS = 4000;
const NEW_BADGE_MS = 15000;
const STALE_MS = 30 * 60 * 1000;
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
                    .get(API_URL)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(10000))
                    .toPromise();
                this.onReports(data.items || []);
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
        return i.discoveredtime
            ? i.discoveredtime * 1000
            : Date.parse(i.insertedtime);
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
    // Fresh sightings are fully opaque and fade out over 30 minutes.
    fade(s) {
        const minutes = (this.now - s.seenAt) / 60000;
        if (minutes <= 2)
            return 1;
        return Math.max(0.45, 1 - ((minutes - 2) / 28) * 0.55);
    }
    staleFor() {
        if (this.connection !== 'live' || !this.reports.length)
            return null;
        const newest = Math.max(...this.reports.map((i) => this.seenAt(i)));
        const gap = this.now - newest;
        return gap > STALE_MS ? this.duration(gap) : null;
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
    } }, decls: 27, vars: 17, consts: [[1, "app"], [1, "topbar"], [1, "brand"], [1, "brand__mark"], [1, "status", 3, "ngClass"], [1, "status__dot"], [1, "topbar__actions"], [1, "btn", "btn--ghost", 3, "title", "click"], [1, "btn", "btn--ghost", 3, "click"], [1, "layout"], [1, "sidebar"], ["class", "settings", 4, "ngIf"], ["class", "notice", 4, "ngIf"], ["class", "notice notice--warn", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "feed"], ["class", "sighting", 3, "ngClass", "sighting--selected", "opacity", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "map"], [4, "ngIf", "ngIfElse"], ["noMap", ""], [1, "settings"], [1, "settings__grid"], [1, "label"], [4, "ngFor", "ngForOf"], [1, "settings__row"], [1, "switch"], ["type", "checkbox", 3, "checked", "change"], [1, "select", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "name", 3, "ngClass"], [3, "value", "selected"], [1, "notice"], [1, "notice", "notice--warn"], [1, "empty"], [1, "sighting", 3, "ngClass", "click"], [1, "sighting__row"], [1, "name"], ["class", "badge badge--new", 4, "ngIf"], ["class", "badge", 3, "title", 4, "ngIf"], [1, "sighting__world"], ["title", "Copy world number", 1, "copy", 3, "click"], [1, "sighting__row", "sighting__meta"], [1, "tabular"], [1, "sighting__coords", "tabular"], [1, "badge", "badge--new"], [1, "badge", 3, "title"], [1, "map__view"], ["title", "Impling location map", 1, "map__frame", 3, "src", "load"], ["frame", ""], ["class", "crosshair", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "btn btn--float", 3, "click", 4, "ngIf"], [1, "map__footer"], [1, "muted"], ["target", "_blank", "rel", "noopener", 1, "map__open", 3, "href"], ["aria-hidden", "true", 1, "crosshair", 3, "ngClass"], [1, "crosshair__tile"], [1, "btn", "btn--float", 3, "click"], [1, "map__empty"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_div_19_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AppComponent_li_22_Template, 19, 14, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AppComponent_ng_container_24_Template, 15, 11, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AppComponent_ng_template_25_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.staleFor());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sightings.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sightings)("ngForTrackBy", ctx.trackSighting);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selected)("ngIfElse", _r7);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n\n\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 0.75rem 1.25rem;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.brand[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--accent);\n  letter-spacing: 0.02em;\n}\n\n.brand__mark[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n\n.status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.2rem 0.75rem;\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  font-size: 0.85rem;\n  color: var(--muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.status__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--muted);\n}\n\n.status--live[_ngcontent-%COMP%]   .status__dot[_ngcontent-%COMP%] {\n  background: var(--ok);\n  box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.6);\n  animation: pulse 2s infinite;\n}\n\n.status--error[_ngcontent-%COMP%] {\n  color: var(--error);\n  border-color: var(--error);\n}\n\n.status--error[_ngcontent-%COMP%]   .status__dot[_ngcontent-%COMP%] {\n  background: var(--error);\n}\n\n@keyframes pulse {\n  70% {\n    box-shadow: 0 0 0 6px rgba(76, 175, 80, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);\n  }\n}\n\n.topbar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.9rem;\n  font: inherit;\n  font-size: 0.9rem;\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n\n.btn--on[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  background: rgba(212, 175, 55, 0.12);\n}\n\n\n\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 420px 1fr;\n  flex: 1;\n  min-height: 0;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1rem;\n  overflow-y: auto;\n  border-right: 1px solid var(--border);\n}\n\n\n\n.settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n}\n\n.settings__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 9rem;\n  align-items: center;\n  gap: 0.5rem 1rem;\n}\n\n.settings__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border);\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--muted);\n}\n\n.select[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.5rem;\n  font: inherit;\n  font-size: 0.9rem;\n  color: var(--text);\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 20px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--border);\n  border-radius: 999px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 14px;\n  height: 14px;\n  background: var(--text);\n  border-radius: 50%;\n  transition: transform 0.15s;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  background: var(--accent);\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::before {\n  transform: translateX(14px);\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    + span[_ngcontent-%COMP%] {\n  outline: 2px solid var(--accent);\n  outline-offset: 2px;\n}\n\n\n\n.notice[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  font-size: 0.85rem;\n  color: var(--muted);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n}\n\n.notice--warn[_ngcontent-%COMP%] {\n  color: var(--lucky);\n  border-color: rgba(250, 162, 0, 0.5);\n  background: rgba(250, 162, 0, 0.08);\n}\n\n.empty[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  text-align: center;\n  color: var(--muted);\n}\n\n\n\n.feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sighting[_ngcontent-%COMP%] {\n  --tier: var(--border);\n  padding: 0.6rem 0.8rem 0.6rem 1rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-left: 4px solid var(--tier);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: opacity 0.5s, background 0.15s, border-color 0.15s;\n}\n\n.sighting[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n\n.sighting--selected[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border-color: var(--tier);\n  box-shadow: 0 0 0 1px var(--tier);\n}\n\n.sighting--magpie[_ngcontent-%COMP%] {\n  --tier: var(--magpie);\n}\n\n.sighting--ninja[_ngcontent-%COMP%] {\n  --tier: var(--ninja);\n}\n\n.sighting--crystal[_ngcontent-%COMP%] {\n  --tier: var(--crystal);\n}\n\n.sighting--dragon[_ngcontent-%COMP%] {\n  --tier: var(--dragon);\n}\n\n.sighting--lucky[_ngcontent-%COMP%] {\n  --tier: var(--lucky);\n}\n\n.sighting__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.sighting--dragon[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sighting--lucky[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sighting--crystal[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--tier);\n}\n\n.sighting__world[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 1.15rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.sighting__meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--muted);\n}\n\n.sighting__coords[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.text--dragon[_ngcontent-%COMP%] {\n  color: var(--dragon);\n}\n\n.text--lucky[_ngcontent-%COMP%] {\n  color: var(--lucky);\n}\n\n.text--crystal[_ngcontent-%COMP%] {\n  color: var(--crystal);\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--muted);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n}\n\n.badge--new[_ngcontent-%COMP%] {\n  color: #1a1611;\n  background: var(--accent);\n  border-color: var(--accent);\n}\n\n.copy[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  font-size: 0.95rem;\n  color: var(--muted);\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.copy[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n  border-color: var(--accent);\n}\n\n.tabular[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--muted);\n}\n\n\n\n.map[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.map__view[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-height: 0;\n}\n\n.map__frame[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: var(--bg);\n}\n\n\n\n.crosshair[_ngcontent-%COMP%] {\n  --tier: var(--accent);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 96px;\n  height: 96px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\n.crosshair--crystal[_ngcontent-%COMP%] {\n  --tier: var(--crystal);\n}\n\n.crosshair--dragon[_ngcontent-%COMP%] {\n  --tier: var(--dragon);\n}\n\n.crosshair--lucky[_ngcontent-%COMP%] {\n  --tier: var(--lucky);\n}\n\n\n\n.crosshair[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(var(--tier), var(--tier)) center top / 3px 26px no-repeat,\n    linear-gradient(var(--tier), var(--tier)) center bottom / 3px 26px no-repeat,\n    linear-gradient(var(--tier), var(--tier)) left center / 26px 3px no-repeat,\n    linear-gradient(var(--tier), var(--tier)) right center / 26px 3px no-repeat;\n  filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000);\n}\n\n.crosshair__tile[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 32px;\n  height: 32px;\n  transform: translate(-50%, -50%);\n  border: 2px solid var(--tier);\n  box-shadow: 0 0 0 1px #000, inset 0 0 0 1px #000;\n  animation: tile-pulse 1.6s ease-in-out infinite;\n}\n\n@keyframes tile-pulse {\n  50% {\n    transform: translate(-50%, -50%) scale(1.25);\n    opacity: 0.6;\n  }\n}\n\n.btn--float[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--surface);\n  border-color: var(--accent);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);\n}\n\n.btn--float[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n\n.map__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 1.25rem;\n  background: var(--surface);\n  border-top: 1px solid var(--border);\n}\n\n.map__open[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--accent);\n  text-decoration: none;\n}\n\n.map__open[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.map__empty[_ngcontent-%COMP%] {\n  margin: auto;\n  color: var(--muted);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQSw2RUFBNkU7O0FBRTdFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0NBQW9DO0FBQ3RDOztBQUVBLDZFQUE2RTs7QUFFN0U7RUFDRSxhQUFhO0VB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QUFDakQ7O0FBRUE7RUFDRTtJQUNFLDRDQUE0QztJQUM1QyxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogLS0tIFRvcCBiYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi50b3BiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uYnJhbmQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5icmFuZF9fbWFyayB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cblxuLnN0YXR1cyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC4ycmVtIDAuNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbi5zdGF0dXNfX2RvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLW11dGVkKTtcbn1cblxuLnN0YXR1cy0tbGl2ZSAuc3RhdHVzX19kb3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vayk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg3NiwgMTc1LCA4MCwgMC42KTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuLnN0YXR1cy0tZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yKTtcbn1cblxuLnN0YXR1cy0tZXJyb3IgLnN0YXR1c19fZG90IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3IpO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgNzAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA2cHggcmdiYSg3NiwgMTc1LCA4MCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDc2LCAxNzUsIDgwLCAwKTtcbiAgfVxufVxuXG4udG9wYmFyX19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMC40cmVtIDAuOXJlbTtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0yKTtcbn1cblxuLmJ0bi0tb24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjEyKTtcbn1cblxuLyogLS0tIExheW91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQyMHB4IDFmcjtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLnNpZGViYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNzVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi8qIC0tLSBTZXR0aW5ncyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNzVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zZXR0aW5nc19fZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gOXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW0gMXJlbTtcbn1cblxuLnNldHRpbmdzX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zZWxlY3Qge1xuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc3dpdGNoIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uc3dpdGNoIHNwYW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzO1xufVxuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbn1cblxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgc3Bhbjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpO1xufVxuXG4uc3dpdGNoIGlucHV0OmZvY3VzLXZpc2libGUgKyBzcGFuIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi8qIC0tLSBOb3RpY2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubm90aWNlIHtcbiAgcGFkZGluZzogMC42cmVtIDAuOHJlbTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubm90aWNlLS13YXJuIHtcbiAgY29sb3I6IHZhcigtLWx1Y2t5KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1MCwgMTYyLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTYyLCAwLCAwLjA4KTtcbn1cblxuLmVtcHR5IHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIC0tLSBGZWVkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmVlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaWdodGluZyB7XG4gIC0tdGllcjogdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZzogMC42cmVtIDAuOHJlbSAwLjZyZW0gMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tdGllcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsIGJhY2tncm91bmQgMC4xNXMsIGJvcmRlci1jb2xvciAwLjE1cztcbn1cblxuLnNpZ2h0aW5nOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0yKTtcbn1cblxuLnNpZ2h0aW5nLS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGllcik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS10aWVyKTtcbn1cblxuLnNpZ2h0aW5nLS1tYWdwaWUge1xuICAtLXRpZXI6IHZhcigtLW1hZ3BpZSk7XG59XG4uc2lnaHRpbmctLW5pbmphIHtcbiAgLS10aWVyOiB2YXIoLS1uaW5qYSk7XG59XG4uc2lnaHRpbmctLWNyeXN0YWwge1xuICAtLXRpZXI6IHZhcigtLWNyeXN0YWwpO1xufVxuLnNpZ2h0aW5nLS1kcmFnb24ge1xuICAtLXRpZXI6IHZhcigtLWRyYWdvbik7XG59XG4uc2lnaHRpbmctLWx1Y2t5IHtcbiAgLS10aWVyOiB2YXIoLS1sdWNreSk7XG59XG5cbi5zaWdodGluZ19fcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5zaWdodGluZy0tZHJhZ29uIC5uYW1lLFxuLnNpZ2h0aW5nLS1sdWNreSAubmFtZSxcbi5zaWdodGluZy0tY3J5c3RhbCAubmFtZSB7XG4gIGNvbG9yOiB2YXIoLS10aWVyKTtcbn1cblxuLnNpZ2h0aW5nX193b3JsZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbi5zaWdodGluZ19fbWV0YSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnNpZ2h0aW5nX19jb29yZHMge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRleHQtLWRyYWdvbiB7XG4gIGNvbG9yOiB2YXIoLS1kcmFnb24pO1xufVxuLnRleHQtLWx1Y2t5IHtcbiAgY29sb3I6IHZhcigtLWx1Y2t5KTtcbn1cbi50ZXh0LS1jcnlzdGFsIHtcbiAgY29sb3I6IHZhcigtLWNyeXN0YWwpO1xufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nOiAwIDAuNHJlbTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJhZGdlLS1uZXcge1xuICBjb2xvcjogIzFhMTYxMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4uY29weSB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29weTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4udGFidWxhciB7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbi5tdXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIC0tLSBNYXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubWFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ubWFwX192aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG4ubWFwX19mcmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbn1cblxuLyogTWFya3MgdGhlIGNlbnRyZSB0aWxlIG9mIHRoZSBtYXAgKDMycHggPSBvbmUgZ2FtZSB0aWxlIGF0IHpvb20gMTEpLiAqL1xuLmNyb3NzaGFpciB7XG4gIC0tdGllcjogdmFyKC0tYWNjZW50KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jcm9zc2hhaXItLWNyeXN0YWwge1xuICAtLXRpZXI6IHZhcigtLWNyeXN0YWwpO1xufVxuLmNyb3NzaGFpci0tZHJhZ29uIHtcbiAgLS10aWVyOiB2YXIoLS1kcmFnb24pO1xufVxuLmNyb3NzaGFpci0tbHVja3kge1xuICAtLXRpZXI6IHZhcigtLWx1Y2t5KTtcbn1cblxuLyogRm91ciB0aWNrcyBwb2ludGluZyBhdCB0aGUgdGlsZSwgd2l0aCBhIGdhcCBzbyB0aGUgdGlsZSBzdGF5cyB2aXNpYmxlLiAqL1xuLmNyb3NzaGFpcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQodmFyKC0tdGllciksIHZhcigtLXRpZXIpKSBjZW50ZXIgdG9wIC8gM3B4IDI2cHggbm8tcmVwZWF0LFxuICAgIGxpbmVhci1ncmFkaWVudCh2YXIoLS10aWVyKSwgdmFyKC0tdGllcikpIGNlbnRlciBib3R0b20gLyAzcHggMjZweCBuby1yZXBlYXQsXG4gICAgbGluZWFyLWdyYWRpZW50KHZhcigtLXRpZXIpLCB2YXIoLS10aWVyKSkgbGVmdCBjZW50ZXIgLyAyNnB4IDNweCBuby1yZXBlYXQsXG4gICAgbGluZWFyLWdyYWRpZW50KHZhcigtLXRpZXIpLCB2YXIoLS10aWVyKSkgcmlnaHQgY2VudGVyIC8gMjZweCAzcHggbm8tcmVwZWF0O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxcHggIzAwMCkgZHJvcC1zaGFkb3coMCAwIDFweCAjMDAwKTtcbn1cblxuLmNyb3NzaGFpcl9fdGlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRpZXIpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMCwgaW5zZXQgMCAwIDAgMXB4ICMwMDA7XG4gIGFuaW1hdGlvbjogdGlsZS1wdWxzZSAxLjZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHRpbGUtcHVsc2Uge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuXG4uYnRuLS1mbG9hdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5idG4tLWZsb2F0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0yKTtcbn1cblxuLm1hcF9fZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjZyZW0gMS4yNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4ubWFwX19vcGVuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tYXBfX29wZW46aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm1hcF9fZW1wdHkge1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG4iXX0= */"] });
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