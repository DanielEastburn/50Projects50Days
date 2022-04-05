const button = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.input')

button.addEventListener('click', (e) => {
    
    // if (search.classList.length === 1){
    //     search.classList.add('active')
    // }
    // else{
    //     search.classList.remove('active')
    // }

    search.classList.toggle('active') // same as above
    input.focus()  
    
    console.log(search.classList)
})