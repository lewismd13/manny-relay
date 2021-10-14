import { myHash, urlEncode } from "kolmafia";

function sideCommand(cmd: string) {
  let c = "";
  c = c.concat("'/KoLmafia/specialCommand?cmd=");
  c = c.concat(urlEncode(cmd));
  c = c.concat("&pwd=");
  c = c.concat(myHash());
  c = c.concat("'");
  return c;
}

export function mainPaneCommand(cmd: string): string {
  let c = "";
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

export function createNewButton(label: string, cmd: string, img: string): string {
  const generatedCommand = sideCommand(cmd);
  const buttonHtml = `<button title="${label}" alt="${label}" class="button mannyButton" onclick="document.location=${generatedCommand}; void(0);" > <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/${img}.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">${label}</div> </td> </tr> </table> </button>`;
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
