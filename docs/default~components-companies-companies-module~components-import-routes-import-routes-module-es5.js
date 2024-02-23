(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-companies-companies-module~components-import-routes-import-routes-module"], {
    /***/
    "0IaG":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
      \************************************************************************/

    /*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, _closeDialogVia, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */

    /***/
    function IaG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
        return MAT_DIALOG_DATA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
        return MAT_DIALOG_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
        return MatDialog;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
        return MatDialogActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
        return MatDialogClose;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
        return MatDialogConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
        return MatDialogContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
        return MatDialogContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
        return MatDialogModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
        return MatDialogRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
        return MatDialogTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_closeDialogVia", function () {
        return _closeDialogVia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
        return matDialogAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
        return throwMatDialogContentAlreadyAttachedError;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for opening a modal dialog with the MatDialog service.
       */


      function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

      var MatDialogConfig = function MatDialogConfig() {
        _classCallCheck(this, MatDialogConfig);

        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Custom class for the overlay pane. */

        this.panelClass = '';
        /** Whether the dialog has a backdrop. */

        this.hasBackdrop = true;
        /** Custom class for the backdrop. */

        this.backdropClass = '';
        /** Whether the user can use escape or clicking on the backdrop to close the modal. */

        this.disableClose = false;
        /** Width of the dialog. */

        this.width = '';
        /** Height of the dialog. */

        this.height = '';
        /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */

        this.maxWidth = '80vw';
        /** Data being injected into the child component. */

        this.data = null;
        /** ID of the element that describes the dialog. */

        this.ariaDescribedBy = null;
        /** ID of the element that labels the dialog. */

        this.ariaLabelledBy = null;
        /** Aria label to assign to the dialog element. */

        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */

        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */

        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by MatDialog.
       * @docs-private
       */


      var matDialogAnimations = {
        /** Animation that is applied on the dialog container by defalt. */
        dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'scale(0.7)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          transform: 'none'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          transform: 'none',
          opacity: 1
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0
        })))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception for the case when a ComponentPortal is
       * attached to a DomPortalOutlet without an origin.
       * @docs-private
       */

      function throwMatDialogContentAlreadyAttachedError() {
        throw Error('Attempting to attach dialog content after content is already attached');
      }
      /**
       * Internal component that wraps user-provided dialog content.
       * Animation is based on https://material.io/guidelines/motion/choreography.html.
       * @docs-private
       */


      var MatDialogContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(MatDialogContainer, _angular_cdk_portal__);

        var _super = _createSuper(MatDialogContainer);

        function MatDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document,
        /** The dialog configuration. */
        _config, _focusMonitor) {
          var _this;

          _classCallCheck(this, MatDialogContainer);

          _this = _super.call(this);
          _this._elementRef = _elementRef;
          _this._focusTrapFactory = _focusTrapFactory;
          _this._changeDetectorRef = _changeDetectorRef;
          _this._config = _config;
          _this._focusMonitor = _focusMonitor;
          /** Element that was focused before the dialog was opened. Save this to restore upon close. */

          _this._elementFocusedBeforeDialogWasOpened = null;
          /**
           * Type of interaction that led to the dialog being closed. This is used to determine
           * whether the focus style will be applied when returning focus to its original location
           * after the dialog is closed.
           */

          _this._closeInteractionType = null;
          /** State of the dialog animation. */

          _this._state = 'enter';
          /** Emits when an animation state changes. */

          _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Attaches a DOM portal to the dialog container.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this.attachDomPortal = function (portal) {
            if (_this._portalOutlet.hasAttached()) {
              throwMatDialogContentAlreadyAttachedError();
            }

            _this._setupFocusTrap();

            return _this._portalOutlet.attachDomPortal(portal);
          };

          _this._ariaLabelledBy = _config.ariaLabelledBy || null;
          _this._document = _document;
          return _this;
        }
        /**
         * Attach a ComponentPortal as content to this dialog container.
         * @param portal Portal to be attached as the dialog content.
         */


        _createClass(MatDialogContainer, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            if (this._portalOutlet.hasAttached()) {
              throwMatDialogContentAlreadyAttachedError();
            }

            this._setupFocusTrap();

            return this._portalOutlet.attachComponentPortal(portal);
          }
          /**
           * Attach a TemplatePortal as content to this dialog container.
           * @param portal Portal to be attached as the dialog content.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            if (this._portalOutlet.hasAttached()) {
              throwMatDialogContentAlreadyAttachedError();
            }

            this._setupFocusTrap();

            return this._portalOutlet.attachTemplatePortal(portal);
          }
          /** Moves focus back into the dialog if it was moved out. */

        }, {
          key: "_recaptureFocus",
          value: function _recaptureFocus() {
            if (!this._containsFocus()) {
              var focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();

              if (focusContainer) {
                this._elementRef.nativeElement.focus();
              }
            }
          }
          /** Moves the focus inside the focus trap. */

        }, {
          key: "_trapFocus",
          value: function _trapFocus() {
            // If we were to attempt to focus immediately, then the content of the dialog would not yet be
            // ready in instances where change detection has to run first. To deal with this, we simply
            // wait for the microtask queue to be empty.
            if (this._config.autoFocus) {
              this._focusTrap.focusInitialElementWhenReady();
            } else if (!this._containsFocus()) {
              // Otherwise ensure that focus is on the dialog container. It's possible that a different
              // component tried to move focus while the open animation was running. See:
              // https://github.com/angular/components/issues/16215. Note that we only want to do this
              // if the focus isn't inside the dialog already, because it's possible that the consumer
              // turned off `autoFocus` in order to move focus themselves.
              this._elementRef.nativeElement.focus();
            }
          }
          /** Restores focus to the element that was focused before the dialog opened. */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            var previousElement = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

            if (this._config.restoreFocus && previousElement && typeof previousElement.focus === 'function') {
              var activeElement = this._document.activeElement;
              var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
              // non-focusable element like the backdrop was clicked) before moving it. It's possible that
              // the consumer moved it themselves before the animation was done, in which case we shouldn't
              // do anything.

              if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
                if (this._focusMonitor) {
                  this._focusMonitor.focusVia(previousElement, this._closeInteractionType);

                  this._closeInteractionType = null;
                } else {
                  previousElement.focus();
                }
              }
            }

            if (this._focusTrap) {
              this._focusTrap.destroy();
            }
          }
          /**
           * Sets up the focus trand and saves a reference to the
           * element that was focused before the dialog was opened.
           */

        }, {
          key: "_setupFocusTrap",
          value: function _setupFocusTrap() {
            var _this2 = this;

            if (!this._focusTrap) {
              this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
            }

            if (this._document) {
              this._elementFocusedBeforeDialogWasOpened = this._document.activeElement; // Note that there is no focus method when rendering on the server.

              if (this._elementRef.nativeElement.focus) {
                // Move focus onto the dialog immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then(function () {
                  return _this2._elementRef.nativeElement.focus();
                });
              }
            }
          }
          /** Returns whether focus is inside the dialog. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            var element = this._elementRef.nativeElement;
            var activeElement = this._document.activeElement;
            return element === activeElement || element.contains(activeElement);
          }
          /** Callback, invoked whenever an animation on the host completes. */

        }, {
          key: "_onAnimationDone",
          value: function _onAnimationDone(event) {
            if (event.toState === 'enter') {
              this._trapFocus();
            } else if (event.toState === 'exit') {
              this._restoreFocus();
            }

            this._animationStateChanged.emit(event);
          }
          /** Callback, invoked when an animation on the host starts. */

        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(event) {
            this._animationStateChanged.emit(event);
          }
          /** Starts the dialog exit animation. */

        }, {
          key: "_startExitAnimation",
          value: function _startExitAnimation() {
            this._state = 'exit'; // Mark the container for check so it can react if the
            // view container is using OnPush change detection.

            this._changeDetectorRef.markForCheck();
          }
        }]);

        return MatDialogContainer;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

      MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
        return new (t || MatDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"]));
      };

      MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatDialogContainer,
        selectors: [["mat-dialog-container"]],
        viewQuery: function MatDialogContainer_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
          }
        },
        hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
        hostVars: 6,
        hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
              return ctx._onAnimationStart($event);
            })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
              return ctx._onAnimationDone($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._id)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function MatDialogContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [matDialogAnimations.dialogContainer]
        }
      });

      MatDialogContainer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: MatDialogConfig
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"]
        }];
      };

      MatDialogContainer.propDecorators = {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-dialog-container',
            template: "<ng-template cdkPortalOutlet></ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
            animations: [matDialogAnimations.dialogContainer],
            host: {
              'class': 'mat-dialog-container',
              'tabindex': '-1',
              'aria-modal': 'true',
              '[attr.id]': '_id',
              '[attr.role]': '_config.role',
              '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
              '[attr.aria-label]': '_config.ariaLabel',
              '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
              '[@dialogContainer]': '_state',
              '(@dialogContainer.start)': '_onAnimationStart($event)',
              '(@dialogContainer.done)': '_onAnimationDone($event)'
            },
            styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: MatDialogConfig
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"]
          }];
        }, {
          _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
              "static": true
            }]
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
      // TODO(jelbourn): resizing
      // Counter for unique dialog ids.


      var uniqueId = 0;
      /**
       * Reference to a dialog opened via the MatDialog service.
       */

      var MatDialogRef = /*#__PURE__*/function () {
        function MatDialogRef(_overlayRef, _containerInstance) {
          var _this3 = this;

          var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

          _classCallCheck(this, MatDialogRef);

          this._overlayRef = _overlayRef;
          this._containerInstance = _containerInstance;
          this.id = id;
          /** Whether the user is allowed to close the dialog. */

          this.disableClose = this._containerInstance._config.disableClose;
          /** Subject for notifying the user that the dialog has finished opening. */

          this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the dialog has finished closing. */

          this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the dialog has started closing. */

          this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Current state of the dialog. */

          this._state = 0
          /* OPEN */
          ; // Pass the id along to the container.

          _containerInstance._id = id; // Emit when opening animation completes

          _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.phaseName === 'done' && event.toState === 'enter';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            _this3._afterOpened.next();

            _this3._afterOpened.complete();
          }); // Dispose overlay when closing animation is complete


          _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.phaseName === 'done' && event.toState === 'exit';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            clearTimeout(_this3._closeFallbackTimeout);

            _this3._finishDialogClose();
          });

          _overlayRef.detachments().subscribe(function () {
            _this3._beforeClosed.next(_this3._result);

            _this3._beforeClosed.complete();

            _this3._afterClosed.next(_this3._result);

            _this3._afterClosed.complete();

            _this3.componentInstance = null;

            _this3._overlayRef.dispose();
          });

          _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
          })).subscribe(function (event) {
            event.preventDefault();

            _closeDialogVia(_this3, 'keyboard');
          });

          _overlayRef.backdropClick().subscribe(function () {
            if (_this3.disableClose) {
              _this3._containerInstance._recaptureFocus();
            } else {
              _closeDialogVia(_this3, 'mouse');
            }
          });
        }
        /**
         * Close the dialog.
         * @param dialogResult Optional result to return to the dialog opener.
         */


        _createClass(MatDialogRef, [{
          key: "close",
          value: function close(dialogResult) {
            var _this4 = this;

            this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

            this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
              return event.phaseName === 'start';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (event) {
              _this4._beforeClosed.next(dialogResult);

              _this4._beforeClosed.complete();

              _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
              // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
              // timeout which will clean everything up if the animation hasn't fired within the specified
              // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
              // vast majority of cases the timeout will have been cleared before it has the chance to fire.


              _this4._closeFallbackTimeout = setTimeout(function () {
                return _this4._finishDialogClose();
              }, event.totalTime + 100);
            });

            this._containerInstance._startExitAnimation();

            this._state = 1
            /* CLOSING */
            ;
          }
          /**
           * Gets an observable that is notified when the dialog is finished opening.
           */

        }, {
          key: "afterOpened",
          value: function afterOpened() {
            return this._afterOpened.asObservable();
          }
          /**
           * Gets an observable that is notified when the dialog is finished closing.
           */

        }, {
          key: "afterClosed",
          value: function afterClosed() {
            return this._afterClosed.asObservable();
          }
          /**
           * Gets an observable that is notified when the dialog has started closing.
           */

        }, {
          key: "beforeClosed",
          value: function beforeClosed() {
            return this._beforeClosed.asObservable();
          }
          /**
           * Gets an observable that emits when the overlay's backdrop has been clicked.
           */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._overlayRef.backdropClick();
          }
          /**
           * Gets an observable that emits when keydown events are targeted on the overlay.
           */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._overlayRef.keydownEvents();
          }
          /**
           * Updates the dialog's position.
           * @param position New dialog position.
           */

        }, {
          key: "updatePosition",
          value: function updatePosition(position) {
            var strategy = this._getPositionStrategy();

            if (position && (position.left || position.right)) {
              position.left ? strategy.left(position.left) : strategy.right(position.right);
            } else {
              strategy.centerHorizontally();
            }

            if (position && (position.top || position.bottom)) {
              position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
            } else {
              strategy.centerVertically();
            }

            this._overlayRef.updatePosition();

            return this;
          }
          /**
           * Updates the dialog's width and height.
           * @param width New width of the dialog.
           * @param height New height of the dialog.
           */

        }, {
          key: "updateSize",
          value: function updateSize() {
            var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            this._getPositionStrategy().width(width).height(height);

            this._overlayRef.updatePosition();

            return this;
          }
          /** Add a CSS class or an array of classes to the overlay pane. */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            this._overlayRef.addPanelClass(classes);

            return this;
          }
          /** Remove a CSS class or an array of classes from the overlay pane. */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            this._overlayRef.removePanelClass(classes);

            return this;
          }
          /** Gets the current state of the dialog's lifecycle. */

        }, {
          key: "getState",
          value: function getState() {
            return this._state;
          }
          /**
           * Finishes the dialog close by updating the state of the dialog
           * and disposing the overlay.
           */

        }, {
          key: "_finishDialogClose",
          value: function _finishDialogClose() {
            this._state = 2
            /* CLOSED */
            ;

            this._overlayRef.dispose();
          }
          /** Fetches the position strategy object from the overlay ref. */

        }, {
          key: "_getPositionStrategy",
          value: function _getPositionStrategy() {
            return this._overlayRef.getConfig().positionStrategy;
          }
        }]);

        return MatDialogRef;
      }();
      /**
       * Closes the dialog with the specified interaction type. This is currently not part of
       * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
       * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
       */
      // TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.


      function _closeDialogVia(ref, interactionType, result) {
        // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
        // For those, we keep the behavior as is and do not deal with the interaction type.
        if (ref._containerInstance !== undefined) {
          ref._containerInstance._closeInteractionType = interactionType;
        }

        return ref.close(result);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to access the data that was passed in to a dialog. */


      var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
      /** Injection token that can be used to specify default dialog options. */

      var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
      /** Injection token that determines the scroll handling while the dialog is open. */

      var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
      /** @docs-private */

      function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.block();
        };
      }
      /** @docs-private */


      function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.block();
        };
      }
      /** @docs-private */


      var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
        provide: MAT_DIALOG_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * Service to open Material Design modal dialogs.
       */

      var MatDialog = /*#__PURE__*/function () {
        function MatDialog(_overlay, _injector,
        /**
         * @deprecated `_location` parameter to be removed.
         * @breaking-change 10.0.0
         */
        _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
          var _this5 = this;

          _classCallCheck(this, MatDialog);

          this._overlay = _overlay;
          this._injector = _injector;
          this._defaultOptions = _defaultOptions;
          this._parentDialog = _parentDialog;
          this._overlayContainer = _overlayContainer;
          this._openDialogsAtThisLevel = [];
          this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

          /**
           * Stream that emits when all open dialog have finished closing.
           * Will emit on subscribe if there are no open dialogs to begin with.
           */

          this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(function () {
            return _this5.openDialogs.length ? _this5._afterAllClosed : _this5._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /** Keeps track of the currently-open dialogs. */


        _createClass(MatDialog, [{
          key: "openDialogs",
          get: function get() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
          }
          /** Stream that emits when a dialog has been opened. */

        }, {
          key: "afterOpened",
          get: function get() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
          }
        }, {
          key: "_afterAllClosed",
          get: function get() {
            var parent = this._parentDialog;
            return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
          }
          /**
           * Opens a modal dialog containing the given component.
           * @param componentOrTemplateRef Type of the component to load into the dialog,
           *     or a TemplateRef to instantiate as the dialog content.
           * @param config Extra configuration options.
           * @returns Reference to the newly-opened dialog.
           */

        }, {
          key: "open",
          value: function open(componentOrTemplateRef, config) {
            var _this6 = this;

            config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

            if (config.id && this.getDialogById(config.id)) {
              throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
            }

            var overlayRef = this._createOverlay(config);

            var dialogContainer = this._attachDialogContainer(overlayRef, config);

            var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


            if (!this.openDialogs.length) {
              this._hideNonDialogContentFromAssistiveTechnology();
            }

            this.openDialogs.push(dialogRef);
            dialogRef.afterClosed().subscribe(function () {
              return _this6._removeOpenDialog(dialogRef);
            });
            this.afterOpened.next(dialogRef);
            return dialogRef;
          }
          /**
           * Closes all of the currently-open dialogs.
           */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._closeDialogs(this.openDialogs);
          }
          /**
           * Finds an open dialog by its id.
           * @param id ID to use when looking up the dialog.
           */

        }, {
          key: "getDialogById",
          value: function getDialogById(id) {
            return this.openDialogs.find(function (dialog) {
              return dialog.id === id;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Only close the dialogs at this level on destroy
            // since the parent service may still be active.
            this._closeDialogs(this._openDialogsAtThisLevel);

            this._afterAllClosedAtThisLevel.complete();

            this._afterOpenedAtThisLevel.complete();
          }
          /**
           * Creates the overlay into which the dialog will be loaded.
           * @param config The dialog configuration.
           * @returns A promise resolving to the OverlayRef for the created overlay.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay(config) {
            var overlayConfig = this._getOverlayConfig(config);

            return this._overlay.create(overlayConfig);
          }
          /**
           * Creates an overlay config from a dialog config.
           * @param dialogConfig The dialog configuration.
           * @returns The overlay configuration.
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig(dialogConfig) {
            var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
              positionStrategy: this._overlay.position().global(),
              scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
              panelClass: dialogConfig.panelClass,
              hasBackdrop: dialogConfig.hasBackdrop,
              direction: dialogConfig.direction,
              minWidth: dialogConfig.minWidth,
              minHeight: dialogConfig.minHeight,
              maxWidth: dialogConfig.maxWidth,
              maxHeight: dialogConfig.maxHeight,
              disposeOnNavigation: dialogConfig.closeOnNavigation
            });

            if (dialogConfig.backdropClass) {
              state.backdropClass = dialogConfig.backdropClass;
            }

            return state;
          }
          /**
           * Attaches an MatDialogContainer to a dialog's already-created overlay.
           * @param overlay Reference to the dialog's underlying overlay.
           * @param config The dialog configuration.
           * @returns A promise resolving to a ComponentRef for the attached container.
           */

        }, {
          key: "_attachDialogContainer",
          value: function _attachDialogContainer(overlay, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: [{
                provide: MatDialogConfig,
                useValue: config
              }]
            });

            var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
            var containerRef = overlay.attach(containerPortal);
            return containerRef.instance;
          }
          /**
           * Attaches the user-provided component to the already-created MatDialogContainer.
           * @param componentOrTemplateRef The type of component being loaded into the dialog,
           *     or a TemplateRef to instantiate as the content.
           * @param dialogContainer Reference to the wrapping MatDialogContainer.
           * @param overlayRef Reference to the overlay in which the dialog resides.
           * @param config The dialog configuration.
           * @returns A promise resolving to the MatDialogRef that should be returned to the user.
           */

        }, {
          key: "_attachDialogContent",
          value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
            // Create a reference to the dialog we're creating in order to give the user a handle
            // to modify and close it.
            var dialogRef = new MatDialogRef(overlayRef, dialogContainer, config.id);

            if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
              dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, {
                $implicit: config.data,
                dialogRef: dialogRef
              }));
            } else {
              var injector = this._createInjector(config, dialogRef, dialogContainer);

              var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
              dialogRef.componentInstance = contentRef.instance;
            }

            dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
            return dialogRef;
          }
          /**
           * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
           * of a dialog to close itself and, optionally, to return a value.
           * @param config Config object that is used to construct the dialog.
           * @param dialogRef Reference to the dialog.
           * @param container Dialog container element that wraps all of the contents.
           * @returns The custom injector that can be used inside the dialog.
           */

        }, {
          key: "_createInjector",
          value: function _createInjector(config, dialogRef, dialogContainer) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
            // content are created out of the same ViewContainerRef and as such, are siblings for injector
            // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
            // added to the injection tokens.

            var providers = [{
              provide: MatDialogContainer,
              useValue: dialogContainer
            }, {
              provide: MAT_DIALOG_DATA,
              useValue: config.data
            }, {
              provide: MatDialogRef,
              useValue: dialogRef
            }];

            if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
              providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
                useValue: {
                  value: config.direction,
                  change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
                }
              });
            }

            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: providers
            });
          }
          /**
           * Removes a dialog from the array of open dialogs.
           * @param dialogRef Dialog to be removed.
           */

        }, {
          key: "_removeOpenDialog",
          value: function _removeOpenDialog(dialogRef) {
            var index = this.openDialogs.indexOf(dialogRef);

            if (index > -1) {
              this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
              // to a the siblings and emit to the `afterAllClosed` stream.

              if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach(function (previousValue, element) {
                  if (previousValue) {
                    element.setAttribute('aria-hidden', previousValue);
                  } else {
                    element.removeAttribute('aria-hidden');
                  }
                });

                this._ariaHiddenElements.clear();

                this._afterAllClosed.next();
              }
            }
          }
          /**
           * Hides all of the content that isn't an overlay from assistive technology.
           */

        }, {
          key: "_hideNonDialogContentFromAssistiveTechnology",
          value: function _hideNonDialogContentFromAssistiveTechnology() {
            var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


            if (overlayContainer.parentElement) {
              var siblings = overlayContainer.parentElement.children;

              for (var i = siblings.length - 1; i > -1; i--) {
                var sibling = siblings[i];

                if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
                  this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

                  sibling.setAttribute('aria-hidden', 'true');
                }
              }
            }
          }
          /** Closes all of the dialogs in an array. */

        }, {
          key: "_closeDialogs",
          value: function _closeDialogs(dialogs) {
            var i = dialogs.length;

            while (i--) {
              // The `_openDialogs` property isn't updated after close until the rxjs subscription
              // runs on the next microtask, in addition to modifying the array as we're going
              // through it. We loop through all of them and call close without assuming that
              // they'll be removed from the list instantaneously.
              dialogs[i].close();
            }
          }
        }]);

        return MatDialog;
      }();

      MatDialog.ɵfac = function MatDialog_Factory(t) {
        return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]));
      };

      MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MatDialog,
        factory: MatDialog.ɵfac
      });

      MatDialog.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: MatDialogConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_SCROLL_STRATEGY]
          }]
        }, {
          type: MatDialog,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: MatDialogConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_DIALOG_SCROLL_STRATEGY]
            }]
          }, {
            type: MatDialog,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
          }];
        }, null);
      })();
      /**
       * Applies default options to the dialog config.
       * @param config Config to be modified.
       * @param defaultOptions Default options provided.
       * @returns The new configuration object.
       */


      function _applyConfigDefaults(config, defaultOptions) {
        return Object.assign(Object.assign({}, defaultOptions), config);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique IDs for dialog elements. */


      var dialogElementUid = 0;
      /**
       * Button that will close the current dialog.
       */

      var MatDialogClose = /*#__PURE__*/function () {
        function MatDialogClose(dialogRef, _elementRef, _dialog) {
          _classCallCheck(this, MatDialogClose);

          this.dialogRef = dialogRef;
          this._elementRef = _elementRef;
          this._dialog = _dialog;
          /** Default to "button" to prevents accidental form submits. */

          this.type = 'button';
        }

        _createClass(MatDialogClose, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.dialogRef) {
              // When this directive is included in a dialog via TemplateRef (rather than being
              // in a Component), the DialogRef isn't available via injection because embedded
              // views cannot be given a custom injector. Instead, we look up the DialogRef by
              // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
              // be resolved at constructor time.
              this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

            if (proxiedChange) {
              this.dialogResult = proxiedChange.currentValue;
            }
          }
        }, {
          key: "_onButtonClick",
          value: function _onButtonClick(event) {
            // Determinate the focus origin using the click event, because using the FocusMonitor will
            // result in incorrect origins. Most of the time, close buttons will be auto focused in the
            // dialog, and therefore clicking the button won't result in a focus change. This means that
            // the FocusMonitor won't detect any origin change, and will always output `program`.
            _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
          }
        }]);

        return MatDialogClose;
      }();

      MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
        return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
      };

      MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogClose,
        selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
        hostVars: 2,
        hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
              return ctx._onButtonClick($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
          }
        },
        inputs: {
          type: "type",
          dialogResult: ["mat-dialog-close", "dialogResult"],
          ariaLabel: ["aria-label", "ariaLabel"],
          _matDialogClose: ["matDialogClose", "_matDialogClose"]
        },
        exportAs: ["matDialogClose"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      MatDialogClose.ctorParameters = function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      };

      MatDialogClose.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dialogResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mat-dialog-close']
        }],
        _matDialogClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matDialogClose']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[mat-dialog-close], [matDialogClose]',
            exportAs: 'matDialogClose',
            host: {
              '(click)': '_onButtonClick($event)',
              '[attr.aria-label]': 'ariaLabel || null',
              '[attr.type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: MatDialogRef,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: MatDialog
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          dialogResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mat-dialog-close']
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
          }],
          _matDialogClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matDialogClose']
          }]
        });
      })();
      /**
       * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
       */


      var MatDialogTitle = /*#__PURE__*/function () {
        function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
          _classCallCheck(this, MatDialogTitle);

          this._dialogRef = _dialogRef;
          this._elementRef = _elementRef;
          this._dialog = _dialog;
          this.id = "mat-dialog-title-".concat(dialogElementUid++);
        }

        _createClass(MatDialogTitle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            if (!this._dialogRef) {
              this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }

            if (this._dialogRef) {
              Promise.resolve().then(function () {
                var container = _this7._dialogRef._containerInstance;

                if (container && !container._ariaLabelledBy) {
                  container._ariaLabelledBy = _this7.id;
                }
              });
            }
          }
        }]);

        return MatDialogTitle;
      }();

      MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
        return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
      };

      MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogTitle,
        selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
        hostAttrs: [1, "mat-dialog-title"],
        hostVars: 1,
        hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        exportAs: ["matDialogTitle"]
      });

      MatDialogTitle.ctorParameters = function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      };

      MatDialogTitle.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[mat-dialog-title], [matDialogTitle]',
            exportAs: 'matDialogTitle',
            host: {
              'class': 'mat-dialog-title',
              '[id]': 'id'
            }
          }]
        }], function () {
          return [{
            type: MatDialogRef,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: MatDialog
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Scrollable content container of a dialog.
       */


      var MatDialogContent = function MatDialogContent() {
        _classCallCheck(this, MatDialogContent);
      };

      MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
        return new (t || MatDialogContent)();
      };

      MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogContent,
        selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
        hostAttrs: [1, "mat-dialog-content"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
            host: {
              'class': 'mat-dialog-content'
            }
          }]
        }], null, null);
      })();
      /**
       * Container for the bottom action buttons in a dialog.
       * Stays fixed to the bottom when scrolling.
       */


      var MatDialogActions = function MatDialogActions() {
        _classCallCheck(this, MatDialogActions);
      };

      MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
        return new (t || MatDialogActions)();
      };

      MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogActions,
        selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
        hostAttrs: [1, "mat-dialog-actions"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
            host: {
              'class': 'mat-dialog-actions'
            }
          }]
        }], null, null);
      })();
      /**
       * Finds the closest MatDialogRef to an element by looking at the DOM.
       * @param element Element relative to which to look for a dialog.
       * @param openDialogs References to the currently-open dialogs.
       */


      function getClosestDialog(element, openDialogs) {
        var parent = element.nativeElement.parentElement;

        while (parent && !parent.classList.contains('mat-dialog-container')) {
          parent = parent.parentElement;
        }

        return parent ? openDialogs.find(function (dialog) {
          return dialog.id === parent.id;
        }) : null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDialogModule = function MatDialogModule() {
        _classCallCheck(this, MatDialogModule);
      };

      MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatDialogModule
      });
      MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatDialogModule_Factory(t) {
          return new (t || MatDialogModule)();
        },
        providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, {
          declarations: function declarations() {
            return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
            providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
            entryComponents: [MatDialogContainer]
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
      //# sourceMappingURL=dialog.js.map

      /***/

    },

    /***/
    "iadO":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js ***!
      \****************************************************************************/

    /*! exports provided: DateRange, DefaultMatCalendarRangeStrategy, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATE_RANGE_SELECTION_STRATEGY, MAT_RANGE_DATE_SELECTION_MODEL_FACTORY, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY, MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, MatCalendar, MatCalendarBody, MatCalendarCell, MatCalendarHeader, MatDateRangeInput, MatDateRangePicker, MatDateSelectionModel, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon, MatEndDate, MatMonthView, MatMultiYearView, MatRangeDateSelectionModel, MatSingleDateSelectionModel, MatStartDate, MatYearView, matDatepickerAnimations, yearsPerPage, yearsPerRow, ɵangular_material_src_material_datepicker_datepicker_a, ɵangular_material_src_material_datepicker_datepicker_b, ɵangular_material_src_material_datepicker_datepicker_c */

    /***/
    function iadO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateRange", function () {
        return DateRange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMatCalendarRangeStrategy", function () {
        return DefaultMatCalendarRangeStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function () {
        return MAT_DATEPICKER_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function () {
        return MAT_DATEPICKER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_RANGE_SELECTION_STRATEGY", function () {
        return MAT_DATE_RANGE_SELECTION_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_FACTORY", function () {
        return MAT_RANGE_DATE_SELECTION_MODEL_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER", function () {
        return MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY", function () {
        return MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER", function () {
        return MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendar", function () {
        return MatCalendar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function () {
        return MatCalendarBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function () {
        return MatCalendarCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function () {
        return MatCalendarHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateRangeInput", function () {
        return MatDateRangeInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateRangePicker", function () {
        return MatDateRangePicker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateSelectionModel", function () {
        return MatDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepicker", function () {
        return MatDatepicker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function () {
        return MatDatepickerContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function () {
        return MatDatepickerInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function () {
        return MatDatepickerInputEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function () {
        return MatDatepickerIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function () {
        return MatDatepickerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function () {
        return MatDatepickerToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function () {
        return MatDatepickerToggleIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatEndDate", function () {
        return MatEndDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMonthView", function () {
        return MatMonthView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function () {
        return MatMultiYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRangeDateSelectionModel", function () {
        return MatRangeDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSingleDateSelectionModel", function () {
        return MatSingleDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStartDate", function () {
        return MatStartDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatYearView", function () {
        return MatYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function () {
        return matDatepickerAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () {
        return yearsPerPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () {
        return yearsPerRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_a", function () {
        return MatDatepickerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_b", function () {
        return MatDatepickerInputBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_c", function () {
        return MAT_DATE_RANGE_INPUT_PARENT;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var _c0 = ["mat-calendar-body", ""];

      function MatCalendarBody_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r0.numCols);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
        }
      }

      function MatCalendarBody_tr_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r4._firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
        }
      }

      function MatCalendarBody_tr_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var item_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r8._cellClicked(item_r6, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var colIndex_r7 = ctx.index;

          var rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7)("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5._isSelected(item_r6));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r5._isSelected(item_r6))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
        }
      }

      function MatCalendarBody_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 4, 44, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;
          var rowIndex_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r2);
        }
      }

      function MatMonthView_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", day_r1["long"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r1.narrow);
        }
      }

      var _c1 = ["*"];

      function MatCalendar_ng_template_0_Template(rf, ctx) {}

      function MatCalendar_mat_month_view_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-month-view", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r4.activeDate = $event;
          })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6._dateSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd);
        }
      }

      function MatCalendar_mat_year_view_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-year-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.activeDate = $event;
          })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9._monthSelectedInYearView($event);
          })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10._goToDateInView($event, "month");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate);
        }
      }

      function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-multi-year-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.activeDate = $event;
          })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13._yearSelectedInMultiYearView($event);
          })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14._goToDateInView($event, "year");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate);
        }
      }

      var _c2 = ["button"];

      function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c3 = [[["", "matDatepickerToggleIcon", ""]]];
      var _c4 = ["[matDatepickerToggleIcon]"];
      var _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
      var _c6 = ["input[matStartDate]", "input[matEndDate]"];

      function createMissingDateImplError(provider) {
        return Error("MatDatepicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " + "custom implementation.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Datepicker data that requires internationalization. */


      var MatDatepickerIntl = /*#__PURE__*/function () {
        function MatDatepickerIntl() {
          _classCallCheck(this, MatDatepickerIntl);

          /**
           * Stream that emits whenever the labels here are changed. Use this to notify
           * components if the labels have changed after initialization.
           */
          this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** A label for the calendar popup (used by screen readers). */

          this.calendarLabel = 'Calendar';
          /** A label for the button used to open the calendar popup (used by screen readers). */

          this.openCalendarLabel = 'Open calendar';
          /** A label for the previous month button (used by screen readers). */

          this.prevMonthLabel = 'Previous month';
          /** A label for the next month button (used by screen readers). */

          this.nextMonthLabel = 'Next month';
          /** A label for the previous year button (used by screen readers). */

          this.prevYearLabel = 'Previous year';
          /** A label for the next year button (used by screen readers). */

          this.nextYearLabel = 'Next year';
          /** A label for the previous multi-year button (used by screen readers). */

          this.prevMultiYearLabel = 'Previous 20 years';
          /** A label for the next multi-year button (used by screen readers). */

          this.nextMultiYearLabel = 'Next 20 years';
          /** A label for the 'switch to month view' button (used by screen readers). */

          this.switchToMonthViewLabel = 'Choose date';
          /** A label for the 'switch to year view' button (used by screen readers). */

          this.switchToMultiYearViewLabel = 'Choose month and year';
        }
        /** Formats a range of years. */


        _createClass(MatDatepickerIntl, [{
          key: "formatYearRange",
          value: function formatYearRange(start, end) {
            return "".concat(start, " \u2013 ").concat(end);
          }
        }]);

        return MatDatepickerIntl;
      }();

      MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) {
        return new (t || MatDatepickerIntl)();
      };

      MatDatepickerIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
        factory: function MatDatepickerIntl_Factory() {
          return new MatDatepickerIntl();
        },
        token: MatDatepickerIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
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
       * An internal class that represents the data corresponding to a single calendar cell.
       * @docs-private
       */


      var MatCalendarCell = function MatCalendarCell(value, displayValue, ariaLabel, enabled) {
        var cssClasses = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        var compareValue = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : value;
        var rawValue = arguments.length > 6 ? arguments[6] : undefined;

        _classCallCheck(this, MatCalendarCell);

        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.compareValue = compareValue;
        this.rawValue = rawValue;
      };
      /**
       * An internal component used to display calendar data in a table.
       * @docs-private
       */


      var MatCalendarBody = /*#__PURE__*/function () {
        function MatCalendarBody(_elementRef, _ngZone) {
          var _this8 = this;

          _classCallCheck(this, MatCalendarBody);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          /** The number of columns in the table. */

          this.numCols = 7;
          /** The cell number of the active cell in the table. */

          this.activeCell = 0;
          /** Whether a range is being selected. */

          this.isRange = false;
          /**
           * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
           * maintained even as the table resizes.
           */

          this.cellAspectRatio = 1;
          /** Start of the preview range. */

          this.previewStart = null;
          /** End of the preview range. */

          this.previewEnd = null;
          /** Emits when a new value is selected. */

          this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the preview has changed as a result of a user action. */

          this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Event handler for when the user enters an element
           * inside the calendar body (e.g. by hovering in or focus).
           */

          this._enterHandler = function (event) {
            if (_this8._skipNextFocus && event.type === 'focus') {
              _this8._skipNextFocus = false;
              return;
            } // We only need to hit the zone when we're selecting a range.


            if (event.target && _this8.isRange) {
              var cell = _this8._getCellFromElement(event.target);

              if (cell) {
                _this8._ngZone.run(function () {
                  return _this8.previewChange.emit({
                    value: cell.enabled ? cell : null,
                    event: event
                  });
                });
              }
            }
          };
          /**
           * Event handler for when the user's pointer leaves an element
           * inside the calendar body (e.g. by hovering out or blurring).
           */


          this._leaveHandler = function (event) {
            // We only need to hit the zone when we're selecting a range.
            if (_this8.previewEnd !== null && _this8.isRange) {
              // Only reset the preview end value when leaving cells. This looks better, because
              // we have a gap between the cells and the rows and we don't want to remove the
              // range just for it to show up again when the user moves a few pixels to the side.
              if (event.target && isTableCell(event.target)) {
                _this8._ngZone.run(function () {
                  return _this8.previewChange.emit({
                    value: null,
                    event: event
                  });
                });
              }
            }
          };

          _ngZone.runOutsideAngular(function () {
            var element = _elementRef.nativeElement;
            element.addEventListener('mouseenter', _this8._enterHandler, true);
            element.addEventListener('focus', _this8._enterHandler, true);
            element.addEventListener('mouseleave', _this8._leaveHandler, true);
            element.addEventListener('blur', _this8._leaveHandler, true);
          });
        }
        /** Called when a cell is clicked. */


        _createClass(MatCalendarBody, [{
          key: "_cellClicked",
          value: function _cellClicked(cell, event) {
            if (cell.enabled) {
              this.selectedValueChange.emit({
                value: cell.value,
                event: event
              });
            }
          }
          /** Returns whether a cell should be marked as selected. */

        }, {
          key: "_isSelected",
          value: function _isSelected(cell) {
            return this.startValue === cell.compareValue || this.endValue === cell.compareValue;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var columnChanges = changes['numCols'];
            var rows = this.rows,
                numCols = this.numCols;

            if (changes['rows'] || columnChanges) {
              this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
            }

            if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
              this._cellPadding = "".concat(50 * this.cellAspectRatio / numCols, "%");
            }

            if (columnChanges || !this._cellWidth) {
              this._cellWidth = "".concat(100 / numCols, "%");
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mouseenter', this._enterHandler, true);
            element.removeEventListener('focus', this._enterHandler, true);
            element.removeEventListener('mouseleave', this._leaveHandler, true);
            element.removeEventListener('blur', this._leaveHandler, true);
          }
          /** Returns whether a cell is active. */

        }, {
          key: "_isActiveCell",
          value: function _isActiveCell(rowIndex, colIndex) {
            var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

            if (rowIndex) {
              cellNumber -= this._firstRowOffset;
            }

            return cellNumber == this.activeCell;
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            var _this9 = this;

            var movePreview = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this._ngZone.runOutsideAngular(function () {
              _this9._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
                var activeCell = _this9._elementRef.nativeElement.querySelector('.mat-calendar-body-active');

                if (activeCell) {
                  if (!movePreview) {
                    _this9._skipNextFocus = true;
                  }

                  activeCell.focus();
                }
              });
            });
          }
          /** Gets whether a value is the start of the main range. */

        }, {
          key: "_isRangeStart",
          value: function _isRangeStart(value) {
            return isStart(value, this.startValue, this.endValue);
          }
          /** Gets whether a value is the end of the main range. */

        }, {
          key: "_isRangeEnd",
          value: function _isRangeEnd(value) {
            return isEnd(value, this.startValue, this.endValue);
          }
          /** Gets whether a value is within the currently-selected range. */

        }, {
          key: "_isInRange",
          value: function _isInRange(value) {
            return isInRange(value, this.startValue, this.endValue, this.isRange);
          }
          /** Gets whether a value is the start of the comparison range. */

        }, {
          key: "_isComparisonStart",
          value: function _isComparisonStart(value) {
            return isStart(value, this.comparisonStart, this.comparisonEnd);
          }
          /** Whether the cell is a start bridge cell between the main and comparison ranges. */

        }, {
          key: "_isComparisonBridgeStart",
          value: function _isComparisonBridgeStart(value, rowIndex, colIndex) {
            if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
              return false;
            }

            var previousCell = this.rows[rowIndex][colIndex - 1];

            if (!previousCell) {
              var previousRow = this.rows[rowIndex - 1];
              previousCell = previousRow && previousRow[previousRow.length - 1];
            }

            return previousCell && !this._isRangeEnd(previousCell.compareValue);
          }
          /** Whether the cell is an end bridge cell between the main and comparison ranges. */

        }, {
          key: "_isComparisonBridgeEnd",
          value: function _isComparisonBridgeEnd(value, rowIndex, colIndex) {
            if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
              return false;
            }

            var nextCell = this.rows[rowIndex][colIndex + 1];

            if (!nextCell) {
              var nextRow = this.rows[rowIndex + 1];
              nextCell = nextRow && nextRow[0];
            }

            return nextCell && !this._isRangeStart(nextCell.compareValue);
          }
          /** Gets whether a value is the end of the comparison range. */

        }, {
          key: "_isComparisonEnd",
          value: function _isComparisonEnd(value) {
            return isEnd(value, this.comparisonStart, this.comparisonEnd);
          }
          /** Gets whether a value is within the current comparison range. */

        }, {
          key: "_isInComparisonRange",
          value: function _isInComparisonRange(value) {
            return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
          }
          /** Gets whether a value is the start of the preview range. */

        }, {
          key: "_isPreviewStart",
          value: function _isPreviewStart(value) {
            return isStart(value, this.previewStart, this.previewEnd);
          }
          /** Gets whether a value is the end of the preview range. */

        }, {
          key: "_isPreviewEnd",
          value: function _isPreviewEnd(value) {
            return isEnd(value, this.previewStart, this.previewEnd);
          }
          /** Gets whether a value is inside the preview range. */

        }, {
          key: "_isInPreview",
          value: function _isInPreview(value) {
            return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
          }
          /** Finds the MatCalendarCell that corresponds to a DOM node. */

        }, {
          key: "_getCellFromElement",
          value: function _getCellFromElement(element) {
            var cell;

            if (isTableCell(element)) {
              cell = element;
            } else if (isTableCell(element.parentNode)) {
              cell = element.parentNode;
            }

            if (cell) {
              var row = cell.getAttribute('data-mat-row');
              var col = cell.getAttribute('data-mat-col');

              if (row && col) {
                return this.rows[parseInt(row)][parseInt(col)];
              }
            }

            return null;
          }
        }]);

        return MatCalendarBody;
      }();

      MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) {
        return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]));
      };

      MatCalendarBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendarBody,
        selectors: [["", "mat-calendar-body", ""]],
        hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mat-calendar-body"],
        inputs: {
          numCols: "numCols",
          activeCell: "activeCell",
          isRange: "isRange",
          cellAspectRatio: "cellAspectRatio",
          previewStart: "previewStart",
          previewEnd: "previewEnd",
          label: "label",
          rows: "rows",
          todayValue: "todayValue",
          startValue: "startValue",
          endValue: "endValue",
          labelMinRequiredCells: "labelMinRequiredCells",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedValueChange: "selectedValueChange",
          previewChange: "previewChange"
        },
        exportAs: ["matCalendarBody"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        attrs: _c0,
        decls: 2,
        vars: 2,
        consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "mat-calendar-body-range-start", "mat-calendar-body-range-end", "mat-calendar-body-in-range", "mat-calendar-body-comparison-bridge-start", "mat-calendar-body-comparison-bridge-end", "mat-calendar-body-comparison-start", "mat-calendar-body-comparison-end", "mat-calendar-body-in-comparison-range", "mat-calendar-body-preview-start", "mat-calendar-body-preview-end", "mat-calendar-body-in-preview", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], [1, "mat-calendar-body-cell-preview"]],
        template: function MatCalendarBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendarBody.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }];
      };

      MatCalendarBody.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        todayValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        endValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        labelMinRequiredCells: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        numCols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        activeCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        isRange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        cellAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        previewStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        previewEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        previewChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarBody, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: '[mat-calendar-body]',
            template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [attr.data-mat-row]=\"rowIndex\"\n      [attr.data-mat-col]=\"colIndex\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"_isSelected(item)\"\n      (click)=\"_cellClicked(item, $event)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n        [class.mat-calendar-body-selected]=\"_isSelected(item)\"\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n        {{item.displayValue}}\n      </div>\n      <div class=\"mat-calendar-body-cell-preview\"></div>\n  </td>\n</tr>\n",
            host: {
              'class': 'mat-calendar-body',
              'role': 'grid',
              'aria-readonly': 'true'
            },
            exportAs: 'matCalendarBody',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }];
        }, {
          numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          cellAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          previewStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          previewEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          previewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          startValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          endValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          labelMinRequiredCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /** Checks whether a node is a table cell element. */


      function isTableCell(node) {
        return node.nodeName === 'TD';
      }
      /** Checks whether a value is the start of a range. */


      function isStart(value, start, end) {
        return end !== null && start !== end && value < end && value === start;
      }
      /** Checks whether a value is the end of a range. */


      function isEnd(value, start, end) {
        return start !== null && start !== end && value >= start && value === end;
      }
      /** Checks whether a value is inside of a range. */


      function isInRange(value, start, end, rangeEnabled) {
        return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** A class representing a range of dates. */


      var DateRange = function DateRange(
      /** The start date of the range. */
      start,
      /** The end date of the range. */
      end) {
        _classCallCheck(this, DateRange);

        this.start = start;
        this.end = end;
      };
      /** A selection model containing a date selection. */


      var MatDateSelectionModel = /*#__PURE__*/function () {
        function MatDateSelectionModel(
        /** The current selection. */
        selection, _adapter) {
          _classCallCheck(this, MatDateSelectionModel);

          this.selection = selection;
          this._adapter = _adapter;
          this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits when the selection has changed. */

          this.selectionChanged = this._selectionChanged.asObservable();
          this.selection = selection;
        }
        /**
         * Updates the current selection in the model.
         * @param value New selection that should be assigned.
         * @param source Object that triggered the selection change.
         */


        _createClass(MatDateSelectionModel, [{
          key: "updateSelection",
          value: function updateSelection(value, source) {
            this.selection = value;

            this._selectionChanged.next({
              selection: value,
              source: source
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._selectionChanged.complete();
          }
        }, {
          key: "_isValidDateInstance",
          value: function _isValidDateInstance(date) {
            return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
          }
        }]);

        return MatDateSelectionModel;
      }();

      MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) {
        return new (t || MatDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatDateSelectionModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDateSelectionModel
      });

      MatDateSelectionModel.ctorParameters = function () {
        return [{
          type: undefined
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: undefined
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /**  A selection model that contains a single date. */


      var MatSingleDateSelectionModel = /*#__PURE__*/function (_MatDateSelectionMode) {
        _inherits(MatSingleDateSelectionModel, _MatDateSelectionMode);

        var _super2 = _createSuper(MatSingleDateSelectionModel);

        function MatSingleDateSelectionModel(adapter) {
          _classCallCheck(this, MatSingleDateSelectionModel);

          return _super2.call(this, null, adapter);
        }
        /**
         * Adds a date to the current selection. In the case of a single date selection, the added date
         * simply overwrites the previous selection
         */


        _createClass(MatSingleDateSelectionModel, [{
          key: "add",
          value: function add(date) {
            _get(_getPrototypeOf(MatSingleDateSelectionModel.prototype), "updateSelection", this).call(this, date, this);
          }
          /** Checks whether the current selection is valid. */

        }, {
          key: "isValid",
          value: function isValid() {
            return this.selection != null && this._isValidDateInstance(this.selection);
          }
          /**
           * Checks whether the current selection is complete. In the case of a single date selection, this
           * is true if the current selection is not null.
           */

        }, {
          key: "isComplete",
          value: function isComplete() {
            return this.selection != null;
          }
        }]);

        return MatSingleDateSelectionModel;
      }(MatDateSelectionModel);

      MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) {
        return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatSingleDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: MatSingleDateSelectionModel,
        factory: MatSingleDateSelectionModel.ɵfac
      });

      MatSingleDateSelectionModel.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /**  A selection model that contains a date range. */


      var MatRangeDateSelectionModel = /*#__PURE__*/function (_MatDateSelectionMode2) {
        _inherits(MatRangeDateSelectionModel, _MatDateSelectionMode2);

        var _super3 = _createSuper(MatRangeDateSelectionModel);

        function MatRangeDateSelectionModel(adapter) {
          _classCallCheck(this, MatRangeDateSelectionModel);

          return _super3.call(this, new DateRange(null, null), adapter);
        }
        /**
         * Adds a date to the current selection. In the case of a date range selection, the added date
         * fills in the next `null` value in the range. If both the start and the end already have a date,
         * the selection is reset so that the given date is the new `start` and the `end` is null.
         */


        _createClass(MatRangeDateSelectionModel, [{
          key: "add",
          value: function add(date) {
            var _this$selection = this.selection,
                start = _this$selection.start,
                end = _this$selection.end;

            if (start == null) {
              start = date;
            } else if (end == null) {
              end = date;
            } else {
              start = date;
              end = null;
            }

            _get(_getPrototypeOf(MatRangeDateSelectionModel.prototype), "updateSelection", this).call(this, new DateRange(start, end), this);
          }
          /** Checks whether the current selection is valid. */

        }, {
          key: "isValid",
          value: function isValid() {
            var _this$selection2 = this.selection,
                start = _this$selection2.start,
                end = _this$selection2.end; // Empty ranges are valid.

            if (start == null && end == null) {
              return true;
            } // Complete ranges are only valid if both dates are valid and the start is before the end.


            if (start != null && end != null) {
              return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
            } // Partial ranges are valid if the start/end is valid.


            return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
          }
          /**
           * Checks whether the current selection is complete. In the case of a date range selection, this
           * is true if the current selection has a non-null `start` and `end`.
           */

        }, {
          key: "isComplete",
          value: function isComplete() {
            return this.selection.start != null && this.selection.end != null;
          }
        }]);

        return MatRangeDateSelectionModel;
      }(MatDateSelectionModel);

      MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) {
        return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatRangeDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: MatRangeDateSelectionModel,
        factory: MatRangeDateSelectionModel.ɵfac
      });

      MatRangeDateSelectionModel.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /** @docs-private */


      function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
        return parent || new MatSingleDateSelectionModel(adapter);
      }
      /** Used to provide a single selection model to a component. */


      var MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
        provide: MatDateSelectionModel,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
        useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
      };
      /** @docs-private */

      function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
        return parent || new MatRangeDateSelectionModel(adapter);
      }
      /** Used to provide a range selection model to a component. */


      var MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
        provide: MatDateSelectionModel,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
        useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token used to customize the date range selection behavior. */

      var MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_DATE_RANGE_SELECTION_STRATEGY');
      /** Provides the default date range selection behavior. */

      var DefaultMatCalendarRangeStrategy = /*#__PURE__*/function () {
        function DefaultMatCalendarRangeStrategy(_dateAdapter) {
          _classCallCheck(this, DefaultMatCalendarRangeStrategy);

          this._dateAdapter = _dateAdapter;
        }

        _createClass(DefaultMatCalendarRangeStrategy, [{
          key: "selectionFinished",
          value: function selectionFinished(date, currentRange) {
            var start = currentRange.start,
                end = currentRange.end;

            if (start == null) {
              start = date;
            } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
              end = date;
            } else {
              start = date;
              end = null;
            }

            return new DateRange(start, end);
          }
        }, {
          key: "createPreview",
          value: function createPreview(activeDate, currentRange) {
            var start = null;
            var end = null;

            if (currentRange.start && !currentRange.end && activeDate) {
              start = currentRange.start;
              end = activeDate;
            }

            return new DateRange(start, end);
          }
        }]);

        return DefaultMatCalendarRangeStrategy;
      }();

      DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) {
        return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      DefaultMatCalendarRangeStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: DefaultMatCalendarRangeStrategy,
        factory: DefaultMatCalendarRangeStrategy.ɵfac
      });

      DefaultMatCalendarRangeStrategy.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
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


      var DAYS_PER_WEEK = 7;
      /**
       * An internal component used to display a single month in the datepicker.
       * @docs-private
       */

      var MatMonthView = /*#__PURE__*/function () {
        function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
          _classCallCheck(this, MatMonthView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateFormats = _dateFormats;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rangeStrategy = _rangeStrategy;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new date is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
          }

          this._activeDate = this._dateAdapter.today();
        }
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */


        _createClass(MatMonthView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setRanges(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this10 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this10._init();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Handles when a new date is selected. */

        }, {
          key: "_dateSelected",
          value: function _dateSelected(event) {
            var date = event.value;

            var selectedYear = this._dateAdapter.getYear(this.activeDate);

            var selectedMonth = this._dateAdapter.getMonth(this.activeDate);

            var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);

            var rangeStartDate;
            var rangeEndDate;

            if (this._selected instanceof DateRange) {
              rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
              rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
            } else {
              rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
            }

            if (rangeStartDate !== date || rangeEndDate !== date) {
              this.selectedChange.emit(selectedDate);
            }

            this._userSelection.emit({
              value: selectedDate,
              event: event.event
            });
          }
          /** Handles keydown events on the calendar body when calendar is in month view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                  this._dateSelected({
                    value: this._dateAdapter.getDate(this._activeDate),
                    event: event
                  }); // Prevent unexpected default actions such as form submission.


                  event.preventDefault();
                }

                return;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]:
                // Abort the current range selection if the user presses escape mid-selection.
                if (this._previewEnd != null) {
                  this._previewStart = this._previewEnd = null;
                  this.selectedChange.emit(null);

                  this._userSelection.emit({
                    value: null,
                    event: event
                  });

                  event.preventDefault();
                  event.stopPropagation(); // Prevents the overlay from closing.
                }

                return;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
          /** Initializes this month view. */

        }, {
          key: "_init",
          value: function _init() {
            this._setRanges(this.selected);

            this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
            this._monthLabel = this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();

            var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);

            this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

            this._initWeekdays();

            this._createWeekCells();

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell(movePreview) {
            this._matCalendarBody._focusActiveCell(movePreview);
          }
          /** Called when the user has activated a new cell and the preview needs to be updated. */

        }, {
          key: "_previewChanged",
          value: function _previewChanged(_ref) {
            var event = _ref.event,
                cell = _ref.value;

            if (this._rangeStrategy) {
              // We can assume that this will be a range, because preview
              // events aren't fired for single date selections.
              var _value = cell ? cell.rawValue : null;

              var previewRange = this._rangeStrategy.createPreview(_value, this.selected, event);

              this._previewStart = this._getCellCompareValue(previewRange.start);
              this._previewEnd = this._getCellCompareValue(previewRange.end); // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
              // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
              // when navigating one month back using the keyboard which will cause this handler
              // to throw a "changed after checked" error when updating the preview state.

              this._changeDetectorRef.detectChanges();
            }
          }
          /** Initializes the weekdays. */

        }, {
          key: "_initWeekdays",
          value: function _initWeekdays() {
            var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();

            var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');

            var longWeekdays = this._dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.


            var weekdays = longWeekdays.map(function (_long, i) {
              return {
                "long": _long,
                narrow: narrowWeekdays[i]
              };
            });
            this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
          }
          /** Creates MatCalendarCells for the dates in this month. */

        }, {
          key: "_createWeekCells",
          value: function _createWeekCells() {
            var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);

            var dateNames = this._dateAdapter.getDateNames();

            this._weeks = [[]];

            for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
              if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);

                cell = 0;
              }

              var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);

              var enabled = this._shouldEnableDate(date);

              var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);

              var cellClasses = this.dateClass ? this.dateClass(date) : undefined;

              this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
            }
          }
          /** Date filter for the month */

        }, {
          key: "_shouldEnableDate",
          value: function _shouldEnableDate(date) {
            return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
          }
          /**
           * Gets the date in this month that the given Date falls on.
           * Returns null if the given Date is in another month.
           */

        }, {
          key: "_getDateInCurrentMonth",
          value: function _getDateInCurrentMonth(date) {
            return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
          }
          /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */

        }, {
          key: "_hasSameMonthAndYear",
          value: function _hasSameMonthAndYear(d1, d2) {
            return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
          }
          /** Gets the value that will be used to one cell to another. */

        }, {
          key: "_getCellCompareValue",
          value: function _getCellCompareValue(date) {
            if (date) {
              // We use the time since the Unix epoch to compare dates in this view, rather than the
              // cell values, because we need to support ranges that span across multiple months/years.
              var year = this._dateAdapter.getYear(date);

              var month = this._dateAdapter.getMonth(date);

              var day = this._dateAdapter.getDate(date);

              return new Date(year, month, day).getTime();
            }

            return null;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the current range based on a model value. */

        }, {
          key: "_setRanges",
          value: function _setRanges(selectedValue) {
            if (selectedValue instanceof DateRange) {
              this._rangeStart = this._getCellCompareValue(selectedValue.start);
              this._rangeEnd = this._getCellCompareValue(selectedValue.end);
              this._isRange = true;
            } else {
              this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
              this._isRange = false;
            }

            this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
            this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
          }
        }]);

        return MatMonthView;
      }();

      MatMonthView.ɵfac = function MatMonthView_Factory(t) {
        return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
      };

      MatMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatMonthView,
        selectors: [["mat-month-view"]],
        viewQuery: function MatMonthView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedChange: "selectedChange",
          _userSelection: "_userSelection",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMonthView"],
        decls: 7,
        vars: 13,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["colspan", "7", "aria-hidden", "true", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "selectedValueChange", "previewChange", "keydown"], ["scope", "col"]],
        template: function MatMonthView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) {
              return ctx._dateSelected($event);
            })("previewChange", function MatMonthView_Template_tbody_previewChange_6_listener($event) {
              return ctx._previewChanged($event);
            })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._weekdays);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMonthView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatMonthView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMonthView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-month-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n    </tr>\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matMonthView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
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


      var yearsPerPage = 24;
      var yearsPerRow = 4;
      /**
       * An internal component used to display a year selector in the datepicker.
       * @docs-private
       */

      var MatMultiYearView = /*#__PURE__*/function () {
        function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
          _classCallCheck(this, MatMultiYearView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new year is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected year. This doesn't imply a change on the selected date */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          this._activeDate = this._dateAdapter.today();
        }
        /** The date to display in this multi-year view (everything other than the year is ignored). */


        _createClass(MatMultiYearView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setSelectedYear(value);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this11 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this11._init();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Initializes this multi-year view. */

        }, {
          key: "_init",
          value: function _init() {
            var _this12 = this;

            this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today()); // We want a range years such that we maximize the number of
            // enabled dates visible at once. This prevents issues where the minimum year
            // is the last item of a page OR the maximum year is the first item of a page.
            // The offset from the active year to the "slot" for the starting year is the
            // *actual* first rendered year in the multi-year view.

            var activeYear = this._dateAdapter.getYear(this._activeDate);

            var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
            this._years = [];

            for (var i = 0, row = []; i < yearsPerPage; i++) {
              row.push(minYearOfPage + i);

              if (row.length == yearsPerRow) {
                this._years.push(row.map(function (year) {
                  return _this12._createCellForYear(year);
                }));

                row = [];
              }
            }

            this._changeDetectorRef.markForCheck();
          }
          /** Handles when a new year is selected. */

        }, {
          key: "_yearSelected",
          value: function _yearSelected(event) {
            var year = event.value;
            this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));

            var month = this._dateAdapter.getMonth(this.activeDate);

            var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));

            this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in multi-year view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                this._yearSelected({
                  value: this._dateAdapter.getYear(this._activeDate),
                  event: event
                });

                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
        }, {
          key: "_getActiveCell",
          value: function _getActiveCell() {
            return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            this._matCalendarBody._focusActiveCell();
          }
          /** Creates an MatCalendarCell for the given year. */

        }, {
          key: "_createCellForYear",
          value: function _createCellForYear(year) {
            var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));

            return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
          }
          /** Whether the given year is enabled. */

        }, {
          key: "_shouldEnableYear",
          value: function _shouldEnableYear(year) {
            // disable if the year is greater than maxDate lower than minDate
            if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
              return false;
            } // enable if it reaches here and there's no filter defined


            if (!this.dateFilter) {
              return true;
            }

            var firstOfYear = this._dateAdapter.createDate(year, 0, 1); // If any date in the year is enabled count the year as enabled.


            for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the currently-highlighted year based on a model value. */

        }, {
          key: "_setSelectedYear",
          value: function _setSelectedYear(value) {
            this._selectedYear = null;

            if (value instanceof DateRange) {
              var displayValue = value.start || value.end;

              if (displayValue) {
                this._selectedYear = this._dateAdapter.getYear(displayValue);
              }
            } else if (value) {
              this._selectedYear = this._dateAdapter.getYear(value);
            }
          }
        }]);

        return MatMultiYearView;
      }();

      MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) {
        return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8));
      };

      MatMultiYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatMultiYearView,
        selectors: [["mat-multi-year-view"]],
        viewQuery: function MatMultiYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMultiYearView"],
        decls: 5,
        vars: 7,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function MatMultiYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._yearSelected($event);
            })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
          }
        },
        directives: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMultiYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatMultiYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMultiYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-multi-year-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matMultiYearView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
          }]
        });
      })();

      function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
        var year1 = dateAdapter.getYear(date1);
        var year2 = dateAdapter.getYear(date2);
        var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
        return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
      }
      /**
       * When the multi-year view is first opened, the active year will be in view.
       * So we compute how many years are between the active year and the *slot* where our
       * "startingYear" will render when paged into view.
       */


      function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
        var activeYear = dateAdapter.getYear(activeDate);
        return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
      }
      /**
       * We pick a "starting" year such that either the maximum year would be at the end
       * or the minimum year would be at the beginning of a page.
       */


      function getStartingYear(dateAdapter, minDate, maxDate) {
        var startingYear = 0;

        if (maxDate) {
          var maxYear = dateAdapter.getYear(maxDate);
          startingYear = maxYear - yearsPerPage + 1;
        } else if (minDate) {
          startingYear = dateAdapter.getYear(minDate);
        }

        return startingYear;
      }
      /** Gets remainder that is non-negative, even if first number is negative */


      function euclideanModulo(a, b) {
        return (a % b + b) % b;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An internal component used to display a single year in the datepicker.
       * @docs-private
       */


      var MatYearView = /*#__PURE__*/function () {
        function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
          _classCallCheck(this, MatYearView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateFormats = _dateFormats;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new month is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected month. This doesn't imply a change on the selected date */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
          }

          this._activeDate = this._dateAdapter.today();
        }
        /** The date to display in this year view (everything other than the year is ignored). */


        _createClass(MatYearView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setSelectedMonth(value);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this13 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this13._init();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Handles when a new month is selected. */

        }, {
          key: "_monthSelected",
          value: function _monthSelected(event) {
            var month = event.value;

            var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

            this.monthSelected.emit(normalizedDate);

            var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);

            this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in year view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                this._monthSelected({
                  value: this._dateAdapter.getMonth(this._activeDate),
                  event: event
                });

                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
          /** Initializes this year view. */

        }, {
          key: "_init",
          value: function _init() {
            var _this14 = this;

            this._setSelectedMonth(this.selected);

            this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
            this._yearLabel = this._dateAdapter.getYearName(this.activeDate);

            var monthNames = this._dateAdapter.getMonthNames('short'); // First row of months only contains 5 elements so we can fit the year label on the same row.


            this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) {
              return row.map(function (month) {
                return _this14._createCellForMonth(month, monthNames[month]);
              });
            });

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            this._matCalendarBody._focusActiveCell();
          }
          /**
           * Gets the month in this year that the given Date falls on.
           * Returns null if the given Date is in another year.
           */

        }, {
          key: "_getMonthInCurrentYear",
          value: function _getMonthInCurrentYear(date) {
            return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
          }
          /** Creates an MatCalendarCell for the given month. */

        }, {
          key: "_createCellForMonth",
          value: function _createCellForMonth(month, monthName) {
            var ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);

            return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
          }
          /** Whether the given month is enabled. */

        }, {
          key: "_shouldEnableMonth",
          value: function _shouldEnableMonth(month) {
            var activeYear = this._dateAdapter.getYear(this.activeDate);

            if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
              return false;
            }

            if (!this.dateFilter) {
              return true;
            }

            var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1); // If any date in the month is enabled count the month as enabled.


            for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is after this.maxDate, considering
           * just the month and year of this.maxDate
           */

        }, {
          key: "_isYearAndMonthAfterMaxDate",
          value: function _isYearAndMonthAfterMaxDate(year, month) {
            if (this.maxDate) {
              var maxYear = this._dateAdapter.getYear(this.maxDate);

              var maxMonth = this._dateAdapter.getMonth(this.maxDate);

              return year > maxYear || year === maxYear && month > maxMonth;
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is before this.minDate, considering
           * just the month and year of this.minDate
           */

        }, {
          key: "_isYearAndMonthBeforeMinDate",
          value: function _isYearAndMonthBeforeMinDate(year, month) {
            if (this.minDate) {
              var minYear = this._dateAdapter.getYear(this.minDate);

              var minMonth = this._dateAdapter.getMonth(this.minDate);

              return year < minYear || year === minYear && month < minMonth;
            }

            return false;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the currently-selected month based on a model value. */

        }, {
          key: "_setSelectedMonth",
          value: function _setSelectedMonth(value) {
            if (value instanceof DateRange) {
              this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
            } else {
              this._selectedMonth = this._getMonthInCurrentYear(value);
            }
          }
        }]);

        return MatYearView;
      }();

      MatYearView.ɵfac = function MatYearView_Factory(t) {
        return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8));
      };

      MatYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatYearView,
        selectors: [["mat-year-view"]],
        viewQuery: function MatYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter"
        },
        outputs: {
          selectedChange: "selectedChange",
          monthSelected: "monthSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matYearView"],
        decls: 5,
        vars: 9,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function MatYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._monthSelected($event);
            })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
          }
        },
        directives: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-year-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matYearView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
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

      /** Default header for MatCalendar */


      var MatCalendarHeader = /*#__PURE__*/function () {
        function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
          _classCallCheck(this, MatCalendarHeader);

          this._intl = _intl;
          this.calendar = calendar;
          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          this.calendar.stateChanges.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
        }
        /** The label for the current calendar view. */


        _createClass(MatCalendarHeader, [{
          key: "periodButtonText",
          get: function get() {
            if (this.calendar.currentView == 'month') {
              return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
            }

            if (this.calendar.currentView == 'year') {
              return this._dateAdapter.getYearName(this.calendar.activeDate);
            } // The offset from the active year to the "slot" for the starting year is the
            // *actual* first rendered year in the multi-year view, and the last year is
            // just yearsPerPage - 1 away.


            var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);

            var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
            var maxYearOfPage = minYearOfPage + yearsPerPage - 1;

            var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));

            var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));

            return this._intl.formatYearRange(minYearName, maxYearName);
          }
        }, {
          key: "periodButtonLabel",
          get: function get() {
            return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
          }
          /** The label for the previous button. */

        }, {
          key: "prevButtonLabel",
          get: function get() {
            return {
              'month': this._intl.prevMonthLabel,
              'year': this._intl.prevYearLabel,
              'multi-year': this._intl.prevMultiYearLabel
            }[this.calendar.currentView];
          }
          /** The label for the next button. */

        }, {
          key: "nextButtonLabel",
          get: function get() {
            return {
              'month': this._intl.nextMonthLabel,
              'year': this._intl.nextYearLabel,
              'multi-year': this._intl.nextMultiYearLabel
            }[this.calendar.currentView];
          }
          /** Handles user clicks on the period label. */

        }, {
          key: "currentPeriodClicked",
          value: function currentPeriodClicked() {
            this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
          }
          /** Handles user clicks on the previous button. */

        }, {
          key: "previousClicked",
          value: function previousClicked() {
            this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
          }
          /** Handles user clicks on the next button. */

        }, {
          key: "nextClicked",
          value: function nextClicked() {
            this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
          }
          /** Whether the previous period button is enabled. */

        }, {
          key: "previousEnabled",
          value: function previousEnabled() {
            if (!this.calendar.minDate) {
              return true;
            }

            return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
          }
          /** Whether the next period button is enabled. */

        }, {
          key: "nextEnabled",
          value: function nextEnabled() {
            return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
          }
          /** Whether the two dates represent the same view in the current view mode (month or year). */

        }, {
          key: "_isSameView",
          value: function _isSameView(date1, date2) {
            if (this.calendar.currentView == 'month') {
              return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
            }

            if (this.calendar.currentView == 'year') {
              return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
            } // Otherwise we are in 'multi-year' view.


            return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
          }
        }]);

        return MatCalendarHeader;
      }();

      MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) {
        return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatCalendar;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      MatCalendarHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendarHeader,
        selectors: [["mat-calendar-header"]],
        exportAs: ["matCalendarHeader"],
        ngContentSelectors: _c1,
        decls: 9,
        vars: 8,
        consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], [1, "mat-calendar-arrow"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]],
        template: function MatCalendarHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() {
              return ctx.currentPeriodClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_7_listener() {
              return ctx.previousClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_8_listener() {
              return ctx.nextClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.periodButtonText, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView != "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.previousEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.nextEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkAriaLive"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendarHeader.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: MatCalendar,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return MatCalendar;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-calendar-header',
            template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            cdkAriaLive=\"polite\">\n      {{periodButtonText}}\n      <div class=\"mat-calendar-arrow\"\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
            exportAs: 'matCalendarHeader',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: MatCalendar,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                return MatCalendar;
              })]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /**
       * A calendar that is used as part of the datepicker.
       * @docs-private
       */


      var MatCalendar = /*#__PURE__*/function () {
        function MatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
          var _this15 = this;

          _classCallCheck(this, MatCalendar);

          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          this._changeDetectorRef = _changeDetectorRef;
          /**
           * Used for scheduling that focus should be moved to the active cell on the next tick.
           * We need to schedule it, rather than do it immediately, because we have to wait
           * for Angular to re-evaluate the view children.
           */

          this._moveFocusOnNextTick = false;
          /** Whether the calendar should be started in month or year view. */

          this.startView = 'month';
          /**
           * Emits when the currently selected date changes.
           * @breaking-change 11.0.0 Emitted value to change to `D | null`.
           */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the year chosen in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the month chosen in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits whenever there is a state change that the header may need to respond to.
           */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
          }

          this._intlChanges = _intl.changes.subscribe(function () {
            _changeDetectorRef.markForCheck();

            _this15.stateChanges.next();
          });
        }
        /** A date representing the period (month or year) to start the calendar in. */


        _createClass(MatCalendar, [{
          key: "startAt",
          get: function get() {
            return this._startAt;
          },
          set: function set(value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            }
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /**
           * The current active date. This determines which time period is shown and which date is
           * highlighted when using keyboard navigation.
           */

        }, {
          key: "activeDate",
          get: function get() {
            return this._clampedActiveDate;
          },
          set: function set(value) {
            this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
            this.stateChanges.next();

            this._changeDetectorRef.markForCheck();
          }
          /** Whether the calendar is in month view. */

        }, {
          key: "currentView",
          get: function get() {
            return this._currentView;
          },
          set: function set(value) {
            this._currentView = value;
            this._moveFocusOnNextTick = true;

            this._changeDetectorRef.markForCheck();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
            this.activeDate = this.startAt || this._dateAdapter.today(); // Assign to the private property since we don't want to move focus on init.

            this._currentView = this.startView;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this._moveFocusOnNextTick) {
              this._moveFocusOnNextTick = false;
              this.focusActiveCell();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlChanges.unsubscribe();

            this.stateChanges.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];

            if (change && !change.firstChange) {
              var view = this._getCurrentViewComponent();

              if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();

                view._init();
              }
            }

            this.stateChanges.next();
          }
        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this._getCurrentViewComponent()._focusActiveCell(false);
          }
          /** Updates today's date after an update of the active date */

        }, {
          key: "updateTodaysDate",
          value: function updateTodaysDate() {
            var currentView = this.currentView;
            var view;

            if (currentView === 'month') {
              view = this.monthView;
            } else if (currentView === 'year') {
              view = this.yearView;
            } else {
              view = this.multiYearView;
            }

            view._init();
          }
          /** Handles date selection in the month view. */

        }, {
          key: "_dateSelected",
          value: function _dateSelected(event) {
            var date = event.value;

            if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
              // @breaking-change 11.0.0 remove non-null assertion
              // once the `selectedChange` is allowed to be null.
              this.selectedChange.emit(date);
            }

            this._userSelection.emit(event);
          }
          /** Handles year selection in the multiyear view. */

        }, {
          key: "_yearSelectedInMultiYearView",
          value: function _yearSelectedInMultiYearView(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Handles month selection in the year view. */

        }, {
          key: "_monthSelectedInYearView",
          value: function _monthSelectedInYearView(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
          /** Handles year/month selection in the multi-year/year views. */

        }, {
          key: "_goToDateInView",
          value: function _goToDateInView(date, view) {
            this.activeDate = date;
            this.currentView = view;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Returns the component instance that corresponds to the current calendar view. */

        }, {
          key: "_getCurrentViewComponent",
          value: function _getCurrentViewComponent() {
            return this.monthView || this.yearView || this.multiYearView;
          }
        }]);

        return MatCalendar;
      }();

      MatCalendar.ɵfac = function MatCalendar_Factory(t) {
        return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      MatCalendar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendar,
        selectors: [["mat-calendar"]],
        viewQuery: function MatCalendar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMonthView, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatYearView, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMultiYearView, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
          }
        },
        hostAttrs: [1, "mat-calendar"],
        inputs: {
          startView: "startView",
          startAt: "startAt",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          headerComponent: "headerComponent",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          _userSelection: "_userSelection"
        },
        exportAs: ["matCalendar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 5,
        consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange"]],
        template: function MatCalendar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 8, "mat-month-view", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 5, "mat-year-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 5, "mat-multi-year-view", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentView);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "multi-year");
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], MatMonthView, MatYearView, MatMultiYearView],
        styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendar.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      MatCalendar.propDecorators = {
        headerComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatMonthView]
        }],
        yearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatYearView]
        }],
        multiYearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatMultiYearView]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-calendar',
            template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      [comparisonStart]=\"comparisonStart\"\n      [comparisonEnd]=\"comparisonEnd\"\n      (_userSelection)=\"_dateSelected($event)\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
            host: {
              'class': 'mat-calendar'
            },
            exportAs: 'matCalendar',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
            styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"]
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          monthView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatMonthView]
          }],
          yearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatYearView]
          }],
          multiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatMultiYearView]
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
       * Animations used by the Material datepicker.
       * @docs-private
       */


      var matDatepickerAnimations = {
        /** Transforms the height of the datepicker's calendar. */
        transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0,
          transform: 'scale(1, 0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          transform: 'scale(1, 1)'
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })))]),

        /** Fades in the content of the calendar. */
        fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('fadeInCalendar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1
        })), // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate a unique ID for each datepicker instance. */

      var datepickerUid = 0;
      /** Injection token that determines the scroll handling while the calendar is open. */

      var MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-datepicker-scroll-strategy');
      /** @docs-private */

      function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_DATEPICKER_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
        useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
      }; // Boilerplate for applying mixins to MatDatepickerContent.

      /** @docs-private */

      var MatDatepickerContentBase = function MatDatepickerContentBase(_elementRef) {
        _classCallCheck(this, MatDatepickerContentBase);

        this._elementRef = _elementRef;
      };

      var _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(MatDatepickerContentBase);
      /**
       * Component used as the content for the datepicker dialog and popup. We use this instead of using
       * MatCalendar directly as the content so we can control the initial focus. This also gives us a
       * place to put additional features of the popup that are not part of the calendar itself in the
       * future. (e.g. confirmation buttons).
       * @docs-private
       */


      var MatDatepickerContent = /*#__PURE__*/function (_MatDatepickerContent) {
        _inherits(MatDatepickerContent, _MatDatepickerContent);

        var _super4 = _createSuper(MatDatepickerContent);

        function MatDatepickerContent(elementRef,
        /**
         * @deprecated `_changeDetectorRef`, `_model` and `_rangeSelectionStrategy`
         * parameters to become required.
         * @breaking-change 11.0.0
         */
        _changeDetectorRef, _model, _dateAdapter, _rangeSelectionStrategy) {
          var _this16;

          _classCallCheck(this, MatDatepickerContent);

          _this16 = _super4.call(this, elementRef);
          _this16._changeDetectorRef = _changeDetectorRef;
          _this16._model = _model;
          _this16._dateAdapter = _dateAdapter;
          _this16._rangeSelectionStrategy = _rangeSelectionStrategy;
          /** Current state of the animation. */

          _this16._animationState = 'enter';
          /** Emits when an animation has finished. */

          _this16._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          return _this16;
        }

        _createClass(MatDatepickerContent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._calendar.focusActiveCell();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._animationDone.complete();
          }
        }, {
          key: "_handleUserSelection",
          value: function _handleUserSelection(event) {
            // @breaking-change 11.0.0 Remove null checks for _model,
            // _rangeSelectionStrategy and _dateAdapter.
            if (this._model && this._dateAdapter) {
              var selection = this._model.selection;
              var _value2 = event.value;
              var isRange = selection instanceof DateRange; // If we're selecting a range and we have a selection strategy, always pass the value through
              // there. Otherwise don't assign null values to the model, unless we're selecting a range.
              // A null value when picking a range means that the user cancelled the selection (e.g. by
              // pressing escape), whereas when selecting a single value it means that the value didn't
              // change. This isn't very intuitive, but it's here for backwards-compatibility.

              if (isRange && this._rangeSelectionStrategy) {
                var newSelection = this._rangeSelectionStrategy.selectionFinished(_value2, selection, event.event);

                this._model.updateSelection(newSelection, this);
              } else if (_value2 && (isRange || !this._dateAdapter.sameDate(_value2, selection))) {
                this._model.add(_value2);
              }
            }

            if (!this._model || this._model.isComplete()) {
              this.datepicker.close();
            }
          }
        }, {
          key: "_startExitAnimation",
          value: function _startExitAnimation() {
            this._animationState = 'void'; // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef`.

            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_getSelected",
          value: function _getSelected() {
            // @breaking-change 11.0.0 Remove null check for `_model`.
            return this._model ? this._model.selection : null;
          }
        }]);

        return MatDatepickerContent;
      }(_MatDatepickerContentMixinBase);

      MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) {
        return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
      };

      MatDatepickerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepickerContent,
        selectors: [["mat-datepicker-content"]],
        viewQuery: function MatDatepickerContent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendar, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-content"],
        hostVars: 3,
        hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler() {
              return ctx._animationDone.next();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matDatepickerContent"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 13,
        consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "yearSelected", "monthSelected", "_userSelection"]],
        template: function MatDatepickerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-calendar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_0_listener($event) {
              return ctx.datepicker._selectYear($event);
            })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_0_listener($event) {
              return ctx.datepicker._selectMonth($event);
            })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_0_listener($event) {
              return ctx._handleUserSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._minDate)("maxDate", ctx.datepicker._maxDate)("dateFilter", ctx.datepicker._dateFilter)("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter");
          }
        },
        directives: [MatCalendar, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkTrapFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"],
        encapsulation: 2,
        data: {
          animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
        },
        changeDetection: 0
      });

      MatDatepickerContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: MatDateSelectionModel
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
          }]
        }];
      };

      MatDatepickerContent.propDecorators = {
        _calendar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendar]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker-content',
            template: "<mat-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._minDate\"\n    [maxDate]=\"datepicker._maxDate\"\n    [dateFilter]=\"datepicker._dateFilter\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\">\n</mat-calendar>\n",
            host: {
              'class': 'mat-datepicker-content',
              '[@transformPanel]': '_animationState',
              '(@transformPanel.done)': '_animationDone.next()',
              '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
            },
            animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
            exportAs: 'matDatepickerContent',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            inputs: ['color'],
            styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: MatDateSelectionModel
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }]
          }];
        }, {
          _calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendar]
          }]
        });
      })();
      /** Base class for a datepicker. */


      var MatDatepickerBase = /*#__PURE__*/function () {
        function MatDatepickerBase(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document, _model) {
          _classCallCheck(this, MatDatepickerBase);

          this._dialog = _dialog;
          this._overlay = _overlay;
          this._ngZone = _ngZone;
          this._viewContainerRef = _viewContainerRef;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._document = _document;
          this._model = _model;
          /** The view that the calendar should start in. */

          this.startView = 'month';
          this._touchUi = false;
          /** Preferred position of the datepicker in the X axis. */

          this.xPosition = 'start';
          /** Preferred position of the datepicker in the Y axis. */

          this.yPosition = 'below';
          /**
           * Emits selected year in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits selected month in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the datepicker has been opened. */

          this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the datepicker has been closed. */

          this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this._opened = false;
          /** The id for the datepicker calendar. */

          this.id = "mat-datepicker-".concat(datepickerUid++);
          /** The element that was focused before the datepicker was opened. */

          this._focusedElementBeforeOpen = null;
          /** Emits when the datepicker is disabled. */

          this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          this._scrollStrategy = scrollStrategy;
        }
        /** The date to open the calendar to initially. */


        _createClass(MatDatepickerBase, [{
          key: "startAt",
          get: function get() {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.getStartValue() : null);
          },
          set: function set(value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** Color palette to use on the datepicker's calendar. */

        }, {
          key: "color",
          get: function get() {
            return this._color || (this._datepickerInput ? this._datepickerInput.getThemePalette() : undefined);
          },
          set: function set(value) {
            this._color = value;
          }
          /**
           * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
           * than a popup and elements have more padding to allow for bigger touch targets.
           */

        }, {
          key: "touchUi",
          get: function get() {
            return this._touchUi;
          },
          set: function set(value) {
            this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
          /** Whether the datepicker pop-up should be disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled === undefined && this._datepickerInput ? this._datepickerInput.disabled : !!this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._disabledChange.next(newValue);
            }
          }
          /** Whether the calendar is open. */

        }, {
          key: "opened",
          get: function get() {
            return this._opened;
          },
          set: function set(value) {
            value ? this.open() : this.close();
          }
          /** The minimum selectable date. */

        }, {
          key: "_minDate",
          get: function get() {
            return this._datepickerInput && this._datepickerInput.min;
          }
          /** The maximum selectable date. */

        }, {
          key: "_maxDate",
          get: function get() {
            return this._datepickerInput && this._datepickerInput.max;
          }
        }, {
          key: "_dateFilter",
          get: function get() {
            return this._datepickerInput && this._datepickerInput.dateFilter;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var positionChange = changes['xPosition'] || changes['yPosition'];

            if (positionChange && !positionChange.firstChange && this._popupRef) {
              this._setConnectedPositions(this._popupRef.getConfig().positionStrategy);

              if (this.opened) {
                this._popupRef.updatePosition();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyPopup();

            this.close();

            this._disabledChange.complete();
          }
          /** Selects the given date */

        }, {
          key: "select",
          value: function select(date) {
            this._model.add(date);
          }
          /** Emits the selected year in multiyear view */

        }, {
          key: "_selectYear",
          value: function _selectYear(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Emits selected month in year view */

        }, {
          key: "_selectMonth",
          value: function _selectMonth(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
          /**
           * Register an input with this datepicker.
           * @param input The datepicker input to register with this datepicker.
           * @returns Selection model that the input should hook itself up to.
           */

        }, {
          key: "_registerInput",
          value: function _registerInput(input) {
            if (this._datepickerInput) {
              throw Error('A MatDatepicker can only be associated with a single input.');
            }

            this._datepickerInput = input;
            return this._model;
          }
          /** Open the calendar. */

        }, {
          key: "open",
          value: function open() {
            if (this._opened || this.disabled) {
              return;
            }

            if (!this._datepickerInput) {
              throw Error('Attempted to open an MatDatepicker with no associated input.');
            }

            if (this._document) {
              this._focusedElementBeforeOpen = this._document.activeElement;
            }

            this.touchUi ? this._openAsDialog() : this._openAsPopup();
            this._opened = true;
            this.openedStream.emit();
          }
          /** Close the calendar. */

        }, {
          key: "close",
          value: function close() {
            var _this17 = this;

            if (!this._opened) {
              return;
            }

            if (this._popupComponentRef && this._popupRef) {
              var instance = this._popupComponentRef.instance;

              instance._startExitAnimation();

              instance._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
                return _this17._destroyPopup();
              });
            }

            if (this._dialogRef) {
              this._dialogRef.close();

              this._dialogRef = null;
            }

            var completeClose = function completeClose() {
              // The `_opened` could've been reset already if
              // we got two events in quick succession.
              if (_this17._opened) {
                _this17._opened = false;

                _this17.closedStream.emit();

                _this17._focusedElementBeforeOpen = null;
              }
            };

            if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
              // Because IE moves focus asynchronously, we can't count on it being restored before we've
              // marked the datepicker as closed. If the event fires out of sequence and the element that
              // we're refocusing opens the datepicker on focus, the user could be stuck with not being
              // able to close the calendar at all. We work around it by making the logic, that marks
              // the datepicker as closed, async as well.
              this._focusedElementBeforeOpen.focus();

              setTimeout(completeClose);
            } else {
              completeClose();
            }
          }
          /** Open the calendar as a dialog. */

        }, {
          key: "_openAsDialog",
          value: function _openAsDialog() {
            var _this18 = this;

            // Usually this would be handled by `open` which ensures that we can only have one overlay
            // open at a time, however since we reset the variables in async handlers some overlays
            // may slip through if the user opens and closes multiple times in quick succession (e.g.
            // by holding down the enter key).
            if (this._dialogRef) {
              this._dialogRef.close();
            }

            this._dialogRef = this._dialog.open(MatDatepickerContent, {
              direction: this._dir ? this._dir.value : 'ltr',
              viewContainerRef: this._viewContainerRef,
              panelClass: 'mat-datepicker-dialog',
              // These values are all the same as the defaults, but we set them explicitly so that the
              // datepicker dialog behaves consistently even if the user changed the defaults.
              hasBackdrop: true,
              disableClose: false,
              width: '',
              height: '',
              minWidth: '',
              minHeight: '',
              maxWidth: '80vw',
              maxHeight: '',
              position: {},
              autoFocus: true,
              // `MatDialog` has focus restoration built in, however we want to disable it since the
              // datepicker also has focus restoration for dropdown mode. We want to do this, in order
              // to ensure that the timing is consistent between dropdown and dialog modes since `MatDialog`
              // restores focus when the animation is finished, but the datepicker does it immediately.
              // Furthermore, this avoids any conflicts where the datepicker consumer might move focus
              // inside the `closed` event which is dispatched immediately.
              restoreFocus: false
            });

            this._dialogRef.afterClosed().subscribe(function () {
              return _this18.close();
            });

            this._forwardContentValues(this._dialogRef.componentInstance);
          }
          /** Open the calendar as a popup. */

        }, {
          key: "_openAsPopup",
          value: function _openAsPopup() {
            var _this19 = this;

            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);

            this._destroyPopup();

            this._createPopup();

            this._popupComponentRef = this._popupRef.attach(portal);

            this._forwardContentValues(this._popupComponentRef.instance); // Update the position once the calendar has rendered.


            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
              _this19._popupRef.updatePosition();
            });
          }
          /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */

        }, {
          key: "_forwardContentValues",
          value: function _forwardContentValues(instance) {
            instance.datepicker = this;
            instance.color = this.color;
          }
          /** Create the popup. */

        }, {
          key: "_createPopup",
          value: function _createPopup() {
            var _this20 = this;

            var positionStrategy = this._overlay.position().flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();

            var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
              positionStrategy: this._setConnectedPositions(positionStrategy),
              hasBackdrop: true,
              backdropClass: 'mat-overlay-transparent-backdrop',
              direction: this._dir,
              scrollStrategy: this._scrollStrategy(),
              panelClass: 'mat-datepicker-popup'
            });
            this._popupRef = this._overlay.create(overlayConfig);

            this._popupRef.overlayElement.setAttribute('role', 'dialog');

            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function (event) {
              // Closing on alt + up is only valid when there's an input associated with the datepicker.
              return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] || _this20._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
            }))).subscribe(function (event) {
              if (event) {
                event.preventDefault();
              }

              _this20.close();
            });
          }
          /** Destroys the current popup overlay. */

        }, {
          key: "_destroyPopup",
          value: function _destroyPopup() {
            if (this._popupRef) {
              this._popupRef.dispose();

              this._popupRef = this._popupComponentRef = null;
            }
          }
          /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */

        }, {
          key: "_setConnectedPositions",
          value: function _setConnectedPositions(strategy) {
            var primaryX = this.xPosition === 'end' ? 'end' : 'start';
            var secondaryX = primaryX === 'start' ? 'end' : 'start';
            var primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
            var secondaryY = primaryY === 'top' ? 'bottom' : 'top';
            return strategy.withPositions([{
              originX: primaryX,
              originY: secondaryY,
              overlayX: primaryX,
              overlayY: primaryY
            }, {
              originX: primaryX,
              originY: primaryY,
              overlayX: primaryX,
              overlayY: secondaryY
            }, {
              originX: secondaryX,
              originY: secondaryY,
              overlayX: secondaryX,
              overlayY: primaryY
            }, {
              originX: secondaryX,
              originY: primaryY,
              overlayX: secondaryX,
              overlayY: secondaryY
            }]);
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
        }]);

        return MatDatepickerBase;
      }();

      MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) {
        return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDateSelectionModel));
      };

      MatDatepickerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerBase,
        inputs: {
          startView: "startView",
          xPosition: "xPosition",
          yPosition: "yPosition",
          startAt: "startAt",
          color: "color",
          touchUi: "touchUi",
          disabled: "disabled",
          opened: "opened",
          calendarHeaderComponent: "calendarHeaderComponent",
          panelClass: "panelClass",
          dateClass: "dateClass"
        },
        outputs: {
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          openedStream: "opened",
          closedStream: "closed"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
      });

      MatDatepickerBase.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATEPICKER_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: MatDateSelectionModel
        }];
      };

      MatDatepickerBase.propDecorators = {
        calendarHeaderComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        touchUi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        xPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['opened']
        }],
        closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['closed']
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: MatDateSelectionModel
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['opened']
          }],
          closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['closed']
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          touchUi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          calendarHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
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
      // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
      // template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
      // if angular adds support for `exportAs: '$implicit'` on directives.

      /** Component responsible for managing the datepicker popup/dialog. */


      var MatDatepicker = /*#__PURE__*/function (_MatDatepickerBase) {
        _inherits(MatDatepicker, _MatDatepickerBase);

        var _super5 = _createSuper(MatDatepicker);

        function MatDatepicker() {
          _classCallCheck(this, MatDatepicker);

          return _super5.apply(this, arguments);
        }

        return MatDatepicker;
      }(MatDatepickerBase);

      MatDatepicker.ɵfac = function MatDatepicker_Factory(t) {
        return ɵMatDatepicker_BaseFactory(t || MatDatepicker);
      };

      MatDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepicker,
        selectors: [["mat-datepicker"]],
        exportAs: ["matDatepicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDatepicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatDatepicker_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatDatepicker);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker',
            template: '',
            exportAs: 'matDatepicker',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]
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
       * An event used for datepicker input and change events. We don't always have access to a native
       * input or change event because the event may have been triggered by the user clicking on the
       * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
       */


      var MatDatepickerInputEvent = function MatDatepickerInputEvent(
      /** Reference to the datepicker input component that emitted the event. */
      target,
      /** Reference to the native input element associated with the datepicker input. */
      targetElement) {
        _classCallCheck(this, MatDatepickerInputEvent);

        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
      };
      /** Base class for datepicker inputs. */


      var MatDatepickerInputBase = /*#__PURE__*/function () {
        function MatDatepickerInputBase(_elementRef, _dateAdapter, _dateFormats) {
          var _this21 = this;

          _classCallCheck(this, MatDatepickerInputBase);

          this._elementRef = _elementRef;
          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          /** Emits when a `change` event is fired on this `<input>`. */

          this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when an `input` event is fired on this `<input>`. */

          this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the value changes (either due to user input or programmatic change). */

          this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the disabled state has changed */

          this._disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          this._onTouched = function () {};

          this._validatorOnChange = function () {};

          this._cvaOnChange = function () {};

          this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** The form control validator for whether the input parses. */

          this._parseValidator = function () {
            return _this21._lastValueValid ? null : {
              'matDatepickerParse': {
                'text': _this21._elementRef.nativeElement.value
              }
            };
          };
          /** The form control validator for the date filter. */


          this._filterValidator = function (control) {
            var controlValue = _this21._getValidDateOrNull(_this21._dateAdapter.deserialize(control.value));

            var dateFilter = _this21._getDateFilter();

            return !dateFilter || !controlValue || dateFilter(controlValue) ? null : {
              'matDatepickerFilter': true
            };
          };
          /** The form control validator for the min date. */


          this._minValidator = function (control) {
            var controlValue = _this21._getValidDateOrNull(_this21._dateAdapter.deserialize(control.value));

            var min = _this21._getMinDate();

            return !min || !controlValue || _this21._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
              'matDatepickerMin': {
                'min': min,
                'actual': controlValue
              }
            };
          };
          /** The form control validator for the max date. */


          this._maxValidator = function (control) {
            var controlValue = _this21._getValidDateOrNull(_this21._dateAdapter.deserialize(control.value));

            var max = _this21._getMaxDate();

            return !max || !controlValue || _this21._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
              'matDatepickerMax': {
                'max': max,
                'actual': controlValue
              }
            };
          };
          /** Whether the last value set on the input was valid. */


          this._lastValueValid = false;

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
          } // Update the displayed date when the locale changes.


          this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
            _this21.value = _this21.value;
          });
        }
        /** The value of the input. */


        _createClass(MatDatepickerInputBase, [{
          key: "value",
          get: function get() {
            return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
          },
          set: function set(value) {
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = this._isValidValue(value);
            value = this._getValidDateOrNull(value);
            var oldDate = this.value;

            this._assignValue(value);

            this._formatValue(value);

            if (!this._dateAdapter.sameDate(oldDate, value)) {
              this._valueChange.emit(value);
            }
          }
          /** Whether the datepicker-input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return !!this._disabled || this._parentDisabled();
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
            var element = this._elementRef.nativeElement;

            if (this._disabled !== newValue) {
              this._disabled = newValue;

              this._disabledChange.emit(newValue);
            } // We need to null check the `blur` method, because it's undefined during SSR.
            // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
            // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
            // element has been inserted.


            if (newValue && this._isInitialized && element.blur) {
              // Normally, native input elements automatically blur if they turn disabled. This behavior
              // is problematic, because it would mean that it triggers another change detection cycle,
              // which then causes a changed after checked error if the input element was focused before.
              element.blur();
            }
          }
          /** Gets the base validator functions. */

        }, {
          key: "_getValidators",
          value: function _getValidators() {
            return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
          }
          /** Registers a date selection model with the input. */

        }, {
          key: "_registerModel",
          value: function _registerModel(model) {
            var _this22 = this;

            this._model = model;

            this._valueChangesSubscription.unsubscribe();

            if (this._pendingValue) {
              this._assignValue(this._pendingValue);
            }

            this._valueChangesSubscription = this._model.selectionChanged.subscribe(function (event) {
              if (event.source !== _this22) {
                var _value3 = _this22._getValueFromModel(event.selection);

                _this22._lastValueValid = _this22._isValidValue(_value3);

                _this22._cvaOnChange(_value3);

                _this22._onTouched();

                _this22._formatValue(_value3);

                _this22.dateInput.emit(new MatDatepickerInputEvent(_this22, _this22._elementRef.nativeElement));

                _this22.dateChange.emit(new MatDatepickerInputEvent(_this22, _this22._elementRef.nativeElement));

                if (_this22._outsideValueChanged) {
                  _this22._outsideValueChanged();
                }
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._valueChangesSubscription.unsubscribe();

            this._localeSubscription.unsubscribe();

            this._valueChange.complete();

            this._disabledChange.complete();
          }
          /** @docs-private */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._validatorOnChange = fn;
          }
          /** @docs-private */

        }, {
          key: "validate",
          value: function validate(c) {
            return this._validator ? this._validator(c) : null;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._cvaOnChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            var isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"];

            if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
              this._openPopup();

              event.preventDefault();
            }
          }
        }, {
          key: "_onInput",
          value: function _onInput(value) {
            var lastValueWasValid = this._lastValueValid;

            var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);

            this._lastValueValid = this._isValidValue(date);
            date = this._getValidDateOrNull(date);

            if (!this._dateAdapter.sameDate(date, this.value)) {
              this._assignValue(date);

              this._cvaOnChange(date);

              this._valueChange.emit(date);

              this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
            } else {
              // Call the CVA change handler for invalid values
              // since this is what marks the control as dirty.
              if (value && !this.value) {
                this._cvaOnChange(date);
              }

              if (lastValueWasValid !== this._lastValueValid) {
                this._validatorOnChange();
              }
            }
          }
        }, {
          key: "_onChange",
          value: function _onChange() {
            this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
          }
          /** Handles blur events on the input. */

        }, {
          key: "_onBlur",
          value: function _onBlur() {
            // Reformat the input only if we have a valid value.
            if (this.value) {
              this._formatValue(this.value);
            }

            this._onTouched();
          }
          /** Formats a value and sets it on the input element. */

        }, {
          key: "_formatValue",
          value: function _formatValue(value) {
            this._elementRef.nativeElement.value = value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Assigns a value to the model. */

        }, {
          key: "_assignValue",
          value: function _assignValue(value) {
            // We may get some incoming values before the model was
            // assigned. Save the value so that we can assign it later.
            if (this._model) {
              this._assignValueToModel(value);

              this._pendingValue = null;
            } else {
              this._pendingValue = value;
            }
          }
          /** Whether a value is considered valid. */

        }, {
          key: "_isValidValue",
          value: function _isValidValue(value) {
            return !value || this._dateAdapter.isValid(value);
          }
          /**
           * Checks whether a parent control is disabled. This is in place so that it can be overridden
           * by inputs extending this one which can be placed inside of a group that can be disabled.
           */

        }, {
          key: "_parentDisabled",
          value: function _parentDisabled() {
            return false;
          }
        }]);

        return MatDatepickerInputBase;
      }();

      MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) {
        return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatDatepickerInputBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerInputBase,
        inputs: {
          value: "value",
          disabled: "disabled"
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        }
      });

      MatDatepickerInputBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };

      MatDatepickerInputBase.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        dateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, {
          dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          dateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
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

      /** @docs-private */


      var MAT_DATEPICKER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatDatepickerInput;
        }),
        multi: true
      };
      /** @docs-private */

      var MAT_DATEPICKER_VALIDATORS = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatDatepickerInput;
        }),
        multi: true
      };
      /** Directive used to connect an input to a MatDatepicker. */

      var MatDatepickerInput = /*#__PURE__*/function (_MatDatepickerInputBa) {
        _inherits(MatDatepickerInput, _MatDatepickerInputBa);

        var _super6 = _createSuper(MatDatepickerInput);

        function MatDatepickerInput(elementRef, dateAdapter, dateFormats, _formField) {
          var _thisSuper, _this23;

          _classCallCheck(this, MatDatepickerInput);

          _this23 = _super6.call(this, elementRef, dateAdapter, dateFormats);
          _this23._formField = _formField;
          _this23._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose(_get((_thisSuper = _assertThisInitialized(_this23), _getPrototypeOf(MatDatepickerInput.prototype)), "_getValidators", _thisSuper).call(_thisSuper));
          return _this23;
        }
        /** The datepicker that this input is associated with. */


        _createClass(MatDatepickerInput, [{
          key: "matDatepicker",
          set: function set(datepicker) {
            if (datepicker) {
              this._datepicker = datepicker;

              this._registerModel(datepicker._registerInput(this));
            }
          }
          /** The minimum valid date. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(value) {
            this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

            this._validatorOnChange();
          }
          /** The maximum valid date. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(value) {
            this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

            this._validatorOnChange();
          }
          /** Function that can be used to filter out dates within the datepicker. */

        }, {
          key: "dateFilter",
          get: function get() {
            return this._dateFilter;
          },
          set: function set(value) {
            this._dateFilter = value;

            this._validatorOnChange();
          }
          /**
           * Gets the element that the datepicker popup should be connected to.
           * @return The element to connect the popup to.
           */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
          }
          /** Returns the palette used by the input's form field, if any. */

        }, {
          key: "getThemePalette",
          value: function getThemePalette() {
            return this._formField ? this._formField.color : undefined;
          }
          /** Gets the value at which the calendar should start. */

        }, {
          key: "getStartValue",
          value: function getStartValue() {
            return this.value;
          }
          /**
           * @deprecated
           * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
           */

        }, {
          key: "getPopupConnectionElementRef",
          value: function getPopupConnectionElementRef() {
            return this.getConnectedOverlayOrigin();
          }
          /** Opens the associated datepicker. */

        }, {
          key: "_openPopup",
          value: function _openPopup() {
            if (this._datepicker) {
              this._datepicker.open();
            }
          }
        }, {
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              this._model.updateSelection(value, this);
            }
          }
          /** Gets the input's minimum date. */

        }, {
          key: "_getMinDate",
          value: function _getMinDate() {
            return this._min;
          }
          /** Gets the input's maximum date. */

        }, {
          key: "_getMaxDate",
          value: function _getMaxDate() {
            return this._max;
          }
          /** Gets the input's date filtering function. */

        }, {
          key: "_getDateFilter",
          value: function _getDateFilter() {
            return this._dateFilter;
          }
        }]);

        return MatDatepickerInput;
      }(MatDatepickerInputBase);

      MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) {
        return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"], 8));
      };

      MatDatepickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerInput,
        selectors: [["input", "matDatepicker", ""]],
        hostVars: 5,
        hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatDatepickerInput_change_HostBindingHandler() {
              return ctx._onChange();
            })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null);
          }
        },
        inputs: {
          matDatepicker: "matDatepicker",
          min: "min",
          max: "max",
          dateFilter: ["matDatepickerFilter", "dateFilter"]
        },
        exportAs: ["matDatepickerInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
          provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"],
          useExisting: MatDatepickerInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatDatepickerInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
          }]
        }];
      };

      MatDatepickerInput.propDecorators = {
        matDatepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['matDatepickerFilter']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matDatepicker]',
            providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
              provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"],
              useExisting: MatDatepickerInput
            }],
            host: {
              '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
              '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
              '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
              '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(blur)': '_onBlur()',
              '(keydown)': '_onKeydown($event)'
            },
            exportAs: 'matDatepickerInput'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
            }]
          }];
        }, {
          matDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['matDatepickerFilter']
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

      /** Can be used to override the icon of a `matDatepickerToggle`. */


      var MatDatepickerToggleIcon = function MatDatepickerToggleIcon() {
        _classCallCheck(this, MatDatepickerToggleIcon);
      };

      MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) {
        return new (t || MatDatepickerToggleIcon)();
      };

      MatDatepickerToggleIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerToggleIcon,
        selectors: [["", "matDatepickerToggleIcon", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matDatepickerToggleIcon]'
          }]
        }], null, null);
      })();

      var MatDatepickerToggle = /*#__PURE__*/function () {
        function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
          _classCallCheck(this, MatDatepickerToggle);

          this._intl = _intl;
          this._changeDetectorRef = _changeDetectorRef;
          this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          var parsedTabIndex = Number(defaultTabIndex);
          this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
        }
        /** Whether the toggle button is disabled. */


        _createClass(MatDatepickerToggle, [{
          key: "disabled",
          get: function get() {
            if (this._disabled === undefined && this.datepicker) {
              return this.datepicker.disabled;
            }

            return !!this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['datepicker']) {
              this._watchStateChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.unsubscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._watchStateChanges();
          }
        }, {
          key: "_open",
          value: function _open(event) {
            if (this.datepicker && !this.disabled) {
              this.datepicker.open();
              event.stopPropagation();
            }
          }
        }, {
          key: "_watchStateChanges",
          value: function _watchStateChanges() {
            var _this24 = this;

            var datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var inputDisabled = this.datepicker && this.datepicker._datepickerInput ? this.datepicker._datepickerInput._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();

            this._stateChanges.unsubscribe();

            this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(function () {
              return _this24._changeDetectorRef.markForCheck();
            });
          }
        }]);

        return MatDatepickerToggle;
      }();

      MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) {
        return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'));
      };

      MatDatepickerToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepickerToggle,
        selectors: [["mat-datepicker-toggle"]],
        contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
          }
        },
        viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-toggle"],
        hostVars: 7,
        hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function MatDatepickerToggle_focus_HostBindingHandler() {
              return ctx._button.focus();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
          }
        },
        inputs: {
          tabIndex: "tabIndex",
          disabled: "disabled",
          datepicker: ["for", "datepicker"],
          disableRipple: "disableRipple"
        },
        exportAs: ["matDatepickerToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 4,
        vars: 6,
        consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
        template: function MatDatepickerToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatDatepickerToggle_Template_button_click_0_listener($event) {
              return ctx._open($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx._customIcon);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatDatepickerToggle.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }];
      };

      MatDatepickerToggle.propDecorators = {
        datepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['for']
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatDatepickerToggleIcon]
        }],
        _button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['button']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker-toggle',
            template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"_intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\"\n  (click)=\"_open($event)\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
            host: {
              'class': 'mat-datepicker-toggle',
              // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
              // consumer may have provided, while still being able to receive focus.
              '[attr.tabindex]': 'disabled ? null : -1',
              '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
              '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
              '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
              '(focus)': '_button.focus()'
            },
            exportAs: 'matDatepickerToggle',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"]
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
              args: ['tabindex']
            }]
          }];
        }, {
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['for']
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatDatepickerToggleIcon]
          }],
          _button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['button']
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
       * Used to provide the date range input wrapper component
       * to the parts without circular dependencies.
       */


      var MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_DATE_RANGE_INPUT_PARENT');
      /**
       * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
       */

      var MatDateRangeInputPartBase = /*#__PURE__*/function (_MatDatepickerInputBa2) {
        _inherits(MatDateRangeInputPartBase, _MatDatepickerInputBa2);

        var _super7 = _createSuper(MatDateRangeInputPartBase);

        function MatDateRangeInputPartBase(_rangeInput, elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
          var _this25;

          _classCallCheck(this, MatDateRangeInputPartBase);

          _this25 = _super7.call(this, elementRef, dateAdapter, dateFormats);
          _this25._rangeInput = _rangeInput;
          _this25._defaultErrorStateMatcher = _defaultErrorStateMatcher;
          _this25._injector = _injector;
          _this25._parentForm = _parentForm;
          _this25._parentFormGroup = _parentFormGroup;

          _this25._outsideValueChanged = function () {
            // Whenever the value changes outside the input we need to revalidate, because
            // the validation state of each of the inputs depends on the other one.
            _this25._validatorOnChange();
          };

          return _this25;
        }

        _createClass(MatDateRangeInputPartBase, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
            // injecting its `NgControl` so that the error state is handled correctly. This introduces a
            // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
            // itself. Usually we can work around it for the CVA, but there's no API to do it for the
            // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
            // everything has been resolved.
            var ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"], null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectFlags"].Self);

            if (ngControl) {
              this.ngControl = ngControl;
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            }
          }
          /** Gets whether the input is empty. */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this._elementRef.nativeElement.value.length === 0;
          }
          /** Gets the placeholder of the input. */

        }, {
          key: "_getPlaceholder",
          value: function _getPlaceholder() {
            return this._elementRef.nativeElement.placeholder;
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          }
          /** Handles `input` events on the input element. */

        }, {
          key: "_onInput",
          value: function _onInput(value) {
            _get(_getPrototypeOf(MatDateRangeInputPartBase.prototype), "_onInput", this).call(this, value);

            this._rangeInput._handleChildValueChange();
          }
          /** Opens the datepicker associated with the input. */

        }, {
          key: "_openPopup",
          value: function _openPopup() {
            this._rangeInput._openDatepicker();
          }
          /** Gets the minimum date from the range input. */

        }, {
          key: "_getMinDate",
          value: function _getMinDate() {
            return this._rangeInput.min;
          }
          /** Gets the maximum date from the range input. */

        }, {
          key: "_getMaxDate",
          value: function _getMaxDate() {
            return this._rangeInput.max;
          }
          /** Gets the date filter function from the range input. */

        }, {
          key: "_getDateFilter",
          value: function _getDateFilter() {
            return this._rangeInput.dateFilter;
          }
        }, {
          key: "_parentDisabled",
          value: function _parentDisabled() {
            return this._rangeInput._groupDisabled;
          }
        }]);

        return MatDateRangeInputPartBase;
      }(MatDatepickerInputBase);

      MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) {
        return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatDateRangeInputPartBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDateRangeInputPartBase,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatDateRangeInputPartBase.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();

      var _MatDateRangeInputBase = // Needs to be `as any`, because the base class is abstract.
      Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinErrorState"])(MatDateRangeInputPartBase);
      /** Input for entering the start date in a `mat-date-range-input`. */


      var MatStartDate = /*#__PURE__*/function (_MatDateRangeInputBas) {
        _inherits(MatStartDate, _MatDateRangeInputBas);

        var _super8 = _createSuper(MatStartDate);

        function MatStartDate(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
          var _thisSuper2, _this26;

          _classCallCheck(this, MatStartDate);

          // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
          // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
          // constructor once ViewEngine is removed.
          _this26 = _super8.call(this, rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
          /** Validator that checks that the start date isn't after the end date. */

          _this26._startValidator = function (control) {
            var start = _this26._getValidDateOrNull(_this26._dateAdapter.deserialize(control.value));

            var end = _this26._model ? _this26._model.selection.end : null;
            return !start || !end || _this26._dateAdapter.compareDate(start, end) <= 0 ? null : {
              'matStartDateInvalid': {
                'end': end,
                'actual': start
              }
            };
          };

          _this26._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([].concat(_toConsumableArray(_get((_thisSuper2 = _assertThisInitialized(_this26), _getPrototypeOf(MatStartDate.prototype)), "_getValidators", _thisSuper2).call(_thisSuper2)), [_this26._startValidator]));
          return _this26;
        }

        _createClass(MatStartDate, [{
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue.start;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              var range = new DateRange(value, this._model.selection.end);

              this._model.updateSelection(range, this);

              this._cvaOnChange(value);
            }
          }
        }, {
          key: "_formatValue",
          value: function _formatValue(value) {
            _get(_getPrototypeOf(MatStartDate.prototype), "_formatValue", this).call(this, value); // Any time the input value is reformatted we need to tell the parent.


            this._rangeInput._handleChildValueChange();
          }
          /** Gets the value that should be used when mirroring the input's size. */

        }, {
          key: "getMirrorValue",
          value: function getMirrorValue() {
            var element = this._elementRef.nativeElement;
            var value = element.value;
            return value.length > 0 ? value : element.placeholder;
          }
        }]);

        return MatStartDate;
      }(_MatDateRangeInputBase);

      MatStartDate.ɵfac = function MatStartDate_Factory(t) {
        return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatStartDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatStartDate,
        selectors: [["input", "matStartDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-date-range-input-inner"],
        hostVars: 6,
        hostBindings: function MatStartDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatStartDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatStartDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", ctx._rangeInput.id)("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
          useExisting: MatStartDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
          useExisting: MatStartDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatStartDate.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatStartDate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matStartDate]',
            host: {
              'class': 'mat-date-range-input-inner',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(keydown)': '_onKeydown($event)',
              '[attr.id]': '_rangeInput.id',
              '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
              '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
              '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
              '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
              '(blur)': '_onBlur()',
              'type': 'text'
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
              useExisting: MatStartDate,
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
              useExisting: MatStartDate,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();
      /** Input for entering the end date in a `mat-date-range-input`. */


      var MatEndDate = /*#__PURE__*/function (_MatDateRangeInputBas2) {
        _inherits(MatEndDate, _MatDateRangeInputBas2);

        var _super9 = _createSuper(MatEndDate);

        function MatEndDate(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
          var _thisSuper3, _this27;

          _classCallCheck(this, MatEndDate);

          // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
          // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
          // constructor once ViewEngine is removed.
          _this27 = _super9.call(this, rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
          /** Validator that checks that the end date isn't before the start date. */

          _this27._endValidator = function (control) {
            var end = _this27._getValidDateOrNull(_this27._dateAdapter.deserialize(control.value));

            var start = _this27._model ? _this27._model.selection.start : null;
            return !end || !start || _this27._dateAdapter.compareDate(end, start) >= 0 ? null : {
              'matEndDateInvalid': {
                'start': start,
                'actual': end
              }
            };
          };

          _this27._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([].concat(_toConsumableArray(_get((_thisSuper3 = _assertThisInitialized(_this27), _getPrototypeOf(MatEndDate.prototype)), "_getValidators", _thisSuper3).call(_thisSuper3)), [_this27._endValidator]));
          return _this27;
        }

        _createClass(MatEndDate, [{
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue.end;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              var range = new DateRange(this._model.selection.start, value);

              this._model.updateSelection(range, this);

              this._cvaOnChange(value);
            }
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            // If the user is pressing backspace on an empty end input, move focus back to the start.
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["BACKSPACE"] && !this._elementRef.nativeElement.value) {
              this._rangeInput._startInput.focus();
            }

            _get(_getPrototypeOf(MatEndDate.prototype), "_onKeydown", this).call(this, event);
          }
        }]);

        return MatEndDate;
      }(_MatDateRangeInputBase);

      MatEndDate.ɵfac = function MatEndDate_Factory(t) {
        return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatEndDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatEndDate,
        selectors: [["input", "matEndDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-date-range-input-inner"],
        hostVars: 5,
        hostBindings: function MatEndDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatEndDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatEndDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
          useExisting: MatEndDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
          useExisting: MatEndDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatEndDate.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatEndDate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matEndDate]',
            host: {
              'class': 'mat-date-range-input-inner',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(keydown)': '_onKeydown($event)',
              '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
              '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
              '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
              '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
              '(blur)': '_onBlur()',
              'type': 'text'
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
              useExisting: MatEndDate,
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
              useExisting: MatEndDate,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
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
      // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
      // template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
      // directive if angular adds support for `exportAs: '$implicit'` on directives.

      /** Component responsible for managing the date range picker popup/dialog. */


      var MatDateRangePicker = /*#__PURE__*/function (_MatDatepickerBase2) {
        _inherits(MatDateRangePicker, _MatDatepickerBase2);

        var _super10 = _createSuper(MatDateRangePicker);

        function MatDateRangePicker() {
          _classCallCheck(this, MatDateRangePicker);

          return _super10.apply(this, arguments);
        }

        _createClass(MatDateRangePicker, [{
          key: "_forwardContentValues",
          value: function _forwardContentValues(instance) {
            _get(_getPrototypeOf(MatDateRangePicker.prototype), "_forwardContentValues", this).call(this, instance);

            var input = this._datepickerInput;

            if (input) {
              instance.comparisonStart = input.comparisonStart;
              instance.comparisonEnd = input.comparisonEnd;
            }
          }
        }]);

        return MatDateRangePicker;
      }(MatDatepickerBase);

      MatDateRangePicker.ɵfac = function MatDateRangePicker_Factory(t) {
        return ɵMatDateRangePicker_BaseFactory(t || MatDateRangePicker);
      };

      MatDateRangePicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDateRangePicker,
        selectors: [["mat-date-range-picker"]],
        exportAs: ["matDateRangePicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDateRangePicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatDateRangePicker_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatDateRangePicker);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangePicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-date-range-picker',
            template: '',
            exportAs: 'matDateRangePicker',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER]
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


      var nextUniqueId = 0;

      var MatDateRangeInput = /*#__PURE__*/function () {
        function MatDateRangeInput(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
          _classCallCheck(this, MatDateRangeInput);

          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          this._dateAdapter = _dateAdapter;
          this._formField = _formField;
          /** Emits when the input's state has changed. */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Unique ID for the input. */

          this.id = "mat-date-range-input-".concat(nextUniqueId++);
          /** Whether the control is focused. */

          this.focused = false;
          /** Name of the form control. */

          this.controlType = 'mat-date-range-input';
          this._groupDisabled = false;
          /** Value for the `aria-describedby` attribute of the inputs. */

          this._ariaDescribedBy = null;
          /** Separator text to be shown between the inputs. */

          this.separator = '–';
          /** Start of the comparison range that should be shown in the calendar. */

          this.comparisonStart = null;
          /** End of the comparison range that should be shown in the calendar. */

          this.comparisonEnd = null;
          /** Emits when the input's disabled state changes. */

          this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (!_dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          } // TODO(crisbeto): remove `as any` after #18206 lands.


          this.ngControl = control;
        }
        /** Current value of the range input. */


        _createClass(MatDateRangeInput, [{
          key: "value",
          get: function get() {
            return this._model ? this._model.selection : null;
          }
          /** Whether the control's label should float. */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this.focused || !this.empty;
          }
          /**
           * Implemented as a part of `MatFormFieldControl`.
           * Set the placeholder attribute on `matStartDate` and `matEndDate`.
           * @docs-private
           */

        }, {
          key: "placeholder",
          get: function get() {
            var _a, _b;

            var start = ((_a = this._startInput) === null || _a === void 0 ? void 0 : _a._getPlaceholder()) || '';
            var end = ((_b = this._endInput) === null || _b === void 0 ? void 0 : _b._getPlaceholder()) || '';
            return start || end ? "".concat(start, " ").concat(this.separator, " ").concat(end) : '';
          }
          /** The range picker that this input is associated with. */

        }, {
          key: "rangePicker",
          get: function get() {
            return this._rangePicker;
          },
          set: function set(rangePicker) {
            if (rangePicker) {
              this._model = rangePicker._registerInput(this);
              this._rangePicker = rangePicker;

              this._registerModel(this._model);
            }
          }
          /** Whether the input is required. */

        }, {
          key: "required",
          get: function get() {
            return !!this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
          /** Function that can be used to filter out dates within the date range picker. */

        }, {
          key: "dateFilter",
          get: function get() {
            return this._dateFilter;
          },
          set: function set(value) {
            this._dateFilter = value;

            this._revalidate();
          }
          /** The minimum valid date. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(value) {
            this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

            this._revalidate();
          }
          /** The maximum valid date. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(value) {
            this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

            this._revalidate();
          }
          /** Whether the input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);

            if (newValue !== this._groupDisabled) {
              this._groupDisabled = newValue;

              this._disabledChange.next(this.disabled);
            }
          }
          /** Whether the input is in an error state. */

        }, {
          key: "errorState",
          get: function get() {
            if (this._startInput && this._endInput) {
              return this._startInput.errorState || this._endInput.errorState;
            }

            return false;
          }
          /** Whether the datepicker input is empty. */

        }, {
          key: "empty",
          get: function get() {
            var startEmpty = this._startInput ? this._startInput.isEmpty() : false;
            var endEmpty = this._endInput ? this._endInput.isEmpty() : false;
            return startEmpty && endEmpty;
          }
          /**
           * Implemented as a part of `MatFormFieldControl`.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
          }
          /**
           * Implemented as a part of `MatFormFieldControl`.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            if (!this.focused && !this.disabled) {
              if (!this._model || !this._model.selection.start) {
                this._startInput.focus();
              } else {
                this._endInput.focus();
              }
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this28 = this;

            if (!this._startInput) {
              throw Error('mat-date-range-input must contain a matStartDate input');
            }

            if (!this._endInput) {
              throw Error('mat-date-range-input must contain a matEndDate input');
            }

            if (this._model) {
              this._registerModel(this._model);
            } // We don't need to unsubscribe from this, because we
            // know that the input streams will be completed on destroy.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._startInput._disabledChange, this._endInput._disabledChange).subscribe(function () {
              _this28._disabledChange.next(_this28.disabled);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();

            this._disabledChange.unsubscribe();
          }
          /** Gets the date at which the calendar should start. */

        }, {
          key: "getStartValue",
          value: function getStartValue() {
            return this.value ? this.value.start : null;
          }
          /** Gets the input's theme palette. */

        }, {
          key: "getThemePalette",
          value: function getThemePalette() {
            return this._formField ? this._formField.color : undefined;
          }
          /** Gets the element to which the calendar overlay should be attached. */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
          }
          /** Gets the value that is used to mirror the state input. */

        }, {
          key: "_getInputMirrorValue",
          value: function _getInputMirrorValue() {
            return this._startInput ? this._startInput.getMirrorValue() : '';
          }
          /** Whether the input placeholders should be hidden. */

        }, {
          key: "_shouldHidePlaceholders",
          value: function _shouldHidePlaceholders() {
            return this._startInput ? !this._startInput.isEmpty() : false;
          }
          /** Handles the value in one of the child inputs changing. */

        }, {
          key: "_handleChildValueChange",
          value: function _handleChildValueChange() {
            this.stateChanges.next();

            this._changeDetectorRef.markForCheck();
          }
          /** Opens the date range picker associated with the input. */

        }, {
          key: "_openDatepicker",
          value: function _openDatepicker() {
            if (this._rangePicker) {
              this._rangePicker.open();
            }
          }
          /** Whether the separate text should be hidden. */

        }, {
          key: "_shouldHideSeparator",
          value: function _shouldHideSeparator() {
            return (!this._formField || this._formField._hideControlPlaceholder()) && this.empty;
          }
          /** Gets the value for the `aria-labelledby` attribute of the inputs. */

        }, {
          key: "_getAriaLabelledby",
          value: function _getAriaLabelledby() {
            var formField = this._formField;
            return formField && formField._hasFloatingLabel() ? formField._labelId : null;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Re-runs the validators on the start/end inputs. */

        }, {
          key: "_revalidate",
          value: function _revalidate() {
            if (this._startInput) {
              this._startInput._validatorOnChange();
            }

            if (this._endInput) {
              this._endInput._validatorOnChange();
            }
          }
          /** Registers the current date selection model with the start/end inputs. */

        }, {
          key: "_registerModel",
          value: function _registerModel(model) {
            if (this._startInput) {
              this._startInput._registerModel(model);
            }

            if (this._endInput) {
              this._endInput._registerModel(model);
            }
          }
        }]);

        return MatDateRangeInput;
      }();

      MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) {
        return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], 8));
      };

      MatDateRangeInput.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDateRangeInput,
        selectors: [["mat-date-range-input"]],
        contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatStartDate, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatEndDate, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
          }
        },
        hostAttrs: ["role", "group", 1, "mat-date-range-input"],
        hostVars: 5,
        hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", null)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders());
          }
        },
        inputs: {
          separator: "separator",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          rangePicker: "rangePicker",
          required: "required",
          dateFilter: "dateFilter",
          min: "min",
          max: "max",
          disabled: "disabled"
        },
        exportAs: ["matDateRangeInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldControl"],
          useExisting: MatDateRangeInput
        }, {
          provide: MAT_DATE_RANGE_INPUT_PARENT,
          useExisting: MatDateRangeInput
        }])],
        ngContentSelectors: _c6,
        decls: 9,
        vars: 4,
        consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-start-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-end-wrapper"]],
        template: function MatDateRangeInput_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
              return ctx.focused = $event !== null;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._getInputMirrorValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.separator);
          }
        },
        directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"]],
        styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatDateRangeInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatDateRangeInput.propDecorators = {
        rangePicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        separator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _startInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatStartDate]
        }],
        _endInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatEndDate]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangeInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-date-range-input',
            template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"focused = $event !== null\">\n  <div class=\"mat-date-range-input-start-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue()}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n  </div>\n</div>\n\n",
            exportAs: 'matDateRangeInput',
            host: {
              'class': 'mat-date-range-input',
              '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
              '[attr.id]': 'null',
              'role': 'group',
              '[attr.aria-labelledby]': '_getAriaLabelledby()',
              '[attr.aria-describedby]': '_ariaDescribedBy'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldControl"],
              useExisting: MatDateRangeInput
            }, {
              provide: MAT_DATE_RANGE_INPUT_PARENT,
              useExisting: MatDateRangeInput
            }],
            styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rangePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _startInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatStartDate]
          }],
          _endInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatEndDate]
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


      var MatDatepickerModule = function MatDatepickerModule() {
        _classCallCheck(this, MatDatepickerModule);
      };

      MatDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: MatDatepickerModule
      });
      MatDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function MatDatepickerModule_Factory(t) {
          return new (t || MatDatepickerModule)();
        },
        providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, {
          provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
          useClass: DefaultMatCalendarRangeStrategy
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatDatepickerModule, {
          declarations: function declarations() {
            return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker],
            declarations: [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker],
            providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, {
              provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
              useClass: DefaultMatCalendarRangeStrategy
            }],
            entryComponents: [MatDatepickerContent, MatCalendarHeader]
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
      //# sourceMappingURL=datepicker.js.map

      /***/

    },

    /***/
    "ihCf":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
      \***********************************************************************/

    /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

    /***/
    function ihCf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
        return AutofillMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
        return CdkAutofill;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
        return CdkTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
        return TextFieldModule;
      });
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options to pass to the animationstart listener. */


      var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * An injectable service that can be used to monitor the autofill state of an input.
       * Based on the following blog post:
       * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
       */

      var AutofillMonitor = /*#__PURE__*/function () {
        function AutofillMonitor(_platform, _ngZone) {
          _classCallCheck(this, AutofillMonitor);

          this._platform = _platform;
          this._ngZone = _ngZone;
          this._monitoredElements = new Map();
        }

        _createClass(AutofillMonitor, [{
          key: "monitor",
          value: function monitor(elementOrRef) {
            var _this29 = this;

            if (!this._platform.isBrowser) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              return info.subject.asObservable();
            }

            var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var cssClass = 'cdk-text-field-autofilled';

            var listener = function listener(event) {
              // Animation events fire on initial element render, we check for the presence of the autofill
              // CSS class to make sure this is a real change in state, not just the initial render before
              // we fire off events.
              if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);

                _this29._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: true
                  });
                });
              } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);

                _this29._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: false
                  });
                });
              }
            };

            this._ngZone.runOutsideAngular(function () {
              element.addEventListener('animationstart', listener, listenerOptions);
              element.classList.add('cdk-text-field-autofill-monitored');
            });

            this._monitoredElements.set(element, {
              subject: result,
              unlisten: function unlisten() {
                element.removeEventListener('animationstart', listener, listenerOptions);
              }
            });

            return result.asObservable();
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(elementOrRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              info.unlisten();
              info.subject.complete();
              element.classList.remove('cdk-text-field-autofill-monitored');
              element.classList.remove('cdk-text-field-autofilled');

              this._monitoredElements["delete"](element);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this30 = this;

            this._monitoredElements.forEach(function (_info, element) {
              return _this30.stopMonitoring(element);
            });
          }
        }]);

        return AutofillMonitor;
      }();

      AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
        return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AutofillMonitor_Factory() {
          return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
        },
        token: AutofillMonitor,
        providedIn: "root"
      });

      AutofillMonitor.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /** A directive that can be used to monitor the autofill state of an input. */


      var CdkAutofill = /*#__PURE__*/function () {
        function CdkAutofill(_elementRef, _autofillMonitor) {
          _classCallCheck(this, CdkAutofill);

          this._elementRef = _elementRef;
          this._autofillMonitor = _autofillMonitor;
          /** Emits when the autofill state of the element changes. */

          this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CdkAutofill, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
              return _this31.cdkAutofill.emit(event);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._autofillMonitor.stopMonitoring(this._elementRef);
          }
        }]);

        return CdkAutofill;
      }();

      CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
        return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor));
      };

      CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAutofill,
        selectors: [["", "cdkAutofill", ""]],
        outputs: {
          cdkAutofill: "cdkAutofill"
        }
      });

      CdkAutofill.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: AutofillMonitor
        }];
      };

      CdkAutofill.propDecorators = {
        cdkAutofill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAutofill]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: AutofillMonitor
          }];
        }, {
          cdkAutofill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
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

      /** Directive to automatically resize a textarea to fit its content. */


      var CdkTextareaAutosize = /*#__PURE__*/function () {
        function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, CdkTextareaAutosize);

          this._elementRef = _elementRef;
          this._platform = _platform;
          this._ngZone = _ngZone;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._enabled = true;
          /**
           * Value of minRows as of last resize. If the minRows has decreased, the
           * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
           * does not have the same problem because it does not affect the textarea's scrollHeight.
           */

          this._previousMinRows = -1;
          this._document = document;
          this._textareaElement = this._elementRef.nativeElement;
          this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
        }
        /** Minimum amount of rows in the textarea. */


        _createClass(CdkTextareaAutosize, [{
          key: "minRows",
          get: function get() {
            return this._minRows;
          },
          set: function set(value) {
            this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMinHeight();
          }
          /** Maximum amount of rows in the textarea. */

        }, {
          key: "maxRows",
          get: function get() {
            return this._maxRows;
          },
          set: function set(value) {
            this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMaxHeight();
          }
          /** Whether autosizing is enabled or not */

        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
            // resizeToFitContent too early (i.e. before ngAfterViewInit)

            if (this._enabled !== value) {
              (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
            }
          }
          /** Sets the minimum height of the textarea as determined by minRows. */

        }, {
          key: "_setMinHeight",
          value: function _setMinHeight() {
            var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

            if (minHeight) {
              this._textareaElement.style.minHeight = minHeight;
            }
          }
          /** Sets the maximum height of the textarea as determined by maxRows. */

        }, {
          key: "_setMaxHeight",
          value: function _setMaxHeight() {
            var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

            if (maxHeight) {
              this._textareaElement.style.maxHeight = maxHeight;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this32 = this;

            if (this._platform.isBrowser) {
              // Remember the height which we started with in case autosizing is disabled
              this._initialHeight = this._textareaElement.style.height;
              this.resizeToFitContent();

              this._ngZone.runOutsideAngular(function () {
                var window = _this32._getWindow();

                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this32._destroyed)).subscribe(function () {
                  return _this32.resizeToFitContent(true);
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Cache the height of a single-row textarea if it has not already been cached.
           *
           * We need to know how large a single "row" of a textarea is in order to apply minRows and
           * maxRows. For the initial version, we will assume that the height of a single line in the
           * textarea does not ever change.
           */

        }, {
          key: "_cacheTextareaLineHeight",
          value: function _cacheTextareaLineHeight() {
            if (this._cachedLineHeight) {
              return;
            } // Use a clone element because we have to override some styles.


            var textareaClone = this._textareaElement.cloneNode(false);

            textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
            // `visibility: hidden` so that nothing is rendered. Clear any other styles that
            // would affect the height.

            textareaClone.style.position = 'absolute';
            textareaClone.style.visibility = 'hidden';
            textareaClone.style.border = 'none';
            textareaClone.style.padding = '0';
            textareaClone.style.height = '';
            textareaClone.style.minHeight = '';
            textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
            // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
            // As a workaround that removes the extra space for the scrollbar, we can just set overflow
            // to hidden. This ensures that there is no invalid calculation of the line height.
            // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

            textareaClone.style.overflow = 'hidden';

            this._textareaElement.parentNode.appendChild(textareaClone);

            this._cachedLineHeight = textareaClone.clientHeight;

            this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


            this._setMinHeight();

            this._setMaxHeight();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._platform.isBrowser) {
              this.resizeToFitContent();
            }
          }
          /**
           * Resize the textarea to fit its content.
           * @param force Whether to force a height recalculation. By default the height will be
           *    recalculated only if the value changed since the last call.
           */

        }, {
          key: "resizeToFitContent",
          value: function resizeToFitContent() {
            var _this33 = this;

            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // If autosizing is disabled, just skip everything else
            if (!this._enabled) {
              return;
            }

            this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.


            if (!this._cachedLineHeight) {
              return;
            }

            var textarea = this._elementRef.nativeElement;
            var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

            if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
              return;
            }

            var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.

            textarea.classList.add(this._measuringClass);
            textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
            // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

            var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

            textarea.style.height = "".concat(height, "px");
            textarea.classList.remove(this._measuringClass);
            textarea.placeholder = placeholderText;

            this._ngZone.runOutsideAngular(function () {
              if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(function () {
                  return _this33._scrollToCaretPosition(textarea);
                });
              } else {
                setTimeout(function () {
                  return _this33._scrollToCaretPosition(textarea);
                });
              }
            });

            this._previousValue = value;
            this._previousMinRows = this._minRows;
          }
          /**
           * Resets the textarea to its original size
           */

        }, {
          key: "reset",
          value: function reset() {
            // Do not try to change the textarea, if the initialHeight has not been determined yet
            // This might potentially remove styles when reset() is called before ngAfterViewInit
            if (this._initialHeight !== undefined) {
              this._textareaElement.style.height = this._initialHeight;
            }
          } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete

        }, {
          key: "_noopInputHandler",
          value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /**
           * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
           * prevent it from scrolling to the caret position. We need to re-set the selection
           * in order for it to scroll to the proper position.
           */

        }, {
          key: "_scrollToCaretPosition",
          value: function _scrollToCaretPosition(textarea) {
            var selectionStart = textarea.selectionStart,
                selectionEnd = textarea.selectionEnd;

            var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
            // element has been removed from the DOM. Assert that the directive hasn't been destroyed
            // between the time we requested the animation frame and when it was executed.
            // Also note that we have to assert that the textarea is focused before we set the
            // selection range. Setting the selection range on a non-focused textarea will cause
            // it to receive focus on IE and Edge.


            if (!this._destroyed.isStopped && document.activeElement === textarea) {
              textarea.setSelectionRange(selectionStart, selectionEnd);
            }
          }
        }]);

        return CdkTextareaAutosize;
      }();

      CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
        return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTextareaAutosize,
        selectors: [["textarea", "cdkTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
        hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
              return ctx._noopInputHandler();
            });
          }
        },
        inputs: {
          minRows: ["cdkAutosizeMinRows", "minRows"],
          maxRows: ["cdkAutosizeMaxRows", "maxRows"],
          enabled: ["cdkTextareaAutosize", "enabled"]
        },
        exportAs: ["cdkTextareaAutosize"]
      });

      CdkTextareaAutosize.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      CdkTextareaAutosize.propDecorators = {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMinRows']
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMaxRows']
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTextareaAutosize']
        }],
        _noopInputHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[cdkTextareaAutosize]',
            exportAs: 'cdkTextareaAutosize',
            host: {
              'class': 'cdk-textarea-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, {
          minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMinRows']
          }],
          maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMaxRows']
          }],
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTextareaAutosize']
          }],
          // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete
          _noopInputHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
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


      var TextFieldModule = function TextFieldModule() {
        _classCallCheck(this, TextFieldModule);
      };

      TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TextFieldModule
      });
      TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TextFieldModule_Factory(t) {
          return new (t || TextFieldModule)();
        },
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, {
          declarations: function declarations() {
            return [CdkAutofill, CdkTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
          },
          exports: function exports() {
            return [CdkAutofill, CdkTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [CdkAutofill, CdkTextareaAutosize],
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
            exports: [CdkAutofill, CdkTextareaAutosize]
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
      //# sourceMappingURL=text-field.js.map

      /***/

    },

    /***/
    "qFsG":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */

    /***/
    function qFsG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
        return MAT_INPUT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInput", function () {
        return MatInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
        return MatInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
        return MatTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
        return getMatInputUnsupportedTypeError;
      });
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "ihCf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to automatically resize a textarea to fit its content.
       * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
       * @breaking-change 8.0.0
       */


      var MatTextareaAutosize = /*#__PURE__*/function (_angular_cdk_text_fie) {
        _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

        var _super11 = _createSuper(MatTextareaAutosize);

        function MatTextareaAutosize() {
          _classCallCheck(this, MatTextareaAutosize);

          return _super11.apply(this, arguments);
        }

        _createClass(MatTextareaAutosize, [{
          key: "matAutosizeMinRows",
          get: function get() {
            return this.minRows;
          },
          set: function set(value) {
            this.minRows = value;
          }
        }, {
          key: "matAutosizeMaxRows",
          get: function get() {
            return this.maxRows;
          },
          set: function set(value) {
            this.maxRows = value;
          }
        }, {
          key: "matAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }, {
          key: "matTextareaAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }]);

        return MatTextareaAutosize;
      }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

      MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
        return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
      };

      MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatTextareaAutosize,
        selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
        inputs: {
          cdkAutosizeMinRows: "cdkAutosizeMinRows",
          cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
          matAutosizeMinRows: "matAutosizeMinRows",
          matAutosizeMaxRows: "matAutosizeMaxRows",
          matAutosize: ["mat-autosize", "matAutosize"],
          matTextareaAutosize: "matTextareaAutosize"
        },
        exportAs: ["matTextareaAutosize"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });
      MatTextareaAutosize.propDecorators = {
        matAutosizeMinRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosizeMaxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mat-autosize']
        }],
        matTextareaAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      var ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
            exportAs: 'matTextareaAutosize',
            inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
            host: {
              'class': 'cdk-textarea-autosize mat-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], null, {
          matAutosizeMinRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosizeMaxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mat-autosize']
          }],
          matTextareaAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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

      /** @docs-private */


      function getMatInputUnsupportedTypeError(type) {
        return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This token is used to inject the object whose value should be set into `MatInput`. If none is
       * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
       * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
       * value to them.
       */


      var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

      var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
      var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

      /** @docs-private */

      var MatInputBase = function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, MatInputBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
      /** Directive that allows a native input to work inside a `MatFormField`. */


      var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
        _inherits(MatInput, _MatInputMixinBase2);

        var _super12 = _createSuper(MatInput);

        function MatInput(_elementRef, _platform,
        /** @docs-private */
        ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
          var _this34;

          _classCallCheck(this, MatInput);

          _this34 = _super12.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this34._elementRef = _elementRef;
          _this34._platform = _platform;
          _this34.ngControl = ngControl;
          _this34._autofillMonitor = _autofillMonitor;
          _this34._uid = "mat-input-".concat(nextUniqueId++);
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this34.focused = false;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this34.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this34.controlType = 'mat-input';
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this34.autofilled = false;
          _this34._disabled = false;
          _this34._required = false;
          _this34._type = 'text';
          _this34._readonly = false;
          _this34._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
            return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
          });
          var element = _this34._elementRef.nativeElement;
          var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
          // accessor.

          _this34._inputValueAccessor = inputValueAccessor || element;
          _this34._previousNativeValue = _this34.value; // Force setter to be called in case id was not specified.

          _this34.id = _this34.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
          // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
          // exists on iOS, we only bother to install the listener on iOS.

          if (_platform.IOS) {
            ngZone.runOutsideAngular(function () {
              _elementRef.nativeElement.addEventListener('keyup', function (event) {
                var el = event.target;

                if (!el.value && !el.selectionStart && !el.selectionEnd) {
                  // Note: Just setting `0, 0` doesn't fix the issue. Setting
                  // `1, 1` fixes it for the first time that you type text and
                  // then hold delete. Toggling to `1, 1` and then back to
                  // `0, 0` seems to completely fix it.
                  el.setSelectionRange(1, 1);
                  el.setSelectionRange(0, 0);
                }
              });
            });
          }

          _this34._isServer = !_this34._platform.isBrowser;
          _this34._isNativeSelect = nodeName === 'select';
          _this34._isTextarea = nodeName === 'textarea';

          if (_this34._isNativeSelect) {
            _this34.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
          }

          return _this34;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */


        _createClass(MatInput, [{
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
            // Reset from here to ensure that the element doesn't become stuck.

            if (this.focused) {
              this.focused = false;
              this.stateChanges.next();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Input type of the element. */

        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            this._type = value || 'text';

            this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea elements don't support the type property or attribute.


            if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
              this._elementRef.nativeElement.type = this._type;
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._inputValueAccessor.value;
          },
          set: function set(value) {
            if (value !== this.value) {
              this._inputValueAccessor.value = value;
              this.stateChanges.next();
            }
          }
          /** Whether the element is readonly. */

        }, {
          key: "readonly",
          get: function get() {
            return this._readonly;
          },
          set: function set(value) {
            this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this35 = this;

            if (this._platform.isBrowser) {
              this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                _this35.autofilled = event.isAutofilled;

                _this35.stateChanges.next();
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();

            if (this._platform.isBrowser) {
              this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            } // We need to dirty-check the native element's value, because there are some cases where
            // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
            // updating the value using `emitEvent: false`).


            this._dirtyCheckNativeValue();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._elementRef.nativeElement.focus(options);
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete

        }, {
          key: "_focusChanged",
          value: function _focusChanged(isFocused) {
            if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
              this.focused = isFocused;
              this.stateChanges.next();
            }
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_onInput",
          value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
            // Angular will run a new change detection each time the `input` event has been dispatched.
            // It's necessary that Angular recognizes the value change, because when floatingLabel
            // is set to false and Angular forms aren't used, the placeholder won't recognize the
            // value changes and will not disappear.
            // Listening to the input event wouldn't be necessary when the input is using the
            // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
          }
          /** Does some manual dirty checking on the native input `value` property. */

        }, {
          key: "_dirtyCheckNativeValue",
          value: function _dirtyCheckNativeValue() {
            var newValue = this._elementRef.nativeElement.value;

            if (this._previousNativeValue !== newValue) {
              this._previousNativeValue = newValue;
              this.stateChanges.next();
            }
          }
          /** Make sure the input is a supported type. */

        }, {
          key: "_validateType",
          value: function _validateType() {
            if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
              throw getMatInputUnsupportedTypeError(this._type);
            }
          }
          /** Checks whether the input type is one of the types that are never empty. */

        }, {
          key: "_isNeverEmpty",
          value: function _isNeverEmpty() {
            return this._neverEmptyInputTypes.indexOf(this._type) > -1;
          }
          /** Checks whether the input is invalid based on the native validation. */

        }, {
          key: "_isBadInput",
          value: function _isBadInput() {
            // The `validity` property won't be present on platform-server.
            var validity = this._elementRef.nativeElement.validity;
            return validity && validity.badInput;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "empty",
          get: function get() {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            if (this._isNativeSelect) {
              // For a single-selection `<select>`, the label should float when the selected option has
              // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
              // overlapping the label with the options.
              var selectElement = this._elementRef.nativeElement;
              var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
              // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

              return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
            } else {
              return this.focused || !this.empty;
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            // Do not re-focus the input element if the element is already focused. Otherwise it can happen
            // that someone clicks on a time input and the cursor resets to the "hours" field while the
            // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
            if (!this.focused) {
              this.focus();
            }
          }
        }]);

        return MatInput;
      }(_MatInputMixinBase);

      MatInput.ɵfac = function MatInput_Factory(t) {
        return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatInput,
        selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
        hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
        hostVars: 11,
        hostBindings: function MatInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
              return ctx._focusChanged(true);
            })("blur", function MatInput_blur_HostBindingHandler() {
              return ctx._focusChanged(false);
            })("input", function MatInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.placeholder)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
          }
        },
        inputs: {
          id: "id",
          disabled: "disabled",
          required: "required",
          type: "type",
          value: "value",
          readonly: "readonly",
          placeholder: "placeholder",
          errorStateMatcher: "errorStateMatcher"
        },
        exportAs: ["matInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
          useExisting: MatInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      MatInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_INPUT_VALUE_ACCESSOR]
          }]
        }, {
          type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      MatInput.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _focusChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['focus', ['true']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['blur', ['false']]
        }],
        _onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
            exportAs: 'matInput',
            host: {
              /**
               * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
               */
              'class': 'mat-input-element mat-form-field-autofill-control',
              '[class.mat-input-server]': '_isServer',
              // Native input properties that are overwritten by Angular inputs need to be synced with
              // the native input element. Otherwise property bindings for those don't work.
              '[attr.id]': 'id',
              '[attr.placeholder]': 'placeholder',
              '[attr.data-placeholder]': 'placeholder',
              '[disabled]': 'disabled',
              '[required]': 'required',
              '[attr.readonly]': 'readonly && !_isNativeSelect || null',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-required]': 'required.toString()'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
              useExisting: MatInput
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_INPUT_VALUE_ACCESSOR]
            }]
          }, {
            type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete
          _focusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus', ['true']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['false']]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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


      var MatInputModule = function MatInputModule() {
        _classCallCheck(this, MatInputModule);
      };

      MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatInputModule
      });
      MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatInputModule_Factory(t) {
          return new (t || MatInputModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
        imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, {
          declarations: function declarations() {
            return [MatInput, MatTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [MatInput, MatTextareaAutosize],
            imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
            exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
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
      //# sourceMappingURL=input.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~components-companies-companies-module~components-import-routes-import-routes-module-es5.js.map