import {
  availableAmount,
  getWorkshed,
  indexOf,
  inebrietyLimit,
  myAdventures,
  myDaycount,
  myFullness,
  myInebriety,
  myPath,
  myPathId,
  myTurncount,
  pvpAttacksLeft,
  visitUrl,
  write,
} from "kolmafia";
import { $item, have } from "libram";
import { get } from "libram/dist/property";
import { createNewButton } from "./mannyRelayLib";

// link this script's css sheet
const cssLink = '<link rel="stylesheet" href="/manny-relay/main.css"></link>';

// let buttons: string[];
/*
const ballsButton = createNewButton("balls", 'ashq print("balls", "blue")', "ballhat");

buttons.push[createNewButton("Check yo boxen", "cc_snapshot", "familiar25")];
*/
// const ballsButton = createNewButton("balls", 'ashq print("balls", "blue")', "ballhat");
// buttons.push(ballsButton);
const greenBoxButton = createNewButton("Check yo boxen", "cc_snapshot", "familiar25");
// buttons.push(greenBoxButton);

// TODO: there has to be a way to do the construction and push to the array in a single function call. add array name as param in createNewButton?

let breakfastButton = "";

if (myInebriety() === 0 && myFullness() === 0 && get("_unaccompaniedMinerUsed") === 0) {
  breakfastButton = createNewButton("Breakfast time!", "mannyBreakfast", "coffeecup");
}

let preLoop = "";

if (
  myAdventures() < 5 &&
  myInebriety() > inebrietyLimit() &&
  getWorkshed() !== $item`little geneticist dna-splicing lab`
) {
  preLoop = createNewButton("Get sorted for looping", "hccsPre", "syringe3");
}
let gashHop = "";

if (
  myAdventures() < 5 &&
  myInebriety() > inebrietyLimit() &&
  getWorkshed() === $item`little geneticist dna-splicing lab`
) {
  gashHop = createNewButton("Let's jump into that loop", "hccsAscend", "csplaquesmall");
}

let loopButton = "";

if (myPathId() === 25) {
  loopButton = createNewButton("Initiate Loop!", "mannyLoop", "csplaquesmall");
}

let postloopButton = "";
if (get("breakfastCompleted") === false && myInebriety() > 2 && myPath() === "None") {
  postloopButton = createNewButton("Postloop?", "postloop", "volcoino");
}

let autoscendButton = "";
if (myPath() === "Standard") {
  autoscendButton = createNewButton("Initiate autoscend!", "autoscend", "karma");
}

let rolloverButton = "";
if (myPath() === "None" && myInebriety() >= inebrietyLimit() && myAdventures() < 50) {
  rolloverButton = createNewButton("Put on those PJs", "mannyRoll", "nicewatch");
}

let pvpButton = "";

if (pvpAttacksLeft() > 0) {
  pvpButton = createNewButton("Round 1, FIGHT!", "UberPVPOptimizer; pvp loot nice list", "swords");
}

let garboCheckButton = "";

if (myAdventures() > 0 && myInebriety() <= inebrietyLimit()) {
  garboCheckButton = createNewButton("Garbo stashcheck?", "garbocheck", "pantsgiving");
}

let garboButton = "";
if (myTurncount() > 0) {
  if (myDaycount() === 2) {
    garboButton = createNewButton("Run garbo ascend!", "garbo ascend", "parkGarbage");
  } else if (myDaycount() === 1) {
    garboButton = createNewButton("Run garbo!", "garbo", "parkGarbage");
  }
}

let garboPulls = "";
if (!have($item`pantsgiving`) || !have($item`haiku katana`) || !have($item`spooky putty sheet`)) {
  garboPulls = createNewButton(
    "Pull From AfH Stash",
    "/afh; stash take pantsgiving; stash take haiku katana; stash take spooky putty sheet",
    "sputtysheet"
  );
} else if (
  have($item`pantsgiving`) ||
  have($item`haiku katana`) ||
  have($item`spooky putty sheet`)
) {
  garboPulls = createNewButton(
    "Return to AfH Stash",
    "/afh; stash put pantsgiving; stash put haiku katana; stash put spooky putty sheet",
    "sputtysheet"
  );
}

const buttons = [];
buttons.push(breakfastButton);
buttons.push(postloopButton);
buttons.push(preLoop);
buttons.push(gashHop);
buttons.push(loopButton);
buttons.push(greenBoxButton);
buttons.push(autoscendButton);
buttons.push(rolloverButton);
buttons.push(pvpButton);
buttons.push(garboCheckButton);
buttons.push(garboPulls);
buttons.push(garboButton);

const borderBoxStart =
  '<center><div id="mannyScriptsBox"><table  width=95%  cellspacing=0 cellpadding=0><tr><td style="color: white;" align=center bgcolor=green><b>Good Morning, Manny, what would you like to do today?</b></td></tr><tr><td style="padding: 5px; border: 1px solid green;"><center><div>';

const borderBoxEnd = "</div></center></table></div></center>";

// TODO: drop all buttons in an array, iterate through the array to string them together

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

let newScriptBox = borderBoxStart;

buttons.forEach((element) => {
  newScriptBox = newScriptBox.concat(element);
});
newScriptBox = newScriptBox.concat(borderBoxEnd);

function main() {
  const page = visitUrl();
  const strStrt = indexOf(page, "<body>");
  const newpage = page.slice(0, strStrt) + cssLink + newScriptBox + page.slice(strStrt);
  // page = insert(page, strStrt, scriptBox);

  write(newpage);
  /*
  if (formField("cmd") !== "") {
    cliExecute(formField("cmd"));
  }
  */
}

main();
