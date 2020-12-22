setInterval(function() { 
    var cross = document.getElementsByClassName("ytp-ad-overlay-close-container")[0]; 
    var skipAd = document.getElementsByClassName("ytp-ad-skip-button")[0]; 
    if (cross != undefined){
        cross.click(); 
    } 
    if (skipAd != undefined){
        skipAd.click();
    } 
}, 2000);

