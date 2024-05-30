Gravity Switcher Mod

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
        var newAngle = gravityTurns * (Math.PI / 2);
        app.updateGravity(newAngle);
    }

    document.addEventListener('keypress', changeGravity);

    addModToList("Change Gravity Clockwise (Press G)");
})();
