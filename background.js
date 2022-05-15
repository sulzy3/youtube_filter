while(true){setTimeout(() => {
    console.log("in");

    let nodeTitle = document.querySelectorAll("#video-title");
    let titles = [];
    for (let index = 0; index < nodeTitle.length; index++) {
        titles[index] = nodeTitle[index].text;
    }



    let nodes = document.querySelector("ytd-item-section-renderer.style-scope.ytd-section-list-renderer div#contents");
    console.log(nodes);


    function youtube_filter(videoTitle) {
        if (videoTitle.includes("HINDI"))
            return true

        return false
    }


    nodes.childNodes.forEach(node => {
        console.log(node);
        if (youtube_filter(node.querySelector("#video-title").text.toUpperCase())) {
            nodes.removeChild(node);
        }
    });

}, 3000);
}