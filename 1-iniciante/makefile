f = 1005

all:
	clear
	node $(f).js < input
init:
	clear
	touch output ans input
	cp ../templates/template.js $(f).js | clear
	ls
diff:
	clear
	node $(f).js < input > output
	clear
	colordiff output ans
clean:
	clear
	rm output ans input
