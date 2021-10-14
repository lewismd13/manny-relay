string mainCommand(string cmd) {
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

string buttonScript = '<script> function submitReload() { document.location=\'' + mainCommand('mannyBreakfast') +'\'; document.location=\'main.php\'; } </script>';


print(buttonScript);