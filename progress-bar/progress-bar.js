console.log("progress-bar.js loaded!");

function loadProgressBarStyle(){
    let style = GM_getResourceText("progressBarStyle");
    GM_addStyle (style);
}


function insertProgressBarHtml(){
    let progressBarHtml = GM_getResourceText("progressBarHtml");
    jQuery("#content").prepend(progressBarHtml);
}


function updateProgressBarValue(){
    let totalValue = -1;
    let currentValue = -1;
    if((document.URL.startsWith("https://www.empornium.me/collages.php") >= 0) || (document.URL.indexOf("https://www.empornium.me/forum/recent") >= 0) || (document.URL.indexOf("https://www.empornium.me/torrents.php?action=allcomments") >= 0)){
        totalValue = jQuery("table[id^=post]").length;
        currentValue = jQuery("table[id^=post]").filter(":hidden").length;
    } else {
        totalValue = jQuery("div[id^=post]").length;
        currentValue = jQuery("div[id^=post]").filter(":hidden").length;
    }
    let value = ((currentValue / totalValue) * 100) + "%";
    jQuery("#progress-bar").css("width",value)
    jQuery("#progress-bar-lable").html(currentValue + " Out Of " + totalValue);

}


loadProgressBarStyle();
