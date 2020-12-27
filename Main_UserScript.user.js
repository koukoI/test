// ==UserScript==
// @name         Checker Goodies
// @namespace    http://tampermonkey.net/
// @version      1.64
// @description  Credits to curtwagner who wrote and maintained the original script.
// @author       koukol
// @match        https://www.empornium.me/torrents.php?*action=allcomments
// @include      https://www.empornium.me/torrents.php?*action=allcomments
// @include      https://www.empornium.me/requests.php?*action=allcomments
// @include      https://www.empornium.me/forum/recent*
// @include      https://www.empornium.me/collages.php*
// @downloadURL  https://github.com/koukoI/test/raw/goodies/Main_UserScript.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_openInTab
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     mainMenuStyle https://raw.githubusercontent.com/koukoI/test/goodies/main-menu/main-menu-style.css
// @resource     mainMenuHtml https://raw.githubusercontent.com/koukoI/test/goodies/main-menu/main-menu-html.html
// @resource     addedPostButtonsHtml https://raw.githubusercontent.comkoukoI/test/goodies/added-post-buttons/added-post-buttons-html.html
// @resource     addedPostButtonsStyle https://raw.githubusercontent.com/koukoI/test/goodies/added-post-buttons/added-post-buttons-style.css
// @resource     progressBarHtml https://raw.githubusercontent.com/koukoI/test/goodies/progress-bar/progress-bar-html.html
// @resource     progressBarStyle https://raw.githubusercontent.com/koukoI/test/goodies/progress-bar/progress-bar-style.css
// @resource     modalHtml https://raw.githubusercontent.com/koukoI/test/goodies/modal/modal-html.html
// @resource     modalSettingsHtml https://raw.githubusercontent.com/koukoI/test/goodies/modal/modal-settings-html.html
// @resource     modalStyle https://raw.githubusercontent.com/koukoI/test/goodies/modal/modal-style.css
// @resource     sandboxHtml https://raw.githubusercontent.com/koukoI/test/goodies/sandbox/sandbox-html.html
// @require      https://raw.githubusercontent.com/koukoI/test/goodies/gm-lib.js
// @require      https://raw.githubusercontent.com/koukoI/test/goodies/sandbox/sandbox.js
// @require      https://raw.githubusercontent.com/koukoI/test/goodies/modal/modal.js
// @require      https://raw.githubusercontent.com/koukoI/test/goodies/progress-bar/progress-bar.js
// @require      https://raw.githubusercontent.com/koukoI/test/goodies/added-post-buttons/added-post-buttons.js
// @require      https://raw.githubusercontent.com/koukoI/test/goodies/post-scanner.js
// @require      https://raw.githubusercontent.com/koukoI/test/goodies/main-menu/main-menu.js
// @require      https://raw.githubusercontent.com/koukoI/test/goodies/main.js
// ==/UserScript==
// "use strict";
