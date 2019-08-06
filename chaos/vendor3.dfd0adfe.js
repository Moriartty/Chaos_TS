webpackJsonp([15],{

/***/ 1551:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1552);
__webpack_require__(528);
__webpack_require__(160);
module.exports = __webpack_require__(101);


/***/ }),

/***/ 1552:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Expose `IntlPolyfill` as global to add locale data into runtime later on.
global.IntlPolyfill = __webpack_require__(1553);

// Require all locale data for `Intl`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
__webpack_require__(1554);

// hack to export the polyfill as global Intl if needed
if (!global.Intl) {
    global.Intl = global.IntlPolyfill;
    global.IntlPolyfill.__applyLocaleSensitivePrototypes();
}

// providing an idiomatic api for the nodejs version of this module
module.exports = global.IntlPolyfill;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),

/***/ 1553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var jsx = function () {
  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {};
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  };
}();

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineEnumerableProperties = function (obj, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    Object.defineProperty(obj, key, desc);
  }

  return obj;
};

var defaults = function (obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }

  return obj;
};

var defineProperty$1 = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var _instanceof = function (left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
};

var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};

var interopRequireWildcard = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
};

var newArrowCheck = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var selfGlobal = typeof global === "undefined" ? self : global;

var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var slicedToArrayLoose = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var temporalRef = function (val, name, undef) {
  if (val === undef) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  } else {
    return val;
  }
};

var temporalUndefined = {};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};



var babelHelpers$1 = Object.freeze({
  jsx: jsx,
  asyncToGenerator: asyncToGenerator,
  classCallCheck: classCallCheck,
  createClass: createClass,
  defineEnumerableProperties: defineEnumerableProperties,
  defaults: defaults,
  defineProperty: defineProperty$1,
  get: get,
  inherits: inherits,
  interopRequireDefault: interopRequireDefault,
  interopRequireWildcard: interopRequireWildcard,
  newArrowCheck: newArrowCheck,
  objectDestructuringEmpty: objectDestructuringEmpty,
  objectWithoutProperties: objectWithoutProperties,
  possibleConstructorReturn: possibleConstructorReturn,
  selfGlobal: selfGlobal,
  set: set,
  slicedToArray: slicedToArray,
  slicedToArrayLoose: slicedToArrayLoose,
  taggedTemplateLiteral: taggedTemplateLiteral,
  taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
  temporalRef: temporalRef,
  temporalUndefined: temporalUndefined,
  toArray: toArray,
  toConsumableArray: toConsumableArray,
  typeof: _typeof,
  extends: _extends,
  instanceof: _instanceof
});

var realDefineProp = function () {
    var sentinel = function sentinel() {};
    try {
        Object.defineProperty(sentinel, 'a', {
            get: function get() {
                return 1;
            }
        });
        Object.defineProperty(sentinel, 'prototype', { writable: false });
        return sentinel.a === 1 && sentinel.prototype instanceof Object;
    } catch (e) {
        return false;
    }
}();

// Need a workaround for getters in ES3
var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

// We use this a lot (and need it for proto-less objects)
var hop = Object.prototype.hasOwnProperty;

// Naive defineProperty for compatibility
var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
    if ('get' in desc && obj.__defineGetter__) obj.__defineGetter__(name, desc.get);else if (!hop.call(obj, name) || 'value' in desc) obj[name] = desc.value;
};

// Array.prototype.indexOf, as good as we need it to be
var arrIndexOf = Array.prototype.indexOf || function (search) {
    /*jshint validthis:true */
    var t = this;
    if (!t.length) return -1;

    for (var i = arguments[1] || 0, max = t.length; i < max; i++) {
        if (t[i] === search) return i;
    }

    return -1;
};

// Create an object with the specified prototype (2nd arg required for Record)
var objCreate = Object.create || function (proto, props) {
    var obj = void 0;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (var k in props) {
        if (hop.call(props, k)) defineProperty(obj, k, props[k]);
    }

    return obj;
};

// Snapshot some (hopefully still) native built-ins
var arrSlice = Array.prototype.slice;
var arrConcat = Array.prototype.concat;
var arrPush = Array.prototype.push;
var arrJoin = Array.prototype.join;
var arrShift = Array.prototype.shift;

// Naive Function.prototype.bind for compatibility
var fnBind = Function.prototype.bind || function (thisObj) {
    var fn = this,
        args = arrSlice.call(arguments, 1);

    // All our (presently) bound functions have either 1 or 0 arguments. By returning
    // different function signatures, we can pass some tests in ES3 environments
    if (fn.length === 1) {
        return function () {
            return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
        };
    }
    return function () {
        return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
    };
};

// Object housing internal properties for constructors
var internals = objCreate(null);

// Keep internal properties internal
var secret = Math.random();

// Helper functions
// ================

/**
 * A function to deal with the inaccuracy of calculating log10 in pre-ES6
 * JavaScript environments. Math.log(num) / Math.LN10 was responsible for
 * causing issue #62.
 */
function log10Floor(n) {
    // ES6 provides the more accurate Math.log10
    if (typeof Math.log10 === 'function') return Math.floor(Math.log10(n));

    var x = Math.round(Math.log(n) * Math.LOG10E);
    return x - (Number('1e' + x) > n);
}

/**
 * A map that doesn't contain Object in its prototype chain
 */
function Record(obj) {
    // Copy only own properties over unless this object is already a Record instance
    for (var k in obj) {
        if (obj instanceof Record || hop.call(obj, k)) defineProperty(this, k, { value: obj[k], enumerable: true, writable: true, configurable: true });
    }
}
Record.prototype = objCreate(null);

/**
 * An ordered list
 */
function List() {
    defineProperty(this, 'length', { writable: true, value: 0 });

    if (arguments.length) arrPush.apply(this, arrSlice.call(arguments));
}
List.prototype = objCreate(null);

/**
 * Constructs a regular expression to restore tainted RegExp properties
 */
function createRegExpRestore() {
    if (internals.disableRegExpRestore) {
        return function () {/* no-op */};
    }

    var regExpCache = {
        lastMatch: RegExp.lastMatch || '',
        leftContext: RegExp.leftContext,
        multiline: RegExp.multiline,
        input: RegExp.input
    },
        has = false;

    // Create a snapshot of all the 'captured' properties
    for (var i = 1; i <= 9; i++) {
        has = (regExpCache['$' + i] = RegExp['$' + i]) || has;
    }return function () {
        // Now we've snapshotted some properties, escape the lastMatch string
        var esc = /[.?*+^$[\]\\(){}|-]/g,
            lm = regExpCache.lastMatch.replace(esc, '\\$&'),
            reg = new List();

        // If any of the captured strings were non-empty, iterate over them all
        if (has) {
            for (var _i = 1; _i <= 9; _i++) {
                var m = regExpCache['$' + _i];

                // If it's empty, add an empty capturing group
                if (!m) lm = '()' + lm;

                // Else find the string in lm and escape & wrap it to capture it
                else {
                        m = m.replace(esc, '\\$&');
                        lm = lm.replace(m, '(' + m + ')');
                    }

                // Push it to the reg and chop lm to make sure further groups come after
                arrPush.call(reg, lm.slice(0, lm.indexOf('(') + 1));
                lm = lm.slice(lm.indexOf('(') + 1);
            }
        }

        var exprStr = arrJoin.call(reg, '') + lm;

        // Shorten the regex by replacing each part of the expression with a match
        // for a string of that exact length.  This is safe for the type of
        // expressions generated above, because the expression matches the whole
        // match string, so we know each group and each segment between capturing
        // groups can be matched by its length alone.
        exprStr = exprStr.replace(/(\\\(|\\\)|[^()])+/g, function (match) {
            return '[\\s\\S]{' + match.replace('\\', '').length + '}';
        });

        // Create the regular expression that will reconstruct the RegExp properties
        var expr = new RegExp(exprStr, regExpCache.multiline ? 'gm' : 'g');

        // Set the lastIndex of the generated expression to ensure that the match
        // is found in the correct index.
        expr.lastIndex = regExpCache.leftContext.length;

        expr.exec(regExpCache.input);
    };
}

/**
 * Mimics ES5's abstract ToObject() function
 */
function toObject(arg) {
    if (arg === null) throw new TypeError('Cannot convert null or undefined to object');

    if ((typeof arg === 'undefined' ? 'undefined' : babelHelpers$1['typeof'](arg)) === 'object') return arg;
    return Object(arg);
}

function toNumber(arg) {
    if (typeof arg === 'number') return arg;
    return Number(arg);
}

function toInteger(arg) {
    var number = toNumber(arg);
    if (isNaN(number)) return 0;
    if (number === +0 || number === -0 || number === +Infinity || number === -Infinity) return number;
    if (number < 0) return Math.floor(Math.abs(number)) * -1;
    return Math.floor(Math.abs(number));
}

function toLength(arg) {
    var len = toInteger(arg);
    if (len <= 0) return 0;
    if (len === Infinity) return Math.pow(2, 53) - 1;
    return Math.min(len, Math.pow(2, 53) - 1);
}

/**
 * Returns "internal" properties for an object
 */
function getInternalProperties(obj) {
    if (hop.call(obj, '__getInternalProperties')) return obj.__getInternalProperties(secret);

    return objCreate(null);
}

/**
* Defines regular expressions for various operations related to the BCP 47 syntax,
* as defined at http://tools.ietf.org/html/bcp47#section-2.1
*/

// extlang       = 3ALPHA              ; selected ISO 639 codes
//                 *2("-" 3ALPHA)      ; permanently reserved
var extlang = '[a-z]{3}(?:-[a-z]{3}){0,2}';

// language      = 2*3ALPHA            ; shortest ISO 639 code
//                 ["-" extlang]       ; sometimes followed by
//                                     ; extended language subtags
//               / 4ALPHA              ; or reserved for future use
//               / 5*8ALPHA            ; or registered language subtag
var language = '(?:[a-z]{2,3}(?:-' + extlang + ')?|[a-z]{4}|[a-z]{5,8})';

// script        = 4ALPHA              ; ISO 15924 code
var script = '[a-z]{4}';

// region        = 2ALPHA              ; ISO 3166-1 code
//               / 3DIGIT              ; UN M.49 code
var region = '(?:[a-z]{2}|\\d{3})';

// variant       = 5*8alphanum         ; registered variants
//               / (DIGIT 3alphanum)
var variant = '(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})';

//                                     ; Single alphanumerics
//                                     ; "x" reserved for private use
// singleton     = DIGIT               ; 0 - 9
//               / %x41-57             ; A - W
//               / %x59-5A             ; Y - Z
//               / %x61-77             ; a - w
//               / %x79-7A             ; y - z
var singleton = '[0-9a-wy-z]';

// extension     = singleton 1*("-" (2*8alphanum))
var extension = singleton + '(?:-[a-z0-9]{2,8})+';

// privateuse    = "x" 1*("-" (1*8alphanum))
var privateuse = 'x(?:-[a-z0-9]{1,8})+';

// irregular     = "en-GB-oed"         ; irregular tags do not match
//               / "i-ami"             ; the 'langtag' production and
//               / "i-bnn"             ; would not otherwise be
//               / "i-default"         ; considered 'well-formed'
//               / "i-enochian"        ; These tags are all valid,
//               / "i-hak"             ; but most are deprecated
//               / "i-klingon"         ; in favor of more modern
//               / "i-lux"             ; subtags or subtag
//               / "i-mingo"           ; combination
//               / "i-navajo"
//               / "i-pwn"
//               / "i-tao"
//               / "i-tay"
//               / "i-tsu"
//               / "sgn-BE-FR"
//               / "sgn-BE-NL"
//               / "sgn-CH-DE"
var irregular = '(?:en-GB-oed' + '|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)' + '|sgn-(?:BE-FR|BE-NL|CH-DE))';

// regular       = "art-lojban"        ; these tags match the 'langtag'
//               / "cel-gaulish"       ; production, but their subtags
//               / "no-bok"            ; are not extended language
//               / "no-nyn"            ; or variant subtags: their meaning
//               / "zh-guoyu"          ; is defined by their registration
//               / "zh-hakka"          ; and all of these are deprecated
//               / "zh-min"            ; in favor of a more modern
//               / "zh-min-nan"        ; subtag or sequence of subtags
//               / "zh-xiang"
var regular = '(?:art-lojban|cel-gaulish|no-bok|no-nyn' + '|zh-(?:guoyu|hakka|min|min-nan|xiang))';

// grandfathered = irregular           ; non-redundant tags registered
//               / regular             ; during the RFC 3066 era
var grandfathered = '(?:' + irregular + '|' + regular + ')';

// langtag       = language
//                 ["-" script]
//                 ["-" region]
//                 *("-" variant)
//                 *("-" extension)
//                 ["-" privateuse]
var langtag = language + '(?:-' + script + ')?(?:-' + region + ')?(?:-' + variant + ')*(?:-' + extension + ')*(?:-' + privateuse + ')?';

// Language-Tag  = langtag             ; normal language tags
//               / privateuse          ; private use tag
//               / grandfathered       ; grandfathered tags
var expBCP47Syntax = RegExp('^(?:' + langtag + '|' + privateuse + '|' + grandfathered + ')$', 'i');

// Match duplicate variants in a language tag
var expVariantDupes = RegExp('^(?!x).*?-(' + variant + ')-(?:\\w{4,8}-(?!x-))*\\1\\b', 'i');

// Match duplicate singletons in a language tag (except in private use)
var expSingletonDupes = RegExp('^(?!x).*?-(' + singleton + ')-(?:\\w+-(?!x-))*\\1\\b', 'i');

// Match all extension sequences
var expExtSequences = RegExp('-' + extension, 'ig');

// Default locale is the first-added locale data for us
var defaultLocale = void 0;
function setDefaultLocale(locale) {
    defaultLocale = locale;
}

// IANA Subtag Registry redundant tag and subtag maps
var redundantTags = {
    tags: {
        "art-lojban": "jbo",
        "i-ami": "ami",
        "i-bnn": "bnn",
        "i-hak": "hak",
        "i-klingon": "tlh",
        "i-lux": "lb",
        "i-navajo": "nv",
        "i-pwn": "pwn",
        "i-tao": "tao",
        "i-tay": "tay",
        "i-tsu": "tsu",
        "no-bok": "nb",
        "no-nyn": "nn",
        "sgn-BE-FR": "sfb",
        "sgn-BE-NL": "vgt",
        "sgn-CH-DE": "sgg",
        "zh-guoyu": "cmn",
        "zh-hakka": "hak",
        "zh-min-nan": "nan",
        "zh-xiang": "hsn",
        "sgn-BR": "bzs",
        "sgn-CO": "csn",
        "sgn-DE": "gsg",
        "sgn-DK": "dsl",
        "sgn-ES": "ssp",
        "sgn-FR": "fsl",
        "sgn-GB": "bfi",
        "sgn-GR": "gss",
        "sgn-IE": "isg",
        "sgn-IT": "ise",
        "sgn-JP": "jsl",
        "sgn-MX": "mfs",
        "sgn-NI": "ncs",
        "sgn-NL": "dse",
        "sgn-NO": "nsl",
        "sgn-PT": "psr",
        "sgn-SE": "swl",
        "sgn-US": "ase",
        "sgn-ZA": "sfs",
        "zh-cmn": "cmn",
        "zh-cmn-Hans": "cmn-Hans",
        "zh-cmn-Hant": "cmn-Hant",
        "zh-gan": "gan",
        "zh-wuu": "wuu",
        "zh-yue": "yue"
    },
    subtags: {
        BU: "MM",
        DD: "DE",
        FX: "FR",
        TP: "TL",
        YD: "YE",
        ZR: "CD",
        heploc: "alalc97",
        'in': "id",
        iw: "he",
        ji: "yi",
        jw: "jv",
        mo: "ro",
        ayx: "nun",
        bjd: "drl",
        ccq: "rki",
        cjr: "mom",
        cka: "cmr",
        cmk: "xch",
        drh: "khk",
        drw: "prs",
        gav: "dev",
        hrr: "jal",
        ibi: "opa",
        kgh: "kml",
        lcq: "ppr",
        mst: "mry",
        myt: "mry",
        sca: "hle",
        tie: "ras",
        tkk: "twm",
        tlw: "weo",
        tnf: "prs",
        ybd: "rki",
        yma: "lrr"
    },
    extLang: {
        aao: ["aao", "ar"],
        abh: ["abh", "ar"],
        abv: ["abv", "ar"],
        acm: ["acm", "ar"],
        acq: ["acq", "ar"],
        acw: ["acw", "ar"],
        acx: ["acx", "ar"],
        acy: ["acy", "ar"],
        adf: ["adf", "ar"],
        ads: ["ads", "sgn"],
        aeb: ["aeb", "ar"],
        aec: ["aec", "ar"],
        aed: ["aed", "sgn"],
        aen: ["aen", "sgn"],
        afb: ["afb", "ar"],
        afg: ["afg", "sgn"],
        ajp: ["ajp", "ar"],
        apc: ["apc", "ar"],
        apd: ["apd", "ar"],
        arb: ["arb", "ar"],
        arq: ["arq", "ar"],
        ars: ["ars", "ar"],
        ary: ["ary", "ar"],
        arz: ["arz", "ar"],
        ase: ["ase", "sgn"],
        asf: ["asf", "sgn"],
        asp: ["asp", "sgn"],
        asq: ["asq", "sgn"],
        asw: ["asw", "sgn"],
        auz: ["auz", "ar"],
        avl: ["avl", "ar"],
        ayh: ["ayh", "ar"],
        ayl: ["ayl", "ar"],
        ayn: ["ayn", "ar"],
        ayp: ["ayp", "ar"],
        bbz: ["bbz", "ar"],
        bfi: ["bfi", "sgn"],
        bfk: ["bfk", "sgn"],
        bjn: ["bjn", "ms"],
        bog: ["bog", "sgn"],
        bqn: ["bqn", "sgn"],
        bqy: ["bqy", "sgn"],
        btj: ["btj", "ms"],
        bve: ["bve", "ms"],
        bvl: ["bvl", "sgn"],
        bvu: ["bvu", "ms"],
        bzs: ["bzs", "sgn"],
        cdo: ["cdo", "zh"],
        cds: ["cds", "sgn"],
        cjy: ["cjy", "zh"],
        cmn: ["cmn", "zh"],
        coa: ["coa", "ms"],
        cpx: ["cpx", "zh"],
        csc: ["csc", "sgn"],
        csd: ["csd", "sgn"],
        cse: ["cse", "sgn"],
        csf: ["csf", "sgn"],
        csg: ["csg", "sgn"],
        csl: ["csl", "sgn"],
        csn: ["csn", "sgn"],
        csq: ["csq", "sgn"],
        csr: ["csr", "sgn"],
        czh: ["czh", "zh"],
        czo: ["czo", "zh"],
        doq: ["doq", "sgn"],
        dse: ["dse", "sgn"],
        dsl: ["dsl", "sgn"],
        dup: ["dup", "ms"],
        ecs: ["ecs", "sgn"],
        esl: ["esl", "sgn"],
        esn: ["esn", "sgn"],
        eso: ["eso", "sgn"],
        eth: ["eth", "sgn"],
        fcs: ["fcs", "sgn"],
        fse: ["fse", "sgn"],
        fsl: ["fsl", "sgn"],
        fss: ["fss", "sgn"],
        gan: ["gan", "zh"],
        gds: ["gds", "sgn"],
        gom: ["gom", "kok"],
        gse: ["gse", "sgn"],
        gsg: ["gsg", "sgn"],
        gsm: ["gsm", "sgn"],
        gss: ["gss", "sgn"],
        gus: ["gus", "sgn"],
        hab: ["hab", "sgn"],
        haf: ["haf", "sgn"],
        hak: ["hak", "zh"],
        hds: ["hds", "sgn"],
        hji: ["hji", "ms"],
        hks: ["hks", "sgn"],
        hos: ["hos", "sgn"],
        hps: ["hps", "sgn"],
        hsh: ["hsh", "sgn"],
        hsl: ["hsl", "sgn"],
        hsn: ["hsn", "zh"],
        icl: ["icl", "sgn"],
        ils: ["ils", "sgn"],
        inl: ["inl", "sgn"],
        ins: ["ins", "sgn"],
        ise: ["ise", "sgn"],
        isg: ["isg", "sgn"],
        isr: ["isr", "sgn"],
        jak: ["jak", "ms"],
        jax: ["jax", "ms"],
        jcs: ["jcs", "sgn"],
        jhs: ["jhs", "sgn"],
        jls: ["jls", "sgn"],
        jos: ["jos", "sgn"],
        jsl: ["jsl", "sgn"],
        jus: ["jus", "sgn"],
        kgi: ["kgi", "sgn"],
        knn: ["knn", "kok"],
        kvb: ["kvb", "ms"],
        kvk: ["kvk", "sgn"],
        kvr: ["kvr", "ms"],
        kxd: ["kxd", "ms"],
        lbs: ["lbs", "sgn"],
        lce: ["lce", "ms"],
        lcf: ["lcf", "ms"],
        liw: ["liw", "ms"],
        lls: ["lls", "sgn"],
        lsg: ["lsg", "sgn"],
        lsl: ["lsl", "sgn"],
        lso: ["lso", "sgn"],
        lsp: ["lsp", "sgn"],
        lst: ["lst", "sgn"],
        lsy: ["lsy", "sgn"],
        ltg: ["ltg", "lv"],
        lvs: ["lvs", "lv"],
        lzh: ["lzh", "zh"],
        max: ["max", "ms"],
        mdl: ["mdl", "sgn"],
        meo: ["meo", "ms"],
        mfa: ["mfa", "ms"],
        mfb: ["mfb", "ms"],
        mfs: ["mfs", "sgn"],
        min: ["min", "ms"],
        mnp: ["mnp", "zh"],
        mqg: ["mqg", "ms"],
        mre: ["mre", "sgn"],
        msd: ["msd", "sgn"],
        msi: ["msi", "ms"],
        msr: ["msr", "sgn"],
        mui: ["mui", "ms"],
        mzc: ["mzc", "sgn"],
        mzg: ["mzg", "sgn"],
        mzy: ["mzy", "sgn"],
        nan: ["nan", "zh"],
        nbs: ["nbs", "sgn"],
        ncs: ["ncs", "sgn"],
        nsi: ["nsi", "sgn"],
        nsl: ["nsl", "sgn"],
        nsp: ["nsp", "sgn"],
        nsr: ["nsr", "sgn"],
        nzs: ["nzs", "sgn"],
        okl: ["okl", "sgn"],
        orn: ["orn", "ms"],
        ors: ["ors", "ms"],
        pel: ["pel", "ms"],
        pga: ["pga", "ar"],
        pks: ["pks", "sgn"],
        prl: ["prl", "sgn"],
        prz: ["prz", "sgn"],
        psc: ["psc", "sgn"],
        psd: ["psd", "sgn"],
        pse: ["pse", "ms"],
        psg: ["psg", "sgn"],
        psl: ["psl", "sgn"],
        pso: ["pso", "sgn"],
        psp: ["psp", "sgn"],
        psr: ["psr", "sgn"],
        pys: ["pys", "sgn"],
        rms: ["rms", "sgn"],
        rsi: ["rsi", "sgn"],
        rsl: ["rsl", "sgn"],
        sdl: ["sdl", "sgn"],
        sfb: ["sfb", "sgn"],
        sfs: ["sfs", "sgn"],
        sgg: ["sgg", "sgn"],
        sgx: ["sgx", "sgn"],
        shu: ["shu", "ar"],
        slf: ["slf", "sgn"],
        sls: ["sls", "sgn"],
        sqk: ["sqk", "sgn"],
        sqs: ["sqs", "sgn"],
        ssh: ["ssh", "ar"],
        ssp: ["ssp", "sgn"],
        ssr: ["ssr", "sgn"],
        svk: ["svk", "sgn"],
        swc: ["swc", "sw"],
        swh: ["swh", "sw"],
        swl: ["swl", "sgn"],
        syy: ["syy", "sgn"],
        tmw: ["tmw", "ms"],
        tse: ["tse", "sgn"],
        tsm: ["tsm", "sgn"],
        tsq: ["tsq", "sgn"],
        tss: ["tss", "sgn"],
        tsy: ["tsy", "sgn"],
        tza: ["tza", "sgn"],
        ugn: ["ugn", "sgn"],
        ugy: ["ugy", "sgn"],
        ukl: ["ukl", "sgn"],
        uks: ["uks", "sgn"],
        urk: ["urk", "ms"],
        uzn: ["uzn", "uz"],
        uzs: ["uzs", "uz"],
        vgt: ["vgt", "sgn"],
        vkk: ["vkk", "ms"],
        vkt: ["vkt", "ms"],
        vsi: ["vsi", "sgn"],
        vsl: ["vsl", "sgn"],
        vsv: ["vsv", "sgn"],
        wuu: ["wuu", "zh"],
        xki: ["xki", "sgn"],
        xml: ["xml", "sgn"],
        xmm: ["xmm", "ms"],
        xms: ["xms", "sgn"],
        yds: ["yds", "sgn"],
        ysl: ["ysl", "sgn"],
        yue: ["yue", "zh"],
        zib: ["zib", "sgn"],
        zlm: ["zlm", "ms"],
        zmi: ["zmi", "ms"],
        zsl: ["zsl", "sgn"],
        zsm: ["zsm", "ms"]
    }
};

/**
 * Convert only a-z to uppercase as per section 6.1 of the spec
 */
function toLatinUpperCase(str) {
    var i = str.length;

    while (i--) {
        var ch = str.charAt(i);

        if (ch >= "a" && ch <= "z") str = str.slice(0, i) + ch.toUpperCase() + str.slice(i + 1);
    }

    return str;
}

/**
 * The IsStructurallyValidLanguageTag abstract operation verifies that the locale
 * argument (which must be a String value)
 *
 * - represents a well-formed BCP 47 language tag as specified in RFC 5646 section
 *   2.1, or successor,
 * - does not include duplicate variant subtags, and
 * - does not include duplicate singleton subtags.
 *
 * The abstract operation returns true if locale can be generated from the ABNF
 * grammar in section 2.1 of the RFC, starting with Language-Tag, and does not
 * contain duplicate variant or singleton subtags (other than as a private use
 * subtag). It returns false otherwise. Terminal value characters in the grammar are
 * interpreted as the Unicode equivalents of the ASCII octet values given.
 */
function /* 6.2.2 */IsStructurallyValidLanguageTag(locale) {
    // represents a well-formed BCP 47 language tag as specified in RFC 5646
    if (!expBCP47Syntax.test(locale)) return false;

    // does not include duplicate variant subtags, and
    if (expVariantDupes.test(locale)) return false;

    // does not include duplicate singleton subtags.
    if (expSingletonDupes.test(locale)) return false;

    return true;
}

/**
 * The CanonicalizeLanguageTag abstract operation returns the canonical and case-
 * regularized form of the locale argument (which must be a String value that is
 * a structurally valid BCP 47 language tag as verified by the
 * IsStructurallyValidLanguageTag abstract operation). It takes the steps
 * specified in RFC 5646 section 4.5, or successor, to bring the language tag
 * into canonical form, and to regularize the case of the subtags, but does not
 * take the steps to bring a language tag into “extlang form” and to reorder
 * variant subtags.

 * The specifications for extensions to BCP 47 language tags, such as RFC 6067,
 * may include canonicalization rules for the extension subtag sequences they
 * define that go beyond the canonicalization rules of RFC 5646 section 4.5.
 * Implementations are allowed, but not required, to apply these additional rules.
 */
function /* 6.2.3 */CanonicalizeLanguageTag(locale) {
    var match = void 0,
        parts = void 0;

    // A language tag is in 'canonical form' when the tag is well-formed
    // according to the rules in Sections 2.1 and 2.2

    // Section 2.1 says all subtags use lowercase...
    locale = locale.toLowerCase();

    // ...with 2 exceptions: 'two-letter and four-letter subtags that neither
    // appear at the start of the tag nor occur after singletons.  Such two-letter
    // subtags are all uppercase (as in the tags "en-CA-x-ca" or "sgn-BE-FR") and
    // four-letter subtags are titlecase (as in the tag "az-Latn-x-latn").
    parts = locale.split('-');
    for (var i = 1, max = parts.length; i < max; i++) {
        // Two-letter subtags are all uppercase
        if (parts[i].length === 2) parts[i] = parts[i].toUpperCase();

        // Four-letter subtags are titlecase
        else if (parts[i].length === 4) parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);

            // Is it a singleton?
            else if (parts[i].length === 1 && parts[i] !== 'x') break;
    }
    locale = arrJoin.call(parts, '-');

    // The steps laid out in RFC 5646 section 4.5 are as follows:

    // 1.  Extension sequences are ordered into case-insensitive ASCII order
    //     by singleton subtag.
    if ((match = locale.match(expExtSequences)) && match.length > 1) {
        // The built-in sort() sorts by ASCII order, so use that
        match.sort();

        // Replace all extensions with the joined, sorted array
        locale = locale.replace(RegExp('(?:' + expExtSequences.source + ')+', 'i'), arrJoin.call(match, ''));
    }

    // 2.  Redundant or grandfathered tags are replaced by their 'Preferred-
    //     Value', if there is one.
    if (hop.call(redundantTags.tags, locale)) locale = redundantTags.tags[locale];

    // 3.  Subtags are replaced by their 'Preferred-Value', if there is one.
    //     For extlangs, the original primary language subtag is also
    //     replaced if there is a primary language subtag in the 'Preferred-
    //     Value'.
    parts = locale.split('-');

    for (var _i = 1, _max = parts.length; _i < _max; _i++) {
        if (hop.call(redundantTags.subtags, parts[_i])) parts[_i] = redundantTags.subtags[parts[_i]];else if (hop.call(redundantTags.extLang, parts[_i])) {
            parts[_i] = redundantTags.extLang[parts[_i]][0];

            // For extlang tags, the prefix needs to be removed if it is redundant
            if (_i === 1 && redundantTags.extLang[parts[1]][1] === parts[0]) {
                parts = arrSlice.call(parts, _i++);
                _max -= 1;
            }
        }
    }

    return arrJoin.call(parts, '-');
}

/**
 * The DefaultLocale abstract operation returns a String value representing the
 * structurally valid (6.2.2) and canonicalized (6.2.3) BCP 47 language tag for the
 * host environment’s current locale.
 */
function /* 6.2.4 */DefaultLocale() {
    return defaultLocale;
}

// Sect 6.3 Currency Codes
// =======================

var expCurrencyCode = /^[A-Z]{3}$/;

/**
 * The IsWellFormedCurrencyCode abstract operation verifies that the currency argument
 * (after conversion to a String value) represents a well-formed 3-letter ISO currency
 * code. The following steps are taken:
 */
function /* 6.3.1 */IsWellFormedCurrencyCode(currency) {
    // 1. Let `c` be ToString(currency)
    var c = String(currency);

    // 2. Let `normalized` be the result of mapping c to upper case as described
    //    in 6.1.
    var normalized = toLatinUpperCase(c);

    // 3. If the string length of normalized is not 3, return false.
    // 4. If normalized contains any character that is not in the range "A" to "Z"
    //    (U+0041 to U+005A), return false.
    if (expCurrencyCode.test(normalized) === false) return false;

    // 5. Return true
    return true;
}

var expUnicodeExSeq = /-u(?:-[0-9a-z]{2,8})+/gi; // See `extension` below

function /* 9.2.1 */CanonicalizeLocaleList(locales) {
    // The abstract operation CanonicalizeLocaleList takes the following steps:

    // 1. If locales is undefined, then a. Return a new empty List
    if (locales === undefined) return new List();

    // 2. Let seen be a new empty List.
    var seen = new List();

    // 3. If locales is a String value, then
    //    a. Let locales be a new array created as if by the expression new
    //    Array(locales) where Array is the standard built-in constructor with
    //    that name and locales is the value of locales.
    locales = typeof locales === 'string' ? [locales] : locales;

    // 4. Let O be ToObject(locales).
    var O = toObject(locales);

    // 5. Let lenValue be the result of calling the [[Get]] internal method of
    //    O with the argument "length".
    // 6. Let len be ToUint32(lenValue).
    var len = toLength(O.length);

    // 7. Let k be 0.
    var k = 0;

    // 8. Repeat, while k < len
    while (k < len) {
        // a. Let Pk be ToString(k).
        var Pk = String(k);

        // b. Let kPresent be the result of calling the [[HasProperty]] internal
        //    method of O with argument Pk.
        var kPresent = Pk in O;

        // c. If kPresent is true, then
        if (kPresent) {
            // i. Let kValue be the result of calling the [[Get]] internal
            //     method of O with argument Pk.
            var kValue = O[Pk];

            // ii. If the type of kValue is not String or Object, then throw a
            //     TypeError exception.
            if (kValue === null || typeof kValue !== 'string' && (typeof kValue === "undefined" ? "undefined" : babelHelpers$1["typeof"](kValue)) !== 'object') throw new TypeError('String or Object type expected');

            // iii. Let tag be ToString(kValue).
            var tag = String(kValue);

            // iv. If the result of calling the abstract operation
            //     IsStructurallyValidLanguageTag (defined in 6.2.2), passing tag as
            //     the argument, is false, then throw a RangeError exception.
            if (!IsStructurallyValidLanguageTag(tag)) throw new RangeError("'" + tag + "' is not a structurally valid language tag");

            // v. Let tag be the result of calling the abstract operation
            //    CanonicalizeLanguageTag (defined in 6.2.3), passing tag as the
            //    argument.
            tag = CanonicalizeLanguageTag(tag);

            // vi. If tag is not an element of seen, then append tag as the last
            //     element of seen.
            if (arrIndexOf.call(seen, tag) === -1) arrPush.call(seen, tag);
        }

        // d. Increase k by 1.
        k++;
    }

    // 9. Return seen.
    return seen;
}

/**
 * The BestAvailableLocale abstract operation compares the provided argument
 * locale, which must be a String value with a structurally valid and
 * canonicalized BCP 47 language tag, against the locales in availableLocales and
 * returns either the longest non-empty prefix of locale that is an element of
 * availableLocales, or undefined if there is no such element. It uses the
 * fallback mechanism of RFC 4647, section 3.4. The following steps are taken:
 */
function /* 9.2.2 */BestAvailableLocale(availableLocales, locale) {
    // 1. Let candidate be locale
    var candidate = locale;

    // 2. Repeat
    while (candidate) {
        // a. If availableLocales contains an element equal to candidate, then return
        // candidate.
        if (arrIndexOf.call(availableLocales, candidate) > -1) return candidate;

        // b. Let pos be the character index of the last occurrence of "-"
        // (U+002D) within candidate. If that character does not occur, return
        // undefined.
        var pos = candidate.lastIndexOf('-');

        if (pos < 0) return;

        // c. If pos ≥ 2 and the character "-" occurs at index pos-2 of candidate,
        //    then decrease pos by 2.
        if (pos >= 2 && candidate.charAt(pos - 2) === '-') pos -= 2;

        // d. Let candidate be the substring of candidate from position 0, inclusive,
        //    to position pos, exclusive.
        candidate = candidate.substring(0, pos);
    }
}

/**
 * The LookupMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The following steps are taken:
 */
function /* 9.2.3 */LookupMatcher(availableLocales, requestedLocales) {
    // 1. Let i be 0.
    var i = 0;

    // 2. Let len be the number of elements in requestedLocales.
    var len = requestedLocales.length;

    // 3. Let availableLocale be undefined.
    var availableLocale = void 0;

    var locale = void 0,
        noExtensionsLocale = void 0;

    // 4. Repeat while i < len and availableLocale is undefined:
    while (i < len && !availableLocale) {
        // a. Let locale be the element of requestedLocales at 0-origined list
        //    position i.
        locale = requestedLocales[i];

        // b. Let noExtensionsLocale be the String value that is locale with all
        //    Unicode locale extension sequences removed.
        noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');

        // c. Let availableLocale be the result of calling the
        //    BestAvailableLocale abstract operation (defined in 9.2.2) with
        //    arguments availableLocales and noExtensionsLocale.
        availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

        // d. Increase i by 1.
        i++;
    }

    // 5. Let result be a new Record.
    var result = new Record();

    // 6. If availableLocale is not undefined, then
    if (availableLocale !== undefined) {
        // a. Set result.[[locale]] to availableLocale.
        result['[[locale]]'] = availableLocale;

        // b. If locale and noExtensionsLocale are not the same String value, then
        if (String(locale) !== String(noExtensionsLocale)) {
            // i. Let extension be the String value consisting of the first
            //    substring of locale that is a Unicode locale extension sequence.
            var extension = locale.match(expUnicodeExSeq)[0];

            // ii. Let extensionIndex be the character position of the initial
            //     "-" of the first Unicode locale extension sequence within locale.
            var extensionIndex = locale.indexOf('-u-');

            // iii. Set result.[[extension]] to extension.
            result['[[extension]]'] = extension;

            // iv. Set result.[[extensionIndex]] to extensionIndex.
            result['[[extensionIndex]]'] = extensionIndex;
        }
    }
    // 7. Else
    else
        // a. Set result.[[locale]] to the value returned by the DefaultLocale abstract
        //    operation (defined in 6.2.4).
        result['[[locale]]'] = DefaultLocale();

    // 8. Return result
    return result;
}

/**
 * The BestFitMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The algorithm is implementation dependent, but should produce results
 * that a typical user of the requested locales would perceive as at least as
 * good as those produced by the LookupMatcher abstract operation. Options
 * specified through Unicode locale extension sequences must be ignored by the
 * algorithm. Information about such subsequences is returned separately.
 * The abstract operation returns a record with a [[locale]] field, whose value
 * is the language tag of the selected locale, which must be an element of
 * availableLocales. If the language tag of the request locale that led to the
 * selected locale contained a Unicode locale extension sequence, then the
 * returned record also contains an [[extension]] field whose value is the first
 * Unicode locale extension sequence, and an [[extensionIndex]] field whose value
 * is the index of the first Unicode locale extension sequence within the request
 * locale language tag.
 */
function /* 9.2.4 */BestFitMatcher(availableLocales, requestedLocales) {
    return LookupMatcher(availableLocales, requestedLocales);
}

/**
 * The ResolveLocale abstract operation compares a BCP 47 language priority list
 * requestedLocales against the locales in availableLocales and determines the
 * best available language to meet the request. availableLocales and
 * requestedLocales must be provided as List values, options as a Record.
 */
function /* 9.2.5 */ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData) {
    if (availableLocales.length === 0) {
        throw new ReferenceError('No locale data has been provided for this object yet.');
    }

    // The following steps are taken:
    // 1. Let matcher be the value of options.[[localeMatcher]].
    var matcher = options['[[localeMatcher]]'];

    var r = void 0;

    // 2. If matcher is "lookup", then
    if (matcher === 'lookup')
        // a. Let r be the result of calling the LookupMatcher abstract operation
        //    (defined in 9.2.3) with arguments availableLocales and
        //    requestedLocales.
        r = LookupMatcher(availableLocales, requestedLocales);

        // 3. Else
    else
        // a. Let r be the result of calling the BestFitMatcher abstract
        //    operation (defined in 9.2.4) with arguments availableLocales and
        //    requestedLocales.
        r = BestFitMatcher(availableLocales, requestedLocales);

    // 4. Let foundLocale be the value of r.[[locale]].
    var foundLocale = r['[[locale]]'];

    var extensionSubtags = void 0,
        extensionSubtagsLength = void 0;

    // 5. If r has an [[extension]] field, then
    if (hop.call(r, '[[extension]]')) {
        // a. Let extension be the value of r.[[extension]].
        var extension = r['[[extension]]'];
        // b. Let split be the standard built-in function object defined in ES5,
        //    15.5.4.14.
        var split = String.prototype.split;
        // c. Let extensionSubtags be the result of calling the [[Call]] internal
        //    method of split with extension as the this value and an argument
        //    list containing the single item "-".
        extensionSubtags = split.call(extension, '-');
        // d. Let extensionSubtagsLength be the result of calling the [[Get]]
        //    internal method of extensionSubtags with argument "length".
        extensionSubtagsLength = extensionSubtags.length;
    }

    // 6. Let result be a new Record.
    var result = new Record();

    // 7. Set result.[[dataLocale]] to foundLocale.
    result['[[dataLocale]]'] = foundLocale;

    // 8. Let supportedExtension be "-u".
    var supportedExtension = '-u';
    // 9. Let i be 0.
    var i = 0;
    // 10. Let len be the result of calling the [[Get]] internal method of
    //     relevantExtensionKeys with argument "length".
    var len = relevantExtensionKeys.length;

    // 11 Repeat while i < len:
    while (i < len) {
        // a. Let key be the result of calling the [[Get]] internal method of
        //    relevantExtensionKeys with argument ToString(i).
        var key = relevantExtensionKeys[i];
        // b. Let foundLocaleData be the result of calling the [[Get]] internal
        //    method of localeData with the argument foundLocale.
        var foundLocaleData = localeData[foundLocale];
        // c. Let keyLocaleData be the result of calling the [[Get]] internal
        //    method of foundLocaleData with the argument key.
        var keyLocaleData = foundLocaleData[key];
        // d. Let value be the result of calling the [[Get]] internal method of
        //    keyLocaleData with argument "0".
        var value = keyLocaleData['0'];
        // e. Let supportedExtensionAddition be "".
        var supportedExtensionAddition = '';
        // f. Let indexOf be the standard built-in function object defined in
        //    ES5, 15.4.4.14.
        var indexOf = arrIndexOf;

        // g. If extensionSubtags is not undefined, then
        if (extensionSubtags !== undefined) {
            // i. Let keyPos be the result of calling the [[Call]] internal
            //    method of indexOf with extensionSubtags as the this value and
            // an argument list containing the single item key.
            var keyPos = indexOf.call(extensionSubtags, key);

            // ii. If keyPos ≠ -1, then
            if (keyPos !== -1) {
                // 1. If keyPos + 1 < extensionSubtagsLength and the length of the
                //    result of calling the [[Get]] internal method of
                //    extensionSubtags with argument ToString(keyPos +1) is greater
                //    than 2, then
                if (keyPos + 1 < extensionSubtagsLength && extensionSubtags[keyPos + 1].length > 2) {
                    // a. Let requestedValue be the result of calling the [[Get]]
                    //    internal method of extensionSubtags with argument
                    //    ToString(keyPos + 1).
                    var requestedValue = extensionSubtags[keyPos + 1];
                    // b. Let valuePos be the result of calling the [[Call]]
                    //    internal method of indexOf with keyLocaleData as the
                    //    this value and an argument list containing the single
                    //    item requestedValue.
                    var valuePos = indexOf.call(keyLocaleData, requestedValue);

                    // c. If valuePos ≠ -1, then
                    if (valuePos !== -1) {
                        // i. Let value be requestedValue.
                        value = requestedValue,
                        // ii. Let supportedExtensionAddition be the
                        //     concatenation of "-", key, "-", and value.
                        supportedExtensionAddition = '-' + key + '-' + value;
                    }
                }
                // 2. Else
                else {
                        // a. Let valuePos be the result of calling the [[Call]]
                        // internal method of indexOf with keyLocaleData as the this
                        // value and an argument list containing the single item
                        // "true".
                        var _valuePos = indexOf(keyLocaleData, 'true');

                        // b. If valuePos ≠ -1, then
                        if (_valuePos !== -1)
                            // i. Let value be "true".
                            value = 'true';
                    }
            }
        }
        // h. If options has a field [[<key>]], then
        if (hop.call(options, '[[' + key + ']]')) {
            // i. Let optionsValue be the value of options.[[<key>]].
            var optionsValue = options['[[' + key + ']]'];

            // ii. If the result of calling the [[Call]] internal method of indexOf
            //     with keyLocaleData as the this value and an argument list
            //     containing the single item optionsValue is not -1, then
            if (indexOf.call(keyLocaleData, optionsValue) !== -1) {
                // 1. If optionsValue is not equal to value, then
                if (optionsValue !== value) {
                    // a. Let value be optionsValue.
                    value = optionsValue;
                    // b. Let supportedExtensionAddition be "".
                    supportedExtensionAddition = '';
                }
            }
        }
        // i. Set result.[[<key>]] to value.
        result['[[' + key + ']]'] = value;

        // j. Append supportedExtensionAddition to supportedExtension.
        supportedExtension += supportedExtensionAddition;

        // k. Increase i by 1.
        i++;
    }
    // 12. If the length of supportedExtension is greater than 2, then
    if (supportedExtension.length > 2) {
        // a.
        var privateIndex = foundLocale.indexOf("-x-");
        // b.
        if (privateIndex === -1) {
            // i.
            foundLocale = foundLocale + supportedExtension;
        }
        // c.
        else {
                // i.
                var preExtension = foundLocale.substring(0, privateIndex);
                // ii.
                var postExtension = foundLocale.substring(privateIndex);
                // iii.
                foundLocale = preExtension + supportedExtension + postExtension;
            }
        // d. asserting - skipping
        // e.
        foundLocale = CanonicalizeLanguageTag(foundLocale);
    }
    // 13. Set result.[[locale]] to foundLocale.
    result['[[locale]]'] = foundLocale;

    // 14. Return result.
    return result;
}

/**
 * The LookupSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the BCP 47 Lookup algorithm.
 * Locales appear in the same order in the returned list as in requestedLocales.
 * The following steps are taken:
 */
function /* 9.2.6 */LookupSupportedLocales(availableLocales, requestedLocales) {
    // 1. Let len be the number of elements in requestedLocales.
    var len = requestedLocales.length;
    // 2. Let subset be a new empty List.
    var subset = new List();
    // 3. Let k be 0.
    var k = 0;

    // 4. Repeat while k < len
    while (k < len) {
        // a. Let locale be the element of requestedLocales at 0-origined list
        //    position k.
        var locale = requestedLocales[k];
        // b. Let noExtensionsLocale be the String value that is locale with all
        //    Unicode locale extension sequences removed.
        var noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');
        // c. Let availableLocale be the result of calling the
        //    BestAvailableLocale abstract operation (defined in 9.2.2) with
        //    arguments availableLocales and noExtensionsLocale.
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

        // d. If availableLocale is not undefined, then append locale to the end of
        //    subset.
        if (availableLocale !== undefined) arrPush.call(subset, locale);

        // e. Increment k by 1.
        k++;
    }

    // 5. Let subsetArray be a new Array object whose elements are the same
    //    values in the same order as the elements of subset.
    var subsetArray = arrSlice.call(subset);

    // 6. Return subsetArray.
    return subsetArray;
}

/**
 * The BestFitSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the Best Fit Matcher
 * algorithm. Locales appear in the same order in the returned list as in
 * requestedLocales. The steps taken are implementation dependent.
 */
function /*9.2.7 */BestFitSupportedLocales(availableLocales, requestedLocales) {
    // ###TODO: implement this function as described by the specification###
    return LookupSupportedLocales(availableLocales, requestedLocales);
}

/**
 * The SupportedLocales abstract operation returns the subset of the provided BCP
 * 47 language priority list requestedLocales for which availableLocales has a
 * matching locale. Two algorithms are available to match the locales: the Lookup
 * algorithm described in RFC 4647 section 3.4, and an implementation dependent
 * best-fit algorithm. Locales appear in the same order in the returned list as
 * in requestedLocales. The following steps are taken:
 */
function /*9.2.8 */SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = void 0,
        subset = void 0;

    // 1. If options is not undefined, then
    if (options !== undefined) {
        // a. Let options be ToObject(options).
        options = new Record(toObject(options));
        // b. Let matcher be the result of calling the [[Get]] internal method of
        //    options with argument "localeMatcher".
        matcher = options.localeMatcher;

        // c. If matcher is not undefined, then
        if (matcher !== undefined) {
            // i. Let matcher be ToString(matcher).
            matcher = String(matcher);

            // ii. If matcher is not "lookup" or "best fit", then throw a RangeError
            //     exception.
            if (matcher !== 'lookup' && matcher !== 'best fit') throw new RangeError('matcher should be "lookup" or "best fit"');
        }
    }
    // 2. If matcher is undefined or "best fit", then
    if (matcher === undefined || matcher === 'best fit')
        // a. Let subset be the result of calling the BestFitSupportedLocales
        //    abstract operation (defined in 9.2.7) with arguments
        //    availableLocales and requestedLocales.
        subset = BestFitSupportedLocales(availableLocales, requestedLocales);
        // 3. Else
    else
        // a. Let subset be the result of calling the LookupSupportedLocales
        //    abstract operation (defined in 9.2.6) with arguments
        //    availableLocales and requestedLocales.
        subset = LookupSupportedLocales(availableLocales, requestedLocales);

    // 4. For each named own property name P of subset,
    for (var P in subset) {
        if (!hop.call(subset, P)) continue;

        // a. Let desc be the result of calling the [[GetOwnProperty]] internal
        //    method of subset with P.
        // b. Set desc.[[Writable]] to false.
        // c. Set desc.[[Configurable]] to false.
        // d. Call the [[DefineOwnProperty]] internal method of subset with P, desc,
        //    and true as arguments.
        defineProperty(subset, P, {
            writable: false, configurable: false, value: subset[P]
        });
    }
    // "Freeze" the array so no new elements can be added
    defineProperty(subset, 'length', { writable: false });

    // 5. Return subset
    return subset;
}

/**
 * The GetOption abstract operation extracts the value of the property named
 * property from the provided options object, converts it to the required type,
 * checks whether it is one of a List of allowed values, and fills in a fallback
 * value if necessary.
 */
function /*9.2.9 */GetOption(options, property, type, values, fallback) {
    // 1. Let value be the result of calling the [[Get]] internal method of
    //    options with argument property.
    var value = options[property];

    // 2. If value is not undefined, then
    if (value !== undefined) {
        // a. Assert: type is "boolean" or "string".
        // b. If type is "boolean", then let value be ToBoolean(value).
        // c. If type is "string", then let value be ToString(value).
        value = type === 'boolean' ? Boolean(value) : type === 'string' ? String(value) : value;

        // d. If values is not undefined, then
        if (values !== undefined) {
            // i. If values does not contain an element equal to value, then throw a
            //    RangeError exception.
            if (arrIndexOf.call(values, value) === -1) throw new RangeError("'" + value + "' is not an allowed value for `" + property + '`');
        }

        // e. Return value.
        return value;
    }
    // Else return fallback.
    return fallback;
}

/**
 * The GetNumberOption abstract operation extracts a property value from the
 * provided options object, converts it to a Number value, checks whether it is
 * in the allowed range, and fills in a fallback value if necessary.
 */
function /* 9.2.10 */GetNumberOption(options, property, minimum, maximum, fallback) {
    // 1. Let value be the result of calling the [[Get]] internal method of
    //    options with argument property.
    var value = options[property];

    // 2. If value is not undefined, then
    if (value !== undefined) {
        // a. Let value be ToNumber(value).
        value = Number(value);

        // b. If value is NaN or less than minimum or greater than maximum, throw a
        //    RangeError exception.
        if (isNaN(value) || value < minimum || value > maximum) throw new RangeError('Value is not a number or outside accepted range');

        // c. Return floor(value).
        return Math.floor(value);
    }
    // 3. Else return fallback.
    return fallback;
}

// 8 The Intl Object
var Intl = {};

// 8.2 Function Properties of the Intl Object

// 8.2.1
// @spec[tc39/ecma402/master/spec/intl.html]
// @clause[sec-intl.getcanonicallocales]
function getCanonicalLocales(locales) {
    // 1. Let ll be ? CanonicalizeLocaleList(locales).
    var ll = CanonicalizeLocaleList(locales);
    // 2. Return CreateArrayFromList(ll).
    {
        var result = [];

        var len = ll.length;
        var k = 0;

        while (k < len) {
            result[k] = ll[k];
            k++;
        }
        return result;
    }
}

Object.defineProperty(Intl, 'getCanonicalLocales', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: getCanonicalLocales
});

// Currency minor units output from get-4217 grunt task, formatted
var currencyMinorUnits = {
    BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 4, CLP: 0, KMF: 0, DJF: 0,
    XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3,
    OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0
};

// Define the NumberFormat constructor internally so it cannot be tainted
function NumberFormatConstructor() {
    var locales = arguments[0];
    var options = arguments[1];

    if (!this || this === Intl) {
        return new Intl.NumberFormat(locales, options);
    }

    return InitializeNumberFormat(toObject(this), locales, options);
}

defineProperty(Intl, 'NumberFormat', {
    configurable: true,
    writable: true,
    value: NumberFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(Intl.NumberFormat, 'prototype', {
    writable: false
});

/**
 * The abstract operation InitializeNumberFormat accepts the arguments
 * numberFormat (which must be an object), locales, and options. It initializes
 * numberFormat as a NumberFormat object.
 */
function /*11.1.1.1 */InitializeNumberFormat(numberFormat, locales, options) {
    // This will be a internal properties object if we're not already initialized
    var internal = getInternalProperties(numberFormat);

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore();

    // 1. If numberFormat has an [[initializedIntlObject]] internal property with
    // value true, throw a TypeError exception.
    if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

    // Need this to access the `internal` object
    defineProperty(numberFormat, '__getInternalProperties', {
        value: function value() {
            // NOTE: Non-standard, for internal use only
            if (arguments[0] === secret) return internal;
        }
    });

    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
    internal['[[initializedIntlObject]]'] = true;

    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
    //    abstract operation (defined in 9.2.1) with argument locales.
    var requestedLocales = CanonicalizeLocaleList(locales);

    // 4. If options is undefined, then
    if (options === undefined)
        // a. Let options be the result of creating a new object as if by the
        // expression new Object() where Object is the standard built-in constructor
        // with that name.
        options = {};

        // 5. Else
    else
        // a. Let options be ToObject(options).
        options = toObject(options);

    // 6. Let opt be a new Record.
    var opt = new Record(),


    // 7. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with the arguments options, "localeMatcher", "string",
    //    a List containing the two String values "lookup" and "best fit", and
    //    "best fit".
    matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

    // 8. Set opt.[[localeMatcher]] to matcher.
    opt['[[localeMatcher]]'] = matcher;

    // 9. Let NumberFormat be the standard built-in object that is the initial value
    //    of Intl.NumberFormat.
    // 10. Let localeData be the value of the [[localeData]] internal property of
    //     NumberFormat.
    var localeData = internals.NumberFormat['[[localeData]]'];

    // 11. Let r be the result of calling the ResolveLocale abstract operation
    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
    //     NumberFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
    //     internal property of NumberFormat, and localeData.
    var r = ResolveLocale(internals.NumberFormat['[[availableLocales]]'], requestedLocales, opt, internals.NumberFormat['[[relevantExtensionKeys]]'], localeData);

    // 12. Set the [[locale]] internal property of numberFormat to the value of
    //     r.[[locale]].
    internal['[[locale]]'] = r['[[locale]]'];

    // 13. Set the [[numberingSystem]] internal property of numberFormat to the value
    //     of r.[[nu]].
    internal['[[numberingSystem]]'] = r['[[nu]]'];

    // The specification doesn't tell us to do this, but it's helpful later on
    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

    // 14. Let dataLocale be the value of r.[[dataLocale]].
    var dataLocale = r['[[dataLocale]]'];

    // 15. Let s be the result of calling the GetOption abstract operation with the
    //     arguments options, "style", "string", a List containing the three String
    //     values "decimal", "percent", and "currency", and "decimal".
    var s = GetOption(options, 'style', 'string', new List('decimal', 'percent', 'currency'), 'decimal');

    // 16. Set the [[style]] internal property of numberFormat to s.
    internal['[[style]]'] = s;

    // 17. Let c be the result of calling the GetOption abstract operation with the
    //     arguments options, "currency", "string", undefined, and undefined.
    var c = GetOption(options, 'currency', 'string');

    // 18. If c is not undefined and the result of calling the
    //     IsWellFormedCurrencyCode abstract operation (defined in 6.3.1) with
    //     argument c is false, then throw a RangeError exception.
    if (c !== undefined && !IsWellFormedCurrencyCode(c)) throw new RangeError("'" + c + "' is not a valid currency code");

    // 19. If s is "currency" and c is undefined, throw a TypeError exception.
    if (s === 'currency' && c === undefined) throw new TypeError('Currency code is required when style is currency');

    var cDigits = void 0;

    // 20. If s is "currency", then
    if (s === 'currency') {
        // a. Let c be the result of converting c to upper case as specified in 6.1.
        c = c.toUpperCase();

        // b. Set the [[currency]] internal property of numberFormat to c.
        internal['[[currency]]'] = c;

        // c. Let cDigits be the result of calling the CurrencyDigits abstract
        //    operation (defined below) with argument c.
        cDigits = CurrencyDigits(c);
    }

    // 21. Let cd be the result of calling the GetOption abstract operation with the
    //     arguments options, "currencyDisplay", "string", a List containing the
    //     three String values "code", "symbol", and "name", and "symbol".
    var cd = GetOption(options, 'currencyDisplay', 'string', new List('code', 'symbol', 'name'), 'symbol');

    // 22. If s is "currency", then set the [[currencyDisplay]] internal property of
    //     numberFormat to cd.
    if (s === 'currency') internal['[[currencyDisplay]]'] = cd;

    // 23. Let mnid be the result of calling the GetNumberOption abstract operation
    //     (defined in 9.2.10) with arguments options, "minimumIntegerDigits", 1, 21,
    //     and 1.
    var mnid = GetNumberOption(options, 'minimumIntegerDigits', 1, 21, 1);

    // 24. Set the [[minimumIntegerDigits]] internal property of numberFormat to mnid.
    internal['[[minimumIntegerDigits]]'] = mnid;

    // 25. If s is "currency", then let mnfdDefault be cDigits; else let mnfdDefault
    //     be 0.
    var mnfdDefault = s === 'currency' ? cDigits : 0;

    // 26. Let mnfd be the result of calling the GetNumberOption abstract operation
    //     with arguments options, "minimumFractionDigits", 0, 20, and mnfdDefault.
    var mnfd = GetNumberOption(options, 'minimumFractionDigits', 0, 20, mnfdDefault);

    // 27. Set the [[minimumFractionDigits]] internal property of numberFormat to mnfd.
    internal['[[minimumFractionDigits]]'] = mnfd;

    // 28. If s is "currency", then let mxfdDefault be max(mnfd, cDigits); else if s
    //     is "percent", then let mxfdDefault be max(mnfd, 0); else let mxfdDefault
    //     be max(mnfd, 3).
    var mxfdDefault = s === 'currency' ? Math.max(mnfd, cDigits) : s === 'percent' ? Math.max(mnfd, 0) : Math.max(mnfd, 3);

    // 29. Let mxfd be the result of calling the GetNumberOption abstract operation
    //     with arguments options, "maximumFractionDigits", mnfd, 20, and mxfdDefault.
    var mxfd = GetNumberOption(options, 'maximumFractionDigits', mnfd, 20, mxfdDefault);

    // 30. Set the [[maximumFractionDigits]] internal property of numberFormat to mxfd.
    internal['[[maximumFractionDigits]]'] = mxfd;

    // 31. Let mnsd be the result of calling the [[Get]] internal method of options
    //     with argument "minimumSignificantDigits".
    var mnsd = options.minimumSignificantDigits;

    // 32. Let mxsd be the result of calling the [[Get]] internal method of options
    //     with argument "maximumSignificantDigits".
    var mxsd = options.maximumSignificantDigits;

    // 33. If mnsd is not undefined or mxsd is not undefined, then:
    if (mnsd !== undefined || mxsd !== undefined) {
        // a. Let mnsd be the result of calling the GetNumberOption abstract
        //    operation with arguments options, "minimumSignificantDigits", 1, 21,
        //    and 1.
        mnsd = GetNumberOption(options, 'minimumSignificantDigits', 1, 21, 1);

        // b. Let mxsd be the result of calling the GetNumberOption abstract
        //     operation with arguments options, "maximumSignificantDigits", mnsd,
        //     21, and 21.
        mxsd = GetNumberOption(options, 'maximumSignificantDigits', mnsd, 21, 21);

        // c. Set the [[minimumSignificantDigits]] internal property of numberFormat
        //    to mnsd, and the [[maximumSignificantDigits]] internal property of
        //    numberFormat to mxsd.
        internal['[[minimumSignificantDigits]]'] = mnsd;
        internal['[[maximumSignificantDigits]]'] = mxsd;
    }
    // 34. Let g be the result of calling the GetOption abstract operation with the
    //     arguments options, "useGrouping", "boolean", undefined, and true.
    var g = GetOption(options, 'useGrouping', 'boolean', undefined, true);

    // 35. Set the [[useGrouping]] internal property of numberFormat to g.
    internal['[[useGrouping]]'] = g;

    // 36. Let dataLocaleData be the result of calling the [[Get]] internal method of
    //     localeData with argument dataLocale.
    var dataLocaleData = localeData[dataLocale];

    // 37. Let patterns be the result of calling the [[Get]] internal method of
    //     dataLocaleData with argument "patterns".
    var patterns = dataLocaleData.patterns;

    // 38. Assert: patterns is an object (see 11.2.3)

    // 39. Let stylePatterns be the result of calling the [[Get]] internal method of
    //     patterns with argument s.
    var stylePatterns = patterns[s];

    // 40. Set the [[positivePattern]] internal property of numberFormat to the
    //     result of calling the [[Get]] internal method of stylePatterns with the
    //     argument "positivePattern".
    internal['[[positivePattern]]'] = stylePatterns.positivePattern;

    // 41. Set the [[negativePattern]] internal property of numberFormat to the
    //     result of calling the [[Get]] internal method of stylePatterns with the
    //     argument "negativePattern".
    internal['[[negativePattern]]'] = stylePatterns.negativePattern;

    // 42. Set the [[boundFormat]] internal property of numberFormat to undefined.
    internal['[[boundFormat]]'] = undefined;

    // 43. Set the [[initializedNumberFormat]] internal property of numberFormat to
    //     true.
    internal['[[initializedNumberFormat]]'] = true;

    // In ES3, we need to pre-bind the format() function
    if (es3) numberFormat.format = GetFormatNumber.call(numberFormat);

    // Restore the RegExp properties
    regexpRestore();

    // Return the newly initialised object
    return numberFormat;
}

function CurrencyDigits(currency) {
    // When the CurrencyDigits abstract operation is called with an argument currency
    // (which must be an upper case String value), the following steps are taken:

    // 1. If the ISO 4217 currency and funds code list contains currency as an
    // alphabetic code, then return the minor unit value corresponding to the
    // currency from the list; else return 2.
    return currencyMinorUnits[currency] !== undefined ? currencyMinorUnits[currency] : 2;
}

/* 11.2.3 */internals.NumberFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['nu'],
    '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.NumberFormat is called, the
 * following steps are taken:
 */
/* 11.2.2 */
defineProperty(Intl.NumberFormat, 'supportedLocalesOf', {
    configurable: true,
    writable: true,
    value: fnBind.call(function (locales) {
        // Bound functions only have the `this` value altered if being used as a constructor,
        // this lets us imitate a native function that has no constructor
        if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

        // Create an object whose props can be used to restore the values of RegExp props
        var regexpRestore = createRegExpRestore(),


        // 1. If options is not provided, then let options be undefined.
        options = arguments[1],


        // 2. Let availableLocales be the value of the [[availableLocales]] internal
        //    property of the standard built-in object that is the initial value of
        //    Intl.NumberFormat.

        availableLocales = this['[[availableLocales]]'],


        // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
        //    abstract operation (defined in 9.2.1) with argument locales.
        requestedLocales = CanonicalizeLocaleList(locales);

        // Restore the RegExp properties
        regexpRestore();

        // 4. Return the result of calling the SupportedLocales abstract operation
        //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
        //    and options.
        return SupportedLocales(availableLocales, requestedLocales, options);
    }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * NumberFormat object.
 */
/* 11.3.2 */defineProperty(Intl.NumberFormat.prototype, 'format', {
    configurable: true,
    get: GetFormatNumber
});

function GetFormatNumber() {
    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 11.3_b
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');

    // The value of the [[Get]] attribute is a function that takes the following
    // steps:

    // 1. If the [[boundFormat]] internal property of this NumberFormat object
    //    is undefined, then:
    if (internal['[[boundFormat]]'] === undefined) {
        // a. Let F be a Function object, with internal properties set as
        //    specified for built-in functions in ES5, 15, or successor, and the
        //    length property set to 1, that takes the argument value and
        //    performs the following steps:
        var F = function F(value) {
            // i. If value is not provided, then let value be undefined.
            // ii. Let x be ToNumber(value).
            // iii. Return the result of calling the FormatNumber abstract
            //      operation (defined below) with arguments this and x.
            return FormatNumber(this, /* x = */Number(value));
        };

        // b. Let bind be the standard built-in function object defined in ES5,
        //    15.3.4.5.
        // c. Let bf be the result of calling the [[Call]] internal method of
        //    bind with F as the this value and an argument list containing
        //    the single item this.
        var bf = fnBind.call(F, this);

        // d. Set the [[boundFormat]] internal property of this NumberFormat
        //    object to bf.
        internal['[[boundFormat]]'] = bf;
    }
    // Return the value of the [[boundFormat]] internal property of this
    // NumberFormat object.
    return internal['[[boundFormat]]'];
}

function formatToParts() {
    var value = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.NumberFormat object.');

    var x = Number(value);
    return FormatNumberToParts(this, x);
}

Object.defineProperty(Intl.NumberFormat.prototype, 'formatToParts', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: formatToParts
});

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumbertoparts]
 */
function FormatNumberToParts(numberFormat, x) {
    // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
    var parts = PartitionNumberPattern(numberFormat, x);
    // 2. Let result be ArrayCreate(0).
    var result = [];
    // 3. Let n be 0.
    var n = 0;
    // 4. For each part in parts, do:
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        // a. Let O be ObjectCreate(%ObjectPrototype%).
        var O = {};
        // a. Perform ? CreateDataPropertyOrThrow(O, "type", part.[[type]]).
        O.type = part['[[type]]'];
        // a. Perform ? CreateDataPropertyOrThrow(O, "value", part.[[value]]).
        O.value = part['[[value]]'];
        // a. Perform ? CreateDataPropertyOrThrow(result, ? ToString(n), O).
        result[n] = O;
        // a. Increment n by 1.
        n += 1;
    }
    // 5. Return result.
    return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-partitionnumberpattern]
 */
function PartitionNumberPattern(numberFormat, x) {

    var internal = getInternalProperties(numberFormat),
        locale = internal['[[dataLocale]]'],
        nums = internal['[[numberingSystem]]'],
        data = internals.NumberFormat['[[localeData]]'][locale],
        ild = data.symbols[nums] || data.symbols.latn,
        pattern = void 0;

    // 1. If x is not NaN and x < 0, then:
    if (!isNaN(x) && x < 0) {
        // a. Let x be -x.
        x = -x;
        // a. Let pattern be the value of numberFormat.[[negativePattern]].
        pattern = internal['[[negativePattern]]'];
    }
    // 2. Else,
    else {
            // a. Let pattern be the value of numberFormat.[[positivePattern]].
            pattern = internal['[[positivePattern]]'];
        }
    // 3. Let result be a new empty List.
    var result = new List();
    // 4. Let beginIndex be Call(%StringProto_indexOf%, pattern, "{", 0).
    var beginIndex = pattern.indexOf('{', 0);
    // 5. Let endIndex be 0.
    var endIndex = 0;
    // 6. Let nextIndex be 0.
    var nextIndex = 0;
    // 7. Let length be the number of code units in pattern.
    var length = pattern.length;
    // 8. Repeat while beginIndex is an integer index into pattern:
    while (beginIndex > -1 && beginIndex < length) {
        // a. Set endIndex to Call(%StringProto_indexOf%, pattern, "}", beginIndex)
        endIndex = pattern.indexOf('}', beginIndex);
        // a. If endIndex = -1, throw new Error exception.
        if (endIndex === -1) throw new Error();
        // a. If beginIndex is greater than nextIndex, then:
        if (beginIndex > nextIndex) {
            // i. Let literal be a substring of pattern from position nextIndex, inclusive, to position beginIndex, exclusive.
            var literal = pattern.substring(nextIndex, beginIndex);
            // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
            arrPush.call(result, { '[[type]]': 'literal', '[[value]]': literal });
        }
        // a. Let p be the substring of pattern from position beginIndex, exclusive, to position endIndex, exclusive.
        var p = pattern.substring(beginIndex + 1, endIndex);
        // a. If p is equal "number", then:
        if (p === "number") {
            // i. If x is NaN,
            if (isNaN(x)) {
                // 1. Let n be an ILD String value indicating the NaN value.
                var n = ild.nan;
                // 2. Add new part record { [[type]]: "nan", [[value]]: n } as a new element of the list result.
                arrPush.call(result, { '[[type]]': 'nan', '[[value]]': n });
            }
            // ii. Else if isFinite(x) is false,
            else if (!isFinite(x)) {
                    // 1. Let n be an ILD String value indicating infinity.
                    var _n = ild.infinity;
                    // 2. Add new part record { [[type]]: "infinity", [[value]]: n } as a new element of the list result.
                    arrPush.call(result, { '[[type]]': 'infinity', '[[value]]': _n });
                }
                // iii. Else,
                else {
                        // 1. If the value of numberFormat.[[style]] is "percent" and isFinite(x), let x be 100 × x.
                        if (internal['[[style]]'] === 'percent' && isFinite(x)) x *= 100;

                        var _n2 = void 0;
                        // 2. If the numberFormat.[[minimumSignificantDigits]] and numberFormat.[[maximumSignificantDigits]] are present, then
                        if (hop.call(internal, '[[minimumSignificantDigits]]') && hop.call(internal, '[[maximumSignificantDigits]]')) {
                            // a. Let n be ToRawPrecision(x, numberFormat.[[minimumSignificantDigits]], numberFormat.[[maximumSignificantDigits]]).
                            _n2 = ToRawPrecision(x, internal['[[minimumSignificantDigits]]'], internal['[[maximumSignificantDigits]]']);
                        }
                        // 3. Else,
                        else {
                                // a. Let n be ToRawFixed(x, numberFormat.[[minimumIntegerDigits]], numberFormat.[[minimumFractionDigits]], numberFormat.[[maximumFractionDigits]]).
                                _n2 = ToRawFixed(x, internal['[[minimumIntegerDigits]]'], internal['[[minimumFractionDigits]]'], internal['[[maximumFractionDigits]]']);
                            }
                        // 4. If the value of the numberFormat.[[numberingSystem]] matches one of the values in the "Numbering System" column of Table 2 below, then
                        if (numSys[nums]) {
                            (function () {
                                // a. Let digits be an array whose 10 String valued elements are the UTF-16 string representations of the 10 digits specified in the "Digits" column of the matching row in Table 2.
                                var digits = numSys[nums];
                                // a. Replace each digit in n with the value of digits[digit].
                                _n2 = String(_n2).replace(/\d/g, function (digit) {
                                    return digits[digit];
                                });
                            })();
                        }
                        // 5. Else use an implementation dependent algorithm to map n to the appropriate representation of n in the given numbering system.
                        else _n2 = String(_n2); // ###TODO###

                        var integer = void 0;
                        var fraction = void 0;
                        // 6. Let decimalSepIndex be Call(%StringProto_indexOf%, n, ".", 0).
                        var decimalSepIndex = _n2.indexOf('.', 0);
                        // 7. If decimalSepIndex > 0, then:
                        if (decimalSepIndex > 0) {
                            // a. Let integer be the substring of n from position 0, inclusive, to position decimalSepIndex, exclusive.
                            integer = _n2.substring(0, decimalSepIndex);
                            // a. Let fraction be the substring of n from position decimalSepIndex, exclusive, to the end of n.
                            fraction = _n2.substring(decimalSepIndex + 1, decimalSepIndex.length);
                        }
                        // 8. Else:
                        else {
                                // a. Let integer be n.
                                integer = _n2;
                                // a. Let fraction be undefined.
                                fraction = undefined;
                            }
                        // 9. If the value of the numberFormat.[[useGrouping]] is true,
                        if (internal['[[useGrouping]]'] === true) {
                            // a. Let groupSepSymbol be the ILND String representing the grouping separator.
                            var groupSepSymbol = ild.group;
                            // a. Let groups be a List whose elements are, in left to right order, the substrings defined by ILND set of locations within the integer.
                            var groups = [];
                            // ----> implementation:
                            // Primary group represents the group closest to the decimal
                            var pgSize = data.patterns.primaryGroupSize || 3;
                            // Secondary group is every other group
                            var sgSize = data.patterns.secondaryGroupSize || pgSize;
                            // Group only if necessary
                            if (integer.length > pgSize) {
                                // Index of the primary grouping separator
                                var end = integer.length - pgSize;
                                // Starting index for our loop
                                var idx = end % sgSize;
                                var start = integer.slice(0, idx);
                                if (start.length) arrPush.call(groups, start);
                                // Loop to separate into secondary grouping digits
                                while (idx < end) {
                                    arrPush.call(groups, integer.slice(idx, idx + sgSize));
                                    idx += sgSize;
                                }
                                // Add the primary grouping digits
                                arrPush.call(groups, integer.slice(end));
                            } else {
                                arrPush.call(groups, integer);
                            }
                            // a. Assert: The number of elements in groups List is greater than 0.
                            if (groups.length === 0) throw new Error();
                            // a. Repeat, while groups List is not empty:
                            while (groups.length) {
                                // i. Remove the first element from groups and let integerGroup be the value of that element.
                                var integerGroup = arrShift.call(groups);
                                // ii. Add new part record { [[type]]: "integer", [[value]]: integerGroup } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'integer', '[[value]]': integerGroup });
                                // iii. If groups List is not empty, then:
                                if (groups.length) {
                                    // 1. Add new part record { [[type]]: "group", [[value]]: groupSepSymbol } as a new element of the list result.
                                    arrPush.call(result, { '[[type]]': 'group', '[[value]]': groupSepSymbol });
                                }
                            }
                        }
                        // 10. Else,
                        else {
                                // a. Add new part record { [[type]]: "integer", [[value]]: integer } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'integer', '[[value]]': integer });
                            }
                        // 11. If fraction is not undefined, then:
                        if (fraction !== undefined) {
                            // a. Let decimalSepSymbol be the ILND String representing the decimal separator.
                            var decimalSepSymbol = ild.decimal;
                            // a. Add new part record { [[type]]: "decimal", [[value]]: decimalSepSymbol } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'decimal', '[[value]]': decimalSepSymbol });
                            // a. Add new part record { [[type]]: "fraction", [[value]]: fraction } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'fraction', '[[value]]': fraction });
                        }
                    }
        }
        // a. Else if p is equal "plusSign", then:
        else if (p === "plusSign") {
                // i. Let plusSignSymbol be the ILND String representing the plus sign.
                var plusSignSymbol = ild.plusSign;
                // ii. Add new part record { [[type]]: "plusSign", [[value]]: plusSignSymbol } as a new element of the list result.
                arrPush.call(result, { '[[type]]': 'plusSign', '[[value]]': plusSignSymbol });
            }
            // a. Else if p is equal "minusSign", then:
            else if (p === "minusSign") {
                    // i. Let minusSignSymbol be the ILND String representing the minus sign.
                    var minusSignSymbol = ild.minusSign;
                    // ii. Add new part record { [[type]]: "minusSign", [[value]]: minusSignSymbol } as a new element of the list result.
                    arrPush.call(result, { '[[type]]': 'minusSign', '[[value]]': minusSignSymbol });
                }
                // a. Else if p is equal "percentSign" and numberFormat.[[style]] is "percent", then:
                else if (p === "percentSign" && internal['[[style]]'] === "percent") {
                        // i. Let percentSignSymbol be the ILND String representing the percent sign.
                        var percentSignSymbol = ild.percentSign;
                        // ii. Add new part record { [[type]]: "percentSign", [[value]]: percentSignSymbol } as a new element of the list result.
                        arrPush.call(result, { '[[type]]': 'literal', '[[value]]': percentSignSymbol });
                    }
                    // a. Else if p is equal "currency" and numberFormat.[[style]] is "currency", then:
                    else if (p === "currency" && internal['[[style]]'] === "currency") {
                            // i. Let currency be the value of numberFormat.[[currency]].
                            var currency = internal['[[currency]]'];

                            var cd = void 0;

                            // ii. If numberFormat.[[currencyDisplay]] is "code", then
                            if (internal['[[currencyDisplay]]'] === "code") {
                                // 1. Let cd be currency.
                                cd = currency;
                            }
                            // iii. Else if numberFormat.[[currencyDisplay]] is "symbol", then
                            else if (internal['[[currencyDisplay]]'] === "symbol") {
                                    // 1. Let cd be an ILD string representing currency in short form. If the implementation does not have such a representation of currency, use currency itself.
                                    cd = data.currencies[currency] || currency;
                                }
                                // iv. Else if numberFormat.[[currencyDisplay]] is "name", then
                                else if (internal['[[currencyDisplay]]'] === "name") {
                                        // 1. Let cd be an ILD string representing currency in long form. If the implementation does not have such a representation of currency, then use currency itself.
                                        cd = currency;
                                    }
                            // v. Add new part record { [[type]]: "currency", [[value]]: cd } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'currency', '[[value]]': cd });
                        }
                        // a. Else,
                        else {
                                // i. Let literal be the substring of pattern from position beginIndex, inclusive, to position endIndex, inclusive.
                                var _literal = pattern.substring(beginIndex, endIndex);
                                // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'literal', '[[value]]': _literal });
                            }
        // a. Set nextIndex to endIndex + 1.
        nextIndex = endIndex + 1;
        // a. Set beginIndex to Call(%StringProto_indexOf%, pattern, "{", nextIndex)
        beginIndex = pattern.indexOf('{', nextIndex);
    }
    // 9. If nextIndex is less than length, then:
    if (nextIndex < length) {
        // a. Let literal be the substring of pattern from position nextIndex, inclusive, to position length, exclusive.
        var _literal2 = pattern.substring(nextIndex, length);
        // a. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
        arrPush.call(result, { '[[type]]': 'literal', '[[value]]': _literal2 });
    }
    // 10. Return result.
    return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumber]
 */
function FormatNumber(numberFormat, x) {
    // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
    var parts = PartitionNumberPattern(numberFormat, x);
    // 2. Let result be an empty String.
    var result = '';
    // 3. For each part in parts, do:
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        // a. Set result to a String value produced by concatenating result and part.[[value]].
        result += part['[[value]]'];
    }
    // 4. Return result.
    return result;
}

/**
 * When the ToRawPrecision abstract operation is called with arguments x (which
 * must be a finite non-negative number), minPrecision, and maxPrecision (both
 * must be integers between 1 and 21) the following steps are taken:
 */
function ToRawPrecision(x, minPrecision, maxPrecision) {
    // 1. Let p be maxPrecision.
    var p = maxPrecision;

    var m = void 0,
        e = void 0;

    // 2. If x = 0, then
    if (x === 0) {
        // a. Let m be the String consisting of p occurrences of the character "0".
        m = arrJoin.call(Array(p + 1), '0');
        // b. Let e be 0.
        e = 0;
    }
    // 3. Else
    else {
            // a. Let e and n be integers such that 10ᵖ⁻¹ ≤ n < 10ᵖ and for which the
            //    exact mathematical value of n × 10ᵉ⁻ᵖ⁺¹ – x is as close to zero as
            //    possible. If there are two such sets of e and n, pick the e and n for
            //    which n × 10ᵉ⁻ᵖ⁺¹ is larger.
            e = log10Floor(Math.abs(x));

            // Easier to get to m from here
            var f = Math.round(Math.exp(Math.abs(e - p + 1) * Math.LN10));

            // b. Let m be the String consisting of the digits of the decimal
            //    representation of n (in order, with no leading zeroes)
            m = String(Math.round(e - p + 1 < 0 ? x * f : x / f));
        }

    // 4. If e ≥ p, then
    if (e >= p)
        // a. Return the concatenation of m and e-p+1 occurrences of the character "0".
        return m + arrJoin.call(Array(e - p + 1 + 1), '0');

        // 5. If e = p-1, then
    else if (e === p - 1)
            // a. Return m.
            return m;

            // 6. If e ≥ 0, then
        else if (e >= 0)
                // a. Let m be the concatenation of the first e+1 characters of m, the character
                //    ".", and the remaining p–(e+1) characters of m.
                m = m.slice(0, e + 1) + '.' + m.slice(e + 1);

                // 7. If e < 0, then
            else if (e < 0)
                    // a. Let m be the concatenation of the String "0.", –(e+1) occurrences of the
                    //    character "0", and the string m.
                    m = '0.' + arrJoin.call(Array(-(e + 1) + 1), '0') + m;

    // 8. If m contains the character ".", and maxPrecision > minPrecision, then
    if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
        // a. Let cut be maxPrecision – minPrecision.
        var cut = maxPrecision - minPrecision;

        // b. Repeat while cut > 0 and the last character of m is "0":
        while (cut > 0 && m.charAt(m.length - 1) === '0') {
            //  i. Remove the last character from m.
            m = m.slice(0, -1);

            //  ii. Decrease cut by 1.
            cut--;
        }

        // c. If the last character of m is ".", then
        if (m.charAt(m.length - 1) === '.')
            //    i. Remove the last character from m.
            m = m.slice(0, -1);
    }
    // 9. Return m.
    return m;
}

/**
 * @spec[tc39/ecma402/master/spec/numberformat.html]
 * @clause[sec-torawfixed]
 * When the ToRawFixed abstract operation is called with arguments x (which must
 * be a finite non-negative number), minInteger (which must be an integer between
 * 1 and 21), minFraction, and maxFraction (which must be integers between 0 and
 * 20) the following steps are taken:
 */
function ToRawFixed(x, minInteger, minFraction, maxFraction) {
    // 1. Let f be maxFraction.
    var f = maxFraction;
    // 2. Let n be an integer for which the exact mathematical value of n ÷ 10f – x is as close to zero as possible. If there are two such n, pick the larger n.
    var n = Math.pow(10, f) * x; // diverging...
    // 3. If n = 0, let m be the String "0". Otherwise, let m be the String consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
    var m = n === 0 ? "0" : n.toFixed(0); // divering...

    {
        // this diversion is needed to take into consideration big numbers, e.g.:
        // 1.2344501e+37 -> 12344501000000000000000000000000000000
        var idx = void 0;
        var exp = (idx = m.indexOf('e')) > -1 ? m.slice(idx + 1) : 0;
        if (exp) {
            m = m.slice(0, idx).replace('.', '');
            m += arrJoin.call(Array(exp - (m.length - 1) + 1), '0');
        }
    }

    var int = void 0;
    // 4. If f ≠ 0, then
    if (f !== 0) {
        // a. Let k be the number of characters in m.
        var k = m.length;
        // a. If k ≤ f, then
        if (k <= f) {
            // i. Let z be the String consisting of f+1–k occurrences of the character "0".
            var z = arrJoin.call(Array(f + 1 - k + 1), '0');
            // ii. Let m be the concatenation of Strings z and m.
            m = z + m;
            // iii. Let k be f+1.
            k = f + 1;
        }
        // a. Let a be the first k–f characters of m, and let b be the remaining f characters of m.
        var a = m.substring(0, k - f),
            b = m.substring(k - f, m.length);
        // a. Let m be the concatenation of the three Strings a, ".", and b.
        m = a + "." + b;
        // a. Let int be the number of characters in a.
        int = a.length;
    }
    // 5. Else, let int be the number of characters in m.
    else int = m.length;
    // 6. Let cut be maxFraction – minFraction.
    var cut = maxFraction - minFraction;
    // 7. Repeat while cut > 0 and the last character of m is "0":
    while (cut > 0 && m.slice(-1) === "0") {
        // a. Remove the last character from m.
        m = m.slice(0, -1);
        // a. Decrease cut by 1.
        cut--;
    }
    // 8. If the last character of m is ".", then
    if (m.slice(-1) === ".") {
        // a. Remove the last character from m.
        m = m.slice(0, -1);
    }
    // 9. If int < minInteger, then
    if (int < minInteger) {
        // a. Let z be the String consisting of minInteger–int occurrences of the character "0".
        var _z = arrJoin.call(Array(minInteger - int + 1), '0');
        // a. Let m be the concatenation of Strings z and m.
        m = _z + m;
    }
    // 10. Return m.
    return m;
}

// Sect 11.3.2 Table 2, Numbering systems
// ======================================
var numSys = {
    arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
    beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
    deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
    fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
    gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
    guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
    hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
    knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
    laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
    latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
    mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
    mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
    mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
    orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
    tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
    telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
    thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
    tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
};

/**
 * This function provides access to the locale and formatting options computed
 * during initialization of the object.
 *
 * The function returns a new object whose properties and attributes are set as
 * if constructed by an object literal assigning to each of the following
 * properties the value of the corresponding internal property of this
 * NumberFormat object (see 11.4): locale, numberingSystem, style, currency,
 * currencyDisplay, minimumIntegerDigits, minimumFractionDigits,
 * maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, and
 * useGrouping. Properties whose corresponding internal properties are not present
 * are not assigned.
 */
/* 11.3.3 */defineProperty(Intl.NumberFormat.prototype, 'resolvedOptions', {
    configurable: true,
    writable: true,
    value: function value() {
        var prop = void 0,
            descs = new Record(),
            props = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

        // Satisfy test 11.3_b
        if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');

        for (var i = 0, max = props.length; i < max; i++) {
            if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
        }

        return objCreate({}, descs);
    }
});

/* jslint esnext: true */

// Match these datetime components in a CLDR pattern, except those in single quotes
var expDTComponents = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
// trim patterns after transformations
var expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
// Skip over patterns with these datetime components because we don't have data
// to back them up:
// timezone, weekday, amoung others
var unwantedDTCs = /[rqQASjJgwWIQq]/; // xXVO were removed from this list in favor of computing matches with timeZoneName values but printing as empty string

var dtKeys = ["era", "year", "month", "day", "weekday", "quarter"];
var tmKeys = ["hour", "minute", "second", "hour12", "timeZoneName"];

function isDateFormatOnly(obj) {
    for (var i = 0; i < tmKeys.length; i += 1) {
        if (obj.hasOwnProperty(tmKeys[i])) {
            return false;
        }
    }
    return true;
}

function isTimeFormatOnly(obj) {
    for (var i = 0; i < dtKeys.length; i += 1) {
        if (obj.hasOwnProperty(dtKeys[i])) {
            return false;
        }
    }
    return true;
}

function joinDateAndTimeFormats(dateFormatObj, timeFormatObj) {
    var o = { _: {} };
    for (var i = 0; i < dtKeys.length; i += 1) {
        if (dateFormatObj[dtKeys[i]]) {
            o[dtKeys[i]] = dateFormatObj[dtKeys[i]];
        }
        if (dateFormatObj._[dtKeys[i]]) {
            o._[dtKeys[i]] = dateFormatObj._[dtKeys[i]];
        }
    }
    for (var j = 0; j < tmKeys.length; j += 1) {
        if (timeFormatObj[tmKeys[j]]) {
            o[tmKeys[j]] = timeFormatObj[tmKeys[j]];
        }
        if (timeFormatObj._[tmKeys[j]]) {
            o._[tmKeys[j]] = timeFormatObj._[tmKeys[j]];
        }
    }
    return o;
}

function computeFinalPatterns(formatObj) {
    // From http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns:
    //  'In patterns, two single quotes represents a literal single quote, either
    //   inside or outside single quotes. Text within single quotes is not
    //   interpreted in any way (except for two adjacent single quotes).'
    formatObj.pattern12 = formatObj.extendedPattern.replace(/'([^']*)'/g, function ($0, literal) {
        return literal ? literal : "'";
    });

    // pattern 12 is always the default. we can produce the 24 by removing {ampm}
    formatObj.pattern = formatObj.pattern12.replace('{ampm}', '').replace(expPatternTrimmer, '');
    return formatObj;
}

function expDTComponentsMeta($0, formatObj) {
    switch ($0.charAt(0)) {
        // --- Era
        case 'G':
            formatObj.era = ['short', 'short', 'short', 'long', 'narrow'][$0.length - 1];
            return '{era}';

        // --- Year
        case 'y':
        case 'Y':
        case 'u':
        case 'U':
        case 'r':
            formatObj.year = $0.length === 2 ? '2-digit' : 'numeric';
            return '{year}';

        // --- Quarter (not supported in this polyfill)
        case 'Q':
        case 'q':
            formatObj.quarter = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
            return '{quarter}';

        // --- Month
        case 'M':
        case 'L':
            formatObj.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
            return '{month}';

        // --- Week (not supported in this polyfill)
        case 'w':
            // week of the year
            formatObj.week = $0.length === 2 ? '2-digit' : 'numeric';
            return '{weekday}';
        case 'W':
            // week of the month
            formatObj.week = 'numeric';
            return '{weekday}';

        // --- Day
        case 'd':
            // day of the month
            formatObj.day = $0.length === 2 ? '2-digit' : 'numeric';
            return '{day}';
        case 'D': // day of the year
        case 'F': // day of the week
        case 'g':
            // 1..n: Modified Julian day
            formatObj.day = 'numeric';
            return '{day}';

        // --- Week Day
        case 'E':
            // day of the week
            formatObj.weekday = ['short', 'short', 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';
        case 'e':
            // local day of the week
            formatObj.weekday = ['numeric', '2-digit', 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';
        case 'c':
            // stand alone local day of the week
            formatObj.weekday = ['numeric', undefined, 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';

        // --- Period
        case 'a': // AM, PM
        case 'b': // am, pm, noon, midnight
        case 'B':
            // flexible day periods
            formatObj.hour12 = true;
            return '{ampm}';

        // --- Hour
        case 'h':
        case 'H':
            formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
            return '{hour}';
        case 'k':
        case 'K':
            formatObj.hour12 = true; // 12-hour-cycle time formats (using h or K)
            formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
            return '{hour}';

        // --- Minute
        case 'm':
            formatObj.minute = $0.length === 2 ? '2-digit' : 'numeric';
            return '{minute}';

        // --- Second
        case 's':
            formatObj.second = $0.length === 2 ? '2-digit' : 'numeric';
            return '{second}';
        case 'S':
        case 'A':
            formatObj.second = 'numeric';
            return '{second}';

        // --- Timezone
        case 'z': // 1..3, 4: specific non-location format
        case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
        case 'O': // 1, 4: miliseconds in day short, long
        case 'v': // 1, 4: generic non-location format
        case 'V': // 1, 2, 3, 4: time zone ID or city
        case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
        case 'x':
            // 1, 2, 3, 4: The ISO8601 varios formats
            // this polyfill only supports much, for now, we are just doing something dummy
            formatObj.timeZoneName = $0.length < 4 ? 'short' : 'long';
            return '{timeZoneName}';
    }
}

/**
 * Converts the CLDR availableFormats into the objects and patterns required by
 * the ECMAScript Internationalization API specification.
 */
function createDateTimeFormat(skeleton, pattern) {
    // we ignore certain patterns that are unsupported to avoid this expensive op.
    if (unwantedDTCs.test(pattern)) return undefined;

    var formatObj = {
        originalPattern: pattern,
        _: {}
    };

    // Replace the pattern string with the one required by the specification, whilst
    // at the same time evaluating it for the subsets and formats
    formatObj.extendedPattern = pattern.replace(expDTComponents, function ($0) {
        // See which symbol we're dealing with
        return expDTComponentsMeta($0, formatObj._);
    });

    // Match the skeleton string with the one required by the specification
    // this implementation is based on the Date Field Symbol Table:
    // http://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
    // Note: we are adding extra data to the formatObject even though this polyfill
    //       might not support it.
    skeleton.replace(expDTComponents, function ($0) {
        // See which symbol we're dealing with
        return expDTComponentsMeta($0, formatObj);
    });

    return computeFinalPatterns(formatObj);
}

/**
 * Processes DateTime formats from CLDR to an easier-to-parse format.
 * the result of this operation should be cached the first time a particular
 * calendar is analyzed.
 *
 * The specification requires we support at least the following subsets of
 * date/time components:
 *
 *   - 'weekday', 'year', 'month', 'day', 'hour', 'minute', 'second'
 *   - 'weekday', 'year', 'month', 'day'
 *   - 'year', 'month', 'day'
 *   - 'year', 'month'
 *   - 'month', 'day'
 *   - 'hour', 'minute', 'second'
 *   - 'hour', 'minute'
 *
 * We need to cherry pick at least these subsets from the CLDR data and convert
 * them into the pattern objects used in the ECMA-402 API.
 */
function createDateTimeFormats(formats) {
    var availableFormats = formats.availableFormats;
    var timeFormats = formats.timeFormats;
    var dateFormats = formats.dateFormats;
    var result = [];
    var skeleton = void 0,
        pattern = void 0,
        computed = void 0,
        i = void 0,
        j = void 0;
    var timeRelatedFormats = [];
    var dateRelatedFormats = [];

    // Map available (custom) formats into a pattern for createDateTimeFormats
    for (skeleton in availableFormats) {
        if (availableFormats.hasOwnProperty(skeleton)) {
            pattern = availableFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                // in some cases, the format is only displaying date specific props
                // or time specific props, in which case we need to also produce the
                // combined formats.
                if (isDateFormatOnly(computed)) {
                    dateRelatedFormats.push(computed);
                } else if (isTimeFormatOnly(computed)) {
                    timeRelatedFormats.push(computed);
                }
            }
        }
    }

    // Map time formats into a pattern for createDateTimeFormats
    for (skeleton in timeFormats) {
        if (timeFormats.hasOwnProperty(skeleton)) {
            pattern = timeFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                timeRelatedFormats.push(computed);
            }
        }
    }

    // Map date formats into a pattern for createDateTimeFormats
    for (skeleton in dateFormats) {
        if (dateFormats.hasOwnProperty(skeleton)) {
            pattern = dateFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                dateRelatedFormats.push(computed);
            }
        }
    }

    // combine custom time and custom date formats when they are orthogonals to complete the
    // formats supported by CLDR.
    // This Algo is based on section "Missing Skeleton Fields" from:
    // http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
    for (i = 0; i < timeRelatedFormats.length; i += 1) {
        for (j = 0; j < dateRelatedFormats.length; j += 1) {
            if (dateRelatedFormats[j].month === 'long') {
                pattern = dateRelatedFormats[j].weekday ? formats.full : formats.long;
            } else if (dateRelatedFormats[j].month === 'short') {
                pattern = formats.medium;
            } else {
                pattern = formats.short;
            }
            computed = joinDateAndTimeFormats(dateRelatedFormats[j], timeRelatedFormats[i]);
            computed.originalPattern = pattern;
            computed.extendedPattern = pattern.replace('{0}', timeRelatedFormats[i].extendedPattern).replace('{1}', dateRelatedFormats[j].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, '');
            result.push(computeFinalPatterns(computed));
        }
    }

    return result;
}

// this represents the exceptions of the rule that are not covered by CLDR availableFormats
// for single property configurations, they play no role when using multiple properties, and
// those that are not in this table, are not exceptions or are not covered by the data we
// provide.
var validSyntheticProps = {
    second: {
        numeric: 's',
        '2-digit': 'ss'
    },
    minute: {
        numeric: 'm',
        '2-digit': 'mm'
    },
    year: {
        numeric: 'y',
        '2-digit': 'yy'
    },
    day: {
        numeric: 'd',
        '2-digit': 'dd'
    },
    month: {
        numeric: 'L',
        '2-digit': 'LL',
        narrow: 'LLLLL',
        short: 'LLL',
        long: 'LLLL'
    },
    weekday: {
        narrow: 'ccccc',
        short: 'ccc',
        long: 'cccc'
    }
};

function generateSyntheticFormat(propName, propValue) {
    if (validSyntheticProps[propName] && validSyntheticProps[propName][propValue]) {
        var _ref2;

        return _ref2 = {
            originalPattern: validSyntheticProps[propName][propValue],
            _: defineProperty$1({}, propName, propValue),
            extendedPattern: "{" + propName + "}"
        }, defineProperty$1(_ref2, propName, propValue), defineProperty$1(_ref2, "pattern12", "{" + propName + "}"), defineProperty$1(_ref2, "pattern", "{" + propName + "}"), _ref2;
    }
}

// An object map of date component keys, saves using a regex later
var dateWidths = objCreate(null, { narrow: {}, short: {}, long: {} });

/**
 * Returns a string for a date component, resolved using multiple inheritance as specified
 * as specified in the Unicode Technical Standard 35.
 */
function resolveDateString(data, ca, component, width, key) {
    // From http://www.unicode.org/reports/tr35/tr35.html#Multiple_Inheritance:
    // 'In clearly specified instances, resources may inherit from within the same locale.
    //  For example, ... the Buddhist calendar inherits from the Gregorian calendar.'
    var obj = data[ca] && data[ca][component] ? data[ca][component] : data.gregory[component],


    // "sideways" inheritance resolves strings when a key doesn't exist
    alts = {
        narrow: ['short', 'long'],
        short: ['long', 'narrow'],
        long: ['short', 'narrow']
    },


    //
    resolved = hop.call(obj, width) ? obj[width] : hop.call(obj, alts[width][0]) ? obj[alts[width][0]] : obj[alts[width][1]];

    // `key` wouldn't be specified for components 'dayPeriods'
    return key !== null ? resolved[key] : resolved;
}

// Define the DateTimeFormat constructor internally so it cannot be tainted
function DateTimeFormatConstructor() {
    var locales = arguments[0];
    var options = arguments[1];

    if (!this || this === Intl) {
        return new Intl.DateTimeFormat(locales, options);
    }
    return InitializeDateTimeFormat(toObject(this), locales, options);
}

defineProperty(Intl, 'DateTimeFormat', {
    configurable: true,
    writable: true,
    value: DateTimeFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(DateTimeFormatConstructor, 'prototype', {
    writable: false
});

/**
 * The abstract operation InitializeDateTimeFormat accepts the arguments dateTimeFormat
 * (which must be an object), locales, and options. It initializes dateTimeFormat as a
 * DateTimeFormat object.
 */
function /* 12.1.1.1 */InitializeDateTimeFormat(dateTimeFormat, locales, options) {
    // This will be a internal properties object if we're not already initialized
    var internal = getInternalProperties(dateTimeFormat);

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore();

    // 1. If dateTimeFormat has an [[initializedIntlObject]] internal property with
    //    value true, throw a TypeError exception.
    if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

    // Need this to access the `internal` object
    defineProperty(dateTimeFormat, '__getInternalProperties', {
        value: function value() {
            // NOTE: Non-standard, for internal use only
            if (arguments[0] === secret) return internal;
        }
    });

    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
    internal['[[initializedIntlObject]]'] = true;

    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
    //    abstract operation (defined in 9.2.1) with argument locales.
    var requestedLocales = CanonicalizeLocaleList(locales);

    // 4. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined below) with arguments options, "any", and "date".
    options = ToDateTimeOptions(options, 'any', 'date');

    // 5. Let opt be a new Record.
    var opt = new Record();

    // 6. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with arguments options, "localeMatcher", "string", a List
    //    containing the two String values "lookup" and "best fit", and "best fit".
    var matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

    // 7. Set opt.[[localeMatcher]] to matcher.
    opt['[[localeMatcher]]'] = matcher;

    // 8. Let DateTimeFormat be the standard built-in object that is the initial
    //    value of Intl.DateTimeFormat.
    var DateTimeFormat = internals.DateTimeFormat; // This is what we *really* need

    // 9. Let localeData be the value of the [[localeData]] internal property of
    //    DateTimeFormat.
    var localeData = DateTimeFormat['[[localeData]]'];

    // 10. Let r be the result of calling the ResolveLocale abstract operation
    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
    //      DateTimeFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
    //      internal property of DateTimeFormat, and localeData.
    var r = ResolveLocale(DateTimeFormat['[[availableLocales]]'], requestedLocales, opt, DateTimeFormat['[[relevantExtensionKeys]]'], localeData);

    // 11. Set the [[locale]] internal property of dateTimeFormat to the value of
    //     r.[[locale]].
    internal['[[locale]]'] = r['[[locale]]'];

    // 12. Set the [[calendar]] internal property of dateTimeFormat to the value of
    //     r.[[ca]].
    internal['[[calendar]]'] = r['[[ca]]'];

    // 13. Set the [[numberingSystem]] internal property of dateTimeFormat to the value of
    //     r.[[nu]].
    internal['[[numberingSystem]]'] = r['[[nu]]'];

    // The specification doesn't tell us to do this, but it's helpful later on
    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

    // 14. Let dataLocale be the value of r.[[dataLocale]].
    var dataLocale = r['[[dataLocale]]'];

    // 15. Let tz be the result of calling the [[Get]] internal method of options with
    //     argument "timeZone".
    var tz = options.timeZone;

    // 16. If tz is not undefined, then
    if (tz !== undefined) {
        // a. Let tz be ToString(tz).
        // b. Convert tz to upper case as described in 6.1.
        //    NOTE: If an implementation accepts additional time zone values, as permitted
        //          under certain conditions by the Conformance clause, different casing
        //          rules apply.
        tz = toLatinUpperCase(tz);

        // c. If tz is not "UTC", then throw a RangeError exception.
        // ###TODO: accept more time zones###
        if (tz !== 'UTC') throw new RangeError('timeZone is not supported.');
    }

    // 17. Set the [[timeZone]] internal property of dateTimeFormat to tz.
    internal['[[timeZone]]'] = tz;

    // 18. Let opt be a new Record.
    opt = new Record();

    // 19. For each row of Table 3, except the header row, do:
    for (var prop in dateTimeComponents) {
        if (!hop.call(dateTimeComponents, prop)) continue;

        // 20. Let prop be the name given in the Property column of the row.
        // 21. Let value be the result of calling the GetOption abstract operation,
        //     passing as argument options, the name given in the Property column of the
        //     row, "string", a List containing the strings given in the Values column of
        //     the row, and undefined.
        var value = GetOption(options, prop, 'string', dateTimeComponents[prop]);

        // 22. Set opt.[[<prop>]] to value.
        opt['[[' + prop + ']]'] = value;
    }

    // Assigned a value below
    var bestFormat = void 0;

    // 23. Let dataLocaleData be the result of calling the [[Get]] internal method of
    //     localeData with argument dataLocale.
    var dataLocaleData = localeData[dataLocale];

    // 24. Let formats be the result of calling the [[Get]] internal method of
    //     dataLocaleData with argument "formats".
    //     Note: we process the CLDR formats into the spec'd structure
    var formats = ToDateTimeFormats(dataLocaleData.formats);

    // 25. Let matcher be the result of calling the GetOption abstract operation with
    //     arguments options, "formatMatcher", "string", a List containing the two String
    //     values "basic" and "best fit", and "best fit".
    matcher = GetOption(options, 'formatMatcher', 'string', new List('basic', 'best fit'), 'best fit');

    // Optimization: caching the processed formats as a one time operation by
    // replacing the initial structure from localeData
    dataLocaleData.formats = formats;

    // 26. If matcher is "basic", then
    if (matcher === 'basic') {
        // 27. Let bestFormat be the result of calling the BasicFormatMatcher abstract
        //     operation (defined below) with opt and formats.
        bestFormat = BasicFormatMatcher(opt, formats);

        // 28. Else
    } else {
        {
            // diverging
            var _hr = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);
            opt.hour12 = _hr === undefined ? dataLocaleData.hour12 : _hr;
        }
        // 29. Let bestFormat be the result of calling the BestFitFormatMatcher
        //     abstract operation (defined below) with opt and formats.
        bestFormat = BestFitFormatMatcher(opt, formats);
    }

    // 30. For each row in Table 3, except the header row, do
    for (var _prop in dateTimeComponents) {
        if (!hop.call(dateTimeComponents, _prop)) continue;

        // a. Let prop be the name given in the Property column of the row.
        // b. Let pDesc be the result of calling the [[GetOwnProperty]] internal method of
        //    bestFormat with argument prop.
        // c. If pDesc is not undefined, then
        if (hop.call(bestFormat, _prop)) {
            // i. Let p be the result of calling the [[Get]] internal method of bestFormat
            //    with argument prop.
            var p = bestFormat[_prop];
            {
                // diverging
                p = bestFormat._ && hop.call(bestFormat._, _prop) ? bestFormat._[_prop] : p;
            }

            // ii. Set the [[<prop>]] internal property of dateTimeFormat to p.
            internal['[[' + _prop + ']]'] = p;
        }
    }

    var pattern = void 0; // Assigned a value below

    // 31. Let hr12 be the result of calling the GetOption abstract operation with
    //     arguments options, "hour12", "boolean", undefined, and undefined.
    var hr12 = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);

    // 32. If dateTimeFormat has an internal property [[hour]], then
    if (internal['[[hour]]']) {
        // a. If hr12 is undefined, then let hr12 be the result of calling the [[Get]]
        //    internal method of dataLocaleData with argument "hour12".
        hr12 = hr12 === undefined ? dataLocaleData.hour12 : hr12;

        // b. Set the [[hour12]] internal property of dateTimeFormat to hr12.
        internal['[[hour12]]'] = hr12;

        // c. If hr12 is true, then
        if (hr12 === true) {
            // i. Let hourNo0 be the result of calling the [[Get]] internal method of
            //    dataLocaleData with argument "hourNo0".
            var hourNo0 = dataLocaleData.hourNo0;

            // ii. Set the [[hourNo0]] internal property of dateTimeFormat to hourNo0.
            internal['[[hourNo0]]'] = hourNo0;

            // iii. Let pattern be the result of calling the [[Get]] internal method of
            //      bestFormat with argument "pattern12".
            pattern = bestFormat.pattern12;
        }

        // d. Else
        else
            // i. Let pattern be the result of calling the [[Get]] internal method of
            //    bestFormat with argument "pattern".
            pattern = bestFormat.pattern;
    }

    // 33. Else
    else
        // a. Let pattern be the result of calling the [[Get]] internal method of
        //    bestFormat with argument "pattern".
        pattern = bestFormat.pattern;

    // 34. Set the [[pattern]] internal property of dateTimeFormat to pattern.
    internal['[[pattern]]'] = pattern;

    // 35. Set the [[boundFormat]] internal property of dateTimeFormat to undefined.
    internal['[[boundFormat]]'] = undefined;

    // 36. Set the [[initializedDateTimeFormat]] internal property of dateTimeFormat to
    //     true.
    internal['[[initializedDateTimeFormat]]'] = true;

    // In ES3, we need to pre-bind the format() function
    if (es3) dateTimeFormat.format = GetFormatDateTime.call(dateTimeFormat);

    // Restore the RegExp properties
    regexpRestore();

    // Return the newly initialised object
    return dateTimeFormat;
}

/**
 * Several DateTimeFormat algorithms use values from the following table, which provides
 * property names and allowable values for the components of date and time formats:
 */
var dateTimeComponents = {
    weekday: ["narrow", "short", "long"],
    era: ["narrow", "short", "long"],
    year: ["2-digit", "numeric"],
    month: ["2-digit", "numeric", "narrow", "short", "long"],
    day: ["2-digit", "numeric"],
    hour: ["2-digit", "numeric"],
    minute: ["2-digit", "numeric"],
    second: ["2-digit", "numeric"],
    timeZoneName: ["short", "long"]
};

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeFormats(formats) {
    if (Object.prototype.toString.call(formats) === '[object Array]') {
        return formats;
    }
    return createDateTimeFormats(formats);
}

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeOptions(options, required, defaults) {
    // 1. If options is undefined, then let options be null, else let options be
    //    ToObject(options).
    if (options === undefined) options = null;else {
        // (#12) options needs to be a Record, but it also needs to inherit properties
        var opt2 = toObject(options);
        options = new Record();

        for (var k in opt2) {
            options[k] = opt2[k];
        }
    }

    // 2. Let create be the standard built-in function object defined in ES5, 15.2.3.5.
    var create = objCreate;

    // 3. Let options be the result of calling the [[Call]] internal method of create with
    //    undefined as the this value and an argument list containing the single item
    //    options.
    options = create(options);

    // 4. Let needDefaults be true.
    var needDefaults = true;

    // 5. If required is "date" or "any", then
    if (required === 'date' || required === 'any') {
        // a. For each of the property names "weekday", "year", "month", "day":
        // i. If the result of calling the [[Get]] internal method of options with the
        //    property name is not undefined, then let needDefaults be false.
        if (options.weekday !== undefined || options.year !== undefined || options.month !== undefined || options.day !== undefined) needDefaults = false;
    }

    // 6. If required is "time" or "any", then
    if (required === 'time' || required === 'any') {
        // a. For each of the property names "hour", "minute", "second":
        // i. If the result of calling the [[Get]] internal method of options with the
        //    property name is not undefined, then let needDefaults be false.
        if (options.hour !== undefined || options.minute !== undefined || options.second !== undefined) needDefaults = false;
    }

    // 7. If needDefaults is true and defaults is either "date" or "all", then
    if (needDefaults && (defaults === 'date' || defaults === 'all'))
        // a. For each of the property names "year", "month", "day":
        // i. Call the [[DefineOwnProperty]] internal method of options with the
        //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
        //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
        options.year = options.month = options.day = 'numeric';

    // 8. If needDefaults is true and defaults is either "time" or "all", then
    if (needDefaults && (defaults === 'time' || defaults === 'all'))
        // a. For each of the property names "hour", "minute", "second":
        // i. Call the [[DefineOwnProperty]] internal method of options with the
        //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
        //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
        options.hour = options.minute = options.second = 'numeric';

    // 9. Return options.
    return options;
}

/**
 * When the BasicFormatMatcher abstract operation is called with two arguments options and
 * formats, the following steps are taken:
 */
function BasicFormatMatcher(options, formats) {
    // 1. Let removalPenalty be 120.
    var removalPenalty = 120;

    // 2. Let additionPenalty be 20.
    var additionPenalty = 20;

    // 3. Let longLessPenalty be 8.
    var longLessPenalty = 8;

    // 4. Let longMorePenalty be 6.
    var longMorePenalty = 6;

    // 5. Let shortLessPenalty be 6.
    var shortLessPenalty = 6;

    // 6. Let shortMorePenalty be 3.
    var shortMorePenalty = 3;

    // 7. Let bestScore be -Infinity.
    var bestScore = -Infinity;

    // 8. Let bestFormat be undefined.
    var bestFormat = void 0;

    // 9. Let i be 0.
    var i = 0;

    // 10. Assert: formats is an Array object.

    // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
    var len = formats.length;

    // 12. Repeat while i < len:
    while (i < len) {
        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
        var format = formats[i];

        // b. Let score be 0.
        var score = 0;

        // c. For each property shown in Table 3:
        for (var property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, property)) continue;

            // i. Let optionsProp be options.[[<property>]].
            var optionsProp = options['[[' + property + ']]'];

            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
            //     with argument property.
            // iii. If formatPropDesc is not undefined, then
            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
            var formatProp = hop.call(format, property) ? format[property] : undefined;

            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
            //     additionPenalty.
            if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
            //    removalPenalty.
            else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

                // vi. Else
                else {
                        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
                        //    "long"].
                        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

                        // 2. Let optionsPropIndex be the index of optionsProp within values.
                        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

                        // 3. Let formatPropIndex be the index of formatProp within values.
                        var formatPropIndex = arrIndexOf.call(values, formatProp);

                        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
                        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

                        // 5. If delta = 2, decrease score by longMorePenalty.
                        if (delta === 2) score -= longMorePenalty;

                        // 6. Else if delta = 1, decrease score by shortMorePenalty.
                        else if (delta === 1) score -= shortMorePenalty;

                            // 7. Else if delta = -1, decrease score by shortLessPenalty.
                            else if (delta === -1) score -= shortLessPenalty;

                                // 8. Else if delta = -2, decrease score by longLessPenalty.
                                else if (delta === -2) score -= longLessPenalty;
                    }
        }

        // d. If score > bestScore, then
        if (score > bestScore) {
            // i. Let bestScore be score.
            bestScore = score;

            // ii. Let bestFormat be format.
            bestFormat = format;
        }

        // e. Increase i by 1.
        i++;
    }

    // 13. Return bestFormat.
    return bestFormat;
}

/**
 * When the BestFitFormatMatcher abstract operation is called with two arguments options
 * and formats, it performs implementation dependent steps, which should return a set of
 * component representations that a typical user of the selected locale would perceive as
 * at least as good as the one returned by BasicFormatMatcher.
 *
 * This polyfill defines the algorithm to be the same as BasicFormatMatcher,
 * with the addition of bonus points awarded where the requested format is of
 * the same data type as the potentially matching format.
 *
 * This algo relies on the concept of closest distance matching described here:
 * http://unicode.org/reports/tr35/tr35-dates.html#Matching_Skeletons
 * Typically a “best match” is found using a closest distance match, such as:
 *
 * Symbols requesting a best choice for the locale are replaced.
 *      j → one of {H, k, h, K}; C → one of {a, b, B}
 * -> Covered by cldr.js matching process
 *
 * For fields with symbols representing the same type (year, month, day, etc):
 *     Most symbols have a small distance from each other.
 *         M ≅ L; E ≅ c; a ≅ b ≅ B; H ≅ k ≅ h ≅ K; ...
 *     -> Covered by cldr.js matching process
 *
 *     Width differences among fields, other than those marking text vs numeric, are given small distance from each other.
 *         MMM ≅ MMMM
 *         MM ≅ M
 *     Numeric and text fields are given a larger distance from each other.
 *         MMM ≈ MM
 *     Symbols representing substantial differences (week of year vs week of month) are given much larger a distances from each other.
 *         d ≋ D; ...
 *     Missing or extra fields cause a match to fail. (But see Missing Skeleton Fields).
 *
 *
 * For example,
 *
 *     { month: 'numeric', day: 'numeric' }
 *
 * should match
 *
 *     { month: '2-digit', day: '2-digit' }
 *
 * rather than
 *
 *     { month: 'short', day: 'numeric' }
 *
 * This makes sense because a user requesting a formatted date with numeric parts would
 * not expect to see the returned format containing narrow, short or long part names
 */
function BestFitFormatMatcher(options, formats) {
    /** Diverging: this block implements the hack for single property configuration, eg.:
     *
     *      `new Intl.DateTimeFormat('en', {day: 'numeric'})`
     *
     * should produce a single digit with the day of the month. This is needed because
     * CLDR `availableFormats` data structure doesn't cover these cases.
     */
    {
        var optionsPropNames = [];
        for (var property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, property)) continue;

            if (options['[[' + property + ']]'] !== undefined) {
                optionsPropNames.push(property);
            }
        }
        if (optionsPropNames.length === 1) {
            var _bestFormat = generateSyntheticFormat(optionsPropNames[0], options['[[' + optionsPropNames[0] + ']]']);
            if (_bestFormat) {
                return _bestFormat;
            }
        }
    }

    // 1. Let removalPenalty be 120.
    var removalPenalty = 120;

    // 2. Let additionPenalty be 20.
    var additionPenalty = 20;

    // 3. Let longLessPenalty be 8.
    var longLessPenalty = 8;

    // 4. Let longMorePenalty be 6.
    var longMorePenalty = 6;

    // 5. Let shortLessPenalty be 6.
    var shortLessPenalty = 6;

    // 6. Let shortMorePenalty be 3.
    var shortMorePenalty = 3;

    var patternPenalty = 2;

    var hour12Penalty = 1;

    // 7. Let bestScore be -Infinity.
    var bestScore = -Infinity;

    // 8. Let bestFormat be undefined.
    var bestFormat = void 0;

    // 9. Let i be 0.
    var i = 0;

    // 10. Assert: formats is an Array object.

    // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
    var len = formats.length;

    // 12. Repeat while i < len:
    while (i < len) {
        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
        var format = formats[i];

        // b. Let score be 0.
        var score = 0;

        // c. For each property shown in Table 3:
        for (var _property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, _property)) continue;

            // i. Let optionsProp be options.[[<property>]].
            var optionsProp = options['[[' + _property + ']]'];

            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
            //     with argument property.
            // iii. If formatPropDesc is not undefined, then
            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
            var formatProp = hop.call(format, _property) ? format[_property] : undefined;

            // Diverging: using the default properties produced by the pattern/skeleton
            // to match it with user options, and apply a penalty
            var patternProp = hop.call(format._, _property) ? format._[_property] : undefined;
            if (optionsProp !== patternProp) {
                score -= patternPenalty;
            }

            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
            //     additionPenalty.
            if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
            //    removalPenalty.
            else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

                // vi. Else
                else {
                        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
                        //    "long"].
                        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

                        // 2. Let optionsPropIndex be the index of optionsProp within values.
                        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

                        // 3. Let formatPropIndex be the index of formatProp within values.
                        var formatPropIndex = arrIndexOf.call(values, formatProp);

                        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
                        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

                        {
                            // diverging from spec
                            // When the bestFit argument is true, subtract additional penalty where data types are not the same
                            if (formatPropIndex <= 1 && optionsPropIndex >= 2 || formatPropIndex >= 2 && optionsPropIndex <= 1) {
                                // 5. If delta = 2, decrease score by longMorePenalty.
                                if (delta > 0) score -= longMorePenalty;else if (delta < 0) score -= longLessPenalty;
                            } else {
                                // 5. If delta = 2, decrease score by longMorePenalty.
                                if (delta > 1) score -= shortMorePenalty;else if (delta < -1) score -= shortLessPenalty;
                            }
                        }
                    }
        }

        {
            // diverging to also take into consideration differences between 12 or 24 hours
            // which is special for the best fit only.
            if (format._.hour12 !== options.hour12) {
                score -= hour12Penalty;
            }
        }

        // d. If score > bestScore, then
        if (score > bestScore) {
            // i. Let bestScore be score.
            bestScore = score;
            // ii. Let bestFormat be format.
            bestFormat = format;
        }

        // e. Increase i by 1.
        i++;
    }

    // 13. Return bestFormat.
    return bestFormat;
}

/* 12.2.3 */internals.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.DateTimeFormat is called, the
 * following steps are taken:
 */
/* 12.2.2 */
defineProperty(Intl.DateTimeFormat, 'supportedLocalesOf', {
    configurable: true,
    writable: true,
    value: fnBind.call(function (locales) {
        // Bound functions only have the `this` value altered if being used as a constructor,
        // this lets us imitate a native function that has no constructor
        if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

        // Create an object whose props can be used to restore the values of RegExp props
        var regexpRestore = createRegExpRestore(),


        // 1. If options is not provided, then let options be undefined.
        options = arguments[1],


        // 2. Let availableLocales be the value of the [[availableLocales]] internal
        //    property of the standard built-in object that is the initial value of
        //    Intl.NumberFormat.

        availableLocales = this['[[availableLocales]]'],


        // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
        //    abstract operation (defined in 9.2.1) with argument locales.
        requestedLocales = CanonicalizeLocaleList(locales);

        // Restore the RegExp properties
        regexpRestore();

        // 4. Return the result of calling the SupportedLocales abstract operation
        //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
        //    and options.
        return SupportedLocales(availableLocales, requestedLocales, options);
    }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * DateTimeFormat object.
 */
/* 12.3.2 */defineProperty(Intl.DateTimeFormat.prototype, 'format', {
    configurable: true,
    get: GetFormatDateTime
});

function GetFormatDateTime() {
    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 12.3_b
    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');

    // The value of the [[Get]] attribute is a function that takes the following
    // steps:

    // 1. If the [[boundFormat]] internal property of this DateTimeFormat object
    //    is undefined, then:
    if (internal['[[boundFormat]]'] === undefined) {
        // a. Let F be a Function object, with internal properties set as
        //    specified for built-in functions in ES5, 15, or successor, and the
        //    length property set to 0, that takes the argument date and
        //    performs the following steps:
        var F = function F() {
            var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            //   i. If date is not provided or is undefined, then let x be the
            //      result as if by the expression Date.now() where Date.now is
            //      the standard built-in function defined in ES5, 15.9.4.4.
            //  ii. Else let x be ToNumber(date).
            // iii. Return the result of calling the FormatDateTime abstract
            //      operation (defined below) with arguments this and x.
            var x = date === undefined ? Date.now() : toNumber(date);
            return FormatDateTime(this, x);
        };
        // b. Let bind be the standard built-in function object defined in ES5,
        //    15.3.4.5.
        // c. Let bf be the result of calling the [[Call]] internal method of
        //    bind with F as the this value and an argument list containing
        //    the single item this.
        var bf = fnBind.call(F, this);
        // d. Set the [[boundFormat]] internal property of this NumberFormat
        //    object to bf.
        internal['[[boundFormat]]'] = bf;
    }
    // Return the value of the [[boundFormat]] internal property of this
    // NumberFormat object.
    return internal['[[boundFormat]]'];
}

function formatToParts$1() {
    var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.');

    var x = date === undefined ? Date.now() : toNumber(date);
    return FormatToPartsDateTime(this, x);
}

Object.defineProperty(Intl.DateTimeFormat.prototype, 'formatToParts', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: formatToParts$1
});

function CreateDateTimeParts(dateTimeFormat, x) {
    // 1. If x is not a finite Number, then throw a RangeError exception.
    if (!isFinite(x)) throw new RangeError('Invalid valid date passed to format');

    var internal = dateTimeFormat.__getInternalProperties(secret);

    // Creating restore point for properties on the RegExp object... please wait
    /* let regexpRestore = */createRegExpRestore(); // ###TODO: review this

    // 2. Let locale be the value of the [[locale]] internal property of dateTimeFormat.
    var locale = internal['[[locale]]'];

    // 3. Let nf be the result of creating a new NumberFormat object as if by the
    // expression new Intl.NumberFormat([locale], {useGrouping: false}) where
    // Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
    var nf = new Intl.NumberFormat([locale], { useGrouping: false });

    // 4. Let nf2 be the result of creating a new NumberFormat object as if by the
    // expression new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping:
    // false}) where Intl.NumberFormat is the standard built-in constructor defined in
    // 11.1.3.
    var nf2 = new Intl.NumberFormat([locale], { minimumIntegerDigits: 2, useGrouping: false });

    // 5. Let tm be the result of calling the ToLocalTime abstract operation (defined
    // below) with x, the value of the [[calendar]] internal property of dateTimeFormat,
    // and the value of the [[timeZone]] internal property of dateTimeFormat.
    var tm = ToLocalTime(x, internal['[[calendar]]'], internal['[[timeZone]]']);

    // 6. Let result be the value of the [[pattern]] internal property of dateTimeFormat.
    var pattern = internal['[[pattern]]'];

    // 7.
    var result = new List();

    // 8.
    var index = 0;

    // 9.
    var beginIndex = pattern.indexOf('{');

    // 10.
    var endIndex = 0;

    // Need the locale minus any extensions
    var dataLocale = internal['[[dataLocale]]'];

    // Need the calendar data from CLDR
    var localeData = internals.DateTimeFormat['[[localeData]]'][dataLocale].calendars;
    var ca = internal['[[calendar]]'];

    // 11.
    while (beginIndex !== -1) {
        var fv = void 0;
        // a.
        endIndex = pattern.indexOf('}', beginIndex);
        // b.
        if (endIndex === -1) {
            throw new Error('Unclosed pattern');
        }
        // c.
        if (beginIndex > index) {
            arrPush.call(result, {
                type: 'literal',
                value: pattern.substring(index, beginIndex)
            });
        }
        // d.
        var p = pattern.substring(beginIndex + 1, endIndex);
        // e.
        if (dateTimeComponents.hasOwnProperty(p)) {
            //   i. Let f be the value of the [[<p>]] internal property of dateTimeFormat.
            var f = internal['[[' + p + ']]'];
            //  ii. Let v be the value of tm.[[<p>]].
            var v = tm['[[' + p + ']]'];
            // iii. If p is "year" and v ≤ 0, then let v be 1 - v.
            if (p === 'year' && v <= 0) {
                v = 1 - v;
            }
            //  iv. If p is "month", then increase v by 1.
            else if (p === 'month') {
                    v++;
                }
                //   v. If p is "hour" and the value of the [[hour12]] internal property of
                //      dateTimeFormat is true, then
                else if (p === 'hour' && internal['[[hour12]]'] === true) {
                        // 1. Let v be v modulo 12.
                        v = v % 12;
                        // 2. If v is 0 and the value of the [[hourNo0]] internal property of
                        //    dateTimeFormat is true, then let v be 12.
                        if (v === 0 && internal['[[hourNo0]]'] === true) {
                            v = 12;
                        }
                    }

            //  vi. If f is "numeric", then
            if (f === 'numeric') {
                // 1. Let fv be the result of calling the FormatNumber abstract operation
                //    (defined in 11.3.2) with arguments nf and v.
                fv = FormatNumber(nf, v);
            }
            // vii. Else if f is "2-digit", then
            else if (f === '2-digit') {
                    // 1. Let fv be the result of calling the FormatNumber abstract operation
                    //    with arguments nf2 and v.
                    fv = FormatNumber(nf2, v);
                    // 2. If the length of fv is greater than 2, let fv be the substring of fv
                    //    containing the last two characters.
                    if (fv.length > 2) {
                        fv = fv.slice(-2);
                    }
                }
                // viii. Else if f is "narrow", "short", or "long", then let fv be a String
                //     value representing f in the desired form; the String value depends upon
                //     the implementation and the effective locale and calendar of
                //     dateTimeFormat. If p is "month", then the String value may also depend
                //     on whether dateTimeFormat has a [[day]] internal property. If p is
                //     "timeZoneName", then the String value may also depend on the value of
                //     the [[inDST]] field of tm.
                else if (f in dateWidths) {
                        switch (p) {
                            case 'month':
                                fv = resolveDateString(localeData, ca, 'months', f, tm['[[' + p + ']]']);
                                break;

                            case 'weekday':
                                try {
                                    fv = resolveDateString(localeData, ca, 'days', f, tm['[[' + p + ']]']);
                                    // fv = resolveDateString(ca.days, f)[tm['[['+ p +']]']];
                                } catch (e) {
                                    throw new Error('Could not find weekday data for locale ' + locale);
                                }
                                break;

                            case 'timeZoneName':
                                fv = ''; // ###TODO
                                break;

                            case 'era':
                                try {
                                    fv = resolveDateString(localeData, ca, 'eras', f, tm['[[' + p + ']]']);
                                } catch (e) {
                                    throw new Error('Could not find era data for locale ' + locale);
                                }
                                break;

                            default:
                                fv = tm['[[' + p + ']]'];
                        }
                    }
            // ix
            arrPush.call(result, {
                type: p,
                value: fv
            });
            // f.
        } else if (p === 'ampm') {
            // i.
            var _v = tm['[[hour]]'];
            // ii./iii.
            fv = resolveDateString(localeData, ca, 'dayPeriods', _v > 11 ? 'pm' : 'am', null);
            // iv.
            arrPush.call(result, {
                type: 'dayPeriod',
                value: fv
            });
            // g.
        } else {
            arrPush.call(result, {
                type: 'literal',
                value: pattern.substring(beginIndex, endIndex + 1)
            });
        }
        // h.
        index = endIndex + 1;
        // i.
        beginIndex = pattern.indexOf('{', index);
    }
    // 12.
    if (endIndex < pattern.length - 1) {
        arrPush.call(result, {
            type: 'literal',
            value: pattern.substr(endIndex + 1)
        });
    }
    // 13.
    return result;
}

/**
 * When the FormatDateTime abstract operation is called with arguments dateTimeFormat
 * (which must be an object initialized as a DateTimeFormat) and x (which must be a Number
 * value), it returns a String value representing x (interpreted as a time value as
 * specified in ES5, 15.9.1.1) according to the effective locale and the formatting
 * options of dateTimeFormat.
 */
function FormatDateTime(dateTimeFormat, x) {
    var parts = CreateDateTimeParts(dateTimeFormat, x);
    var result = '';

    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        result += part.value;
    }
    return result;
}

function FormatToPartsDateTime(dateTimeFormat, x) {
    var parts = CreateDateTimeParts(dateTimeFormat, x);
    var result = [];
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        result.push({
            type: part.type,
            value: part.value
        });
    }
    return result;
}

/**
 * When the ToLocalTime abstract operation is called with arguments date, calendar, and
 * timeZone, the following steps are taken:
 */
function ToLocalTime(date, calendar, timeZone) {
    // 1. Apply calendrical calculations on date for the given calendar and time zone to
    //    produce weekday, era, year, month, day, hour, minute, second, and inDST values.
    //    The calculations should use best available information about the specified
    //    calendar and time zone. If the calendar is "gregory", then the calculations must
    //    match the algorithms specified in ES5, 15.9.1, except that calculations are not
    //    bound by the restrictions on the use of best available information on time zones
    //    for local time zone adjustment and daylight saving time adjustment imposed by
    //    ES5, 15.9.1.7 and 15.9.1.8.
    // ###TODO###
    var d = new Date(date),
        m = 'get' + (timeZone || '');

    // 2. Return a Record with fields [[weekday]], [[era]], [[year]], [[month]], [[day]],
    //    [[hour]], [[minute]], [[second]], and [[inDST]], each with the corresponding
    //    calculated value.
    return new Record({
        '[[weekday]]': d[m + 'Day'](),
        '[[era]]': +(d[m + 'FullYear']() >= 0),
        '[[year]]': d[m + 'FullYear'](),
        '[[month]]': d[m + 'Month'](),
        '[[day]]': d[m + 'Date'](),
        '[[hour]]': d[m + 'Hours'](),
        '[[minute]]': d[m + 'Minutes'](),
        '[[second]]': d[m + 'Seconds'](),
        '[[inDST]]': false // ###TODO###
    });
}

/**
 * The function returns a new object whose properties and attributes are set as if
 * constructed by an object literal assigning to each of the following properties the
 * value of the corresponding internal property of this DateTimeFormat object (see 12.4):
 * locale, calendar, numberingSystem, timeZone, hour12, weekday, era, year, month, day,
 * hour, minute, second, and timeZoneName. Properties whose corresponding internal
 * properties are not present are not assigned.
 */
/* 12.3.3 */defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
    writable: true,
    configurable: true,
    value: function value() {
        var prop = void 0,
            descs = new Record(),
            props = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
            internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

        // Satisfy test 12.3_b
        if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');

        for (var i = 0, max = props.length; i < max; i++) {
            if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
        }

        return objCreate({}, descs);
    }
});

var ls = Intl.__localeSensitiveProtos = {
    Number: {},
    Date: {}
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.2.1 */ls.Number.toLocaleString = function () {
    // Satisfy test 13.2.1_1
    if (Object.prototype.toString.call(this) !== '[object Number]') throw new TypeError('`this` value must be a number for Number.prototype.toLocaleString()');

    // 1. Let x be this Number value (as defined in ES5, 15.7.4).
    // 2. If locales is not provided, then let locales be undefined.
    // 3. If options is not provided, then let options be undefined.
    // 4. Let numberFormat be the result of creating a new object as if by the
    //    expression new Intl.NumberFormat(locales, options) where
    //    Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
    // 5. Return the result of calling the FormatNumber abstract operation
    //    (defined in 11.3.2) with arguments numberFormat and x.
    return FormatNumber(new NumberFormatConstructor(arguments[0], arguments[1]), this);
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.3.1 */ls.Date.toLocaleString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0];

    // 4. If options is not provided, then let options be undefined.
    var options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "any", and "all".
    options = ToDateTimeOptions(options, 'any', 'all');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleDateString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.2 */ls.Date.toLocaleDateString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0],


    // 4. If options is not provided, then let options be undefined.
    options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "date", and "date".
    options = ToDateTimeOptions(options, 'date', 'date');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleTimeString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.3 */ls.Date.toLocaleTimeString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0];

    // 4. If options is not provided, then let options be undefined.
    var options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "time", and "time".
    options = ToDateTimeOptions(options, 'time', 'time');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

defineProperty(Intl, '__applyLocaleSensitivePrototypes', {
    writable: true,
    configurable: true,
    value: function value() {
        defineProperty(Number.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Number.toLocaleString });
        // Need this here for IE 8, to avoid the _DontEnum_ bug
        defineProperty(Date.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Date.toLocaleString });

        for (var k in ls.Date) {
            if (hop.call(ls.Date, k)) defineProperty(Date.prototype, k, { writable: true, configurable: true, value: ls.Date[k] });
        }
    }
});

/**
 * Can't really ship a single script with data for hundreds of locales, so we provide
 * this __addLocaleData method as a means for the developer to add the data on an
 * as-needed basis
 */
defineProperty(Intl, '__addLocaleData', {
    value: function value(data) {
        if (!IsStructurallyValidLanguageTag(data.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag");

        addLocaleData(data, data.locale);
    }
});

function addLocaleData(data, tag) {
    // Both NumberFormat and DateTimeFormat require number data, so throw if it isn't present
    if (!data.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");

    var locale = void 0,
        locales = [tag],
        parts = tag.split('-');

    // Create fallbacks for locale data with scripts, e.g. Latn, Hans, Vaii, etc
    if (parts.length > 2 && parts[1].length === 4) arrPush.call(locales, parts[0] + '-' + parts[2]);

    while (locale = arrShift.call(locales)) {
        // Add to NumberFormat internal properties as per 11.2.3
        arrPush.call(internals.NumberFormat['[[availableLocales]]'], locale);
        internals.NumberFormat['[[localeData]]'][locale] = data.number;

        // ...and DateTimeFormat internal properties as per 12.2.3
        if (data.date) {
            data.date.nu = data.number.nu;
            arrPush.call(internals.DateTimeFormat['[[availableLocales]]'], locale);
            internals.DateTimeFormat['[[localeData]]'][locale] = data.date;
        }
    }

    // If this is the first set of locale data added, make it the default
    if (defaultLocale === undefined) setDefaultLocale(tag);
}

defineProperty(Intl, '__disableRegExpRestore', {
    value: function value() {
        internals.disableRegExpRestore = true;
    }
});

module.exports = Intl;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),

/***/ 1554:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLocaleData", function() { return addLocaleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intlShape", function() { return intlShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectIntl", function() { return injectIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineMessages", function() { return defineMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntlProvider", function() { return IntlProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedDate", function() { return FormattedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedTime", function() { return FormattedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedRelative", function() { return FormattedRelative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedNumber", function() { return FormattedNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedPlural", function() { return FormattedPlural; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedMessage", function() { return FormattedMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedHTMLMessage", function() { return FormattedHTMLMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_data_index_js__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_data_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__locale_data_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intl_messageformat__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_intl_messageformat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_intl_relativeformat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_invariant__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_intl_format_cache__ = __webpack_require__(922);
/*
 * Copyright 2019, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */










// GENERATED FILE
var defaultLocaleData = { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
  }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "year-short": { "displayName": "yr.", "relative": { "0": "this yr.", "1": "next yr.", "-1": "last yr." }, "relativeTime": { "future": { "one": "in {0} yr.", "other": "in {0} yr." }, "past": { "one": "{0} yr. ago", "other": "{0} yr. ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "month-short": { "displayName": "mo.", "relative": { "0": "this mo.", "1": "next mo.", "-1": "last mo." }, "relativeTime": { "future": { "one": "in {0} mo.", "other": "in {0} mo." }, "past": { "one": "{0} mo. ago", "other": "{0} mo. ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "day-short": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "hour-short": { "displayName": "hr.", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hr.", "other": "in {0} hr." }, "past": { "one": "{0} hr. ago", "other": "{0} hr. ago" } } }, "minute": { "displayName": "minute", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "minute-short": { "displayName": "min.", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} min.", "other": "in {0} min." }, "past": { "one": "{0} min. ago", "other": "{0} min. ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } }, "second-short": { "displayName": "sec.", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} sec.", "other": "in {0} sec." }, "past": { "one": "{0} sec. ago", "other": "{0} sec. ago" } } } } };

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

function addLocaleData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var locales = Array.isArray(data) ? data : [data];

  locales.forEach(function (localeData) {
    if (localeData && localeData.locale) {
      __WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a.__addLocaleData(localeData);
      __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a.__addLocaleData(localeData);
    }
  });
}

function hasLocaleData(locale) {
  var localeParts = (locale || '').split('-');

  while (localeParts.length > 0) {
    if (hasIMFAndIRFLocaleData(localeParts.join('-'))) {
      return true;
    }

    localeParts.pop();
  }

  return false;
}

function hasIMFAndIRFLocaleData(locale) {
  var normalizedLocale = locale && locale.toLowerCase();

  return !!(__WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a.__localeData__[normalizedLocale] && __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a.__localeData__[normalizedLocale]);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var bool = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool;
var number = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number;
var string = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string;
var func = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func;
var object = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object;
var oneOf = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf;
var shape = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape;
var any = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any;
var oneOfType = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType;

var localeMatcher = oneOf(['best fit', 'lookup']);
var narrowShortLong = oneOf(['narrow', 'short', 'long']);
var numeric2digit = oneOf(['numeric', '2-digit']);
var funcReq = func.isRequired;

var intlConfigPropTypes = {
  locale: string,
  timeZone: string,
  formats: object,
  messages: object,
  textComponent: any,

  defaultLocale: string,
  defaultFormats: object,

  onError: func
};

var intlFormatPropTypes = {
  formatDate: funcReq,
  formatTime: funcReq,
  formatRelative: funcReq,
  formatNumber: funcReq,
  formatPlural: funcReq,
  formatMessage: funcReq,
  formatHTMLMessage: funcReq
};

var intlShape = shape(_extends({}, intlConfigPropTypes, intlFormatPropTypes, {
  formatters: object,
  now: funcReq
}));

var messageDescriptorPropTypes = {
  id: string.isRequired,
  description: oneOfType([string, object]),
  defaultMessage: string
};

var dateTimeFormatPropTypes = {
  localeMatcher: localeMatcher,
  formatMatcher: oneOf(['basic', 'best fit']),

  timeZone: string,
  hour12: bool,

  weekday: narrowShortLong,
  era: narrowShortLong,
  year: numeric2digit,
  month: oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
  day: numeric2digit,
  hour: numeric2digit,
  minute: numeric2digit,
  second: numeric2digit,
  timeZoneName: oneOf(['short', 'long'])
};

var numberFormatPropTypes = {
  localeMatcher: localeMatcher,

  style: oneOf(['decimal', 'currency', 'percent']),
  currency: string,
  currencyDisplay: oneOf(['symbol', 'code', 'name']),
  useGrouping: bool,

  minimumIntegerDigits: number,
  minimumFractionDigits: number,
  maximumFractionDigits: number,
  minimumSignificantDigits: number,
  maximumSignificantDigits: number
};

var relativeFormatPropTypes = {
  style: oneOf(['best fit', 'numeric']),
  units: oneOf(['second', 'minute', 'hour', 'day', 'month', 'year', 'second-short', 'minute-short', 'hour-short', 'day-short', 'month-short', 'year-short'])
};

var pluralFormatPropTypes = {
  style: oneOf(['cardinal', 'ordinal'])
};

/*
HTML escaping and shallow-equals implementations are the same as React's
(on purpose.) Therefore, it has the following Copyright and Licensing:

Copyright 2013-2014, Facebook, Inc.
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE
file in the root directory of React's source tree.
*/

var intlConfigPropNames = Object.keys(intlConfigPropTypes);

var ESCAPED_CHARS = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  "'": '&#x27;'
};

var UNSAFE_CHARS_REGEX = /[&><"']/g;

function escape(str) {
  return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
    return ESCAPED_CHARS[match];
  });
}

function filterProps(props, whitelist) {
  var defaults$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return whitelist.reduce(function (filtered, name) {
    if (props.hasOwnProperty(name)) {
      filtered[name] = props[name];
    } else if (defaults$$1.hasOwnProperty(name)) {
      filtered[name] = defaults$$1[name];
    }

    return filtered;
  }, {});
}

function invariantIntlContext() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      intl = _ref.intl;

  __WEBPACK_IMPORTED_MODULE_6_invariant___default()(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
}

function shallowEquals(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

function shouldIntlComponentUpdate(_ref2, nextProps, nextState) {
  var props = _ref2.props,
      state = _ref2.state,
      _ref2$context = _ref2.context,
      context = _ref2$context === undefined ? {} : _ref2$context;
  var nextContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _context$intl = context.intl,
      intl = _context$intl === undefined ? {} : _context$intl;
  var _nextContext$intl = nextContext.intl,
      nextIntl = _nextContext$intl === undefined ? {} : _nextContext$intl;


  return !shallowEquals(nextProps, props) || !shallowEquals(nextState, state) || !(nextIntl === intl || shallowEquals(filterProps(nextIntl, intlConfigPropNames), filterProps(intl, intlConfigPropNames)));
}

function createError(message, exception) {
  var eMsg = exception ? '\n' + exception : '';
  return '[React Intl] ' + message + eMsg;
}

function defaultErrorHandler(error) {
  if (false) {
    console.error(error);
  }
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

// Inspired by react-redux's `connect()` HOC factory function implementation:
// https://github.com/rackt/react-redux

function getDisplayName(Component$$1) {
  return Component$$1.displayName || Component$$1.name || 'Component';
}

function injectIntl(WrappedComponent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$intlPropName = options.intlPropName,
      intlPropName = _options$intlPropName === undefined ? 'intl' : _options$intlPropName,
      _options$withRef = options.withRef,
      withRef = _options$withRef === undefined ? false : _options$withRef;

  var InjectIntl = function (_Component) {
    inherits(InjectIntl, _Component);

    function InjectIntl(props, context) {
      classCallCheck(this, InjectIntl);

      var _this = possibleConstructorReturn(this, (InjectIntl.__proto__ || Object.getPrototypeOf(InjectIntl)).call(this, props, context));

      invariantIntlContext(context);
      return _this;
    }

    createClass(InjectIntl, [{
      key: 'getWrappedInstance',
      value: function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_6_invariant___default()(withRef, '[React Intl] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`injectIntl()`');

        return this._wrappedInstance;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(WrappedComponent, _extends({}, this.props, defineProperty({}, intlPropName, this.context.intl), {
          ref: withRef ? /* istanbul ignore next */function (ref) {
            return _this2._wrappedInstance = ref;
          } : null
        }));
      }
    }]);
    return InjectIntl;
  }(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

  InjectIntl.displayName = 'InjectIntl(' + getDisplayName(WrappedComponent) + ')';
  InjectIntl.contextTypes = {
    intl: intlShape
  };
  InjectIntl.WrappedComponent = WrappedComponent;


  return __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(InjectIntl, WrappedComponent);
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

function defineMessages(messageDescriptors) {
  // This simply returns what's passed-in because it's meant to be a hook for
  // babel-plugin-react-intl.
  return messageDescriptors;
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

// This is a "hack" until a proper `intl-pluralformat` package is created.

function resolveLocale(locales) {
  // IntlMessageFormat#_resolveLocale() does not depend on `this`.
  return __WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a.prototype._resolveLocale(locales);
}

function findPluralFunction(locale) {
  // IntlMessageFormat#_findPluralFunction() does not depend on `this`.
  return __WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a.prototype._findPluralRuleFunction(locale);
}

var IntlPluralFormat = function IntlPluralFormat(locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  classCallCheck(this, IntlPluralFormat);

  var useOrdinal = options.style === 'ordinal';
  var pluralFn = findPluralFunction(resolveLocale(locales));

  this.format = function (value) {
    return pluralFn(value, useOrdinal);
  };
};

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var DATE_TIME_FORMAT_OPTIONS = Object.keys(dateTimeFormatPropTypes);
var NUMBER_FORMAT_OPTIONS = Object.keys(numberFormatPropTypes);
var RELATIVE_FORMAT_OPTIONS = Object.keys(relativeFormatPropTypes);
var PLURAL_FORMAT_OPTIONS = Object.keys(pluralFormatPropTypes);

var RELATIVE_FORMAT_THRESHOLDS = {
  second: 60, // seconds to minute
  minute: 60, // minutes to hour
  hour: 24, // hours to day
  day: 30, // days to month
  month: 12 };

function updateRelativeFormatThresholds(newThresholds) {
  var thresholds = __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a.thresholds;
  thresholds.second = newThresholds.second;
  thresholds.minute = newThresholds.minute;
  thresholds.hour = newThresholds.hour;
  thresholds.day = newThresholds.day;
  thresholds.month = newThresholds.month;
  thresholds['second-short'] = newThresholds['second-short'];
  thresholds['minute-short'] = newThresholds['minute-short'];
  thresholds['hour-short'] = newThresholds['hour-short'];
  thresholds['day-short'] = newThresholds['day-short'];
  thresholds['month-short'] = newThresholds['month-short'];
}

function getNamedFormat(formats, type, name, onError) {
  var format = formats && formats[type] && formats[type][name];
  if (format) {
    return format;
  }

  onError(createError('No ' + type + ' format named: ' + name));
}

function formatDate(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats,
      timeZone = config.timeZone;
  var format = options.format;


  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var defaults$$1 = _extends({}, timeZone && { timeZone: timeZone }, format && getNamedFormat(formats, 'date', format, onError));
  var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);

  try {
    return state.getDateTimeFormat(locale, filteredOptions).format(date);
  } catch (e) {
    onError(createError('Error formatting date.', e));
  }

  return String(date);
}

function formatTime(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats,
      timeZone = config.timeZone;
  var format = options.format;


  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var defaults$$1 = _extends({}, timeZone && { timeZone: timeZone }, format && getNamedFormat(formats, 'time', format, onError));
  var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);

  if (!filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
    // Add default formatting options if hour, minute, or second isn't defined.
    filteredOptions = _extends({}, filteredOptions, { hour: 'numeric', minute: 'numeric' });
  }

  try {
    return state.getDateTimeFormat(locale, filteredOptions).format(date);
  } catch (e) {
    onError(createError('Error formatting time.', e));
  }

  return String(date);
}

function formatRelative(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats;
  var format = options.format;


  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var now = new Date(options.now);
  var defaults$$1 = format && getNamedFormat(formats, 'relative', format, onError);
  var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults$$1);

  // Capture the current threshold values, then temporarily override them with
  // specific values just for this render.
  var oldThresholds = _extends({}, __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a.thresholds);
  updateRelativeFormatThresholds(RELATIVE_FORMAT_THRESHOLDS);

  try {
    return state.getRelativeFormat(locale, filteredOptions).format(date, {
      now: isFinite(now) ? now : state.now()
    });
  } catch (e) {
    onError(createError('Error formatting relative time.', e));
  } finally {
    updateRelativeFormatThresholds(oldThresholds);
  }

  return String(date);
}

function formatNumber(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats;
  var format = options.format;


  var onError = config.onError || defaultErrorHandler;
  var defaults$$1 = format && getNamedFormat(formats, 'number', format, onError);
  var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults$$1);

  try {
    return state.getNumberFormat(locale, filteredOptions).format(value);
  } catch (e) {
    onError(createError('Error formatting number.', e));
  }

  return String(value);
}

function formatPlural(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale;


  var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
  var onError = config.onError || defaultErrorHandler;

  try {
    return state.getPluralFormat(locale, filteredOptions).format(value);
  } catch (e) {
    onError(createError('Error formatting plural.', e));
  }

  return 'other';
}

function formatMessage(config, state) {
  var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats,
      messages = config.messages,
      defaultLocale = config.defaultLocale,
      defaultFormats = config.defaultFormats;
  var id = messageDescriptor.id,
      defaultMessage = messageDescriptor.defaultMessage;

  // Produce a better error if the user calls `intl.formatMessage(element)`

  if (false) {
    invariant(!isValidElement(config), '[React Intl] Don\'t pass React elements to ' + 'formatMessage(), pass `.props`.');
  }

  // `id` is a required field of a Message Descriptor.
  __WEBPACK_IMPORTED_MODULE_6_invariant___default()(id, '[React Intl] An `id` must be provided to format a message.');

  var message = messages && messages[id];
  var hasValues = Object.keys(values).length > 0;

  // Avoid expensive message formatting for simple messages without values. In
  // development messages will always be formatted in case of missing values.
  if (!hasValues && "production" === 'production') {
    return message || defaultMessage || id;
  }

  var formattedMessage = void 0;
  var onError = config.onError || defaultErrorHandler;

  if (message) {
    try {
      var formatter = state.getMessageFormat(message, locale, formats);

      formattedMessage = formatter.format(values);
    } catch (e) {
      onError(createError('Error formatting message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : ''), e));
    }
  } else {
    // This prevents warnings from littering the console in development
    // when no `messages` are passed into the <IntlProvider> for the
    // default locale, and a default message is in the source.
    if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
      onError(createError('Missing message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : '')));
    }
  }

  if (!formattedMessage && defaultMessage) {
    try {
      var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);

      formattedMessage = _formatter.format(values);
    } catch (e) {
      onError(createError('Error formatting the default message for: "' + id + '"', e));
    }
  }

  if (!formattedMessage) {
    onError(createError('Cannot format message: "' + id + '", ' + ('using message ' + (message || defaultMessage ? 'source' : 'id') + ' as fallback.')));
  }

  return formattedMessage || message || defaultMessage || id;
}

function formatHTMLMessage(config, state, messageDescriptor) {
  var rawValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  // Process all the values before they are used when formatting the ICU
  // Message string. Since the formatted message might be injected via
  // `innerHTML`, all String-based values need to be HTML-escaped.
  var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
    var value = rawValues[name];
    escaped[name] = typeof value === 'string' ? escape(value) : value;
    return escaped;
  }, {});

  return formatMessage(config, state, messageDescriptor, escapedValues);
}



var format = Object.freeze({
	formatDate: formatDate,
	formatTime: formatTime,
	formatRelative: formatRelative,
	formatNumber: formatNumber,
	formatPlural: formatPlural,
	formatMessage: formatMessage,
	formatHTMLMessage: formatHTMLMessage
});

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var intlConfigPropNames$1 = Object.keys(intlConfigPropTypes);
var intlFormatPropNames = Object.keys(intlFormatPropTypes);

// These are not a static property on the `IntlProvider` class so the intl
// config values can be inherited from an <IntlProvider> ancestor.
var defaultProps = {
  formats: {},
  messages: {},
  timeZone: null,
  textComponent: 'span',

  defaultLocale: 'en',
  defaultFormats: {},

  onError: defaultErrorHandler
};

var IntlProvider = function (_Component) {
  inherits(IntlProvider, _Component);

  function IntlProvider(props) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, IntlProvider);

    var _this = possibleConstructorReturn(this, (IntlProvider.__proto__ || Object.getPrototypeOf(IntlProvider)).call(this, props, context));

    __WEBPACK_IMPORTED_MODULE_6_invariant___default()(typeof Intl !== 'undefined', '[React Intl] The `Intl` APIs must be available in the runtime, ' + 'and do not appear to be built-in. An `Intl` polyfill should be loaded.\n' + 'See: http://formatjs.io/guides/runtime-environments/');

    var intlContext = context.intl;

    // Used to stabilize time when performing an initial rendering so that
    // all relative times use the same reference "now" time.

    var initialNow = void 0;
    if (isFinite(props.initialNow)) {
      initialNow = Number(props.initialNow);
    } else {
      // When an `initialNow` isn't provided via `props`, look to see an
      // <IntlProvider> exists in the ancestry and call its `now()`
      // function to propagate its value for "now".
      initialNow = intlContext ? intlContext.now() : Date.now();
    }

    // Creating `Intl*` formatters is expensive. If there's a parent
    // `<IntlProvider>`, then its formatters will be used. Otherwise, this
    // memoize the `Intl*` constructors and cache them for the lifecycle of
    // this IntlProvider instance.

    var _ref = intlContext || {},
        _ref$formatters = _ref.formatters,
        formatters = _ref$formatters === undefined ? {
      getDateTimeFormat: Object(__WEBPACK_IMPORTED_MODULE_7_intl_format_cache__["a" /* default */])(Intl.DateTimeFormat),
      getNumberFormat: Object(__WEBPACK_IMPORTED_MODULE_7_intl_format_cache__["a" /* default */])(Intl.NumberFormat),
      getMessageFormat: Object(__WEBPACK_IMPORTED_MODULE_7_intl_format_cache__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a),
      getRelativeFormat: Object(__WEBPACK_IMPORTED_MODULE_7_intl_format_cache__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a),
      getPluralFormat: Object(__WEBPACK_IMPORTED_MODULE_7_intl_format_cache__["a" /* default */])(IntlPluralFormat)
    } : _ref$formatters;

    _this.state = _extends({}, formatters, {

      // Wrapper to provide stable "now" time for initial render.
      now: function now() {
        return _this._didDisplay ? Date.now() : initialNow;
      }
    });
    return _this;
  }

  createClass(IntlProvider, [{
    key: 'getConfig',
    value: function getConfig() {
      var intlContext = this.context.intl;

      // Build a whitelisted config object from `props`, defaults, and
      // `context.intl`, if an <IntlProvider> exists in the ancestry.

      var config = filterProps(this.props, intlConfigPropNames$1, intlContext);

      // Apply default props. This must be applied last after the props have
      // been resolved and inherited from any <IntlProvider> in the ancestry.
      // This matches how React resolves `defaultProps`.
      for (var propName in defaultProps) {
        if (config[propName] === undefined) {
          config[propName] = defaultProps[propName];
        }
      }

      if (!hasLocaleData(config.locale)) {
        var _config = config,
            locale = _config.locale,
            defaultLocale = _config.defaultLocale,
            defaultFormats = _config.defaultFormats,
            onError = _config.onError;


        onError(createError('Missing locale data for locale: "' + locale + '". ' + ('Using default locale: "' + defaultLocale + '" as fallback.')));

        // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.
        config = _extends({}, config, {
          locale: defaultLocale,
          formats: defaultFormats,
          messages: defaultProps.messages
        });
      }

      return config;
    }
  }, {
    key: 'getBoundFormatFns',
    value: function getBoundFormatFns(config, state) {
      return intlFormatPropNames.reduce(function (boundFormatFns, name) {
        boundFormatFns[name] = format[name].bind(null, config, state);
        return boundFormatFns;
      }, {});
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var config = this.getConfig();

      // Bind intl factories and current config to the format functions.
      var boundFormatFns = this.getBoundFormatFns(config, this.state);

      var _state = this.state,
          now = _state.now,
          formatters = objectWithoutProperties(_state, ['now']);


      return {
        intl: _extends({}, config, boundFormatFns, {
          formatters: formatters,
          now: now
        })
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._didDisplay = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react__["Children"].only(this.props.children);
    }
  }]);
  return IntlProvider;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

IntlProvider.displayName = 'IntlProvider';
IntlProvider.contextTypes = {
  intl: intlShape
};
IntlProvider.childContextTypes = {
  intl: intlShape.isRequired
};
 false ? IntlProvider.propTypes = _extends({}, intlConfigPropTypes, {
  children: PropTypes.element.isRequired,
  initialNow: PropTypes.any
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedDate = function (_Component) {
  inherits(FormattedDate, _Component);

  function FormattedDate(props, context) {
    classCallCheck(this, FormattedDate);

    var _this = possibleConstructorReturn(this, (FormattedDate.__proto__ || Object.getPrototypeOf(FormattedDate)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedDate, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatDate = _context$intl.formatDate,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedDate = formatDate(value, this.props);

      if (typeof children === 'function') {
        return children(formattedDate);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedDate
      );
    }
  }]);
  return FormattedDate;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedDate.displayName = 'FormattedDate';
FormattedDate.contextTypes = {
  intl: intlShape
};
 false ? FormattedDate.propTypes = _extends({}, dateTimeFormatPropTypes, {
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  children: PropTypes.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedTime = function (_Component) {
  inherits(FormattedTime, _Component);

  function FormattedTime(props, context) {
    classCallCheck(this, FormattedTime);

    var _this = possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedTime, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatTime = _context$intl.formatTime,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedTime = formatTime(value, this.props);

      if (typeof children === 'function') {
        return children(formattedTime);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedTime
      );
    }
  }]);
  return FormattedTime;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedTime.displayName = 'FormattedTime';
FormattedTime.contextTypes = {
  intl: intlShape
};
 false ? FormattedTime.propTypes = _extends({}, dateTimeFormatPropTypes, {
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  children: PropTypes.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var SECOND = 1000;
var MINUTE = 1000 * 60;
var HOUR = 1000 * 60 * 60;
var DAY = 1000 * 60 * 60 * 24;

// The maximum timer delay value is a 32-bit signed integer.
// See: https://mdn.io/setTimeout
var MAX_TIMER_DELAY = 2147483647;

function selectUnits(delta) {
  var absDelta = Math.abs(delta);

  if (absDelta < MINUTE) {
    return 'second';
  }

  if (absDelta < HOUR) {
    return 'minute';
  }

  if (absDelta < DAY) {
    return 'hour';
  }

  // The maximum scheduled delay will be measured in days since the maximum
  // timer delay is less than the number of milliseconds in 25 days.
  return 'day';
}

function getUnitDelay(units) {
  switch (units) {
    case 'second':
      return SECOND;
    case 'minute':
      return MINUTE;
    case 'hour':
      return HOUR;
    case 'day':
      return DAY;
    default:
      return MAX_TIMER_DELAY;
  }
}

function isSameDate(a, b) {
  if (a === b) {
    return true;
  }

  var aTime = new Date(a).getTime();
  var bTime = new Date(b).getTime();

  return isFinite(aTime) && isFinite(bTime) && aTime === bTime;
}

var FormattedRelative = function (_Component) {
  inherits(FormattedRelative, _Component);

  function FormattedRelative(props, context) {
    classCallCheck(this, FormattedRelative);

    var _this = possibleConstructorReturn(this, (FormattedRelative.__proto__ || Object.getPrototypeOf(FormattedRelative)).call(this, props, context));

    invariantIntlContext(context);

    var now = isFinite(props.initialNow) ? Number(props.initialNow) : context.intl.now();

    // `now` is stored as state so that `render()` remains a function of
    // props + state, instead of accessing `Date.now()` inside `render()`.
    _this.state = { now: now };
    return _this;
  }

  createClass(FormattedRelative, [{
    key: 'scheduleNextUpdate',
    value: function scheduleNextUpdate(props, state) {
      var _this2 = this;

      // Cancel and pending update because we're scheduling a new update.
      clearTimeout(this._timer);

      var value = props.value,
          units = props.units,
          updateInterval = props.updateInterval;

      var time = new Date(value).getTime();

      // If the `updateInterval` is falsy, including `0` or we don't have a
      // valid date, then auto updates have been turned off, so we bail and
      // skip scheduling an update.
      if (!updateInterval || !isFinite(time)) {
        return;
      }

      var delta = time - state.now;
      var unitDelay = getUnitDelay(units || selectUnits(delta));
      var unitRemainder = Math.abs(delta % unitDelay);

      // We want the largest possible timer delay which will still display
      // accurate information while reducing unnecessary re-renders. The delay
      // should be until the next "interesting" moment, like a tick from
      // "1 minute ago" to "2 minutes ago" when the delta is 120,000ms.
      var delay = delta < 0 ? Math.max(updateInterval, unitDelay - unitRemainder) : Math.max(updateInterval, unitRemainder);

      this._timer = setTimeout(function () {
        _this2.setState({ now: _this2.context.intl.now() });
      }, delay);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scheduleNextUpdate(this.props, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var nextValue = _ref.value;

      // When the `props.value` date changes, `state.now` needs to be updated,
      // and the next update can be rescheduled.
      if (!isSameDate(nextValue, this.props.value)) {
        this.setState({ now: this.context.intl.now() });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.scheduleNextUpdate(nextProps, nextState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatRelative = _context$intl.formatRelative,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedRelative = formatRelative(value, _extends({}, this.props, this.state));

      if (typeof children === 'function') {
        return children(formattedRelative);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedRelative
      );
    }
  }]);
  return FormattedRelative;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedRelative.displayName = 'FormattedRelative';
FormattedRelative.contextTypes = {
  intl: intlShape
};
FormattedRelative.defaultProps = {
  updateInterval: 1000 * 10
};
 false ? FormattedRelative.propTypes = _extends({}, relativeFormatPropTypes, {
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  updateInterval: PropTypes.number,
  initialNow: PropTypes.any,
  children: PropTypes.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedNumber = function (_Component) {
  inherits(FormattedNumber, _Component);

  function FormattedNumber(props, context) {
    classCallCheck(this, FormattedNumber);

    var _this = possibleConstructorReturn(this, (FormattedNumber.__proto__ || Object.getPrototypeOf(FormattedNumber)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedNumber, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatNumber = _context$intl.formatNumber,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedNumber = formatNumber(value, this.props);

      if (typeof children === 'function') {
        return children(formattedNumber);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedNumber
      );
    }
  }]);
  return FormattedNumber;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedNumber.displayName = 'FormattedNumber';
FormattedNumber.contextTypes = {
  intl: intlShape
};
 false ? FormattedNumber.propTypes = _extends({}, numberFormatPropTypes, {
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  children: PropTypes.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedPlural = function (_Component) {
  inherits(FormattedPlural, _Component);

  function FormattedPlural(props, context) {
    classCallCheck(this, FormattedPlural);

    var _this = possibleConstructorReturn(this, (FormattedPlural.__proto__ || Object.getPrototypeOf(FormattedPlural)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedPlural, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatPlural = _context$intl.formatPlural,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          other = _props.other,
          children = _props.children;


      var pluralCategory = formatPlural(value, this.props);
      var formattedPlural = this.props[pluralCategory] || other;

      if (typeof children === 'function') {
        return children(formattedPlural);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedPlural
      );
    }
  }]);
  return FormattedPlural;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedPlural.displayName = 'FormattedPlural';
FormattedPlural.contextTypes = {
  intl: intlShape
};
FormattedPlural.defaultProps = {
  style: 'cardinal'
};
 false ? FormattedPlural.propTypes = _extends({}, pluralFormatPropTypes, {
  value: PropTypes.any.isRequired,

  other: PropTypes.node.isRequired,
  zero: PropTypes.node,
  one: PropTypes.node,
  two: PropTypes.node,
  few: PropTypes.node,
  many: PropTypes.node,

  children: PropTypes.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var defaultFormatMessage = function defaultFormatMessage(descriptor, values) {
  if (false) {
    console.error('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.');
  }
  return formatMessage({}, { getMessageFormat: Object(__WEBPACK_IMPORTED_MODULE_7_intl_format_cache__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a) }, descriptor, values);
};

var FormattedMessage = function (_Component) {
  inherits(FormattedMessage, _Component);

  function FormattedMessage(props, context) {
    classCallCheck(this, FormattedMessage);

    var _this = possibleConstructorReturn(this, (FormattedMessage.__proto__ || Object.getPrototypeOf(FormattedMessage)).call(this, props, context));

    if (!props.defaultMessage) {
      invariantIntlContext(context);
    }
    return _this;
  }

  createClass(FormattedMessage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var values = this.props.values;
      var nextValues = nextProps.values;


      if (!shallowEquals(nextValues, values)) {
        return true;
      }

      // Since `values` has already been checked, we know they're not
      // different, so the current `values` are carried over so the shallow
      // equals comparison on the other props isn't affected by the `values`.
      var nextPropsToCheck = _extends({}, nextProps, {
        values: values
      });

      for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        next[_key - 1] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref = this.context.intl || {},
          _ref$formatMessage = _ref.formatMessage,
          formatMessage$$1 = _ref$formatMessage === undefined ? defaultFormatMessage : _ref$formatMessage,
          _ref$textComponent = _ref.textComponent,
          Text = _ref$textComponent === undefined ? 'span' : _ref$textComponent;

      var _props = this.props,
          id = _props.id,
          description = _props.description,
          defaultMessage = _props.defaultMessage,
          values = _props.values,
          _props$tagName = _props.tagName,
          Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
          children = _props.children;


      var tokenDelimiter = void 0;
      var tokenizedValues = void 0;
      var elements = void 0;

      var hasValues = values && Object.keys(values).length > 0;
      if (hasValues) {
        // Creates a token with a random UID that should not be guessable or
        // conflict with other parts of the `message` string.
        var uid = Math.floor(Math.random() * 0x10000000000).toString(16);

        var generateToken = function () {
          var counter = 0;
          return function () {
            return 'ELEMENT-' + uid + '-' + (counter += 1);
          };
        }();

        // Splitting with a delimiter to support IE8. When using a regex
        // with a capture group IE8 does not include the capture group in
        // the resulting array.
        tokenDelimiter = '@__' + uid + '__@';
        tokenizedValues = {};
        elements = {};

        // Iterates over the `props` to keep track of any React Element
        // values so they can be represented by the `token` as a placeholder
        // when the `message` is formatted. This allows the formatted
        // message to then be broken-up into parts with references to the
        // React Elements inserted back in.
        Object.keys(values).forEach(function (name) {
          var value = values[name];

          if (Object(__WEBPACK_IMPORTED_MODULE_4_react__["isValidElement"])(value)) {
            var token = generateToken();
            tokenizedValues[name] = tokenDelimiter + token + tokenDelimiter;
            elements[token] = value;
          } else {
            tokenizedValues[name] = value;
          }
        });
      }

      var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
      var formattedMessage = formatMessage$$1(descriptor, tokenizedValues || values);

      var nodes = void 0;

      var hasElements = elements && Object.keys(elements).length > 0;
      if (hasElements) {
        // Split the message into parts so the React Element values captured
        // above can be inserted back into the rendered message. This
        // approach allows messages to render with React Elements while
        // keeping React's virtual diffing working properly.
        nodes = formattedMessage.split(tokenDelimiter).filter(function (part) {
          return !!part;
        }).map(function (part) {
          return elements[part] || part;
        });
      } else {
        nodes = [formattedMessage];
      }

      if (typeof children === 'function') {
        return children.apply(undefined, toConsumableArray(nodes));
      }

      // Needs to use `createElement()` instead of JSX, otherwise React will
      // warn about a missing `key` prop with rich-text message formatting.
      return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"].apply(undefined, [Component$$1, null].concat(toConsumableArray(nodes)));
    }
  }]);
  return FormattedMessage;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedMessage.displayName = 'FormattedMessage';
FormattedMessage.contextTypes = {
  intl: intlShape
};
FormattedMessage.defaultProps = {
  values: {}
};
 false ? FormattedMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
  values: PropTypes.object,
  tagName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedHTMLMessage = function (_Component) {
  inherits(FormattedHTMLMessage, _Component);

  function FormattedHTMLMessage(props, context) {
    classCallCheck(this, FormattedHTMLMessage);

    var _this = possibleConstructorReturn(this, (FormattedHTMLMessage.__proto__ || Object.getPrototypeOf(FormattedHTMLMessage)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedHTMLMessage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var values = this.props.values;
      var nextValues = nextProps.values;


      if (!shallowEquals(nextValues, values)) {
        return true;
      }

      // Since `values` has already been checked, we know they're not
      // different, so the current `values` are carried over so the shallow
      // equals comparison on the other props isn't affected by the `values`.
      var nextPropsToCheck = _extends({}, nextProps, {
        values: values
      });

      for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        next[_key - 1] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatHTMLMessage = _context$intl.formatHTMLMessage,
          Text = _context$intl.textComponent;
      var _props = this.props,
          id = _props.id,
          description = _props.description,
          defaultMessage = _props.defaultMessage,
          rawValues = _props.values,
          _props$tagName = _props.tagName,
          Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
          children = _props.children;


      var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
      var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);

      if (typeof children === 'function') {
        return children(formattedHTMLMessage);
      }

      // Since the message presumably has HTML in it, we need to set
      // `innerHTML` in order for it to be rendered and not escaped by React.
      // To be safe, all string prop values were escaped when formatting the
      // message. It is assumed that the message is not UGC, and came from the
      // developer making it more like a template.
      //
      // Note: There's a perf impact of using this component since there's no
      // way for React to do its virtual DOM diffing.
      var html = { __html: formattedHTMLMessage };
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component$$1, { dangerouslySetInnerHTML: html });
    }
  }]);
  return FormattedHTMLMessage;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedHTMLMessage.displayName = 'FormattedHTMLMessage';
FormattedHTMLMessage.contextTypes = {
  intl: intlShape
};
FormattedHTMLMessage.defaultProps = {
  values: {}
};
 false ? FormattedHTMLMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
  values: PropTypes.object,
  tagName: PropTypes.string,
  children: PropTypes.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

addLocaleData(defaultLocaleData);

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

addLocaleData(__WEBPACK_IMPORTED_MODULE_0__locale_data_index_js___default.a);




/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node:true */



var IntlMessageFormat = __webpack_require__(906)['default'];

// Add all locale data to `IntlMessageFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
__webpack_require__(913);

// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlMessageFormat;
exports['default'] = exports;


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


exports.extend = extend;
var hop = Object.prototype.hasOwnProperty;

function extend(obj) {
    var sources = Array.prototype.slice.call(arguments, 1),
        i, len, source, key;

    for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];
        if (!source) { continue; }

        for (key in source) {
            if (hop.call(source, key)) {
                obj[key] = source[key];
            }
        }
    }

    return obj;
}
exports.hop = hop;

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jslint esnext: true */


var src$core$$ = __webpack_require__(907), src$en$$ = __webpack_require__(912);

src$core$$["default"].__addLocaleData(src$en$$["default"]);
src$core$$["default"].defaultLocale = 'en';

exports["default"] = src$core$$["default"];

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


var src$utils$$ = __webpack_require__(546), src$es5$$ = __webpack_require__(908), src$compiler$$ = __webpack_require__(909), intl$messageformat$parser$$ = __webpack_require__(910);
exports["default"] = MessageFormat;

// -- MessageFormat --------------------------------------------------------

function MessageFormat(message, locales, formats) {
    // Parse string messages into an AST.
    var ast = typeof message === 'string' ?
            MessageFormat.__parse(message) : message;

    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new TypeError('A message must be provided as a String or AST.');
    }

    // Creates a new object with the specified `formats` merged with the default
    // formats.
    formats = this._mergeFormats(MessageFormat.formats, formats);

    // Defined first because it's used to build the format pattern.
    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});

    // Compile the `ast` to a pattern that is highly optimized for repeated
    // `format()` invocations. **Note:** This passes the `locales` set provided
    // to the constructor instead of just the resolved locale.
    var pluralFn = this._findPluralRuleFunction(this._locale);
    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var messageFormat = this;
    this.format = function (values) {
      try {
        return messageFormat._format(pattern, values);
      } catch (e) {
        if (e.variableId) {
          throw new Error(
            'The intl string context variable \'' + e.variableId + '\'' +
            ' was not provided to the string \'' + message + '\''
          );
        } else {
          throw e;
        }
      }
    };
}

// Default format options used as the prototype of the `formats` provided to the
// constructor. These are used when constructing the internal Intl.NumberFormat
// and Intl.DateTimeFormat instances.
src$es5$$.defineProperty(MessageFormat, 'formats', {
    enumerable: true,

    value: {
        number: {
            'currency': {
                style: 'currency'
            },

            'percent': {
                style: 'percent'
            }
        },

        date: {
            'short': {
                month: 'numeric',
                day  : 'numeric',
                year : '2-digit'
            },

            'medium': {
                month: 'short',
                day  : 'numeric',
                year : 'numeric'
            },

            'long': {
                month: 'long',
                day  : 'numeric',
                year : 'numeric'
            },

            'full': {
                weekday: 'long',
                month  : 'long',
                day    : 'numeric',
                year   : 'numeric'
            }
        },

        time: {
            'short': {
                hour  : 'numeric',
                minute: 'numeric'
            },

            'medium':  {
                hour  : 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },

            'long': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            },

            'full': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            }
        }
    }
});

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
    if (!(data && data.locale)) {
        throw new Error(
            'Locale data provided to IntlMessageFormat is missing a ' +
            '`locale` property'
        );
    }

    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
}});

// Defines `__parse()` static method as an exposed private.
src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});

// Define public `defaultLocale` property which defaults to English, but can be
// set by the developer.
src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
    enumerable: true,
    writable  : true,
    value     : undefined
});

MessageFormat.prototype.resolvedOptions = function () {
    // TODO: Provide anything else?
    return {
        locale: this._locale
    };
};

MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
    return compiler.compile(ast);
};

MessageFormat.prototype._findPluralRuleFunction = function (locale) {
    var localeData = MessageFormat.__localeData__;
    var data       = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find a `pluralRuleFunction` to return.
    while (data) {
        if (data.pluralRuleFunction) {
            return data.pluralRuleFunction;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error(
        'Locale data added to IntlMessageFormat is missing a ' +
        '`pluralRuleFunction` for :' + locale
    );
};

MessageFormat.prototype._format = function (pattern, values) {
    var result = '',
        i, len, part, id, value, err;

    for (i = 0, len = pattern.length; i < len; i += 1) {
        part = pattern[i];

        // Exist early for string parts.
        if (typeof part === 'string') {
            result += part;
            continue;
        }

        id = part.id;

        // Enforce that all required values are provided by the caller.
        if (!(values && src$utils$$.hop.call(values, id))) {
          err = new Error('A value must be provided for: ' + id);
          err.variableId = id;
          throw err;
        }

        value = values[id];

        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (part.options) {
            result += this._format(part.getOption(value), values);
        } else {
            result += part.format(value);
        }
    }

    return result;
};

MessageFormat.prototype._mergeFormats = function (defaults, formats) {
    var mergedFormats = {},
        type, mergedType;

    for (type in defaults) {
        if (!src$utils$$.hop.call(defaults, type)) { continue; }

        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

        if (formats && src$utils$$.hop.call(formats, type)) {
            src$utils$$.extend(mergedType, formats[type]);
        }
    }

    return mergedFormats;
};

MessageFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(MessageFormat.defaultLocale);

    var localeData = MessageFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error(
        'No locale data has been added to IntlMessageFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale
    );
};

//# sourceMappingURL=core.js.map

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


var src$utils$$ = __webpack_require__(546);

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (src$utils$$.hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};

exports.defineProperty = defineProperty, exports.objCreate = objCreate;

//# sourceMappingURL=es5.js.map

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


exports["default"] = Compiler;

function Compiler(locales, formats, pluralFn) {
    this.locales  = locales;
    this.formats  = formats;
    this.pluralFn = pluralFn;
}

Compiler.prototype.compile = function (ast) {
    this.pluralStack        = [];
    this.currentPlural      = null;
    this.pluralNumberFormat = null;

    return this.compileMessage(ast);
};

Compiler.prototype.compileMessage = function (ast) {
    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new Error('Message AST is not of type: "messageFormatPattern"');
    }

    var elements = ast.elements,
        pattern  = [];

    var i, len, element;

    for (i = 0, len = elements.length; i < len; i += 1) {
        element = elements[i];

        switch (element.type) {
            case 'messageTextElement':
                pattern.push(this.compileMessageText(element));
                break;

            case 'argumentElement':
                pattern.push(this.compileArgument(element));
                break;

            default:
                throw new Error('Message element does not have a valid type');
        }
    }

    return pattern;
};

Compiler.prototype.compileMessageText = function (element) {
    // When this `element` is part of plural sub-pattern and its value contains
    // an unescaped '#', use a `PluralOffsetString` helper to properly output
    // the number with the correct offset in the string.
    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
        // Create a cache a NumberFormat instance that can be reused for any
        // PluralOffsetString instance in this message.
        if (!this.pluralNumberFormat) {
            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
        }

        return new PluralOffsetString(
                this.currentPlural.id,
                this.currentPlural.format.offset,
                this.pluralNumberFormat,
                element.value);
    }

    // Unescape the escaped '#'s in the message text.
    return element.value.replace(/\\#/g, '#');
};

Compiler.prototype.compileArgument = function (element) {
    var format = element.format;

    if (!format) {
        return new StringFormat(element.id);
    }

    var formats  = this.formats,
        locales  = this.locales,
        pluralFn = this.pluralFn,
        options;

    switch (format.type) {
        case 'numberFormat':
            options = formats.number[format.style];
            return {
                id    : element.id,
                format: new Intl.NumberFormat(locales, options).format
            };

        case 'dateFormat':
            options = formats.date[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'timeFormat':
            options = formats.time[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'pluralFormat':
            options = this.compileOptions(element);
            return new PluralFormat(
                element.id, format.ordinal, format.offset, options, pluralFn
            );

        case 'selectFormat':
            options = this.compileOptions(element);
            return new SelectFormat(element.id, options);

        default:
            throw new Error('Message element does not have a valid format type');
    }
};

Compiler.prototype.compileOptions = function (element) {
    var format      = element.format,
        options     = format.options,
        optionsHash = {};

    // Save the current plural element, if any, then set it to a new value when
    // compiling the options sub-patterns. This conforms the spec's algorithm
    // for handling `"#"` syntax in message text.
    this.pluralStack.push(this.currentPlural);
    this.currentPlural = format.type === 'pluralFormat' ? element : null;

    var i, len, option;

    for (i = 0, len = options.length; i < len; i += 1) {
        option = options[i];

        // Compile the sub-pattern and save it under the options's selector.
        optionsHash[option.selector] = this.compileMessage(option.value);
    }

    // Pop the plural stack to put back the original current plural value.
    this.currentPlural = this.pluralStack.pop();

    return optionsHash;
};

// -- Compiler Helper Classes --------------------------------------------------

function StringFormat(id) {
    this.id = id;
}

StringFormat.prototype.format = function (value) {
    if (!value && typeof value !== 'number') {
        return '';
    }

    return typeof value === 'string' ? value : String(value);
};

function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
    this.id         = id;
    this.useOrdinal = useOrdinal;
    this.offset     = offset;
    this.options    = options;
    this.pluralFn   = pluralFn;
}

PluralFormat.prototype.getOption = function (value) {
    var options = this.options;

    var option = options['=' + value] ||
            options[this.pluralFn(value - this.offset, this.useOrdinal)];

    return option || options.other;
};

function PluralOffsetString(id, offset, numberFormat, string) {
    this.id           = id;
    this.offset       = offset;
    this.numberFormat = numberFormat;
    this.string       = string;
}

PluralOffsetString.prototype.format = function (value) {
    var number = this.numberFormat.format(value - this.offset);

    return this.string
            .replace(/(^|[^\\])#/g, '$1' + number)
            .replace(/\\#/g, '#');
};

function SelectFormat(id, options) {
    this.id      = id;
    this.options = options;
}

SelectFormat.prototype.getOption = function (value) {
    var options = this.options;
    return options[value] || options.other;
};

//# sourceMappingURL=compiler.js.map

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = __webpack_require__(911)['default'];
exports['default'] = exports;


/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports["default"] = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = function(elements) {
                return {
                    type    : 'messageFormatPattern',
                    elements: elements,
                    location: location()
                };
            },
        peg$c1 = function(text) {
                var string = '',
                    i, j, outerLen, inner, innerLen;

                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
                    inner = text[i];

                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
                        string += inner[j];
                    }
                }

                return string;
            },
        peg$c2 = function(messageText) {
                return {
                    type : 'messageTextElement',
                    value: messageText,
                    location: location()
                };
            },
        peg$c3 = /^[^ \t\n\r,.+={}#]/,
        peg$c4 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
        peg$c5 = "{",
        peg$c6 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c7 = ",",
        peg$c8 = { type: "literal", value: ",", description: "\",\"" },
        peg$c9 = "}",
        peg$c10 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c11 = function(id, format) {
                return {
                    type  : 'argumentElement',
                    id    : id,
                    format: format && format[2],
                    location: location()
                };
            },
        peg$c12 = "number",
        peg$c13 = { type: "literal", value: "number", description: "\"number\"" },
        peg$c14 = "date",
        peg$c15 = { type: "literal", value: "date", description: "\"date\"" },
        peg$c16 = "time",
        peg$c17 = { type: "literal", value: "time", description: "\"time\"" },
        peg$c18 = function(type, style) {
                return {
                    type : type + 'Format',
                    style: style && style[2],
                    location: location()
                };
            },
        peg$c19 = "plural",
        peg$c20 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c21 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: false,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options,
                    location: location()
                };
            },
        peg$c22 = "selectordinal",
        peg$c23 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c24 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: true,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options,
                    location: location()
                }
            },
        peg$c25 = "select",
        peg$c26 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c27 = function(options) {
                return {
                    type   : 'selectFormat',
                    options: options,
                    location: location()
                };
            },
        peg$c28 = "=",
        peg$c29 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c30 = function(selector, pattern) {
                return {
                    type    : 'optionalFormatPattern',
                    selector: selector,
                    value   : pattern,
                    location: location()
                };
            },
        peg$c31 = "offset:",
        peg$c32 = { type: "literal", value: "offset:", description: "\"offset:\"" },
        peg$c33 = function(number) {
                return number;
            },
        peg$c34 = function(offset, options) {
                return {
                    type   : 'pluralFormat',
                    offset : offset,
                    options: options,
                    location: location()
                };
            },
        peg$c35 = { type: "other", description: "whitespace" },
        peg$c36 = /^[ \t\n\r]/,
        peg$c37 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
        peg$c38 = { type: "other", description: "optionalWhitespace" },
        peg$c39 = /^[0-9]/,
        peg$c40 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c41 = /^[0-9a-f]/i,
        peg$c42 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
        peg$c43 = "0",
        peg$c44 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c45 = /^[1-9]/,
        peg$c46 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c47 = function(digits) {
            return parseInt(digits, 10);
        },
        peg$c48 = /^[^{}\\\0-\x1F \t\n\r]/,
        peg$c49 = { type: "class", value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]" },
        peg$c50 = "\\\\",
        peg$c51 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c52 = function() { return '\\'; },
        peg$c53 = "\\#",
        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c55 = function() { return '\\#'; },
        peg$c56 = "\\{",
        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c58 = function() { return '\u007B'; },
        peg$c59 = "\\}",
        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c61 = function() { return '\u007D'; },
        peg$c62 = "\\u",
        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c64 = function(digits) {
                return String.fromCharCode(parseInt(digits, 16));
            },
        peg$c65 = function(chars) { return chars.join(''); },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0;

      s0 = peg$parsemessageTextElement();
      if (s0 === peg$FAILED) {
        s0 = peg$parseargumentElement();
      }

      return s0;
    }

    function peg$parsemessageText() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsechars();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsechars();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parsemessageTextElement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsemessageText();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseargument() {
      var s0, s1, s2;

      s0 = peg$parsenumber();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (peg$c3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c3.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseargumentElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c5;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseargument();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c7;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c8); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseelementFormat();
                  if (s8 !== peg$FAILED) {
                    s6 = [s6, s7, s8];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c9;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c10); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c11(s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0;

      s0 = peg$parsesimpleFormat();
      if (s0 === peg$FAILED) {
        s0 = peg$parsepluralFormat();
        if (s0 === peg$FAILED) {
          s0 = peg$parseselectOrdinalFormat();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectFormat();
          }
        }
      }

      return s0;
    }

    function peg$parsesimpleFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c12) {
        s1 = peg$c12;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c14) {
          s1 = peg$c14;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c16) {
            s1 = peg$c16;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c7;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsechars();
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c18(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c21(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectOrdinalFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c24(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseoptionalFormatPattern();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseoptionalFormatPattern();
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c27(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselector() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c28;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsechars();
      }

      return s0;
    }

    function peg$parseoptionalFormatPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseselector();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c5;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c9;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c10); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c30(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseoffset() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c31) {
        s1 = peg$c31;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralStyle() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseoffset();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoptionalFormatPattern();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseoptionalFormatPattern();
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c34(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c36.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c36.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c37); }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      if (peg$c39.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c41.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsedigit();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsedigit();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      if (peg$c48.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c50) {
          s1 = peg$c50;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c52();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c53) {
            s1 = peg$c53;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c54); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c55();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c56) {
              s1 = peg$c56;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c57); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c58();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c59) {
                s1 = peg$c59;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c60); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c61();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c62) {
                  s1 = peg$c62;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c63); }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  s3 = peg$currPos;
                  s4 = peg$parsehexDigit();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parsehexDigit();
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parsehexDigit();
                      if (s6 !== peg$FAILED) {
                        s7 = peg$parsehexDigit();
                        if (s7 !== peg$FAILED) {
                          s4 = [s4, s5, s6, s7];
                          s3 = s4;
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    s2 = input.substring(s2, peg$currPos);
                  } else {
                    s2 = s3;
                  }
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c64(s2);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c65(s1);
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();

//# sourceMappingURL=parser.js.map

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GENERATED FILE

exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};

//# sourceMappingURL=en.js.map

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node:true */



var IntlRelativeFormat = __webpack_require__(915)['default'];

// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
__webpack_require__(920);

// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlRelativeFormat;
exports['default'] = exports;


/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* jslint esnext: true */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(916);
var en_1 = __webpack_require__(919);
core_1.default.__addLocaleData(en_1.default);
core_1.default.defaultLocale = 'en';
exports.default = core_1.default;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
var intl_messageformat_1 = __webpack_require__(545);
var diff_1 = __webpack_require__(917);
var es5_1 = __webpack_require__(918);
exports.default = RelativeFormat;
// -----------------------------------------------------------------------------
var FIELDS = [
    'second', 'second-short',
    'minute', 'minute-short',
    'hour', 'hour-short',
    'day', 'day-short',
    'month', 'month-short',
    'year', 'year-short'
];
var STYLES = ['best fit', 'numeric'];
// -- RelativeFormat -----------------------------------------------------------
function RelativeFormat(locales, options) {
    options = options || {};
    // Make a copy of `locales` if it's an array, so that it doesn't change
    // since it's used lazily.
    if (es5_1.isArray(locales)) {
        locales = locales.concat();
    }
    es5_1.defineProperty(this, '_locale', { value: this._resolveLocale(locales) });
    es5_1.defineProperty(this, '_options', { value: {
            style: this._resolveStyle(options.style),
            units: this._isValidUnits(options.units) && options.units
        } });
    es5_1.defineProperty(this, '_locales', { value: locales });
    es5_1.defineProperty(this, '_fields', { value: this._findFields(this._locale) });
    es5_1.defineProperty(this, '_messages', { value: es5_1.objCreate(null) });
    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var relativeFormat = this;
    this.format = function format(date, options) {
        return relativeFormat._format(date, options);
    };
}
// Define internal private properties for dealing with locale data.
es5_1.defineProperty(RelativeFormat, '__localeData__', { value: es5_1.objCreate(null) });
es5_1.defineProperty(RelativeFormat, '__addLocaleData', { value: function () {
        for (var i = 0; i < arguments.length; i++) {
            var datum = arguments[i];
            if (!(datum && datum.locale)) {
                throw new Error('Locale data provided to IntlRelativeFormat is missing a ' +
                    '`locale` property value');
            }
            RelativeFormat.__localeData__[datum.locale.toLowerCase()] = datum;
            // Add data to IntlMessageFormat.
            intl_messageformat_1.default.__addLocaleData(datum);
        }
    } });
// Define public `defaultLocale` property which can be set by the developer, or
// it will be set when the first RelativeFormat instance is created by
// leveraging the resolved locale from `Intl`.
es5_1.defineProperty(RelativeFormat, 'defaultLocale', {
    enumerable: true,
    writable: true,
    value: undefined
});
// Define public `thresholds` property which can be set by the developer, and
// defaults to relative time thresholds from moment.js.
es5_1.defineProperty(RelativeFormat, 'thresholds', {
    enumerable: true,
    value: {
        second: 45, 'second-short': 45,
        minute: 45, 'minute-short': 45,
        hour: 22, 'hour-short': 22,
        day: 26, 'day-short': 26,
        month: 11, 'month-short': 11 // months to year
    }
});
RelativeFormat.prototype.resolvedOptions = function () {
    return {
        locale: this._locale,
        style: this._options.style,
        units: this._options.units
    };
};
RelativeFormat.prototype._compileMessage = function (units) {
    // `this._locales` is the original set of locales the user specified to the
    // constructor, while `this._locale` is the resolved root locale.
    var locales = this._locales;
    var resolvedLocale = this._locale;
    var field = this._fields[units];
    var relativeTime = field.relativeTime;
    var future = '';
    var past = '';
    var i;
    for (i in relativeTime.future) {
        if (relativeTime.future.hasOwnProperty(i)) {
            future += ' ' + i + ' {' +
                relativeTime.future[i].replace('{0}', '#') + '}';
        }
    }
    for (i in relativeTime.past) {
        if (relativeTime.past.hasOwnProperty(i)) {
            past += ' ' + i + ' {' +
                relativeTime.past[i].replace('{0}', '#') + '}';
        }
    }
    var message = '{when, select, future {{0, plural, ' + future + '}}' +
        'past {{0, plural, ' + past + '}}}';
    // Create the synthetic IntlMessageFormat instance using the original
    // locales value specified by the user when constructing the the parent
    // IntlRelativeFormat instance.
    return new intl_messageformat_1.default(message, locales);
};
RelativeFormat.prototype._getMessage = function (units) {
    var messages = this._messages;
    // Create a new synthetic message based on the locale data from CLDR.
    if (!messages[units]) {
        messages[units] = this._compileMessage(units);
    }
    return messages[units];
};
RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
    var field = this._fields[units];
    if (field.relative) {
        return field.relative[diff];
    }
};
RelativeFormat.prototype._findFields = function (locale) {
    var localeData = RelativeFormat.__localeData__;
    var data = localeData[locale.toLowerCase()];
    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find `fields` to return.
    while (data) {
        if (data.fields) {
            return data.fields;
        }
        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }
    throw new Error('Locale data added to IntlRelativeFormat is missing `fields` for :' +
        locale);
};
RelativeFormat.prototype._format = function (date, options) {
    var now = options && options.now !== undefined ? options.now : es5_1.dateNow();
    if (date === undefined) {
        date = now;
    }
    // Determine if the `date` and optional `now` values are valid, and throw a
    // similar error to what `Intl.DateTimeFormat#format()` would throw.
    if (!isFinite(now)) {
        throw new RangeError('The `now` option provided to IntlRelativeFormat#format() is not ' +
            'in valid range.');
    }
    if (!isFinite(date)) {
        throw new RangeError('The date value provided to IntlRelativeFormat#format() is not ' +
            'in valid range.');
    }
    var diffReport = diff_1.default(now, date);
    var units = this._options.units || this._selectUnits(diffReport);
    var diffInUnits = diffReport[units];
    if (this._options.style !== 'numeric') {
        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
        if (relativeUnits) {
            return relativeUnits;
        }
    }
    return this._getMessage(units).format({
        '0': Math.abs(diffInUnits),
        when: diffInUnits < 0 ? 'past' : 'future'
    });
};
RelativeFormat.prototype._isValidUnits = function (units) {
    if (!units || es5_1.arrIndexOf.call(FIELDS, units) >= 0) {
        return true;
    }
    if (typeof units === 'string') {
        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
        if (suggestion && es5_1.arrIndexOf.call(FIELDS, suggestion) >= 0) {
            throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` ' +
                'value, did you mean: ' + suggestion);
        }
    }
    throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
        'must be one of: "' + FIELDS.join('", "') + '"');
};
RelativeFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }
    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(RelativeFormat.defaultLocale);
    var localeData = RelativeFormat.__localeData__;
    var i, len, localeParts, data;
    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');
        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }
            localeParts.pop();
        }
    }
    var defaultLocale = locales.pop();
    throw new Error('No locale data has been added to IntlRelativeFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale);
};
RelativeFormat.prototype._resolveStyle = function (style) {
    // Default to "best fit" style.
    if (!style) {
        return STYLES[0];
    }
    if (es5_1.arrIndexOf.call(STYLES, style) >= 0) {
        return style;
    }
    throw new Error('"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
        'must be one of: "' + STYLES.join('", "') + '"');
};
RelativeFormat.prototype._selectUnits = function (diffReport) {
    var i, l, units;
    var fields = FIELDS.filter(function (field) {
        return field.indexOf('-short') < 1;
    });
    for (i = 0, l = fields.length; i < l; i += 1) {
        units = fields[i];
        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
            break;
        }
    }
    return units;
};
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
var round = Math.round;
function daysToYears(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    return days * 400 / 146097;
}
// Thanks to date-fns
// https://github.com/date-fns/date-fns
// MIT © Sasha Koss
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_DAY = 86400000;
function startOfDay(dirtyDate) {
    var date = new Date(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    var startOfDayLeft = startOfDay(dirtyDateLeft);
    var startOfDayRight = startOfDay(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() -
        startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
    var timestampRight = startOfDayRight.getTime() -
        startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
function default_1(from, to) {
    // Convert to ms timestamps.
    from = +from;
    to = +to;
    var millisecond = round(to - from), second = round(millisecond / 1000), minute = round(second / 60), hour = round(minute / 60);
    // We expect a more precision in rounding when dealing with
    // days as it feels wrong when something happended 13 hours ago and
    // is regarded as "yesterday" even if the time was this morning.
    var day = differenceInCalendarDays(to, from);
    var week = round(day / 7);
    var rawYears = daysToYears(day), month = round(rawYears * 12), year = round(rawYears);
    return {
        millisecond: millisecond,
        second: second,
        'second-short': second,
        minute: minute,
        'minute-short': minute,
        hour: hour,
        'hour-short': hour,
        day: day,
        'day-short': day,
        week: week,
        'week-short': week,
        month: month,
        'month-short': month,
        year: year,
        'year-short': year
    };
}
exports.default = default_1;
//# sourceMappingURL=diff.js.map

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License
var hop = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
var realDefineProp = (function () {
    try {
        return !!Object.defineProperty({}, 'a', {});
    }
    catch (e) {
        return false;
    }
})();
var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
var defineProperty = realDefineProp ? Object.defineProperty :
    function (obj, name, desc) {
        if ('get' in desc && obj.__defineGetter__) {
            obj.__defineGetter__(name, desc.get);
        }
        else if (!hop.call(obj, name) || 'value' in desc) {
            obj[name] = desc.value;
        }
    };
exports.defineProperty = defineProperty;
var objCreate = Object.create || function (proto, props) {
    var obj, k;
    function F() { }
    F.prototype = proto;
    obj = new F();
    for (k in props) {
        if (hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }
    return obj;
};
exports.objCreate = objCreate;
var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
    /*jshint validthis:true */
    var arr = this;
    if (!arr.length) {
        return -1;
    }
    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
};
exports.arrIndexOf = arrIndexOf;
var isArray = Array.isArray || function (obj) {
    return toString.call(obj) === '[object Array]';
};
exports.isArray = isArray;
var dateNow = Date.now || function () {
    return new Date().getTime();
};
exports.dateNow = dateNow;
//# sourceMappingURL=es5.js.map

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* @generated */
exports.default = { "locale": "en", "pluralRuleFunction": function (n, ord) {
        var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
        if (ord)
            return (n10 == 1 && n100 != 11) ? 'one'
                : (n10 == 2 && n100 != 12) ? 'two'
                    : (n10 == 3 && n100 != 13) ? 'few'
                        : 'other';
        return (n == 1 && v0) ? 'one' : 'other';
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "year-short": { "displayName": "yr.", "relative": { "0": "this yr.", "1": "next yr.", "-1": "last yr." }, "relativeTime": { "future": { "one": "in {0} yr.", "other": "in {0} yr." }, "past": { "one": "{0} yr. ago", "other": "{0} yr. ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "month-short": { "displayName": "mo.", "relative": { "0": "this mo.", "1": "next mo.", "-1": "last mo." }, "relativeTime": { "future": { "one": "in {0} mo.", "other": "in {0} mo." }, "past": { "one": "{0} mo. ago", "other": "{0} mo. ago" } } }, "week": { "displayName": "week", "relativePeriod": "the week of {0}", "relative": { "0": "this week", "1": "next week", "-1": "last week" }, "relativeTime": { "future": { "one": "in {0} week", "other": "in {0} weeks" }, "past": { "one": "{0} week ago", "other": "{0} weeks ago" } } }, "week-short": { "displayName": "wk.", "relativePeriod": "the week of {0}", "relative": { "0": "this wk.", "1": "next wk.", "-1": "last wk." }, "relativeTime": { "future": { "one": "in {0} wk.", "other": "in {0} wk." }, "past": { "one": "{0} wk. ago", "other": "{0} wk. ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "day-short": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "hour-short": { "displayName": "hr.", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hr.", "other": "in {0} hr." }, "past": { "one": "{0} hr. ago", "other": "{0} hr. ago" } } }, "minute": { "displayName": "minute", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "minute-short": { "displayName": "min.", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} min.", "other": "in {0} min." }, "past": { "one": "{0} min. ago", "other": "{0} min. ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } }, "second-short": { "displayName": "sec.", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} sec.", "other": "in {0} sec." }, "past": { "one": "{0} sec. ago", "other": "{0} sec. ago" } } } } };
//# sourceMappingURL=en.js.map

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
var RelativeTimeFormat;
// -- Utilities ----------------------------------------------------------------
function getCacheId(inputs) {
    return JSON.stringify(inputs.map(function (input) {
        return input && typeof input === 'object' ? orderedProps(input) : input;
    }));
}
function orderedProps(obj) {
    return Object.keys(obj)
        .sort()
        .map(function (k) {
        var _a;
        return (_a = {}, _a[k] = obj[k], _a);
    });
}
var memoizeFormatConstructor = function (FormatConstructor, cache) {
    if (cache === void 0) { cache = {}; }
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var cacheId = getCacheId(args);
        var format = cacheId && cache[cacheId];
        if (!format) {
            format = new ((_a = FormatConstructor).bind.apply(_a, [void 0].concat(args)))();
            if (cacheId) {
                cache[cacheId] = format;
            }
        }
        return format;
    };
};
/* harmony default export */ __webpack_exports__["a"] = (memoizeFormatConstructor);
//# sourceMappingURL=index.js.map

/***/ })

},[1551]);