(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-delivery-delivery-module"], {
    /***/
    "+rzH":
    /*!***************************************************!*\
      !*** ./src/app/shared/interfaces/delivery-boy.ts ***!
      \***************************************************/

    /*! exports provided: DeliveryBoy */

    /***/
    function rzH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryBoy", function () {
        return DeliveryBoy;
      });

      var DeliveryBoy = function DeliveryBoy() {
        _classCallCheck(this, DeliveryBoy);

        this.collectAmount = 0;
        this.com = "100";
      };
      /***/

    },

    /***/
    "1fIb":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/delivery/list-delivery-boys/list-delivery-boys.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ListDeliveryBoysComponent */

    /***/
    function fIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListDeliveryBoysComponent", function () {
        return ListDeliveryBoysComponent;
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


      var src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/delivery.service */
      "zZG3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_assets_pipes_state_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/assets/pipes/state.pipe */
      "1qAI");

      var _c0 = function _c0(a0) {
        return {
          id: a0
        };
      };

      function ListDeliveryBoysComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "statePipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListDeliveryBoysComponent_tr_28_Template_a_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var customer_r2 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onEdit(customer_r2.phone);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListDeliveryBoysComponent_tr_28_Template_a_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var customer_r2 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onDeleteConfirm(customer_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var customer_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, customer_r2 == null ? null : customer_r2.phone));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r2 == null ? null : customer_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r2 == null ? null : customer_r2.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r2 == null ? null : customer_r2.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 8, ctx_r0.states, customer_r2 == null ? null : customer_r2.state));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 11, "Edit"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 13, "Delete"), "");
        }
      }

      function ListDeliveryBoysComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 21);

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

      var ListDeliveryBoysComponent = /*#__PURE__*/function () {
        function ListDeliveryBoysComponent(modalService, deliveryService, _domSanitizer, router, dataService) {
          var _this = this;

          _classCallCheck(this, ListDeliveryBoysComponent);

          this.modalService = modalService;
          this.deliveryService = deliveryService;
          this._domSanitizer = _domSanitizer;
          this.router = router;
          this.dataService = dataService;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.customers = [];
          this.states = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US");
          this.selectedTown = '';
          this.allZone = false;
          var user = localStorage.getItem('adminUser');

          if (user) {
            console.log(user);
            var jsonObj = JSON.parse(user); // string to generic object first

            this.user = jsonObj;
            console.log(this.user);
            this.allZone = this.user.allZone;

            if (!this.allZone) {
              this.selectedTown = this.user.town;
              this.selectedState = this.user.state;
            }
          }

          this.dataService.getAllStates().subscribe(function (states) {
            _this.states = states;
          });
        }

        _createClass(ListDeliveryBoysComponent, [{
          key: "open",
          value: function open(content) {
            var _this2 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this2.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
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
            this.getDBoys();
          }
        }, {
          key: "getDBoys",
          value: function getDBoys() {
            var _this3 = this;

            if (this.allZone) {
              this.deliveryService.getAllDeliveryBoys().subscribe(function (res) {
                if (_this3.isDtInitialized) {
                  _this3.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.destroy();

                    _this3.dtTrigger.next();
                  });
                } else {
                  _this3.isDtInitialized = true;

                  _this3.dtTrigger.next();
                }

                _this3.customers = res;
                console.log(_this3.customers);
              });
            } else {
              this.deliveryService.getDeliveryBoysByZone(this.selectedState).subscribe(function (res) {
                if (_this3.isDtInitialized) {
                  _this3.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.destroy();

                    _this3.dtTrigger.next();
                  });
                } else {
                  _this3.isDtInitialized = true;

                  _this3.dtTrigger.next();
                }

                _this3.customers = res;
                console.log(_this3.customers);
              });
            }
          }
        }, {
          key: "onEditClient",
          value: function onEditClient(event) {}
        }, {
          key: "onDeleteConfirm",
          value: function onDeleteConfirm(user) {
            if (window.confirm('Are you sure you want to delete ' + user.name + ' ?')) {
              //  category.confirm.resolve(category.newData);
              console.log(user.phone);
              this.deliveryService.removeDB(user.phone);
            } else {
              user.confirm.reject();
            }
          }
        }, {
          key: "onEdit",
          value: function onEdit(id) {
            this.router.navigate(['/delivery/add-delivery-boy'], {
              queryParams: {
                id: id
              }
            });
          }
        }]);

        return ListDeliveryBoysComponent;
      }();

      ListDeliveryBoysComponent.ɵfac = function ListDeliveryBoysComponent_Factory(t) {
        return new (t || ListDeliveryBoysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]));
      };

      ListDeliveryBoysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListDeliveryBoysComponent,
        selectors: [["app-list-delivery-boys"]],
        viewQuery: function ListDeliveryBoysComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 30,
        vars: 19,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [1, "text-right"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLink", "/delivery/view-delivery-boy", 3, "queryParams"], [1, "dropdown", "dropdown-action"], ["data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], [1, "dropdown-menu", "dropdown-menu-right"], ["data-toggle", "modal", "data-target", "#edit_leavetype", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-pencil", "m-r-5"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function ListDeliveryBoysComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ListDeliveryBoysComponent_tr_28_Template, 27, 17, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListDeliveryBoysComponent_tr_29_Template, 5, 3, "tr", 10);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, "Phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 13, "Email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 15, "Zone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 17, "Action"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customers);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customers.length === 0);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], src_assets_pipes_state_pipe__WEBPACK_IMPORTED_MODULE_10__["StatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWRlbGl2ZXJ5LWJveXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListDeliveryBoysComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-list-delivery-boys',
            templateUrl: './list-delivery-boys.component.html',
            styleUrls: ['./list-delivery-boys.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]
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
    "1jMD":
    /*!****************************************************************************!*\
      !*** ./src/app/components/delivery/orders-board/orders-board.component.ts ***!
      \****************************************************************************/

    /*! exports provided: OrdersBoardComponent */

    /***/
    function jMD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersBoardComponent", function () {
        return OrdersBoardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var src_app_shared_data_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/data/issue */
      "XeAc");
      /* harmony import */


      var src_app_shared_data_project_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/data/project.query */
      "rqxP");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_svg_definitions_svg_definitions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/svg-definitions/svg-definitions.component */
      "/2ys");
      /* harmony import */


      var _zone_orders_zone_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../zone-orders/zone-orders.component */
      "D7uf");

      function OrdersBoardComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 3);
        }

        if (rf & 2) {
          var status_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", status_r1)("orders", ctx_r0.projectQuery.issueByStatusSorted$(status_r1, ctx_r0.Allorders));
        }
      }

      var OrdersBoardComponent = function OrdersBoardComponent(projectQuery, orderService) {
        _classCallCheck(this, OrdersBoardComponent);

        this.projectQuery = projectQuery;
        this.orderService = orderService;
        this.Allorders = [];
        this.issueStatuses = [src_app_shared_data_issue__WEBPACK_IMPORTED_MODULE_3__["IssueStatus"].NEW, src_app_shared_data_issue__WEBPACK_IMPORTED_MODULE_3__["IssueStatus"].PREPARE, src_app_shared_data_issue__WEBPACK_IMPORTED_MODULE_3__["IssueStatus"].STORED, src_app_shared_data_issue__WEBPACK_IMPORTED_MODULE_3__["IssueStatus"].DISPATCHING];
        this.orders = [];
      };

      OrdersBoardComponent.ɵfac = function OrdersBoardComponent_Factory(t) {
        return new (t || OrdersBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_data_project_query__WEBPACK_IMPORTED_MODULE_4__["ProjectQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]));
      };

      OrdersBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OrdersBoardComponent,
        selectors: [["app-orders-board"]],
        inputs: {
          Allorders: "Allorders"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "flex", "col-xl-12", "w-full", "h-full", "py-8", "pl-8", "pr-6"], ["cdkDropListGroup", "", 1, "flex", "col-xl-12", "mt-7"], ["app-zone-orders", "", "class", "board-dnd-list", 3, "status", "orders", 4, "ngFor", "ngForOf"], ["app-zone-orders", "", 1, "board-dnd-list", 3, "status", "orders"]],
        template: function OrdersBoardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrdersBoardComponent_div_2_Template, 1, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "svg-definitions");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.issueStatuses);
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_svg_definitions_svg_definitions_component__WEBPACK_IMPORTED_MODULE_8__["SvgDefinitionsComponent"], _zone_orders_zone_orders_component__WEBPACK_IMPORTED_MODULE_9__["ZoneOrdersComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      OrdersBoardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()], OrdersBoardComponent);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrdersBoardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-orders-board',
            templateUrl: './orders-board.component.html',
            styleUrls: ['./orders-board.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_data_project_query__WEBPACK_IMPORTED_MODULE_4__["ProjectQuery"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
          }];
        }, {
          Allorders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "4ZtF":
    /*!******************************************************************************!*\
      !*** ./node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js ***!
      \******************************************************************************/

    /*! exports provided: $$addStore, $$deleteStore, $$updateStore, AkitaPlugin, DEFAULT_ID_KEY, DirtyCheckPlugin, EntityActions, EntityCollectionPlugin, EntityDirtyCheckPlugin, EntityService, EntityStateHistoryPlugin, EntityStore, EntityStoreAction, EntityUIQuery, EntityUIStore, Order, Paginator, PaginatorPlugin, PersistNgFormPlugin, Query, QueryConfig, QueryEntity, SnapshotManager, StateHistoryPlugin, Store, StoreAction, StoreConfig, __DEV__, __stores__, action, addEntities, akitaConfig, akitaDevtools, applyTransaction, arrayAdd, arrayFind, arrayRemove, arrayToggle, arrayUpdate, arrayUpsert, byId, byKey, cacheable, coerceArray, combineQueries, commit, compareValues, configKey, createEntityQuery, createEntityStore, createQuery, createStore, currentAction, dirtyCheckDefaultParams, dispatchAdded, dispatchDeleted, dispatchUpdate, distinctUntilArrayItemChanged, enableAkitaProdMode, endBatch, entitiesToArray, entitiesToMap, filterNil, filterNilValue, find, getActiveEntities, getAkitaConfig, getEntityStore, getEntityStoreByName, getExitingActives, getInitialEntitiesState, getNestedPath, getStore, getStoreByName, getValue, guid, hasActiveState, hasEntity, isArray, isDefined, isDev, isEmpty, isEntityState, isFunction, isMultiActiveState, isNil, isNotBrowser, isNumber, isObject, isPlainObject, isString, isTransactionInProcess, isUndefined, logAction, persistState, queryConfigKey, removeAllEntities, removeEntities, resetCustomAction, resetStores, resolveActiveEntity, runEntityStoreAction, runStoreAction, selectPersistStateInit, setAction, setEntities, setLoading, setLoadingAndError, setSkipAction, setValue, snapshotManager, sortByOptions, startBatch, toBoolean, toEntitiesIds, toEntitiesObject, trackIdChanges, transaction, transactionManager, updateEntities, withTransaction, ɵa */

    /***/
    function ZtF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _EntityStoreActionMap;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$$addStore", function () {
        return $$addStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$$deleteStore", function () {
        return $$deleteStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$$updateStore", function () {
        return $$updateStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AkitaPlugin", function () {
        return AkitaPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_ID_KEY", function () {
        return DEFAULT_ID_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DirtyCheckPlugin", function () {
        return DirtyCheckPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityActions", function () {
        return EntityActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityCollectionPlugin", function () {
        return EntityCollectionPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityDirtyCheckPlugin", function () {
        return EntityDirtyCheckPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityService", function () {
        return EntityService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityStateHistoryPlugin", function () {
        return EntityStateHistoryPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityStore", function () {
        return EntityStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityStoreAction", function () {
        return EntityStoreAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityUIQuery", function () {
        return EntityUIQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityUIStore", function () {
        return EntityUIStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return Order;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Paginator", function () {
        return Paginator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatorPlugin", function () {
        return PaginatorPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersistNgFormPlugin", function () {
        return PersistNgFormPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Query", function () {
        return Query;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueryConfig", function () {
        return QueryConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueryEntity", function () {
        return QueryEntity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnapshotManager", function () {
        return SnapshotManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateHistoryPlugin", function () {
        return StateHistoryPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Store", function () {
        return Store;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreAction", function () {
        return StoreAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreConfig", function () {
        return StoreConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__DEV__", function () {
        return __DEV__;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__stores__", function () {
        return __stores__;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "action", function () {
        return action;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addEntities", function () {
        return addEntities;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "akitaConfig", function () {
        return akitaConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "akitaDevtools", function () {
        return akitaDevtools;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyTransaction", function () {
        return applyTransaction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayAdd", function () {
        return arrayAdd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayFind", function () {
        return arrayFind;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayRemove", function () {
        return arrayRemove;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayToggle", function () {
        return arrayToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayUpdate", function () {
        return arrayUpdate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayUpsert", function () {
        return arrayUpsert;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "byId", function () {
        return byId;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "byKey", function () {
        return byKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cacheable", function () {
        return cacheable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return coerceArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineQueries", function () {
        return combineQueries;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "commit", function () {
        return commit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compareValues", function () {
        return compareValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "configKey", function () {
        return configKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEntityQuery", function () {
        return createEntityQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEntityStore", function () {
        return createEntityStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createQuery", function () {
        return createQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createStore", function () {
        return createStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "currentAction", function () {
        return currentAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dirtyCheckDefaultParams", function () {
        return dirtyCheckDefaultParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dispatchAdded", function () {
        return dispatchAdded;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dispatchDeleted", function () {
        return dispatchDeleted;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dispatchUpdate", function () {
        return dispatchUpdate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "distinctUntilArrayItemChanged", function () {
        return distinctUntilArrayItemChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableAkitaProdMode", function () {
        return enableAkitaProdMode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "endBatch", function () {
        return endBatch;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "entitiesToArray", function () {
        return entitiesToArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "entitiesToMap", function () {
        return entitiesToMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterNil", function () {
        return filterNil;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterNilValue", function () {
        return filterNilValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "find", function () {
        return find;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getActiveEntities", function () {
        return getActiveEntities;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAkitaConfig", function () {
        return getAkitaConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEntityStore", function () {
        return getEntityStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEntityStoreByName", function () {
        return getEntityStoreByName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getExitingActives", function () {
        return getExitingActives;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getInitialEntitiesState", function () {
        return getInitialEntitiesState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getNestedPath", function () {
        return getNestedPath;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStore", function () {
        return getStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStoreByName", function () {
        return getStoreByName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getValue", function () {
        return getValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guid", function () {
        return guid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasActiveState", function () {
        return hasActiveState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasEntity", function () {
        return hasEntity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isArray", function () {
        return isArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDefined", function () {
        return isDefined;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDev", function () {
        return isDev;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return isEmpty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEntityState", function () {
        return isEntityState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFunction", function () {
        return isFunction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMultiActiveState", function () {
        return isMultiActiveState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNil", function () {
        return isNil;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNotBrowser", function () {
        return isNotBrowser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNumber", function () {
        return isNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isObject", function () {
        return isObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPlainObject", function () {
        return isPlainObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isString", function () {
        return isString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTransactionInProcess", function () {
        return isTransactionInProcess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isUndefined", function () {
        return isUndefined;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logAction", function () {
        return logAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "persistState", function () {
        return persistState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "queryConfigKey", function () {
        return queryConfigKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeAllEntities", function () {
        return removeAllEntities;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeEntities", function () {
        return removeEntities;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resetCustomAction", function () {
        return resetCustomAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resetStores", function () {
        return resetStores;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resolveActiveEntity", function () {
        return resolveActiveEntity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "runEntityStoreAction", function () {
        return runEntityStoreAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "runStoreAction", function () {
        return runStoreAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectPersistStateInit", function () {
        return selectPersistStateInit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setAction", function () {
        return setAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setEntities", function () {
        return setEntities;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLoading", function () {
        return setLoading;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLoadingAndError", function () {
        return setLoadingAndError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setSkipAction", function () {
        return setSkipAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setValue", function () {
        return setValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "snapshotManager", function () {
        return snapshotManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortByOptions", function () {
        return sortByOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startBatch", function () {
        return startBatch;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toBoolean", function () {
        return toBoolean;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toEntitiesIds", function () {
        return toEntitiesIds;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toEntitiesObject", function () {
        return toEntitiesObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackIdChanges", function () {
        return trackIdChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transaction", function () {
        return transaction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transactionManager", function () {
        return transactionManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateEntities", function () {
        return updateEntities;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "withTransaction", function () {
        return withTransaction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return isBrowser;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var currentAction = {
        type: null,
        entityIds: null,
        skip: false,
        payload: null
      };
      var customActionActive = false;

      function resetCustomAction() {
        customActionActive = false;
      } // public API for custom actions. Custom action always wins


      function logAction(type, entityIds, payload) {
        setAction(type, entityIds, payload);
        customActionActive = true;
      }

      function setAction(type, entityIds, payload) {
        if (customActionActive === false) {
          currentAction.type = type;
          currentAction.entityIds = entityIds;
          currentAction.payload = payload;
        }
      }

      function setSkipAction() {
        var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        currentAction.skip = skip;
      }

      function action(action, entityIds) {
        return function (target, propertyKey, descriptor) {
          var originalMethod = descriptor.value;

          descriptor.value = function () {
            logAction(action, entityIds);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return originalMethod.apply(this, args);
          };

          return descriptor;
        };
      } // @internal


      function hasEntity(entities, id) {
        return entities.hasOwnProperty(id);
      } // @internal


      function isArray(value) {
        return Array.isArray(value);
      } // @internal


      function hasActiveState(state) {
        return state.hasOwnProperty('active');
      } // @internal


      function isMultiActiveState(active) {
        return isArray(active);
      } // @internal


      function resolveActiveEntity(_ref) {
        var active = _ref.active,
            ids = _ref.ids,
            entities = _ref.entities;

        if (isMultiActiveState(active)) {
          return getExitingActives(active, ids);
        }

        if (hasEntity(entities, active) === false) {
          return null;
        }

        return active;
      } // @internal


      function getExitingActives(currentActivesIds, newIds) {
        var filtered = currentActivesIds.filter(function (id) {
          return newIds.indexOf(id) > -1;
        });
        /** Return the same reference if nothing has changed */

        if (filtered.length === currentActivesIds.length) {
          return currentActivesIds;
        }

        return filtered;
      } // @internal


      function addEntities(_ref2) {
        var state = _ref2.state,
            entities = _ref2.entities,
            idKey = _ref2.idKey,
            _ref2$options = _ref2.options,
            options = _ref2$options === void 0 ? {} : _ref2$options,
            preAddEntity = _ref2.preAddEntity;
        var newEntities = {};
        var newIds = [];
        var hasNewEntities = false;

        var _iterator = _createForOfIteratorHelper(entities),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entity = _step.value;

            if (hasEntity(state.entities, entity[idKey]) === false) {
              // evaluate the middleware first to support dynamic ids
              var current = preAddEntity(entity);
              var entityId = current[idKey];
              newEntities[entityId] = current;
              if (options.prepend) newIds.unshift(entityId);else newIds.push(entityId);
              hasNewEntities = true;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return hasNewEntities ? {
          newState: Object.assign(Object.assign({}, state), {
            entities: Object.assign(Object.assign({}, state.entities), newEntities),
            ids: options.prepend ? [].concat(newIds, _toConsumableArray(state.ids)) : [].concat(_toConsumableArray(state.ids), newIds)
          }),
          newIds: newIds
        } : null;
      } // @internal


      function isNil(v) {
        return v === null || v === undefined;
      } // @internal


      function coerceArray(value) {
        if (isNil(value)) {
          return [];
        }

        return Array.isArray(value) ? value : [value];
      }
      /**
       * Add item to a collection
       *
       * @example
       *
       *
       * store.update(state => ({
       *   comments: arrayAdd(state.comments, { id: 2 })
       * }))
       *
       */


      function arrayAdd(arr, newEntity) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var newEntities = coerceArray(newEntity);
        var toArr = arr || [];
        return options.prepend ? [].concat(_toConsumableArray(newEntities), _toConsumableArray(toArr)) : [].concat(_toConsumableArray(toArr), _toConsumableArray(newEntities));
      }

      var DEFAULT_ID_KEY = 'id'; // @internal

      function isEmpty(arr) {
        if (isArray(arr)) {
          return arr.length === 0;
        }

        return false;
      } // @internal


      function isFunction(value) {
        return typeof value === 'function';
      } // @internal


      function find(collection, idsOrPredicate, idKey) {
        var result = [];

        if (isFunction(idsOrPredicate)) {
          var _iterator2 = _createForOfIteratorHelper(collection),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var entity = _step2.value;

              if (idsOrPredicate(entity) === true) {
                result.push(entity);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else {
          var toSet = coerceArray(idsOrPredicate).reduce(function (acc, current) {
            return acc.add(current);
          }, new Set());

          var _iterator3 = _createForOfIteratorHelper(collection),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _entity = _step3.value;

              if (toSet.has(_entity[idKey])) {
                result.push(_entity);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        return result;
      } // @internal


      function distinctUntilArrayItemChanged() {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(function (prevCollection, currentCollection) {
          if (prevCollection === currentCollection) {
            return true;
          }

          if (!isArray(prevCollection) || !isArray(currentCollection)) {
            return false;
          }

          if (isEmpty(prevCollection) && isEmpty(currentCollection)) {
            return true;
          }

          if (prevCollection.length !== currentCollection.length) {
            return false;
          }

          var isOneOfItemReferenceChanged = currentCollection.some(function (item, i) {
            return prevCollection[i] !== item;
          }); // return false means there is a change and we want to call next()

          return isOneOfItemReferenceChanged === false;
        });
      }

      function arrayFind(idsOrPredicate, idKey) {
        return function (source) {
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (collection) {
            // which means the user deleted the root entity or set the collection to nil
            if (isArray(collection) === false) {
              return collection;
            }

            return find(collection, idsOrPredicate, idKey || DEFAULT_ID_KEY);
          }), distinctUntilArrayItemChanged(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (value) {
            if (isArray(value) === false) {
              return value;
            }

            if (isArray(idsOrPredicate) || isFunction(idsOrPredicate)) {
              return value;
            }

            return value[0];
          }));
        };
      } // @internal


      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      } // @internal


      function not(pred) {
        return function () {
          return !pred.apply(void 0, arguments);
        };
      }
      /**
       * Remove item from collection
       *
       * @example
       *
       *
       * store.update(state => ({
       *   names: arrayRemove(state.names, ['one', 'second'])
       * }))
       */


      function arrayRemove(arr, identifier) {
        var idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ID_KEY;
        var identifiers;
        var filterFn;

        if (isFunction(identifier)) {
          filterFn = not(identifier);
        } else {
          identifiers = coerceArray(identifier);

          filterFn = function filterFn(current) {
            return identifiers.includes(isObject(current) ? current[idKey] : current) === false;
          };
        }

        if (Array.isArray(arr)) {
          return arr.filter(filterFn);
        }
      }
      /**
       * Create an array value comparator for a specific key of the value.
       * @param prop The property of the value to be compared.
       */


      function byKey(prop) {
        return function (a, b) {
          return a[prop] === b[prop];
        };
      }
      /**
       * Create an array value comparator for the id field of an array value.
       */


      function byId() {
        return byKey('id');
      }
      /**
       * Adds or removes a value from an array by comparing its values. If a matching value exists it is removed, otherwise
       * it is added to the array.
       *
       * @param array The array to modify.
       * @param newValue The new value to toggle.
       * @param compare A compare function to determine equality of array values. Default is an equality test by object identity.
       */


      function arrayToggle(array, newValue) {
        var compare = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a, b) {
          return a === b;
        };
        var index = array.findIndex(function (oldValue) {
          return compare(newValue, oldValue);
        });
        return !!~index ? [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1))) : [].concat(_toConsumableArray(array), [newValue]);
      }
      /**
       * Update item in a collection
       *
       * @example
       *
       *
       * store.update(1, entity => ({
       *   comments: arrayUpdate(entity.comments, 1, { name: 'newComment' })
       * }))
       */


      function arrayUpdate(arr, predicateOrIds, obj) {
        var idKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_ID_KEY;
        var condition;

        if (isFunction(predicateOrIds)) {
          condition = predicateOrIds;
        } else {
          var ids = coerceArray(predicateOrIds);

          condition = function condition(item) {
            return ids.includes(isObject(item) ? item[idKey] : item) === true;
          };
        }

        var updateFn = function updateFn(state) {
          return state.map(function (entity, index) {
            if (condition(entity, index) === true) {
              return isObject(entity) ? Object.assign(Object.assign({}, entity), obj) : obj;
            }

            return entity;
          });
        };

        return updateFn(arr);
      }
      /**
       * Upsert item in a collection
       *
       * @example
       *
       *
       * store.update(1, entity => ({
       *   comments: arrayUpsert(entity.comments, 1, { name: 'newComment' })
       * }))
       */


      function arrayUpsert(arr, id, obj) {
        var idKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_ID_KEY;
        var entityIsObject = isObject(obj);
        var entityExists = arr.some(function (entity) {
          return entityIsObject ? entity[idKey] === id : entity === id;
        });

        if (entityExists) {
          return arrayUpdate(arr, id, obj, idKey);
        } else {
          return arrayAdd(arr, entityIsObject ? Object.assign(Object.assign({}, obj), _defineProperty({}, idKey, id)) : obj);
        }
      }
      /**
       *
       * Helper function for checking if we have data in cache
       *
       * export class ProductsService {
       *   constructor(private productsStore: ProductsStore) {}
      
       *   get(): Observable<void> {
       *     const request = this.http.get().pipe(
       *       tap(this.productsStore.set(response))
       *     );
       *
       *     return cacheable(this.productsStore, request);
       *   }
       * }
       */


      function cacheable(store, request$) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          emitNext: false
        };

        if (store._cache().value) {
          return options.emitNext ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined) : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        }

        return request$;
      }

      function combineQueries(observables) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["auditTime"])(0));
      }

      var CONFIG = {
        resettable: false,
        ttl: null,
        producerFn: undefined
      };

      function akitaConfig(config) {
        CONFIG = Object.assign(Object.assign({}, CONFIG), config);
      } // @internal


      function getAkitaConfig() {
        return CONFIG;
      }

      function getGlobalProducerFn() {
        return CONFIG.producerFn;
      } // @internal


      function isDefined(val) {
        return isNil(val) === false;
      } // @internal


      var $$deleteStore = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // @internal

      var $$addStore = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](50, 5000); // @internal

      var $$updateStore = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // @internal

      function dispatchDeleted(storeName) {
        $$deleteStore.next(storeName);
      } // @internal


      function dispatchAdded(storeName) {
        $$addStore.next(storeName);
      } // @internal


      function dispatchUpdate(storeName, action) {
        $$updateStore.next({
          storeName: storeName,
          action: action
        });
      }

      var isBrowser = typeof window !== 'undefined';
      var isNotBrowser = !isBrowser; // export const isNativeScript = typeof global !== 'undefined' && (<any>global).__runtimeVersion !== 'undefined'; TODO is this used?

      var hasLocalStorage = function hasLocalStorage() {
        try {
          return typeof localStorage !== 'undefined';
        } catch (_a) {
          return false;
        }
      };

      var hasSessionStorage = function hasSessionStorage() {
        try {
          return typeof sessionStorage !== 'undefined';
        } catch (_a) {
          return false;
        }
      }; // @internal


      var __stores__ = {}; // @internal

      var __queries__ = {};

      if (isBrowser) {
        window.$$stores = __stores__;
        window.$$queries = __queries__;
      } // @internal


      function capitalize(value) {
        return value && value.charAt(0).toUpperCase() + value.slice(1);
      }

      var subs = [];

      function akitaDevtools(ngZoneOrOptions) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (isNotBrowser) return;

        if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
          return;
        }

        subs.length && subs.forEach(function (s) {
          if (s.unsubscribe) {
            s.unsubscribe();
          } else {
            s && s();
          }
        });
        var isAngular = ngZoneOrOptions && ngZoneOrOptions['run'];

        if (!isAngular) {
          ngZoneOrOptions = ngZoneOrOptions || {};

          ngZoneOrOptions.run = function (cb) {
            return cb();
          };

          options = ngZoneOrOptions;
        }

        var defaultOptions = {
          name: 'Akita',
          shallow: true,
          storesWhitelist: []
        };
        var merged = Object.assign({}, defaultOptions, options);
        var storesWhitelist = merged.storesWhitelist;

        var devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(merged);

        var appState = {};

        var isAllowed = function isAllowed(storeName) {
          if (!storesWhitelist.length) {
            return true;
          }

          return storesWhitelist.indexOf(storeName) > -1;
        };

        subs.push($$addStore.subscribe(function (storeName) {
          if (isAllowed(storeName) === false) return;
          appState = Object.assign(Object.assign({}, appState), _defineProperty({}, storeName, __stores__[storeName]._value()));
          devTools.send({
            type: "[".concat(capitalize(storeName), "] - @@INIT")
          }, appState);
        }));
        subs.push($$deleteStore.subscribe(function (storeName) {
          if (isAllowed(storeName) === false) return;
          delete appState[storeName];
          devTools.send({
            type: "[".concat(storeName, "] - Delete Store")
          }, appState);
        }));
        subs.push($$updateStore.subscribe(function (_ref3) {
          var storeName = _ref3.storeName,
              action = _ref3.action;
          if (isAllowed(storeName) === false) return;
          var type = action.type,
              entityIds = action.entityIds,
              skip = action.skip,
              rest = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__rest"])(action, ["type", "entityIds", "skip"]);
          var payload = rest.payload;

          if (skip) {
            setSkipAction(false);
            return;
          }

          var store = __stores__[storeName];

          if (!store) {
            return;
          }

          if (options.shallow === false && appState[storeName]) {
            var isEqual = JSON.stringify(store._value()) === JSON.stringify(appState[storeName]);
            if (isEqual) return;
          }

          appState = Object.assign(Object.assign({}, appState), _defineProperty({}, storeName, store._value()));
          var normalize = capitalize(storeName);
          var msg = isDefined(entityIds) ? "[".concat(normalize, "] - ").concat(type, " (ids: ").concat(entityIds, ")") : "[".concat(normalize, "] - ").concat(type);

          if (options.logTrace) {
            console.group(msg);
            console.trace();
            console.groupEnd();
          }

          if (options.sortAlphabetically) {
            var sortedAppState = Object.keys(appState).sort().reduce(function (acc, storeName) {
              acc[storeName] = appState[storeName];
              return acc;
            }, {});
            devTools.send(Object.assign({
              type: msg
            }, payload), sortedAppState);
            return;
          }

          devTools.send(Object.assign({
            type: msg
          }, payload), appState);
        }));
        subs.push(devTools.subscribe(function (message) {
          if (message.type === 'DISPATCH') {
            var payloadType = message.payload.type;

            if (payloadType === 'COMMIT') {
              devTools.init(appState);
              return;
            }

            if (message.state) {
              (function () {
                var rootState = JSON.parse(message.state);

                var _loop = function _loop(i, keys) {
                  var storeName = keys[i];

                  if (__stores__[storeName]) {
                    ngZoneOrOptions.run(function () {
                      __stores__[storeName]._setState(function () {
                        return rootState[storeName];
                      }, false);
                    });
                  }
                };

                for (var i = 0, keys = Object.keys(rootState); i < keys.length; i++) {
                  _loop(i, keys);
                }
              })();
            }
          }
        }));
      }

      var Order;

      (function (Order) {
        Order["ASC"] = "asc";
        Order["DESC"] = "desc";
      })(Order || (Order = {})); // @internal


      function compareValues(key) {
        var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Order.ASC;
        return function (a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
          }

          var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
          var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
          var comparison = 0;

          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }

          return order == Order.DESC ? comparison * -1 : comparison;
        };
      } // @internal


      function entitiesToArray(state, options) {
        var arr = [];
        var ids = state.ids,
            entities = state.entities;
        var filterBy = options.filterBy,
            limitTo = options.limitTo,
            sortBy = options.sortBy,
            sortByOrder = options.sortByOrder;

        var _loop2 = function _loop2(i) {
          var entity = entities[ids[i]];

          if (!filterBy) {
            arr.push(entity);
            return "continue";
          }

          var toArray = coerceArray(filterBy);
          var allPass = toArray.every(function (fn) {
            return fn(entity, i);
          });

          if (allPass) {
            arr.push(entity);
          }
        };

        for (var i = 0; i < ids.length; i++) {
          var _ret = _loop2(i);

          if (_ret === "continue") continue;
        }

        if (sortBy) {
          var _sortBy = isFunction(sortBy) ? sortBy : compareValues(sortBy, sortByOrder);

          arr = arr.sort(function (a, b) {
            return _sortBy(a, b, state);
          });
        }

        var length = Math.min(limitTo || arr.length, arr.length);
        return length === arr.length ? arr : arr.slice(0, length);
      } // @internal


      function entitiesToMap(state, options) {
        var map = {};
        var filterBy = options.filterBy,
            limitTo = options.limitTo;
        var ids = state.ids,
            entities = state.entities;

        if (!filterBy && !limitTo) {
          return entities;
        }

        var hasLimit = isNil(limitTo) === false;

        if (filterBy && hasLimit) {
          var count = 0;

          var _loop3 = function _loop3(i, length) {
            if (count === limitTo) return "break";
            var id = ids[i];
            var entity = entities[id];
            var allPass = coerceArray(filterBy).every(function (fn) {
              return fn(entity, i);
            });

            if (allPass) {
              map[id] = entity;
              count++;
            }
          };

          for (var i = 0, length = ids.length; i < length; i++) {
            var _ret2 = _loop3(i, length);

            if (_ret2 === "break") break;
          }
        } else {
          var finalLength = Math.min(limitTo || ids.length, ids.length);

          var _loop4 = function _loop4(_i) {
            var id = ids[_i];
            var entity = entities[id];

            if (!filterBy) {
              map[id] = entity;
              return "continue";
            }

            var allPass = coerceArray(filterBy).every(function (fn) {
              return fn(entity, _i);
            });

            if (allPass) {
              map[id] = entity;
            }
          };

          for (var _i = 0; _i < finalLength; _i++) {
            var _ret3 = _loop4(_i);

            if (_ret3 === "continue") continue;
          }
        }

        return map;
      }

      var EntityActions;

      (function (EntityActions) {
        EntityActions["Set"] = "Set";
        EntityActions["Add"] = "Add";
        EntityActions["Update"] = "Update";
        EntityActions["Remove"] = "Remove";
      })(EntityActions || (EntityActions = {}));

      var EntityService = function EntityService() {
        _classCallCheck(this, EntityService);
      };

      var __DEV__ = true;

      function enableAkitaProdMode() {
        __DEV__ = false;

        if (isBrowser) {
          delete window.$$stores;
          delete window.$$queries;
        }
      } // @internal


      function isDev() {
        return __DEV__;
      } // @internal


      function getActiveEntities(idOrOptions, ids, currentActive) {
        var result;

        if (isArray(idOrOptions)) {
          result = idOrOptions;
        } else {
          if (isObject(idOrOptions)) {
            if (isNil(currentActive)) return;
            idOrOptions = Object.assign({
              wrap: true
            }, idOrOptions);
            var currentIdIndex = ids.indexOf(currentActive);

            if (idOrOptions.prev) {
              var isFirst = currentIdIndex === 0;
              if (isFirst && !idOrOptions.wrap) return;
              result = isFirst ? ids[ids.length - 1] : ids[currentIdIndex - 1];
            } else if (idOrOptions.next) {
              var isLast = ids.length === currentIdIndex + 1;
              if (isLast && !idOrOptions.wrap) return;
              result = isLast ? ids[0] : ids[currentIdIndex + 1];
            }
          } else {
            if (idOrOptions === currentActive) return;
            result = idOrOptions;
          }
        }

        return result;
      } // @internal


      var getInitialEntitiesState = function getInitialEntitiesState() {
        return {
          entities: {},
          ids: [],
          loading: true,
          error: null
        };
      }; // @internal


      function isUndefined(value) {
        return value === undefined;
      } // @internal


      function removeEntities(_ref4) {
        var state = _ref4.state,
            ids = _ref4.ids;
        if (isNil(ids)) return removeAllEntities(state);
        var entities = state.entities;
        var newEntities = {};

        var _iterator4 = _createForOfIteratorHelper(state.ids),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var id = _step4.value;

            if (ids.includes(id) === false) {
              newEntities[id] = entities[id];
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        var newState = Object.assign(Object.assign({}, state), {
          entities: newEntities,
          ids: state.ids.filter(function (current) {
            return ids.includes(current) === false;
          })
        });

        if (hasActiveState(state)) {
          newState.active = resolveActiveEntity(newState);
        }

        return newState;
      } // @internal


      function removeAllEntities(state) {
        return Object.assign(Object.assign({}, state), {
          entities: {},
          ids: [],
          active: isMultiActiveState(state.active) ? [] : null
        });
      } // @internal


      function toEntitiesObject(entities, idKey, preAddEntity) {
        var acc = {
          entities: {},
          ids: []
        };

        var _iterator5 = _createForOfIteratorHelper(entities),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var entity = _step5.value;
            // evaluate the middleware first to support dynamic ids
            var current = preAddEntity(entity);
            acc.entities[current[idKey]] = current;
            acc.ids.push(current[idKey]);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        return acc;
      } // @internal


      function isEntityState(state) {
        return state.entities && state.ids;
      } // @internal


      function applyMiddleware(entities, preAddEntity) {
        var mapped = {};

        for (var _i2 = 0, _Object$keys = Object.keys(entities); _i2 < _Object$keys.length; _i2++) {
          var id = _Object$keys[_i2];
          mapped[id] = preAddEntity(entities[id]);
        }

        return mapped;
      } // @internal


      function setEntities(_ref5) {
        var state = _ref5.state,
            entities = _ref5.entities,
            idKey = _ref5.idKey,
            preAddEntity = _ref5.preAddEntity,
            isNativePreAdd = _ref5.isNativePreAdd;
        var newEntities;
        var newIds;

        if (isArray(entities)) {
          var resolve = toEntitiesObject(entities, idKey, preAddEntity);
          newEntities = resolve.entities;
          newIds = resolve.ids;
        } else if (isEntityState(entities)) {
          newEntities = isNativePreAdd ? entities.entities : applyMiddleware(entities.entities, preAddEntity);
          newIds = entities.ids;
        } else {
          // it's an object
          newEntities = isNativePreAdd ? entities : applyMiddleware(entities, preAddEntity);
          newIds = Object.keys(newEntities).map(function (id) {
            return isNaN(id) ? id : Number(id);
          });
        }

        var newState = Object.assign(Object.assign({}, state), {
          entities: newEntities,
          ids: newIds,
          loading: false
        });

        if (hasActiveState(state)) {
          newState.active = resolveActiveEntity(newState);
        }

        return newState;
      } // @internal


      function deepFreeze(o) {
        Object.freeze(o);
        var oIsFunction = typeof o === 'function';
        var hasOwnProp = Object.prototype.hasOwnProperty;
        Object.getOwnPropertyNames(o).forEach(function (prop) {
          if (hasOwnProp.call(o, prop) && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) && o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
          }
        });
        return o;
      } // @internal


      var AkitaError = /*#__PURE__*/function (_Error) {
        _inherits(AkitaError, _Error);

        var _super = _createSuper(AkitaError);

        function AkitaError(message) {
          _classCallCheck(this, AkitaError);

          return _super.call(this, message);
        }

        return AkitaError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)); // @internal


      function assertStoreHasName(name, className) {
        if (!name) {
          console.error("@StoreConfig({ name }) is missing in ".concat(className));
        }
      } // @internal


      function toBoolean(value) {
        return value != null && "".concat(value) !== 'false';
      } // @internal


      function isPlainObject(value) {
        return toBoolean(value) && value.constructor.name === 'Object';
      }

      var configKey = 'akitaConfig';

      function StoreConfig(metadata) {
        return function (constructor) {
          constructor[configKey] = {
            idKey: 'id'
          };

          for (var i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
            var key = keys[i];
            /* name is preserved read only key */

            if (key === 'name') {
              constructor[configKey]['storeName'] = metadata[key];
            } else {
              constructor[configKey][key] = metadata[key];
            }
          }
        };
      } // @internal


      var transactionFinished = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // @internal

      var transactionInProcess = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); // @internal

      var transactionManager = {
        activeTransactions: 0,
        batchTransaction: null
      }; // @internal

      function startBatch() {
        if (!isTransactionInProcess()) {
          transactionManager.batchTransaction = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        transactionManager.activeTransactions++;
        transactionInProcess.next(true);
      } // @internal


      function endBatch() {
        if (--transactionManager.activeTransactions === 0) {
          transactionManager.batchTransaction.next(true);
          transactionManager.batchTransaction.complete();
          transactionInProcess.next(false);
          transactionFinished.next(true);
        }
      } // @internal


      function isTransactionInProcess() {
        return transactionManager.activeTransactions > 0;
      } // @internal


      function commit() {
        return transactionManager.batchTransaction ? transactionManager.batchTransaction.asObservable() : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
      }
      /**
       *  A logical transaction.
       *  Use this transaction to optimize the dispatch of all the stores.
       *  The following code will update the store, BUT  emits only once
       *
       *  @example
       *  applyTransaction(() => {
       *    this.todosStore.add(new Todo(1, title));
       *    this.todosStore.add(new Todo(2, title));
       *  });
       *
       */


      function applyTransaction(action) {
        var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        startBatch();

        try {
          return action.apply(thisArg);
        } finally {
          logAction('@Transaction');
          endBatch();
        }
      }
      /**
       *  A logical transaction.
       *  Use this transaction to optimize the dispatch of all the stores.
       *
       *  The following code will update the store, BUT  emits only once.
       *
       *  @example
       *  @transaction
       *  addTodos() {
       *    this.todosStore.add(new Todo(1, title));
       *    this.todosStore.add(new Todo(2, title));
       *  }
       *
       *
       */


      function transaction() {
        return function (target, propertyKey, descriptor) {
          var originalMethod = descriptor.value;

          descriptor.value = function () {
            var _this4 = this;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return applyTransaction(function () {
              return originalMethod.apply(_this4, args);
            }, this);
          };

          return descriptor;
        };
      }
      /**
       *
       * RxJS custom operator that wraps the callback inside transaction
       *
       * @example
       *
       * return http.get().pipe(
       *    withTransaction(response > {
       *      store.setActive(1);
       *      store.update();
       *      store.updateEntity(1, {});
       *    })
       * )
       *
       */


      function withTransaction(next) {
        return function (source) {
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (value) {
            return applyTransaction(function () {
              return next(value);
            });
          }));
        };
      }
      /**
       *
       * Store for managing any type of data
       *
       * @example
       *
       * export interface SessionState {
       *   token: string;
       *   userDetails: UserDetails
       * }
       *
       * export function createInitialState(): SessionState {
       *  return {
       *    token: '',
       *    userDetails: null
       *  };
       * }
       *
       * @StoreConfig({ name: 'session' })
       * export class SessionStore extends Store<SessionState> {
       *   constructor() {
       *    super(createInitialState());
       *   }
       * }
       */


      var Store = /*#__PURE__*/function () {
        function Store(initialState) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Store);

          this.options = options;
          this.inTransaction = false;
          this.cache = {
            active: new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false),
            ttl: null
          };
          this.onInit(initialState);
        }
        /**
         *  Set the loading state
         *
         *  @example
         *
         *  store.setLoading(true)
         *
         */


        _createClass(Store, [{
          key: "setLoading",
          value: function setLoading() {
            var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (loading !== this._value().loading) {
              isDev() && setAction('Set Loading');

              this._setState(function (state) {
                return Object.assign(Object.assign({}, state), {
                  loading: loading
                });
              });
            }
          }
          /**
           *
           * Set whether the data is cached
           *
           * @example
           *
           * store.setHasCache(true)
           * store.setHasCache(false)
           * store.setHasCache(true, { restartTTL: true })
           *
           */

        }, {
          key: "setHasCache",
          value: function setHasCache(hasCache) {
            var _this5 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              restartTTL: false
            };

            if (hasCache !== this.cache.active.value) {
              this.cache.active.next(hasCache);
            }

            if (options.restartTTL) {
              var ttlConfig = this.getCacheTTL();

              if (ttlConfig) {
                if (this.cache.ttl !== null) {
                  clearTimeout(this.cache.ttl);
                }

                this.cache.ttl = setTimeout(function () {
                  return _this5.setHasCache(false);
                }, ttlConfig);
              }
            }
          }
          /**
           *
           * Sometimes we need to access the store value from a store
           *
           * @example middleware
           *
           */

        }, {
          key: "getValue",
          value: function getValue() {
            return this.storeValue;
          }
          /**
           *  Set the error state
           *
           *  @example
           *
           *  store.setError({text: 'unable to load data' })
           *
           */

        }, {
          key: "setError",
          value: function setError(error) {
            if (error !== this._value().error) {
              isDev() && setAction('Set Error');

              this._setState(function (state) {
                return Object.assign(Object.assign({}, state), {
                  error: error
                });
              });
            }
          } // @internal

        }, {
          key: "_select",
          value: function _select(project) {
            return this.store.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (snapshot) {
              return project(snapshot.state);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
          } // @internal

        }, {
          key: "_value",
          value: function _value() {
            return this.storeValue;
          } // @internal

        }, {
          key: "_cache",
          value: function _cache() {
            return this.cache.active;
          } // @internal

        }, {
          key: "config",
          get: function get() {
            return this.constructor[configKey] || {};
          } // @internal

        }, {
          key: "storeName",
          get: function get() {
            return this.config.storeName || this.options.storeName || this.options.name;
          } // @internal

        }, {
          key: "deepFreeze",
          get: function get() {
            return this.config.deepFreezeFn || this.options.deepFreezeFn || deepFreeze;
          } // @internal

        }, {
          key: "cacheConfig",
          get: function get() {
            return this.config.cache || this.options.cache;
          }
        }, {
          key: "_producerFn",
          get: function get() {
            return this.config.producerFn || this.options.producerFn || getGlobalProducerFn();
          } // @internal

        }, {
          key: "resettable",
          get: function get() {
            return isDefined(this.config.resettable) ? this.config.resettable : this.options.resettable;
          } // @internal

        }, {
          key: "_setState",
          value: function _setState(newState) {
            var _this6 = this;

            var _dispatchAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (isFunction(newState)) {
              var _newState = newState(this._value());

              this.storeValue = __DEV__ ? this.deepFreeze(_newState) : _newState;
            } else {
              this.storeValue = newState;
            }

            if (!this.store) {
              this.store = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
                state: this.storeValue
              });

              if (isDev()) {
                this.store.subscribe(function (_ref6) {
                  var action = _ref6.action;

                  if (action) {
                    dispatchUpdate(_this6.storeName, action);
                  }
                });
              }

              return;
            }

            if (isTransactionInProcess()) {
              this.handleTransaction();
              return;
            }

            this.dispatch(this.storeValue, _dispatchAction);
          }
          /**
           *
           * Reset the current store back to the initial value
           *
           * @example
           *
           * store.reset()
           *
           */

        }, {
          key: "reset",
          value: function reset() {
            var _this7 = this;

            if (this.isResettable()) {
              isDev() && setAction('Reset');

              this._setState(function () {
                return Object.assign({}, _this7._initialState);
              });

              this.setHasCache(false);
            } else {
              isDev() && console.warn("You need to enable the reset functionality");
            }
          }
        }, {
          key: "update",
          value: function update(stateOrCallback) {
            isDev() && setAction('Update');
            var newState;

            var currentState = this._value();

            if (isFunction(stateOrCallback)) {
              newState = isFunction(this._producerFn) ? this._producerFn(currentState, stateOrCallback) : stateOrCallback(currentState);
            } else {
              newState = stateOrCallback;
            }

            var withHook = this.akitaPreUpdate(currentState, Object.assign(Object.assign({}, currentState), newState));
            var resolved = isPlainObject(currentState) ? withHook : new currentState.constructor(withHook);

            this._setState(resolved);
          }
        }, {
          key: "updateStoreConfig",
          value: function updateStoreConfig(newOptions) {
            this.options = Object.assign(Object.assign({}, this.options), newOptions);
          } // @internal

        }, {
          key: "akitaPreUpdate",
          value: function akitaPreUpdate(_, nextState) {
            return nextState;
          }
          /**
           *
           * @deprecated
           *
           * This method will be removed in v7
           *
           * Akita isn't coupled to Angular and should not use Angular
           * specific code
           *
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy();
          }
          /**
           *
           * Destroy the store
           *
           * @example
           *
           * store.destroy()
           *
           */

        }, {
          key: "destroy",
          value: function destroy() {
            var hmrEnabled = isBrowser ? window.hmrEnabled : false;

            if (!hmrEnabled && this === __stores__[this.storeName]) {
              delete __stores__[this.storeName];
              dispatchDeleted(this.storeName);
              this.setHasCache(false);
              this.cache.active.complete();
              this.store.complete();
            }
          }
        }, {
          key: "onInit",
          value: function onInit(initialState) {
            __stores__[this.storeName] = this;

            this._setState(function () {
              return initialState;
            });

            dispatchAdded(this.storeName);

            if (this.isResettable()) {
              this._initialState = initialState;
            }

            isDev() && assertStoreHasName(this.storeName, this.constructor.name);
          }
        }, {
          key: "dispatch",
          value: function dispatch(state) {
            var _dispatchAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var action = undefined;

            if (_dispatchAction) {
              action = currentAction;
              resetCustomAction();
            }

            this.store.next({
              state: state,
              action: action
            });
          }
        }, {
          key: "watchTransaction",
          value: function watchTransaction() {
            var _this8 = this;

            commit().subscribe(function () {
              _this8.inTransaction = false;

              _this8.dispatch(_this8._value());
            });
          }
        }, {
          key: "isResettable",
          value: function isResettable() {
            if (this.resettable === false) {
              return false;
            }

            return this.resettable || getAkitaConfig().resettable;
          }
        }, {
          key: "handleTransaction",
          value: function handleTransaction() {
            if (!this.inTransaction) {
              this.watchTransaction();
              this.inTransaction = true;
            }
          }
        }, {
          key: "getCacheTTL",
          value: function getCacheTTL() {
            return this.cacheConfig && this.cacheConfig.ttl || getAkitaConfig().ttl;
          }
        }]);

        return Store;
      }();

      Store.ɵfac = function Store_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinvalidFactory"]();
      };

      Store.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: Store
      }); // @internal

      function updateEntities(_ref7) {
        var state = _ref7.state,
            ids = _ref7.ids,
            idKey = _ref7.idKey,
            newStateOrFn = _ref7.newStateOrFn,
            preUpdateEntity = _ref7.preUpdateEntity,
            producerFn = _ref7.producerFn,
            onEntityIdChanges = _ref7.onEntityIdChanges;
        var updatedEntities = {};
        var isUpdatingIdKey = false;
        var idToUpdate;

        var _iterator6 = _createForOfIteratorHelper(ids),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _id = _step6.value;

            // if the entity doesn't exist don't do anything
            if (hasEntity(state.entities, _id) === false) {
              continue;
            }

            var oldEntity = state.entities[_id];
            var newState = void 0;

            if (isFunction(newStateOrFn)) {
              newState = isFunction(producerFn) ? producerFn(oldEntity, newStateOrFn) : newStateOrFn(oldEntity);
            } else {
              newState = newStateOrFn;
            }

            var isIdChanged = newState.hasOwnProperty(idKey) && newState[idKey] !== oldEntity[idKey];
            var newEntity = void 0;
            idToUpdate = _id;

            if (isIdChanged) {
              isUpdatingIdKey = true;
              idToUpdate = newState[idKey];
            }

            var merged = Object.assign(Object.assign({}, oldEntity), newState);

            if (isPlainObject(oldEntity)) {
              newEntity = merged;
            } else {
              /**
               * In case that new state is class of it's own, there's
               * a possibility that it will be different than the old
               * class.
               * For example, Old state is an instance of animal class
               * and new state is instance of person class.
               * To avoid run over new person class with the old animal
               * class we check if the new state is a class of it's own.
               * If so, use it. Otherwise, use the old state class
               */
              if (isPlainObject(newState)) {
                newEntity = new oldEntity.constructor(merged);
              } else {
                newEntity = new newState.constructor(merged);
              }
            }

            updatedEntities[idToUpdate] = preUpdateEntity(oldEntity, newEntity);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        var updatedIds = state.ids;
        var stateEntities = state.entities;

        if (isUpdatingIdKey) {
          var _ids2 = _slicedToArray(ids, 1),
              id = _ids2[0];

          var _a2 = state.entities,
              _b2 = id,
              deletedEntity = _a2[_b2],
              rest = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__rest"])(_a2, [typeof _b2 === "symbol" ? _b2 : _b2 + ""]);
          stateEntities = rest;
          updatedIds = state.ids.map(function (current) {
            return current === id ? idToUpdate : current;
          });
          onEntityIdChanges(id, idToUpdate);
        }

        return Object.assign(Object.assign({}, state), {
          entities: Object.assign(Object.assign({}, stateEntities), updatedEntities),
          ids: updatedIds
        });
      }

      var _a, _b;
      /**
       *
       * Store for managing a collection of entities
       *
       * @example
       *
       * export interface WidgetsState extends EntityState<Widget> { }
       *
       * @StoreConfig({ name: 'widgets' })
       *  export class WidgetsStore extends EntityStore<WidgetsState> {
       *   constructor() {
       *     super();
       *   }
       * }
       *
       *
       */


      var EntityStore = /*#__PURE__*/function (_Store) {
        _inherits(EntityStore, _Store);

        var _super2 = _createSuper(EntityStore);

        function EntityStore() {
          var _this9;

          var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EntityStore);

          _this9 = _super2.call(this, Object.assign(Object.assign({}, getInitialEntitiesState()), initialState), options);
          _this9.options = options;
          _this9.entityActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          _this9.entityIdChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          return _this9;
        } // @internal


        _createClass(EntityStore, [{
          key: "selectEntityAction$",
          get: function get() {
            return this.entityActions.asObservable();
          } // @internal

        }, {
          key: "selectEntityIdChanges$",
          get: function get() {
            return this.entityIdChanges.asObservable();
          } // @internal

        }, {
          key: "idKey",
          get: function get() {
            return this.config.idKey || this.options.idKey || DEFAULT_ID_KEY;
          }
          /**
           *
           * Replace current collection with provided collection
           *
           * @example
           *
           * this.store.set([Entity, Entity])
           * this.store.set({ids: [], entities: {}})
           * this.store.set({ 1: {}, 2: {}})
           *
           */

        }, {
          key: "set",
          value: function set(entities) {
            var _this10 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (isNil(entities)) return;
            isDev() && setAction('Set Entity');
            var isNativePreAdd = this.akitaPreAddEntity === EntityStore.prototype.akitaPreAddEntity;
            this.setHasCache(true, {
              restartTTL: true
            });

            this._setState(function (state) {
              var newState = setEntities({
                state: state,
                entities: entities,
                idKey: _this10.idKey,
                preAddEntity: _this10.akitaPreAddEntity,
                isNativePreAdd: isNativePreAdd
              });

              if (isUndefined(options.activeId) === false) {
                newState.active = options.activeId;
              }

              return newState;
            });

            if (this.hasInitialUIState()) {
              this.handleUICreation();
            }

            this.entityActions.next({
              type: EntityActions.Set,
              ids: this.ids
            });
          }
          /**
           * Add entities
           *
           * @example
           *
           * this.store.add([Entity, Entity])
           * this.store.add(Entity)
           * this.store.add(Entity, { prepend: true })
           *
           * this.store.add(Entity, { loading: false })
           */

        }, {
          key: "add",
          value: function add(entities) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              loading: false
            };
            var collection = coerceArray(entities);
            if (isEmpty(collection)) return;
            var data = addEntities({
              state: this._value(),
              preAddEntity: this.akitaPreAddEntity,
              entities: collection,
              idKey: this.idKey,
              options: options
            });

            if (data) {
              isDev() && setAction('Add Entity');
              data.newState.loading = options.loading;

              this._setState(function () {
                return data.newState;
              });

              if (this.hasInitialUIState()) {
                this.handleUICreation(true);
              }

              this.entityActions.next({
                type: EntityActions.Add,
                ids: data.newIds
              });
            }
          }
        }, {
          key: "update",
          value: function update(idsOrFnOrState, newStateOrFn) {
            var _this11 = this;

            if (isUndefined(newStateOrFn)) {
              _get(_getPrototypeOf(EntityStore.prototype), "update", this).call(this, idsOrFnOrState);

              return;
            }

            var ids = [];

            if (isFunction(idsOrFnOrState)) {
              // We need to filter according the predicate function
              ids = this.ids.filter(function (id) {
                return idsOrFnOrState(_this11.entities[id]);
              });
            } else {
              // If it's nil we want all of them
              ids = isNil(idsOrFnOrState) ? this.ids : coerceArray(idsOrFnOrState);
            }

            if (isEmpty(ids)) return;
            isDev() && setAction('Update Entity', ids);
            var entityIdChanged;

            this._setState(function (state) {
              return updateEntities({
                idKey: _this11.idKey,
                ids: ids,
                preUpdateEntity: _this11.akitaPreUpdateEntity,
                state: state,
                newStateOrFn: newStateOrFn,
                producerFn: _this11._producerFn,
                onEntityIdChanges: function onEntityIdChanges(oldId, newId) {
                  entityIdChanged = {
                    oldId: oldId,
                    newId: newId
                  };

                  _this11.entityIdChanges.next(Object.assign(Object.assign({}, entityIdChanged), {
                    pending: true
                  }));
                }
              });
            });

            if (entityIdChanged) {
              this.entityIdChanges.next(Object.assign(Object.assign({}, entityIdChanged), {
                pending: false
              }));
            }

            this.entityActions.next({
              type: EntityActions.Update,
              ids: ids
            });
          }
        }, {
          key: "upsert",
          value: function upsert(ids, newState, onCreate) {
            var _this12 = this;

            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var toArray = coerceArray(ids);

            var predicate = function predicate(isUpdate) {
              return function (id) {
                return hasEntity(_this12.entities, id) === isUpdate;
              };
            };

            var baseClass = isFunction(onCreate) ? options.baseClass : onCreate ? onCreate.baseClass : undefined;
            var isClassBased = isFunction(baseClass);
            var updateIds = toArray.filter(predicate(true));
            var newEntities = toArray.filter(predicate(false)).map(function (id) {
              var newStateObj = typeof newState === 'function' ? newState({}) : newState;
              var entity = isFunction(onCreate) ? onCreate(id, newStateObj) : newStateObj;
              var withId = Object.assign(Object.assign({}, entity), _defineProperty({}, _this12.idKey, id));

              if (isClassBased) {
                return new baseClass(withId);
              }

              return withId;
            }); // it can be any of the three types

            this.update(updateIds, newState);
            this.add(newEntities);
            isDev() && logAction('Upsert Entity');
          }
          /**
           *
           * Upsert entity collection (idKey must be present)
           *
           * @example
           *
           * store.upsertMany([ { id: 1 }, { id: 2 }]);
           *
           * store.upsertMany([ { id: 1 }, { id: 2 }], { loading: true  });
           * store.upsertMany([ { id: 1 }, { id: 2 }], { baseClass: Todo  });
           *
           */

        }, {
          key: "upsertMany",
          value: function upsertMany(entities) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var addedIds = [];
            var updatedIds = [];
            var updatedEntities = {}; // Update the state directly to optimize performance

            var _iterator7 = _createForOfIteratorHelper(entities),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var entity = _step7.value;
                var withPreCheckHook = this.akitaPreCheckEntity(entity);
                var id = withPreCheckHook[this.idKey];

                if (hasEntity(this.entities, id)) {
                  var prev = this._value().entities[id];

                  var merged = Object.assign(Object.assign({}, this._value().entities[id]), withPreCheckHook);
                  var next = options.baseClass ? new options.baseClass(merged) : merged;
                  var withHook = this.akitaPreUpdateEntity(prev, next);
                  var nextId = withHook[this.idKey];
                  updatedEntities[nextId] = withHook;
                  updatedIds.push(nextId);
                } else {
                  var newEntity = options.baseClass ? new options.baseClass(withPreCheckHook) : withPreCheckHook;

                  var _withHook = this.akitaPreAddEntity(newEntity);

                  var _nextId = _withHook[this.idKey];
                  addedIds.push(_nextId);
                  updatedEntities[_nextId] = _withHook;
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            isDev() && logAction('Upsert Many');

            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                ids: addedIds.length ? [].concat(_toConsumableArray(state.ids), addedIds) : state.ids,
                entities: Object.assign(Object.assign({}, state.entities), updatedEntities),
                loading: !!options.loading
              });
            });

            updatedIds.length && this.entityActions.next({
              type: EntityActions.Update,
              ids: updatedIds
            });
            addedIds.length && this.entityActions.next({
              type: EntityActions.Add,
              ids: addedIds
            });

            if (addedIds.length && this.hasUIStore()) {
              this.handleUICreation(true);
            }
          }
          /**
           *
           * Replace one or more entities (except the id property)
           *
           *
           * @example
           *
           * this.store.replace(5, newEntity)
           * this.store.replace([1,2,3], newEntity)
           */

        }, {
          key: "replace",
          value: function replace(ids, newState) {
            var toArray = coerceArray(ids);
            if (isEmpty(toArray)) return;
            var replaced = {};

            var _iterator8 = _createForOfIteratorHelper(toArray),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var id = _step8.value;
                replaced[id] = Object.assign(Object.assign({}, newState), _defineProperty({}, this.idKey, id));
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            isDev() && setAction('Replace Entity', ids);

            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                entities: Object.assign(Object.assign({}, state.entities), replaced)
              });
            });
          }
          /**
           *
           * Move entity inside the collection
           *
           *
           * @example
           *
           * this.store.move(fromIndex, toIndex)
           */

        }, {
          key: "move",
          value: function move(from, to) {
            var ids = this.ids.slice();
            ids.splice(to < 0 ? ids.length + to : to, 0, ids.splice(from, 1)[0]);
            isDev() && setAction('Move Entity');

            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                // Change the entities reference so that selectAll emit
                entities: Object.assign({}, state.entities),
                ids: ids
              });
            });
          }
        }, {
          key: "remove",
          value: function remove(idsOrFn) {
            var _this13 = this;

            if (isEmpty(this.ids)) return;
            var idPassed = isDefined(idsOrFn); // null means remove all

            var ids = [];

            if (isFunction(idsOrFn)) {
              ids = this.ids.filter(function (entityId) {
                return idsOrFn(_this13.entities[entityId]);
              });
            } else {
              ids = idPassed ? coerceArray(idsOrFn) : this.ids;
            }

            if (isEmpty(ids)) return;
            isDev() && setAction('Remove Entity', ids);

            this._setState(function (state) {
              return removeEntities({
                state: state,
                ids: ids
              });
            });

            if (!idPassed) {
              this.setHasCache(false);
            }

            this.handleUIRemove(ids);
            this.entityActions.next({
              type: EntityActions.Remove,
              ids: ids
            });
          }
          /**
           *
           * Update the active entity
           *
           * @example
           *
           * this.store.updateActive({ completed: true })
           * this.store.updateActive(active => {
           *   return {
           *     config: {
           *      ..active.config,
           *      date
           *     }
           *   }
           * })
           */

        }, {
          key: "updateActive",
          value: function updateActive(newStateOrCallback) {
            var ids = coerceArray(this.active);
            isDev() && setAction('Update Active', ids);
            this.update(ids, newStateOrCallback);
          }
        }, {
          key: "setActive",
          value: function setActive(idOrOptions) {
            var active = getActiveEntities(idOrOptions, this.ids, this.active);

            if (active === undefined) {
              return;
            }

            isDev() && setAction('Set Active', active);

            this._setActive(active);
          }
          /**
           * Add active entities
           *
           * @example
           *
           * store.addActive(2);
           * store.addActive([3, 4, 5]);
           */

        }, {
          key: "addActive",
          value: function addActive(ids) {
            var _this14 = this;

            var toArray = coerceArray(ids);
            if (isEmpty(toArray)) return;
            var everyExist = toArray.every(function (id) {
              return _this14.active.indexOf(id) > -1;
            });
            if (everyExist) return;
            isDev() && setAction('Add Active', ids);

            this._setState(function (state) {
              /** Protect against case that one of the items in the array exist */
              var uniques = Array.from(new Set([].concat(_toConsumableArray(state.active), _toConsumableArray(toArray))));
              return Object.assign(Object.assign({}, state), {
                active: uniques
              });
            });
          }
          /**
           * Remove active entities
           *
           * @example
           *
           * store.removeActive(2)
           * store.removeActive([3, 4, 5])
           */

        }, {
          key: "removeActive",
          value: function removeActive(ids) {
            var _this15 = this;

            var toArray = coerceArray(ids);
            if (isEmpty(toArray)) return;
            var someExist = toArray.some(function (id) {
              return _this15.active.indexOf(id) > -1;
            });
            if (!someExist) return;
            isDev() && setAction('Remove Active', ids);

            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                active: Array.isArray(state.active) ? state.active.filter(function (currentId) {
                  return toArray.indexOf(currentId) === -1;
                }) : null
              });
            });
          }
          /**
           * Toggle active entities
           *
           * @example
           *
           * store.toggle(2)
           * store.toggle([3, 4, 5])
           */

        }, {
          key: "toggleActive",
          value: function toggleActive(ids) {
            var _this16 = this;

            var toArray = coerceArray(ids);

            var filterExists = function filterExists(remove) {
              return function (id) {
                return _this16.active.includes(id) === remove;
              };
            };

            var remove = toArray.filter(filterExists(true));
            var add = toArray.filter(filterExists(false));
            this.removeActive(remove);
            this.addActive(add);
            isDev() && logAction('Toggle Active');
          }
          /**
           *
           * Create sub UI store for managing Entity's UI state
           *
           * @example
           *
           * export type ProductUI = {
           *   isLoading: boolean;
           *   isOpen: boolean
           * }
           *
           * interface ProductsUIState extends EntityState<ProductUI> {}
           *
           * export class ProductsStore EntityStore<ProductsState, Product> {
           *   ui: EntityUIStore<ProductsUIState, ProductUI>;
           *
           *   constructor() {
           *     super();
           *     this.createUIStore();
           *   }
           *
           * }
           */

        }, {
          key: "createUIStore",
          value: function createUIStore() {
            var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var storeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var defaults = {
              name: "UI/".concat(this.storeName),
              idKey: this.idKey
            };
            this.ui = new EntityUIStore(initialState, Object.assign(Object.assign({}, defaults), storeConfig));
            return this.ui;
          } // @internal

        }, {
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(EntityStore.prototype), "destroy", this).call(this);

            if (this.ui instanceof EntityStore) {
              this.ui.destroy();
            }

            this.entityActions.complete();
          } // @internal

        }, {
          key: "akitaPreUpdateEntity",
          value: function akitaPreUpdateEntity(_, nextEntity) {
            return nextEntity;
          } // @internal

        }, {
          key: "akitaPreAddEntity",
          value: function akitaPreAddEntity(newEntity) {
            return newEntity;
          } // @internal

        }, {
          key: "akitaPreCheckEntity",
          value: function akitaPreCheckEntity(newEntity) {
            return newEntity;
          }
        }, {
          key: "ids",
          get: function get() {
            return this._value().ids;
          }
        }, {
          key: "entities",
          get: function get() {
            return this._value().entities;
          }
        }, {
          key: "active",
          get: function get() {
            return this._value().active;
          }
        }, {
          key: "_setActive",
          value: function _setActive(ids) {
            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                active: ids
              });
            });
          }
        }, {
          key: "handleUICreation",
          value: function handleUICreation() {
            var _this17 = this;

            var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var ids = this.ids;
            var isFunc = isFunction(this.ui._akitaCreateEntityFn);
            var uiEntities;

            var createFn = function createFn(id) {
              var current = _this17.entities[id];
              var ui = isFunc ? _this17.ui._akitaCreateEntityFn(current) : _this17.ui._akitaCreateEntityFn;
              return Object.assign(_defineProperty({}, _this17.idKey, current[_this17.idKey]), ui);
            };

            if (add) {
              uiEntities = this.ids.filter(function (id) {
                return isUndefined(_this17.ui.entities[id]);
              }).map(createFn);
            } else {
              uiEntities = ids.map(createFn);
            }

            add ? this.ui.add(uiEntities) : this.ui.set(uiEntities);
          }
        }, {
          key: "hasInitialUIState",
          value: function hasInitialUIState() {
            return this.hasUIStore() && isUndefined(this.ui._akitaCreateEntityFn) === false;
          }
        }, {
          key: "handleUIRemove",
          value: function handleUIRemove(ids) {
            if (this.hasUIStore()) {
              this.ui.remove(ids);
            }
          }
        }, {
          key: "hasUIStore",
          value: function hasUIStore() {
            return this.ui instanceof EntityUIStore;
          }
        }]);

        return EntityStore;
      }(Store);

      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([transaction(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object, Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", void 0)], EntityStore.prototype, "upsert", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([transaction(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [typeof (_b = typeof T !== "undefined" && T) === "function" ? _b : Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", void 0)], EntityStore.prototype, "toggleActive", null); // @internal

      var EntityUIStore = /*#__PURE__*/function (_EntityStore) {
        _inherits(EntityUIStore, _EntityStore);

        var _super3 = _createSuper(EntityUIStore);

        function EntityUIStore() {
          var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var storeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EntityUIStore);

          return _super3.call(this, initialState, storeConfig);
        }
        /**
         *
         * Set the initial UI entity state. This function will determine the entity's
         * initial state when we call `set()` or `add()`.
         *
         * @example
         *
         * constructor() {
         *   super();
         *   this.createUIStore().setInitialEntityState(entity => ({ isLoading: false, isOpen: true }));
         *   this.createUIStore().setInitialEntityState({ isLoading: false, isOpen: true });
         * }
         *
         */


        _createClass(EntityUIStore, [{
          key: "setInitialEntityState",
          value: function setInitialEntityState(createFn) {
            this._akitaCreateEntityFn = createFn;
          }
        }]);

        return EntityUIStore;
      }(EntityStore);
      /**
       * @example
       *
       * query.selectEntity(2).pipe(filterNil)
       * @deprecated Use the operator function filterNilValue()
       */


      var filterNil = function filterNil(source) {
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (value) {
          return value !== null && typeof value !== 'undefined';
        }));
      };
      /**
       * @example
       *
       * query.selectEntity(2).pipe(filterNilValue())
       */


      function filterNilValue() {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (value) {
          return value !== null && value !== undefined;
        });
      }

      var queryConfigKey = 'akitaQueryConfig';

      function QueryConfig(metadata) {
        return function (constructor) {
          constructor[queryConfigKey] = {};

          for (var i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
            var key = keys[i];
            constructor[queryConfigKey][key] = metadata[key];
          }
        };
      } // @internal


      function isString(value) {
        return typeof value === 'string';
      }

      function compareKeys(keysOrFuncs) {
        return function (prevState, currState) {
          var isFns = isFunction(keysOrFuncs[0]); // Return when they are NOT changed

          return keysOrFuncs.some(function (keyOrFunc) {
            if (isFns) {
              return keyOrFunc(prevState) !== keyOrFunc(currState);
            }

            return prevState[keyOrFunc] !== currState[keyOrFunc];
          }) === false;
        };
      }

      var Query = /*#__PURE__*/function () {
        function Query(store) {
          _classCallCheck(this, Query);

          this.store = store;
          this.__store__ = store;

          if (isDev()) {
            // @internal
            __queries__[store.storeName] = this;
          }
        }

        _createClass(Query, [{
          key: "select",
          value: function select(project) {
            var mapFn;

            if (isFunction(project)) {
              mapFn = project;
            } else if (isString(project)) {
              mapFn = function mapFn(state) {
                return state[project];
              };
            } else if (Array.isArray(project)) {
              return this.store._select(function (state) {
                return state;
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(compareKeys(project)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (state) {
                if (isFunction(project[0])) {
                  return project.map(function (func) {
                    return func(state);
                  });
                }

                return project.reduce(function (acc, k) {
                  acc[k] = state[k];
                  return acc;
                }, {});
              }));
            } else {
              mapFn = function mapFn(state) {
                return state;
              };
            }

            return this.store._select(mapFn);
          }
          /**
           * Select the loading state
           *
           * @example
           *
           * this.query.selectLoading().subscribe(isLoading => {})
           */

        }, {
          key: "selectLoading",
          value: function selectLoading() {
            return this.select(function (state) {
              return state.loading;
            });
          }
          /**
           * Select the error state
           *
           * @example
           *
           * this.query.selectError().subscribe(error => {})
           */

        }, {
          key: "selectError",
          value: function selectError() {
            return this.select(function (state) {
              return state.error;
            });
          }
          /**
           * Get the store's value
           *
           * @example
           *
           * this.query.getValue()
           *
           */

        }, {
          key: "getValue",
          value: function getValue() {
            return this.store._value();
          }
          /**
           * Select the cache state
           *
           * @example
           *
           * this.query.selectHasCache().pipe(
           *   switchMap(hasCache => {
           *     return hasCache ? of() : http().pipe(res => store.set(res))
           *   })
           * )
           */

        }, {
          key: "selectHasCache",
          value: function selectHasCache() {
            return this.store._cache().asObservable();
          }
          /**
           * Whether we've cached data
           *
           * @example
           *
           * this.query.getHasCache()
           *
           */

        }, {
          key: "getHasCache",
          value: function getHasCache() {
            return this.store._cache().value;
          } // @internal

        }, {
          key: "config",
          get: function get() {
            return this.constructor[queryConfigKey];
          }
        }]);

        return Query;
      }(); // @internal


      function findEntityByPredicate(predicate, entities) {
        for (var _i3 = 0, _Object$keys2 = Object.keys(entities); _i3 < _Object$keys2.length; _i3++) {
          var entityId = _Object$keys2[_i3];

          if (predicate(entities[entityId]) === true) {
            return entityId;
          }
        }

        return undefined;
      } // @internal


      function getEntity(id, project) {
        return function (entities) {
          var entity = entities[id];

          if (isUndefined(entity)) {
            return undefined;
          }

          if (!project) {
            return entity;
          }

          if (isString(project)) {
            return entity[project];
          }

          return project(entity);
        };
      } // @internal


      function mapSkipUndefined(arr, callbackFn) {
        return arr.reduce(function (result, value, index, array) {
          var val = callbackFn(value, index, array);

          if (val !== undefined) {
            result.push(val);
          }

          return result;
        }, []);
      } // @internal


      function sortByOptions(options, config) {
        options.sortBy = options.sortBy || config && config.sortBy;
        options.sortByOrder = options.sortByOrder || config && config.sortByOrder;
      }
      /**
       *
       *  The Entity Query is similar to the general Query, with additional functionality tailored for EntityStores.
       *
       *  class WidgetsQuery extends QueryEntity<WidgetsState> {
       *     constructor(protected store: WidgetsStore) {
       *       super(store);
       *     }
       *  }
       *
       *
       *
       */


      var QueryEntity = /*#__PURE__*/function (_Query) {
        _inherits(QueryEntity, _Query);

        var _super4 = _createSuper(QueryEntity);

        function QueryEntity(store) {
          var _this18;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, QueryEntity);

          _this18 = _super4.call(this, store);
          _this18.options = options;
          _this18.__store__ = store;
          return _this18;
        }

        _createClass(QueryEntity, [{
          key: "selectAll",
          value: function selectAll() {
            var _this19 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              asObject: false
            };
            return this.select(function (state) {
              return state.entities;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function () {
              return _this19.getAll(options);
            }));
          }
        }, {
          key: "getAll",
          value: function getAll() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              asObject: false,
              filterBy: undefined,
              limitTo: undefined
            };

            if (options.asObject) {
              return entitiesToMap(this.getValue(), options);
            }

            sortByOptions(options, this.config || this.options);
            return entitiesToArray(this.getValue(), options);
          }
        }, {
          key: "selectMany",
          value: function selectMany(ids, project) {
            if (!ids || !ids.length) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            return this.select(function (state) {
              return state.entities;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (entities) {
              return mapSkipUndefined(ids, function (id) {
                return getEntity(id, project)(entities);
              });
            }), distinctUntilArrayItemChanged());
          }
        }, {
          key: "selectEntity",
          value: function selectEntity(idOrPredicate, project) {
            var id = idOrPredicate;

            if (isFunction(idOrPredicate)) {
              // For performance reason we expect the entity to be in the store
              id = findEntityByPredicate(idOrPredicate, this.getValue().entities);
            }

            return this.select(function (state) {
              return state.entities;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(getEntity(id, project)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
          }
          /**
           * Get an entity by id
           *
           * @example
           *
           * this.query.getEntity(1);
           */

        }, {
          key: "getEntity",
          value: function getEntity(id) {
            return this.getValue().entities[id];
          }
          /**
           * Select the active entity's id
           *
           * @example
           *
           * this.query.selectActiveId()
           */

        }, {
          key: "selectActiveId",
          value: function selectActiveId() {
            return this.select(function (state) {
              return state.active;
            });
          }
          /**
           * Get the active id
           *
           * @example
           *
           * this.query.getActiveId()
           */

        }, {
          key: "getActiveId",
          value: function getActiveId() {
            return this.getValue().active;
          }
        }, {
          key: "selectActive",
          value: function selectActive(project) {
            var _this20 = this;

            if (isArray(this.getActive())) {
              return this.selectActiveId().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (ids) {
                return _this20.selectMany(ids, project);
              }));
            }

            return this.selectActiveId().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (ids) {
              return _this20.selectEntity(ids, project);
            }));
          }
        }, {
          key: "getActive",
          value: function getActive() {
            var _this21 = this;

            var activeId = this.getActiveId();

            if (isArray(activeId)) {
              return activeId.map(function (id) {
                return _this21.getValue().entities[id];
              });
            }

            return toBoolean(activeId) ? this.getEntity(activeId) : undefined;
          }
          /**
           * Select the store's entity collection length
           *
           * @example
           *
           * this.query.selectCount()
           * this.query.selectCount(entity => entity.completed)
           */

        }, {
          key: "selectCount",
          value: function selectCount(predicate) {
            var _this22 = this;

            return this.select(function (state) {
              return state.entities;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function () {
              return _this22.getCount(predicate);
            }));
          }
          /**
           * Get the store's entity collection length
           *
           * @example
           *
           * this.query.getCount()
           * this.query.getCount(entity => entity.completed)
           */

        }, {
          key: "getCount",
          value: function getCount(predicate) {
            if (isFunction(predicate)) {
              return this.getAll().filter(predicate).length;
            }

            return this.getValue().ids.length;
          }
        }, {
          key: "selectLast",
          value: function selectLast(project) {
            return this.selectAt(function (ids) {
              return ids[ids.length - 1];
            }, project);
          }
        }, {
          key: "selectFirst",
          value: function selectFirst(project) {
            return this.selectAt(function (ids) {
              return ids[0];
            }, project);
          }
        }, {
          key: "selectEntityAction",
          value: function selectEntityAction(actionOrActions) {
            if (isNil(actionOrActions)) {
              return this.store.selectEntityAction$;
            }

            var project = isArray(actionOrActions) ? function (action) {
              return action;
            } : function (_ref8) {
              var ids = _ref8.ids;
              return ids;
            };
            var actions = coerceArray(actionOrActions);
            return this.store.selectEntityAction$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (_ref9) {
              var type = _ref9.type;
              return actions.includes(type);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) {
              return project(action);
            }));
          }
        }, {
          key: "hasEntity",
          value: function hasEntity(projectOrIds) {
            var _this23 = this;

            if (isNil(projectOrIds)) {
              return this.getValue().ids.length > 0;
            }

            if (isFunction(projectOrIds)) {
              return this.getAll().some(projectOrIds);
            }

            if (isArray(projectOrIds)) {
              return projectOrIds.every(function (id) {
                return id in _this23.getValue().entities;
              });
            }

            return projectOrIds in this.getValue().entities;
          }
          /**
           * Returns whether entity store has an active entity
           *
           * @example
           *
           * this.query.hasActive()
           * this.query.hasActive(3)
           *
           */

        }, {
          key: "hasActive",
          value: function hasActive(id) {
            var active = this.getValue().active;
            var isIdProvided = isDefined(id);

            if (Array.isArray(active)) {
              if (isIdProvided) {
                return active.includes(id);
              }

              return active.length > 0;
            }

            return isIdProvided ? active === id : isDefined(active);
          }
          /**
           *
           * Create sub UI query for querying Entity's UI state
           *
           * @example
           *
           *
           * export class ProductsQuery extends QueryEntity<ProductsState> {
           *   ui: EntityUIQuery<ProductsUIState>;
           *
           *   constructor(protected store: ProductsStore) {
           *     super(store);
           *     this.createUIQuery();
           *   }
           *
           * }
           */

        }, {
          key: "createUIQuery",
          value: function createUIQuery() {
            this.ui = new EntityUIQuery(this.__store__.ui);
          }
        }, {
          key: "selectAt",
          value: function selectAt(mapFn, project) {
            var _this24 = this;

            return this.select(function (state) {
              return state.ids;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(mapFn), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (id) {
              return _this24.selectEntity(id, project);
            }));
          }
        }]);

        return QueryEntity;
      }(Query); // @internal


      var EntityUIQuery = /*#__PURE__*/function (_QueryEntity) {
        _inherits(EntityUIQuery, _QueryEntity);

        var _super5 = _createSuper(EntityUIQuery);

        function EntityUIQuery(store) {
          _classCallCheck(this, EntityUIQuery);

          return _super5.call(this, store);
        }

        return EntityUIQuery;
      }(QueryEntity);

      function createStore(initialState, options) {
        return new Store(initialState, options);
      }

      function createQuery(store) {
        return new Query(store);
      }

      function createEntityStore(initialState, options) {
        return new EntityStore(initialState, options);
      }

      function createEntityQuery(store) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return new QueryEntity(store, options);
      }
      /**
       * @internal
       *
       * @example
       *
       * getValue(state, 'todos.ui')
       *
       */


      function getValue(obj, prop) {
        /** return the whole state  */
        if (prop.split('.').length === 1) {
          return obj;
        }

        var removeStoreName = prop.split('.').slice(1).join('.');
        return removeStoreName.split('.').reduce(function (acc, part) {
          return acc && acc[part];
        }, obj);
      }
      /**
       * Generate random guid
       *
       * @example
       *
       * {
       *   id: guid()
       * }
       *
       * @remarks this isn't a GUID, but a 10 char random alpha-num
       */


      function guid() {
        return Math.random().toString(36).slice(2);
      } // @internal


      function isNumber(value) {
        return !isArray(value) && value - parseFloat(value) + 1 >= 0;
      }
      /**
       * @internal
       *
       * @example
       * setValue(state, 'todos.ui', { filter: {} })
       */


      function setValue(obj, prop, val) {
        var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var split = prop.split('.');

        if (split.length === 1) {
          return Object.assign(Object.assign({}, obj), val);
        }

        obj = Object.assign({}, obj);
        var lastIndex = split.length - 2;
        var removeStoreName = prop.split('.').slice(1);
        removeStoreName.reduce(function (acc, part, index) {
          if (index !== lastIndex) {
            acc[part] = Object.assign({}, acc[part]);
            return acc && acc[part];
          }

          acc[part] = replace || Array.isArray(acc[part]) || !isObject(acc[part]) ? val : Object.assign(Object.assign({}, acc[part]), val);
          return acc && acc[part];
        }, obj);
        return obj;
      }

      var skipStorageUpdate = false;

      var _persistStateInit = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);

      function selectPersistStateInit() {
        return _persistStateInit.asObservable();
      }

      function setSkipStorageUpdate(skip) {
        skipStorageUpdate = skip;
      }

      function getSkipStorageUpdate() {
        return skipStorageUpdate;
      }

      function isPromise(v) {
        return v && isFunction(v.then);
      }

      function observify(asyncOrValue) {
        if (isPromise(asyncOrValue) || Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(asyncOrValue)) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(asyncOrValue);
        }

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(asyncOrValue);
      }

      function persistState(params) {
        var defaults = {
          key: 'AkitaStores',
          enableInNonBrowser: false,
          storage: !hasLocalStorage() ? params.storage : localStorage,
          deserialize: JSON.parse,
          serialize: JSON.stringify,
          include: [],
          select: [],
          persistOnDestroy: false,
          preStorageUpdate: function preStorageUpdate(storeName, state) {
            return state;
          },
          preStoreUpdate: function preStoreUpdate(storeName, state) {
            return state;
          },
          skipStorageUpdate: getSkipStorageUpdate,
          preStorageUpdateOperator: function preStorageUpdateOperator() {
            return function (source) {
              return source;
            };
          }
        };

        var _Object$assign7 = Object.assign({}, defaults, params),
            storage = _Object$assign7.storage,
            enableInNonBrowser = _Object$assign7.enableInNonBrowser,
            deserialize = _Object$assign7.deserialize,
            serialize = _Object$assign7.serialize,
            include = _Object$assign7.include,
            select = _Object$assign7.select,
            key = _Object$assign7.key,
            preStorageUpdate = _Object$assign7.preStorageUpdate,
            persistOnDestroy = _Object$assign7.persistOnDestroy,
            preStorageUpdateOperator = _Object$assign7.preStorageUpdateOperator,
            preStoreUpdate = _Object$assign7.preStoreUpdate,
            skipStorageUpdate = _Object$assign7.skipStorageUpdate;

        if (isNotBrowser && !enableInNonBrowser || !storage) return;
        var hasInclude = include.length > 0;
        var hasSelect = select.length > 0;
        var includeStores;
        var selectStores;

        if (hasInclude) {
          includeStores = include.reduce(function (acc, path) {
            if (isFunction(path)) {
              acc.fns.push(path);
            } else {
              var storeName = path.split('.')[0];
              acc[storeName] = path;
            }

            return acc;
          }, {
            fns: []
          });
        }

        if (hasSelect) {
          selectStores = select.reduce(function (acc, selectFn) {
            acc[selectFn.storeName] = selectFn;
            return acc;
          }, {});
        }

        var stores = {};
        var acc = {};
        var subscriptions = [];
        var buffer = [];

        function _save(v) {
          observify(v).subscribe(function () {
            var next = buffer.shift();
            next && _save(next);
          });
        } // when we use the local/session storage we perform the serialize, otherwise we let the passed storage implementation to do it


        var isLocalStorage = hasLocalStorage() && storage === localStorage || hasSessionStorage() && storage === sessionStorage;
        observify(storage.getItem(key)).subscribe(function (value) {
          var storageState = isObject(value) ? value : deserialize(value || '{}');

          function save(storeCache) {
            storageState['$cache'] = Object.assign(Object.assign({}, storageState['$cache'] || {}), storeCache);
            storageState = Object.assign({}, storageState, acc);
            buffer.push(storage.setItem(key, isLocalStorage ? serialize(storageState) : storageState));

            _save(buffer.shift());
          }

          function subscribe(storeName, path) {
            stores[storeName] = __stores__[storeName]._select(function (state) {
              return getValue(state, path);
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (store) {
              if (hasSelect && selectStores[storeName]) {
                return selectStores[storeName](store);
              }

              return store;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function () {
              return skipStorageUpdate() === false;
            }), preStorageUpdateOperator()).subscribe(function (data) {
              acc[storeName] = preStorageUpdate(storeName, data);
              Promise.resolve().then(function () {
                return save(_defineProperty({}, storeName, __stores__[storeName]._cache().getValue()));
              });
            });
          }

          function setInitial(storeName, store, path) {
            if (storeName in storageState) {
              setAction('@PersistState');

              store._setState(function (state) {
                return setValue(state, path, preStoreUpdate(storeName, storageState[storeName], state));
              });

              var hasCache = storageState['$cache'] ? storageState['$cache'][storeName] : false;

              __stores__[storeName].setHasCache(hasCache, {
                restartTTL: true
              });
            }
          }

          subscriptions.push($$deleteStore.subscribe(function (storeName) {
            if (stores[storeName]) {
              if (persistOnDestroy === false) {
                save(_defineProperty({}, storeName, false));
              }

              stores[storeName].unsubscribe();
              delete stores[storeName];
            }
          }));
          subscriptions.push($$addStore.subscribe(function (storeName) {
            if (storeName === 'router') {
              return;
            }

            var store = __stores__[storeName];

            if (hasInclude) {
              var path = includeStores[storeName];

              if (!path) {
                var passPredicate = includeStores.fns.some(function (fn) {
                  return fn(storeName);
                });

                if (passPredicate) {
                  path = storeName;
                } else {
                  return;
                }
              }

              setInitial(storeName, store, path);
              subscribe(storeName, path);
            } else {
              setInitial(storeName, store, storeName);
              subscribe(storeName, storeName);
            }
          }));

          _persistStateInit.next();
        });
        return {
          destroy: function destroy() {
            subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });

            for (var i = 0, keys = Object.keys(stores); i < keys.length; i++) {
              var storeName = keys[i];
              stores[storeName].unsubscribe();
            }

            stores = {};
          },
          clear: function clear() {
            storage.clear();
          },
          clearStore: function clearStore(storeName) {
            if (isNil(storeName)) {
              var _value2 = observify(storage.setItem(key, '{}'));

              _value2.subscribe();

              return;
            }

            var value = storage.getItem(key);
            observify(value).subscribe(function (v) {
              var storageState = deserialize(v || '{}');

              if (storageState[storeName]) {
                delete storageState[storeName];

                var _value3 = observify(storage.setItem(key, serialize(storageState)));

                _value3.subscribe();
              }
            });
          }
        };
      }

      var AkitaPlugin = /*#__PURE__*/function () {
        function AkitaPlugin(query, config) {
          _classCallCheck(this, AkitaPlugin);

          this.query = query;

          if (config && config.resetFn) {
            if (getAkitaConfig().resettable) {
              this.onReset(config.resetFn);
            }
          }
        }
        /** This method is responsible for getting access to the query. */


        _createClass(AkitaPlugin, [{
          key: "getQuery",
          value: function getQuery() {
            return this.query;
          }
          /** This method is responsible for getting access to the store. */

        }, {
          key: "getStore",
          value: function getStore() {
            return this.getQuery().__store__;
          }
          /** This method is responsible tells whether the plugin is entityBased or not.  */

        }, {
          key: "isEntityBased",
          value: function isEntityBased(entityId) {
            return toBoolean(entityId);
          }
          /** This method is responsible for selecting the source; it can be the whole store or one entity. */

        }, {
          key: "selectSource",
          value: function selectSource(entityId, property) {
            var _this25 = this;

            if (this.isEntityBased(entityId)) {
              return this.getQuery().selectEntity(entityId).pipe(filterNilValue());
            }

            if (property) {
              return this.getQuery().select(function (state) {
                return getValue(state, _this25.withStoreName(property));
              });
            }

            return this.getQuery().select();
          }
        }, {
          key: "getSource",
          value: function getSource(entityId, property) {
            if (this.isEntityBased(entityId)) {
              return this.getQuery().getEntity(entityId);
            }

            var state = this.getQuery().getValue();

            if (property) {
              return getValue(state, this.withStoreName(property));
            }

            return state;
          }
        }, {
          key: "withStoreName",
          value: function withStoreName(prop) {
            return "".concat(this.storeName, ".").concat(prop);
          }
        }, {
          key: "storeName",
          get: function get() {
            return this.getStore().storeName;
          }
          /** This method is responsible for updating the store or one entity; it can be the whole store or one entity. */

        }, {
          key: "updateStore",
          value: function updateStore(newState, entityId, property) {
            var _this26 = this;

            var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (this.isEntityBased(entityId)) {
              var store = this.getStore();
              replace ? store.replace(entityId, newState) : store.update(entityId, newState);
            } else {
              if (property) {
                this.getStore()._setState(function (state) {
                  return setValue(state, _this26.withStoreName(property), newState, true);
                });

                return;
              }

              var nextState = replace ? newState : function (state) {
                return Object.assign(Object.assign({}, state), newState);
              };

              this.getStore()._setState(nextState);
            }
          }
          /**
           * Function to invoke upon reset
           */

        }, {
          key: "onReset",
          value: function onReset(fn) {
            var _this27 = this;

            var original = this.getStore().reset;

            this.getStore().reset = function () {
              for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                params[_key3] = arguments[_key3];
              }

              /** It should run after the plugin destroy method */
              setTimeout(function () {
                original.apply(_this27.getStore(), params);
                fn();
              });
            };
          }
        }]);

        return AkitaPlugin;
      }();

      var ɵ0 = function ɵ0(head, current) {
        return JSON.stringify(head) !== JSON.stringify(current);
      };

      var dirtyCheckDefaultParams = {
        comparator: ɵ0
      };

      function getNestedPath(nestedObj, path) {
        var pathAsArray = path.split('.');
        return pathAsArray.reduce(function (obj, key) {
          return obj && obj[key] !== 'undefined' ? obj[key] : undefined;
        }, nestedObj);
      }

      var DirtyCheckPlugin = /*#__PURE__*/function (_AkitaPlugin) {
        _inherits(DirtyCheckPlugin, _AkitaPlugin);

        var _super6 = _createSuper(DirtyCheckPlugin);

        function DirtyCheckPlugin(query, params, _entityId) {
          var _this28;

          _classCallCheck(this, DirtyCheckPlugin);

          _this28 = _super6.call(this, query);
          _this28.query = query;
          _this28.params = params;
          _this28._entityId = _entityId;
          _this28.dirty = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          _this28.active = false;
          _this28._reset = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          _this28.isDirty$ = _this28.dirty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
          _this28.reset$ = _this28._reset.asObservable();
          _this28.params = Object.assign(Object.assign({}, dirtyCheckDefaultParams), params);

          if (_this28.params.watchProperty) {
            var watchProp = coerceArray(_this28.params.watchProperty);

            if (query instanceof QueryEntity && watchProp.includes('entities') && !watchProp.includes('ids')) {
              watchProp.push('ids');
            }

            _this28.params.watchProperty = watchProp;
          }

          return _this28;
        }

        _createClass(DirtyCheckPlugin, [{
          key: "reset",
          value: function reset() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var currentValue = this.head;

            if (isFunction(params.updateFn)) {
              if (this.isEntityBased(this._entityId)) {
                currentValue = params.updateFn(this.head, this.getQuery().getEntity(this._entityId));
              } else {
                currentValue = params.updateFn(this.head, this.getQuery().getValue());
              }
            }

            logAction("@DirtyCheck - Revert");
            this.updateStore(currentValue, this._entityId);

            this._reset.next();
          }
        }, {
          key: "setHead",
          value: function setHead() {
            if (!this.active) {
              this.activate();
              this.active = true;
            } else {
              this.head = this._getHead();
            }

            this.updateDirtiness(false);
            return this;
          }
        }, {
          key: "isDirty",
          value: function isDirty() {
            return !!this.dirty.value;
          }
        }, {
          key: "hasHead",
          value: function hasHead() {
            return !!this.getHead();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.head = null;
            this.subscription && this.subscription.unsubscribe();
            this._reset && this._reset.complete();
          }
        }, {
          key: "isPathDirty",
          value: function isPathDirty(path) {
            var head = this.getHead();
            var current = this.getQuery().getValue();
            var currentPathValue = getNestedPath(current, path);
            var headPathValue = getNestedPath(head, path);
            return this.params.comparator(currentPathValue, headPathValue);
          }
        }, {
          key: "getHead",
          value: function getHead() {
            return this.head;
          }
        }, {
          key: "activate",
          value: function activate() {
            var _this29 = this;

            this.head = this._getHead();
            /** if we are tracking specific properties select only the relevant ones */

            var sources = this.params.watchProperty ? this.params.watchProperty.map(function (prop) {
              return _this29.query.select(function (state) {
                return state[prop];
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (val) {
                return {
                  val: val,
                  __akitaKey: prop
                };
              }));
            }) : [this.selectSource(this._entityId)];
            this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(sources).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["skip"])(1)).subscribe(function (currentState) {
              if (isUndefined(_this29.head)) return;
              /** __akitaKey is used to determine if we are tracking a specific property or a store change */

              var isChange = currentState.some(function (state) {
                var head = state.__akitaKey ? _this29.head[state.__akitaKey] : _this29.head;
                var compareTo = state.__akitaKey ? state.val : state;
                return _this29.params.comparator(head, compareTo);
              });

              _this29.updateDirtiness(isChange);
            });
          }
        }, {
          key: "updateDirtiness",
          value: function updateDirtiness(isDirty) {
            this.dirty.next(isDirty);
          }
        }, {
          key: "_getHead",
          value: function _getHead() {
            var head = this.getSource(this._entityId);

            if (this.params.watchProperty) {
              head = this.getWatchedValues(head);
            }

            return head;
          }
        }, {
          key: "getWatchedValues",
          value: function getWatchedValues(source) {
            return this.params.watchProperty.reduce(function (watched, prop) {
              watched[prop] = source[prop];
              return watched;
            }, {});
          }
        }]);

        return DirtyCheckPlugin;
      }(AkitaPlugin);
      /**
       * Each plugin that wants to add support for entities should extend this interface.
       */


      var EntityCollectionPlugin = /*#__PURE__*/function () {
        function EntityCollectionPlugin(query, entityIds) {
          _classCallCheck(this, EntityCollectionPlugin);

          this.query = query;
          this.entityIds = entityIds;
          this.entities = new Map();
        }
        /**
         * Get the entity plugin instance.
         */


        _createClass(EntityCollectionPlugin, [{
          key: "getEntity",
          value: function getEntity(id) {
            return this.entities.get(id);
          }
          /**
           * Whether the entity plugin exist.
           */

        }, {
          key: "hasEntity",
          value: function hasEntity(id) {
            return this.entities.has(id);
          }
          /**
           * Remove the entity plugin instance.
           */

        }, {
          key: "removeEntity",
          value: function removeEntity(id) {
            this.destroy(id);
            return this.entities["delete"](id);
          }
          /**
           * Set the entity plugin instance.
           */

        }, {
          key: "createEntity",
          value: function createEntity(id, plugin) {
            return this.entities.set(id, plugin);
          }
          /**
           * If the user passes `entityIds` we take them; otherwise, we take all.
           */

        }, {
          key: "getIds",
          value: function getIds() {
            return isUndefined(this.entityIds) ? this.query.getValue().ids : coerceArray(this.entityIds);
          }
          /**
           * When you call one of the plugin methods, you can pass id/ids or undefined which means all.
           */

        }, {
          key: "resolvedIds",
          value: function resolvedIds(ids) {
            return isUndefined(ids) ? this.getIds() : coerceArray(ids);
          }
          /**
           * Call this method when you want to activate the plugin on init or when you need to listen to add/remove of entities dynamically.
           *
           * For example in your plugin you may do the following:
           *
           * this.query.select(state => state.ids).pipe(skip(1)).subscribe(ids => this.activate(ids));
           */

        }, {
          key: "rebase",
          value: function rebase(ids) {
            var _this30 = this;

            var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            /**
             *
             * If the user passes `entityIds` & we have new ids check if we need to add/remove instances.
             *
             * This phase will be called only upon update.
             */
            if (toBoolean(ids)) {
              /**
               * Which means all
               */
              if (isUndefined(this.entityIds)) {
                for (var i = 0, len = ids.length; i < len; i++) {
                  var entityId = ids[i];

                  if (this.hasEntity(entityId) === false) {
                    isFunction(actions.beforeAdd) && actions.beforeAdd(entityId);
                    var plugin = this.instantiatePlugin(entityId);
                    this.entities.set(entityId, plugin);
                    isFunction(actions.afterAdd) && actions.afterAdd(plugin);
                  }
                }

                this.entities.forEach(function (plugin, entityId) {
                  if (ids.indexOf(entityId) === -1) {
                    isFunction(actions.beforeRemove) && actions.beforeRemove(plugin);

                    _this30.removeEntity(entityId);
                  }
                });
              } else {
                /**
                 * Which means the user passes specific ids
                 */
                var _ids = coerceArray(this.entityIds);

                for (var _i4 = 0, _len4 = _ids.length; _i4 < _len4; _i4++) {
                  var _entityId2 = _ids[_i4];
                  /** The Entity in current ids and doesn't exist, add it. */

                  if (ids.indexOf(_entityId2) > -1 && this.hasEntity(_entityId2) === false) {
                    isFunction(actions.beforeAdd) && actions.beforeAdd(_entityId2);

                    var _plugin = this.instantiatePlugin(_entityId2);

                    this.entities.set(_entityId2, _plugin);
                    isFunction(actions.afterAdd) && actions.afterAdd(_plugin);
                  } else {
                    this.entities.forEach(function (plugin, entityId) {
                      /** The Entity not in current ids and exists, remove it. */
                      if (ids.indexOf(entityId) === -1 && _this30.hasEntity(entityId) === true) {
                        isFunction(actions.beforeRemove) && actions.beforeRemove(plugin);

                        _this30.removeEntity(entityId);
                      }
                    });
                  }
                }
              }
            } else {
              /**
               * Otherwise, start with the provided ids or all.
               */
              this.getIds().forEach(function (id) {
                if (!_this30.hasEntity(id)) _this30.createEntity(id, _this30.instantiatePlugin(id));
              });
            }
          }
          /**
           * Listen for add/remove entities.
           */

        }, {
          key: "selectIds",
          value: function selectIds() {
            return this.query.select(function (state) {
              return state.ids;
            });
          }
          /**
           * Base method for activation, you can override it if you need to.
           */

        }, {
          key: "activate",
          value: function activate(ids) {
            this.rebase(ids);
          }
          /**
           * Loop over each id and invoke the plugin method.
           */

        }, {
          key: "forEachId",
          value: function forEachId(ids, cb) {
            var _ids = this.resolvedIds(ids);

            for (var i = 0, len = _ids.length; i < len; i++) {
              var id = _ids[i];

              if (this.hasEntity(id)) {
                cb(this.getEntity(id));
              }
            }
          }
        }]);

        return EntityCollectionPlugin;
      }();

      var EntityDirtyCheckPlugin = /*#__PURE__*/function (_EntityCollectionPlug) {
        _inherits(EntityDirtyCheckPlugin, _EntityCollectionPlug);

        var _super7 = _createSuper(EntityDirtyCheckPlugin);

        function EntityDirtyCheckPlugin(query) {
          var _thisSuper, _this31;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EntityDirtyCheckPlugin);

          _this31 = _super7.call(this, query, params.entityIds);
          _this31.query = query;
          _this31.params = params;
          _this31._someDirty = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          _this31.someDirty$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(_this31.query.select(function (state) {
            return state.entities;
          }), _this31._someDirty.asObservable()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["auditTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function () {
            return _this31.checkSomeDirty();
          }));
          _this31.params = Object.assign(Object.assign({}, dirtyCheckDefaultParams), params); // TODO lazy activate?

          _this31.activate();

          _this31.selectIds().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["skip"])(1)).subscribe(function (ids) {
            _get((_thisSuper = _assertThisInitialized(_this31), _getPrototypeOf(EntityDirtyCheckPlugin.prototype)), "rebase", _thisSuper).call(_thisSuper, ids, {
              afterAdd: function afterAdd(plugin) {
                return plugin.setHead();
              }
            });
          });

          return _this31;
        }

        _createClass(EntityDirtyCheckPlugin, [{
          key: "setHead",
          value: function setHead(ids) {
            if (this.params.entityIds && ids) {
              var toArray = coerceArray(ids);
              var someAreWatched = coerceArray(this.params.entityIds).some(function (id) {
                return toArray.indexOf(id) > -1;
              });

              if (someAreWatched === false) {
                return this;
              }
            }

            this.forEachId(ids, function (e) {
              return e.setHead();
            });

            this._someDirty.next();

            return this;
          }
        }, {
          key: "hasHead",
          value: function hasHead(id) {
            if (this.entities.has(id)) {
              var entity = this.getEntity(id);
              return entity.hasHead();
            }

            return false;
          }
        }, {
          key: "reset",
          value: function reset(ids) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.forEachId(ids, function (e) {
              return e.reset(params);
            });
          }
        }, {
          key: "isDirty",
          value: function isDirty(id) {
            var asObservable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.entities.has(id)) {
              var entity = this.getEntity(id);
              return asObservable ? entity.isDirty$ : entity.isDirty();
            }

            return false;
          }
        }, {
          key: "someDirty",
          value: function someDirty() {
            return this.checkSomeDirty();
          }
        }, {
          key: "isPathDirty",
          value: function isPathDirty(id, path) {
            if (this.entities.has(id)) {
              var head = this.getEntity(id).getHead();
              var current = this.query.getEntity(id);
              var currentPathValue = getNestedPath(current, path);
              var headPathValue = getNestedPath(head, path);
              return this.params.comparator(currentPathValue, headPathValue);
            }

            return null;
          }
        }, {
          key: "destroy",
          value: function destroy(ids) {
            this.forEachId(ids, function (e) {
              return e.destroy();
            });
            /** complete only when the plugin destroys */

            if (!ids) {
              this._someDirty.complete();
            }
          }
        }, {
          key: "instantiatePlugin",
          value: function instantiatePlugin(id) {
            return new DirtyCheckPlugin(this.query, this.params, id);
          }
        }, {
          key: "checkSomeDirty",
          value: function checkSomeDirty() {
            var entitiesIds = this.resolvedIds();

            var _iterator9 = _createForOfIteratorHelper(entitiesIds),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var id = _step9.value;

                if (this.getEntity(id).isDirty()) {
                  return true;
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return false;
          }
        }]);

        return EntityDirtyCheckPlugin;
      }(EntityCollectionPlugin);

      var paginatorDefaults = {
        pagesControls: false,
        range: false,
        startWith: 1,
        cacheTimeout: undefined,
        clearStoreWithCache: true
      };

      var PaginatorPlugin = /*#__PURE__*/function (_AkitaPlugin2) {
        _inherits(PaginatorPlugin, _AkitaPlugin2);

        var _super8 = _createSuper(PaginatorPlugin);

        function PaginatorPlugin(query) {
          var _this32;

          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, PaginatorPlugin);

          _this32 = _super8.call(this, query, {
            resetFn: function resetFn() {
              _this32.initial = false;

              _this32.destroy({
                clearCache: true,
                currentPage: 1
              });
            }
          });
          _this32.query = query;
          _this32.config = config;
          /** Save current filters, sorting, etc. in cache */

          _this32.metadata = new Map();
          _this32.pages = new Map();
          _this32.pagination = {
            currentPage: 1,
            perPage: 0,
            total: 0,
            lastPage: 0,
            data: []
          };
          /**
           * When the user navigates to a different page and return
           * we don't want to call `clearCache` on first time.
           */

          _this32.initial = true;
          /**
           * Proxy to the query loading
           */

          _this32.isLoading$ = _this32.query.selectLoading().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(0));
          _this32.config = Object.assign(Object.assign({}, paginatorDefaults), config);
          var _this32$config = _this32.config,
              startWith = _this32$config.startWith,
              cacheTimeout = _this32$config.cacheTimeout;
          _this32.page = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](startWith);

          if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(cacheTimeout)) {
            _this32.clearCacheSubscription = cacheTimeout.subscribe(function () {
              return _this32.clearCache();
            });
          }

          return _this32;
        }
        /**
         * Listen to page changes
         */


        _createClass(PaginatorPlugin, [{
          key: "pageChanges",
          get: function get() {
            return this.page.asObservable();
          }
          /**
           * Get the current page number
           */

        }, {
          key: "currentPage",
          get: function get() {
            return this.pagination.currentPage;
          }
          /**
           * Check if current page is the first one
           */

        }, {
          key: "isFirst",
          get: function get() {
            return this.currentPage === 1;
          }
          /**
           * Check if current page is the last one
           */

        }, {
          key: "isLast",
          get: function get() {
            return this.currentPage === this.pagination.lastPage;
          }
          /**
           * Whether to generate an array of pages for *ngFor
           * [1, 2, 3, 4]
           */

        }, {
          key: "withControls",
          value: function withControls() {
            this.config.pagesControls = true;
            return this;
          }
          /**
           * Whether to generate the `from` and `to` keys
           * [1, 2, 3, 4]
           */

        }, {
          key: "withRange",
          value: function withRange() {
            this.config.range = true;
            return this;
          }
          /**
           * Set the loading state
           */

        }, {
          key: "setLoading",
          value: function setLoading() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.getStore().setLoading(value);
          }
          /**
           * Update the pagination object and add the page
           */

        }, {
          key: "update",
          value: function update(response) {
            this.pagination = response;
            this.addPage(response.data);
          }
          /**
           *
           * Set the ids and add the page to store
           */

        }, {
          key: "addPage",
          value: function addPage(data) {
            var _this33 = this;

            this.pages.set(this.currentPage, {
              ids: data.map(function (entity) {
                return entity[_this33.getStore().idKey];
              })
            });
            this.getStore().upsertMany(data);
          }
          /**
           * Clear the cache.
           */

        }, {
          key: "clearCache",
          value: function clearCache() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this.initial) {
              logAction('@Pagination - Clear Cache');

              if (options.clearStore !== false && (this.config.clearStoreWithCache || options.clearStore)) {
                this.getStore().remove();
              }

              this.pages = new Map();
              this.metadata = new Map();
            }

            this.initial = false;
          }
        }, {
          key: "clearPage",
          value: function clearPage(page) {
            this.pages["delete"](page);
          }
          /**
           * Clear the cache timeout and optionally the pages
           */

        }, {
          key: "destroy",
          value: function destroy() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                clearCache = _ref10.clearCache,
                currentPage = _ref10.currentPage;

            if (this.clearCacheSubscription) {
              this.clearCacheSubscription.unsubscribe();
            }

            if (clearCache) {
              this.clearCache();
            }

            if (!isUndefined(currentPage)) {
              this.setPage(currentPage);
            }

            this.initial = true;
          }
          /**
           * Whether the provided page is active
           */

        }, {
          key: "isPageActive",
          value: function isPageActive(page) {
            return this.currentPage === page;
          }
          /**
           * Set the current page
           */

        }, {
          key: "setPage",
          value: function setPage(page) {
            if (page !== this.currentPage || !this.hasPage(page)) {
              this.page.next(this.pagination.currentPage = page);
            }
          }
          /**
           * Increment current page
           */

        }, {
          key: "nextPage",
          value: function nextPage() {
            if (this.currentPage !== this.pagination.lastPage) {
              this.setPage(this.pagination.currentPage + 1);
            }
          }
          /**
           * Decrement current page
           */

        }, {
          key: "prevPage",
          value: function prevPage() {
            if (this.pagination.currentPage > 1) {
              this.setPage(this.pagination.currentPage - 1);
            }
          }
          /**
           * Set current page to last
           */

        }, {
          key: "setLastPage",
          value: function setLastPage() {
            this.setPage(this.pagination.lastPage);
          }
          /**
           * Set current page to first
           */

        }, {
          key: "setFirstPage",
          value: function setFirstPage() {
            this.setPage(1);
          }
          /**
           * Check if page exists in cache
           */

        }, {
          key: "hasPage",
          value: function hasPage(page) {
            return this.pages.has(page);
          }
          /**
           * Get the current page if it's in cache, otherwise invoke the request
           */

        }, {
          key: "getPage",
          value: function getPage(req) {
            var _this34 = this;

            var page = this.pagination.currentPage;

            if (this.hasPage(page)) {
              return this.selectPage(page);
            } else {
              this.setLoading(true);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(req()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (config) {
                page = config.currentPage;
                applyTransaction(function () {
                  _this34.setLoading(false);

                  _this34.update(config);
                });
                return _this34.selectPage(page);
              }));
            }
          }
        }, {
          key: "getQuery",
          value: function getQuery() {
            return this.query;
          }
        }, {
          key: "refreshCurrentPage",
          value: function refreshCurrentPage() {
            if (isNil(this.currentPage) === false) {
              this.clearPage(this.currentPage);
              this.setPage(this.currentPage);
            }
          }
        }, {
          key: "getFrom",
          value: function getFrom() {
            if (this.isFirst) {
              return 1;
            }

            return (this.currentPage - 1) * this.pagination.perPage + 1;
          }
        }, {
          key: "getTo",
          value: function getTo() {
            if (this.isLast) {
              return this.pagination.total;
            }

            return this.currentPage * this.pagination.perPage;
          }
          /**
           * Select the page
           */

        }, {
          key: "selectPage",
          value: function selectPage(page) {
            var _this35 = this;

            return this.query.selectAll({
              asObject: true
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (entities) {
              var response = Object.assign(Object.assign({}, _this35.pagination), {
                data: _this35.pages.get(page).ids.map(function (id) {
                  return entities[id];
                })
              });
              var _this35$config = _this35.config,
                  range = _this35$config.range,
                  pagesControls = _this35$config.pagesControls;
              /** If no total - calc it */

              if (isNaN(_this35.pagination.total)) {
                if (response.lastPage === 1) {
                  response.total = response.data ? response.data.length : 0;
                } else {
                  response.total = response.perPage * response.lastPage;
                }

                _this35.pagination.total = response.total;
              }

              if (range) {
                response.from = _this35.getFrom();
                response.to = _this35.getTo();
              }

              if (pagesControls) {
                response.pageControls = generatePages(_this35.pagination.total, _this35.pagination.perPage);
              }

              return response;
            }));
          }
        }]);

        return PaginatorPlugin;
      }(AkitaPlugin);

      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([action('@Pagination - New Page'), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", void 0)], PaginatorPlugin.prototype, "update", null);
      /**
       * Generate an array so we can ngFor them to navigate between pages
       */

      function generatePages(total, perPage) {
        var len = Math.ceil(total / perPage);
        var arr = [];

        for (var i = 0; i < len; i++) {
          arr.push(i + 1);
        }

        return arr;
      }
      /** backward compatibility */


      var Paginator = PaginatorPlugin;

      var PersistNgFormPlugin = /*#__PURE__*/function (_AkitaPlugin3) {
        _inherits(PersistNgFormPlugin, _AkitaPlugin3);

        var _super9 = _createSuper(PersistNgFormPlugin);

        function PersistNgFormPlugin(query, factoryFnOrPath) {
          var _this36;

          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          _classCallCheck(this, PersistNgFormPlugin);

          _this36 = _super9.call(this, query);
          _this36.query = query;
          _this36.factoryFnOrPath = factoryFnOrPath;
          _this36.params = params;
          _this36.params = Object.assign({
            debounceTime: 300,
            formKey: 'akitaForm',
            emitEvent: false,
            arrControlFactory: function arrControlFactory(v) {
              return _this36.builder.control(v);
            }
          }, params);
          _this36.isRootKeys = toBoolean(factoryFnOrPath) === false;
          _this36.isKeyBased = isString(factoryFnOrPath) || _this36.isRootKeys;
          return _this36;
        }

        _createClass(PersistNgFormPlugin, [{
          key: "setForm",
          value: function setForm(form, builder) {
            this.form = form;
            this.builder = builder;
            this.activate();
            return this;
          }
        }, {
          key: "reset",
          value: function reset(initialState) {
            var _this37 = this;

            var value;

            if (initialState) {
              value = initialState;
            } else {
              value = this.isKeyBased ? this.initialValue : this.factoryFnOrPath();
            }

            if (this.isKeyBased) {
              Object.keys(this.initialValue).forEach(function (stateKey) {
                var value = _this37.initialValue[stateKey];

                if (Array.isArray(value) && _this37.builder) {
                  var formArray = _this37.form.controls[stateKey];

                  _this37.cleanArray(formArray);

                  value.forEach(function (v, i) {
                    _this37.form.get(stateKey).insert(i, _this37.params.arrControlFactory(v));
                  });
                }
              });
            }

            this.form.patchValue(value, {
              emitEvent: this.params.emitEvent
            });
            var storeValue = this.isKeyBased ? setValue(this.getQuery().getValue(), "".concat(this.getStore().storeName, ".").concat(this.factoryFnOrPath), value) : _defineProperty({}, this.params.formKey, value);
            this.updateStore(storeValue);
          }
        }, {
          key: "cleanArray",
          value: function cleanArray(control) {
            while (control.length !== 0) {
              control.removeAt(0);
            }
          }
        }, {
          key: "resolveInitialValue",
          value: function resolveInitialValue(formValue, root) {
            var _this38 = this;

            if (!formValue) return;
            return Object.keys(formValue).reduce(function (acc, stateKey) {
              var value = root[stateKey];

              if (Array.isArray(value) && _this38.builder) {
                var factory = _this38.params.arrControlFactory;

                _this38.cleanArray(_this38.form.get(stateKey));

                value.forEach(function (v, i) {
                  _this38.form.get(stateKey).insert(i, factory(v));
                });
              }

              acc[stateKey] = root[stateKey];
              return acc;
            }, {});
          }
        }, {
          key: "activate",
          value: function activate() {
            var _this39 = this;

            var path;

            if (this.isKeyBased) {
              if (this.isRootKeys) {
                this.initialValue = this.resolveInitialValue(this.form.value, this.getQuery().getValue());
                this.form.patchValue(this.initialValue, {
                  emitEvent: this.params.emitEvent
                });
              } else {
                path = "".concat(this.getStore().storeName, ".").concat(this.factoryFnOrPath);
                var root = getValue(this.getQuery().getValue(), path);
                this.initialValue = this.resolveInitialValue(root, root);
                this.form.patchValue(this.initialValue, {
                  emitEvent: this.params.emitEvent
                });
              }
            } else {
              if (!this.getQuery().getValue()[this.params.formKey]) {
                logAction('@PersistNgFormPlugin activate');
                this.updateStore(_defineProperty({}, this.params.formKey, this.factoryFnOrPath()));
              }

              var value = this.getQuery().getValue()[this.params.formKey];
              this.form.patchValue(value);
            }

            this.formChanges = this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(this.params.debounceTime)).subscribe(function (value) {
              logAction('@PersistForm - Update');
              var newState;

              if (_this39.isKeyBased) {
                if (_this39.isRootKeys) {
                  newState = function newState(state) {
                    return Object.assign(Object.assign({}, state), value);
                  };
                } else {
                  newState = function newState(state) {
                    return setValue(state, path, value);
                  };
                }
              } else {
                newState = function newState() {
                  return _defineProperty({}, _this39.params.formKey, value);
                };
              }

              _this39.updateStore(newState(_this39.getQuery().getValue()));
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.formChanges && this.formChanges.unsubscribe();
            this.form = null;
            this.builder = null;
          }
        }]);

        return PersistNgFormPlugin;
      }(AkitaPlugin);

      var StateHistoryPlugin = /*#__PURE__*/function (_AkitaPlugin4) {
        _inherits(StateHistoryPlugin, _AkitaPlugin4);

        var _super10 = _createSuper(StateHistoryPlugin);

        function StateHistoryPlugin(query) {
          var _this40;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var _entityId = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, StateHistoryPlugin);

          _this40 = _super10.call(this, query, {
            resetFn: function resetFn() {
              return _this40.clear();
            }
          });
          _this40.query = query;
          _this40.params = params;
          _this40._entityId = _entityId;
          /** Allow skipping an update from outside */

          _this40.skip = false;
          _this40.history = {
            past: [],
            present: null,
            future: []
          };
          /** Skip the update when redo/undo */

          _this40.skipUpdate = false;
          params.maxAge = !!params.maxAge ? params.maxAge : 10;

          params.comparator = params.comparator || function () {
            return true;
          };

          _this40.activate();

          return _this40;
        }
        /**
         * Observable stream representing whether the history plugin has an available past
         *
         */


        _createClass(StateHistoryPlugin, [{
          key: "hasPast$",
          get: function get() {
            return this._hasPast$;
          }
          /**
           * Observable stream representing whether the history plugin has an available future
           *
           */

        }, {
          key: "hasFuture$",
          get: function get() {
            return this._hasFuture$;
          }
        }, {
          key: "hasPast",
          get: function get() {
            return this.history.past.length > 0;
          }
        }, {
          key: "hasFuture",
          get: function get() {
            return this.history.future.length > 0;
          }
        }, {
          key: "property",
          get: function get() {
            return this.params.watchProperty;
          }
          /* Updates the hasPast$ hasFuture$ observables*/

        }, {
          key: "updateHasHistory",
          value: function updateHasHistory() {
            this.hasFutureSubject.next(this.hasFuture);
            this.hasPastSubject.next(this.hasPast);
          }
        }, {
          key: "activate",
          value: function activate() {
            var _this41 = this;

            this.hasPastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this._hasPast$ = this.hasPastSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
            this.hasFutureSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this._hasFuture$ = this.hasFutureSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
            this.history.present = this.getSource(this._entityId, this.property);
            this.subscription = this.selectSource(this._entityId, this.property).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pairwise"])()).subscribe(function (_ref13) {
              var _ref14 = _slicedToArray(_ref13, 2),
                  past = _ref14[0],
                  present = _ref14[1];

              if (_this41.skip) {
                _this41.skip = false;
                return;
              }
              /**
               *  comparator: (prev, current) => isEqual(prev, current) === false
               */


              var shouldUpdate = _this41.params.comparator(past, present);

              if (!_this41.skipUpdate && shouldUpdate) {
                if (_this41.history.past.length === _this41.params.maxAge) {
                  _this41.history.past = _this41.history.past.slice(1);
                }

                _this41.history.past = [].concat(_toConsumableArray(_this41.history.past), [past]);
                _this41.history.present = present;

                _this41.updateHasHistory();
              }
            });
          }
        }, {
          key: "undo",
          value: function undo() {
            if (this.history.past.length > 0) {
              var _this$history = this.history,
                  past = _this$history.past,
                  present = _this$history.present;
              var previous = past[past.length - 1];
              this.history.past = past.slice(0, past.length - 1);
              this.history.present = previous;
              this.history.future = [present].concat(_toConsumableArray(this.history.future));
              this.update();
            }
          }
        }, {
          key: "redo",
          value: function redo() {
            if (this.history.future.length > 0) {
              var _this$history2 = this.history,
                  past = _this$history2.past,
                  present = _this$history2.present;
              var next = this.history.future[0];
              var newFuture = this.history.future.slice(1);
              this.history.past = [].concat(_toConsumableArray(past), [present]);
              this.history.present = next;
              this.history.future = newFuture;
              this.update('Redo');
            }
          }
        }, {
          key: "jumpToPast",
          value: function jumpToPast(index) {
            if (index < 0 || index >= this.history.past.length) return;
            var _this$history3 = this.history,
                past = _this$history3.past,
                future = _this$history3.future,
                present = _this$history3.present;
            /**
             *
             * const past = [1, 2, 3, 4, 5];
             * const present = 6;
             * const future = [7, 8, 9];
             * const index = 2;
             *
             * newPast = past.slice(0, index) = [1, 2];
             * newPresent = past[index] = 3;
             * newFuture = [...past.slice(index + 1),present, ...future] = [4, 5, 6, 7, 8, 9];
             *
             */

            var newPast = past.slice(0, index);
            var newFuture = [].concat(_toConsumableArray(past.slice(index + 1)), [present], _toConsumableArray(future));
            var newPresent = past[index];
            this.history.past = newPast;
            this.history.present = newPresent;
            this.history.future = newFuture;
            this.update();
          }
        }, {
          key: "jumpToFuture",
          value: function jumpToFuture(index) {
            if (index < 0 || index >= this.history.future.length) return;
            var _this$history4 = this.history,
                past = _this$history4.past,
                future = _this$history4.future,
                present = _this$history4.present;
            /**
             *
             * const past = [1, 2, 3, 4, 5];
             * const present = 6;
             * const future = [7, 8, 9, 10]
             * const index = 1
             *
             * newPast = [...past, present, ...future.slice(0, index) = [1, 2, 3, 4, 5, 6, 7];
             * newPresent = future[index] = 8;
             * newFuture = futrue.slice(index+1) = [9, 10];
             *
             */

            var newPast = [].concat(_toConsumableArray(past), [present], _toConsumableArray(future.slice(0, index)));
            var newPresent = future[index];
            var newFuture = future.slice(index + 1);
            this.history.past = newPast;
            this.history.present = newPresent;
            this.history.future = newFuture;
            this.update('Redo');
          }
          /**
           *
           * jump n steps in the past or forward
           *
           */

        }, {
          key: "jump",
          value: function jump(n) {
            if (n > 0) return this.jumpToFuture(n - 1);
            if (n < 0) return this.jumpToPast(this.history.past.length + n);
          }
          /**
           * Clear the history
           *
           * @param customUpdateFn Callback function for only clearing part of the history
           *
           * @example
           *
           * stateHistory.clear((history) => {
           *  return {
           *    past: history.past,
           *    present: history.present,
           *    future: []
           *  };
           * });
           */

        }, {
          key: "clear",
          value: function clear(customUpdateFn) {
            this.history = isFunction(customUpdateFn) ? customUpdateFn(this.history) : {
              past: [],
              present: null,
              future: []
            };
            this.updateHasHistory();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var clearHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (clearHistory) {
              this.clear();
            }

            this.subscription.unsubscribe();
          }
        }, {
          key: "ignoreNext",
          value: function ignoreNext() {
            this.skip = true;
          }
        }, {
          key: "update",
          value: function update() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Undo';
            this.skipUpdate = true;
            logAction("@StateHistory - ".concat(action));
            this.updateStore(this.history.present, this._entityId, this.property, true);
            this.updateHasHistory();
            this.skipUpdate = false;
          }
        }]);

        return StateHistoryPlugin;
      }(AkitaPlugin);

      var EntityStateHistoryPlugin = /*#__PURE__*/function (_EntityCollectionPlug2) {
        _inherits(EntityStateHistoryPlugin, _EntityCollectionPlug2);

        var _super11 = _createSuper(EntityStateHistoryPlugin);

        function EntityStateHistoryPlugin(query) {
          var _this42;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EntityStateHistoryPlugin);

          _this42 = _super11.call(this, query, params.entityIds);
          _this42.query = query;
          _this42.params = params;
          params.maxAge = toBoolean(params.maxAge) ? params.maxAge : 10;

          _this42.activate();

          _this42.selectIds().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["skip"])(1)).subscribe(function (ids) {
            return _this42.activate(ids);
          });

          return _this42;
        }

        _createClass(EntityStateHistoryPlugin, [{
          key: "redo",
          value: function redo(ids) {
            this.forEachId(ids, function (e) {
              return e.redo();
            });
          }
        }, {
          key: "undo",
          value: function undo(ids) {
            this.forEachId(ids, function (e) {
              return e.undo();
            });
          }
        }, {
          key: "hasPast",
          value: function hasPast(id) {
            if (this.hasEntity(id)) {
              return this.getEntity(id).hasPast;
            }
          }
        }, {
          key: "hasFuture",
          value: function hasFuture(id) {
            if (this.hasEntity(id)) {
              return this.getEntity(id).hasFuture;
            }
          }
        }, {
          key: "jumpToFuture",
          value: function jumpToFuture(ids, index) {
            this.forEachId(ids, function (e) {
              return e.jumpToFuture(index);
            });
          }
        }, {
          key: "jumpToPast",
          value: function jumpToPast(ids, index) {
            this.forEachId(ids, function (e) {
              return e.jumpToPast(index);
            });
          }
        }, {
          key: "clear",
          value: function clear(ids, customUpdateFn) {
            this.forEachId(ids, function (e) {
              return e.clear(customUpdateFn);
            });
          }
        }, {
          key: "destroy",
          value: function destroy(ids) {
            var clearHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.forEachId(ids, function (e) {
              return e.destroy(clearHistory);
            });
          }
        }, {
          key: "ignoreNext",
          value: function ignoreNext(ids) {
            this.forEachId(ids, function (e) {
              return e.ignoreNext();
            });
          }
        }, {
          key: "instantiatePlugin",
          value: function instantiatePlugin(id) {
            return new StateHistoryPlugin(this.query, this.params, id);
          }
        }]);

        return EntityStateHistoryPlugin;
      }(EntityCollectionPlugin);
      /**
       * Reset stores back to their initial state
       *
       * @example
       *
       * resetStores()
       * resetStores({
       *   exclude: ['auth']
       * })
       */


      function resetStores(options) {
        var defaults = {
          exclude: []
        };
        options = Object.assign({}, defaults, options);
        var stores = Object.keys(__stores__);
        applyTransaction(function () {
          var _iterator10 = _createForOfIteratorHelper(stores),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var store = _step10.value;
              var s = __stores__[store];

              if (!options.exclude) {
                s.reset();
              } else {
                if (options.exclude.indexOf(s.storeName) === -1) {
                  s.reset();
                }
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        });
      }

      var StoreAction;

      (function (StoreAction) {
        StoreAction["Update"] = "UPDATE";
      })(StoreAction || (StoreAction = {}));

      var StoreActionMapping = _defineProperty({}, StoreAction.Update, 'update');

      var EntityStoreAction;

      (function (EntityStoreAction) {
        EntityStoreAction["Update"] = "UPDATE";
        EntityStoreAction["AddEntities"] = "ADD_ENTITIES";
        EntityStoreAction["SetEntities"] = "SET_ENTITIES";
        EntityStoreAction["UpdateEntities"] = "UPDATE_ENTITIES";
        EntityStoreAction["RemoveEntities"] = "REMOVE_ENTITIES";
        EntityStoreAction["UpsertEntities"] = "UPSERT_ENTITIES";
        EntityStoreAction["UpsertManyEntities"] = "UPSERT_MANY_ENTITIES";
      })(EntityStoreAction || (EntityStoreAction = {}));

      var EntityStoreActionMapping = (_EntityStoreActionMap = {}, _defineProperty(_EntityStoreActionMap, EntityStoreAction.Update, 'update'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.AddEntities, 'add'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.SetEntities, 'set'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.UpdateEntities, 'update'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.RemoveEntities, 'remove'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.UpsertEntities, 'upsert'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.UpsertManyEntities, 'upsertMany'), _EntityStoreActionMap);
      /**
       * Get a {@link Store} from the global store registry.
       * @param storeClass The {@link Store} class of the instance to be returned.
       */

      function getStore(storeClass) {
        return getStoreByName(storeClass[configKey]['storeName']);
      }
      /**
       * Get a {@link Store} from the global store registry.
       * @param storeName The {@link Store} name of the instance to be returned.
       */


      function getStoreByName(storeName) {
        var store = __stores__[storeName];

        if (isNil(store)) {
          throw new AkitaError("".concat(store.storeName, " doesn't exist"));
        }

        return store;
      }
      /**
       * Get a {@link EntityStore} from the global store registry.
       * @param storeClass The {@link EntityStore} class of the instance to be returned.
       */


      function getEntityStore(storeClass) {
        return getStore(storeClass);
      }
      /**
       * Get a {@link EntityStore} from the global store registry.
       * @param storeName The {@link EntityStore} name of the instance to be returned.
       */


      function getEntityStoreByName(storeName) {
        return getStoreByName(storeName);
      }

      function runStoreAction(storeClassOrName, action, operation) {
        var store = typeof storeClassOrName === 'string' ? getStoreByName(storeClassOrName) : getStore(storeClassOrName);
        operation(store[StoreActionMapping[action]].bind(store));
      }

      function runEntityStoreAction(storeClassOrName, action, operation) {
        var store = typeof storeClassOrName === 'string' ? getEntityStoreByName(storeClassOrName) : getEntityStore(storeClassOrName);
        operation(store[EntityStoreActionMapping[action]].bind(store));
      }

      function setLoading(store) {
        return function (source) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
            store.setLoading(true);
            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () {
              return store.setLoading(false);
            }));
          });
        };
      }

      function setLoadingAndError(store) {
        return function (source) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
            store.setLoading(true);
            store.setError(null);
            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])({
              error: function error(err) {
                store.setLoading(false);
                store.setError(err);
              },
              complete: function complete() {
                store.setLoading(false);
              }
            }));
          });
        };
      }

      var SnapshotManager = /*#__PURE__*/function () {
        function SnapshotManager() {
          _classCallCheck(this, SnapshotManager);
        }

        _createClass(SnapshotManager, [{
          key: "getStoresSnapshot",
          value:
          /**
           * Get a snapshot of the whole state or a specific stores
           * Use it ONLY for things such as saving the state in the server
           */
          function getStoresSnapshot() {
            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var acc = {};
            var hasInclude = stores.length > 0;
            var keys = hasInclude ? stores : Object.keys(__stores__);

            for (var i = 0; i < keys.length; i++) {
              var storeName = keys[i];

              if (storeName !== 'router') {
                acc[storeName] = __stores__[storeName]._value();
              }
            }

            return acc;
          }
        }, {
          key: "setStoresSnapshot",
          value: function setStoresSnapshot(stores, options) {
            var mergedOptions = Object.assign({
              skipStorageUpdate: false,
              lazy: false
            }, options);
            mergedOptions.skipStorageUpdate && setSkipStorageUpdate(true);
            var normalizedStores = stores;

            if (isString(stores)) {
              normalizedStores = JSON.parse(normalizedStores);
            }

            var size = Object.keys(normalizedStores).length;

            if (mergedOptions.lazy) {
              $$addStore.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (name) {
                return normalizedStores.hasOwnProperty(name);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(size)).subscribe(function (name) {
                return __stores__[name]._setState(function () {
                  return normalizedStores[name];
                });
              });
            } else {
              var _loop5 = function _loop5(i, keys) {
                var storeName = keys[i];

                if (__stores__[storeName]) {
                  __stores__[storeName]._setState(function () {
                    return normalizedStores[storeName];
                  });
                }
              };

              for (var i = 0, keys = Object.keys(normalizedStores); i < keys.length; i++) {
                _loop5(i, keys);
              }
            }

            mergedOptions.skipStorageUpdate && setSkipStorageUpdate(false);
          }
        }]);

        return SnapshotManager;
      }();

      var snapshotManager = new SnapshotManager(); // @internal

      function toEntitiesIds(entities) {
        var idKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ID_KEY;
        var ids = [];

        var _iterator11 = _createForOfIteratorHelper(entities),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var entity = _step11.value;
            ids.push(entity[idKey]);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return ids;
      }
      /**
       * Track id updates of an entity and re-evaluation the query with the changed entity id.
       * Hint: Don't place the operator after other operators in the same pipeline as those will be skipped on
       * re-evaluation. Also, it can't be used with the selection operator, e.g <code>selectEntity(1, e => e.title)</code>
       * @param query The query from which the entity is selected.
       * @example
       *
       *   query.selectEntity(1).pipe(trackIdChanges(query)).subscribe(entity => { ... })
       *
       */


      function trackIdChanges(query) {
        return function (source) {
          return source.lift(new TrackIdChanges(query));
        };
      }

      var TrackIdChanges = /*#__PURE__*/function () {
        function TrackIdChanges(query) {
          _classCallCheck(this, TrackIdChanges);

          this.query = query;
        }

        _createClass(TrackIdChanges, [{
          key: "call",
          value: function call(subscriber, source) {
            var _this43 = this;

            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (entity) {
              var currId = entity[_this43.query.__store__.config.idKey];
              var pending = false;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                newId: undefined,
                oldId: currId,
                pending: false
              }), _this43.query.__store__.selectEntityIdChanges$).pipe( // the new id must differ form the old id
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (change) {
                return change.oldId === currId;
              }), // extract the current pending state of the id update
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (change) {
                return pending = change.pending;
              }), // only update the selection query if the id update is already applied to the store
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (change) {
                return change.newId !== currId && !pending;
              }), // build a selection query for the new entity id
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (change) {
                return _this43.query.selectEntity(currId = change.newId || currId) // skip undefined value if pending.
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function () {
                  return !pending;
                }));
              }));
            })).subscribe(subscriber);
          }
        }]);

        return TrackIdChanges;
      }();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=datorama-akita.js.map

      /***/

    },

    /***/
    "5+WD":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
      \**********************************************************************/

    /*! exports provided: CDK_DRAG_CONFIG, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, ɵangular_material_src_cdk_drag_drop_drag_drop_b */

    /***/
    function WD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
        return CDK_DRAG_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
        return CDK_DROP_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
        return CdkDrag;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
        return CdkDragHandle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
        return CdkDragPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
        return CdkDragPreview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
        return CdkDropList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
        return CdkDropListGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
        return DragDrop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
        return DragDropModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
        return DragDropRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragRef", function () {
        return DragRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
        return DropListRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
        return copyArrayItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
        return moveItemInArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
        return transferArrayItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_drag_drop_drag_drop_b", function () {
        return CDK_DRAG_PARENT;
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


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Shallow-extends a stylesheet object with another stylesheet object.
       * @docs-private
       */


      function extendStyles(dest, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
          }
        }

        return dest;
      }
      /**
       * Toggles whether the native drag interactions should be enabled for an element.
       * @param element Element on which to toggle the drag interactions.
       * @param enable Whether the drag interactions should be enabled.
       * @docs-private
       */


      function toggleNativeDragInteractions(element, enable) {
        var userSelect = enable ? '' : 'none';
        extendStyles(element.style, {
          touchAction: enable ? '' : 'none',
          webkitUserDrag: enable ? '' : 'none',
          webkitTapHighlightColor: enable ? '' : 'transparent',
          userSelect: userSelect,
          msUserSelect: userSelect,
          webkitUserSelect: userSelect,
          MozUserSelect: userSelect
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Parses a CSS time value to milliseconds. */


      function parseCssTimeUnitsToMs(value) {
        // Some browsers will return it in seconds, whereas others will return milliseconds.
        var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
        return parseFloat(value) * multiplier;
      }
      /** Gets the transform transition duration, including the delay, of an element in milliseconds. */


      function getTransformTransitionDurationInMs(element) {
        var computedStyle = getComputedStyle(element);
        var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
        var property = transitionedProperties.find(function (prop) {
          return prop === 'transform' || prop === 'all';
        }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

        if (!property) {
          return 0;
        } // Get the index of the property that we're interested in and match
        // it up to the same index in `transition-delay` and `transition-duration`.


        var propertyIndex = transitionedProperties.indexOf(property);
        var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
        var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
        return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
      }
      /** Parses out multiple values from a computed style into an array. */


      function parseCssPropertyValue(computedStyle, name) {
        var value = computedStyle.getPropertyValue(name);
        return value.split(',').map(function (part) {
          return part.trim();
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Gets a mutable version of an element's bounding `ClientRect`. */


      function getMutableClientRect(element) {
        var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
        // and we need to be able to update them. Also we can't use a spread here, because
        // the values on a `ClientRect` aren't own properties. See:
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

        return {
          top: clientRect.top,
          right: clientRect.right,
          bottom: clientRect.bottom,
          left: clientRect.left,
          width: clientRect.width,
          height: clientRect.height
        };
      }
      /**
       * Checks whether some coordinates are within a `ClientRect`.
       * @param clientRect ClientRect that is being checked.
       * @param x Coordinates along the X axis.
       * @param y Coordinates along the Y axis.
       */


      function isInsideClientRect(clientRect, x, y) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            left = clientRect.left,
            right = clientRect.right;
        return y >= top && y <= bottom && x >= left && x <= right;
      }
      /**
       * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
       * @param clientRect `ClientRect` that should be updated.
       * @param top Amount to add to the `top` position.
       * @param left Amount to add to the `left` position.
       */


      function adjustClientRect(clientRect, top, left) {
        clientRect.top += top;
        clientRect.bottom = clientRect.top + clientRect.height;
        clientRect.left += left;
        clientRect.right = clientRect.left + clientRect.width;
      }
      /**
       * Checks whether the pointer coordinates are close to a ClientRect.
       * @param rect ClientRect to check against.
       * @param threshold Threshold around the ClientRect.
       * @param pointerX Coordinates along the X axis.
       * @param pointerY Coordinates along the Y axis.
       */


      function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
        var top = rect.top,
            right = rect.right,
            bottom = rect.bottom,
            left = rect.left,
            width = rect.width,
            height = rect.height;
        var xThreshold = width * threshold;
        var yThreshold = height * threshold;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Keeps track of the scroll position and dimensions of the parents of an element. */


      var ParentPositionTracker = /*#__PURE__*/function () {
        function ParentPositionTracker(_document, _viewportRuler) {
          _classCallCheck(this, ParentPositionTracker);

          this._document = _document;
          this._viewportRuler = _viewportRuler;
          /** Cached positions of the scrollable parent elements. */

          this.positions = new Map();
        }
        /** Clears the cached positions. */


        _createClass(ParentPositionTracker, [{
          key: "clear",
          value: function clear() {
            this.positions.clear();
          }
          /** Caches the positions. Should be called at the beginning of a drag sequence. */

        }, {
          key: "cache",
          value: function cache(elements) {
            var _this44 = this;

            this.clear();
            this.positions.set(this._document, {
              scrollPosition: this._viewportRuler.getViewportScrollPosition()
            });
            elements.forEach(function (element) {
              _this44.positions.set(element, {
                scrollPosition: {
                  top: element.scrollTop,
                  left: element.scrollLeft
                },
                clientRect: getMutableClientRect(element)
              });
            });
          }
          /** Handles scrolling while a drag is taking place. */

        }, {
          key: "handleScroll",
          value: function handleScroll(event) {
            var target = event.target;
            var cachedPosition = this.positions.get(target);

            if (!cachedPosition) {
              return null;
            } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
            // parent is the `document`, we use the `documentElement`, because IE doesn't support
            // `contains` on the `document`.


            var scrolledParentNode = target === this._document ? target.documentElement : target;
            var scrollPosition = cachedPosition.scrollPosition;
            var newTop;
            var newLeft;

            if (target === this._document) {
              var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();

              newTop = viewportScrollPosition.top;
              newLeft = viewportScrollPosition.left;
            } else {
              newTop = target.scrollTop;
              newLeft = target.scrollLeft;
            }

            var topDifference = scrollPosition.top - newTop;
            var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
            // parents that are inside the element that was scrolled.

            this.positions.forEach(function (position, node) {
              if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
              }
            });
            scrollPosition.top = newTop;
            scrollPosition.left = newLeft;
            return {
              top: topDifference,
              left: leftDifference
            };
          }
        }]);

        return ParentPositionTracker;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options that can be used to bind a passive event listener. */


      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /** Options that can be used to bind an active event listener. */

      var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: false
      });
      /**
       * Time in milliseconds for which to ignore mouse events, after
       * receiving a touch event. Used to avoid doing double work for
       * touch devices where the browser fires fake mouse events, in
       * addition to touch events.
       */

      var MOUSE_EVENT_IGNORE_TIME = 800;
      /**
       * Reference to a draggable item. Used to manipulate or dispose of the item.
       */

      var DragRef = /*#__PURE__*/function () {
        function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
          var _this45 = this;

          _classCallCheck(this, DragRef);

          this._config = _config;
          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
          /**
           * CSS `transform` applied to the element when it isn't being dragged. We need a
           * passive transform in order for the dragged element to retain its new position
           * after the user has stopped dragging and because we need to know the relative
           * position in case they start dragging again. This corresponds to `element.style.transform`.
           */

          this._passiveTransform = {
            x: 0,
            y: 0
          };
          /** CSS `transform` that is applied to the element while it's being dragged. */

          this._activeTransform = {
            x: 0,
            y: 0
          };
          /** Emits when the item is being moved. */

          this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Subscription to pointer movement events. */

          this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the event that is dispatched when the user lifts their pointer. */

          this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the viewport being scrolled. */

          this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the viewport being resized. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Cached reference to the boundary element. */

          this._boundaryElement = null;
          /** Whether the native dragging interactions have been enabled on the root element. */

          this._nativeInteractionsEnabled = true;
          /** Elements that can be used to drag the draggable item. */

          this._handles = [];
          /** Registered handles that are currently disabled. */

          this._disabledHandles = new Set();
          /** Layout direction of the item. */

          this._direction = 'ltr';
          /**
           * Amount of milliseconds to wait after the user has put their
           * pointer down before starting to drag the element.
           */

          this.dragStartDelay = 0;
          this._disabled = false;
          /** Emits as the drag sequence is being prepared. */

          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user starts dragging the item. */

          this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = this._moveEvents.asObservable();
          /** Handler for the `mousedown`/`touchstart` events. */

          this._pointerDown = function (event) {
            _this45.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


            if (_this45._handles.length) {
              var targetHandle = _this45._handles.find(function (handle) {
                var target = event.target;
                return !!target && (target === handle || handle.contains(target));
              });

              if (targetHandle && !_this45._disabledHandles.has(targetHandle) && !_this45.disabled) {
                _this45._initializeDragSequence(targetHandle, event);
              }
            } else if (!_this45.disabled) {
              _this45._initializeDragSequence(_this45._rootElement, event);
            }
          };
          /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


          this._pointerMove = function (event) {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();

            var pointerPosition = _this45._getPointerPositionOnPage(event);

            if (!_this45._hasStartedDragging) {
              var distanceX = Math.abs(pointerPosition.x - _this45._pickupPositionOnPage.x);
              var distanceY = Math.abs(pointerPosition.y - _this45._pickupPositionOnPage.y);
              var isOverThreshold = distanceX + distanceY >= _this45._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
              // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
              // in the `pointerMove` subscription, because we're not guaranteed to have one move event
              // per pixel of movement (e.g. if the user moves their pointer quickly).

              if (isOverThreshold) {
                var isDelayElapsed = Date.now() >= _this45._dragStartTime + _this45._getDragStartDelay(event);

                if (!isDelayElapsed) {
                  _this45._endDragSequence(event);

                  return;
                } // Prevent other drag sequences from starting while something in the container is still
                // being dragged. This can happen while we're waiting for the drop animation to finish
                // and can cause errors, because some elements might still be moving around.


                if (!_this45._dropContainer || !_this45._dropContainer.isDragging()) {
                  _this45._hasStartedDragging = true;

                  _this45._ngZone.run(function () {
                    return _this45._startDragSequence(event);
                  });
                }
              }

              return;
            } // We only need the preview dimensions if we have a boundary element.


            if (_this45._boundaryElement) {
              // Cache the preview element rect if we haven't cached it already or if
              // we cached it too early before the element dimensions were computed.
              if (!_this45._previewRect || !_this45._previewRect.width && !_this45._previewRect.height) {
                _this45._previewRect = (_this45._preview || _this45._rootElement).getBoundingClientRect();
              }
            }

            var constrainedPointerPosition = _this45._getConstrainedPointerPosition(pointerPosition);

            _this45._hasMoved = true;
            _this45._lastKnownPointerPosition = pointerPosition;

            _this45._updatePointerDirectionDelta(constrainedPointerPosition);

            if (_this45._dropContainer) {
              _this45._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
            } else {
              var activeTransform = _this45._activeTransform;
              activeTransform.x = constrainedPointerPosition.x - _this45._pickupPositionOnPage.x + _this45._passiveTransform.x;
              activeTransform.y = constrainedPointerPosition.y - _this45._pickupPositionOnPage.y + _this45._passiveTransform.y;

              _this45._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


              if (typeof SVGElement !== 'undefined' && _this45._rootElement instanceof SVGElement) {
                var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

                _this45._rootElement.setAttribute('transform', appliedTransform);
              }
            } // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.


            if (_this45._moveEvents.observers.length) {
              _this45._ngZone.run(function () {
                _this45._moveEvents.next({
                  source: _this45,
                  pointerPosition: constrainedPointerPosition,
                  event: event,
                  distance: _this45._getDragDistance(constrainedPointerPosition),
                  delta: _this45._pointerDirectionDelta
                });
              });
            }
          };
          /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


          this._pointerUp = function (event) {
            _this45._endDragSequence(event);
          };

          this.withRootElement(element);
          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

          _dragDropRegistry.registerDragItem(this);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(DragRef, [{
          key: "disabled",
          get: function get() {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._toggleNativeDragInteractions();
            }
          }
          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */

        }, {
          key: "getPlaceholderElement",
          value: function getPlaceholderElement() {
            return this._placeholder;
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._rootElement;
          }
          /**
           * Gets the currently-visible element that represents the drag item.
           * While dragging this is the placeholder, otherwise it's the root element.
           */

        }, {
          key: "getVisibleElement",
          value: function getVisibleElement() {
            return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
          }
          /** Registers the handles that can be used to drag the element. */

        }, {
          key: "withHandles",
          value: function withHandles(handles) {
            this._handles = handles.map(function (handle) {
              return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle);
            });

            this._handles.forEach(function (handle) {
              return toggleNativeDragInteractions(handle, false);
            });

            this._toggleNativeDragInteractions();

            return this;
          }
          /**
           * Registers the template that should be used for the drag preview.
           * @param template Template that from which to stamp out the preview.
           */

        }, {
          key: "withPreviewTemplate",
          value: function withPreviewTemplate(template) {
            this._previewTemplate = template;
            return this;
          }
          /**
           * Registers the template that should be used for the drag placeholder.
           * @param template Template that from which to stamp out the placeholder.
           */

        }, {
          key: "withPlaceholderTemplate",
          value: function withPlaceholderTemplate(template) {
            this._placeholderTemplate = template;
            return this;
          }
          /**
           * Sets an alternate drag root element. The root element is the element that will be moved as
           * the user is dragging. Passing an alternate root element is useful when trying to enable
           * dragging on an element that you might not have access to.
           */

        }, {
          key: "withRootElement",
          value: function withRootElement(rootElement) {
            var _this46 = this;

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);

            if (element !== this._rootElement) {
              if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
              }

              this._ngZone.runOutsideAngular(function () {
                element.addEventListener('mousedown', _this46._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', _this46._pointerDown, passiveEventListenerOptions);
              });

              this._initialTransform = undefined;
              this._rootElement = element;
            }

            if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
              this._ownerSVGElement = this._rootElement.ownerSVGElement;
            }

            return this;
          }
          /**
           * Element to which the draggable's position will be constrained.
           */

        }, {
          key: "withBoundaryElement",
          value: function withBoundaryElement(boundaryElement) {
            var _this47 = this;

            this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;

            this._resizeSubscription.unsubscribe();

            if (boundaryElement) {
              this._resizeSubscription = this._viewportRuler.change(10).subscribe(function () {
                return _this47._containInsideBoundaryOnResize();
              });
            }

            return this;
          }
          /** Removes the dragging functionality from the DOM element. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
            // stop being considered as dragged once it is removed.


            if (this.isDragging()) {
              // Since we move out the element to the end of the body while it's being
              // dragged, we have to make sure that it's removed if it gets destroyed.
              removeNode(this._rootElement);
            }

            removeNode(this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._dragDropRegistry.removeDragItem(this);

            this._removeSubscriptions();

            this.beforeStarted.complete();
            this.started.complete();
            this.released.complete();
            this.ended.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();

            this._moveEvents.complete();

            this._handles = [];

            this._disabledHandles.clear();

            this._dropContainer = undefined;

            this._resizeSubscription.unsubscribe();

            this._parentPositions.clear();

            this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = null;
          }
          /** Checks whether the element is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._rootElement.style.transform = this._initialTransform || '';
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform = {
              x: 0,
              y: 0
            };
          }
          /**
           * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
           * @param handle Handle element that should be disabled.
           */

        }, {
          key: "disableHandle",
          value: function disableHandle(handle) {
            if (this._handles.indexOf(handle) > -1) {
              this._disabledHandles.add(handle);
            }
          }
          /**
           * Enables a handle, if it has been disabled.
           * @param handle Handle element to be enabled.
           */

        }, {
          key: "enableHandle",
          value: function enableHandle(handle) {
            this._disabledHandles["delete"](handle);
          }
          /** Sets the layout direction of the draggable item. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /** Sets the container that the item is part of. */

        }, {
          key: "_withDropContainer",
          value: function _withDropContainer(container) {
            this._dropContainer = container;
          }
          /**
           * Gets the current position in pixels the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
            return {
              x: position.x,
              y: position.y
            };
          }
          /**
           * Sets the current position in pixels the draggable outside of a drop container.
           * @param value New position to be set.
           */

        }, {
          key: "setFreeDragPosition",
          value: function setFreeDragPosition(value) {
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform.x = value.x;
            this._passiveTransform.y = value.y;

            if (!this._dropContainer) {
              this._applyRootElementTransform(value.x, value.y);
            }

            return this;
          }
          /** Updates the item's sort order based on the last-known pointer position. */

        }, {
          key: "_sortFromLastPointerPosition",
          value: function _sortFromLastPointerPosition() {
            var position = this._lastKnownPointerPosition;

            if (position && this._dropContainer) {
              this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
            }
          }
          /** Unsubscribes from the global subscriptions. */

        }, {
          key: "_removeSubscriptions",
          value: function _removeSubscriptions() {
            this._pointerMoveSubscription.unsubscribe();

            this._pointerUpSubscription.unsubscribe();

            this._scrollSubscription.unsubscribe();
          }
          /** Destroys the preview element and its ViewRef. */

        }, {
          key: "_destroyPreview",
          value: function _destroyPreview() {
            if (this._preview) {
              removeNode(this._preview);
            }

            if (this._previewRef) {
              this._previewRef.destroy();
            }

            this._preview = this._previewRef = null;
          }
          /** Destroys the placeholder element and its ViewRef. */

        }, {
          key: "_destroyPlaceholder",
          value: function _destroyPlaceholder() {
            if (this._placeholder) {
              removeNode(this._placeholder);
            }

            if (this._placeholderRef) {
              this._placeholderRef.destroy();
            }

            this._placeholder = this._placeholderRef = null;
          }
          /**
           * Clears subscriptions and stops the dragging sequence.
           * @param event Browser event object that ended the sequence.
           */

        }, {
          key: "_endDragSequence",
          value: function _endDragSequence(event) {
            var _this48 = this;

            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!this._dragDropRegistry.isDragging(this)) {
              return;
            }

            this._removeSubscriptions();

            this._dragDropRegistry.stopDragging(this);

            this._toggleNativeDragInteractions();

            if (this._handles) {
              this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
            }

            if (!this._hasStartedDragging) {
              return;
            }

            this.released.next({
              source: this
            });

            if (this._dropContainer) {
              // Stop scrolling immediately, instead of waiting for the animation to finish.
              this._dropContainer._stopScrolling();

              this._animatePreviewToPlaceholder().then(function () {
                _this48._cleanupDragArtifacts(event);

                _this48._cleanupCachedDimensions();

                _this48._dragDropRegistry.stopDragging(_this48);
              });
            } else {
              // Convert the active transform into a passive one. This means that next time
              // the user starts dragging the item, its position will be calculated relatively
              // to the new passive transform.
              this._passiveTransform.x = this._activeTransform.x;
              this._passiveTransform.y = this._activeTransform.y;

              this._ngZone.run(function () {
                _this48.ended.next({
                  source: _this48,
                  distance: _this48._getDragDistance(_this48._getPointerPositionOnPage(event))
                });
              });

              this._cleanupCachedDimensions();

              this._dragDropRegistry.stopDragging(this);
            }
          }
          /** Starts the dragging sequence. */

        }, {
          key: "_startDragSequence",
          value: function _startDragSequence(event) {
            if (isTouchEvent(event)) {
              this._lastTouchEventTime = Date.now();
            }

            this._toggleNativeDragInteractions();

            var dropContainer = this._dropContainer;

            if (dropContainer) {
              var element = this._rootElement;
              var parent = element.parentNode;

              var preview = this._preview = this._createPreviewElement();

              var placeholder = this._placeholder = this._createPlaceholderElement();

              var anchor = this._anchor = this._anchor || this._document.createComment(''); // Insert an anchor node so that we can restore the element's position in the DOM.


              parent.insertBefore(anchor, element); // We move the element out at the end of the body and we make it hidden, because keeping it in
              // place will throw off the consumer's `:last-child` selectors. We can't remove the element
              // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

              element.style.display = 'none';

              this._document.body.appendChild(parent.replaceChild(placeholder, element));

              getPreviewInsertionPoint(this._document).appendChild(preview);
              this.started.next({
                source: this
              }); // Emit before notifying the container.

              dropContainer.start();
              this._initialContainer = dropContainer;
              this._initialIndex = dropContainer.getItemIndex(this);
            } else {
              this.started.next({
                source: this
              });
              this._initialContainer = this._initialIndex = undefined;
            } // Important to run after we've called `start` on the parent container
            // so that it has had time to resolve its scrollable parents.


            this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
          }
          /**
           * Sets up the different variables and subscriptions
           * that will be necessary for the dragging sequence.
           * @param referenceElement Element that started the drag sequence.
           * @param event Browser event object that started the sequence.
           */

        }, {
          key: "_initializeDragSequence",
          value: function _initializeDragSequence(referenceElement, event) {
            var _this49 = this;

            // Always stop propagation for the event that initializes
            // the dragging sequence, in order to prevent it from potentially
            // starting another sequence for a draggable parent somewhere up the DOM tree.
            event.stopPropagation();
            var isDragging = this.isDragging();
            var isTouchSequence = isTouchEvent(event);
            var isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
            var rootElement = this._rootElement;
            var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
            // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
            // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
            // it's flaky and it fails if the user drags it away quickly. Also note that we only want
            // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
            // events from firing on touch devices.

            if (event.target && event.target.draggable && event.type === 'mousedown') {
              event.preventDefault();
            } // Abort if the user is already dragging or is using a mouse button other than the primary one.


            if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
              return;
            } // If we've got handles, we need to disable the tap highlight on the entire root element,
            // otherwise iOS will still add it, even though all the drag interactions on the handle
            // are disabled.


            if (this._handles.length) {
              this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
              rootElement.style.webkitTapHighlightColor = 'transparent';
            }

            this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
            // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

            this._removeSubscriptions();

            this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
            this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
            this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(function (scrollEvent) {
              _this49._updateOnScroll(scrollEvent);
            });

            if (this._boundaryElement) {
              this._boundaryRect = getMutableClientRect(this._boundaryElement);
            } // If we have a custom preview we can't know ahead of time how large it'll be so we position
            // it next to the cursor. The exception is when the consumer has opted into making the preview
            // the same size as the root element, in which case we do know the size.


            var previewTemplate = this._previewTemplate;
            this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
              x: 0,
              y: 0
            } : this._getPointerPositionInElement(referenceElement, event);

            var pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

            this._pointerDirectionDelta = {
              x: 0,
              y: 0
            };
            this._pointerPositionAtLastDirectionChange = {
              x: pointerPosition.x,
              y: pointerPosition.y
            };
            this._dragStartTime = Date.now();

            this._dragDropRegistry.startDragging(this, event);
          }
          /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */

        }, {
          key: "_cleanupDragArtifacts",
          value: function _cleanupDragArtifacts(event) {
            var _this50 = this;

            // Restore the element's visibility and insert it at its old position in the DOM.
            // It's important that we maintain the position, because moving the element around in the DOM
            // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
            // while moving the existing elements in all other cases.
            this._rootElement.style.display = '';

            this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

            this._ngZone.run(function () {
              var container = _this50._dropContainer;
              var currentIndex = container.getItemIndex(_this50);

              var pointerPosition = _this50._getPointerPositionOnPage(event);

              var distance = _this50._getDragDistance(_this50._getPointerPositionOnPage(event));

              var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

              _this50.ended.next({
                source: _this50,
                distance: distance
              });

              _this50.dropped.next({
                item: _this50,
                currentIndex: currentIndex,
                previousIndex: _this50._initialIndex,
                container: container,
                previousContainer: _this50._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
              });

              container.drop(_this50, currentIndex, _this50._initialContainer, isPointerOverContainer, distance, _this50._initialIndex);
              _this50._dropContainer = _this50._initialContainer;
            });
          }
          /**
           * Updates the item's position in its drop container, or moves it
           * into a new one, depending on its current drag position.
           */

        }, {
          key: "_updateActiveDropContainer",
          value: function _updateActiveDropContainer(_ref15, _ref16) {
            var _this51 = this;

            var x = _ref15.x,
                y = _ref15.y;
            var rawX = _ref16.x,
                rawY = _ref16.y;

            // Drop container that draggable has been moved into.
            var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
            // initial container, check whether the it's over the initial container. This handles the
            // case where two containers are connected one way and the user tries to undo dragging an
            // item into a new container.


            if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
              newContainer = this._initialContainer;
            }

            if (newContainer && newContainer !== this._dropContainer) {
              this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this51.exited.next({
                  item: _this51,
                  container: _this51._dropContainer
                });

                _this51._dropContainer.exit(_this51); // Notify the new container that the item has entered.


                _this51._dropContainer = newContainer;

                _this51._dropContainer.enter(_this51, x, y, newContainer === _this51._initialContainer && // If we're re-entering the initial container and sorting is disabled,
                // put item the into its starting index to begin with.
                newContainer.sortingDisabled ? _this51._initialIndex : undefined);

                _this51.entered.next({
                  item: _this51,
                  container: newContainer,
                  currentIndex: newContainer.getItemIndex(_this51)
                });
              });
            }

            this._dropContainer._startScrollingIfNecessary(rawX, rawY);

            this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

            this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
          }
          /**
           * Creates the element that will be rendered next to the user's pointer
           * and will be used as a preview of the element that is being dragged.
           */

        }, {
          key: "_createPreviewElement",
          value: function _createPreviewElement() {
            var previewConfig = this._previewTemplate;
            var previewClass = this.previewClass;
            var previewTemplate = previewConfig ? previewConfig.template : null;
            var preview;

            if (previewTemplate && previewConfig) {
              // Measure the element before we've inserted the preview
              // since the insertion could throw off the measurement.
              var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
              var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
              viewRef.detectChanges();
              preview = getRootNode(viewRef, this._document);
              this._previewRef = viewRef;

              if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
              } else {
                preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
              }
            } else {
              var element = this._rootElement;
              preview = deepCloneNode(element);
              matchElementSize(preview, element.getBoundingClientRect());
            }

            extendStyles(preview.style, {
              // It's important that we disable the pointer events on the preview, because
              // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
              pointerEvents: 'none',
              // We have to reset the margin, because it can throw off positioning relative to the viewport.
              margin: '0',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: "".concat(this._config.zIndex || 1000)
            });
            toggleNativeDragInteractions(preview, false);
            preview.classList.add('cdk-drag-preview');
            preview.setAttribute('dir', this._direction);

            if (previewClass) {
              if (Array.isArray(previewClass)) {
                previewClass.forEach(function (className) {
                  return preview.classList.add(className);
                });
              } else {
                preview.classList.add(previewClass);
              }
            }

            return preview;
          }
          /**
           * Animates the preview element from its current position to the location of the drop placeholder.
           * @returns Promise that resolves when the animation completes.
           */

        }, {
          key: "_animatePreviewToPlaceholder",
          value: function _animatePreviewToPlaceholder() {
            var _this52 = this;

            // If the user hasn't moved yet, the transitionend event won't fire.
            if (!this._hasMoved) {
              return Promise.resolve();
            }

            var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


            this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


            this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
            // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
            // apply its style, we take advantage of the available info to figure out whether we need to
            // bind the event in the first place.

            var duration = getTransformTransitionDurationInMs(this._preview);

            if (duration === 0) {
              return Promise.resolve();
            }

            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                var handler = function handler(event) {
                  if (!event || event.target === _this52._preview && event.propertyName === 'transform') {
                    _this52._preview.removeEventListener('transitionend', handler);

                    resolve();
                    clearTimeout(timeout);
                  }
                }; // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.


                var timeout = setTimeout(handler, duration * 1.5);

                _this52._preview.addEventListener('transitionend', handler);
              });
            });
          }
          /** Creates an element that will be shown instead of the current element while dragging. */

        }, {
          key: "_createPlaceholderElement",
          value: function _createPlaceholderElement() {
            var placeholderConfig = this._placeholderTemplate;
            var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
            var placeholder;

            if (placeholderTemplate) {
              this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

              this._placeholderRef.detectChanges();

              placeholder = getRootNode(this._placeholderRef, this._document);
            } else {
              placeholder = deepCloneNode(this._rootElement);
            }

            placeholder.classList.add('cdk-drag-placeholder');
            return placeholder;
          }
          /**
           * Figures out the coordinates at which an element was picked up.
           * @param referenceElement Element that initiated the dragging.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "_getPointerPositionInElement",
          value: function _getPointerPositionInElement(referenceElement, event) {
            var elementRect = this._rootElement.getBoundingClientRect();

            var handleElement = referenceElement === this._rootElement ? null : referenceElement;
            var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
            var point = isTouchEvent(event) ? event.targetTouches[0] : event;

            var scrollPosition = this._getViewportScrollPosition();

            var x = point.pageX - referenceRect.left - scrollPosition.left;
            var y = point.pageY - referenceRect.top - scrollPosition.top;
            return {
              x: referenceRect.left - elementRect.left + x,
              y: referenceRect.top - elementRect.top + y
            };
          }
          /** Determines the point of the page that was touched by the user. */

        }, {
          key: "_getPointerPositionOnPage",
          value: function _getPointerPositionOnPage(event) {
            var scrollPosition = this._getViewportScrollPosition();

            var point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
            // to have a value, but Firefox in device emulation mode has a bug where both can be empty
            // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
            // throwing an error. The value returned here will be incorrect, but since this only
            // breaks inside a developer tool and the value is only used for secondary information,
            // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
            event.touches[0] || event.changedTouches[0] || {
              pageX: 0,
              pageY: 0
            } : event;
            var x = point.pageX - scrollPosition.left;
            var y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
            // coordinate system

            if (this._ownerSVGElement) {
              var svgMatrix = this._ownerSVGElement.getScreenCTM();

              if (svgMatrix) {
                var svgPoint = this._ownerSVGElement.createSVGPoint();

                svgPoint.x = x;
                svgPoint.y = y;
                return svgPoint.matrixTransform(svgMatrix.inverse());
              }
            }

            return {
              x: x,
              y: y
            };
          }
          /** Gets the pointer position on the page, accounting for any position constraints. */

        }, {
          key: "_getConstrainedPointerPosition",
          value: function _getConstrainedPointerPosition(point) {
            var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

            var _ref17 = this.constrainPosition ? this.constrainPosition(point, this) : point,
                x = _ref17.x,
                y = _ref17.y;

            if (this.lockAxis === 'x' || dropContainerLock === 'x') {
              y = this._pickupPositionOnPage.y;
            } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
              x = this._pickupPositionOnPage.x;
            }

            if (this._boundaryRect) {
              var _this$_pickupPosition = this._pickupPositionInElement,
                  pickupX = _this$_pickupPosition.x,
                  pickupY = _this$_pickupPosition.y;
              var boundaryRect = this._boundaryRect;
              var previewRect = this._previewRect;
              var minY = boundaryRect.top + pickupY;
              var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
              var minX = boundaryRect.left + pickupX;
              var maxX = boundaryRect.right - (previewRect.width - pickupX);
              x = clamp(x, minX, maxX);
              y = clamp(y, minY, maxY);
            }

            return {
              x: x,
              y: y
            };
          }
          /** Updates the current drag delta, based on the user's current pointer position on the page. */

        }, {
          key: "_updatePointerDirectionDelta",
          value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
            var x = pointerPositionOnPage.x,
                y = pointerPositionOnPage.y;
            var delta = this._pointerDirectionDelta;
            var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

            var changeX = Math.abs(x - positionSinceLastChange.x);
            var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
            // to change for every pixel, otherwise anything that depends on it can look erratic.
            // To make the delta more consistent, we track how much the user has moved since the last
            // delta change and we only update it after it has reached a certain threshold.

            if (changeX > this._config.pointerDirectionChangeThreshold) {
              delta.x = x > positionSinceLastChange.x ? 1 : -1;
              positionSinceLastChange.x = x;
            }

            if (changeY > this._config.pointerDirectionChangeThreshold) {
              delta.y = y > positionSinceLastChange.y ? 1 : -1;
              positionSinceLastChange.y = y;
            }

            return delta;
          }
          /** Toggles the native drag interactions, based on how many handles are registered. */

        }, {
          key: "_toggleNativeDragInteractions",
          value: function _toggleNativeDragInteractions() {
            if (!this._rootElement || !this._handles) {
              return;
            }

            var shouldEnable = this._handles.length > 0 || !this.isDragging();

            if (shouldEnable !== this._nativeInteractionsEnabled) {
              this._nativeInteractionsEnabled = shouldEnable;
              toggleNativeDragInteractions(this._rootElement, shouldEnable);
            }
          }
          /** Removes the manually-added event listeners from the root element. */

        }, {
          key: "_removeRootElementListeners",
          value: function _removeRootElementListeners(element) {
            element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
            element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
          }
          /**
           * Applies a `transform` to the root element, taking into account any existing transforms on it.
           * @param x New transform value along the X axis.
           * @param y New transform value along the Y axis.
           */

        }, {
          key: "_applyRootElementTransform",
          value: function _applyRootElementTransform(x, y) {
            var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
            // we don't want our own transforms to stack on top of each other.

            if (this._initialTransform == null) {
              this._initialTransform = this._rootElement.style.transform || '';
            } // Preserve the previous `transform` value, if there was one. Note that we apply our own
            // transform before the user's, because things like rotation can affect which direction
            // the element will be translated towards.


            this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
          }
          /**
           * Gets the distance that the user has dragged during the current drag sequence.
           * @param currentPosition Current position of the user's pointer.
           */

        }, {
          key: "_getDragDistance",
          value: function _getDragDistance(currentPosition) {
            var pickupPosition = this._pickupPositionOnPage;

            if (pickupPosition) {
              return {
                x: currentPosition.x - pickupPosition.x,
                y: currentPosition.y - pickupPosition.y
              };
            }

            return {
              x: 0,
              y: 0
            };
          }
          /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */

        }, {
          key: "_cleanupCachedDimensions",
          value: function _cleanupCachedDimensions() {
            this._boundaryRect = this._previewRect = undefined;

            this._parentPositions.clear();
          }
          /**
           * Checks whether the element is still inside its boundary after the viewport has been resized.
           * If not, the position is adjusted so that the element fits again.
           */

        }, {
          key: "_containInsideBoundaryOnResize",
          value: function _containInsideBoundaryOnResize() {
            var _this$_passiveTransfo = this._passiveTransform,
                x = _this$_passiveTransfo.x,
                y = _this$_passiveTransfo.y;

            if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
              return;
            }

            var boundaryRect = this._boundaryElement.getBoundingClientRect();

            var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
            // different tab). Don't do anything in this case so we don't clear the user's position.


            if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
              return;
            }

            var leftOverflow = boundaryRect.left - elementRect.left;
            var rightOverflow = elementRect.right - boundaryRect.right;
            var topOverflow = boundaryRect.top - elementRect.top;
            var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
            // do much to make it fit so we just anchor it to the left.

            if (boundaryRect.width > elementRect.width) {
              if (leftOverflow > 0) {
                x += leftOverflow;
              }

              if (rightOverflow > 0) {
                x -= rightOverflow;
              }
            } else {
              x = 0;
            } // If the element has become taller than the boundary, we can't
            // do much to make it fit so we just anchor it to the top.


            if (boundaryRect.height > elementRect.height) {
              if (topOverflow > 0) {
                y += topOverflow;
              }

              if (bottomOverflow > 0) {
                y -= bottomOverflow;
              }
            } else {
              y = 0;
            }

            if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
              this.setFreeDragPosition({
                y: y,
                x: x
              });
            }
          }
          /** Gets the drag start delay, based on the event type. */

        }, {
          key: "_getDragStartDelay",
          value: function _getDragStartDelay(event) {
            var value = this.dragStartDelay;

            if (typeof value === 'number') {
              return value;
            } else if (isTouchEvent(event)) {
              return value.touch;
            }

            return value ? value.mouse : 0;
          }
          /** Updates the internal state of the draggable element when scrolling has occurred. */

        }, {
          key: "_updateOnScroll",
          value: function _updateOnScroll(event) {
            var scrollDifference = this._parentPositions.handleScroll(event);

            if (scrollDifference) {
              var target = event.target; // ClientRect dimensions are based on the scroll position of the page and its parent node so
              // we have to update the cached boundary ClientRect if the user has scrolled. Check for
              // the `document` specifically since IE doesn't support `contains` on it.

              if (this._boundaryRect && (target === this._document || target !== this._boundaryElement && target.contains(this._boundaryElement))) {
                adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
              }

              this._pickupPositionOnPage.x += scrollDifference.left;
              this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
              // it isn't relative to the viewport like the preview inside a drop list.

              if (!this._dropContainer) {
                this._activeTransform.x -= scrollDifference.left;
                this._activeTransform.y -= scrollDifference.top;

                this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
              }
            }
          }
          /** Gets the scroll position of the viewport. */

        }, {
          key: "_getViewportScrollPosition",
          value: function _getViewportScrollPosition() {
            var cachedPosition = this._parentPositions.positions.get(this._document);

            return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
          }
        }]);

        return DragRef;
      }();
      /**
       * Gets a 3d `transform` that can be applied to an element.
       * @param x Desired position of the element along the X axis.
       * @param y Desired position of the element along the Y axis.
       */


      function getTransform(x, y) {
        // Round the transforms since some browsers will
        // blur the elements for sub-pixel transforms.
        return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
      }
      /** Creates a deep clone of an element. */


      function deepCloneNode(node) {
        var clone = node.cloneNode(true);
        var descendantsWithId = clone.querySelectorAll('[id]');
        var descendantCanvases = node.querySelectorAll('canvas'); // Remove the `id` to avoid having multiple elements with the same id on the page.

        clone.removeAttribute('id');

        for (var i = 0; i < descendantsWithId.length; i++) {
          descendantsWithId[i].removeAttribute('id');
        } // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
        // We match up the cloned canvas to their sources using their index in the DOM.


        if (descendantCanvases.length) {
          var cloneCanvases = clone.querySelectorAll('canvas');

          for (var _i5 = 0; _i5 < descendantCanvases.length; _i5++) {
            var correspondingCloneContext = cloneCanvases[_i5].getContext('2d');

            if (correspondingCloneContext) {
              // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
              // We can't do much about it so just ignore the error.
              try {
                correspondingCloneContext.drawImage(descendantCanvases[_i5], 0, 0);
              } catch (_a) {}
            }
          }
        }

        return clone;
      }
      /** Clamps a value between a minimum and a maximum. */


      function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
      /**
       * Helper to remove a node from the DOM and to do all the necessary null checks.
       * @param node Node to be removed.
       */


      function removeNode(node) {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
      /** Determines whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the element into which the drag preview should be inserted. */


      function getPreviewInsertionPoint(documentRef) {
        // We can't use the body if the user is in fullscreen mode,
        // because the preview will render under the fullscreen element.
        // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
        return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
      }
      /**
       * Gets the root HTML element of an embedded view.
       * If the root is not an HTML element it gets wrapped in one.
       */


      function getRootNode(viewRef, _document) {
        var rootNodes = viewRef.rootNodes;

        if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
          return rootNodes[0];
        }

        var wrapper = _document.createElement('div');

        rootNodes.forEach(function (node) {
          return wrapper.appendChild(node);
        });
        return wrapper;
      }
      /**
       * Matches the target element's size to the source's size.
       * @param target Element that needs to be resized.
       * @param sourceRect Dimensions of the source element.
       */


      function matchElementSize(target, sourceRect) {
        target.style.width = "".concat(sourceRect.width, "px");
        target.style.height = "".concat(sourceRect.height, "px");
        target.style.transform = getTransform(sourceRect.left, sourceRect.top);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Moves an item one index in an array to another.
       * @param array Array in which to move the item.
       * @param fromIndex Starting index of the item.
       * @param toIndex Index to which the item should be moved.
       */


      function moveItemInArray(array, fromIndex, toIndex) {
        var from = clamp$1(fromIndex, array.length - 1);
        var to = clamp$1(toIndex, array.length - 1);

        if (from === to) {
          return;
        }

        var target = array[from];
        var delta = to < from ? -1 : 1;

        for (var i = from; i !== to; i += delta) {
          array[i] = array[i + delta];
        }

        array[to] = target;
      }
      /**
       * Moves an item from one array to another.
       * @param currentArray Array from which to transfer the item.
       * @param targetArray Array into which to put the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       */


      function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var from = clamp$1(currentIndex, currentArray.length - 1);
        var to = clamp$1(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
        }
      }
      /**
       * Copies an item from one array to another, leaving it in its
       * original position in current array.
       * @param currentArray Array from which to copy the item.
       * @param targetArray Array into which is copy the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       *
       */


      function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var to = clamp$1(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray[currentIndex]);
        }
      }
      /** Clamps a number between zero and a maximum. */


      function clamp$1(value, max) {
        return Math.max(0, Math.min(max, value));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Proximity, as a ratio to width/height, at which a
       * dragged item will affect the drop container.
       */


      var DROP_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
       * viewport. The value comes from trying it out manually until it feels right.
       */

      var SCROLL_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Number of pixels to scroll for each frame when auto-scrolling an element.
       * The value comes from trying it out manually until it feels right.
       */

      var AUTO_SCROLL_STEP = 2;
      /**
       * Reference to a drop list. Used to manipulate or dispose of the container.
       */

      var DropListRef = /*#__PURE__*/function () {
        function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
          var _this53 = this;

          _classCallCheck(this, DropListRef);

          this._dragDropRegistry = _dragDropRegistry;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          /** Whether starting a dragging sequence from this container is disabled. */

          this.disabled = false;
          /** Whether sorting items within the list is disabled. */

          this.sortingDisabled = false;
          /**
           * Whether auto-scrolling the view when the user
           * moves their pointer close to the edges is disabled.
           */

          this.autoScrollDisabled = false;
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Emits right before dragging has started. */


          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user drops an item inside the container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Whether an item in the list is being dragged. */

          this._isDragging = false;
          /** Cache of the dimensions of all the items inside the container. */

          this._itemPositions = [];
          /**
           * Keeps track of the item that was last swapped with the dragged item, as well as what direction
           * the pointer was moving in when the swap occured and whether the user's pointer continued to
           * overlap with the swapped item after the swapping occurred.
           */

          this._previousSwap = {
            drag: null,
            delta: 0,
            overlaps: false
          };
          /** Drop lists that are connected to the current one. */

          this._siblings = [];
          /** Direction in which the list is oriented. */

          this._orientation = 'vertical';
          /** Connected siblings that currently have a dragged item. */

          this._activeSiblings = new Set();
          /** Layout direction of the drop list. */

          this._direction = 'ltr';
          /** Subscription to the window being scrolled. */

          this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Vertical direction in which the list is currently scrolling. */

          this._verticalScrollDirection = 0
          /* NONE */
          ;
          /** Horizontal direction in which the list is currently scrolling. */

          this._horizontalScrollDirection = 0
          /* NONE */
          ;
          /** Used to signal to the current auto-scroll sequence when to stop. */

          this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

          this._cachedShadowRoot = null;
          /** Starts the interval that'll auto-scroll the element. */

          this._startScrollInterval = function () {
            _this53._stopScrolling();

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this53._stopScrollTimers)).subscribe(function () {
              var node = _this53._scrollNode;

              if (_this53._verticalScrollDirection === 1
              /* UP */
              ) {
                  incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                } else if (_this53._verticalScrollDirection === 2
              /* DOWN */
              ) {
                  incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }

              if (_this53._horizontalScrollDirection === 1
              /* LEFT */
              ) {
                  incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                } else if (_this53._horizontalScrollDirection === 2
              /* RIGHT */
              ) {
                  incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            });
          };

          this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
          this._document = _document;
          this.withScrollableParents([this.element]);

          _dragDropRegistry.registerDropContainer(this);

          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        }
        /** Removes the drop list functionality from the DOM element. */


        _createClass(DropListRef, [{
          key: "dispose",
          value: function dispose() {
            this._stopScrolling();

            this._stopScrollTimers.complete();

            this._viewportScrollSubscription.unsubscribe();

            this.beforeStarted.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();
            this.sorted.complete();

            this._activeSiblings.clear();

            this._scrollNode = null;

            this._parentPositions.clear();

            this._dragDropRegistry.removeDropContainer(this);
          }
          /** Whether an item from this list is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._isDragging;
          }
          /** Starts dragging an item. */

        }, {
          key: "start",
          value: function start() {
            var _this54 = this;

            var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
            this.beforeStarted.next();
            this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
            // scrolling. The browser seems to round the value based on the snapping points which means
            // that we can't increment/decrement the scroll position.

            this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
            styles.scrollSnapType = styles.msScrollSnapType = 'none';

            this._cacheItems();

            this._siblings.forEach(function (sibling) {
              return sibling._startReceiving(_this54);
            });

            this._viewportScrollSubscription.unsubscribe();

            this._listenToScrollEvents();
          }
          /**
           * Emits an event to indicate that the user moved an item into the container.
           * @param item Item that was moved into the container.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param index Index at which the item entered. If omitted, the container will try to figure it
           *   out automatically.
           */

        }, {
          key: "enter",
          value: function enter(item, pointerX, pointerY, index) {
            this.start(); // If sorting is disabled, we want the item to return to its starting
            // position if the user is returning it to its initial container.

            var newIndex;

            if (index == null) {
              newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

              if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
              }
            } else {
              newIndex = index;
            }

            var activeDraggables = this._activeDraggables;
            var currentIndex = activeDraggables.indexOf(item);
            var placeholder = item.getPlaceholderElement();
            var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
            // it means that we're trying to restore the item to its initial position. In this
            // case we should use the next item from the list as the reference.

            if (newPositionReference === item) {
              newPositionReference = activeDraggables[newIndex + 1];
            } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
            // into another container and back again), we have to ensure that it isn't duplicated.


            if (currentIndex > -1) {
              activeDraggables.splice(currentIndex, 1);
            } // Don't use items that are being dragged as a reference, because
            // their element has been moved down to the bottom of the body.


            if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
              var element = newPositionReference.getRootElement();
              element.parentElement.insertBefore(placeholder, element);
              activeDraggables.splice(newIndex, 0, item);
            } else if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
              var reference = activeDraggables[0].getRootElement();
              reference.parentNode.insertBefore(placeholder, reference);
              activeDraggables.unshift(item);
            } else {
              Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).appendChild(placeholder);
              activeDraggables.push(item);
            } // The transform needs to be cleared so it doesn't throw off the measurements.


            placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
            // but we need to refresh them since the amount of items has changed and also parent rects.

            this._cacheItemPositions();

            this._cacheParentPositions();

            this.entered.next({
              item: item,
              container: this,
              currentIndex: this.getItemIndex(item)
            });
          }
          /**
           * Removes an item from the container after it was dragged into another container by the user.
           * @param item Item that was dragged out.
           */

        }, {
          key: "exit",
          value: function exit(item) {
            this._reset();

            this.exited.next({
              item: item,
              container: this
            });
          }
          /**
           * Drops an item into this container.
           * @param item Item being dropped into the container.
           * @param currentIndex Index at which the item should be inserted.
           * @param previousContainer Container from which the item got dragged in.
           * @param isPointerOverContainer Whether the user's pointer was over the
           *    container when the item was dropped.
           * @param distance Distance the user has dragged since the start of the dragging sequence.
           * @param previousIndex Index of the item when dragging started.
           *
           * @breaking-change 11.0.0 `previousIndex` parameter to become required.
           */

        }, {
          key: "drop",
          value: function drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
            this._reset(); // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.


            if (previousIndex == null) {
              previousIndex = previousContainer.getItemIndex(item);
            }

            this.dropped.next({
              item: item,
              currentIndex: currentIndex,
              previousIndex: previousIndex,
              container: this,
              previousContainer: previousContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });
          }
          /**
           * Sets the draggable items that are a part of this list.
           * @param items Items that are a part of this list.
           */

        }, {
          key: "withItems",
          value: function withItems(items) {
            var _this55 = this;

            var previousItems = this._draggables;
            this._draggables = items;
            items.forEach(function (item) {
              return item._withDropContainer(_this55);
            });

            if (this.isDragging()) {
              var draggedItems = previousItems.filter(function (item) {
                return item.isDragging();
              }); // If all of the items being dragged were removed
              // from the list, abort the current drag sequence.

              if (draggedItems.every(function (item) {
                return items.indexOf(item) === -1;
              })) {
                this._reset();
              } else {
                this._cacheItems();
              }
            }

            return this;
          }
          /** Sets the layout direction of the drop list. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /**
           * Sets the containers that are connected to this one. When two or more containers are
           * connected, the user will be allowed to transfer items between them.
           * @param connectedTo Other containers that the current containers should be connected to.
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(_connectedTo) {
            this._siblings = _connectedTo.slice();
            return this;
          }
          /**
           * Sets the orientation of the container.
           * @param orientation New orientation for the container.
           */

        }, {
          key: "withOrientation",
          value: function withOrientation(orientation) {
            this._orientation = orientation;
            return this;
          }
          /**
           * Sets which parent elements are can be scrolled while the user is dragging.
           * @param elements Elements that can be scrolled.
           */

        }, {
          key: "withScrollableParents",
          value: function withScrollableParents(elements) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // We always allow the current element to be scrollable
            // so we need to ensure that it's in the array.

            this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(_toConsumableArray(elements)) : elements.slice();
            return this;
          }
          /** Gets the scrollable parents that are registered with this drop container. */

        }, {
          key: "getScrollableParents",
          value: function getScrollableParents() {
            return this._scrollableElements;
          }
          /**
           * Figures out the index of an item in the container.
           * @param item Item whose index should be determined.
           */

        }, {
          key: "getItemIndex",
          value: function getItemIndex(item) {
            if (!this._isDragging) {
              return this._draggables.indexOf(item);
            } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
            // The rest of the logic still stands no matter what orientation we're in, however
            // we need to invert the array when determining the index.


            var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
            return findIndex(items, function (currentItem) {
              return currentItem.drag === item;
            });
          }
          /**
           * Whether the list is able to receive the item that
           * is currently being dragged inside a connected drop list.
           */

        }, {
          key: "isReceiving",
          value: function isReceiving() {
            return this._activeSiblings.size > 0;
          }
          /**
           * Sorts an item inside the container based on its position.
           * @param item Item to be sorted.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param pointerDelta Direction in which the pointer is moving along each axis.
           */

        }, {
          key: "_sortItem",
          value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
            // Don't sort the item if sorting is disabled or it's out of range.
            if (this.sortingDisabled || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
              return;
            }

            var siblings = this._itemPositions;

            var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

            if (newIndex === -1 && siblings.length > 0) {
              return;
            }

            var isHorizontal = this._orientation === 'horizontal';
            var currentIndex = findIndex(siblings, function (currentItem) {
              return currentItem.drag === item;
            });
            var siblingAtNewPosition = siblings[newIndex];
            var currentPosition = siblings[currentIndex].clientRect;
            var newPosition = siblingAtNewPosition.clientRect;
            var delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

            var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


            var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
            // We use this to check whether an item has been moved as a result of the sorting.


            var oldOrder = siblings.slice(); // Shuffle the array in place.

            moveItemInArray(siblings, currentIndex, newIndex);
            this.sorted.next({
              previousIndex: currentIndex,
              currentIndex: newIndex,
              container: this,
              item: item
            });
            siblings.forEach(function (sibling, index) {
              // Don't do anything if the position hasn't changed.
              if (oldOrder[index] === sibling) {
                return;
              }

              var isDraggedItem = sibling.drag === item;
              var offset = isDraggedItem ? itemOffset : siblingOffset;
              var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

              sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
              // client rects to reflect their new position, as well as swap their positions in the cache.
              // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
              // elements may be mid-animation which will give us a wrong result.

              if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
                adjustClientRect(sibling.clientRect, 0, offset);
              } else {
                elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
                adjustClientRect(sibling.clientRect, offset, 0);
              }
            }); // Note that it's important that we do this after the client rects have been adjusted.

            this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
            this._previousSwap.drag = siblingAtNewPosition.drag;
            this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
          }
          /**
           * Checks whether the user's pointer is close to the edges of either the
           * viewport or the drop list and starts the auto-scroll sequence.
           * @param pointerX User's pointer position along the x axis.
           * @param pointerY User's pointer position along the y axis.
           */

        }, {
          key: "_startScrollingIfNecessary",
          value: function _startScrollingIfNecessary(pointerX, pointerY) {
            var _this56 = this;

            if (this.autoScrollDisabled) {
              return;
            }

            var scrollNode;
            var verticalScrollDirection = 0
            /* NONE */
            ;
            var horizontalScrollDirection = 0
            /* NONE */
            ; // Check whether we should start scrolling any of the parent containers.

            this._parentPositions.positions.forEach(function (position, element) {
              // We have special handling for the `document` below. Also this would be
              // nicer with a  for...of loop, but it requires changing a compiler flag.
              if (element === _this56._document || !position.clientRect || scrollNode) {
                return;
              }

              if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                var _getElementScrollDire = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

                var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

                verticalScrollDirection = _getElementScrollDire2[0];
                horizontalScrollDirection = _getElementScrollDire2[1];

                if (verticalScrollDirection || horizontalScrollDirection) {
                  scrollNode = element;
                }
              }
            }); // Otherwise check if we can start scrolling the viewport.


            if (!verticalScrollDirection && !horizontalScrollDirection) {
              var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                  width = _this$_viewportRuler$.width,
                  height = _this$_viewportRuler$.height;

              var clientRect = {
                width: width,
                height: height,
                top: 0,
                right: width,
                bottom: height,
                left: 0
              };
              verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
              horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
              scrollNode = window;
            }

            if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
              this._verticalScrollDirection = verticalScrollDirection;
              this._horizontalScrollDirection = horizontalScrollDirection;
              this._scrollNode = scrollNode;

              if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
              } else {
                this._stopScrolling();
              }
            }
          }
          /** Stops any currently-running auto-scroll sequences. */

        }, {
          key: "_stopScrolling",
          value: function _stopScrolling() {
            this._stopScrollTimers.next();
          }
          /** Caches the positions of the configured scrollable parents. */

        }, {
          key: "_cacheParentPositions",
          value: function _cacheParentPositions() {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);

            this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
            // so we can take advantage of the cached `ClientRect`.


            this._clientRect = this._parentPositions.positions.get(element).clientRect;
          }
          /** Refreshes the position cache of the items and sibling containers. */

        }, {
          key: "_cacheItemPositions",
          value: function _cacheItemPositions() {
            var isHorizontal = this._orientation === 'horizontal';
            this._itemPositions = this._activeDraggables.map(function (drag) {
              var elementToMeasure = drag.getVisibleElement();
              return {
                drag: drag,
                offset: 0,
                clientRect: getMutableClientRect(elementToMeasure)
              };
            }).sort(function (a, b) {
              return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
            });
          }
          /** Resets the container to its initial state. */

        }, {
          key: "_reset",
          value: function _reset() {
            var _this57 = this;

            this._isDragging = false;
            var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
            styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

            this._activeDraggables.forEach(function (item) {
              var rootElement = item.getRootElement();

              if (rootElement) {
                rootElement.style.transform = '';
              }
            });

            this._siblings.forEach(function (sibling) {
              return sibling._stopReceiving(_this57);
            });

            this._activeDraggables = [];
            this._itemPositions = [];
            this._previousSwap.drag = null;
            this._previousSwap.delta = 0;
            this._previousSwap.overlaps = false;

            this._stopScrolling();

            this._viewportScrollSubscription.unsubscribe();

            this._parentPositions.clear();
          }
          /**
           * Gets the offset in pixels by which the items that aren't being dragged should be moved.
           * @param currentIndex Index of the item currently being dragged.
           * @param siblings All of the items in the list.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getSiblingOffsetPx",
          value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var currentPosition = siblings[currentIndex].clientRect;
            var immediateSibling = siblings[currentIndex + delta * -1];
            var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

            if (immediateSibling) {
              var start = isHorizontal ? 'left' : 'top';
              var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
              // after it in the direction in which the user is dragging, or vice versa. We add it to the
              // offset in order to push the element to where it will be when it's inline and is influenced
              // by the `margin` of its siblings.

              if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
              } else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
              }
            }

            return siblingOffset;
          }
          /**
           * Gets the offset in pixels by which the item that is being dragged should be moved.
           * @param currentPosition Current position of the item.
           * @param newPosition Position of the item where the current item should be moved.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getItemOffsetPx",
          value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

            if (delta === -1) {
              itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
            }

            return itemOffset;
          }
          /**
           * Checks if pointer is entering in the first position
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           */

        }, {
          key: "_shouldEnterAsFirstChild",
          value: function _shouldEnterAsFirstChild(pointerX, pointerY) {
            if (!this._activeDraggables.length) {
              return false;
            }

            var itemPositions = this._itemPositions;
            var isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
            // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

            var reversed = itemPositions[0].drag !== this._activeDraggables[0];

            if (reversed) {
              var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
              return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
            } else {
              var firstItemRect = itemPositions[0].clientRect;
              return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
            }
          }
          /**
           * Gets the index of an item in the drop container, based on the position of the user's pointer.
           * @param item Item that is being sorted.
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           * @param delta Direction in which the user is moving their pointer.
           */

        }, {
          key: "_getItemIndexFromPointerPosition",
          value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
            var _this58 = this;

            var isHorizontal = this._orientation === 'horizontal';
            return findIndex(this._itemPositions, function (_ref18, _, array) {
              var drag = _ref18.drag,
                  clientRect = _ref18.clientRect;

              if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
              }

              if (delta) {
                var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
                // the item after we made the swap, and they didn't change the direction in which they're
                // dragging, we don't consider it a direction swap.

                if (drag === _this58._previousSwap.drag && _this58._previousSwap.overlaps && direction === _this58._previousSwap.delta) {
                  return false;
                }
              }

              return isHorizontal ? // Round these down since most browsers report client rects with
              // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
              pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
            });
          }
          /** Caches the current items in the list and their positions. */

        }, {
          key: "_cacheItems",
          value: function _cacheItems() {
            this._activeDraggables = this._draggables.slice();

            this._cacheItemPositions();

            this._cacheParentPositions();
          }
          /**
           * Checks whether the user's pointer is positioned over the container.
           * @param x Pointer position along the X axis.
           * @param y Pointer position along the Y axis.
           */

        }, {
          key: "_isOverContainer",
          value: function _isOverContainer(x, y) {
            return isInsideClientRect(this._clientRect, x, y);
          }
          /**
           * Figures out whether an item should be moved into a sibling
           * drop container, based on its current position.
           * @param item Drag item that is being moved.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_getSiblingContainerFromPosition",
          value: function _getSiblingContainerFromPosition(item, x, y) {
            return this._siblings.find(function (sibling) {
              return sibling._canReceive(item, x, y);
            });
          }
          /**
           * Checks whether the drop list can receive the passed-in item.
           * @param item Item that is being dragged into the list.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_canReceive",
          value: function _canReceive(item, x, y) {
            if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
              return false;
            }

            var elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
            // the client rect is probably scrolled out of the view.


            if (!elementFromPoint) {
              return false;
            }

            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
            // hovering, doesn't give us any information on whether the element has been scrolled
            // out of the view or whether it's overlapping with other containers. This means that
            // we could end up transferring the item into a container that's invisible or is positioned
            // below another one. We use the result from `elementFromPoint` to get the top-most element
            // at the pointer position and to find whether it's one of the intersecting drop containers.

            return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
          }
          /**
           * Called by one of the connected drop lists when a dragging sequence has started.
           * @param sibling Sibling in which dragging has started.
           */

        }, {
          key: "_startReceiving",
          value: function _startReceiving(sibling) {
            var activeSiblings = this._activeSiblings;

            if (!activeSiblings.has(sibling)) {
              activeSiblings.add(sibling);

              this._cacheParentPositions();

              this._listenToScrollEvents();
            }
          }
          /**
           * Called by a connected drop list when dragging has stopped.
           * @param sibling Sibling whose dragging has stopped.
           */

        }, {
          key: "_stopReceiving",
          value: function _stopReceiving(sibling) {
            this._activeSiblings["delete"](sibling);

            this._viewportScrollSubscription.unsubscribe();
          }
          /**
           * Starts listening to scroll events on the viewport.
           * Used for updating the internal state of the list.
           */

        }, {
          key: "_listenToScrollEvents",
          value: function _listenToScrollEvents() {
            var _this59 = this;

            this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(function (event) {
              if (_this59.isDragging()) {
                var scrollDifference = _this59._parentPositions.handleScroll(event);

                if (scrollDifference) {
                  // Since we know the amount that the user has scrolled we can shift all of the
                  // client rectangles ourselves. This is cheaper than re-measuring everything and
                  // we can avoid inconsistent behavior where we might be measuring the element before
                  // its position has changed.
                  _this59._itemPositions.forEach(function (_ref19) {
                    var clientRect = _ref19.clientRect;
                    adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                  }); // We need two loops for this, because we want all of the cached
                  // positions to be up-to-date before we re-sort the item.


                  _this59._itemPositions.forEach(function (_ref20) {
                    var drag = _ref20.drag;

                    if (_this59._dragDropRegistry.isDragging(drag)) {
                      // We need to re-sort the item manually, because the pointer move
                      // events won't be dispatched while the user is scrolling.
                      drag._sortFromLastPointerPosition();
                    }
                  });
                }
              } else if (_this59.isReceiving()) {
                _this59._cacheParentPositions();
              }
            });
          }
          /**
           * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
           * than saving it in property directly on init, because we want to resolve it as late as possible
           * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
           * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
           */

        }, {
          key: "_getShadowRoot",
          value: function _getShadowRoot() {
            if (!this._cachedShadowRoot) {
              var shadowRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
              this._cachedShadowRoot = shadowRoot || this._document;
            }

            return this._cachedShadowRoot;
          }
        }]);

        return DropListRef;
      }();
      /**
       * Finds the index of an item that matches a predicate function. Used as an equivalent
       * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
       * @param array Array in which to look for matches.
       * @param predicate Function used to determine whether an item is a match.
       */


      function findIndex(array, predicate) {
        for (var i = 0; i < array.length; i++) {
          if (predicate(array[i], i, array)) {
            return i;
          }
        }

        return -1;
      }
      /**
       * Increments the vertical scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementVerticalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(0, amount);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollTop += amount;
        }
      }
      /**
       * Increments the horizontal scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementHorizontalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(amount, 0);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollLeft += amount;
        }
      }
      /**
       * Gets whether the vertical auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getVerticalScrollDirection(clientRect, pointerY) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            height = clientRect.height;
        var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
          return 1
          /* UP */
          ;
        } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
          return 2
          /* DOWN */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets whether the horizontal auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerX Position of the user's pointer along the x axis.
       */


      function getHorizontalScrollDirection(clientRect, pointerX) {
        var left = clientRect.left,
            right = clientRect.right,
            width = clientRect.width;
        var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
          return 1
          /* LEFT */
          ;
        } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
          return 2
          /* RIGHT */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets the directions in which an element node should be scrolled,
       * assuming that the user's pointer is already within it scrollable region.
       * @param element Element for which we should calculate the scroll direction.
       * @param clientRect Bounding client rectangle of the element.
       * @param pointerX Position of the user's pointer along the x axis.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
        var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
        var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
        var verticalScrollDirection = 0
        /* NONE */
        ;
        var horizontalScrollDirection = 0
        /* NONE */
        ; // Note that we here we do some extra checks for whether the element is actually scrollable in
        // a certain direction and we only assign the scroll direction if it is. We do this so that we
        // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
        // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

        if (computedVertical) {
          var scrollTop = element.scrollTop;

          if (computedVertical === 1
          /* UP */
          ) {
              if (scrollTop > 0) {
                verticalScrollDirection = 1
                /* UP */
                ;
              }
            } else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2
            /* DOWN */
            ;
          }
        }

        if (computedHorizontal) {
          var scrollLeft = element.scrollLeft;

          if (computedHorizontal === 1
          /* LEFT */
          ) {
              if (scrollLeft > 0) {
                horizontalScrollDirection = 1
                /* LEFT */
                ;
              }
            } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2
            /* RIGHT */
            ;
          }
        }

        return [verticalScrollDirection, horizontalScrollDirection];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event options that can be used to bind an active, capturing event. */


      var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: false,
        capture: true
      });
      /**
       * Service that keeps track of all the drag item and drop container
       * instances, and manages global event listeners on the `document`.
       * @docs-private
       */
      // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
      // to avoid circular imports. If we were to reference them here, importing the registry into the
      // classes that are registering themselves will introduce a circular import.

      var DragDropRegistry = /*#__PURE__*/function () {
        function DragDropRegistry(_ngZone, _document) {
          var _this60 = this;

          _classCallCheck(this, DragDropRegistry);

          this._ngZone = _ngZone;
          /** Registered drop container instances. */

          this._dropInstances = new Set();
          /** Registered drag item instances. */

          this._dragInstances = new Set();
          /** Drag item instances that are currently being dragged. */

          this._activeDragInstances = new Set();
          /** Keeps track of the event listeners that we've bound to the `document`. */

          this._globalListeners = new Map();
          /**
           * Emits the `touchmove` or `mousemove` events that are dispatched
           * while the user is dragging a drag item instance.
           */

          this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits the `touchend` or `mouseup` events that are dispatched
           * while the user is dragging a drag item instance.
           */

          this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the viewport has been scrolled while the user is dragging an item. */

          this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Event listener that will prevent the default browser action while the user is dragging.
           * @param event Event whose default action should be prevented.
           */

          this._preventDefaultWhileDragging = function (event) {
            if (_this60._activeDragInstances.size) {
              event.preventDefault();
            }
          };

          this._document = _document;
        }
        /** Adds a drop container to the registry. */


        _createClass(DragDropRegistry, [{
          key: "registerDropContainer",
          value: function registerDropContainer(drop) {
            if (!this._dropInstances.has(drop)) {
              this._dropInstances.add(drop);
            }
          }
          /** Adds a drag item instance to the registry. */

        }, {
          key: "registerDragItem",
          value: function registerDragItem(drag) {
            var _this61 = this;

            this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
            // won't preventDefault on a dynamically-added `touchmove` listener.
            // See https://bugs.webkit.org/show_bug.cgi?id=184250.


            if (this._dragInstances.size === 1) {
              this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this61._document.addEventListener('touchmove', _this61._preventDefaultWhileDragging, activeCapturingEventOptions);
              });
            }
          }
          /** Removes a drop container from the registry. */

        }, {
          key: "removeDropContainer",
          value: function removeDropContainer(drop) {
            this._dropInstances["delete"](drop);
          }
          /** Removes a drag item instance from the registry. */

        }, {
          key: "removeDragItem",
          value: function removeDragItem(drag) {
            this._dragInstances["delete"](drag);

            this.stopDragging(drag);

            if (this._dragInstances.size === 0) {
              this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }
          }
          /**
           * Starts the dragging sequence for a drag instance.
           * @param drag Drag instance which is being dragged.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "startDragging",
          value: function startDragging(drag, event) {
            var _this62 = this;

            // Do not process the same drag twice to avoid memory leaks and redundant listeners
            if (this._activeDragInstances.has(drag)) {
              return;
            }

            this._activeDragInstances.add(drag);

            if (this._activeDragInstances.size === 1) {
              var _isTouchEvent = event.type.startsWith('touch');

              var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
              var upEvent = _isTouchEvent ? 'touchend' : 'mouseup'; // We explicitly bind __active__ listeners here, because newer browsers will default to
              // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
              // use `preventDefault` to prevent the page from scrolling while the user is dragging.

              this._globalListeners.set(moveEvent, {
                handler: function handler(e) {
                  return _this62.pointerMove.next(e);
                },
                options: activeCapturingEventOptions
              }).set(upEvent, {
                handler: function handler(e) {
                  return _this62.pointerUp.next(e);
                },
                options: true
              }).set('scroll', {
                handler: function handler(e) {
                  return _this62.scroll.next(e);
                },
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
              }) // Preventing the default action on `mousemove` isn't enough to disable text selection
              // on Safari so we need to prevent the selection event as well. Alternatively this can
              // be done by setting `user-select: none` on the `body`, however it has causes a style
              // recalculation which can be expensive on pages with a lot of elements.
              .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
              });

              this._ngZone.runOutsideAngular(function () {
                _this62._globalListeners.forEach(function (config, name) {
                  _this62._document.addEventListener(name, config.handler, config.options);
                });
              });
            }
          }
          /** Stops dragging a drag item instance. */

        }, {
          key: "stopDragging",
          value: function stopDragging(drag) {
            this._activeDragInstances["delete"](drag);

            if (this._activeDragInstances.size === 0) {
              this._clearGlobalListeners();
            }
          }
          /** Gets whether a drag item instance is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging(drag) {
            return this._activeDragInstances.has(drag);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this63 = this;

            this._dragInstances.forEach(function (instance) {
              return _this63.removeDragItem(instance);
            });

            this._dropInstances.forEach(function (instance) {
              return _this63.removeDropContainer(instance);
            });

            this._clearGlobalListeners();

            this.pointerMove.complete();
            this.pointerUp.complete();
          }
          /** Clears out the global event listeners from the `document`. */

        }, {
          key: "_clearGlobalListeners",
          value: function _clearGlobalListeners() {
            var _this64 = this;

            this._globalListeners.forEach(function (config, name) {
              _this64._document.removeEventListener(name, config.handler, config.options);
            });

            this._globalListeners.clear();
          }
        }]);

        return DragDropRegistry;
      }();

      DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
        return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DragDropRegistry_Factory() {
          return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: DragDropRegistry,
        providedIn: "root"
      });

      DragDropRegistry.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default configuration to be used when creating a `DragRef`. */


      var DEFAULT_CONFIG = {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
      /**
       * Service that allows for drag-and-drop functionality to be attached to DOM elements.
       */

      var DragDrop = /*#__PURE__*/function () {
        function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
          _classCallCheck(this, DragDrop);

          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
        }
        /**
         * Turns an element into a draggable item.
         * @param element Element to which to attach the dragging functionality.
         * @param config Object used to configure the dragging behavior.
         */


        _createClass(DragDrop, [{
          key: "createDrag",
          value: function createDrag(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
            return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
          }
          /**
           * Turns an element into a drop list.
           * @param element Element to which to attach the drop list functionality.
           */

        }, {
          key: "createDropList",
          value: function createDropList(element) {
            return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
          }
        }]);

        return DragDrop;
      }();

      DragDrop.ɵfac = function DragDrop_Factory(t) {
        return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry));
      };

      DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DragDrop_Factory() {
          return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry));
        },
        token: DragDrop,
        providedIn: "root"
      });

      DragDrop.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
        }, {
          type: DragDropRegistry
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
          }, {
            type: DragDropRegistry
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
       * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
       * to avoid circular imports.
       * @docs-private
       */


      var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Handle that can be used to drag and CdkDrag instance. */

      var CdkDragHandle = /*#__PURE__*/function () {
        function CdkDragHandle(element, parentDrag) {
          _classCallCheck(this, CdkDragHandle);

          this.element = element;
          /** Emits when the state of the handle has changed. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this._disabled = false;
          this._parentDrag = parentDrag;
          toggleNativeDragInteractions(element.nativeElement, false);
        }
        /** Whether starting to drag through this handle is disabled. */


        _createClass(CdkDragHandle, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._stateChanges.next(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }]);

        return CdkDragHandle;
      }();

      CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
        return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 8));
      };

      CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragHandle,
        selectors: [["", "cdkDragHandle", ""]],
        hostAttrs: [1, "cdk-drag-handle"],
        inputs: {
          disabled: ["cdkDragHandleDisabled", "disabled"]
        }
      });

      CdkDragHandle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_PARENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      CdkDragHandle.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragHandleDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDragHandle]',
            host: {
              'class': 'cdk-drag-handle'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_PARENT]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragHandleDisabled']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Element that will be used as a template for the placeholder of a CdkDrag when
       * it is being dragged. The placeholder is displayed in place of the element being dragged.
       */


      var CdkDragPlaceholder = function CdkDragPlaceholder(templateRef) {
        _classCallCheck(this, CdkDragPlaceholder);

        this.templateRef = templateRef;
      };

      CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
        return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragPlaceholder,
        selectors: [["ng-template", "cdkDragPlaceholder", ""]],
        inputs: {
          data: "data"
        }
      });

      CdkDragPlaceholder.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CdkDragPlaceholder.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[cdkDragPlaceholder]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Element that will be used as a template for the preview
       * of a CdkDrag when it is being dragged.
       */


      var CdkDragPreview = /*#__PURE__*/function () {
        function CdkDragPreview(templateRef) {
          _classCallCheck(this, CdkDragPreview);

          this.templateRef = templateRef;
          this._matchSize = false;
        }
        /** Whether the preview should preserve the same size as the item that is being dragged. */


        _createClass(CdkDragPreview, [{
          key: "matchSize",
          get: function get() {
            return this._matchSize;
          },
          set: function set(value) {
            this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkDragPreview;
      }();

      CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
        return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragPreview,
        selectors: [["ng-template", "cdkDragPreview", ""]],
        inputs: {
          matchSize: "matchSize",
          data: "data"
        }
      });

      CdkDragPreview.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CdkDragPreview.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        matchSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[cdkDragPreview]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to configure the
       * behavior of the drag&drop-related components.
       */


      var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that is used to provide a CdkDropList instance to CdkDrag.
       * Used for avoiding circular imports.
       */

      var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DROP_LIST');
      /** Element that can be moved inside a CdkDropList container. */

      var CdkDrag = /*#__PURE__*/function () {
        function CdkDrag(
        /** Element that the draggable is attached to. */
        element,
        /** Droppable container that the draggable is a part of. */
        dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
          var _this65 = this;

          _classCallCheck(this, CdkDrag);

          this.element = element;
          this.dropContainer = dropContainer;
          this._document = _document;
          this._ngZone = _ngZone;
          this._viewContainerRef = _viewContainerRef;
          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user starts dragging the item. */

          this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            var subscription = _this65._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (movedEvent) {
              return {
                source: _this65,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
              };
            })).subscribe(observer);

            return function () {
              subscription.unsubscribe();
            };
          });
          this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
          });
          this._dragRef.data = this;

          if (config) {
            this._assignDefaults(config);
          } // Note that usually the container is assigned when the drop list is picks up the item, but in
          // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
          // where there are no items on the first change detection pass, but the items get picked up as
          // soon as the user triggers another pass by dragging. This is a problem, because the item would
          // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
          // is too late since the two modes save different kinds of information. We work around it by
          // assigning the drop container both from here and the list.


          if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);

            dropContainer.addItem(this);
          }

          this._syncInputs(this._dragRef);

          this._handleEvents(this._dragRef);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(CdkDrag, [{
          key: "disabled",
          get: function get() {
            return this._disabled || this.dropContainer && this.dropContainer.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
          }
          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */

        }, {
          key: "getPlaceholderElement",
          value: function getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement();
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._dragRef.getRootElement();
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._dragRef.reset();
          }
          /**
           * Gets the pixel coordinates of the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this66 = this;

            // We need to wait for the zone to stabilize, in order for the reference
            // element to be in the proper place in the DOM. This is mostly relevant
            // for draggable elements inside portals since they get stamped out in
            // their original DOM position and then they get transferred to the portal.
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this66._updateRootElement(); // Listen for any newly-added handles.


              _this66._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(_this66._handles), // Sync the new handles with the DragRef.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (handles) {
                var childHandleElements = handles.filter(function (handle) {
                  return handle._parentDrag === _this66;
                }).map(function (handle) {
                  return handle.element;
                });

                _this66._dragRef.withHandles(childHandleElements);
              }), // Listen if the state of any of the handles changes.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (handles) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(handles.map(function (item) {
                  return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this66._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                var dragRef = _this66._dragRef;
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
              });

              if (_this66.freeDragPosition) {
                _this66._dragRef.setFreeDragPosition(_this66.freeDragPosition);
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var rootSelectorChange = changes['rootElementSelector'];
            var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
            // handled in `ngAfterViewInit` where it needs to be deferred.

            if (rootSelectorChange && !rootSelectorChange.firstChange) {
              this._updateRootElement();
            } // Skip the first change since it's being handled in `ngAfterViewInit`.


            if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
              this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.dropContainer) {
              this.dropContainer.removeItem(this);
            }

            this._destroyed.next();

            this._destroyed.complete();

            this._dragRef.dispose();
          }
          /** Syncs the root element with the `DragRef`. */

        }, {
          key: "_updateRootElement",
          value: function _updateRootElement() {
            var element = this.element.nativeElement;
            var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

            if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
              throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
            }

            this._dragRef.withRootElement(rootElement || element);
          }
          /** Gets the boundary element, based on the `boundaryElement` value. */

        }, {
          key: "_getBoundaryElement",
          value: function _getBoundaryElement() {
            var boundary = this.boundaryElement;

            if (!boundary) {
              return null;
            }

            if (typeof boundary === 'string') {
              return getClosestMatchingAncestor(this.element.nativeElement, boundary);
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);

            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
              throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
            }

            return element;
          }
          /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */

        }, {
          key: "_syncInputs",
          value: function _syncInputs(ref) {
            var _this67 = this;

            ref.beforeStarted.subscribe(function () {
              if (!ref.isDragging()) {
                var dir = _this67._dir;
                var dragStartDelay = _this67.dragStartDelay;
                var placeholder = _this67._placeholderTemplate ? {
                  template: _this67._placeholderTemplate.templateRef,
                  context: _this67._placeholderTemplate.data,
                  viewContainer: _this67._viewContainerRef
                } : null;
                var preview = _this67._previewTemplate ? {
                  template: _this67._previewTemplate.templateRef,
                  context: _this67._previewTemplate.data,
                  matchSize: _this67._previewTemplate.matchSize,
                  viewContainer: _this67._viewContainerRef
                } : null;
                ref.disabled = _this67.disabled;
                ref.lockAxis = _this67.lockAxis;
                ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = _this67.constrainPosition;
                ref.previewClass = _this67.previewClass;
                ref.withBoundaryElement(_this67._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

                if (dir) {
                  ref.withDirection(dir.value);
                }
              }
            });
          }
          /** Handles the events from the underlying `DragRef`. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this68 = this;

            ref.started.subscribe(function () {
              _this68.started.emit({
                source: _this68
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this68._changeDetectorRef.markForCheck();
            });
            ref.released.subscribe(function () {
              _this68.released.emit({
                source: _this68
              });
            });
            ref.ended.subscribe(function (event) {
              _this68.ended.emit({
                source: _this68,
                distance: event.distance
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this68._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this68.entered.emit({
                container: event.container.data,
                item: _this68,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this68.exited.emit({
                container: event.container.data,
                item: _this68
              });
            });
            ref.dropped.subscribe(function (event) {
              _this68.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this68,
                distance: event.distance
              });
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                dragStartDelay = config.dragStartDelay,
                constrainPosition = config.constrainPosition,
                previewClass = config.previewClass,
                boundaryElement = config.boundaryElement,
                draggingDisabled = config.draggingDisabled,
                rootElementSelector = config.rootElementSelector;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.dragStartDelay = dragStartDelay || 0;

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }

            if (constrainPosition) {
              this.constrainPosition = constrainPosition;
            }

            if (previewClass) {
              this.previewClass = previewClass;
            }

            if (boundaryElement) {
              this.boundaryElement = boundaryElement;
            }

            if (rootElementSelector) {
              this.rootElementSelector = rootElementSelector;
            }
          }
        }]);

        return CdkDrag;
      }();

      CdkDrag.ɵfac = function CdkDrag_Factory(t) {
        return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDrag,
        selectors: [["", "cdkDrag", ""]],
        contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPreview, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPlaceholder, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragHandle, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
          }
        },
        hostAttrs: [1, "cdk-drag"],
        hostVars: 4,
        hostBindings: function CdkDrag_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
          }
        },
        inputs: {
          disabled: ["cdkDragDisabled", "disabled"],
          dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
          lockAxis: ["cdkDragLockAxis", "lockAxis"],
          constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
          previewClass: ["cdkDragPreviewClass", "previewClass"],
          boundaryElement: ["cdkDragBoundary", "boundaryElement"],
          rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
          data: ["cdkDragData", "data"],
          freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
        },
        outputs: {
          started: "cdkDragStarted",
          released: "cdkDragReleased",
          ended: "cdkDragEnded",
          entered: "cdkDragEntered",
          exited: "cdkDragExited",
          dropped: "cdkDragDropped",
          moved: "cdkDragMoved"
        },
        exportAs: ["cdkDrag"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PARENT,
          useExisting: CdkDrag
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      CdkDrag.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      CdkDrag.propDecorators = {
        _handles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CdkDragHandle, {
            descendants: true
          }]
        }],
        _previewTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CdkDragPreview]
        }],
        _placeholderTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CdkDragPlaceholder]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragData']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragLockAxis']
        }],
        rootElementSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragRootElement']
        }],
        boundaryElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragBoundary']
        }],
        dragStartDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragStartDelay']
        }],
        freeDragPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragFreeDragPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragDisabled']
        }],
        constrainPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragConstrainPosition']
        }],
        previewClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragPreviewClass']
        }],
        started: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragStarted']
        }],
        released: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragReleased']
        }],
        ended: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEnded']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragExited']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragDropped']
        }],
        moved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragMoved']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDrag]',
            exportAs: 'cdkDrag',
            host: {
              'class': 'cdk-drag',
              '[class.cdk-drag-disabled]': 'disabled',
              '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
            },
            providers: [{
              provide: CDK_DRAG_PARENT,
              useExisting: CdkDrag
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DROP_LIST]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_CONFIG]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragStarted']
          }],
          released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragReleased']
          }],
          ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEnded']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragExited']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragDropped']
          }],
          moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragMoved']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragDisabled']
          }],
          dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragStartDelay']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragLockAxis']
          }],
          constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragConstrainPosition']
          }],
          previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragPreviewClass']
          }],
          boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragBoundary']
          }],
          rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragRootElement']
          }],
          _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CdkDragHandle, {
              descendants: true
            }]
          }],
          _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkDragPreview]
          }],
          _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkDragPlaceholder]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragData']
          }],
          freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragFreeDragPosition']
          }]
        });
      })();
      /** Gets the closest ancestor of an element that matches a selector. */


      function getClosestMatchingAncestor(element, selector) {
        var currentElement = element.parentElement;

        while (currentElement) {
          // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
          if (currentElement.matches ? currentElement.matches(selector) : currentElement.msMatchesSelector(selector)) {
            return currentElement;
          }

          currentElement = currentElement.parentElement;
        }

        return null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
       * elements that are placed inside a `cdkDropListGroup` will be connected to each other
       * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
       * from `cdkDropList`.
       */


      var CdkDropListGroup = /*#__PURE__*/function () {
        function CdkDropListGroup() {
          _classCallCheck(this, CdkDropListGroup);

          /** Drop lists registered inside the group. */
          this._items = new Set();
          this._disabled = false;
        }
        /** Whether starting a dragging sequence from inside this group is disabled. */


        _createClass(CdkDropListGroup, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._items.clear();
          }
        }]);

        return CdkDropListGroup;
      }();

      CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
        return new (t || CdkDropListGroup)();
      };

      CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDropListGroup,
        selectors: [["", "cdkDropListGroup", ""]],
        inputs: {
          disabled: ["cdkDropListGroupDisabled", "disabled"]
        },
        exportAs: ["cdkDropListGroup"]
      });
      CdkDropListGroup.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListGroupDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDropListGroup]',
            exportAs: 'cdkDropListGroup'
          }]
        }], function () {
          return [];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListGroupDisabled']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique ids for drop zones. */


      var _uniqueIdCounter = 0;
      var ɵ0 = undefined;
      /** Container that wraps a set of draggable items. */

      var CdkDropList = /*#__PURE__*/function () {
        function CdkDropList(
        /** Element that the drop list is attached to. */
        element, dragDrop, _changeDetectorRef, _dir, _group,
        /**
         * @deprecated _scrollDispatcher parameter to become required.
         * @breaking-change 11.0.0
         */
        _scrollDispatcher, config) {
          var _this69 = this;

          _classCallCheck(this, CdkDropList);

          this.element = element;
          this._changeDetectorRef = _changeDetectorRef;
          this._dir = _dir;
          this._group = _group;
          this._scrollDispatcher = _scrollDispatcher;
          /** Emits when the list has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Other draggable containers that this container is connected to and into which the
           * container's items can be transferred. Can either be references to other drop containers,
           * or their unique IDs.
           */

          this.connectedTo = [];
          /**
           * Unique ID for the drop zone. Can be used as a reference
           * in the `connectedTo` of another `CdkDropList`.
           */

          this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Emits when the user drops an item inside the container. */


          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Keeps track of the items that are registered with this container. Historically we used to
           * do this with a `ContentChildren` query, however queries don't handle transplanted views very
           * well which means that we can't handle cases like dragging the headers of a `mat-table`
           * correctly. What we do instead is to have the items register themselves with the container
           * and then we sort them based on their position in the DOM.
           */

          this._unsortedItems = new Set();
          this._dropListRef = dragDrop.createDropList(element);
          this._dropListRef.data = this;

          if (config) {
            this._assignDefaults(config);
          }

          this._dropListRef.enterPredicate = function (drag, drop) {
            return _this69.enterPredicate(drag.data, drop.data);
          };

          this._setupInputSyncSubscription(this._dropListRef);

          this._handleEvents(this._dropListRef);

          CdkDropList._dropLists.push(this);

          if (_group) {
            _group._items.add(this);
          }
        }
        /** Whether starting a dragging sequence from this container is disabled. */


        _createClass(CdkDropList, [{
          key: "disabled",
          get: function get() {
            return this._disabled || !!this._group && this._group.disabled;
          },
          set: function set(value) {
            // Usually we sync the directive and ref state right before dragging starts, in order to have
            // a single point of failure and to avoid having to use setters for everything. `disabled` is
            // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
            // the user in a disabled state, so we also need to sync it as it's being set.
            this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** Registers an items with the drop list. */

        }, {
          key: "addItem",
          value: function addItem(item) {
            this._unsortedItems.add(item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Removes an item from the drop list. */

        }, {
          key: "removeItem",
          value: function removeItem(item) {
            this._unsortedItems["delete"](item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Gets the registered items in the list, sorted by their position in the DOM. */

        }, {
          key: "getSortedItems",
          value: function getSortedItems() {
            return Array.from(this._unsortedItems).sort(function (a, b) {
              var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
              // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
              // tslint:disable-next-line:no-bitwise


              return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var index = CdkDropList._dropLists.indexOf(this);

            if (index > -1) {
              CdkDropList._dropLists.splice(index, 1);
            }

            if (this._group) {
              this._group._items["delete"](this);
            }

            this._unsortedItems.clear();

            this._dropListRef.dispose();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */

        }, {
          key: "_setupInputSyncSubscription",
          value: function _setupInputSyncSubscription(ref) {
            var _this70 = this;

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(function (value) {
                return ref.withDirection(value);
              });
            }

            ref.beforeStarted.subscribe(function () {
              var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(_this70.connectedTo).map(function (drop) {
                return typeof drop === 'string' ? CdkDropList._dropLists.find(function (list) {
                  return list.id === drop;
                }) : drop;
              });

              if (_this70._group) {
                _this70._group._items.forEach(function (drop) {
                  if (siblings.indexOf(drop) === -1) {
                    siblings.push(drop);
                  }
                });
              } // Note that we resolve the scrollable parents here so that we delay the resolution
              // as long as possible, ensuring that the element is in its final place in the DOM.
              // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.


              if (!_this70._scrollableParentsResolved && _this70._scrollDispatcher) {
                var scrollableParents = _this70._scrollDispatcher.getAncestorScrollContainers(_this70.element).map(function (scrollable) {
                  return scrollable.getElementRef().nativeElement;
                });

                _this70._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.


                _this70._scrollableParentsResolved = true;
              }

              ref.disabled = _this70.disabled;
              ref.lockAxis = _this70.lockAxis;
              ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this70.sortingDisabled);
              ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this70.autoScrollDisabled);
              ref.connectedTo(siblings.filter(function (drop) {
                return drop && drop !== _this70;
              }).map(function (list) {
                return list._dropListRef;
              })).withOrientation(_this70.orientation);
            });
          }
          /** Handles events from the underlying DropListRef. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this71 = this;

            ref.beforeStarted.subscribe(function () {
              _this71._syncItemsWithRef();

              _this71._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this71.entered.emit({
                container: _this71,
                item: event.item.data,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this71.exited.emit({
                container: _this71,
                item: event.item.data
              });

              _this71._changeDetectorRef.markForCheck();
            });
            ref.sorted.subscribe(function (event) {
              _this71.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this71,
                item: event.item.data
              });
            });
            ref.dropped.subscribe(function (event) {
              _this71.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
              }); // Mark for check since all of these events run outside of change
              // detection and we're not guaranteed for something else to have triggered it.


              _this71._changeDetectorRef.markForCheck();
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                draggingDisabled = config.draggingDisabled,
                sortingDisabled = config.sortingDisabled,
                listAutoScrollDisabled = config.listAutoScrollDisabled,
                listOrientation = config.listOrientation;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
            this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
            this.orientation = listOrientation || 'vertical';

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }
          }
          /** Syncs up the registered drag items with underlying drop list ref. */

        }, {
          key: "_syncItemsWithRef",
          value: function _syncItemsWithRef() {
            this._dropListRef.withItems(this.getSortedItems().map(function (item) {
              return item._dragRef;
            }));
          }
        }]);

        return CdkDropList;
      }();

      CdkDropList.ɵfac = function CdkDropList_Factory(t) {
        return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkDropListGroup, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
      };

      CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDropList,
        selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
        hostAttrs: [1, "cdk-drop-list"],
        hostVars: 7,
        hostBindings: function CdkDropList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
          }
        },
        inputs: {
          connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
          id: "id",
          enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
          disabled: ["cdkDropListDisabled", "disabled"],
          sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
          autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
          orientation: ["cdkDropListOrientation", "orientation"],
          lockAxis: ["cdkDropListLockAxis", "lockAxis"],
          data: ["cdkDropListData", "data"]
        },
        outputs: {
          dropped: "cdkDropListDropped",
          entered: "cdkDropListEntered",
          exited: "cdkDropListExited",
          sorted: "cdkDropListSorted"
        },
        exportAs: ["cdkDropList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CdkDropListGroup,
          useValue: ɵ0
        }, {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }])]
      });
      /** Keeps track of the drop lists that are currently on the page. */

      CdkDropList._dropLists = [];

      CdkDropList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: CdkDropListGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }];
      };

      CdkDropList.propDecorators = {
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListConnectedTo']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListData']
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListOrientation']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListLockAxis']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListDisabled']
        }],
        sortingDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListSortingDisabled']
        }],
        enterPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListEnterPredicate']
        }],
        autoScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListAutoScrollDisabled']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListDropped']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListExited']
        }],
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListSorted']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDropList], cdk-drop-list',
            exportAs: 'cdkDropList',
            providers: [// Prevent child drop lists from picking up the same group as their parent.
            {
              provide: CdkDropListGroup,
              useValue: ɵ0
            }, {
              provide: CDK_DROP_LIST,
              useExisting: CdkDropList
            }],
            host: {
              'class': 'cdk-drop-list',
              '[id]': 'id',
              '[class.cdk-drop-list-disabled]': 'disabled',
              '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
              '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: CdkDropListGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_CONFIG]
            }]
          }];
        }, {
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListConnectedTo']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListEnterPredicate']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListDropped']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListExited']
          }],
          sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListSorted']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListDisabled']
          }],
          sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortingDisabled']
          }],
          autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollDisabled']
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListOrientation']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListLockAxis']
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListData']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DragDropModule = function DragDropModule() {
        _classCallCheck(this, DragDropModule);
      };

      DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DragDropModule
      });
      DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DragDropModule_Factory(t) {
          return new (t || DragDropModule)();
        },
        providers: [DragDrop],
        imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, {
          declarations: function declarations() {
            return [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
            providers: [DragDrop]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=drag-drop.js.map

      /***/

    },

    /***/
    "5Fsz":
    /*!************************************************************************************!*\
      !*** ./src/app/components/delivery/delivery-summery/delivery-summery.component.ts ***!
      \************************************************************************************/

    /*! exports provided: DeliverySummeryComponent */

    /***/
    function Fsz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliverySummeryComponent", function () {
        return DeliverySummeryComponent;
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DeliverySummeryComponent = /*#__PURE__*/function () {
        function DeliverySummeryComponent(orderService, route) {
          _classCallCheck(this, DeliverySummeryComponent);

          this.orderService = orderService;
          this.route = route;
          this.allOrders = [];
          this.deliveredOrders = [];
          this.deliveredOrdersThisMonth = [];
          this.thisMonthOrders = [];
        }

        _createClass(DeliverySummeryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this72 = this;

            this.clientId = this.route.snapshot.queryParams["id"];

            if (this.clientId) {
              console.log(this.clientId);
            }

            this.orderService.getOrdersByDelivery(this.clientId).subscribe(function (orders) {
              _this72.allOrders = orders;
              _this72.deliveredOrders = _this72.allOrders.filter(function (item) {
                return item.status == "4";
              });
              _this72.allPayments = _this72.totalPrice();
              _this72.curdate = "01-" + (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
              _this72.thisMonthOrders = _this72.allOrders.filter(function (item) {
                return item.date > _this72.curdate;
              });
              _this72.deliveredOrdersThisMonth = _this72.thisMonthOrders.filter(function (item) {
                return item.status == "4";
              });
              _this72.thisMonthPayments = _this72.totalPriceThisMonth();
              console.log(orders);
            });
            console.log(this.curdate);
          }
        }, {
          key: "totalPrice",
          value: function totalPrice() {
            var total = 0;

            var _iterator12 = _createForOfIteratorHelper(this.deliveredOrders),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var data = _step12.value;
                total += data.totalAmount;
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            return total;
          }
        }, {
          key: "totalPriceThisMonth",
          value: function totalPriceThisMonth() {
            var total = 0;

            var _iterator13 = _createForOfIteratorHelper(this.deliveredOrdersThisMonth),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var data = _step13.value;
                total += data.totalAmount;
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            return total;
          }
        }]);

        return DeliverySummeryComponent;
      }();

      DeliverySummeryComponent.ɵfac = function DeliverySummeryComponent_Factory(t) {
        return new (t || DeliverySummeryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      DeliverySummeryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeliverySummeryComponent,
        selectors: [["app-delivery-summery"]],
        decls: 67,
        vars: 38,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-3", "col-md-6", "xl-50"], [1, "card", "o-hidden", "widget-cards"], [1, "bg-warning", "card-body"], [1, "media", "static-top-widget", "row"], [1, "icons-widgets", "col-4"], [1, "align-self-center", "text-center"], [1, "font-warning", 3, "icon"], [1, "media-body", "col-6"], [1, "counter", 3, "CountTo", "from", "duration"], [1, "bg-secondary", "card-body"], [1, "font-secondary", 3, "icon"], [1, "media-body", "col-8"], [1, "m-0"], [1, "mb-0"], [1, "counter"], [1, "bg-primary", "card-body"], [1, "bg-danger", "card-body"]],
        template: function DeliverySummeryComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-feather-icons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, "All Orders"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.allOrders == null ? null : ctx.allOrders.length)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.allOrders == null ? null : ctx.allOrders.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 22, "All Payments"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 24, ctx.allPayments, "1.2-2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 27, "EGP"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 29, "This month orders"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.thisMonthOrders.length)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.thisMonthOrders.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 31, "This month payments"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](64, 33, ctx.thisMonthPayments, "1.2-2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 36, "EGP"), " ");
          }
        },
        directives: [_shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconsComponent"], angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeS1zdW1tZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeliverySummeryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delivery-summery',
            templateUrl: './delivery-summery.component.html',
            styleUrls: ['./delivery-summery.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "66t9":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/delivery/view-delivery-boy/view-delivery-boy.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ViewDeliveryBoyComponent */

    /***/
    function t9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewDeliveryBoyComponent", function () {
        return ViewDeliveryBoyComponent;
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


      var src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/delivery.service */
      "zZG3");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _delivery_summery_delivery_summery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../delivery-summery/delivery-summery.component */
      "5Fsz");
      /* harmony import */


      var _delivery_orders_delivery_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../delivery-orders/delivery-orders.component */
      "BQOp");
      /* harmony import */


      var _delivery_accounts_delivery_accounts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../delivery-accounts/delivery-accounts.component */
      "EaDx");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_assets_pipes_town_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/assets/pipes/town.pipe */
      "I/cK");
      /* harmony import */


      var src_assets_pipes_state_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/assets/pipes/state.pipe */
      "1qAI");

      function ViewDeliveryBoyComponent_a_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Active"));
        }
      }

      function ViewDeliveryBoyComponent_a_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Not Active"));
        }
      }

      function ViewDeliveryBoyComponent_a_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Blocked"));
        }
      }

      var ViewDeliveryBoyComponent = /*#__PURE__*/function () {
        function ViewDeliveryBoyComponent(route, deliveryService, router, dataService) {
          _classCallCheck(this, ViewDeliveryBoyComponent);

          this.route = route;
          this.deliveryService = deliveryService;
          this.router = router;
          this.dataService = dataService;
          this.towns = [];
          this.states = [];
        }

        _createClass(ViewDeliveryBoyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.queryParams["id"];
            console.log(this.id);
            this.getCustomer(this.id);
            this.getAccounting(this.id);
            this.getFillters();
          }
        }, {
          key: "getFillters",
          value: function getFillters() {
            var _this73 = this;

            this.dataService.getTowns().subscribe(function (towns) {
              _this73.towns = towns;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this74 = this;

            this.dataService.getStates(this.dBoy.state).subscribe(function (states) {
              _this74.states = states;
            });
          }
        }, {
          key: "getCustomer",
          value: function getCustomer(id) {
            var _this75 = this;

            this.deliveryService.getDB(this.id).subscribe(function (user) {
              _this75.dBoy = user;

              _this75.getStates();

              _this75.idPhoto1 = _this75.dBoy.idPhoto1 || 'assets/images/pro3/1.jpg';
              _this75.idPhoto2 = _this75.dBoy.idPhoto2 || 'assets/images/pro3/1.jpg';
              _this75.mLPhoto = _this75.dBoy.mLPhoto || 'assets/images/pro3/1.jpg';
              _this75.dLPhoto = _this75.dBoy.dLPhoto || 'assets/images/pro3/1.jpg';
              _this75.fishPhoto = _this75.dBoy.fishPhoto || 'assets/images/pro3/1.jpg';
            });
          }
        }, {
          key: "getAccounting",
          value: function getAccounting(id) {
            var _this76 = this;

            this.deliveryService.getAllDeliveryBoyAccounting(id).subscribe(function (res) {
              console.log(res);
              _this76.dbAcoount = res[0];
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(id) {
            this.router.navigate(['/delivery/add-delivery-boy'], {
              queryParams: {
                id: id
              }
            });
          }
        }, {
          key: "onActive",
          value: function onActive(id) {
            this.deliveryService.updateDeliveryStatus(this.id, "1");
          }
        }, {
          key: "onBlock",
          value: function onBlock(id) {
            if (this.dBoy.block) {
              this.deliveryService.updateDeliveryBlock(this.id, false);
            } else {
              this.deliveryService.updateDeliveryBlock(this.id, true);
            }
          }
        }, {
          key: "onCollect",
          value: function onCollect() {
            this.deliveryService.updateDeliveryCollect(this.id, this.dbAcoount.id, true).subscribe(function (i) {
              $("#collect").modal("hide");
            });
          }
        }]);

        return ViewDeliveryBoyComponent;
      }();

      ViewDeliveryBoyComponent.ɵfac = function ViewDeliveryBoyComponent_Factory(t) {
        return new (t || ViewDeliveryBoyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
      };

      ViewDeliveryBoyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewDeliveryBoyComponent,
        selectors: [["app-view-delivery-boy"]],
        decls: 133,
        vars: 109,
        consts: [[1, "content", "container-fluid"], [1, "card", "mb-0"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "profile-view"], [1, "col-md-4"], [1, "profile-info-left"], [1, "order-detail"], ["target", "_blank", 3, "href"], ["style", "color: rgb(84, 167, 2);", 4, "ngIf"], ["style", "color: rgb(78, 76, 76);", 4, "ngIf"], ["style", "color: rgb(240, 20, 4);", 4, "ngIf"], ["type", "button", 1, "btn", "btn-custom", 2, "margin-top", "10px", "width", "150px", 3, "click"], [1, "card", "tab-box"], [1, "row", "user-tabs"], [1, "col-lg-12", "col-md-12", "col-sm-12", "line-tabs"], [1, "nav", "nav-tabs", "nav-tabs-bottom"], [1, "nav-item"], ["href", "#profile", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#orders", "data-toggle", "tab", 1, "nav-link"], ["href", "#gifts", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "profile", 1, "pro-overview", "tab-pane", "fade", "show", "active"], ["id", "orders", 1, "tab-pane", "fade"], ["id", "gifts", 1, "tab-pane", "fade"], ["id", "schadul", 1, "tab-pane", "fade"], ["id", "collect", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header", "text-center"], [1, "text-center"], [1, "modal-btn", "delete-action"], [1, "col-6"], [1, "btn", "btn-primary", "continue-btn", 3, "click"], ["data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], [2, "color", "rgb(84, 167, 2)"], [2, "color", "rgb(78, 76, 76)"], [2, "color", "rgb(240, 20, 4)"]],
        template: function ViewDeliveryBoyComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "townPipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "statePipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ViewDeliveryBoyComponent_a_71_Template, 3, 3, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ViewDeliveryBoyComponent_a_72_Template, 3, 3, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ViewDeliveryBoyComponent_a_73_Template, 3, 3, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDeliveryBoyComponent_Template_button_click_75_listener() {
              return ctx.onEdit(ctx.dBoy.phone);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDeliveryBoyComponent_Template_button_click_79_listener() {
              return ctx.onActive(ctx.dBoy.phone);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDeliveryBoyComponent_Template_button_click_83_listener() {
              return ctx.onBlock(ctx.dBoy.phone);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "translate");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "app-delivery-summery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "app-delivery-orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "app-delivery-accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](121, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDeliveryBoyComponent_Template_a_click_126_listener() {
              return ctx.onCollect();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](128, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](132, "translate");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 45, "Name :"), " ", ctx.dBoy == null ? null : ctx.dBoy.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 47, "Phone :"), " ", ctx.dBoy == null ? null : ctx.dBoy.phone, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 49, "Email :"), " ", ctx.dBoy == null ? null : ctx.dBoy.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 51, "Town :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 53, ctx.towns, ctx.dBoy == null ? null : ctx.dBoy.town), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 56, "State :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 58, ctx.states, ctx.dBoy == null ? null : ctx.dBoy.state), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 61, "Address :"), " ", ctx.dBoy == null ? null : ctx.dBoy.address, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 63, "Account Type :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 65, ctx.dBoy == null ? null : ctx.dBoy.aType), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 67, "Vehicle Type :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 69, ctx.dBoy == null ? null : ctx.dBoy.vType), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 71, "ID Number :"), " ", ctx.dBoy == null ? null : ctx.dBoy.idNumber, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.dBoy == null ? null : ctx.dBoy.idPhoto1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 73, "ID Image 1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.dBoy == null ? null : ctx.dBoy.idPhoto2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 75, "ID Image 2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.dBoy == null ? null : ctx.dBoy.dLPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 77, "Driving License Image"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.dBoy == null ? null : ctx.dBoy.mLPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 79, "Vehicle License Image"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.dBoy == null ? null : ctx.dBoy.fishPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 81, "Feash Image Type"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 83, "Status :"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.dBoy == null ? null : ctx.dBoy.block) && (ctx.dBoy == null ? null : ctx.dBoy.status) == "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.dBoy == null ? null : ctx.dBoy.block) && (ctx.dBoy == null ? null : ctx.dBoy.status) == "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dBoy == null ? null : ctx.dBoy.block);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 85, "Edit"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 87, "Activeate"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 89, "Block"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 91, "Summary"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 93, "Orders"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 95, "Accounts"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](117, 97, "Collect"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 99, "you want to Collect Amount"), " ", ctx.dbAcoount == null ? null : ctx.dbAcoount.total, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](121, 101, "EGP"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](122, 103, "?"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](128, 105, "Collect"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](132, 107, "Cancel"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _delivery_summery_delivery_summery_component__WEBPACK_IMPORTED_MODULE_5__["DeliverySummeryComponent"], _delivery_orders_delivery_orders_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryOrdersComponent"], _delivery_accounts_delivery_accounts_component__WEBPACK_IMPORTED_MODULE_7__["DeliveryAccountsComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], src_assets_pipes_town_pipe__WEBPACK_IMPORTED_MODULE_9__["TownPipe"], src_assets_pipes_state_pipe__WEBPACK_IMPORTED_MODULE_10__["StatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRlbGl2ZXJ5LWJveS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewDeliveryBoyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-delivery-boy',
            templateUrl: './view-delivery-boy.component.html',
            styleUrls: ['./view-delivery-boy.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "A6hy":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/delivery/delivery-hour-report/delivery-hour-report.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: DeliveryHourReportComponent */

    /***/
    function A6hy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryHourReportComponent", function () {
        return DeliveryHourReportComponent;
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

      function DeliveryHourReportComponent_tr_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "customStatus");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, order_r2 == null ? null : order_r2.orderId));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.orderId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, order_r2 == null ? null : order_r2.status)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 11, order_r2 == null ? null : order_r2.shipping, "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 14, order_r2 == null ? null : order_r2.totalAmount, "1.2-2"));
        }
      }

      function DeliveryHourReportComponent_tr_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data found");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var DeliveryHourReportComponent = /*#__PURE__*/function () {
        function DeliveryHourReportComponent(modalService, orderService, _domSanitizer, router, route) {
          _classCallCheck(this, DeliveryHourReportComponent);

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

        _createClass(DeliveryHourReportComponent, [{
          key: "open",
          value: function open(content) {
            var _this77 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this77.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this77.closeResult = "Dismissed ".concat(_this77.getDismissReason(reason));
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
            this.dtOptions.language.url = "src/assets/i18n/datatable.ar.json";
            this.clientId = this.route.snapshot.queryParams["id"];
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this78 = this;

            this.orderService.getOrdersByDelivery(this.clientId).subscribe(function (res) {
              if (_this78.isDtInitialized) {
                _this78.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this78.dtTrigger.next();
                });
              } else {
                _this78.isDtInitialized = true;

                _this78.dtTrigger.next();
              }

              _this78.orders = res;
              console.log(_this78.orders); // this.dtTrigger.next();

              _this78.rows = _this78.orders;
              _this78.srch = _toConsumableArray(_this78.rows);
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
        }, {
          key: "objectValues",
          value: function objectValues(obj) {
            return Object.values(obj);
          }
        }]);

        return DeliveryHourReportComponent;
      }();

      DeliveryHourReportComponent.ɵfac = function DeliveryHourReportComponent_Factory(t) {
        return new (t || DeliveryHourReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      DeliveryHourReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeliveryHourReportComponent,
        selectors: [["app-delivery-hour-report"]],
        viewQuery: function DeliveryHourReportComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 39,
        vars: 28,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLink", "/sales/view-order", 3, "queryParams"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function DeliveryHourReportComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DeliveryHourReportComponent_tr_37_Template, 18, 19, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, DeliveryHourReportComponent_tr_38_Template, 4, 0, "tr", 9);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 12, "Order ID"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 14, "Friday"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 16, "Saturday"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 18, "Sunday"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 20, "Monday"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 22, "Tuesday"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 24, "Wednesday"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 26, "Thursday"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders.length === 0);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], src_assets_pipes_custom_status_pipe__WEBPACK_IMPORTED_MODULE_9__["CustomStatus"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeS1ob3VyLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeliveryHourReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-delivery-hour-report',
            templateUrl: './delivery-hour-report.component.html',
            styleUrls: ['./delivery-hour-report.component.scss']
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
    "BQOp":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/delivery/delivery-orders/delivery-orders.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: DeliveryOrdersComponent */

    /***/
    function BQOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryOrdersComponent", function () {
        return DeliveryOrdersComponent;
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

      function DeliveryOrdersComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "customStatus");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, order_r2 == null ? null : order_r2.orderId));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.orderId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, order_r2 == null ? null : order_r2.status)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 11, order_r2 == null ? null : order_r2.shipping, "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 14, order_r2 == null ? null : order_r2.totalAmount, "1.2-2"));
        }
      }

      function DeliveryOrdersComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data found");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var DeliveryOrdersComponent = /*#__PURE__*/function () {
        function DeliveryOrdersComponent(modalService, orderService, _domSanitizer, router, route) {
          _classCallCheck(this, DeliveryOrdersComponent);

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

        _createClass(DeliveryOrdersComponent, [{
          key: "open",
          value: function open(content) {
            var _this79 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this79.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this79.closeResult = "Dismissed ".concat(_this79.getDismissReason(reason));
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
            this.dtOptions.language.url = "src/assets/i18n/datatable.ar.json";
            this.clientId = this.route.snapshot.queryParams["id"];
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this80 = this;

            this.orderService.getOrdersByDelivery(this.clientId).subscribe(function (res) {
              if (_this80.isDtInitialized) {
                _this80.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this80.dtTrigger.next();
                });
              } else {
                _this80.isDtInitialized = true;

                _this80.dtTrigger.next();
              }

              _this80.orders = res;
              console.log(_this80.orders); // this.dtTrigger.next();

              _this80.rows = _this80.orders;
              _this80.srch = _toConsumableArray(_this80.rows);
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

        return DeliveryOrdersComponent;
      }();

      DeliveryOrdersComponent.ɵfac = function DeliveryOrdersComponent_Factory(t) {
        return new (t || DeliveryOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      DeliveryOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeliveryOrdersComponent,
        selectors: [["app-delivery-orders"]],
        viewQuery: function DeliveryOrdersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 30,
        vars: 19,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLink", "/sales/view-order", 3, "queryParams"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function DeliveryOrdersComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DeliveryOrdersComponent_tr_28_Template, 18, 19, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DeliveryOrdersComponent_tr_29_Template, 4, 0, "tr", 9);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "Order ID"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, "Date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 13, "Status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 15, "Shipping"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 17, "Total"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders.length === 0);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], src_assets_pipes_custom_status_pipe__WEBPACK_IMPORTED_MODULE_9__["CustomStatus"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeS1vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeliveryOrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-delivery-orders',
            templateUrl: './delivery-orders.component.html',
            styleUrls: ['./delivery-orders.component.scss']
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
    "D7uf":
    /*!**************************************************************************!*\
      !*** ./src/app/components/delivery/zone-orders/zone-orders.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ZoneOrdersComponent */

    /***/
    function D7uf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoneOrdersComponent", function () {
        return ZoneOrdersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var src_app_shared_data_issue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/data/issue */
      "XeAc");
      /* harmony import */


      var src_app_shared_data_utils_issue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/data/utils/issue */
      "DI9T");
      /* harmony import */


      var src_app_shared_service_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/project.service */
      "dfv2");
      /* harmony import */


      var src_assets_filter_filter_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/assets/filter/filter.query */
      "hO/v");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _issue_card_issue_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../issue-card/issue-card.component */
      "VBUu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["app-zone-orders", ""];

      function ZoneOrdersComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 5);
        }

        if (rf & 2) {
          var order_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("order", order_r1)("cdkDragData", order_r1);
        }
      }

      var ZoneOrdersComponent = /*#__PURE__*/function () {
        function ZoneOrdersComponent(_projectService, _filterQuery) {
          _classCallCheck(this, ZoneOrdersComponent);

          this._projectService = _projectService;
          this._filterQuery = _filterQuery;
          this.IssueStatusDisplay = src_app_shared_data_issue__WEBPACK_IMPORTED_MODULE_5__["IssueStatusDisplay"];
        }

        _createClass(ZoneOrdersComponent, [{
          key: "ordersCount",
          get: function get() {
            return this.orders.length;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._projectService.getProject();
          }
        }, {
          key: "drop",
          value: function drop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.previousIndex, event.currentIndex);
          }
        }, {
          key: "filterIssues",
          value: function filterIssues(order, filter) {
            var onlyMyIssue = filter.onlyMyIssue,
                ignoreResolved = filter.ignoreResolved,
                searchTerm = filter.searchTerm,
                userIds = filter.userIds;
            return order.filter(function (order) {
              var isMatchTerm = searchTerm ? src_app_shared_data_utils_issue__WEBPACK_IMPORTED_MODULE_6__["IssueUtil"].searchString(order.orderId, searchTerm) : true; // const isIncludeUsers = userIds.length
              //    ? order.userIds.some((userId) => userIds.includes(userId))
              // : true;
              //  const isMyIssue = onlyMyIssue
              //  ? this.currentUserId && order.userIds.includes(this.currentUserId)
              //  : true;

              var isIgnoreResolved = ignoreResolved ? order.status !== src_app_shared_data_issue__WEBPACK_IMPORTED_MODULE_5__["IssueStatus"].DONE : true;
              return isMatchTerm; //&& isIncludeUsers && isMyIssue && isIgnoreResolved;
            });
          }
        }, {
          key: "isDateWithinThreeDaysFromNow",
          value: function isDateWithinThreeDaysFromNow(date) {
            var now = new Date();
            var inputDate = new Date(date);
            return date_fns__WEBPACK_IMPORTED_MODULE_4__["isAfter"](inputDate, date_fns__WEBPACK_IMPORTED_MODULE_4__["subDays"](now, 3));
          }
        }, {
          key: "updateListPosition",
          value: function updateListPosition(newList) {
            newList.forEach(function (order, idx) {
              var newIssueWithNewPosition = Object.assign(Object.assign({}, order), {
                listPosition: idx + 1
              }); //this._projectService.updateIssue(newIssueWithNewPosition);
            });
          }
        }]);

        return ZoneOrdersComponent;
      }();

      ZoneOrdersComponent.ɵfac = function ZoneOrdersComponent_Factory(t) {
        return new (t || ZoneOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_filter_filter_query__WEBPACK_IMPORTED_MODULE_8__["FilterQuery"]));
      };

      ZoneOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ZoneOrdersComponent,
        selectors: [["", "app-zone-orders", ""]],
        inputs: {
          status: "status",
          currentUserId: "currentUserId",
          orders: "orders"
        },
        attrs: _c0,
        decls: 8,
        vars: 7,
        consts: [[1, "status-list"], [1, "px-3", "pb-4", "pt-3", "uppercase", "text-center", "text-title", "truncate"], [1, "lowercase", "text-13"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "id", "cdkDropListDropped"], ["issue-card", "", "cdkDragLockAxis", "y", "cdkDrag", "", 3, "order", "cdkDragData", 4, "ngFor", "ngForOf"], ["issue-card", "", "cdkDragLockAxis", "y", "cdkDrag", "", 3, "order", "cdkDragData"]],
        template: function ZoneOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function ZoneOrdersComponent_Template_div_cdkDropListDropped_6_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ZoneOrdersComponent_div_7_Template, 1, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.IssueStatusDisplay[ctx.status]), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ordersCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.orders)("id", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
          }
        },
        directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _issue_card_issue_card_component__WEBPACK_IMPORTED_MODULE_10__["IssueCardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b25lLW9yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2
      });
      ZoneOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()], ZoneOrdersComponent);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ZoneOrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[app-zone-orders]',
            templateUrl: './zone-orders.component.html',
            styleUrls: ['./zone-orders.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: src_app_shared_service_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]
          }, {
            type: src_assets_filter_filter_query__WEBPACK_IMPORTED_MODULE_8__["FilterQuery"]
          }];
        }, {
          status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          currentUserId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          orders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "DI9T":
    /*!********************************************!*\
      !*** ./src/app/shared/data/utils/issue.ts ***!
      \********************************************/

    /*! exports provided: IssueUtil */

    /***/
    function DI9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssueUtil", function () {
        return IssueUtil;
      });
      /* harmony import */


      var _issue_priority_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../issue-priority-icon */
      "vSBb");

      var IssueUtil = /*#__PURE__*/function () {
        function IssueUtil() {
          _classCallCheck(this, IssueUtil);
        }

        _createClass(IssueUtil, null, [{
          key: "getIssueTypeIcon",
          value: function getIssueTypeIcon(orderType) {
            return orderType === null || orderType === void 0 ? void 0 : orderType.toLowerCase();
          }
        }, {
          key: "getIssuePriorityIcon",
          value: function getIssuePriorityIcon(issuePriority) {
            return new _issue_priority_icon__WEBPACK_IMPORTED_MODULE_0__["IssuePriorityIcon"](issuePriority);
          }
        }, {
          key: "getRandomId",
          value: function getRandomId() {
            return "".concat(Math.ceil(Math.random() * 8000));
          }
        }, {
          key: "searchString",
          value: function searchString(str, _searchString) {
            str = str !== null && str !== void 0 ? str : '';
            _searchString = _searchString !== null && _searchString !== void 0 ? _searchString : '';
            return str.trim().toLowerCase().includes(_searchString.trim().toLowerCase());
          }
        }]);

        return IssueUtil;
      }();
      /***/

    },

    /***/
    "EaDx":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/delivery/delivery-accounts/delivery-accounts.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: DeliveryAccountsComponent */

    /***/
    function EaDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryAccountsComponent", function () {
        return DeliveryAccountsComponent;
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


      var src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/delivery.service */
      "zZG3");
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

      function DeliveryAccountsComponent_tr_22_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not Collected"));
        }
      }

      function DeliveryAccountsComponent_tr_22_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Collected"));
        }
      }

      function DeliveryAccountsComponent_tr_22_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DeliveryAccountsComponent_tr_22_a_9_Template, 3, 3, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DeliveryAccountsComponent_tr_22_a_10_Template, 3, 3, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.orderCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, order_r2 == null ? null : order_r2.total, "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(order_r2 == null ? null : order_r2.closed));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r2 == null ? null : order_r2.closed);
        }
      }

      function DeliveryAccountsComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data found");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var DeliveryAccountsComponent = /*#__PURE__*/function () {
        function DeliveryAccountsComponent(modalService, deliveryService, _domSanitizer, router, route) {
          _classCallCheck(this, DeliveryAccountsComponent);

          this.modalService = modalService;
          this.deliveryService = deliveryService;
          this._domSanitizer = _domSanitizer;
          this.router = router;
          this.route = route;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.orders = [];
          this.companiesList = [];
          this.dbAcoounts = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US");
        }

        _createClass(DeliveryAccountsComponent, [{
          key: "open",
          value: function open(content) {
            var _this81 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this81.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this81.closeResult = "Dismissed ".concat(_this81.getDismissReason(reason));
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
            this.dtOptions.language.url = "src/assets/i18n/datatable.ar.json";
            this.clientId = this.route.snapshot.queryParams["id"];
            this.getDBoyes();
          }
        }, {
          key: "getDBoyes",
          value: function getDBoyes() {
            var _this82 = this;

            this.deliveryService.getAllDeliveryBoyAccounting(this.clientId).subscribe(function (res) {
              if (_this82.isDtInitialized) {
                _this82.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this82.dtTrigger.next();
                });
              } else {
                _this82.isDtInitialized = true;

                _this82.dtTrigger.next();
              }

              _this82.orders = res;
              _this82.rows = _this82.orders;
              _this82.srch = _toConsumableArray(_this82.rows);
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

        return DeliveryAccountsComponent;
      }();

      DeliveryAccountsComponent.ɵfac = function DeliveryAccountsComponent_Factory(t) {
        return new (t || DeliveryAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      DeliveryAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeliveryAccountsComponent,
        selectors: [["app-delivery-accounts"]],
        viewQuery: function DeliveryAccountsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 24,
        vars: 13,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "color: crimson;", 4, "ngIf"], ["style", "color: rgb(58, 189, 7);", 4, "ngIf"], [2, "color", "crimson"], [2, "color", "rgb(58, 189, 7)"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function DeliveryAccountsComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DeliveryAccountsComponent_tr_22_Template, 11, 8, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DeliveryAccountsComponent_tr_23_Template, 4, 0, "tr", 9);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 7, "Order Count"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 9, "Total"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 11, "Status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders.length === 0);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeS1hY2NvdW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeliveryAccountsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-delivery-accounts',
            templateUrl: './delivery-accounts.component.html',
            styleUrls: ['./delivery-accounts.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryService"]
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
    "EzXn":
    /*!**********************************************!*\
      !*** ./src/app/shared/data/project.store.ts ***!
      \**********************************************/

    /*! exports provided: ProjectStore */

    /***/
    function EzXn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectStore", function () {
        return ProjectStore;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "4ZtF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      function createInitialState() {
        return {
          issues: [],
          users: []
        };
      }

      var ProjectStore = /*#__PURE__*/function (_datorama_akita__WEBP) {
        _inherits(ProjectStore, _datorama_akita__WEBP);

        var _super12 = _createSuper(ProjectStore);

        function ProjectStore() {
          _classCallCheck(this, ProjectStore);

          return _super12.call(this, createInitialState());
        }

        return ProjectStore;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Store"]);

      ProjectStore.ɵfac = function ProjectStore_Factory(t) {
        return new (t || ProjectStore)();
      };

      ProjectStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ProjectStore,
        factory: ProjectStore.ɵfac,
        providedIn: 'root'
      });
      ProjectStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({
        name: 'project'
      })], ProjectStore);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProjectStore, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "L1aM":
    /*!**********************************************************************!*\
      !*** ./src/app/components/delivery/zone-chat/zone-chat.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ZoneChatComponent */

    /***/
    function L1aM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoneChatComponent", function () {
        return ZoneChatComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var src_app_shared_service_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/messenger.service */
      "C+OM");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/delivery.service */
      "zZG3");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_assets_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/assets/pipes/date-ago.pipe */
      "dgWj");

      var _c0 = ["scrollMe"];
      var _c1 = ["imagePond"];

      function ZoneChatComponent_li_4_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ZoneChatComponent_li_4_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 16);
        }
      }

      function ZoneChatComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ZoneChatComponent_li_4_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var item_r3 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.setActiveChat(item_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ZoneChatComponent_li_4_div_3_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "dateAgo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ZoneChatComponent_li_4_div_12_Template, 1, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", item_r3.id == ctx_r0.currentIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r3 == null ? null : item_r3.type) == "support");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r3.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.last_msg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 9, item_r3.timeStamp, "ar")));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3 == null ? null : item_r3.notSeen);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          id: a0
        };
      };

      function ZoneChatComponent_div_6_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, ctx_r8.chatMs == null ? null : ctx_r8.chatMs.id))("title", ctx_r8.chatMs == null ? null : ctx_r8.chatMs.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.chatMs == null ? null : ctx_r8.chatMs.name);
        }
      }

      function ZoneChatComponent_div_6_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, ctx_r9.chatMs == null ? null : ctx_r9.chatMs.id))("title", ctx_r9.chatMs == null ? null : ctx_r9.chatMs.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.chatMs == null ? null : ctx_r9.chatMs.name);
        }
      }

      function ZoneChatComponent_div_6_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ZoneChatComponent_div_6_div_14_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "dateAgo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 4, item_r12.sort, "ar")));
        }
      }

      function ZoneChatComponent_div_6_div_14_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "dateAgo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c2, item_r12.order_number));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, item_r12.sort, "ar")));
        }
      }

      function ZoneChatComponent_div_6_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ZoneChatComponent_div_6_div_14_div_1_Template, 3, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ZoneChatComponent_div_6_div_14_div_4_Template, 7, 7, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ZoneChatComponent_div_6_div_14_div_5_Template, 8, 10, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r12.status === "sent" ? "chat-right" : "chat-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.status === "received");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12["with"] != "complain");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12["with"] == "complain");
        }
      }

      function ZoneChatComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ZoneChatComponent_div_6_a_6_Template, 3, 5, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ZoneChatComponent_div_6_a_7_Template, 3, 5, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ZoneChatComponent_div_6_div_14_Template, 6, 4, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "textarea", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ZoneChatComponent_div_6_Template_textarea_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.messageChat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ZoneChatComponent_div_6_Template_a_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 42);

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
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.chatMs.type != "support");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.chatMs.type == "support");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollTop", _r10.scrollHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.chats);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 6, "Type message..."));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.messageChat);
        }
      }

      function ZoneChatComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please click on a device...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ZoneChatComponent = /*#__PURE__*/function () {
        function ZoneChatComponent(route, router, database, ngZone, messengerService, authService, deliveryService) {
          var _this83 = this;

          _classCallCheck(this, ZoneChatComponent);

          this.route = route;
          this.router = router;
          this.database = database;
          this.ngZone = ngZone;
          this.messengerService = messengerService;
          this.authService = authService;
          this.deliveryService = deliveryService;
          this.chatsList = [];
          this.chatsAfter = [];
          this.messageChat = "";
          this.currentIndex = "";
          this.noSeenChats = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US");
          this.pondOptions = {
            "class": "my-filepond",
            multiple: true,
            labelIdle: "Browse and Drop files here",
            acceptedFileTypes: "image/jpeg, image/png"
          };
          this.pondFiles = ["assets/img/logo2.png"];
          this.pageNo = 1;
          this.paginate = {};

          window.onresize = function (e) {
            _this83.ngZone.run(function () {
              _this83.innerHeight = window.innerHeight + 'px';
            });
          };

          this.getScreenHeight();
        }

        _createClass(ZoneChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this84 = this;

            this.messengerService.getZoneChatsReciver(this.stateId).subscribe(function (res) {
              _this84.chatsList = res;
            });
            this.scrollToBottom();
          } // product Pagination

        }, {
          key: "setPage",
          value: function setPage(page) {
            this.router.navigate(['chat'], {
              queryParams: {
                page: page
              },
              replaceUrl: true
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            if (this.messageChat != '') {
              var time = new Date().getTime();
              var date = this.pipe.transform(new Date(), 'hh:MM a yyyy-MM-dd');
              var obj = {
                id: "" + time,
                isseen: false,
                sender: "0102",
                receiver: this.chatMs.id,
                type: this.chatMs.type,
                time: date,
                sort: "" + time,
                "with": "shop",
                ref: this.chatMs.ref,
                message: this.messageChat,
                status: "sent"
              };
              var obj1 = {
                block: "false",
                id: this.chatMs.id,
                last_msg: this.messageChat,
                name: this.chatMs.name,
                ref: this.chatMs.ref,
                timeStamp: "" + time,
                type: this.chatMs.type,
                notSeen: false,
                zone: this.stateId
              };
              var obj2 = {
                block: "false",
                id: "0102",
                last_msg: this.messageChat,
                name: "Shoppy",
                ref: this.chatMs.ref,
                timeStamp: "" + time,
                type: this.chatMs.type,
                notSeen: true,
                zone: this.stateId
              };
              this.messengerService.sendMessage(obj);
              this.messengerService.sendChatMsUser(obj2, this.chatMs.id);
              this.messengerService.sendChatMsShop(obj1);
              this.messageChat = "";
              this.scrolltoB();
            }
          }
        }, {
          key: "scrolltoB",
          value: function scrolltoB() {
            var element = document.getElementById("chats");
            element.scrollIntoView();
            element.scrollIntoView(false);
            element.scrollIntoView({
              block: "end"
            });
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest"
            });
          }
        }, {
          key: "getScreenHeight",
          value: function getScreenHeight() {
            this.innerHeight = window.innerHeight + 'px';
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.innerHeight = event.target.innerHeight + 'px';
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.scrollToBottom();
          }
        }, {
          key: "setActiveChat",
          value: function setActiveChat(chat) {
            this.currentChat = chat;
            this.currentIndex = chat.id;
            this.getChatMs(chat.id);
            this.getChat(chat.ref);

            if (chat.type == 'support') {
              this.getDelivery(chat.id);
            } else {
              this.getUser(chat.id);
            }
          }
        }, {
          key: "getDelivery",
          value: function getDelivery(id) {
            var _this85 = this;

            this.deliveryService.getDB(id).subscribe(function (res) {
              _this85.dBoy = res;
            });
          }
        }, {
          key: "getChat",
          value: function getChat(id) {
            var _this86 = this;

            this.chatSubscription = this.messengerService.getChats(id).subscribe(function (res) {
              _this86.chats = res;
              _this86.noSeenChats = _this86.chats.filter(function (chat) {
                return !chat.isseen && chat.receiver == "0102";
              });
              console.log(_this86.noSeenChats);

              _this86.seenMessage(_this86.noSeenChats);

              if (_this86.currentIndex == res[0].sender) _this86.seenAllMessage(res[0].sender);

              _this86.scrollToBottom();

              if (_this86.chatsAfter.length < _this86.chats.length) {
                _this86.chatsAfter = _this86.chats;

                _this86.scrollToBottom();
              }
            });
          }
        }, {
          key: "seenMessage",
          value: function seenMessage(chats) {
            var _this87 = this;

            chats.forEach(function (element) {
              _this87.database.object('Chats/' + element.id + '/isseen').set(true);
            });
          }
        }, {
          key: "seenAllMessage",
          value: function seenAllMessage(chatId) {
            this.database.object('Chatlist/0102/' + chatId + '/notSeen').set(false);
          }
        }, {
          key: "getChatMs",
          value: function getChatMs(userID) {
            var _this88 = this;

            this.messengerService.getChatMs(userID).subscribe(function (chatMs) {
              return _this88.chatMs = chatMs;
            }); //this.scrolltoB();
          }
        }, {
          key: "getUser",
          value: function getUser(userID) {// this.authService.getCustomer(userID).subscribe(customer=>this.customer=customer);
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            try {
              // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
              this.myScrollContainer.nativeElement.scrollIntoView();
              this.myScrollContainer.nativeElement.scrollIntoView(false);
              this.myScrollContainer.nativeElement.scrollIntoView({
                block: "end"
              });
              this.myScrollContainer.nativeElement.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
              });
            } catch (err) {}
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.chatSubscription != null) this.chatSubscription.unsubscribe();
            console.log("closed");
          }
        }]);

        return ZoneChatComponent;
      }();

      ZoneChatComponent.ɵfac = function ZoneChatComponent_Factory(t) {
        return new (t || ZoneChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_6__["DeliveryService"]));
      };

      ZoneChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ZoneChatComponent,
        selectors: [["app-zone-chat"]],
        viewQuery: function ZoneChatComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imagePond = _t.first);
          }
        },
        inputs: {
          stateId: "stateId"
        },
        decls: 9,
        vars: 3,
        consts: [[1, "flex", "col-xl-12", "w-full", "h-full", "full-height", "py-8", "pl-8", "pr-6"], [1, "small-gap"], [1, "col-md-4"], [1, "list-group"], ["class", "list-group-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-8", 4, "ngIf"], [4, "ngIf"], [1, "vertical-height"], [1, "list-group-item", 3, "click"], [1, "user-card"], [1, "chat-content"], ["class", "dv_icon", 4, "ngIf"], [1, "chat-time"], ["class", "mr-1 text-textMedium not_seen", 4, "ngIf"], [1, "dv_icon"], ["src", "assets/images/dashboard/motorcycle.png", 2, "height", "30px", "width", "30px"], [1, "mr-1", "text-textMedium", "not_seen"], [1, "col-md-8"], [1, "chat-window"], [1, "fixed-header"], [1, "navbar"], [1, "user-details"], [1, "user-info", "float-left"], ["routerLink", "/customers/view-customer", "class", "text-white", "target", "_blank", 3, "queryParams", "title", 4, "ngIf"], ["routerLink", "/delivery/view-delivery-boy", "class", "text-white", "target", "_blank", 3, "queryParams", "title", 4, "ngIf"], [1, "chat-contents"], [1, "chat-content-wrap"], [1, "chat-wrap-inner"], ["id", "chats", 1, "chat-box", 2, "overflow", "scroll", "height", "xyz", 3, "scrollTop"], ["scrollMe", ""], [1, "chats"], ["class", "chat", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-footer"], [1, "message-bar"], [1, "message-inner"], ["href", "javascript:", "data-toggle", "modal", "data-target", "#drag_files", 1, "link", "attach-icon"], ["src", "assets/img/attachment.png", "alt", ""], [1, "message-area"], [1, "input-group"], [1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-chat", 3, "click"], [1, "fa", "fa-send"], ["routerLink", "/customers/view-customer", "target", "_blank", 1, "text-white", 3, "queryParams", "title"], ["routerLink", "/delivery/view-delivery-boy", "target", "_blank", 1, "text-white", 3, "queryParams", "title"], [1, "chat", 3, "ngClass"], ["class", "chat-avatar", 4, "ngIf"], [1, "chat-body"], [1, "chat-bubble"], ["class", "chat-content", 4, "ngIf"], [1, "chat-avatar"], ["href", "javascript:", 1, "avatar"], ["alt", "", "src", "assets/images/user.png"], [2, "white-space", "pre-line"], ["routerLink", "/sales/view-order", "target", "_blank", 3, "queryParams"]],
        template: function ZoneChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ZoneChatComponent_li_4_Template, 13, 12, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ZoneChatComponent_div_6_Template, 27, 8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ZoneChatComponent_div_7_Template, 4, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chatsList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.chats);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], src_assets_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_10__["DateAgoPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b25lLWNoYXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ZoneChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-zone-chat',
            templateUrl: './zone-chat.component.html',
            styleUrls: ['./zone-chat.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: src_app_shared_service_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_6__["DeliveryService"]
          }];
        }, {
          myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['scrollMe']
          }],
          imagePond: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["imagePond", {
              "static": false
            }]
          }],
          stateId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "M62L":
    /*!*******************************************!*\
      !*** ./src/assets/filter/filter.store.ts ***!
      \*******************************************/

    /*! exports provided: createInitialFilterState, FilterStore */

    /***/
    function M62L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createInitialFilterState", function () {
        return createInitialFilterState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterStore", function () {
        return FilterStore;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "4ZtF");

      function createInitialFilterState() {
        return {
          searchTerm: '',
          userIds: [],
          onlyMyIssue: false,
          ignoreResolved: false
        };
      }

      var FilterStore = /*#__PURE__*/function (_datorama_akita__WEBP2) {
        _inherits(FilterStore, _datorama_akita__WEBP2);

        var _super13 = _createSuper(FilterStore);

        function FilterStore() {
          _classCallCheck(this, FilterStore);

          return _super13.call(this, createInitialFilterState());
        }

        return FilterStore;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"]);

      FilterStore.ɵfac = function FilterStore_Factory(t) {
        return new (t || FilterStore)();
      };

      FilterStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FilterStore,
        factory: FilterStore.ɵfac,
        providedIn: 'root'
      });
      FilterStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'filter'
      })], FilterStore);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterStore, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "M8Xu":
    /*!****************************************************************************!*\
      !*** ./src/app/components/delivery/issue-loader/issue-loader.component.ts ***!
      \****************************************************************************/

    /*! exports provided: IssueLoaderComponent */

    /***/
    function M8Xu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssueLoaderComponent", function () {
        return IssueLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngneat/content-loader */
      "UT+O");

      var IssueLoaderComponent = function IssueLoaderComponent() {
        _classCallCheck(this, IssueLoaderComponent);
      };

      IssueLoaderComponent.ɵfac = function IssueLoaderComponent_Factory(t) {
        return new (t || IssueLoaderComponent)();
      };

      IssueLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IssueLoaderComponent,
        selectors: [["issue-loader"]],
        decls: 16,
        vars: 3,
        consts: [[1, "p-10"], [3, "backgroundColor", "foregroundColor", "viewBox"], ["x", "0", "y", "0", "rx", "3", "ry", "3", "width", "627", "height", "24"], ["x", "0", "y", "29", "rx", "3", "ry", "3", "width", "506", "height", "24"], ["x", "0", "y", "77", "rx", "3", "ry", "3", "width", "590", "height", "16"], ["x", "0", "y", "100", "rx", "3", "ry", "3", "width", "627", "height", "16"], ["x", "0", "y", "123", "rx", "3", "ry", "3", "width", "480", "height", "16"], ["x", "0", "y", "187", "rx", "3", "ry", "3", "width", "370", "height", "16"], ["cx", "18", "cy", "239", "r", "18"], ["x", "46", "y", "217", "rx", "3", "ry", "3", "width", "548", "height", "42"], ["x", "683", "y", "3", "rx", "3", "ry", "3", "width", "135", "height", "14"], ["x", "683", "y", "33", "rx", "3", "ry", "3", "width", "251", "height", "24"], ["x", "683", "y", "90", "rx", "3", "ry", "3", "width", "135", "height", "14"], ["x", "683", "y", "120", "rx", "3", "ry", "3", "width", "251", "height", "24"], ["x", "683", "y", "177", "rx", "3", "ry", "3", "width", "135", "height", "14"], ["x", "683", "y", "207", "rx", "3", "ry", "3", "width", "251", "height", "24"]],
        template: function IssueLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "content-loader", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rect", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", "#f3f3f3")("foregroundColor", "#ecebeb")("viewBox", "0 0 940 300");
          }
        },
        directives: [_ngneat_content_loader__WEBPACK_IMPORTED_MODULE_1__["ContentLoaderComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc3N1ZS1sb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'issue-loader',
            templateUrl: './issue-loader.component.html',
            styleUrls: ['./issue-loader.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "N0q8":
    /*!************************************************************************************!*\
      !*** ./src/app/components/delivery/add-delivery-boy/add-delivery-boy.component.ts ***!
      \************************************************************************************/

    /*! exports provided: AddDeliveryBoyComponent */

    /***/
    function N0q8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddDeliveryBoyComponent", function () {
        return AddDeliveryBoyComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_interfaces_delivery_boy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/interfaces/delivery-boy */
      "+rzH");
      /* harmony import */


      var src_app_shared_interfaces_permission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/interfaces/permission */
      "hyvg");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-image-compress */
      "X9o6");
      /* harmony import */


      var src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/product.service */
      "FCru");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function AddDeliveryBoyComponent_ng_template_13_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var town_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", town_r5.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", town_r5.name, " ");
        }
      }

      function AddDeliveryBoyComponent_ng_template_13_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r6.name, " ");
        }
      }

      function AddDeliveryBoyComponent_ng_template_13_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, role_r7.name), " ");
        }
      }

      function AddDeliveryBoyComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDeliveryBoyComponent_ng_template_13_Template_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.selectedTown = $event;
          })("change", function AddDeliveryBoyComponent_ng_template_13_Template_select_change_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.getStates();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddDeliveryBoyComponent_ng_template_13_option_12_Template, 2, 2, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddDeliveryBoyComponent_ng_template_13_option_20_Template, 2, 2, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddDeliveryBoyComponent_ng_template_13_option_28_Template, 3, 4, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.accountForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 16, "Account Details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 18, "Town :"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedTown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.towns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 20, "State :"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.states);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 22, "Type :"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 24, "Name"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 26, "Phone"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 28, "Email"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 30, "Address"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 32, "ID Number"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 34, "Password"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 36, "Confirm Password"), "");
        }
      }

      function AddDeliveryBoyComponent_ng_template_15_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddDeliveryBoyComponent_ng_template_15_ng_template_2_Template_input_change_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.selectFile($event, "idPhoto1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddDeliveryBoyComponent_ng_template_15_ng_template_2_Template_input_change_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.selectFile($event, "idPhoto2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddDeliveryBoyComponent_ng_template_15_ng_template_2_Template_input_change_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.selectFile($event, "dLPhoto");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddDeliveryBoyComponent_ng_template_15_ng_template_2_Template_input_change_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.selectFile($event, "mLPhoto");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddDeliveryBoyComponent_ng_template_15_ng_template_2_Template_input_change_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.selectFile($event, "fishPhoto");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 16, "Delivery Boy Papers Images"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 18, "ID Image 1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.idPhoto1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 20, "Enter Image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 22, "ID Image 2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.idPhoto2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 24, "Enter Image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 26, "Driving License Image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.dLPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 28, "Enter Image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 30, "Vehicle license Image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.mLPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 32, "Enter Image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 34, "Fish Image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.fishPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 36, "Enter Image"));
        }
      }

      function AddDeliveryBoyComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddDeliveryBoyComponent_ng_template_15_ng_template_2_Template, 55, 38, "ng-template", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "Images"), " ");
        }
      }

      var AddDeliveryBoyComponent = /*#__PURE__*/function () {
        function AddDeliveryBoyComponent(formBuilder, authService, toastr, router, route, imageCompress, productService, db, storage, dataService) {
          _classCallCheck(this, AddDeliveryBoyComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.toastr = toastr;
          this.router = router;
          this.route = route;
          this.imageCompress = imageCompress;
          this.productService = productService;
          this.db = db;
          this.storage = storage;
          this.dataService = dataService;
          this.user = new src_app_shared_interfaces_delivery_boy__WEBPACK_IMPORTED_MODULE_3__["DeliveryBoy"]();
          this.selectedRole = false;
          this.fishPhoto = 'assets/images/pro3/1.jpg';
          this.idPhoto1 = 'assets/images/pro3/1.jpg';
          this.idPhoto2 = 'assets/images/pro3/1.jpg';
          this.dLPhoto = 'assets/images/pro3/1.jpg';
          this.mLPhoto = 'assets/images/pro3/1.jpg';
          this.roles = [{
            name: "Motorcycle"
          }, {
            name: "Bike"
          }];
          this.permission = new src_app_shared_interfaces_permission__WEBPACK_IMPORTED_MODULE_4__["Permission"]();
          this.shops = [];
          this.imageType = "";
          this.selectedTown = '';
          this.states = [];
          this.towns = [];
          this.busy = false;
          this.ATypes = [{
            name: "By Hour"
          }, {
            name: "Commission"
          }];
          this.createAccountForm();
          this.getTowns();
        }

        _createClass(AddDeliveryBoyComponent, [{
          key: "getStates",
          value: function getStates() {
            var _this89 = this;

            this.dataService.getStates(this.selectedTown).subscribe(function (states) {
              _this89.states = states;
            });
          }
        }, {
          key: "progress",
          value: function progress() {
            document.getElementById("dialog").click();
          }
        }, {
          key: "getTowns",
          value: function getTowns() {
            var _this90 = this;

            this.dataService.getTowns().subscribe(function (towns) {
              _this90.towns = towns;
            });
          }
        }, {
          key: "createAccountForm",
          value: function createAccountForm() {
            this.accountForm = this.formBuilder.group({
              idNumber: [this.user && this.user.idNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              vType: [this.user && this.user.vType, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              name: [this.user && this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              phone: [this.user && this.user.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              address: [this.user && this.user.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: [this.user && this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              passwored: [this.user && this.user.passwored, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              confirmPwd: [],
              state: [this.user && this.user.state, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              town: [this.user && this.user.town, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              idPhoto1: [this.user && this.user.idPhoto1],
              idPhoto2: [this.user && this.user.idPhoto2],
              mLPhoto: [this.user && this.user.mLPhoto],
              fishPhoto: [this.user && this.user.fishPhoto],
              dLPhoto: [this.user && this.user.dLPhoto]
            });
          }
        }, {
          key: "selectFile",
          value: function selectFile(event, type) {
            var _this91 = this;

            this.progress();
            var fileName;
            this.imageType = type;
            this.file = event.target.files[0];
            fileName = this.file['name'];

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();

              reader.onload = function (event) {
                _this91.localUrl = event.target.result;

                _this91.compressFile(_this91.localUrl, fileName);
              };

              reader.readAsDataURL(event.target.files[0]);
            }
          }
        }, {
          key: "compressFile",
          value: function compressFile(image, fileName) {
            var _this92 = this;

            var orientation = -1;
            this.sizeOfOriginalImage = this.imageCompress.byteCount(image) / (1024 * 1024);
            console.warn('Size in bytes is now:', this.sizeOfOriginalImage);
            this.imageCompress.compressFile(image, orientation, 200, 200).then(function (result) {
              _this92.imgResultAfterCompress = result;
              _this92.localCompressedURl = result;
              _this92.sizeOFCompressedImage = _this92.imageCompress.byteCount(result) / (1024 * 1024);
              console.warn('Size in bytes after compression:', _this92.sizeOFCompressedImage); // create file from byte

              var imageName = fileName; // call method that creates a blob from dataUri

              var imageBlob = _this92.dataURItoBlob(_this92.imgResultAfterCompress.split(',')[1]); //imageFile created below is the new compressed file which can be send to API in form data


              var imageFile = new File([result], imageName, {
                type: 'image/jpeg'
              });

              _this92.onFileSelected(imageBlob);
            });
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            var byteString = window.atob(dataURI);
            var arrayBuffer = new ArrayBuffer(byteString.length);
            var int8Array = new Uint8Array(arrayBuffer);

            for (var i = 0; i < byteString.length; i++) {
              int8Array[i] = byteString.charCodeAt(i);
            }

            var blob = new Blob([int8Array], {
              type: 'image/jpeg'
            });
            return blob;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this93 = this;

            this.id = this.route.snapshot.queryParams["id"];

            if (this.id) {
              this.mode = 'edit';
              this.authService.getDB(this.id).subscribe(function (user) {
                _this93.user = user;
                _this93.idPhoto1 = _this93.user.idPhoto1 || 'assets/images/pro3/1.jpg';
                _this93.idPhoto2 = _this93.user.idPhoto2 || 'assets/images/pro3/1.jpg';
                _this93.mLPhoto = _this93.user.mLPhoto || 'assets/images/pro3/1.jpg';
                _this93.dLPhoto = _this93.user.dLPhoto || 'assets/images/pro3/1.jpg';
                _this93.fishPhoto = _this93.user.fishPhoto || 'assets/images/pro3/1.jpg';
                _this93.selectedTown = _this93.user.town;
                _this93.busy = _this93.user.busy;

                _this93.getStates();

                console.log(_this93.user);

                _this93.createAccountForm();
              });
            } else {
              this.mode = 'add';
            }
          }
        }, {
          key: "addUser",
          value: function addUser() {
            if (!this.accountForm.valid) {
              this.toastr.error("", "Please enter mandatory field!");
            } else if (this.mode == 'add' && this.accountForm.value.passwored !== this.accountForm.value.confirmPwd) {
              this.registerErrors = 'Passwords don\'t match!';
            } else {
              this.user.name = this.accountForm.value.name;
              this.user.phone = this.accountForm.value.phone;
              this.user.idNumber = this.accountForm.value.idNumber;
              this.user.vType = this.accountForm.value.vType;
              this.user.aType = this.accountForm.value.aType;
              this.user.passwored = this.accountForm.value.passwored;
              this.user.email = this.accountForm.value.email;
              this.user.address = this.accountForm.value.address;
              this.user.state = this.accountForm.value.state;
              this.user.town = this.accountForm.value.town;
              console.log(this.user);
              this.authService.updateNewDB(this.user);
              this.toastr.success("User Created ");
              this.router.navigate(['/delivery/list-delivery-boys']);
            }
          }
        }, {
          key: "createId",
          value: function createId() {
            var randomId = Math.floor(Math.random() * new Date().getTime());
            var id = this.id || randomId + "";

            if (id === "1") {
              id = randomId + "";
            }

            return id;
          }
        }, {
          key: "onFileSelected",
          value: function onFileSelected(url) {
            var _this94 = this;

            var n = Date.now();
            var file = url;
            console.log(url);
            var filePath = "RoomsImages/".concat(n);
            var fileRef = this.storage.ref(filePath);
            var task = this.storage.upload("RoomsImages/".concat(n), file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              _this94.downloadURL = fileRef.getDownloadURL();

              _this94.downloadURL.subscribe(function (url) {
                if (url) {
                  console.log(_this94.imageType);

                  if (_this94.imageType == "idPhoto1") {
                    _this94.idPhoto1 = url;
                    _this94.user.idPhoto1 = url;
                  } else if (_this94.imageType == "idPhoto2") {
                    _this94.idPhoto2 = url;
                    _this94.user.idPhoto2 = url;
                  } else if (_this94.imageType == "dLPhoto") {
                    _this94.dLPhoto = url;
                    _this94.user.dLPhoto = url;
                  } else if (_this94.imageType == "mLPhoto") {
                    _this94.mLPhoto = url;
                    _this94.user.mLPhoto = url;
                  } else {
                    _this94.fishPhoto = url;
                    _this94.user.fishPhoto = url;
                  }

                  $("#progress").modal("hide");
                }
              });
            })).subscribe(function (url) {
              if (url) {
                console.log(url);
              }
            });
          }
        }]);

        return AddDeliveryBoyComponent;
      }();

      AddDeliveryBoyComponent.ɵfac = function AddDeliveryBoyComponent_Factory(t) {
        return new (t || AddDeliveryBoyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__["NgxImageCompressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]));
      };

      AddDeliveryBoyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddDeliveryBoyComponent,
        selectors: [["app-add-delivery-boy"]],
        decls: 27,
        vars: 10,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["data-toggle", "modal", "data-target", "#progress", "data-backdrop", "static", "id", "dialog", "hidden", "", 1, "btn", "btn-primary"], [1, "card", "tab2-card"], [1, "card-header"], [1, "card-body", "tab2-card", "col-sm-8"], [1, "tab-coupon"], [3, "title"], ["ngbTabContent", ""], ["ngbTabTitle", ""], [1, "pull-right"], [1, "form-group", "has-danger"], [1, "form-control-feedback"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "progress", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "progress-content", "modal-dialog-centered"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "exampleFormControlSelect2", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "exampleFormControlSelect2", "formControlName", "town", 1, "form-control", "digits", "col-xl-8", "col-sm-7", 3, "ngModel", "ngModelChange", "change"], ["selected", "town.id == user.town", 3, "value", 4, "ngFor", "ngForOf"], ["id", "exampleFormControlSelect2", "formControlName", "state", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["selected", "state.id == user.state", 3, "value", 4, "ngFor", "ngForOf"], ["id", "exampleFormControlSelect2", "formControlName", "vType", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom0", "type", "text", "formControlName", "name", "required", "", 1, "form-control", "col-xl-8", "col-md-7"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom2", "type", "text", "formControlName", "phone", "required", "", 1, "form-control", "col-xl-8", "col-md-7"], ["id", "validationCustom3", "type", "text", "formControlName", "email", "required", "", 1, "form-control", "col-xl-8", "col-md-7"], ["id", "validationCustom3", "type", "text", "formControlName", "address", "required", "", 1, "form-control", "col-xl-8", "col-md-7"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom1", "type", "text", "formControlName", "idNumber", "required", "", 1, "form-control", "col-xl-8", "col-md-7"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom4", "type", "password", "formControlName", "passwored", "required", "", 1, "form-control", "col-xl-8", "col-md-7"], ["for", "validationCustom4", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom5", "type", "password", "formControlName", "confirmPwd", 1, "form-control", "col-xl-8", "col-md-7"], ["selected", "town.id == user.town", 3, "value"], ["selected", "state.id == user.state", 3, "value"], [3, "value"], [1, "permission-block"], [1, "attribute-blocks"], [2, "margin-bottom", "20px"], [1, "col-xl-3", "col-sm-4"], [1, "col-xl-9", "col-sm-8"], ["alt", "", 1, "img-fluid", "image_zoom_1", "col-xl-8", "db-image", 3, "src"], ["accept", ".jpg,.png,.jpeg", "type", "file", "id", "photo1", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "placeholder", "change"], ["type", "file", "accept", ".jpg,.png,.jpeg", "id", "photo2", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "placeholder", "change"], ["type", "file", "accept", ".jpg,.png,.jpeg", "id", "photo3", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "placeholder", "change"], ["type", "file", "accept", ".jpg,.png,.jpeg", "id", "photo4", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "placeholder", "change"], ["type", "file", "accept", ".jpg,.png,.jpeg", "id", "photo5", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "placeholder", "change"]],
        template: function AddDeliveryBoyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-tabset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddDeliveryBoyComponent_ng_template_13_Template, 78, 38, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddDeliveryBoyComponent_ng_template_15_Template, 3, 3, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDeliveryBoyComponent_Template_button_click_20_listener() {
              return ctx.addUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "Add Delivery Boy"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "Account"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.registerErrors, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 8, "Save"));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTabTitle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZGVsaXZlcnktYm95LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDeliveryBoyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-delivery-boy',
            templateUrl: './add-delivery-boy.component.html',
            styleUrls: ['./add-delivery-boy.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__["NgxImageCompressService"]
          }, {
            type: src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]
          }, {
            type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ryyd":
    /*!************************************************************************!*\
      !*** ./src/app/components/delivery/zone-hours/zone-hours.component.ts ***!
      \************************************************************************/

    /*! exports provided: ZoneHoursComponent */

    /***/
    function Ryyd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoneHoursComponent", function () {
        return ZoneHoursComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ZoneHoursComponent = /*#__PURE__*/function () {
        function ZoneHoursComponent() {
          _classCallCheck(this, ZoneHoursComponent);
        }

        _createClass(ZoneHoursComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ZoneHoursComponent;
      }();

      ZoneHoursComponent.ɵfac = function ZoneHoursComponent_Factory(t) {
        return new (t || ZoneHoursComponent)();
      };

      ZoneHoursComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ZoneHoursComponent,
        selectors: [["app-zone-hours"]],
        decls: 2,
        vars: 0,
        template: function ZoneHoursComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "zone-hours works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b25lLWhvdXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoneHoursComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-zone-hours',
            templateUrl: './zone-hours.component.html',
            styleUrls: ['./zone-hours.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "TKz8":
    /*!************************************************************************************!*\
      !*** ./src/app/components/delivery/orders-dashboard/orders-dashboard.component.ts ***!
      \************************************************************************************/

    /*! exports provided: OrdersDashboardComponent */

    /***/
    function TKz8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersDashboardComponent", function () {
        return OrdersDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _orders_board_orders_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../orders-board/orders-board.component */
      "1jMD");
      /* harmony import */


      var _zone_delivery_boys_tracking_zone_delivery_boys_tracking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../zone-delivery-boys-tracking/zone-delivery-boys-tracking.component */
      "q48x");
      /* harmony import */


      var _zone_chat_zone_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../zone-chat/zone-chat.component */
      "L1aM");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function OrdersDashboardComponent_div_3_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var town_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", town_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", town_r6.name, " ");
        }
      }

      function OrdersDashboardComponent_div_3_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r7.name, " ");
        }
      }

      function OrdersDashboardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrdersDashboardComponent_div_3_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.selectedTown = $event;
          })("change", function OrdersDashboardComponent_div_3_Template_select_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.getStates();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrdersDashboardComponent_div_3_option_9_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrdersDashboardComponent_div_3_Template_select_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.selectedState = $event;
          })("change", function OrdersDashboardComponent_div_3_Template_select_change_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.getAllOrders();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrdersDashboardComponent_div_3_option_18_Template, 2, 2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersDashboardComponent_div_3_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.reloadComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "Town :"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedTown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.towns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 9, "State :"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.states);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, "Reset"), " ");
        }
      }

      function OrdersDashboardComponent_ng_template_8_app_orders_board_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-orders-board", 20);
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Allorders", ctx_r14.Allorders);
        }
      }

      function OrdersDashboardComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrdersDashboardComponent_ng_template_8_app_orders_board_1_Template, 1, 1, "app-orders-board", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedState);
        }
      }

      function OrdersDashboardComponent_ng_template_10_ng_template_2_app_zone_delivery_boys_tracking_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-zone-delivery-boys-tracking", 22);
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stateId", ctx_r16.selectedState);
        }
      }

      function OrdersDashboardComponent_ng_template_10_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrdersDashboardComponent_ng_template_10_ng_template_2_app_zone_delivery_boys_tracking_0_Template, 1, 1, "app-zone-delivery-boys-tracking", 21);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.selectedState);
        }
      }

      function OrdersDashboardComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrdersDashboardComponent_ng_template_10_ng_template_2_Template, 1, 1, "ng-template", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "Map"), " ");
        }
      }

      function OrdersDashboardComponent_ng_template_12_ng_template_2_app_zone_chat_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-zone-chat", 22);
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stateId", ctx_r18.selectedState);
        }
      }

      function OrdersDashboardComponent_ng_template_12_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrdersDashboardComponent_ng_template_12_ng_template_2_app_zone_chat_0_Template, 1, 1, "app-zone-chat", 21);
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.selectedState);
        }
      }

      function OrdersDashboardComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrdersDashboardComponent_ng_template_12_ng_template_2_Template, 1, 1, "ng-template", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "Chats"), " ");
        }
      }

      var OrdersDashboardComponent = /*#__PURE__*/function () {
        function OrdersDashboardComponent(dataService, orderService, router) {
          _classCallCheck(this, OrdersDashboardComponent);

          this.dataService = dataService;
          this.orderService = orderService;
          this.router = router;
          this.selectedTown = '';
          this.states = [];
          this.towns = [];
          this.Allorders = [];
          this.allZone = false;
          var user = localStorage.getItem('adminUser');

          if (user) {
            console.log(user);
            var jsonObj = JSON.parse(user); // string to generic object first

            this.user = jsonObj;
            console.log(this.user);
            this.allZone = this.user.allZone;

            if (this.allZone) {
              this.getTowns();
            } else {
              this.selectedTown = this.user.town;
              this.selectedState = this.user.state;
              this.getAllOrders();
            }
          }
        }

        _createClass(OrdersDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getStates",
          value: function getStates() {
            var _this95 = this;

            this.dataService.getStates(this.selectedTown).subscribe(function (states) {
              _this95.states = states;
            });
          }
        }, {
          key: "progress",
          value: function progress() {
            document.getElementById("dialog").click();
          }
        }, {
          key: "getTowns",
          value: function getTowns() {
            var _this96 = this;

            this.dataService.getTowns().subscribe(function (towns) {
              _this96.towns = towns;
            });
          }
        }, {
          key: "getAllOrders",
          value: function getAllOrders() {
            var _this97 = this;

            this.Allorders = [];
            this.orderService.getAllOrdersByState(this.selectedState).subscribe(function (res) {
              _this97.Allorders = res;
            });
          }
        }, {
          key: "reloadComponent",
          value: function reloadComponent() {
            var currentUrl = this.router.url;

            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };

            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);
          }
        }, {
          key: "chat",
          value: function chat() {}
        }]);

        return OrdersDashboardComponent;
      }();

      OrdersDashboardComponent.ɵfac = function OrdersDashboardComponent_Factory(t) {
        return new (t || OrdersDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      OrdersDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrdersDashboardComponent,
        selectors: [["app-orders-dashboard"]],
        decls: 13,
        vars: 4,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["class", "row", 4, "ngIf"], [1, "form-group", "row"], [1, "tab-coupon"], [3, "title"], ["ngbTabContent", ""], ["ngbTabTitle", ""], [1, "col-xl-5", "col-sm-4", "mb-0"], ["for", "exampleFormControlSelect2", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "exampleFormControlSelect2", 1, "form-control", "digits", "col-xl-8", "col-sm-7", 3, "ngModel", "ngModelChange", "change"], ["selected", "town.id == user.town", 3, "value", 4, "ngFor", "ngForOf"], ["selected", "state.id == user.state", 3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-2", "col-sm-2", "mb-0"], [1, "btn", "btn-primary", "mr-1", 3, "click"], ["selected", "town.id == user.town", 3, "value"], ["selected", "state.id == user.state", 3, "value"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], [3, "Allorders", 4, "ngIf"], [3, "Allorders"], [3, "stateId", 4, "ngIf"], [3, "stateId"]],
        template: function OrdersDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrdersDashboardComponent_div_3_Template, 23, 13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-tabset", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrdersDashboardComponent_ng_template_8_Template, 2, 1, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrdersDashboardComponent_ng_template_10_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrdersDashboardComponent_ng_template_12_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allZone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "Orders"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _orders_board_orders_board_component__WEBPACK_IMPORTED_MODULE_7__["OrdersBoardComponent"], _zone_delivery_boys_tracking_zone_delivery_boys_tracking_component__WEBPACK_IMPORTED_MODULE_8__["ZoneDeliveryBoysTrackingComponent"], _zone_chat_zone_chat_component__WEBPACK_IMPORTED_MODULE_9__["ZoneChatComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-orders-dashboard',
            templateUrl: './orders-dashboard.component.html',
            styleUrls: ['./orders-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UT+O":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@ngneat/content-loader/__ivy_ngcc__/fesm2015/ngneat-content-loader.js ***!
      \********************************************************************************************/

    /*! exports provided: BulletListContentLoaderComponent, ContentLoaderComponent, ContentLoaderModule, FacebookContentLoaderComponent, ListContentLoaderComponent */

    /***/
    function UTO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BulletListContentLoaderComponent", function () {
        return BulletListContentLoaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentLoaderComponent", function () {
        return ContentLoaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentLoaderModule", function () {
        return ContentLoaderModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookContentLoaderComponent", function () {
        return FacebookContentLoaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListContentLoaderComponent", function () {
        return ListContentLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ContentLoaderComponent__svg_animate_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "animate", 7);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("keyTimes", ctx_r0.keyTimes)("values", ctx_r0.animationValues[0])("dur", ctx_r0.duration);
        }
      }

      function ContentLoaderComponent__svg_animate_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "animate", 7);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("keyTimes", ctx_r1.keyTimes)("values", ctx_r1.animationValues[1])("dur", ctx_r1.duration);
        }
      }

      function ContentLoaderComponent__svg_animate_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "animate", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("keyTimes", ctx_r2.keyTimes)("values", ctx_r2.animationValues[2])("dur", ctx_r2.duration);
        }
      }

      var _c0 = ["*"];

      function uid() {
        return Math.random().toString(36).substring(2);
      }

      var ContentLoaderComponent = /*#__PURE__*/function () {
        function ContentLoaderComponent() {
          _classCallCheck(this, ContentLoaderComponent);

          this.fixedId = uid();
          this.idClip = "".concat(this.fixedId, "-diff");
          this.idGradient = "".concat(this.fixedId, "-animated-diff");
          this.idAria = "".concat(this.fixedId, "-aria");
          this.animate = true;
          this.baseUrl = '';
          this.speed = 1.2;
          this.viewBox = '0 0 400 130';
          this.gradientRatio = 2;
          this.backgroundColor = '#f5f6f7';
          this.backgroundOpacity = 1;
          this.foregroundColor = '#eee';
          this.foregroundOpacity = 1;
          this.rtl = false;
          this.interval = 0.25;
          this.style = {};
          this.animationValues = [];
        }

        _createClass(ContentLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clipPath = "url(".concat(this.baseUrl, "#").concat(this.idClip, ")");
            this.fillStyle = {
              fill: "url(".concat(this.baseUrl, "#").concat(this.idGradient, ")")
            };
            this.style = this.rtl ? Object.assign(Object.assign({}, this.style), {
              transform: 'scaleX(-1)'
            }) : this.style;
            this.duration = "".concat(this.speed, "s");
            this.keyTimes = "0; ".concat(this.interval, "; 1");
            this.animationValues = ["".concat(-this.gradientRatio, "; ").concat(-this.gradientRatio, "; 1"), "".concat(-this.gradientRatio / 2, "; ").concat(-this.gradientRatio / 2, "; ").concat(1 + this.gradientRatio / 2), "0; 0; ".concat(1 + this.gradientRatio)];
          }
        }]);

        return ContentLoaderComponent;
      }();

      ContentLoaderComponent.ɵfac = function ContentLoaderComponent_Factory(t) {
        return new (t || ContentLoaderComponent)();
      };

      ContentLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContentLoaderComponent,
        selectors: [["content-loader"]],
        inputs: {
          animate: "animate",
          baseUrl: "baseUrl",
          speed: "speed",
          viewBox: "viewBox",
          gradientRatio: "gradientRatio",
          backgroundColor: "backgroundColor",
          backgroundOpacity: "backgroundOpacity",
          foregroundColor: "foregroundColor",
          foregroundOpacity: "foregroundOpacity",
          rtl: "rtl",
          interval: "interval",
          style: "style"
        },
        ngContentSelectors: _c0,
        decls: 12,
        vars: 15,
        consts: [[3, "ngStyle"], ["role", "presentation", "x", "0", "y", "0", "width", "100%", "height", "100%", 3, "ngStyle"], ["role", "presentation"], ["offset", "0%"], ["attributeName", "offset", "repeatCount", "indefinite", 4, "ngIf"], ["offset", "50%"], ["offset", "100%"], ["attributeName", "offset", "repeatCount", "indefinite"]],
        template: function ContentLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clipPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "linearGradient");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "stop", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContentLoaderComponent__svg_animate_7_Template, 1, 3, "animate", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "stop", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContentLoaderComponent__svg_animate_9_Template, 1, 3, "animate", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "stop", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContentLoaderComponent__svg_animate_11_Template, 1, 3, "animate", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx.viewBox);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.fillStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("clip-path", ctx.clipPath);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.idClip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.idGradient);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx.backgroundColor)("stop-opacity", ctx.backgroundOpacity);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx.foregroundColor)("stop-opacity", ctx.foregroundOpacity);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx.backgroundColor)("stop-opacity", ctx.backgroundOpacity);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"],
        changeDetection: 0
      });
      ContentLoaderComponent.propDecorators = {
        animate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        baseUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        speed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewBox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gradientRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        foregroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        foregroundOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rtl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        interval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'content-loader',
            template: "<svg [attr.viewBox]=\"viewBox\" [ngStyle]=\"style\">\n  <rect role=\"presentation\" [attr.clip-path]=\"clipPath\" [ngStyle]=\"fillStyle\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" />\n\n  <defs role=\"presentation\">\n    <clipPath [attr.id]=\"idClip\">\n      <ng-content></ng-content>\n    </clipPath>\n\n    <linearGradient [attr.id]=\"idGradient\">\n      <stop offset=\"0%\" [attr.stop-color]=\"backgroundColor\" [attr.stop-opacity]=\"backgroundOpacity\">\n        <animate\n          *ngIf=\"animate\"\n          [attr.keyTimes]=\"keyTimes\"\n          attributeName=\"offset\"\n          [attr.values]=\"animationValues[0]\"\n          [attr.dur]=\"duration\"\n          repeatCount=\"indefinite\"\n        />\n      </stop>\n\n      <stop offset=\"50%\" [attr.stop-color]=\"foregroundColor\" [attr.stop-opacity]=\"foregroundOpacity\">\n        <animate\n          *ngIf=\"animate\"\n          attributeName=\"offset\"\n          [attr.keyTimes]=\"keyTimes\"\n          [attr.values]=\"animationValues[1]\"\n          [attr.dur]=\"duration\"\n          repeatCount=\"indefinite\"\n        />\n      </stop>\n\n      <stop offset=\"100%\" [attr.stop-color]=\"backgroundColor\" [attr.stop-opacity]=\"backgroundOpacity\">\n        <animate\n          *ngIf=\"animate\"\n          attributeName=\"offset\"\n          [attr.keyTimes]=\"keyTimes\"\n          [attr.values]=\"animationValues[2]\"\n          [attr.dur]=\"duration\"\n          repeatCount=\"indefinite\"\n        />\n      </stop>\n    </linearGradient>\n  </defs>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n      :host {\n        display: block;\n      }\n    "]
          }]
        }], function () {
          return [];
        }, {
          animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          baseUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          speed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          viewBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gradientRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          foregroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          foregroundOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rtl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var BulletListContentLoaderComponent = /*#__PURE__*/function (_ContentLoaderCompone) {
        _inherits(BulletListContentLoaderComponent, _ContentLoaderCompone);

        var _super14 = _createSuper(BulletListContentLoaderComponent);

        function BulletListContentLoaderComponent() {
          _classCallCheck(this, BulletListContentLoaderComponent);

          return _super14.apply(this, arguments);
        }

        return BulletListContentLoaderComponent;
      }(ContentLoaderComponent);

      BulletListContentLoaderComponent.ɵfac = function BulletListContentLoaderComponent_Factory(t) {
        return ɵBulletListContentLoaderComponent_BaseFactory(t || BulletListContentLoaderComponent);
      };

      BulletListContentLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BulletListContentLoaderComponent,
        selectors: [["bullet-list-content-loader"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 9,
        vars: 0,
        consts: [["viewBox", "0 0 245 125"], ["cx", "10", "cy", "20", "r", "8"], ["x", "25", "y", "15", "rx", "5", "ry", "5", "width", "220", "height", "10"], ["cx", "10", "cy", "50", "r", "8"], ["x", "25", "y", "45", "rx", "5", "ry", "5", "width", "220", "height", "10"], ["cx", "10", "cy", "80", "r", "8"], ["x", "25", "y", "75", "rx", "5", "ry", "5", "width", "220", "height", "10"], ["cx", "10", "cy", "110", "r", "8"], ["x", "25", "y", "105", "rx", "5", "ry", "5", "width", "220", "height", "10"]],
        template: function BulletListContentLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ContentLoaderComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵBulletListContentLoaderComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](BulletListContentLoaderComponent);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BulletListContentLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bullet-list-content-loader',
            template: "\n    <content-loader viewBox=\"0 0 245 125\">\n      <svg:circle cx=\"10\" cy=\"20\" r=\"8\" />\n      <svg:rect x=\"25\" y=\"15\" rx=\"5\" ry=\"5\" width=\"220\" height=\"10\" />\n      <svg:circle cx=\"10\" cy=\"50\" r=\"8\" />\n      <svg:rect x=\"25\" y=\"45\" rx=\"5\" ry=\"5\" width=\"220\" height=\"10\" />\n      <svg:circle cx=\"10\" cy=\"80\" r=\"8\" />\n      <svg:rect x=\"25\" y=\"75\" rx=\"5\" ry=\"5\" width=\"220\" height=\"10\" />\n      <svg:circle cx=\"10\" cy=\"110\" r=\"8\" />\n      <svg:rect x=\"25\" y=\"105\" rx=\"5\" ry=\"5\" width=\"220\" height=\"10\" />\n    </content-loader>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], null, null);
      })();

      var FacebookContentLoaderComponent = /*#__PURE__*/function (_ContentLoaderCompone2) {
        _inherits(FacebookContentLoaderComponent, _ContentLoaderCompone2);

        var _super15 = _createSuper(FacebookContentLoaderComponent);

        function FacebookContentLoaderComponent() {
          _classCallCheck(this, FacebookContentLoaderComponent);

          return _super15.apply(this, arguments);
        }

        return FacebookContentLoaderComponent;
      }(ContentLoaderComponent);

      FacebookContentLoaderComponent.ɵfac = function FacebookContentLoaderComponent_Factory(t) {
        return ɵFacebookContentLoaderComponent_BaseFactory(t || FacebookContentLoaderComponent);
      };

      FacebookContentLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FacebookContentLoaderComponent,
        selectors: [["facebook-content-loader"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 7,
        vars: 0,
        consts: [["viewBox", "0 0 476 124"], ["x", "48", "y", "8", "width", "88", "height", "6", "rx", "3"], ["x", "48", "y", "26", "width", "52", "height", "6", "rx", "3"], ["x", "0", "y", "56", "width", "410", "height", "6", "rx", "3"], ["x", "0", "y", "72", "width", "380", "height", "6", "rx", "3"], ["x", "0", "y", "88", "width", "178", "height", "6", "rx", "3"], ["cx", "20", "cy", "20", "r", "20"]],
        template: function FacebookContentLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ContentLoaderComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵFacebookContentLoaderComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FacebookContentLoaderComponent);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacebookContentLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'facebook-content-loader',
            template: "\n    <content-loader viewBox=\"0 0 476 124\">\n      <svg:rect x=\"48\" y=\"8\" width=\"88\" height=\"6\" rx=\"3\" />\n      <svg:rect x=\"48\" y=\"26\" width=\"52\" height=\"6\" rx=\"3\" />\n      <svg:rect x=\"0\" y=\"56\" width=\"410\" height=\"6\" rx=\"3\" />\n      <svg:rect x=\"0\" y=\"72\" width=\"380\" height=\"6\" rx=\"3\" />\n      <svg:rect x=\"0\" y=\"88\" width=\"178\" height=\"6\" rx=\"3\" />\n      <svg:circle cx=\"20\" cy=\"20\" r=\"20\" />\n    </content-loader>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], null, null);
      })();

      var ListContentLoaderComponent = /*#__PURE__*/function (_ContentLoaderCompone3) {
        _inherits(ListContentLoaderComponent, _ContentLoaderCompone3);

        var _super16 = _createSuper(ListContentLoaderComponent);

        function ListContentLoaderComponent() {
          _classCallCheck(this, ListContentLoaderComponent);

          return _super16.apply(this, arguments);
        }

        return ListContentLoaderComponent;
      }(ContentLoaderComponent);

      ListContentLoaderComponent.ɵfac = function ListContentLoaderComponent_Factory(t) {
        return ɵListContentLoaderComponent_BaseFactory(t || ListContentLoaderComponent);
      };

      ListContentLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListContentLoaderComponent,
        selectors: [["list-content-loader"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 7,
        vars: 0,
        consts: [["viewBox", "0 0 400 110"], ["x", "0", "y", "0", "rx", "3", "ry", "3", "width", "250", "height", "10"], ["x", "20", "y", "20", "rx", "3", "ry", "3", "width", "220", "height", "10"], ["x", "20", "y", "40", "rx", "3", "ry", "3", "width", "170", "height", "10"], ["x", "0", "y", "60", "rx", "3", "ry", "3", "width", "250", "height", "10"], ["x", "20", "y", "80", "rx", "3", "ry", "3", "width", "200", "height", "10"], ["x", "20", "y", "100", "rx", "3", "ry", "3", "width", "80", "height", "10"]],
        template: function ListContentLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ContentLoaderComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵListContentLoaderComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ListContentLoaderComponent);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListContentLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'list-content-loader',
            template: "\n    <content-loader viewBox=\"0 0 400 110\">\n      <svg:rect x=\"0\" y=\"0\" rx=\"3\" ry=\"3\" width=\"250\" height=\"10\" />\n      <svg:rect x=\"20\" y=\"20\" rx=\"3\" ry=\"3\" width=\"220\" height=\"10\" />\n      <svg:rect x=\"20\" y=\"40\" rx=\"3\" ry=\"3\" width=\"170\" height=\"10\" />\n      <svg:rect x=\"0\" y=\"60\" rx=\"3\" ry=\"3\" width=\"250\" height=\"10\" />\n      <svg:rect x=\"20\" y=\"80\" rx=\"3\" ry=\"3\" width=\"200\" height=\"10\" />\n      <svg:rect x=\"20\" y=\"100\" rx=\"3\" ry=\"3\" width=\"80\" height=\"10\" />\n    </content-loader>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], null, null);
      })();

      var ContentLoaderModule = /*#__PURE__*/function () {
        function ContentLoaderModule() {
          _classCallCheck(this, ContentLoaderModule);
        }

        _createClass(ContentLoaderModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: ContentLoaderModule
            };
          }
        }]);

        return ContentLoaderModule;
      }();

      ContentLoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ContentLoaderModule
      });
      ContentLoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ContentLoaderModule_Factory(t) {
          return new (t || ContentLoaderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentLoaderModule, {
          declarations: function declarations() {
            return [ContentLoaderComponent, FacebookContentLoaderComponent, BulletListContentLoaderComponent, ListContentLoaderComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [ContentLoaderComponent, FacebookContentLoaderComponent, BulletListContentLoaderComponent, ListContentLoaderComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentLoaderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [ContentLoaderComponent, FacebookContentLoaderComponent, BulletListContentLoaderComponent, ListContentLoaderComponent],
            exports: [ContentLoaderComponent, FacebookContentLoaderComponent, BulletListContentLoaderComponent, ListContentLoaderComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngneat-content-loader.js.map

      /***/

    },

    /***/
    "VBUu":
    /*!************************************************************************!*\
      !*** ./src/app/components/delivery/issue-card/issue-card.component.ts ***!
      \************************************************************************/

    /*! exports provided: IssueCardComponent */

    /***/
    function VBUu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssueCardComponent", function () {
        return IssueCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _issue_modal_issue_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../issue-modal/issue-modal.component */
      "ncBE");
      /* harmony import */


      var src_app_shared_data_project_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/data/project.query */
      "rqxP");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/product.service */
      "FCru");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/components/svg-icon/svg-icon.component */
      "0g4g");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_assets_pipes_order_type_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/assets/pipes/order-type.pipe */
      "TE2O");

      var _c0 = ["issue-card", ""];

      function IssueCardComponent_h5_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Accept Time :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, ctx_r0.order == null ? null : ctx_r0.order.prepareTime, "hh:mm a"), " ");
        }
      }

      function IssueCardComponent_h5_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Accept Time :"), " --:-- ");
        }
      }

      function IssueCardComponent_h5_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "prepare Time :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, ctx_r2.order == null ? null : ctx_r2.order.deliveryTime, "hh:mm a"), " ");
        }
      }

      function IssueCardComponent_h5_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "prepare Time :"), " --:-- ");
        }
      }

      function IssueCardComponent_h5_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Delivery Time :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, ctx_r4.order == null ? null : ctx_r4.order.doneTime, "hh:mm a"), " ");
        }
      }

      function IssueCardComponent_h5_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Delivery Time :"), " --:-- ");
        }
      }

      var IssueCardComponent = /*#__PURE__*/function () {
        function IssueCardComponent(_projectQuery, _modalService, productService) {
          _classCallCheck(this, IssueCardComponent);

          this._projectQuery = _projectQuery;
          this._modalService = _modalService;
          this.productService = productService;
          this.shops = [];
        }

        _createClass(IssueCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this98 = this;

            this.productService.getShops.subscribe(function (shops) {
              _this98.shops = shops;
            });
            this.issueTypeIcon = "story";
            this.startTimer();
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this99 = this;

            this.interval = setInterval(function () {
              _this99.timer();
            }, 1000);
          }
        }, {
          key: "updtaeClock",
          value: function updtaeClock() {}
        }, {
          key: "timer",
          value: function timer() {
            if (this.order.status == "0") {
              var now = new Date().getTime();
              var then = this.order.orderTime;
              var ms = moment__WEBPACK_IMPORTED_MODULE_3__(now).diff(moment__WEBPACK_IMPORTED_MODULE_3__(then));
              var d = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](ms);
              this.timeLeft = Math.floor(d.asHours()) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](ms).format(":mm:ss");
              var tp = Math.floor(d.asMinutes());

              if (tp >= 15) {
                this.issueTypeIcon = "bug";
              }
            } else if (this.order.status == "1") {
              var now = new Date().getTime();
              var then = this.order.prepareTime;
              var ms = moment__WEBPACK_IMPORTED_MODULE_3__(now).diff(moment__WEBPACK_IMPORTED_MODULE_3__(then));
              var d = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](ms);
              this.timeLeft = Math.floor(d.asHours()) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](ms).format(":mm:ss");
              var tp = Math.floor(d.asMinutes());

              if (tp >= this.order.pTime) {
                this.issueTypeIcon = "bug";
              }
            } else if (this.order.status == "1") {
              var now = new Date().getTime();
              var then = this.order.deliveryTime;
              var ms = moment__WEBPACK_IMPORTED_MODULE_3__(now).diff(moment__WEBPACK_IMPORTED_MODULE_3__(then));
              var d = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](ms);
              this.timeLeft = Math.floor(d.asHours()) + moment__WEBPACK_IMPORTED_MODULE_3__["utc"](ms).format(":mm:ss");
              var tp = Math.floor(d.asMinutes());
            } // this.startTimer(); 

          }
        }, {
          key: "openIssueModal",
          value: function openIssueModal(issueId) {
            this._modalService.create({
              nzContent: _issue_modal_issue_modal_component__WEBPACK_IMPORTED_MODULE_4__["IssueModalComponent"],
              nzWidth: 990,
              nzClosable: false,
              nzFooter: null,
              nzComponentParams: {
                orderId: issueId
              }
            });
          }
        }]);

        return IssueCardComponent;
      }();

      IssueCardComponent.ɵfac = function IssueCardComponent_Factory(t) {
        return new (t || IssueCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_data_project_query__WEBPACK_IMPORTED_MODULE_5__["ProjectQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]));
      };

      IssueCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: IssueCardComponent,
        selectors: [["", "issue-card", ""]],
        inputs: {
          order: "order"
        },
        attrs: _c0,
        decls: 29,
        vars: 22,
        consts: [[1, "issue-wrap"], [1, "issue", 3, "click"], [1, "text-textDarkest", "text-center"], [1, "row"], [1, "col"], [4, "ngIf"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center"], [1, "mr-1", "text-textMedium", 3, "name", "size"]],
        template: function IssueCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IssueCardComponent_Template_div_click_1_listener() {
              return ctx.openIssueModal(ctx.order.orderId);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "orderType");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, IssueCardComponent_h5_17_Template, 4, 7, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, IssueCardComponent_h5_18_Template, 3, 3, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, IssueCardComponent_h5_21_Template, 4, 7, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, IssueCardComponent_h5_22_Template, 3, 3, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, IssueCardComponent_h5_24_Template, 4, 7, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, IssueCardComponent_h5_25_Template, 3, 3, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "svg-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 15, ctx.order.type)), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.order.orderId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.timeLeft, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 17, "Order Time :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 19, ctx.order == null ? null : ctx.order.orderTime, "hh:mm a"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.prepareTime) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.prepareTime) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.deliveryTime) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.deliveryTime) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.doneTime) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.doneTime) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.issueTypeIcon)("size", 20);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_9__["SvgIconComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], src_assets_pipes_order_type_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderType"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc3N1ZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      IssueCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()], IssueCardComponent);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IssueCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[issue-card]',
            templateUrl: './issue-card.component.html',
            styleUrls: ['./issue-card.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_data_project_query__WEBPACK_IMPORTED_MODULE_5__["ProjectQuery"]
          }, {
            type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]
          }, {
            type: src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
          }];
        }, {
          order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "VfN6":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js ***!
      \******************************************************************************************/

    /*! exports provided: UntilDestroy, untilDestroyed */

    /***/
    function VfN6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UntilDestroy", function () {
        return UntilDestroy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "untilDestroyed", function () {
        return untilDestroyed;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵNG_PIPE_DEF"];

      function isPipe(target) {
        return !!target[NG_PIPE_DEF];
      }
      /**
       * Applied to instances and stores `Subject` instance when
       * no custom destroy method is provided.
       */


      var DESTROY = Symbol('__destroy');
      /**
       * Applied to definitions and informs that class is decorated
       */

      var DECORATOR_APPLIED = Symbol('__decoratorApplied');
      /**
       * If we use the `untilDestroyed` operator multiple times inside the single
       * instance providing different `destroyMethodName`, then all streams will
       * subscribe to the single subject. If any method is invoked, the subject will
       * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
       * thus we store subjects under different symbols.
       */

      function getSymbol(destroyMethodName) {
        if (typeof destroyMethodName === 'string') {
          return Symbol("__destroy__".concat(destroyMethodName));
        } else {
          return DESTROY;
        }
      }

      function markAsDecorated(type) {
        // Store this property on the prototype if it's an injectable class, component or directive.
        // We will be able to handle class extension this way.
        type.prototype[DECORATOR_APPLIED] = true;
      }

      function createSubjectOnTheInstance(instance, symbol) {
        if (!instance[symbol]) {
          instance[symbol] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }
      }

      function completeSubjectOnTheInstance(instance, symbol) {
        if (instance[symbol]) {
          instance[symbol].next();
          instance[symbol].complete(); // We also have to re-assign this property thus in the future
          // we will be able to create new subject on the same instance.

          instance[symbol] = null;
        }
      }

      function unsubscribe(property) {
        if (property instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]) {
          property.unsubscribe();
        }
      }

      function unsubscribeIfPropertyIsArrayLike(property) {
        Array.isArray(property) && property.forEach(unsubscribe);
      }

      function decorateNgOnDestroy(ngOnDestroy, options) {
        return function () {
          var _a; // Invoke the original `ngOnDestroy` if it exists


          ngOnDestroy && ngOnDestroy.call(this); // It's important to use `this` instead of caching instance
          // that may lead to memory leaks

          completeSubjectOnTheInstance(this, getSymbol()); // Check if subscriptions are pushed to some array

          if (options.arrayName) {
            return unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
          } // Loop through the properties and find subscriptions


          if (options.checkProperties) {
            for (var property in this) {
              if ((_a = options.blackList) === null || _a === void 0 ? void 0 : _a.includes(property)) {
                continue;
              }

              unsubscribe(this[property]);
            }
          }
        };
      }

      function decorateProviderDirectiveOrComponent(type, options) {
        type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
      }

      function decoratePipe(type, options) {
        var def = type.ɵpipe;
        def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
      }

      function UntilDestroy() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return function (type) {
          if (isPipe(type)) {
            decoratePipe(type, options);
          } else {
            decorateProviderDirectiveOrComponent(type, options);
          }

          markAsDecorated(type);
        };
      }

      function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
        var originalDestroy = instance[destroyMethodName];

        if (ngDevMode && typeof originalDestroy !== 'function') {
          throw new Error("".concat(instance.constructor.name, " is using untilDestroyed but doesn't implement ").concat(destroyMethodName));
        }

        createSubjectOnTheInstance(instance, symbol);

        instance[destroyMethodName] = function () {
          // eslint-disable-next-line prefer-rest-params
          originalDestroy.apply(this, arguments);
          completeSubjectOnTheInstance(this, symbol); // We have to re-assign this property back to the original value.
          // If the `untilDestroyed` operator is called for the same instance
          // multiple times, then we will be able to get the original
          // method again and not the patched one.

          instance[destroyMethodName] = originalDestroy;
        };
      }

      function untilDestroyed(instance, destroyMethodName) {
        return function (source) {
          var symbol = getSymbol(destroyMethodName); // If `destroyMethodName` is passed then the developer applies
          // this operator to something non-related to Angular DI system

          if (typeof destroyMethodName === 'string') {
            overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
          } else {
            ngDevMode && ensureClassIsDecorated(instance);
            createSubjectOnTheInstance(instance, symbol);
          }

          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(instance[symbol]));
        };
      }

      function ensureClassIsDecorated(instance) {
        var prototype = Object.getPrototypeOf(instance);
        var missingDecorator = !(DECORATOR_APPLIED in prototype);

        if (missingDecorator) {
          throw new Error('untilDestroyed operator cannot be used inside directives or ' + 'components or providers that are not decorated with UntilDestroy decorator');
        }
      }
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngneat-until-destroy.js.map

      /***/

    },

    /***/
    "XeAc":
    /*!**************************************!*\
      !*** ./src/app/shared/data/issue.ts ***!
      \**************************************/

    /*! exports provided: OrderType, IssueStatus, IssueStatusDisplay, IssuePriority, IssuePriorityColors */

    /***/
    function XeAc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _IssueStatusDisplay, _IssuePriorityColors;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderType", function () {
        return OrderType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssueStatus", function () {
        return IssueStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssueStatusDisplay", function () {
        return IssueStatusDisplay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssuePriority", function () {
        return IssuePriority;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssuePriorityColors", function () {
        return IssuePriorityColors;
      });
      /* eslint-disable no-shadow */


      var OrderType;

      (function (OrderType) {
        OrderType["Shop"] = "Shop";
        OrderType["Shipping"] = "Shipping";
        OrderType["Pharmacy"] = "Pharmacy";
      })(OrderType || (OrderType = {}));

      var IssueStatus;

      (function (IssueStatus) {
        IssueStatus["NEW"] = "0";
        IssueStatus["PREPARE"] = "1";
        IssueStatus["STORED"] = "2";
        IssueStatus["DISPATCHING"] = "3";
        IssueStatus["DONE"] = "4";
      })(IssueStatus || (IssueStatus = {}));

      var IssueStatusDisplay = (_IssueStatusDisplay = {}, _defineProperty(_IssueStatusDisplay, IssueStatus.NEW, 'New Order'), _defineProperty(_IssueStatusDisplay, IssueStatus.PREPARE, 'Preparing'), _defineProperty(_IssueStatusDisplay, IssueStatus.STORED, 'Stored'), _defineProperty(_IssueStatusDisplay, IssueStatus.DISPATCHING, 'Dispatching'), _defineProperty(_IssueStatusDisplay, IssueStatus.DONE, 'Done'), _IssueStatusDisplay);
      var IssuePriority;

      (function (IssuePriority) {
        IssuePriority["LOWEST"] = "Lowest";
        IssuePriority["LOW"] = "Low";
        IssuePriority["MEDIUM"] = "Medium";
        IssuePriority["HIGH"] = "High";
        IssuePriority["HIGHEST"] = "Highest";
      })(IssuePriority || (IssuePriority = {}));

      var IssuePriorityColors = (_IssuePriorityColors = {}, _defineProperty(_IssuePriorityColors, IssuePriority.HIGHEST, '#CD1317'), _defineProperty(_IssuePriorityColors, IssuePriority.HIGH, '#E9494A'), _defineProperty(_IssuePriorityColors, IssuePriority.MEDIUM, '#E97F33'), _defineProperty(_IssuePriorityColors, IssuePriority.LOW, '#2D8738'), _defineProperty(_IssuePriorityColors, IssuePriority.LOWEST, '#57A55A'), _IssuePriorityColors);
      /* eslint-enable no-shadow */

      /***/
    },

    /***/
    "bfdk":
    /*!****************************************************************!*\
      !*** ./src/app/components/delivery/delivery-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: DeliveryRoutingModule */

    /***/
    function bfdk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryRoutingModule", function () {
        return DeliveryRoutingModule;
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


      var _add_delivery_boy_add_delivery_boy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-delivery-boy/add-delivery-boy.component */
      "N0q8");
      /* harmony import */


      var _list_delivery_boys_list_delivery_boys_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-delivery-boys/list-delivery-boys.component */
      "1fIb");
      /* harmony import */


      var _orders_board_orders_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./orders-board/orders-board.component */
      "1jMD");
      /* harmony import */


      var _orders_dashboard_orders_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-dashboard/orders-dashboard.component */
      "TKz8");
      /* harmony import */


      var _view_delivery_boy_view_delivery_boy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-delivery-boy/view-delivery-boy.component */
      "66t9");
      /* harmony import */


      var _zone_delivery_boys_tracking_zone_delivery_boys_tracking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./zone-delivery-boys-tracking/zone-delivery-boys-tracking.component */
      "q48x");

      var routes = [{
        path: '',
        children: [{
          path: 'list-delivery-boys',
          component: _list_delivery_boys_list_delivery_boys_component__WEBPACK_IMPORTED_MODULE_3__["ListDeliveryBoysComponent"],
          data: {
            title: "Drivers List",
            breadcrumb: "drivers-list"
          }
        }, {
          path: 'add-delivery-boy',
          component: _add_delivery_boy_add_delivery_boy_component__WEBPACK_IMPORTED_MODULE_2__["AddDeliveryBoyComponent"],
          data: {
            title: "Create Driver",
            breadcrumb: "create-driver"
          }
        }, {
          path: 'orders-board',
          component: _orders_board_orders_board_component__WEBPACK_IMPORTED_MODULE_4__["OrdersBoardComponent"],
          data: {
            title: "zone orders",
            breadcrumb: "zone-orders"
          }
        }, {
          path: 'track-delivery-boys',
          component: _zone_delivery_boys_tracking_zone_delivery_boys_tracking_component__WEBPACK_IMPORTED_MODULE_7__["ZoneDeliveryBoysTrackingComponent"],
          data: {
            title: "track delivery boys",
            breadcrumb: "track-delivery-boys"
          }
        }, {
          path: 'orders-dashboard',
          component: _orders_dashboard_orders_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["OrdersDashboardComponent"],
          data: {
            title: "orders dashboard",
            breadcrumb: "orders-dashboard"
          }
        }, {
          path: 'view-delivery-boy',
          component: _view_delivery_boy_view_delivery_boy_component__WEBPACK_IMPORTED_MODULE_6__["ViewDeliveryBoyComponent"],
          data: {
            title: "view delivery boy",
            breadcrumb: "view-delivery-boy"
          }
        }]
      }];

      var DeliveryRoutingModule = function DeliveryRoutingModule() {
        _classCallCheck(this, DeliveryRoutingModule);
      };

      DeliveryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DeliveryRoutingModule
      });
      DeliveryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DeliveryRoutingModule_Factory(t) {
          return new (t || DeliveryRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeliveryRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeliveryRoutingModule, [{
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
    "dfv2":
    /*!***************************************************!*\
      !*** ./src/app/shared/service/project.service.ts ***!
      \***************************************************/

    /*! exports provided: ProjectService */

    /***/
    function dfv2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
        return ProjectService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "4ZtF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _data_project_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../data/project.store */
      "EzXn");

      var ProjectService = /*#__PURE__*/function () {
        function ProjectService(_http, _store) {
          _classCallCheck(this, ProjectService);

          this._http = _http;
          this._store = _store;
          this.baseUrl = '/assets/data';
        }

        _createClass(ProjectService, [{
          key: "getProject",
          value: function getProject() {
            var _this100 = this;

            this._http.get("".concat(this.baseUrl, "/project.json")).pipe(Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(this._store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (project) {
              _this100._store.update(function (state) {
                return Object.assign(Object.assign({}, state), project);
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              _this100._store.setError(error);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
            })).subscribe();
          }
        }, {
          key: "setLoading",
          value: function setLoading(isLoading) {
            this._store.setLoading(isLoading);
          }
        }, {
          key: "deleteIssue",
          value: function deleteIssue(issueId) {
            this._store.update(function (state) {
              var issues = Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["arrayRemove"])(state.issues, issueId);
              return Object.assign(Object.assign({}, state), {
                issues: issues
              });
            });
          }
        }]);

        return ProjectService;
      }();

      ProjectService.ɵfac = function ProjectService_Factory(t) {
        return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_project_store__WEBPACK_IMPORTED_MODULE_5__["ProjectStore"]));
      };

      ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectService,
        factory: ProjectService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _data_project_store__WEBPACK_IMPORTED_MODULE_5__["ProjectStore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fyj5":
    /*!****************************************************************************!*\
      !*** ./src/app/components/delivery/issue-detail/issue-detail.component.ts ***!
      \****************************************************************************/

    /*! exports provided: IssueDetailComponent */

    /***/
    function fyj5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssueDetailComponent", function () {
        return IssueDetailComponent;
      });
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_interfaces_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/interfaces/notification */
      "NP+z");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/product.service */
      "FCru");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/check-permisson */
      "bFyh");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_shared_service_send_mail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/service/send-mail.service */
      "pA0y");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var src_app_shared_service_messenger_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/service/messenger.service */
      "C+OM");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_shared_service_map_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/service/map.directive */
      "ugIm");
      /* harmony import */


      var _issue_loader_issue_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../issue-loader/issue-loader.component */
      "M8Xu");
      /* harmony import */


      var src_assets_pipes_order_type_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/assets/pipes/order-type.pipe */
      "TE2O");
      /* harmony import */


      var src_assets_pipes_state_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/assets/pipes/state.pipe */
      "1qAI");
      /* harmony import */


      var src_assets_pipes_town_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/assets/pipes/town.pipe */
      "I/cK");

      var _c0 = ["locationModal"];

      var _c1 = function _c1(a0) {
        return {
          id: a0
        };
      };

      function IssueDetailComponent_div_0_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IssueDetailComponent_div_0_div_28_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r18.chat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, "Client Information"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c1, ctx_r3.order == null ? null : ctx_r3.order.userId));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.order.to.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, "Contact No."), " ", ctx_r3.order.to.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, "Messege"), " ");
        }
      }

      function IssueDetailComponent_div_0_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "Shop Information"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, ctx_r4.order == null ? null : ctx_r4.order.shopId));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.order.from.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, "Contact No."), " ", ctx_r4.order.from.phone, "");
        }
      }

      function IssueDetailComponent_div_0_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "Sender Information"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.order.from.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, "Contact No."), " : ", ctx_r5.order.from.phone, "");
        }
      }

      function IssueDetailComponent_div_0_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "Reciver Information"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.order.to.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, "Contact No."), " : ", ctx_r6.order.to.phone, "");
        }
      }

      function IssueDetailComponent_div_0_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "statePipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "townPipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, "Sender address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r20.order.from.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate6"]("", ctx_r20.order.from.state, " , ", ctx_r20.order.from.town, " ,", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 18, "Building No."), " ( ", ctx_r20.order.from.building, " ) ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 20, "Appartment No."), " ( ", ctx_r20.order.from.apartment, " )");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 22, "Reciver address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r20.order.to.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate6"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](23, 24, ctx_r20.states, ctx_r20.order.to.state), " , ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 27, ctx_r20.towns, ctx_r20.order.to.town), " ,", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 30, "Building No."), " ( ", ctx_r20.order.to.building, " ) ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 32, "Appartment No."), " ( ", ctx_r20.order.to.apartment, " )");
        }
      }

      function IssueDetailComponent_div_0_div_32_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, "Shipping address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r21.order.to.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate6"]("", ctx_r21.order.to.state, " , ", ctx_r21.order.to.town, " ,", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 10, "Building No."), " ( ", ctx_r21.order.to.building, " ) ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 12, "Appartment No."), " ( ", ctx_r21.order.to.apartment, " )");
        }
      }

      function IssueDetailComponent_div_0_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IssueDetailComponent_div_0_div_32_div_1_Template, 27, 34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IssueDetailComponent_div_0_div_32_div_2_Template, 12, 14, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IssueDetailComponent_div_0_div_32_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r22.viewMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.order.type == "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.order.type == "1" || ctx_r7.order.type == "3");
        }
      }

      function IssueDetailComponent_div_0_option_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sta_r24 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", sta_r24.id)("selected", sta_r24.id == ctx_r8.orderStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, sta_r24.name), " ");
        }
      }

      function IssueDetailComponent_div_0_div_41_h4_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Price"));
        }
      }

      function IssueDetailComponent_div_0_div_41_input_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IssueDetailComponent_div_0_div_41_input_6_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r27.price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r26.price)("value", ctx_r26.price);
        }
      }

      function IssueDetailComponent_div_0_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IssueDetailComponent_div_0_div_41_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r29.pTime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, IssueDetailComponent_div_0_div_41_h4_5_Template, 3, 3, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, IssueDetailComponent_div_0_div_41_input_6_Template, 1, 2, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "Prepare time in minits"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.pTime)("value", ctx_r9.pTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.order.type == "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.order.type == "3");
        }
      }

      function IssueDetailComponent_div_0_button_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IssueDetailComponent_div_0_button_45_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r31.RequestDelivery();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r10.canUpdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "Request Delivery"), " ");
        }
      }

      function IssueDetailComponent_div_0_h5_46_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r33.order == null ? null : ctx_r33.order.deliveryBoy));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r33.order == null ? null : ctx_r33.order.deliveryBoy);
        }
      }

      function IssueDetailComponent_div_0_h5_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, IssueDetailComponent_div_0_h5_46_a_3_Template, 2, 4, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "Delivery Boy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.order.deliveryBoy != "");
        }
      }

      function IssueDetailComponent_div_0_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "agm-map", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "agm-marker", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "agm-marker", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 14, "Distance :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 16, ctx_r12.distance, "1.2-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 19, "Km"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showDirection", ctx_r12.displayDirections)("origin", ctx_r12.origin)("destination", ctx_r12.destination)("zoom", ctx_r12.zoom)("disableDefaultUI", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx_r12.origin.latitude)("longitude", ctx_r12.origin.longitude)("iconUrl", ctx_r12.shopIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx_r12.destination.latitude)("longitude", ctx_r12.destination.longitude)("iconUrl", ctx_r12.userIcon);
        }
      }

      function IssueDetailComponent_div_0_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "agm-map", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "agm-marker", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx_r13.origin.latitude)("longitude", ctx_r13.origin.longitude)("zoom", ctx_r13.zoom)("disableDefaultUI", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx_r13.origin.latitude)("longitude", ctx_r13.origin.longitude)("iconUrl", ctx_r13.userIcon);
        }
      }

      function IssueDetailComponent_div_0_div_54_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r34.order.img_order, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r34.order.img_order, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function IssueDetailComponent_div_0_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, IssueDetailComponent_div_0_div_54_div_7_Template, 3, 2, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, "Order Details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.order.txt_order);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.order.img_order != "");
        }
      }

      function IssueDetailComponent_div_0_table_55_tbody_18_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var side_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", side_r38.name, " ", side_r38.price, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, "EGP"), " ");
        }
      }

      function IssueDetailComponent_div_0_table_55_tbody_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, IssueDetailComponent_div_0_table_55_tbody_18_li_9_Template, 3, 5, "li", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h2", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r36 = ctx.$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 8, product_r36.title), " (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 10, product_r36.size), ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", product_r36.sides);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", product_r36.price, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 12, "EGP"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r36.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", product_r36.price * product_r36.quantity * (ctx_r35.productService == null ? null : ctx_r35.productService.Currency.price), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 14, "EGP"), " ");
        }
      }

      function IssueDetailComponent_div_0_table_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, IssueDetailComponent_div_0_table_55_tbody_18_Template, 21, 16, "tbody", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, "product name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, "Add-ons"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, "price"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 12, "quantity"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 14, "total"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r15.order.product);
        }
      }

      function IssueDetailComponent_div_0_tr_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, "Shipping"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 5, ctx_r16.order.shipping, "1.2-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, "EGP"), "");
        }
      }

      function IssueDetailComponent_div_0_tr_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, "Discount"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 5, ctx_r17.order.discount, "1.2-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, "EGP"), "");
        }
      }

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      function IssueDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "orderType");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, IssueDetailComponent_div_0_div_28_Template, 17, 14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, IssueDetailComponent_div_0_div_29_Template, 13, 11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, IssueDetailComponent_div_0_div_30_Template, 12, 8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, IssueDetailComponent_div_0_div_31_Template, 12, 8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, IssueDetailComponent_div_0_div_32_Template, 7, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IssueDetailComponent_div_0_Template_select_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r39.orderStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, IssueDetailComponent_div_0_option_39_Template, 3, 5, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, IssueDetailComponent_div_0_div_41_Template, 7, 7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IssueDetailComponent_div_0_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r41.updteStatus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, IssueDetailComponent_div_0_button_45_Template, 3, 4, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, IssueDetailComponent_div_0_h5_46_Template, 4, 4, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, IssueDetailComponent_div_0_div_48_Template, 14, 21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, IssueDetailComponent_div_0_div_49_Template, 7, 7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, IssueDetailComponent_div_0_div_54_Template, 8, 5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, IssueDetailComponent_div_0_table_55_Template, 19, 16, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, IssueDetailComponent_div_0_tr_82_Template, 12, 10, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, IssueDetailComponent_div_0_tr_83_Template, 12, 10, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](91, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](95, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](96, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 40, "Order Type"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 42, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 44, ctx_r0.order.type)), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 46, "Summery"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 48, "Order ID :"), " ", ctx_r0.order.orderId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 50, "Order Date :"), " ", ctx_r0.order.date, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 52, "Order Total :"), " ", ctx_r0.order.totalAmount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 54, "EGP"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.type == "1" || ctx_r0.order.type == "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.type == "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.type == "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.type == "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.payment == "Delivery");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 56, "Order Status"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.orderStatus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](81, _c2))("disabled", !ctx_r0.canUpdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.Status);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.orderStatus == "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.canUpdate || ctx_r0.orderStatus != "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 58, "Update"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.deliveryBoy == "" && ctx_r0.order.type != "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.deliveryBoy != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showMap && ctx_r0.order.type != "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showMap && ctx_r0.order.type == "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.type == "2" || ctx_r0.order.type == "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.type == "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 60, "Subtotal"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](68, 62, ctx_r0.order.subtotal, "1.2-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 65, "EGP"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 67, "Tax"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](80, 69, ctx_r0.order.tax, "1.2-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 72, "EGP"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.shipping > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.discount > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](91, 74, "Total"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](95, 76, ctx_r0.order.totalAmount, "1.2-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](96, 79, "EGP"), "");
        }
      }

      function IssueDetailComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "issue-loader");
        }
      }

      var IssueDetailComponent = /*#__PURE__*/function () {
        function IssueDetailComponent(_modalService, productService, route, router, orderService, permisson, toastr, sendMail, authService, messengerService, dataService) {
          _classCallCheck(this, IssueDetailComponent);

          this._modalService = _modalService;
          this.productService = productService;
          this.route = route;
          this.router = router;
          this.orderService = orderService;
          this.permisson = permisson;
          this.toastr = toastr;
          this.sendMail = sendMail;
          this.authService = authService;
          this.messengerService = messengerService;
          this.dataService = dataService;
          this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.onOpenIssue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.modalOpen = false;
          this.displayDirections = true;
          this.zoom = 14;
          this.shopIcon = {
            url: './assets/images/icons/shop.png',
            scaledSize: {
              width: 40,
              height: 40
            }
          };
          this.userIcon = {
            url: './assets/images/icons/user.png',
            scaledSize: {
              width: 40,
              height: 40
            }
          };
          this.showMap = false;
          this.canUpdate = false;
          this.towns = [];
          this.states = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]("ar-EG");
          this.Status = [{
            id: "0",
            name: "New"
          }, {
            id: "1",
            name: "Prepare"
          }, {
            id: "2",
            name: "Stored"
          }, {
            id: "3",
            name: "Dispatching"
          }, {
            id: "4",
            name: "Delivered"
          }, {
            id: "5",
            name: "Cancelled"
          }];
          this.canUpdate = this.permisson.checkPermisson('"update_order":true');
        }

        _createClass(IssueDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.orderId;
            this.getOrder(this.id);
            this.getFillters();
          }
        }, {
          key: "getDistanceFromLatLonInKm",
          value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km

            var dLat = this.deg2rad(lat2 - lat1); // deg2rad below

            var dLon = this.deg2rad(lon2 - lon1);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km

            return d;
          }
        }, {
          key: "deg2rad",
          value: function deg2rad(deg) {
            return deg * (Math.PI / 180);
          }
        }, {
          key: "polygonCenter",
          value: function polygonCenter(poly) {
            var vertices = poly; // put all latitudes and longitudes in arrays

            var longitudes = vertices.map(function (i) {
              return i.lng;
            });
            var latitudes = vertices.map(function (i) {
              return i.lat;
            }); // sort the arrays low to high

            latitudes.sort();
            longitudes.sort(); // get the min and max of each

            var lowX = latitudes[0];
            console.log(lowX);
            var highX = latitudes[latitudes.length - 1];
            var lowy = longitudes[0];
            var highy = longitudes[latitudes.length - 1]; // center of the polygon is the starting point plus the midpoint

            var centerX = lowX + (highX - lowX) / 2;
            var centerY = lowy + (highy - lowy) / 2;
            return {
              lat: centerX,
              lng: centerY
            };
          }
        }, {
          key: "getOrder",
          value: function getOrder(id) {
            var _this101 = this;

            this.orderService.getOrderById(id).subscribe(function (order) {
              if (order) {
                _this101.order = order;
                _this101.destination = {
                  latitude: order.from.lat,
                  longitude: order.from.lng
                };
                _this101.origin = {
                  latitude: order.to.lat,
                  longitude: order.to.lng
                };
                if (order.pTime) _this101.pTime = order.pTime;
                _this101.price = order.subtotal;
                _this101.orderStatus = _this101.order.status;

                _this101.updateS();

                _this101.getStates();

                _this101.distance = _this101.getDistanceFromLatLonInKm(_this101.origin.latitude, _this101.origin.longitude, _this101.destination.latitude, _this101.destination.longitude);
              }
            });
          }
        }, {
          key: "getFillters",
          value: function getFillters() {
            var _this102 = this;

            this.dataService.getTowns().subscribe(function (towns) {
              _this102.towns = towns;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this103 = this;

            this.dataService.getStates(this.order.to.town).subscribe(function (states) {
              _this103.states = states;
            });
          }
        }, {
          key: "updateS",
          value: function updateS() {
            if (this.orderStatus == "1") {
              this.Status = [{
                id: "1",
                name: "Prepare"
              }, {
                id: "2",
                name: "Stored"
              }, {
                id: "3",
                name: "Dispatching"
              }, {
                id: "4",
                name: "Delivered"
              }, {
                id: "5",
                name: "Cancelled"
              }];
            } else if (this.orderStatus == "2") {
              this.Status = [{
                id: "2",
                name: "Stored"
              }, {
                id: "3",
                name: "Dispatching"
              }, {
                id: "4",
                name: "Delivered"
              }, {
                id: "5",
                name: "Cancelled"
              }];
            } else if (this.orderStatus == "3") {
              this.Status = [{
                id: "3",
                name: "Dispatching"
              }, {
                id: "4",
                name: "Delivered"
              }, {
                id: "5",
                name: "Cancelled"
              }];
            } else if (this.orderStatus == "4") {
              this.Status = [{
                id: "4",
                name: "Delivered"
              }, {
                id: "5",
                name: "Cancelled"
              }];
            } else if (this.orderStatus == "5") {
              this.Status = [{
                id: "5",
                name: "Cancelled"
              }];
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.onClosed.emit();
          }
        }, {
          key: "viewMap",
          value: function viewMap() {
            if (this.showMap) {
              this.showMap = false;
            } else {
              this.showMap = true;
            }
          }
        }, {
          key: "openIssuePage",
          value: function openIssuePage() {
            this.onOpenIssue.emit(this.order.orderId);
          }
        }, {
          key: "updteStatus",
          value: function updteStatus() {
            var _this104 = this;

            console.log(this.orderStatus);
            this.orderService.updateOrderStatus(this.order.orderId, this.orderStatus).subscribe(function (res) {
              var title = "";
              var body = "";

              _this104.authService.getToken(_this104.order.userId).subscribe(function (token) {
                _this104.token = token.token;

                if (_this104.orderStatus == "1") {
                  title = "قيد التجهيز";
                  console.log("pTime = " + _this104.pTime);
                  var timestamp = new Date().getTime();

                  _this104.orderService.updateOrderTimeStatus(_this104.order.orderId, "prepareTime", timestamp).subscribe(function (res) {});

                  console.log("pTime = " + _this104.pTime);

                  _this104.orderService.updateOrderPTime(_this104.order.orderId, _this104.pTime).subscribe(function (res) {});

                  _this104.orderService.updateOrderPice(_this104.order.orderId, _this104.price).subscribe(function (res) {});

                  body = " الطلب رقم " + _this104.order.orderId + " قيد التجهيز";
                } else if (_this104.orderStatus == "2") {
                  title = "تم التخزين ";
                  body = " الطلب رقم " + _this104.order.orderId + " تم التخزين  ";
                } else if (_this104.orderStatus == "3") {
                  title = "في الطريق";
                  body = " الطلب رقم " + _this104.order.orderId + " في الطريق ";

                  var _timestamp = new Date().getTime();

                  _this104.orderService.updateOrderTimeStatus(_this104.order.orderId, "deliveryTime", _timestamp).subscribe(function (res) {});
                } else if (_this104.orderStatus == "4") {
                  title = "تم التسليم ";
                  body = " الطلب رقم " + _this104.order.orderId + " تم التسليم";

                  var _timestamp2 = new Date().getTime();

                  _this104.deliveryRequest();

                  _this104.orderService.updateOrderTimeStatus(_this104.order.orderId, "doneTime", _timestamp2).subscribe(function (res) {});
                } else if (_this104.orderStatus == "5") {
                  title = "تم الغاء الطلب ";
                  body = " الطلب رقم " + _this104.order.orderId + " تم الالغاء ";

                  _this104.cancelRequest();
                } else {
                  _this104.toastr.error("Cant/'t update");
                }

                _this104.sendNotification(title, body, _this104.token);

                _this104.router.navigate(['/sales/orders']);
              });
            });
            this.closeModal();
          }
        }, {
          key: "chat",
          value: function chat() {
            var _this105 = this;

            this.messengerService.getChatReciverId('0102', this.order.userId).subscribe(function (chatMs) {
              if (chatMs.length > 0) {
                _this105.ref = chatMs[0].ref;

                var url = _this105.router.serializeUrl(_this105.router.createUrlTree(['/chat/chat'], {
                  queryParams: {
                    id: _this105.ref,
                    user: _this105.order.userId
                  }
                }));

                window.open(url, '_blank'); //this.router.navigate(['/chat/chat'], { queryParams: { id: this.ref,user:this.order.userId},replaceUrl: true})
              } else {
                _this105.ref = "" + new Date().getTime();

                var _url = _this105.router.serializeUrl(_this105.router.createUrlTree(['/chat/chat'], {
                  queryParams: {
                    id: _this105.ref,
                    user: _this105.order.userId
                  }
                }));

                window.open(_url, '_blank');
              }
            });
          }
        }, {
          key: "sendNotification",
          value: function sendNotification(title, body, id) {
            var content = {
              notification: {
                title: title,
                body: body
              },
              to: id
            };
            this.sendMail.sendMessage(content);
            var myDate = this.pipe.transform(new Date(), 'yyyy-MM-dd hh:mm a');
            var gid = this.createId();
            var notification = new src_app_shared_interfaces_notification__WEBPACK_IMPORTED_MODULE_3__["Notification"](gid, title, body, true, this.order.orderId, this.order.shopId, true, false, this.order.userId, myDate);
            this.orderService.sendNotification(notification);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "RequestDelivery",
          value: function RequestDelivery() {
            var _this106 = this;

            this.orderService.requestDelivery(this.order.orderId, this.order).subscribe(function (res) {
              _this106.toastr.success('Resqust send succesfully');
            });
          }
        }, {
          key: "cancelRequest",
          value: function cancelRequest() {
            this.authService.getCustomer(this.order.userId).subscribe(function (customer) {// var balanceH = customer.balanceH - this.order.subtotal;
              // this.orderService.updateUserPayments(customer.uid,"balanceH",balanceH).subscribe(res=>{
              //   })
            });
          }
        }, {
          key: "deliveryRequest",
          value: function deliveryRequest() {
            this.authService.getCustomer(this.order.userId).subscribe(function (customer) {//var balanceH = customer.balanceH - this.order.subtotal;
              // var balanceM = customer.balanceM + this.order.subtotal;
              // this.orderService.updateUserPayments(customer.uid,"balanceH",balanceH).subscribe(res=>{
              //     this.orderService.updateUserPayments(customer.uid,"balanceM",balanceM)
              //   })
            });
          }
        }, {
          key: "createId",
          value: function createId() {
            var t = new Date();
            var randomId = this.pipe.transform(new Date(), 'yyyyMMdd') + t.getUTCMilliseconds();
            var id = "" + randomId;

            if (id === "1") {
              id = "" + randomId;
            }

            return id;
          }
        }]);

        return IssueDetailComponent;
      }();

      IssueDetailComponent.ɵfac = function IssueDetailComponent_Factory(t) {
        return new (t || IssueDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_8__["CheckPermisson"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_send_mail_service__WEBPACK_IMPORTED_MODULE_10__["SendMailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_messenger_service__WEBPACK_IMPORTED_MODULE_12__["MessengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]));
      };

      IssueDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: IssueDetailComponent,
        selectors: [["issue-detail"]],
        viewQuery: function IssueDetailComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMap"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.agmMap = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.LocationModal = _t.first);
          }
        },
        inputs: {
          orderId: "orderId",
          isShowFullScreenButton: "isShowFullScreenButton",
          isShowCloseButton: "isShowCloseButton"
        },
        outputs: {
          onClosed: "onClosed",
          onOpenIssue: "onOpenIssue"
        },
        decls: 3,
        vars: 2,
        consts: [["class", "w-full h-full", 4, "ngIf", "ngIfElse"], ["loaderTmpl", ""], [1, "w-full", "h-full"], [1, "row"], [1, "col-lg-12"], [1, "row", "order-success-sec"], [1, "col-sm-12"], [1, "myy-5"], [1, "col-sm-4", "border-br"], [1, "order-detail"], ["class", "col-sm-4 border-br", 4, "ngIf"], ["class", "col-sm-8 border-br", 4, "ngIf"], ["id", "exampleFormControlSelect2", 1, "form-control", "digits", "col-xl-12", "col-sm-12", 3, "ngModel", "ngModelOptions", "disabled", "ngModelChange"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], [1, "btn", "btn-primary", "mr-1", 2, "margin", "5px", 3, "disabled", "click"], ["class", "btn btn-primary mr-1", "style", "margin: 5px; float: right;", 3, "disabled", "click", 4, "ngIf"], ["style", "margin: 5px; float: right;", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "product-order"], ["style", "display: flex;", 4, "ngIf"], ["class", "table cart-table table-responsive-xs", 4, "ngIf"], [1, "table", "cart-table", "table-responsive-md"], [4, "ngIf"], ["routerLink", "/customers/view-customer", "target", "_blank", 3, "queryParams"], [1, "btn", "btn-primary", "mr-1", 2, "margin", "5px", 3, "click"], [1, "myy-4"], ["routerLink", "/shops/view-shop", "target", "_blank", 3, "queryParams"], [1, "col-sm-8", "border-br"], ["translate", "", 1, "btn", "btn-primary", "mr-1", 2, "margin", "5px", "float", "right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], [1, "col-sm-6"], [3, "value", "selected"], [1, "form-group"], ["id", "validationCustom0", "type", "number", "required", "", 1, "form-control", "col-xl-12", "col-sm-12", 3, "ngModel", "value", "ngModelChange"], ["class", "form-control col-xl-12 col-sm-12", "id", "validationCustom0", "type", "number", "required", "", 3, "ngModel", "value", "ngModelChange", 4, "ngIf"], [1, "btn", "btn-primary", "mr-1", 2, "margin", "5px", "float", "right", 3, "disabled", "click"], [2, "margin", "5px", "float", "right"], ["target", "_blank", "routerLink", "/delivery/view-delivery-boy", 3, "queryParams", 4, "ngIf"], ["target", "_blank", "routerLink", "/delivery/view-delivery-boy", 3, "queryParams"], [1, "col-md-12"], [1, "form-group", "col-md-12", "col-sm-12", "col-xs-12"], [1, "map-icons", "street"], [2, "background-color", "#ff5a00", "padding", "14px"], [1, "text-white"], ["directionsMap", "", 3, "showDirection", "origin", "destination", "zoom", "disableDefaultUI"], [3, "latitude", "longitude", "iconUrl"], [3, "latitude", "longitude", "zoom", "disableDefaultUI"], [2, "display", "flex"], [1, "col-md-6"], ["class", "col-md-6", 4, "ngIf"], ["target", "_blank", 3, "href"], ["alt", "", "width", "200px", 1, "img-fluid", "image_zoom_1", 3, "src"], [1, "table", "cart-table", "table-responsive-xs"], [1, "table-head"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-xs-3"], [1, "td-color"]],
        template: function IssueDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, IssueDetailComponent_div_0_Template, 97, 82, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IssueDetailComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMap"], src_app_shared_service_map_directive__WEBPACK_IMPORTED_MODULE_16__["mapDirective"], _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"], _issue_loader_issue_loader_component__WEBPACK_IMPORTED_MODULE_17__["IssueLoaderComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], src_assets_pipes_order_type_pipe__WEBPACK_IMPORTED_MODULE_18__["OrderType"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], src_assets_pipes_state_pipe__WEBPACK_IMPORTED_MODULE_19__["StatePipe"], src_assets_pipes_town_pipe__WEBPACK_IMPORTED_MODULE_20__["TownPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc3N1ZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](IssueDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'issue-detail',
            templateUrl: './issue-detail.component.html',
            styleUrls: ['./issue-detail.component.scss']
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]
          }, {
            type: src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]
          }, {
            type: src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_8__["CheckPermisson"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
          }, {
            type: src_app_shared_service_send_mail_service__WEBPACK_IMPORTED_MODULE_10__["SendMailService"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]
          }, {
            type: src_app_shared_service_messenger_service__WEBPACK_IMPORTED_MODULE_12__["MessengerService"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]
          }];
        }, {
          orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          isShowFullScreenButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          isShowCloseButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          onClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          onOpenIssue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          agmMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]]
          }],
          LocationModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["locationModal"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hO/v":
    /*!*******************************************!*\
      !*** ./src/assets/filter/filter.query.ts ***!
      \*******************************************/

    /*! exports provided: FilterQuery */

    /***/
    function hOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterQuery", function () {
        return FilterQuery;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "4ZtF");
      /* harmony import */


      var _filter_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filter.store */
      "M62L");

      var FilterQuery = /*#__PURE__*/function (_datorama_akita__WEBP3) {
        _inherits(FilterQuery, _datorama_akita__WEBP3);

        var _super17 = _createSuper(FilterQuery);

        function FilterQuery(store) {
          var _this107;

          _classCallCheck(this, FilterQuery);

          _this107 = _super17.call(this, store);
          _this107.store = store;
          _this107.any$ = _this107.select(function (_ref21) {
            var searchTerm = _ref21.searchTerm,
                userIds = _ref21.userIds,
                onlyMyIssue = _ref21.onlyMyIssue,
                ignoreResolved = _ref21.ignoreResolved;
            return !!searchTerm || !!(userIds === null || userIds === void 0 ? void 0 : userIds.length) || onlyMyIssue || ignoreResolved;
          });
          _this107.all$ = _this107.select();
          _this107.userIds$ = _this107.select('userIds');
          _this107.onlyMyIssue$ = _this107.select('onlyMyIssue');
          _this107.ignoreResolve$ = _this107.select('ignoreResolved');
          return _this107;
        }

        return FilterQuery;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]);

      FilterQuery.ɵfac = function FilterQuery_Factory(t) {
        return new (t || FilterQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_filter_store__WEBPACK_IMPORTED_MODULE_2__["FilterStore"]));
      };

      FilterQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FilterQuery,
        factory: FilterQuery.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterQuery, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _filter_store__WEBPACK_IMPORTED_MODULE_2__["FilterStore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k611":
    /*!********************************************************!*\
      !*** ./src/app/components/delivery/delivery.module.ts ***!
      \********************************************************/

    /*! exports provided: DeliveryModule */

    /***/
    function k611(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryModule", function () {
        return DeliveryModule;
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


      var _delivery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./delivery-routing.module */
      "bfdk");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      "rHMi");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-count-to */
      "a5BO");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngneat/content-loader */
      "UT+O");
      /* harmony import */


      var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-ckeditor */
      "eLGb");
      /* harmony import */


      var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-dropzone-wrapper */
      "YpNe");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _list_delivery_boys_list_delivery_boys_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./list-delivery-boys/list-delivery-boys.component */
      "1fIb");
      /* harmony import */


      var _view_delivery_boy_view_delivery_boy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./view-delivery-boy/view-delivery-boy.component */
      "66t9");
      /* harmony import */


      var _add_delivery_boy_add_delivery_boy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./add-delivery-boy/add-delivery-boy.component */
      "N0q8");
      /* harmony import */


      var _zone_hours_zone_hours_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./zone-hours/zone-hours.component */
      "Ryyd");
      /* harmony import */


      var _zone_delivery_boys_tracking_zone_delivery_boys_tracking_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./zone-delivery-boys-tracking/zone-delivery-boys-tracking.component */
      "q48x");
      /* harmony import */


      var _zone_orders_zone_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./zone-orders/zone-orders.component */
      "D7uf");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _issue_card_issue_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./issue-card/issue-card.component */
      "VBUu");
      /* harmony import */


      var _issue_modal_issue_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./issue-modal/issue-modal.component */
      "ncBE");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _orders_board_orders_board_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./orders-board/orders-board.component */
      "1jMD");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var _issue_detail_issue_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./issue-detail/issue-detail.component */
      "fyj5");
      /* harmony import */


      var _issue_loader_issue_loader_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./issue-loader/issue-loader.component */
      "M8Xu");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _agm_drawing__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @agm/drawing */
      "Mfqx");
      /* harmony import */


      var src_app_shared_service_map_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! src/app/shared/service/map.directive */
      "ugIm");
      /* harmony import */


      var _orders_dashboard_orders_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./orders-dashboard/orders-dashboard.component */
      "TKz8");
      /* harmony import */


      var _delivery_summery_delivery_summery_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./delivery-summery/delivery-summery.component */
      "5Fsz");
      /* harmony import */


      var _delivery_orders_delivery_orders_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./delivery-orders/delivery-orders.component */
      "BQOp");
      /* harmony import */


      var _delivery_accounts_delivery_accounts_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./delivery-accounts/delivery-accounts.component */
      "EaDx");
      /* harmony import */


      var _zone_chat_zone_chat_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./zone-chat/zone-chat.component */
      "L1aM");
      /* harmony import */


      var _delivery_hour_report_delivery_hour_report_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./delivery-hour-report/delivery-hour-report.component */
      "A6hy");

      var DeliveryModule = function DeliveryModule() {
        _classCallCheck(this, DeliveryModule);
      };

      DeliveryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DeliveryModule
      });
      DeliveryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DeliveryModule_Factory(t) {
          return new (t || DeliveryModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delivery_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeliveryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__["NzModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_12__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_10__["ContentLoaderModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_7__["CountToModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__["GalleryModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
          libraries: ['places', 'drawing', 'geometry'],
          language: localStorage && localStorage.lang || 'ar'
        }), _agm_drawing__WEBPACK_IMPORTED_MODULE_29__["AgmDrawingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeliveryModule, {
          declarations: [_list_delivery_boys_list_delivery_boys_component__WEBPACK_IMPORTED_MODULE_14__["ListDeliveryBoysComponent"], _issue_loader_issue_loader_component__WEBPACK_IMPORTED_MODULE_27__["IssueLoaderComponent"], _issue_card_issue_card_component__WEBPACK_IMPORTED_MODULE_21__["IssueCardComponent"], _issue_modal_issue_modal_component__WEBPACK_IMPORTED_MODULE_22__["IssueModalComponent"], _issue_detail_issue_detail_component__WEBPACK_IMPORTED_MODULE_26__["IssueDetailComponent"], _view_delivery_boy_view_delivery_boy_component__WEBPACK_IMPORTED_MODULE_15__["ViewDeliveryBoyComponent"], _add_delivery_boy_add_delivery_boy_component__WEBPACK_IMPORTED_MODULE_16__["AddDeliveryBoyComponent"], _zone_hours_zone_hours_component__WEBPACK_IMPORTED_MODULE_17__["ZoneHoursComponent"], _zone_delivery_boys_tracking_zone_delivery_boys_tracking_component__WEBPACK_IMPORTED_MODULE_18__["ZoneDeliveryBoysTrackingComponent"], _zone_orders_zone_orders_component__WEBPACK_IMPORTED_MODULE_19__["ZoneOrdersComponent"], _orders_board_orders_board_component__WEBPACK_IMPORTED_MODULE_24__["OrdersBoardComponent"], src_app_shared_service_map_directive__WEBPACK_IMPORTED_MODULE_30__["mapDirective"], _orders_dashboard_orders_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["OrdersDashboardComponent"], _delivery_summery_delivery_summery_component__WEBPACK_IMPORTED_MODULE_32__["DeliverySummeryComponent"], _delivery_orders_delivery_orders_component__WEBPACK_IMPORTED_MODULE_33__["DeliveryOrdersComponent"], _delivery_accounts_delivery_accounts_component__WEBPACK_IMPORTED_MODULE_34__["DeliveryAccountsComponent"], _zone_chat_zone_chat_component__WEBPACK_IMPORTED_MODULE_35__["ZoneChatComponent"], _delivery_hour_report_delivery_hour_report_component__WEBPACK_IMPORTED_MODULE_36__["DeliveryHourReportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delivery_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeliveryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__["NzModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_12__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_10__["ContentLoaderModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_7__["CountToModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__["GalleryModule"], _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"], _agm_drawing__WEBPACK_IMPORTED_MODULE_29__["AgmDrawingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeliveryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_list_delivery_boys_list_delivery_boys_component__WEBPACK_IMPORTED_MODULE_14__["ListDeliveryBoysComponent"], _issue_loader_issue_loader_component__WEBPACK_IMPORTED_MODULE_27__["IssueLoaderComponent"], _issue_card_issue_card_component__WEBPACK_IMPORTED_MODULE_21__["IssueCardComponent"], _issue_modal_issue_modal_component__WEBPACK_IMPORTED_MODULE_22__["IssueModalComponent"], _issue_detail_issue_detail_component__WEBPACK_IMPORTED_MODULE_26__["IssueDetailComponent"], _view_delivery_boy_view_delivery_boy_component__WEBPACK_IMPORTED_MODULE_15__["ViewDeliveryBoyComponent"], _add_delivery_boy_add_delivery_boy_component__WEBPACK_IMPORTED_MODULE_16__["AddDeliveryBoyComponent"], _zone_hours_zone_hours_component__WEBPACK_IMPORTED_MODULE_17__["ZoneHoursComponent"], _zone_delivery_boys_tracking_zone_delivery_boys_tracking_component__WEBPACK_IMPORTED_MODULE_18__["ZoneDeliveryBoysTrackingComponent"], _zone_orders_zone_orders_component__WEBPACK_IMPORTED_MODULE_19__["ZoneOrdersComponent"], _orders_board_orders_board_component__WEBPACK_IMPORTED_MODULE_24__["OrdersBoardComponent"], src_app_shared_service_map_directive__WEBPACK_IMPORTED_MODULE_30__["mapDirective"], _orders_dashboard_orders_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["OrdersDashboardComponent"], _delivery_summery_delivery_summery_component__WEBPACK_IMPORTED_MODULE_32__["DeliverySummeryComponent"], _delivery_orders_delivery_orders_component__WEBPACK_IMPORTED_MODULE_33__["DeliveryOrdersComponent"], _delivery_accounts_delivery_accounts_component__WEBPACK_IMPORTED_MODULE_34__["DeliveryAccountsComponent"], _zone_chat_zone_chat_component__WEBPACK_IMPORTED_MODULE_35__["ZoneChatComponent"], _delivery_hour_report_delivery_hour_report_component__WEBPACK_IMPORTED_MODULE_36__["DeliveryHourReportComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delivery_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeliveryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__["NzModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_12__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_10__["ContentLoaderModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_7__["CountToModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__["GalleryModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
              libraries: ['places', 'drawing', 'geometry'],
              language: localStorage && localStorage.lang || 'ar'
            }), _agm_drawing__WEBPACK_IMPORTED_MODULE_29__["AgmDrawingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ncBE":
    /*!**************************************************************************!*\
      !*** ./src/app/components/delivery/issue-modal/issue-modal.component.ts ***!
      \**************************************************************************/

    /*! exports provided: IssueModalComponent */

    /***/
    function ncBE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssueModalComponent", function () {
        return IssueModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/project.service */
      "dfv2");
      /* harmony import */


      var _issue_detail_issue_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../issue-detail/issue-detail.component */
      "fyj5");

      var IssueModalComponent = /*#__PURE__*/function () {
        function IssueModalComponent(_modal, _router, _projectService) {
          _classCallCheck(this, IssueModalComponent);

          this._modal = _modal;
          this._router = _router;
          this._projectService = _projectService;
        }

        _createClass(IssueModalComponent, [{
          key: "closeModal",
          value: function closeModal() {
            this._modal.close();
          }
        }, {
          key: "openIssuePage",
          value: function openIssuePage(issueId) {
            this.closeModal();

            this._router.navigate(['project', 'issue', issueId]);
          }
        }, {
          key: "deleteIssue",
          value: function deleteIssue(_ref22) {
            var issueId = _ref22.issueId,
                deleteModalRef = _ref22.deleteModalRef;

            this._projectService.deleteIssue(issueId);

            deleteModalRef.close();
            this.closeModal();
          }
        }]);

        return IssueModalComponent;
      }();

      IssueModalComponent.ɵfac = function IssueModalComponent_Factory(t) {
        return new (t || IssueModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]));
      };

      IssueModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IssueModalComponent,
        selectors: [["issue-modal"]],
        inputs: {
          orderId: "orderId"
        },
        decls: 2,
        vars: 3,
        consts: [[1, "px-3"], [3, "orderId", "isShowFullScreenButton", "isShowCloseButton", "onClosed", "onOpenIssue", "onDelete"]],
        template: function IssueModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "issue-detail", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClosed", function IssueModalComponent_Template_issue_detail_onClosed_1_listener() {
              return ctx.closeModal();
            })("onOpenIssue", function IssueModalComponent_Template_issue_detail_onOpenIssue_1_listener($event) {
              return ctx.openIssuePage($event);
            })("onDelete", function IssueModalComponent_Template_issue_detail_onDelete_1_listener($event) {
              return ctx.deleteIssue($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderId", ctx.orderId)("isShowFullScreenButton", true)("isShowCloseButton", true);
          }
        },
        directives: [_issue_detail_issue_detail_component__WEBPACK_IMPORTED_MODULE_4__["IssueDetailComponent"]],
        styles: [".ant-modal[_ngcontent-%COMP%] {\n  @apply text-textDark;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpc3N1ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoiaXNzdWUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LW1vZGFsIHtcbiAgICBAYXBwbHkgdGV4dC10ZXh0RGFyaztcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'issue-modal',
            templateUrl: './issue-modal.component.html',
            styleUrls: ['./issue-modal.component.scss']
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_shared_service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
          }];
        }, {
          orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "q48x":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/components/delivery/zone-delivery-boys-tracking/zone-delivery-boys-tracking.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ZoneDeliveryBoysTrackingComponent */

    /***/
    function q48x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoneDeliveryBoysTrackingComponent", function () {
        return ZoneDeliveryBoysTrackingComponent;
      });
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/delivery.service */
      "zZG3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/product.service */
      "FCru");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ZoneDeliveryBoysTrackingComponent_li_8_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Busy"), " ");
        }
      }

      function ZoneDeliveryBoysTrackingComponent_li_8_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Online"), " ");
        }
      }

      function ZoneDeliveryBoysTrackingComponent_li_8_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Offline"), " ");
        }
      }

      function ZoneDeliveryBoysTrackingComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ZoneDeliveryBoysTrackingComponent_li_8_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var db_r4 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.showDb(db_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ZoneDeliveryBoysTrackingComponent_li_8_a_5_Template, 3, 3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ZoneDeliveryBoysTrackingComponent_li_8_a_6_Template, 3, 3, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ZoneDeliveryBoysTrackingComponent_li_8_a_7_Template, 3, 3, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var db_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", db_r4.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", db_r4.online && db_r4.busy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", db_r4.online && !db_r4.busy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !db_r4.online);
        }
      }

      function ZoneDeliveryBoysTrackingComponent_agm_marker_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "agm-marker", 23);
        }

        if (rf & 2) {
          var db_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", db_r10.location.lat)("longitude", db_r10.location.lng)("markerDraggable", false)("iconUrl", ctx_r3.dbIcon)("label", db_r10.name);
        }
      }

      var ZoneDeliveryBoysTrackingComponent = /*#__PURE__*/function () {
        function ZoneDeliveryBoysTrackingComponent(deliveryService, platformId, modalService, toastr, productService, router) {
          _classCallCheck(this, ZoneDeliveryBoysTrackingComponent);

          this.deliveryService = deliveryService;
          this.platformId = platformId;
          this.modalService = modalService;
          this.toastr = toastr;
          this.productService = productService;
          this.router = router;
          this.title = 'AGM project';
          this.latitude = 30.033333;
          this.longitude = 31.233334;
          this.zoom = 17;
          this.Zone = [];
          this.zoneUsers = [];
          this.managerOptions = {
            drawingControl: true,
            drawingControlOptions: {
              drawingModes: ['polygon']
            },
            polygonOptions: {
              draggable: false,
              editable: true
            },
            drawingMode: "polygon"
          };
          this.options = {
            lat: this.latitude,
            lng: this.longitude,
            zoom: 14,
            fillColor: '#DC143C',
            draggable: true,
            editable: true,
            visible: true
          };
          this.modalOpen = false;
          this.products = [];
          this.towns = [];
          this.states = [];
          this.dBoyes = [];
          this.locations = [];
          this.dbL = [];
          this.stateId = "";
          this.townId = "";
          this.dbIcon = {
            url: './assets/images/icons/db.png',
            scaledSize: {
              width: 40,
              height: 40
            },
            labelOrigin: {
              x: 16,
              y: 48
            }
          };
          this.lang = localStorage.getItem('language');
        }

        _createClass(ZoneDeliveryBoysTrackingComponent, [{
          key: "onMapReady",
          value: function onMapReady(map) {
            this.geoCoder = new google.maps.Geocoder();
            this.agmMap = map;
          }
        }, {
          key: "mapClicked",
          value: function mapClicked($event) {
            if (this.isWithinPoly($event, this.polygon)) {
              this.latitude = $event.coords.lat;
              this.longitude = $event.coords.lng; //this.getMAddress(this.latitude, this.longitude);
            } else {
              this.toastr.error("لا يمكن التوصيل خارج المنطقة المظللة");
            }
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this108 = this;

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (response) {
                //this.setPosition(response);
                _this108.latitude = response.coords.latitude;
                _this108.longitude = response.coords.longitude;
                _this108.options.lat = response.coords.latitude;
                _this108.options.lng = response.coords.longitude;
              }, function () {
                alert("Unable to get the GPS location");
              }, {
                maximumAge: 60000,
                timeout: 5000,
                enableHighAccuracy: true
              });
            }

            ;
          }
        }, {
          key: "addPolygon",
          value: function addPolygon() {
            this.polygon = new google.maps.Polygon({
              paths: this.triangleCoords,
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              editable: false,
              draggable: false
            });
            var cn = this.polygonCenter(this.triangleCoords);
            this.longitude = cn.lng;
            this.latitude = cn.lat;
            this.options.lat = this.latitude;
            this.options.lng = this.longitude;
          }
        }, {
          key: "showDb",
          value: function showDb(db) {
            this.options.lat = db.location.lat;
            this.options.lng = db.location.lng;
            this.options.zoom = 15;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this109 = this;

            this.getZone();
            var date = new Date();
            var hours = date.getHours();
            var h = this.selectedHour(hours);
            var day = date.getDay();
            var d = this.selectedDay(day);
            console.log(h, d);
            this.deliveryService.getOnlineDeliveryBoysByZone(this.stateId).subscribe(function (res) {
              _this109.dBoyes = [];
              _this109.dBoyes = res;
              console.log(_this109.dBoyes);
            });
          }
        }, {
          key: "selectedHour",
          value: function selectedHour(hours) {
            if (hours > 10) {
              return "" + hours;
            } else {
              return "0" + hours;
            }
          }
        }, {
          key: "selectedDay",
          value: function selectedDay(day) {
            if (day == 0) {
              return '2';
            } else if (day == 1) {
              return '3';
            } else if (day == 2) {
              return '4';
            } else if (day == 3) {
              return '5';
            } else if (day == 4) {
              return '6';
            } else if (day == 5) {
              return '0';
            } else if (day == 6) {
              return '1';
            }
          }
        }, {
          key: "getZone",
          value: function getZone() {
            var _this110 = this;

            this.deliveryService.getState(this.stateId).subscribe(function (state) {
              _this110.state = state;
              _this110.triangleCoords = _this110.state.map;

              google.maps.Polygon.prototype.my_getBounds = function () {
                var bounds = new google.maps.LatLngBounds();
                this.getPath().forEach(function (element, index) {
                  bounds.extend(element);
                });
                return bounds;
              };

              _this110.addPolygon();
            });
          }
        }, {
          key: "getMAddress",
          value: function getMAddress(latitude, longitude) {
            var _this111 = this;

            this.geoCoder.geocode({
              'location': {
                lat: latitude,
                lng: longitude
              }
            }, function (results, status) {
              if (status === 'OK') {
                if (results[0]) {
                  _this111.zoom = 17;
                  _this111.address = results[0].formatted_address;
                } else {
                  window.alert('No results found');
                }
              } else {
                window.alert('Geocoder failed due to: ' + status);
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalOpen) {
              this.modalService.dismissAll();
            }
          }
        }, {
          key: "isWithinPoly",
          value: function isWithinPoly(event, polgon) {
            var isWithinPolygon = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(event.coords.lat, event.coords.lng), polgon);
            return isWithinPolygon;
          }
        }, {
          key: "polygonCenter",
          value: function polygonCenter(poly) {
            var vertices = poly; // put all latitudes and longitudes in arrays

            var longitudes = vertices.map(function (i) {
              return i.lng;
            });
            var latitudes = vertices.map(function (i) {
              return i.lat;
            }); // sort the arrays low to high

            latitudes.sort();
            longitudes.sort(); // get the min and max of each

            var lowX = latitudes[0];
            var highX = latitudes[latitudes.length - 1];
            var lowy = longitudes[0];
            var highy = longitudes[latitudes.length - 1]; // center of the polygon is the starting point plus the midpoint

            var centerX = lowX + (highX - lowX) / 2;
            var centerY = lowy + (highy - lowy) / 2;
            return {
              lat: centerX,
              lng: centerY
            };
          }
        }]);

        return ZoneDeliveryBoysTrackingComponent;
      }();

      ZoneDeliveryBoysTrackingComponent.ɵfac = function ZoneDeliveryBoysTrackingComponent_Factory(t) {
        return new (t || ZoneDeliveryBoysTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_3__["DeliveryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      ZoneDeliveryBoysTrackingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ZoneDeliveryBoysTrackingComponent,
        selectors: [["app-zone-delivery-boys-tracking"]],
        viewQuery: function ZoneDeliveryBoysTrackingComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMap"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.agmMap = _t.first);
          }
        },
        inputs: {
          stateId: "stateId"
        },
        decls: 16,
        vars: 10,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-2", 2, "padding-right", "0", "padding-left", "0"], [1, "text-center", 2, "background-color", "#ff5a00", "padding", "5px"], [1, "text-white"], [1, "order-detail"], ["style", "display: flex;", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "col-xl-10", 2, "padding-right", "0", "padding-left", "0"], ["fxFlex", "1 1 100%", 1, "map"], ["map", ""], [3, "latitude", "longitude", "zoom", "mapReady", "mapClick"], ["agmMap", ""], [3, "latitude", "longitude", "markerDraggable", "iconUrl", "label", 4, "ngFor", "ngForOf"], [3, "paths", "clickable"], [2, "display", "flex"], [1, "col-md-8"], [3, "click"], [1, "col-md-4"], [4, "ngIf"], ["style", "color: rgb(84, 167, 2);", 4, "ngIf"], ["style", "color: rgb(74, 75, 73);", 4, "ngIf"], [2, "color", "rgb(84, 167, 2)"], [2, "color", "rgb(74, 75, 73)"], [3, "latitude", "longitude", "markerDraggable", "iconUrl", "label"]],
        template: function ZoneDeliveryBoysTrackingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ZoneDeliveryBoysTrackingComponent_li_8_Template, 8, 4, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "agm-map", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapReady", function ZoneDeliveryBoysTrackingComponent_Template_agm_map_mapReady_12_listener($event) {
              return ctx.onMapReady($event);
            })("mapClick", function ZoneDeliveryBoysTrackingComponent_Template_agm_map_mapClick_12_listener($event) {
              return ctx.mapClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ZoneDeliveryBoysTrackingComponent_agm_marker_14_Template, 1, 5, "agm-marker", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "agm-polygon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, "Delivery Boys"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dBoyes);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.options.lat)("longitude", ctx.options.lng)("zoom", ctx.options.zoom);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dBoyes);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("paths", ctx.triangleCoords)("clickable", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmPolygon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx6b25lLWRlbGl2ZXJ5LWJveXMtdHJhY2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiem9uZS1kZWxpdmVyeS1ib3lzLXRyYWNraW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0IDogMTAwdmhcbiAgfVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ZoneDeliveryBoysTrackingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-zone-delivery-boys-tracking',
            templateUrl: './zone-delivery-boys-tracking.component.html',
            styleUrls: ['./zone-delivery-boys-tracking.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_delivery_service__WEBPACK_IMPORTED_MODULE_3__["DeliveryService"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, {
          agmMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]]
          }],
          stateId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "rqxP":
    /*!**********************************************!*\
      !*** ./src/app/shared/data/project.query.ts ***!
      \**********************************************/

    /*! exports provided: ProjectQuery */

    /***/
    function rqxP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectQuery", function () {
        return ProjectQuery;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "4ZtF");
      /* harmony import */


      var _project_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project.store */
      "EzXn");
      /* harmony import */


      var _service_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/order.service */
      "4KJr");

      var ProjectQuery = /*#__PURE__*/function (_datorama_akita__WEBP4) {
        _inherits(ProjectQuery, _datorama_akita__WEBP4);

        var _super18 = _createSuper(ProjectQuery);

        function ProjectQuery(store, orderService) {
          var _this112;

          _classCallCheck(this, ProjectQuery);

          _this112 = _super18.call(this, store);
          _this112.store = store;
          _this112.orderService = orderService;
          _this112.orders = [];

          _this112.lastIssuePosition = function (status) {
            var raw = _this112.orders;
            console.log("raw:" + raw);
            var issuesByStatus = raw.filter(function (x) {
              return x.status === status;
            });
            return issuesByStatus.length;
          };

          _this112.issueByStatusSorted$ = function (status, orders) {
            return orders.filter(function (x) {
              return x.status === status;
            }).sort(function (a, b) {
              return a.orderId - b.orderId;
            });
          };

          return _this112;
        }

        return ProjectQuery;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]);

      ProjectQuery.ɵfac = function ProjectQuery_Factory(t) {
        return new (t || ProjectQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_project_store__WEBPACK_IMPORTED_MODULE_2__["ProjectStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]));
      };

      ProjectQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectQuery,
        factory: ProjectQuery.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectQuery, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _project_store__WEBPACK_IMPORTED_MODULE_2__["ProjectStore"]
          }, {
            type: _service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ugIm":
    /*!*************************************************!*\
      !*** ./src/app/shared/service/map.directive.ts ***!
      \*************************************************/

    /*! exports provided: mapDirective */

    /***/
    function ugIm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mapDirective", function () {
        return mapDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");

      var mapDirective = /*#__PURE__*/function () {
        // We inject AGM's google maps api wrapper that handles the communication with the Google Maps Javascript
        function mapDirective(gmapsApi) {
          _classCallCheck(this, mapDirective);

          this.gmapsApi = gmapsApi;
        }

        _createClass(mapDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.drawDirectionsRoute();
          }
        }, {
          key: "drawDirectionsRoute",
          value: function drawDirectionsRoute() {
            var _this113 = this;

            this.gmapsApi.getNativeMap().then(function (map) {
              if (!_this113.directionsRenderer) {
                // if you already have a marker at the coordinate location on the map, use suppressMarkers option
                // suppressMarkers prevents google maps from automatically adding a marker for you
                _this113.directionsRenderer = new google.maps.DirectionsRenderer({
                  suppressMarkers: true
                });
              }

              var directionsRenderer = _this113.directionsRenderer;

              if (_this113.showDirection && _this113.destination) {
                var directionsService = new google.maps.DirectionsService();
                directionsRenderer.setMap(map);
                directionsService.route({
                  origin: {
                    lat: _this113.origin.latitude,
                    lng: _this113.origin.longitude
                  },
                  destination: {
                    lat: _this113.destination.latitude,
                    lng: _this113.destination.longitude
                  },
                  waypoints: [],
                  optimizeWaypoints: true,
                  travelMode: 'DRIVING'
                }, function (response, status) {
                  if (status === 'OK') {
                    directionsRenderer.setDirections(response); // If you'll like to display an info window along the route
                    // middleStep is used to estimate the midpoint on the route where the info window will appear
                    // const middleStep = (response.routes[0].legs[0].steps.length / 2).toFixed();
                    // const infowindow2 = new google.maps.InfoWindow();
                    // infowindow2.setContent(`${response.routes[0].legs[0].distance.text} <br> ${response.routes[0].legs[0].duration.text}  `);
                    // infowindow2.setPosition(response.routes[0].legs[0].steps[middleStep].end_location);
                    // infowindow2.open(map);
                  } else {
                    console.log('Directions request failed due to ' + status);
                  }
                });
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.destination || changes.showDirection) {
              // this checks if the show directions input changed, if so the directions are removed
              // else we redraw the directions
              if (changes.showDirection && !changes.showDirection.currentValue) {
                if (this.directionsRenderer !== undefined) {
                  // check this value is not undefined
                  this.directionsRenderer.setDirections({
                    routes: []
                  });
                  return;
                }
              } else {
                this.drawDirectionsRoute();
              }
            }
          }
        }]);

        return mapDirective;
      }();

      mapDirective.ɵfac = function mapDirective_Factory(t) {
        return new (t || mapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]));
      };

      mapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: mapDirective,
        selectors: [["", "directionsMap", ""]],
        inputs: {
          origin: "origin",
          destination: "destination",
          showDirection: "showDirection"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](mapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[directionsMap]'
          }]
        }], function () {
          return [{
            type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]
          }];
        }, {
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          destination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vSBb":
    /*!****************************************************!*\
      !*** ./src/app/shared/data/issue-priority-icon.ts ***!
      \****************************************************/

    /*! exports provided: IssuePriorityIcon */

    /***/
    function vSBb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssuePriorityIcon", function () {
        return IssuePriorityIcon;
      });
      /* harmony import */


      var _issue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./issue */
      "XeAc");

      var IssuePriorityIcon = function IssuePriorityIcon(issuePriority) {
        _classCallCheck(this, IssuePriorityIcon);

        var lowerPriorities = [_issue__WEBPACK_IMPORTED_MODULE_0__["IssuePriority"].LOW, _issue__WEBPACK_IMPORTED_MODULE_0__["IssuePriority"].LOWEST];
        this.value = issuePriority;
        this.icon = lowerPriorities.includes(issuePriority) ? 'arrow-down' : 'arrow-up';
        this.color = _issue__WEBPACK_IMPORTED_MODULE_0__["IssuePriorityColors"][issuePriority];
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-delivery-delivery-module-es5.js.map