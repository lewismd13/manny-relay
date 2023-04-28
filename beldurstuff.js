Object.assign(globalThis, require("kolmafia"));

export function submitCommand(commandText) {
  const req = new XMLHttpRequest();
  req.open("GET", `/KoLmafia/submitCommand?cmd=${urlEncode(commandText)}&pwd=${myHash()}`);
  req.send();
}

export function submitEquip(item, slot = undefined) {
  const req = new XMLHttpRequest();
  req.open(
    "GET",
    `/KoLmafia/submitCommand?cmd=${urlEncode(
      `equip ${slot === undefined ? "" : slot.toString()} ¶${toInt(item)}`
    )}&pwd=${myHash()}`
  );
  req.send();
}

export function submitUse(item, qty = 1) {
  const req = new XMLHttpRequest();
  req.open(
    "GET",
    `/KoLmafia/submitCommand?cmd=${urlEncode(`use ${qty} ¶${toInt(item)}`)}&pwd=${myHash()}`
  );
  req.send();
}

export function submitAcquire(item, qty = 1) {
  const req = new XMLHttpRequest();
  req.open(
    "GET",
    `/KoLmafia/submitCommand?cmd=${urlEncode(`acquire ${qty} ¶${toInt(item)}`)}&pwd=${myHash()}`
  );
  req.send();
}
