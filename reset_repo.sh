###################################################################################
#
# DON'T USE THIS FILE UNLESS YOU KNOW WHAT YOU'RE DOING!
#
# This website depends mainly on commit dates on the repo so using this file will
# reset all dates to the current date and time which will miss all old dates.
#
###################################################################################

# This file is made for resetting repo quicker.
# [For Linux only] Before running this file, run 'chmod +x reset_repo.sh' to grant permissions for reset_repo.sh.

#!/bin/bash

confirm_force_push() {
    read -p "Do you want to force push these changes? (y/n): " choice
    case "$choice" in
        y|Y ) return 0;;
        n|N ) return 1;;
        * ) echo "Invalid choice. Please enter y or n."; return 1;;
    esac
}

confirm_delete() {
    read -p "Are you sure you want to remove the .git folder? (y/n): " choice
    case "$choice" in
        y|Y ) return 0;;
        n|N ) return 1;;
        * ) echo "Invalid choice. Please enter y or n."; return 1;;
    esac
}

if confirm_delete; then
    if [ ! -d ".git" ]; then
        echo ".git folder does not exist in the current directory."
    else
        echo "Removing .git folder..."
        rm -rf .git
    fi
else
    echo "Removal of .git folder canceled."
    exit 1
fi

if ! which git >/dev/null; then
    echo "Please install Git first or add it to your PATH if installed already."
    exit 1
fi

if [ -z "$1" ]; then
    echo "Please provide a commit message in the first argument."
    exit 1
fi

echo "Initializing..."
git init

echo "Tracking..."
git add .

echo "Commiting..."
git commit -s -m "$1"

echo "Adding remote..."
git remote add origin https://github.com/k0T0z/k0T0z.github.io.git

if ! confirm_force_push; then
    echo "Force pushing canceled."
    exit 1
fi

echo "Force pushing..."
git push -f origin master
