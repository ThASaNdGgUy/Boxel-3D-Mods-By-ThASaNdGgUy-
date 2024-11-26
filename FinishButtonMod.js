// ==UserScript==
// @name         Finish Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Click F To Finish The Level
// @author       ThASaNdGgUy
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function finishLevel(event) {
        if (event.key === 'f' || event.key === 'F') {
            app.player.finish();
        }
    }

    document.addEventListener('keypress', finishLevel);

    addModToList("finish Button");
})();
