// ==UserScript==
// @name         Boxel 3D 30 Second Mod
// @namespace    http://tampermonkey.net/
// @version      v1.0 Test
// @description  A script that makes u die every 30 seconds
// @author       ThASaNdGgUy
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

       var startTime;
      var playerKilled = false;

        function startTimer() {
        startTime = Date.now(); 
    }

    function checkPlayerDeath() {
        if (!app || !app.player || !startTime) return; 
        var currentTime = Date.now();
        var elapsedTime = currentTime - startTime;

             if (elapsedTime >= 30000 && !playerKilled) {             app.player.kill();             playerKilled = true;                  setTimeout(function() {
                startTime = Date.now();
                playerKilled = false;             }, 1000); 
        }
    }

      startTimer(); 
      addUpdateFunction(checkPlayerDeath);

    addModToList("30 Second Mod");
})();
