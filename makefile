.PHONY: all continuous cv

all:
	jekyll build

serve:
	jekyll serve

cv:
	@if [ -d resume ]; then \
		git -C resume pull; \
	else \
		git clone git@github.com:vagos/resume.git; \
	fi
	make -C resume
	cp resume/cv.pdf assets/pdf/cv.pdf
