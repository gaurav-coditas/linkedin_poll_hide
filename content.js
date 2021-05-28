let observer = new MutationObserver((entries) => {
    entries.forEach((e) => {
        e.target.classList.forEach(item => {
            if (item === "feed-shared-poll") {
                let item = document.querySelector(".feed-shared-poll");
                if (item) {
                    item.remove();
                }
            }
        });
    })
})

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
})