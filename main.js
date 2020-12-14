console.log("main.js loaded...");

let default_settings = {
    Page_Header: "Checking Posts #{%olderPostId%} - #{%newestPostId%} ({%totalPosts%} posts)",
    Report_Header: "Checked Posts {%olderPostId%} - {%newestPostId%} ({%totalPosts%} posts) :tick: \n \n[hr] \n \n",
    //Report_Comment: "Comment: {%reviewerComment%}\n \n{%quotedPost%}\n \n[hr]",
    Report_Comment: "{%quotedPost%}\n \nComment: {%reviewerComment%}\n \n[hr]",
    Report_Footer: ""
};
// urls to determine active checker
let collage_checker_string = "collages.php";
let request_checker_string = "https://www.empornium.me/requests.php";
let torrent_checker_string = "https://www.empornium.me/torrents.php";
let forum_checker_string = "https://www.empornium.me/forum/recent";
//document.URL.indexOf("https://www.empornium.me/collages.php")

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
    console.log("hidePost - postIdString: " + postIdString);
    jQuery("#" + postIdString).hide();
    if (jQuery("#" + postIdString).prev().is("div.head")){
        jQuery("#" + postIdString).prev().hide();
    }

    undoArray.push(postIdString);
    updateProgressBarValue();
}

function undoHidePost() {
    
    let postIdString = undoArray.pop();
    console.log("hidePost - postIdString: " + postIdString);
    console.log(postIdString);
    jQuery("#" + postIdString).show();
    if (jQuery("#" + postIdString).prev().is("div.head")){
        jQuery("#" + postIdString).prev().show();
        jQuery("body").find(".post_content img.scale_image").attr("width","500");
    }

    updateProgressBarValue();
}

addMainMenuToDom();
scanCheck();
