f = 1001

all:
	clear
	node $(f).js < input > output
init:
	clear
	touch output ans input
	touch $(f).js
diff:
	clear
	node $(f).js < input > output
	clear
	colordiff output ans
clean:
	clear
	rm output ans input
