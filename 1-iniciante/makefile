f = e

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
	diff output ans
clean:
	clear
	rm output ans input
