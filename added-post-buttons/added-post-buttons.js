console.log("added-post-buttons.js loaded...");

function loadStyle() {
    let buttonStyle = GM_getResourceText("addedPostButtonsStyle");
    GM_addStyle(buttonStyle);
}

function registerPostButtonCallbacks() {
    jQuery("body").on("click", "#added-buttons #comment-ok", function () {
        if((document.URL.indexOf("https://www.empornium.me/collages.php") >= 0) || (document.URL.indexOf("https://www.empornium.me/forum/recent") >= 0) || (document.URL.indexOf("https://www.empornium.me/torrents.php?action=allcomments") >= 0)){
            let postIdString = jQuery(this).closest("table[id^=post]").attr("id");
            console.log("torrent,forum,collage: " + postIdString);
            hidePost(postIdString);
        } else {
            let postIdString = jQuery(this).closest("div[id^=post]").attr("id");
            hidePost(postIdString);
        }
    });

    jQuery("body").on("click", "#added-buttons #undo-ok", function () {
        undoHidePost();
    });

    jQuery("body").on("click", "#added-buttons #quote-comment", function () {
        insertModalHtml();
        let commentHtml = undefined;
        let cloned = undefined;

        if((document.URL.indexOf("https://www.empornium.me/collages.php") >= 0) || (document.URL.indexOf("https://www.empornium.me/forum/recent") >= 0) || (document.URL.indexOf("https://www.empornium.me/torrents.php?action=allcomments") >= 0)){
            commentHtml = jQuery(this).closest("table[id^=post]").outerHTML;
            cloned = jQuery(this).closest("table[id^=post]").clone();
        } else {
            commentHtml = jQuery(this).closest("div[id^=post]").outerHTML;
            cloned = jQuery(this).closest("div[id^=post]").clone();
        }
        
        
        cloned.find(".smallhead").hide();
        cloned.find(".avatar").hide();
        cloned.find(".sig").hide();
        commentHtml = cloned[0].outerHTML;
        setModalContent(commentHtml);

        jQuery(".quote-comment-modal").show();
        jQuery("#comment-text-area").focus();

        // jQuery(this).closest("div[id^=post]").hide();
        // updateProgressBarValue();
    });
}

function addButtonsToPosts() {
    let buttonsHtml = GM_getResourceText("addedPostButtonsHtml");

    if((document.URL.indexOf("https://www.empornium.me/collages.php") >= 0) || (document.URL.indexOf("https://www.empornium.me/forum/recent") >= 0) || (document.URL.indexOf("https://www.empornium.me/torrents.php?action=allcomments") >= 0)){
        jQuery("table[id^=post]").each(function () {
            jQuery(this).find(".smallhead").find("td").append(buttonsHtml);
        });
    } else {
        jQuery("div[id^=post]").each(function () {
            jQuery(this).find(".smallhead").find("td").append(buttonsHtml);
        });
    }

    registerPostButtonCallbacks();
}

loadStyle();
