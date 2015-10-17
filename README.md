# RndPhrase Improved
Generate secure passwords easily and maintain cross domain uniqueness.

## About
This is the firefox plugin for RndPhrase Improved. It is currently an ongoing project so hang on. If you want any features, please fork and make pull requests.

## Installation
Start by getting `jpm` (hint: you also need nodejs for this. Sorry.)

    npm install jpm --global

If you didn't get the code already, do so

    git clone https://github.com/RndPhrase/RndPhrase-Firefox.git

then change directory and build it
    cd RndPhrase-Firefox
    npm install
    jpm xpi

From inside firefox, find the .xpi file and install it.

## Usage
The first time you go into a website it will prompt you for a session seed. This will be used as seed until the browser is closed.

To get the rndphrase password prompt type in `#` into a password field. It will then make a popup outside the website DOM for you to enter it into.
When done just hit tab or enter, and it will insert it into your password field.

## Contact
You can mail me on rel at zx dot dk. You can also join #rndphrase on irc.freenode.net
