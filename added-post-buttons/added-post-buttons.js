console.log("added-post-buttons.js loaded...");

function loadStyle() {
    let buttonStyle = GM_getResourceText("addedPostButtonsStyle");
    GM_addStyle(buttonStyle);
}

// let mainMenuHtml = GM_getResourceText("mainMenuHtml");
// let mainMenuElement = document.createElement('div');
// mainMenuElement.innerHTML = mainMenuHtml;
// document.body.appendChild(mainMenuElement);

function registerPostButtonCallbacks() {
    jQuery("body").on("click", "#added-buttons #comment-ok", function () {
        //let postIdString = jQuery(this).closest("table[id^=post]").attr("id");
        let postIdString = jQuery(this).closest("table[id^=post]").attr("id");
        console.log(postIdString);
        hidePost(postIdString);
        // jQuery(this).closest("div[id^=post]").hide();
        // updateProgressBarValue();
    });

    jQuery("body").on("click", "#added-buttons #undo-ok", function () {
        undoHidePost();
        // let postIdString = jQuery(this).closest("div[id^=post]").attr("id");
        // hidePost(postIdString);
        // jQuery(this).closest("div[id^=post]").hide();
        // updateProgressBarValue();
    });

    jQuery("body").on("click", "#added-buttons #quote-comment", function () {
        insertModalHtml();
        console.log(jQuery(this).closest("table[id^=post]"));
        let commentHtml = jQuery(this).closest("table[id^=post]").outerHTML;
        let cloned = jQuery(this).closest("table[id^=post]").clone();
        cloned.find(".smallhead").hide();
        cloned.find(".avatar").hide();
        cloned.find(".sig").hide();
        commentHtml = cloned[0].outerHTML;
        setModalContent(commentHtml);

        jQuery(".quote-comment-modal").show();

        // jQuery(this).closest("div[id^=post]").hide();
        // updateProgressBarValue();
    });
}

function addButtonsToPosts() {
    let buttonsHtml = GM_getResourceText("addedPostButtonsHtml");
    jQuery("table[id^=post]").each(function () {
        jQuery(this).find(".smallhead").find("td").append(buttonsHtml);
    });

    registerPostButtonCallbacks();
}

loadStyle();
