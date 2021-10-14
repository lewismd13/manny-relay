/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_require__(5594);

__webpack_require__(5198);

__webpack_require__(2352);

__webpack_unused_export__ = ({
  value: true
});
exports.U2 = get;
__webpack_unused_export__ = _set;
__webpack_unused_export__ = setProperties;
__webpack_unused_export__ = withProperties;
__webpack_unused_export__ = withProperty;
__webpack_unused_export__ = withChoices;
__webpack_unused_export__ = withChoice;
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;

__webpack_require__(2238);

__webpack_require__(1714);

__webpack_require__(6467);

__webpack_require__(4594);

__webpack_require__(4875);

__webpack_require__(893);

__webpack_require__(8819);

__webpack_require__(7434);

var _kolmafia = __webpack_require__(7530);

var _propertyTyping = __webpack_require__(9412);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var createPropertyGetter = transform => (property, default_) => {
  var value = (0, _kolmafia.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = Type => createPropertyGetter(value => {
  if (value === "") return null;
  var v = Type.get(value);
  return v === Type.get("none") ? null : v;
});

var getString = createPropertyGetter(value => value);
__webpack_unused_export__ = getString;
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
__webpack_unused_export__ = getCommaSeparated;
var getBoolean = createPropertyGetter(value => value === "true");
__webpack_unused_export__ = getBoolean;
var getNumber = createPropertyGetter(value => Number(value));
__webpack_unused_export__ = getNumber;
var getBounty = createMafiaClassPropertyGetter(Bounty);
__webpack_unused_export__ = getBounty;
var getClass = createMafiaClassPropertyGetter(Class);
__webpack_unused_export__ = getClass;
var getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
__webpack_unused_export__ = getCoinmaster;
var getEffect = createMafiaClassPropertyGetter(Effect);
__webpack_unused_export__ = getEffect;
var getElement = createMafiaClassPropertyGetter(Element);
__webpack_unused_export__ = getElement;
var getFamiliar = createMafiaClassPropertyGetter(Familiar);
__webpack_unused_export__ = getFamiliar;
var getItem = createMafiaClassPropertyGetter(Item);
__webpack_unused_export__ = getItem;
var getLocation = createMafiaClassPropertyGetter(Location);
__webpack_unused_export__ = getLocation;
var getMonster = createMafiaClassPropertyGetter(Monster);
__webpack_unused_export__ = getMonster;
var getPhylum = createMafiaClassPropertyGetter(Phylum);
__webpack_unused_export__ = getPhylum;
var getServant = createMafiaClassPropertyGetter(Servant);
__webpack_unused_export__ = getServant;
var getSkill = createMafiaClassPropertyGetter(Skill);
__webpack_unused_export__ = getSkill;
var getSlot = createMafiaClassPropertyGetter(Slot);
__webpack_unused_export__ = getSlot;
var getStat = createMafiaClassPropertyGetter(Stat);
__webpack_unused_export__ = getStat;
var getThrall = createMafiaClassPropertyGetter(Thrall);
/**
 * Returns the value of a mafia property, either built in or custom
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 */

__webpack_unused_export__ = getThrall;

function get(property, _default) {
  var value = getString(property);

  if ((0, _propertyTyping.isMonsterProperty)(property)) {
    return getMonster(property, _default);
  }

  if ((0, _propertyTyping.isLocationProperty)(property)) {
    return getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if ((0, _propertyTyping.isBooleanProperty)(property, value)) {
    return getBoolean(property, _default);
  }

  if ((0, _propertyTyping.isNumericProperty)(property, value)) {
    return getNumber(property, _default);
  }

  return value;
}
/**
 * Sets the value of a mafia property, either built in or custom
 * @param property Name of the property
 * @param value Value to give the property
 */


function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0, _kolmafia.setProperty)(property, stringValue);
}

function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        _value = _Object$entries$_i[1];

    _set(prop, _value);
  }
}

function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}

function withProperty(property, value, callback) {
  withProperties(_defineProperty({}, property, value), callback);
}

function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  withProperties(properties, callback);
}

function withChoice(choice, value, callback) {
  withChoices(_defineProperty({}, choice, value), callback);
}

var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);

    _defineProperty(this, "properties", void 0);

    this.properties = {};
  }

  _createClass(PropertiesManager, [{
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      Object.entries(this.properties).forEach(_ref7 => {
        var _ref8 = _slicedToArray(_ref7, 2),
            propertyName = _ref8[0],
            propertyValue = _ref8[1];

        return _set(propertyName, propertyValue);
      });
    }
  }]);

  return PropertiesManager;
}();

__webpack_unused_export__ = PropertiesManager;

/***/ }),

/***/ 9412:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNumericProperty = isNumericProperty;
exports.isNumericOrStringProperty = isNumericOrStringProperty;
exports.isBooleanProperty = isBooleanProperty;
exports.isLocationProperty = isLocationProperty;
exports.isMonsterProperty = isMonsterProperty;
exports.isFamiliarProperty = isFamiliarProperty;
exports.isStatProperty = isStatProperty;

__webpack_require__(778);

__webpack_require__(4874);

function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing"];
var choiceAdventurePattern = /^choiceAdventure\d+$/;

function isNumericOrStringProperty(property) {
  if (numericOrStringProperties.includes(property)) return true;
  return choiceAdventurePattern.test(property);
}

var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];

function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}

var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget"];

function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}

var otherMonsters = ["romanticTarget", "yearbookCameraTarget"];
var fakeMonsters = ["trackVoteMonster"];

function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster") && !fakeMonsters.includes(property);
}

function isFamiliarProperty(property) {
  return property.endsWith("Familiar");
}

var statProps = ["nsChallenge1", "shrugTopper", "snojoSetting"];

function isStatProperty(property) {
  return statProps.includes(property);
}

/***/ }),

/***/ 1361:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ 2955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/***/ }),

/***/ 7331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var create = __webpack_require__(5131);

var definePropertyModule = __webpack_require__(811);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ 7368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var charAt = __webpack_require__(5249).charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

/***/ }),

/***/ 3739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ 477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(6211);

var toLength = __webpack_require__(588);

var toAbsoluteIndex = __webpack_require__(8786); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ 5969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(1871);

var IndexedObject = __webpack_require__(8483);

var toObject = __webpack_require__(6068);

var toLength = __webpack_require__(588);

var arraySpeciesCreate = __webpack_require__(586);

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

var createMethod = function createMethod(TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);

        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every

            case 7:
              push.call(target, value);
            // filterOut
          }
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};

/***/ }),

/***/ 1511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var wellKnownSymbol = __webpack_require__(7457);

var V8_VERSION = __webpack_require__(2912);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

/***/ }),

/***/ 586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

var isArray = __webpack_require__(1746);

var wellKnownSymbol = __webpack_require__(7457);

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),

/***/ 6202:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var classofRaw = __webpack_require__(6202);

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ 3780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var ownKeys = __webpack_require__(6813);

var getOwnPropertyDescriptorModule = __webpack_require__(9609);

var definePropertyModule = __webpack_require__(811);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),

/***/ 1925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) {
      /* empty */
    }
  }

  return false;
};

/***/ }),

/***/ 3473:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ 5107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IteratorPrototype = __webpack_require__(9297).IteratorPrototype;

var create = __webpack_require__(5131);

var createPropertyDescriptor = __webpack_require__(3300);

var setToStringTag = __webpack_require__(4653);

var Iterators = __webpack_require__(9759);

var returnThis = function returnThis() {
  return this;
};

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),

/***/ 4059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 3300:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ 812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(4375);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ 5500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var createIteratorConstructor = __webpack_require__(5107);

var getPrototypeOf = __webpack_require__(8450);

var setPrototypeOf = __webpack_require__(1686);

var setToStringTag = __webpack_require__(4653);

var createNonEnumerableProperty = __webpack_require__(4059);

var redefine = __webpack_require__(6486);

var wellKnownSymbol = __webpack_require__(7457);

var IS_PURE = __webpack_require__(6719);

var Iterators = __webpack_require__(9759);

var IteratorsCore = __webpack_require__(9297);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function getIterationMethod(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }

  Iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

/***/ }),

/***/ 6277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(9039);

var has = __webpack_require__(2551);

var wrappedWellKnownSymbolModule = __webpack_require__(2355);

var defineProperty = __webpack_require__(811).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

/***/ }),

/***/ 2171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ 4603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 5096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ 2912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var userAgent = __webpack_require__(5096);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

/***/ }),

/***/ 393:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 9004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var getOwnPropertyDescriptor = __webpack_require__(9609).f;

var createNonEnumerableProperty = __webpack_require__(4059);

var redefine = __webpack_require__(6486);

var setGlobal = __webpack_require__(3351);

var copyConstructorProperties = __webpack_require__(3780);

var isForced = __webpack_require__(2612);
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ 8901:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 9783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 // TODO: Remove from `core-js@4` since it's moved to entry points

__webpack_require__(2238);

var redefine = __webpack_require__(6486);

var regexpExec = __webpack_require__(1440);

var fails = __webpack_require__(8901);

var wellKnownSymbol = __webpack_require__(7457);

var createNonEnumerableProperty = __webpack_require__(4059);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;

      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

/***/ }),

/***/ 1871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(1361); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 1575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(9039);

var global = __webpack_require__(2328);

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ 1072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(5830);

var Iterators = __webpack_require__(9759);

var wellKnownSymbol = __webpack_require__(7457);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ 2328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ 2551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(6068);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ 1055:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 4861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ 2674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var fails = __webpack_require__(8901);

var createElement = __webpack_require__(4603); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ 8483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var classof = __webpack_require__(6202);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ 7599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(5153);

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ 4081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(1770);

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var createNonEnumerableProperty = __webpack_require__(4059);

var objectHas = __webpack_require__(2551);

var shared = __webpack_require__(5153);

var sharedKey = __webpack_require__(1449);

var hiddenKeys = __webpack_require__(1055);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ 8110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var Iterators = __webpack_require__(9759);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ 1746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(6202); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ 2612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 6719:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 7033:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

var classof = __webpack_require__(6202);

var wellKnownSymbol = __webpack_require__(7457);

var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

/***/ }),

/***/ 6449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var isArrayIteratorMethod = __webpack_require__(8110);

var toLength = __webpack_require__(588);

var bind = __webpack_require__(1871);

var getIteratorMethod = __webpack_require__(1072);

var iteratorClose = __webpack_require__(6535);

var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }

    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

/***/ }),

/***/ 6535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),

/***/ 9297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(8901);

var getPrototypeOf = __webpack_require__(8450);

var createNonEnumerableProperty = __webpack_require__(4059);

var has = __webpack_require__(2551);

var wellKnownSymbol = __webpack_require__(7457);

var IS_PURE = __webpack_require__(6719);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function returnThis() {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),

/***/ 9759:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 4938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(2912);

var fails = __webpack_require__(8901); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 1770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var inspectSource = __webpack_require__(7599);

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ 5418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(7033);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  }

  return it;
};

/***/ }),

/***/ 5131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var defineProperties = __webpack_require__(422);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = __webpack_require__(1055);

var html = __webpack_require__(4861);

var documentCreateElement = __webpack_require__(4603);

var sharedKey = __webpack_require__(1449);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function EmptyConstructor() {
  /* empty */
};

var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var _NullProtoObject = function NullProtoObject() {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) {
    delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  }

  return _NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),

/***/ 422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var definePropertyModule = __webpack_require__(811);

var anObject = __webpack_require__(3739);

var objectKeys = __webpack_require__(669); // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) {
    definePropertyModule.f(O, key = keys[index++], Properties[key]);
  }

  return O;
};

/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var IE8_DOM_DEFINE = __webpack_require__(2674);

var anObject = __webpack_require__(3739);

var toPrimitive = __webpack_require__(4375); // eslint-disable-next-line es/no-object-defineproperty -- safe


var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 9609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var propertyIsEnumerableModule = __webpack_require__(7395);

var createPropertyDescriptor = __webpack_require__(3300);

var toIndexedObject = __webpack_require__(6211);

var toPrimitive = __webpack_require__(4375);

var has = __webpack_require__(2551);

var IE8_DOM_DEFINE = __webpack_require__(2674); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ 4142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__(6211);

var $getOwnPropertyNames = __webpack_require__(5166).f;

var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};

/***/ }),

/***/ 5166:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 8450:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var toObject = __webpack_require__(6068);

var sharedKey = __webpack_require__(1449);

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(3473);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),

/***/ 4085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(2551);

var toIndexedObject = __webpack_require__(6211);

var indexOf = __webpack_require__(477).indexOf;

var hiddenKeys = __webpack_require__(1055);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ 669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 7395:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ 1686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(3739);

var aPossiblePrototype = __webpack_require__(2955); // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe


module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),

/***/ 8256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var objectKeys = __webpack_require__(669);

var toIndexedObject = __webpack_require__(6211);

var propertyIsEnumerable = __webpack_require__(7395).f; // `Object.{ entries, values }` methods implementation


var createMethod = function createMethod(TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),

/***/ 6946:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var classof = __webpack_require__(5830); // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring


module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

/***/ }),

/***/ 6813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

var getOwnPropertyNamesModule = __webpack_require__(5166);

var getOwnPropertySymbolsModule = __webpack_require__(5863);

var anObject = __webpack_require__(3739); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 9039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

module.exports = global;

/***/ }),

/***/ 6486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var createNonEnumerableProperty = __webpack_require__(4059);

var has = __webpack_require__(2551);

var setGlobal = __webpack_require__(3351);

var inspectSource = __webpack_require__(7599);

var InternalStateModule = __webpack_require__(4081);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),

/***/ 2114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(6202);

var regexpExec = __webpack_require__(1440); // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec


module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

/***/ }),

/***/ 1440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */

var regexpFlags = __webpack_require__(9175);

var stickyHelpers = __webpack_require__(1283);

var shared = __webpack_require__(8849);

var create = __webpack_require__(5131);

var getInternalState = __webpack_require__(4081).get;

var UNSUPPORTED_DOT_ALL = __webpack_require__(6639);

var UNSUPPORTED_NCG = __webpack_require__(6927);

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');

      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),

/***/ 9175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(3739); // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ 1283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var fails = __webpack_require__(8901); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,


var RE = function RE(s, f) {
  return RegExp(s, f);
};

exports.UNSUPPORTED_Y = fails(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

/***/ }),

/***/ 6639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

/***/ }),

/***/ 6927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/***/ }),

/***/ 4682:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 3351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var createNonEnumerableProperty = __webpack_require__(4059);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ 4653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(811).f;

var has = __webpack_require__(2551);

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

/***/ }),

/***/ 1449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(8849);

var uid = __webpack_require__(858);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var setGlobal = __webpack_require__(3351);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ 8849:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(6719);

var store = __webpack_require__(5153);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ 9078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3739);

var aFunction = __webpack_require__(1361);

var wellKnownSymbol = __webpack_require__(7457);

var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),

/***/ 5249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var requireObjectCoercible = __webpack_require__(4682); // `String.prototype.{ codePointAt, at }` methods implementation


var createMethod = function createMethod(CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),

/***/ 8786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 6211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8483);

var requireObjectCoercible = __webpack_require__(4682);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 4770:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ 588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(4770);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 6068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(4682); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 4375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 4657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ 858:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ 4719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4938);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 2355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

exports.f = wellKnownSymbol;

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var shared = __webpack_require__(8849);

var has = __webpack_require__(2551);

var uid = __webpack_require__(858);

var NATIVE_SYMBOL = __webpack_require__(4938);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 778:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var $includes = __webpack_require__(477).includes;

var addToUnscopables = __webpack_require__(7331); // `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes


$({
  target: 'Array',
  proto: true
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('includes');

/***/ }),

/***/ 893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(6211);

var addToUnscopables = __webpack_require__(7331);

var Iterators = __webpack_require__(9759);

var InternalStateModule = __webpack_require__(4081);

var defineIterator = __webpack_require__(5500);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ 7434:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var $map = __webpack_require__(5969).map;

var arrayMethodHasSpeciesSupport = __webpack_require__(1511);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 2352:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var isObject = __webpack_require__(2949);

var isArray = __webpack_require__(1746);

var toAbsoluteIndex = __webpack_require__(8786);

var toLength = __webpack_require__(588);

var toIndexedObject = __webpack_require__(6211);

var createProperty = __webpack_require__(812);

var wellKnownSymbol = __webpack_require__(7457);

var arrayMethodHasSpeciesSupport = __webpack_require__(1511);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

    for (n = 0; k < fin; k++, n++) {
      if (k in O) createProperty(result, n, O[k]);
    }

    result.length = n;
    return result;
  }
});

/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $entries = __webpack_require__(8256).entries; // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),

/***/ 8819:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var iterate = __webpack_require__(6449);

var createProperty = __webpack_require__(812); // `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries


$({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

/***/ }),

/***/ 6467:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var redefine = __webpack_require__(6486);

var toString = __webpack_require__(6946); // `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring


if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, {
    unsafe: true
  });
}

/***/ }),

/***/ 2238:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var exec = __webpack_require__(1440); // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec


$({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec
}, {
  exec: exec
});

/***/ }),

/***/ 4594:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var redefine = __webpack_require__(6486);

var anObject = __webpack_require__(3739);

var fails = __webpack_require__(8901);

var flags = __webpack_require__(9175);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function () {
  return nativeToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
}); // FF44- RegExp#toString has a wrong name

var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring

if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, {
    unsafe: true
  });
}

/***/ }),

/***/ 4874:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var getOwnPropertyDescriptor = __webpack_require__(9609).f;

var toLength = __webpack_require__(588);

var notARegExp = __webpack_require__(5418);

var requireObjectCoercible = __webpack_require__(4682);

var correctIsRegExpLogic = __webpack_require__(1925);

var IS_PURE = __webpack_require__(6719); // eslint-disable-next-line es/no-string-prototype-endswith -- safe


var $endsWith = ''.endsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}(); // `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith

$({
  target: 'String',
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ 1714:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(9783);

var isRegExp = __webpack_require__(7033);

var anObject = __webpack_require__(3739);

var requireObjectCoercible = __webpack_require__(4682);

var speciesConstructor = __webpack_require__(9078);

var advanceStringIndex = __webpack_require__(7368);

var toLength = __webpack_require__(588);

var callRegExpExec = __webpack_require__(2114);

var regexpExec = __webpack_require__(1440);

var stickyHelpers = __webpack_require__(1283);

var fails = __webpack_require__(8901);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF; // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output.length > lim ? output.slice(0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var res = maybeCallNative(internalSplit, this, string, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var rx = anObject(this);
    var S = String(string);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

/***/ }),

/***/ 5198:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description


var $ = __webpack_require__(9004);

var DESCRIPTORS = __webpack_require__(2171);

var global = __webpack_require__(2328);

var has = __webpack_require__(2551);

var isObject = __webpack_require__(2949);

var defineProperty = __webpack_require__(811).f;

var copyConstructorProperties = __webpack_require__(3780);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
NativeSymbol().description !== undefined)) {
  var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
    : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;
  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });
  $({
    global: true,
    forced: true
  }, {
    Symbol: SymbolWrapper
  });
}

/***/ }),

/***/ 5594:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var global = __webpack_require__(2328);

var getBuiltIn = __webpack_require__(1575);

var IS_PURE = __webpack_require__(6719);

var DESCRIPTORS = __webpack_require__(2171);

var NATIVE_SYMBOL = __webpack_require__(4938);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

var fails = __webpack_require__(8901);

var has = __webpack_require__(2551);

var isArray = __webpack_require__(1746);

var isObject = __webpack_require__(2949);

var anObject = __webpack_require__(3739);

var toObject = __webpack_require__(6068);

var toIndexedObject = __webpack_require__(6211);

var toPrimitive = __webpack_require__(4375);

var createPropertyDescriptor = __webpack_require__(3300);

var nativeObjectCreate = __webpack_require__(5131);

var objectKeys = __webpack_require__(669);

var getOwnPropertyNamesModule = __webpack_require__(5166);

var getOwnPropertyNamesExternal = __webpack_require__(4142);

var getOwnPropertySymbolsModule = __webpack_require__(5863);

var getOwnPropertyDescriptorModule = __webpack_require__(9609);

var definePropertyModule = __webpack_require__(811);

var propertyIsEnumerableModule = __webpack_require__(7395);

var createNonEnumerableProperty = __webpack_require__(4059);

var redefine = __webpack_require__(6486);

var shared = __webpack_require__(8849);

var sharedKey = __webpack_require__(1449);

var hiddenKeys = __webpack_require__(1055);

var uid = __webpack_require__(858);

var wellKnownSymbol = __webpack_require__(7457);

var wrappedWellKnownSymbolModule = __webpack_require__(2355);

var defineWellKnownSymbol = __webpack_require__(6277);

var setToStringTag = __webpack_require__(4653);

var InternalStateModule = __webpack_require__(4081);

var $forEach = __webpack_require__(5969).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function get() {
      return nativeDefineProperty(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function wrap(tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);

  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);

  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor


if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);

    var setter = function setter(value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };

    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
      configurable: true,
      set: setter
    });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });
  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });
  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });

    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
        unsafe: true
      });
    }
  }
}

$({
  global: true,
  wrap: true,
  forced: !NATIVE_SYMBOL,
  sham: !NATIVE_SYMBOL
}, {
  Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});
$({
  target: SYMBOL,
  stat: true,
  forced: !NATIVE_SYMBOL
}, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function _for(key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function useSetter() {
    USE_SETTER = true;
  },
  useSimple: function useSimple() {
    USE_SETTER = false;
  }
});
$({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL,
  sham: !DESCRIPTORS
}, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

$({
  target: 'Object',
  stat: true,
  forced: fails(function () {
    getOwnPropertySymbolsModule.f(1);
  })
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
}); // `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify

if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
  });
  $({
    target: 'JSON',
    stat: true,
    forced: FORCED_JSON_STRINGIFY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;

      while (arguments.length > index) {
        args.push(arguments[index++]);
      }

      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
} // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
} // `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

/***/ }),

/***/ 7530:
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./node_modules/libram/dist/property.js
var property = __webpack_require__(1347);
;// CONCATENATED MODULE: ./src/mannyRelayLib.ts


function sideCommand(cmd) {
  var c = "";
  c = c.concat("'/KoLmafia/specialCommand?cmd=");
  c = c.concat((0,external_kolmafia_.urlEncode)(cmd));
  c = c.concat("&pwd=");
  c = c.concat((0,external_kolmafia_.myHash)());
  c = c.concat("'");
  return c;
}

function mainPaneCommand(cmd) {
  var c = "";
  c = c.concat("'main.php?cmd=");
  c = c.concat(urlEncode(cmd));
  c = c.concat("'");
  return c;
}
/*
string mainCommand(string cmd) {
	buffer c;
	c.append('/KoLmafia/specialCommand?cmd=');
	c.append(url_encode(cmd));
	c.append('&pwd=');
	c.append(my_hash());
	// somehow there must be a way to refresh after finishing the command
	// c.append('&href=http');
	return c;
} */

function createNewButton(label, cmd, img) {
  var generatedCommand = sideCommand(cmd);
  var buttonHtml = "<button title=\"".concat(label, "\" alt=\"").concat(label, "\" class=\"button mannyButton\" onclick=\"document.location=").concat(generatedCommand, "; void(0);\" > <table> <tr> <td valign=\"center\" align=\"center\"> <img src=\"images/itemimages/").concat(img, ".gif\" height=\"30\" width=\"30\" /> </td> <td valign=\"center\" align=\"center\" width=\"200\"> <div class=\"b\">").concat(label, "</div> </td> </tr> </table> </button>");
  return buttonHtml;
}
/*
export function createConditionalButton(
  label: string,
  cmd: string,
  img: string,
  prop: string
): string {
  const generatedCommand = mainPaneCommand(cmd);
  const buttonHtml = `<button title="${label}" alt="${label}" class="button mannyButton" onclick="document.location=${generatedCommand}" > <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/${img}.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">${label}</div> </td> </tr> </table> </button>`;
  if (get(prop) !== value) {
    return "";
  } else {
    return buttonHtml;
  }
}
*/
;// CONCATENATED MODULE: ./src/main.ts


 // link this script's css sheet

var cssLink = '<link rel="stylesheet" href="/manny-relay/main.css"></link>'; // let buttons: string[];

/*
const ballsButton = createNewButton("balls", 'ashq print("balls", "blue")', "ballhat");

buttons.push[createNewButton("Check yo boxen", "cc_snapshot", "familiar25")];
*/
// const ballsButton = createNewButton("balls", 'ashq print("balls", "blue")', "ballhat");
// buttons.push(ballsButton);

var greenBoxButton = createNewButton("Check yo boxen", "cc_snapshot", "familiar25"); // buttons.push(greenBoxButton);
// TODO: there has to be a way to do the construction and push to the array in a single function call. add array name as param in createNewButton?

var breakfastButton = "";

if ((0,external_kolmafia_.myInebriety)() === 0 && (0,external_kolmafia_.myFullness)() === 0 && (0,property/* get */.U2)("_unaccompaniedMinerUsed") === 0) {
  breakfastButton = createNewButton("Breakfast time!", "mannyBreakfast", "coffeecup");
}

var gashHop = "";

if ((0,external_kolmafia_.myAdventures)() < 5 && (0,external_kolmafia_.myInebriety)() > (0,external_kolmafia_.inebrietyLimit)()) {
  gashHop = createNewButton("Let's jump into that loop", "hccsAscend", "csplaquesmall");
}

var loopButton = "";

if ((0,external_kolmafia_.myPathId)() === 25) {
  loopButton = createNewButton("Initiate Loop!", "mannyLoop", "csplaquesmall");
}

var postloopButton = "";

if ((0,property/* get */.U2)("breakfastCompleted") === false && (0,external_kolmafia_.myInebriety)() > 2 && (0,external_kolmafia_.myPath)() === "None") {
  postloopButton = createNewButton("Postloop?", "postloop", "volcoino");
}

var autoscendButton = "";

if ((0,external_kolmafia_.myPath)() === "Standard") {
  autoscendButton = createNewButton("Initiate autoscend!", "autoscend", "karma");
}

var rolloverButton = "";

if ((0,external_kolmafia_.myPath)() === "None" && (0,external_kolmafia_.myInebriety)() !== 0 && (0,external_kolmafia_.myAdventures)() < 50) {
  rolloverButton = createNewButton("Put on those PJs", "mannyRoll", "nicewatch");
}

var pvpButton = "";

if ((0,external_kolmafia_.pvpAttacksLeft)() > 0) {
  pvpButton = createNewButton("Round 1, FIGHT!", "UberPVPOptimizer; pvp loot lifelong", "swords");
}

var buttons = [];
buttons.push(breakfastButton);
buttons.push(postloopButton);
buttons.push(gashHop);
buttons.push(loopButton);
buttons.push(greenBoxButton);
buttons.push(autoscendButton);
buttons.push(rolloverButton);
buttons.push(pvpButton);
var borderBoxStart = '<center><div id="mannyScriptsBox"><table  width=95%  cellspacing=0 cellpadding=0><tr><td style="color: white;" align=center bgcolor=green><b>Good Morning, Manny, what would you like to do today?</b></td></tr><tr><td style="padding: 5px; border: 1px solid green;"><center><div>';
var borderBoxEnd = "</div></center></table></div></center>"; // TODO: drop all buttons in an array, iterate through the array to string them together
// buttons.toString();

/*
let scriptBox = borderBoxStart;
scriptBox = scriptBox.concat(gashHop);
scriptBox = scriptBox.concat(loopButton);
scriptBox = scriptBox.concat(postloopButton);
// scriptBox = scriptBox.concat(buttons.toString());
scriptBox = scriptBox.concat(greenBoxButton);
scriptBox = scriptBox.concat(breakfastButton);
scriptBox = scriptBox.concat(borderBoxEnd);
*/
// have a param for the button add, based on pref or whatever

var newScriptBox = borderBoxStart;
buttons.forEach(element => {
  newScriptBox = newScriptBox.concat(element);
});
newScriptBox = newScriptBox.concat(borderBoxEnd);

function main() {
  var page = (0,external_kolmafia_.visitUrl)();
  var strStrt = (0,external_kolmafia_.indexOf)(page, "<body>");
  var newpage = page.slice(0, strStrt) + cssLink + newScriptBox + page.slice(strStrt); // page = insert(page, strStrt, scriptBox);

  (0,external_kolmafia_.write)(newpage);
  /*
  if (formField("cmd") !== "") {
    cliExecute(formField("cmd"));
  }
  */
}

main();
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;