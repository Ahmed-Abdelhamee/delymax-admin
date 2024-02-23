(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-companies-companies-module"], {
    /***/
    "9N1x":
    /*!*******************************************************************!*\
      !*** ./src/app/components/companies/summery/summery.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SummeryComponent */

    /***/
    function N1x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummeryComponent", function () {
        return SummeryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/feather-icons/feather-icons.component */
      "pqks");
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-count-to */
      "a5BO");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var SummeryComponent = /*#__PURE__*/function () {
        function SummeryComponent(orderService, route) {
          _classCallCheck(this, SummeryComponent);

          this.orderService = orderService;
          this.route = route;
          this.deliveredOrders = [];
          this.deliveredOrdersThisMonth = [];
          this.thisMonthOrders = [];
        }

        _createClass(SummeryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clientId = this.route.snapshot.queryParams["id"];

            if (this.clientId) {
              console.log(this.clientId);
            }

            var deliveredPacks = this.allCompanyPacks.filter(function (u) {
              return u.status == 3;
            });
            this.deliveredOrders.push(deliveredPacks);
            this.curdate = "01-" + (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString(); //let MonthOrders = item.packages.filter(item=>item. > this.curdate);
            //this.deliveredOrders = this.allOrders.filter(item=>item.status == "3");

            this.allPayments = this.totalPrice(); // this.thisMonthOrders = this.allOrders.filter(item=>item.date > this.curdate);
            //this.deliveredOrdersThisMonth = this.thisMonthOrders.filter(item=>item.status == "3");

            console.log(this.curdate);
          }
        }, {
          key: "totalPrice",
          value: function totalPrice() {
            var total = 0;

            var _iterator = _createForOfIteratorHelper(this.deliveredOrders),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var data = _step.value;
                total += data.totalAmount;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return total;
          }
        }, {
          key: "totalPriceThisMonth",
          value: function totalPriceThisMonth() {
            var total = 0;

            var _iterator2 = _createForOfIteratorHelper(this.deliveredOrdersThisMonth),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var data = _step2.value;
                total += data.totalAmount;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return total;
          }
        }]);

        return SummeryComponent;
      }();

      SummeryComponent.ɵfac = function SummeryComponent_Factory(t) {
        return new (t || SummeryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      SummeryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SummeryComponent,
        selectors: [["app-summery"]],
        inputs: {
          allPacks: "allPacks",
          allCompanyPacks: "allCompanyPacks"
        },
        decls: 65,
        vars: 35,
        consts: [[1, "container-fluid", 2, "background-color", "white"], [1, "row"], [1, "col-xl-4", "col-md-4", "xl-50"], [1, "card", "o-hidden", "widget-cards"], [1, "bg-warning", "card-body"], [1, "media", "static-top-widget", "row"], [1, "icons-widgets", "col-4"], [1, "align-self-center", "text-center"], [1, "font-warning", 3, "icon"], [1, "media-body", "col-6"], [1, "bg-secondary", "card-body"], [1, "font-secondary", 3, "icon"], [1, "media-body", "col-8"], [1, "m-0"], [1, "mb-0"], [1, "counter", 3, "CountTo", "from", "duration"], [1, "bg-primary", "card-body"], [1, "bg-danger", "card-body"]],
        template: function SummeryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-feather-icons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-feather-icons", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-feather-icons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-feather-icons", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 23, "All Packages"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.allPacks == null ? null : ctx.allPacks.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 25, "All Payments"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.allPayments)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.allPayments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 27, "EGP"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 29, "This month orders"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.thisMonthOrders.length)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.thisMonthOrders.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 31, "This month payments"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.thisMonthPayments)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.thisMonthPayments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 33, "EGP"), " ");
          }
        },
        directives: [_shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconsComponent"], angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummeryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-summery',
            templateUrl: './summery.component.html',
            styleUrls: ['./summery.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, {
          allPacks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          allCompanyPacks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "EHEp":
    /*!************************************************!*\
      !*** ./src/app/shared/interfaces/wearhouse.ts ***!
      \************************************************/

    /*! exports provided: Wearhouse */

    /***/
    function EHEp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Wearhouse", function () {
        return Wearhouse;
      });

      var Wearhouse = function Wearhouse() {
        _classCallCheck(this, Wearhouse);

        this.companyID = "";
        this.id = "";
        this.name = "";
        this.phoneNumber1 = "";
        this.phoneNumber2 = "";
        this.contact_person_name = "";
        this.contact_person_phone_number1 = "";
        this.contact_person_phone_number2 = "";
        this.contact_position = "";
        this.active = false;
        this.address = "";
        this.open_from = "";
        this.open_To = "";
        this.note = "";
      };
      /***/

    },

    /***/
    "GqWC":
    /*!***************************************************************************!*\
      !*** ./src/app/components/companies/add-company/add-company.component.ts ***!
      \***************************************************************************/

    /*! exports provided: DomainCompany, AddCompanyComponent */

    /***/
    function GqWC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomainCompany", function () {
        return DomainCompany;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () {
        return AddCompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_interfaces_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/interfaces/company */
      "eTK/");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var src_app_shared_service_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/shop.service */
      "hXqf");
      /* harmony import */


      var src_app_shared_service_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/type.service */
      "0g4V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-image-compress */
      "X9o6");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["photos"];

      function AddCompanyComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Name is required."), " ");
        }
      }

      function AddCompanyComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Phone is required."), " ");
        }
      }

      function AddCompanyComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Address is required."), " ");
        }
      }

      function AddCompanyComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Contact person name is required."), " ");
        }
      }

      function AddCompanyComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Contact person phone 1 is required."), " ");
        }
      }

      var DomainCompany = /*#__PURE__*/function (_src_app_shared_inter) {
        _inherits(DomainCompany, _src_app_shared_inter);

        var _super = _createSuper(DomainCompany);

        function DomainCompany() {
          _classCallCheck(this, DomainCompany);

          return _super.apply(this, arguments);
        }

        return DomainCompany;
      }(src_app_shared_interfaces_company__WEBPACK_IMPORTED_MODULE_3__["Company"]);

      var AddCompanyComponent = /*#__PURE__*/function () {
        function AddCompanyComponent(fb, dataService, shopService, typeService, route, router, log, imageCompress, storage) {
          _classCallCheck(this, AddCompanyComponent);

          this.fb = fb;
          this.dataService = dataService;
          this.shopService = shopService;
          this.typeService = typeService;
          this.route = route;
          this.router = router;
          this.log = log;
          this.imageCompress = imageCompress;
          this.storage = storage;
          this.towns = [];
          this.states = [];
          this.countries = [];
          this.allLang = true;
          this.categories = new Array();
          this.types = [{
            type: "Supermarket",
            id: "1"
          }, {
            type: "Restaurants",
            id: "2"
          }, {
            type: "Pharmacy",
            id: "3"
          }, {
            type: "Health",
            id: "4"
          }, {
            type: "Clothes",
            id: "5"
          }, {
            type: "Electronics",
            id: "6"
          }, {
            type: "Other",
            id: "7"
          }]; //images = [];

          this.shops = [];
          this.Status = [{
            text: 'Yes',
            value: true
          }, {
            text: 'No',
            value: false
          }];
          this.hours = [{
            name: "01:00 AM",
            value: 1
          }, {
            name: "02:00 AM",
            value: 2
          }, {
            name: "03:00 AM",
            value: 3
          }, {
            name: "04:00 AM",
            value: 4
          }, {
            name: "05:00 AM",
            value: 5
          }, {
            name: "06:00 AM",
            value: 6
          }, {
            name: "07:00 AM",
            value: 7
          }, {
            name: "08:00 AM",
            value: 8
          }, {
            name: "09:00 AM",
            value: 9
          }, {
            name: "10:00 AM",
            value: 10
          }, {
            name: "11:00 AM",
            value: 11
          }, {
            name: "12:00 PM",
            value: 12
          }, {
            name: "01:00 PM",
            value: 13
          }, {
            name: "02:00 PM",
            value: 14
          }, {
            name: "03:00 PM",
            value: 15
          }, {
            name: "04:00 PM",
            value: 16
          }, {
            name: "05:00 PM",
            value: 17
          }, {
            name: "06:00 PM",
            value: 18
          }, {
            name: "07:00 PM",
            value: 19
          }, {
            name: "08:00 AM",
            value: 20
          }, {
            name: "09:00 PM",
            value: 21
          }, {
            name: "10:00 PM",
            value: 22
          }, {
            name: "11:00 PM",
            value: 23
          }, {
            name: "12:00 AM",
            value: 24
          }];
          this.initForm();
        }

        _createClass(AddCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.queryParams["id"]; // if we have an id, we're in edit mode

            if (this.id) {
              this.mode = 'edit';
              this.getShop(this.id);
              this.initForm();
            } else {
              // else we are in add mode
              this.mode = 'add';
              this.getTowns();
              this.constructShop();
              this.initForm();
            }

            this.getCountry();
          }
        }, {
          key: "getCountry",
          value: function getCountry() {
            var _this = this;

            this.dataService.getCountries.subscribe(function (coun) {
              _this.countries = coun;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this2 = this;

            this.dataService.getStates(this.selectedTown).subscribe(function (states) {
              _this2.states = states;
            });
          }
        }, {
          key: "getTowns",
          value: function getTowns() {
            var _this3 = this;

            this.dataService.getTowns().subscribe(function (towns) {
              _this3.towns = towns;
            });
          }
        }, {
          key: "allLangs",
          value: function allLangs() {
            if (this.allLang) {
              this.allLang = false;
              console.log(this.allLang);
            } else {
              this.allLang = true;
              console.log(this.allLang);
            }
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.companyForm = this.fb.group({
              name: [this.company && this.company.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              address: [this.company && this.company.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              phoneNumber1: [this.company && this.company.phoneNumber1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              phoneNumber2: [this.company && this.company.phoneNumber2],
              contact_person_name: [this.company && this.company.contact_person_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              contact_person_phone_number1: [this.company && this.company.contact_person_phone_number1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              contact_person_phone_number2: [this.company && this.company.contact_person_phone_number2],
              contact_position: [this.company && this.company.contact_position],
              notes: [this.company && this.company.notes],
              started_date: [this.company && this.company.started_date, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              id: [{
                value: this.company && this.company.id,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.onFormChanges();
          }
        }, {
          key: "getShop",
          value: function getShop(id) {
            var _this4 = this;

            this.shopSubscription = this.shopService.getCompany(id).subscribe(function (shop) {
              if (shop) {
                _this4.syncShop(shop);

                _this4.initForm();
              }
            });
          }
        }, {
          key: "constructShop",
          value: function constructShop() {
            var shop = this.constructMockShop();
            this.syncShop(shop);
            this.initForm();
          }
        }, {
          key: "syncShop",
          value: function syncShop(company) {
            var id = this.createId(company);
            var delvieryCharge = 0;
            this.company = Object.assign(Object.assign({}, company), {
              id: id
            });
          }
        }, {
          key: "oncompanyFormSubmit",
          value: function oncompanyFormSubmit() {
            this.syncShop(Object.assign(Object.assign({}, this.company), this.companyForm.value));
            var shopToSubmit = this.company;
            this.addShop(shopToSubmit);
          }
        }, {
          key: "addShop",
          value: function addShop(company) {
            var _this5 = this;

            this.shopService.addCompany(company).subscribe(function (savedProduct) {
              if (savedProduct.id) {
                _this5.company = null;

                _this5.router.navigate(['/companies']);
              }
            }, function (error) {
              _this5.log.error('Could not upload your shop');

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
            });
          } // pure helper functions start here:

        }, {
          key: "constructMockShop",
          value: function constructMockShop() {
            return new src_app_shared_interfaces_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
          }
        }, {
          key: "createId",
          value: function createId(shop) {
            var randomId = Math.floor(Math.random() * new Date().getTime());
            var id = shop.shopId || randomId + "";

            if (id === "1") {
              id = randomId + "";
            }

            return id;
          }
        }, {
          key: "onFormChanges",
          value: function onFormChanges() {
            var _this6 = this;

            this.formSubscription = this.companyForm.valueChanges.subscribe(function (formFieldValues) {
              var shop = Object.assign(Object.assign({}, _this6.company), formFieldValues);

              _this6.syncShop(shop);
            });
          }
        }]);

        return AddCompanyComponent;
      }();

      AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) {
        return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_type_service__WEBPACK_IMPORTED_MODULE_6__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]));
      };

      AddCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddCompanyComponent,
        selectors: [["app-add-company"]],
        viewQuery: function AddCompanyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.photos = _t.first);
          }
        },
        decls: 80,
        vars: 52,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["data-toggle", "modal", "data-target", "#progress", "data-backdrop", "static", "id", "dialog", "hidden", "", 1, "btn", "btn-primary"], [1, "card"], [1, "card-body", "add-shop"], [1, "row", "product-adding"], [1, "col-xl-12"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "add-product-form"], [1, "form-group", "row"], ["for", "validationCustom01", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "validationCustom01", "type", "text", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "formControl"], ["class", "text text-danger", 4, "ngIf"], ["id", "validationCustom01", "type", "text", 1, "form-control", "col-xl-8", "col-sm-7", 3, "formControl"], [1, "col-xl-3", "col-sm-4", "mb-0"], ["rows", "3", "name", "notes", "formControlName", "notes", 1, "form-control", "col-xl-8", "col-sm-7", "mb-0"], ["formControlName", "started_date", "matInput", "", "readonly", "", 1, "form-control", "digits", "col-xl-6", "col-sm-6", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "form-group", "row", "mb-0"], [1, "product-buttons", "col-sm-8", "offset-xl-3", "offset-sm-4"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-light"], ["id", "progress", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "progress-content", "modal-dialog-centered"], [1, "text", "text-danger"]],
        template: function AddCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCompanyComponent_Template_form_ngSubmit_8_listener() {
              return ctx.oncompanyFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddCompanyComponent_div_15_Template, 3, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddCompanyComponent_div_21_Template, 3, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddCompanyComponent_div_32_Template, 3, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddCompanyComponent_div_38_Template, 3, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddCompanyComponent_div_44_Template, 3, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "textarea", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-datepicker-toggle", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "mat-datepicker", null, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_70_listener() {
              return ctx.oncompanyFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "mat-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.companyForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 28, "Name :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.companyForm.controls["name"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.name.touched && (ctx.companyForm.controls.name.errors == null ? null : ctx.companyForm.controls.name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 30, "Phone 1 :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.companyForm.controls["phoneNumber1"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.phoneNumber1.touched && (ctx.companyForm.controls.phoneNumber1.errors == null ? null : ctx.companyForm.controls.phoneNumber1.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 32, "Phone 2 :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.companyForm.controls["phoneNumber2"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 34, "Address :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.companyForm.controls["address"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.address.touched && (ctx.companyForm.controls.address.errors == null ? null : ctx.companyForm.controls.address.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 36, "Contact person name :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.companyForm.controls["contact_person_name"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.contact_person_name.touched && (ctx.companyForm.controls.contact_person_name.errors == null ? null : ctx.companyForm.controls.contact_person_name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 38, "Contact person phone 1:"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.companyForm.controls["contact_person_phone_number1"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.contact_person_phone_number1.touched && (ctx.companyForm.controls.contact_person_phone_number1.errors == null ? null : ctx.companyForm.controls.contact_person_phone_number1.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 40, "Contact person phone 2:"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.companyForm.controls["contact_person_phone_number2"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 42, "Contact position:"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.companyForm.controls["contact_position"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 44, "note :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 46, "Started date "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 48, "Add"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 50, "Discard"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCompanyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-company',
            templateUrl: './add-company.component.html',
            styleUrls: ['./add-company.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }, {
            type: src_app_shared_service_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]
          }, {
            type: src_app_shared_service_type_service__WEBPACK_IMPORTED_MODULE_6__["TypeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
          }, {
            type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]
          }, {
            type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]
          }];
        }, {
          photos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['photos', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "XRXk":
    /*!******************************************************************!*\
      !*** ./src/app/components/companies/companies-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: CustomersRoutingModule */

    /***/
    function XRXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function () {
        return CustomersRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_service_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/permissions */
      "I/DZ");
      /* harmony import */


      var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-company/add-company.component */
      "GqWC");
      /* harmony import */


      var _add_wearhouse_add_wearhouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-wearhouse/add-wearhouse.component */
      "kqdy");
      /* harmony import */


      var _list_companies_list_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-companies/list-companies.component */
      "aAn/");
      /* harmony import */


      var _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-company/view-company.component */
      "lZqp");
      /* harmony import */


      var _view_wearhouse_view_wearhouse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./view-wearhouse/view-wearhouse.component */
      "kZ9e");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _list_companies_list_companies_component__WEBPACK_IMPORTED_MODULE_5__["ListCompaniesComponent"],
          canActivate: [src_app_shared_service_permissions__WEBPACK_IMPORTED_MODULE_2__["Permissons"]],
          data: {
            title: "Companies",
            permission: '"view_customer":true',
            breadcrumb: "Companies"
          }
        }, {
          path: 'view-company',
          component: _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_6__["ViewCompanyComponent"],
          canActivate: [src_app_shared_service_permissions__WEBPACK_IMPORTED_MODULE_2__["Permissons"]],
          data: {
            title: "Company Details",
            permission: '"view_customer":true',
            breadcrumb: "Company Details"
          }
        }, {
          path: 'add-company',
          component: _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_3__["AddCompanyComponent"],
          canActivate: [src_app_shared_service_permissions__WEBPACK_IMPORTED_MODULE_2__["Permissons"]],
          data: {
            title: "Add Company",
            permission: '"view_customer":true',
            breadcrumb: "add-company"
          }
        }, {
          path: 'add-wearhouse',
          component: _add_wearhouse_add_wearhouse_component__WEBPACK_IMPORTED_MODULE_4__["AddWearhouseComponent"],
          canActivate: [src_app_shared_service_permissions__WEBPACK_IMPORTED_MODULE_2__["Permissons"]],
          data: {
            title: "Add Wearhouse",
            permission: '"view_customer":true',
            breadcrumb: "add-wearhouse"
          }
        }, {
          path: 'view-wearhouse',
          component: _view_wearhouse_view_wearhouse_component__WEBPACK_IMPORTED_MODULE_7__["ViewWearhouseComponent"],
          canActivate: [src_app_shared_service_permissions__WEBPACK_IMPORTED_MODULE_2__["Permissons"]],
          data: {
            title: "view Wearhouse",
            permission: '"view_customer":true',
            breadcrumb: "view-wearhouse"
          }
        }]
      }];

      var CustomersRoutingModule = function CustomersRoutingModule() {
        _classCallCheck(this, CustomersRoutingModule);
      };

      CustomersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CustomersRoutingModule
      });
      CustomersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CustomersRoutingModule_Factory(t) {
          return new (t || CustomersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aAn/":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/companies/list-companies/list-companies.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ListCompaniesComponent */

    /***/
    function aAn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListCompaniesComponent", function () {
        return ListCompaniesComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = function _c0(a0) {
        return {
          id: a0
        };
      };

      function ListCompaniesComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListCompaniesComponent_tr_26_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var customer_r2 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onEdit(customer_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListCompaniesComponent_tr_26_Template_a_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var customer_r2 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onDeleteConfirm(customer_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var customer_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, customer_r2 == null ? null : customer_r2.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r2 == null ? null : customer_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r2 == null ? null : customer_r2.phone);
        }
      }

      function ListCompaniesComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "No data found"));
        }
      }

      var ListCompaniesComponent = /*#__PURE__*/function () {
        function ListCompaniesComponent(modalService, authService, orderService, _domSanitizer, router) {
          _classCallCheck(this, ListCompaniesComponent);

          this.modalService = modalService;
          this.authService = authService;
          this.orderService = orderService;
          this._domSanitizer = _domSanitizer;
          this.router = router;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.customers = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US");
        }

        _createClass(ListCompaniesComponent, [{
          key: "open",
          value: function open(content) {
            var _this7 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this7.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this7.closeResult = "Dismissed ".concat(_this7.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              // ... skipped ...
              pageLength: 10,
              language: {
                "emptyTable": "ليست هناك بيانات متاحة في الجدول",
                "loadingRecords": "جارٍ التحميل...",
                "lengthMenu": " _MENU_ ",
                "zeroRecords": "لم يعثر على أية سجلات",
                "info": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
                "infoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
                "infoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
                "search": "بحث:",
                "paginate": {
                  "first": "الأول",
                  "previous": "السابق",
                  "next": "التالي",
                  "last": "الأخير"
                },
                "aria": {
                  "sortAscending": ": تفعيل لترتيب العمود تصاعدياً",
                  "sortDescending": ": تفعيل لترتيب العمود تنازلياً"
                },
                "processing": "جارٍ المعالجة..."
              },
              dom: "lfrtip"
            };
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this8 = this;

            this.authService.getAllCustomers().subscribe(function (res) {
              if (_this8.isDtInitialized) {
                _this8.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this8.dtTrigger.next();
                });
              } else {
                _this8.isDtInitialized = true;

                _this8.dtTrigger.next();
              }

              _this8.customers = res;
              console.log(_this8.customers);
            });
          }
        }, {
          key: "onEditClient",
          value: function onEditClient(event) {}
        }, {
          key: "addProduct",
          value: function addProduct() {
            this.router.navigate(['/products/add-product']);
          }
        }, {
          key: "onDeleteConfirm",
          value: function onDeleteConfirm(company) {
            if (window.confirm('Are you sure you want to delete ' + company.name + ' ?')) {
              //  category.confirm.resolve(category.newData);
              console.log(company.id);
              this.orderService.deleteCompany(company.id);
            } else {
              company.id.confirm.reject();
            }
          }
        }, {
          key: "onEdit",
          value: function onEdit(id) {
            this.router.navigate(['/companies/add-company/'], {
              queryParams: {
                id: id
              }
            });
          }
        }]);

        return ListCompaniesComponent;
      }();

      ListCompaniesComponent.ɵfac = function ListCompaniesComponent_Factory(t) {
        return new (t || ListCompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
      };

      ListCompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListCompaniesComponent,
        selectors: [["app-list-companies"]],
        viewQuery: function ListCompaniesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 28,
        vars: 16,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "btn-popup", "pull-right"], ["type", "button", "routerLink", "/companies/add-company", 1, "btn", "btn-primary"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLink", "/companies/view-company", 3, "queryParams"], [1, "text-right"], [1, "dropdown", "dropdown-action"], ["data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], [1, "dropdown-menu", "dropdown-menu-right"], ["data-toggle", "modal", "data-target", "#edit_leavetype", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function ListCompaniesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ListCompaniesComponent_tr_26_Template, 20, 6, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListCompaniesComponent_tr_27_Template, 5, 3, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "Add Company"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 10, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 12, "Phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 14, "Actions"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customers);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customers.length === 0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNvbXBhbmllcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListCompaniesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-list-companies',
            templateUrl: './list-companies.component.html',
            styleUrls: ['./list-companies.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "eTK/":
    /*!**********************************************!*\
      !*** ./src/app/shared/interfaces/company.ts ***!
      \**********************************************/

    /*! exports provided: Company */

    /***/
    function eTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return Company;
      });

      var Company = function Company() {
        _classCallCheck(this, Company);

        this.id = "";
        this.name = "";
        this.phoneNumber1 = "";
        this.phoneNumber2 = "";
        this.started_date = "";
        this.contact_person_name = "";
        this.contact_person_phone_number1 = "";
        this.contact_person_phone_number2 = "";
        this.contact_position = "";
        this.active = false;
        this.address = "";
        this.notes = "";
      };
      /***/

    },

    /***/
    "kZ9e":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/companies/view-wearhouse/view-wearhouse.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ViewWearhouseComponent */

    /***/
    function kZ9e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewWearhouseComponent", function () {
        return ViewWearhouseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ViewWearhouseComponent = /*#__PURE__*/function () {
        function ViewWearhouseComponent(route, authService, orderService) {
          _classCallCheck(this, ViewWearhouseComponent);

          this.route = route;
          this.authService = authService;
          this.orderService = orderService;
        }

        _createClass(ViewWearhouseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.queryParams["id"];
            console.log(this.id);
            this.getCustomer(this.id);
          }
        }, {
          key: "getCustomer",
          value: function getCustomer(id) {
            var _this9 = this;

            this.authService.getWearHouse(id).subscribe(function (customer) {
              _this9.client = customer;
            });
          }
        }]);

        return ViewWearhouseComponent;
      }();

      ViewWearhouseComponent.ɵfac = function ViewWearhouseComponent_Factory(t) {
        return new (t || ViewWearhouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]));
      };

      ViewWearhouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewWearhouseComponent,
        selectors: [["app-view-wearhouse"]],
        decls: 47,
        vars: 48,
        consts: [[1, "content", "container-fluid"], [1, "card", "mb-0"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "profile-view"], [1, "col-md-6"], [1, "profile-info-left"], [1, "order-detail"]],
        template: function ViewWearhouseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 24, "Name :"), " ", ctx.client == null ? null : ctx.client.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 26, "Phone Number 1 :"), " ", ctx.client == null ? null : ctx.client.phoneNumber1, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 28, "Phone Number 2 :"), " ", ctx.client == null ? null : ctx.client.phoneNumber2, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 30, "Contact Person Name :"), " ", ctx.client == null ? null : ctx.client.contact_person_name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 32, "Contact Person Phone Number 1 :"), " ", ctx.client == null ? null : ctx.client.contact_person_phone_number1, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 34, "Contact Person Phone Number 2 :"), " ", ctx.client == null ? null : ctx.client.contact_person_phone_number2, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 36, "Contact Position :"), " ", ctx.client == null ? null : ctx.client.contact_position, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 38, "Address :"), " ", ctx.client == null ? null : ctx.client.address, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 40, "latitude :"), " ", ctx.client == null ? null : ctx.client.latitude, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 42, "longitude :"), " ", ctx.client == null ? null : ctx.client.longitude, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 44, "Open from :"), " ", ctx.client == null ? null : ctx.client.open_from, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 46, "Open To :"), " ", ctx.client == null ? null : ctx.client.open_To, "");
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXdlYXJob3VzZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewWearhouseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-wearhouse',
            templateUrl: './view-wearhouse.component.html',
            styleUrls: ['./view-wearhouse.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kqdy":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/companies/add-wearhouse/add-wearhouse.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: DomainWearhouse, AddWearhouseComponent */

    /***/
    function kqdy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomainWearhouse", function () {
        return DomainWearhouse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddWearhouseComponent", function () {
        return AddWearhouseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_interfaces_wearhouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/interfaces/wearhouse */
      "EHEp");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var src_app_shared_service_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/shop.service */
      "hXqf");
      /* harmony import */


      var src_app_shared_service_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/type.service */
      "0g4V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-image-compress */
      "X9o6");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["photos"];

      function AddWearhouseComponent_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var company_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r10.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", company_r10.name, " ");
        }
      }

      function AddWearhouseComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Name is required."), " ");
        }
      }

      function AddWearhouseComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Phone is required."), " ");
        }
      }

      function AddWearhouseComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Address is required."), " ");
        }
      }

      function AddWearhouseComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Contact person name is required."), " ");
        }
      }

      function AddWearhouseComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Contact person phone 1 is required."), " ");
        }
      }

      function AddWearhouseComponent_option_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", hour_r11.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, hour_r11.name));
        }
      }

      function AddWearhouseComponent_option_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", hour_r12.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, hour_r12.name));
        }
      }

      function AddWearhouseComponent_div_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Longitude is required."), " ");
        }
      }

      function AddWearhouseComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Latitude is required."), " ");
        }
      }

      var DomainWearhouse = /*#__PURE__*/function (_src_app_shared_inter2) {
        _inherits(DomainWearhouse, _src_app_shared_inter2);

        var _super2 = _createSuper(DomainWearhouse);

        function DomainWearhouse() {
          _classCallCheck(this, DomainWearhouse);

          return _super2.apply(this, arguments);
        }

        return DomainWearhouse;
      }(src_app_shared_interfaces_wearhouse__WEBPACK_IMPORTED_MODULE_3__["Wearhouse"]);

      var AddWearhouseComponent = /*#__PURE__*/function () {
        function AddWearhouseComponent(fb, dataService, shopService, typeService, route, router, log, imageCompress, storage) {
          _classCallCheck(this, AddWearhouseComponent);

          this.fb = fb;
          this.dataService = dataService;
          this.shopService = shopService;
          this.typeService = typeService;
          this.route = route;
          this.router = router;
          this.log = log;
          this.imageCompress = imageCompress;
          this.storage = storage;
          this.towns = [];
          this.states = [];
          this.companies = [];
          this.allLang = true;
          this.categories = new Array();
          this.types = [{
            type: "Supermarket",
            id: "1"
          }, {
            type: "Restaurants",
            id: "2"
          }, {
            type: "Pharmacy",
            id: "3"
          }, {
            type: "Health",
            id: "4"
          }, {
            type: "Clothes",
            id: "5"
          }, {
            type: "Electronics",
            id: "6"
          }, {
            type: "Other",
            id: "7"
          }]; //images = [];

          this.shops = [];
          this.Status = [{
            text: 'Yes',
            value: true
          }, {
            text: 'No',
            value: false
          }];
          this.hours = [{
            name: "01:00 AM",
            value: 1
          }, {
            name: "02:00 AM",
            value: 2
          }, {
            name: "03:00 AM",
            value: 3
          }, {
            name: "04:00 AM",
            value: 4
          }, {
            name: "05:00 AM",
            value: 5
          }, {
            name: "06:00 AM",
            value: 6
          }, {
            name: "07:00 AM",
            value: 7
          }, {
            name: "08:00 AM",
            value: 8
          }, {
            name: "09:00 AM",
            value: 9
          }, {
            name: "10:00 AM",
            value: 10
          }, {
            name: "11:00 AM",
            value: 11
          }, {
            name: "12:00 PM",
            value: 12
          }, {
            name: "01:00 PM",
            value: 13
          }, {
            name: "02:00 PM",
            value: 14
          }, {
            name: "03:00 PM",
            value: 15
          }, {
            name: "04:00 PM",
            value: 16
          }, {
            name: "05:00 PM",
            value: 17
          }, {
            name: "06:00 PM",
            value: 18
          }, {
            name: "07:00 PM",
            value: 19
          }, {
            name: "08:00 AM",
            value: 20
          }, {
            name: "09:00 PM",
            value: 21
          }, {
            name: "10:00 PM",
            value: 22
          }, {
            name: "11:00 PM",
            value: 23
          }, {
            name: "12:00 AM",
            value: 24
          }];
          this.getCompanies();
          this.initForm();
        }

        _createClass(AddWearhouseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.queryParams["id"]; // if we have an id, we're in edit mode

            if (this.id) {
              this.mode = 'edit';
              this.getShop(this.id);
              this.initForm();
            } else {
              // else we are in add mode
              this.mode = 'add';
              this.constructShop();
              this.initForm();
            }

            this.getCompanies();
          }
        }, {
          key: "getCompanies",
          value: function getCompanies() {
            var _this10 = this;

            this.dataService.getCompnies().subscribe(function (coun) {
              _this10.companies = coun;
              console.log(_this10.companies);
            });
          }
        }, {
          key: "allLangs",
          value: function allLangs() {
            if (this.allLang) {
              this.allLang = false;
              console.log(this.allLang);
            } else {
              this.allLang = true;
              console.log(this.allLang);
            }
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.wearhouseForm = this.fb.group({
              name: [this.wearhouse && this.wearhouse.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              address: [this.wearhouse && this.wearhouse.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              companyID: [this.wearhouse && this.wearhouse.companyID, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              phoneNumber1: [this.wearhouse && this.wearhouse.phoneNumber1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              phoneNumber2: [this.wearhouse && this.wearhouse.phoneNumber2],
              contact_person_name: [this.wearhouse && this.wearhouse.contact_person_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              contact_person_phone_number1: [this.wearhouse && this.wearhouse.contact_person_phone_number1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              contact_person_phone_number2: [this.wearhouse && this.wearhouse.contact_person_phone_number2],
              contact_position: [this.wearhouse && this.wearhouse.contact_position],
              id: [{
                value: this.wearhouse && this.wearhouse.id,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              latitude: [this.wearhouse && this.wearhouse.coordinates.latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              longitude: [this.wearhouse && this.wearhouse.coordinates.longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              open_from: [this.wearhouse && this.wearhouse.open_from, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              open_To: [this.wearhouse && this.wearhouse.open_To, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.onFormChanges();
          }
        }, {
          key: "getShop",
          value: function getShop(id) {
            var _this11 = this;

            this.shopSubscription = this.shopService.getWearHouse(id).subscribe(function (shop) {
              if (shop) {
                _this11.syncShop(shop);

                _this11.getCompanies();

                console.log(shop);

                _this11.initForm();
              }
            });
          }
        }, {
          key: "constructShop",
          value: function constructShop() {
            var shop = this.constructMockShop();
            this.syncShop(shop);
            this.initForm();
          }
        }, {
          key: "syncShop",
          value: function syncShop(wearhouse) {
            var id = this.createId(wearhouse);
            this.wearhouse = Object.assign(Object.assign({}, wearhouse), {
              id: id
            });
          }
        }, {
          key: "onwearhouseFormSubmit",
          value: function onwearhouseFormSubmit() {
            this.syncShop(Object.assign(Object.assign({}, this.wearhouse), this.wearhouseForm.value));
            var shopToSubmit = this.wearhouse;
            this.addShop(shopToSubmit);
          }
        }, {
          key: "addShop",
          value: function addShop(wearhouse) {
            var _this12 = this;

            this.shopService.addWearHouse(wearhouse).subscribe(function (savedProduct) {
              if (savedProduct.id) {
                _this12.wearhouse = null;

                _this12.router.navigate(['/companies/view-company'], {
                  queryParams: {
                    id: wearhouse.companyID
                  }
                });
              }
            }, function (error) {
              _this12.log.error('Could not upload your wearhouse');

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
            });
          } // pure helper functions start here:

        }, {
          key: "constructMockShop",
          value: function constructMockShop() {
            return new src_app_shared_interfaces_wearhouse__WEBPACK_IMPORTED_MODULE_3__["Wearhouse"]();
          }
        }, {
          key: "createId",
          value: function createId(wearhouse) {
            var randomId = Math.floor(Math.random() * new Date().getTime());
            var id = wearhouse.id || randomId + "";

            if (id === "1") {
              id = randomId + "";
            }

            return id;
          }
        }, {
          key: "onFormChanges",
          value: function onFormChanges() {
            var _this13 = this;

            this.formSubscription = this.wearhouseForm.valueChanges.subscribe(function (formFieldValues) {
              var wearhouse = Object.assign(Object.assign({}, _this13.wearhouse), formFieldValues);

              _this13.syncShop(wearhouse);
            });
          }
        }]);

        return AddWearhouseComponent;
      }();

      AddWearhouseComponent.ɵfac = function AddWearhouseComponent_Factory(t) {
        return new (t || AddWearhouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_type_service__WEBPACK_IMPORTED_MODULE_6__["TypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]));
      };

      AddWearhouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddWearhouseComponent,
        selectors: [["app-add-wearhouse"]],
        viewQuery: function AddWearhouseComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.photos = _t.first);
          }
        },
        decls: 97,
        vars: 67,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["data-toggle", "modal", "data-target", "#progress", "data-backdrop", "static", "id", "dialog", "hidden", "", 1, "btn", "btn-primary"], [1, "card"], [1, "card-body", "add-shop"], [1, "row", "product-adding"], [1, "col-xl-12"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "add-product-form"], [1, "form-group", "row"], ["for", "exampleFormControlSelect2", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "exampleFormControlSelect2", "formControlName", "companyID", 1, "form-control", "digits", "col-xl-8", "col-sm-7", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "validationCustom01", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "validationCustom01", "type", "text", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "formControl"], ["class", "text text-danger", 4, "ngIf"], ["id", "validationCustom01", "type", "text", 1, "form-control", "col-xl-8", "col-sm-7", 3, "formControl"], ["id", "exampleFormControlSelect2", "formControlName", "open_from", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "open_To", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "validationCustom01", "type", "number", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "formControl"], [1, "form-group", "row", "mb-0"], [1, "product-buttons", "col-sm-8", "offset-xl-3", "offset-sm-4"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-light"], ["id", "progress", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "progress-content", "modal-dialog-centered"], [3, "value"], [1, "text", "text-danger"]],
        template: function AddWearhouseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddWearhouseComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onwearhouseFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddWearhouseComponent_Template_select_ngModelChange_14_listener($event) {
              return ctx.selectedTown = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddWearhouseComponent_option_15_Template, 2, 2, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddWearhouseComponent_div_21_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddWearhouseComponent_div_27_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddWearhouseComponent_div_38_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddWearhouseComponent_div_44_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AddWearhouseComponent_div_50_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AddWearhouseComponent_option_66_Template, 3, 4, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AddWearhouseComponent_option_72_Template, 3, 4, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AddWearhouseComponent_div_78_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AddWearhouseComponent_div_84_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddWearhouseComponent_Template_button_click_87_listener() {
              return ctx.onwearhouseFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "mat-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.wearhouseForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 37, "Company :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTown);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 39, "Name :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["name"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wearhouseForm.controls.name.touched && (ctx.wearhouseForm.controls.name.errors == null ? null : ctx.wearhouseForm.controls.name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 41, "Phone 1 :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["phoneNumber1"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wearhouseForm.controls.phoneNumber1.touched && (ctx.wearhouseForm.controls.phoneNumber1.errors == null ? null : ctx.wearhouseForm.controls.phoneNumber1.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 43, "Phone 2 :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["phoneNumber2"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 45, "Address :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["address"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wearhouseForm.controls.address.touched && (ctx.wearhouseForm.controls.address.errors == null ? null : ctx.wearhouseForm.controls.address.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 47, "Contact person name :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["contact_person_name"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wearhouseForm.controls.contact_person_name.touched && (ctx.wearhouseForm.controls.contact_person_name.errors == null ? null : ctx.wearhouseForm.controls.contact_person_name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 49, "Contact person phone 1:"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["contact_person_phone_number1"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wearhouseForm.controls.contact_person_phone_number1.touched && (ctx.wearhouseForm.controls.contact_person_phone_number1.errors == null ? null : ctx.wearhouseForm.controls.contact_person_phone_number1.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 51, "Contact person phone 2:"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["contact_person_phone_number2"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 53, "Contact position:"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["contact_position"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 55, "Open Hour :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hours);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 57, "Close Hour :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hours);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 59, "Longitude :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["longitude"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wearhouseForm.controls.longitude.touched && (ctx.wearhouseForm.controls.longitude.errors == null ? null : ctx.wearhouseForm.controls.longitude.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 61, "Latitude :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.wearhouseForm.controls["latitude"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wearhouseForm.controls.latitude.touched && (ctx.wearhouseForm.controls.latitude.errors == null ? null : ctx.wearhouseForm.controls.latitude.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 63, "Add"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 65, "Discard"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtd2VhcmhvdXNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddWearhouseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-wearhouse',
            templateUrl: './add-wearhouse.component.html',
            styleUrls: ['./add-wearhouse.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }, {
            type: src_app_shared_service_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]
          }, {
            type: src_app_shared_service_type_service__WEBPACK_IMPORTED_MODULE_6__["TypeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
          }, {
            type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_9__["NgxImageCompressService"]
          }, {
            type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]
          }];
        }, {
          photos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['photos', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "l2wG":
    /*!***************************************************************!*\
      !*** ./src/app/components/companies/gifts/gifts.component.ts ***!
      \***************************************************************/

    /*! exports provided: GiftsComponent */

    /***/
    function l2wG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiftsComponent", function () {
        return GiftsComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_assets_pipes_custom_status_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/assets/pipes/custom-status.pipe */
      "keQy");

      var _c0 = function _c0(a0) {
        return {
          id: a0
        };
      };

      function GiftsComponent_tr_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "customStatus");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GiftsComponent_tr_47_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var order_r2 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onEdit(order_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GiftsComponent_tr_47_Template_a_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var order_r2 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onDeleteConfirm(order_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, order_r2 == null ? null : order_r2.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, order_r2 == null ? null : order_r2.companyID)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.phoneNumber1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.contact_person_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.contact_person_phone_number1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.contact_position);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.open_from);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.open_To);
        }
      }

      function GiftsComponent_tr_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data found");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var GiftsComponent = /*#__PURE__*/function () {
        function GiftsComponent(modalService, orderService, _domSanitizer, router, route) {
          _classCallCheck(this, GiftsComponent);

          this.modalService = modalService;
          this.orderService = orderService;
          this._domSanitizer = _domSanitizer;
          this.router = router;
          this.route = route;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.orders = [];
          this.companiesList = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US");
        }

        _createClass(GiftsComponent, [{
          key: "open",
          value: function open(content) {
            var _this14 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this14.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this14.closeResult = "Dismissed ".concat(_this14.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              // ... skipped ...
              pageLength: 10,
              language: {
                "emptyTable": "ليست هناك بيانات متاحة في الجدول",
                "loadingRecords": "جارٍ التحميل...",
                "lengthMenu": " _MENU_ ",
                "zeroRecords": "لم يعثر على أية سجلات",
                "info": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
                "infoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
                "infoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
                "search": "بحث:",
                "paginate": {
                  "first": "الأول",
                  "previous": "السابق",
                  "next": "التالي",
                  "last": "الأخير"
                },
                "aria": {
                  "sortAscending": ": تفعيل لترتيب العمود تصاعدياً",
                  "sortDescending": ": تفعيل لترتيب العمود تنازلياً"
                },
                "processing": "جارٍ المعالجة..."
              },
              dom: "lfrtip"
            }; // this.dtOptions.language.url = "src/assets/i18n/datatable.ar.json";

            this.clientId = this.route.snapshot.queryParams["id"];
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this15 = this;

            this.orderService.getWearHouses(this.clientId).subscribe(function (res) {
              if (_this15.isDtInitialized) {
                _this15.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this15.dtTrigger.next();
                });
              } else {
                _this15.isDtInitialized = true;

                _this15.dtTrigger.next();
              }

              _this15.orders = res;
              console.log(_this15.orders);
              _this15.rows = _this15.orders;
              _this15.srch = _toConsumableArray(_this15.rows);
            });
          }
        }, {
          key: "onEditClient",
          value: function onEditClient(event) {}
        }, {
          key: "addProduct",
          value: function addProduct() {}
        }, {
          key: "onDeleteConfirm",
          value: function onDeleteConfirm(wearhouse) {
            if (window.confirm('Are you sure you want to delete ' + wearhouse.name + ' ?')) {
              //  category.confirm.resolve(category.newData);
              console.log(wearhouse.id);
              this.orderService.deleteWearhouse(wearhouse.id);
            } else {
              wearhouse.id.confirm.reject();
            }
          }
        }, {
          key: "onEdit",
          value: function onEdit(id) {
            this.router.navigate(['/companies/add-wearhouse/'], {
              queryParams: {
                id: id
              }
            });
          }
        }]);

        return GiftsComponent;
      }();

      GiftsComponent.ɵfac = function GiftsComponent_Factory(t) {
        return new (t || GiftsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      GiftsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GiftsComponent,
        selectors: [["app-gifts"]],
        viewQuery: function GiftsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 49,
        vars: 37,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "btn-popup", "pull-right"], ["type", "button", "routerLink", "/companies/add-wearhouse", 1, "btn", "btn-primary"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLink", "/companies/view-wearhouse", 3, "queryParams"], [1, "text-right"], [1, "dropdown", "dropdown-action"], ["data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], [1, "dropdown-menu", "dropdown-menu-right"], ["data-toggle", "modal", "data-target", "#edit_leavetype", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function GiftsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, GiftsComponent_tr_47_Template, 36, 17, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, GiftsComponent_tr_48_Template, 4, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 15, "Add Wearhouse"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 17, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 19, "Company"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 21, "Address"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 23, "phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 25, "Contact person"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 27, "CP Phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 29, "CP Position"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 31, "Open From"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 33, "Open To"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 35, "Actions"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders.length === 0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], src_assets_pipes_custom_status_pipe__WEBPACK_IMPORTED_MODULE_9__["CustomStatus"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaWZ0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GiftsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-gifts',
            templateUrl: './gifts.component.html',
            styleUrls: ['./gifts.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "lZqp":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/companies/view-company/view-company.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ViewCompanyComponent */

    /***/
    function lZqp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewCompanyComponent", function () {
        return ViewCompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var _summery_summery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../summery/summery.component */
      "9N1x");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../orders/orders.component */
      "nsH6");
      /* harmony import */


      var _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../gifts/gifts.component */
      "l2wG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ViewCompanyComponent = /*#__PURE__*/function () {
        function ViewCompanyComponent(route, authService, orderService) {
          _classCallCheck(this, ViewCompanyComponent);

          this.route = route;
          this.authService = authService;
          this.orderService = orderService;
          this.allOrders = [];
          this.allCompanyPacks = [];
          this.allPacks = [];
        }

        _createClass(ViewCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.queryParams["id"];
            console.log(this.id);
            this.getCustomer(this.id);
          }
        }, {
          key: "getCustomer",
          value: function getCustomer(id) {
            var _this16 = this;

            this.authService.getCustomer(id).subscribe(function (customer) {
              _this16.client = customer;
            });
            this.orderService.getOrders(this.id).subscribe(function (orders) {
              _this16.allOrders = orders;

              _this16.allOrders.forEach(function (item) {
                item.packages.forEach(function (item) {
                  return _this16.allPacks.push(item);
                });
              });

              console.log(_this16.allPacks);
            });
            /* this.orderService.getCompanyOrders(this.id).subscribe(or=>{
               or.forEach(c=>
                 {
                   c.packages.forEach(p=>{
                     this.allCompanyPacks.push(p)})
                   });
                    })
             */

            this.allCompanyPacks.forEach(function (u, index) {
              _this16.allPacks.forEach(function (pp) {
                if (u.barcode == pp.barcode) {
                  console.log("found");
                  _this16.allCompanyPacks[index].status == pp.status;
                }
              });
            });
          }
        }]);

        return ViewCompanyComponent;
      }();

      ViewCompanyComponent.ɵfac = function ViewCompanyComponent_Factory(t) {
        return new (t || ViewCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]));
      };

      ViewCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewCompanyComponent,
        selectors: [["app-view-company"]],
        decls: 65,
        vars: 53,
        consts: [[1, "content", "container-fluid"], [1, "card", "mb-0"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "profile-view"], [1, "col-md-6"], [1, "profile-info-left"], [1, "order-detail"], [1, "card", "tab-box", 2, "margin-top", "20px"], [1, "row", "user-tabs"], [1, "col-lg-12", "col-md-12", "col-sm-12", "line-tabs"], [1, "nav", "nav-tabs", "nav-tabs-bottom"], [1, "nav-item"], ["href", "#profile", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#orders", "data-toggle", "tab", 1, "nav-link"], ["href", "#wearhouses", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content", 2, "background-color", "white", "margin-top", "-25px"], ["id", "profile", 1, "pro-overview", "tab-pane", "fade", "show", "active", 2, "background-color", "white", "padding-top", "25px"], [3, "allPacks", "allCompanyPacks"], ["id", "orders", 1, "tab-pane", "fade"], ["id", "wearhouses", 1, "tab-pane", "fade"], ["id", "log", 1, "tab-pane", "fade"]],
        template: function ViewCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-summery", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-orders", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-gifts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 27, "Name :"), " ", ctx.client == null ? null : ctx.client.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 29, "Phone Number 1 :"), " ", ctx.client == null ? null : ctx.client.phoneNumber1, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 31, "Phone Number 2 :"), " ", ctx.client == null ? null : ctx.client.phoneNumber2, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 33, "Contact Person Name :"), " ", ctx.client == null ? null : ctx.client.contact_person_name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 35, "Contact Person Phone Number 1 :"), " ", ctx.client == null ? null : ctx.client.contact_person_phone_number1, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 37, "Contact Person Phone Number 2 :"), " ", ctx.client == null ? null : ctx.client.contact_person_phone_number2, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 39, "Contact Position :"), " ", ctx.client == null ? null : ctx.client.contact_position, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 41, "Address :"), " ", ctx.client == null ? null : ctx.client.address, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 43, "Started date :"), " ", ctx.client == null ? null : ctx.client.started_date, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 45, "notes :"), " ", ctx.client == null ? null : ctx.client.notes, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 47, "Summary"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 49, "Orders"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 51, "Wearhouses"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allPacks", ctx.allPacks)("allCompanyPacks", ctx.allCompanyPacks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allPacks", ctx.allPacks)("allCompanyPacks", ctx.allCompanyPacks);
          }
        },
        directives: [_summery_summery_component__WEBPACK_IMPORTED_MODULE_4__["SummeryComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"], _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_6__["GiftsComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNvbXBhbnkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCompanyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-company',
            templateUrl: './view-company.component.html',
            styleUrls: ['./view-company.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mbaT":
    /*!**********************************************************!*\
      !*** ./src/app/components/companies/companies.module.ts ***!
      \**********************************************************/

    /*! exports provided: CompaniesModule */

    /***/
    function mbaT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesModule", function () {
        return CompaniesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./companies-routing.module */
      "XRXk");
      /* harmony import */


      var _list_companies_list_companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-companies/list-companies.component */
      "aAn/");
      /* harmony import */


      var _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-company/view-company.component */
      "lZqp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-ckeditor */
      "eLGb");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-dropzone-wrapper */
      "YpNe");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      "rHMi");
      /* harmony import */


      var _summery_summery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./summery/summery.component */
      "9N1x");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./orders/orders.component */
      "nsH6");
      /* harmony import */


      var _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./gifts/gifts.component */
      "l2wG");
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular-count-to */
      "a5BO");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./add-company/add-company.component */
      "GqWC");
      /* harmony import */


      var _add_wearhouse_add_wearhouse_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./add-wearhouse/add-wearhouse.component */
      "kqdy");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _view_wearhouse_view_wearhouse_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./view-wearhouse/view-wearhouse.component */
      "kZ9e");

      var DEFAULT_DROPZONE_CONFIG = {
        maxFilesize: 50,
        url: 'https://httpbin.org/post'
      };

      var CompaniesModule = function CompaniesModule() {
        _classCallCheck(this, CompaniesModule);
      };

      CompaniesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CompaniesModule
      });
      CompaniesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CompaniesModule_Factory(t) {
          return new (t || CompaniesModule)();
        },
        providers: [{
          provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DROPZONE_CONFIG"],
          useValue: DEFAULT_DROPZONE_CONFIG
        }, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbActiveModal"]],
        imports: [[_companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_16__["CountToModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"].forRoot()], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesModule, {
          declarations: [_list_companies_list_companies_component__WEBPACK_IMPORTED_MODULE_3__["ListCompaniesComponent"], _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_4__["ViewCompanyComponent"], _summery_summery_component__WEBPACK_IMPORTED_MODULE_13__["SummeryComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"], _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_15__["GiftsComponent"], _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_18__["AddCompanyComponent"], _add_wearhouse_add_wearhouse_component__WEBPACK_IMPORTED_MODULE_19__["AddWearhouseComponent"], _view_wearhouse_view_wearhouse_component__WEBPACK_IMPORTED_MODULE_26__["ViewWearhouseComponent"]],
          imports: [_companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_16__["CountToModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"]],
          exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_list_companies_list_companies_component__WEBPACK_IMPORTED_MODULE_3__["ListCompaniesComponent"], _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_4__["ViewCompanyComponent"], _summery_summery_component__WEBPACK_IMPORTED_MODULE_13__["SummeryComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"], _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_15__["GiftsComponent"], _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_18__["AddCompanyComponent"], _add_wearhouse_add_wearhouse_component__WEBPACK_IMPORTED_MODULE_19__["AddWearhouseComponent"], _view_wearhouse_view_wearhouse_component__WEBPACK_IMPORTED_MODULE_26__["ViewWearhouseComponent"]],
            imports: [_companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_16__["CountToModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"].forRoot()],
            providers: [{
              provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__["DROPZONE_CONFIG"],
              useValue: DEFAULT_DROPZONE_CONFIG
            }, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbActiveModal"]],
            exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nsH6":
    /*!*****************************************************************!*\
      !*** ./src/app/components/companies/orders/orders.component.ts ***!
      \*****************************************************************/

    /*! exports provided: OrdersComponent */

    /***/
    function nsH6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function OrdersComponent_tr_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.item_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.first_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.last_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.postal_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.appt_no);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.discription);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.items_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.collection_amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.delivery_date);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.barcode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.status);
        }
      }

      function OrdersComponent_tr_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "No data found"));
        }
      }

      var OrdersComponent = /*#__PURE__*/function () {
        function OrdersComponent(modalService, orderService, _domSanitizer, router, route) {
          _classCallCheck(this, OrdersComponent);

          this.modalService = modalService;
          this.orderService = orderService;
          this._domSanitizer = _domSanitizer;
          this.router = router;
          this.route = route;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.records = [];
          this.companiesList = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US");
        }

        _createClass(OrdersComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "open",
          value: function open(content) {
            var _this17 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this17.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this17.closeResult = "Dismissed ".concat(_this17.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              // ... skipped ...
              pageLength: 10,
              language: {
                "emptyTable": "ليست هناك بيانات متاحة في الجدول",
                "loadingRecords": "جارٍ التحميل...",
                "lengthMenu": " _MENU_ ",
                "zeroRecords": "لم يعثر على أية سجلات",
                "info": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
                "infoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
                "infoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
                "search": "بحث:",
                "paginate": {
                  "first": "الأول",
                  "previous": "السابق",
                  "next": "التالي",
                  "last": "الأخير"
                },
                "aria": {
                  "sortAscending": ": تفعيل لترتيب العمود تصاعدياً",
                  "sortDescending": ": تفعيل لترتيب العمود تنازلياً"
                },
                "processing": "جارٍ المعالجة..."
              },
              dom: "lfrtip"
            }; // this.dtOptions.language.url = "src/assets/i18n/datatable.ar.json";

            this.clientId = this.route.snapshot.queryParams["id"];
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this18 = this;

            this.allCompanyPacks = [];
            this.orderService.getCompanyOrders(this.clientId).subscribe(function (or) {
              or.forEach(function (c) {
                c.packages.forEach(function (p) {
                  _this18.allCompanyPacks.push(p);
                });
              });

              if (_this18.isDtInitialized) {
                _this18.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this18.dtTrigger.next();
                });
              } else {
                _this18.isDtInitialized = true;

                _this18.dtTrigger.next();
              } // this.dtTrigger.next();


              _this18.rows = _this18.allCompanyPacks;
              _this18.srch = _toConsumableArray(_this18.rows);
            });
          }
        }, {
          key: "onEditClient",
          value: function onEditClient(event) {}
        }, {
          key: "onEdit",
          value: function onEdit(event) {}
        }, {
          key: "addProduct",
          value: function addProduct() {}
        }]);

        return OrdersComponent;
      }();

      OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
        return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OrdersComponent,
        selectors: [["app-orders"]],
        viewQuery: function OrdersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        inputs: {
          allPacks: "allPacks",
          allCompanyPacks: "allCompanyPacks"
        },
        decls: 57,
        vars: 46,
        consts: [[1, "container-fluid", 2, "background-color", "white"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function OrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, OrdersComponent_tr_55_Template, 31, 15, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, OrdersComponent_tr_56_Template, 5, 3, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 18, "Id"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 20, "First Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 22, "Last Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 24, "Address"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 26, "Postal Code"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 28, "Appt No."));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 30, "Phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 32, "Type"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 34, "Discription"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 36, "Items Qty"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 38, "Amount"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 40, "Delivery Date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 42, "Barcode"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 44, "Status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allCompanyPacks);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allCompanyPacks.length === 0);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
              "static": false
            }]
          }],
          allPacks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          allCompanyPacks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-companies-companies-module-es5.js.map