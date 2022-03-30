const panels = document.querySelectorAll('.panel')
//puts each div into node list

panels.forEach((panel) => {
    
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')   
    })
})


function removeActiveClasses() {
    
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
 
}