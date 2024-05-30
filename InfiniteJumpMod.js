// ==UserScript==
// @name         Boxel 3D Infinite Jump Mod
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Allows the player to jump infinitely with no cooldown
// @author       ThASaNdGgUy
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function modifyJump() {
        if (!app || !app.player) return;

        app.player.allowJump = true; 
    }

    addUpdateFunction(modifyJump);

    addModToList("Infinite Jump");
})();
