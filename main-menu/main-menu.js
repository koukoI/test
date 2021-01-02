function addMainMenuToDom() {
    console.log("adding main menu to DOM");

    let mainMenuStyle = GM_getResourceText("mainMenuStyle");
    GM_addStyle(mainMenuStyle);

    let mainMenuHtml = GM_getResourceText("mainMenuHtml");
    let mainMenuElement = document.createElement("div");    
    mainMenuElement.setAttribute("id", "checker-button"); // adds id to new div (kol)
    mainMenuElement.innerHTML = mainMenuHtml;
    document.body.appendChild(mainMenuElement);
   
    setHideAvatarLables();
    setHideSignatureLables();

    registerButtonsCallbacks();
}

function setHideAvatarLables() {
    let isHidingAvatars = GM_getValue("isHidingAvatars");
    if (isHidingAvatars) {
        jQuery(".main-menu-form-popup #hide-avatar-button").html("Show Avatrs");
        jQuery(".avatar").hide();
    } else {
        jQuery(".main-menu-form-popup #hide-avatar-button").html("Hide Avatrs");
        jQuery(".avatar").show();
    }
}

function setHideSignatureLables() {
    let isHidingSignature = GM_getValue("isHidingSignature");
    if (isHidingSignature) {
        jQuery(".main-menu-form-popup #hide-signatures-button").html("Show Signatures");
        jQuery(".sig").hide();
    } else {
        jQuery(".main-menu-form-popup #hide-signatures-button").html("Hide Signatures");
        jQuery(".sig").show();
    }
}

function registerButtonsCallbacks() {
    console.log("Registering main menu buttons callbacks...");


    
    // shows the main menu
    if((document.URL.indexOf(collage_checker_string) >= 0) || (document.URL.indexOf(forum_checker_string) >= 0) || (document.URL.indexOf(torrent_checker_string) >= 0)){
        jQuery("body").on("click", "#main-menu-button", function () {
            let newestCommentId = -1;
            try {
                newestCommentId = parseInt(
                    jQuery("table[id^=post]").first().find(".post_id").html().replace("#", "")
                );
            } catch (error) {
                console.error(
                    `Couldn't find posts on this page... Something is very wrong... Resetting. Btw, caught this error ${error}`
                );
                clearSavedValues();
            }
            jQuery("#most-recent-comment-input").val(newestCommentId);
            document.getElementById("#main-menu-button").innerHTML = "Close Form";  // testing this (kol)
            jQuery(".main-menu-form-popup").show();
        });
    } else {
        console.log("main-menu.js");
        jQuery("body").on("click", "main-menu-button", function () {
            try {
                newestCommentId = parseInt(
                    jQuery("div[id^=post]").attr("id").replace("post", "")
                );
            } catch (error) {
                console.error(
                    `Couldn't find posts on this page... Something is very wrong... Resetting. Btw, caught this error ${error}`
                );
                clearSavedValues();
            }
            jQuery("#most-recent-comment-input").val(newestCommentId);
            document.getElementById("main-menu-button").innerHTML = "Close Form";  // testing this (kol)
            jQuery(".main-menu-form-popup").show();
        });
    }

    // hides the main menu (kol)
    if(document.getElementById("main-menu-button").innerHTML="Close Form") {
        jQuery("body").on("click", "main-menu-button", function () {
            document.getElementById("main-menu-button").innerHTML = "Open Form";
            jQuery(".main-menu-form-popup").hide(); 
        });
    }

    // hides the main menue and clears saved data...
    jQuery("body").on("click", ".main-menu-form-popup #clear-data-button", function () {
        clearSavedValues();
        jQuery(".main-menu-form-popup").hide();
    });

    /* // hides the main menue
    jQuery("body").on("click", ".main-menu-form-popup #cancel-button", function () {
        jQuery(".main-menu-form-popup").hide();
    }); */ 

    // shows settings modal
    jQuery("body").on("click", ".main-menu-form-popup #settings-button", function () {
        insertSettingsModalHtml();
        jQuery(".quote-comment-modal").show();
        jQuery(".main-menu-form-popup").hide();
    });

    // hides/show avatars
    jQuery("body").on("click", ".main-menu-form-popup #hide-avatar-button", function () {
        let isHidingAvatars = GM_getValue("isHidingAvatars");
        if (isHidingAvatars) {
            isHidingAvatars = !isHidingAvatars;
        } else {
            isHidingAvatars = !isHidingAvatars;
        }
        GM_setValue("isHidingAvatars", isHidingAvatars);
        setHideAvatarLables(isHidingAvatars);
    });

    // hides/show signatues
    jQuery("body").on("click", ".main-menu-form-popup #hide-signatures-button", function () {
        let isHidingSignature = GM_getValue("isHidingSignature");
        if (isHidingSignature) {
            isHidingSignature = !isHidingSignature;
        } else {
            isHidingSignature = !isHidingSignature;
        }
        GM_setValue("isHidingSignature", isHidingSignature);
        setHideSignatureLables(isHidingSignature);
    });

    // starts comment scan
    jQuery("body").on("click", ".main-menu-form-popup #start-button", function () {
        let mostRecentComment = parseInt(jQuery("#most-recent-comment-input").val());
        let oldestComment = parseInt(jQuery("#oldest-comment-input").val());
        if (mostRecentComment == "" || oldestComment == "") {
            alert("Both fields for comment numbers must be filled");
        } else if (mostRecentComment <= oldestComment) {
            alert("Olderst comment must be a smaller number than the newest comment");
        } else {
            jQuery(".main-menu-form-popup").hide();
            GM_setValue("mostRecentComment", mostRecentComment);
            GM_setValue("oldestComment", oldestComment);
            GM_setValue("isScaning", true);
            scanPosts();
        }
    });
}

console.log("main-menu.js loaded...");
