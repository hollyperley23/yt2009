// html5 support
var use_html5 = false;
var current_video = "";
if(location.href.indexOf("html5=1") !== -1) {
    use_html5 = true;
}

var video_change_event;
// patch in the html5 iframe
if(use_html5) {
    var old_id = "";
    video_change_event = setInterval(function() {
        if(current_video !== old_id) {
            setTimeout(function() {
                var html5_video = document.createElement("iframe")
                html5_video.src = "/xl/embed?video_id=" + current_video;
                html5_video.allowFullscreen = true;
                html5_video.className = "yt2009-full"
                document.querySelector(".xl-view-player-video").innerHTML = ""
                document.querySelector(".xl-view-player-video").appendChild(html5_video)
            }, 250)
        }
        old_id = current_video;
    }, 500)
}