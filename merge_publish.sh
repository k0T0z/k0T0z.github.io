# `temp` branch is for uploading changes frequently to the repo. However `master` branch is where
# the actual site is hosted. So, in order to publish the changes, we need to merge `temp` branch
# to `master` branch. This is where `merge_publish.sh` comes in.
# [For Linux only] Before running this file, run 'chmod +x merge_publish.sh' to grant permissions for merge_publish.sh.

#!/bin/bash

confirm_push() {
    read -p "Do you want to push these changes? (y/n): " choice
    case "$choice" in
        y|Y ) return 0;;
        n|N ) return 1;;
        * ) echo "Invalid choice. Please enter y or n."; return 1;;
    esac
}

# Check if git is installed
if ! which git >/dev/null; then
  echo "Please install Git first or add it to your PATH if installed already."
  exit 1
fi

echo "Switching to temp branch if not already..."
git switch master

echo "Merging temp branch into master branch..."
git merge temp

echo "Tracking..."
git add .

echo "Commiting..."
git commit -s -m "Merge temp branch into master branch"

if ! confirm_push; then
    echo "Pushing canceled."
    echo "Switching back to temp branch..."
    git switch temp
    exit 1
fi

echo "Pushing..."
git push origin master

echo "Switching back to temp branch..."
git switch temp

