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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */// admin.js


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

/***/ "./src/admin/components/RewardConfigPanel.js":
/*!***************************************************!*\
  !*** ./src/admin/components/RewardConfigPanel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RewardConfigPanel; });
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1__);


var REWARD_FIELD_MAP = {
  post: {
    enabled: 'post_enabled',
    amount: 'post_reward_amount',
    limitEnabled: 'post_limit_enabled',
    limitAmount: 'post_limit_amount',
    amountHelpKey: 'tu-daily-rewards.admin.fields.reward_amount_help.post'
  },
  reply: {
    enabled: 'reply_enabled',
    amount: 'reply_reward_amount',
    minChars: 'reply_min_chars',
    limitEnabled: 'reply_limit_enabled',
    limitAmount: 'reply_limit_amount',
    amountHelpKey: 'tu-daily-rewards.admin.fields.reward_amount_help.reply'
  },
  view: {
    enabled: 'view_enabled',
    amount: 'view_reward_amount',
    limitEnabled: 'view_limit_enabled',
    limitAmount: 'view_limit_amount',
    amountHelpKey: 'tu-daily-rewards.admin.fields.reward_amount_help.view'
  }
};
function RewardConfigPanel(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$extensionId = _ref.extensionId,
    extensionId = _ref$extensionId === void 0 ? 'tu-daily-rewards' : _ref$extensionId,
    rewardType = _ref.rewardType,
    rewardLabel = _ref.rewardLabel;
  var config = REWARD_FIELD_MAP[rewardType];
  if (!config) return null;
  var enabledSetting = this.setting(extensionId + "." + config.enabled, '0');
  var amountSetting = this.setting(extensionId + "." + config.amount);
  var minCharsSetting = rewardType === 'reply' ? this.setting(extensionId + "." + config.minChars) : null;
  var limitEnabledSetting = this.setting(extensionId + "." + config.limitEnabled, '0');
  var limitAmountSetting = this.setting(extensionId + "." + config.limitAmount);
  var amountValue = amountSetting();
  var hasAmount = typeof amountValue === 'string' ? amountValue.trim() !== '' : Boolean(amountValue);
  var rewardEnabled = enabledSetting() === '1';
  var limitEnabled = limitEnabledSetting() === '1';
  if (!hasAmount && rewardEnabled) {
    enabledSetting('0');
    rewardEnabled = false;
  }
  return m('.Form', [m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reward_switch_label', {
    reward: rewardLabel
  })), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reward_switch_help')), m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1___default.a, {
    state: rewardEnabled,
    onchange: function onchange(value) {
      if (value && !hasAmount) {
        enabledSetting('0');
        return;
      }
      enabledSetting(value ? '1' : '0');
    }
  }, rewardEnabled ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.switch.enabled') : flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.switch.disabled')), !hasAmount ? m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.validation.reward_switch_requires_amount', {
    reward: rewardLabel
  })) : null]), m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reward_amount_label', {
    reward: rewardLabel
  })), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans(config.amountHelpKey)), m('input.FormControl', {
    type: 'number',
    min: '0',
    step: '1',
    placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reward_amount_placeholder'),
    bidi: amountSetting
  })]), rewardType === 'reply' ? m('.Form-group.DailyRewardsSettingsPage-replyMinCharsGroup', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reply_min_chars_label')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reply_min_chars_help')), m('input.FormControl', {
    type: 'number',
    min: '0',
    step: '1',
    placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reply_min_chars_placeholder'),
    bidi: minCharsSetting
  })]) : null, m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reward_limit_label', {
    reward: rewardLabel
  })), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reward_limit_help')), m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_1___default.a, {
    state: limitEnabled,
    onchange: function onchange(value) {
      return limitEnabledSetting(value ? '1' : '0');
    }
  }, limitEnabled ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.switch.enabled') : flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.switch.disabled')), limitEnabled ? m('input.FormControl', {
    type: 'number',
    min: '0',
    step: '1',
    placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.fields.reward_limit_placeholder'),
    bidi: limitAmountSetting
  }) : null])]);
}

/***/ }),

/***/ "./src/admin/components/SetTimeZone.js":
/*!*********************************************!*\
  !*** ./src/admin/components/SetTimeZone.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetTimeZone; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);



function getTimezoneOffset(timeZone) {
  try {
    var now = new Date();
    var formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone,
      timeZoneName: 'longOffset'
    });
    var parts = formatter.formatToParts(now);
    var timezoneName = parts.find(function (part) {
      return part.type === 'timeZoneName';
    });
    if (timezoneName && timezoneName.value) {
      var match = timezoneName.value.match(/GMT([+-]\d{2}):(\d{2})/);
      if (match) {
        var hours = parseInt(match[1], 10);
        var minutes = match[2];
        if (minutes === '00') {
          return "UTC" + (hours >= 0 ? '+' : '') + hours;
        }
        return "UTC" + (hours >= 0 ? '+' : '') + hours + ":" + minutes;
      }
    }
    var utcDate = new Date(now.toLocaleString('en-US', {
      timeZone: 'UTC'
    }));
    var targetDate = new Date(now.toLocaleString('en-US', {
      timeZone: timeZone
    }));
    var offsetMinutes = (targetDate - utcDate) / 60000;
    var offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    var offsetMins = Math.abs(offsetMinutes) % 60;
    var sign = offsetMinutes >= 0 ? '+' : '-';
    if (offsetMins === 0) {
      return "UTC" + sign + offsetHours;
    }
    return "UTC" + sign + offsetHours + ":" + offsetMins.toString().padStart(2, '0');
  } catch (error) {
    return 'UTC';
  }
}
var SearchableTimezoneSelect = /*#__PURE__*/function (_Component) {
  function SearchableTimezoneSelect() {
    return _Component.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchableTimezoneSelect, _Component);
  var _proto = SearchableTimezoneSelect.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.timezones = [];
    this.filteredTimezones = [];
    this.searchQuery = '';
    this.isOpen = false;
    this.selectedIndex = -1;
    this.loadTimezones();
  };
  _proto.loadTimezones = function loadTimezones() {
    try {
      var supportedTimezones = Intl.supportedValuesOf('timeZone');
      this.timezones = supportedTimezones.map(function (timezone) {
        var offset = getTimezoneOffset(timezone);
        return {
          value: timezone,
          label: timezone + " (" + offset + ")"
        };
      });
      this.filteredTimezones = this.timezones;
    } catch (error) {
      console.error('[daily-rewards] Failed to load timezone list:', error);
    }
  };
  _proto.filterTimezones = function filterTimezones(query) {
    this.searchQuery = query;
    var lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) {
      this.filteredTimezones = this.timezones;
      this.selectedIndex = -1;
      return;
    }
    this.filteredTimezones = this.timezones.filter(function (timezone) {
      return timezone.label.toLowerCase().includes(lowerQuery) || timezone.value.toLowerCase().includes(lowerQuery);
    });
    this.selectedIndex = -1;
  };
  _proto.selectTimezone = function selectTimezone(timezone) {
    this.attrs.onSelect(timezone.value);
    this.isOpen = false;
    this.searchQuery = '';
    this.filteredTimezones = this.timezones;
    this.selectedIndex = -1;
  };
  _proto.handleKeydown = function handleKeydown(event) {
    if (!this.isOpen) {
      if (event.key === 'Enter' || event.key === 'ArrowDown') {
        this.isOpen = true;
        event.preventDefault();
      }
      return;
    }
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredTimezones.length - 1);
        this.scrollToSelected();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        this.scrollToSelected();
        break;
      case 'Enter':
        event.preventDefault();
        if (this.selectedIndex >= 0 && this.filteredTimezones[this.selectedIndex]) {
          this.selectTimezone(this.filteredTimezones[this.selectedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.isOpen = false;
        this.searchQuery = '';
        this.filteredTimezones = this.timezones;
        this.selectedIndex = -1;
        break;
    }
  };
  _proto.scrollToSelected = function scrollToSelected() {
    this.$('.SearchableSelect-option.selected').each(function () {
      this.scrollIntoView({
        block: 'nearest'
      });
    });
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this = this;
    _Component.prototype.oncreate.call(this, vnode);
    this.clickHandler = function (event) {
      if (!_this.element.contains(event.target)) {
        _this.isOpen = false;
        _this.searchQuery = '';
        _this.filteredTimezones = _this.timezones;
        _this.selectedIndex = -1;
        m.redraw();
      }
    };
    document.addEventListener('click', this.clickHandler);
  };
  _proto.onremove = function onremove(vnode) {
    _Component.prototype.onremove.call(this, vnode);
    document.removeEventListener('click', this.clickHandler);
  };
  _proto.view = function view() {
    var _this2 = this;
    var currentValue = this.attrs.value || '';
    var currentTimezone = this.timezones.find(function (timezone) {
      return timezone.value === currentValue;
    });
    var displayValue = this.isOpen ? this.searchQuery : currentTimezone ? currentTimezone.label : '';
    return m('.SearchableSelect', {
      className: this.isOpen ? 'is-open' : ''
    }, [m('input.SearchableSelect-input.FormControl', {
      type: 'text',
      value: displayValue,
      placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.fields.timezone_placeholder'),
      oninput: function oninput(event) {
        _this2.filterTimezones(event.target.value);
        if (!_this2.isOpen) _this2.isOpen = true;
        m.redraw();
      },
      onfocus: function onfocus() {
        _this2.isOpen = true;
        m.redraw();
      },
      onkeydown: function onkeydown(event) {
        _this2.handleKeydown(event);
        m.redraw();
      }
    }), m('.SearchableSelect-icon', {
      onclick: function onclick(event) {
        event.stopPropagation();
        _this2.isOpen = !_this2.isOpen;
        if (!_this2.isOpen) {
          _this2.searchQuery = '';
          _this2.filteredTimezones = _this2.timezones;
          _this2.selectedIndex = -1;
        }
      }
    }, m('i.fas.fa-chevron-down')), this.isOpen ? m('.SearchableSelect-dropdown', this.filteredTimezones.length > 0 ? this.filteredTimezones.map(function (timezone, index) {
      return m('.SearchableSelect-option', {
        className: [timezone.value === currentValue ? 'active' : '', index === _this2.selectedIndex ? 'selected' : ''].filter(Boolean).join(' '),
        onclick: function onclick() {
          _this2.selectTimezone(timezone);
          m.redraw();
        },
        onmouseenter: function onmouseenter() {
          _this2.selectedIndex = index;
        }
      }, timezone.label);
    }) : m('.SearchableSelect-empty', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.fields.timezone_no_result'))) : null]);
  };
  return SearchableTimezoneSelect;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);
function SetTimeZone(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$settingKey = _ref.settingKey,
    settingKey = _ref$settingKey === void 0 ? 'tu-daily-rewards.timezone' : _ref$settingKey;
  var setting = this.setting(settingKey);
  var currentTimezone = setting() || '';
  return m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.fields.timezone_label')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.fields.timezone_help')), m(SearchableTimezoneSelect, {
    value: currentTimezone,
    onSelect: function onSelect(value) {
      setting(value);
    }
  }), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.fields.save_hint'))]);
}

/***/ }),

/***/ "./src/admin/components/SettingsPage.js":
/*!**********************************************!*\
  !*** ./src/admin/components/SettingsPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DailyRewardsSettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SetTimeZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SetTimeZone */ "./src/admin/components/SetTimeZone.js");
/* harmony import */ var _RewardConfigPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RewardConfigPanel */ "./src/admin/components/RewardConfigPanel.js");






var EXTENSION_ID = 'tu-daily-rewards';
var PRIMARY_TABS = [{
  id: 'global',
  icon: 'fas fa-globe'
}, {
  id: 'rewards',
  icon: 'fas fa-gift'
}];
var REWARD_TABS = [{
  id: 'post',
  icon: 'fas fa-pen-alt'
}, {
  id: 'reply',
  icon: 'fas fa-reply'
}, {
  id: 'view',
  icon: 'fas fa-eye'
}];
var DailyRewardsSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  function DailyRewardsSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DailyRewardsSettingsPage, _ExtensionPage);
  var _proto = DailyRewardsSettingsPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.activePrimaryTab = 'global';
    this.activeRewardTab = 'post';
  };
  _proto.content = function content() {
    var _this = this;
    return m('.DailyRewardsSettingsPage', [m('.container', [m('.DailyRewardsSettingsPage-shell', [m('.DailyRewardsSettingsPage-layout', [m('.DailyRewardsSettingsPage-sidebar', PRIMARY_TABS.map(function (tab) {
      return m('button.Button', {
        type: 'button',
        className: "DailyRewardsSettingsPage-sidebarItem " + (_this.activePrimaryTab === tab.id ? 'active' : ''),
        onclick: function onclick() {
          _this.activePrimaryTab = tab.id;
        }
      }, [m("i.icon." + tab.icon), m('span', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-daily-rewards.admin.tabs." + tab.id))]);
    })), m('.DailyRewardsSettingsPage-main', [m('.DailyRewardsSettingsPage-mainCard', [this.renderCurrentTab()])])]), m('.DailyRewardsSettingsPage-shellActions', [this.submitButton()])])])]);
  };
  _proto.renderCurrentTab = function renderCurrentTab() {
    var _this2 = this;
    if (this.activePrimaryTab === 'global') {
      var timezoneValue = this.setting(EXTENSION_ID + ".timezone", '')();
      var hasTimezone = typeof timezoneValue === 'string' && timezoneValue.trim() !== '';
      var globalEnabledSetting = this.setting(EXTENSION_ID + ".enabled", '0');
      var globalEnabled = globalEnabledSetting() === '1';
      if (!hasTimezone && globalEnabled) {
        globalEnabledSetting('0');
        globalEnabled = false;
      }
      return m('.DailyRewardsSettingsPage-section', [m('.Form', [m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.fields.global_switch_label')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.fields.global_switch_help')), m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
        state: globalEnabled,
        onchange: function onchange(value) {
          if (value && !hasTimezone) {
            globalEnabledSetting('0');
            return;
          }
          globalEnabledSetting(value ? '1' : '0');
        }
      }, globalEnabled ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.switch.enabled') : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.switch.disabled')), !hasTimezone ? m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('tu-daily-rewards.admin.validation.global_switch_requires_timezone')) : null]), _SetTimeZone__WEBPACK_IMPORTED_MODULE_4__["default"].call(this)])]);
    }
    var activeRewardTab = REWARD_TABS.find(function (tab) {
      return tab.id === _this2.activeRewardTab;
    });
    return m('.DailyRewardsSettingsPage-section', [m('.DailyRewardsSettingsPage-rewardTabs', REWARD_TABS.map(function (tab) {
      return m('button.Button', {
        type: 'button',
        className: "DailyRewardsSettingsPage-rewardTab " + (_this2.activeRewardTab === tab.id ? 'active' : ''),
        onclick: function onclick() {
          _this2.activeRewardTab = tab.id;
        }
      }, [m("i.icon." + tab.icon), m('span', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-daily-rewards.admin.reward_tabs." + tab.id))]);
    })), m('.DailyRewardsSettingsPage-rewardPanel', [_RewardConfigPanel__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, {
      rewardType: this.activeRewardTab,
      rewardLabel: activeRewardTab ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("tu-daily-rewards.admin.reward_tabs." + activeRewardTab.id) : ''
    })])]);
  };
  return DailyRewardsSettingsPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/admin/components/SettingsPage.js");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2__);



var extensionId = 'tu-daily-rewards';
flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('tu/daily-rewards', function () {
  var _app$data$extensions;
  var extension = (_app$data$extensions = flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.data.extensions) == null ? void 0 : _app$data$extensions[extensionId];
  if (extension) {
    extension.extra['flarum-extension'].title = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.extension_name'));
    extension.description = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('tu-daily-rewards.admin.extension_description'));
  }
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionData["for"](extensionId).registerPage(_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map