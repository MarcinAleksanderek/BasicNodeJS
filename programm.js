process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	var instruction = input.toString().trim();
	if(input !== null) {
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
			break;
			case '/version':
				process.stdout.write(process.versions.node);
			break;
			case '/lang':
				//pracuje na Windowsie wiec nie mam dostepu do lang'a
				process.stdout.write(process.env.lang);
			break;
			default:
				process.stderr.write('Wrong instruction!');
		}
	}
});