import {
  fullnessLimit,
  indexOf,
  inebrietyLimit,
  myAdventures,
  myDaycount,
  myFullness,
  myInebriety,
  myPath,
  pvpAttacksLeft,
  visitUrl,
  write,
} from "kolmafia";
import { $path } from "libram";
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
const greenBoxButton = createNewButton("Check yo boxen", "av-snapshot", "familiar25");

// buttons.push(greenBoxButton);

// TODO: there has to be a way to do the construction and push to the array in a single function call. add array name as param in createNewButton?

let breakfastButton = "";

if (myInebriety() === 0 && myFullness() === 0 && !get("_cargoPocketEmptied")) {
  breakfastButton = createNewButton("Breakfast time!", "mannyBreakfast", "coffeecup");
}

let csGashHop = "";

if (myAdventures() < 5 && myInebriety() > inebrietyLimit() && pvpAttacksLeft() === 0) {
  csGashHop = createNewButton("Let's jump into that loop", "hccsAscend", "csplaquesmall");
}
/*
let casualHop = "";

if (
  myAdventures() < 5 &&
  myInebriety() > inebrietyLimit() &&
  pvpAttacksLeft() === 0 &&
  get("csServicesPerformed") &&
  myDaycount() === 1
) {
  casualHop = createNewButton("Dirty Casual Time", "casAscend", "beanbag");
}
*/
let loopButton = "";

if (myPath() === $path`community service`) {
  loopButton = createNewButton("Initiate Loop!", "mannyLoop", "csplaquesmall");
}

let postloopButton = "";
if (get("breakfastCompleted") === false && myDaycount() === 1 && myPath() === $path`none`) {
  postloopButton = createNewButton("Postloop?", "postloop", "volcoino");
}

let autoscendButton = "";
if (myPath() === $path`standard`) {
  autoscendButton = createNewButton("Initiate autoscend!", "autoscend", "karma");
}

let rolloverButton = "";
if (myPath() === $path`none` && myInebriety() >= inebrietyLimit() && myAdventures() < 20) {
  rolloverButton = createNewButton("Put on those PJs", "mannyRoll", "nicewatch");
}

let pvpButton = "";

if (pvpAttacksLeft() > 0) {
  pvpButton = createNewButton(
    "Round 1, FIGHT!",
    "uberpvpoptimizer; pvp loot karmic battle",
    "swords"
  );
}

let garboButton = "";
if (myAdventures() > 0) {
  if (myDaycount() === 2) {
    garboButton = createNewButton(
      "Run garbo ascend nobarf!",
      "garbo ascend nobarf workshed=train",
      "parkGarbage"
    );
  } else if (myDaycount() === 1) {
    garboButton = createNewButton("Run garbo nobarf!", "garbo nobarf", "parkGarbage");
  }
}

let overdrinkButton = "";
if (myPath() === $path`none` && myInebriety() === inebrietyLimit() && myAdventures() === 0) {
  if (myDaycount() === 2 && !get("csServicesPerformed")) {
    overdrinkButton = createNewButton("Get drunj", "overdrink", "pokefam47");
  } else if (myDaycount() === 1 && get("csServicesPerformed")) {
    overdrinkButton = createNewButton("Get drunj", "overdrink", "pokefam47");
  }
}

let baggoButton = "";
if (myFullness() === fullnessLimit() && myAdventures() > 0 && myInebriety() <= inebrietyLimit()) {
  baggoButton = createNewButton("Baggo me, baby", "baggo olfact=balance", "duffelbag2");
}

let fancyFoodButton = "";
if (myFullness() === 0 && myInebriety() <= 5) {
  fancyFoodButton = createNewButton("Fancy diet!", "fancyfood", "hamburger");
}

const buttons = [];
buttons.push(breakfastButton);
buttons.push(postloopButton);
buttons.push(csGashHop);
// buttons.push(casualHop);
buttons.push(loopButton);
buttons.push(greenBoxButton);
buttons.push(fancyFoodButton);
buttons.push(autoscendButton);
buttons.push(rolloverButton);
buttons.push(overdrinkButton);
buttons.push(pvpButton);
buttons.push(garboButton);
buttons.push(baggoButton);

const borderBoxStart =
  '<center><div id="mannyScriptsBox"><table  width=95%  cellspacing=0 cellpadding=0><tr><td style="color: white;" align=center bgcolor=green><b>Good Morning, Manny, what would you like to do today?</b></td></tr><tr><td style="padding: 5px; border: 1px solid green;"><center><div>';

const borderBoxEnd = "</div></center></table></div></center>";

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
