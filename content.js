setInterval(() => { 
    console.log('hiding polls')
    Array.from(document.getElementsByClassName('feed-shared-poll')).forEach(item => { item.parentElement.style.display = 'none'; }) 
}, 3000)