function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./src/app/home/components/filter/list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/components/filter/list.component.ts ***!
    \**********************************************************/

  /*! exports provided: FilterComponent */

  /***/
  function srcAppHomeComponentsFilterListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterComponent", function () {
      return FilterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_actions_home_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/actions/home.action */
    "./src/app/home/store/actions/home.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function FilterComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _r31.value = "";
          return ctx_r33.applyFilter("");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FilterComponent =
    /*#__PURE__*/
    function () {
      function FilterComponent(store) {
        _classCallCheck(this, FilterComponent);

        this.store = store;
      }

      _createClass(FilterComponent, [{
        key: "applyFilter",
        value: function applyFilter(text) {
          this.store.dispatch(_store_actions_home_action__WEBPACK_IMPORTED_MODULE_1__["setTextFilter"]({
            text: text
          }));
        }
      }]);

      return FilterComponent;
    }();

    FilterComponent.ɵfac = function FilterComponent_Factory(t) {
      return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FilterComponent,
      selectors: [["app-filter"]],
      decls: 6,
      vars: 1,
      consts: [[1, "w100"], ["matInput", "", "autocomplete", "off", 3, "keyup"], ["filter", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", 3, "click"]],
      template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u043A\u043E\u043B\u043E\u043D\u0446\u0456 Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FilterComponent_Template_input_keyup_3_listener($event) {
            return ctx.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterComponent_button_5_Template, 3, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r31.value !== "");
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-filter',
          template: "\n    <mat-form-field class=\"w100\">\n      <mat-label>\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u043A\u043E\u043B\u043E\u043D\u0446\u0456 Title</mat-label>\n      <input #filter matInput autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\">\n      <button \n        *ngIf=\"filter.value !== ''\" \n        mat-icon-button \n        matSuffix\n        (click)=\"filter.value = ''; applyFilter('')\"\n       >\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  ",
          styles: [""]
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/group-filter/group-filter.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/components/group-filter/group-filter.component.ts ***!
    \************************************************************************/

  /*! exports provided: GroupFilterComponent */

  /***/
  function srcAppHomeComponentsGroupFilterGroupFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupFilterComponent", function () {
      return GroupFilterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/reducers */
    "./src/app/home/store/reducers/index.ts");
    /* harmony import */


    var _store_actions_home_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/actions/home.action */
    "./src/app/home/store/actions/home.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GroupFilterComponent_mat_chip_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupFilterComponent_mat_chip_1_Template_mat_chip_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var group_r36 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.toggleGroup(group_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", group_r36.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r36.title, " ");
      }
    }

    var GroupFilterComponent =
    /*#__PURE__*/
    function () {
      function GroupFilterComponent(store) {
        _classCallCheck(this, GroupFilterComponent);

        this.store = store;
        this.selectedGroups$ = this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getSelectionGroups"]);
      }

      _createClass(GroupFilterComponent, [{
        key: "toggleGroup",
        value: function toggleGroup(event) {
          this.store.dispatch(_store_actions_home_action__WEBPACK_IMPORTED_MODULE_2__["toggleGroup"]({
            group: event
          }));
        }
      }]);

      return GroupFilterComponent;
    }();

    GroupFilterComponent.ɵfac = function GroupFilterComponent_Factory(t) {
      return new (t || GroupFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    GroupFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupFilterComponent,
      selectors: [["app-group-filter"]],
      decls: 3,
      vars: 4,
      consts: [["multiple", "", 3, "selectable"], ["selectable", "true", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["selectable", "true", 3, "selected", "click"]],
      template: function GroupFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupFilterComponent_mat_chip_1_Template, 2, 2, "mat-chip", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.selectedGroups$));
        }
      },
      directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["mat-chip[_ngcontent-%COMP%] {\n      cursor: pointer;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-filter',
          template: "\n    <mat-chip-list multiple [selectable]=\"true\">\n      <mat-chip \n        *ngFor=\"let group of selectedGroups$ | async\"\n        selectable=\"true\"\n        [selected]=\"group.selected\"\n        (click)=\"toggleGroup(group)\"\n      > {{ group.title}} </mat-chip>\n    </mat-chip-list>\n  ",
          styles: ["\n    mat-chip {\n      cursor: pointer;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/list/list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/components/list/list.component.ts ***!
    \********************************************************/

  /*! exports provided: ListComponent, CopySnackBarComponent */

  /***/
  function srcAppHomeComponentsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopySnackBarComponent", function () {
      return CopySnackBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/reducers */
    "./src/app/home/store/reducers/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function ListComponent_ng_container_0_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Code ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListComponent_ng_container_0_td_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ng_container_0_td_5_Template_td_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var element_r20 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.copyContent(element_r20.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.id, " ");
      }
    }

    function ListComponent_ng_container_0_th_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListComponent_ng_container_0_td_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ng_container_0_td_8_Template_td_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var element_r23 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.copyContent(element_r23.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.title, " ");
      }
    }

    function ListComponent_ng_container_0_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
      }
    }

    function ListComponent_ng_container_0_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    function ListComponent_ng_container_0_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var groupBy_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](groupBy_r27.groupTitle);
      }
    }

    function ListComponent_ng_container_0_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    function ListComponent_ng_container_0_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subGroup_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subGroup_r29.subgroupTitle);
      }
    }

    function ListComponent_ng_container_0_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    var _c0 = function _c0() {
      return ["groupHeader"];
    };

    var _c1 = function _c1() {
      return ["subGroup"];
    };

    function ListComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListComponent_ng_container_0_th_4_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListComponent_ng_container_0_td_5_Template, 2, 1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_ng_container_0_th_7_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListComponent_ng_container_0_td_8_Template, 2, 1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_ng_container_0_tr_9_Template, 1, 0, "tr", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_ng_container_0_tr_10_Template, 1, 0, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_ng_container_0_td_12_Template, 3, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_ng_container_0_tr_13_Template, 1, 0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListComponent_ng_container_0_td_15_Template, 3, 1, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_ng_container_0_tr_16_Template, 1, 0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r7.tableData$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.displayedColumns)("matHeaderRowDefSticky", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r7.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("matRowDefWhen", ctx_r7.isGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("matRowDefWhen", ctx_r7.isSubgroup);
      }
    }

    function ListComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442\u0438\u0439!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(store, clipboard, _snackBar) {
        _classCallCheck(this, ListComponent);

        this.store = store;
        this.clipboard = clipboard;
        this._snackBar = _snackBar;
        this.tableData$ = this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getDataForTable"]);
        this.displayedColumns = ['id', 'title'];
      }

      _createClass(ListComponent, [{
        key: "isGroup",
        value: function isGroup(index, item) {
          return item.isGroup;
        }
      }, {
        key: "isSubgroup",
        value: function isSubgroup(index, item) {
          return item.isSubgroup;
        }
      }, {
        key: "copyContent",
        value: function copyContent(text) {
          this.clipboard.copy(text);
          this.openSnackBar(text);
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message) {
          this._snackBar.openFromComponent(CopySnackBarComponent, {
            duration: 1500,
            data: {
              message: message
            }
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf", "ngIfElse"], ["emptyList", ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "groupHeader"], ["colspan", "777", "mat-cell", "", "style", "background: rgb(248, 248, 248);", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], ["matColumnDef", "subGroup"], ["colspan", "999", "mat-cell", "", "style", "background: rgb(251, 251, 251);", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["colspan", "777", "mat-cell", "", 2, "background", "rgb(248, 248, 248)"], ["colspan", "999", "mat-cell", "", 2, "background", "rgb(251, 251, 251)"], [2, "color", "gray", "margin-left", "7px"], [1, "empty-list"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListComponent_ng_container_0_Template, 17, 12, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_ng_template_2_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.tableData$).length)("ngIfElse", _r8);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.empty-list[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n.empty-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMS9HaXQvaG9zcGl0YWxsLWFkZC1vbi9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0FDQ1I7QURFSTtFQUNJLGVBQUE7QUNBUjtBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdGgge1xuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmVtcHR5LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6ICMzZjUxYjU7XG4gICAgfVxufVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHRoIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cbnRhYmxlIHRkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZW1wdHktbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZW1wdHktbGlzdCBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      }, null);
    })();

    var CopySnackBarComponent =
    /*#__PURE__*/
    function () {
      function CopySnackBarComponent(snackBar, data) {
        _classCallCheck(this, CopySnackBarComponent);

        this.snackBar = snackBar;
        this.data = data;
      }

      _createClass(CopySnackBarComponent, [{
        key: "onClick",
        value: function onClick() {
          this.snackBar.dismiss();
        }
      }]);

      return CopySnackBarComponent;
    }();

    CopySnackBarComponent.ɵfac = function CopySnackBarComponent_Factory(t) {
      return new (t || CopySnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]));
    };

    CopySnackBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CopySnackBarComponent,
      selectors: [["snack-bar"]],
      decls: 5,
      vars: 1,
      consts: [[1, "snack-bar-wr"], [1, "snack-text"], [1, "snack-bar-btn", 3, "click"]],
      template: function CopySnackBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CopySnackBarComponent_Template_span_click_3_listener($event) {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0417\u0430\u043A\u0440\u0438\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
        }
      },
      styles: [".snack-bar-wr[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .snack-text[_ngcontent-%COMP%] {\n      color: white;\n    }\n        \n    .snack-bar-btn[_ngcontent-%COMP%] {\n      margin-left: 7px;\n      color: white;\n      cursor: pointer;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopySnackBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'snack-bar',
          template: "\n    <div class=\"snack-bar-wr\">\n      <span class=\"snack-text\">{{ data.message }}</span>\n      <span class=\"snack-bar-btn\" (click)=\"onClick()\">\u0417\u0430\u043A\u0440\u0438\u0442\u0438</span>\n    </div>\n  ",
          styles: ["\n    .snack-bar-wr {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .snack-text {\n      color: white;\n    }\n        \n    .snack-bar-btn {\n      margin-left: 7px;\n      color: white;\n      cursor: pointer;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/container/home-container/home-container.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/home/container/home-container/home-container.component.ts ***!
    \***************************************************************************/

  /*! exports provided: HomeContainerComponent */

  /***/
  function srcAppHomeContainerHomeContainerHomeContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeContainerComponent", function () {
      return HomeContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/reducers */
    "./src/app/home/store/reducers/index.ts");
    /* harmony import */


    var _store_actions_home_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/actions/home.action */
    "./src/app/home/store/actions/home.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _components_filter_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/filter/list.component */
    "./src/app/home/components/filter/list.component.ts");
    /* harmony import */


    var _components_group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/group-filter/group-filter.component */
    "./src/app/home/components/group-filter/group-filter.component.ts");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/list/list.component */
    "./src/app/home/components/list/list.component.ts");

    function HomeContainerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-group-filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeContainerComponent_ng_template_2_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var err_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](err_r4.error.error.message);
      }
    }

    function HomeContainerComponent_ng_template_2_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeContainerComponent_ng_template_2_div_0_div_6_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var err_r4 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](err_r4.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", err_r4 == null ? null : err_r4.error == null ? null : err_r4.error.error == null ? null : err_r4.error.error.message);
      }
    }

    function HomeContainerComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeContainerComponent_ng_template_2_div_0_Template, 7, 2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.error$));
      }
    }

    var HomeContainerComponent = function HomeContainerComponent(store) {
      _classCallCheck(this, HomeContainerComponent);

      this.store = store;
      this.data$ = this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getData"]);
      this.error$ = this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getError"]);
      this.store.dispatch(_store_actions_home_action__WEBPACK_IMPORTED_MODULE_2__["getData"]());
    };

    HomeContainerComponent.ɵfac = function HomeContainerComponent_Factory(t) {
      return new (t || HomeContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    HomeContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeContainerComponent,
      selectors: [["app-home-container"]],
      decls: 4,
      vars: 4,
      consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "container"], [1, "card"], [1, "content"], ["class", "error", 4, "ngIf"], [1, "error"], [4, "ngIf"]],
      template: function HomeContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeContainerComponent_div_0_Template, 8, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeContainerComponent_ng_template_2_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.data$))("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _components_filter_list_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"], _components_group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_7__["GroupFilterComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 14px;\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: inherit;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  position: relative;\n  overflow: auto;\n}\n.error[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-self: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  padding: 16px;\n  box-sizing: border-box;\n}\n.error[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #3f51b5;\n}\n.error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMS9HaXQvaG9zcGl0YWxsLWFkZC1vbi9zcmMvYXBwL2hvbWUvY29udGFpbmVyL2hvbWUtY29udGFpbmVyL2hvbWUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NvbnRhaW5lci9ob21lLWNvbnRhaW5lci9ob21lLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRko7QURJSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRlI7QURLSTtFQUNJLG1CQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbnRhaW5lci9ob21lLWNvbnRhaW5lci9ob21lLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZXJyb3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6ICMzZjUxYjU7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICB9XG5cbn0iLCIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNvbnRhaW5lciAuY2FyZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLmNhcmQgLmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmVycm9yIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4uZXJyb3IgZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-container',
          templateUrl: './home-container.component.html',
          styleUrls: ['./home-container.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _container_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./container/home-container/home-container.component */
    "./src/app/home/container/home-container/home-container.component.ts");

    var routes = [{
      path: "",
      component: _container_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_2__["HomeContainerComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
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
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/list/list.component */
    "./src/app/home/components/list/list.component.ts");
    /* harmony import */


    var _container_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./container/home-container/home-container.component */
    "./src/app/home/container/home-container/home-container.component.ts");
    /* harmony import */


    var _components_filter_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/filter/list.component */
    "./src/app/home/components/filter/list.component.ts");
    /* harmony import */


    var _components_group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/group-filter/group-filter.component */
    "./src/app/home/components/group-filter/group-filter.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_effects_home_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store/effects/home.effects */
    "./src/app/home/store/effects/home.effects.ts");
    /* harmony import */


    var _store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store/reducers/home.reducer */
    "./src/app/home/store/reducers/home.reducer.ts");
    /* harmony import */


    var _modules_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../modules/material.module */
    "./src/app/modules/material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // Components
    // Store
    // Modules


    var COMPONENTS = [_container_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_4__["HomeContainerComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _components_filter_list_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"], _components_group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_6__["GroupFilterComponent"]];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_10__["HOME_FEATURE_KEY"], _store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_10__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_effects_home_effects__WEBPACK_IMPORTED_MODULE_9__["HomeEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_container_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_4__["HomeContainerComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _components_filter_list_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"], _components_group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_6__["GroupFilterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [].concat(COMPONENTS),
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_10__["HOME_FEATURE_KEY"], _store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_10__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_effects_home_effects__WEBPACK_IMPORTED_MODULE_9__["HomeEffects"]])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/store/actions/home.action.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/store/actions/home.action.ts ***!
    \***************************************************/

  /*! exports provided: getData, getDataSuccess, getDataFailure, toggleGroup, setTextFilter */

  /***/
  function srcAppHomeStoreActionsHomeActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getData", function () {
      return getData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDataSuccess", function () {
      return getDataSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDataFailure", function () {
      return getDataFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleGroup", function () {
      return toggleGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setTextFilter", function () {
      return setTextFilter;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Home Api] Get Data ");
    var getDataSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Home Api] Get Data Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getDataFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Home Api] Get Data Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var toggleGroup = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Home] Toggle Group", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var setTextFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Home] Set Text Filter", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/home/store/effects/home.effects.ts":
  /*!****************************************************!*\
    !*** ./src/app/home/store/effects/home.effects.ts ***!
    \****************************************************/

  /*! exports provided: HomeEffects */

  /***/
  function srcAppHomeStoreEffectsHomeEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeEffects", function () {
      return HomeEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions_home_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/home.action */
    "./src/app/home/store/actions/home.action.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/data.service */
    "./src/app/services/data.service.ts");

    var HomeEffects = function HomeEffects(actions$, dataService) {
      var _this = this;

      _classCallCheck(this, HomeEffects);

      this.actions$ = actions$;
      this.dataService = dataService;
      this.getData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_home_action__WEBPACK_IMPORTED_MODULE_4__["getData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
          return _this.dataService.getDataFromFile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (storeData) {
            return _actions_home_action__WEBPACK_IMPORTED_MODULE_4__["getDataSuccess"]({
              groups: storeData.group
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions_home_action__WEBPACK_IMPORTED_MODULE_4__["getDataFailure"]({
              error: error
            }));
          }));
        }));
      });
    };

    HomeEffects.ɵfac = function HomeEffects_Factory(t) {
      return new (t || HomeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]));
    };

    HomeEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeEffects,
      factory: HomeEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/store/reducers/home.reducer.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/store/reducers/home.reducer.ts ***!
    \*****************************************************/

  /*! exports provided: HOME_FEATURE_KEY, initialState, reducer, getData, getGroups, getError, getFilter, getSelectedGroups */

  /***/
  function srcAppHomeStoreReducersHomeReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOME_FEATURE_KEY", function () {
      return HOME_FEATURE_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getData", function () {
      return getData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGroups", function () {
      return getGroups;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFilter", function () {
      return getFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSelectedGroups", function () {
      return getSelectedGroups;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_home_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/home.action */
    "./src/app/home/store/actions/home.action.ts");

    var HOME_FEATURE_KEY = "home";
    var initialState = {
      data: [],
      groups: [],
      error: null,
      filter: '',
      selectedGroups: []
    };
    var dataReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_action__WEBPACK_IMPORTED_MODULE_1__["getData"], function (state) {
      return initialState;
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_action__WEBPACK_IMPORTED_MODULE_1__["getDataSuccess"], function (state, _ref) {
      var groups = _ref.groups,
          type = _ref.type;
      return Object.assign(Object.assign({}, state), {
        data: groups,
        groups: groups.map(function (g) {
          return {
            id: g.id,
            title: g.title
          };
        }),
        error: null,
        selectedGroups: groups.map(function (group) {
          return {
            id: group.id,
            title: group.title,
            selected: true
          };
        })
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_action__WEBPACK_IMPORTED_MODULE_1__["getDataFailure"], function (state, _ref2) {
      var error = _ref2.error;
      return Object.assign(Object.assign({}, state), {
        data: undefined,
        error: error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_action__WEBPACK_IMPORTED_MODULE_1__["toggleGroup"], function (state, _ref3) {
      var group = _ref3.group;
      var SG = JSON.parse(JSON.stringify(state.selectedGroups));
      var el = SG[SG.findIndex(function (g) {
        return g.id === group.id;
      })];
      el.selected = !el.selected;
      return Object.assign(Object.assign({}, state), {
        selectedGroups: SG
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_action__WEBPACK_IMPORTED_MODULE_1__["setTextFilter"], function (state, _ref4) {
      var text = _ref4.text;
      return Object.assign(Object.assign({}, state), {
        filter: text
      });
    }));

    function reducer(state, action) {
      return dataReducer(state, action);
    }

    var getData = function getData(state) {
      return state.data;
    };

    var getGroups = function getGroups(state) {
      return state.groups;
    };

    var getError = function getError(state) {
      return state.error;
    };

    var getFilter = function getFilter(state) {
      return state.filter;
    };

    var getSelectedGroups = function getSelectedGroups(state) {
      return state.selectedGroups;
    };
    /***/

  },

  /***/
  "./src/app/home/store/reducers/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/home/store/reducers/index.ts ***!
    \**********************************************/

  /*! exports provided: selectHomeFeature, getHomeState, getError, getData, getGroups, getFilter, getSelectionGroups, getSelectedGroups, getDataFilteredByGroups, getDataFilteredByTextField, getDataForTable */

  /***/
  function srcAppHomeStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectHomeFeature", function () {
      return selectHomeFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getHomeState", function () {
      return getHomeState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getData", function () {
      return getData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGroups", function () {
      return getGroups;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFilter", function () {
      return getFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSelectionGroups", function () {
      return getSelectionGroups;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSelectedGroups", function () {
      return getSelectedGroups;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDataFilteredByGroups", function () {
      return getDataFilteredByGroups;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDataFilteredByTextField", function () {
      return getDataFilteredByTextField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDataForTable", function () {
      return getDataForTable;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.reducer */
    "./src/app/home/store/reducers/home.reducer.ts");

    var selectHomeFeature = function selectHomeFeature(state) {
      return state[_home_reducer__WEBPACK_IMPORTED_MODULE_1__["HOME_FEATURE_KEY"]];
    };

    var getHomeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHomeFeature, function (state) {
      return state;
    });
    var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeState, function (data) {
      return _home_reducer__WEBPACK_IMPORTED_MODULE_1__["getError"](data);
    });
    var getData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeState, function (data) {
      return _home_reducer__WEBPACK_IMPORTED_MODULE_1__["getData"](data);
    });
    var getGroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeState, function (data) {
      return _home_reducer__WEBPACK_IMPORTED_MODULE_1__["getGroups"](data);
    });
    var getFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeState, function (data) {
      return _home_reducer__WEBPACK_IMPORTED_MODULE_1__["getFilter"](data);
    });
    var getSelectionGroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeState, function (data) {
      return _home_reducer__WEBPACK_IMPORTED_MODULE_1__["getSelectedGroups"](data);
    });
    var getSelectedGroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSelectionGroups, function (data) {
      return data.filter(function (d) {
        return d.selected;
      });
    });
    var getDataFilteredByGroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getData, getSelectedGroups, function (data, getSelectedGroups) {
      return data ? data.filter(function (group) {
        return getSelectedGroups.some(function (selectedGroup) {
          return selectedGroup.id === group.id;
        });
      }) : data;
    });
    var getDataFilteredByTextField = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDataFilteredByGroups, getFilter, function (data, filterStr) {
      if (filterStr && data) {
        return JSON.parse(JSON.stringify(data)).map(function (group) {
          group.subGroup = group.subGroup.map(function (subgroup) {
            return Object.assign(Object.assign({}, subgroup), {
              elements: subgroup.elements.filter(function (v) {
                return v.title.trim().toLowerCase().indexOf(filterStr) !== -1;
              })
            });
          }).filter(function (sg) {
            return sg.elements.length;
          });
          return group;
        }).filter(function (g) {
          return g.subGroup.length;
        });
      }

      return data;
    });
    var getDataForTable = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDataFilteredByTextField, function (data) {
      if (data) {
        var tableArr = [];
        data.forEach(function (group) {
          tableArr.push({
            groupTitle: group.title,
            isGroup: true
          });
          group.subGroup.forEach(function (subgroup) {
            tableArr.push({
              subgroupTitle: subgroup.title,
              isSubgroup: true
            });
            subgroup.elements.forEach(function (el) {
              tableArr.push(el);
            });
          });
        });
        return tableArr;
      }

      return [];
    });
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map