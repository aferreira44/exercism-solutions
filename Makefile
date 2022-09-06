CFLAGS=-Wall -g

clean:
		@# JavaScript
		find . -type d -name node_modules -prune -exec rm -rf {} \;