(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1193: function (module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(53).addons.setConfig({ refs: {} });
    },
    1198: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var public_api = __webpack_require__(53),
        create = __webpack_require__(511),
        customTheme = Object(create.create)({
          colorSecondary: '#c9357d',
          brandTitle: 'PODS',
        });
      public_api.addons.setConfig({ theme: customTheme });
    },
    522: function (module, exports, __webpack_require__) {
      __webpack_require__(523),
        __webpack_require__(1198),
        __webpack_require__(696),
        __webpack_require__(1131),
        __webpack_require__(1133),
        __webpack_require__(1135),
        __webpack_require__(1138),
        __webpack_require__(1168),
        __webpack_require__(1173),
        __webpack_require__(1176),
        __webpack_require__(1180),
        __webpack_require__(1191),
        (module.exports = __webpack_require__(1193));
    },
    590: function (module, exports) {},
  },
  [[522, 1, 2]],
]);
