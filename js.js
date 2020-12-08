
console.log("Disabling like functionality on this page...")

let disableAllCurrentMessageLiking = () => {
    let objs = document.querySelectorAll(".ZyFrc[role=button]");
    console.log(`Running on ${objs.length} elements...`)

    let f = 0;
    let s = 0;

    objs.forEach((e) => {

        if (e.getAttribute("removedlikes") == null) {
    
            var new_element = e.cloneNode(true);
            e.parentNode.replaceChild(new_element, e);
    
            new_element.setAttribute("removedlikes", "1");

            new_element.addEventListener("dblclick", () => {
                alert("Liking a message is being prevented right now. Uninstall extension and try again.")
            })

    
            f++;

        } else {
            s++;
        }
    
    });

    console.log(`Disabled like functionality on ${f} messages. Skipped ${s}`);
}

setInterval(disableAllCurrentMessageLiking, 2000)

let otherchat = () => {
    document.querySelectorAll("a.-qQT3").forEach((e) => {
        e.addEventListener("click", () => {
            console.log("new chat, clearing likes");
            setTimeout(disableAllCurrentMessageLiking, 1000);
            setTimeout(otherchat, 500);
        });
    });
};