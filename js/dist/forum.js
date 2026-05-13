module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */// forum.js


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/forum/components/DailyRewards/ClaimModel.js":
/*!*********************************************************!*\
  !*** ./src/forum/components/DailyRewards/ClaimModel.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClaimModel; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);




var ClaimModel = /*#__PURE__*/function (_Modal) {
  function ClaimModel() {
    return _Modal.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ClaimModel, _Modal);
  var _proto = ClaimModel.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.displayAmount = 0;
    this.animationFrameId = null;
  };
  _proto.className = function className() {
    return 'DailyRewardsClaimModal Modal--small';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.claim_modal_title');
  };
  _proto.oncreate = function oncreate(vnode) {
    _Modal.prototype.oncreate.call(this, vnode);
    this.startAmountAnimation();
  };
  _proto.onremove = function onremove(vnode) {
    _Modal.prototype.onremove.call(this, vnode);
    this.stopAmountAnimation();
  };
  _proto.content = function content() {
    var _this = this;
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "DailyRewardsClaimModal-content"
    }, m("div", {
      className: "DailyRewardsClaimModal-totalLabel"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.claim_modal_total_label')), m("div", {
      className: "DailyRewardsClaimModal-amountRow"
    }, m("span", {
      className: "DailyRewardsClaimModal-amountValue"
    }, this.displayAmount), m("span", {
      className: "DailyRewardsClaimModal-currencyName"
    }, this.getCurrencyName())), m("div", {
      className: "DailyRewardsClaimModal-actions"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary DailyRewardsClaimModal-confirmButton',
      onclick: function onclick() {
        return _this.hide();
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.claim_modal_confirm_button')))));
  };
  _proto.getTargetAmount = function getTargetAmount() {
    var source = this.attrs ? this.attrs.amount : 0;
    var parsed = Number(source);
    if (Number.isNaN(parsed) || parsed <= 0) {
      return 0;
    }
    return Math.floor(parsed);
  };
  _proto.getCurrencyName = function getCurrencyName() {
    var value = this.attrs && typeof this.attrs.currencyName === 'string' ? this.attrs.currencyName.trim() : '';
    if (value) {
      return value;
    }
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.claim_modal_currency_placeholder');
  };
  _proto.stopAmountAnimation = function stopAmountAnimation() {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  };
  _proto.startAmountAnimation = function startAmountAnimation() {
    var _this2 = this;
    this.stopAmountAnimation();
    var target = this.getTargetAmount();
    if (target <= 0) {
      this.displayAmount = 0;
      m.redraw();
      return;
    }
    var duration = 900;
    var startAt = Date.now();
    var _step = function step() {
      var elapsed = Date.now() - startAt;
      var progress = Math.min(1, elapsed / duration);
      var eased = 1 - Math.pow(1 - progress, 3);
      _this2.displayAmount = Math.min(target, Math.floor(target * eased));
      if (progress < 1) {
        _this2.animationFrameId = window.requestAnimationFrame(_step);
        m.redraw();
        return;
      }
      _this2.displayAmount = target;
      _this2.animationFrameId = null;
      m.redraw();
    };
    this.animationFrameId = window.requestAnimationFrame(_step);
  };
  return ClaimModel;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/forum/components/DailyRewards/RewardCardList.js":
/*!*************************************************************!*\
  !*** ./src/forum/components/DailyRewards/RewardCardList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DailyRewardsCardList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RewardRecordCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RewardRecordCard */ "./src/forum/components/DailyRewards/RewardRecordCard.js");






var DailyRewardsCardList = /*#__PURE__*/function (_Component) {
  function DailyRewardsCardList() {
    return _Component.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DailyRewardsCardList, _Component);
  var _proto = DailyRewardsCardList.prototype;
  _proto.view = function view(vnode) {
    var props = vnode.attrs || {};
    var records = Array.isArray(props.records) ? props.records : [];
    var isExpiredRecord = typeof props.isExpiredRecord === 'function' ? props.isExpiredRecord : function () {
      return false;
    };
    var onClaimRecord = typeof props.onClaimRecord === 'function' ? props.onClaimRecord : function () {};
    var isClaimingRecord = typeof props.isClaimingRecord === 'function' ? props.isClaimingRecord : function () {
      return false;
    };
    if (props.loading) {
      return m("div", {
        className: "DailyRewardsCardList DailyRewardsCardList--state"
      }, m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default.a, null));
    }
    if (props.errorMessage && !records.length) {
      return m("div", {
        className: "DailyRewardsCardList DailyRewardsCardList--state"
      }, m("div", {
        className: "DailyRewardsState DailyRewardsState--error"
      }, props.errorMessage));
    }
    if (!records.length) {
      return m("div", {
        className: "DailyRewardsCardList DailyRewardsCardList--state"
      }, m("div", {
        className: "DailyRewardsState"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.empty_records')));
    }
    var hasMore = Boolean(props.hasMore);
    var loadingMore = Boolean(props.loadingMore);
    var onLoadMore = typeof props.onLoadMore === 'function' ? props.onLoadMore : function () {};
    return m("div", {
      className: "DailyRewardsCardList"
    }, records.map(function (record, index) {
      return m(_RewardRecordCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: (record.id || 'record') + "-" + index,
        record: record,
        expired: isExpiredRecord(record),
        claiming: isClaimingRecord(record, index),
        onClaim: function onClaim() {
          return onClaimRecord(record, index);
        }
      });
    }), hasMore ? m("div", {
      className: "DailyRewardsCardList-loadMore"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "Button DailyRewardsCardList-loadMoreButton",
      onclick: onLoadMore,
      disabled: loadingMore,
      loading: loadingMore
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.load_more'))) : null);
  };
  return DailyRewardsCardList;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/forum/components/DailyRewards/RewardRecordCard.js":
/*!***************************************************************!*\
  !*** ./src/forum/components/DailyRewards/RewardRecordCard.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RewardRecordCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);




function normalizeDateTimeText(value) {
  if (!value || typeof value !== 'string') {
    return '-';
  }
  var normalized = value.includes('T') ? value.replace('T', ' ') : value;
  return normalized;
}
function formatDateTime(value) {
  var normalized = normalizeDateTimeText(value);
  if (normalized === '-') {
    return normalized;
  }
  return normalized;
}
function getRewardTypeLabel(type) {
  if (type === 'post') {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.type_post');
  }
  if (type === 'reply') {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.type_reply');
  }
  if (type === 'view') {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.type_view');
  }
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.unknown_type');
}
var RewardRecordCard = /*#__PURE__*/function (_Component) {
  function RewardRecordCard() {
    return _Component.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RewardRecordCard, _Component);
  var _proto = RewardRecordCard.prototype;
  _proto.view = function view(vnode) {
    var attrs = vnode.attrs || {};
    var record = attrs.record || {};
    var isClaimed = Boolean(record.claimedAt);
    var isExpired = !isClaimed && Boolean(attrs.expired);
    var claiming = Boolean(attrs.claiming);
    var onClaim = typeof attrs.onClaim === 'function' ? attrs.onClaim : function () {};
    var statusText = isClaimed ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.status_claimed') : isExpired ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.status_expired') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.status_pending');
    var claimButtonText = isClaimed ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.button_claimed') : isExpired ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.button_expired') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.button_claim');
    var statusClassName = isClaimed ? 'is-claimed' : isExpired ? 'is-expired' : 'is-pending';
    var claimButtonClassName = isClaimed ? 'is-claimed' : isExpired ? 'is-expired' : 'Button--primary';
    return m("div", {
      className: "DailyRewardsCard"
    }, m("div", {
      className: "DailyRewardsCard-content"
    }, m("div", {
      className: "DailyRewardsCard-line"
    }, m("div", {
      className: "DailyRewardsCard-field"
    }, m("span", {
      className: "DailyRewardsCard-label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.field_type')), m("span", {
      className: "DailyRewardsCard-value"
    }, getRewardTypeLabel(record.type))), m("div", {
      className: "DailyRewardsCard-field"
    }, m("span", {
      className: "DailyRewardsCard-label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.field_issued_at')), m("span", {
      className: "DailyRewardsCard-value"
    }, formatDateTime(record.createdAt)))), m("div", {
      className: "DailyRewardsCard-line"
    }, m("div", {
      className: "DailyRewardsCard-field"
    }, m("span", {
      className: "DailyRewardsCard-label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.field_status')), m("span", {
      className: "DailyRewardsCard-status " + statusClassName
    }, statusText)), m("div", {
      className: "DailyRewardsCard-field"
    }, m("span", {
      className: "DailyRewardsCard-label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.field_amount')), m("span", {
      className: "DailyRewardsCard-value DailyRewardsCard-value--amount"
    }, record.amount || 0)), m("div", {
      className: "DailyRewardsCard-field"
    }, m("span", {
      className: "DailyRewardsCard-label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.field_claimed_at')), m("span", {
      className: "DailyRewardsCard-value"
    }, formatDateTime(record.claimedAt))))), m("div", {
      className: "DailyRewardsCard-actions"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button DailyRewardsCard-claimButton " + claimButtonClassName,
      onclick: onClaim,
      disabled: isClaimed || isExpired || claiming,
      icon: claiming ? 'fas fa-spinner fa-spin' : false
    }, claimButtonText)));
  };
  return RewardRecordCard;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/forum/components/DailyRewards/StatusCard.js":
/*!*********************************************************!*\
  !*** ./src/forum/components/DailyRewards/StatusCard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DailyRewardsStatusCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);




var REWARD_TYPES = ['post', 'reply', 'view'];
function getRewardTypeLabel(type) {
  if (type === 'post') {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.type_post');
  }
  if (type === 'reply') {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.type_reply');
  }
  if (type === 'view') {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.type_view');
  }
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.unknown_type');
}
var DailyRewardsStatusCard = /*#__PURE__*/function (_Component) {
  function DailyRewardsStatusCard() {
    return _Component.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DailyRewardsStatusCard, _Component);
  var _proto = DailyRewardsStatusCard.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.dayPassedTimer = null;
    this.currentTimezone = '';
    this.dayFillEl = null;
    this.dayValueEl = null;
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this = this;
    _Component.prototype.oncreate.call(this, vnode);
    this.currentTimezone = vnode.attrs && typeof vnode.attrs.timezone === 'string' ? vnode.attrs.timezone.trim() : '';
    this.updateDayProgressDom();
    this.dayPassedTimer = setInterval(function () {
      _this.updateDayProgressDom();
    }, 1000);
  };
  _proto.onupdate = function onupdate(vnode) {
    this.currentTimezone = vnode.attrs && typeof vnode.attrs.timezone === 'string' ? vnode.attrs.timezone.trim() : '';
    this.updateDayProgressDom();
  };
  _proto.onremove = function onremove(vnode) {
    _Component.prototype.onremove.call(this, vnode);
    if (this.dayPassedTimer) {
      clearInterval(this.dayPassedTimer);
      this.dayPassedTimer = null;
    }
    this.dayFillEl = null;
    this.dayValueEl = null;
  };
  _proto.getDayPassedPercent = function getDayPassedPercent(timezone) {
    if (!timezone || typeof timezone !== 'string') {
      return 0;
    }
    var now = new Date();
    try {
      var formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      var parts = formatter.formatToParts(now);
      var hourPart = parts.find(function (part) {
        return part.type === 'hour';
      });
      var minutePart = parts.find(function (part) {
        return part.type === 'minute';
      });
      var secondPart = parts.find(function (part) {
        return part.type === 'second';
      });
      var hour = Number(hourPart ? hourPart.value : 0);
      var minute = Number(minutePart ? minutePart.value : 0);
      var second = Number(secondPart ? secondPart.value : 0);
      var elapsed = hour * 3600 + minute * 60 + second + now.getMilliseconds() / 1000;
      var total = 24 * 3600;
      return Math.max(0, Math.min(100, elapsed / total * 100));
    } catch (error) {
      return 0;
    }
  };
  _proto.formatPercent = function formatPercent(value) {
    return Number(value || 0).toFixed(2) + "%";
  };
  _proto.updateDayProgressDom = function updateDayProgressDom() {
    var dayPassedPercent = this.getDayPassedPercent(this.currentTimezone);
    var dayPassedText = this.formatPercent(dayPassedPercent);
    if (this.dayFillEl) {
      this.dayFillEl.style.width = dayPassedPercent + "%";
    }
    if (this.dayValueEl) {
      this.dayValueEl.textContent = dayPassedText;
    }
  };
  _proto.updateRewardFillDom = function updateRewardFillDom(vnode, percent, animateFromZero) {
    var dom = vnode.dom;
    if (!dom) {
      return;
    }
    var width = Math.max(0, Math.min(100, Number(percent || 0))) + "%";
    if (animateFromZero) {
      dom.style.width = '0%';
      requestAnimationFrame(function () {
        dom.style.width = width;
      });
      return;
    }
    dom.style.width = width;
  };
  _proto.view = function view(vnode) {
    var _this2 = this;
    var attrs = vnode.attrs || {};
    var loading = Boolean(attrs.loading);
    var timezone = attrs.timezone;
    var rowsByType = attrs.rowsByType || {};
    var dayPassedPercent = Number(this.getDayPassedPercent(timezone) || 0);
    var dayPassedText = this.formatPercent(dayPassedPercent);
    var rewardRows = REWARD_TYPES.filter(function (type) {
      var row = rowsByType[type] || {};
      var target = Number(row.target || 0);
      return target > 0;
    }).map(function (type) {
      var row = rowsByType[type] || {};
      var current = Number(row.current || 0);
      var target = Number(row.target || 0);
      var percent = Number(row.percent || 0);
      var ratioText = current + "/" + target;
      return m("div", {
        className: "DailyRewardsStatusCard-row",
        key: type
      }, m("div", {
        className: "DailyRewardsStatusCard-label"
      }, getRewardTypeLabel(type)), m("div", {
        className: "DailyRewardsStatusCard-track"
      }, m("div", {
        className: "DailyRewardsStatusCard-fill",
        oncreate: function oncreate(fillVnode) {
          return _this2.updateRewardFillDom(fillVnode, percent, true);
        },
        onupdate: function onupdate(fillVnode) {
          return _this2.updateRewardFillDom(fillVnode, percent, false);
        }
      })), m("div", {
        className: "DailyRewardsStatusCard-value"
      }, ratioText));
    });
    return m("div", {
      className: "DailyRewardsStatusCard"
    }, m("div", {
      className: "DailyRewardsStatusCard-dayProgress"
    }, m("div", {
      className: "DailyRewardsStatusCard-label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.status_card_day_passed')), m("div", {
      className: "DailyRewardsStatusCard-track"
    }, m("div", {
      className: "DailyRewardsStatusCard-fill",
      oncreate: function oncreate(fillVnode) {
        _this2.dayFillEl = fillVnode.dom;
        _this2.updateDayProgressDom();
      },
      onupdate: function onupdate(fillVnode) {
        _this2.dayFillEl = fillVnode.dom;
        _this2.updateDayProgressDom();
      }
    })), m("div", {
      className: "DailyRewardsStatusCard-value",
      oncreate: function oncreate(valueVnode) {
        _this2.dayValueEl = valueVnode.dom;
        _this2.updateDayProgressDom();
      },
      onupdate: function onupdate(valueVnode) {
        _this2.dayValueEl = valueVnode.dom;
        _this2.updateDayProgressDom();
      }
    }, dayPassedText)), m("div", {
      className: "DailyRewardsStatusCard-list"
    }, loading ? m("div", {
      className: "DailyRewardsStatusCard-loading",
      key: "loading"
    }, m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default.a, null)) : rewardRows));
  };
  return DailyRewardsStatusCard;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/forum/components/DailyRewards/Toolbar.js":
/*!******************************************************!*\
  !*** ./src/forum/components/DailyRewards/Toolbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DailyRewardsToolbar; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);







var FILTER_TYPES = ['all', 'post', 'reply', 'view'];
var DailyRewardsToolbar = /*#__PURE__*/function (_Component) {
  function DailyRewardsToolbar() {
    return _Component.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DailyRewardsToolbar, _Component);
  var _proto = DailyRewardsToolbar.prototype;
  _proto.viewItems = function viewItems(props) {
    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    var current = props.filterType || 'all';
    var onFilterChange = typeof props.onFilterChange === 'function' ? props.onFilterChange : function () {};
    items.add('type', m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
      buttonClassName: "Button",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-daily-rewards.forum.page.filter_" + current),
      accessibleToggleLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.filter_toggle_accessible_label')
    }, FILTER_TYPES.map(function (type) {
      var active = current === type;
      return m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        icon: active ? 'fas fa-check' : true,
        active: active,
        onclick: function onclick() {
          return onFilterChange(type);
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-daily-rewards.forum.page.filter_" + type));
    })));
    return items;
  };
  _proto.actionItems = function actionItems(props) {
    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    var refreshing = Boolean(props.refreshing);
    var claiming = Boolean(props.claiming);
    var pendingCount = Number(props.pendingCount || 0);
    var onRefresh = typeof props.onRefresh === 'function' ? props.onRefresh : function () {};
    var onClaimAll = typeof props.onClaimAll === 'function' ? props.onClaimAll : function () {};
    items.add('refresh', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.refresh'),
      icon: refreshing ? 'fas fa-spinner fa-spin' : 'fas fa-sync',
      className: "Button Button--icon",
      onclick: onRefresh,
      disabled: refreshing
    }));
    items.add('claimAll', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "Button Button--primary",
      onclick: onClaimAll,
      disabled: claiming || !pendingCount
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.claim_all')));
    return items;
  };
  _proto.view = function view(vnode) {
    var props = vnode.attrs || {};
    return m("div", {
      className: "IndexPage-toolbar DailyRewardsToolbar"
    }, m("ul", {
      className: "IndexPage-toolbar-view"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(this.viewItems(props).toArray())), m("ul", {
      className: "IndexPage-toolbar-action"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(this.actionItems(props).toArray())));
  };
  return DailyRewardsToolbar;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/forum/components/DailyRewards/index.js":
/*!****************************************************!*\
  !*** ./src/forum/components/DailyRewards/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DailyRewards; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Toolbar */ "./src/forum/components/DailyRewards/Toolbar.js");
/* harmony import */ var _RewardCardList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RewardCardList */ "./src/forum/components/DailyRewards/RewardCardList.js");
/* harmony import */ var _StatusCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StatusCard */ "./src/forum/components/DailyRewards/StatusCard.js");
/* harmony import */ var _ClaimModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClaimModel */ "./src/forum/components/DailyRewards/ClaimModel.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service */ "./src/forum/components/DailyRewards/service/index.js");










var REWARD_TYPES = ['post', 'reply', 'view'];
var HISTORY_PAGE_SIZE = 20;
var DailyRewards = /*#__PURE__*/function (_Page) {
  function DailyRewards() {
    return _Page.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DailyRewards, _Page);
  var _proto = DailyRewards.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
    this.bodyClass = 'App--index';
    this.records = [];
    this.statusConfig = this.getDefaultStatusConfig();
    this.filterType = 'all';
    this.loading = true;
    this.statusLoading = true;
    this.refreshing = false;
    this.claimingAll = false;
    this.claimingRecordKeys = {};
    this.errorMessage = '';
    this.historyPageSize = HISTORY_PAGE_SIZE;
    this.currentPage = 1;
    this.hasMoreRecords = false;
    this.loadingMore = false;
    this.loadRecords();
  };
  _proto.oncreate = function oncreate(vnode) {
    _Page.prototype.oncreate.call(this, vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.title'));
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.setTitleCount(0);
  };
  _proto.toSafeNumber = function toSafeNumber(value) {
    var parsed = Number(value);
    if (Number.isNaN(parsed) || parsed < 0) {
      return 0;
    }
    return parsed;
  };
  _proto.normalizeRecord = function normalizeRecord(record) {
    return {
      id: Number(record && record.id ? record.id : 0),
      type: String(record && record.type ? record.type : 'unknown'),
      amount: this.toSafeNumber(record && record.amount ? record.amount : 0),
      claimedAt: record && record.claimedAt ? String(record.claimedAt) : null,
      createdAt: record && record.createdAt ? String(record.createdAt) : null
    };
  };
  _proto.normalizeRewardConfig = function normalizeRewardConfig(config) {
    return {
      enabled: Boolean(config.enabled),
      effectiveEnabled: Boolean(config.effectiveEnabled),
      amount: this.toSafeNumber(config.amount),
      limitEnabled: Boolean(config.limitEnabled),
      limitAmount: this.toSafeNumber(config.limitAmount)
    };
  };
  _proto.getDefaultStatusConfig = function getDefaultStatusConfig() {
    return {
      global: {
        enabled: false,
        effectiveEnabled: false,
        timezone: ''
      },
      rewards: {
        post: this.normalizeRewardConfig({}),
        reply: this.normalizeRewardConfig({}),
        view: this.normalizeRewardConfig({})
      }
    };
  };
  _proto.normalizeStatusConfig = function normalizeStatusConfig(payload) {
    var source = payload || {};
    var global = source.global || {};
    var rewards = source.rewards || {};
    return {
      global: {
        enabled: Boolean(global.enabled),
        effectiveEnabled: Boolean(global.effectiveEnabled),
        timezone: typeof global.timezone === 'string' ? global.timezone.trim() : ''
      },
      rewards: {
        post: this.normalizeRewardConfig(rewards.post || {}),
        reply: this.normalizeRewardConfig(rewards.reply || {}),
        view: this.normalizeRewardConfig(rewards.view || {})
      }
    };
  };
  _proto.normalizeMinePayload = function normalizeMinePayload(payload) {
    var _this = this;
    var source = payload || {};
    var rows = Array.isArray(source.data) ? source.data : [];
    var pagination = source.pagination && typeof source.pagination === 'object' ? source.pagination : {};
    var page = Math.max(1, Math.floor(this.toSafeNumber(pagination.page || 1)));
    var count = Math.floor(this.toSafeNumber(pagination.count || this.historyPageSize));
    var total = Math.floor(this.toSafeNumber(pagination.total));
    var fallbackHasMore = count > 0 && page * count < total;
    return {
      records: rows.map(function (row) {
        return _this.normalizeRecord(row);
      }),
      pagination: {
        page: page,
        count: count,
        total: total,
        hasMore: typeof pagination.hasMore === 'boolean' ? pagination.hasMore : fallbackHasMore
      }
    };
  };
  _proto.mergeUniqueRecords = function mergeUniqueRecords(existingRecords, incomingRecords) {
    var result = Array.isArray(existingRecords) ? existingRecords.slice() : [];
    var seenIds = {};
    result.forEach(function (record) {
      if (record && record.id) {
        seenIds[String(record.id)] = true;
      }
    });
    (Array.isArray(incomingRecords) ? incomingRecords : []).forEach(function (record) {
      var key = record && record.id ? String(record.id) : '';
      if (key && seenIds[key]) {
        return;
      }
      if (key) {
        seenIds[key] = true;
      }
      result.push(record);
    });
    return result;
  };
  _proto.loadRecords = function loadRecords(options) {
    var _this2 = this;
    if (options === void 0) {
      options = {};
    }
    var silent = Boolean(options.silent);
    if (!silent) {
      this.loading = true;
      this.statusLoading = true;
    }
    this.errorMessage = '';
    return Object(_service__WEBPACK_IMPORTED_MODULE_9__["fetchDailyRewardsPayload"])({
      page: 1,
      count: this.historyPageSize
    }).then(function (_ref) {
      var mineResult = _ref[0],
        statusResult = _ref[1];
      if (mineResult.status === 'fulfilled') {
        var minePayload = _this2.normalizeMinePayload(mineResult.value);
        _this2.records = minePayload.records;
        _this2.currentPage = minePayload.pagination.page;
        _this2.hasMoreRecords = Boolean(minePayload.pagination.hasMore);
      } else if (!silent) {
        _this2.records = [];
        _this2.currentPage = 1;
        _this2.hasMoreRecords = false;
        _this2.errorMessage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.load_error');
      }
      if (statusResult.status === 'fulfilled') {
        var response = statusResult.value;
        _this2.statusConfig = _this2.normalizeStatusConfig(response && response.data ? response.data : {});
      } else if (!_this2.statusConfig) {
        _this2.statusConfig = _this2.getDefaultStatusConfig();
      }
    })["catch"](function () {
      if (!silent) {
        _this2.records = [];
      }
      _this2.errorMessage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.load_error');
    })["finally"](function () {
      _this2.loading = false;
      _this2.statusLoading = false;
      _this2.loadingMore = false;
      _this2.refreshing = false;
      _this2.claimingAll = false;
      _this2.claimingRecordKeys = {};
      m.redraw();
    });
  };
  _proto.handleLoadMore = function handleLoadMore() {
    var _this3 = this;
    if (this.loading || this.loadingMore || !this.hasMoreRecords) {
      return;
    }
    var nextPage = this.currentPage + 1;
    this.errorMessage = '';
    this.loadingMore = true;
    m.redraw();
    return Object(_service__WEBPACK_IMPORTED_MODULE_9__["fetchDailyRewardsMine"])({
      page: nextPage,
      count: this.historyPageSize
    }).then(function (response) {
      var minePayload = _this3.normalizeMinePayload(response);
      _this3.records = _this3.mergeUniqueRecords(_this3.records, minePayload.records);
      _this3.currentPage = minePayload.pagination.page || nextPage;
      _this3.hasMoreRecords = Boolean(minePayload.pagination.hasMore);
    })["catch"](function () {
      if (!_this3.records.length) {
        _this3.errorMessage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.page.load_error');
      }
    })["finally"](function () {
      _this3.loadingMore = false;
      m.redraw();
    });
  };
  _proto.getRecordDateKey = function getRecordDateKey(value) {
    if (!value || typeof value !== 'string') {
      return '';
    }
    var normalized = value.includes('T') ? value.replace('T', ' ') : value;
    var matched = normalized.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!matched) {
      return '';
    }
    return matched[1] + "-" + matched[2] + "-" + matched[3];
  };
  _proto.getDateKeyByTimezone = function getDateKeyByTimezone(date, timezone) {
    if (!timezone || typeof timezone !== 'string') {
      return '';
    }
    try {
      var formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      var parts = formatter.formatToParts(date);
      var yearPart = parts.find(function (part) {
        return part.type === 'year';
      });
      var monthPart = parts.find(function (part) {
        return part.type === 'month';
      });
      var dayPart = parts.find(function (part) {
        return part.type === 'day';
      });
      var year = yearPart ? yearPart.value : '';
      var month = monthPart ? monthPart.value : '';
      var day = dayPart ? dayPart.value : '';
      if (year && month && day) {
        return year + "-" + month + "-" + day;
      }
    } catch (error) {
      return '';
    }
    return '';
  };
  _proto.getTodayTotalsByType = function getTodayTotalsByType(timezone) {
    var _this4 = this;
    var totals = {
      post: 0,
      reply: 0,
      view: 0
    };
    if (!timezone || typeof timezone !== 'string') {
      return totals;
    }
    var todayKey = this.getDateKeyByTimezone(new Date(), timezone);
    if (!todayKey) {
      return totals;
    }
    this.records.forEach(function (record) {
      if (!REWARD_TYPES.includes(record.type)) {
        return;
      }
      var recordDateKey = _this4.getRecordDateKey(record.createdAt);
      if (recordDateKey !== todayKey) {
        return;
      }
      totals[record.type] += _this4.toSafeNumber(record.amount);
    });
    return totals;
  };
  _proto.isRecordExpired = function isRecordExpired(record, timezone) {
    if (!record || record.claimedAt) {
      return false;
    }
    if (!timezone || typeof timezone !== 'string') {
      return false;
    }
    var todayKey = this.getDateKeyByTimezone(new Date(), timezone);
    if (!todayKey) {
      return false;
    }
    var recordDateKey = this.getRecordDateKey(record.createdAt);
    if (!recordDateKey) {
      return false;
    }
    return recordDateKey < todayKey;
  };
  _proto.getStatusSummary = function getStatusSummary() {
    var _this5 = this;
    var config = this.statusConfig || this.getDefaultStatusConfig();
    var timezone = typeof config.global.timezone === 'string' ? config.global.timezone.trim() : '';
    var totalsByType = this.getTodayTotalsByType(timezone);
    var rowsByType = {};
    REWARD_TYPES.forEach(function (type) {
      var rewardConfig = config.rewards[type] || _this5.normalizeRewardConfig({});
      var current = _this5.toSafeNumber(totalsByType[type]);
      var isEffective = Boolean(config.global.effectiveEnabled && rewardConfig.effectiveEnabled);
      var target = isEffective && rewardConfig.limitEnabled ? _this5.toSafeNumber(rewardConfig.limitAmount) : 0;
      var percent = target > 0 ? Math.max(0, Math.min(100, current / target * 100)) : 0;
      rowsByType[type] = {
        current: current,
        target: target,
        percent: percent
      };
    });
    return {
      timezone: timezone,
      rowsByType: rowsByType
    };
  };
  _proto.getCurrencyName = function getCurrencyName() {
    var value = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('tu-daily-rewards.currencyName') : '';
    return typeof value === 'string' ? value.trim() : '';
  };
  _proto.normalizeClaimResponse = function normalizeClaimResponse(response) {
    var payload = response || {};
    var data = payload.data || {};
    return {
      success: payload.success === true,
      claimedCount: Math.floor(this.toSafeNumber(data.claimedCount)),
      claimedTotal: Math.floor(this.toSafeNumber(data.claimedTotal))
    };
  };
  _proto.showClaimModal = function showClaimModal(claimedTotal) {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_ClaimModel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      amount: claimedTotal,
      currencyName: this.getCurrencyName()
    });
  };
  _proto.handleRefresh = function handleRefresh() {
    if (this.refreshing || this.loading) {
      return;
    }
    this.refreshing = true;
    this.loadRecords({
      silent: true
    });
  };
  _proto.handleClaimAll = function handleClaimAll() {
    var _this6 = this;
    if (this.claimingAll) {
      return;
    }
    var global = this.statusConfig && this.statusConfig.global ? this.statusConfig.global : {};
    var timezone = typeof global.timezone === 'string' ? global.timezone.trim() : '';
    var pendingCount = this.records.filter(function (record) {
      return !record.claimedAt && !_this6.isRecordExpired(record, timezone);
    }).length;
    if (!pendingCount) {
      return;
    }
    this.claimingAll = true;
    m.redraw();
    return Object(_service__WEBPACK_IMPORTED_MODULE_9__["claimDailyRewardAll"])().then(function (response) {
      var result = _this6.normalizeClaimResponse(response);
      if (!result.success) {
        return;
      }
      _this6.showClaimModal(result.claimedTotal);
      return _this6.loadRecords({
        silent: true
      });
    })["catch"](function () {})["finally"](function () {
      _this6.claimingAll = false;
      m.redraw();
    });
  };
  _proto.getRecordKey = function getRecordKey(record, index) {
    return (record && record.id ? record.id : 'record') + "-" + index;
  };
  _proto.isClaimingRecord = function isClaimingRecord(record, index) {
    return Boolean(this.claimingRecordKeys[this.getRecordKey(record, index)]);
  };
  _proto.handleClaimRecord = function handleClaimRecord(record, index, timezone) {
    var _this7 = this;
    if (!record || record.claimedAt || this.isRecordExpired(record, timezone) || this.claimingAll) {
      return;
    }
    var key = this.getRecordKey(record, index);
    if (this.claimingRecordKeys[key]) {
      return;
    }
    this.claimingRecordKeys[key] = true;
    m.redraw();
    return Object(_service__WEBPACK_IMPORTED_MODULE_9__["claimDailyRewardSingle"])(record.id).then(function (response) {
      var result = _this7.normalizeClaimResponse(response);
      if (!result.success) {
        return;
      }
      _this7.showClaimModal(result.claimedTotal);
      return _this7.loadRecords({
        silent: true
      });
    })["catch"](function () {})["finally"](function () {
      delete _this7.claimingRecordKeys[key];
      m.redraw();
    });
  };
  _proto.getFilteredRecords = function getFilteredRecords() {
    var _this8 = this;
    if (this.filterType === 'all') {
      return this.records;
    }
    return this.records.filter(function (record) {
      return record.type === _this8.filterType;
    });
  };
  _proto.view = function view() {
    var _this9 = this;
    var statusSummary = this.getStatusSummary();
    var timezone = statusSummary.timezone;
    var pendingCount = this.records.filter(function (record) {
      return !record.claimedAt && !_this9.isRecordExpired(record, timezone);
    }).length;
    var filteredRecords = this.getFilteredRecords();
    return m("div", {
      className: "IndexPage"
    }, flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m("div", {
      className: "DailyRewardsPage"
    }, m(_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      filterType: this.filterType,
      onFilterChange: function onFilterChange(value) {
        _this9.filterType = value;
      },
      refreshing: this.refreshing,
      onRefresh: function onRefresh() {
        return _this9.handleRefresh();
      },
      pendingCount: pendingCount,
      claiming: this.claimingAll,
      onClaimAll: function onClaimAll() {
        return _this9.handleClaimAll();
      }
    }), m(_StatusCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      loading: this.statusLoading,
      timezone: statusSummary.timezone,
      rowsByType: statusSummary.rowsByType
    }), m(_RewardCardList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      loading: this.loading,
      loadingMore: this.loadingMore,
      hasMore: this.hasMoreRecords,
      errorMessage: this.errorMessage,
      records: filteredRecords,
      isExpiredRecord: function isExpiredRecord(record) {
        return _this9.isRecordExpired(record, timezone);
      },
      isClaimingRecord: function isClaimingRecord(record, index) {
        return _this9.isClaimingRecord(record, index);
      },
      onClaimRecord: function onClaimRecord(record, index) {
        return _this9.handleClaimRecord(record, index, timezone);
      },
      onLoadMore: function onLoadMore() {
        return _this9.handleLoadMore();
      }
    }))))));
  };
  return DailyRewards;
}(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/forum/components/DailyRewards/service/index.js":
/*!************************************************************!*\
  !*** ./src/forum/components/DailyRewards/service/index.js ***!
  \************************************************************/
/*! exports provided: fetchDailyRewardsMine, fetchDailyRewardsStatus, fetchDailyRewardsPayload, claimDailyRewardSingle, claimDailyRewardAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDailyRewardsMine", function() { return fetchDailyRewardsMine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDailyRewardsStatus", function() { return fetchDailyRewardsStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDailyRewardsPayload", function() { return fetchDailyRewardsPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimDailyRewardSingle", function() { return claimDailyRewardSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimDailyRewardAll", function() { return claimDailyRewardAll; });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);

function getMineApiUrl() {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('apiUrl') + "/daily-rewards/mine";
}
function getStatusApiUrl() {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('apiUrl') + "/daily-rewards/status";
}
function getClaimSingleApiUrl() {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('apiUrl') + "/daily-rewards/claim/single";
}
function getClaimAllApiUrl() {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('apiUrl') + "/daily-rewards/claim/all";
}
function parsePositiveInt(value) {
  var parsed = Number(value);
  if (Number.isInteger(parsed) && parsed > 0) {
    return parsed;
  }
  return null;
}
function buildMineQueryString(params) {
  if (params === void 0) {
    params = {};
  }
  var query = new URLSearchParams();
  var page = parsePositiveInt(params.page);
  var count = parsePositiveInt(params.count);
  if (page) {
    query.set('page', String(page));
  }
  if (count) {
    query.set('count', String(count));
  }
  var queryString = query.toString();
  return queryString ? "?" + queryString : '';
}
function fetchDailyRewardsMine(params) {
  if (params === void 0) {
    params = {};
  }
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.request({
    method: 'GET',
    url: "" + getMineApiUrl() + buildMineQueryString(params)
  });
}
function fetchDailyRewardsStatus() {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.request({
    method: 'GET',
    url: getStatusApiUrl()
  });
}
function fetchDailyRewardsPayload(mineParams) {
  if (mineParams === void 0) {
    mineParams = {};
  }
  return Promise.allSettled([fetchDailyRewardsMine(mineParams), fetchDailyRewardsStatus()]);
}
function claimDailyRewardSingle(id) {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.request({
    method: 'POST',
    url: getClaimSingleApiUrl(),
    body: {
      id: id
    }
  });
}
function claimDailyRewardAll() {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.request({
    method: 'POST',
    url: getClaimAllApiUrl(),
    body: {}
  });
}

/***/ }),

/***/ "./src/forum/components/PendingRewardNotification.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/PendingRewardNotification.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PendingRewardNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_2__);



var PendingRewardNotification = /*#__PURE__*/function (_Notification) {
  function PendingRewardNotification() {
    return _Notification.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PendingRewardNotification, _Notification);
  var _proto = PendingRewardNotification.prototype;
  _proto.icon = function icon() {
    return 'fas fa-gift';
  };
  _proto.href = function href() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('dailyRewards');
  };
  _proto.content = function content() {
    // 后端会复用同一条通知并重置为未读，这里保持固定提示文案。
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.forum.notifications.pending_reward_text');
  };
  return PendingRewardNotification;
}(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PendingRewardNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PendingRewardNotification */ "./src/forum/components/PendingRewardNotification.js");
/* harmony import */ var _components_DailyRewards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DailyRewards */ "./src/forum/components/DailyRewards/index.js");






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('tu/daily-rewards', function () {
  flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.notificationComponents.tuDailyRewardPending = _components_PendingRewardNotification__WEBPACK_IMPORTED_MODULE_4__["default"];
  flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.dailyRewards = {
    path: '/dailyRewards',
    component: _components_DailyRewards__WEBPACK_IMPORTED_MODULE_5__["default"]
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'navItems', function (items) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user) return;
    items.add('dailyRewards', m(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
      icon: "fas fa-gift",
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('dailyRewards')
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.forum.nav.daily_rewards')), 49);
  });
});

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Notification']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/Notification'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map