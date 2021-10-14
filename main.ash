/*
void castLeash() {
	use_skill($skill[leash of linguini]);
}
// from chit
string submitCommand(string cmd) {
	buffer c;
	c.append('/KoLmafia/submitCommand?cmd=');
	c.append(url_encode(cmd));
	c.append('&pwd=');
	c.append(my_hash());
	return c;
}

string mainCommand(string cmd) {
	buffer c;
	c.append('/KoLmafia/mainCommand?cmd=');
	c.append(url_encode(cmd));
	c.append('&pwd=');
	c.append(my_hash());
	return c;
}

void main() {
	buffer page;
	string buttonCommand = '<center><a href="test.ash"><img src="/images/relayimages/mannytests/button.jpg" border="0"></a></center>';
	page.append(visit_url());
	page.replace_string('<a href="town.php">', '<a href="' + mainCommand('cc_snapshot') + '">');
	page.replace_string('blue', 'green');
	page.replace_string('The Kingdom of Loathing', 'Manny\'s happy fun time place');
	page.write();

} */

// function to create the URL command

// function to build button from command, img src, title


string specialCommand(string cmd) {
	buffer c;
	c.append('/KoLmafia/specialCommand?cmd=');
	c.append(url_encode(cmd));
	c.append('&pwd=');
	c.append(my_hash());
	// c.append('\'');
	// somehow there must be a way to refresh after finishing the command
	// c.append('&href=http');
	return c;
}

string mainCommand(string cmd) {
	buffer c;
	c.append('/KoLmafia/mainCommand?cmd=');
	c.append(url_encode(cmd));
	c.append('&pwd=');
	c.append(my_hash());
	// c.append('\'');
	// somehow there must be a way to refresh after finishing the command
	// c.append('&href=http');
	return c;
}

// function to create the URL command

// function to build button from command, img src, title

string buttonBeginning = '<button title="Go to town" alt="go to town" class="button mannyButton" onclick="document.location=\'';


buffer buildButton(string action, string img, string name) {
	buffer newButton;
	// beginning
	newButton.append(buttonBeginning);
	// append action
	newButton.append(action);
	// append img source
	newButton.append(img);
	// append name
	newButton.append(name);
	// append end
	newButton.append('');
	return newButton;
}
/*
buffer buildRelayCommand() {
	buffer newCommand;
	return newCommand;
}
*/
// string script_selection = '<div id="bfastholder"><table  width=95%  cellspacing=0 cellpadding=0><tr><td style="color: white;" align=center bgcolor=green><b>Good Morning, Manny, what would you like to do today?</b></td></tr><tr><td style="padding: 5px; border: 1px solid green;"><center><div><button id="bid_999" title="Fight an Eldritch Tentacle!" alt="Fight an Eldritch Tentacle!" class="button bfast" rel="goto /KoLmafia/mainCommand?cmd=breakfast&pwd=my_hash()"><table><tr><td valign="center" align="center"><img src="/images/itemimages/perf_negroni.gif" height="30" width="30" /></td><td valign="center" align="center" width="200"><div class="b">Have a negroni, pal</div></td></tr></table></button></div></center></div></td></tr>';

string borderBoxStart = '<center><div id="mannyScriptsBox"><table  width=95%  cellspacing=0 cellpadding=0><tr><td style="color: white;" align=center bgcolor=green><b>Good Morning, Manny, what would you like to do today?</b></td></tr><tr><td style="padding: 5px; border: 1px solid green;"><center><div>';

string borderBoxEnd = '</div></center></table></div></center>';

string mannyButtonStyle = '<style> button.mannyButton { margin: 0px 5px 5px 0px; } .mannyButton .b { display: table-cell; height: 41px; vertical-align: middle; font-weight: bold; } #effdiv { min-height: 250px; } </style>';

string customButton = '<button title="Go to town" alt="go to town" class="button mannyButton" onclick="document.location=\'' + mainCommand('cc_snapshot') + '\'"> <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/familiar25.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">Check them green boxen!</div> </td> </tr> </table> </button>';

string buttonScript = '<script> function submitReload() { document.location=\'' + mainCommand('cc_snapshot') +'\'; document.location=\'main.php\'; } </script>';

string scriptForBreakfast = "<script> function submitBreakfast() { document.location='/kolmafia/specialCommand?cmd=mannyBreakfast&pwd='+ myHash()+'&apos'(); document.location='main.php'; } </script>";

string buttonForBreakfast = '<button title="Breakfast time" alt="breakfast" class="button mannyButton" onclick="submitBreakfast()" > <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/coffeecup.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">Breakfast time</div> </td> </tr> </table> </button>';

string hoboDayButton = '<button title="Hobopolis Prep" alt="Hobopolis Prep" class="button mannyButton" onclick="document.location=\'' + mainCommand('hoboDay') + '\'"> <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/stuffhodg.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">Let\'s farm Hobopolis!</div> </td> </tr> </table> </button>';

string scoboButton = '<button title="make scobos" alt="make scobos" class="button mannyButton" onclick="document.location=\'' + mainCommand('scobos 2.0.ash') + '\'"> <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/braces.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">Make some scobos</div> </td> </tr> </table> </button>';

string beldurButton = '<button title="make scobos" alt="make scobos" class="button mannyButton" onclick="document.location=\'main.php?cmd=csend+1+meat+to+manendra+||+balls\'"> <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/timespinner.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">kmail everything to beldur</div> </td> </tr> </table> </button>';



void main() {

	if (get_property("mannyScriptButtons") == "true") { 
		buffer page;
		page.append(visit_url());
		int strStart = page.index_of('<center><div id="bfastholder"');
		page.insert(strStart, borderBoxEnd);
		page.insert(page.index_of(borderBoxEnd), beldurButton);
		
		page.insert(page.index_of(beldurButton), scoboButton);
		page.insert(page.index_of(scoboButton), hoboDayButton);
		page.insert(page.index_of(hoboDayButton), customButton);
		page.insert(page.index_of(customButton), buttonScript);
		page.insert(page.index_of(buttonScript), borderBoxStart);
		page.insert(page.index_of(borderBoxStart), mannyButtonStyle);
		page.write();
	}

	if (form_field("cmd") != "") {
		print(form_field("cmd"), 'blue');
	}

}


// string customButton2 = '<button title="Go to town" alt="go to town" class="button mannyButton" onclick="document.location=\'' + mainCommand('cc_snapshot') + '\'"> <table> <tr> <td valign="center" align="center"> <img src="images/itemimages/familiar25.gif" height="30" width="30" /> </td> <td valign="center" align="center" width="200"> <div class="b">Check them green boxen!</div> </td> </tr> </table> </button>';


/*
void main() {

	if (get_property("mannyScriptButtons") == "true") { 
		buffer page;
		page.append(visit_url());
		int strStart = page.index_of('<center><div id="bfastholder"');
		page.insert(strStart, borderBoxEnd);
		page.insert(page.index_of(borderBoxEnd), customButton2);
		page.insert(page.index_of(customButton2), borderBoxStart);
		page.insert(page.index_of(borderBoxStart), mannyButtonStyle);
		page.insert(page.index_of(mannyButtonStyle), buttonScript);
		page.write();
	}
}

*/