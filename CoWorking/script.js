const contact = document.getElementById('contact')
const book = document.getElementById('book')
const book1 = document.getElementById('book1')
const book2 = document.getElementById('book2')
const closeTag = document.getElementById('closeTag')
const contactForm = document.getElementById('submitBtn')


book.addEventListener('click',()=>{
    contact.style.display = 'block'
})

book1.addEventListener('click',()=>{
    contact.style.display = 'block'
})

book2.addEventListener('click',()=>{
    contact.style.display = 'block'
})

closeTag.addEventListener('click',()=>{
    contact.style.display = 'none'
})

contactForm.addEventListener('submit', function(e){
    e.preventDefault()
    
})