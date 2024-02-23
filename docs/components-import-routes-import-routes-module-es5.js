(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-import-routes-import-routes-module"], {
    /***/
    "2JRb":
    /*!**************************************************************************!*\
      !*** ./src/app/components/import-routes/import-routes-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ImportRoutesRoutingModule */

    /***/
    function JRb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImportRoutesRoutingModule", function () {
        return ImportRoutesRoutingModule;
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


      var _driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./driver-route/driver-route.component */
      "dvEc");
      /* harmony import */


      var _import_route_import_route_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./import-route/import-route.component */
      "WS9w");
      /* harmony import */


      var _import_temp_list_import_temp_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./import-temp-list/import-temp-list.component */
      "aGsA");
      /* harmony import */


      var _import_temp_import_temp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./import-temp/import-temp.component */
      "Mw9p");
      /* harmony import */


      var _routes_list_routes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./routes-list/routes-list.component */
      "LFHh");
      /* harmony import */


      var _view_driver_route_view_driver_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./view-driver-route/view-driver-route.component */
      "J2Cy");
      /* harmony import */


      var _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./view-route/view-route.component */
      "djqD");

      var routes = [{
        path: '',
        children: [{
          path: 'routes-list',
          component: _routes_list_routes_list_component__WEBPACK_IMPORTED_MODULE_6__["RoutesListComponent"],
          data: {
            title: "Routes",
            breadcrumb: "import-routes"
          }
        }, {
          path: 'import-route',
          component: _import_route_import_route_component__WEBPACK_IMPORTED_MODULE_3__["ImportRouteComponent"],
          data: {
            title: "Import Route",
            breadcrumb: "import-route"
          }
        }, {
          path: 'add-temp',
          component: _import_temp_import_temp_component__WEBPACK_IMPORTED_MODULE_5__["ImportTempComponent"],
          data: {
            title: "Add Template",
            breadcrumb: "add-temp"
          }
        }, {
          path: 'temp-list',
          component: _import_temp_list_import_temp_list_component__WEBPACK_IMPORTED_MODULE_4__["ImportTempListComponent"],
          data: {
            title: "Template",
            breadcrumb: "temp-list"
          }
        }, {
          path: 'driver-route',
          component: _driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_2__["DriverRouteComponent"],
          data: {
            title: "driver Routes",
            breadcrumb: "driver-route"
          }
        }, {
          path: 'view-route',
          component: _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_8__["ViewRouteComponent"],
          data: {
            title: "View Route",
            breadcrumb: "view-route"
          }
        }, {
          path: 'view-driver-route',
          component: _view_driver_route_view_driver_route_component__WEBPACK_IMPORTED_MODULE_7__["ViewDriverRouteComponent"],
          data: {
            title: "View Driver Route",
            breadcrumb: "view-driver-route"
          }
        }]
      }];

      var ImportRoutesRoutingModule = function ImportRoutesRoutingModule() {
        _classCallCheck(this, ImportRoutesRoutingModule);
      };

      ImportRoutesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ImportRoutesRoutingModule
      });
      ImportRoutesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ImportRoutesRoutingModule_Factory(t) {
          return new (t || ImportRoutesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImportRoutesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportRoutesRoutingModule, [{
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
    "4iAQ":
    /*!*************************************************!*\
      !*** ./src/app/shared/interfaces/distance-m.ts ***!
      \*************************************************/

    /*! exports provided: DistanceM */

    /***/
    function iAQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DistanceM", function () {
        return DistanceM;
      });

      var DistanceM = function DistanceM() {
        _classCallCheck(this, DistanceM);

        this.text = "";
        this.value = 0;
      };
      /***/

    },

    /***/
    "D5Ol":
    /*!******************************************************************!*\
      !*** ./src/app/components/import-routes/import-routes.module.ts ***!
      \******************************************************************/

    /*! exports provided: ImportRoutesModule */

    /***/
    function D5Ol(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImportRoutesModule", function () {
        return ImportRoutesModule;
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


      var _import_routes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./import-routes-routing.module */
      "2JRb");
      /* harmony import */


      var _import_route_import_route_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./import-route/import-route.component */
      "WS9w");
      /* harmony import */


      var _routes_list_routes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./routes-list/routes-list.component */
      "LFHh");
      /* harmony import */


      var _driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driver-route/driver-route.component */
      "dvEc");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _agm_drawing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/drawing */
      "Mfqx");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      "rHMi");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-ckeditor */
      "eLGb");
      /* harmony import */


      var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-dropzone-wrapper */
      "YpNe");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _import_temp_import_temp_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./import-temp/import-temp.component */
      "Mw9p");
      /* harmony import */


      var _import_temp_list_import_temp_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./import-temp-list/import-temp-list.component */
      "aGsA");
      /* harmony import */


      var _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./view-route/view-route.component */
      "djqD");
      /* harmony import */


      var _view_driver_route_view_driver_route_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./view-driver-route/view-driver-route.component */
      "J2Cy");
      /* harmony import */


      var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-mat-select-search */
      "WJ5W");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var ImportRoutesModule = function ImportRoutesModule() {
        _classCallCheck(this, ImportRoutesModule);
      };

      ImportRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ImportRoutesModule
      });
      ImportRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ImportRoutesModule_Factory(t) {
          return new (t || ImportRoutesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _import_routes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportRoutesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_20__["CKEditorModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_18__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_21__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_28__["NgxMatSelectSearchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__["GooglePlaceModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
          libraries: ['places', 'drawing', 'geometry']
        }), _agm_drawing__WEBPACK_IMPORTED_MODULE_7__["AgmDrawingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__["GalleryModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImportRoutesModule, {
          declarations: [_import_route_import_route_component__WEBPACK_IMPORTED_MODULE_3__["ImportRouteComponent"], _routes_list_routes_list_component__WEBPACK_IMPORTED_MODULE_4__["RoutesListComponent"], _driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_5__["DriverRouteComponent"], _import_temp_import_temp_component__WEBPACK_IMPORTED_MODULE_24__["ImportTempComponent"], _import_temp_list_import_temp_list_component__WEBPACK_IMPORTED_MODULE_25__["ImportTempListComponent"], _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_26__["ViewRouteComponent"], _view_driver_route_view_driver_route_component__WEBPACK_IMPORTED_MODULE_27__["ViewDriverRouteComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _import_routes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportRoutesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_20__["CKEditorModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_18__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_21__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_28__["NgxMatSelectSearchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__["GooglePlaceModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"], _agm_drawing__WEBPACK_IMPORTED_MODULE_7__["AgmDrawingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__["GalleryModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportRoutesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_import_route_import_route_component__WEBPACK_IMPORTED_MODULE_3__["ImportRouteComponent"], _routes_list_routes_list_component__WEBPACK_IMPORTED_MODULE_4__["RoutesListComponent"], _driver_route_driver_route_component__WEBPACK_IMPORTED_MODULE_5__["DriverRouteComponent"], _import_temp_import_temp_component__WEBPACK_IMPORTED_MODULE_24__["ImportTempComponent"], _import_temp_list_import_temp_list_component__WEBPACK_IMPORTED_MODULE_25__["ImportTempListComponent"], _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_26__["ViewRouteComponent"], _view_driver_route_view_driver_route_component__WEBPACK_IMPORTED_MODULE_27__["ViewDriverRouteComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _import_routes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportRoutesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_20__["CKEditorModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_18__["Ng2SmartTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_21__["DropzoneModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_28__["NgxMatSelectSearchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__["GooglePlaceModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyCzWiF1jqp_BF-jxFHEq53C23NUZ81VwVc',
              libraries: ['places', 'drawing', 'geometry']
            }), _agm_drawing__WEBPACK_IMPORTED_MODULE_7__["AgmDrawingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__["GalleryModule"].forRoot()]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "J2Cy":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/import-routes/view-driver-route/view-driver-route.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ViewDriverRouteComponent */

    /***/
    function J2Cy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewDriverRouteComponent", function () {
        return ViewDriverRouteComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var src_app_shared_interfaces_lat_lng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/interfaces/lat-lng */
      "dEO0");
      /* harmony import */


      var src_app_shared_interfaces_distance_m__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/interfaces/distance-m */
      "4iAQ");
      /* harmony import */


      var src_app_shared_interfaces_route_item_m__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/interfaces/route-item-m */
      "QST3");
      /* harmony import */


      var src_app_shared_interfaces_lat_lng_dist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/interfaces/lat-lng-dist */
      "gdyA");
      /* harmony import */


      var src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/product.service */
      "FCru");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/service/order.service */
      "4KJr");
      /* harmony import */


      var src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/service/check-permisson */
      "bFyh");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_shared_service_send_mail_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/service/send-mail.service */
      "pA0y");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/service/route.service */
      "3hEy");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["locationModal"];

      function ViewDriverRouteComponent_section_3_div_1_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var wearHouse_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", wearHouse_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", wearHouse_r8.name, " ");
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_mat_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var driver_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", driver_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](driver_r9.name);
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_div_66_agm_marker_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "agm-marker", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("markerClick", function ViewDriverRouteComponent_section_3_div_1_div_66_agm_marker_2_Template_agm_marker_markerClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var point_r11 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r12.markerClicked(point_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var point_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", point_r11.latitude)("longitude", point_r11.longtude)("iconUrl", ctx_r10.shopIcon);
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "agm-map", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewDriverRouteComponent_section_3_div_1_div_66_agm_marker_2_Template, 1, 3, "agm-marker", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r5.latitude)("longitude", ctx_r5.longitude)("zoom", ctx_r5.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.importedRouteItems);
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_div_67_tbody_16_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_div_67_tbody_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ViewDriverRouteComponent_section_3_div_1_div_67_tbody_16_td_8_Template, 2, 0, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r15.id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15.customerAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r15.selected);
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ViewDriverRouteComponent_section_3_div_1_div_67_tbody_16_Template, 9, 3, "tbody", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, "i"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, "Address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 8, "Actions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.importedRouteItems);
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_div_68_tbody_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewDriverRouteComponent_section_3_div_1_div_68_tbody_16_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var item_r18 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r19.remove(item_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewDriverRouteComponent_section_3_div_1_div_68_tbody_16_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r21.discard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r18.id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r18.customerAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 4, "Remove"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 6, "Discard"));
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ViewDriverRouteComponent_section_3_div_1_div_68_tbody_16_Template, 15, 8, "tbody", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, "i"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, "Address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 8, "Actions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.importedRouteItemsSelected);
        }
      }

      function ViewDriverRouteComponent_section_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewDriverRouteComponent_section_3_div_1_Template_input_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r22.routeName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ViewDriverRouteComponent_section_3_div_1_Template_select_change_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r24.getWearHouse($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Select Wearhouse");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ViewDriverRouteComponent_section_3_div_1_option_42_Template, 2, 2, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewDriverRouteComponent_section_3_div_1_Template_mat_select_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r25.driver = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ViewDriverRouteComponent_section_3_div_1_Template_input_keyup_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r26.onKey($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ViewDriverRouteComponent_section_3_div_1_mat_option_50_Template, 2, 2, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function ViewDriverRouteComponent_section_3_div_1_Template_input_dateChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r27.searchFromDate($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-datepicker-toggle", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "mat-datepicker", null, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewDriverRouteComponent_section_3_div_1_Template_button_click_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r28.getData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ViewDriverRouteComponent_section_3_div_1_div_66_Template, 3, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ViewDriverRouteComponent_section_3_div_1_div_67_Template, 17, 10, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ViewDriverRouteComponent_section_3_div_1_div_68_Template, 17, 10, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 24, "Route Information"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 26, "Order ID :"), " ", ctx_r1.order.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 28, "Order Date :"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 30, ctx_r1.order.date), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 32, "Points : "), " ", ctx_r1.order.routeItems.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 34, "Create Driver Route"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 36, "Name "));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.routeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 38, "Wearhouse "));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.wearHouses);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 40, "Driver :"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.drivers.length == 0)("ngModel", ctx_r1.driver);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.driversF);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 42, "Date "));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.driver || !ctx_r1.wearHouse || !ctx_r1.routeDate || !ctx_r1.routeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 44, "Create"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.order);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.selectedMarker);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedMarker);
        }
      }

      function ViewDriverRouteComponent_section_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewDriverRouteComponent_section_3_div_1_Template, 69, 46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.order);
        }
      }

      var ViewDriverRouteComponent = /*#__PURE__*/function () {
        function ViewDriverRouteComponent(productService, route, router, orderService, permisson, translate, toastr, sendMail, authService, dataService, routeService, http) {
          _classCallCheck(this, ViewDriverRouteComponent);

          this.productService = productService;
          this.route = route;
          this.router = router;
          this.orderService = orderService;
          this.permisson = permisson;
          this.translate = translate;
          this.toastr = toastr;
          this.sendMail = sendMail;
          this.authService = authService;
          this.dataService = dataService;
          this.routeService = routeService;
          this.http = http;
          this.canUpdate = false;
          this.towns = [];
          this.states = [];
          this.routeE = [];
          this.distancesE = [];
          this.importedRouteItems = [];
          this.importedRouteItemsSelected = [];
          this.uniqueNodes = [];
          this.selectedMarker = false;
          this.displayDirections = true;
          this.latitude = 30.033333;
          this.longitude = 31.233334;
          this.zoom = 11;
          this.wearHouses = [];
          this.drivers = [];
          this.driversF = [];
          this.options = {
            lat: this.latitude,
            lng: this.longitude,
            zoom: 11,
            fillColor: '#DC143C',
            draggable: true,
            editable: true,
            visible: true
          };
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
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]("en-US");
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

          this.objectComparisonFunction = function (option, value) {
            return option.id === value.id;
          };

          this.canUpdate = this.permisson.checkPermisson('"update_order":true');
        }

        _createClass(ViewDriverRouteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = parseInt(this.route.snapshot.queryParams["id"]);
            this.getOrder(this.id);
          }
        }, {
          key: "getOrder",
          value: function getOrder(id) {
            var _this = this;

            this.routeService.getRouteById(id).subscribe(function (order) {
              if (order) {
                _this.order = order;
                _this.routeItems = _this.order.routeItems;
                console.log(_this.order.routeItems);
                _this.packages = _this.order.packages;
                _this.mainRouteId = _this.order.mainRouteId;
                _this.importedRouteItems = [];

                _this.routeItems.forEach(function (item) {
                  var i = new src_app_shared_interfaces_route_item_m__WEBPACK_IMPORTED_MODULE_6__["RouteItemM"](item);

                  _this.importedRouteItems.push(i);
                });

                _this.latitude = _this.order.routeItems[0].latitude;
                _this.longitude = _this.order.routeItems[0].longtude;

                _this.getDB();

                var companyID = _this.order.companyId;

                _this.getWearHouses(companyID);

                _this.lines = _this.order.route;
                console.log(_this.lines);
                _this.points = _this.order.points;
                _this.distances = _this.order.distances;

                _this.getFillters();

                _this.getStates();
              }
            });
          }
        }, {
          key: "ConvertString",
          value: function ConvertString(value) {
            return parseFloat(value);
          }
        }, {
          key: "getDB",
          value: function getDB() {
            var _this2 = this;

            this.routeService.getAllDeliveryBoys().subscribe(function (driver) {
              _this2.drivers = driver;
              _this2.driversF = driver;
            });
          }
        }, {
          key: "searchFromDate",
          value: function searchFromDate(val) {
            //this.selectModel.reset(null);
            var mySimpleFormat = this.pipe.transform(val, "MM-dd-yyyy");
            var date = new Date(mySimpleFormat);
            console.log(date); //this. month = (date.getMonth())+1;
            // this.year  = date.getFullYear();

            this.routeDate = date.getTime();
            console.log(date.getTime());
          }
        }, {
          key: "getData",
          value: function getData() {
            console.log(this.routeDate + "," + this.driver.phone + "," + this.routeName + "," + this.wearHouse.name);
            this.optmize();
          }
        }, {
          key: "getWearHouses",
          value: function getWearHouses(id) {
            var _this3 = this;

            console.log(id);
            this.routeService.getWearHouses(id).subscribe(function (res) {
              _this3.wearHouses = res;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {// this.dataService.getStates(this.order.to.town ).subscribe(states=>{
            //   this.states = states;
            //  });
          }
        }, {
          key: "getFillters",
          value: function getFillters() {
            var _this4 = this;

            this.dataService.getTowns().subscribe(function (towns) {
              _this4.towns = towns;
            });
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
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
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
          key: "markerClicked",
          value: function markerClicked(event) {
            this.importedRouteItemsSelected = [];
            this.selectedMarker = true;
            this.importedRouteItemsSelected.push(event);
            console.log('clicked');
            console.log(event);
          }
        }, {
          key: "discard",
          value: function discard() {
            this.importedRouteItemsSelected = [];
            this.selectedMarker = false; //this.getOrder(this.id)
          }
        }, {
          key: "remove",
          value: function remove(item) {
            var _this5 = this;

            var p = this.routeItems.findIndex(function (i) {
              return i.id == item.id;
            });
            this.routeItems.forEach;
            console.log(p);
            var newRouteItems = this.routeItems.filter(function (it) {
              return it.id != item.id;
            });
            this.routeService.removerRouteItemData(this.id, newRouteItems);
            this.routeService.getAllRouteData(this.mainRouteId).subscribe(function (route) {
              var p = route.routeItems.findIndex(function (i) {
                return i.id == item.id;
              });
              var o = route.routeItems[p];
              o.routeCreated = false;

              _this5.routeService.updaeRouteData(_this5.mainRouteId, p, o);
            });
            var newPacks = this.packages.filter(function (it) {
              return it.jobId != item.id;
            });
            this.routeService.removerPackagesItemData(this.id, newPacks);
            this.importedRouteItemsSelected = [];
            this.selectedMarker = false;
          }
        }, {
          key: "getWearHouse",
          value: function getWearHouse(value) {
            var w = this.wearHouses.filter(function (e) {
              return e.id == value;
            });
            this.selectWearHouse(w[0].coordinates);
            this.wearHouse = w[0];
            console.log(this.wearHouse);
          }
        }, {
          key: "selectWearHouse",
          value: function selectWearHouse(point) {
            this.warehousP = new src_app_shared_interfaces_lat_lng_dist__WEBPACK_IMPORTED_MODULE_7__["LatLngDis"](point.latitude, point.longitude, 0);
            this.uniqueNodes = [];
            this.uniqueNodes.push(this.warehousP);
            console.log(this.warehousP);
          }
        }, {
          key: "optmize",
          value: function optmize() {
            var _this6 = this;

            console.log(this.routeItems);
            this.routeItems.forEach(function (item) {
              console.log(item);

              _this6.uniqueNodes.push(new src_app_shared_interfaces_lat_lng_dist__WEBPACK_IMPORTED_MODULE_7__["LatLngDis"](item.latitude, item.longtude, 0));
            });

            var distance = function distance(lat1, lon1, lat2, lon2) {
              var radlat1 = Math.PI * lat1 / 180;
              var radlat2 = Math.PI * lat2 / 180;
              var theta = lon1 - lon2;
              var radtheta = Math.PI * theta / 180;
              var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
              dist = Math.acos(dist);
              dist = dist * 180 / Math.PI;
              dist = dist * 60 * 1.1515;
              dist = dist * 1.609344;
              return dist;
            };

            var origLat = this.uniqueNodes[0].latitude,
                origLong = this.uniqueNodes[0].longitude;
            this.uniqueNodes.sort(function (a, b) {
              return distance(origLat, origLong, a[1], a[2]) - distance(origLat, origLong, b[1], b[2]);
            });
            var orig = new src_app_shared_interfaces_lat_lng__WEBPACK_IMPORTED_MODULE_4__["LatLng"]();
            orig.latitude = this.uniqueNodes[1].latitude;
            orig.longitude = this.uniqueNodes[1].longitude;
            var dest = new src_app_shared_interfaces_lat_lng__WEBPACK_IMPORTED_MODULE_4__["LatLng"]();
            var pos = this.uniqueNodes.length - 1;
            dest.latitude = this.uniqueNodes[pos].latitude;
            dest.longitude = this.uniqueNodes[pos].longitude;
            console.log(this.uniqueNodes);
            this.getCorrdinates(orig, dest)["finally"](function () {
              console.log(_this6.routeDate + "," + _this6.driver.phone + "," + _this6.routeName + "," + _this6.wearHouse.name);
              console.log(_this6.order);
            });
            console.log(this.uniqueNodes);
          }
        }, {
          key: "getCorrdinates",
          value: function getCorrdinates(orig, dest) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var origin, des, wp, waypts, i, item, haight, m;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      origin = new google.maps.LatLng(orig.latitude, orig.longitude);
                      des = new google.maps.LatLng(dest.latitude, dest.longitude);
                      wp = "";
                      waypts = [];

                      if (this.routeItems.length > 1) {
                        i = 0;

                        for (i = 0; i < this.routeItems.length; i++) {
                          item = this.routeItems[i];

                          if (i != this.routeItems.length - 1) {
                            haight = new google.maps.LatLng(item.latitude, item.longtude);
                            waypts.push({
                              location: haight,
                              stopover: true
                            });
                          }
                        }
                      }

                      _context.next = 7;
                      return this.getDirections(origin, des, waypts, orig, dest);

                    case 7:
                      m = _context.sent;
                      // this.routeService.updateRouteData("m100",m);
                      console.log(m);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDirections",
          value: function getDirections(origin, des, waypts, orig, dest) {
            var _this7 = this;

            return new Promise(function (resolve) {
              var directionsService = new google.maps.DirectionsService();
              var request = {
                origin: origin,
                destination: des,
                waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING
              };
              var routeE = [];
              var distancesE = [];
              var bbg = new Promise(function (resolve) {
                directionsService.route(request, function (response, status) {
                  if (status == 'OK') {// var routeData = response.routes[0].overview_path;
                    //  routeData.forEach(item=>{
                    //   item.toUrlValue()
                    //   var p ={lat:""+item.lat(),lng:""+item.lng()}
                    //    routeE.push(p)
                    //   });
                    //
                  }

                  console.log(response);
                  resolve(response);
                });
              });
              bbg.then(function (res) {
                var decodePolyline = __webpack_require__(
                /*! decode-google-map-polyline */
                "mkoN");

                var polyline = res.routes[0].overview_polyline;
                console.log(decodePolyline(polyline));
                routeE = decodePolyline(polyline);
                console.log(routeE);
                res.routes[0].legs.forEach(function (leg) {
                  var dist = new src_app_shared_interfaces_distance_m__WEBPACK_IMPORTED_MODULE_5__["DistanceM"]();
                  dist.text = leg.distance.text;
                  dist.value = leg.distance.value;
                  distancesE.push(dist);
                });
                _this7.routeE = routeE;
                _this7.distancesE = distancesE;
                var newRouteItems = [];
                var waypos = res.routes[0].waypoint_order;
                var e = 0;
                waypos.forEach(function (ite) {
                  var iem = _this7.routeItems[ite];
                  iem.routeOrder = e;
                  iem.routeId = "" + _this7.id;
                  newRouteItems.push(_this7.routeItems[ite]);
                  e++;
                });
                var latItem = _this7.routeItems[_this7.routeItems.length - 1];
                latItem.routeOrder = _this7.routeItems.length - 1;
                newRouteItems.push(latItem);
                console.log(newRouteItems);
                _this7.order.routeItems == newRouteItems;
                _this7.order.route = _this7.routeE;
                _this7.order.distances = _this7.distancesE;
                _this7.order.date = _this7.routeDate;
                _this7.order.driverId = _this7.driver.phone;
                _this7.order.wearHouseId = _this7.wearHouse.id;
                _this7.order.startPoint = orig;
                _this7.order.endPoint = dest;

                _this7.routeService.updateRouteData(_this7.order.id, _this7.order);

                _this7.updateRoute(_this7.order.id, _this7.routeE, newRouteItems); // setTimeout(()=>{  }, 2000)


                console.log(res);
              });
              resolve(_this7.order);
            });
          }
        }, {
          key: "updateRoute",
          value: function updateRoute(id, routeE, routeItems) {
            var _this8 = this;

            console.log(routeE);

            if (routeE.length > 0) {
              this.routeService.updateRoutePolyData(id, routeE);
              this.routeService.updateRouteItems(id, routeItems);
              console.log("send data");
              this.router.navigate(['/routes/view-route'], {
                queryParams: {
                  id: this.order.id
                }
              });
            } else {
              console.log("count");
              setTimeout(function () {
                _this8.updateRoute(id, routeE, routeItems);
              }, 1000);
            }
          }
        }, {
          key: "getObject",
          value: function getObject(str) {
            var _this9 = this;

            return new Promise(function (resolve) {
              _this9.http.get(str).subscribe(function (data) {
                _this9.mapdata = data;
                console.log(_this9.mapdata); // var lat = this.ConvertString(this.mapdata.results[0].geometry.location.lat);
                // var lon = this.ConvertString(this.mapdata.results[0].geometry.location.lng);
                // console.log(lat+ " , "+lon);

                console.log(_this9.mapdata);
                resolve(_this9.mapRoute);
              });
            });
          }
        }, {
          key: "calculateDistance",
          value: function calculateDistance(lat1, lon1, lat2, lon2, unit) {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var radlon1 = Math.PI * lon1 / 180;
            var radlon2 = Math.PI * lon2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;

            if (unit == "K") {
              dist = dist * 1.609344;
            }

            if (unit == "N") {
              dist = dist * 0.8684;
            }

            return dist;
          }
        }, {
          key: "onKey",
          value: function onKey(value) {
            if (value.length == 0) {
              this.driversF = this.drivers;
            }

            this.driversF = this.search(value);
          }
        }, {
          key: "search",
          value: function search(value) {
            var filter = value.toLowerCase();
            return this.drivers.filter(function (option) {
              return option.name.toLowerCase().startsWith(filter);
            });
          }
        }]);

        return ViewDriverRouteComponent;
      }();

      ViewDriverRouteComponent.ɵfac = function ViewDriverRouteComponent_Factory(t) {
        return new (t || ViewDriverRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_11__["CheckPermisson"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_send_mail_service__WEBPACK_IMPORTED_MODULE_14__["SendMailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_17__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]));
      };

      ViewDriverRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ViewDriverRouteComponent,
        selectors: [["app-view-driver-route"]],
        viewQuery: function ViewDriverRouteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.agmMap = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.LocationModal = _t.first);
          }
        },
        decls: 4,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["class", "section-b-space", 4, "ngIf"], [1, "section-b-space"], ["class", "w-full h-full", 4, "ngIf"], [1, "w-full", "h-full"], [1, "container"], [1, "row", "order-success-sec"], [1, "myy-5"], [1, "col-sm-3", "border-br"], [1, "order-detail"], [1, "col-sm-9", "border-br"], [1, "col-sm-6"], [1, "form-group", "row"], ["for", "validationCustom01", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "validationCustom01", "type", "text", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "ngModel", "ngModelChange"], ["for", "exampleFormControlSelect2", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "exampleFormControlSelect2", 1, "form-control", "digits", "col-xl-8", "col-sm-7", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", "digits", "col-xl-8", "col-sm-7", "text-center", 3, "disabled", "ngModel", "ngModelChange"], [1, "form-control", "serach", 3, "keyup"], ["matInput", "", "readonly", "", 1, "form-control", "digits", "col-xl-6", "col-sm-6", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 2, "float", "right", 3, "disabled", "click"], [1, "col-sm-12", 2, "padding-left", "0", "padding-right", "0"], ["class", "row", 4, "ngIf"], ["class", "row ", 4, "ngIf"], [3, "value"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude", "iconUrl", "markerClick", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude", "iconUrl", "markerClick"], [1, "col-lg-12", 2, "padding-right", "0", "padding-left", "0"], [1, "product-order"], [1, "col-sm-12", 2, "padding-right", "0", "padding-left", "0"], [1, "table", "cart-table", "table-responsive-xs"], [1, "table-head"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
        template: function ViewDriverRouteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewDriverRouteComponent_section_3_Template, 2, 1, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOption"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [".btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: -6rem 46.5rem;\n  border-radius: 5px;\n  letter-spacing: 1px;\n  line-height: 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 700;\n  margin-top: -5px;\n  transition: 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LWRyaXZlci1yb3V0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUNKIiwiZmlsZSI6InZpZXctZHJpdmVyLXJvdXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IC02cmVtIDQ2LjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewDriverRouteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-view-driver-route',
            templateUrl: './view-driver-route.component.html',
            styleUrls: ['./view-driver-route.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]
          }, {
            type: src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_11__["CheckPermisson"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
          }, {
            type: src_app_shared_service_send_mail_service__WEBPACK_IMPORTED_MODULE_14__["SendMailService"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]
          }, {
            type: src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_17__["RouteService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]
          }];
        }, {
          agmMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"]]
          }],
          LocationModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["locationModal"]
          }]
        });
      })();
      /***/

    },

    /***/
    "LFHh":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/import-routes/routes-list/routes-list.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: RoutesListComponent */

    /***/
    function LFHh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutesListComponent", function () {
        return RoutesListComponent;
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


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/check-permisson */
      "bFyh");
      /* harmony import */


      var src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/service/route.service */
      "3hEy");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function RoutesListComponent_tr_25_a_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoutesListComponent_tr_25_a_17_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.tempId = order_r2.orderId;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          id: a0
        };
      };

      function RoutesListComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RoutesListComponent_tr_25_a_17_Template, 3, 0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, order_r2 == null ? null : order_r2.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, order_r2 == null ? null : order_r2.date));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canDelete);
        }
      }

      function RoutesListComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data found");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var RoutesListComponent = /*#__PURE__*/function () {
        function RoutesListComponent(modalService, orderService, _domSanitizer, router, toastr, permisson, routeService) {
          _classCallCheck(this, RoutesListComponent);

          this.modalService = modalService;
          this.orderService = orderService;
          this._domSanitizer = _domSanitizer;
          this.router = router;
          this.toastr = toastr;
          this.permisson = permisson;
          this.routeService = routeService;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.orders = [];
          this.companiesList = [];
          this.shops = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US");
          this.canDelete = false;
          this.selectedTown = '';
          this.allZone = false;
          this.canDelete = this.permisson.checkPermisson('"delete_order":true');
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

          this.getDBS();
        }

        _createClass(RoutesListComponent, [{
          key: "open",
          value: function open(content) {
            var _this10 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this10.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this10.closeResult = "Dismissed ".concat(_this10.getDismissReason(reason));
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
            var _this11 = this;

            this.routeService.getAllImportedRoutes().subscribe(function (res) {
              if (_this11.isDtInitialized) {
                _this11.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this11.dtTrigger.next();
                });
              } else {
                _this11.isDtInitialized = true;

                _this11.dtTrigger.next();
              }

              _this11.orders = res;
              console.log(_this11.orders); // this.dtTrigger.next();

              _this11.rows = _this11.orders;
              _this11.srch = _toConsumableArray(_this11.rows);
            });
          }
        }, {
          key: "getDBS",
          value: function getDBS() {
            var _this12 = this;

            this.routeService.getAllDeliveryBoys().subscribe(function (dBoyes) {
              _this12.dBoys = dBoyes;
            });
          }
        }, {
          key: "onEditClient",
          value: function onEditClient(event) {}
        }, {
          key: "onEdit",
          value: function onEdit(event) {
            this.router.navigate(['/products/add-product/' + event.data.id]);
          }
        }, {
          key: "addProduct",
          value: function addProduct() {
            this.router.navigate(['/products/add-product']);
          } //Delete Client

        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this13 = this;

            console.log(this.tempId);
            this.orderService.deleteOrder(this.tempId.toString()).then(function () {
              $("#delete_order").modal("hide");

              _this13.toastr.success("تم حذف الطلب ");
            });
          }
        }]);

        return RoutesListComponent;
      }();

      RoutesListComponent.ɵfac = function RoutesListComponent_Factory(t) {
        return new (t || RoutesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__["CheckPermisson"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__["RouteService"]));
      };

      RoutesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RoutesListComponent,
        selectors: [["app-routes-list"]],
        viewQuery: function RoutesListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 48,
        vars: 28,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [1, "text-right"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "delete_order", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "col-6"], [1, "btn", "btn-primary", "continue-btn", 3, "click"], ["data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], ["routerLink", "/import/view-route", 3, "queryParams"], [1, "dropdown", "dropdown-action"], ["data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], [1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "data-toggle", "modal", "data-target", "#delete_order", 3, "click", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#delete_order", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function RoutesListComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RoutesListComponent_tr_25_Template, 18, 10, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RoutesListComponent_tr_26_Template, 4, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoutesListComponent_Template_a_click_41_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 12, "Route ID"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 14, "Date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 16, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 18, "Action"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 20, "Delete Order"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 22, "Are you sure want to delete?"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 24, "Delete"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 26, "Cancel"));
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoutesListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-routes-list',
            templateUrl: './routes-list.component.html',
            styleUrls: ['./routes-list.component.scss']
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
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
          }, {
            type: src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__["CheckPermisson"]
          }, {
            type: src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__["RouteService"]
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
    "Mw9p":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/import-routes/import-temp/import-temp.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ImportTempComponent */

    /***/
    function Mw9p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImportTempComponent", function () {
        return ImportTempComponent;
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


      var src_app_shared_interfaces_item_import_temp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/interfaces/item-import_temp */
      "hdPb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/route.service */
      "3hEy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["csvReader"];

      function ImportTempComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Name is required."), " ");
        }
      }

      function ImportTempComponent_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r15 = ctx.$implicit;
          var i_r16 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15, " ");
        }
      }

      function ImportTempComponent_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;
          var i_r18 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17, " ");
        }
      }

      function ImportTempComponent_option_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r19 = ctx.$implicit;
          var i_r20 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19, " ");
        }
      }

      function ImportTempComponent_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r21 = ctx.$implicit;
          var i_r22 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r21, " ");
        }
      }

      function ImportTempComponent_option_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;
          var i_r24 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r23, " ");
        }
      }

      function ImportTempComponent_option_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r25 = ctx.$implicit;
          var i_r26 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r25, " ");
        }
      }

      function ImportTempComponent_option_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r27 = ctx.$implicit;
          var i_r28 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r27, " ");
        }
      }

      function ImportTempComponent_option_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;
          var i_r30 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r29, " ");
        }
      }

      function ImportTempComponent_option_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r31 = ctx.$implicit;
          var i_r32 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r31, " ");
        }
      }

      function ImportTempComponent_option_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r33 = ctx.$implicit;
          var i_r34 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r33, " ");
        }
      }

      function ImportTempComponent_option_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r35 = ctx.$implicit;
          var i_r36 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r35, " ");
        }
      }

      function ImportTempComponent_option_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r37 = ctx.$implicit;
          var i_r38 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r37, " ");
        }
      }

      function ImportTempComponent_option_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r39 = ctx.$implicit;
          var i_r40 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r39, " ");
        }
      }

      var ImportTempComponent = /*#__PURE__*/function () {
        function ImportTempComponent(formBuilder, router, route, toastr, routeService) {
          _classCallCheck(this, ImportTempComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.route = route;
          this.toastr = toastr;
          this.routeService = routeService;
          this.iRoute = new src_app_shared_interfaces_item_import_temp__WEBPACK_IMPORTED_MODULE_2__["ItemImportTemp"]();
          this.headers = [];
          this.records = [];
          this.createAccountForm();
        }

        _createClass(ImportTempComponent, [{
          key: "uploadListener",
          value: function uploadListener($event) {
            var _this14 = this;

            var text = [];
            var files = $event.srcElement.files;

            if (this.isValidCSVFile(files[0])) {
              var input = $event.target;
              var reader = new FileReader();
              reader.readAsText(input.files[0]);

              reader.onload = function () {
                var csvData = reader.result;
                var csvRecordsArray = csvData.split(/\r\n|\n/);
                _this14.headers = _this14.getHeaderArray(csvRecordsArray);
                console.log(_this14.headers);
                _this14.records = _this14.getDataRecordsArrayFromCSVFile(csvRecordsArray, _this14.headers.length);
              };

              reader.onerror = function () {
                console.log('error is occured while reading file!');
              };
            } else {
              alert("Please import valid .csv file.");
              this.fileReset();
            }
          }
        }, {
          key: "getDataRecordsArrayFromCSVFile",
          value: function getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength) {
            var csvArr = [];

            for (var i = 1; i < csvRecordsArray.length; i++) {
              var curruntRecord = csvRecordsArray[i].split(',');
              /*
              if (curruntRecord.length == headerLength) {
                let csvRecord: CSVRecord = new CSVRecord();
                csvRecord.id = curruntRecord[0].trim();
                csvRecord.firstName = curruntRecord[1].trim();
                csvRecord.lastName = curruntRecord[2].trim();
                csvRecord.age = curruntRecord[3].trim();
                csvRecord.position = curruntRecord[4].trim();
                csvRecord.mobile = curruntRecord[5].trim();
                csvArr.push(csvRecord);
              }
              */
            }

            return csvArr;
          }
        }, {
          key: "isValidCSVFile",
          value: function isValidCSVFile(file) {
            return file.name.endsWith(".csv");
          }
        }, {
          key: "getHeaderArray",
          value: function getHeaderArray(csvRecordsArr) {
            var headers = csvRecordsArr[0].split(',');
            var headerArray = [];

            for (var j = 0; j < headers.length; j++) {
              headerArray.push(headers[j]);
            }

            return headerArray;
          }
        }, {
          key: "fileReset",
          value: function fileReset() {
            this.csvReader.nativeElement.value = "";
            this.records = [];
          }
        }, {
          key: "createAccountForm",
          value: function createAccountForm() {
            this.tempForm = this.formBuilder.group({
              name: [this.iRoute && this.iRoute.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              field1: [this.iRoute && this.iRoute.field1 || -1],
              field2: [this.iRoute && this.iRoute.field2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              field3: [this.iRoute && this.iRoute.field3 || -1],
              field4: [this.iRoute && this.iRoute.field4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              field5: [this.iRoute && this.iRoute.field5 || -1],
              field6: [this.iRoute && this.iRoute.field6 || -1],
              field7: [this.iRoute && this.iRoute.field7, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              field8: [this.iRoute && this.iRoute.field8, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              field9: [this.iRoute && this.iRoute.field9, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              field10: [this.iRoute && this.iRoute.field10 || -1],
              field11: [this.iRoute && this.iRoute.field11 || -1],
              field12: [this.iRoute && this.iRoute.field12 || -1],
              field13: [this.iRoute && this.iRoute.field13 || -1]
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.id = this.route.snapshot.queryParams["id"];

            if (this.id) {
              this.mode = 'edit';
              this.routeService.getRouteTemp(this.id).subscribe(function (temp) {
                _this15.iRoute = temp;
                console.log(_this15.iRoute);

                _this15.createAccountForm();
              });
            } else {
              this.mode = 'add';
            }
          }
        }, {
          key: "onAddTemp",
          value: function onAddTemp() {
            if (!this.tempForm.valid) {
              this.toastr.error("", "Please enter mandatory field!");
            } else {
              this.iRoute.name = this.tempForm.value.name;
              this.iRoute.field1 = +this.tempForm.value.field1;
              this.iRoute.field2 = +this.tempForm.value.field2;
              this.iRoute.field3 = +this.tempForm.value.field3;
              this.iRoute.field4 = +this.tempForm.value.field4;
              this.iRoute.field5 = +this.tempForm.value.field5;
              this.iRoute.field6 = +this.tempForm.value.field6;
              this.iRoute.field7 = +this.tempForm.value.field7;
              this.iRoute.field8 = +this.tempForm.value.field8;
              this.iRoute.field9 = +this.tempForm.value.field9;
              this.iRoute.field10 = +this.tempForm.value.field10;
              this.iRoute.field11 = +this.tempForm.value.field11;
              this.iRoute.field12 = +this.tempForm.value.field12;
              this.iRoute.field13 = +this.tempForm.value.field13;
              this.iRoute.id = this.createId();
              console.log(this.iRoute);
              this.routeService.updateRouteTemp(this.iRoute);
              this.toastr.success("Temp Created ");
              this.router.navigate(['/import/temp-list']);
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
        }]);

        return ImportTempComponent;
      }();

      ImportTempComponent.ɵfac = function ImportTempComponent_Factory(t) {
        return new (t || ImportTempComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"]));
      };

      ImportTempComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImportTempComponent,
        selectors: [["app-import-temp"]],
        viewQuery: function ImportTempComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.csvReader = _t.first);
          }
        },
        decls: 134,
        vars: 67,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "row", "product-adding"], [1, "col-xl-7"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "add-product-form"], [1, "form-group", "row"], [1, "col-xl-3", "col-sm-4"], [1, "col-xl-8", "col-sm-7", "pl-0", "description-sm"], ["type", "file", "name", "Upload CSV", "id", "txtFileUpload", "accept", ".csv", 1, "form-control", 3, "change"], ["csvReader", ""], ["for", "validationCustom01", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "validationCustom01", "type", "text", "required", "", 1, "form-control", "col-xl-8", "col-sm-7", 3, "formControl"], ["class", "text text-danger", 4, "ngIf"], ["for", "exampleFormControlSelect2", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "exampleFormControlSelect2", "formControlName", "field1", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "exampleFormControlSelect2", "formControlName", "field2", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field3", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field4", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field5", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field6", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field7", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field8", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field9", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field10", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field11", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field12", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], ["id", "exampleFormControlSelect2", "formControlName", "field13", 1, "form-control", "digits", "col-xl-8", "col-sm-7"], [1, "form-group", "row", "mb-0"], [1, "product-buttons", "col-sm-8", "offset-xl-3", "offset-sm-4"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-light"], [1, "text", "text-danger"], [3, "value"]],
        template: function ImportTempComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ImportTempComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onAddTemp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImportTempComponent_Template_input_change_14_listener($event) {
              return ctx.uploadListener($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ImportTempComponent_div_21_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ImportTempComponent_option_29_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ImportTempComponent_option_37_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ImportTempComponent_option_45_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ImportTempComponent_option_53_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ImportTempComponent_option_61_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ImportTempComponent_option_69_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ImportTempComponent_option_77_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ImportTempComponent_option_85_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ImportTempComponent_option_93_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, ImportTempComponent_option_101_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](107, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ImportTempComponent_option_109_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](115, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ImportTempComponent_option_117_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](123, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, ImportTempComponent_option_125_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportTempComponent_Template_button_click_128_listener() {
              return ctx.onAddTemp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](130, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "translate");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tempForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 33, "File :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 35, "Templete Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.tempForm.controls["name"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tempForm.controls.name.touched && (ctx.tempForm.controls.name.errors == null ? null : ctx.tempForm.controls.name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 37, "Id"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 39, "First Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 41, "Last Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 43, "Address "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 45, "Postal Code "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 47, "Appt No. "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 49, "Phone "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 51, "Type "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 53, "Discription "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 55, "Items Count "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](107, 57, "Collection Amount "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](115, 59, "Delivery Date "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](123, 61, "Barcode "));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](130, 63, "Add"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](133, 65, "Discard"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: [".mat-progress-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbXBvcnQtdGVtcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0FBQ0oiLCJmaWxlIjoiaW1wb3J0LXRlbXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXByb2dyZXNzLWJhcntcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB0b3A6MHB4O1xuICAgfVxuICAgIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportTempComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-import-temp',
            templateUrl: './import-temp.component.html',
            styleUrls: ['./import-temp.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"]
          }];
        }, {
          csvReader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['csvReader']
          }]
        });
      })();
      /***/

    },

    /***/
    "QST3":
    /*!***************************************************!*\
      !*** ./src/app/shared/interfaces/route-item-m.ts ***!
      \***************************************************/

    /*! exports provided: RouteItemM */

    /***/
    function QST3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouteItemM", function () {
        return RouteItemM;
      });

      var RouteItemM = function RouteItemM(routeItem) {
        _classCallCheck(this, RouteItemM);

        this.id = "";
        this.routeOrder = 0;
        this.customerPhone = "";
        this.customerName = "";
        this.apptNo = "-";
        this.customerAddress = "";
        this.zipCode = "";
        this.longtude = 0.0;
        this.latitude = 0.0;
        this.startTime = 0;
        this.endTime = 0;
        this.status = 0;
        this.routeId = "";
        this.driverRouteId = "";
        this.jops = 0;
        this.routeCreated = false;
        this.selected = false;
        this.id = routeItem.id;
        this.routeOrder = routeItem.routeOrder;
        this.customerPhone = routeItem.customerPhone;
        this.customerName = routeItem.customerName;
        this.apptNo = routeItem.apptNo;
        this.customerAddress = routeItem.customerAddress;
        this.zipCode = routeItem.zipCode;
        this.longtude = routeItem.longtude;
        this.latitude = routeItem.latitude;
        this.startTime = routeItem.startTime;
        this.endTime = routeItem.endTime;
        this.status = routeItem.status;
        this.routeId = routeItem.routeId;
        this.driverRouteId = routeItem.driverRouteId;
        this.jops = routeItem.jops;
        this.date = routeItem.date;
        this.routeCreated = routeItem.routeCreated;
        this.selected = false;
      };
      /***/

    },

    /***/
    "WS9w":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/import-routes/import-route/import-route.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ImportRouteComponent */

    /***/
    function WS9w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImportRouteComponent", function () {
        return ImportRouteComponent;
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


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_interfaces_route_item_import__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/interfaces/route-item-import */
      "iFmK");
      /* harmony import */


      var src_app_shared_interfaces_rout_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/interfaces/rout-item */
      "XVTn");
      /* harmony import */


      var src_app_shared_interfaces_package__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/interfaces/package */
      "YSAg");
      /* harmony import */


      var src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/route.service */
      "3hEy");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["csvReader"];

      function ImportRouteComponent_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var temp_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", temp_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", temp_r6.name, " ");
        }
      }

      function ImportRouteComponent_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var company_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", company_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r7.name, " ");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "left": a0
        };
      };

      function ImportRouteComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-bar", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.progress);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r3.progress + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.progress, "%");
        }
      }

      function ImportRouteComponent_tr_99_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r9 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.item_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.first_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.last_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.postal_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.appt_no);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.discription);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.items_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.collection_amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.delivery_date);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.barcode);
        }
      }

      function ImportRouteComponent_tr_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 35);

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

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      var incr = 1;

      var ImportRouteComponent = /*#__PURE__*/function () {
        function ImportRouteComponent(routeService, http, router, toastr) {
          var _this16 = this;

          _classCallCheck(this, ImportRouteComponent);

          this.routeService = routeService;
          this.http = http;
          this.router = router;
          this.toastr = toastr;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.records = [];
          this.packs = [];
          this.completeRecords = [];
          this.completeRecordAddress = [];
          this.isSelectedTemp = false;
          this.temps = [];
          this.csvArr = [];
          this.progress = 0;
          this.uploading = false;
          this.i = 1;
          this.routeId = "";
          this.companies = [];
          this.routeService.getAllTemps().subscribe(function (res) {
            _this16.temps = res;
          });
          this.routeService.getAllCompanies().subscribe(function (res) {
            _this16.companies = res;
          });
          this.http.get('https://api.mapbox.com/geocoding/v5/mapbox.places/13%20DON%20HEAD%20VILLAGE%20BLV,RICHMOND%20HILL,ON%20L4C7N3.json?access_token=pk.eyJ1Ijoic2hvcHB5ODMiLCJhIjoiY2t5aXRwdTNrMmZzcjJ2cGJxb2NzY3VnNCJ9.0JG-laH-m_6zPT-aTF-KFQ').subscribe(function (data) {
            _this16.mapdata = data;
            console.log(_this16.mapdata.features[0].center[0] + " , " + _this16.mapdata.features[0].center[1]);
          });
        }

        _createClass(ImportRouteComponent, [{
          key: "uploadListener",
          value: function uploadListener($event) {
            var _this17 = this;

            var text = [];
            var files = $event.srcElement.files;

            if (this.isValidCSVFile(files[0])) {
              var input = $event.target;
              var reader = new FileReader();
              reader.readAsText(input.files[0]);

              reader.onload = function () {
                var csvData = reader.result;
                var csvRecordsArray = csvData.split(/\r\n|\n/);

                var headersRow = _this17.getHeaderArray(csvRecordsArray);

                console.log(headersRow);
                _this17.records = _this17.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
                console.log(_this17.records);

                _this17.viewData();
              };

              reader.onerror = function () {
                console.log('error is occured while reading file!');
              };
            } else {
              alert("Please import valid .csv file.");
              this.fileReset();
            }
          }
        }, {
          key: "viewData",
          value: function viewData() {
            var _this18 = this;

            if (this.isDtInitialized) {
              this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();

                _this18.dtTrigger.next();
              });
            } else {
              this.isDtInitialized = true;
              this.dtTrigger.next();
            } // this.dtTrigger.next();

          }
        }, {
          key: "getDataRecordsArrayFromCSVFile",
          value: function getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength) {
            var csvArr = [];
            var re = /\"/gi;

            for (var i = 1; i < csvRecordsArray.length; i++) {
              var cv = csvRecordsArray[i];
              var curruntRecord = csvRecordsArray[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

              if (curruntRecord.length == headerLength) {
                var csvRecord = new src_app_shared_interfaces_route_item_import__WEBPACK_IMPORTED_MODULE_4__["RouteItemImport"]();
                csvRecord.item_id = curruntRecord[this.selectedTemp.field1].trim();
                csvRecord.first_name = curruntRecord[this.selectedTemp.field2].trim();
                csvRecord.last_name = curruntRecord[this.selectedTemp.field3].trim();
                csvRecord.address = curruntRecord[this.selectedTemp.field4].trim().replace(re, "");
                csvRecord.postal_code = curruntRecord[this.selectedTemp.field5].trim();
                csvRecord.appt_no = curruntRecord[this.selectedTemp.field6].trim();
                csvRecord.phone = curruntRecord[this.selectedTemp.field7].trim();
                csvRecord.type = curruntRecord[this.selectedTemp.field8].trim();
                csvRecord.discription = curruntRecord[this.selectedTemp.field9].trim();
                csvRecord.items_count = curruntRecord[this.selectedTemp.field10].trim();
                csvRecord.collection_amount = curruntRecord[this.selectedTemp.field11].trim();
                csvRecord.delivery_date = curruntRecord[this.selectedTemp.field12].trim();
                csvRecord.barcode = curruntRecord[this.selectedTemp.field13].trim();
                csvArr.push(csvRecord);
              }
            }

            return csvArr;
          }
        }, {
          key: "isValidCSVFile",
          value: function isValidCSVFile(file) {
            return file.name.endsWith(".csv");
          }
        }, {
          key: "getHeaderArray",
          value: function getHeaderArray(csvRecordsArr) {
            var headers = csvRecordsArr[0].split(',');
            var headerArray = [];

            for (var j = 0; j < headers.length; j++) {
              headerArray.push(headers[j]);
            }

            return headerArray;
          }
        }, {
          key: "fileReset",
          value: function fileReset() {
            this.csvReader.nativeElement.value = "";
            this.records = [];
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
          }
        }, {
          key: "tempSelected",
          value: function tempSelected() {
            this.isSelectedTemp = true;
          }
        }, {
          key: "manageProgress",
          value: function manageProgress(ind) {
            if (this.progress === 100) {
              this.progress = 100;
            } else {
              this.progress = this.progress + ind;
            }
          }
        }, {
          key: "onAddData",
          value: function onAddData() {
            var _this19 = this;

            this.uploading = true;
            this.routeId = this.createId();
            var i = 0;

            var _iterator = _createForOfIteratorHelper(this.records),
                _step;

            try {
              var _loop = function _loop() {
                var item = _step.value;
                isPresent = _this19.completeRecords.some(function (el) {
                  return el.customerAddress === item.address;
                });
                console.log(isPresent);

                if (isPresent) {
                  itm = _this19.getIdByFilter(item.address);

                  var index = _this19.completeRecords.findIndex(function (x) {
                    return x.id === itm.id;
                  });

                  var jcount = itm.jops + 1;
                  pack = new src_app_shared_interfaces_package__WEBPACK_IMPORTED_MODULE_6__["Package"]();
                  pack.jobId = itm.id;
                  pack.collectionAmount = +item.collection_amount;
                  pack.discription = item.discription;
                  pack.packageId = itm.id + "-" + jcount;
                  pack.routeId = _this19.routeId;
                  pack.barcode = item.barcode;

                  _this19.packs.push(pack);

                  _this19.completeRecords[index].jops = _this19.completeRecords[index].jops + 1;
                  console.log(pack);
                } else {
                  var jopId = _this19.createId();

                  jop = new src_app_shared_interfaces_rout_item__WEBPACK_IMPORTED_MODULE_5__["RouteItem"]();
                  jop.id = jopId;
                  jop.customerName = item.first_name + " " + item.last_name;
                  jop.apptNo = item.appt_no;
                  jop.customerAddress = item.address;
                  jop.customerPhone = item.phone;
                  jop.date = item.delivery_date;
                  jop.jops = 1;
                  jop.routeId = _this19.routeId;
                  jop.zipCode = item.postal_code;

                  _this19.completeRecords.push(jop);

                  pack = new src_app_shared_interfaces_package__WEBPACK_IMPORTED_MODULE_6__["Package"]();
                  pack.jobId = jopId;
                  pack.collectionAmount = +item.collection_amount;
                  pack.discription = item.discription;
                  pack.packageId = jopId + "-" + 1;
                  pack.routeId = _this19.routeId;
                  pack.barcode = item.barcode;

                  _this19.packs.push(pack);

                  console.log(pack);
                  console.log(jop);
                }

                i++;

                if (i >= _this19.records.length) {
                  _this19.AddData();
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var isPresent;
                var itm;
                var pack;
                var jop;
                var pack;

                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "getCorrdinates",
          value: function getCorrdinates() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _iterator2, _step2, item, address, str, link, cmItem, value;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _iterator2 = _createForOfIteratorHelper(this.completeRecords);
                      _context2.prev = 1;

                      _iterator2.s();

                    case 3:
                      if ((_step2 = _iterator2.n()).done) {
                        _context2.next = 16;
                        break;
                      }

                      item = _step2.value;
                      address = item.customerAddress;
                      str = encodeURIComponent(address);
                      link = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + str + '&key=AIzaSyABicX5EtZYK6oAmjbKp0FnaqgC3C1gjto';
                      _context2.next = 10;
                      return this.getObject(link, item);

                    case 10:
                      cmItem = _context2.sent;
                      this.completeRecordAddress.push(cmItem);
                      value = Math.floor(this.i / this.completeRecords.length);
                      this.manageProgress(value);

                    case 14:
                      _context2.next = 3;
                      break;

                    case 16:
                      _context2.next = 21;
                      break;

                    case 18:
                      _context2.prev = 18;
                      _context2.t0 = _context2["catch"](1);

                      _iterator2.e(_context2.t0);

                    case 21:
                      _context2.prev = 21;

                      _iterator2.f();

                      return _context2.finish(21);

                    case 24:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[1, 18, 21, 24]]);
            }));
          }
        }, {
          key: "getIdByFilter",
          value: function getIdByFilter(address) {
            var b = this.completeRecords.filter(function (x) {
              return x.customerAddress === address;
            });
            return b[0];
          }
        }, {
          key: "getObject",
          value: function getObject(str, item) {
            var _this20 = this;

            return new Promise(function (resolve) {
              _this20.http.get(str).subscribe(function (data) {
                _this20.mapdata = data;
                console.log(_this20.mapdata);

                var lat = _this20.ConvertString(_this20.mapdata.results[0].geometry.location.lat);

                var lon = _this20.ConvertString(_this20.mapdata.results[0].geometry.location.lng);

                console.log(lat + " , " + lon);
                item.latitude = lat;
                item.longtude = lon;
                _this20.i++;
                console.log(item.latitude + " , " + item.longtude);
                console.log(_this20.mapdata);
                resolve(item);
              });
            });
          }
        }, {
          key: "AddData",
          value: function AddData() {
            var _this21 = this;

            this.getCorrdinates()["finally"](function () {
              var routData = {
                id: _this21.routeId,
                name: _this21.routeName,
                companyId: _this21.selectedCompany,
                routeItems: _this21.completeRecordAddress,
                packages: _this21.packs
              };
              var routCompany = {
                id: _this21.routeId,
                companyId: _this21.selectedCompany,
                packages: _this21.records
              };

              _this21.routeService.addNewRoute(routData);

              _this21.routeService.addCompanyFullRoute(routCompany);

              _this21.toastr.success("Temp Created "); //this.router.navigate(['/import/routes-list'])


              _this21.router.navigate(['/import/view-route'], {
                queryParams: {
                  id: _this21.routeId
                }
              });
            });
          }
        }, {
          key: "ConvertString",
          value: function ConvertString(value) {
            return parseFloat(value);
          }
        }, {
          key: "companySelected",
          value: function companySelected() {
            console.log(this.selectedCompany);
          }
        }, {
          key: "createId",
          value: function createId() {
            var randomId = Math.floor(Math.random() * new Date().getTime());
            var id = randomId + "";

            if (id === "1") {
              id = randomId + "";
            }

            return id;
          }
        }]);

        return ImportRouteComponent;
      }();

      ImportRouteComponent.ɵfac = function ImportRouteComponent_Factory(t) {
        return new (t || ImportRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]));
      };

      ImportRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ImportRouteComponent,
        selectors: [["app-import-route"]],
        viewQuery: function ImportRouteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.csvReader = _t.first);
          }
        },
        decls: 101,
        vars: 75,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "row", "product-adding"], [1, "col-xl-7"], [1, "needs-validation", 3, "ngSubmit"], [1, "add-product-form"], [1, "form-group", "row"], ["for", "validationCustom01", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "validationCustom01", "type", "text", 1, "form-control", "col-xl-8", "col-sm-7", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "exampleFormControlSelect2", 1, "col-xl-3", "col-sm-4", "mb-0"], ["id", "exampleFormControlSelect2", 1, "form-control", "digits", "col-xl-8", "col-sm-7", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["value", ""], [1, "col-xl-3", "col-sm-4"], [1, "col-xl-8", "col-sm-7", "pl-0", "description-sm"], ["type", "file", "name", "Upload CSV", "id", "txtFileUpload", "accept", ".csv", 1, "form-control", 3, "disabled", "change"], ["csvReader", ""], ["style", "position: relative ;margin-bottom: 10px;", 4, "ngIf"], [1, "form-group", "row", "mb-0"], [1, "product-buttons", "col-sm-8", "offset-xl-3", "offset-sm-4"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-light"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngValue"], [2, "position", "relative", "margin-bottom", "10px"], ["mode", "determinate", 3, "value"], [2, "position", "absolute", "top", "0.5em", 3, "ngStyle"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function ImportRouteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ImportRouteComponent_Template_form_ngSubmit_7_listener() {
              return ctx.AddData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ImportRouteComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.routeName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ImportRouteComponent_Template_select_ngModelChange_22_listener($event) {
              return ctx.selectedTemp = $event;
            })("change", function ImportRouteComponent_Template_select_change_22_listener() {
              return ctx.tempSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ImportRouteComponent_option_23_Template, 2, 2, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ImportRouteComponent_Template_select_ngModelChange_28_listener($event) {
              return ctx.selectedCompany = $event;
            })("change", function ImportRouteComponent_Template_select_change_28_listener() {
              return ctx.companySelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Select Compant");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ImportRouteComponent_option_31_Template, 2, 2, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImportRouteComponent_Template_input_change_37_listener($event) {
              return ctx.uploadListener($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ImportRouteComponent_div_39_Template, 4, 5, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportRouteComponent_Template_button_click_42_listener() {
              return ctx.onAddData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "table", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](91, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](97, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, ImportRouteComponent_tr_99_Template, 29, 14, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, ImportRouteComponent_tr_100_Template, 5, 3, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 34, " Route Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.routeName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](72, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 36, " Select Template"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedTemp)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](73, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.temps);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 38, "Company "));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedCompany)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](74, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companies);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 40, "File :"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isSelectedTemp);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uploading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.uploading || !ctx.selectedCompany || !ctx.selectedTemp || !ctx.routeName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 42, "Add"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 44, "Discard"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 46, "Id"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 48, "First Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 50, "Last Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 52, "Address"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 54, "Postal Code"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 56, "Appt No."));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 58, "Phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 60, "Type"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 62, "Discription"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 64, "Items Qty"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](91, 66, "Amount"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 68, "Delivery Date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](97, 70, "Barcode"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.records);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.records.length === 0);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
        styles: ["mat-progress-bar[_ngcontent-%COMP%] {\n  height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbXBvcnQtcm91dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiaW1wb3J0LXJvdXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXByb2dyZXNzLWJhciB7XG4gICAgaGVpZ2h0OiAyZW07XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportRouteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-import-route',
            templateUrl: './import-route.component.html',
            styleUrls: ['./import-route.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
              "static": false
            }]
          }],
          csvReader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['csvReader']
          }]
        });
      })();
      /***/

    },

    /***/
    "XVTn":
    /*!************************************************!*\
      !*** ./src/app/shared/interfaces/rout-item.ts ***!
      \************************************************/

    /*! exports provided: RouteItem */

    /***/
    function XVTn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouteItem", function () {
        return RouteItem;
      });

      var RouteItem = function RouteItem() {
        _classCallCheck(this, RouteItem);

        this.id = "";
        this.routeOrder = 0;
        this.customerPhone = "";
        this.customerName = "";
        this.apptNo = "-";
        this.customerAddress = "";
        this.zipCode = "";
        this.longtude = 0.0;
        this.latitude = 0.0;
        this.startTime = 0;
        this.endTime = 0;
        this.status = 0;
        this.routeId = "";
        this.driverRouteId = "";
        this.jops = 0;
        this.routeCreated = false;
      };
      /***/

    },

    /***/
    "YSAg":
    /*!**********************************************!*\
      !*** ./src/app/shared/interfaces/package.ts ***!
      \**********************************************/

    /*! exports provided: Package */

    /***/
    function YSAg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Package", function () {
        return Package;
      });

      var Package = function Package() {
        _classCallCheck(this, Package);

        this.routeId = "";
        this.driverRouteId = "";
        this.jobId = "";
        this.packageId = "";
        this.routeOrder = 0;
        this.status = 0;
        this.collectionAmount = 0.0;
        this.notes = "";
        this.signed = false;
        this.proofed = false;
        this.proofedImage = "";
        this.discription = "";
        this.barcode = "";
        this.pos = 0;
      };
      /***/

    },

    /***/
    "aGsA":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/import-routes/import-temp-list/import-temp-list.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ImportTempListComponent */

    /***/
    function aGsA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImportTempListComponent", function () {
        return ImportTempListComponent;
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


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/check-permisson */
      "bFyh");
      /* harmony import */


      var src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/service/route.service */
      "3hEy");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ImportTempListComponent_tr_23_a_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportTempListComponent_tr_23_a_11_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var temp_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.tempId = temp_r2.id;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ImportTempListComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ImportTempListComponent_tr_23_a_11_Template, 3, 0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var temp_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](temp_r2 == null ? null : temp_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canDelete);
        }
      }

      function ImportTempListComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data found");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ImportTempListComponent = /*#__PURE__*/function () {
        function ImportTempListComponent(modalService, orderService, _domSanitizer, router, toastr, permisson, routeService) {
          _classCallCheck(this, ImportTempListComponent);

          this.modalService = modalService;
          this.orderService = orderService;
          this._domSanitizer = _domSanitizer;
          this.router = router;
          this.toastr = toastr;
          this.permisson = permisson;
          this.routeService = routeService;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.temps = [];
          this.companiesList = [];
          this.shops = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]("en-US");
          this.canDelete = false;
          this.selectedTown = '';
          this.allZone = false;
          this.getDBS();
        }

        _createClass(ImportTempListComponent, [{
          key: "open",
          value: function open(content) {
            var _this22 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this22.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this22.closeResult = "Dismissed ".concat(_this22.getDismissReason(reason));
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
            var _this23 = this;

            this.routeService.getAllTemps().subscribe(function (res) {
              if (_this23.isDtInitialized) {
                _this23.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this23.dtTrigger.next();
                });
              } else {
                _this23.isDtInitialized = true;

                _this23.dtTrigger.next();
              }

              _this23.temps = res;
              console.log(_this23.temps); // this.dtTrigger.next();

              _this23.rows = _this23.temps;
              _this23.srch = _toConsumableArray(_this23.rows);
            });
          }
        }, {
          key: "getDBS",
          value: function getDBS() {
            var _this24 = this;

            this.routeService.getAllDeliveryBoys().subscribe(function (dBoyes) {
              _this24.dBoys = dBoyes;
            });
          }
        }, {
          key: "onEditClient",
          value: function onEditClient(event) {}
        }, {
          key: "onEdit",
          value: function onEdit(event) {
            this.router.navigate(['/products/add-product/' + event.data.id]);
          }
        }, {
          key: "addProduct",
          value: function addProduct() {
            this.router.navigate(['/products/add-product']);
          } //Delete Client

        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this25 = this;

            console.log(this.tempId);
            this.orderService.deleteOrder(this.tempId.toString()).then(function () {
              $("#delete_order").modal("hide");

              _this25.toastr.success("تم حذف الطلب ");
            });
          }
        }]);

        return ImportTempListComponent;
      }();

      ImportTempListComponent.ɵfac = function ImportTempListComponent_Factory(t) {
        return new (t || ImportTempListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__["CheckPermisson"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__["RouteService"]));
      };

      ImportTempListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ImportTempListComponent,
        selectors: [["app-import-temp-list"]],
        viewQuery: function ImportTempListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 46,
        vars: 25,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "btn-popup", "pull-right"], ["type", "button", "routerLink", "/import/add-temp", 1, "btn", "btn-primary"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [1, "text-right"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "delete_order", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "col-6"], [1, "btn", "btn-primary", "continue-btn", 3, "click"], ["data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], [1, "dropdown", "dropdown-action"], ["data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], [1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "data-toggle", "modal", "data-target", "#delete_order", 3, "click", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#delete_order", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function ImportTempListComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ImportTempListComponent_tr_23_Template, 12, 3, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ImportTempListComponent_tr_24_Template, 4, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImportTempListComponent_Template_a_click_39_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, "Add New Templete"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 13, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 15, "Action"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.temps);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.temps.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 17, "Delete Templete"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 19, "Are you sure want to delete?"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 21, "Delete"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 23, "Cancel"));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBvcnQtdGVtcC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportTempListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-import-temp-list',
            templateUrl: './import-temp-list.component.html',
            styleUrls: ['./import-temp-list.component.scss']
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
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
          }, {
            type: src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__["CheckPermisson"]
          }, {
            type: src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__["RouteService"]
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
    "bv9b":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js ***!
      \******************************************************************************/

    /*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */

    /***/
    function bv9b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function () {
        return MAT_PROGRESS_BAR_LOCATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function () {
        return MAT_PROGRESS_BAR_LOCATION_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressBar", function () {
        return MatProgressBar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function () {
        return MatProgressBarModule;
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


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatProgressBar.

      /** @docs-private */


      var _c0 = ["primaryValueBar"];

      var MatProgressBarBase = function MatProgressBarBase(_elementRef) {
        _classCallCheck(this, MatProgressBarBase);

        this._elementRef = _elementRef;
      };

      var _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
      /**
       * Injection token used to provide the current location to `MatProgressBar`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', {
        providedIn: 'root',
        factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
      });
      /** @docs-private */

      function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
        var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** Counter used to generate unique IDs for progress bars. */


      var progressbarId = 0;
      /**
       * `<mat-progress-bar>` component.
       */

      var MatProgressBar = /*#__PURE__*/function (_MatProgressBarMixinB) {
        _inherits(MatProgressBar, _MatProgressBarMixinB);

        var _super = _createSuper(MatProgressBar);

        function MatProgressBar(_elementRef, _ngZone, _animationMode,
        /**
         * @deprecated `location` parameter to be made required.
         * @breaking-change 8.0.0
         */
        location) {
          var _this26;

          _classCallCheck(this, MatProgressBar);

          _this26 = _super.call(this, _elementRef);
          _this26._elementRef = _elementRef;
          _this26._ngZone = _ngZone;
          _this26._animationMode = _animationMode;
          /** Flag that indicates whether NoopAnimations mode is set to true. */

          _this26._isNoopAnimation = false;
          _this26._value = 0;
          _this26._bufferValue = 0;
          /**
           * Event emitted when animation of the primary progress bar completes. This event will not
           * be emitted when animations are disabled, nor will it be emitted for modes with continuous
           * animations (indeterminate and query).
           */

          _this26.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Reference to animation end subscription to be unsubscribed on destroy. */

          _this26._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /**
           * Mode of the progress bar.
           *
           * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
           * 'determinate'.
           * Mirrored to mode attribute.
           */

          _this26.mode = 'determinate';
          /** ID of the progress bar. */

          _this26.progressbarId = "mat-progress-bar-".concat(progressbarId++); // We need to prefix the SVG reference with the current path, otherwise they won't work
          // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
          // because named route URLs can contain parentheses (see #12338). Also we don't use since
          // we can't tell the difference between whether
          // the consumer is using the hash location strategy or not, because `Location` normalizes
          // both `/#/foo/bar` and `/foo/bar` to the same thing.

          var path = location ? location.getPathname().split('#')[0] : '';
          _this26._rectangleFillValue = "url('".concat(path, "#").concat(_this26.progressbarId, "')");
          _this26._isNoopAnimation = _animationMode === 'NoopAnimations';
          return _this26;
        }
        /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */


        _createClass(MatProgressBar, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(v) {
            this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
          }
          /** Buffer value of the progress bar. Defaults to zero. */

        }, {
          key: "bufferValue",
          get: function get() {
            return this._bufferValue;
          },
          set: function set(v) {
            this._bufferValue = clamp(v || 0);
          }
          /** Gets the current transform value for the progress bar's primary indicator. */

        }, {
          key: "_primaryTransform",
          value: function _primaryTransform() {
            var scale = this.value / 100;
            return {
              transform: "scaleX(".concat(scale, ")")
            };
          }
          /**
           * Gets the current transform value for the progress bar's buffer indicator. Only used if the
           * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
           */

        }, {
          key: "_bufferTransform",
          value: function _bufferTransform() {
            if (this.mode === 'buffer') {
              var scale = this.bufferValue / 100;
              return {
                transform: "scaleX(".concat(scale, ")")
              };
            }

            return null;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this27 = this;

            // Run outside angular so change detection didn't get triggered on every transition end
            // instead only on the animation that we care about (primary value bar's transitionend)
            this._ngZone.runOutsideAngular(function () {
              var element = _this27._primaryValueBar.nativeElement;
              _this27._animationEndSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (e) {
                return e.target === element;
              })).subscribe(function () {
                if (_this27.mode === 'determinate' || _this27.mode === 'buffer') {
                  _this27._ngZone.run(function () {
                    return _this27.animationEnd.next({
                      value: _this27.value
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._animationEndSubscription.unsubscribe();
          }
        }]);

        return MatProgressBar;
      }(_MatProgressBarMixinBase);

      MatProgressBar.ɵfac = function MatProgressBar_Factory(t) {
        return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8));
      };

      MatProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatProgressBar,
        selectors: [["mat-progress-bar"]],
        viewQuery: function MatProgressBar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
          }
        },
        hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "mat-progress-bar"],
        hostVars: 4,
        hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
          }
        },
        inputs: {
          color: "color",
          mode: "mode",
          value: "value",
          bufferValue: "bufferValue"
        },
        outputs: {
          animationEnd: "animationEnd"
        },
        exportAs: ["matProgressBar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 9,
        vars: 4,
        consts: [["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]],
        template: function MatProgressBar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pattern", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.progressbarId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx._rectangleFillValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatProgressBar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_BAR_LOCATION]
          }]
        }];
      };

      MatProgressBar.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _primaryValueBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['primaryValueBar']
        }],
        animationEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-progress-bar',
            exportAs: 'matProgressBar',
            host: {
              'role': 'progressbar',
              'aria-valuemin': '0',
              'aria-valuemax': '100',
              '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
              '[attr.mode]': 'mode',
              'class': 'mat-progress-bar',
              '[class._mat-animation-noopable]': '_isNoopAnimation'
            },
            inputs: ['color'],
            template: "<!--\n  The background div is named as such because it appears below the other divs and is not sized based\n  on values.\n-->\n<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n  <defs>\n    <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    </pattern>\n  </defs>\n  <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n</svg>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_BAR_LOCATION]
            }]
          }];
        }, {
          animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bufferValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _primaryValueBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['primaryValueBar']
          }]
        });
      })();
      /** Clamps a value to be between two numbers, by default 0 and 100. */


      function clamp(v) {
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        return Math.max(min, Math.min(max, v));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatProgressBarModule = function MatProgressBarModule() {
        _classCallCheck(this, MatProgressBarModule);
      };

      MatProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatProgressBarModule
      });
      MatProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatProgressBarModule_Factory(t) {
          return new (t || MatProgressBarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressBarModule, {
          declarations: function declarations() {
            return [MatProgressBar];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatProgressBar]
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
      //# sourceMappingURL=progress-bar.js.map

      /***/

    },

    /***/
    "dEO0":
    /*!**********************************************!*\
      !*** ./src/app/shared/interfaces/lat-lng.ts ***!
      \**********************************************/

    /*! exports provided: LatLng */

    /***/
    function dEO0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LatLng", function () {
        return LatLng;
      });

      var LatLng = function LatLng() {
        _classCallCheck(this, LatLng);
      };
      /***/

    },

    /***/
    "djqD":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/import-routes/view-route/view-route.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ViewRouteComponent */

    /***/
    function djqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewRouteComponent", function () {
        return ViewRouteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_interfaces_lat_lng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/interfaces/lat-lng */
      "dEO0");
      /* harmony import */


      var src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/route.service */
      "3hEy");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _agm_drawing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @agm/drawing */
      "Mfqx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ViewRouteComponent_agm_marker_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "agm-marker", 26);
        }

        if (rf & 2) {
          var db_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", db_r6.lat)("longitude", db_r6.lng)("markerDraggable", false)("iconUrl", ctx_r2.dbIcon)("label", db_r6.title)("visible", db_r6.visible);
        }
      }

      function ViewRouteComponent_tr_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r8 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.customerAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.zipCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.apptNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.customerPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.jops);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.date);
        }
      }

      function ViewRouteComponent_tr_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, "No data found"));
        }
      }

      var ViewRouteComponent = /*#__PURE__*/function () {
        function ViewRouteComponent(routeService, http, router, toastr, route) {
          _classCallCheck(this, ViewRouteComponent);

          this.routeService = routeService;
          this.http = http;
          this.router = router;
          this.toastr = toastr;
          this.route = route;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.title = 'AGM project';
          this.latitude = 30.033333;
          this.longitude = 31.233334;
          this.markers = [];
          this.e = 0;
          this.options = {
            lat: this.latitude,
            lng: this.longitude,
            zoom: 12,
            fillColor: '#DC143C',
            draggable: true,
            editable: true,
            visible: true
          };
          this.records = [];
          this.packages = [];
          this.isSelectedTemp = false;
          this.temps = [];
          this.csvArr = [];
          this.selectedPoints = [];
          this.selectedPacks = [];
          this.routeTempId = "";
          this.routeId = "";
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
        }

        _createClass(ViewRouteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.queryParams["id"];
            console.log(this.id);
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
            this.viewData();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "viewData",
          value: function viewData() {
            var _this28 = this;

            this.routeService.getAllRouteData(this.id).subscribe(function (routeData) {
              console.log(routeData);
              _this28.routeTempId = routeData.id;
              _this28.routeName = routeData.name;
              _this28.records = routeData.routeItems.filter(function (item) {
                return item.routeCreated == false;
              });
              _this28.packages = routeData.packages;
              _this28.companyId = routeData.companyId;
              _this28.options.lat = _this28.records[0].latitude;
              _this28.options.lng = _this28.records[0].longtude;

              _this28.records.forEach(function (marker) {
                if (!marker.routeCreated) {
                  _this28.markers.push({
                    lat: marker.latitude,
                    lng: marker.longtude,
                    title: marker.id,
                    story: '',
                    path: _this28.dbIcon,
                    visible: true
                  });
                }
              });
              /*
              if (this.isDtInitialized && this.dtElement) {
                this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.destroy();
                  this.dtTrigger.next();
                });
              }else{
                this.isDtInitialized = true
                this.dtTrigger.next();
              }
              */


              console.log(_this28.markers);
            }); // this.dtTrigger.next();
          }
        }, {
          key: "onMapReady",
          value: function onMapReady(map) {
            this.geoCoder = new google.maps.Geocoder();
            this.agmMap = map;
          }
        }, {
          key: "mapClicked",
          value: function mapClicked($event) {
            this.latitude = $event.coords.lat;
            this.longitude = $event.coords.lng; //this.getMAddress(this.latitude, this.longitude);
          }
        }, {
          key: "polygonCreated",
          value: function polygonCreated($event) {
            var _this29 = this;

            console.log("created");
            this.polygon = $event;

            if (this.polygon) {
              this.polygon.setMap(null);
            }

            this.triangleCoords = this.getPolygonCoordinates(this.polygon); // Construct the polygon.

            this.polygon = new google.maps.Polygon({
              paths: this.triangleCoords,
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              editable: true,
              draggable: true
            }); //Set polygon to map

            this.polygon.setMap(this.agmMap);
            this.addPolygonChangeEvent(this.polygon);
            google.maps.event.addListener(this.polygon, 'coordinates_changed', function () {
              console.log(_this29.getPolygonCoordinates(_this29.polygon));
            });
            this.getJopsInsidePolygon();
          }
        }, {
          key: "getJopsInsidePolygon",
          value: function getJopsInsidePolygon() {
            var _this30 = this;

            this.selectedPacks = [];
            this.selectedPoints = [];
            console.log(this.polygon);
            this.markers.forEach(function (item) {
              if (item.visible) {
                var latlng = new src_app_shared_interfaces_lat_lng__WEBPACK_IMPORTED_MODULE_5__["LatLng"]();
                latlng.latitude = item.lat;
                latlng.longitude = item.lng;

                var check = _this30.isWithinPoly(latlng);

                console.log(check);

                if (check) {
                  var r = _this30.getRouteItemById(item.title);

                  _this30.selectedPoints.push(r);
                }
              }
            });

            if (this.selectedPoints.length != 0) {
              $("#create_route").modal("show");
            } else {
              this.onCancel();
            }
          }
        }, {
          key: "extractPolygonPoints",
          value: function extractPolygonPoints(data) {
            console.log(data);
          }
        }, {
          key: "getRouteItemById",
          value: function getRouteItemById(id) {
            var v = this.records.filter(function (v) {
              return v.id == id;
            });
            return v[0];
          }
        }, {
          key: "isWithinPoly",
          value: function isWithinPoly(latlng) {
            var isWithinPolygon = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(latlng.latitude, latlng.longitude), this.polygon);
            return isWithinPolygon;
          }
        }, {
          key: "getPolygonCoordinates",
          value: function getPolygonCoordinates(draggablePolygon) {
            var len = draggablePolygon.getPath().getLength();
            var polyArrayLatLng = [];

            for (var i = 0; i < len; i++) {
              var vertex = draggablePolygon.getPath().getAt(i);
              var vertexLatLng = {
                lat: vertex.lat(),
                lng: vertex.lng()
              };
              polyArrayLatLng.push(vertexLatLng);
            }

            return polyArrayLatLng;
          }
        }, {
          key: "getPaths",
          value: function getPaths() {
            if (this.polygon) {
              console.log("get path");
              var vertices = this.polygon.getPaths().getArray()[0];
              var paths = [];
              vertices.getArray().forEach(function (xy, i) {
                var latLng = {
                  lat: xy.lat(),
                  lng: xy.lng()
                };
                paths.push(JSON.stringify(latLng));
              });
              return paths;
            }

            return [];
          }
        }, {
          key: "addPolygonChangeEvent",
          value: function addPolygonChangeEvent(polygon) {
            var me = polygon,
                isBeingDragged = false,
                triggerCoordinatesChanged = function triggerCoordinatesChanged() {
              // Broadcast normalized event
              var len = me.getPath().getLength();
              var polyArrayLatLng = [];

              for (var i = 0; i < len; i++) {
                var vertex = me.getPath().getAt(i);
                var vertexLatLng = {
                  lat: vertex.lat(),
                  lng: vertex.lng()
                };
                polyArrayLatLng.push(vertexLatLng);
              }

              google.maps.event.trigger(me, 'coordinates_changed');
            }; // If  the overlay is being dragged, set_at gets called repeatedly,
            // so either we can debounce that or igore while dragging,
            // ignoring is more efficient


            google.maps.event.addListener(me, 'dragstart', function () {
              isBeingDragged = true;
            }); // If the overlay is dragged

            google.maps.event.addListener(me, 'dragend', function () {
              triggerCoordinatesChanged();
              isBeingDragged = false;
            }); // Or vertices are added to any of the possible paths, or deleted

            var paths = me.getPaths();
            paths.forEach(function (path, i) {
              google.maps.event.addListener(path, "insert_at", function () {
                triggerCoordinatesChanged();
              });
              google.maps.event.addListener(path, "set_at", function () {
                if (!isBeingDragged) {
                  triggerCoordinatesChanged();
                }
              });
              google.maps.event.addListener(path, "remove_at", function () {
                triggerCoordinatesChanged();
              });
            });
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
          key: "objectValues",
          value: function objectValues(obj) {
            return Object.values(obj);
          }
        }, {
          key: "onCreate",
          value: function onCreate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this31 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.selectedPoints.forEach(function (point, i) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var _this32 = this;

                          var p;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return this.getPackById(point.id);

                                case 2:
                                  p = _context3.sent;
                                  p.forEach(function (i) {
                                    i.driverRouteId = _this32.routeId;
                                    i.pos = _this32.e;

                                    _this32.selectedPacks.push(i);

                                    _this32.e++;
                                  });

                                case 4:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getPackById",
          value: function getPackById(id) {
            var _this33 = this;

            return new Promise(function (resolve) {
              var p = _this33.packages.filter(function (item, i) {
                return item.jobId == id;
              });

              console.log(p);
              resolve(p);
            });
          }
        }, {
          key: "setRouteByIdSelected",
          value: function setRouteByIdSelected(id, reco) {
            var _this34 = this;

            return new Promise(function (resolve) {
              var p = reco.findIndex(function (item) {
                return item.id == id;
              });
              var o = reco[p];
              o.routeCreated = true;
              console.log(o);

              _this34.routeService.updaeRouteData(_this34.routeTempId, p, o);

              resolve(reco[p]);
            });
          }
        }, {
          key: "AddData",
          value: function AddData() {
            var _this35 = this;

            this.routeId = this.createId();
            this.e = 0;
            this.onCreate()["finally"](function () {
              console.log(_this35.selectedPacks);
              var routData = {
                id: _this35.routeId,
                driverId: "",
                mainRouteId: _this35.routeTempId,
                companyId: _this35.companyId,
                name: _this35.routeName,
                date: Date.now(),
                routeItems: _this35.selectedPoints,
                packages: _this35.selectedPacks
              };

              _this35.routeService.addRoute(routData);

              _this35.selectedPoints.forEach(function (item) {
                _this35.markers.forEach(function (m, i) {
                  if (m.title == item.id) {
                    _this35.markers[i].visible = false;
                  }
                });
              });

              _this35.updateRecordes();
            });
          }
        }, {
          key: "updateRecordes",
          value: function updateRecordes() {
            var _this36 = this;

            var reco = this.records;
            this.updateRouteData(reco)["finally"](function () {
              console.log(reco);

              _this36.router.navigate(['/import/view-driver-route'], {
                queryParams: {
                  id: _this36.routeId
                }
              });

              _this36.onCancel();
            });
          }
        }, {
          key: "updateRouteData",
          value: function updateRouteData(reco) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this37 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.selectedPoints.forEach(function (point) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this37, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var p;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.setRouteByIdSelected(point.id, reco);

                                case 2:
                                  p = _context5.sent;
                                  console.log(p);

                                case 4:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.polygon.setMap(null);
            $("#create_route").modal("hide");
          }
        }, {
          key: "createId",
          value: function createId() {
            var randomId = Math.floor(Math.random() * new Date().getTime());
            var id = randomId + "";

            if (id === "1") {
              id = randomId + "";
            }

            return id;
          }
        }]);

        return ViewRouteComponent;
      }();

      ViewRouteComponent.ɵfac = function ViewRouteComponent_Factory(t) {
        return new (t || ViewRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
      };

      ViewRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ViewRouteComponent,
        selectors: [["app-view-route"]],
        viewQuery: function ViewRouteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.agmMap = _t);
          }
        },
        decls: 67,
        vars: 47,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["fxFlex", "1 1 100%", 1, "map"], ["map", ""], ["fullscreenControl", "true", 3, "latitude", "longitude", "zoom", "agmDrawingManager", "mapReady", "mapClick"], ["agmMap", ""], [3, "latitude", "longitude", "markerDraggable", "iconUrl", "label", "visible", 4, "ngFor", "ngForOf"], ["data-target", "#create_route", 3, "drawingControl", "drawingControlOptions", "polygonOptions", "drawingMode", "polygonComplete", "overlayComplete"], ["drawing", "agmDrawingManager"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "create_route", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "col-6"], [1, "btn", "btn-primary", "continue-btn", 3, "click"], ["data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn", 3, "click"], [3, "latitude", "longitude", "markerDraggable", "iconUrl", "label", "visible"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function ViewRouteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "agm-map", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mapReady", function ViewRouteComponent_Template_agm_map_mapReady_8_listener($event) {
              return ctx.onMapReady($event);
            })("mapClick", function ViewRouteComponent_Template_agm_map_mapClick_8_listener($event) {
              return ctx.mapClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ViewRouteComponent_agm_marker_10_Template, 1, 6, "agm-marker", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "agm-drawing-manager", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("polygonComplete", function ViewRouteComponent_Template_agm_drawing_manager_polygonComplete_11_listener($event) {
              return ctx.polygonCreated($event);
            })("overlayComplete", function ViewRouteComponent_Template_agm_drawing_manager_overlayComplete_11_listener($event) {
              return ctx.extractPolygonPoints($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, ViewRouteComponent_tr_45_Template, 19, 9, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ViewRouteComponent_tr_46_Template, 5, 3, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewRouteComponent_Template_a_click_60_listener() {
              return ctx.AddData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewRouteComponent_Template_a_click_64_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");

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
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx.options.lat)("longitude", ctx.options.lng)("zoom", ctx.options.zoom)("agmDrawingManager", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.markers);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("drawingControl", ctx.managerOptions.drawingControl)("drawingControlOptions", ctx.managerOptions.drawingControlOptions)("polygonOptions", ctx.managerOptions.polygonOptions)("drawingMode", ctx.managerOptions.drawingMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 25, "Id"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 27, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 29, "Address"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 31, "Postal Code"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 33, "Appt No."));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 35, "Phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 37, "Items Qty"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 39, "Delivery Date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.records);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.records.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 41, "Create Route"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Are you want to Create Route with ", ctx.selectedPoints.length, " Jop?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 43, "Create"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 45, "Cancel"));
          }
        },
        directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _agm_drawing__WEBPACK_IMPORTED_MODULE_10__["AgmDrawingManagerTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _agm_drawing__WEBPACK_IMPORTED_MODULE_10__["AgmDrawingManager"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJvdXRlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ViewRouteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-view-route',
            templateUrl: './view-route.component.html',
            styleUrls: ['./view-route.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
              "static": false
            }]
          }],
          agmMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
            args: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "dvEc":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/import-routes/driver-route/driver-route.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: DriverRouteComponent */

    /***/
    function dvEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverRouteComponent", function () {
        return DriverRouteComponent;
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


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/check-permisson */
      "bFyh");
      /* harmony import */


      var src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/service/route.service */
      "3hEy");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function DriverRouteComponent_tr_25_a_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DriverRouteComponent_tr_25_a_17_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.tempId = order_r2.orderId;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          id: a0
        };
      };

      function DriverRouteComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DriverRouteComponent_tr_25_a_17_Template, 3, 0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, order_r2 == null ? null : order_r2.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, order_r2 == null ? null : order_r2.date));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2 == null ? null : order_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.canDelete);
        }
      }

      function DriverRouteComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DriverRouteComponent = /*#__PURE__*/function () {
        function DriverRouteComponent(modalService, orderService, _domSanitizer, router, toastr, permisson, routeService) {
          _classCallCheck(this, DriverRouteComponent);

          this.modalService = modalService;
          this.orderService = orderService;
          this._domSanitizer = _domSanitizer;
          this.router = router;
          this.toastr = toastr;
          this.permisson = permisson;
          this.routeService = routeService;
          this.dtOptions = {};
          this.isDtInitialized = false;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.orders = [];
          this.companiesList = [];
          this.shops = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]("en-US");
          this.canDelete = false;
          this.selectedTown = '';
          this.allZone = false;
          this.canDelete = this.permisson.checkPermisson('"delete_order":true');
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

          this.getDBS();
        }

        _createClass(DriverRouteComponent, [{
          key: "open",
          value: function open(content) {
            var _this38 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this38.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this38.closeResult = "Dismissed ".concat(_this38.getDismissReason(reason));
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
            var _this39 = this;

            this.routeService.getAllDividedRoutes().subscribe(function (res) {
              if (_this39.isDtInitialized) {
                _this39.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this39.dtTrigger.next();
                });
              } else {
                _this39.isDtInitialized = true;

                _this39.dtTrigger.next();
              }

              _this39.orders = res;
              console.log(_this39.orders); // this.dtTrigger.next();

              _this39.rows = _this39.orders;
              _this39.srch = _toConsumableArray(_this39.rows);
            });
          }
        }, {
          key: "getDBS",
          value: function getDBS() {
            var _this40 = this;

            this.routeService.getAllDeliveryBoys().subscribe(function (dBoyes) {
              _this40.dBoys = dBoyes;
            });
          }
        }, {
          key: "onEditClient",
          value: function onEditClient(event) {}
        }, {
          key: "onEdit",
          value: function onEdit(event) {
            this.router.navigate(['/products/add-product/' + event.data.id]);
          }
        }, {
          key: "addProduct",
          value: function addProduct() {
            this.router.navigate(['/products/add-product']);
          } //Delete Client

        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this41 = this;

            console.log(this.tempId);
            this.orderService.deleteOrder(this.tempId.toString()).then(function () {
              $("#delete_order").modal("hide");

              _this41.toastr.success("تم حذف الطلب ");
            });
          }
        }]);

        return DriverRouteComponent;
      }();

      DriverRouteComponent.ɵfac = function DriverRouteComponent_Factory(t) {
        return new (t || DriverRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__["CheckPermisson"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__["RouteService"]));
      };

      DriverRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DriverRouteComponent,
        selectors: [["app-driver-route"]],
        viewQuery: function DriverRouteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 48,
        vars: 28,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], ["datatable", "", "id", "datatable", 1, "table", "table-striped", "custom-table", "datatable", 3, "dtOptions", "dtTrigger"], [1, "text-right"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "delete_order", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "col-6"], [1, "btn", "btn-primary", "continue-btn", 3, "click"], ["data-dismiss", "modal", 1, "btn", "btn-primary", "cancel-btn"], ["routerLink", "/import/view-driver-route", 3, "queryParams"], [1, "dropdown", "dropdown-action"], ["data-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "dropdown-toggle"], [1, "material-icons"], [1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "data-toggle", "modal", "data-target", "#delete_order", 3, "click", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#delete_order", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-trash-o", "m-r-5"], ["colspan", "10"], [2, "text-align", "center"]],
        template: function DriverRouteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DriverRouteComponent_tr_25_Template, 18, 10, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DriverRouteComponent_tr_26_Template, 4, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DriverRouteComponent_Template_a_click_41_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "Route ID"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, "Date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 18, "Action"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 20, "Delete Order"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 22, "Are you sure want to delete?"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 24, "Delete"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 26, "Cancel"));
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXItcm91dGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverRouteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-driver-route',
            templateUrl: './driver-route.component.html',
            styleUrls: ['./driver-route.component.scss']
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
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
          }, {
            type: src_app_shared_service_check_permisson__WEBPACK_IMPORTED_MODULE_9__["CheckPermisson"]
          }, {
            type: src_app_shared_service_route_service__WEBPACK_IMPORTED_MODULE_10__["RouteService"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "gdyA":
    /*!***************************************************!*\
      !*** ./src/app/shared/interfaces/lat-lng-dist.ts ***!
      \***************************************************/

    /*! exports provided: LatLngDis */

    /***/
    function gdyA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LatLngDis", function () {
        return LatLngDis;
      });

      var LatLngDis = function LatLngDis(latitude, longitude, distance) {
        _classCallCheck(this, LatLngDis);

        this.distance = 0;
        this.latitude = latitude;
        this.longitude = longitude;
        this.distance = distance;
      };
      /***/

    },

    /***/
    "hdPb":
    /*!*******************************************************!*\
      !*** ./src/app/shared/interfaces/item-import_temp.ts ***!
      \*******************************************************/

    /*! exports provided: ItemImportTemp */

    /***/
    function hdPb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemImportTemp", function () {
        return ItemImportTemp;
      });

      var ItemImportTemp = function ItemImportTemp() {
        _classCallCheck(this, ItemImportTemp);
      };
      /***/

    },

    /***/
    "iFmK":
    /*!********************************************************!*\
      !*** ./src/app/shared/interfaces/route-item-import.ts ***!
      \********************************************************/

    /*! exports provided: RouteItemImport */

    /***/
    function iFmK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouteItemImport", function () {
        return RouteItemImport;
      });

      var RouteItemImport = function RouteItemImport() {
        _classCallCheck(this, RouteItemImport);

        this.status = 0;
      };
      /***/

    },

    /***/
    "mkoN":
    /*!**********************************************************!*\
      !*** ./node_modules/decode-google-map-polyline/index.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function mkoN(module, exports) {
      function decodePolyline(polyline) {
        var _ = {};

        _.Ya = function (a, b, c) {
          null != b && (a = Math.max(a, b));
          null != c && (a = Math.min(a, c));
          return a;
        };

        _.Za = function (a, b, c) {
          c -= b;
          return ((a - b) % c + c) % c + b;
        };

        _.w = function (a) {
          return a ? a.length : 0;
        };

        _.E = function (a, b, c) {
          a -= 0;
          b -= 0;
          c || (a = _.Ya(a, -90, 90), 180 != b && (b = _.Za(b, -180, 180)));

          this.lat = function () {
            return a;
          };

          this.lng = function () {
            return b;
          };
        };

        function decodePath(a) {
          for (var b = _.w(a), c = Array(Math.floor(a.length / 2)), d = 0, e = 0, f = 0, g = 0; d < b; ++g) {
            var h = 1,
                l = 0,
                n;

            do {
              n = a.charCodeAt(d++) - 63 - 1, h += n << l, l += 5;
            } while (31 <= n);

            e += h & 1 ? ~(h >> 1) : h >> 1;
            h = 1;
            l = 0;

            do {
              n = a.charCodeAt(d++) - 63 - 1, h += n << l, l += 5;
            } while (31 <= n);

            f += h & 1 ? ~(h >> 1) : h >> 1;
            c[g] = new _.E(1E-5 * e, 1E-5 * f, !0);
          }

          c.length = g;
          return c;
        }

        var result = decodePath(polyline).map(function (el) {
          return {
            lat: Number(el.lat().toFixed(5)),
            lng: Number(el.lng().toFixed(5))
          };
        });
        return result;
      }

      module.exports = decodePolyline;
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-import-routes-import-routes-module-es5.js.map