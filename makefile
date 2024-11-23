all:
	jekyll build

continuous:
	jekyll serve

cv:
	git clone git@github.com:vagos/resume.git
	make -C resume
	cp resume/build/main.pdf assets/pdf/cv.pdf

