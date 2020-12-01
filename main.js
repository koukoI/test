console.log("main.js loaded...");

let default_settings = {
    Page_Header: "Checking Posts #{%olderPostId%} - #{%newestPostId%} ({%totalPosts%} posts)",
    Report_Header: "Checked Posts {%olderPostId%} - {%newestPostId%} ({%totalPosts%} posts) :tick: \n \n",
    Report_Comment: "Comment:{%reviewerComment%}\n \n{%quotedPost%}\n \n[hr]",
    Report_Footer: ""
};

let user_settings = GM_SuperValue.get("user_settings");

// let settings = GM_SuperValue.get("settings");

// GM_SuperValue.delete("settings");

// GM_SuperValue.set("settings", settings);

// console.log(settings);

var undoArray = [];

// GM_deleteValue("isScaning");

function scanCheck() {
    let isScaning = GM_getValue("isScaning");
    if (isScaning === undefined) {
        isScaning = false;
    }

    if (isScaning) {
        scanPosts();
    }
}

function hidePost(postIdString) {
    jQuery("#" + postIdString).hide();
    undoArray.push(postIdString);
    updateProgressBarValue();
}

function undoHidePost() {
    let postIdString = undoArray.pop();
    jQuery("#" + postIdString).show();
    updateProgressBarValue();
}

addMainMenuToDom();
scanCheck();
