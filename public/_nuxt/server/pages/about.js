exports.ids = [1];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7132a15d", content, true)

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=44ff816a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center"},[_vm._ssrNode("<div class=\"primary py-16\"><h1 class=\"display-1 mb-6 pb-8 text-uppercase white--text font-weight-black\">\n        About us\n      </h1> <div class=\"mx-auto text-left\" style=\"max-width: 700px\"><p class=\"text-h5 mb-0 pb-16 text-center white--text font-weight-bold\">\n          SwegzTradeLink- Upgrading the world to a better trading system\n        </p></div></div> <svg viewBox=\"0 0 1440 84\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 8.84V0h1440v9.471C1208.167 58.315 967.825 84 721.497 84 475.423 84 235.324 58.368 3.713 9.623 2.475 9.363 1.237 9.1 0 8.839z\" fill=\"#690018\" fill-rule=\"evenodd\"></path></svg> <div class=\"mx-auto text-center my-6 py-10\" style=\"max-width: 1000px\"><p class=\"text-h6 font-weight-regular\">\n        SwegzTradeLink is a registered Nigerian firm (RC:300000) based in Abeokuta,\n         Ogun state. We started with the major goal of making cryptocurrency and gift cards trade seamless,\n          which we have achieved and doing more. With the upsurge in the cryptocurrency market and also the remarkable publicity gift cards have achieved over the years,\n           we aim at creating a digitally secured platform that is not only fast but reliable. We are focused on the buying and selling of bitcoins and \n        gift cards in the Nigerian market, with Abeokuta being our largest market. The aim is to become the largest and safest trading platform in Southwest Nigeria.\n      </p></div> "),_c('v-divider',{staticClass:"mx-auto",staticStyle:{"max-width":"1000px"}}),_vm._ssrNode(" <h1 class=\"mb-4 mx-auto text-h5 primary--text\">Get to know something about cryptocurrency.</h1> <div class=\"mx-auto text-left\" style=\"max-width: 1000px\"><p class=\"body-1\">\n        Just like our regular currency, crypto is another currency but a virtual and digital one which can be used by individuals or organizations. \n        Unlike our regular currencies, cryptos are decentralized and allow users to make secure financial transactions while shielding their identity. \n        The first of this currency is bitcoin which was created by Satoshi Nakamoto in 2009,\n         presently there are thousands of alternative coins which can also be used for transactions just like bitcoins.\n      </p></div> "),_c('v-divider'),_vm._ssrNode(" <div class=\"my-10\"><h2 class=\"text-h5 primary--text\">COMPANY’S WATCHWORD</h2> <p class=\"body-1\">“Your legit plug for all transactions.”</p> <h2 class=\"text-h5 primary--text\">\nVision statement\n</h2> <p class=\"body-1\">\n        To become the largest and safest trade exchange platform across \n        Southwest Nigeria by bringing value to your fingertips.\n      </p> <h2 class=\"text-h5 primary--text\">\nMission statement\n</h2> <p class=\"body-1\">\n        SwegzTradeLink is committed to offering the best cryptocurrency and gift cards \n        trading services to our clients. We are focused on providing a reliable, efficient \n        and secure platform that will be accessed with ease across Southwest Nigeria and beyond.\n      </p> <h2 class=\"text-h5 primary--text\">Value statement</h2> <p class=\"body-1\">\nWe strive for the best at SwegzTradeLink, mediocrity is never an option for us. We are committed to building a brand that is;\n\nReliable: You can count on us, any time or day without delay.\n\nFast: Speed is never underrated, paying attentions to your demands as fast as possible is the goal.\n\nSecure: We are dedicated to ensuring your financial transactions are secure.\n\nInclusive: We value people and give equal attention to all our clients despite the diversity.\n\n</p></div> "),_c('v-divider')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=44ff816a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(17);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(142);

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
  "5cebfc2c"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VDivider: VDivider["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=about.js.map