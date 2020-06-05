document.addEventListener('DOMContentLoaded', function() {

    console.log('are we linked up?')

    // [ ] select container div of html with javascript
    // [ ] create html paragpraph tag
    // [ ] insert text into paragraph tac
    // [ ] append paragraph element to selected container
    
    let container = document.querySelector('#container')
    
    let message = document.createElement('p')

    let headline = document.createElement('h1')
    
    headline.innerHTML = 'Welcome'
   
    message.innerHTML = 'Hello Sweet World'

   
    container.appendChild(headline)
    container.appendChild(message)

})


