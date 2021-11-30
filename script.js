
//variable [panels] grabs all the panel divs using querySelectorAll, creates a node list, similar to an array
const panels = document.querySelectorAll('.panel')

//using forEach takes in a function as an argument, passing a panel through
panels.forEach((panel) => {
    //on click, using event listener, run remove active classes function
    panel.addEventListener('click', () => {
        //removes active to each panel using custom function
        removeActiveClasses()
        //adds active to each panel
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    //since there is more than one panel, loops through them, removes 'active' class
    panels.forEach(panel => {
        //call remove using classList to 'active' class
        panel.classList.remove('active')
    })
}