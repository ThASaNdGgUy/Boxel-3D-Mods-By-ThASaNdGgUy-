// ==UserScript==
// @name         Gravity Changer Mod
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Press G To Switch Gravity By 90 Degrees Clockwise
// @author       ThASaNdGgUy
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var gravityTurns = 0;

    function changeGravity(event) {
        if (event.key === 'g' || event.key === 'G') {
            gravityTurns++;
            changePlayerGravityClockwise();
        }
    }

    function changePlayerGravityClockwise() {
        let newX = app.engine.gravity.y;
        let newY = -app.engine.gravity.x;
        app.engine.gravity.x = newX;
        app.engine.gravity.y = newY;
    }

    document.addEventListener('keypress', changeGravity);

    addModToList("gravityChanger");
})();
