# Simple GMod Loading Screen

## About

I got tired of all these "welcome to my server, here's a thousand things to read" loading screens, so I created a minimal screen for my server.

This doesn't have all the bells and whistles of "you're on your way to <host>, playing <map>!" with music playing in the background. It's just a spinner and some text that changes. Very reminicent of GMod 10's default loading screen.

## Installation

1. Clone this repo onto your webserver somewhere 
2. [Download jQuery 2.x][1]
3. Rename `jquery-2.x.x.min.js` to `jquery.js`
4. Place `jquery.js` in the `js/thirdparty` folder
5. Edit phrases.json to include all the phrases you'd like to display to your user
6. In you server's `server.cfg`, modify `sv_loadingurl` to point to this page.

## Reference

- [How to set up sv_loadingurl][2]
- Use [this page][3] to make sure your `phrases.json` file is formatted properly

[1]: https://jquery.com/download/#jquery-2-x
[2]: https://wiki.garrysmod.com/page/Loading_URL
[3]: http://jsonlint.com/
