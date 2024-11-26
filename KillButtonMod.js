// ==UserScript==
// @name         Kill Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Press K To Kill Yourself!
// @author       ThASaNdGgUy
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function killPlayer(event) {
        if (event.key === 'k' || event.key === 'K') {
            app.player.kill();
        }
    }

    document.addEventListener('keypress', killPlayer);

    addModToList("Kill Button");
})();
