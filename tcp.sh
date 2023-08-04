# This file is made for pushing changes to repo quicker.
# tcp.sh stands for (t)rack (c)ommit (p)ush
# [For Linux only] Before running this file, run 'chmod +x tcp.sh' to grant permissions for tcp.sh.

#!/bin/bash

# Check if git is installed
if ! which git >/dev/null; then
  echo "Please install Git first or add it to your PATH if installed already."
  exit 1
fi

if [ -z "$1" ]; then
    echo "Please provide a commit message in the first argument."
    exit 1
fi

echo "Tracking..."
git add .

echo "Commiting..."
git commit -s -m "$1"

echo "Pushing..."
git push origin master

