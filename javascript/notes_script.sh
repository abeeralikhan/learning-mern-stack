#! usr/bin/bash

file=./notes.txt

if ! [[ -f "$file" ]]
then
	touch $file
fi

cat < day1-01-2022/notes.txt

