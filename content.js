let observer = new MutationObserver((entries) => {
    entries.forEach((element) => {
        element.target.classList.forEach(item => {
            if (item === "feed-shared-poll") {
                let item = document.querySelector(".feed-shared-poll");
                if (item) {
                    item.parentElement.remove();
                }
            }
        })
    })
})


//Set an observer on whole document body. Because "feed-shared-poll" may or may not exist at initial page load.
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
})