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
;// CONCATENATED MODULE: ./src/mannyRelayLib.ts


function sideCommand(cmd) {
  var c = "";
  c = c.concat("'/KoLmafia/specialCommand?cmd=");
  c = c.concat((0,external_kolmafia_namespaceObject.urlEncode)(cmd));
  c = c.concat("&pwd=");
  c = c.concat((0,external_kolmafia_namespaceObject.myHash)());
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

function newCommand(cmd) {
  var c = "";
  c = c.concat("'/KoLmafia/submitCommand?cmd=");
  c = c.concat(urlEncode(cmd));
  c = c.concat("&pwd=");
  c = c.concat(myHash());
  c = c.concat("'");
  return c;
}

function createAjaxButton(label, cmd, img) {
  var generatedCommand = newCommand(cmd);
  var buttonHtml = "<button title=\"".concat(label, "\" alt=\"").concat(label, "\" class=\"button mannyButton\" onclick=\"submitCommand(").concat(cmd, ")\" > <table> <tr> <td valign=\"center\" align=\"center\"> <img src=\"images/itemimages/").concat(img, ".gif\" height=\"30\" width=\"30\" /> </td> <td valign=\"center\" align=\"center\" width=\"200\"> <div class=\"b\">").concat(label, "</div> </td> </tr> </table> </button>");
  return buttonHtml;
}
function createNewButton(label, cmd, img) {
  var generatedCommand = sideCommand(cmd);
  var buttonHtml = "<button title=\"".concat(label, "\" alt=\"").concat(label, "\" class=\"button mannyButton\" onclick=\"document.location=").concat(generatedCommand, "; void(0);\" > <table> <tr> <td valign=\"center\" align=\"center\"> <img src=\"images/itemimages/").concat(img, ".gif\" height=\"30\" width=\"30\" /> </td> <td valign=\"center\" align=\"center\" width=\"200\"> <div class=\"b\">").concat(label, "</div> </td> </tr> </table> </button>");
  return buttonHtml;
}
;// CONCATENATED MODULE: ./src/buttonTest.ts

 // import { uniq } from "lodash";

/*
const getTurns = /\((\d+) turns?\)/gm;
const getName = /(?:<b>)?([\w\s_]+) \(#(\d+)\)/gm;
const page = visitUrl("clan_raidlogs.php");
const hoboStart = page.indexOf("<div id='Hobopolis'>");
const hoboLog = page.slice(hoboStart + 52, page.indexOf("<p><b>Loot Distribution:</b>", hoboStart));
const l = page.indexOf("<b>Sewers:</b><blockquote>");
const sewerLog = page.slice(l, page.indexOf("</blockquote>", l));
const nonSewerLog = hoboLog.replace(sewerLog, "");
const playerNames = hoboLog.match(getName);
const uniq = [...new Set(playerNames)];
const playerTable = new Map();

const forks = 124;
const mugs = 127;
const juice = 132;
const snuff = 124;
const sliders = 130;
const stews = 89;
const blankets = 89;
const banquets = 5;

// const cagebaitPlayers = getProperty("md_cagebait");
// const bosskillers = getProperty("md_bosskiller");

uniq.forEach((element) => {
  if (element) {
    const newElement = element.toString();
    const n = String(newElement.slice(0, newElement.indexOf(` (#`)));
    playerTable.set(n, 0);
  }
});

for (const key of playerTable.keys()) {
  print(`${key}`);
  const foo = playerTable.get(key);
  print(`${foo}`);
}

// split the sewer section of the log at each line break
const lines = sewerLog.split("<br>");

// parse the sewer log line by line
for (const element of lines) {
  // check to make sure there's something there first
  if (element) {
    // only care about the grates and valves here, so skip all other lines
    if (element.includes("sewer grate") || element.includes("lowered the water level")) {
      // grab the name out of the string

      // this is the better way to grab the name from the string
      const nn = getName.exec(element);
      if (nn) {
        print(`${nn[0]}`);
        print(`${nn[1]}`);
      } */

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

/*     const tt = getTurns.exec(element);
      if (tt) {
        print(`${tt[0]}`);
        print(`${tt[1]}`);
      }
      // now grab turns from string
      const t = element.match(getTurns);
      // again, there's probably a better way, but now isolating just the number
      let t1;
      if (t) {
        t1 = t.toString();
      }
      if (t1) {
        t1 = t1?.slice(1, t1.indexOf(` turn`));
        t1 = t1?.toString();
        // find the player for this line, add the turns to their record in the playerTable map
        let addturns: number = playerTable.get(n1);
        addturns += parseInt(t1);
        playerTable.set(n1, addturns);
      }
    }
  }
}

const lines2 = nonSewerLog.split("<br>");

for (const n of lines2) {
  if (n) {
    if (!n.includes("defeated by") && !n.includes("went shopping") && n.includes("turn")) {
      // first we extract the player name from the line
      const name = n.match(getName);
      let justName;
      if (name) {
        justName = name.toString();
      }
      if (justName) {
        justName = justName.slice(0, justName?.indexOf(` (#`));
      }
      // now we extract the number of turns spent
      const turns = n.match(getTurns);
      let justTurns;
      if (turns) {
        justTurns = turns.toString();
      }
      if (justTurns) {
        justTurns = justTurns.slice(1, justTurns.indexOf(` turn`));
        let addturns = playerTable.get(justName);
        addturns += parseInt(justTurns);
        playerTable.set(justName, addturns);
      }
    }
  }
}

const totalTurns = sewerLog.match(getTurns);
let sewerTurns = 0;

totalTurns?.forEach((element) => {
  print(element);
  const n = element.slice(1, element.indexOf(` `));
  print(n);
  sewerTurns += parseInt(n);
  print(`${sewerTurns}`);
});

const nonSewerTurns = nonSewerLog.match(getTurns);
let otherTurns = 0;

if (nonSewerTurns) {
  nonSewerTurns.forEach((turn) => {
    print(turn);
    const n = turn.slice(1, turn.indexOf(` `));
    otherTurns += parseInt(n);
    print(`${otherTurns}`);
  });
}

print(`${sewerTurns} total turns spent in sewer`);
print(`${otherTurns} total turns spent in non-sewer hobopolis`);
let totalUseful = 0;
playerTable.forEach((value, key) => {
  const n = playerTable.get(key);
  print(`${key} was responsible for ${n} useful turns`);
  totalUseful += n;
});
print(`the total useful turns were ${totalUseful}`);

for (const player of playerTable.keys()) {
  const t = playerTable.get(player);
  const p = t / totalUseful;
  const s = Math.round(sliders * p);
  print(`${player} gets ${s} sliders`);
}
*/

(0,external_kolmafia_namespaceObject.print)("".concat(createNewButton("Run garbo!", "garbo", "parkGarbage")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;