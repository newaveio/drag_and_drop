COMMIT_MESSAGE = Update all files and folders

all: add commit push

add:
	git add .

commit:
	git commit -m "$(COMMIT_MESSAGE)"

push:
	git push

pull:
	git pull

.PHONY: all add commit push pull