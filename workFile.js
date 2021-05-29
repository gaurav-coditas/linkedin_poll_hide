let observer = new MutationObserver((entries) => {
    entries.forEach((element) => {
        if (element.target.classList.contains("feed-shared-poll")) {
            element.target.parentElement.remove();
        }
    })
})

//Set an observer on whole document body. Because "feed-shared-poll" may or may not exist at initial page load.
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
})