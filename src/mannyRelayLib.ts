import { myHash, urlEncode } from "kolmafia";

export const cssLink = '<link rel="stylesheet" href="/manny-relay/main.css"></link>';

export const newbuttonscript = `<script lang="Javascript"> function myFunction2(command) {  const req = new XMLHttpRequest(); req.open("GET", \`/KoLmafia/submitCommand?cmd=\${command}&pwd=${myHash()}\`); req.send(); } </script>`;

export function createNewButton(label: string, cmd: string, img: string): string {
  const buttonHtml = `<button title="${label}" alt="${label}" class="button mannyButton" onclick=myFunction2("${urlEncode(
    cmd
  )}") > <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/${img}.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">${label}</div> </td> </tr> </table> </button>`;
  return buttonHtml;
}

export function createConditionalButton(
  label: string,
  cmd: string,
  img: string,
  condition: Function
) {
  if (condition()) {
    const buttonHtml = `<button title="${label}" alt="${label}" class="button mannyButton" onclick=myFunction2("${urlEncode(
      cmd
    )}") > <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/${img}.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">${label}</div> </td> </tr> </table> </button>`;
    return buttonHtml;
  } else return "";
}
