Object.assign(globalThis, require("kolmafia"));

export function submitCommand(commandText) {
  const req = new XMLHttpRequest();
  req.open("GET", `/KoLmafia/submitCommand?cmd=${urlEncode(commandText)}&pwd=${myHash()}`);
  req.send();
}
