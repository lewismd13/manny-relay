/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// CONCATENATED MODULE: ./src/buttonTest.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // import { uniq } from "lodash";

var getTurns = /\((\d+) turns?\)/gm;
var getName = /(?:<b>)?([\w\s_]+) \(#(\d+)\)/gm;
var page = (0,external_kolmafia_namespaceObject.visitUrl)("clan_raidlogs.php");
var hoboStart = page.indexOf("<div id='Hobopolis'>");
var hoboLog = page.slice(hoboStart + 52, page.indexOf("<p><b>Loot Distribution:</b>", hoboStart));
var l = page.indexOf("<b>Sewers:</b><blockquote>");
var sewerLog = page.slice(l, page.indexOf("</blockquote>", l));
var nonSewerLog = hoboLog.replace(sewerLog, "");
var playerNames = hoboLog.match(getName);

var uniq = _toConsumableArray(new Set(playerNames));

var playerTable = new Map();
var forks = 124;
var mugs = 127;
var juice = 132;
var snuff = 124;
var sliders = 130;
var stews = 89;
var blankets = 89;
var banquets = 5; // const cagebaitPlayers = getProperty("md_cagebait");
// const bosskillers = getProperty("md_bosskiller");

uniq.forEach(element => {
  if (element) {
    var newElement = element.toString();
    var n = String(newElement.slice(0, newElement.indexOf(" (#")));
    playerTable.set(n, 0);
  }
});

var _iterator = _createForOfIteratorHelper(playerTable.keys()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var key = _step.value;
    (0,external_kolmafia_namespaceObject.print)("".concat(key));
    var foo = playerTable.get(key);
    (0,external_kolmafia_namespaceObject.print)("".concat(foo));
  } // split the sewer section of the log at each line break

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var lines = sewerLog.split("<br>"); // parse the sewer log line by line

var _iterator2 = _createForOfIteratorHelper(lines),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var buttonTest_element = _step2.value;

    // check to make sure there's something there first
    if (buttonTest_element) {
      // only care about the grates and valves here, so skip all other lines
      if (buttonTest_element.includes("sewer grate") || buttonTest_element.includes("lowered the water level")) {
        // grab the name out of the string
        // this is the better way to grab the name from the string
        var nn = getName.exec(buttonTest_element);

        if (nn) {
          (0,external_kolmafia_namespaceObject.print)("".concat(nn[0]));
          (0,external_kolmafia_namespaceObject.print)("".concat(nn[1]));
        }
        /*
        const n = element.match(getName);
        // there's probably a way to get just the name in regexp
        // but I haven't figured it out, so we're isolating it here
        let n1;
        if (n) {
          n1 = n.toString();
        }
        n1 = n1?.slice(0, n1.indexOf(` (#`));
        */


        var tt = getTurns.exec(buttonTest_element);

        if (tt) {
          (0,external_kolmafia_namespaceObject.print)("".concat(tt[0]));
          (0,external_kolmafia_namespaceObject.print)("".concat(tt[1]));
        } // now grab turns from string


        var t = buttonTest_element.match(getTurns); // again, there's probably a better way, but now isolating just the number

        var t1 = void 0;

        if (t) {
          t1 = t.toString();
        }

        if (t1) {
          var _t, _t2;

          t1 = (_t = t1) === null || _t === void 0 ? void 0 : _t.slice(1, t1.indexOf(" turn"));
          t1 = (_t2 = t1) === null || _t2 === void 0 ? void 0 : _t2.toString(); // find the player for this line, add the turns to their record in the playerTable map

          var addturns = playerTable.get(n1);
          addturns += parseInt(t1);
          playerTable.set(n1, addturns);
        }
      }
    }
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var lines2 = nonSewerLog.split("<br>");

var _iterator3 = _createForOfIteratorHelper(lines2),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var n = _step3.value;

    if (n) {
      if (!n.includes("defeated by") && !n.includes("went shopping") && n.includes("turn")) {
        // first we extract the player name from the line
        var buttonTest_name = n.match(getName);
        var justName = void 0;

        if (buttonTest_name) {
          justName = buttonTest_name.toString();
        }

        if (justName) {
          var _justName;

          justName = justName.slice(0, (_justName = justName) === null || _justName === void 0 ? void 0 : _justName.indexOf(" (#"));
        } // now we extract the number of turns spent


        var turns = n.match(getTurns);
        var justTurns = void 0;

        if (turns) {
          justTurns = turns.toString();
        }

        if (justTurns) {
          justTurns = justTurns.slice(1, justTurns.indexOf(" turn"));

          var _addturns = playerTable.get(justName);

          _addturns += parseInt(justTurns);
          playerTable.set(justName, _addturns);
        }
      }
    }
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

var totalTurns = sewerLog.match(getTurns);
var sewerTurns = 0;
totalTurns === null || totalTurns === void 0 ? void 0 : totalTurns.forEach(element => {
  (0,external_kolmafia_namespaceObject.print)(element);
  var n = element.slice(1, element.indexOf(" "));
  (0,external_kolmafia_namespaceObject.print)(n);
  sewerTurns += parseInt(n);
  (0,external_kolmafia_namespaceObject.print)("".concat(sewerTurns));
});
var nonSewerTurns = nonSewerLog.match(getTurns);
var otherTurns = 0;

if (nonSewerTurns) {
  nonSewerTurns.forEach(turn => {
    (0,external_kolmafia_namespaceObject.print)(turn);
    var n = turn.slice(1, turn.indexOf(" "));
    otherTurns += parseInt(n);
    (0,external_kolmafia_namespaceObject.print)("".concat(otherTurns));
  });
}

(0,external_kolmafia_namespaceObject.print)("".concat(sewerTurns, " total turns spent in sewer"));
(0,external_kolmafia_namespaceObject.print)("".concat(otherTurns, " total turns spent in non-sewer hobopolis"));
var totalUseful = 0;
playerTable.forEach((value, key) => {
  var n = playerTable.get(key);
  (0,external_kolmafia_namespaceObject.print)("".concat(key, " was responsible for ").concat(n, " useful turns"));
  totalUseful += n;
});
(0,external_kolmafia_namespaceObject.print)("the total useful turns were ".concat(totalUseful));

var _iterator4 = _createForOfIteratorHelper(playerTable.keys()),
    _step4;

try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var player = _step4.value;

    var _t3 = playerTable.get(player);

    var p = _t3 / totalUseful;
    var s = Math.round(sliders * p);
    (0,external_kolmafia_namespaceObject.print)("".concat(player, " gets ").concat(s, " sliders"));
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;