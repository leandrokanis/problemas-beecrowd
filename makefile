f = e

init:
	clear
	cp ./templates/template.js $(f).js
	cp ./templates/template.spec.js $(f).spec.js
	ls