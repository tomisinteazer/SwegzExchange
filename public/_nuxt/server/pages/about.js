exports.ids = [1];
exports.modules = {

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7132a15d", content, true)

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
// Styles
 // Mixins


/* harmony default export */ __webpack_exports__["a"] = (_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-divider',
  props: {
    inset: Boolean,
    vertical: Boolean
  },

  render(h) {
    // WAI-ARIA attributes
    let orientation;

    if (!this.$attrs.role || this.$attrs.role === 'separator') {
      orientation = this.vertical ? 'vertical' : 'horizontal';
    }

    return h('hr', {
      class: {
        'v-divider': true,
        'v-divider--inset': this.inset,
        'v-divider--vertical': this.vertical,
        ...this.themeClasses
      },
      attrs: {
        role: 'separator',
        'aria-orientation': orientation,
        ...this.$attrs
      },
      on: this.$listeners
    });
  }

}));

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=1a3c864e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pb-6 pt-4 text-center"},[_c('v-container',[_c('div',{staticClass:"mb-10"},[_c('h1',{staticClass:"display-2 mb-6 text-uppercase primary--text"},[_vm._v("About us")]),_vm._v(" "),_c('div',{staticClass:"mx-auto text-left",staticStyle:{"max-width":"700px"}},[_c('p',{staticClass:"body-1 font-weight-bold"},[_vm._v("Acesworld Enterprise (formerly Aces Enterprise) is a financial solutions firm birthed on 2nd of October 2019. The brand in a bid to serve people better has been restructured and registered with the Corporate Affairs Commission (CAC) for ease of operations.")])]),_vm._v(" "),_c('h1',{staticClass:"display-1 mb-6 text-uppercase primary--text"},[_vm._v("WHO WE ARE")]),_vm._v(" "),_c('div',{staticClass:"mx-auto text-left",staticStyle:{"max-width":"700px"}},[_c('p',{staticClass:"body-1 font-weight-bold"},[_vm._v("\n          We are a registered Nigerian firm (RC: 3152773) with expertise and experience in finance. We deal majorly in the foreign exchange (forex) market and the cryptocurrency world. We are also in partnerships with prominent investment companies with the sole purpose of maximizing the benefits our investors relish.\n          With a dedicated team of experts, we are continuously working on better investment opportunities to enrich the lives of our investors\n        ")])]),_vm._v(" "),_c('h1',{staticClass:"display-1 mb-6 text-uppercase primary--text"},[_vm._v("What we offer")]),_vm._v(" "),_c('div',{staticClass:"mx-auto text-left",staticStyle:{"max-width":"700px"}},[_c('p',{staticClass:"body-1 font-weight-bold"},[_vm._v("An investment platform that gives people with little or no knowledge about the forex markets an opportunity to earn from it. Our investment platform offers monthly returns on any amount invested with us.")]),_vm._v(" "),_c('p',{staticClass:"body-1 font-weight-bold"},[_vm._v("A cryptocurrency exchange platform that offers value for virtual coins.")])])]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('div',{staticClass:"my-10"},[_c('h2',{staticClass:"text-uppercase primary--text"},[_vm._v("COMPANY’S WATCHWORD")]),_vm._v(" "),_c('p',{staticClass:"body-1 font-weight-bold"},[_vm._v("“Building Wealth, Creating Value.”")]),_vm._v(" "),_c('h2',{staticClass:"text-uppercase primary--text"},[_vm._v("OUR VISION")]),_vm._v(" "),_c('p',{staticClass:"body-1 font-weight-bold"},[_vm._v("To be a global high-ranking multi-faceted brand that creates value.")]),_vm._v(" "),_c('h2',{staticClass:"text-uppercase primary--text"},[_vm._v("OUR MISSION")]),_vm._v(" "),_c('p',{staticClass:"body-1 font-weight-bold"},[_vm._v("At Acesworld, we believe in our cause to financially liberate the new generation and financially empower as much people as we can with our investment platform and financial expertise.")]),_vm._v(" "),_c('h2',{staticClass:"text-uppercase primary--text"},[_vm._v("OUR CORE VALUES")]),_vm._v(" "),_c('p',{staticClass:"body-1 font-weight-bold"},[_vm._v("Innovation, Integrity, Accountability.")])]),_vm._v(" "),_c('v-divider')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=1a3c864e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(158);

// CONCATENATED MODULE: ./pages/about.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09f787e3"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VContainer: VContainer["a" /* default */],VDivider: VDivider["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=about.js.map