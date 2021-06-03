let observer = new MutationObserver(() => {
    //Queryselector is waaaay too slow.
    document.getElementsByClassName('feed-shared-poll')[0].parentElement.remove();
})

//Set an observer on whole document body. Because "feed-shared-poll" may or may not exist at initial page load.
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
})